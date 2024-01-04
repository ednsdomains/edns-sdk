import chains from '../data/contracts.json'
import { IContract } from '../interfaces/contract.interface'

const useContract = (chainId: number) => {
    const contract: IContract | undefined = (chains as unknown as IContract[]).find((c) => c.chainId === chainId);
    if (!contract) {
        throw new Error(`No contract found for chainId ${chainId}`)
    }
    return contract.addresses
}

export {useContract}