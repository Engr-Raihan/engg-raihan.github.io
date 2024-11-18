require('dotenv').config();
const { ethers } = require("ethers");
const { SWISS_RPC, FACTORY_ADDRESS } = process.env;
const { factory_avi } = require('./avi/constant');

const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);
const factory_contract = new ethers.Contract(FACTORY_ADDRESS, factory_avi, swiss_dlt_provider)


const main = async () => {
    const batchRegistry = await factory_contract.batchRegistry()
    console.log(`batchRegistry: ${batchRegistry}\n`)
}

main()