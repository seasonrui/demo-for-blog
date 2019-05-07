let module1 = sea('./modules/module1')
let module2 = sea('./modules/module2')
let module3 = sea('./modules/module3')
let module4 = sea('./modules/module4')

// 查看模块引用
module1.foo(); // foo
module2();  // module2
module3.foo(); // module3 foo


// 对比 exports 和 module.exports
console.log(module4) // {} module.exports 和 exports 默认都是指向一个空对象，exports 引用地址改变，但 sea 的还是 module.exports。
// 如果导出改成 exports.obj = obj; 则输出 { obj: { name: 'name', foo: [Function: foo] } }
// 如果导出改成 export.module = obj; 则输出 { name: 'name', foo: [Function: foo] }


// 模块的缓存
sea('./modules/module1');
sea('./modules/module1').message = "hello";
var message = sea('./modules/module1').message;
console.log(message) // hello  第三次加载的时候message属性依然存在，说明require并没有重新加载该模块，输出了缓存。