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
    });

    it("Should vote, increase count and retrieve count", async () => {
        let oldVoteCount = await ballot.getNumberOfVotes();
        expect(oldVoteCount).to.be.equals(0);
        // Vote
        let count = 0;
        while (count++ < 3) {
            await ballot.vote();
        }
        let newVoteCount = await ballot.getNumberOfVotes();

        expect(newVoteCount).to.be.gt(oldVoteCount);
        expect(newVoteCount).to.be.equals(3);

    });

    it("Should get number of Votes", async () => {
        let voteCount = await ballot.getNumberOfVotes();
        expect(voteCount).to.be.gt(0);
    });

    it("Should deploy a new ballot contract and retrieve old value", async () => {
        const NewBallotFactory = await ethers.getContractFactory("Ballot");
        let newBallot = await NewBallotFactory.deploy(eternalStorage.address);

        expect(await newBallot.getNumberOfVotes()).to.be.eq(3);

        await newBallot.vote();

        expect(await newBallot.getNumberOfVotes()).to.be.eq(4);
    });

});