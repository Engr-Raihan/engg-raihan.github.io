require('dotenv').config();
const { ethers } = require("ethers");
const { SWISS_RPC, INFURA_URL, INFURA_ID, FACTORY_ADDRESS, FACTORY_AVI } = process.env;

const infura_provider = new ethers.providers.JsonRpcProvider(`${INFURA_URL}${INFURA_ID}`);
const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);


const main = async () => {
    console.log(`Getting the BatchCreated events...`);
    const currentBlock = await swiss_dlt_provider.getBlockNumber()
    const eventTopic = ethers.utils.id(FACTORY_AVI);

    rawLogs = await swiss_dlt_provider.getLogs({
        address: FACTORY_ADDRESS,
        topics: [eventTopic],
        fromBlock: currentBlock - 10000000,
        toBlock: currentBlock
    });

    console.log(rawLogs);
}

main()