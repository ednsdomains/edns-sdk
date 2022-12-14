import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { MulticallUpgradeable, MulticallUpgradeableInterface } from "../MulticallUpgradeable";
export declare class MulticallUpgradeable__factory {
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
    static createInterface(): MulticallUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MulticallUpgradeable;
}
