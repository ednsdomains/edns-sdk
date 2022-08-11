
import {ethers} from "ethers";
import {Resolver__factory as ResolverFactory} from "../typechain/factories/Resolver__factory";
import {namehash} from "./namehash";
import {formatsByName} from "@ensdomains/address-encoder";
export enum TextType {
    EMAIL = 'email',
    URL = 'url',
    AVATAR = 'avatar',
    DESCRIPTION = 'description',
    NOTICE = 'notice',
    KEYWORDS = 'keywords',
    DISCORD = 'discord',
    GITHUB = 'github',
    REDDIT = 'reddit',
    TWITTER = 'twitter',
    TELEGRAM = 'telegram',
    DELEGATE = 'delegate',
}
const LookUpText = async (domain: string, type: TextType): Promise<string | undefined> => {
    const RESOLVER_CONTRACT_ADDRESS = '0x3c2DAab0AF88B0c5505ccB585e04FB33d7C80144';
    const RPC_ENDPOINT = 'https://polygon-rpc.com/';
    const provider = new ethers.providers.JsonRpcProvider(RPC_ENDPOINT);
    const Resolver = ResolverFactory.connect(RESOLVER_CONTRACT_ADDRESS, provider);
    const hash = namehash(domain);
    const text_ = await Resolver.callStatic.text(hash, type);
    return !!text_ ? text_ : undefined;
}
const WriteText = async (domain: string, type: TextType,text:string,signer: ethers.Signer): Promise<ethers.ContractTransaction> => {
    const RESOLVER_CONTRACT_ADDRESS = '0x3c2DAab0AF88B0c5505ccB585e04FB33d7C80144';
    const Resolver = ResolverFactory.connect(RESOLVER_CONTRACT_ADDRESS, signer);
    const hash = namehash(domain);
    const transaction = await Resolver.setText(hash,type,text);
    return transaction
}
export {LookUpText,WriteText};
