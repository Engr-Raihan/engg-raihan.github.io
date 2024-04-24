const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://rpc.swissdlt.ch`)

const main = async () => {
    // const wallet = ethers.Wallet.createRandom();
    // console.log(wallet.publicKey)
    // console.log(wallet.privateKey)

    // const w = new ethers.Wallet(wallet.privateKey, provider);
    const w = new ethers.Wallet('58bbb13c7e9876744da526266c258a4420c3a962d71464e79492cf15fa7d096f', provider);
    // console.log(w)
    console.log(w.address)
    console.log(w.privateKey)
}

main()