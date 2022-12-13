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
exports.getNFT = exports.setNFT = void 0;
const typechain_1 = require("../typechain");
const namehash_1 = require("./namehash");
const ethers_1 = require("ethers");
const useContract_1 = require("../web3/useContract");
const setNFT = (domain, chainID, contractAddress, tokenId, signer) => __awaiter(void 0, void 0, void 0, function* () {
    const Resolver = typechain_1.Resolver__factory.connect(useContract_1.RESOLVER_CONTRACT_ADDRESS, signer);
    const hash = (0, namehash_1.namehash)(domain);
    return yield Resolver.setNFT(hash, chainID, contractAddress, tokenId);
});
exports.setNFT = setNFT;
const getNFT = (domain, chainID) => __awaiter(void 0, void 0, void 0, function* () {
    const provider = new ethers_1.ethers.providers.JsonRpcProvider(useContract_1.RPC_ENDPOINT);
    const Resolver = typechain_1.Resolver__factory.connect(useContract_1.RESOLVER_CONTRACT_ADDRESS, provider);
    const hash = (0, namehash_1.namehash)(domain);
    const reseult = yield Resolver.callStatic.getNFT(hash, chainID);
    if (reseult.chainId._hex !== '0x00') {
        console.log(reseult);
        const nftEntity = {
            chainID: Number(reseult.chainId),
            contractAddress: reseult.contractAddress,
            tokenID: reseult.tokenId.toHexString(),
        };
        return nftEntity;
    }
    else {
        return new Error("NFT Record Not Found.");
    }
});
exports.getNFT = getNFT;
//# sourceMappingURL=nft.js.map