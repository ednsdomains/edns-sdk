"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteAddress = exports.LookupAddress = void 0;
const address_encoder_1 = require("@ensdomains/address-encoder");
const ethers_1 = require("ethers");
const typechain_1 = require("../typechain");
const namehash_1 = require("./namehash");
const LookupAddress = (domain, coinName) => __awaiter(void 0, void 0, void 0, function* () {
    const RESOLVER_CONTRACT_ADDRESS = '0x3c2DAab0AF88B0c5505ccB585e04FB33d7C80144';
    const RPC_ENDPOINT = 'https://polygon-rpc.com/';
    const provider = new ethers_1.ethers.providers.JsonRpcProvider(RPC_ENDPOINT);
    const Resolver = typechain_1.Resolver__factory.connect(RESOLVER_CONTRACT_ADDRESS, provider);
    const hash = (0, namehash_1.namehash)(domain);
    const address_ = yield Resolver.callStatic['addr(bytes32,uint256)'](hash, address_encoder_1.formatsByName[coinName].coinType);
    if (address_ !== '0x') {
        if (ethers_1.ethers.utils.isAddress(address_)) {
            return address_;
        }
        else {
            return address_encoder_1.formatsByName[coinName].encoder(Buffer.from(ethers_1.ethers.utils.toUtf8String(address_), 'hex'));
        }
    }
    else {
        return undefined;
    }
});
exports.LookupAddress = LookupAddress;
const WriteAddress = (domain, coinName, address, signer) => __awaiter(void 0, void 0, void 0, function* () {
    const RESOLVER_CONTRACT_ADDRESS = '0x3c2DAab0AF88B0c5505ccB585e04FB33d7C80144';
    const Resolver = typechain_1.Resolver__factory.connect(RESOLVER_CONTRACT_ADDRESS, signer);
    const hash = (0, namehash_1.namehash)(domain);
    const transaction = yield Resolver["setAddr(bytes32,uint256,bytes)"](hash, address_encoder_1.formatsByName[coinName].coinType, ethers_1.ethers.utils.toUtf8Bytes(address));
    return transaction;
});
exports.WriteAddress = WriteAddress;
//# sourceMappingURL=address.js.map