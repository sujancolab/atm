(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Notifications.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Notifications.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
  name: "Notifications",
  data: function data() {
    return {
      pageLoader: '',
      ppp: 10
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("Common", ["Notifications", "PendingNotification"])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("Common", ["getNotifications", "updateNotification"])), {}, {
    fetchNotifications: function fetchNotifications() {
      var _arguments = arguments,
          _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var val;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                val = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : '';
                _this.pageLoader = _this.$loading.show({
                  container: _this.$refs.main_ref
                });
                _context.next = 4;
                return _this.getNotifications({
                  ppp: _this.ppp,
                  url: val
                }).then(function () {
                  _this.contentScroll('notficationList');

                  _this.pageLoader.hide();
                })["catch"](function (err) {
                  _this.pageLoader.hide();
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    update_notification: function update_notification(notification) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.updateNotification(notification).then(function (res) {
                  notification.read_at = new Date();
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }),
  created: function created() {
    this.fetchNotifications();
  },
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {
    this.pageLoader.hide();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Notifications.vue?vue&type=template&id=31bceba2&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Notifications.vue?vue&type=template&id=31bceba2& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "notification-design inner-content stepsBar",
    attrs: {
      id: "notficationList"
    }
  }, [_c("div", {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm.Notifications && _vm.Notifications.data ? _c("div", {
    staticClass: "col-md-12"
  }, [_vm._l(_vm.Notifications.data, function (notification, x) {
    return notification.data ? _c("div", {
      key: x,
      staticClass: "row notification-list"
    }, [_c("div", {
      staticClass: "col-md-9 col"
    }, [notification.data.title ? _c("h3", {
      domProps: {
        innerHTML: _vm._s(notification.data.title)
      }
    }) : _vm._e(), _vm._v(" "), notification.data.sub_title ? _c("p", {
      domProps: {
        innerHTML: _vm._s(notification.data.sub_title)
      }
    }) : _vm._e(), _vm._v(" "), notification.data.description ? _c("p", {
      staticClass: "noti_desc",
      domProps: {
        innerHTML: _vm._s(notification.data.description)
      }
    }) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "col-md-3 col"
    }, [notification.read_at === null ? _c("a", {
      staticClass: "checknow-btn btn",
      attrs: {
        href: "javascript:void(0);"
      },
      on: {
        click: function click($event) {
          return _vm.update_notification(notification);
        }
      }
    }, [_vm._v("Check Now")]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "checknoti"
    }, [_c("input", {
      staticClass: "checkbox-custom",
      attrs: {
        id: "check1",
        name: "checkbox-1",
        type: "checkbox",
        disabled: ""
      },
      domProps: {
        checked: notification.read_at
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "checkbox-custom-label",
      attrs: {
        "for": "check1"
      }
    })])])]) : _vm._e();
  }), _vm._v(" "), _c("UjPagination", {
    attrs: {
      records: _vm.Notifications,
      ppp: _vm.ppp
    },
    on: {
      fetchRecord: function fetchRecord(val) {
        return _vm.fetchNotifications(val);
      },
      "update:ppp": function updatePpp($event) {
        _vm.ppp = $event;
      }
    }
  })], 2) : _vm._e()])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("h1", [_vm._v("New Updates")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/Notifications.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Notifications.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notifications_vue_vue_type_template_id_31bceba2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifications.vue?vue&type=template&id=31bceba2& */ "./resources/js/pages/Notifications.vue?vue&type=template&id=31bceba2&");
/* harmony import */ var _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications.vue?vue&type=script&lang=js& */ "./resources/js/pages/Notifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notifications_vue_vue_type_template_id_31bceba2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notifications_vue_vue_type_template_id_31bceba2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Notifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Notifications.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Notifications.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Notifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Notifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Notifications.vue?vue&type=template&id=31bceba2&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Notifications.vue?vue&type=template&id=31bceba2& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_31bceba2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Notifications.vue?vue&type=template&id=31bceba2& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Notifications.vue?vue&type=template&id=31bceba2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_31bceba2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_31bceba2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL05vdGlmaWNhdGlvbnMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ob3RpZmljYXRpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTm90aWZpY2F0aW9ucy52dWU/MDg0MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTm90aWZpY2F0aW9ucy52dWU/ODQ4NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTm90aWZpY2F0aW9ucy52dWU/ZTM5NiJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsInBhZ2VMb2FkZXIiLCJwcHAiLCJjb21wdXRlZCIsIm1hcEdldHRlcnMiLCJtZXRob2RzIiwibWFwQWN0aW9ucyIsImZldGNoTm90aWZpY2F0aW9ucyIsInZhbCIsImNvbnRhaW5lciIsInVybCIsInRoZW4iLCJ1cGRhdGVfbm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJiZWZvcmVEZXN0cm95IiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJpZCIsIl9tIiwiX3YiLCJOb3RpZmljYXRpb25zIiwiX2wiLCJ4Iiwia2V5IiwidGl0bGUiLCJkb21Qcm9wcyIsImlubmVySFRNTCIsIl9zIiwiX2UiLCJzdWJfdGl0bGUiLCJkZXNjcmlwdGlvbiIsInJlYWRfYXQiLCJocmVmIiwib24iLCJjbGljayIsIiRldmVudCIsInR5cGUiLCJkaXNhYmxlZCIsImNoZWNrZWQiLCJyZWNvcmRzIiwiZmV0Y2hSZWNvcmQiLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzsrQ0ErSEEsb0o7Ozs7Ozs7Ozs7OztBQUFBO0FBSWU7RUFDZkEscUJBREE7RUFFQUMsSUFGQSxrQkFFQTtJQUNBO01BQ0FDLGNBREE7TUFFQUM7SUFGQTtFQUlBLENBUEE7RUFRQUMsNEJBQ0FDLDJHQURBLENBUkE7RUFXQUMseUNBQ0FDLDZHQURBO0lBR0FDLGtCQUhBLGdDQUdBO01BQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUFDO2dCQUNBO2tCQUNBQztnQkFEQTtnQkFEQTtnQkFBQSxPQUlBO2tCQUNBUCxjQURBO2tCQUVBUTtnQkFGQSxHQUlBQyxJQUpBLENBSUE7a0JBQ0E7O2tCQUNBO2dCQUNBLENBUEEsV0FRQTtrQkFDQTtnQkFDQSxDQVZBLENBSkE7O2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBZUEsQ0FsQkE7SUFvQkFDLG1CQXBCQSwrQkFvQkFDLFlBcEJBLEVBb0JBO01BQUE7O01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQSxPQUVBLHdDQUNBRixJQURBLENBQ0E7a0JBQ0FFO2dCQUNBLENBSEEsQ0FGQTs7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFNQTtFQTFCQSxFQVhBO0VBdUNBQyxPQXZDQSxxQkF1Q0E7SUFDQTtFQUNBLENBekNBO0VBMENBQyxPQTFDQSxxQkEwQ0EsQ0FFQSxDQTVDQTtFQTZDQUMsYUE3Q0EsMkJBNkNBO0lBQ0E7RUFDQTtBQS9DQSxHOzs7Ozs7Ozs7Ozs7QUNuSUE7QUFBQTtBQUFBO0FBQUEsSUFBSUMsTUFBTSxHQUFHLFNBQVNBLE1BQVQsR0FBa0I7RUFDN0IsSUFBSUMsR0FBRyxHQUFHLElBQVY7RUFBQSxJQUNFQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxFQURqQjs7RUFFQSxPQUFPQSxFQUFFLENBQ1AsS0FETyxFQUVQO0lBQ0VFLFdBQVcsRUFBRSw0Q0FEZjtJQUVFQyxLQUFLLEVBQUU7TUFBRUMsRUFBRSxFQUFFO0lBQU47RUFGVCxDQUZPLEVBTVAsQ0FDRUosRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFRSxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQXNDLENBQ3RDSCxHQUFHLENBQUNNLEVBQUosQ0FBTyxDQUFQLENBRHNDLEVBRXRDTixHQUFHLENBQUNPLEVBQUosQ0FBTyxHQUFQLENBRnNDLEVBR3RDTixFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVFLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBZ0MsQ0FDaENILEdBQUcsQ0FBQ1EsYUFBSixJQUFxQlIsR0FBRyxDQUFDUSxhQUFKLENBQWtCMUIsSUFBdkMsR0FDSW1CLEVBQUUsQ0FDQSxLQURBLEVBRUE7SUFBRUUsV0FBVyxFQUFFO0VBQWYsQ0FGQSxFQUdBLENBQ0VILEdBQUcsQ0FBQ1MsRUFBSixDQUFPVCxHQUFHLENBQUNRLGFBQUosQ0FBa0IxQixJQUF6QixFQUErQixVQUFVYSxZQUFWLEVBQXdCZSxDQUF4QixFQUEyQjtJQUN4RCxPQUFPZixZQUFZLENBQUNiLElBQWIsR0FDSG1CLEVBQUUsQ0FDQSxLQURBLEVBRUE7TUFBRVUsR0FBRyxFQUFFRCxDQUFQO01BQVVQLFdBQVcsRUFBRTtJQUF2QixDQUZBLEVBR0EsQ0FDRUYsRUFBRSxDQUFDLEtBQUQsRUFBUTtNQUFFRSxXQUFXLEVBQUU7SUFBZixDQUFSLEVBQXlDLENBQ3pDUixZQUFZLENBQUNiLElBQWIsQ0FBa0I4QixLQUFsQixHQUNJWCxFQUFFLENBQUMsSUFBRCxFQUFPO01BQ1BZLFFBQVEsRUFBRTtRQUNSQyxTQUFTLEVBQUVkLEdBQUcsQ0FBQ2UsRUFBSixDQUNUcEIsWUFBWSxDQUFDYixJQUFiLENBQWtCOEIsS0FEVDtNQURIO0lBREgsQ0FBUCxDQUROLEdBUUlaLEdBQUcsQ0FBQ2dCLEVBQUosRUFUcUMsRUFVekNoQixHQUFHLENBQUNPLEVBQUosQ0FBTyxHQUFQLENBVnlDLEVBV3pDWixZQUFZLENBQUNiLElBQWIsQ0FBa0JtQyxTQUFsQixHQUNJaEIsRUFBRSxDQUFDLEdBQUQsRUFBTTtNQUNOWSxRQUFRLEVBQUU7UUFDUkMsU0FBUyxFQUFFZCxHQUFHLENBQUNlLEVBQUosQ0FDVHBCLFlBQVksQ0FBQ2IsSUFBYixDQUFrQm1DLFNBRFQ7TUFESDtJQURKLENBQU4sQ0FETixHQVFJakIsR0FBRyxDQUFDZ0IsRUFBSixFQW5CcUMsRUFvQnpDaEIsR0FBRyxDQUFDTyxFQUFKLENBQU8sR0FBUCxDQXBCeUMsRUFxQnpDWixZQUFZLENBQUNiLElBQWIsQ0FBa0JvQyxXQUFsQixHQUNJakIsRUFBRSxDQUFDLEdBQUQsRUFBTTtNQUNORSxXQUFXLEVBQUUsV0FEUDtNQUVOVSxRQUFRLEVBQUU7UUFDUkMsU0FBUyxFQUFFZCxHQUFHLENBQUNlLEVBQUosQ0FDVHBCLFlBQVksQ0FBQ2IsSUFBYixDQUFrQm9DLFdBRFQ7TUFESDtJQUZKLENBQU4sQ0FETixHQVNJbEIsR0FBRyxDQUFDZ0IsRUFBSixFQTlCcUMsQ0FBekMsQ0FESixFQWlDRWhCLEdBQUcsQ0FBQ08sRUFBSixDQUFPLEdBQVAsQ0FqQ0YsRUFrQ0VOLEVBQUUsQ0FBQyxLQUFELEVBQVE7TUFBRUUsV0FBVyxFQUFFO0lBQWYsQ0FBUixFQUF5QyxDQUN6Q1IsWUFBWSxDQUFDd0IsT0FBYixLQUF5QixJQUF6QixHQUNJbEIsRUFBRSxDQUNBLEdBREEsRUFFQTtNQUNFRSxXQUFXLEVBQUUsa0JBRGY7TUFFRUMsS0FBSyxFQUFFO1FBQUVnQixJQUFJLEVBQUU7TUFBUixDQUZUO01BR0VDLEVBQUUsRUFBRTtRQUNGQyxLQUFLLEVBQUUsZUFBVUMsTUFBVixFQUFrQjtVQUN2QixPQUFPdkIsR0FBRyxDQUFDTixtQkFBSixDQUNMQyxZQURLLENBQVA7UUFHRDtNQUxDO0lBSE4sQ0FGQSxFQWFBLENBQUNLLEdBQUcsQ0FBQ08sRUFBSixDQUFPLFdBQVAsQ0FBRCxDQWJBLENBRE4sR0FnQklQLEdBQUcsQ0FBQ2dCLEVBQUosRUFqQnFDLEVBa0J6Q2hCLEdBQUcsQ0FBQ08sRUFBSixDQUFPLEdBQVAsQ0FsQnlDLEVBbUJ6Q04sRUFBRSxDQUFDLEtBQUQsRUFBUTtNQUFFRSxXQUFXLEVBQUU7SUFBZixDQUFSLEVBQXNDLENBQ3RDRixFQUFFLENBQUMsT0FBRCxFQUFVO01BQ1ZFLFdBQVcsRUFBRSxpQkFESDtNQUVWQyxLQUFLLEVBQUU7UUFDTEMsRUFBRSxFQUFFLFFBREM7UUFFTHhCLElBQUksRUFBRSxZQUZEO1FBR0wyQyxJQUFJLEVBQUUsVUFIRDtRQUlMQyxRQUFRLEVBQUU7TUFKTCxDQUZHO01BUVZaLFFBQVEsRUFBRTtRQUFFYSxPQUFPLEVBQUUvQixZQUFZLENBQUN3QjtNQUF4QjtJQVJBLENBQVYsQ0FEb0MsRUFXdENuQixHQUFHLENBQUNPLEVBQUosQ0FBTyxHQUFQLENBWHNDLEVBWXRDTixFQUFFLENBQUMsT0FBRCxFQUFVO01BQ1ZFLFdBQVcsRUFBRSx1QkFESDtNQUVWQyxLQUFLLEVBQUU7UUFBRSxPQUFLO01BQVA7SUFGRyxDQUFWLENBWm9DLENBQXRDLENBbkJ1QyxDQUF6QyxDQWxDSixDQUhBLENBREMsR0E2RUhKLEdBQUcsQ0FBQ2dCLEVBQUosRUE3RUo7RUE4RUQsQ0EvRUQsQ0FERixFQWlGRWhCLEdBQUcsQ0FBQ08sRUFBSixDQUFPLEdBQVAsQ0FqRkYsRUFrRkVOLEVBQUUsQ0FBQyxjQUFELEVBQWlCO0lBQ2pCRyxLQUFLLEVBQUU7TUFBRXVCLE9BQU8sRUFBRTNCLEdBQUcsQ0FBQ1EsYUFBZjtNQUE4QnhCLEdBQUcsRUFBRWdCLEdBQUcsQ0FBQ2hCO0lBQXZDLENBRFU7SUFFakJxQyxFQUFFLEVBQUU7TUFDRk8sV0FBVyxFQUFFLHFCQUFDdEMsR0FBRDtRQUFBLE9BQVNVLEdBQUcsQ0FBQ1gsa0JBQUosQ0FBdUJDLEdBQXZCLENBQVQ7TUFBQSxDQURYO01BRUYsY0FBYyxtQkFBVWlDLE1BQVYsRUFBa0I7UUFDOUJ2QixHQUFHLENBQUNoQixHQUFKLEdBQVV1QyxNQUFWO01BQ0Q7SUFKQztFQUZhLENBQWpCLENBbEZKLENBSEEsRUErRkEsQ0EvRkEsQ0FETixHQWtHSXZCLEdBQUcsQ0FBQ2dCLEVBQUosRUFuRzRCLENBQWhDLENBSG9DLENBQXRDLENBREosQ0FOTyxDQUFUO0FBa0hELENBckhEOztBQXNIQSxJQUFJYSxlQUFlLEdBQUcsQ0FDcEIsWUFBWTtFQUNWLElBQUk3QixHQUFHLEdBQUcsSUFBVjtFQUFBLElBQ0VDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVVELEVBRGpCOztFQUVBLE9BQU9BLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUUsV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUFnQyxDQUN2Q0YsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFRSxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQXNDLENBQ3RDRixFQUFFLENBQUMsSUFBRCxFQUFPLENBQUNELEdBQUcsQ0FBQ08sRUFBSixDQUFPLGFBQVAsQ0FBRCxDQUFQLENBRG9DLENBQXRDLENBRHFDLENBQWhDLENBQVQ7QUFLRCxDQVRtQixDQUF0QjtBQVdBUixNQUFNLENBQUMrQixhQUFQLEdBQXVCLElBQXZCOzs7Ozs7Ozs7Ozs7O0FDaklBO0FBQUE7QUFBQTtBQUFBO0FBQTRGO0FBQzNCO0FBQ0w7OztBQUc1RDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsd0ZBQU07QUFDUixFQUFFLGlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUE2TCxDQUFnQix5UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FqTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMzQuYnVuZGxlLjA5NDhiZmRiOWExNjQxMzliOTJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb24tZGVzaWduIGlubmVyLWNvbnRlbnQgc3RlcHNCYXJcIiBpZD1cIm5vdGZpY2F0aW9uTGlzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+TmV3IFVwZGF0ZXM8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiIHYtaWY9XCJOb3RpZmljYXRpb25zICYmIE5vdGlmaWNhdGlvbnMuZGF0YVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm90aWZpY2F0aW9uLWxpc3RcIiB2LWZvcj1cIihub3RpZmljYXRpb24sIHgpIGluIE5vdGlmaWNhdGlvbnMuZGF0YVwiIDprZXk9XCJ4XCIgdi1pZj1cIm5vdGlmaWNhdGlvbi5kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHYtaHRtbD1cIm5vdGlmaWNhdGlvbi5kYXRhLnRpdGxlXCIgdi1pZj1cIm5vdGlmaWNhdGlvbi5kYXRhLnRpdGxlXCI+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWh0bWw9XCJub3RpZmljYXRpb24uZGF0YS5zdWJfdGl0bGVcIiB2LWlmPVwibm90aWZpY2F0aW9uLmRhdGEuc3ViX3RpdGxlXCI+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaHRtbD1cIm5vdGlmaWNhdGlvbi5kYXRhLmRlc2NyaXB0aW9uXCIgdi1pZj1cIm5vdGlmaWNhdGlvbi5kYXRhLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJub3RpX2Rlc2NcIj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwiY2hlY2tub3ctYnRuIGJ0blwiIEBjbGljaz1cInVwZGF0ZV9ub3RpZmljYXRpb24obm90aWZpY2F0aW9uKVwiIHYtaWY9XCJub3RpZmljYXRpb24ucmVhZF9hdD09PW51bGxcIj5DaGVjayBOb3c8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tub3RpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrMVwiIGNsYXNzPVwiY2hlY2tib3gtY3VzdG9tXCIgbmFtZT1cImNoZWNrYm94LTFcIiB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJub3RpZmljYXRpb24ucmVhZF9hdFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2sxXCIgY2xhc3M9XCJjaGVja2JveC1jdXN0b20tbGFiZWxcIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8IS0tICAgPGRpdiBjbGFzcz1cInJvdyBub3RpZmljYXRpb24tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC05IGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48YSBocmVmPVwiI1wiPlByb2R1Y3R0IFN0YXR1cyBIYXMgQ2hhbmdlIEJ5IFZlbmRvcjwvYT48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPk9yZGVyICMgOjwvc3Bhbj48c3Bhbj4xMDAyMzE3MDY3PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5XZVZpc3UgQ3VzdG9tZXI6PC9zcGFuPjxzcGFuPkpvbmF0aGFuIENvaGVuPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjaGVja25vdy1idG4gYnRuXCI+Q2hlY2sgTm93PC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrbm90aVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjazJcIiBjbGFzcz1cImNoZWNrYm94LWN1c3RvbVwiIG5hbWU9XCJjaGVja2JveC0xXCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrMlwiIGNsYXNzPVwiY2hlY2tib3gtY3VzdG9tLWxhYmVsXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vdGlmaWNhdGlvbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxhIGhyZWY9XCIjXCI+UHJvZHVjdHQgU2hpcHBlZCE8L2E+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5PcmRlciAjIDo8L3NwYW4+PHNwYW4+MTAwMjMxNzA2Nzwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+V2VWaXN1IEN1c3RvbWVyOjwvc3Bhbj48c3Bhbj5Kb25hdGhhbiBDb2hlbjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiY2hlY2tub3ctYnRuIGJ0blwiPkNoZWNrIE5vdzwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja25vdGlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2szXCIgY2xhc3M9XCJjaGVja2JveC1jdXN0b21cIiBuYW1lPVwiY2hlY2tib3gtMVwiIHR5cGU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2szXCIgY2xhc3M9XCJjaGVja2JveC1jdXN0b20tbGFiZWxcIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm90aWZpY2F0aW9uLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOSBjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PGEgaHJlZj1cIiNcIj5OZXcgTWVzc2FnZSE8L2E+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5XZVZpc3UgQ3VzdG9tZXI6PC9zcGFuPjxzcGFuPkpvbmF0aGFuIENvaGVuPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjaGVja25vdy1idG4gYnRuXCI+Q2hlY2sgTm93PC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrbm90aVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjazRcIiBjbGFzcz1cImNoZWNrYm94LWN1c3RvbVwiIG5hbWU9XCJjaGVja2JveC0xXCIgdHlwZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjazRcIiBjbGFzcz1cImNoZWNrYm94LWN1c3RvbS1sYWJlbFwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBub3RpZmljYXRpb24tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC05IGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48YSBocmVmPVwiI1wiPllvdXIgUHJvZHVjdHQgaW4gTm93IEF2YWlsYWJsZTwvYT48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPlByb2R1Y3Q6PC9zcGFuPjxzcGFuPlByb2R1Y3R0IG5hbWUgYW5kIG51bWJlciBoZXJlPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjaGVja25vdy1idG4gYnRuXCI+Q2hlY2sgTm93PC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrbm90aVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjazVcIiBjbGFzcz1cImNoZWNrYm94LWN1c3RvbVwiIG5hbWU9XCJjaGVja2JveC0xXCIgdHlwZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjazVcIiBjbGFzcz1cImNoZWNrYm94LWN1c3RvbS1sYWJlbFwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vdGlmaWNhdGlvbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxhIGhyZWY9XCIjXCI+QWRkIHRvIENhcnQhPC9hPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+UHJvZHVjdDo8L3NwYW4+PHNwYW4+UHJvZHVjdHQgbmFtZSBhbmQgbnVtYmVyIGhlcmU8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImNoZWNrbm93LWJ0biBidG5cIj5DaGVjayBOb3c8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tub3RpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrNlwiIGNsYXNzPVwiY2hlY2tib3gtY3VzdG9tXCIgbmFtZT1cImNoZWNrYm94LTFcIiB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrNlwiIGNsYXNzPVwiY2hlY2tib3gtY3VzdG9tLWxhYmVsXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vdGlmaWNhdGlvbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxhIGhyZWY9XCIjXCI+TmV3IENoZWNrbGlzdCBVcGR0ZTwvYT48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPldlVmlzdSBDdXN0b21lcjo8L3NwYW4+PHNwYW4+Sm9uYXRoYW4gQ29oZW48L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImNoZWNrbm93LWJ0biBidG5cIj5DaGVjayBOb3c8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tub3RpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrN1wiIGNsYXNzPVwiY2hlY2tib3gtY3VzdG9tXCIgbmFtZT1cImNoZWNrYm94LTFcIiB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrN1wiIGNsYXNzPVwiY2hlY2tib3gtY3VzdG9tLWxhYmVsXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxValBhZ2luYXRpb24gQGZldGNoUmVjb3JkPVwidmFsPT5mZXRjaE5vdGlmaWNhdGlvbnModmFsKVwiIDpyZWNvcmRzPVwiTm90aWZpY2F0aW9uc1wiIDpwcHAuc3luYz1cInBwcFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCB7XG4gICAgbWFwR2V0dGVycyxcbiAgICBtYXBBY3Rpb25zXG59IGZyb20gXCJ2dWV4XCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJOb3RpZmljYXRpb25zXCIsXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VMb2FkZXI6ICcnLFxuICAgICAgICAgICAgcHBwOiAxMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICAuLi5tYXBHZXR0ZXJzKFwiQ29tbW9uXCIsIFtcIk5vdGlmaWNhdGlvbnNcIiwgXCJQZW5kaW5nTm90aWZpY2F0aW9uXCJdKVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAuLi5tYXBBY3Rpb25zKFwiQ29tbW9uXCIsIFtcImdldE5vdGlmaWNhdGlvbnNcIiwgXCJ1cGRhdGVOb3RpZmljYXRpb25cIl0pLFxuXG4gICAgICAgIGFzeW5jIGZldGNoTm90aWZpY2F0aW9ucyh2YWw9JycpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLm1haW5fcmVmXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0Tm90aWZpY2F0aW9ucyh7XG4gICAgICAgICAgICAgICAgICAgIHBwcDogdGhpcy5wcHAsXG4gICAgICAgICAgICAgICAgICAgIHVybDp2YWxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50U2Nyb2xsKCdub3RmaWNhdGlvbkxpc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyB1cGRhdGVfbm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbil7XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbilcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLnJlYWRfYXQ9IG5ldyBEYXRlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hOb3RpZmljYXRpb25zKClcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG5cbiAgICB9LFxuICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5oaWRlKCk7XG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9uLWRlc2lnbiBpbm5lci1jb250ZW50IHN0ZXBzQmFyXCIsXG4gICAgICBhdHRyczogeyBpZDogXCJub3RmaWNhdGlvbkxpc3RcIiB9LFxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX3ZtLk5vdGlmaWNhdGlvbnMgJiYgX3ZtLk5vdGlmaWNhdGlvbnMuZGF0YVxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLk5vdGlmaWNhdGlvbnMuZGF0YSwgZnVuY3Rpb24gKG5vdGlmaWNhdGlvbiwgeCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9uLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogeCwgc3RhdGljQ2xhc3M6IFwicm93IG5vdGlmaWNhdGlvbi1saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTkgY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmRhdGEudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImgzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5kYXRhLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmRhdGEuc3ViX3RpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5kYXRhLnN1Yl90aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5kYXRhLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5vdGlfZGVzY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmRhdGEuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLnJlYWRfYXQgPT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjaGVja25vdy1idG4gYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlX25vdGlmaWNhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2hlY2sgTm93XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNoZWNrbm90aVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3gtY3VzdG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImNoZWNrMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjaGVja2JveC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGNoZWNrZWQ6IG5vdGlmaWNhdGlvbi5yZWFkX2F0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjaGVja2JveC1jdXN0b20tbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiY2hlY2sxXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiVWpQYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcmVjb3JkczogX3ZtLk5vdGlmaWNhdGlvbnMsIHBwcDogX3ZtLnBwcCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGZldGNoUmVjb3JkOiAodmFsKSA9PiBfdm0uZmV0Y2hOb3RpZmljYXRpb25zKHZhbCksXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cHBwXCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcHAgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJOZXcgVXBkYXRlc1wiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ob3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMWJjZWJhMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm90aWZpY2F0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMxYmNlYmEyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMxYmNlYmEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMxYmNlYmEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMWJjZWJhMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMWJjZWJhMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL05vdGlmaWNhdGlvbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90aWZpY2F0aW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzFiY2ViYTImXCIiXSwic291cmNlUm9vdCI6IiJ9