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

interface ISynchronizerApplicationInterface extends ethers.utils.Interface {
  functions: {
    "getSynchronizer()": FunctionFragment;
    "receiveSync(bytes)": FunctionFragment;
    "setSynchronizer(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getSynchronizer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receiveSync",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setSynchronizer",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getSynchronizer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveSync",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSynchronizer",
    data: BytesLike
  ): Result;

  events: {
    "ExecuteSync(bool,bytes)": EventFragment;
    "RequestSync(bytes)": EventFragment;
    "SyncError(bytes,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExecuteSync"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestSync"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SyncError"): EventFragment;
}

export type ExecuteSyncEvent = TypedEvent<
  [boolean, string] & { success: boolean; ews: string }
>;

export type RequestSyncEvent = TypedEvent<[string] & { ews: string }>;

export type SyncErrorEvent = TypedEvent<
  [string, string] & { ews: string; reason: string }
>;

export class ISynchronizerApplication extends BaseContract {
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

  interface: ISynchronizerApplicationInterface;

  functions: {
    getSynchronizer(overrides?: CallOverrides): Promise<[string]>;

    receiveSync(
      ews: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSynchronizer(
      synchronizer_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getSynchronizer(overrides?: CallOverrides): Promise<string>;

  receiveSync(
    ews: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSynchronizer(
    synchronizer_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getSynchronizer(overrides?: CallOverrides): Promise<string>;

    receiveSync(ews: BytesLike, overrides?: CallOverrides): Promise<void>;

    setSynchronizer(
      synchronizer_: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ExecuteSync(bool,bytes)"(
      success?: null,
      ews?: null
    ): TypedEventFilter<[boolean, string], { success: boolean; ews: string }>;

    ExecuteSync(
      success?: null,
      ews?: null
    ): TypedEventFilter<[boolean, string], { success: boolean; ews: string }>;

    "RequestSync(bytes)"(
      ews?: null
    ): TypedEventFilter<[string], { ews: string }>;

    RequestSync(ews?: null): TypedEventFilter<[string], { ews: string }>;

    "SyncError(bytes,bytes)"(
      ews?: null,
      reason?: null
    ): TypedEventFilter<[string, string], { ews: string; reason: string }>;

    SyncError(
      ews?: null,
      reason?: null
    ): TypedEventFilter<[string, string], { ews: string; reason: string }>;
  };

  estimateGas: {
    getSynchronizer(overrides?: CallOverrides): Promise<BigNumber>;

    receiveSync(
      ews: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSynchronizer(
      synchronizer_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getSynchronizer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receiveSync(
      ews: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSynchronizer(
      synchronizer_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}