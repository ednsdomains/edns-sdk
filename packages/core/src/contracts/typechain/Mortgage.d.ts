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

interface MortgageInterface extends ethers.utils.Interface {
  functions: {
    "ADMIN_ROLE()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "OPERATOR_ROLE()": FunctionFragment;
    "deposit(bytes32,bytes32,address,address,uint256)": FunctionFragment;
    "getRegistry()": FunctionFragment;
    "getRequirement(bytes32,bytes32)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isExists(bytes32,bytes32)": FunctionFragment;
    "isFulfill(bytes32,bytes32)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setRegistry(address)": FunctionFragment;
    "setRequirement(bytes32,bytes32,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "unpause()": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
    "withdraw(bytes32,bytes32,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OPERATOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BytesLike, BytesLike, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRequirement",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isExists",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isFulfill",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "setRegistry", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setRequirement",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BytesLike, BytesLike, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "OPERATOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequirement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isExists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isFulfill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRequirement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "Deposit(bytes32,bytes32,address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "Paused(address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Upgraded(address)": EventFragment;
    "Withdraw(bytes32,bytes32,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type AdminChangedEvent = TypedEvent<
  [string, string] & { previousAdmin: string; newAdmin: string }
>;

export type BeaconUpgradedEvent = TypedEvent<[string] & { beacon: string }>;

export type DepositEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    name: string;
    tld: string;
    owner: string;
    amount: BigNumber;
  }
>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string] & {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export type UpgradedEvent = TypedEvent<[string] & { implementation: string }>;

export type WithdrawEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    name: string;
    tld: string;
    to: string;
    amount: BigNumber;
  }
>;

export class Mortgage extends BaseContract {
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

  interface: MortgageInterface;

  functions: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    OPERATOR_ROLE(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      name: BytesLike,
      tld: BytesLike,
      owner: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRegistry(overrides?: CallOverrides): Promise<[string]>;

    getRequirement(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRegistry(
      registry_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRequirement(
      name: BytesLike,
      tld: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      name: BytesLike,
      tld: BytesLike,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  OPERATOR_ROLE(overrides?: CallOverrides): Promise<string>;

  deposit(
    name: BytesLike,
    tld: BytesLike,
    owner: string,
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRegistry(overrides?: CallOverrides): Promise<string>;

  getRequirement(
    name: BytesLike,
    tld: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    token_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRegistry(
    registry_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRequirement(
    name: BytesLike,
    tld: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    name: BytesLike,
    tld: BytesLike,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    OPERATOR_ROLE(overrides?: CallOverrides): Promise<string>;

    deposit(
      name: BytesLike,
      tld: BytesLike,
      owner: string,
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getRegistry(overrides?: CallOverrides): Promise<string>;

    getRequirement(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(token_: string, overrides?: CallOverrides): Promise<void>;

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

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRegistry(registry_: string, overrides?: CallOverrides): Promise<void>;

    setRequirement(
      name: BytesLike,
      tld: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    unpause(overrides?: CallOverrides): Promise<void>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
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
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): TypedEventFilter<
      [string, string],
      { previousAdmin: string; newAdmin: string }
    >;

    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): TypedEventFilter<
      [string, string],
      { previousAdmin: string; newAdmin: string }
    >;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): TypedEventFilter<[string], { beacon: string }>;

    BeaconUpgraded(
      beacon?: string | null
    ): TypedEventFilter<[string], { beacon: string }>;

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

    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Upgraded(address)"(
      implementation?: string | null
    ): TypedEventFilter<[string], { implementation: string }>;

    Upgraded(
      implementation?: string | null
    ): TypedEventFilter<[string], { implementation: string }>;

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
    ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    OPERATOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      name: BytesLike,
      tld: BytesLike,
      owner: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    getRequirement(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
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

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRegistry(
      registry_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRequirement(
      name: BytesLike,
      tld: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
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
    ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    OPERATOR_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      name: BytesLike,
      tld: BytesLike,
      owner: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRequirement(
      name: BytesLike,
      tld: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
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

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRegistry(
      registry_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRequirement(
      name: BytesLike,
      tld: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
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
