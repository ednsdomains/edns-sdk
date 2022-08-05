import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILayerZeroUserApplicationConfig, ILayerZeroUserApplicationConfigInterface } from "../ILayerZeroUserApplicationConfig";
export declare class ILayerZeroUserApplicationConfig__factory {
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
    static createInterface(): ILayerZeroUserApplicationConfigInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILayerZeroUserApplicationConfig;
}
