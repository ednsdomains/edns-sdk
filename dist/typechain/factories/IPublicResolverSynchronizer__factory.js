"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPublicResolverSynchronizer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint16[]",
                name: "lzChainIds",
                type: "uint16[]",
            },
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
                internalType: "uint16[]",
                name: "lzChainIds",
                type: "uint16[]",
            },
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
class IPublicResolverSynchronizer__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IPublicResolverSynchronizer__factory = IPublicResolverSynchronizer__factory;
IPublicResolverSynchronizer__factory.abi = _abi;
//# sourceMappingURL=IPublicResolverSynchronizer__factory.js.map