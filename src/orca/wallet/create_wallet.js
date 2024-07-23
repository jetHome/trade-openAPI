let bs58 = require("bs58");
let fs = require("fs");
let wallet_json = "wallet.json";

let secret_base58 = "5nfdcQ44h3bvTbB62HnmVeKbJB1P9X1DrL6AcRgQRtkQt9gc1TSYZis61xBiEa6PTyKtgzsAyEb6FMdMHMKSxpiS"
createWalletJson(secret_base58)
console.log(readWalletJson())

function createWalletJson(secret_base58) {
    let secret_bytes = Uint8Array.from(bs58.decode(secret_base58.trim()));

    let fs = require('fs');
    fs.writeFileSync(wallet_json, "[".concat(secret_bytes.toString(), "]"));
}

function readWalletJson() {
    let buffer = fs.readFileSync(wallet_json);
    let secret_bytes_loaded = JSON.parse(buffer.toString());
    return bs58.encode(Uint8Array.from(secret_bytes_loaded));
}