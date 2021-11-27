//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';

interface KhooleeCoinMinterInterface {
  function mint(address to, uint256 amount) external;

  function balanceOf(address owner) external view returns (uint256);

  function burnFrom(address account, uint256 amount) external;
}

interface MockOTInterface {
  function transfer(address recipient, uint256 amount) external returns (bool);

  function transferFrom(
    address sender,
    address recipient,
    uint256 amount
  ) external returns (bool);

  function balanceOf(address owner) external view returns (uint256);

  function getStart() external view returns (uint256);

  function getExpiry() external view returns (uint256);
}

contract VaultContract {
  using SafeMath for uint256;

  uint256 public constant LOAN_TO_VALUE = 50; // 50% (max % of KLC that can be borrowed with deposited collateralAmount)
  uint256 public constant LOAN_TO_VALUE_PRECISION = 1e2; // 100

  uint256 public constant LIQUIDATION_THRESHOLD = 75; // 75% (percentage at which a position is defined as under-collateralized)
  // collaterization rate is 100% if position is defined as under-collateralized
  uint256 public constant LIQUIDATION_THRESHOLD_PRECISION = 1e2; // 100

  // this is incurred each time collateral is being added
  uint256 public constant FLAT_FEE = 20; // 20 usd worth of mockOT

  // this is derived from annual interest (4% per year)
  uint256 public constant INTEREST_PER_SECOND = 126; // 4%/31536000 seconds
  uint256 public constant INTEREST_PER_SECOND_PRECISION = 1e11;

  uint256 public constant DEBT_CEILING = 20; // max amount of KLC that can be borrowed at any time

  // Total amounts
  uint256 public totalCollateral; // Total collateral supplied
  uint256 public totalBorrow; // Total KhooleeCoin amount to be repayed by borrowers

  // User balances
  mapping(address => uint256) public userCollateral; // collateral deposited by user of corresponding address
  mapping(address => uint256) public userBorrowed; //KhooleeCoin borrowed by user of corresponding address
  mapping(address => AccrueInfo) public userAccruedInfo; //AccruedInfo by user of corresponding address

  // this contains data about accrued interest 
  struct AccrueInfo {
      uint64 lastAccrued;
      uint128 feesEarned;
  }

  KhooleeCoinMinterInterface _KhooleeToken;
  MockOTInterface _mockOT;

  constructor(address khooleeToken, address mockOT) {
    _KhooleeToken = KhooleeCoinMinterInterface(khooleeToken);
    _mockOT = MockOTInterface(mockOT);
  }

  // function mintMinerReward() public {
  //     _KhooleeToken.mint(block.coinbase, 1000);
  // }

  function accrue() public {
    if (userAccruedInfo[msg.sender].lastAccrued == 0) {
      //never accrue before
      userAccruedInfo[msg.sender].lastAccrued = uint64(block.timestamp);
      userAccruedInfo[msg.sender].feesEarned = uint128(0);
    }
    else {
      AccrueInfo memory _accrueInfo = userAccruedInfo[msg.sender];
      uint256 elapsedTime = block.timestamp - _accrueInfo.lastAccrued;
      if (elapsedTime == 0) return;
      _accrueInfo.lastAccrued = uint64(block.timestamp);

      // Accrue interest
      uint128 extraAmount = uint128(totalBorrow.mul(INTEREST_PER_SECOND).mul(elapsedTime) / INTEREST_PER_SECOND_PRECISION);
      _accrueInfo.feesEarned = extraAmount;
      userAccruedInfo[msg.sender] = _accrueInfo;
    }
  }

  function addCollateral(uint256 collateralAmount) public {
    uint256 flatFeeInMockOT = (FLAT_FEE * 10) / _getMockOtUSDValue();
    require(_mockOT.balanceOf(msg.sender) >= collateralAmount + flatFeeInMockOT);
    userCollateral[msg.sender] = userCollateral[msg.sender].add(collateralAmount);
    totalCollateral = totalCollateral.add(collateralAmount);
    _mockOT.transferFrom(msg.sender, address(this), collateralAmount + flatFeeInMockOT);
  }

  function removeCollateral(uint256 collateralAmount) public {
    require(collateralAmount <= userCollateral[msg.sender]);
    //accrue();
    userCollateral[msg.sender] = userCollateral[msg.sender].sub(collateralAmount);
    totalCollateral = totalCollateral.sub(collateralAmount);
    _mockOT.transfer(msg.sender, collateralAmount);

    _liquidateWhenLiquidatableDebtPosition(msg.sender);
  }

  function borrowKhooleeCoins(uint256 borrowAmount) public {
    // borrowed KhooleeCoins will be newly minted
    uint256 maxAmountThatCanBeBorrowed = (userCollateral[msg.sender] *
      _getMockOtUSDValue() *
      LOAN_TO_VALUE) /
      LOAN_TO_VALUE_PRECISION /
      10;
    require(
      borrowAmount + userBorrowed[msg.sender] <= maxAmountThatCanBeBorrowed,
      'Borrow Amount above Debt Ceiling'
    );
    require(
      totalBorrow + borrowAmount + userBorrowed[msg.sender] <= DEBT_CEILING,
      'Borrow Amount Above Debt Ceiling'
    );
    //accrue();
    userBorrowed[msg.sender] = userBorrowed[msg.sender].add(borrowAmount);
    totalBorrow = totalBorrow.add(borrowAmount);
    _KhooleeToken.mint(msg.sender, borrowAmount); // mints to the borrower
  }

  function repayDebt() public {
    //accrue();
    require(
      _KhooleeToken.balanceOf(msg.sender) >= userBorrowed[msg.sender],
      'Insufficient Tokens'
    );
    uint256 borrowAmount = userBorrowed[msg.sender];

    // repayed stablecoins will be burnt
    userBorrowed[msg.sender] = 0;
    totalBorrow = totalBorrow.sub(borrowAmount);
    _KhooleeToken.burnFrom(msg.sender, userBorrowed[msg.sender]);

    removeCollateral(userCollateral[msg.sender]);
  }

  function _liquidateWhenLiquidatableDebtPosition(address addressToLiquidate) private {
    // if health factor < 100, can liquidate collateral
    // else, collateral still safe
    bool liquidatable = returnHealthFactor() < 100;
    if (liquidatable) {
      _liquidate(addressToLiquidate);
    }
  }

  function _liquidate(address addressToLiquidate) private {
    // make the borrower no longer have access to the collateral
    // uint256 amountToLiquidate = userCollateral[addressToLiquidate];
    userCollateral[addressToLiquidate] = 0;
    // not sure whether to update total collateral?
  }

  // if health factor < 100, can liquidate collateral
  // else, collateral still safe
  function returnHealthFactor() public view returns (uint256) {
    if (userBorrowed[msg.sender] == 0) return 100;
    uint256 a = _percent(
      userCollateral[msg.sender] *
        _getMockOtUSDValue() *
        _percent(LIQUIDATION_THRESHOLD, LIQUIDATION_THRESHOLD_PRECISION, 2),
      userBorrowed[msg.sender] * 100,
      2
    ) / 10;
    return a;
    //return ((userCollateral[msg.sender] * LIQUIDATION_THRESHOLD / LIQUIDATION_THRESHOLD_PRECISION) / userBorrowed[msg.sender] *);
  }



  //======================= Helper Methods ==========================================
  // supposed to be oracle to get value, but this will do for now
  function _getMockOtUSDValue() private pure returns (uint256) {
    return _percent(8, 10, 1);
  }

  function _percent(
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

  function getDebtCeiling() public pure returns (uint256) {
    return DEBT_CEILING;
  }
}
