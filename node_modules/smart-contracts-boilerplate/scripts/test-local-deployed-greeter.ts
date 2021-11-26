import { ethers, deployments } from 'hardhat';
import { assert, expect } from 'chai';
import { Greeter, KhooleeCoinMinter, MockOT, VaultContract } from '@typechained';
import { BigNumber } from '@ethersproject/bignumber';

async function main() {
  const greeterDeployment = await deployments.get('Greeter');
  const mockOTDeployment = await deployments.get('MockOT');
  const khooleeCoinMinterDeployment = await deployments.get('KhooleeCoinMinter');
  const vaultContractDeployment = await deployments.get('VaultContract');

  const greeter = (await ethers.getContractAt(greeterDeployment.abi, greeterDeployment.address)) as Greeter;

  const MockOT = (await ethers.getContractAt(mockOTDeployment.abi, mockOTDeployment.address)) as MockOT;
  const khooleeCoinMinter = (await ethers.getContractAt(
    khooleeCoinMinterDeployment.abi,
    khooleeCoinMinterDeployment.address
  )) as KhooleeCoinMinter;
  const vaultContract = (await ethers.getContractAt(vaultContractDeployment.abi, vaultContractDeployment.address)) as VaultContract;

  // assert((await greeter.greet()) === 'Error!');
  // assert((await MockOT.name()) === 'MockOT');
  // console.log(greeterDeployment.address);

  await khooleeCoinMinter.grantRole(await khooleeCoinMinter.MINTER_ROLE(), vaultContract.address);

  await MockOT.approve(vaultContract.address, 100);
  await vaultContract.addCollateral(75);
  await vaultContract.borrowKhooleeCoins(20);

  expect(await vaultContract.totalBorrow()).to.equal(20);

  assert(await khooleeCoinMinter.approve(vaultContract.address, 100));
  assert(await vaultContract.repayDebt());

  console.log('finished');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
