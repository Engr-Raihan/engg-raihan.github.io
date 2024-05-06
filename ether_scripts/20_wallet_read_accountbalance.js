require('dotenv').config();
const { ethers } = require("ethers");
const { SWISS_RPC, RAIHAN_WALLET } = process.env;

const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);

const main = async () => {
    const balance = await swiss_dlt_provider.getBalance(RAIHAN_WALLET);
    // const balance = await provider.getTransactionCount(ROOT_WALLET)
    // const balance = await provider.listAccounts()
    // const balance = await provider.getCode(ROOT_WALLET)
    // const balance = await provider.getBlock(100004)
    // const balance = await provider.getBlockWithTransactions(100004)
    // const balance = await provider.lookupAddress(ROOT_WALLET)
    // const balance = await provider.getText("email");
    // const balance = await provider.getText("email");
    // const balance = await provider.getText("url");
    // const balance = await provider.getNetwork();
    // const balance = await provider.getBlockNumber();
    // const balance = await provider.getGasPrice();
    // const balance = await provider.getFeeData();
    // const balance = await provider.getFeeData();
    // console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
    // console.log(ethers.utils.formatUnits(balance, "gwei"))
    console.log(`Balance Receiver: ${ethers.utils.formatEther(balance)}\n`)
}

main()