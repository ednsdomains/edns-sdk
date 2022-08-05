import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISingletonRegistrar, ISingletonRegistrarInterface } from "../ISingletonRegistrar";
export declare class ISingletonRegistrar__factory {
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
    static createInterface(): ISingletonRegistrarInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISingletonRegistrar;
}
