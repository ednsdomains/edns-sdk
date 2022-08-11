import { ethers } from "ethers";
export declare enum TextType {
    EMAIL = "email",
    URL = "url",
    AVATAR = "avatar",
    DESCRIPTION = "description",
    NOTICE = "notice",
    KEYWORDS = "keywords",
    DISCORD = "discord",
    GITHUB = "github",
    REDDIT = "reddit",
    TWITTER = "twitter",
    TELEGRAM = "telegram",
    DELEGATE = "delegate"
}
declare const LookUpText: (domain: string, type: TextType) => Promise<string | undefined>;
declare const WriteText: (domain: string, type: TextType, text: string, signer: ethers.Signer) => Promise<ethers.ContractTransaction>;
export { LookUpText, WriteText };
