let web3_js = require("@solana/web3.js");
let wallet_json = require("../wallet/wallet.json");
let RPC_ENDPOINT_URL = "https://api.devnet.solana.com";
let COMMITMENT = 'confirmed';

getBalance()

function getBalance() {
    // Create a connection for sending RPC requests to Devnet
    const connection = new web3_js.Connection(RPC_ENDPOINT_URL, COMMITMENT);

    // Read in the private key from wallet.json (The public and private key pair will be managed using the Keypair class)
    const keypair = web3_js.Keypair.fromSecretKey(new Uint8Array(wallet_json));

    // Display the RPC and the wallet's public key
    // When displaying the public key, use base58 encoding
    console.log("endpoint:", connection.rpcEndpoint);
    console.log("wallet pubkey:", keypair.publicKey);
    console.log("wallet pubkey:", keypair.publicKey.toBase58());
    console.log("wallet pubkey:", keypair.secretKey);
    console.log("wallet pubkey:", keypair.secretKey.toString());

    // Obtain the SOL balance
    // Use the getBalance method from the Connection class
    //pub:CtBZg1h6meuHQsRNfbE4F2rY1pd9uudUPVVe61TvtvC
    //sec:
    const sol_balance = connection.getBalance(keypair.publicKey);
    sol_balance.then(it => {
        console.log(it)
    }).catch(e => {
        console.log(e)
    })

    // Display the SOL balance
    // Since SOL is internally managed as an integer value and denominated in lamports,
    // divide by 10^9 to obtain a value denominated in SOL.
    console.log("lamports:", sol_balance);
    console.log("SOL:", sol_balance / 10 ** 9);
}