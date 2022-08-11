import { ethers } from "ethers";
declare const LookupAddress: (domain: string, coinName: string) => Promise<string | undefined>;
declare const WriteAddress: (domain: string, coinName: string, address: string, signer: ethers.Signer) => Promise<ethers.ContractTransaction>;
export { LookupAddress, WriteAddress };
