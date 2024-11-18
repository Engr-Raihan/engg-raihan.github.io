const { address, claimed } = require('../ether_scripts/50_contract_read_registry');
const { batchName, totalSupply, maxSupply, balanceOf } = require('../ether_scripts/52_contract_read_batch');
const { claim, transfer } = require('../ether_scripts/60_contract_write_registry');
const { create } = require('../ether_scripts/61_contract_write_factory')
const { ANIKA_WALLET, RAIHAN_WALLET } = process.env;


// batchName()
// totalSupply()
// maxSupply()

// create('Test_Contract_03', 200, 1778163422);
address('Test_Contract_02')


// claim('250606_ean123_lot123', 'UID_05', RAIHAN_WALLET, 2);
// claimed('UID12');

// batches = ['0xa79bc52aa88daacc70bfc983643cd434de909361'];
// amounts = ["10"];
// const pvt_key = "ff4ecb4ee3cc2ec231a167ef846a5947fc1f0da84d79ad0f651ffb55707dc7d5"
// transfer(pvt_key, '0x60e8ca513d8feb556b377c2d6360dac19d0446ee', batches, amounts);