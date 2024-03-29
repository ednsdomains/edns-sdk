/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AccessControlFacet,
  AccessControlFacetInterface,
} from "../AccessControlFacet";

const _abi = [
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
    name: "BRIDGE_ROLE",
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
    name: "OPERATOR_ROLE",
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
    inputs: [],
    name: "WRAPPER_ROLE",
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
        internalType: "bytes4",
        name: "interfaceId",
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
  "0x608060405234801561001057600080fd5b506108db806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80637e8c7f081161008c578063b5bfddea11610066578063b5bfddea146101d5578063d547741f146101fc578063f5b541a61461020f578063f68e95531461023657600080fd5b80637e8c7f081461019357806391d14854146101ba578063a217fddf146101cd57600080fd5b806301ffc9a7146100d4578063248a9ca3146100fc5780632f2ff15d1461011d57806336568abe1461013257806341ce72481461014557806375b238fc1461016c575b600080fd5b6100e76100e23660046106b7565b61025d565b60405190151581526020015b60405180910390f35b61010f61010a3660046106e1565b610294565b6040519081526020016100f3565b61013061012b3660046106fa565b6102b6565b005b6101306101403660046106fa565b6102d7565b61010f7f44674c7a3dadbc647cc1c715644fb9e12bedb87e49073fca9375f19f3840275181565b61010f7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b61010f7f79e553c6f53701daa99614646285e66adb98ff0fcc1ef165dd2718e5c873bee681565b6100e76101c83660046106fa565b61035a565b61010f600081565b61010f7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f81565b61013061020a3660046106fa565b610392565b61010f7f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b92981565b61010f7fedcc084d3dcd65a1f7f23c65c46722faca6953d28e43150a467cf43e5c30923881565b60006001600160e01b03198216637965db0b60e01b148061028e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000908152600080516020610886833981519152602052604090206001015490565b6102bf82610294565b6102c8816103ae565b6102d283836103bb565b505050565b6001600160a01b038116331461034c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6103568282610433565b5050565b6000918252600080516020610886833981519152602090815260408084206001600160a01b0393909316845291905290205460ff1690565b61039b82610294565b6103a4816103ae565b6102d28383610433565b6103b881336104a9565b50565b6103c5828261035a565b610356576000828152600080516020610886833981519152602081815260408084206001600160a01b0386168086529252808420805460ff19166001179055519192339286917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d91a4505050565b61043d828261035a565b15610356576000828152600080516020610886833981519152602081815260408084206001600160a01b0386168086529252808420805460ff19169055519192339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b91a4505050565b6104b3828261035a565b610356576104c081610502565b6104cb836020610514565b6040516020016104dc92919061075a565b60408051601f198184030181529082905262461bcd60e51b8252610343916004016107cf565b606061028e6001600160a01b03831660145b60606000610523836002610818565b61052e90600261082f565b67ffffffffffffffff81111561054657610546610842565b6040519080825280601f01601f191660200182016040528015610570576020820181803683370190505b509050600360fc1b8160008151811061058b5761058b610858565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106105ba576105ba610858565b60200101906001600160f81b031916908160001a90535060006105de846002610818565b6105e990600161082f565b90505b6001811115610661576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061061d5761061d610858565b1a60f81b82828151811061063357610633610858565b60200101906001600160f81b031916908160001a90535060049490941c9361065a8161086e565b90506105ec565b5083156106b05760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610343565b9392505050565b6000602082840312156106c957600080fd5b81356001600160e01b0319811681146106b057600080fd5b6000602082840312156106f357600080fd5b5035919050565b6000806040838503121561070d57600080fd5b8235915060208301356001600160a01b038116811461072b57600080fd5b809150509250929050565b60005b83811015610751578181015183820152602001610739565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610792816017850160208801610736565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516107c3816028840160208801610736565b01602801949350505050565b60208152600082518060208401526107ee816040850160208701610736565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761028e5761028e610802565b8082018082111561028e5761028e610802565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008161087d5761087d610802565b50600019019056fec3a369eaae51a36ca665b72685e38c37da69c4bb3f6f2e1b44c0313ced23e2c6a2646970667358221220b2636936e8348333635d2b8f3469351dd962f745b20580f2047ce0043947acbd64736f6c63430008110033";

export class AccessControlFacet__factory extends ContractFactory {
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
  ): Promise<AccessControlFacet> {
    return super.deploy(overrides || {}) as Promise<AccessControlFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AccessControlFacet {
    return super.attach(address) as AccessControlFacet;
  }
  connect(signer: Signer): AccessControlFacet__factory {
    return super.connect(signer) as AccessControlFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccessControlFacetInterface {
    return new utils.Interface(_abi) as AccessControlFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessControlFacet {
    return new Contract(address, _abi, signerOrProvider) as AccessControlFacet;
  }
}
