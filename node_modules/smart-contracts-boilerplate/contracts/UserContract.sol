//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// This is used as an intermediary contract for us to test the other contracts.

contract MockOTInterface {
    function totalSupply() public view returns (uint256) {
    }
    
    function balanceOf(address owner) public view returns (uint256) {
    }
    
    function getStart() external view returns (uint256){
    }

    function getExpiry() external view returns (uint256){
    } 
}

contract VaultContractInterface {
    function addCollateral(uint256 collateralAmount) public {
    }

    function removeCollateral(uint256 collateralAmount) public {
    }

    function borrowKhooleeCoins(uint256 borrowAmount) public {
    }
}

contract UserContract {
    MockOTInterface mockOTContract;
    VaultContractInterface vaultContract;
    
    function SetMockOTContract(address addr) public {
        mockOTContract = MockOTInterface(addr);
    }
    
    function SetVaultContract(address addr) public {
        vaultContract = VaultContractInterface(addr);
    }
    
    // Functions for MockOT
    function totalSupply() public view returns (uint256) {
        return mockOTContract.totalSupply();
    }
    
    function balanceOf(address owner) public view returns (uint256) {
        //address owner = msg.sender;
        return mockOTContract.balanceOf(owner);
    } 
    
    function getStart() public view returns (uint256) {
        return mockOTContract.getStart();
    }
    
    function getExpiry() public view returns (uint256) {
        return mockOTContract.getExpiry();
    }
    // ---------------------------------------------
    
    // Functions for VaultContract
    function addCollateral(uint256 collateralAmount) public {
        vaultContract.addCollateral(collateralAmount);
    }

    function removeCollateral(uint256 collateralAmount) public {
        vaultContract.removeCollateral(collateralAmount);
    }

    function borrowKhooleeCoins(uint256 borrowAmount) public {
        vaultContract.borrowKhooleeCoins(borrowAmount);
    }
    // ---------------------------------------------
}
