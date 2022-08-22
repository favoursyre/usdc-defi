//I want to create a wallet

//Useful libraries that I would be working with -->
const ethers = require("ethers");

//Commencing the script
const wallet = ethers.Wallet.createRandom();
console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);
