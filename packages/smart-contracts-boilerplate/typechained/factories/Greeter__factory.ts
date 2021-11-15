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
  '0x608060405234801561001057600080fd5b506040516105d03803806105d083398101604081905261002f916100e2565b8051610042906000906020840190610049565b50506101f5565b828054610055906101a4565b90600052602060002090601f01602090048101928261007757600085556100bd565b82601f1061009057805160ff19168380011785556100bd565b828001600101855582156100bd579182015b828111156100bd5782518255916020019190600101906100a2565b506100c99291506100cd565b5090565b5b808211156100c957600081556001016100ce565b600060208083850312156100f4578182fd5b82516001600160401b038082111561010a578384fd5b818501915085601f83011261011d578384fd5b81518181111561012f5761012f6101df565b604051601f8201601f1916810185018381118282101715610152576101526101df565b6040528181528382018501881015610168578586fd5b8592505b81831015610189578383018501518184018601529184019161016c565b8183111561019957858583830101525b979650505050505050565b6002810460018216806101b857607f821691505b602082108114156101d957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6103cc806102046000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063a413686214610046578063cfae32171461005b578063ef690cc014610079575b600080fd5b610059610054366004610251565b610081565b005b610063610098565b60405161007091906102f2565b60405180910390f35b61006361012a565b80516100949060009060208401906101b8565b5050565b6060600080546100a790610345565b80601f01602080910402602001604051908101604052809291908181526020018280546100d390610345565b80156101205780601f106100f557610100808354040283529160200191610120565b820191906000526020600020905b81548152906001019060200180831161010357829003601f168201915b5050505050905090565b6000805461013790610345565b80601f016020809104026020016040519081016040528092919081815260200182805461016390610345565b80156101b05780601f10610185576101008083540402835291602001916101b0565b820191906000526020600020905b81548152906001019060200180831161019357829003601f168201915b505050505081565b8280546101c490610345565b90600052602060002090601f0160209004810192826101e6576000855561022c565b82601f106101ff57805160ff191683800117855561022c565b8280016001018555821561022c579182015b8281111561022c578251825591602001919060010190610211565b5061023892915061023c565b5090565b5b80821115610238576000815560010161023d565b60006020808385031215610263578182fd5b823567ffffffffffffffff8082111561027a578384fd5b818501915085601f83011261028d578384fd5b81358181111561029f5761029f610380565b604051601f8201601f19168101850183811182821017156102c2576102c2610380565b60405281815283820185018810156102d8578586fd5b818585018683013790810190930193909352509392505050565b6000602080835283518082850152825b8181101561031e57858101830151858201604001528201610302565b8181111561032f5783604083870101525b50601f01601f1916929092016040019392505050565b60028104600182168061035957607f821691505b6020821081141561037a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220a2b4a4704314a73830a72b5266778c80e7566f8a3fec733d05090c0d75b9585964736f6c63430008000033';

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
