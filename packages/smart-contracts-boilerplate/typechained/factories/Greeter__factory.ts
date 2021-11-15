/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Greeter, GreeterInterface } from '../Greeter';

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_greeting',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'greet',
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
    name: 'greeting',
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
    inputs: [
      {
        internalType: 'string',
        name: '_greeting',
        type: 'string',
      },
    ],
    name: 'setGreeting',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b506040516200095638038062000956833981016040819052620000349162000199565b620000646040518060600160405280602281526020016200093460229139826200008160201b620002961760201c565b805162000079906000906020840190620000f3565b50506200032d565b620000ce82826040516024016200009a92919062000275565b60408051601f198184030181529190526020810180516001600160e01b03908116634b5c427760e01b17909152620000d216565b5050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b8280546200010190620002da565b90600052602060002090601f01602090048101928262000125576000855562000170565b82601f106200014057805160ff191683800117855562000170565b8280016001018555821562000170579182015b828111156200017057825182559160200191906001019062000153565b506200017e92915062000182565b5090565b5b808211156200017e576000815560010162000183565b600060208284031215620001ab578081fd5b81516001600160401b0380821115620001c2578283fd5b818401915084601f830112620001d6578283fd5b815181811115620001eb57620001eb62000317565b604051601f8201601f19168101602001838111828210171562000212576200021262000317565b6040528181528382016020018710156200022a578485fd5b6200023d826020830160208701620002a7565b9695505050505050565b6000815180845262000261816020860160208601620002a7565b601f01601f19169290920160200192915050565b6000604082526200028a604083018562000247565b82810360208401526200029e818562000247565b95945050505050565b60005b83811015620002c4578181015183820152602001620002aa565b83811115620002d4576000848401525b50505050565b600281046001821680620002ef57607f821691505b602082108114156200031157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6105f7806200033d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063a413686214610046578063cfae32171461005b578063ef690cc014610079575b600080fd5b6100596100543660046103e4565b610081565b005b610063610176565b60405161007091906104d0565b60405180910390f35b610063610208565b61015f604051806040016040528060168152602001754368616e67696e67206772656574696e672066726f6d60501b815250600080546100c090610570565b80601f01602080910402602001604051908101604052809291908181526020018280546100ec90610570565b80156101395780601f1061010e57610100808354040283529160200191610139565b820191906000526020600020905b81548152906001019060200180831161011c57829003601f168201915b505050505060405180604001604052806002815260200161746f60f01b815250846102db565b805161017290600090602084019061034b565b5050565b60606000805461018590610570565b80601f01602080910402602001604051908101604052809291908181526020018280546101b190610570565b80156101fe5780601f106101d3576101008083540402835291602001916101fe565b820191906000526020600020905b8154815290600101906020018083116101e157829003601f168201915b5050505050905090565b6000805461021590610570565b80601f016020809104026020016040519081016040528092919081815260200182805461024190610570565b801561028e5780601f106102635761010080835404028352916020019161028e565b820191906000526020600020905b81548152906001019060200180831161027157829003601f168201915b505050505081565b61017282826040516024016102ac9291906104ea565b60408051601f198184030181529190526020810180516001600160e01b0316634b5c427760e01b17905261032a565b610324848484846040516024016102f59493929190610518565b60408051601f198184030181529190526020810180516001600160e01b0316636f34790560e11b17905261032a565b50505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b82805461035790610570565b90600052602060002090601f01602090048101928261037957600085556103bf565b82601f1061039257805160ff19168380011785556103bf565b828001600101855582156103bf579182015b828111156103bf5782518255916020019190600101906103a4565b506103cb9291506103cf565b5090565b5b808211156103cb57600081556001016103d0565b600060208083850312156103f6578182fd5b823567ffffffffffffffff8082111561040d578384fd5b818501915085601f830112610420578384fd5b813581811115610432576104326105ab565b604051601f8201601f1916810185018381118282101715610455576104556105ab565b604052818152838201850188101561046b578586fd5b818585018683013790810190930193909352509392505050565b60008151808452815b818110156104aa5760208185018101518683018201520161048e565b818111156104bb5782602083870101525b50601f01601f19169290920160200192915050565b6000602082526104e36020830184610485565b9392505050565b6000604082526104fd6040830185610485565b828103602084015261050f8185610485565b95945050505050565b60006080825261052b6080830187610485565b828103602084015261053d8187610485565b905082810360408401526105518186610485565b905082810360608401526105658185610485565b979650505050505050565b60028104600182168061058457607f821691505b602082108114156105a557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea264697066735822122027f4d093e996b566479fa055e50edc15375dc9737e0b6e9a25c4838236e66f3464736f6c634300080000334465706c6f79696e67206120477265657465722077697468206772656574696e673a';

type GreeterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: GreeterConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Greeter__factory extends ContractFactory {
  constructor(...args: GreeterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(_greeting: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<Greeter> {
    return super.deploy(_greeting, overrides || {}) as Promise<Greeter>;
  }
  getDeployTransaction(_greeting: string, overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(_greeting, overrides || {});
  }
  attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreeterInterface {
    return new utils.Interface(_abi) as GreeterInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}
