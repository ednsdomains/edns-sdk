import { ethers } from "ethers";
declare const LookupDomainFromAddress: (address: string) => Promise<string | undefined>;
declare const SetReverseDomain: (domain: string, signer: ethers.Signer) => Promise<ethers.Transaction | Error>;
declare const Reclaim: (domain: string, signer: ethers.Signer, tokenID: string) => Promise<ethers.Transaction>;
export { LookupDomainFromAddress, SetReverseDomain, Reclaim };
