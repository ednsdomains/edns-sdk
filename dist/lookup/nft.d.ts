import { ethers } from "ethers";
interface INFTRecord {
    chainID: number;
    contractAddress: string;
    tokenID: string;
}
export declare const setNFT: (domain: string, chainID: number, contractAddress: string, tokenId: number, signer: ethers.Signer) => Promise<ethers.Transaction | Error>;
export declare const getNFT: (domain: string, chainID: number) => Promise<INFTRecord | Error>;
export {};
