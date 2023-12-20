import { EDNS } from "../../core/src";
import { EdnsChainId } from "../../core/src/types";
import { TypedAddress, TypedText } from "./types";

export class RecordManager {
  private edns: EDNS = EDNS.getInstance();

  public GetAllRecords = async (fqdn: string, chainId: EdnsChainId) => {
    return {
      text: await this.GetTextRecord(fqdn, chainId),
      typedText: await this.GetTypedTextRecords(fqdn, chainId),
      address: await this.GetAddressRecord(fqdn, chainId),
      typedAddress: await this.GetTypedAddressRecords(fqdn, chainId),
    };
  };

  public GetTextRecord = async (fqdn: string, chainId: EdnsChainId) => {
    return await this.edns.getRecords("text", fqdn, chainId);
  };
  public GetTypedTextRecords = async (fqdn: string, chainId: EdnsChainId) => {
    return await this.edns.getRecords("typedText", fqdn, chainId);
  };
  public GetTypedTextRecordByType = async (
    fqdn: string,
    chainId: EdnsChainId,
    type: TypedText
  ) => {};

  public GetAddressRecord = async (fqdn: string, chainId: EdnsChainId) => {
    return await this.edns.getRecords("address", fqdn, chainId);
  };
  public GetTypedAddressRecords = async (
    fqdn: string,
    chainId: EdnsChainId
  ) => {
    return await this.edns.getRecords("typedAddress", fqdn, chainId);
  };
  public GetTypedAddressRecordByType = (
    fqdn: string,
    chainId: EdnsChainId,
    type: TypedAddress
  ) => {};

  public GetSubDomainRecords = (fqdn: string, chainId: EdnsChainId) => {};
}
