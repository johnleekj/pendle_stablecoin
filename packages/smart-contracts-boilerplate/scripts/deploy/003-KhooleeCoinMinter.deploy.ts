import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const deployFunc: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployer } = await hre.getNamedAccounts();

  await hre.deployments.deploy('KhooleeCoinMinter', {
    from: deployer,
    log: true,
  });
};
deployFunc.tags = ['KhooleeCoinMinter'];

export default deployFunc;
