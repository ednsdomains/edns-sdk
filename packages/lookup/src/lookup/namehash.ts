import {ethers} from "ethers";

export const namehash = (domain: string): string => {
    const [name, tld] = domain.split('.');
    const basenode = ethers.utils.namehash(tld);
    const labelhash = ethers.utils.solidityKeccak256(['string', 'bytes32'], [name, basenode]);
    const nodehash = ethers.utils.solidityKeccak256(['bytes32', 'bytes32'], [basenode, labelhash]);
    return nodehash;
};
