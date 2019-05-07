// 定义没有依赖的模块
define(function(){
  let msg = 'hello'
  function getMsg() {
    return msg.toUpperCase()
  }
  return { getMsg }
})