// 定义有依赖的模块-异步
define(function(require, exports, module){
  var msg = '';
  console.log('模块3加载');
  require.async('./module2', function (m2) {
    console.log('module2加载结束');
    console.log(m2)
    console.log(m2.msg)
  })


})