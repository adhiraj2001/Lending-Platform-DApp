// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "../interfaces/AggregatorV3Interface.sol";

contract MockOracle {
    AggregatorV3Interface internal priceFeed;
    int256 private price;

    constructor() {
        price = 405807772492;
        priceFeed = AggregatorV3Interface(
            0x0000000000000000000000000000000000000000
        );
    }

    function getLatestPrice() public view returns (int256) {
        return price;
    }

    function setPrice(int256 _price) external {
        price = _price;
    }
}
