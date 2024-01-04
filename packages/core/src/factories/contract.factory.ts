import { ethers } from "ethers";
import { Records } from "../abstracts/records.abstract";
import { IRegistry, PublicResolver } from "../contracts/typechain";
import { getFqdnBytes, getKeccak256 } from "../utils";
import { RecordType, TypedAddress, TypedRecordType, TypedText } from "../types";

interface IContractFactoryProps {
  registry: IRegistry;
  resolver: PublicResolver;
}
export class ContractFactory extends Records {
  private registry: IRegistry;
  private resolver: PublicResolver;

  public constructor({ registry, resolver }: IContractFactoryProps) {
    super();
    this.registry = registry;
    this.resolver = resolver;
  }

  public async isExists(fqdn: string): Promise<boolean> {
    const { _name, _tld } = getKeccak256(fqdn);
    try {
      return await this.registry["isExists(bytes32,bytes32)"](_name, _tld);
    } catch (err) {
      return false;
    }
  }
  public async getOwner(fqdn: string): Promise<string> {
    const { _name, _tld } = getKeccak256(fqdn);
    try {
      return await this.registry["getOwner(bytes32,bytes32)"](_name, _tld);
    } catch (err) {
      return ethers.constants.AddressZero;
    }
  }
  public async getName(fqdn: string): Promise<string> {
    const { _name, _tld } = getKeccak256(fqdn);
    return await this.registry["getName(bytes32,bytes32)"](_name, _tld);
  }
  public async getResolver(fqdn: string): Promise<string> {
    const { _name, _tld } = getKeccak256(fqdn);
    return await this.registry["getResolver(bytes32,bytes32)"](_name, _tld);
  }
  public async getExpiry(fqdn: string): Promise<number> {
    const { _name, _tld } = getKeccak256(fqdn);
    try {
      return (
        await this.registry["getExpiry(bytes32,bytes32)"](_name, _tld)
      ).toNumber();
    } catch (err) {
      return 0;
    }
  }
  public async getUser(fqdn: string): Promise<string> {
    const { _name, _tld } = getKeccak256(fqdn);
    try {
      return await this.registry["getUser(bytes32,bytes32)"](_name, _tld);
    } catch (err) {
      return ethers.constants.AddressZero;
    }
  }
  public async getUserExpiry(fqdn: string): Promise<number> {
    const { _name, _tld } = getKeccak256(fqdn);
    try {
      return (
        await this.registry["getUserExpiry(bytes32,bytes32)"](_name, _tld)
      ).toNumber();
    } catch (err) {
      return 0;
    }
  }

  public getMethods() {
    // Implementation of getMethods goes here
    // Make sure to replace 'Resolver' with the appropriate type.

    // Return an object with keys of type RecordType and values as functions accepting _host, _name, and _tld parameters.
    return {
      text: async (fqdn: string) => {
        const { _host, _name, _tld } = getFqdnBytes(fqdn);
        // Implementation for text record type
        return await this.resolver.callStatic.getText(_host, _name, _tld);
      },
      address: async (fqdn: string) => {
        const { _host, _name, _tld } = getFqdnBytes(fqdn);
        // Implementation for address record type
        return await this.resolver.callStatic.getAddress(_host, _name, _tld);
      },
    };
  }

  public getTypedMethods() {
    return {
      typedText: async (fqdn: string, type: TypedText) => {
        const { _host, _name, _tld } = getFqdnBytes(fqdn);
        const _type = ethers.utils.toUtf8Bytes(type);
        // Implementation for typedText record type
        return await this.resolver.callStatic.getTypedText(
          _host,
          _name,
          _tld,
          _type
        );
      },
      typedAddress: async (fqdn: string, type: TypedAddress) => {
        const { _host, _name, _tld } = getFqdnBytes(fqdn);
        const _type = ethers.utils.toUtf8Bytes(type);
        // Implementation for typedAddress record type
        return await this.resolver.callStatic.getMultiCoinAddress(
          _host,
          _name,
          _tld,
          _type
        );
      },
    };
  }
}
