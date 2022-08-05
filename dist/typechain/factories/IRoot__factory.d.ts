import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRoot, IRootInterface } from "../IRoot";
export declare class IRoot__factory {
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
    static createInterface(): IRootInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRoot;
}
