//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

import './KhooleeCoinMinter.sol';

contract KhooleeCoinMinterInterface {
  function mint(address to, uint256 amount) public virtual {}

  function balanceOf(address owner) public view returns (uint256) {}

  function burnFrom(address account, uint256 amount) public {}
}

// need to create an interface for MockOT to facilitate
// transfering of MockOT within this contract
// getting start/expiry of MockOT for valuation
contract MockOTInterface {
  function transfer(address recipient, uint256 amount) public returns (bool) {}

  function transferFrom(
    address sender,
    address recipient,
    uint256 amount
  ) public returns (bool) {}

  function balanceOf(address owner) public view returns (uint256) {}

  function getStart() external view returns (uint256) {}

  function getExpiry() external view returns (uint256) {}

  function returnCurrentMsgSender() external view returns (address) {}
}

contract VaultContract {
  using SafeMath for uint256;

  // Settings
  uint256 private constant LOAN_TO_VALUE = 50; // 50% (max % of KLC that can be borrowed with deposited collateralAmount)
  uint256 private constant LOAN_TO_VALUE_PRECISION = 1e2; // 100

  uint256 private constant LIQUIDATION_THRESHOLD = 75; // 75% (percentage at which a position is defined as under-collateralized)
  // collaterization rate is 100% if position is defined as under-collateralized
  uint256 private constant LIQUIDATION_THRESHOLD_PRECISION = 1e2; // 100

  // this is incurred each time collateral is being added
  uint256 private constant FLAT_FEE = 20; // 20 usd worth of mockOT

  // this is not being used for now
  uint256 private constant INTEREST_PER_MONTH = 4; // 4%
  uint256 private constant INTEREST_PER_MONTH_precision = 1e2; // 100

  uint256 private constant DEBT_CEILING = 20; // max amount of KLC that can be borrowed at any time

  // Total amounts
  uint256 public totalCollateral; // Total collateral supplied
  uint256 public totalBorrow; // Total KhooleeCoin amount to be repayed by borrowers

  // User balances
  mapping(address => uint256) public userCollateral; // collateral deposited by user of corresponding address
  mapping(address => uint256) public userBorrowed; //KhooleeCoin borrowed by user of corresponding address

  KhooleeCoinMinter khooleeCoinMinterContract;
  MockOTInterface mockOTContract;

  address public KhooleeCoinMinterContractAddress;

  constructor() {
    khooleeCoinMinterContract = new KhooleeCoinMinter();
    KhooleeCoinMinterContractAddress = address(khooleeCoinMinterContract);
  }

  function SetMockOTContract(address addr) public {
    mockOTContract = MockOTInterface(addr);
  }

  // to use this, user contract needs to approve VaultContract first
  // flat fee will be incurred each time u add collateral
  function addCollateral(uint256 collateralAmount) public {
    uint256 flatFeeInMockOT = (FLAT_FEE * 10) / getMockOtUSDValue();
    require(mockOTContract.balanceOf(msg.sender) >= collateralAmount + flatFeeInMockOT);
    mockOTContract.transferFrom(msg.sender, address(this), collateralAmount + flatFeeInMockOT);
    userCollateral[msg.sender] = userCollateral[msg.sender].add(collateralAmount);
    totalCollateral = totalCollateral.add(collateralAmount);
  }

  function removeCollateral(uint256 collateralAmount) public {
    require(collateralAmount <= userCollateral[msg.sender]);
    mockOTContract.transfer(msg.sender, collateralAmount);
    userCollateral[msg.sender] = userCollateral[msg.sender].sub(collateralAmount);
    totalCollateral = totalCollateral.sub(collateralAmount);

    liquidate_when_liquidatable_debt_position(msg.sender);
  }

  function borrowKhooleeCoins(uint256 borrowAmount) public {
    // borrowed KhooleeCoins will be newly minted
    uint256 maxAmountThatCanBeBorrowed = (userCollateral[msg.sender] *
      getMockOtUSDValue() *
      LOAN_TO_VALUE) /
      LOAN_TO_VALUE_PRECISION /
      10;
    require(borrowAmount + userBorrowed[msg.sender] <= maxAmountThatCanBeBorrowed);
    require(totalBorrow + borrowAmount + userBorrowed[msg.sender] <= DEBT_CEILING);

    khooleeCoinMinterContract.mint(msg.sender, borrowAmount); // mints to the borrower
    userBorrowed[msg.sender] = userBorrowed[msg.sender].add(borrowAmount);
    totalBorrow = totalBorrow.add(borrowAmount);
  }

  function repayDebt() public {
    require(khooleeCoinMinterContract.balanceOf(msg.sender) >= userBorrowed[msg.sender]);
    uint256 borrowAmount = userBorrowed[msg.sender];

    // repayed stablecoins will be burnt
    khooleeCoinMinterContract.burnFrom(msg.sender, userBorrowed[msg.sender]);
    userBorrowed[msg.sender] = 0;
    totalBorrow = totalBorrow.sub(borrowAmount);

    removeCollateral(userCollateral[msg.sender]);
  }

  function liquidate_when_liquidatable_debt_position(address addressToLiquidate) private {
    // if health factor < 100, can liquidate collateral
    // else, collateral still safe
    bool liquidatable = returnHealthFactor() < 100;
    if (liquidatable) {
      liquidate(addressToLiquidate);
    }
  }

  function liquidate(address addressToLiquidate) private {
    // make the borrower no longer have access to the collateral
    uint256 amountToLiquidate = userCollateral[addressToLiquidate];
    userCollateral[addressToLiquidate] = 0;
    // not sure whether to update total collateral?
  }

  // if health factor < 100, can liquidate collateral
  // else, collateral still safe
  function returnHealthFactor() public view returns (uint256) {
    if (userBorrowed[msg.sender] == 0) return 100;
    uint256 a = percent(
      userCollateral[msg.sender] *
        getMockOtUSDValue() *
        percent(LIQUIDATION_THRESHOLD, LIQUIDATION_THRESHOLD_PRECISION, 2),
      userBorrowed[msg.sender] * 100,
      2
    ) / 10;
    return a;
    //return ((userCollateral[msg.sender] * LIQUIDATION_THRESHOLD / LIQUIDATION_THRESHOLD_PRECISION) / userBorrowed[msg.sender] *);
  }

  function percent(
    uint256 numerator,
    uint256 denominator,
    uint256 precision
  ) private pure returns (uint256 quotient) {
    // caution, check safe-to-multiply here
    uint256 _numerator = numerator * 10**(precision + 1);
    // with rounding of last digit
    uint256 _quotient = ((_numerator / denominator) + 5) / 10;
    return (_quotient);
  }

  // supposed to be oracle to get value, but this will do for now
  function getMockOtUSDValue() private pure returns (uint256) {
    return percent(8, 10, 1);
  }

  function getDebtCeiling() public view returns (uint256) {
    return DEBT_CEILING;
  }

  // for testing purposes
  function returnCurrentMsgSender() external view returns (address) {
    return mockOTContract.returnCurrentMsgSender();
  }
}
