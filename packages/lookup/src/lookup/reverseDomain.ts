import {formatsByName} from "@ensdomains/address-encoder";
import {ethers} from "ethers";
import {
    DefaultReverseResolver__factory, PublicResolver__factory, ReverseRegistrar__factory, ReverseResolver__factory,
} from "../typechain";

const LookupDomainFromAddress = async (address: string): Promise<string | undefined> => {
    const PUBLIC_RESOLVER_CONTRACT_ADDRESS = '0xD986F9083F006D0E2d08c9F22247b4a0a213146D'
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

const SetReverseDomain = async (domain: string,signerOrProvider:ethers.providers.Provider | ethers.Signer): Promise<ethers.Transaction> => {
    const REVERSE_REGISTRAR_CONTRACT_ADDRESS = '0xD986F9083F006D0E2d08c9F22247b4a0a213146D'
    const Registrar = ReverseRegistrar__factory.connect(REVERSE_REGISTRAR_CONTRACT_ADDRESS, signerOrProvider);
    const transaction = await Registrar.setName(domain)
    return transaction;
}
export {LookupDomainFromAddress,SetReverseDomain};
