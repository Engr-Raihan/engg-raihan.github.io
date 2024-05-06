require('dotenv').config();
const { ethers } = require("ethers");
const { SWISS_RPC, INFURA_URL, INFURA_ID } = process.env;

const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);
const infura_provider = new ethers.providers.JsonRpcProvider(`${INFURA_URL}${INFURA_ID}`)

const main = async () => {
    const block = await infura_provider.getBlockNumber()
    console.log(`\nBlock Number: ${block}\n`)

    const blockInfo = await infura_provider.getBlock(block)
    console.log(blockInfo)

    const { transactions } = await infura_provider.getBlockWithTransactions(block)
    console.log(`\nLogging first transaction in block:\n`)
    console.log(transactions[0])
}

main()