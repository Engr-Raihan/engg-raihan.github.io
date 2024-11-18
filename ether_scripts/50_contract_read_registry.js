require('dotenv').config();
const { ethers } = require("ethers");
const { SWISS_RPC, REGISTRY_ADDRESS } = process.env;
const { registry_avi } = require('./avi/constant');

const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);
const registry_contract = new ethers.Contract(REGISTRY_ADDRESS, registry_avi, swiss_dlt_provider);

/** 
    Two View Function in Registry Contract
    "function batchAddress(string) view returns (address)",
    "function uidClaimed(string) view returns (bool)",
 */

const address = async (_name) => {
    const address = await registry_contract.batchAddress(_name);
    console.log(`BatchAddress: ${address}\n`)
}

const claimed = async (_uid) => {
    const flag = await registry_contract.uidClaimed(_uid)
    console.log(`UidClaimed: ${flag}\n`)
}

// address('Test Contract 6')
// claimed('UID12')

module.exports = { address, claimed }