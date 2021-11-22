//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

import './KhooleeCoinMinter.sol'; 

contract KhooleeCoinMinterInterface {
    function mint(address to, uint256 amount) public virtual {
    }
}

// need to create an interface for MockOT to facilitate 
// transfering of MockOT within this contract
// getting start/expiry of MockOT for valuation
contract MockOTInterface {
    function transfer(address recipient, uint256 amount) public returns (bool) {
    }
    
    function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
    }    
    
    function balanceOf(address owner) public view returns (uint256) {
    }
    
    function getStart() external view returns (uint256){
    }

    function getExpiry() external view returns (uint256){
    } 
    
    function returnCurrentMsgSender() external view returns (address){
    }
}

contract VaultContract {
    using SafeMath for uint256;
    
    // Settings
    uint256 private constant LOAN_TO_VALUE = 50; // 50% (max % of KLC that can be borrowed with deposited collateralAmount)
    uint256 private constant LOAN_TO_VALUE_PRECISION = 1e2; // 100
    
    uint256 private constant LIQUIDATION_THRESHOLD = 75; // 75% (percentage at which a position is defined as under-collateralized)
    uint256 private constant LIQUIDATION_THRESHOLD_PRECISION = 1e2; // 100
    
    
    //uint256 private constant INTEREST_PER_SECOND = 317097920;

    //uint256 private constant COLLATERIZATION_RATE = 75000; // 75%
    //uint256 private constant COLLATERIZATION_RATE_PRECISION = 1e5; // Must be less than EXCHANGE_RATE_PRECISION (due to optimization in math)

    //uint256 private constant EXCHANGE_RATE_PRECISION = 1e18;

    //uint256 private constant LIQUIDATION_MULTIPLIER = 112000; // add 12%
    //uint256 private constant LIQUIDATION_MULTIPLIER_PRECISION = 1e5;

    //uint256 private constant BORROW_OPENING_FEE = 50; // 0.05%
    //uint256 private constant BORROW_OPENING_FEE_PRECISION = 1e5;
    
     // Total amounts
    uint256 public totalCollateral; // Total collateral supplied
    uint256 public totalBorrow; // Total KhooleeCoin amount to be repayed by borrowers

    // User balances
    mapping(address => uint256) public userCollateral; // collateral deposited by user of corresponding address
    mapping(address => uint256) public userBorrowed; //KhooleeCoin borrowed by user of corresponding address
    
    KhooleeCoinMinter khooleeCoinMinterContract;
    MockOTInterface mockOTContract;

    
    constructor() {
        khooleeCoinMinterContract = new KhooleeCoinMinter();
    }
    
    function SetMockOTContract(address addr) public {
        mockOTContract = MockOTInterface(addr);
    }
    
    // Functions for MockOT
    function transfer(address recipient, uint256 amount) public returns (bool) {
        return mockOTContract.transfer(recipient, amount);
    }
    
    function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
        return mockOTContract.transferFrom(sender, recipient, amount);
    }    
    
    function balanceOf(address owner) public view returns (uint256) {
        return mockOTContract.balanceOf(owner);
    }
    
    function getStart() external view returns (uint256){
        return mockOTContract.getStart();
    }

    function getExpiry() external view returns (uint256){
        return mockOTContract.getExpiry();
    } 
    // --------------------------------------
    
    // to use this, user contract needs to approve this first
    function addCollateral(uint256 collateralAmount) public {
        require(balanceOf(msg.sender) >= collateralAmount);
        transferFrom(msg.sender, address(this),  collateralAmount);
        //mockOTContract.transferFrom(msg.sender, address(this),  collateralAmount);
        userCollateral[msg.sender] = userCollateral[msg.sender].add(collateralAmount);
        totalCollateral = totalCollateral.add(collateralAmount);
    }

    function removeCollateral(uint256 collateralAmount) public {
        require(collateralAmount <= userCollateral[msg.sender]);
        transfer(msg.sender, collateralAmount);
        userCollateral[msg.sender] = userCollateral[msg.sender].sub(collateralAmount);
        totalCollateral = totalCollateral.sub(collateralAmount);
        
        liquidate_when_liquidatable_debt_position(msg.sender);
    }

    function borrowKhooleeCoins(uint256 borrowAmount) public {
        // borrowed KhooleeCoins will be newly minted 
        uint256 maxAmountThatCanBeBorrowed = userCollateral[msg.sender] * LOAN_TO_VALUE / LOAN_TO_VALUE_PRECISION;
        require(borrowAmount + userBorrowed[msg.sender] <=  maxAmountThatCanBeBorrowed);
        
        khooleeCoinMinterContract.mint(msg.sender, borrowAmount); // mints to the borrower
        userBorrowed[msg.sender] = userBorrowed[msg.sender].add(borrowAmount);
        totalBorrow = totalBorrow.add(borrowAmount);
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
    function returnHealthFactor() public view returns(uint256) {
        if (userBorrowed[msg.sender] == 0) return 100;
        
        
        uint256 a = percent(userCollateral[msg.sender] * percent(LIQUIDATION_THRESHOLD, LIQUIDATION_THRESHOLD_PRECISION, 2), userBorrowed[msg.sender] * 100 , 2);

        return a;
        //return ((userCollateral[msg.sender] * LIQUIDATION_THRESHOLD / LIQUIDATION_THRESHOLD_PRECISION) / userBorrowed[msg.sender] *);
    }
    
    function percent(uint numerator, uint denominator, uint precision) public pure returns(uint quotient) {
        // caution, check safe-to-multiply here
        uint _numerator  = numerator * 10 ** (precision+1);
        // with rounding of last digit
        uint _quotient =  ((_numerator / denominator) + 5) / 10;
        return ( _quotient);
    }

    
    // for testing purposes
    function returnCurrentMsgSender() external view returns (address){
        return mockOTContract.returnCurrentMsgSender();
    }
    
}
