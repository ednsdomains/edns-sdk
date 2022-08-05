import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IABIResolver, IABIResolverInterface } from "../IABIResolver";
export declare class IABIResolver__factory {
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
    static createInterface(): IABIResolverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IABIResolver;
}
