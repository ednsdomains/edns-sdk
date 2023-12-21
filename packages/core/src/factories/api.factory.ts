import axios from "../utils/axios";
import { Records } from "../abstracts/records.abstract";
import { ethers } from "ethers";

export class ApiFactory extends Records {
  public async isExists(fqdn: string): Promise<boolean> {
    try {
      const res = await axios.get(`/domain/${fqdn}`);
      console.log(res.data);
      return true;
    } catch (err) {
      return false;
    }
  }
  public async getOwner(fqdn: string): Promise<string> {
    try {
      const res = await axios.get(`/owner/${fqdn}`);
      return res.data.data;
    } catch (err) {
      return ethers.constants.AddressZero;
    }
  }
  public async getName(fqdn: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  public async getResolver(fqdn: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  public async getExpiry(fqdn: string): Promise<number> {
    try {
      const res = await axios.get(`/expiry/${fqdn}`);
      return res.data.data;
    } catch (err) {
      return 0;
    }
  }
  public async getUser(fqdn: string): Promise<string> {
    try {
      const res = await axios.get(`/owner/${fqdn}`);
      return res.data.data;
    } catch (err) {
      return ethers.constants.AddressZero;
    }
  }
  public async getUserExpiry(fqdn: string): Promise<number> {
    throw new Error("Method not implemented.");
  }
}
