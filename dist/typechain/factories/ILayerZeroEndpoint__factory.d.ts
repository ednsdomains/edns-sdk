import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILayerZeroEndpoint, ILayerZeroEndpointInterface } from "../ILayerZeroEndpoint";
export declare class ILayerZeroEndpoint__factory {
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
    static createInterface(): ILayerZeroEndpointInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILayerZeroEndpoint;
}
