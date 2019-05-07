// 定义没有依赖的模块
define(function (require, exports, module) {
  console.log('模块1加载');
  const msg = 'hello';
  function getMsg() {
    console.log(msg);
    return msg;
  }
  module.exports = getMsg;
})