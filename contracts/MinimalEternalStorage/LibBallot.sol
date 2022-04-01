// SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

import "./EternalStorage.sol";

library LibBallot {
    function getNumberOfVotes(address _eternalStorage)
        internal
        view
        returns (uint256)
    {
        return EternalStorage(_eternalStorage).getUIntValue(keccak256("votes"));
    }

    function setVoteCount(address _eternalStorage, uint256 _voteCount)
        internal
    {
        EternalStorage(_eternalStorage).setUIntValue(
            keccak256("votes"),
            _voteCount
        );
    }
}
