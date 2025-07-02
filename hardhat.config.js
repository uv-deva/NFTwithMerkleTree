require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { DEPLOYER_PRIVATE_KEY, TEST_USER_PRIVATE_KEY,  ALCHEMY_API_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.21",

  networks: {
    base_sepolia: {
      url: ALCHEMY_API_KEY,
      accounts: [DEPLOYER_PRIVATE_KEY]
    }
    
  },
  etherscan: {
    apiKey: {
      sepolia: "XW8FARI4JVCRE6MIFDJNCK66H8P4N75A8G",
    }
  },
};