import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DummyDigest, DummyDigestInterface } from "../DummyDigest";
export declare class DummyDigest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DummyDigest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DummyDigest;
    connect(signer: Signer): DummyDigest__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101ca806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f7e83aee14610030575b600080fd5b61004a600480360381019061004591906100dd565b610060565b6040516100579190610179565b60405180910390f35b600060019050949350505050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f84011261009d5761009c610078565b5b8235905067ffffffffffffffff8111156100ba576100b961007d565b5b6020830191508360018202830111156100d6576100d5610082565b5b9250929050565b600080600080604085870312156100f7576100f661006e565b5b600085013567ffffffffffffffff81111561011557610114610073565b5b61012187828801610087565b9450945050602085013567ffffffffffffffff81111561014457610143610073565b5b61015087828801610087565b925092505092959194509250565b60008115159050919050565b6101738161015e565b82525050565b600060208201905061018e600083018461016a565b9291505056fea2646970667358221220ddfb83cfa49ddefc32cbfccf7d66f6359d1ceeba4d5eeaa63ecc24b98d4595c264736f6c634300080a0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): DummyDigestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DummyDigest;
}
