import { ethers, providers } from "ethers";
import chains from "./data/chains.json";
import contracts from "./data/contracts.json";
import {
  AddressResolver,
  AddressResolver__factory,
  ClassicalRegistrarController,
  ClassicalRegistrarController__factory,
  Diamond,
  Diamond__factory,
  DomainRecordFacet,
  DomainRecordFacet__factory,
  IRegistry,
  IRegistry__factory,
  PublicResolver,
  PublicResolver__factory,
  UniversalRegistrarController,
  UniversalRegistrarController__factory,
  Wrapper,
  Wrapper__factory,
} from "./contracts/typechain";
import { AddressTypes } from "./interfaces/addressTypes.interface";
import {
  RecordType,
  EdnsChainId,
  TypedAddress,
  typedAddressValues,
  typedTextValues,
} from "./types";
import { namehash } from "ethers/lib/utils";
import { getDomainType, getFqdnBytes } from "./utils";
import { ContractFactory } from "./factories/contract.factory";
import { ApiFactory } from "./factories/api.factory";

export class EDNS {
  private static _instance: EDNS;

  private providers: { [key: number]: providers.JsonRpcProvider } = {};
  private publicResolvers: { [key: number]: PublicResolver } = {};
  private registries: { [key: number]: IRegistry } = {};
  private wrappers: { [key: number]: Wrapper } = {};
  private classicalRegistrars: {
    [key: number]: ClassicalRegistrarController;
  } = {};
  private universalRegistrars: {
    [key: number]: UniversalRegistrarController;
  } = {};
  private contractAddresses: { [key: number]: AddressTypes } = {};

  // singleton
  static getInstance() {
    if (!this._instance) this._instance = new EDNS();

    return this._instance;
  }

  private getContractAddressById(chainId: EdnsChainId) {
    return this.contractAddresses[chainId];
  }

  private constructor() {
    contracts.forEach(({ chainId, addresses }) => {
      this.contractAddresses[chainId] = addresses;
    });
    chains.forEach(async ({ chainId, rpc }) => {
      const provider = new providers.JsonRpcProvider(rpc.public.http);
      const contractAddress = this.getContractAddressById(
        chainId as EdnsChainId
      );
      const publicResolver = PublicResolver__factory.connect(
        contractAddress.PublicResolver || ethers.constants.AddressZero,
        provider
      );
      const wrapper = Wrapper__factory.connect(
        contractAddress.DefaultWrapper || ethers.constants.AddressZero,
        provider
      );
      const registry = IRegistry__factory.connect(
        contractAddress["Registry.Diamond"] || ethers.constants.AddressZero,
        provider
      );
      const classicalRegistrar = ClassicalRegistrarController__factory.connect(
        contractAddress["ClassicalRegistrarController"] ||
          ethers.constants.AddressZero,
        provider
      );
      const universalRegistrar = UniversalRegistrarController__factory.connect(
        contractAddress["UniversalRegistrarController"] ||
          ethers.constants.AddressZero,
        provider
      );
      this.providers[chainId] = provider;
      this.publicResolvers[chainId] = publicResolver;
      this.wrappers[chainId] = wrapper;
      this.registries[chainId] = registry;
      this.classicalRegistrars[chainId] = classicalRegistrar;
      this.universalRegistrars[chainId] = universalRegistrar;
    });
  }

  public getResolver(chainId: EdnsChainId) {
    return this.publicResolvers[chainId];
  }

  private getMethods(resolver: PublicResolver): {
    [key in RecordType]: (
      _host: Uint8Array,
      _name: Uint8Array,
      _tld: Uint8Array
    ) => any;
  } {
    // Implementation of getMethods goes here
    // Make sure to replace 'Resolver' with the appropriate type.

    // Return an object with keys of type RecordType and values as functions accepting _host, _name, and _tld parameters.
    return {
      typedText: async (
        _host: Uint8Array,
        _name: Uint8Array,
        _tld: Uint8Array
      ) => {
        // Implementation for typedText record type
        const getTypedText: any[] = [];
        typedTextValues.forEach((type) => {
          const _type = ethers.utils.toUtf8Bytes(type);
          getTypedText.push(
            resolver.callStatic.getTypedText(_host, _name, _tld, _type)
          );
        });
        return await Promise.all(getTypedText);
      },
      text: async (_host: Uint8Array, _name: Uint8Array, _tld: Uint8Array) => {
        // Implementation for text record type
        return await resolver.callStatic.getText(_host, _name, _tld);
      },
      address: async (
        _host: Uint8Array,
        _name: Uint8Array,
        _tld: Uint8Array
      ) => {
        // Implementation for address record type
        return await resolver.callStatic.getAddress(_host, _name, _tld);
      },
      typedAddress: async (
        _host: Uint8Array,
        _name: Uint8Array,
        _tld: Uint8Array
      ) => {
        // Implementation for typedAddress record type
        const getCoinAddress: any[] = [];
        typedAddressValues.forEach((type) => {
          const _type = ethers.utils.toUtf8Bytes(type);
          getCoinAddress.push(
            resolver.callStatic.getMultiCoinAddress(_host, _name, _tld, _type)
          );
        });
        return await Promise.all(getCoinAddress);
      },
    };
  }

  public async getRecords(
    recordType: RecordType,
    host: string,
    chainId: EdnsChainId
  ) {
    const { _host, _name, _tld } = getFqdnBytes(host);
    const resolver = this.getResolver(chainId);

    return await this.getMethods(resolver)[recordType](_host, _name, _tld);
  }

  public getRegistrarControllers(fqdn: string, chainId: EdnsChainId) {
    const tldType = getDomainType(fqdn);
    if (tldType === "universal") {
      const registers = this.universalRegistrars;
      delete registers[4689];
      return Object.values(registers);
    } else {
      return [this.classicalRegistrars[chainId]];
    }
  }

  public getRegistry(chainId: EdnsChainId) {
    return this.registries[chainId];
  }

  public getFactory(type: "chain" | "api", chainId?: EdnsChainId) {
    if (type === "chain" && chainId) {
      return new ContractFactory(this.registries[chainId]);
    } else {
      return new ApiFactory();
    }
  }

  async transferDomain() {}
  async setRecord() {}
}
