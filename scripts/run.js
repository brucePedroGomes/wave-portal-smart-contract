const { ethers } = require("hardhat");

async function main() {
    const [owner, randomPerson] = await ethers.getSigners();

    const waveContractFactory = await ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("contract deployed to: ", waveContract.address);
    console.log("contract deployed by: ", owner.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn
    waveTxn = await waveContract.wave();
    waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

    //random person
    waveTxn = await waveContract.connect(randomPerson).wave()

    await waveContract.getTotalWaves();

}

async function runMain() {
    try {
        await main();
    } catch (err) {
        console.error(err);
    }
}

runMain();
