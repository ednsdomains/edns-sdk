import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { BaseResolver, BaseResolverInterface } from "../BaseResolver";
export declare class BaseResolver__factory {
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
    static createInterface(): BaseResolverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseResolver;
}
