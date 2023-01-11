const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Hack", function () {
  beforeEach(async function () {
    const Target = await ethers.getContractFactory("Target");
    this.target = await Target.deploy();
    await this.target.deployed();

    const Hack = await ethers.getContractFactory("Hack");
    this.hack = await Hack.deploy(this.target.address);
    await this.hack.deployed();
  });

  it("Should show difference in the virtual price", async function () {
    this.hack.setup({ value: ethers.utils.parseEther("10") });

    this.hack.pwn({ value: ethers.utils.parseEther("1000") });
  });
});
