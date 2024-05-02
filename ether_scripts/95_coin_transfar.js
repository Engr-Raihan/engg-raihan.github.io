const { ethers } = require("ethers");
const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(`https://rpc.swissdlt.ch`)
const private_key = '0x54f035b5628b47b5b6b679f58c2dfdcff3d67781d4925f41eb424f7aad9012d3'
const root_wallet = new ethers.Wallet(private_key, swiss_dlt_provider)

receiver_account_address = "0x40C728B90578b3390f0c3cba8FF72B16822F4255"


const main = async () => {
    const root_before = await swiss_dlt_provider.getBalance(root_wallet.address)
    const mine_before = await swiss_dlt_provider.getBalance(receiver_account_address)

    console.log(`\nBalance Root: ${ethers.utils.formatEther(root_before)}`)
    console.log(`Balance Receiver: ${ethers.utils.formatEther(mine_before)}\n`)



    const tx = await root_wallet.sendTransaction({
        to: receiver_account_address,
        value: ethers.utils.parseEther("0.0001")
    })

    await tx.wait()
    console.log(tx)



    const root_after = await swiss_dlt_provider.getBalance(root_wallet.address)
    const mine_after = await swiss_dlt_provider.getBalance(receiver_account_address)

    console.log(`\nBalance Root: ${ethers.utils.formatEther(root_after)}`)
    console.log(`Balance Receiver: ${ethers.utils.formatEther(mine_after)}\n`)
}

main()