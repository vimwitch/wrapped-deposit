require('@nomiclabs/hardhat-waffle')
require('solidity-coverage')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.6",
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 99999,
      }
    }
  },
  networks: {
    goerli: {
      url: 'http://192.168.1.198:9545',
      accounts: ['0x18ef552014cb0717769838c7536bc1d3b1c800fe351aa2c38ac093fa4d4eb7d6'],
    }
  },
  mocha: {
    timeout: 300000
  }
};
