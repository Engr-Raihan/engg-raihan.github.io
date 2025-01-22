const { address, claimed } = require('../ether_scripts/50_contract_read_registry');
const { batchName, totalSupply, maxSupply, balanceOf } = require('../ether_scripts/52_contract_read_batch');
const { claim, transfer, signTransfer } = require('../ether_scripts/60_contract_write_registry');
const { create } = require('../ether_scripts/61_contract_write_factory')
const { ANIKA_WALLET, RAIHAN_WALLET, RAIHAN_PTV_KEY } = process.env;


// batchName()
// totalSupply()
// maxSupply()

// create('Test_Contract_03', 200, 1778163422);
// address('Test_Contract_02')


// claim('250606_ean123_lot123', 'UID_05', RAIHAN_WALLET, 2);
// claimed('UID12');

batches = ['0x25170422e3b9E88Ebdd44FAb94049c48fb279930'];
amounts = ["1000000"];
signTransfer(RAIHAN_PTV_KEY, ANIKA_WALLET, batches, amounts);

