pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

// contract MockOT is ERC20 {
//    constructor(uint256 initialSupply) public ERC20("MockOT", "MkOT", 18) {
//        _mint(msg.sender, initialSupply);
//    }
//}

/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` functions.
 */
contract MockOT is ERC20 {
  /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */
  constructor() public ERC20('Simple Token', 'SIM') {
    _mint(msg.sender, 1000000 * (10**uint256(decimals())));
  }
}
