let web3 = require("@solana/web3.js");

let devent = "https://api.devnet.solana.com";
let main = "https://api.mainnet-beta.solana.com";
const connection = new web3.Connection(main, "confirmed");

const publicKey = new web3.PublicKey('CtBZg1h6meuHQsRNfbE4F2rY1pd9uudUPVVe61TvtvC');

connection.getBalance(publicKey).then(b => {
    const balanceInSOL = b / web3.LAMPORTS_PER_SOL;
    console.log(
        `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
    );
});