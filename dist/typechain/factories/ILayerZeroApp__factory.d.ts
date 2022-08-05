import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILayerZeroApp, ILayerZeroAppInterface } from "../ILayerZeroApp";
export declare class ILayerZeroApp__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ILayerZeroAppInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILayerZeroApp;
}
