/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BaseRegistryFacet,
  BaseRegistryFacetInterface,
} from "../BaseRegistryFacet";

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
    stateMutability: "pure",
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
        internalType: "uint256",
        name: "tokenId_",
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
  "0x608060405234801561001057600080fd5b50610d41806100206000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80637e8c7f08116100b8578063b5bfddea1161007c578063b5bfddea14610308578063c0bb85391461032f578063d547741f1461034f578063dbd1838814610362578063f5b541a61461036b578063f68e95531461038057600080fd5b80637e8c7f081461029557806391d14854146102bc578063957f992d146102cf578063a217fddf146102e2578063a8585616146102ea57600080fd5b80632a98ccb9116100ff5780632a98ccb91461020e5780632f2ff15d1461022157806336568abe1461023457806341ce72481461024757806375b238fc1461026e57600080fd5b806301ffc9a71461013c5780630352c84c1461016457806312e713b8146101a857806315d1d0b3146101bd578063248a9ca3146101ed575b600080fd5b61014f61014a366004610a53565b6103a7565b60405190151581526020015b60405180910390f35b7f049f9e3f78672c1b860bd7c751950a3fec682ab89bc0020d6603eef7c14a2975546001600160a01b03165b6040516001600160a01b03909116815260200161015b565b6101bb6101b6366004610a99565b6103de565b005b7f049f9e3f78672c1b860bd7c751950a3fec682ab89bc0020d6603eef7c14a2974546001600160a01b0316610190565b6102006101fb366004610ab4565b61047c565b60405190815260200161015b565b6101bb61021c366004610a99565b61049e565b6101bb61022f366004610acd565b610510565b6101bb610242366004610acd565b610531565b6102007f44674c7a3dadbc647cc1c715644fb9e12bedb87e49073fca9375f19f3840275181565b6102007fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b6102007f79e553c6f53701daa99614646285e66adb98ff0fcc1ef165dd2718e5c873bee681565b61014f6102ca366004610acd565b6105b4565b6101bb6102dd366004610a99565b6105ec565b610200600081565b600080516020610cec833981519152546001600160a01b0316610190565b6102007f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f81565b61034261033d366004610ab4565b610681565b60405161015b9190610b0f565b6101bb61035d366004610acd565b61072e565b62278d00610200565b610200600080516020610ccc83398151915281565b6102007fedcc084d3dcd65a1f7f23c65c46722faca6953d28e43150a467cf43e5c30923881565b60006001600160e01b03198216637965db0b60e01b14806103d857506301ffc9a760e01b6001600160e01b03198316145b92915050565b600080516020610ccc8339815191526103f68161074a565b7f049f9e3f78672c1b860bd7c751950a3fec682ab89bc0020d6603eef7c14a297580546001600160a01b0319166001600160a01b038416908117909155604051908152600080516020610cec833981519152907fe05092d30b04af91c6a54580b5c8e53d1afe01e2eae1b17a9f23b71901285c6d906020015b60405180910390a1505050565b6000908152600080516020610cac833981519152602052604090206001015490565b600080516020610ccc8339815191526104b68161074a565b600080516020610cec83398151915280546001600160a01b0319166001600160a01b03841690811782556040519081527f677ac8e08676ea36d991eca62e0b3eb2cec02d826780e88fc42da200c7d595a69060200161046f565b6105198261047c565b6105228161074a565b61052c8383610757565b505050565b6001600160a01b03811633146105a65760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6105b082826107cf565b5050565b6000918252600080516020610cac833981519152602090815260408084206001600160a01b0393909316845291905290205460ff1690565b600080516020610ccc8339815191526106048161074a565b7f049f9e3f78672c1b860bd7c751950a3fec682ab89bc0020d6603eef7c14a297480546001600160a01b0319166001600160a01b038416908117909155604051908152600080516020610cec833981519152907f8eb5d644cb874c12f4f9b0913e4a6b4b534ef1a8ede47fd51a2e8c364cfd3dd79060200161046f565b60408051608081018252600080825260208201819052918101829052606081019190915260008281527f049f9e3f78672c1b860bd7c751950a3fec682ab89bc0020d6603eef7c14a29726020526040908190208151608081019092528054829060ff1660028111156106f5576106f5610af9565b600281111561070657610706610af9565b8152600182015460208201526002820154604082015260039091015460609091015292915050565b6107378261047c565b6107408161074a565b61052c83836107cf565b6107548133610845565b50565b61076182826105b4565b6105b0576000828152600080516020610cac833981519152602081815260408084206001600160a01b0386168086529252808420805460ff19166001179055519192339286917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d91a4505050565b6107d982826105b4565b156105b0576000828152600080516020610cac833981519152602081815260408084206001600160a01b0386168086529252808420805460ff19169055519192339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b91a4505050565b61084f82826105b4565b6105b05761085c8161089e565b6108678360206108b0565b604051602001610878929190610b80565b60408051601f198184030181529082905262461bcd60e51b825261059d91600401610bf5565b60606103d86001600160a01b03831660145b606060006108bf836002610c3e565b6108ca906002610c55565b67ffffffffffffffff8111156108e2576108e2610c68565b6040519080825280601f01601f19166020018201604052801561090c576020820181803683370190505b509050600360fc1b8160008151811061092757610927610c7e565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061095657610956610c7e565b60200101906001600160f81b031916908160001a905350600061097a846002610c3e565b610985906001610c55565b90505b60018111156109fd576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106109b9576109b9610c7e565b1a60f81b8282815181106109cf576109cf610c7e565b60200101906001600160f81b031916908160001a90535060049490941c936109f681610c94565b9050610988565b508315610a4c5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161059d565b9392505050565b600060208284031215610a6557600080fd5b81356001600160e01b031981168114610a4c57600080fd5b80356001600160a01b0381168114610a9457600080fd5b919050565b600060208284031215610aab57600080fd5b610a4c82610a7d565b600060208284031215610ac657600080fd5b5035919050565b60008060408385031215610ae057600080fd5b82359150610af060208401610a7d565b90509250929050565b634e487b7160e01b600052602160045260246000fd5b8151608082019060038110610b3457634e487b7160e01b600052602160045260246000fd5b8083525060208301516020830152604083015160408301526060830151606083015292915050565b60005b83811015610b77578181015183820152602001610b5f565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610bb8816017850160208801610b5c565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610be9816028840160208801610b5c565b01602801949350505050565b6020815260008251806020840152610c14816040850160208701610b5c565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176103d8576103d8610c28565b808201808211156103d8576103d8610c28565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081610ca357610ca3610c28565b50600019019056fec3a369eaae51a36ca665b72685e38c37da69c4bb3f6f2e1b44c0313ced23e2c697667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b929049f9e3f78672c1b860bd7c751950a3fec682ab89bc0020d6603eef7c14a2970a26469706673582212206f2d8ca20616f6bf62bced27ea554f4d48c932139a689d45921e8502c4154de764736f6c63430008110033";

export class BaseRegistryFacet__factory extends ContractFactory {
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
  ): Promise<BaseRegistryFacet> {
    return super.deploy(overrides || {}) as Promise<BaseRegistryFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BaseRegistryFacet {
    return super.attach(address) as BaseRegistryFacet;
  }
  connect(signer: Signer): BaseRegistryFacet__factory {
    return super.connect(signer) as BaseRegistryFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseRegistryFacetInterface {
    return new utils.Interface(_abi) as BaseRegistryFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseRegistryFacet {
    return new Contract(address, _abi, signerOrProvider) as BaseRegistryFacet;
  }
}
