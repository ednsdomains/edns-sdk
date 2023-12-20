import {
  getFqdnBytes,
  getDomainType,
  getKeccak256,
} from "../../core/src/utils";
import { EdnsChainId } from "../../core/src/types";
import { EDNS } from "../../core/src";

export class DomainManager {
  private edns: EDNS = EDNS.getInstance();

  // private tld: Uint8Array;
  // private name: Uint8Array;

  public constructor() {}

  public IsDomainAvaliable = async (
    fqdn: string,
    chainId: EdnsChainId,
    timeout: number = 5000
  ) => {
    const { _name, _tld } = getFqdnBytes(fqdn);
    const registrarControllers = this.edns.getRegistrarControllers(
      fqdn,
      chainId
    );
    const promises = registrarControllers.map(async (registrarController) => {
      const promise = registrarController.callStatic[
        "isAvailable(bytes,bytes)"
      ](_name, _tld);
      return Promise.race([
        promise.catch((err) => {
          err;
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timeout")), timeout)
        ),
      ]);
    });

    const result = await Promise.allSettled(promises);
    return (
      result.findIndex(
        (res) => res.status === "fulfilled" && res.value === false
      ) === -1
    );
  };

  public GetOwner = async (fqdn: string, chainId: EdnsChainId) => {
    const { _name, _tld } = getKeccak256(fqdn);
    const facet = this.edns.getRegistry(chainId);
    try {
      return await facet["getOwner(bytes32,bytes32)"](_name, _tld);
    } catch (err) {
      return err;
    }
  };

  public GetName = async (fqdn: string, chainId: EdnsChainId) => {
    const { _name, _tld } = getKeccak256(fqdn);
    const facet = this.edns.getRegistry(chainId);
    return await facet.callStatic["getName(bytes32,bytes32)"](_name, _tld);
  };

  public GetResolver = async (fqdn: string, chainId: EdnsChainId) => {
    const { _name, _tld } = getKeccak256(fqdn);
    const facet = this.edns.getRegistry(chainId);
    return await facet.callStatic["getResolver(bytes32,bytes32)"](_name, _tld);
  };

  public GetExpiry = async (fqdn: string, chainId: EdnsChainId) => {
    const { _name, _tld } = getKeccak256(fqdn);
    const facet = this.edns.getRegistry(chainId);
    return (
      await facet.callStatic["getExpiry(bytes32,bytes32)"](_name, _tld)
    ).toNumber();
  };

  public GetUser = async (fqdn: string, chainId: EdnsChainId) => {
    const { _name, _tld } = getKeccak256(fqdn);
    const facet = this.edns.getRegistry(chainId);
    return (
      await facet.callStatic["getUser(bytes32,bytes32)"](_name, _tld)
    ).toString();
  };

  public GetUserExpiry = async (fqdn: string, chainId: EdnsChainId) => {
    const { _name, _tld } = getKeccak256(fqdn);
    const facet = this.edns.getRegistry(chainId);
    return (
      await facet.callStatic["getUserExpiry(bytes32,bytes32)"](_name, _tld)
    ).toNumber();
  };

  public RegisterDomain = async () => {
    throw new Error("Not implemented");
  };

  public RenewDomain = async () => {
    throw new Error("Not implemented");
  };
}
