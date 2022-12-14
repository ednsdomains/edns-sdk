"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenPriceOracleMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "oracle",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "jobId_",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "requestId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "GetTokenPriceInUsd",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
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
                internalType: "string",
                name: "url",
                type: "string",
            },
        ],
        name: "SetApiUrl",
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
        name: "CONTROLLER_ROLE",
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
        inputs: [
            {
                internalType: "bytes32",
                name: "_requestid",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "amount_",
                type: "uint256",
            },
        ],
        name: "fulfill",
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
        name: "getTokenPriceInUsd",
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
        inputs: [],
        name: "renounceOwnership",
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
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "requestTokenPriceInUsd",
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
                internalType: "string",
                name: "url",
                type: "string",
            },
        ],
        name: "setApiUrl",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162000f7238038062000f72833981016040819052620000349162000219565b6200003f33620000c7565b6200006c7f7b765e0e932d348852a6f810bfa1ab891e259123f02db8cdcde614c570223357600062000117565b6200008860008051602062000f52833981519152600062000117565b6200009560003362000164565b620000b060008051602062000f528339815191523362000164565b600255505067016345785d8a00006003556200025a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000828152600160208190526040808320909101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b62000170828262000174565b5050565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff16620001705760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b80516001600160a01b03811681146200021457600080fd5b919050565b6000806000606084860312156200022f57600080fd5b6200023a84620001fc565b92506200024a60208501620001fc565b9150604084015190509250925092565b610ce8806200026a6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806375b238fc116100a2578063a217fddf11610071578063a217fddf14610238578063d547741f14610240578063e8c75a3014610253578063ed734b4414610266578063f2fde38b1461026e57600080fd5b806375b238fc146101db57806379fa9ab4146102025780638da5cb5b1461020a57806391d148541461022557600080fd5b806336568abe116100de57806336568abe146101a65780633ccfd60b146101b95780634357855e146101c1578063715018a6146101d357600080fd5b806301ffc9a714610110578063092c5b3b14610138578063248a9ca31461016d5780632f2ff15d14610191575b600080fd5b61012361011e366004610961565b610281565b60405190151581526020015b60405180910390f35b61015f7f7b765e0e932d348852a6f810bfa1ab891e259123f02db8cdcde614c57022335781565b60405190815260200161012f565b61015f61017b36600461098b565b6000908152600160208190526040909120015490565b6101a461019f3660046109c0565b6102ac565b005b6101a46101b43660046109c0565b6102d7565b6101a4610356565b6101a46101cf3660046109ec565b5050565b6101a4610382565b61015f7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b6101a46103b6565b6000546040516001600160a01b03909116815260200161012f565b6101236102333660046109c0565b6103fb565b61015f600081565b6101a461024e3660046109c0565b610426565b6101a4610261366004610a24565b61044c565b60045461015f565b6101a461027c366004610ad5565b6104c5565b60006001600160e01b031982166301f13a2f60e61b14806102a657506102a682610560565b92915050565b600082815260016020819052604090912001546102c881610595565b6102d2838361059f565b505050565b6001600160a01b038116331461034c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6101cf828261060a565b6000546001600160a01b031633146103805760405162461bcd60e51b815260040161034390610af0565b565b6000546001600160a01b031633146103ac5760405162461bcd60e51b815260040161034390610af0565b6103806000610671565b7f7b765e0e932d348852a6f810bfa1ab891e259123f02db8cdcde614c5702233576103e081610595565b6001600460008282546103f39190610b3b565b909155505050565b60009182526001602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6000828152600160208190526040909120015461044281610595565b6102d2838361060a565b7f7b765e0e932d348852a6f810bfa1ab891e259123f02db8cdcde614c57022335761047681610595565b81516104899060059060208501906108c8565b507fbfb0d4ea619e1f6dcfd10f1abc415a563a8e0ba1d8fe0879b27b4fa4ca0b0bd7826040516104b99190610b83565b60405180910390a15050565b6000546001600160a01b031633146104ef5760405162461bcd60e51b815260040161034390610af0565b6001600160a01b0381166105545760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610343565b61055d81610671565b50565b60006001600160e01b03198216637965db0b60e01b14806102a657506301ffc9a760e01b6001600160e01b03198316146102a6565b61055d81336106c1565b6105a982826103fb565b6101cf5760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b61061482826103fb565b156101cf5760008281526001602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6106cb82826103fb565b6101cf576106e3816001600160a01b03166014610725565b6106ee836020610725565b6040516020016106ff929190610bb6565b60408051601f198184030181529082905262461bcd60e51b825261034391600401610b83565b60606000610734836002610c2b565b61073f906002610b3b565b67ffffffffffffffff81111561075757610757610a0e565b6040519080825280601f01601f191660200182016040528015610781576020820181803683370190505b509050600360fc1b8160008151811061079c5761079c610c4a565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106107cb576107cb610c4a565b60200101906001600160f81b031916908160001a90535060006107ef846002610c2b565b6107fa906001610b3b565b90505b6001811115610872576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061082e5761082e610c4a565b1a60f81b82828151811061084457610844610c4a565b60200101906001600160f81b031916908160001a90535060049490941c9361086b81610c60565b90506107fd565b5083156108c15760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610343565b9392505050565b8280546108d490610c77565b90600052602060002090601f0160209004810192826108f6576000855561093c565b82601f1061090f57805160ff191683800117855561093c565b8280016001018555821561093c579182015b8281111561093c578251825591602001919060010190610921565b5061094892915061094c565b5090565b5b80821115610948576000815560010161094d565b60006020828403121561097357600080fd5b81356001600160e01b0319811681146108c157600080fd5b60006020828403121561099d57600080fd5b5035919050565b80356001600160a01b03811681146109bb57600080fd5b919050565b600080604083850312156109d357600080fd5b823591506109e3602084016109a4565b90509250929050565b600080604083850312156109ff57600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610a3657600080fd5b813567ffffffffffffffff80821115610a4e57600080fd5b818401915084601f830112610a6257600080fd5b813581811115610a7457610a74610a0e565b604051601f8201601f19908116603f01168101908382118183101715610a9c57610a9c610a0e565b81604052828152876020848701011115610ab557600080fd5b826020860160208301376000928101602001929092525095945050505050565b600060208284031215610ae757600080fd5b6108c1826109a4565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b4e57610b4e610b25565b500190565b60005b83811015610b6e578181015183820152602001610b56565b83811115610b7d576000848401525b50505050565b6020815260008251806020840152610ba2816040850160208701610b53565b601f01601f19169190910160400192915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610bee816017850160208801610b53565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610c1f816028840160208801610b53565b01602801949350505050565b6000816000190483118215151615610c4557610c45610b25565b500290565b634e487b7160e01b600052603260045260246000fd5b600081610c6f57610c6f610b25565b506000190190565b600181811c90821680610c8b57607f821691505b60208210811415610cac57634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212206b76d7776a4190245e07564e81e59e486d1d3ab44939f4c960747a9ac93bc64d64736f6c63430008090033a49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775";
class TokenPriceOracleMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(token, oracle, jobId_, overrides) {
        return super.deploy(token, oracle, jobId_, overrides || {});
    }
    getDeployTransaction(token, oracle, jobId_, overrides) {
        return super.getDeployTransaction(token, oracle, jobId_, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.TokenPriceOracleMock__factory = TokenPriceOracleMock__factory;
TokenPriceOracleMock__factory.bytecode = _bytecode;
TokenPriceOracleMock__factory.abi = _abi;
//# sourceMappingURL=TokenPriceOracleMock__factory.js.map