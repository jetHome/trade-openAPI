// 使用 Node.js 17.5.0 或以上版本

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const url = 'https://open.feishu.cn/anycross/trigger/callback/MzM0NzcwNzc5ZDE5MjgzMDJlZDlmZjE5ZmFiN2RlNzQ=';

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));