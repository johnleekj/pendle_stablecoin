/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UserContract, UserContractInterface } from "../UserContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "SetMockOTContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "SetVaultContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
    ],
    name: "addCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
    ],
    name: "borrowKhooleeCoins",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0xdd04a523",
        type: "bytes32",
      },
    ],
    name: "c_0xdd04a523",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getExpiry",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
    ],
    name: "removeCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d61806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063bcc46e8311610066578063bcc46e8314610145578063c1e0cc3e14610161578063c5292c671461017d578063da300e361461019b578063f61c266b146101b75761009e565b806318160ddd146100a35780633237c158146100c157806332564042146100dd57806370a08231146100f9578063949d7a1a14610129575b600080fd5b6100ab6101d5565b6040516100b89190610c85565b60405180910390f35b6100db60048036038101906100d69190610bfa565b6102fe565b005b6100f760048036038101906100f29190610bfa565b610412565b005b610113600480360381019061010e9190610ba8565b610526565b6040516101209190610c85565b60405180910390f35b610143600480360381019061013e9190610ba8565b61065c565b005b61015f600480360381019061015a9190610bfa565b610723565b005b61017b60048036038101906101769190610bd1565b610837565b005b61018561083a565b6040516101929190610c85565b60405180910390f35b6101b560048036038101906101b09190610ba8565b610963565b005b6101bf610a2b565b6040516101cc9190610c85565b60405180910390f35b60006102037f9f1203e6ffe61f29246059904567a232ea12f17a935880473c6b52755a467bd560001b610837565b61022f7f812b812cc079be56128fc174917ca62cfb36cab8bf91f25af07899fb99d78a7460001b610837565b61025b7f91e613527c342445a67488508c420d8e996608616d6367ac341f3171ef627b3560001b610837565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102c157600080fd5b505afa1580156102d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f99190610c23565b905090565b61032a7f1598dbc663f69e45c81c6a1c141680e4e9bc08c6c99e98f376a8aec0a2dbdf1c60001b610837565b6103567f4f1662dc6e3bdc76fac5a947f4b41ceae4e90bb9d1669102b6c048e5aee643f060001b610837565b6103827f889e9d8f5de522ac30319a2d9d860afac56ccc80171353ac8627c58846fc9f9560001b610837565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633237c158826040518263ffffffff1660e01b81526004016103dd9190610c85565b600060405180830381600087803b1580156103f757600080fd5b505af115801561040b573d6000803e3d6000fd5b5050505050565b61043e7f7d51bd9195f87ec5e29bb80865a660289cbe3f7f553300dae3ebb3d123171a8860001b610837565b61046a7f6418b5ed33ae546083c530ee8d21b3a88e593435cbf2dccb0d88dc69ad78e4a960001b610837565b6104967fc0b7024b87cb554c9b607d30a69c534c2a06ae2af318028290d18d7e64b882bd60001b610837565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166332564042826040518263ffffffff1660e01b81526004016104f19190610c85565b600060405180830381600087803b15801561050b57600080fd5b505af115801561051f573d6000803e3d6000fd5b5050505050565b60006105547f4736b5ed3c434e65700fd1ae1357c03fca2abfa3bfd6ec63f170c7bdeefe6a6360001b610837565b6105807f8674e9ad095274d5462a8da67e7d7d0281cc806c15b60cc1e6a517657e21453160001b610837565b6105ac7fec3825c7bb8cf72afab79e3bab041a3e6eed283019bdcb421783a9159ca2cd7d60001b610837565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b81526004016106059190610c6a565b60206040518083038186803b15801561061d57600080fd5b505afa158015610631573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106559190610c23565b9050919050565b6106887f67abfe4300495c27c6e51851961e2b4747b70735d0063aa8fa02830b31db564c60001b610837565b6106b47f8a6bff2baadcc0d46b4c79d49b5e178f580cf904fa4894a00f5e20eea1d47b6960001b610837565b6106e07fabc3fc084bfa18ec050f8fcc61c1c5ab53993bec049ac09ccb52fff367274fb060001b610837565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61074f7f6c54c4ddb7cdffa6cf588023a0e369cdeb496ae288e81a18cf7a741e1528022460001b610837565b61077b7fdcec4f022e670c945365294f71d2d3ac7379a69c7e10181ca704903f91e2455260001b610837565b6107a77f90870573571e0ac31fa8866ea36fa871b33b38a440c2c927bd8bc8c4bffebd5260001b610837565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bcc46e83826040518263ffffffff1660e01b81526004016108029190610c85565b600060405180830381600087803b15801561081c57600080fd5b505af1158015610830573d6000803e3d6000fd5b5050505050565b50565b60006108687f8d21d149cad3f75df8bed9ec14de2ed41534105d0425ced87b696b21c83ecc0760001b610837565b6108947fb4d6fc21854bc29d66642b5339644a9ff1084ef10ca53f2e1f3fb160c115073460001b610837565b6108c07fb701c1dca0a97a5dbaf219e4ec9b640eb58fde2f8e1b1d5661c80a200d2ba90460001b610837565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c5292c676040518163ffffffff1660e01b815260040160206040518083038186803b15801561092657600080fd5b505afa15801561093a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095e9190610c23565b905090565b61098f7f23984a9fccc627e46a93580ef94b39d4f4a294e3a02b42bde0b6a07799b638a860001b610837565b6109bb7f5b9fffaaa877d822429e25bd5c60054403a2a72f447e0234eb100fde5d578c4c60001b610837565b6109e77f6a8186c39d52c9f7879f23139c4b096dccfef5cf98a66085948436882423ae9860001b610837565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000610a597f80bc94e46d69a1f68cd8c9b0c61c48cc8ee7f42818eaaf759eaf99fc2c8ea75c60001b610837565b610a857f1c4dd01a5f7f00b63605c3c47704b3157881d2b3c5c4aacbaf5af6ff65154db960001b610837565b610ab17f6cde2ca00d88090302b40ec5e8d23f6ffb12d21974ce9552083184bb3060424060001b610837565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f61c266b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b1757600080fd5b505afa158015610b2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4f9190610c23565b905090565b600081359050610b6381610ce6565b92915050565b600081359050610b7881610cfd565b92915050565b600081359050610b8d81610d14565b92915050565b600081519050610ba281610d14565b92915050565b600060208284031215610bba57600080fd5b6000610bc884828501610b54565b91505092915050565b600060208284031215610be357600080fd5b6000610bf184828501610b69565b91505092915050565b600060208284031215610c0c57600080fd5b6000610c1a84828501610b7e565b91505092915050565b600060208284031215610c3557600080fd5b6000610c4384828501610b93565b91505092915050565b610c5581610ca0565b82525050565b610c6481610cdc565b82525050565b6000602082019050610c7f6000830184610c4c565b92915050565b6000602082019050610c9a6000830184610c5b565b92915050565b6000610cab82610cbc565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b610cef81610ca0565b8114610cfa57600080fd5b50565b610d0681610cb2565b8114610d1157600080fd5b50565b610d1d81610cdc565b8114610d2857600080fd5b5056fea26469706673582212200eded75808aeb3cff931d70942ab2cca2a30587041a2d88a2408f5653c31699864736f6c63430008000033";

type UserContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserContract__factory extends ContractFactory {
  constructor(...args: UserContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UserContract> {
    return super.deploy(overrides || {}) as Promise<UserContract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UserContract {
    return super.attach(address) as UserContract;
  }
  connect(signer: Signer): UserContract__factory {
    return super.connect(signer) as UserContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserContractInterface {
    return new utils.Interface(_abi) as UserContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserContract {
    return new Contract(address, _abi, signerOrProvider) as UserContract;
  }
}
