const { ethers } = require("ethers");

const infura_provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/4e380dddd20947098282d56cae643b6d`)
const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(`https://rpc.swissdlt.ch`)


const batch_address = '0x9BE16C7374fdfA4935F23d2d1600572144A31204'
const factory_address = '0xe0a956e10F1E514722510fC3B8094B28a9851c86'
const registry_address = '0xfEfDC395b555Fdcac8aC195Dc34c794DA740bb82'
const my_account_address = '0x40C728B90578b3390f0c3cba8FF72B16822F4255'
const receiver_account_address = '0x8f20261521EEBa6a004EBE8A803c600d173b5Fc9'


const root_private_key = '53c1faf86ff9f691e8ce6ed0d16bb7388c02a9b5830125581ca33e797cd1536d'
const root_wallet = new ethers.Wallet(root_private_key, swiss_dlt_provider)

const my_private_key = '58bbb13c7e9876744da526266c258a4420c3a962d71464e79492cf15fa7d096f'
const my_wallet = new ethers.Wallet(my_private_key, swiss_dlt_provider)



const factory_avi = ["function batchRegistry() view returns (address)"];
const registry_avi = [
    "function batchRegistry() view returns (address)",
    "function transfer(address to, uint amount) returns (bool)",
];
const batch_avi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const batch_contract = new ethers.Contract(batch_address, batch_avi, swiss_dlt_provider)
const factory_contract = new ethers.Contract(factory_address, factory_avi, swiss_dlt_provider)
const registry_contract = new ethers.Contract(registry_address, registry_avi, swiss_dlt_provider)


const main = async () => {
    const block = await swiss_dlt_provider.getBlockNumber()

    const transferEvents = await batch_contract.queryFilter('Transfer', block - 1, block)
    console.log(transferEvents)
}

main()