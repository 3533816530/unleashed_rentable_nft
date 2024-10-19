// artifacts 是由 Truffle 提供的一个全局对象，允许我们引入编译后的智能合约文件。
// 它将编译器生成的 ABI（Application Binary Interface，应用二进制接口）和字节码与 JavaScript 代码连接起来。
const RentablePets = artifacts.require("RentablePets"); // 引入名为 RentablePets 的智能合约。Truffle 会寻找一个名为 RentablePets 的合约，并将其映射到 JavaScript 对象中供后续部署时使用。

// 当运行 truffle migrate 或 truffle deploy 时，Truffle 会自动执行这个文件，并按照这里定义的步骤来部署合约。
module.exports = function (deployer) {
  deployer.deploy(RentablePets);// 部署一个智能合约到区块链上，会调用构造函数，可在此处传递合约构造函数的参数
};
