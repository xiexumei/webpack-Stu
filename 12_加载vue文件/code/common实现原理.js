
var __webpack_modules__ = ({
  "./src/js/formate.js":
    (function (module) {

      const dateFormate = (date) => {
        return "2020-12-12"
      }

      const priceFormate = (price) => {
        return "100.00";
      }

      module.exports = {
        dateFormate,
        priceFormate
      }
    })
});
var __webpack_module_cache__ = {};

//是一个函数  当我们加载一个模块的时候  都会通过这个函数来加载
function __webpack_require__(moduleId) {

  //1.判断缓存中是否已经加载过
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;

  }
  //2.这里多做了这样一个操作   给缓存里面加上moduleId  给module变量和__webpack_module_cache_[moduleId]赋值了同一个对象
  var module = __webpack_module_cache__[moduleId] = {
    exports: {}

  };

  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  return module.exports;
}
var __webpack_exports__ = {};
//具体开始执行函数
!function () {
  const { dateFormate, priceFormate } = __webpack_require__(/*! ./js/formate */ "./src/js/formate.js");
}();

