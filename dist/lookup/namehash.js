"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.namehash = void 0;
const ethers_1 = require("ethers");
const namehash = (domain) => {
    const [name, tld] = domain.split('.');
    const basenode = ethers_1.ethers.utils.namehash(tld);
    const labelhash = ethers_1.ethers.utils.solidityKeccak256(['string', 'bytes32'], [name, basenode]);
    const nodehash = ethers_1.ethers.utils.solidityKeccak256(['bytes32', 'bytes32'], [basenode, labelhash]);
    return nodehash;
};
exports.namehash = namehash;
//# sourceMappingURL=namehash.js.map