"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controllable__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "controller",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "ControllerChanged",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "controllers",
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
                internalType: "address",
                name: "controller",
                type: "address",
            },
            {
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "setController",
        outputs: [],
        stateMutability: "nonpayable",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b5061074a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063715018a61461005c5780638da5cb5b14610066578063da8c229e14610084578063e0dba60f146100b4578063f2fde38b146100d0575b600080fd5b6100646100ec565b005b61006e610174565b60405161007b91906104ea565b60405180910390f35b61009e60048036038101906100999190610536565b61019e565b6040516100ab919061057e565b60405180910390f35b6100ce60048036038101906100c991906105c5565b6101be565b005b6100ea60048036038101906100e59190610536565b6102e3565b005b6100f46103db565b73ffffffffffffffffffffffffffffffffffffffff16610112610174565b73ffffffffffffffffffffffffffffffffffffffff1614610168576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015f90610662565b60405180910390fd5b61017260006103e3565b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60656020528060005260406000206000915054906101000a900460ff1681565b6101c66103db565b73ffffffffffffffffffffffffffffffffffffffff166101e4610174565b73ffffffffffffffffffffffffffffffffffffffff161461023a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023190610662565b60405180910390fd5b80606560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff167f4c97694570a07277810af7e5669ffd5f6a2d6b74b6e9a274b8b870fd5114cf87826040516102d7919061057e565b60405180910390a25050565b6102eb6103db565b73ffffffffffffffffffffffffffffffffffffffff16610309610174565b73ffffffffffffffffffffffffffffffffffffffff161461035f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035690610662565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156103cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c6906106f4565b60405180910390fd5b6103d8816103e3565b50565b600033905090565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104d4826104a9565b9050919050565b6104e4816104c9565b82525050565b60006020820190506104ff60008301846104db565b92915050565b600080fd5b610513816104c9565b811461051e57600080fd5b50565b6000813590506105308161050a565b92915050565b60006020828403121561054c5761054b610505565b5b600061055a84828501610521565b91505092915050565b60008115159050919050565b61057881610563565b82525050565b6000602082019050610593600083018461056f565b92915050565b6105a281610563565b81146105ad57600080fd5b50565b6000813590506105bf81610599565b92915050565b600080604083850312156105dc576105db610505565b5b60006105ea85828601610521565b92505060206105fb858286016105b0565b9150509250929050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061064c602083610605565b915061065782610616565b602082019050919050565b6000602082019050818103600083015261067b8161063f565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006106de602683610605565b91506106e982610682565b604082019050919050565b6000602082019050818103600083015261070d816106d1565b905091905056fea2646970667358221220a7ad0cebf9c72d164ea81205e0180778c799df3ac913d09236c7f1b9175696f764736f6c634300080a0033";
class Controllable__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.Controllable__factory = Controllable__factory;
Controllable__factory.bytecode = _bytecode;
Controllable__factory.abi = _abi;
//# sourceMappingURL=Controllable__factory.js.map