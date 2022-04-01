const { expect } = require("chai");
const { ethers } = require("hardhat");
// const { ethers } = require("hardhat");

describe("Eternal Storage", () => {
    let eternalStorage;
    let ballot;

    before(async () => {
        // Deploy eternal storage
        const EternalStorageFactory = await ethers.getContractFactory("EternalStorage");
        eternalStorage = await EternalStorageFactory.deploy();

        // Deploy Ballot
        const BallotFactory = await ethers.getContractFactory("Ballot");
        ballot = await BallotFactory.deploy(eternalStorage.address);
        console.log(ballot.address);
    });

    it("Should vote, increasing count", async () => {
        let oldVoteCount = await ballot.getNumberOfVotes();
        expect(oldVoteCount).to.be.equals(0);
        // Vote
        await ballot.vote();
        let newVoteCount = await ballot.getNumberOfVotes();
        expect(newVoteCount).to.be.gt(oldVoteCount);
        expect(newVoteCount).to.be.equals(1);

    });

    it("Should get number of Votes", async () => {
        expect(true).to.be.false;
    });

    it("Should deploy a new ballot contract and retrieve old value", async () => {
        expect(true).to.be.false;
    });

});