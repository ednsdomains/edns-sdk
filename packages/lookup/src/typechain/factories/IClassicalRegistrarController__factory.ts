/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IClassicalRegistrarController,
  IClassicalRegistrarControllerInterface,
} from "../IClassicalRegistrarController";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "tld",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "expires",
        type: "uint64",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "tld",
        type: "bytes",
      },
      {
        internalType: "uint64",
        name: "expires",
        type: "uint64",
      },
    ],
    name: "renew",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IClassicalRegistrarController__factory {
  static readonly abi = _abi;
  static createInterface(): IClassicalRegistrarControllerInterface {
    return new utils.Interface(_abi) as IClassicalRegistrarControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IClassicalRegistrarController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IClassicalRegistrarController;
  }
}
