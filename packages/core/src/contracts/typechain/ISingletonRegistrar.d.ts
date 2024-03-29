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

interface ISingletonRegistrarInterface extends ethers.utils.Interface {
  functions: {
    "getExpiry(bytes,bytes)": FunctionFragment;
    "isAvailable(bytes,bytes)": FunctionFragment;
    "isControllerApproved(bytes32,address)": FunctionFragment;
    "isExists(bytes32)": FunctionFragment;
    "register(bytes,bytes,address,uint64)": FunctionFragment;
    "renew(bytes,bytes,uint64)": FunctionFragment;
    "setControllerApproval(bytes32,address,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getExpiry",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isAvailable",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isControllerApproved",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "isExists", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [BytesLike, BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renew",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setControllerApproval",
    values: [BytesLike, string, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "getExpiry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isControllerApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isExists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renew", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setControllerApproval",
    data: BytesLike
  ): Result;

  events: {
    "DomainReclaimed(bytes,bytes,address)": EventFragment;
    "DomainRegistered(bytes,bytes,address,uint256)": EventFragment;
    "DomainRenewed(bytes,bytes,uint256)": EventFragment;
    "SetController(bytes32,address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DomainReclaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DomainRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DomainRenewed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetController"): EventFragment;
}

export type DomainReclaimedEvent = TypedEvent<
  [string, string, string] & { name: string; tld: string; owner: string }
>;

export type DomainRegisteredEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    name: string;
    tld: string;
    owner: string;
    expiry: BigNumber;
  }
>;

export type DomainRenewedEvent = TypedEvent<
  [string, string, BigNumber] & { name: string; tld: string; expiry: BigNumber }
>;

export type SetControllerEvent = TypedEvent<
  [string, string, boolean] & {
    tld: string;
    controller: string;
    approved: boolean;
  }
>;

export class ISingletonRegistrar extends BaseContract {
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

  interface: ISingletonRegistrarInterface;

  functions: {
    getExpiry(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "isAvailable(bytes,bytes)"(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isAvailable(bytes)"(
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isControllerApproved(
      tld: BytesLike,
      controller: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isExists(bytes32)"(
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isExists(bytes,bytes)"(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    register(
      name: BytesLike,
      tld: BytesLike,
      owner: string,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renew(
      name: BytesLike,
      tld: BytesLike,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setControllerApproval(
      tld: BytesLike,
      controller: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getExpiry(
    name: BytesLike,
    tld: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "isAvailable(bytes,bytes)"(
    name: BytesLike,
    tld: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isAvailable(bytes)"(
    tld: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isControllerApproved(
    tld: BytesLike,
    controller: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isExists(bytes32)"(
    tld: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isExists(bytes,bytes)"(
    name: BytesLike,
    tld: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  register(
    name: BytesLike,
    tld: BytesLike,
    owner: string,
    expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renew(
    name: BytesLike,
    tld: BytesLike,
    expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setControllerApproval(
    tld: BytesLike,
    controller: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getExpiry(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAvailable(bytes,bytes)"(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isAvailable(bytes)"(
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isControllerApproved(
      tld: BytesLike,
      controller: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isExists(bytes32)"(
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isExists(bytes,bytes)"(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    register(
      name: BytesLike,
      tld: BytesLike,
      owner: string,
      expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renew(
      name: BytesLike,
      tld: BytesLike,
      expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setControllerApproval(
      tld: BytesLike,
      controller: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DomainReclaimed(bytes,bytes,address)"(
      name?: null,
      tld?: null,
      owner?: null
    ): TypedEventFilter<
      [string, string, string],
      { name: string; tld: string; owner: string }
    >;

    DomainReclaimed(
      name?: null,
      tld?: null,
      owner?: null
    ): TypedEventFilter<
      [string, string, string],
      { name: string; tld: string; owner: string }
    >;

    "DomainRegistered(bytes,bytes,address,uint256)"(
      name?: null,
      tld?: null,
      owner?: null,
      expiry?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { name: string; tld: string; owner: string; expiry: BigNumber }
    >;

    DomainRegistered(
      name?: null,
      tld?: null,
      owner?: null,
      expiry?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { name: string; tld: string; owner: string; expiry: BigNumber }
    >;

    "DomainRenewed(bytes,bytes,uint256)"(
      name?: null,
      tld?: null,
      expiry?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { name: string; tld: string; expiry: BigNumber }
    >;

    DomainRenewed(
      name?: null,
      tld?: null,
      expiry?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { name: string; tld: string; expiry: BigNumber }
    >;

    "SetController(bytes32,address,bool)"(
      tld?: null,
      controller?: null,
      approved?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { tld: string; controller: string; approved: boolean }
    >;

    SetController(
      tld?: null,
      controller?: null,
      approved?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { tld: string; controller: string; approved: boolean }
    >;
  };

  estimateGas: {
    getExpiry(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAvailable(bytes,bytes)"(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAvailable(bytes)"(
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isControllerApproved(
      tld: BytesLike,
      controller: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isExists(bytes32)"(
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isExists(bytes,bytes)"(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    register(
      name: BytesLike,
      tld: BytesLike,
      owner: string,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renew(
      name: BytesLike,
      tld: BytesLike,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setControllerApproval(
      tld: BytesLike,
      controller: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getExpiry(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAvailable(bytes,bytes)"(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAvailable(bytes)"(
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isControllerApproved(
      tld: BytesLike,
      controller: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isExists(bytes32)"(
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isExists(bytes,bytes)"(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    register(
      name: BytesLike,
      tld: BytesLike,
      owner: string,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renew(
      name: BytesLike,
      tld: BytesLike,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setControllerApproval(
      tld: BytesLike,
      controller: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
