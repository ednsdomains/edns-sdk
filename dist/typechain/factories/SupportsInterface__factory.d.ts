import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { SupportsInterface, SupportsInterfaceInterface } from "../SupportsInterface";
export declare class SupportsInterface__factory {
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
    static createInterface(): SupportsInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SupportsInterface;
}
