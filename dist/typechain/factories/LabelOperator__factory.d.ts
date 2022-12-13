import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { LabelOperator, LabelOperatorInterface } from "../LabelOperator";
export declare class LabelOperator__factory {
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
    static createInterface(): LabelOperatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LabelOperator;
}
