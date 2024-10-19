var RentablePets = artifacts.require("RentablePets");

const main = async (cb) => {
    try {
        const argv = require('yargs/yargs')(process.argv.slice(4))
            .default("from", (await web3.eth.getAccounts())[0])
            .argv; // 使用yargs库进行参数解析
        const rentablePets = await RentablePets.deployed()
        let txn = await rentablePets.mint("fakeURI", {from: argv.from}) // 调用 RentablePets 合约的 mint 方法，传入一个字符串 "fakeURI" 作为 NFT 的 URI，
                                                                        // 并指定 from 参数作为发送交易的账户。
                                                                        // 这个调用将返回一个交易对象（txn），该对象包含关于交易的信息，例如交易哈希、区块号等。
        console.log(txn);
    } catch(err) {
        console.log(err);
    }
    cb(); // cb 是一个回调函数，用于在脚本执行完成后通知 Truffle 该任务已经结束
  }
  
module.exports = main;
