//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
//import '@boringcrypto/boring-solidity/contracts/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

// Vault Contract will deploy this contract and be the minter
contract KhooleeCoinMinter is ERC20PresetMinterPauser {
  constructor() ERC20PresetMinterPauser('KhooleeCoin', 'KLC') {}
}
