import {ethers} from "ethers";
import axios from "axios";
interface SafeLow {
    maxPriorityFee: number;
    maxFee: number;
}

interface Standard {
    maxPriorityFee: number;
    maxFee: number;
}

interface Fast {
    maxPriorityFee: number;
    maxFee: number;
}
interface GasStationResponse {
    safeLow: SafeLow;
    standard: Standard;
    fast: Fast;
    estimatedBaseFee: number;
    blockTime: number;
    blockNumber: number;
}
const GetEdnsProvider = async (): Promise< ethers.providers.JsonRpcProvider> => {
    const RPC_ENDPOINT = 'https://polygon-rpc.com/';
    const provider = new ethers.providers.JsonRpcProvider(RPC_ENDPOINT);
    provider.getFeeData = async () => {
        const gasPrice = await provider.getGasPrice();
        const response = await axios.get<GasStationResponse>("https://gasstation-mainnet.matic.network/v2");
        return {
            maxFeePerGas: ethers.utils.parseUnits(Math.ceil(response.data.fast.maxFee) + "", "gwei"),
            maxPriorityFeePerGas: ethers.utils.parseUnits(Math.ceil(response.data.fast.maxPriorityFee) + "", "gwei"),
            gasPrice,
        };
    };
    return provider
}
export {GetEdnsProvider};
