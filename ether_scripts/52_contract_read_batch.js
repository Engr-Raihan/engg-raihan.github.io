require('dotenv').config();
const { ethers } = require("ethers");
const { SWISS_RPC, BATCH_ADDRESS } = process.env;
const { batch_avi } = require('./avi/constant');

const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);
const batch_contract = new ethers.Contract(BATCH_ADDRESS, batch_avi, swiss_dlt_provider)


/**
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function MAX_SUPPLY() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
 */

const batchName = async () => {
    const _name = await batch_contract.name();
    console.log(`Batch Name: ${_name}\n`)
}
const totalSupply = async () => {
    const _totalSupply = await batch_contract.totalSupply();
    console.log(`TotalSupply: ${_totalSupply}\n`)
}
const maxSupply = async () => {
    const _maxSupply = await batch_contract.MAX_SUPPLY();
    console.log(`TotalSupply: ${_maxSupply}\n`)
}
const balanceOf = async () => {
    const _balanceOf = await batch_contract.balanceOf();
    console.log(`balanceOf: ${_balanceOf}\n`)
}

// batchName()
// totalSupply()
// balanceOf()


module.exports = { batchName, totalSupply, maxSupply, balanceOf }