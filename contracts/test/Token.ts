import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";

describe("MyERC1155", function () {
  let erc1155: any;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;

  beforeEach(async function () {
    const ERC1155 = await ethers.getContractFactory("MyERC1155");
    [owner, addr1, addr2] = await ethers.getSigners();
    erc1155 = await ERC1155.deploy();
    await erc1155.deployed();
  });

  it("Should return the correct token URI", async function () {
    const uri = await erc1155.uri(1);
    expect(uri).to.equal("https://my-api/token/1");
  });

  it("Should return the correct balance for owner", async function () {
    const balance = await erc1155.balanceOf(await owner.getAddress(), 1);
    expect(balance).to.equal(100);
  });

  it("Should transfer tokens between addresses", async function () {
    await erc1155.connect(owner).safeTransferFrom(
      await owner.getAddress(),
      await addr1.getAddress(),
      1,
      50,
      "0x"
    );
    const balanceOwner = await erc1155.balanceOf(await owner.getAddress(), 1);
    const balanceAddr1 = await erc1155.balanceOf(await addr1.getAddress(), 1);
    expect(balanceOwner).to.equal(50);
    expect(balanceAddr1).to.equal(50);
  });
});
