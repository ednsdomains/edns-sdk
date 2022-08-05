import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { PointerInterface, PointerInterfaceInterface } from "../PointerInterface";
export declare class PointerInterface__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): PointerInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PointerInterface;
}
