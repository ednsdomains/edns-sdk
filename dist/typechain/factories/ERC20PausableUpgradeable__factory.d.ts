import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC20PausableUpgradeable, ERC20PausableUpgradeableInterface } from "../ERC20PausableUpgradeable";
export declare class ERC20PausableUpgradeable__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): ERC20PausableUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20PausableUpgradeable;
}
