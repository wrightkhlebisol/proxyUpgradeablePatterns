//SPDX-License-Identifier: No-Idea!

pragma solidity 0.8.1;

import "./Upgradeable.sol";

contract ContractUpgradeable is Upgradeable {
    uint256 _value;

    function initialize() public override {
        _sizes[bytes4(keccak256("getUint()"))] = 32;
    }

    function getUint() public view returns (uint256) {
        return _value;
    }

    function setUint(uint256 value) public {
        _value = value;
    }
}
