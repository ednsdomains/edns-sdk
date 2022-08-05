import {formatsByName} from "@ensdomains/address-encoder";
import {ethers} from "ethers";
import {Resolver, Resolver__factory as ResolverFactory} from "../typechain";
import {namehash} from "./namehash";

const LookupAddress = async (domain: string, coinName: string): Promise<string | undefined> => {
    const RESOLVER_CONTRACT_ADDRESS = '0x3c2DAab0AF88B0c5505ccB585e04FB33d7C80144';
    const RPC_ENDPOINT = 'https://polygon-rpc.com/';
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
export {LookupAddress};
