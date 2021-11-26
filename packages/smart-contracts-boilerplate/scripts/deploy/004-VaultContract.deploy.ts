import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const deployFunc: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployer } = await hre.getNamedAccounts();

  const khooleeCoinMinter = await hre.deployments.get('KhooleeCoinMinter');
  const mockOT = await hre.deployments.get('MockOT');

  await hre.deployments.deploy('VaultContract', {
    from: deployer,
    args: [khooleeCoinMinter.address, mockOT.address],
    log: true,
  });
};
deployFunc.tags = ['VaultContract'];

export default deployFunc;
