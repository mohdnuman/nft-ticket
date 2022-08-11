const pass = artifacts.require("../contracts/Pass.sol");

module.exports = async function (deployer) {
  await deployer.deploy(
    pass
  );
};
