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

interface IDomainPriceOracleInterface extends ethers.utils.Interface {
  functions: {
    "getFee(bytes32)": FunctionFragment;
    "getPrice(bytes,bytes32,uint256)": FunctionFragment;
    "setFee(bytes32,uint256)": FunctionFragment;
    "setPrice(bytes32,uint256[])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getFee", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrice",
    values: [BytesLike, BigNumberish[]]
  ): string;

  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;

  events: {};
}

export class IDomainPriceOracle extends BaseContract {
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

  interface: IDomainPriceOracleInterface;

  functions: {
    getFee(tld: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;

    getPrice(
      name: BytesLike,
      tld: BytesLike,
      durations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setFee(
      tld: BytesLike,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPrice(
      tld: BytesLike,
      price_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getFee(tld: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  getPrice(
    name: BytesLike,
    tld: BytesLike,
    durations: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setFee(
    tld: BytesLike,
    fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPrice(
    tld: BytesLike,
    price_: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getFee(tld: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(
      name: BytesLike,
      tld: BytesLike,
      durations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFee(
      tld: BytesLike,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrice(
      tld: BytesLike,
      price_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getFee(tld: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(
      name: BytesLike,
      tld: BytesLike,
      durations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFee(
      tld: BytesLike,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPrice(
      tld: BytesLike,
      price_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getFee(
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      name: BytesLike,
      tld: BytesLike,
      durations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFee(
      tld: BytesLike,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPrice(
      tld: BytesLike,
      price_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
