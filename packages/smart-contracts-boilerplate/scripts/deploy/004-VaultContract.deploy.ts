import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const deployFunc: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployer } = await hre.getNamedAccounts();

  await hre.deployments.deploy('VaultContract', {
    from: deployer,
    args: [],
    log: true,
  });
};
deployFunc.tags = ['VaultContract'];

export default deployFunc;
