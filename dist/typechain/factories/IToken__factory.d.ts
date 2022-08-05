import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IToken, ITokenInterface } from "../IToken";
export declare class IToken__factory {
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
    static createInterface(): ITokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IToken;
}
