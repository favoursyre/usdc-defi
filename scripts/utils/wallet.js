const ethers = require("ethers");

const mnemonic =
  "buffalo lonely hunt dog excuse suit step daring pony resist seat captain";
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);

module.exports = wallet;
