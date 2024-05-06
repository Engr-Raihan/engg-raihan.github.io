require('dotenv').config();
const { ethers } = require("ethers");
const { SWISS_RPC, ROOT_PTV_KEY, RAIHAN_WALLET } = process.env;

const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);
const root_wallet = new ethers.Wallet(ROOT_PTV_KEY, swiss_dlt_provider)


const main = async () => {
    const root_before = await swiss_dlt_provider.getBalance(root_wallet.address)
    const mine_before = await swiss_dlt_provider.getBalance(RAIHAN_WALLET)

    console.log(`\nBalance Root: ${ethers.utils.formatEther(root_before)}`)
    console.log(`Balance Receiver: ${ethers.utils.formatEther(mine_before)}\n`)


    const tx = await root_wallet.sendTransaction({
        to: RAIHAN_WALLET,
        value: ethers.utils.parseEther("0.0001")
    });

    await tx.wait()
    console.log(tx)


    const root_after = await swiss_dlt_provider.getBalance(root_wallet.address)
    const mine_after = await swiss_dlt_provider.getBalance(RAIHAN_WALLET)

    console.log(`\nBalance Root: ${ethers.utils.formatEther(root_after)}`)
    console.log(`Balance Receiver: ${ethers.utils.formatEther(mine_after)}\n`)
}

main()