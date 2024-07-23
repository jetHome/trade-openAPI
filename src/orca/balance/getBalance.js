let web3 = require("@solana/web3.js");

let devent = "https://api.devnet.solana.com";
let main = "https://api.mainnet-beta.solana.com";
const connection = new web3.Connection(main, "confirmed");

const publicKey = new web3.PublicKey('EWNPyWc2KEzMSpiaN5AbMURFBvP5fcYjNSM6e6fey5rn');

connection.getBalance(publicKey).then(b => {
    const balanceInSOL = b / web3.LAMPORTS_PER_SOL;
    console.log(
        `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
    );
});