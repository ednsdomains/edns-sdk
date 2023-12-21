import { ethers } from "ethers";
import { Records } from "../abstracts/records.abstract";
import { IRegistry } from "../contracts/typechain";
import { getKeccak256 } from "../utils";

export class ContractFactory extends Records {
  private registry: IRegistry;

  public constructor(registry: IRegistry) {
    super();
    this.registry = registry;
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
}
