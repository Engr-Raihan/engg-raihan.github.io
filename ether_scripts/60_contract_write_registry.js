require('dotenv').config();
const { ethers } = require("ethers");
const { registry_avi } = require('./avi/constant');
const { SWISS_RPC, REGISTRY_ADDRESS, ROOT_PTV_KEY, ANIKA_PTV_KEY, ANIKA_WALLET, RAIHAN_WALLET } = process.env;


const swiss_dlt_provider = new ethers.providers.JsonRpcProvider(SWISS_RPC);
const registry_contract = new ethers.Contract(REGISTRY_ADDRESS, registry_avi, swiss_dlt_provider);


/** 
    Two View Function in Registry Contract
    "function claimBatchToken(string memory name, string memory uid, address to, uint256 amount)",
    "function transferBulk(address to, address[] calldata tokens, uint256[] calldata amounts)",

    "event TokenClaimed(address indexed batch, address indexed to, string uid, uint256 amount)"
 */


const claim = async (_batch, _uid, _to, _amount) => {
    const root_wallet = new ethers.Wallet(ROOT_PTV_KEY, swiss_dlt_provider);
    const contract_with_root_wallet = registry_contract.connect(root_wallet);
    const tx = await contract_with_root_wallet.claimBatchToken(
        _batch, _uid, _to, `${_amount}`
    );
    const res = await tx.wait();
    // console.log('tx: ', tx);
    // console.log('res: ', res);

    const event = res.events.find(event => event.event === 'TokenClaimed');
    const [batch, to, uid, value] = event.args;
    console.log(`${value} is claimed by user: ${to}`);
    console.log(`For uid: ${uid} from the batch: ${batch}`);
}
const transfer = async (pvt_key, to, batches, amounts) => {
    const wallet = new ethers.Wallet(pvt_key, swiss_dlt_provider);
    const contract_with_wallet = registry_contract.connect(wallet);
    const tx = await contract_with_wallet.transferBulk(to, batches, amounts);

    const res = await tx.wait();
    // console.log('tx: ', tx);
    // console.log('res: ', res);

    console.log(`Amount is transferred to account: ${to}`);
}



// batches = ['0xb3f44E7Ea0DE98bbCaf553014133263426E244A0', '0xbD13E13564Cb52b4A69d0d1194aDCB2b9b636065', '0x619a4Cf5Dc4Ec37d3B00D698621501c69Aa8AA63'];
// amounts = ['100000000000000000000', '10000000000000000000', '3000000000000000000'];

// claim('Test Contract 6', 'UID21', ANIKA_WALLET, 10);
// transfer(RAIHAN_WALLET, batches, amounts);

module.exports = { claim, transfer }