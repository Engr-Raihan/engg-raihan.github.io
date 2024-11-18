require('dotenv').config();
const { ROOT_PTV_KEY } = process.env;
require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: "0.8.7",
  networks: {
    swissdlt: {
      url: "https://rpc.swissdlt.ch",
      chainId: 94,
      accounts: [`0x${ROOT_PTV_KEY}`]
    }
  }
};




// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.27",
// };
