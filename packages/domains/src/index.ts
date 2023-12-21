import {
  getFqdnBytes,
  getDomainType,
  getKeccak256,
} from "../../core/src/utils";
import { EdnsChainId } from "../../core/src/types";
import { EDNS } from "../../core/src";

export class DomainManager {
  private edns: EDNS = EDNS.getInstance();

  private factoryType: "chain" | "api" = "chain";

  // private tld: Uint8Array;
  // private name: Uint8Array;

  public constructor(factoryType: "chain" | "api") {
    this.factoryType = factoryType;
  }

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
      const promise = registrarController["isAvailable(bytes,bytes)"](
        _name,
        _tld
      );
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

  public IsExist = async (fqdn: string, chainId: EdnsChainId) => {
    const factory = this.edns.getFactory(this.factoryType, chainId);

    return await factory.isExists(fqdn);
  };

  public GetOwner = async (fqdn: string, chainId: EdnsChainId) => {
    const factory = this.edns.getFactory(this.factoryType, chainId);
    return await factory.getOwner(fqdn);
  };

  public GetExpiry = async (fqdn: string, chainId: EdnsChainId) => {
    const factory = this.edns.getFactory(this.factoryType, chainId);
    return await factory.getExpiry(fqdn);
  };

  // public GetName = async (fqdn: string, chainId: EdnsChainId) => {
  //   const factory = this.edns.getFactory(this.factoryType, chainId);
  //   return await factory.getName(fqdn);
  // };

  // public GetResolver = async (fqdn: string, chainId: EdnsChainId) => {
  //   const factory = this.edns.getFactory(this.factoryType, chainId);
  //   return await factory.getResolver(fqdn);
  // };

  // public GetUser = async (fqdn: string, chainId: EdnsChainId) => {
  //   const factory = this.edns.getFactory(this.factoryType, chainId);
  //   return await factory.getUser(fqdn);
  // };

  // public GetUserExpiry = async (fqdn: string, chainId: EdnsChainId) => {
  //   const factory = this.edns.getFactory(this.factoryType, chainId);
  //   return await factory.getUserExpiry(fqdn);
  // };
}
