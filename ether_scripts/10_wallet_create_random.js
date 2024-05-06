const { ethers } = require("ethers");

const main = async () => {
    const wallet = ethers.Wallet.createRandom();
    console.log(wallet)
    console.log(wallet.publicKey)
    console.log(wallet.privateKey)
}

main()