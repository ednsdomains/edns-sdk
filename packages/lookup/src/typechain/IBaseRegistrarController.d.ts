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

interface IBaseRegistrarControllerInterface extends ethers.utils.Interface {
  functions: {
    "available(string,string)": FunctionFragment;
    "commit(string,string,address,uint256)": FunctionFragment;
    "makeCommitment(string,string,address,uint256)": FunctionFragment;
    "price(string,string,uint256)": FunctionFragment;
    "register(string,string,address,uint256,bytes32)": FunctionFragment;
    "renew(string,string,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "available",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "commit",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "makeCommitment",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "price",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [string, string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renew",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "available", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "commit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "makeCommitment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renew", data: BytesLike): Result;

  events: {};
}

export class IBaseRegistrarController extends BaseContract {
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

  interface: IBaseRegistrarControllerInterface;

  functions: {
    "available(string,string)"(
      domain: string,
      tld: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "available(string)"(
      tld: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    commit(
      domain: string,
      tld: string,
      owner: string,
      durations: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    makeCommitment(
      domain: string,
      tld: string,
      owner: string,
      durations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    price(
      domain: string,
      tld: string,
      durations: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    register(
      domain: string,
      tld: string,
      owner: string,
      durations: BigNumberish,
      commitment: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renew(
      domain: string,
      tld: string,
      durations: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  "available(string,string)"(
    domain: string,
    tld: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "available(string)"(
    tld: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  commit(
    domain: string,
    tld: string,
    owner: string,
    durations: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  makeCommitment(
    domain: string,
    tld: string,
    owner: string,
    durations: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  price(
    domain: string,
    tld: string,
    durations: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  register(
    domain: string,
    tld: string,
    owner: string,
    durations: BigNumberish,
    commitment: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renew(
    domain: string,
    tld: string,
    durations: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "available(string,string)"(
      domain: string,
      tld: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "available(string)"(
      tld: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    commit(
      domain: string,
      tld: string,
      owner: string,
      durations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    makeCommitment(
      domain: string,
      tld: string,
      owner: string,
      durations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    price(
      domain: string,
      tld: string,
      durations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    register(
      domain: string,
      tld: string,
      owner: string,
      durations: BigNumberish,
      commitment: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renew(
      domain: string,
      tld: string,
      durations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    "available(string,string)"(
      domain: string,
      tld: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "available(string)"(
      tld: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    commit(
      domain: string,
      tld: string,
      owner: string,
      durations: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    makeCommitment(
      domain: string,
      tld: string,
      owner: string,
      durations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    price(
      domain: string,
      tld: string,
      durations: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    register(
      domain: string,
      tld: string,
      owner: string,
      durations: BigNumberish,
      commitment: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renew(
      domain: string,
      tld: string,
      durations: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "available(string,string)"(
      domain: string,
      tld: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "available(string)"(
      tld: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    commit(
      domain: string,
      tld: string,
      owner: string,
      durations: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    makeCommitment(
      domain: string,
      tld: string,
      owner: string,
      durations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price(
      domain: string,
      tld: string,
      durations: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    register(
      domain: string,
      tld: string,
      owner: string,
      durations: BigNumberish,
      commitment: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renew(
      domain: string,
      tld: string,
      durations: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}