import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { LabelValidator, LabelValidatorInterface } from "../LabelValidator";
export declare class LabelValidator__factory {
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
    static createInterface(): LabelValidatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LabelValidator;
}
