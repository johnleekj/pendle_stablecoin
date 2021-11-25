import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const deployFunc: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployer } = await hre.getNamedAccounts();

  await hre.deployments.deploy('MockOT', {
    from: deployer,
    args: [500],
    log: true,
  });
};
deployFunc.tags = ['MockOT'];

export default deployFunc;
