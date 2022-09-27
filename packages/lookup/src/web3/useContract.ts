import {ethers} from "ethers";
import axios from "axios";
import {Resolver__factory as ResolverFactory} from "../typechain";

export const RPC_ENDPOINT = 'https://polygon-rpc.com/';
export const RESOLVER_CONTRACT_ADDRESS = '0x3c2DAab0AF88B0c5505ccB585e04FB33d7C80144'
export const REVERSE_REGISTRAR_CONTRACT_ADDRESS = '0xD986F9083F006D0E2d08c9F22247b4a0a213146D'
export const REGISTRY_CONTRACT_ADDRESS = '0x7c5DbFE487D01BC0C75704dBfD334198E6AB2D12'
export const REGISTRAR_CONTRACT_ADDRESS = '0x53a0018f919bde9C254bda697966C5f448ffDDcB'
export const EDNSRegistrarController_CONTRACT_ADDRESS = '0x8C856f71d71e8CF4AD9A44cDC426b09e315c6A6a'
// export const useResolverWithRead = async (): Promise< ResolverFactory> => {
//     const RPC_ENDPOINT = 'https://polygon-rpc.com/';
//     const provider = new ethers.providers.JsonRpcProvider(RPC_ENDPOINT);
//     const Resolver = ResolverFactory.connect(RESOLVER_CONTRACT_ADDRESS, provider);
//     return Resolver
// }
