import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ChainlinkRequestInterface, ChainlinkRequestInterfaceInterface } from "../ChainlinkRequestInterface";
export declare class ChainlinkRequestInterface__factory {
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
    static createInterface(): ChainlinkRequestInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainlinkRequestInterface;
}
