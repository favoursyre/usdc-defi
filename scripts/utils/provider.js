const ethers = require("ethers");

const provider = ethers.getDefaultProvider("ropsten", {
  infura: "https://ropsten.infura.io/v3/77c67f15377942a9bc56fe53397af0cb",
});

module.exports = provider;
