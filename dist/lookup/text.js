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
exports.LookUpText = exports.TextType = void 0;
const ethers_1 = require("ethers");
const Resolver__factory_1 = require("../typechain/factories/Resolver__factory");
const namehash_1 = require("./namehash");
var TextType;
(function (TextType) {
    TextType["EMAIL"] = "email";
    TextType["URL"] = "url";
    TextType["AVATAR"] = "avatar";
    TextType["DESCRIPTION"] = "description";
    TextType["NOTICE"] = "notice";
    TextType["KEYWORDS"] = "keywords";
    TextType["DISCORD"] = "discord";
    TextType["GITHUB"] = "github";
    TextType["REDDIT"] = "reddit";
    TextType["TWITTER"] = "twitter";
    TextType["TELEGRAM"] = "telegram";
    TextType["DELEGATE"] = "delegate";
})(TextType = exports.TextType || (exports.TextType = {}));
const LookUpText = (domain, type) => __awaiter(void 0, void 0, void 0, function* () {
    const RESOLVER_CONTRACT_ADDRESS = '0x3c2DAab0AF88B0c5505ccB585e04FB33d7C80144';
    const RPC_ENDPOINT = 'https://polygon-rpc.com/';
    const provider = new ethers_1.ethers.providers.JsonRpcProvider(RPC_ENDPOINT);
    const Resolver = Resolver__factory_1.Resolver__factory.connect(RESOLVER_CONTRACT_ADDRESS, provider);
    const hash = (0, namehash_1.namehash)(domain);
    const text_ = yield Resolver.callStatic.text(hash, type);
    return !!text_ ? text_ : undefined;
});
exports.LookUpText = LookUpText;
//# sourceMappingURL=text.js.map