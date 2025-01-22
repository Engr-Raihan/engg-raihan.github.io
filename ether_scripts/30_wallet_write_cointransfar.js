require('dotenv').config();
const { ethers } = require("ethers");
const { SWISS_RPC, ROOT_PTV_KEY, RAIHAN_WALLET } = process.env;

const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);
const root_wallet = new ethers.Wallet(ROOT_PTV_KEY, swiss_dlt_provider)


// const main = async () => {
//     const root_before = await swiss_dlt_provider.getBalance(root_wallet.address)
//     const mine_before = await swiss_dlt_provider.getBalance(RAIHAN_WALLET)

//     console.log(`\nBalance Root: ${ethers.utils.formatEther(root_before)}`)
//     console.log(`Balance Receiver: ${ethers.utils.formatEther(mine_before)}\n`)


//     const tx = await root_wallet.sendTransaction({
//         to: RAIHAN_WALLET,
//         value: ethers.utils.parseEther("0.0001")
//     });

//     await tx.wait()
//     console.log(tx)


//     const root_after = await swiss_dlt_provider.getBalance(root_wallet.address)
//     const mine_after = await swiss_dlt_provider.getBalance(RAIHAN_WALLET)

//     console.log(`\nBalance Root: ${ethers.utils.formatEther(root_after)}`)
//     console.log(`Balance Receiver: ${ethers.utils.formatEther(mine_after)}\n`)
// }

const signTransaction = async (privateKey, toAddress, amount) => {
    const wallet = new ethers.Wallet(privateKey, swiss_dlt_provider);

    // Estimate gas and create transaction
    const tx = {
        chainId: 94,
        to: toAddress,
        value: ethers.utils.parseEther(amount.toString()),
        gasLimit: ethers.utils.hexlify(21000),
        nonce: await swiss_dlt_provider.getTransactionCount(wallet.address, 'latest'),
        gasPrice: await swiss_dlt_provider.getGasPrice(),
    };

    // Sign the transaction
    const signedTx = await wallet.signTransaction(tx);
    console.log('pre send tx: ', signedTx);

    const txResponse = await swiss_dlt_provider.sendTransaction(signedTx);
    const res = await txResponse.wait();
    console.log('post send tx: ', res);
}

// main()
signTransaction(
    '53c1faf86ff9f691e8ce6ed0d16bb7388c02a9b5830125581ca33e797cd1536d',
    '0x40C728B90578b3390f0c3cba8FF72B16822F4255',
    .001,
)