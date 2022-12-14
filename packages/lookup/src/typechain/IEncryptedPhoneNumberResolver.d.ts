/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IEncryptedPhoneNumberResolverInterface
  extends ethers.utils.Interface {
  functions: {
    "getEncryptedPhoneNumber(string,string,string)": FunctionFragment;
    "setEncryptedPhoneNumber(string,string,string,bytes,bytes)": FunctionFragment;
    "setEncryptedPhoneNumber_SYNC(string,string,string,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getEncryptedPhoneNumber",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setEncryptedPhoneNumber",
    values: [string, string, string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setEncryptedPhoneNumber_SYNC",
    values: [string, string, string, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getEncryptedPhoneNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEncryptedPhoneNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEncryptedPhoneNumber_SYNC",
    data: BytesLike
  ): Result;

  events: {
    "SetEncryptedPhoneNumber(bytes,bytes,bytes,bytes,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetEncryptedPhoneNumber"): EventFragment;
}

export type SetEncryptedPhoneNumberEvent = TypedEvent<
  [string, string, string, string, string] & {
    host: string;
    name: string;
    tld: string;
    payload: string;
    signature: string;
  }
>;

export class IEncryptedPhoneNumberResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IEncryptedPhoneNumberResolverInterface;

  functions: {
    getEncryptedPhoneNumber(
      host: string,
      name: string,
      tld: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setEncryptedPhoneNumber(
      host: string,
      name: string,
      tld: string,
      payload: BytesLike,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEncryptedPhoneNumber_SYNC(
      host: string,
      name: string,
      tld: string,
      payload: BytesLike,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getEncryptedPhoneNumber(
    host: string,
    name: string,
    tld: string,
    overrides?: CallOverrides
  ): Promise<string>;

  setEncryptedPhoneNumber(
    host: string,
    name: string,
    tld: string,
    payload: BytesLike,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEncryptedPhoneNumber_SYNC(
    host: string,
    name: string,
    tld: string,
    payload: BytesLike,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getEncryptedPhoneNumber(
      host: string,
      name: string,
      tld: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setEncryptedPhoneNumber(
      host: string,
      name: string,
      tld: string,
      payload: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setEncryptedPhoneNumber_SYNC(
      host: string,
      name: string,
      tld: string,
      payload: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "SetEncryptedPhoneNumber(bytes,bytes,bytes,bytes,bytes)"(
      host?: null,
      name?: null,
      tld?: null,
      payload?: null,
      signature?: null
    ): TypedEventFilter<
      [string, string, string, string, string],
      {
        host: string;
        name: string;
        tld: string;
        payload: string;
        signature: string;
      }
    >;

    SetEncryptedPhoneNumber(
      host?: null,
      name?: null,
      tld?: null,
      payload?: null,
      signature?: null
    ): TypedEventFilter<
      [string, string, string, string, string],
      {
        host: string;
        name: string;
        tld: string;
        payload: string;
        signature: string;
      }
    >;
  };

  estimateGas: {
    getEncryptedPhoneNumber(
      host: string,
      name: string,
      tld: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setEncryptedPhoneNumber(
      host: string,
      name: string,
      tld: string,
      payload: BytesLike,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEncryptedPhoneNumber_SYNC(
      host: string,
      name: string,
      tld: string,
      payload: BytesLike,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getEncryptedPhoneNumber(
      host: string,
      name: string,
      tld: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setEncryptedPhoneNumber(
      host: string,
      name: string,
      tld: string,
      payload: BytesLike,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEncryptedPhoneNumber_SYNC(
      host: string,
      name: string,
      tld: string,
      payload: BytesLike,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
