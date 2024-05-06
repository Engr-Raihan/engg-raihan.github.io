require('dotenv').config();
const { ethers } = require("ethers");
const { SWISS_RPC, REGISTRY_AVI, REGISTRY_ADDRESS, RAIHAN_PTV_KEY, STG_PTV_KEY } = process.env;

const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);
const raihan_wallet = new ethers.Wallet(RAIHAN_PTV_KEY, swiss_dlt_provider);
const registry_contract = new ethers.Contract(REGISTRY_ADDRESS, REGISTRY_AVI, swiss_dlt_provider)


const main = async () => {
    const contract_with_my_wallet = registry_contract.connect(raihan_wallet);

    const tx = await contract_with_my_wallet.transfer(
        STG_PTV_KEY,
        "35"
    );

    await tx.wait();
    console.log(tx);
}

main()