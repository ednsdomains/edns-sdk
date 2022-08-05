import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ResolverBase, ResolverBaseInterface } from "../ResolverBase";
export declare class ResolverBase__factory {
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
    static createInterface(): ResolverBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ResolverBase;
}
