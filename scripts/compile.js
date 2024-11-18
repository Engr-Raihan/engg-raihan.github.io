const solc = require('solc');
const fs = require('fs');
const path = require('path');

const contractPath = path.resolve(__dirname, 'CertificateRegistry.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'CertificateRegistry.sol': { content: source }
    },
    settings: { outputSelection: { '*': { '*': ['*'] } } }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const contract = output.contracts['CertificateRegistry.sol']['CertificateRegistry'];

fs.writeFileSync('./CertificateRegistry.abi', JSON.stringify(contract.abi));
fs.writeFileSync('./CertificateRegistry.bin', contract.evm.bytecode.object);
