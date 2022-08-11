import {formatsByName} from "@ensdomains/address-encoder";
import {BigNumber, ethers} from "ethers";
import {
    BaseRegistrarImplementation__factory,
    DefaultReverseResolver__factory, EDNSRegistrarController__factory,
    EDNSRegistry__factory,
    PublicResolver__factory,
    ReverseRegistrar__factory,
    ReverseResolver__factory,
} from "../typechain";
import {namehash} from "./namehash";

const LookupDomainFromAddress = async (address: string): Promise<string | undefined> => {
    const PUBLIC_RESOLVER_CONTRACT_ADDRESS = '0x3c2DAab0AF88B0c5505ccB585e04FB33d7C80144'
    const REVERSE_REGISTRAR_CONTRACT_ADDRESS = '0xD986F9083F006D0E2d08c9F22247b4a0a213146D'
    const RPC_ENDPOINT = 'https://polygon-rpc.com/';
    //Get Contract
    const provider = new ethers.providers.JsonRpcProvider(RPC_ENDPOINT);
    const DefaultReverseResolver = PublicResolver__factory.connect(PUBLIC_RESOLVER_CONTRACT_ADDRESS, provider);
    const Registrar = ReverseRegistrar__factory.connect(REVERSE_REGISTRAR_CONTRACT_ADDRESS, provider);
    //Get node
    const node = await Registrar.callStatic.node(address)
    //Get domain
    const domain = await DefaultReverseResolver.callStatic.name(node)
    return domain;
}

const SetReverseDomain = async (domain: string,signer: ethers.Signer): Promise<ethers.Transaction|Error> => {
    const REVERSE_REGISTRAR_CONTRACT_ADDRESS = '0xD986F9083F006D0E2d08c9F22247b4a0a213146D'
    const Registrar = ReverseRegistrar__factory.connect(REVERSE_REGISTRAR_CONTRACT_ADDRESS, signer);
    const sender = await signer.getAddress()
    const isOwner = await ownerOfDomain(domain,sender);
    if(isOwner instanceof Error){
        throw isOwner
    }else {
        const transaction = await Registrar.setName(domain)
        return transaction;
    }
}

const ownerOfDomain = async (domain:string,senderAddress:string): Promise<boolean|Error>=>{
    const REGISTRY_CONTRACT_ADDRESS = '0x7c5DbFE487D01BC0C75704dBfD334198E6AB2D12'
    const RPC_ENDPOINT = 'https://polygon-rpc.com/';
    const provider = new ethers.providers.JsonRpcProvider(RPC_ENDPOINT);
    const Regisiry = EDNSRegistry__factory.connect(REGISTRY_CONTRACT_ADDRESS, provider);
    const domainOwner = await Regisiry.callStatic.owner(namehash(domain))
    if( domainOwner != undefined &&  domainOwner != "0x0000000000000000000000000000000000000000" ){
        if(domainOwner == senderAddress){
            return true
        }else {
            console.log("domainOwner",domainOwner)
            console.log("senderAddress",senderAddress)
            return new Error('Sender is no Owner');
        }
    }else{
        return new Error('Domain Not Found');
    }
}
const Reclaim  = async (domain: string,signer: ethers.Signer,tokenID:string): Promise<ethers.Transaction> => {
    const [name, tld] = domain.split('.');
    // const basenode = ethers.utils.namehash(tld);
    const REGISTRAR_CONTRACT_ADDRESS = '0x53a0018f919bde9C254bda697966C5f448ffDDcB'
    const Registrar = BaseRegistrarImplementation__factory.connect(REGISTRAR_CONTRACT_ADDRESS, signer);
    const RegistrarController = EDNSRegistrarController__factory.connect("0x8C856f71d71e8CF4AD9A44cDC426b09e315c6A6a", signer);
    const tokenId = BigNumber.from(tokenID);
    const sender = await signer.getAddress()
    const basenode = await RegistrarController.tlds(ethers.utils.toUtf8Bytes(tld));
    const transaction = await Registrar.reclaim(tokenId,basenode,sender)
    return transaction
}
export {LookupDomainFromAddress,SetReverseDomain,Reclaim};
