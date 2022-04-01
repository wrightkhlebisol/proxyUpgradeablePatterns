// SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

import "./LibBallot.sol";

contract Ballot {
    using LibBallot for address;
    address eternalStorage;

    constructor(address _eternalStorage) {
        eternalStorage = _eternalStorage;
    }

    function getNumberOfVotes() public view returns (uint256) {
        return eternalStorage.getNumberOfVotes();
    }

    function vote() public {
        eternalStorage.setVoteCount(eternalStorage.getNumberOfVotes() + 1);
    }
}
