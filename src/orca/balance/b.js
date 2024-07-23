// 引入所需的包
const { Connection, PublicKey } = require('@solana/web3.js');

// 更换成你自己的钱包地址
const walletAddress = 'CtBZg1h6meuHQsRNfbE4F2rY1pd9uudUPVVe61TvtvC';
// Mainnet Beta 的 RPC URL
const networkUrl = 'https://api.mainnet-beta.solana.com';

// Solana网络连接设置
const connection = new Connection(networkUrl);

// 将字符串地址转换为 PublicKey 类型
const publicKey = new PublicKey(walletAddress);

async function checkWalletBalance() {
  try {
    // 获取钱包中的 lamports 数量
    const balance = await connection.getBalance(publicKey);

    // 将 lamports 转换为 SOL（10亿 lamports = 1 SOL）
    const solBalance = balance / 1e9;

    // 打印钱包的余额
    console.log(`Wallet balance is: ${solBalance} SOL`);
  } catch (error) {
    console.error('Error occurred while fetching wallet balance:', error);
  }
}

// 运行函数检查余额
checkWalletBalance();