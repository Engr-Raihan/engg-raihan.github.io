require('dotenv').config();
const { ethers } = require("ethers");
const { SWISS_RPC, FACTORY_ADDRESS, FACTORY_AVI } = process.env;


const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);
const factory_contract = new ethers.Contract(FACTORY_ADDRESS, FACTORY_AVI, swiss_dlt_provider)


const main = async () => {
    console.log(`Getting the BatchCreated events...`);
    const block = await swiss_dlt_provider.getBlockNumber();

    const batchCreated = await factory_contract.queryFilter('BatchCreated', block - 1000000, block);
    console.log(batchCreated);
}

main()