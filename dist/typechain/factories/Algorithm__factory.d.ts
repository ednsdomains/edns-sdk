import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Algorithm, AlgorithmInterface } from "../Algorithm";
export declare class Algorithm__factory {
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
    static createInterface(): AlgorithmInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Algorithm;
}
