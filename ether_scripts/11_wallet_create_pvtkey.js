require('dotenv').config();
const { ethers } = require("ethers");
const { SWISS_RPC, ROOT_PTV_KEY } = process.env;


const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);
const main = async () => {
    const w = new ethers.Wallet(ROOT_PTV_KEY, swiss_dlt_provider);
    console.log(w)
    console.log(w.address)
    console.log(w.privateKey)
}

main()