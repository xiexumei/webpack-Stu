import { resolve } from "dns/promises";
import { rejects } from "assert";

const message:string = "hello typescript";
const foo = (info:string)=>{
    console.log(info);
}

foo(message);
const p = new Promise((resolve,reject)=>{})
export {}