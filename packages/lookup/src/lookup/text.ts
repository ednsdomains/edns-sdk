
import {ethers} from "ethers";
import {Resolver__factory as ResolverFactory} from "../typechain/factories/Resolver__factory";
import {namehash} from "./namehash";
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
export {LookUpText};
