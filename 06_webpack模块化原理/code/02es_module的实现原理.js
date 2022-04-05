//1.这里也是有一个映射关系对象
debugger

var __webpack_modules__ = ({
    "./src/js/math.js":
        (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.r(__webpack_exports__); //做一个记录 告诉你是一个esmodule : {value:true}
            __webpack_require__.d(__webpack_exports__, {
                "mul": function () { return mul; },
                "sum": function () { return sum; }

            });
            const sum = (num1, num2) => {
                return num1 + num2;
            }
            const mul = (num1, num2) => {
                return num1 * num2;
            }
        })

});

//2.模块的缓存
var __webpack_module_cache__ = {};
//3.加载模块的require函数
function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
        return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
}


!function () {
    //立即执行函数 __webpack_require__ 这个函数对象加了一个属性: d
    __webpack_require__.d = function (exports, definition) {
        for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
            }
        }
    };
}();

!function () {
    //给webpack.require__这个函数对象添加了一个属性 : o
    __webpack_require__.o = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
}();

!function () {
    __webpack_require__.r = function (exports) {
        //给webpack.require__这个函数对象添加了一个属性 : r
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        }
        Object.defineProperty(exports, '__esModule', { value: true });
    };
}();

var __webpack_exports__ = {};
!function () {
    __webpack_require__.r(__webpack_exports__);
    var _js_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/math.js");


    console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.mul)(20, 30));
    console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.sum)(20, 30));
}();
