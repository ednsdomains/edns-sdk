import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ENSResolver, ENSResolverInterface } from "../ENSResolver";
export declare class ENSResolver__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ENSResolverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ENSResolver;
}
