require('dotenv').config();
const { ethers } = require("ethers");
const { SWISS_RPC, FACTORY_AVI, FACTORY_ADDRESS } = process.env;

const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);
const factory_contract = new ethers.Contract(FACTORY_ADDRESS, FACTORY_AVI, swiss_dlt_provider)


const main = async () => {
    const batchRegistry = await factory_contract.batchRegistry()
    console.log(`batchRegistry: ${batchRegistry}\n`)
}

main()