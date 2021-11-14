import { task, HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import 'solidity-coverage';
import 'hardhat-gas-reporter';
import * as dotenv from 'dotenv';
dotenv.config();
import 'hardhat-contract-sizer';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import { removeConsoleLog } from "hardhat-preprocessor";
import "hardhat-deploy";

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  paths: {
    sources: './contracts',
    tests: './test',
    artifacts: './build/artifacts',
    cache: './build/cache',
    deploy: "./scripts/deploy",
  },
  solidity: {
    compilers: [
      {
        version: '0.8.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  mocha: {
    timeout: 20000,
  },
  gasReporter: {
    currency: 'USD',
    enabled: process.env.REPORT_GAS ? true : false,
    showMethodSig: true,
    onlyCalledMethods: false,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },
  typechain: {
    outDir: 'typechained',
    target: 'ethers-v5',
  },
  preprocess: {
    eachLine: removeConsoleLog(
      (hre) =>
        hre.network.name !== "hardhat" && hre.network.name !== "localhost"
    ),
  },
  networks: {
    hardhat: {
      chainId: 1337, // temporary for MetaMask support: https://github.com/MetaMask/metamask-extension/issues/10290
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // by default, take the first account as deployer
      rinkeby: "0x5369f1AF0ef9a346D7B9e1872ac6ECC3af9b0cdb", // on rinkeby, use a specific account
    },
  },
};

export default config;
