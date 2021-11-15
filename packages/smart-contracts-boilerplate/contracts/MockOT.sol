pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract MockOT is ERC20, ERC20Detailed {
    constructor(uint256 initialSupply) ERC20Detailed("MockOT", "MkOT", 18) public {
        _mint(msg.sender, initialSupply);
    }
}
