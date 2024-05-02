const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://rpc.swissdlt.ch`)


const account_address = '0x40C728B90578b3390f0c3cba8FF72B16822F4255'
const factory_address = '0xe0a956e10F1E514722510fC3B8094B28a9851c86'
const registry_address = '0xfEfDC395b555Fdcac8aC195Dc34c794DA740bb82'



const root_private_key = '53c1faf86ff9f691e8ce6ed0d16bb7388c02a9b5830125581ca33e797cd1536d'
const root_wallet = new ethers.Wallet(root_private_key, provider)

const main = async () => {
    const root_before = await provider.getBalance(root_wallet.address)
    const mine_before = await provider.getBalance(account_address)

    console.log(`\nBalance Root: ${ethers.utils.formatEther(root_before)}`)
    console.log(`Balance Myself: ${ethers.utils.formatEther(mine_before)}\n`)

    const tx = await root_wallet.sendTransaction({
        to: account_address,
        value: ethers.utils.parseEther("0.01")
    })

    await tx.wait()
    console.log(tx)

    const root_after = await provider.getBalance(root_wallet.address)
    const mine_after = await provider.getBalance(account_address)

    console.log(`\nBalance Root: ${ethers.utils.formatEther(root_after)}`)
    console.log(`Balance Myself: ${ethers.utils.formatEther(mine_after)}\n`)
}

main()