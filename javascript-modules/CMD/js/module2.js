// 定义有依赖的模块-同步
define(function (require, exports, module) {
  const getMsg = require('./module1');
  let msg = getMsg();
  msg = msg.toUpperCase();
  module.exports = {
    msg
  }
})