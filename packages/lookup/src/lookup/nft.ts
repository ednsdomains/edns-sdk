import {Resolver__factory as ResolverFactory} from "../typechain";
import {namehash} from "./namehash";
import {ethers} from "ethers";
import {RESOLVER_CONTRACT_ADDRESS, RPC_ENDPOINT} from "../web3/useContract";

interface INFTRecord {
    chainID: number;
    contractAddress: string;
    tokenID: string;
}
export const setNFT = async (domain: string, chainID: number, contractAddress: string, tokenId: number, signer: ethers.Signer):Promise<ethers.Transaction|Error> => {
    const Resolver = ResolverFactory.connect(RESOLVER_CONTRACT_ADDRESS, signer);
    const hash = namehash(domain);
    return await Resolver.setNFT(hash, chainID, contractAddress, tokenId)
}

export const getNFT = async (domain: string, chainID: number):Promise<INFTRecord|Error> => {
    const provider = new ethers.providers.JsonRpcProvider(RPC_ENDPOINT);
    const Resolver = ResolverFactory.connect(RESOLVER_CONTRACT_ADDRESS, provider);
    const hash = namehash(domain);
    const reseult = await Resolver.callStatic.getNFT(hash,chainID)
    if (reseult.chainId._hex !== '0x00') {
        console.log(reseult);
        const nftEntity: INFTRecord = {
            chainID: Number(reseult.chainId),
            contractAddress: reseult.contractAddress,
            tokenID: reseult.tokenId.toHexString(),
        };
        return nftEntity
    }else{
        return new Error("NFT Record Not Found.")
    }
}

