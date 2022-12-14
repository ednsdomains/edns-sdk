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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IRootInterface extends ethers.utils.Interface {
  functions: {
    "getResolver(bytes)": FunctionFragment;
    "isEnable(bytes)": FunctionFragment;
    "isOmni(bytes)": FunctionFragment;
    "reclaim(bytes)": FunctionFragment;
    "register(bytes,address,bool,bool,uint16[])": FunctionFragment;
    "setControllerApproval(bytes,address,bool)": FunctionFragment;
    "setEnable(bytes,bool)": FunctionFragment;
    "setResolver(bytes,address)": FunctionFragment;
    "transfer(bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getResolver",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isEnable", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "isOmni", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "reclaim", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [BytesLike, string, boolean, boolean, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setControllerApproval",
    values: [BytesLike, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setEnable",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setResolver",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "transfer", values: [BytesLike]): string;

  decodeFunctionResult(
    functionFragment: "getResolver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isEnable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOmni", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reclaim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setControllerApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setEnable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setResolver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;

  events: {};
}

export class IRoot extends BaseContract {
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

  interface: IRootInterface;

  functions: {
    getResolver(tld: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    isEnable(tld: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    isOmni(tld: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    reclaim(
      tld: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    register(
      tld: BytesLike,
      resolver: string,
      enable_: boolean,
      omni_: boolean,
      lzChainIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setControllerApproval(
      tld: BytesLike,
      controller: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEnable(
      tld: BytesLike,
      enable: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setResolver(
      tld: BytesLike,
      resolver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transfer(
      tld: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getResolver(tld: BytesLike, overrides?: CallOverrides): Promise<string>;

  isEnable(tld: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  isOmni(tld: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  reclaim(
    tld: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  register(
    tld: BytesLike,
    resolver: string,
    enable_: boolean,
    omni_: boolean,
    lzChainIds: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setControllerApproval(
    tld: BytesLike,
    controller: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEnable(
    tld: BytesLike,
    enable: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setResolver(
    tld: BytesLike,
    resolver: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transfer(
    tld: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getResolver(tld: BytesLike, overrides?: CallOverrides): Promise<string>;

    isEnable(tld: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    isOmni(tld: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    reclaim(tld: BytesLike, overrides?: CallOverrides): Promise<void>;

    register(
      tld: BytesLike,
      resolver: string,
      enable_: boolean,
      omni_: boolean,
      lzChainIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    setControllerApproval(
      tld: BytesLike,
      controller: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setEnable(
      tld: BytesLike,
      enable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setResolver(
      tld: BytesLike,
      resolver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transfer(tld: BytesLike, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getResolver(tld: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    isEnable(tld: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    isOmni(tld: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    reclaim(
      tld: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    register(
      tld: BytesLike,
      resolver: string,
      enable_: boolean,
      omni_: boolean,
      lzChainIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setControllerApproval(
      tld: BytesLike,
      controller: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEnable(
      tld: BytesLike,
      enable: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setResolver(
      tld: BytesLike,
      resolver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transfer(
      tld: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getResolver(
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isEnable(
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOmni(
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reclaim(
      tld: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    register(
      tld: BytesLike,
      resolver: string,
      enable_: boolean,
      omni_: boolean,
      lzChainIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setControllerApproval(
      tld: BytesLike,
      controller: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEnable(
      tld: BytesLike,
      enable: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setResolver(
      tld: BytesLike,
      resolver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transfer(
      tld: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
