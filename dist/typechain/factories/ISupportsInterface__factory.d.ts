import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISupportsInterface, ISupportsInterfaceInterface } from "../ISupportsInterface";
export declare class ISupportsInterface__factory {
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
    static createInterface(): ISupportsInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISupportsInterface;
}
