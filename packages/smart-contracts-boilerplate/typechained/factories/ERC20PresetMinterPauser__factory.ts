/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { ERC20PresetMinterPauser, ERC20PresetMinterPauserInterface } from '../ERC20PresetMinterPauser';

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
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
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PAUSER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burn',
    outputs: [],
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
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
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
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getRoleMember',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleMemberCount',
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
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
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
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
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
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
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
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b506040516200205c3803806200205c8339810160408190526200003491620003ce565b8151829082906200004d9060059060208501906200027d565b508051620000639060069060208401906200027d565b50506007805460ff191690555062000086600062000080620000ec565b620000f0565b620000b57f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a662000080620000ec565b620000e47f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a62000080620000ec565b505062000488565b3390565b6200010782826200013360201b620008e91760201c565b60008281526001602090815260409091206200012e918390620008f362000143821b17901c565b505050565b6200013f828262000163565b5050565b60006200015a836001600160a01b038416620001ed565b90505b92915050565b6200016f82826200023c565b6200013f576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001a9620000ec565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001fb838362000265565b62000233575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200015d565b5060006200015d565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60009081526001919091016020526040902054151590565b8280546200028b9062000435565b90600052602060002090601f016020900481019282620002af5760008555620002fa565b82601f10620002ca57805160ff1916838001178555620002fa565b82800160010185558215620002fa579182015b82811115620002fa578251825591602001919060010190620002dd565b50620003089291506200030c565b5090565b5b808211156200030857600081556001016200030d565b600082601f83011262000334578081fd5b81516001600160401b038082111562000351576200035162000472565b6040516020601f8401601f191682018101838111838210171562000379576200037962000472565b604052838252858401810187101562000390578485fd5b8492505b83831015620003b3578583018101518284018201529182019162000394565b83831115620003c457848185840101525b5095945050505050565b60008060408385031215620003e1578182fd5b82516001600160401b0380821115620003f8578384fd5b620004068683870162000323565b935060208501519150808211156200041c578283fd5b506200042b8582860162000323565b9150509250929050565b6002810460018216806200044a57607f821691505b602082108114156200046c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611bc480620004986000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d539139314610385578063d547741f1461038d578063dd62ed3e146103a0578063e63ab1e9146103b3576101c4565b8063a457c2d71461034c578063a9059cbb1461035f578063ca15c87314610372576101c4565b80639010d07c116100d35780639010d07c1461030957806391d148541461032957806395d89b411461033c578063a217fddf14610344576101c4565b806370a08231146102db57806379cc6790146102ee5780638456cb5914610301576101c4565b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146102a557806340c10f19146102ad57806342966c68146102c05780635c975abb146102d3576101c4565b8063313ce5671461026a57806336568abe1461027f5780633950935114610292576101c4565b806318160ddd116101a257806318160ddd1461021a57806323b872dd1461022f578063248a9ca3146102425780632f2ff15d14610255576101c4565b806301ffc9a7146101c957806306fdde03146101f2578063095ea7b314610207575b600080fd5b6101dc6101d7366004611491565b6103bb565b6040516101e99190611542565b60405180910390f35b6101fa6103e8565b6040516101e99190611556565b6101dc61021536600461140d565b61047a565b610222610498565b6040516101e9919061154d565b6101dc61023d3660046113d2565b61049e565b610222610250366004611436565b610537565b61026861026336600461144e565b61054c565b005b610272610573565b6040516101e99190611a9e565b61026861028d36600461144e565b610578565b6101dc6102a036600461140d565b61059a565b6102686105ee565b6102686102bb36600461140d565b610640565b6102686102ce366004611436565b610696565b6101dc6106aa565b6102226102e9366004611386565b6106b3565b6102686102fc36600461140d565b6106ce565b61026861071c565b61031c610317366004611470565b61076c565b6040516101e9919061152e565b6101dc61033736600461144e565b61078b565b6101fa6107b4565b6102226107c3565b6101dc61035a36600461140d565b6107c8565b6101dc61036d36600461140d565b610841565b610222610380366004611436565b610855565b61022261086c565b61026861039b36600461144e565b610890565b6102226103ae3660046113a0565b61089a565b6102226108c5565b60006001600160e01b03198216635a05180f60e01b14806103e057506103e082610908565b90505b919050565b6060600580546103f790611b3d565b80601f016020809104026020016040519081016040528092919081815260200182805461042390611b3d565b80156104705780601f1061044557610100808354040283529160200191610470565b820191906000526020600020905b81548152906001019060200180831161045357829003601f168201915b5050505050905090565b600061048e61048761092d565b8484610931565b5060015b92915050565b60045490565b60006104ab8484846109e5565b6001600160a01b0384166000908152600360205260408120816104cc61092d565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156105185760405162461bcd60e51b815260040161050f90611780565b60405180910390fd5b61052c8561052461092d565b858403610931565b506001949350505050565b60009081526020819052604090206001015490565b6105568282610b0f565b600082815260016020526040902061056e90826108f3565b505050565b601290565b6105828282610b33565b600082815260016020526040902061056e9082610b75565b600061048e6105a761092d565b8484600360006105b561092d565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546105e99190611aac565b610931565b61061a7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a61033761092d565b6106365760405162461bcd60e51b815260040161050f90611671565b61063e610b8a565b565b61066c7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661033761092d565b6106885760405162461bcd60e51b815260040161050f906117c8565b6106928282610bf8565b5050565b6106a76106a161092d565b82610cc0565b50565b60075460ff1690565b6001600160a01b031660009081526002602052604090205490565b60006106dc836103ae61092d565b9050818110156106fe5760405162461bcd60e51b815260040161050f9061181e565b6107128361070a61092d565b848403610931565b61056e8383610cc0565b6107487f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a61033761092d565b6107645760405162461bcd60e51b815260040161050f9061192c565b61063e610db1565b60008281526001602052604081206107849083610e0c565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600680546103f790611b3d565b600081565b600080600360006107d761092d565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156108235760405162461bcd60e51b815260040161050f90611989565b61083761082e61092d565b85858403610931565b5060019392505050565b600061048e61084e61092d565b84846109e5565b60008181526001602052604081206103e090610e18565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6105828282610e23565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b6106928282610e42565b6000610784836001600160a01b038416610ec7565b60006001600160e01b03198216637965db0b60e01b14806103e057506103e082610f11565b3390565b6001600160a01b0383166109575760405162461bcd60e51b815260040161050f906118e8565b6001600160a01b03821661097d5760405162461bcd60e51b815260040161050f906116ce565b6001600160a01b0380841660008181526003602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906109d890859061154d565b60405180910390a3505050565b6001600160a01b038316610a0b5760405162461bcd60e51b815260040161050f906118a3565b6001600160a01b038216610a315760405162461bcd60e51b815260040161050f906115be565b610a3c838383610f2a565b6001600160a01b03831660009081526002602052604090205481811015610a755760405162461bcd60e51b815260040161050f90611710565b6001600160a01b03808516600090815260026020526040808220858503905591851681529081208054849290610aac908490611aac565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610af6919061154d565b60405180910390a3610b0984848461056e565b50505050565b610b1882610537565b610b2981610b2461092d565b610f35565b61056e8383610e42565b610b3b61092d565b6001600160a01b0316816001600160a01b031614610b6b5760405162461bcd60e51b815260040161050f906119ce565b6106928282610f99565b6000610784836001600160a01b03841661101c565b610b926106aa565b610bae5760405162461bcd60e51b815260040161050f90611601565b6007805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610be161092d565b604051610bee919061152e565b60405180910390a1565b6001600160a01b038216610c1e5760405162461bcd60e51b815260040161050f90611a1d565b610c2a60008383610f2a565b8060046000828254610c3c9190611aac565b90915550506001600160a01b03821660009081526002602052604081208054839290610c69908490611aac565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610cac90859061154d565b60405180910390a36106926000838361056e565b6001600160a01b038216610ce65760405162461bcd60e51b815260040161050f90611862565b610cf282600083610f2a565b6001600160a01b03821660009081526002602052604090205481811015610d2b5760405162461bcd60e51b815260040161050f9061162f565b6001600160a01b0383166000908152600260205260408120838303905560048054849290610d5a908490611ae3565b90915550506040516000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610d9d90869061154d565b60405180910390a361056e8360008461056e565b610db96106aa565b15610dd65760405162461bcd60e51b815260040161050f90611756565b6007805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610be161092d565b60006107848383611139565b60006103e082611171565b610e2c82610537565b610e3881610b2461092d565b61056e8383610f99565b610e4c828261078b565b610692576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610e8361092d565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610ed38383611175565b610f0957508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610492565b506000610492565b6001600160e01b031981166301ffc9a760e01b14919050565b61056e83838361118d565b610f3f828261078b565b61069257610f57816001600160a01b031660146111bd565b610f628360206111bd565b604051602001610f739291906114b9565b60408051601f198184030181529082905262461bcd60e51b825261050f91600401611556565b610fa3828261078b565b15610692576000828152602081815260408083206001600160a01b03851684529091529020805460ff19169055610fd861092d565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6000818152600183016020526040812054801561112f576000611040600183611ae3565b855490915060009061105490600190611ae3565b90508181146110d557600086600001828154811061108257634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050808760000184815481106110b357634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b85548690806110f457634e487b7160e01b600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610492565b6000915050610492565b600082600001828154811061115e57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b5490565b60009081526001919091016020526040902054151590565b61119883838361056e565b6111a06106aa565b1561056e5760405162461bcd60e51b815260040161050f90611a54565b606060006111cc836002611ac4565b6111d7906002611aac565b67ffffffffffffffff8111156111fd57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611227576020820181803683370190505b509050600360fc1b8160008151811061125057634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061128d57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006112b1846002611ac4565b6112bc906001611aac565b90505b6001811115611350576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106112fe57634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061132257634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c9361134981611b26565b90506112bf565b5083156107845760405162461bcd60e51b815260040161050f90611589565b80356001600160a01b03811681146103e357600080fd5b600060208284031215611397578081fd5b6107848261136f565b600080604083850312156113b2578081fd5b6113bb8361136f565b91506113c96020840161136f565b90509250929050565b6000806000606084860312156113e6578081fd5b6113ef8461136f565b92506113fd6020850161136f565b9150604084013590509250925092565b6000806040838503121561141f578182fd5b6114288361136f565b946020939093013593505050565b600060208284031215611447578081fd5b5035919050565b60008060408385031215611460578182fd5b823591506113c96020840161136f565b60008060408385031215611482578182fd5b50508035926020909101359150565b6000602082840312156114a2578081fd5b81356001600160e01b031981168114610784578182fd5b60007f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000825283516114f1816017850160208801611afa565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611522816028840160208801611afa565b01602801949350505050565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b6000602082528251806020840152611575816040850160208701611afa565b601f01601f19169190910160400192915050565b6020808252818101527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604082015260600190565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526014908201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604082015260600190565b60208082526022908201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604082015261636560f01b606082015260800190565b60208082526039908201527f45524332305072657365744d696e7465725061757365723a206d75737420686160408201527f76652070617573657220726f6c6520746f20756e706175736500000000000000606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526036908201527f45524332305072657365744d696e7465725061757365723a206d7573742068616040820152751d99481b5a5b9d195c881c9bdb19481d1bc81b5a5b9d60521b606082015260800190565b60208082526024908201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604082015263616e636560e01b606082015260800190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526037908201527f45524332305072657365744d696e7465725061757365723a206d75737420686160408201527f76652070617573657220726f6c6520746f207061757365000000000000000000606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b6020808252602f908201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560408201526e103937b632b9903337b91039b2b63360891b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b6020808252602a908201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686040820152691a5b19481c185d5cd95960b21b606082015260800190565b60ff91909116815260200190565b60008219821115611abf57611abf611b78565b500190565b6000816000190483118215151615611ade57611ade611b78565b500290565b600082821015611af557611af5611b78565b500390565b60005b83811015611b15578181015183820152602001611afd565b83811115610b095750506000910152565b600081611b3557611b35611b78565b506000190190565b600281046001821680611b5157607f821691505b60208210811415611b7257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220397f6f15544700b0d850b758a7209b54410de999326adb80112f2eebe6adb54964736f6c63430008000033';

type ERC20PresetMinterPauserConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: ERC20PresetMinterPauserConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20PresetMinterPauser__factory extends ContractFactory {
  constructor(...args: ERC20PresetMinterPauserConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(name: string, symbol: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ERC20PresetMinterPauser> {
    return super.deploy(name, symbol, overrides || {}) as Promise<ERC20PresetMinterPauser>;
  }
  getDeployTransaction(name: string, symbol: string, overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC20PresetMinterPauser {
    return super.attach(address) as ERC20PresetMinterPauser;
  }
  connect(signer: Signer): ERC20PresetMinterPauser__factory {
    return super.connect(signer) as ERC20PresetMinterPauser__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20PresetMinterPauserInterface {
    return new utils.Interface(_abi) as ERC20PresetMinterPauserInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20PresetMinterPauser {
    return new Contract(address, _abi, signerOrProvider) as ERC20PresetMinterPauser;
  }
}
