//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract MockOT is ERC20 {
  /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */

  uint256 public immutable start;
  uint256 public immutable expiry;

  constructor(uint256 _daysToExpire) ERC20('MockOT', 'MOT') {
    start = block.timestamp;
    expiry = block.timestamp + _daysToExpire * 1 days;

    _mint(msg.sender, 500);
  }

  /**
   * @notice The OT contract start in epoch time.
   * @return Returns the yield start date.
   **/
  function getStart() external view returns (uint256) {
    return start;
  }

  /**
   * @notice The OT contract expiry in epoch time.
   * @return Returns the yield expiry date.
   **/
  function getExpiry() external view returns (uint256) {
    return expiry;
  }
}
