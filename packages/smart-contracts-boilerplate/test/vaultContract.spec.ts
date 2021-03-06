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
  let khooleecoinminterFactory: KhooleeCoinMinter__factory;

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

    const minter_role = await khooleecoinminter.MINTER_ROLE();
    // console.log(minter_role);

    await khooleecoinminter.grantRole(minter_role, vaultContract.address);

    await mockOT.approve(vaultContract.address, 100);
    await vaultContract.addCollateral(75);
    await vaultContract.borrowKhooleeCoins(20);
    console.log(await vaultContract.totalBorrow());
    expect(await vaultContract.totalBorrow()).to.equal(20);

    await khooleecoinminter.approve(vaultContract.address, 100);
    await vaultContract.repayDebt();
  });
});

describe('Liquidation of stable coin', function () {
  // NOTICE HERE: we can give our contract a `mockOT` type!! instead of an `any` type.
  let vaultContract: VaultContract;
  let vaultContractFactory: VaultContract__factory;
  let mockOT: MockOT;
  let mockOTFactory: MockOT__factory;
  let khooleecoinminter: KhooleeCoinMinter;
  let khooleecoinminterFactory: KhooleeCoinMinter__factory;

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

    const minter_role = await khooleecoinminter.MINTER_ROLE();
    // console.log(minter_role);

    await khooleecoinminter.grantRole(minter_role, vaultContract.address);

    await mockOT.approve(vaultContract.address, 100);
    await vaultContract.addCollateral(75);
    await vaultContract.borrowKhooleeCoins(20);
    console.log(await vaultContract.totalBorrow());
    expect(await vaultContract.totalBorrow()).to.equal(20);

    await vaultContract.removeCollateral(50);
    const userCollateral = await vaultContract.getUserCollateral('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
    expect(userCollateral).to.equal(0);
  });
});
