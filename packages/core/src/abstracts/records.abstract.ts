import {
  RecordType,
  TypedAddress,
  TypedRecordType,
  TypedText,
  TypedValue,
} from "../types";

export abstract class Records {
  public abstract isExists(fqdn: string): Promise<boolean>;

  public abstract getOwner(fqdn: string): Promise<string>;

  public abstract getName(fqdn: string): Promise<string>;

  public abstract getResolver(fqdn: string): Promise<string>;

  public abstract getExpiry(fqdn: string): Promise<number>;

  public abstract getUser(fqdn: string): Promise<string>;

  public abstract getUserExpiry(fqdn: string): Promise<number>;

  public abstract getMethods(): {
    [key in RecordType]: (fqdn: string) => Promise<any>;
  };

  public abstract getTypedMethods(): {
    [key in TypedRecordType]: (
      fqdn: string,
      type: TypedValue<key>
    ) => Promise<any>;
  };
}
