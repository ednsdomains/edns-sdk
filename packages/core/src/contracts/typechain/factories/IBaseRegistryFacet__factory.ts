/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBaseRegistryFacet,
  IBaseRegistryFacetInterface,
} from "../IBaseRegistryFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "wrapper",
        type: "address",
      },
    ],
    name: "SetDefaultWrapper",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "mortgage",
        type: "address",
      },
    ],
    name: "SetMortgage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "resolver",
        type: "address",
      },
    ],
    name: "SetPublicResolver",
    type: "event",
  },
  {
    inputs: [],
    name: "getDefaultWrapper",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGracePeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMortgage",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPublicResolver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getTokenRecord",
    outputs: [
      {
        components: [
          {
            internalType: "enum RecordKind",
            name: "kind",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "tld",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "domain",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "host",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenRecord",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "defaultWrapper",
        type: "address",
      },
    ],
    name: "setDefaultWrapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mortgage",
        type: "address",
      },
    ],
    name: "setMortgage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "publicResolver",
        type: "address",
      },
    ],
    name: "setPublicResolver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBaseRegistryFacet__factory {
  static readonly abi = _abi;
  static createInterface(): IBaseRegistryFacetInterface {
    return new utils.Interface(_abi) as IBaseRegistryFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBaseRegistryFacet {
    return new Contract(address, _abi, signerOrProvider) as IBaseRegistryFacet;
  }
}
