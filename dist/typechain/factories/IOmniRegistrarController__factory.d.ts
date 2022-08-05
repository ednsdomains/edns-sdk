import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IOmniRegistrarController, IOmniRegistrarControllerInterface } from "../IOmniRegistrarController";
export declare class IOmniRegistrarController__factory {
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
    static createInterface(): IOmniRegistrarControllerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOmniRegistrarController;
}
