import { EDNS, EdnsChainId, TypedAddress, TypedText } from "@edns/core";

export class RecordManager {
  private edns: EDNS = EDNS.getInstance();
  private factoryType: "chain" | "api" = "chain";

  public constructor(factoryType: "chain" | "api") {
    this.factoryType = factoryType;
  }

  public GetAllRecords = async (fqdn: string, chainId: EdnsChainId) => {
    return {
      text: await this.GetTextRecord(fqdn, chainId),
      // typedText: await this.GetTypedTextRecords(fqdn, chainId),
      address: await this.GetAddressRecord(fqdn, chainId),
      // typedAddress: await this.GetTypedAddressRecords(fqdn, chainId),
    };
  };

  public GetTextRecord = async (fqdn: string, chainId: EdnsChainId) => {
    const factory = this.edns.getFactory(this.factoryType, chainId);
    return await factory.getMethods()["text"](fqdn);
  };

  public GetTypedTextRecord = async (
    fqdn: string,
    type: TypedText,
    chainId: EdnsChainId
  ) => {
    const factory = this.edns.getFactory(this.factoryType, chainId);
    return await factory.getTypedMethods()["typedText"](fqdn, type);
  };

  public GetAddressRecord = async (fqdn: string, chainId: EdnsChainId) => {
    const factory = this.edns.getFactory(this.factoryType, chainId);
    return await factory.getMethods()["address"](fqdn);
  };

  public GetTypedAddressRecord = async (
    fqdn: string,
    type: TypedAddress,
    chainId: EdnsChainId
  ) => {
    const factory = this.edns.getFactory(this.factoryType, chainId);
    return await factory.getTypedMethods()["typedAddress"](fqdn, type);
  };

  public GetSubDomainRecords = (fqdn: string, chainId: EdnsChainId) => {};
}
