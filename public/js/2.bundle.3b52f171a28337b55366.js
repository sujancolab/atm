(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/snippets/Sidebar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/snippets/Sidebar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Sidebar",
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("auth", ["user"])),
  updated: function updated() {
    this.$nextTick(function () {});
  },
  mounted: function mounted() {},
  created: function created() {//console.log(this.$router.history.current.path)
    // console.log(this.user.email_verified_at)

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  watch: {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/snippets/Sidebar.vue?vue&type=template&id=0e4de821&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/snippets/Sidebar.vue?vue&type=template&id=0e4de821& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("aside", {
    staticClass: "main-sidebar"
  }, [_c("section", {
    staticClass: "sidebar"
  }, [_c("div", {
    staticClass: "user-panel"
  }, [_c("div", {
    staticClass: "admin_logo"
  }, [_c("div", {
    staticClass: "logoinon1"
  }, [_c("img", {
    attrs: {
      src: _vm.set_image("images/logo.png"),
      alt: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "logoinon2"
  }, [_c("img", {
    attrs: {
      src: _vm.set_image("images/logo_icon.png"),
      alt: ""
    }
  })])])]), _vm._v(" "), _c("ul", {
    staticClass: "sidebar-menu",
    attrs: {
      "data-widget": "tree"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/dashboard"
    }
  }, [_c("i", {
    staticClass: "fa fa-tachometer",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Dashboard")])])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/user"
    }
  }, [_c("i", {
    staticClass: "fa fa-user-plus",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Users")])])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/invoices"
    }
  }, [_c("i", {
    staticClass: "fa fa-money",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Invoices")])])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/tasks"
    }
  }, [_c("i", {
    staticClass: "fa fa-tasks",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Tasks")])])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/messages"
    }
  }, [_c("i", {
    staticClass: "fa fa-envelope-open-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Messages")])])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/transportion"
    }
  }, [_c("i", {
    staticClass: "fa fa-truck",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Transportion")])])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/reports"
    }
  }, [_c("i", {
    staticClass: "fa fa-file-word-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Reports")])])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/settings"
    }
  }, [_c("i", {
    staticClass: "fa fa-cog",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Settings")])])], 1)])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/snippets/Sidebar.vue":
/*!*******************************************!*\
  !*** ./resources/js/snippets/Sidebar.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_0e4de821___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=0e4de821& */ "./resources/js/snippets/Sidebar.vue?vue&type=template&id=0e4de821&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/snippets/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_0e4de821___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_0e4de821___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/snippets/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/snippets/Sidebar.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/snippets/Sidebar.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/snippets/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/snippets/Sidebar.vue?vue&type=template&id=0e4de821&":
/*!**************************************************************************!*\
  !*** ./resources/js/snippets/Sidebar.vue?vue&type=template&id=0e4de821& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_0e4de821___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=0e4de821& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/snippets/Sidebar.vue?vue&type=template&id=0e4de821&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_0e4de821___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_0e4de821___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3NuaXBwZXRzL1NpZGViYXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9zbmlwcGV0cy9TaWRlYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc25pcHBldHMvU2lkZWJhci52dWU/ODc0MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc25pcHBldHMvU2lkZWJhci52dWU/YjlkYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc25pcHBldHMvU2lkZWJhci52dWU/NjY0MyJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsInVwZGF0ZWQiLCJtb3VudGVkIiwiY3JlYXRlZCIsIndhdGNoIiwibWV0aG9kcyIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwic3JjIiwic2V0X2ltYWdlIiwiYWx0IiwiX3YiLCJ0byIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OytDQTBDQSxvSjs7Ozs7Ozs7Ozs7O0FBQUE7QUFJZTtFQUNmQSxlQURBO0VBRUFDLElBRkEsa0JBRUE7SUFDQTtFQUdBLENBTkE7RUFPQUMsNEJBQ0FDLHlFQURBLENBUEE7RUFVQUM7SUFDQSw0QkFFQSxDQUZBO0VBR0EsQ0FkQTtFQWdCQUMsT0FoQkEscUJBZ0JBLENBRUEsQ0FsQkE7RUFvQkFDLE9BcEJBLHFCQW9CQSxDQUVBO0lBQ0E7O0lBSEE7TUFBQTtRQUFBO1VBQUE7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQTtFQUlBLENBeEJBO0VBeUJBQyxTQXpCQTtFQTRCQUM7QUE1QkEsRzs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUFBLElBQUlDLE1BQU0sR0FBRyxTQUFTQSxNQUFULEdBQWtCO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFW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RUFBSixDQUFPLEdBQVAsQ0F6R0YsRUEwR0VQLEVBQUUsQ0FDQSxJQURBLEVBRUEsQ0FDRUEsRUFBRSxDQUFDLGFBQUQsRUFBZ0I7SUFBRUcsS0FBSyxFQUFFO01BQUVLLEVBQUUsRUFBRTtJQUFOO0VBQVQsQ0FBaEIsRUFBZ0QsQ0FDaERSLEVBQUUsQ0FBQyxHQUFELEVBQU07SUFDTkUsV0FBVyxFQUFFLFdBRFA7SUFFTkMsS0FBSyxFQUFFO01BQUUsZUFBZTtJQUFqQjtFQUZELENBQU4sQ0FEOEMsRUFLaERKLEdBQUcsQ0FBQ1EsRUFBSixDQUFPLEdBQVAsQ0FMZ0QsRUFNaERQLEVBQUUsQ0FBQyxNQUFELEVBQVMsQ0FBQ0QsR0FBRyxDQUFDUSxFQUFKLENBQU8sVUFBUCxDQUFELENBQVQsQ0FOOEMsQ0FBaEQsQ0FESixDQUZBLEVBWUEsQ0FaQSxDQTFHSixDQUhBLENBakJzQyxDQUF4QyxDQURnRCxDQUEzQyxDQUFUO0FBaUpELENBcEpEOztBQXFKQSxJQUFJRSxlQUFlLEdBQUcsRUFBdEI7QUFDQVgsTUFBTSxDQUFDWSxhQUFQLEdBQXVCLElBQXZCOzs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUFBO0FBQXNGO0FBQzNCO0FBQ0w7OztBQUd0RDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF1TCxDQUFnQixtUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EzTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMi5idW5kbGUuM2I1MmYxNzFhMjgzMzdiNTUzNjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjxhc2lkZSBjbGFzcz1cIm1haW4tc2lkZWJhclwiPlxyXG4gICAgXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInNpZGViYXJcIj5cclxuICA8ZGl2IGNsYXNzPVwidXNlci1wYW5lbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFkbWluX2xvZ29cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxvZ29pbm9uMVwiPiA8aW1nIDpzcmM9XCJzZXRfaW1hZ2UoJ2ltYWdlcy9sb2dvLnBuZycpXCIgYWx0PVwiXCI+IDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibG9nb2lub24yXCI+IDxpbWcgOnNyYz1cInNldF9pbWFnZSgnaW1hZ2VzL2xvZ29faWNvbi5wbmcnKVwiIGFsdD1cIlwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPHVsIGNsYXNzPVwic2lkZWJhci1tZW51XCIgZGF0YS13aWRnZXQ9XCJ0cmVlXCI+XHJcbiAgICA8bGkgID5cclxuICAgICAgPHJvdXRlci1saW5rIHRvPVwiL2Rhc2hib2FyZFwiPiA8aSBjbGFzcz1cImZhIGZhLXRhY2hvbWV0ZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDxzcGFuPkRhc2hib2FyZDwvc3Bhbj4gPC9yb3V0ZXItbGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxyb3V0ZXItbGluayB0bz1cIi91c2VyXCI+IDxpIGNsYXNzPVwiZmEgZmEtdXNlci1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA8c3Bhbj5Vc2Vyczwvc3Bhbj4gPC9yb3V0ZXItbGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9pbnZvaWNlc1wiPiA8aSBjbGFzcz1cImZhIGZhLW1vbmV5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA8c3Bhbj5JbnZvaWNlczwvc3Bhbj4gPC9yb3V0ZXItbGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxyb3V0ZXItbGluayB0bz1cIi90YXNrc1wiPiA8aSBjbGFzcz1cImZhIGZhLXRhc2tzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA8c3Bhbj5UYXNrczwvc3Bhbj4gPC9yb3V0ZXItbGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9tZXNzYWdlc1wiPiA8aSBjbGFzcz1cImZhIGZhLWVudmVsb3BlLW9wZW4tb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gPHNwYW4+TWVzc2FnZXM8L3NwYW4+IDwvcm91dGVyLWxpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8cm91dGVyLWxpbmsgdG89XCIvdHJhbnNwb3J0aW9uXCI+IDxpIGNsYXNzPVwiZmEgZmEtdHJ1Y2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDxzcGFuPlRyYW5zcG9ydGlvbjwvc3Bhbj4gPC9yb3V0ZXItbGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9yZXBvcnRzXCI+IDxpIGNsYXNzPVwiZmEgZmEtZmlsZS13b3JkLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDxzcGFuPlJlcG9ydHM8L3NwYW4+IDwvcm91dGVyLWxpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8cm91dGVyLWxpbmsgdG89XCIvc2V0dGluZ3NcIj4gPGkgY2xhc3M9XCJmYSBmYS1jb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDxzcGFuPlNldHRpbmdzPC9zcGFuPiA8L3JvdXRlci1saW5rPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L3NlY3Rpb24+XHJcblxyXG4gIDwvYXNpZGU+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQge1xyXG4gICAgbWFwR2V0dGVyc1xyXG59IGZyb20gXCJ2dWV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIlNpZGViYXJcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIC4uLm1hcEdldHRlcnMoXCJhdXRoXCIsIFtcInVzZXJcIl0pLCBcclxuICAgIH0sXHJcbiAgICB1cGRhdGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBtb3VudGVkKCkgeyBcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGNyZWF0ZWQoKSB7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy4kcm91dGVyLmhpc3RvcnkuY3VycmVudC5wYXRoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudXNlci5lbWFpbF92ZXJpZmllZF9hdClcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczogeyBcclxuIFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiYXNpZGVcIiwgeyBzdGF0aWNDbGFzczogXCJtYWluLXNpZGViYXJcIiB9LCBbXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwic2lkZWJhclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlci1wYW5lbFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhZG1pbl9sb2dvXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb2lub24xXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5zZXRfaW1hZ2UoXCJpbWFnZXMvbG9nby5wbmdcIiksIGFsdDogXCJcIiB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ29pbm9uMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uc2V0X2ltYWdlKFwiaW1hZ2VzL2xvZ29faWNvbi5wbmdcIiksIGFsdDogXCJcIiB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidWxcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaWRlYmFyLW1lbnVcIiwgYXR0cnM6IHsgXCJkYXRhLXdpZGdldFwiOiBcInRyZWVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiBcIi9kYXNoYm9hcmRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGFjaG9tZXRlclwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJEYXNoYm9hcmRcIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiBcIi91c2VyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXVzZXItcGx1c1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJVc2Vyc1wiKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IFwiL2ludm9pY2VzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLW1vbmV5XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkludm9pY2VzXCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogXCIvdGFza3NcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGFza3NcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiVGFza3NcIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiBcIi9tZXNzYWdlc1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1lbnZlbG9wZS1vcGVuLW9cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTWVzc2FnZXNcIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiBcIi90cmFuc3BvcnRpb25cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdHJ1Y2tcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiVHJhbnNwb3J0aW9uXCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogXCIvcmVwb3J0c1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1maWxlLXdvcmQtb1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJSZXBvcnRzXCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogXCIvc2V0dGluZ3NcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY29nXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlNldHRpbmdzXCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2lkZWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGU0ZGU4MjEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NpZGViYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxwcm9ncmFtbWluZ1xcXFx3YW1wNjRcXFxcd3d3XFxcXHVuaXRlZC1zY3JhcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwZTRkZTgyMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwZTRkZTgyMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwZTRkZTgyMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2lkZWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGU0ZGU4MjEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGU0ZGU4MjEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9zbmlwcGV0cy9TaWRlYmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpZGViYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlNGRlODIxJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==