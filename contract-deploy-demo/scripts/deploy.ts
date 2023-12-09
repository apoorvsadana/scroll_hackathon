import { ethers } from "hardhat";

async function main() {
  const BuyMeCoffee = await ethers.getContractFactory("BuyMeCoffee");
  const buyMeCoffee = await BuyMeCoffee.deploy(undefined, {});

  await buyMeCoffee.deployed();

  console.log(
    `Block explorer URL: https://blockscout.scroll.io/address/${buyMeCoffee.address}`,
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
