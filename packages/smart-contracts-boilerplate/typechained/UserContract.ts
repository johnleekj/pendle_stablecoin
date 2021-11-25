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
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface UserContractInterface extends ethers.utils.Interface {
  functions: {
    "SetMockOTContract(address)": FunctionFragment;
    "SetVaultContract(address)": FunctionFragment;
    "addCollateral(uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "borrowKhooleeCoins(uint256)": FunctionFragment;
    "c_0xdd04a523(bytes32)": FunctionFragment;
    "getExpiry()": FunctionFragment;
    "getStart()": FunctionFragment;
    "removeCollateral(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "SetMockOTContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "SetVaultContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addCollateral",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "borrowKhooleeCoins",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "c_0xdd04a523",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getExpiry", values?: undefined): string;
  encodeFunctionData(functionFragment: "getStart", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeCollateral",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "SetMockOTContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SetVaultContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowKhooleeCoins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_0xdd04a523",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getExpiry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getStart", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;

  events: {};
}

export interface UserContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UserContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    SetMockOTContract(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    SetVaultContract(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addCollateral(
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    borrowKhooleeCoins(
      borrowAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    c_0xdd04a523(
      c__0xdd04a523: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    getExpiry(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStart(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeCollateral(
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  SetMockOTContract(
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  SetVaultContract(
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addCollateral(
    collateralAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  borrowKhooleeCoins(
    borrowAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  c_0xdd04a523(
    c__0xdd04a523: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  getExpiry(overrides?: CallOverrides): Promise<BigNumber>;

  getStart(overrides?: CallOverrides): Promise<BigNumber>;

  removeCollateral(
    collateralAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    SetMockOTContract(addr: string, overrides?: CallOverrides): Promise<void>;

    SetVaultContract(addr: string, overrides?: CallOverrides): Promise<void>;

    addCollateral(
      collateralAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    borrowKhooleeCoins(
      borrowAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    c_0xdd04a523(
      c__0xdd04a523: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getExpiry(overrides?: CallOverrides): Promise<BigNumber>;

    getStart(overrides?: CallOverrides): Promise<BigNumber>;

    removeCollateral(
      collateralAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    SetMockOTContract(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    SetVaultContract(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addCollateral(
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    borrowKhooleeCoins(
      borrowAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    c_0xdd04a523(
      c__0xdd04a523: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getExpiry(overrides?: CallOverrides): Promise<BigNumber>;

    getStart(overrides?: CallOverrides): Promise<BigNumber>;

    removeCollateral(
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    SetMockOTContract(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    SetVaultContract(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addCollateral(
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowKhooleeCoins(
      borrowAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    c_0xdd04a523(
      c__0xdd04a523: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getExpiry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStart(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeCollateral(
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
