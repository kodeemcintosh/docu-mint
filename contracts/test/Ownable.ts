import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";

describe("Ownable", function () {
  let ownable: any;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;

  beforeEach(async function () {
    const Ownable = await ethers.getContractFactory("Ownable");
    [owner, addr1, addr2] = await ethers.getSigners();
    ownable = await Ownable.deploy();
    await ownable.deployed();
  });

  it("Should set the deployer as the initial owner", async function () {
    expect(await ownable.owner()).to.equal(await owner.getAddress());
  });

  it("Should transfer ownership to a new address", async function () {
    await ownable.transferOwnership(await addr1.getAddress());
    expect(await ownable.owner()).to.equal(await addr1.getAddress());
  });

  it("Should prevent non-owners from transferring ownership", async function () {
    await expect(ownable.connect(addr1).transferOwnership(await addr2.getAddress())).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
  });
});
