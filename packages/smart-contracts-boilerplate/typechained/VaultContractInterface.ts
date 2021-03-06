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
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface VaultContractInterfaceInterface extends ethers.utils.Interface {
  functions: {
    'addCollateral(uint256)': FunctionFragment;
    'borrowKhooleeCoins(uint256)': FunctionFragment;
    'removeCollateral(uint256)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'addCollateral', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'borrowKhooleeCoins', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'removeCollateral', values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'addCollateral', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'borrowKhooleeCoins', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeCollateral', data: BytesLike): Result;

  events: {};
}

export interface VaultContractInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VaultContractInterfaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addCollateral(collateralAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    borrowKhooleeCoins(borrowAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    removeCollateral(collateralAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;
  };

  addCollateral(collateralAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  borrowKhooleeCoins(borrowAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  removeCollateral(collateralAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  callStatic: {
    addCollateral(collateralAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    borrowKhooleeCoins(borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    removeCollateral(collateralAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addCollateral(collateralAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    borrowKhooleeCoins(borrowAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    removeCollateral(collateralAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    addCollateral(collateralAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    borrowKhooleeCoins(borrowAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    removeCollateral(collateralAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;
  };
}
