// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    constructor() {
        console.log("Yo yo, it's my contract");
    }

    uint256 totalWaves;

    function wave() public {
        totalWaves += 1;
        console.log("has waved! ", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("we have total waves! ", totalWaves);
        return totalWaves;
    }
}
