require('dotenv').config();
const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');

const rpcUrl = process.env.RPC_URL;
const privateKey = process.env.PRIVATE_KEY;
const chainId = 94;

(async () => {
    try {
        // Connect to the SwissDLT network
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        const wallet = new ethers.Wallet(privateKey, provider);

        // Load ABI and Bytecode
        const abiPath = path.resolve(__dirname, 'Certificate.abi');
        const binPath = path.resolve(__dirname, 'Certificate.bin');

        const abi = JSON.parse(fs.readFileSync(abiPath, 'utf8'));
        const bytecode = fs.readFileSync(binPath, 'utf8');

        // Create a Contract Factory
        const factory = new ethers.ContractFactory(abi, bytecode, wallet);

        console.log('Deploying contract to SwissDLT...');

        // Deploy the Contract
        const contract = await factory.deploy();

        // Wait for deployment to be mined
        await contract.deployed();

        console.log(`Contract deployed at: ${contract.address}`);
        console.log(`Explorer URL: https://explorer.swissdlt.ch/address/${contract.address}`);

    } catch (error) {
        console.error('Error deploying contract:', error);
    }
})();
