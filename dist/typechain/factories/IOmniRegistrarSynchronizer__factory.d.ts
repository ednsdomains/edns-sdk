import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IOmniRegistrarSynchronizer, IOmniRegistrarSynchronizerInterface } from "../IOmniRegistrarSynchronizer";
export declare class IOmniRegistrarSynchronizer__factory {
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
    static createInterface(): IOmniRegistrarSynchronizerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOmniRegistrarSynchronizer;
}
