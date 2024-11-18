require('dotenv').config();
const { ethers } = require("ethers");
const { factory_avi } = require('./avi/constant');
const { SWISS_RPC, FACTORY_ADDRESS, ROOT_PTV_KEY } = process.env;


const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);
const factory_contract = new ethers.Contract(FACTORY_ADDRESS, factory_avi, swiss_dlt_provider);


/** 
    Function in Registry Contract
    "function createBatch(string memory name, uint256 maxSupply, uint256 expiration) returns (address)",

    "event BatchCreated(address indexed batch, string name, uint256 maxSupply, uint256 expiration)"
 */


const create = async (_name, _amount, _expire) => {
    const root_wallet = new ethers.Wallet(ROOT_PTV_KEY, swiss_dlt_provider);
    const contract_with_root_wallet = factory_contract.connect(root_wallet);

    const tx = await contract_with_root_wallet.createBatch(_name, `${_amount}000000000000000000`, _expire);
    const res = await tx.wait();
    // console.log('tx: ', tx);
    // console.log('res: ', res);

    const event = res.events.find(event => event.event === 'BatchCreated');
    const [batch, name, maxSupply, expiration] = event.args;
    console.log(batch, name, maxSupply, expiration);
}

// create('Test Contract 8', 1500, 1778163422);

module.exports = { create }