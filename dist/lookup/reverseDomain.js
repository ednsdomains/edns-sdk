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
exports.Reclaim = exports.SetReverseDomain = exports.LookupDomainFromAddress = void 0;
const ethers_1 = require("ethers");
const typechain_1 = require("../typechain");
const namehash_1 = require("./namehash");
const useContract_1 = require("../web3/useContract");
const LookupDomainFromAddress = (address) => __awaiter(void 0, void 0, void 0, function* () {
    // const PUBLIC_RESOLVER_CONTRACT_ADDRESS = '0x3c2DAab0AF88B0c5505ccB585e04FB33d7C80144'
    // const REVERSE_REGISTRAR_CONTRACT_ADDRESS = '0xD986F9083F006D0E2d08c9F22247b4a0a213146D'
    //Get Contract
    const provider = new ethers_1.ethers.providers.JsonRpcProvider(useContract_1.RPC_ENDPOINT);
    const DefaultReverseResolver = typechain_1.PublicResolver__factory.connect(useContract_1.RESOLVER_CONTRACT_ADDRESS, provider);
    const Registrar = typechain_1.ReverseRegistrar__factory.connect(useContract_1.REVERSE_REGISTRAR_CONTRACT_ADDRESS, provider);
    //Get node
    const node = yield Registrar.callStatic.node(address);
    //Get domain
    const domain = yield DefaultReverseResolver.callStatic.name(node);
    return domain;
});
exports.LookupDomainFromAddress = LookupDomainFromAddress;
const SetReverseDomain = (domain, signer) => __awaiter(void 0, void 0, void 0, function* () {
    // const REVERSE_REGISTRAR_CONTRACT_ADDRESS = '0xD986F9083F006D0E2d08c9F22247b4a0a213146D'
    const Registrar = typechain_1.ReverseRegistrar__factory.connect(useContract_1.REVERSE_REGISTRAR_CONTRACT_ADDRESS, signer);
    const sender = yield signer.getAddress();
    const isOwner = yield ownerOfDomain(domain, sender);
    if (isOwner instanceof Error) {
        throw isOwner;
    }
    else {
        const transaction = yield Registrar.setName(domain);
        return transaction;
    }
});
exports.SetReverseDomain = SetReverseDomain;
const ownerOfDomain = (domain, senderAddress) => __awaiter(void 0, void 0, void 0, function* () {
    const provider = new ethers_1.ethers.providers.JsonRpcProvider(useContract_1.RPC_ENDPOINT);
    const Regisiry = typechain_1.EDNSRegistry__factory.connect(useContract_1.REGISTRY_CONTRACT_ADDRESS, provider);
    const domainOwner = yield Regisiry.callStatic.owner((0, namehash_1.namehash)(domain));
    if (domainOwner != undefined && domainOwner != "0x0000000000000000000000000000000000000000") {
        if (domainOwner == senderAddress) {
            return true;
        }
        else {
            console.log("domainOwner", domainOwner);
            console.log("senderAddress", senderAddress);
            return new Error('Sender is no Owner');
        }
    }
    else {
        return new Error('Domain Not Found');
    }
});
const Reclaim = (domain, signer, tokenID) => __awaiter(void 0, void 0, void 0, function* () {
    const [name, tld] = domain.split('.');
    const Registrar = typechain_1.BaseRegistrarImplementation__factory.connect(useContract_1.REGISTRAR_CONTRACT_ADDRESS, signer);
    const RegistrarController = typechain_1.EDNSRegistrarController__factory.connect(useContract_1.EDNSRegistrarController_CONTRACT_ADDRESS, signer);
    const tokenId = ethers_1.BigNumber.from(tokenID);
    const sender = yield signer.getAddress();
    const basenode = yield RegistrarController.tlds(ethers_1.ethers.utils.toUtf8Bytes(tld));
    const transaction = yield Registrar.reclaim(tokenId, basenode, sender);
    return transaction;
});
exports.Reclaim = Reclaim;
//# sourceMappingURL=reverseDomain.js.map