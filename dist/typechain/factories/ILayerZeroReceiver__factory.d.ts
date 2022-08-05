import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILayerZeroReceiver, ILayerZeroReceiverInterface } from "../ILayerZeroReceiver";
export declare class ILayerZeroReceiver__factory {
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
    static createInterface(): ILayerZeroReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILayerZeroReceiver;
}
