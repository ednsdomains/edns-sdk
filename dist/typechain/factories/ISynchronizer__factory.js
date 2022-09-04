"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISynchronizer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes",
                name: "payload",
                type: "bytes",
            },
        ],
        name: "estimateSyncFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "payload",
                type: "bytes",
            },
        ],
        name: "sync",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
class ISynchronizer__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISynchronizer__factory = ISynchronizer__factory;
ISynchronizer__factory.abi = _abi;
//# sourceMappingURL=ISynchronizer__factory.js.map