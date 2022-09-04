/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRegistry, IRegistryInterface } from "../IRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "domain",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "tld",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NewDomain",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "host",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "domain",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "tld",
        type: "bytes",
      },
    ],
    name: "NewHost",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "fqdn",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "NewOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "fqdn",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newResolver",
        type: "address",
      },
    ],
    name: "NewResolver",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "tld",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NewTld",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "fqdn",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "SetOperator",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "enable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "host",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "expiry",
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
    name: "gracePeriod",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "live",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "omni",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "operator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "operator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "host",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "operator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "host",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "operator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "owner",
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
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "owner",
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
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "resolver",
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
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "resolver",
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
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "enable",
        type: "bool",
      },
    ],
    name: "setEnable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
    ],
    name: "setExpiry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "host",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "address",
        name: "resolver",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enable",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "omni",
        type: "bool",
      },
    ],
    name: "setRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "domain",
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
        internalType: "address",
        name: "resolver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
    ],
    name: "setRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "host",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "domain",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "tld",
        type: "bytes",
      },
    ],
    name: "setRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
    ],
    name: "setResolver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
    ],
    name: "setResolver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IRegistryInterface {
    return new utils.Interface(_abi) as IRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRegistry {
    return new Contract(address, _abi, signerOrProvider) as IRegistry;
  }
}