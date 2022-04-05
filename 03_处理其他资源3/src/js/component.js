import "../css/index.css";
import "../css/component.less";
function component() {
    const element = document.createElement("div");
    element.innerHTML = ["HELLO", "wEBPACK"].join(" ");

    element.className = "content";

    const imgEl = new Image();
    imgEl.src = require('../img/zznh.png').default;
    // imgEl.src = require("../img/zznh.png");
    element.appendChild(imgEl);

    const iEl = document.createElement("i");
    iEl.className = "iconfont icon-bianji1";
    element.appendChild(iEl)

    //创建一个div 设置背景图片
    const bgDivEl = document.createElement('div');
    bgDivEl.style.width = 200 + 'px';
    bgDivEl.style.height = 200 + 'px';
    bgDivEl.className = "bg-image";
    bgDivEl.style.backgroundColor = "red";

    bgDivEl.appendChild(imgEl);
    element.appendChild(bgDivEl);
    return element;
}

document.body.appendChild(component());