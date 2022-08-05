import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPublicResolverSynchronizer, IPublicResolverSynchronizerInterface } from "../IPublicResolverSynchronizer";
export declare class IPublicResolverSynchronizer__factory {
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
    static createInterface(): IPublicResolverSynchronizerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPublicResolverSynchronizer;
}
