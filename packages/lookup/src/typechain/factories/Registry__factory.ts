/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Registry, RegistryInterface } from "../Registry";

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
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
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
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
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
    name: "PUBLIC_RESOLVER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REGISTRAR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [],
    name: "initialize",
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
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
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
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
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
        internalType: "bool",
        name: "enable_",
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
        name: "expiry_",
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
        name: "operator_",
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
        name: "operator_",
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
        name: "owner_",
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
        name: "owner_",
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
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "resolver_",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enable_",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "omni_",
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
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "resolver_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expiry_",
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
        name: "resolver_",
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
        name: "resolver_",
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
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061267e806100206000396000f3fe608060405234801561001057600080fd5b50600436106102485760003560e01c80636a8b54aa1161013b578063ae617427116100b8578063c1a287e21161007c578063c1a287e21461065d578063d547741f14610667578063f04e45f21461067a578063f68e9553146106a7578063fc199b46146106bc57600080fd5b8063ae61742714610552578063ba750ce21461059d578063bf23c407146105c4578063c17a95ee14610619578063c19c18181461064a57600080fd5b80638683612b116100ff5780638683612b146104e757806391d14854146104fa57806399fb78cc1461050d578063a06db7dc14610541578063a217fddf1461054a57600080fd5b80636a8b54aa1461046657806375b238fc146104a25780637e8c7f08146104b75780638129fc1c146104cc57806381805c49146104d457600080fd5b8063351827cf116101c957806348da62551161018d57806348da625514610407578063569cd5951461041a578063582dfbcb1461042d5780635b0fc9c314610440578063676d653d1461045357600080fd5b8063351827cf1461037257806336568abe1461038557806338a699a414610398578063413293ea146103ab5780634524ef82146103f457600080fd5b80631180db9d116102105780631180db9d146102f557806315b538e0146103085780631896f70a1461031b578063248a9ca31461032e5780632f2ff15d1461035f57600080fd5b80630178b8bf1461024d57806301ffc9a71461027d57806302571be3146102a0578063071e9e69146102b35780631059171e146102c8575b600080fd5b61026061025b366004611cc5565b6106cf565b6040516001600160a01b0390911681526020015b60405180910390f35b61029061028b366004611cde565b61073a565b6040519015158152602001610274565b6102606102ae366004611cc5565b610765565b6102c66102c1366004611dd7565b6107cb565b005b6102906102d6366004611cc5565b600090815260976020526040902060020154600160a01b900460ff1690565b6102c6610303366004611e57565b61099e565b6102c6610316366004611e83565b610a8d565b6102c6610329366004611f10565b610c19565b61035161033c366004611cc5565b60009081526065602052604090206001015490565b604051908152602001610274565b6102c661036d366004611f10565b610cda565b610260610380366004611f3c565b610d05565b6102c6610393366004611f10565b610d7d565b6102906103a6366004611cc5565b610dfb565b6102906103b9366004611f5e565b600082815260976020908152604080832086845260030182528083206001600160a01b038516845260040190915290205460ff169392505050565b610260610402366004611f3c565b610e21565b6102c6610415366004611f93565b610e99565b6102c6610428366004611f5e565b610fc2565b6102c661043b36600461201b565b6110cc565b6102c661044e366004611f10565b611153565b610290610461366004611e57565b611227565b610290610474366004611f3c565b6000908152609760209081526040808320938352600390930181528282203383526004019052205460ff1690565b61035160008051602061262983398151915281565b6103516000805160206125e983398151915281565b6102c6611268565b6102c66104e236600461203e565b611329565b6102906104f5366004611f3c565b611469565b610290610508366004611f10565b61149e565b61029061051b366004611f3c565b600090815260976020908152604080832093835260039384019091529020015442111590565b62278d00610351565b610351600081565b610290610560366004611e57565b6000908152609760209081526040808320938352600390930181528282209382526005909301835281812033825260010190925290205460ff1690565b6103517f997bcbd6aa6820912c364f01aab956e6e4608b005e33eac83543525c3011dc9a81565b6102906105d2366004612084565b6000828152609760209081526040808320868452600301825280832087845260050182528083206001600160a01b038516845260010190915290205460ff16949350505050565b610351610627366004611f3c565b600090815260976020908152604080832093835260039384019091529020015490565b6102c66106583660046120b8565b6114c9565b61035162278d0081565b6102c6610675366004611f10565b611690565b610290610688366004611cc5565b600090815260976020526040902060020154600160a81b900460ff1690565b61035160008051602061260983398151915281565b6102c66106ca366004611f5e565b6116b6565b60006106da82610dfb565b61071b5760405162461bcd60e51b815260206004820152600d60248201526c15131117d393d517d193d55391609a1b60448201526064015b60405180910390fd5b506000908152609760205260409020600201546001600160a01b031690565b60006001600160e01b03198216630328759160e41b148061075f575061075f82611797565b92915050565b600061077082610dfb565b6107ac5760405162461bcd60e51b815260206004820152600d60248201526c15131117d393d517d193d55391609a1b6044820152606401610712565b506000908152609760205260409020600101546001600160a01b031690565b6107e36000805160206125e98339815191523361149e565b6107ff5760405162461bcd60e51b8152600401610712906120ee565b61080f8580519060200120610dfb565b156108485760405162461bcd60e51b815260206004820152600960248201526815131117d1561254d560ba1b6044820152606401610712565b6001600160a01b0384166108905760405162461bcd60e51b815260206004820152600f60248201526e2aa72222a324a722a22fa7aba722a960891b6044820152606401610712565b6001600160a01b0383166108db5760405162461bcd60e51b81526020600482015260126024820152712aa72222a324a722a22fa922a9a7a62b22a960711b6044820152606401610712565b8451602080870191822060009081526097909152604090208651909161090391839190611c2c565b506001810180546001600160a01b0319166001600160a01b03878116919091179091556002820180549186166001600160a81b031990921691909117600160a01b851515021760ff60a81b1916600160a81b841515021790556040517f807bdce82f8c26328eadb3d2b362bb35a68fa667db027eb89a48863b79d5ee979061098e908890889061216d565b60405180910390a1505050505050565b6109b66000805160206126098339815191523361149e565b6109d25760405162461bcd60e51b815260040161071290612197565b6109dc8383611469565b6109f85760405162461bcd60e51b8152600401610712906121bf565b6000828152609760209081526040808320868452600390810190925290912001544290610a299062278d00906121ff565b1015610a685760405162461bcd60e51b815260206004820152600e60248201526d1113d350525397d156141254915160921b6044820152606401610712565b6000918252609760209081526040808420948452600394850190915290912090910155565b610aa56000805160206126098339815191523361149e565b610ac15760405162461bcd60e51b815260040161071290612197565b6001600160a01b038316610b095760405162461bcd60e51b815260206004820152600f60248201526e2aa72222a324a722a22fa7aba722a960891b6044820152606401610712565b6001600160a01b038216610b405783516020808601919091206000908152609790915260409020600201546001600160a01b031691505b610b508480519060200120610dfb565b610b6c5760405162461bcd60e51b815260040161071290612217565b83516020808601919091206000908152609782526040808220885189850190812084526003909101909352902086519091610ba991839190611c2c565b506001810180546001600160a01b038087166001600160a01b03199283161790925560028301805492861692909116919091179055600381018290556040517f255b54ad2244084f551c140d5e55f2c1ae72b02275cd0d1cc53f0bf9c0f04a709061098e9088908890889061223e565b610c316000805160206125e98339815191523361149e565b610c4d5760405162461bcd60e51b8152600401610712906120ee565b610c5682610dfb565b610c725760405162461bcd60e51b815260040161071290612217565b600082815260976020526040908190206002810180546001600160a01b0319166001600160a01b03851617905590517fd0422471ef17749f12fabcedc716aa8bd7a604705c09f5f359d739ef33e7d66b91610cce9184906122b7565b60405180910390a15050565b600082815260656020526040902060010154610cf681336117cc565b610d008383611830565b505050565b6000610d118383611469565b610d505760405162461bcd60e51b815260206004820152601060248201526f1113d350525397d393d517d193d5539160821b6044820152606401610712565b5060009081526097602090815260408083209383526003909301905220600201546001600160a01b031690565b6001600160a01b0381163314610ded5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610712565b610df782826118b6565b5050565b60008181526097602052604081208054829190610e179061227c565b9050119050919050565b6000610e2d8383611469565b610e6c5760405162461bcd60e51b815260206004820152601060248201526f1113d350525397d393d517d193d5539160821b6044820152606401610712565b5060009081526097602090815260408083209383526003909301905220600101546001600160a01b031690565b610ec37f997bcbd6aa6820912c364f01aab956e6e4608b005e33eac83543525c3011dc9a3361149e565b610eff5760405162461bcd60e51b815260206004820152600d60248201526c27a7262cafa922a9a7a62b22a960991b6044820152606401610712565b610f1782805190602001208280519060200120611469565b610f335760405162461bcd60e51b8152600401610712906121bf565b8051602080830191909120600090815260978252604080822085518685012083526003018352808220865187850190812084526005909101909352902084519091610f8091839190611c2c565b507fedf95a85107d81532620c2f5665dd69d8e608236eac07892e52c6a07cf71517c848484604051610fb493929190612351565b60405180910390a150505050565b610fda6000805160206126098339815191523361149e565b610ff65760405162461bcd60e51b815260040161071290612197565b6110008383611469565b61101c5760405162461bcd60e51b8152600401610712906121bf565b6000828152609760208181526040808420878552600381018352818520600180820180546001600160a01b0319166001600160a01b038a1617905583518085018552908152601760f91b818601529588905293835290517ff0bf3cb0573628f31c07648da039ecc21e6547f9d6adb80fe9595321676cdd08946110a3949390929101612403565b60408051601f19818403018152908290526110bf91849061216d565b60405180910390a1505050565b6110e46000805160206125e98339815191523361149e565b6111005760405162461bcd60e51b8152600401610712906120ee565b61110982610dfb565b6111255760405162461bcd60e51b815260040161071290612217565b6000918252609760205260409091206002018054911515600160a01b0260ff60a01b19909216919091179055565b61116b6000805160206125e98339815191523361149e565b6111875760405162461bcd60e51b8152600401610712906120ee565b61119082610dfb565b6111ac5760405162461bcd60e51b815260040161071290612217565b6000828152609760209081526040918290206001810180546001600160a01b0319166001600160a01b03861617905591517ff0bf3cb0573628f31c07648da039ecc21e6547f9d6adb80fe9595321676cdd089261120b92909101612436565b60408051601f1981840301815290829052610cce91849061216d565b600081815260976020908152604080832085845260030182528083208684526005019091528120805482919061125c9061227c565b90501190509392505050565b600054610100900460ff166112835760005460ff1615611287565b303b155b6112ea5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610712565b600054610100900460ff1615801561130c576000805461ffff19166101011790555b61131461191d565b8015611326576000805461ff00191690555b50565b6000838152609760209081526040808320878452600301909152902060010154849084906001600160a01b0316336001600160a01b03161461139a5760405162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b6044820152606401610712565b6113a48686611469565b6113c05760405162461bcd60e51b8152600401610712906121bf565b60008581526097602081815260408084208a85526003810183528185206001600160a01b038a168652600481018452828620805460ff19168a15151790558251808401845260018152601760f91b81860152958b905293835290517f4c594b83c270bce65adbed69ef32a62d11251744a9aa2d01b46e32048909c4829461144b949390929101612403565b60408051601f198184030181529082905261098e9187908790612442565b6000818152609760209081526040808320858452600301909152812080548291906114939061227c565b905011905092915050565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6000838152609760209081526040808320878452600301909152902060010154849084906001600160a01b0316336001600160a01b0316148061153357506000818152609760209081526040808320858452600301825280832033845260040190915290205460ff165b61156f5760405162461bcd60e51b815260206004820152600d60248201526c27a7262cafa7a822a920aa27a960991b6044820152606401610712565b61157a878787611227565b6115b75760405162461bcd60e51b815260206004820152600e60248201526d1213d4d517d393d517d1561254d560921b6044820152606401610712565b60008581526097602081815260408084208a85526003810183528185208c86526005810184528286206001600160a01b038b16875260018082018652848820805460ff19168c151517905584518086018652818152601760f91b8188018190528651808801885292835282880152978d905295855292517f4c594b83c270bce65adbed69ef32a62d11251744a9aa2d01b46e32048909c48296611661969495909492939101612475565b60408051601f198184030181529082905261167f9187908790612442565b60405180910390a150505050505050565b6000828152606560205260409020600101546116ac81336117cc565b610d0083836118b6565b6116ce6000805160206125e98339815191523361149e565b6116ea5760405162461bcd60e51b8152600401610712906120ee565b6116f48383611469565b6117105760405162461bcd60e51b8152600401610712906121bf565b60008281526097602081815260408084208785526003810183528185206002810180546001600160a01b0319166001600160a01b0389161790558251808401845260018152601760f91b818601529588905293835290517fd0422471ef17749f12fabcedc716aa8bd7a604705c09f5f359d739ef33e7d66b946110a3949390929101612403565b60006001600160e01b03198216637965db0b60e01b148061075f57506301ffc9a760e01b6001600160e01b031983161461075f565b6117d6828261149e565b610df7576117ee816001600160a01b0316601461195e565b6117f983602061195e565b60405160200161180a9291906124c9565b60408051601f198184030181529082905262461bcd60e51b82526107129160040161253e565b61183a828261149e565b610df75760008281526065602090815260408083206001600160a01b03851684529091529020805460ff191660011790556118723390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6118c0828261149e565b15610df75760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600054610100900460ff166119445760405162461bcd60e51b815260040161071290612551565b61194c611b01565b611954611bb0565b61195c611bb0565b565b6060600061196d83600261259c565b6119789060026121ff565b67ffffffffffffffff81111561199057611990611d08565b6040519080825280601f01601f1916602001820160405280156119ba576020820181803683370190505b509050600360fc1b816000815181106119d5576119d56125bb565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611a0457611a046125bb565b60200101906001600160f81b031916908160001a9053506000611a2884600261259c565b611a339060016121ff565b90505b6001811115611aab576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611a6757611a676125bb565b1a60f81b828281518110611a7d57611a7d6125bb565b60200101906001600160f81b031916908160001a90535060049490941c93611aa4816125d1565b9050611a36565b508315611afa5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610712565b9392505050565b600054610100900460ff16611b285760405162461bcd60e51b815260040161071290612551565b611b416000805160206126298339815191526000611bd7565b611b67600080516020612609833981519152600080516020612629833981519152611bd7565b611b8d6000805160206125e9833981519152600080516020612629833981519152611bd7565b611b98600033611c22565b61195c60008051602061262983398151915233611c22565b600054610100900460ff1661195c5760405162461bcd60e51b815260040161071290612551565b600082815260656020526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b610df78282611830565b828054611c389061227c565b90600052602060002090601f016020900481019282611c5a5760008555611ca0565b82601f10611c7357805160ff1916838001178555611ca0565b82800160010185558215611ca0579182015b82811115611ca0578251825591602001919060010190611c85565b50611cac929150611cb0565b5090565b5b80821115611cac5760008155600101611cb1565b600060208284031215611cd757600080fd5b5035919050565b600060208284031215611cf057600080fd5b81356001600160e01b031981168114611afa57600080fd5b634e487b7160e01b600052604160045260246000fd5b600082601f830112611d2f57600080fd5b813567ffffffffffffffff80821115611d4a57611d4a611d08565b604051601f8301601f19908116603f01168101908282118183101715611d7257611d72611d08565b81604052838152866020858801011115611d8b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b80356001600160a01b0381168114611dc257600080fd5b919050565b80358015158114611dc257600080fd5b600080600080600060a08688031215611def57600080fd5b853567ffffffffffffffff811115611e0657600080fd5b611e1288828901611d1e565b955050611e2160208701611dab565b9350611e2f60408701611dab565b9250611e3d60608701611dc7565b9150611e4b60808701611dc7565b90509295509295909350565b600080600060608486031215611e6c57600080fd5b505081359360208301359350604090920135919050565b600080600080600060a08688031215611e9b57600080fd5b853567ffffffffffffffff80821115611eb357600080fd5b611ebf89838a01611d1e565b96506020880135915080821115611ed557600080fd5b50611ee288828901611d1e565b945050611ef160408701611dab565b9250611eff60608701611dab565b949793965091946080013592915050565b60008060408385031215611f2357600080fd5b82359150611f3360208401611dab565b90509250929050565b60008060408385031215611f4f57600080fd5b50508035926020909101359150565b600080600060608486031215611f7357600080fd5b8335925060208401359150611f8a60408501611dab565b90509250925092565b600080600060608486031215611fa857600080fd5b833567ffffffffffffffff80821115611fc057600080fd5b611fcc87838801611d1e565b94506020860135915080821115611fe257600080fd5b611fee87838801611d1e565b9350604086013591508082111561200457600080fd5b5061201186828701611d1e565b9150509250925092565b6000806040838503121561202e57600080fd5b82359150611f3360208401611dc7565b6000806000806080858703121561205457600080fd5b843593506020850135925061206b60408601611dab565b915061207960608601611dc7565b905092959194509250565b6000806000806080858703121561209a57600080fd5b84359350602085013592506040850135915061207960608601611dab565b600080600080600060a086880312156120d057600080fd5b853594506020860135935060408601359250611e3d60608701611dab565b60208082526009908201526813d3931657d493d3d560ba1b604082015260600190565b60005b8381101561212c578181015183820152602001612114565b8381111561213b576000848401525b50505050565b60008151808452612159816020860160208601612111565b601f01601f19169290920160200192915050565b6040815260006121806040830185612141565b905060018060a01b03831660208301529392505050565b6020808252600e908201526d27a7262cafa922a3a4a9aa2920a960911b604082015260600190565b60208082526010908201526f1113d350525397d393d517d1561254d560821b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b60008219821115612212576122126121e9565b500190565b6020808252600d908201526c15131117d393d517d1561254d5609a1b604082015260600190565b6060815260006122516060830186612141565b82810360208401526122638186612141565b91505060018060a01b0383166040830152949350505050565b600181811c9082168061229057607f821691505b602082108114156122b157634e487b7160e01b600052602260045260246000fd5b50919050565b6040815260008084546122c98161227c565b80604086015260606001808416600081146122eb57600181146122ff57612330565b60ff19851688840152608088019550612330565b8960005260208060002060005b868110156123275781548b820187015290840190820161230c565b8a018501975050505b505050506001600160a01b0394909416602093909301929092525092915050565b6060815260006123646060830186612141565b82810360208401526123768186612141565b9050828103604084015261238a8185612141565b9695505050505050565b600081546123a18161227c565b600182811680156123b957600181146123ca576123f9565b60ff198416875282870194506123f9565b8560005260208060002060005b858110156123f05781548a8201529084019082016123d7565b50505082870194505b5050505092915050565b600061240f8286612394565b845161241f818360208901612111565b61242b81830186612394565b979650505050505050565b6000611afa8284612394565b6060815260006124556060830186612141565b6001600160a01b0394909416602083015250901515604090910152919050565b60006124818288612394565b8651612491818360208b01612111565b61249d81830188612394565b91505084516124b0818360208901612111565b6124bc81830186612394565b9998505050505050505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612501816017850160208801612111565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351612532816028840160208801612111565b01602801949350505050565b602081526000611afa6020830184612141565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008160001904831182151516156125b6576125b66121e9565b500290565b634e487b7160e01b600052603260045260246000fd5b6000816125e0576125e06121e9565b50600019019056fe79e553c6f53701daa99614646285e66adb98ff0fcc1ef165dd2718e5c873bee6edcc084d3dcd65a1f7f23c65c46722faca6953d28e43150a467cf43e5c309238a49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775a2646970667358221220a4c4df2002c94689c79ce832689842884e61a2c4f79ff1b8cd318befab68c0d964736f6c63430008090033";

export class Registry__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Registry> {
    return super.deploy(overrides || {}) as Promise<Registry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Registry {
    return super.attach(address) as Registry;
  }
  connect(signer: Signer): Registry__factory {
    return super.connect(signer) as Registry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RegistryInterface {
    return new utils.Interface(_abi) as RegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Registry {
    return new Contract(address, _abi, signerOrProvider) as Registry;
  }
}