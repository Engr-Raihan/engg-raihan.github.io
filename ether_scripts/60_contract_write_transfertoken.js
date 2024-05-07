require('dotenv').config();
const { ethers } = require("ethers");
const { SWISS_RPC, REGISTRY_AVI, REGISTRY_ADDRESS, ANIKA_PTV_KEY, RAIHAN_WALLET } = process.env;

const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);
const anika_wallet = new ethers.Wallet(ANIKA_PTV_KEY, swiss_dlt_provider);
const registry_contract = new ethers.Contract(REGISTRY_ADDRESS, REGISTRY_AVI, swiss_dlt_provider)


const main = async () => {
    const contract_with_my_wallet = registry_contract.connect(anika_wallet);
    const tx = await contract_with_my_wallet.transfer(RAIHAN_WALLET, "50000000000000000000");
    await tx.wait();
    console.log(tx);
}

main()