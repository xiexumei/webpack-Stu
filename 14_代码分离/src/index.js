
// //这里这种加载是同步的
// import _ from 'lodash';
// import dayjs from 'dayjs';
// import "./bar_01";
// console.log('hello index');
// console.log(_.join(["hello", "index"]));
// console.log(dayjs(),"main")

// //如果以import动态加载一个函数的时候  他才会对我们这里的代码做一个处理
// import("lodash").then(res=>{

// })

import "./bar_01";
console.log("hello index");


const button = document.createElement("button");
button.innerHTML = "加载元素";
button.addEventListener("click", () => {
    import(/* webpackChunkname:'element' */
        /* webpackPrefetch: true */
        "./element").then(res => {
            console.log(res)
        });//点击加载组件的时候才会去加载里面的element里面的代码
})

document.body.appendChild(button)