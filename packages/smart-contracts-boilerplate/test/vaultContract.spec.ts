import { expect } from 'chai';
import { ethers } from 'hardhat';

// NOTICE HERE: import autogenerated types
import { VaultContract, VaultContract__factory, MockOT, MockOT__factory, KhooleeCoinMinter, KhooleeCoinMinter__factory } from '@typechained';

describe('minting of stable coin', function () {
  // NOTICE HERE: we can give our contract a `mockOT` type!! instead of an `any` type.
  let vaultContract: VaultContract;
  let vaultContractFactory: VaultContract__factory;
  let mockOT: MockOT;
  let mockOTFactory: MockOT__factory;
  let khooleecoinminter: KhooleeCoinMinter;
  let khooleecoinminterFactory: KhooleeCoinMinter__factory

  beforeEach(async () => {
    khooleecoinminterFactory = (await ethers.getContractFactory('KhooleeCoinMinter')) as KhooleeCoinMinter__factory;
    khooleecoinminter = await khooleecoinminterFactory.deploy();
    mockOTFactory = (await ethers.getContractFactory('MockOT')) as MockOT__factory;
    mockOT = await mockOTFactory.deploy(500);
    vaultContractFactory = (await ethers.getContractFactory('VaultContract')) as VaultContract__factory;
    vaultContract = await vaultContractFactory.deploy(khooleecoinminter.address, mockOT.address);
  });

  it('should allow collateral collection, stable coin loan and repayment of stable coin', async function () {

    await mockOT.deployed();
    await khooleecoinminter.deployed();
    await vaultContract.deployed();

    await khooleecoinminter.grantRole(khooleecoinminter.MINTER_ROLE, vaultContract.address);

    await mockOT.approve(vaultContract.address, 100);
    await vaultContract.addCollateral(75);
    await vaultContract.borrowKhooleeCoins(20);

    await khooleecoinminter.approve(vaultContract.address, 100);
    await vaultContract.repayDebt();
    // await vaultContract.deployed();
    // await mockOT.deployed();

    // await mockOT.approve(vaultContract.address, 100);
    // await vaultContract.SetMockOTContract(mockOT.address);

    // await vaultContract.addCollateral(75);
    // console.log(await vaultContract.totalCollateral());

    // await vaultContract.borrowKhooleeCoins(20);

    // console.log(await vaultContract.totalBorrow());

    // await vaultContract.approveKhooleeTransfer(vaultContract.address, 100);

    // await vaultContract.repayDebt();

    // console.log(await vaultContract.totalBorrow());
  });
});
