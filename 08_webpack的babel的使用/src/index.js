import "core-js/stable";
import "regenerator-runtime/runtime";

const message = "hello world";

const foo = (info)=>{
    console.log(info)
}

const p = new Promise()
foo(message)