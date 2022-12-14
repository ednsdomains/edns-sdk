"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITokenPriceOracle__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
        inputs: [],
        name: "requestTokenPriceInUsd",
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
];
class ITokenPriceOracle__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ITokenPriceOracle__factory = ITokenPriceOracle__factory;
ITokenPriceOracle__factory.abi = _abi;
//# sourceMappingURL=ITokenPriceOracle__factory.js.map