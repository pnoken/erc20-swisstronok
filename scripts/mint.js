const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy();

    console.log(`Token deployed to address: ${myToken.address}`);

    await myToken.mint(deployer.address, ethers.utils.parseEther("100")); // Mint 100 tokens
    console.log(`Minted 100 tokens to deployer`);

    await myToken.mint("0x1731D34B07CA2235E668c7B0941d4BfAB370a2d0", ethers.utils.parseEther("50")); // Mint 50 tokens to another address
    console.log(`Minted 50 tokens to another address`);

    await myToken.mint("0x683287150dE08509909E7efA8e4609DA8E34360F", ethers.utils.parseEther("200")); // Mint 200 tokens to another address
    console.log(`Minted 200 tokens to another address`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
