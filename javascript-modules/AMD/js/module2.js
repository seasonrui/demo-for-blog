// 定义有依赖的模块
define(['module1'], function(module1){
  function getMsg() {
    return module1.getMsg() + '，world'
  }
  return { getMsg }
})