async function main() {
    const Certificate = await ethers.getContractFactory("CertificateRegistry");
    const certificate = await Certificate.deploy();

    await certificate.deployed();

    console.log("CertificateRegistry deployed to:", certificate.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });