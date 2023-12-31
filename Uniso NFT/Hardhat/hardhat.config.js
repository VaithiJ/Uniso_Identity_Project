require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: { version: "0.8.19" },
  networks: {
    apothem: {
      url: process.env.APOTHEM_URL,
      accounts: [
        process.env.PRIVATE_KEY]
      
      // chainId:51,
    },
    wanchain : {
      url: process.env.WANCHAIN_URL,
      accounts : [
        process.env.WAN_PRIVATE_KEY
      ],
      gasPrice: 20000000000 // 20 gwei

    },
    sepoli: {
      url: process.env.SEPOLIA_URL,
      accounts: [
        process.env.SEPOLIA_PRIVATE_KEY
      ],
    },
    skpoly: {
      url: process.env.POLYGON_URL,
      accounts: [
        process.env.PRIVATE_KEY
      ],
    },
    hardhat: {
      chainId: 1337,
    },
  },
};
