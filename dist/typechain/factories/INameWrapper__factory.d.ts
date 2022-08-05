import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { INameWrapper, INameWrapperInterface } from "../INameWrapper";
export declare class INameWrapper__factory {
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
    static createInterface(): INameWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): INameWrapper;
}
