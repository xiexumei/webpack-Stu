!function () { var e = { 64: function (e) { e.exports = { dateFormate: e => "2020-12-12", priceFormate: e => "100.00" } }, 640: function (e, o, t) { "use strict"; t.r(o), t.d(o, { mul: function () { return r }, sum: function () { return n } }); const n = (e, o) => e + o, r = (e, o) => e * o } }, o = {}; function t(n) { var r = o[n]; if (void 0 !== r) return r.exports; var u = o[n] = { exports: {} }; return e[n](u, u.exports, t), u.exports } t.n = function (e) { var o = e && e.__esModule ? function () { return e.default } : function () { return e }; return t.d(o, { a: o }), o }, t.d = function (e, o) { for (var n in o) t.o(o, n) && !t.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: o[n] }) }, t.o = function (e, o) { return Object.prototype.hasOwnProperty.call(e, o) }, t.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, function () { "use strict"; var e = t(64), o = t.n(e); const n = t(640); console.log(n.sum(20, 30)), console.log(n.mul(20, 30)), console.log(o().dateFormate("aaa")), console.log(o().priceFormate("100")) }() }();
//# sourceMappingURL=bundle.js.map