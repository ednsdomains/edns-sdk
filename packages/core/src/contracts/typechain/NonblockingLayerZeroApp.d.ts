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

interface NonblockingLayerZeroAppInterface extends ethers.utils.Interface {
  functions: {
    "failedMessageReasons(uint16,bytes,uint64)": FunctionFragment;
    "failedMessages(uint16,bytes,uint64)": FunctionFragment;
    "forceResumeReceive(uint16,bytes)": FunctionFragment;
    "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
    "getGasLimit(bytes)": FunctionFragment;
    "isTrustedRemote(uint16,bytes)": FunctionFragment;
    "lzEndpoint()": FunctionFragment;
    "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
    "minDstGasLookup(uint16,uint256)": FunctionFragment;
    "nonblockingLzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
    "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
    "setMinDstGasLookup(uint16,uint256,uint256)": FunctionFragment;
    "setReceiveVersion(uint16)": FunctionFragment;
    "setSendVersion(uint16)": FunctionFragment;
    "setTrustedRemote(uint16,bytes)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "trustedRemoteLookup(uint16)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "failedMessageReasons",
    values: [BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessages",
    values: [BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "forceResumeReceive",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getConfig",
    values: [BigNumberish, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasLimit",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedRemote",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lzEndpoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lzReceive",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "minDstGasLookup",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nonblockingLzReceive",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "retryMessage",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinDstGasLookup",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setReceiveVersion",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSendVersion",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustedRemote",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "trustedRemoteLookup",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "failedMessageReasons",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failedMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forceResumeReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedRemote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minDstGasLookup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nonblockingLzReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retryMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinDstGasLookup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReceiveVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSendVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedRemote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedRemoteLookup",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "MessageFailed(uint16,bytes,uint64,bytes,bytes)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetMinDstGasLookup(uint16,uint256,uint256)": EventFragment;
    "SetTrustedRemote(uint16,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetMinDstGasLookup"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type MessageFailedEvent = TypedEvent<
  [number, string, BigNumber, string, string] & {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payload: string;
    _resaon: string;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type SetMinDstGasLookupEvent = TypedEvent<
  [number, BigNumber, BigNumber] & {
    _dstChainId: number;
    _type: BigNumber;
    _dstGasAmount: BigNumber;
  }
>;

export type SetTrustedRemoteEvent = TypedEvent<
  [number, string] & { _srcChainId: number; _srcAddress: string }
>;

export class NonblockingLayerZeroApp extends BaseContract {
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

  interface: NonblockingLayerZeroAppInterface;

  functions: {
    failedMessageReasons(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    forceResumeReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      arg2: string,
      _configType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getGasLimit(
      _adapterParams: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { gasLimit: BigNumber }>;

    isTrustedRemote(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lzEndpoint(overrides?: CallOverrides): Promise<[string]>;

    lzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    minDstGasLookup(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    nonblockingLzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    retryMessage(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinDstGasLookup(
      _dstChainId: BigNumberish,
      _type: BigNumberish,
      _dstGasAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReceiveVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSendVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTrustedRemote(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    trustedRemoteLookup(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  failedMessageReasons(
    arg0: BigNumberish,
    arg1: BytesLike,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  failedMessages(
    arg0: BigNumberish,
    arg1: BytesLike,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  forceResumeReceive(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getConfig(
    _version: BigNumberish,
    _chainId: BigNumberish,
    arg2: string,
    _configType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getGasLimit(
    _adapterParams: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isTrustedRemote(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lzEndpoint(overrides?: CallOverrides): Promise<string>;

  lzReceive(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _nonce: BigNumberish,
    _payload: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  minDstGasLookup(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nonblockingLzReceive(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _nonce: BigNumberish,
    _payload: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  retryMessage(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _nonce: BigNumberish,
    _payload: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setConfig(
    _version: BigNumberish,
    _chainId: BigNumberish,
    _configType: BigNumberish,
    _config: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinDstGasLookup(
    _dstChainId: BigNumberish,
    _type: BigNumberish,
    _dstGasAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReceiveVersion(
    _version: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSendVersion(
    _version: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTrustedRemote(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  trustedRemoteLookup(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    failedMessageReasons(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    forceResumeReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      arg2: string,
      _configType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getGasLimit(
      _adapterParams: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTrustedRemote(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lzEndpoint(overrides?: CallOverrides): Promise<string>;

    lzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    minDstGasLookup(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nonblockingLzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    retryMessage(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinDstGasLookup(
      _dstChainId: BigNumberish,
      _type: BigNumberish,
      _dstGasAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setReceiveVersion(
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSendVersion(
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTrustedRemote(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    trustedRemoteLookup(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(
      _srcChainId?: null,
      _srcAddress?: null,
      _nonce?: null,
      _payload?: null,
      _resaon?: null
    ): TypedEventFilter<
      [number, string, BigNumber, string, string],
      {
        _srcChainId: number;
        _srcAddress: string;
        _nonce: BigNumber;
        _payload: string;
        _resaon: string;
      }
    >;

    MessageFailed(
      _srcChainId?: null,
      _srcAddress?: null,
      _nonce?: null,
      _payload?: null,
      _resaon?: null
    ): TypedEventFilter<
      [number, string, BigNumber, string, string],
      {
        _srcChainId: number;
        _srcAddress: string;
        _nonce: BigNumber;
        _payload: string;
        _resaon: string;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "SetMinDstGasLookup(uint16,uint256,uint256)"(
      _dstChainId?: null,
      _type?: null,
      _dstGasAmount?: null
    ): TypedEventFilter<
      [number, BigNumber, BigNumber],
      { _dstChainId: number; _type: BigNumber; _dstGasAmount: BigNumber }
    >;

    SetMinDstGasLookup(
      _dstChainId?: null,
      _type?: null,
      _dstGasAmount?: null
    ): TypedEventFilter<
      [number, BigNumber, BigNumber],
      { _dstChainId: number; _type: BigNumber; _dstGasAmount: BigNumber }
    >;

    "SetTrustedRemote(uint16,bytes)"(
      _srcChainId?: null,
      _srcAddress?: null
    ): TypedEventFilter<
      [number, string],
      { _srcChainId: number; _srcAddress: string }
    >;

    SetTrustedRemote(
      _srcChainId?: null,
      _srcAddress?: null
    ): TypedEventFilter<
      [number, string],
      { _srcChainId: number; _srcAddress: string }
    >;
  };

  estimateGas: {
    failedMessageReasons(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    forceResumeReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      arg2: string,
      _configType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasLimit(
      _adapterParams: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTrustedRemote(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lzEndpoint(overrides?: CallOverrides): Promise<BigNumber>;

    lzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    minDstGasLookup(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nonblockingLzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    retryMessage(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinDstGasLookup(
      _dstChainId: BigNumberish,
      _type: BigNumberish,
      _dstGasAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReceiveVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSendVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTrustedRemote(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    trustedRemoteLookup(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    failedMessageReasons(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    forceResumeReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      arg2: string,
      _configType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasLimit(
      _adapterParams: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTrustedRemote(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lzEndpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    minDstGasLookup(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonblockingLzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    retryMessage(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinDstGasLookup(
      _dstChainId: BigNumberish,
      _type: BigNumberish,
      _dstGasAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReceiveVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSendVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTrustedRemote(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    trustedRemoteLookup(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
