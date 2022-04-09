const { ethers } = require("hardhat");

async function main() {
   const [deployer] = await ethers.getSigners();

   const accountBalance = await deployer.getBalance();

   console.log("deploying contracts with account: ", deployer.address);
   console.log("account balance: ", accountBalance.toString());

   const waveContractFactory = await ethers.getContractFactory("WavePortal");
   const waveContract = await waveContractFactory.deploy();
   await waveContract.deployed();

   console.log("wave portal address", waveContract.address);
}

async function runMain() {
   try {
      await main();
   } catch (error) {
      console.error(error);
   }
}

runMain();
