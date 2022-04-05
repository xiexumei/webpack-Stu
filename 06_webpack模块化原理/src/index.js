const math = require("./js/math"); //math函数里面 使用es_module进行导出   在这里使用require导入

//commonjs导出内容  es module导入内容
import format from "./js/formate";

console.log(math.sum(20, 30));
console.log(math.mul(20, 30));



console.log(format.dateFormate("aaa"));

console.log(format.priceFormate("100"));
