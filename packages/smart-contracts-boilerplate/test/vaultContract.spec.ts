import { expect } from 'chai';
import { ethers } from 'hardhat';
// NOTICE HERE: import autogenerated types
import { VaultContract, VaultContract__factory, MockOT, MockOT__factory } from '@typechained';

describe('setMockOTContract', function () {
  // NOTICE HERE: we can give our contract a `mockOT` type!! instead of an `any` type.
  let vaultContract: VaultContract;
  let vaultContractFactory: VaultContract__factory;
  let mockOT: MockOT;
  let mockOTFactory: MockOT__factory;

  beforeEach(async () => {
    vaultContractFactory = (await ethers.getContractFactory('VaultContract')) as VaultContract__factory;
    vaultContract = await vaultContractFactory.deploy();
    mockOTFactory = (await ethers.getContractFactory('MockOT')) as MockOT__factory;
    mockOT = await mockOTFactory.deploy(500);
  });

  it('should set the address of the vault contract to mockOT contract for testing', async function () {
    await vaultContract.deployed();
    await mockOT.deployed();

    await mockOT.approve(vaultContract.address, 100);
    await vaultContract.SetMockOTContract(mockOT.address);

    await vaultContract.addCollateral(75);
    console.log(await vaultContract.totalCollateral());

    await vaultContract.borrowKhooleeCoins(20);

    console.log(await vaultContract.totalBorrow());

    await vaultContract.approveKhooleeTransfer(vaultContract.address, 100);

    await vaultContract.repayDebt();

    console.log(await vaultContract.totalBorrow());
  });
});
