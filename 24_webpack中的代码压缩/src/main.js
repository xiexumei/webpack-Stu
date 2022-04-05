import {sum} from './math';

import "./format";
import "./format"; //这个模块是没有副作用的
import "./style.css"
console.log(sum(20,30))

console.log(window.abc)

const titleDiv = document.createElement("div");
titleDiv.className="title";
document.body.appendChild(titleDiv)