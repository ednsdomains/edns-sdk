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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEdnsProvider = void 0;
const ethers_1 = require("ethers");
const axios_1 = __importDefault(require("axios"));
const GetEdnsProvider = () => __awaiter(void 0, void 0, void 0, function* () {
    const RPC_ENDPOINT = 'https://polygon-rpc.com/';
    const provider = new ethers_1.ethers.providers.JsonRpcProvider(RPC_ENDPOINT);
    provider.getFeeData = () => __awaiter(void 0, void 0, void 0, function* () {
        const gasPrice = yield provider.getGasPrice();
        const response = yield axios_1.default.get("https://gasstation-mainnet.matic.network/v2");
        return {
            maxFeePerGas: ethers_1.ethers.utils.parseUnits(Math.ceil(response.data.fast.maxFee) + "", "gwei"),
            maxPriorityFeePerGas: ethers_1.ethers.utils.parseUnits(Math.ceil(response.data.fast.maxPriorityFee) + "", "gwei"),
            gasPrice,
        };
    });
    return provider;
});
exports.GetEdnsProvider = GetEdnsProvider;
//# sourceMappingURL=provider.js.map