import { AddressTypes } from "./addressTypes.interface";

export interface IContract {
    chainId: number;
    addresses: AddressTypes;
}