async function main() {
    const Certificate = await ethers.getContractFactory("CertificateRegistry");
    const certificate = await Certificate.deploy(); //Pass the parameter here

    await certificate.deployed();

    console.log("CertificateRegistry deployed to:", certificate.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });


/** you must keep a single contract on contracts dir
npx hardhat clean
npx hardhat compile
npx hardhat run scripts/deploy.js --network swissdlt
 */