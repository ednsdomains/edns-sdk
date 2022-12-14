"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMultiCoinAddressResolver__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
                name: "name",
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
                internalType: "uint256",
                name: "coin",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "address_",
                type: "bytes",
            },
        ],
        name: "SetMultiCoinAddress",
        type: "event",
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
                name: "name",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "coin",
                type: "uint256",
            },
        ],
        name: "getMultiCoinAddress",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
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
                name: "name",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "coin",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "address_",
                type: "bytes",
            },
        ],
        name: "setMultiCoinAddress",
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
                name: "name",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "coin",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "address_",
                type: "bytes",
            },
        ],
        name: "setMultiCoinAddress_SYNC",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IMultiCoinAddressResolver__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IMultiCoinAddressResolver__factory = IMultiCoinAddressResolver__factory;
IMultiCoinAddressResolver__factory.abi = _abi;
//# sourceMappingURL=IMultiCoinAddressResolver__factory.js.map