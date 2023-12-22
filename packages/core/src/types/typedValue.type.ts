import { TypedAddress, TypedRecordType, TypedText } from ".";

export type TypedValue<T extends TypedRecordType> = T extends "typedText"
  ? TypedText
  : T extends "typedAddress"
  ? TypedAddress
  : never;
