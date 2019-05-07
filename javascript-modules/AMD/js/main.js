(function(){
  require(['module1', 'module2'], function (module1, module2){

    console.log(module1.getMsg());
    console.log(module2.getMsg());

  });
})()
