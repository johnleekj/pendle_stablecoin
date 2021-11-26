import { ethers, deployments } from 'hardhat';
import { assert } from 'chai';
import { Greeter, MockOT } from '@typechained';

async function main() {
  const greeterDeployment = await deployments.get('Greeter');
  const mockOTDeployment = await deployments.get('MockOT');

  const greeter = (await ethers.getContractAt(greeterDeployment.abi, greeterDeployment.address)) as Greeter;

  const MockOT = (await ethers.getContractAt(mockOTDeployment.abi, mockOTDeployment.address)) as MockOT;

  assert((await greeter.greet()) === 'Error!');
  assert((await MockOT.name()) === 'MockOT');
  console.log(greeterDeployment.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
