const hre = require("hardhat");

async function main() {
  const BullieverseUpdatesAndNotificationsSystem =
    await hre.ethers.getContractFactory(
      "BullieverseUpdatesAndNotificationsSystem"
    );
  const deployedBullieverseUpdatesAndNotificationsSystem =
    await BullieverseUpdatesAndNotificationsSystem.deploy("test");

  await deployedBullieverseUpdatesAndNotificationsSystem.deployed();

  console.log(
    "Deployed Bullieverse Updates Address:",
    deployedBullieverseUpdatesAndNotificationsSystem.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
