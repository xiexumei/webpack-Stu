
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