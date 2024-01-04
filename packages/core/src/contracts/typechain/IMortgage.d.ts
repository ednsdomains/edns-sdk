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

interface IMortgageInterface extends ethers.utils.Interface {
  functions: {
    "deposit(bytes32,bytes32,address,address,uint256)": FunctionFragment;
    "getRequirement(bytes32,bytes32)": FunctionFragment;
    "isExists(bytes32,bytes32)": FunctionFragment;
    "isFulfill(bytes32,bytes32)": FunctionFragment;
    "setRequirement(bytes32,bytes32,uint256)": FunctionFragment;
    "withdraw(bytes32,bytes32,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deposit",
    values: [BytesLike, BytesLike, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequirement",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isExists",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isFulfill",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRequirement",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BytesLike, BytesLike, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRequirement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isExists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isFulfill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRequirement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposit(bytes32,bytes32,address,uint256)": EventFragment;
    "Withdraw(bytes32,bytes32,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type DepositEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    name: string;
    tld: string;
    owner: string;
    amount: BigNumber;
  }
>;

export type WithdrawEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    name: string;
    tld: string;
    to: string;
    amount: BigNumber;
  }
>;

export class IMortgage extends BaseContract {
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

  interface: IMortgageInterface;

  functions: {
    deposit(
      name: BytesLike,
      tld: BytesLike,
      owner: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRequirement(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isExists(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isFulfill(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setRequirement(
      name: BytesLike,
      tld: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      name: BytesLike,
      tld: BytesLike,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deposit(
    name: BytesLike,
    tld: BytesLike,
    owner: string,
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRequirement(
    name: BytesLike,
    tld: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isExists(
    name: BytesLike,
    tld: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isFulfill(
    name: BytesLike,
    tld: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setRequirement(
    name: BytesLike,
    tld: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    name: BytesLike,
    tld: BytesLike,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      name: BytesLike,
      tld: BytesLike,
      owner: string,
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getRequirement(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isExists(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isFulfill(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setRequirement(
      name: BytesLike,
      tld: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      name: BytesLike,
      tld: BytesLike,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposit(bytes32,bytes32,address,uint256)"(
      name?: null,
      tld?: null,
      owner?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { name: string; tld: string; owner: string; amount: BigNumber }
    >;

    Deposit(
      name?: null,
      tld?: null,
      owner?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { name: string; tld: string; owner: string; amount: BigNumber }
    >;

    "Withdraw(bytes32,bytes32,address,uint256)"(
      name?: null,
      tld?: null,
      to?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { name: string; tld: string; to: string; amount: BigNumber }
    >;

    Withdraw(
      name?: null,
      tld?: null,
      to?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { name: string; tld: string; to: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    deposit(
      name: BytesLike,
      tld: BytesLike,
      owner: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRequirement(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isExists(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFulfill(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setRequirement(
      name: BytesLike,
      tld: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      name: BytesLike,
      tld: BytesLike,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      name: BytesLike,
      tld: BytesLike,
      owner: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRequirement(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isExists(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isFulfill(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRequirement(
      name: BytesLike,
      tld: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      name: BytesLike,
      tld: BytesLike,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
