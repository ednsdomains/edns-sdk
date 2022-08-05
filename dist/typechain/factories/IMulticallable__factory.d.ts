import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMulticallable, IMulticallableInterface } from "../IMulticallable";
export declare class IMulticallable__factory {
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
    static createInterface(): IMulticallableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMulticallable;
}
