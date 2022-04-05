// //上面这两个代码是没有逻辑关系的
// import _ from 'lodash';
// import dayjs from 'dayjs';

// import "./bar_01";
// import "./bar_02";
// console.log('hello main');
// console.log(_.join(["hello", "index"]));
// console.log(dayjs(), "main")

// //在main.js这个文件给他动态的导入
// //只要是异步的代码webpack都会进行代码的分离
// import(/* webpackChunkName: "foo" */"./foo").then(res=>{
//     console.log("daoc如成功")
// })

// import "./bar_01";
// import element from './element'
// console.log('hello index');
// import("./element").then(res=>{

// })