import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { INFTResolver, INFTResolverInterface } from "../INFTResolver";
export declare class INFTResolver__factory {
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
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): INFTResolverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): INFTResolver;
}
