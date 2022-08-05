import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ChainlinkClient, ChainlinkClientInterface } from "../ChainlinkClient";
export declare class ChainlinkClient__factory {
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): ChainlinkClientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainlinkClient;
}
