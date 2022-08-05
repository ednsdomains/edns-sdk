import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISynchronizer, ISynchronizerInterface } from "../ISynchronizer";
export declare class ISynchronizer__factory {
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
    static createInterface(): ISynchronizerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISynchronizer;
}
