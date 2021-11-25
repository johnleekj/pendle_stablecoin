/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VaultContract, VaultContractInterface } from "../VaultContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "KhooleeCoinMinterContractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "SetMockOTContract",
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
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "approveAmt",
        type: "uint256",
      },
    ],
    name: "approveKhooleeTransfer",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "getDebtCeiling",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
    name: "repayDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "returnCurrentMsgSender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnHealthFactor",
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
    name: "totalBorrow",
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
    name: "totalCollateral",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userBorrowed",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userCollateral",
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
  "0x608060405234801561001057600080fd5b5060405161001d9061006c565b604051809103906000f080158015610039573d6000803e3d6000fd5b50600480546001600160a01b03199081166001600160a01b03938416179182905560068054929093169116179055610079565b611f4b80610d0083390190565b610c78806100886000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638285ef401161008c5780639a7d7813116100665780639a7d781314610185578063bcc46e8314610198578063db0f332b146101ab578063f69f1e4a146101be576100ea565b80638285ef4014610162578063949d7a1a1461016a57806394cd4ba71461017d576100ea565b80633237c158116100c85780633237c1581461012c578063325640421461013f5780634ac8eb5f146101525780637b7e67971461015a576100ea565b8063082151e7146100ef5780631b99d9d61461010d57806328f19f6614610117575b600080fd5b6100f76101d1565b6040516101049190610a8c565b60405180910390f35b610115610261565b005b61011f6103ac565b6040516101049190610a3b565b61011561013a366004610a0b565b6103bb565b61011561014d366004610a0b565b6104a0565b6100f76105eb565b61011f6105f1565b6100f7610673565b610115610178366004610988565b610679565b6100f761069b565b6100f7610193366004610988565b6106a0565b6101156101a6366004610a0b565b6106b2565b6101156101b93660046109c0565b610836565b6100f76101cc366004610988565b6108be565b336000908152600360205260408120546101ed5750606461025e565b6000600a610250610202604b606460026108d0565b61020a610924565b336000908152600260205260409020546102249190610be1565b61022e9190610be1565b33600090815260036020526040902054610249906064610be1565b60026108d0565b61025a9190610aad565b9150505b90565b3360008181526003602052604090819020546004805492516370a0823160e01b815291936001600160a01b03909316926370a08231926102a19201610a3b565b60206040518083038186803b1580156102b957600080fd5b505afa1580156102cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f19190610a23565b10156102fc57600080fd5b33600081815260036020526040908190205460048054925163079cc67960e41b815291936001600160a01b03909316926379cc67909261033e92869101610a73565b600060405180830381600087803b15801561035857600080fd5b505af115801561036c573d6000803e3d6000fd5b505033600090815260036020526040812055505060015461038d9082610934565b600155336000908152600260205260409020546103a9906103bb565b50565b6006546001600160a01b031681565b336000908152600260205260409020548111156103d757600080fd5b60055460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb906104099033908590600401610a73565b602060405180830381600087803b15801561042357600080fd5b505af1158015610437573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045b91906109eb565b50336000908152600260205260409020546104769082610934565b33600090815260026020526040812091909155546104949082610934565b6000556103a933610940565b6000600a606460326104b0610924565b336000908152600260205260409020546104ca9190610be1565b6104d49190610be1565b6104de9190610aad565b6104e89190610aad565b3360009081526003602052604090205490915081906105079084610a95565b111561051257600080fd5b3360009081526003602052604090205460015460149190610534908590610a95565b61053e9190610a95565b111561054957600080fd5b600480546040516340c10f1960e01b81526001600160a01b03909116916340c10f199161057a913391879101610a73565b600060405180830381600087803b15801561059457600080fd5b505af11580156105a8573d6000803e3d6000fd5b5050336000908152600360205260409020546105c79250905083610962565b336000908152600360205260409020556001546105e49083610962565b6001555050565b60005481565b60055460408051637b7e679760e01b815290516000926001600160a01b031691637b7e6797916004808301926020929190829003018186803b15801561063657600080fd5b505afa15801561064a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066e91906109a4565b905090565b60015481565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b601490565b60036020526000908152604090205481565b60006106bc610924565b6106c86014600a610be1565b6106d29190610aad565b90506106de8183610a95565b6005546040516370a0823160e01b81526001600160a01b03909116906370a082319061070e903390600401610a3b565b60206040518083038186803b15801561072657600080fd5b505afa15801561073a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075e9190610a23565b101561076957600080fd5b6005546001600160a01b03166323b872dd33306107868587610a95565b6040518463ffffffff1660e01b81526004016107a493929190610a4f565b602060405180830381600087803b1580156107be57600080fd5b505af11580156107d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f691906109eb565b50336000908152600260205260409020546108119083610962565b336000908152600260205260408120919091555461082f9083610962565b6000555050565b6004805460405163095ea7b360e01b81526001600160a01b039091169163095ea7b391610867918691869101610a73565b602060405180830381600087803b15801561088157600080fd5b505af1158015610895573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b991906109eb565b505050565b60026020526000908152604090205481565b6000806108de836001610a95565b6108e990600a610b13565b6108f39086610be1565b90506000600a6109038684610aad565b61090e906005610a95565b6109189190610aad565b925050505b9392505050565b600061066e6008600a60016108d0565b600061091d8284610c00565b6000606461094c6101d1565b109050801561095e5761095e8261096e565b5050565b600061091d8284610a95565b6001600160a01b0316600090815260026020526040812055565b600060208284031215610999578081fd5b813561091d81610c2d565b6000602082840312156109b5578081fd5b815161091d81610c2d565b600080604083850312156109d2578081fd5b82356109dd81610c2d565b946020939093013593505050565b6000602082840312156109fc578081fd5b8151801515811461091d578182fd5b600060208284031215610a1c578081fd5b5035919050565b600060208284031215610a34578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b90815260200190565b60008219821115610aa857610aa8610c17565b500190565b600082610ac857634e487b7160e01b81526012600452602481fd5b500490565b80825b6001808611610adf5750610b0a565b818704821115610af157610af1610c17565b80861615610afe57918102915b9490941c938002610ad0565b94509492505050565b600061091d6000198484600082610b2c5750600161091d565b81610b395750600061091d565b8160018114610b4f5760028114610b5957610b86565b600191505061091d565b60ff841115610b6a57610b6a610c17565b6001841b915084821115610b8057610b80610c17565b5061091d565b5060208310610133831016604e8410600b8410161715610bb9575081810a83811115610bb457610bb4610c17565b61091d565b610bc68484846001610acd565b808604821115610bd857610bd8610c17565b02949350505050565b6000816000190483118215151615610bfb57610bfb610c17565b500290565b600082821015610c1257610c12610c17565b500390565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146103a957600080fdfea26469706673582212209008109c6007d419e985a09ca0f289f6f20895dc27af04707df04387cee0c32464736f6c6343000800003360806040523480156200001157600080fd5b50604080518082018252600b81526a25b437b7b632b2a1b7b4b760a91b6020808301918252835180850190945260038452624b4c4360e81b90840152815191929183918391620000649160059162000294565b5080516200007a90600690602084019062000294565b50506007805460ff19169055506200009d60006200009762000103565b62000107565b620000cc7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66200009762000103565b620000fb7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a6200009762000103565b505062000377565b3390565b6200011e82826200014a60201b620008e91760201c565b600082815260016020908152604090912062000145918390620008f36200015a821b17901c565b505050565b6200015682826200017a565b5050565b600062000171836001600160a01b03841662000204565b90505b92915050565b62000186828262000253565b62000156576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001c062000103565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006200021283836200027c565b6200024a5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000174565b50600062000174565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60009081526001919091016020526040902054151590565b828054620002a2906200033a565b90600052602060002090601f016020900481019282620002c6576000855562000311565b82601f10620002e157805160ff191683800117855562000311565b8280016001018555821562000311579182015b8281111562000311578251825591602001919060010190620002f4565b506200031f92915062000323565b5090565b5b808211156200031f576000815560010162000324565b6002810460018216806200034f57607f821691505b602082108114156200037157634e487b7160e01b600052602260045260246000fd5b50919050565b611bc480620003876000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d539139314610385578063d547741f1461038d578063dd62ed3e146103a0578063e63ab1e9146103b3576101c4565b8063a457c2d71461034c578063a9059cbb1461035f578063ca15c87314610372576101c4565b80639010d07c116100d35780639010d07c1461030957806391d148541461032957806395d89b411461033c578063a217fddf14610344576101c4565b806370a08231146102db57806379cc6790146102ee5780638456cb5914610301576101c4565b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146102a557806340c10f19146102ad57806342966c68146102c05780635c975abb146102d3576101c4565b8063313ce5671461026a57806336568abe1461027f5780633950935114610292576101c4565b806318160ddd116101a257806318160ddd1461021a57806323b872dd1461022f578063248a9ca3146102425780632f2ff15d14610255576101c4565b806301ffc9a7146101c957806306fdde03146101f2578063095ea7b314610207575b600080fd5b6101dc6101d7366004611491565b6103bb565b6040516101e99190611542565b60405180910390f35b6101fa6103e8565b6040516101e99190611556565b6101dc61021536600461140d565b61047a565b610222610498565b6040516101e9919061154d565b6101dc61023d3660046113d2565b61049e565b610222610250366004611436565b610537565b61026861026336600461144e565b61054c565b005b610272610573565b6040516101e99190611a9e565b61026861028d36600461144e565b610578565b6101dc6102a036600461140d565b61059a565b6102686105ee565b6102686102bb36600461140d565b610640565b6102686102ce366004611436565b610696565b6101dc6106aa565b6102226102e9366004611386565b6106b3565b6102686102fc36600461140d565b6106ce565b61026861071c565b61031c610317366004611470565b61076c565b6040516101e9919061152e565b6101dc61033736600461144e565b61078b565b6101fa6107b4565b6102226107c3565b6101dc61035a36600461140d565b6107c8565b6101dc61036d36600461140d565b610841565b610222610380366004611436565b610855565b61022261086c565b61026861039b36600461144e565b610890565b6102226103ae3660046113a0565b61089a565b6102226108c5565b60006001600160e01b03198216635a05180f60e01b14806103e057506103e082610908565b90505b919050565b6060600580546103f790611b3d565b80601f016020809104026020016040519081016040528092919081815260200182805461042390611b3d565b80156104705780601f1061044557610100808354040283529160200191610470565b820191906000526020600020905b81548152906001019060200180831161045357829003601f168201915b5050505050905090565b600061048e61048761092d565b8484610931565b5060015b92915050565b60045490565b60006104ab8484846109e5565b6001600160a01b0384166000908152600360205260408120816104cc61092d565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156105185760405162461bcd60e51b815260040161050f90611780565b60405180910390fd5b61052c8561052461092d565b858403610931565b506001949350505050565b60009081526020819052604090206001015490565b6105568282610b0f565b600082815260016020526040902061056e90826108f3565b505050565b601290565b6105828282610b33565b600082815260016020526040902061056e9082610b75565b600061048e6105a761092d565b8484600360006105b561092d565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546105e99190611aac565b610931565b61061a7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a61033761092d565b6106365760405162461bcd60e51b815260040161050f90611671565b61063e610b8a565b565b61066c7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661033761092d565b6106885760405162461bcd60e51b815260040161050f906117c8565b6106928282610bf8565b5050565b6106a76106a161092d565b82610cc0565b50565b60075460ff1690565b6001600160a01b031660009081526002602052604090205490565b60006106dc836103ae61092d565b9050818110156106fe5760405162461bcd60e51b815260040161050f9061181e565b6107128361070a61092d565b848403610931565b61056e8383610cc0565b6107487f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a61033761092d565b6107645760405162461bcd60e51b815260040161050f9061192c565b61063e610db1565b60008281526001602052604081206107849083610e0c565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600680546103f790611b3d565b600081565b600080600360006107d761092d565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156108235760405162461bcd60e51b815260040161050f90611989565b61083761082e61092d565b85858403610931565b5060019392505050565b600061048e61084e61092d565b84846109e5565b60008181526001602052604081206103e090610e18565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6105828282610e23565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b6106928282610e42565b6000610784836001600160a01b038416610ec7565b60006001600160e01b03198216637965db0b60e01b14806103e057506103e082610f11565b3390565b6001600160a01b0383166109575760405162461bcd60e51b815260040161050f906118e8565b6001600160a01b03821661097d5760405162461bcd60e51b815260040161050f906116ce565b6001600160a01b0380841660008181526003602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906109d890859061154d565b60405180910390a3505050565b6001600160a01b038316610a0b5760405162461bcd60e51b815260040161050f906118a3565b6001600160a01b038216610a315760405162461bcd60e51b815260040161050f906115be565b610a3c838383610f2a565b6001600160a01b03831660009081526002602052604090205481811015610a755760405162461bcd60e51b815260040161050f90611710565b6001600160a01b03808516600090815260026020526040808220858503905591851681529081208054849290610aac908490611aac565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610af6919061154d565b60405180910390a3610b0984848461056e565b50505050565b610b1882610537565b610b2981610b2461092d565b610f35565b61056e8383610e42565b610b3b61092d565b6001600160a01b0316816001600160a01b031614610b6b5760405162461bcd60e51b815260040161050f906119ce565b6106928282610f99565b6000610784836001600160a01b03841661101c565b610b926106aa565b610bae5760405162461bcd60e51b815260040161050f90611601565b6007805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610be161092d565b604051610bee919061152e565b60405180910390a1565b6001600160a01b038216610c1e5760405162461bcd60e51b815260040161050f90611a1d565b610c2a60008383610f2a565b8060046000828254610c3c9190611aac565b90915550506001600160a01b03821660009081526002602052604081208054839290610c69908490611aac565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610cac90859061154d565b60405180910390a36106926000838361056e565b6001600160a01b038216610ce65760405162461bcd60e51b815260040161050f90611862565b610cf282600083610f2a565b6001600160a01b03821660009081526002602052604090205481811015610d2b5760405162461bcd60e51b815260040161050f9061162f565b6001600160a01b0383166000908152600260205260408120838303905560048054849290610d5a908490611ae3565b90915550506040516000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610d9d90869061154d565b60405180910390a361056e8360008461056e565b610db96106aa565b15610dd65760405162461bcd60e51b815260040161050f90611756565b6007805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610be161092d565b60006107848383611139565b60006103e082611171565b610e2c82610537565b610e3881610b2461092d565b61056e8383610f99565b610e4c828261078b565b610692576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610e8361092d565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610ed38383611175565b610f0957508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610492565b506000610492565b6001600160e01b031981166301ffc9a760e01b14919050565b61056e83838361118d565b610f3f828261078b565b61069257610f57816001600160a01b031660146111bd565b610f628360206111bd565b604051602001610f739291906114b9565b60408051601f198184030181529082905262461bcd60e51b825261050f91600401611556565b610fa3828261078b565b15610692576000828152602081815260408083206001600160a01b03851684529091529020805460ff19169055610fd861092d565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6000818152600183016020526040812054801561112f576000611040600183611ae3565b855490915060009061105490600190611ae3565b90508181146110d557600086600001828154811061108257634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050808760000184815481106110b357634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b85548690806110f457634e487b7160e01b600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610492565b6000915050610492565b600082600001828154811061115e57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b5490565b60009081526001919091016020526040902054151590565b61119883838361056e565b6111a06106aa565b1561056e5760405162461bcd60e51b815260040161050f90611a54565b606060006111cc836002611ac4565b6111d7906002611aac565b67ffffffffffffffff8111156111fd57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611227576020820181803683370190505b509050600360fc1b8160008151811061125057634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061128d57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006112b1846002611ac4565b6112bc906001611aac565b90505b6001811115611350576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106112fe57634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061132257634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c9361134981611b26565b90506112bf565b5083156107845760405162461bcd60e51b815260040161050f90611589565b80356001600160a01b03811681146103e357600080fd5b600060208284031215611397578081fd5b6107848261136f565b600080604083850312156113b2578081fd5b6113bb8361136f565b91506113c96020840161136f565b90509250929050565b6000806000606084860312156113e6578081fd5b6113ef8461136f565b92506113fd6020850161136f565b9150604084013590509250925092565b6000806040838503121561141f578182fd5b6114288361136f565b946020939093013593505050565b600060208284031215611447578081fd5b5035919050565b60008060408385031215611460578182fd5b823591506113c96020840161136f565b60008060408385031215611482578182fd5b50508035926020909101359150565b6000602082840312156114a2578081fd5b81356001600160e01b031981168114610784578182fd5b60007f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000825283516114f1816017850160208801611afa565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611522816028840160208801611afa565b01602801949350505050565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b6000602082528251806020840152611575816040850160208701611afa565b601f01601f19169190910160400192915050565b6020808252818101527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604082015260600190565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526014908201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604082015260600190565b60208082526022908201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604082015261636560f01b606082015260800190565b60208082526039908201527f45524332305072657365744d696e7465725061757365723a206d75737420686160408201527f76652070617573657220726f6c6520746f20756e706175736500000000000000606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526036908201527f45524332305072657365744d696e7465725061757365723a206d7573742068616040820152751d99481b5a5b9d195c881c9bdb19481d1bc81b5a5b9d60521b606082015260800190565b60208082526024908201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604082015263616e636560e01b606082015260800190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526037908201527f45524332305072657365744d696e7465725061757365723a206d75737420686160408201527f76652070617573657220726f6c6520746f207061757365000000000000000000606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b6020808252602f908201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560408201526e103937b632b9903337b91039b2b63360891b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b6020808252602a908201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686040820152691a5b19481c185d5cd95960b21b606082015260800190565b60ff91909116815260200190565b60008219821115611abf57611abf611b78565b500190565b6000816000190483118215151615611ade57611ade611b78565b500290565b600082821015611af557611af5611b78565b500390565b60005b83811015611b15578181015183820152602001611afd565b83811115610b095750506000910152565b600081611b3557611b35611b78565b506000190190565b600281046001821680611b5157607f821691505b60208210811415611b7257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220a0c82ed90b056ccd63247b4a8b60859ad680d16667defe9d421dfa5d3879bdf564736f6c63430008000033";

type VaultContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VaultContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VaultContract__factory extends ContractFactory {
  constructor(...args: VaultContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VaultContract> {
    return super.deploy(overrides || {}) as Promise<VaultContract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VaultContract {
    return super.attach(address) as VaultContract;
  }
  connect(signer: Signer): VaultContract__factory {
    return super.connect(signer) as VaultContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultContractInterface {
    return new utils.Interface(_abi) as VaultContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VaultContract {
    return new Contract(address, _abi, signerOrProvider) as VaultContract;
  }
}
