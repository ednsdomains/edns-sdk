import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC4907, IERC4907Interface } from "../IERC4907";
export declare class IERC4907__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): IERC4907Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC4907;
}
