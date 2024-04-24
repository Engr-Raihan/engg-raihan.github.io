const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://rpc.swissdlt.ch`)
const address = '0x40C728B90578b3390f0c3cba8FF72B16822F4255'

const main = async () => {
    const balance = await provider.getBalance(address)
    // const balance = await provider.getTransactionCount(address)
    // const balance = await provider.listAccounts()
    // const balance = await provider.getCode(address)
    // const balance = await provider.getBlock(100004)
    // const balance = await provider.getBlockWithTransactions(100004)
    // const balance = await provider.lookupAddress(address)
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
    console.log(balance)
}

main()

