const { ethers } = require("ethers");

const infura_provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/4e380dddd20947098282d56cae643b6d`)
const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(`https://rpc.swissdlt.ch`)


const factory_address = '0xe0a956e10F1E514722510fC3B8094B28a9851c86'
const registry_address = '0xfEfDC395b555Fdcac8aC195Dc34c794DA740bb82'
const my_account_address = '0x40C728B90578b3390f0c3cba8FF72B16822F4255'
const receiver_account_address = '0x8f20261521EEBa6a004EBE8A803c600d173b5Fc9'


const root_private_key = '53c1faf86ff9f691e8ce6ed0d16bb7388c02a9b5830125581ca33e797cd1536d'
const root_wallet = new ethers.Wallet(root_private_key, swiss_dlt_provider)

const my_private_key = '58bbb13c7e9876744da526266c258a4420c3a962d71464e79492cf15fa7d096f'
const my_wallet = new ethers.Wallet(my_private_key, swiss_dlt_provider)

const registry_avi = [
    "function batchRegistry() view returns (address)",
    "function transfer(address to, uint amount) returns (bool)",
];


const registry_contract = new ethers.Contract(registry_address, registry_avi, swiss_dlt_provider)

const main = async () => {
    const contract_with_my_wallet = registry_contract.connect(my_wallet)

    const mine_before = await swiss_dlt_provider.getBalance(my_account_address)
    const receiver_before = await swiss_dlt_provider.getBalance(receiver_account_address)

    console.log(`\nBalance Myself: ${ethers.utils.formatEther(mine_before)}`)
    console.log(`Balance Receiver: ${ethers.utils.formatEther(receiver_before)}\n`)


    const tx = await contract_with_my_wallet.transfer(
        receiver_account_address,
        "35"
    )
    await tx.wait()
    console.log(tx)

    const mine_after = await swiss_dlt_provider.getBalance(my_account_address)
    const receiver_after = await swiss_dlt_provider.getBalance(receiver_account_address)

    console.log(`\nBalance Myself: ${ethers.utils.formatEther(mine_after)}`)
    console.log(`Balance Receiver: ${ethers.utils.formatEther(receiver_after)}\n`)
}

main()