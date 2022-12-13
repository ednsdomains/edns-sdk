import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IClassicalRegistrarController, IClassicalRegistrarControllerInterface } from "../IClassicalRegistrarController";
export declare class IClassicalRegistrarController__factory {
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
    static createInterface(): IClassicalRegistrarControllerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IClassicalRegistrarController;
}
