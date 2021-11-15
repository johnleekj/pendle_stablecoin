/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { SimpleToken, SimpleTokenInterface } from '../SimpleToken';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b506040518060400160405280600c81526020016b29b4b6b83632902a37b5b2b760a11b8152506040518060400160405280600381526020016253494d60e81b81525081600390805190602001906200006b929190620001b0565b50805162000081906004906020840190620001b0565b505050620000be3362000099620000c460201b60201c565b620000a99060ff16600a620002fe565b620000b890620f4240620003f3565b620000c9565b62000468565b601290565b6001600160a01b038216620000fb5760405162461bcd60e51b8152600401620000f29062000256565b60405180910390fd5b6200010960008383620001ab565b80600260008282546200011d919062000296565b90915550506001600160a01b038216600090815260208190526040812080548392906200014c90849062000296565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90620001919085906200028d565b60405180910390a3620001a760008383620001ab565b5050565b505050565b828054620001be9062000415565b90600052602060002090601f016020900481019282620001e257600085556200022d565b82601f10620001fd57805160ff19168380011785556200022d565b828001600101855582156200022d579182015b828111156200022d57825182559160200191906001019062000210565b506200023b9291506200023f565b5090565b5b808211156200023b576000815560010162000240565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60008219821115620002ac57620002ac62000452565b500190565b80825b6001808611620002c55750620002f5565b818704821115620002da57620002da62000452565b80861615620002e857918102915b9490941c938002620002b4565b94509492505050565b60006200030f600019848462000316565b9392505050565b60008262000327575060016200030f565b8162000336575060006200030f565b81600181146200034f57600281146200035a576200038e565b60019150506200030f565b60ff8411156200036e576200036e62000452565b6001841b91508482111562000387576200038762000452565b506200030f565b5060208310610133831016604e8410600b8410161715620003c6575081810a83811115620003c057620003c062000452565b6200030f565b620003d58484846001620002b1565b808604821115620003ea57620003ea62000452565b02949350505050565b600081600019048311821515161562000410576200041062000452565b500290565b6002810460018216806200042a57607f821691505b602082108114156200044c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6109bd80620004786000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461012957806370a082311461013c57806395d89b411461014f578063a457c2d714610157578063a9059cbb1461016a578063dd62ed3e1461017d576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ec57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b6610190565b6040516100c391906106dd565b60405180910390f35b6100df6100da3660046106a9565b610222565b6040516100c391906106d2565b6100f461023f565b6040516100c39190610911565b6100df61010f36600461066e565b610245565b61011c6102de565b6040516100c3919061091a565b6100df6101373660046106a9565b6102e3565b6100f461014a36600461061b565b610337565b6100b6610356565b6100df6101653660046106a9565b610365565b6100df6101783660046106a9565b6103de565b6100f461018b36600461063c565b6103f2565b60606003805461019f9061094c565b80601f01602080910402602001604051908101604052809291908181526020018280546101cb9061094c565b80156102185780601f106101ed57610100808354040283529160200191610218565b820191906000526020600020905b8154815290600101906020018083116101fb57829003601f168201915b5050505050905090565b600061023661022f61041d565b8484610421565b50600192915050565b60025490565b60006102528484846104d5565b6001600160a01b03841660009081526001602052604081208161027361041d565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156102bf5760405162461bcd60e51b81526004016102b6906107fb565b60405180910390fd5b6102d3856102cb61041d565b858403610421565b506001949350505050565b601290565b60006102366102f061041d565b8484600160006102fe61041d565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546103329190610928565b610421565b6001600160a01b0381166000908152602081905260409020545b919050565b60606004805461019f9061094c565b6000806001600061037461041d565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156103c05760405162461bcd60e51b81526004016102b6906108cc565b6103d46103cb61041d565b85858403610421565b5060019392505050565b60006102366103eb61041d565b84846104d5565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166104475760405162461bcd60e51b81526004016102b690610888565b6001600160a01b03821661046d5760405162461bcd60e51b81526004016102b690610773565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104c8908590610911565b60405180910390a3505050565b6001600160a01b0383166104fb5760405162461bcd60e51b81526004016102b690610843565b6001600160a01b0382166105215760405162461bcd60e51b81526004016102b690610730565b61052c8383836105ff565b6001600160a01b038316600090815260208190526040902054818110156105655760405162461bcd60e51b81526004016102b6906107b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061059c908490610928565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516105e69190610911565b60405180910390a36105f98484846105ff565b50505050565b505050565b80356001600160a01b038116811461035157600080fd5b60006020828403121561062c578081fd5b61063582610604565b9392505050565b6000806040838503121561064e578081fd5b61065783610604565b915061066560208401610604565b90509250929050565b600080600060608486031215610682578081fd5b61068b84610604565b925061069960208501610604565b9150604084013590509250925092565b600080604083850312156106bb578182fd5b6106c483610604565b946020939093013593505050565b901515815260200190565b6000602080835283518082850152825b81811015610709578581018301518582016040015282016106ed565b8181111561071a5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b90815260200190565b60ff91909116815260200190565b6000821982111561094757634e487b7160e01b81526011600452602481fd5b500190565b60028104600182168061096057607f821691505b6020821081141561098157634e487b7160e01b600052602260045260246000fd5b5091905056fea264697066735822122022962d5010ff0809ac87edd7d1cfdfea2caf86dd52c4a9ee0526f35af2fada9064736f6c63430008000033';

type SimpleTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: SimpleTokenConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleToken__factory extends ContractFactory {
  constructor(...args: SimpleTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<SimpleToken> {
    return super.deploy(overrides || {}) as Promise<SimpleToken>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SimpleToken {
    return super.attach(address) as SimpleToken;
  }
  connect(signer: Signer): SimpleToken__factory {
    return super.connect(signer) as SimpleToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleTokenInterface {
    return new utils.Interface(_abi) as SimpleTokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SimpleToken {
    return new Contract(address, _abi, signerOrProvider) as SimpleToken;
  }
}
