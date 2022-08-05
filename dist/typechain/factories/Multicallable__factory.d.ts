import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Multicallable, MulticallableInterface } from "../Multicallable";
export declare class Multicallable__factory {
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
    static createInterface(): MulticallableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Multicallable;
}
