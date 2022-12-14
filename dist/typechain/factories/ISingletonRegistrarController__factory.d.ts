import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISingletonRegistrarController, ISingletonRegistrarControllerInterface } from "../ISingletonRegistrarController";
export declare class ISingletonRegistrarController__factory {
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
    static createInterface(): ISingletonRegistrarControllerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISingletonRegistrarController;
}
