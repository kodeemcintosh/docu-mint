import { ethers } from "hardhat";

async function main() {
  const Ownable = await ethers.getContractFactory("Ownable"); // Replace with your Ownable contract name
  const ownable = await Ownable.deploy();

  await ownable.deployed();

  console.log("Ownable deployed to:", ownable.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
