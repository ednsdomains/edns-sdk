import {formatsByName} from "@ensdomains/address-encoder";
import {ethers} from "ethers";
import {Resolver, Resolver__factory as ResolverFactory} from "../typechain";
import {namehash} from "./namehash";
import {RESOLVER_CONTRACT_ADDRESS, RPC_ENDPOINT} from "../web3/useContract";

const LookupAddress = async (domain: string, coinName: string): Promise<string | undefined> => {
    const provider = new ethers.providers.JsonRpcProvider(RPC_ENDPOINT);
    const Resolver = ResolverFactory.connect(RESOLVER_CONTRACT_ADDRESS, provider);
    const hash = namehash(domain);
    const address_ = await Resolver.callStatic['addr(bytes32,uint256)'](hash, formatsByName[coinName].coinType);
    if (address_ !== '0x') {
        if (ethers.utils.isAddress(address_)) {
            return address_;
        } else {
            return formatsByName[coinName].encoder(Buffer.from(ethers.utils.toUtf8String(address_), 'hex'));
        }
    } else {
        return undefined;
    }
}
const WriteAddress = async (domain: string, coinName: string,address:string,signer: ethers.Signer): Promise<ethers.ContractTransaction> => {
    // const RESOLVER_CONTRACT_ADDRESS = '0x3c2DAab0AF88B0c5505ccB585e04FB33d7C80144';
    const Resolver = ResolverFactory.connect(RESOLVER_CONTRACT_ADDRESS, signer);
    const hash = namehash(domain);
    const transaction = await Resolver["setAddr(bytes32,uint256,bytes)"](hash, formatsByName[coinName].coinType,(address));
    return transaction
}
export {LookupAddress, WriteAddress};
