(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Clients.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/Designer3d/Clients.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['filtertab'],
  name: "Desing3d-client",
  components: {},
  data: function data() {
    return {
      search: '',
      Clients: '',
      chat_status: [{
        value: null,
        text: '-'
      }, {
        value: 'On Going',
        text: 'On Going'
      }, {
        value: 'Re Open',
        text: 'Re Open'
      }, {
        value: 'Completed',
        text: 'Completed'
      }, {
        value: 'Incompleted',
        text: 'Incompleted'
      }]
    };
  },
  watch: {
    filtertab: function filtertab(n, o) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(n == 'Clients')) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return _this.get_clients();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    search: function search(n, o) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(n.trim().length == 0 && o.trim().length > 0)) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return _this2.get_clients();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  methods: {
    get_clients: function get_clients() {
      var _arguments = arguments,
          _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var url, loaderd;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : "/api/designer3d/clients";
                loaderd = _this3.$loading.show({
                  container: _this3.$refs.d3_main_tab
                });
                axios.get(url, {
                  params: {
                    search: _this3.search
                  }
                }).then(function (res) {
                  _this3.Clients = res.data.data;
                  loaderd.hide();
                })["catch"](function (err) {
                  loaderd.hide();
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    set_status: function set_status(vl, chat, index) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var loaderd;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                loaderd = _this4.$loading.show({
                  container: _this4.$refs.d3_main_tab
                });
                axios.put('/api/projectChat/' + chat.id, {
                  status: vl.value
                }).then(function (res) {
                  _this4.Clients.data[index].status = res.data.data.status;
                  loaderd.hide();
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  mounted: function mounted() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  created: function created() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  },
  filters: {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/Designer3d/Profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _common_ShopDemo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/ShopDemo.vue */ "./resources/js/components/account/common/ShopDemo.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['filtertab'],
  name: "Designer3d-profile",
  components: {
    myshowroomDemo: _common_ShopDemo_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      show_demo: false,
      profile: {
        business_logo_upload: ''
      },
      business_logo: null,
      gallery_files: [],
      gallery_upload_error: ''
    };
  },
  watch: {
    filtertab: function filtertab(n, o) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var loader;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(n == 'Profile')) {
                  _context.next = 6;
                  break;
                }

                loader = _this.$loading.show({
                  container: _this.$refs.maintab
                });
                _this.show_demo = false;
                _context.next = 5;
                return _this.get_profile();

              case 5:
                loader.hide();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  methods: {
    get_profile: function get_profile() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                axios.get("/api/shop_profile").then(function (res) {
                  if (res.data.data) {
                    _this2.profile = res.data.data;
                    _this2.business_logo = _this2.set_image(_this2.profile.business_logo);
                    _this2.gallery_files = res.data.data.galleries;
                    delete _this2.profile.galleries;
                    delete _this2.profile.benefits;
                    delete _this2.profile.benefit_ids;
                    delete _this2.profile.created_at;
                    delete _this2.profile.updated_at;
                    delete _this2.profile.user_id;
                    _this2.gallery_upload_error = '';
                  }
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    get_file: function get_file(files) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var fd, index, element, loader;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.gallery_upload_error = '';
                fd = new FormData();

                for (index = 0; index < files.length; index++) {
                  element = files[index];
                  fd.append('galleries[]', element);
                }

                loader = _this3.$loading.show({
                  container: _this3.$refs.gallery_upload
                });
                axios.post('/api/shop_profile/upload_gallery', fd).then(function (res) {
                  if (res.data.success == true) {
                    _this3.gallery_files = res.data.data.galleries;
                    _this3.gallery_upload_error = res.data.data.error_messages;

                    if (res.data.message) {
                      Toast.fire({
                        icon: 'success',
                        title: res.data.message
                      });
                    }
                  }
                })["catch"](function (err) {
                  if (typeof err.response.data != 'undefined') {
                    _this3.$setErrorsFromResponse(err.response.data);
                  }
                });
                loader.hide();

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    choose_logo: function choose_logo() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.profile.business_logo_upload = event.target.files[0];
                _this4.business_logo = _this4.createThumbURL(_this4.profile.business_logo_upload);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    createThumbURL: function createThumbURL(file) {
      return URL.createObjectURL(file);
    },
    save_profile: function save_profile() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this5.$validator.validateAll().then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(valid) {
                    var fd, loader;
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (valid) {
                              fd = new FormData();
                              Object.keys(_this5.profile).map(function (e) {
                                fd.append(e, _this5.profile[e] == null ? '' : _this5.profile[e]);
                              });
                              loader = _this5.$loading.show({
                                container: _this5.$refs.maintab
                              });
                              axios.post('/api/shop_profile', fd).then(function (res) {
                                if (res.data.success == true) {
                                  _this5.profile = res.data.data;
                                  _this5.business_logo = _this5.set_image(_this5.profile.business_logo);
                                  _this5.gallery_files = res.data.data.galleries;
                                  delete _this5.profile.galleries;
                                  delete _this5.profile.benefits;
                                  delete _this5.profile.benefit_ids;
                                  delete _this5.profile.created_at;
                                  delete _this5.profile.updated_at;
                                  delete _this5.profile.user_id;
                                  Toast.fire({
                                    icon: 'success',
                                    title: res.data.message
                                  });
                                }
                              })["catch"](function (err) {
                                if (typeof err.response.data != 'undefined') {
                                  _this5.$setErrorsFromResponse(err.response.data);
                                }
                              });
                              loader.hide();
                            }

                          case 1:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    remove_gallery_file: function remove_gallery_file(id, x) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var tht;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                tht = _this6;
                Swal.fire({
                  title: 'Are You Sure You Want To Delete?',
                  text: "Gallery's Images Will Be Deleted. You Won't Be Able To Revert This!",
                  showCancelButton: true,
                  confirmButtonColor: '#d33',
                  cancelButtonColor: '#3085d6',
                  confirmButtonText: 'Yes, Delete It!'
                }).then(function (result) {
                  if (result.value) {
                    axios["delete"]("/api/shop_profile/" + id).then(function (res) {
                      tht.gallery_files.splice(x, 1);
                    });
                  }
                });

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    }
  },
  mounted: function mounted() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }))();
  },
  created: function created() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }))();
  },
  filters: {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Settings.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/Designer3d/Settings.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Country_list_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Country-list.vue */ "./resources/js/components/Country-list.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['filtertab'],
  name: "Designer3d-setting",
  components: {
    CountryList: _Country_list_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: new Form({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        country_code: '',
        phone_number: '',
        company_address: '',
        company_name: '',
        company_phone: '',
        password: '',
        upfor: 'info'
      })
    };
  },
  watch: {
    filtertab: function filtertab(n, o) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(n == 'Settings')) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return _this.get_user();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  methods: {
    onCountryChange: function onCountryChange(value) {
      this.form.country_code = value;
    },
    get_user: function get_user() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                axios.get("api/profile").then(function (_ref) {
                  var data = _ref.data;
                  var fdata = data.data;
                  _this2.vsd_id = fdata.vsd_id;
                  fdata.upfor = 'info';

                  _this2.form.fill(fdata);
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    updateInfo: function updateInfo() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this3.form.password == '') {
                  _this3.form.password = undefined;
                }

                _this3.form.put('api/profile').then(function (data) {
                  var fdata = data.data.data;
                  fdata.upfor = 'info';

                  _this3.form.fill(fdata);

                  _this3.$root.$emit('get_profile', '');

                  Toast.fire({
                    icon: 'success',
                    title: data.data.message
                  });
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this4.$store.commit("setErrors", {});

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  created: function created() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  filters: {},
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["errors"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/Designer3d/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _Settings_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue */ "./resources/js/components/account/Designer3d/Settings.vue");
/* harmony import */ var _Profile_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue */ "./resources/js/components/account/Designer3d/Profile.vue");
/* harmony import */ var _Clients_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Clients.vue */ "./resources/js/components/account/Designer3d/Clients.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Designer3d-account",
  components: {
    Settings: _Settings_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Profile: _Profile_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Clients: _Clients_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      tabfor: ""
    };
  },
  watch: {},
  methods: {},
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.tabfor = "Settings", $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                var tht = $(this);
                $('a[data-toggle="tab"]').removeClass('active');
                tht.addClass('active');
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  created: function created() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  filters: {},
  computed: {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Clients.vue?vue&type=template&id=544c17e2&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/Designer3d/Clients.vue?vue&type=template&id=544c17e2& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "tab-pane fade",
    attrs: {
      id: "myclients",
      role: "tabpanel",
      "aria-labelledby": "myclients-tab"
    }
  }, [_c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "container pb-2"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center mb-5"
  }, [_c("h2", {}, [_vm._v("My Clients")]), _vm._v(" "), _vm.Clients ? _c("p", {
    staticClass: "font14 textLightGray"
  }, [_vm._v(_vm._s(_vm.Clients.total) + " Clients")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-4"
  }, [_c("div", {
    staticClass: "col-md-6 ml-auto"
  }, [_c("form", {
    staticClass: "productSearch d-flex align-items-center ml-auto",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.get_clients();
      }
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    attrs: {
      type: "text",
      placeholder: "Search client..."
    },
    domProps: {
      value: _vm.search
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  })]), _vm._v(" "), _vm._m(0)])])])]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("div", {
    ref: "d3_main_tab",
    staticClass: "divTable myclientsTable vld-parent",
    attrs: {
      id: "myclientsTableAccord"
    }
  }, [_vm._m(1), _vm._v(" "), _vm.Clients.data ? _c("div", {
    staticClass: "tbody w-100"
  }, [_vm._l(_vm.Clients.data, function (Client, index) {
    return [_c("div", {
      key: "tb" + index,
      staticClass: "tr d-flex whiteRow"
    }, [_c("div", {
      staticClass: "td one",
      domProps: {
        textContent: _vm._s(Client.project.contractor.vsd_id)
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "td two"
    }, [_vm._v(_vm._s(Client.project.client.first_name + " " + Client.project.client.last_name))]), _vm._v(" "), _c("div", {
      staticClass: "td three"
    }, [_vm._v("\n                            " + _vm._s(Client.project.templates.floor_plan_templates.floor_plans.floor_name) + " -\n                            " + _vm._s(Client.project.templates.floor_plan_templates.name) + "\n                        ")]), _vm._v(" "), _c("div", {
      staticClass: "td four"
    }, [Client.project.templates.template ? _c("avatar", {
      attrs: {
        src: _vm.set_image(Client.project.templates.template),
        size: 75,
        rounded: false
      }
    }) : _vm._e()], 1), _vm._v(" "), _c("div", {
      staticClass: "td five",
      domProps: {
        textContent: _vm._s(Client.status)
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "td six"
    }, [_c("button", {
      staticClass: "btnTransparent viewAccBtn collapsed",
      attrs: {
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#oa" + index,
        "aria-expanded": "true",
        "aria-controls": "oa" + index
      }
    }, [_c("i", {
      staticClass: "fa fa-eye",
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(" View\n                            ")])])]), _vm._v(" "), _c("div", {
      key: "ab" + index,
      staticClass: "row accordionRow"
    }, [_c("div", {
      staticClass: "bottomAccordion container-fluid collapse",
      attrs: {
        id: "oa" + index,
        "aria-labelledby": "oa" + index,
        "data-parent": "#myclientsTableAccord"
      }
    }, [_c("div", {
      staticClass: "row align-items-center border-bottom py-4"
    }, [_c("div", {
      staticClass: "col-5"
    }, [_c("div", {
      staticClass: "d-flex align-items-center imgWrpr"
    }, [Client.room_latest_chat ? _c("img", {
      staticClass: "img-fluid",
      attrs: {
        src: Client.room_latest_chat.file,
        alt: ""
      }
    }) : _vm._e(), _vm._v(" "), _c("div", [_c("span", {
      staticClass: "textBold600"
    }, [_vm._v("Start Date:")]), _vm._v(" " + _vm._s(Client.chat_start_at))])])]), _vm._v(" "), _c("div", {
      staticClass: "col-4"
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("span", {
      staticClass: "textBold600 pr-3"
    }, [_vm._v("Status")]), _vm._v(" "), _c("Dropdown", {
      attrs: {
        selectedValue: Client.status,
        lists: _vm.chat_status
      },
      on: {
        "update:selectedValue": function updateSelectedValue($event) {
          return _vm.$set(Client, "status", $event);
        },
        "update:selected-value": function updateSelectedValue($event) {
          return _vm.$set(Client, "status", $event);
        },
        dropselected: function dropselected(dval) {
          return _vm.set_status(dval, Client, index);
        }
      }
    })], 1)]), _vm._v(" "), _c("div", {
      staticClass: "col-2 text-right"
    }, [_c("button", {
      staticClass: "btnTransparent textBold600 font14",
      on: {
        click: function click($event) {
          return _vm.$router.push({
            name: "Chat",
            params: {
              roomid: Client.id
            }
          });
        }
      }
    }, [_c("img", {
      staticClass: "img-fluid",
      attrs: {
        src: "images/chat.png",
        alt: ""
      }
    }), _vm._v("Chat\n                                    ")])]), _vm._v(" "), _c("div", {
      staticClass: "col-1"
    })])])])];
  })], 2) : _vm._e()]), _vm._v(" "), _vm.Clients.data ? _c("div", {
    staticClass: "container mb-5"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-4"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_vm.Clients.total > 0 ? _c("div", {
    staticClass: "text-center tableNavigation"
  }, [_c("button", {
    staticClass: "btnTransparent leftNav",
    "class": {
      disabled: _vm.Clients.current_page <= 1
    },
    attrs: {
      disabled: _vm.Clients.current_page <= 1
    },
    on: {
      click: function click($event) {
        return _vm.get_clients(_vm.Clients.prev_page_url);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-angle-left",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _vm.Clients.current_page >= _vm.Clients.last_page ? _c("span", [_vm._v(_vm._s(_vm.Clients.current_page) + "\n            \t                    /" + _vm._s(_vm.Clients.last_page))]) : _c("span", [_vm._v("\n            \t                    " + _vm._s(_vm.Clients.current_page) + " /\n            \t                    "), _c("a", {
    staticClass: "pointer",
    attrs: {
      disabled: _vm.Clients.current_page >= _vm.Clients.last_page
    },
    on: {
      click: function click($event) {
        return _vm.get_clients(_vm.Clients.last_page_url);
      }
    }
  }, [_vm._v("\n            \t                        " + _vm._s(_vm.Clients.last_page) + "\n            \t                    ")])]), _vm._v(" "), _c("button", {
    staticClass: "btnTransparent rightNav",
    "class": {
      disabled: _vm.Clients.current_page >= _vm.Clients.last_page
    },
    attrs: {
      disabled: _vm.Clients.current_page >= _vm.Clients.last_page
    },
    on: {
      click: function click($event) {
        return _vm.get_clients(_vm.Clients.next_page_url);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-angle-right",
    attrs: {
      "aria-hidden": "true"
    }
  })])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  })])]) : _vm._e()])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br")]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("button", {
    staticClass: "btnTransparent searchBtn",
    attrs: {
      type: "submit"
    }
  }, [_c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: "images/arrow-point-to-right.png",
      alt: "",
      width: "16"
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "thead w-100"
  }, [_c("div", {
    staticClass: "tr d-flex whiteRow"
  }, [_c("div", {
    staticClass: "td one"
  }, [_vm._v("ID Showroom")]), _vm._v(" "), _c("div", {
    staticClass: "td two"
  }, [_vm._v("Customer")]), _vm._v(" "), _c("div", {
    staticClass: "td three"
  }, [_vm._v("Projects")]), _vm._v(" "), _c("div", {
    staticClass: "td four"
  }, [_vm._v("Template")]), _vm._v(" "), _c("div", {
    staticClass: "td five"
  }, [_vm._v("Status")]), _vm._v(" "), _c("div", {
    staticClass: "td six"
  }, [_vm._v("Action")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Profile.vue?vue&type=template&id=68326303&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/Designer3d/Profile.vue?vue&type=template&id=68326303& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    ref: "maintab",
    staticClass: "tab-pane fade",
    attrs: {
      id: "myprofile",
      role: "tabpanel",
      "aria-labelledby": "myprofile-tab"
    }
  }, [_c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("myshowroomDemo", {
    attrs: {
      fetch_showroom: _vm.show_demo
    },
    on: {
      demo_change: function demo_change(isdemo) {
        return _vm.show_demo = isdemo;
      }
    }
  }), _vm._v(" "), _vm.show_demo != true ? _c("div", [_vm._m(0), _vm._v(" "), _c("form", {
    staticClass: "container-fluid bg-white galleryConF py-5 mb-5",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.save_profile.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-right mb-4"
  }, [_c("button", {
    staticClass: "btnNormal px-4",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.show_demo = true;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-eye",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" View Demo")])])])]), _vm._v(" "), _c("div", {
    staticClass: "container cont1080"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-5"
  }, [_c("label", {
    staticClass: "cameraBtn mb-2",
    style: {
      backgroundImage: "url(".concat(_vm.business_logo, ")")
    },
    attrs: {
      "for": "bussinesslogo"
    }
  }, [_c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: _vm.set_image("images/dslr-camera.png")
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "image",
      expression: "'image'"
    }],
    attrs: {
      type: "file",
      hidden: "",
      id: "bussinesslogo",
      "data-vv-as": "business logo",
      "data-vv-name": "business_logo_upload"
    },
    on: {
      change: _vm.choose_logo
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "textBold600 mb-1"
  }, [_vm._v("Upload Business image")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm.verrors.has("business_logo_upload") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(_vm._s(_vm.verrors.first("business_logo_upload")) + " ")]) : _vm._e(), _vm._v(" "), _c("div", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.profile.banner_title,
      expression: "profile.banner_title"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control biggerText",
    attrs: {
      type: "text",
      placeholder: "Company Name",
      name: "banner_title",
      "data-vv-as": "Company Name"
    },
    domProps: {
      value: _vm.profile.banner_title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.profile, "banner_title", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("banner_title") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("banner_title")) + " ")]) : _vm._e(), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.profile.banner_description,
      expression: "profile.banner_description"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "Write your business bio here.. ",
      name: "banner_description",
      "data-vv-as": "banner description"
    },
    domProps: {
      value: _vm.profile.banner_description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.profile, "banner_description", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("banner_description") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(_vm._s(_vm.verrors.first("banner_description")) + " ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("p", {
    staticClass: "mb-2 textBold600"
  }, [_vm._v("Main Images Gallery")]), _vm._v(" "), _c("p", {
    staticClass: "textLightGray textBold600"
  }, [_vm._v("Uploade your favorite Projects. will appear as slider")]), _vm._v(" "), _c("div", {
    ref: "gallery_upload",
    staticClass: "gallerySliderUpload text-center"
  }, [_c("FileDropzone", {
    attrs: {
      "initialValue.sync": "",
      max: 15,
      icon: true,
      uploadtitle: "Drag & Drop or click to upload from your computer files <br> Size: 880 x 500",
      filename: "galleries",
      fileValidation: "image|mimes:jpeg,png,jpg"
    },
    on: {
      changed: _vm.get_file
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("ul", {
    staticClass: "uploadedItem list-unstyled d-flex flex-wrap"
  }, _vm._l(_vm.gallery_files, function (file, index) {
    return _c("li", {
      key: _vm.ran_inx + index,
      staticClass: "mr-2 mb-2"
    }, [_c("div", [_c("img", {
      staticClass: "thumb",
      attrs: {
        src: _vm.set_image(file.gallery_image),
        height: "50",
        width: "50"
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "del",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.remove_gallery_file(file.id, index);
        }
      }
    }, [_vm._v("\n                                                x "), _c("span", {
      staticClass: "badge badge-primary"
    })])])]);
  }), 0)])]), _vm._v(" "), _vm._l(_vm.gallery_upload_error, function (item, index) {
    return _vm.gallery_upload_error ? _c("p", {
      key: index,
      staticClass: "errormsg"
    }, [_vm._v(_vm._s(item))]) : _vm._e();
  })], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-right my-4"
  }, [_c("button", {
    staticClass: "btnNormal px-4 rounded",
    attrs: {
      type: "button"
    }
  }, [_c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: _vm.set_image("images/chat.png"),
      alt: ""
    }
  }), _vm._v(" Chat")])])])]), _vm._v(" "), _vm._m(2)])]) : _vm._e()], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "container pb-2 userAccountCont"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h2", {
    staticClass: "text-center mb-5"
  }, [_vm._v("My Gallery")])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("p", {
    staticClass: "font14 textLightGray textBold600"
  }, [_vm._v("Upload Your Business logo or profile\n                        picture"), _c("br"), _vm._v("Size: 180 X 120")]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "text-center my-4"
  }, [_c("button", {
    staticClass: "btnSucces",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Save")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Settings.vue?vue&type=template&id=77a0ea39&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/Designer3d/Settings.vue?vue&type=template&id=77a0ea39&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "tab-pane fade show active",
    attrs: {
      id: "mySettings",
      role: "tabpanel",
      "aria-labelledby": "mySettings-tab"
    }
  }, [_c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "container cont1080 bg-white venAccInfo"
  }, [_vm._m(1), _vm._v(" "), _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateInfo();
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pr-md-5"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("last_name"),
      haveValue: _vm.form.last_name
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.last_name,
      expression: "form.last_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.last_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "last_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Last Name")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "last_name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-md-5"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("last_name"),
      haveValue: _vm.form.last_name
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.last_name,
      expression: "form.last_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.last_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "last_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Last Name")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "last_name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pr-md-5"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("email"),
      haveValue: _vm.form.email
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email,
      expression: "form.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email"
    },
    domProps: {
      value: _vm.form.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Email")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "email"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-md-5"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-3"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("country_code"),
      haveValue: _vm.form.country_code
    }
  }, [_c("div", {
    staticClass: "form-control select"
  }, [_vm._v(_vm._s(_vm.form.country_code))]), _vm._v(" "), _c("span", {
    staticClass: "label w-100"
  }), _vm._v(" "), _c("div", {
    staticClass: "selectDropDown"
  }, [_c("CountryList", {
    on: {
      clicked: _vm.onCountryChange
    }
  })], 1), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "country_code"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-9"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("phone_number"),
      haveValue: _vm.form.phone_number
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.phone_number,
      expression: "form.phone_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "tel"
    },
    domProps: {
      value: _vm.form.phone_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "phone_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Phone Number")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "phone_number"
    }
  })], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pr-md-5"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("company_name"),
      haveValue: _vm.form.company_name
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.company_name,
      expression: "form.company_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.company_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "company_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Company Name")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "company_name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-md-5"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("company_phone"),
      haveValue: _vm.form.company_phone
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.company_phone,
      expression: "form.company_phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.company_phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "company_phone", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "company_phone"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pr-md-5"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("company_address"),
      haveValue: _vm.form.company_address
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.company_address,
      expression: "form.company_address"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.company_address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "company_address", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "company_address"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-md-5"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("password"),
      haveValue: _vm.form.password
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password,
      expression: "form.password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.form.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Password")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "password"
    }
  })], 1)]), _vm._v(" "), _vm._m(4)])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("br")]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "container pb-1"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [_c("h2", {
    staticClass: "mb-3"
  }, [_vm._v("My Settings")])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "text-center mb-5"
  }, [_c("h3", [_vm._v("Business Information")]), _vm._v(" "), _c("p", [_vm._v("Notice- your changes will be updated after a mail approval ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("span", {
    staticClass: "label"
  }, [_vm._v("Company Phone Number "), _c("span", {
    staticClass: "optional"
  }, [_vm._v("(optional)")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("span", {
    staticClass: "label"
  }, [_vm._v("Company Address "), _c("span", {
    staticClass: "optional"
  }, [_vm._v("(optional)")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-12 text-center mb-4"
  }, [_c("input", {
    staticClass: "btnSucces px-5",
    attrs: {
      type: "submit",
      value: "Save"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/index.vue?vue&type=template&id=15db0e4c&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/Designer3d/index.vue?vue&type=template&id=15db0e4c& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container-fluid px-0 stepsBar"
  }, [_c("ul", {
    staticClass: "nav nav-tabs customTab justify-content-center border-top",
    attrs: {
      role: "tablist"
    }
  }, [_c("li", {
    staticClass: "nav-item",
    attrs: {
      role: "presentation"
    },
    on: {
      click: function click($event) {
        _vm.tabfor = "Settings";
      }
    }
  }, [_c("a", {
    staticClass: "nav-link rounded-0 active",
    attrs: {
      id: "mySettings-tab",
      "data-toggle": "tab",
      href: "#mySettings",
      role: "tab",
      "aria-controls": "mySettings",
      "aria-selected": "true"
    }
  }, [_vm._v("My Settings")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item",
    attrs: {
      role: "presentation"
    },
    on: {
      click: function click($event) {
        _vm.tabfor = "Profile";
      }
    }
  }, [_c("a", {
    staticClass: "nav-link rounded-0",
    attrs: {
      id: "myprofile-tab",
      "data-toggle": "tab",
      href: "#myprofile",
      role: "tab",
      "aria-controls": "myprofile",
      "aria-selected": "false"
    }
  }, [_vm._v("My Profile")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item",
    attrs: {
      role: "presentation"
    },
    on: {
      click: function click($event) {
        _vm.tabfor = "Clients";
      }
    }
  }, [_c("a", {
    staticClass: "nav-link rounded-0",
    attrs: {
      id: "myclients-tab",
      "data-toggle": "tab",
      href: "#myclients",
      role: "tab",
      "aria-controls": "myclients",
      "aria-selected": "false"
    }
  }, [_vm._v("My Clients")])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-content bgGray"
  }, [_c("Settings", {
    attrs: {
      filtertab: _vm.tabfor
    },
    on: {
      "update:filtertab": function updateFiltertab($event) {
        _vm.tabfor = $event;
      }
    }
  }), _vm._v(" "), _c("Profile", {
    attrs: {
      filtertab: _vm.tabfor
    },
    on: {
      "update:filtertab": function updateFiltertab($event) {
        _vm.tabfor = $event;
      }
    }
  }), _vm._v(" "), _c("Clients", {
    attrs: {
      filtertab: _vm.tabfor
    },
    on: {
      "update:filtertab": function updateFiltertab($event) {
        _vm.tabfor = $event;
      }
    }
  })], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Settings.vue?vue&type=style&index=0&id=77a0ea39&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/Designer3d/Settings.vue?vue&type=style&index=0&id=77a0ea39&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.errormsg[data-v-77a0ea39]{\n    display: block !important;\n    color: rgb(255, 0, 0);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Settings.vue?vue&type=style&index=0&id=77a0ea39&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/Designer3d/Settings.vue?vue&type=style&index=0&id=77a0ea39&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=77a0ea39&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Settings.vue?vue&type=style&index=0&id=77a0ea39&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/account/Designer3d/Clients.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/account/Designer3d/Clients.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Clients_vue_vue_type_template_id_544c17e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clients.vue?vue&type=template&id=544c17e2& */ "./resources/js/components/account/Designer3d/Clients.vue?vue&type=template&id=544c17e2&");
/* harmony import */ var _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clients.vue?vue&type=script&lang=js& */ "./resources/js/components/account/Designer3d/Clients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Clients_vue_vue_type_template_id_544c17e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Clients_vue_vue_type_template_id_544c17e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/Designer3d/Clients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/account/Designer3d/Clients.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/account/Designer3d/Clients.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Clients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/account/Designer3d/Clients.vue?vue&type=template&id=544c17e2&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/account/Designer3d/Clients.vue?vue&type=template&id=544c17e2& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_544c17e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=template&id=544c17e2& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Clients.vue?vue&type=template&id=544c17e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_544c17e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_544c17e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/account/Designer3d/Profile.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/account/Designer3d/Profile.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_68326303___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=68326303& */ "./resources/js/components/account/Designer3d/Profile.vue?vue&type=template&id=68326303&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/components/account/Designer3d/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_68326303___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_68326303___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/Designer3d/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/account/Designer3d/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/account/Designer3d/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/account/Designer3d/Profile.vue?vue&type=template&id=68326303&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/account/Designer3d/Profile.vue?vue&type=template&id=68326303& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_68326303___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=68326303& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Profile.vue?vue&type=template&id=68326303&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_68326303___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_68326303___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/account/Designer3d/Settings.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/account/Designer3d/Settings.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_77a0ea39_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=77a0ea39&scoped=true& */ "./resources/js/components/account/Designer3d/Settings.vue?vue&type=template&id=77a0ea39&scoped=true&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/components/account/Designer3d/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Settings_vue_vue_type_style_index_0_id_77a0ea39_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.vue?vue&type=style&index=0&id=77a0ea39&scoped=true&lang=css& */ "./resources/js/components/account/Designer3d/Settings.vue?vue&type=style&index=0&id=77a0ea39&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_77a0ea39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_77a0ea39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "77a0ea39",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/Designer3d/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/account/Designer3d/Settings.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/account/Designer3d/Settings.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/account/Designer3d/Settings.vue?vue&type=style&index=0&id=77a0ea39&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/account/Designer3d/Settings.vue?vue&type=style&index=0&id=77a0ea39&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_77a0ea39_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=77a0ea39&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Settings.vue?vue&type=style&index=0&id=77a0ea39&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_77a0ea39_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_77a0ea39_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_77a0ea39_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_77a0ea39_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/account/Designer3d/Settings.vue?vue&type=template&id=77a0ea39&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/account/Designer3d/Settings.vue?vue&type=template&id=77a0ea39&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_77a0ea39_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=77a0ea39&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/Settings.vue?vue&type=template&id=77a0ea39&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_77a0ea39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_77a0ea39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/account/Designer3d/index.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/account/Designer3d/index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_15db0e4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=15db0e4c& */ "./resources/js/components/account/Designer3d/index.vue?vue&type=template&id=15db0e4c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/account/Designer3d/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_15db0e4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_15db0e4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/Designer3d/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/account/Designer3d/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/account/Designer3d/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/account/Designer3d/index.vue?vue&type=template&id=15db0e4c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/account/Designer3d/index.vue?vue&type=template&id=15db0e4c& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_15db0e4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=15db0e4c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Designer3d/index.vue?vue&type=template&id=15db0e4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_15db0e4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_15db0e4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9EZXNpZ25lcjNkL0NsaWVudHMudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvUHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9TZXR0aW5ncy52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9EZXNpZ25lcjNkL0NsaWVudHMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9Qcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvU2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9EZXNpZ25lcjNkL1NldHRpbmdzLnZ1ZT80NmRiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9TZXR0aW5ncy52dWU/MjM5ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvQ2xpZW50cy52dWU/NDc1MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvQ2xpZW50cy52dWU/ZDNiYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvQ2xpZW50cy52dWU/Y2U1MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvUHJvZmlsZS52dWU/ZGVjZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvUHJvZmlsZS52dWU/NGI5ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvUHJvZmlsZS52dWU/NTQwYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvU2V0dGluZ3MudnVlP2QyYTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9EZXNpZ25lcjNkL1NldHRpbmdzLnZ1ZT85ZGMxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9TZXR0aW5ncy52dWU/ODJmNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvU2V0dGluZ3MudnVlP2NkNzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9EZXNpZ25lcjNkL2luZGV4LnZ1ZT84YTllIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9pbmRleC52dWU/OTJkZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvaW5kZXgudnVlPzUwMGUiXSwibmFtZXMiOlsicHJvcHMiLCJuYW1lIiwiY29tcG9uZW50cyIsImRhdGEiLCJzZWFyY2giLCJDbGllbnRzIiwiY2hhdF9zdGF0dXMiLCJ2YWx1ZSIsInRleHQiLCJ3YXRjaCIsImZpbHRlcnRhYiIsIm4iLCJvIiwibWV0aG9kcyIsImdldF9jbGllbnRzIiwidXJsIiwibG9hZGVyZCIsImNvbnRhaW5lciIsImF4aW9zIiwicGFyYW1zIiwidGhlbiIsInNldF9zdGF0dXMiLCJ2bCIsImNoYXQiLCJpbmRleCIsInN0YXR1cyIsIm1vdW50ZWQiLCJjcmVhdGVkIiwiZmlsdGVycyIsImNvbXB1dGVkIiwibXlzaG93cm9vbURlbW8iLCJzaG93X2RlbW8iLCJwcm9maWxlIiwiYnVzaW5lc3NfbG9nb191cGxvYWQiLCJidXNpbmVzc19sb2dvIiwiZ2FsbGVyeV9maWxlcyIsImdhbGxlcnlfdXBsb2FkX2Vycm9yIiwibG9hZGVyIiwiZ2V0X3Byb2ZpbGUiLCJnZXRfZmlsZSIsImZpbGVzIiwiZmQiLCJlbGVtZW50IiwiVG9hc3QiLCJpY29uIiwidGl0bGUiLCJjaG9vc2VfbG9nbyIsImNyZWF0ZVRodW1iVVJMIiwiZmlsZSIsInNhdmVfcHJvZmlsZSIsIk9iamVjdCIsInJlbW92ZV9nYWxsZXJ5X2ZpbGUiLCJpZCIsIngiLCJ0aHQiLCJTd2FsIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJDb3VudHJ5TGlzdCIsImZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJjb3VudHJ5X2NvZGUiLCJwaG9uZV9udW1iZXIiLCJjb21wYW55X2FkZHJlc3MiLCJjb21wYW55X25hbWUiLCJjb21wYW55X3Bob25lIiwicGFzc3dvcmQiLCJ1cGZvciIsIm9uQ291bnRyeUNoYW5nZSIsImdldF91c2VyIiwiZmRhdGEiLCJ1cGRhdGVJbmZvIiwibWFwR2V0dGVycyIsIlNldHRpbmdzIiwiUHJvZmlsZSIsInRhYmZvciIsIiQiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsInJvbGUiLCJfdiIsIl9zIiwidG90YWwiLCJfZSIsIm9uIiwic3VibWl0IiwiJGV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsImV4cHJlc3Npb24iLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJkb21Qcm9wcyIsImlucHV0IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiX20iLCJyZWYiLCJfbCIsIkNsaWVudCIsImtleSIsInRleHRDb250ZW50IiwicHJvamVjdCIsImNvbnRyYWN0b3IiLCJ2c2RfaWQiLCJjbGllbnQiLCJ0ZW1wbGF0ZXMiLCJmbG9vcl9wbGFuX3RlbXBsYXRlcyIsImZsb29yX3BsYW5zIiwiZmxvb3JfbmFtZSIsInRlbXBsYXRlIiwic3JjIiwic2V0X2ltYWdlIiwic2l6ZSIsInJvdW5kZWQiLCJyb29tX2xhdGVzdF9jaGF0IiwiYWx0IiwiY2hhdF9zdGFydF9hdCIsInNlbGVjdGVkVmFsdWUiLCJsaXN0cyIsIiRzZXQiLCJkcm9wc2VsZWN0ZWQiLCJkdmFsIiwiY2xpY2siLCIkcm91dGVyIiwicHVzaCIsInJvb21pZCIsImRpc2FibGVkIiwiY3VycmVudF9wYWdlIiwicHJldl9wYWdlX3VybCIsImxhc3RfcGFnZSIsImxhc3RfcGFnZV91cmwiLCJuZXh0X3BhZ2VfdXJsIiwic3RhdGljUmVuZGVyRm5zIiwid2lkdGgiLCJfd2l0aFN0cmlwcGVkIiwiZmV0Y2hfc2hvd3Jvb20iLCJkZW1vX2NoYW5nZSIsImlzZGVtbyIsImFwcGx5IiwiYXJndW1lbnRzIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoaWRkZW4iLCJjaGFuZ2UiLCJ2ZXJyb3JzIiwiaGFzIiwiZmlyc3QiLCJiYW5uZXJfdGl0bGUiLCJiYW5uZXJfZGVzY3JpcHRpb24iLCJtYXgiLCJ1cGxvYWR0aXRsZSIsImZpbGVuYW1lIiwiZmlsZVZhbGlkYXRpb24iLCJjaGFuZ2VkIiwicmFuX2lueCIsImdhbGxlcnlfaW1hZ2UiLCJoZWlnaHQiLCJpdGVtIiwiZXJyb3IiLCJlcnJvcnMiLCJoYXZlVmFsdWUiLCJmaWVsZCIsImNsaWNrZWQiLCJocmVmIl0sIm1h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ZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJteWNsaWVudHNcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJteWNsaWVudHMtdGFiXCI+XG4gICAgPGJyPlxuICAgIDxicj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHBiLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiB0ZXh0LWNlbnRlciBtYi01XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiXCI+TXkgQ2xpZW50czwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb250MTQgdGV4dExpZ2h0R3JheVwiIHYtaWY9XCJDbGllbnRzXCI+e3tDbGllbnRzLnRvdGFsfX0gQ2xpZW50czwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtYi00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cImdldF9jbGllbnRzKClcIiBjbGFzcz1cInByb2R1Y3RTZWFyY2ggZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggY2xpZW50Li4uXCIgdi1tb2RlbD1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG5UcmFuc3BhcmVudCBzZWFyY2hCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYXJyb3ctcG9pbnQtdG8tcmlnaHQucG5nXCIgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIiB3aWR0aD1cIjE2XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2VGFibGUgbXljbGllbnRzVGFibGUgdmxkLXBhcmVudFwiIGlkPVwibXljbGllbnRzVGFibGVBY2NvcmRcIiByZWY9XCJkM19tYWluX3RhYlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aGVhZCB3LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHIgZC1mbGV4IHdoaXRlUm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGQgb25lXCI+SUQgU2hvd3Jvb208L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZCB0d29cIj5DdXN0b21lcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRkIHRocmVlXCI+UHJvamVjdHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZCBmb3VyXCI+VGVtcGxhdGU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZCBmaXZlXCI+U3RhdHVzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGQgc2l4XCI+QWN0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0Ym9keSB3LTEwMFwiICB2LWlmPVwiQ2xpZW50cy5kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihDbGllbnQsaW5kZXggKSBpbiBDbGllbnRzLmRhdGFcIiA+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyIGQtZmxleCB3aGl0ZVJvd1wiIDprZXk9XCIndGInK2luZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGQgb25lXCIgdi10ZXh0PVwiQ2xpZW50LnByb2plY3QuY29udHJhY3Rvci52c2RfaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZCB0d29cIj57eyBDbGllbnQucHJvamVjdC5jbGllbnQuZmlyc3RfbmFtZSArICcgJyArIENsaWVudC5wcm9qZWN0LmNsaWVudC5sYXN0X25hbWUgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZCB0aHJlZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IENsaWVudC5wcm9qZWN0LnRlbXBsYXRlcy5mbG9vcl9wbGFuX3RlbXBsYXRlcy5mbG9vcl9wbGFucy5mbG9vcl9uYW1lIH19IC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBDbGllbnQucHJvamVjdC50ZW1wbGF0ZXMuZmxvb3JfcGxhbl90ZW1wbGF0ZXMubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRkIGZvdXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGF2YXRhciA6c3JjPVwic2V0X2ltYWdlKENsaWVudC5wcm9qZWN0LnRlbXBsYXRlcy50ZW1wbGF0ZSlcIiA6c2l6ZT1cIjc1XCIgdi1pZj1cIkNsaWVudC5wcm9qZWN0LnRlbXBsYXRlcy50ZW1wbGF0ZVwiIDpyb3VuZGVkPVwiZmFsc2VcIj4gPC9hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGQgZml2ZVwiIHYtdGV4dD1cIkNsaWVudC5zdGF0dXNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZCBzaXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgOmRhdGEtdGFyZ2V0PVwiJyNvYScraW5kZXhcIiBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphcmlhLWNvbnRyb2xzPVwiJ29hJytpbmRleFwiIGNsYXNzPVwiYnRuVHJhbnNwYXJlbnQgdmlld0FjY0J0biBjb2xsYXBzZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+IFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhY2NvcmRpb25Sb3cgXCIgOmtleT1cIidhYicraW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21BY2NvcmRpb24gY29udGFpbmVyLWZsdWlkIGNvbGxhcHNlXCIgOmlkPVwiJ29hJytpbmRleFwiIDphcmlhLWxhYmVsbGVkYnk9XCInb2EnK2luZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBhcmVudD1cIiNteWNsaWVudHNUYWJsZUFjY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGJvcmRlci1ib3R0b20gcHktNFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBpbWdXcnByXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiQ2xpZW50LnJvb21fbGF0ZXN0X2NoYXQuZmlsZVwiIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgdi1pZj1cIkNsaWVudC5yb29tX2xhdGVzdF9jaGF0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiBjbGFzcz1cInRleHRCb2xkNjAwXCI+U3RhcnQgRGF0ZTo8L3NwYW4+IHt7IENsaWVudC5jaGF0X3N0YXJ0X2F0IH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRCb2xkNjAwIHByLTNcIj5TdGF0dXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gOnNlbGVjdGVkVmFsdWUuc3luYz1cIkNsaWVudC5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZHJvcHNlbGVjdGVkPVwiZHZhbD0+IHNldF9zdGF0dXMoZHZhbCwgQ2xpZW50LGluZGV4KVwiIDpsaXN0cz1cImNoYXRfc3RhdHVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5UcmFuc3BhcmVudCB0ZXh0Qm9sZDYwMCBmb250MTRcIiBAY2xpY2s9XCIkcm91dGVyLnB1c2goeyBuYW1lOiAnQ2hhdCcsIHBhcmFtczoge3Jvb21pZDogIENsaWVudC5pZCB9fSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9jaGF0LnBuZ1wiIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5DaGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG1iLTVcIiB2LWlmPVwiQ2xpZW50cy5kYXRhXCI+XG4gICAgICAgICAgICBcdCAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+PC9kaXY+XG4gICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICBcdCAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0YWJsZU5hdmlnYXRpb25cIiB2LWlmPVwiQ2xpZW50cy50b3RhbD4wXCI+XG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuVHJhbnNwYXJlbnQgbGVmdE5hdlwiIDpjbGFzcz1cIntkaXNhYmxlZDogQ2xpZW50cy5jdXJyZW50X3BhZ2U8PTF9XCJcbiAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJDbGllbnRzLmN1cnJlbnRfcGFnZTw9MVwiIEBjbGljaz1cImdldF9jbGllbnRzKENsaWVudHMucHJldl9wYWdlX3VybClcIj5cbiAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJDbGllbnRzLmN1cnJlbnRfcGFnZT49Q2xpZW50cy5sYXN0X3BhZ2VcIj57e0NsaWVudHMuY3VycmVudF9wYWdlfX1cbiAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICAve3tDbGllbnRzLmxhc3RfcGFnZX19PC9zcGFuPlxuICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlxuICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIHt7Q2xpZW50cy5jdXJyZW50X3BhZ2V9fSAvXG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwb2ludGVyXCIgOmRpc2FibGVkPVwiQ2xpZW50cy5jdXJyZW50X3BhZ2U+PUNsaWVudHMubGFzdF9wYWdlXCJcbiAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0X2NsaWVudHMoQ2xpZW50cy5sYXN0X3BhZ2VfdXJsKVwiPlxuICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgICAgICB7e0NsaWVudHMubGFzdF9wYWdlfX1cbiAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuVHJhbnNwYXJlbnQgcmlnaHROYXZcIlxuICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntkaXNhYmxlZDogQ2xpZW50cy5jdXJyZW50X3BhZ2U+PUNsaWVudHMubGFzdF9wYWdlfVwiXG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiQ2xpZW50cy5jdXJyZW50X3BhZ2U+PUNsaWVudHMubGFzdF9wYWdlXCJcbiAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRfY2xpZW50cyhDbGllbnRzLm5leHRfcGFnZV91cmwpXCI+XG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgXHQgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFx0ICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj48L2Rpdj5cbiAgICAgICAgICAgIFx0ICAgIDwvZGl2PlxuICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGJyPlxuICAgIDxicj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cbnNjXG48c2NyaXB0PlxuaW1wb3J0IHtcbiAgICAgICAgbWFwR2V0dGVyc1xuICAgIH0gZnJvbSBcInZ1ZXhcIjtcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbJ2ZpbHRlcnRhYiddLFxuICAgICAgICBuYW1lOiBcIkRlc2luZzNkLWNsaWVudFwiLFxuICAgICAgICBjb21wb25lbnRzOiB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2VhcmNoOicnLFxuICAgICAgICAgICAgICAgIENsaWVudHM6JycsXG4gICAgICAgICAgICAgICAgY2hhdF9zdGF0dXM6IFt7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG5cdCAgICAgICAgICAgICAgICAgICAgdGV4dDogJy0nXG5cdCAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnT24gR29pbmcnLFxuXHQgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdPbiBHb2luZydcblx0ICAgICAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdSZSBPcGVuJyxcblx0ICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUmUgT3Blbidcblx0ICAgICAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdDb21wbGV0ZWQnLFxuXHQgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb21wbGV0ZWQnXG5cdCAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnSW5jb21wbGV0ZWQnLFxuXHQgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdJbmNvbXBsZXRlZCdcblx0ICAgICAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGFzeW5jIGZpbHRlcnRhYihuLCBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKG4gPT0gJ0NsaWVudHMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0X2NsaWVudHMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgc2VhcmNoKG4sbyl7XG4gICAgICAgICAgICAgICAgaWYgKG4udHJpbSgpLmxlbmd0aD09MCAmJiBvLnRyaW0oKS5sZW5ndGg+MCkge1xuICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0X2NsaWVudHMoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgICAgYXN5bmMgZ2V0X2NsaWVudHModXJsID0gXCIvYXBpL2Rlc2lnbmVyM2QvY2xpZW50c1wiKSB7XG5cdCAgICAgICAgICAgIGxldCBsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcblx0ICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5kM19tYWluX3RhYixcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgIGF4aW9zLmdldCh1cmwsIHtcblx0ICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9KVxuXHQgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2xpZW50cyA9IHJlcy5kYXRhLmRhdGFcblx0ICAgICAgICAgICAgICAgICAgICBsb2FkZXJkLmhpZGUoKVxuXHQgICAgICAgICAgICAgICAgfSlcblx0ICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuXHQgICAgICAgICAgICAgICAgICAgIGxvYWRlcmQuaGlkZSgpXG5cdCAgICAgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgc2V0X3N0YXR1cyh2bCwgY2hhdCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5kM19tYWluX3RhYixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBheGlvcy5wdXQoJy9hcGkvcHJvamVjdENoYXQvJyArIGNoYXQuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdmwudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DbGllbnRzLmRhdGFbaW5kZXhdLnN0YXR1cyA9IHJlcy5kYXRhLmRhdGEuc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXJkLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBtb3VudGVkKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGNyZWF0ZWQoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyczoge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgfSxcblxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cIm15cHJvZmlsZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cIm15cHJvZmlsZS10YWJcIiByZWY9XCJtYWludGFiXCI+XG4gICAgPGJyPlxuICAgIDxicj5cbiAgICA8bXlzaG93cm9vbURlbW8gIEBkZW1vX2NoYW5nZT1cImlzZGVtbyA9PiBzaG93X2RlbW89aXNkZW1vXCIgOmZldGNoX3Nob3dyb29tPVwic2hvd19kZW1vXCIgLz5cbiAgICA8ZGl2IHYtaWY9XCJzaG93X2RlbW8hPXRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwYi0yIHVzZXJBY2NvdW50Q29udFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXIgbWItNVwiPk15IEdhbGxlcnk8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBiZy13aGl0ZSBnYWxsZXJ5Q29uRiBweS01IG1iLTVcIiBAc3VibWl0LnByZXZlbnQ9XCJzYXZlX3Byb2ZpbGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1yaWdodCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuTm9ybWFsIHB4LTRcIiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwic2hvd19kZW1vPXRydWVcIj48aSBjbGFzcz1cImZhIGZhLWV5ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gVmlldyBEZW1vPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbnQxMDgwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNhbWVyYUJ0biBtYi0yXCIgZm9yPVwiYnVzc2luZXNzbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtidXNpbmVzc19sb2dvfSlgIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJzZXRfaW1hZ2UoJ2ltYWdlcy9kc2xyLWNhbWVyYS5wbmcnKVwiIGNsYXNzPVwiaW1nLWZsdWlkXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGhpZGRlbiBpZD1cImJ1c3NpbmVzc2xvZ29cIiBAY2hhbmdlPVwiY2hvb3NlX2xvZ29cIiB2LXZhbGlkYXRlPVwiJ2ltYWdlJ1wiIGRhdGEtdnYtYXM9XCJidXNpbmVzcyBsb2dvXCIgZGF0YS12di1uYW1lPVwiYnVzaW5lc3NfbG9nb191cGxvYWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0Qm9sZDYwMCBtYi0xXCI+VXBsb2FkIEJ1c2luZXNzIGltYWdlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb250MTQgdGV4dExpZ2h0R3JheSB0ZXh0Qm9sZDYwMFwiPlVwbG9hZCBZb3VyIEJ1c2luZXNzIGxvZ28gb3IgcHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZTxicj5TaXplOiAxODAgWCAxMjA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2J1c2luZXNzX2xvZ29fdXBsb2FkJylcIiBjbGFzcz1cImVycm9ybXNnXCI+e3sgdmVycm9ycy5maXJzdCgnYnVzaW5lc3NfbG9nb191cGxvYWQnKSB9fSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYmlnZ2VyVGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21wYW55IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9maWxlLmJhbm5lcl90aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYW5uZXJfdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtYXM9XCJDb21wYW55IE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2Jhbm5lcl90aXRsZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdiYW5uZXJfdGl0bGUnKSB9fSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIGJ1c2luZXNzIGJpbyBoZXJlLi4gXCIgdi1tb2RlbD1cInByb2ZpbGUuYmFubmVyX2Rlc2NyaXB0aW9uXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBuYW1lPVwiYmFubmVyX2Rlc2NyaXB0aW9uXCIgZGF0YS12di1hcz1cImJhbm5lciBkZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdiYW5uZXJfZGVzY3JpcHRpb24nKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj57eyB2ZXJyb3JzLmZpcnN0KCdiYW5uZXJfZGVzY3JpcHRpb24nKSB9fSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgPHVsIGNsYXNzPVwibGlzdC11bnN0eWxlZCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHRleHRHcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJteC0xXCI+PGkgY2xhc3M9XCJmYSBmYS1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm14LTFcIj48aSBjbGFzcz1cImZhIGZhLXN0YXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibXgtMVwiPjxpIGNsYXNzPVwiZmEgZmEtc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJteC0xXCI+PGkgY2xhc3M9XCJmYSBmYS1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm14LTFcIj48aSBjbGFzcz1cImZhIGZhLXN0YXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTIgdGV4dEJvbGQ2MDBcIj5NYWluIEltYWdlcyBHYWxsZXJ5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0TGlnaHRHcmF5IHRleHRCb2xkNjAwXCI+VXBsb2FkZSB5b3VyIGZhdm9yaXRlIFByb2plY3RzLiB3aWxsIGFwcGVhciBhcyBzbGlkZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeVNsaWRlclVwbG9hZCB0ZXh0LWNlbnRlclwiIHJlZj1cImdhbGxlcnlfdXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uIGNsYXNzPVwiY2FtZXJhQnRuIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9kc2xyLWNhbWVyYS5wbmdcIiBjbGFzcz1cImltZy1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRyYWcgJiBEcm9wIG9yIGNsaWNrIHRvIHVwbG9hZCBmcm9tIHlvdXIgY29tcHV0ZXIgZmlsZXM8YnI+U2l6ZTogODgwIHggNTAwPC9wPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsZURyb3B6b25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZWQ9XCJnZXRfZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlLnN5bmM9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptYXg9XCIxNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmljb249XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dXBsb2FkdGl0bGU9XCInRHJhZyAmIERyb3Agb3IgY2xpY2sgdG8gdXBsb2FkIGZyb20geW91ciBjb21wdXRlciBmaWxlcyA8YnI+IFNpemU6IDg4MCB4IDUwMCdcIiA6ZmlsZW5hbWU9XCInZ2FsbGVyaWVzJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpbGVWYWxpZGF0aW9uPVwiJ2ltYWdlfG1pbWVzOmpwZWcscG5nLGpwZydcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidXBsb2FkZWRJdGVtIGxpc3QtdW5zdHlsZWQgZC1mbGV4IGZsZXgtd3JhcFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtci0yIG1iLTJcIiB2LWZvcj1cIihmaWxlLCBpbmRleCkgaW4gZ2FsbGVyeV9maWxlc1wiIDprZXk9XCJyYW5faW54K2luZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJzZXRfaW1hZ2UoZmlsZS5nYWxsZXJ5X2ltYWdlKVwiIGhlaWdodD1cIjUwXCIgd2lkdGg9XCI1MFwiIGNsYXNzPVwidGh1bWJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxcIiBAY2xpY2s9XCJyZW1vdmVfZ2FsbGVyeV9maWxlKGZpbGUuaWQsIGluZGV4KTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiZ2FsbGVyeV91cGxvYWRfZXJyb3JcIiBjbGFzcz1cImVycm9ybXNnXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGdhbGxlcnlfdXBsb2FkX2Vycm9yXCIgOmtleT1cImluZGV4XCI+e3tpdGVtfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1yaWdodCBteS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bk5vcm1hbCBweC00IHJvdW5kZWRcIj48aW1nIDpzcmM9XCJzZXRfaW1hZ2UoJ2ltYWdlcy9jaGF0LnBuZycpXCIgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIj4gQ2hhdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG15LTRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0blN1Y2Nlc1wiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtcbiAgICAgICAgbWFwR2V0dGVyc1xuICAgIH0gZnJvbSBcInZ1ZXhcIjtcbiAgICBpbXBvcnQgbXlzaG93cm9vbURlbW8gZnJvbSAnLi4vY29tbW9uL1Nob3BEZW1vLnZ1ZSdcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbJ2ZpbHRlcnRhYiddLFxuICAgICAgICBuYW1lOiBcIkRlc2lnbmVyM2QtcHJvZmlsZVwiLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBteXNob3dyb29tRGVtb1xuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaG93X2RlbW86ZmFsc2UsXG4gICAgICAgICAgICAgICAgcHJvZmlsZToge1xuICAgICAgICAgICAgICAgICAgICBidXNpbmVzc19sb2dvX3VwbG9hZDogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJ1c2luZXNzX2xvZ286IG51bGwsXG4gICAgICAgICAgICAgICAgZ2FsbGVyeV9maWxlczogW10sXG4gICAgICAgICAgICAgICAgZ2FsbGVyeV91cGxvYWRfZXJyb3I6JydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGFzeW5jIGZpbHRlcnRhYihuLCBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKG4gPT0gJ1Byb2ZpbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsb2FkZXIgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLm1haW50YWIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dfZGVtbz1mYWxzZVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldF9wcm9maWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBhc3luYyBnZXRfcHJvZmlsZSgpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCIvYXBpL3Nob3BfcHJvZmlsZVwiKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5kYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZSA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1c2luZXNzX2xvZ28gPSB0aGlzLnNldF9pbWFnZSh0aGlzLnByb2ZpbGUuYnVzaW5lc3NfbG9nbylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FsbGVyeV9maWxlcyA9IHJlcy5kYXRhLmRhdGEuZ2FsbGVyaWVzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnByb2ZpbGUuZ2FsbGVyaWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucHJvZmlsZS5iZW5lZml0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnByb2ZpbGUuYmVuZWZpdF9pZHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wcm9maWxlLmNyZWF0ZWRfYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wcm9maWxlLnVwZGF0ZWRfYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wcm9maWxlLnVzZXJfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYWxsZXJ5X3VwbG9hZF9lcnJvcj0nJztcblx0XHRcdFx0XHRcdH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhc3luYyBnZXRfZmlsZShmaWxlcykge1xuICAgICAgICAgICAgICAgICB0aGlzLmdhbGxlcnlfdXBsb2FkX2Vycm9yPScnO1xuICAgICAgICAgICAgICAgIHZhciBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWxlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGZpbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdnYWxsZXJpZXNbXScsIGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBsb2FkZXIgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMuZ2FsbGVyeV91cGxvYWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9zaG9wX3Byb2ZpbGUvdXBsb2FkX2dhbGxlcnknLCBmZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FsbGVyeV9maWxlcyA9IHJlcy5kYXRhLmRhdGEuZ2FsbGVyaWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FsbGVyeV91cGxvYWRfZXJyb3IgPSByZXMuZGF0YS5kYXRhLmVycm9yX21lc3NhZ2VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLm1lc3NhZ2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGVyci5yZXNwb25zZS5kYXRhKSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldEVycm9yc0Zyb21SZXNwb25zZShlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgY2hvb3NlX2xvZ28oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlLmJ1c2luZXNzX2xvZ29fdXBsb2FkID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVzaW5lc3NfbG9nbyA9IHRoaXMuY3JlYXRlVGh1bWJVUkwodGhpcy5wcm9maWxlLmJ1c2luZXNzX2xvZ29fdXBsb2FkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVUaHVtYlVSTChmaWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgc2F2ZV9wcm9maWxlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oYXN5bmMgKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb2ZpbGUpLm1hcChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoZSwgdGhpcy5wcm9maWxlW2VdID09IG51bGwgPyAnJyA6IHRoaXMucHJvZmlsZVtlXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2FkZXIgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5tYWludGFiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3Nob3BfcHJvZmlsZScsIGZkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGUgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idXNpbmVzc19sb2dvID0gdGhpcy5zZXRfaW1hZ2UodGhpcy5wcm9maWxlLmJ1c2luZXNzX2xvZ28pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbGxlcnlfZmlsZXMgPSByZXMuZGF0YS5kYXRhLmdhbGxlcmllc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wcm9maWxlLmdhbGxlcmllcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnByb2ZpbGUuYmVuZWZpdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wcm9maWxlLmJlbmVmaXRfaWRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucHJvZmlsZS5jcmVhdGVkX2F0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucHJvZmlsZS51cGRhdGVkX2F0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucHJvZmlsZS51c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGVyci5yZXNwb25zZS5kYXRhKSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgcmVtb3ZlX2dhbGxlcnlfZmlsZShpZCwgeCkge1xuICAgICAgICAgICAgICAgIGxldCB0aHQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQXJlIFlvdSBTdXJlIFlvdSBXYW50IFRvIERlbGV0ZT8nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkdhbGxlcnkncyBJbWFnZXMgV2lsbCBCZSBEZWxldGVkLiBZb3UgV29uJ3QgQmUgQWJsZSBUbyBSZXZlcnQgVGhpcyFcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnWWVzLCBEZWxldGUgSXQhJ1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoXCIvYXBpL3Nob3BfcHJvZmlsZS9cIiArIGlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh0LmdhbGxlcnlfZmlsZXMuc3BsaWNlKHgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgbW91bnRlZCgpIHt9LFxuICAgICAgICBhc3luYyBjcmVhdGVkKCkge30sXG4gICAgICAgIGZpbHRlcnM6IHt9LFxuICAgICAgICBjb21wdXRlZDoge30sXG5cbiAgICB9XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgaWQ9XCJteVNldHRpbmdzXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwibXlTZXR0aW5ncy10YWJcIj5cbiAgICA8YnI+XG4gICAgPGJyPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcGItMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiIG1iLTNcIj5NeSBTZXR0aW5nczwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGJyPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgY29udDEwODAgYmctd2hpdGUgdmVuQWNjSW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbWItNVwiPlxuICAgICAgICAgICAgPGgzPkJ1c2luZXNzIEluZm9ybWF0aW9uPC9oMz5cbiAgICAgICAgICAgIDxwPk5vdGljZS0geW91ciBjaGFuZ2VzIHdpbGwgYmUgdXBkYXRlZCBhZnRlciBhIG1haWwgYXBwcm92YWwgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlSW5mbygpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IHByLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdsYXN0X25hbWUnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0ubGFzdF9uYW1lIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImZvcm0ubGFzdF9uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+TGFzdCBOYW1lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImxhc3RfbmFtZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgcGwtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ2xhc3RfbmFtZScpICwnaGF2ZVZhbHVlJzogZm9ybS5sYXN0X25hbWUgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZm9ybS5sYXN0X25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5MYXN0IE5hbWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwibGFzdF9uYW1lXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBwci1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygnZW1haWwnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0uZW1haWwgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImZvcm0uZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5FbWFpbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJlbWFpbFwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgcGwtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIiAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ2NvdW50cnlfY29kZScpICwnaGF2ZVZhbHVlJzogZm9ybS5jb3VudHJ5X2NvZGUgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbCBzZWxlY3RcIj57e2Zvcm0uY291bnRyeV9jb2RlfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgdy0xMDBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0RHJvcERvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRyeUxpc3QgIEBjbGlja2VkPVwib25Db3VudHJ5Q2hhbmdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiY291bnRyeV9jb2RlXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ3Bob25lX251bWJlcicpICwnaGF2ZVZhbHVlJzogZm9ybS5waG9uZV9udW1iZXIgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmb3JtLnBob25lX251bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlBob25lIE51bWJlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJwaG9uZV9udW1iZXJcIiBjbGFzcz1cImVycm9ybXNnXCI+PC9oYXMtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IHByLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdjb21wYW55X25hbWUnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0uY29tcGFueV9uYW1lIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJmb3JtLmNvbXBhbnlfbmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+Q29tcGFueSBOYW1lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImNvbXBhbnlfbmFtZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgcGwtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ2NvbXBhbnlfcGhvbmUnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0uY29tcGFueV9waG9uZSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS5jb21wYW55X3Bob25lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Db21wYW55IFBob25lIE51bWJlciA8c3BhbiBjbGFzcz1cIm9wdGlvbmFsXCI+KG9wdGlvbmFsKTwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiY29tcGFueV9waG9uZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgcHItbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ2NvbXBhbnlfYWRkcmVzcycpICwnaGF2ZVZhbHVlJzogZm9ybS5jb21wYW55X2FkZHJlc3MgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImZvcm0uY29tcGFueV9hZGRyZXNzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Db21wYW55IEFkZHJlc3MgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPihvcHRpb25hbCk8L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImNvbXBhbnlfYWRkcmVzc1wiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgcGwtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkJykgLCdoYXZlVmFsdWUnOiBmb3JtLnBhc3N3b3JkIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+UGFzc3dvcmQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwicGFzc3dvcmRcIiBjbGFzcz1cImVycm9ybXNnXCI+PC9oYXMtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiB0ZXh0LWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTYXZlXCIgY2xhc3M9XCJidG5TdWNjZXMgcHgtNVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICA8YnI+XG4gICAgPGJyPlxuICAgIDxicj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDb3VudHJ5TGlzdCBmcm9tICcuLi8uLi9Db3VudHJ5LWxpc3QudnVlJ1xuICAgIGltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tIFwidnVleFwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IFsnZmlsdGVydGFiJ10sXG4gICAgICAgIG5hbWU6IFwiRGVzaWduZXIzZC1zZXR0aW5nXCIsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbkNvdW50cnlMaXN0XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbGFzdF9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5X2NvZGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZV9udW1iZXI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBjb21wYW55X2FkZHJlc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICBjb21wYW55X25hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBjb21wYW55X3Bob25lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICB1cGZvcjogJ2luZm8nLFxuICAgICAgICAgICAgICAgIH0pLFxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGFzeW5jIGZpbHRlcnRhYihuLCBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKG4gPT0gJ1NldHRpbmdzJykge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldF91c2VyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgIG9uQ291bnRyeUNoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jb3VudHJ5X2NvZGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc3luYyBnZXRfdXNlcigpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvcHJvZmlsZVwiKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmRhdGEgPSBkYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudnNkX2lkID0gZmRhdGEudnNkX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICBmZGF0YS51cGZvciA9ICdpbmZvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmZpbGwoZmRhdGEpICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jIHVwZGF0ZUluZm8oKSB7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLmZvcm0ucGFzc3dvcmQgPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucGFzc3dvcmQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnB1dCgnYXBpL3Byb2ZpbGUnKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZkYXRhID0gZGF0YS5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGZkYXRhLnVwZm9yID0gJ2luZm8nXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZmlsbChmZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2dldF9wcm9maWxlJywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJzZXRFcnJvcnNcIiwge30pO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBjcmVhdGVkKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcnM6IHtcblxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyhbXCJlcnJvcnNcIl0pLFxuICAgICAgICB9LFxuXG4gICAgfVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuLmVycm9ybXNne1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcHgtMCBzdGVwc0JhclwiPlxuICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFicyBjdXN0b21UYWIganVzdGlmeS1jb250ZW50LWNlbnRlciBib3JkZXItdG9wXCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiByb2xlPVwicHJlc2VudGF0aW9uXCIgQGNsaWNrPVwidGFiZm9yPSdTZXR0aW5ncydcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgcm91bmRlZC0wIGFjdGl2ZVwiIGlkPVwibXlTZXR0aW5ncy10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjbXlTZXR0aW5nc1wiIHJvbGU9XCJ0YWJcIlxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm15U2V0dGluZ3NcIiBhcmlhLXNlbGVjdGVkPVwidHJ1ZVwiPk15IFNldHRpbmdzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiBAY2xpY2s9XCJ0YWJmb3I9J1Byb2ZpbGUnXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIHJvdW5kZWQtMFwiIGlkPVwibXlwcm9maWxlLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNteXByb2ZpbGVcIiByb2xlPVwidGFiXCJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJteXByb2ZpbGVcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5NeSBQcm9maWxlPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiBAY2xpY2s9XCJ0YWJmb3I9J0NsaWVudHMnXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIHJvdW5kZWQtMFwiIGlkPVwibXljbGllbnRzLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNteWNsaWVudHNcIiByb2xlPVwidGFiXCJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJteWNsaWVudHNcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5NeSBDbGllbnRzPC9hPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50IGJnR3JheVwiPlxuICAgICAgICA8U2V0dGluZ3MgOmZpbHRlcnRhYi5zeW5jPVwidGFiZm9yXCIgLz5cbiAgICAgICAgPFByb2ZpbGUgOmZpbHRlcnRhYi5zeW5jPVwidGFiZm9yXCIgLz5cbiAgICAgICAgICAgIDxDbGllbnRzIDpmaWx0ZXJ0YWIuc3luYz1cInRhYmZvclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgICAgIGltcG9ydCBTZXR0aW5ncyBmcm9tICcuL1NldHRpbmdzLnZ1ZSdcbiAgICAgICAgaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlLnZ1ZSdcbiAgICAgICAgaW1wb3J0IENsaWVudHMgZnJvbSAnLi9DbGllbnRzLnZ1ZSdcbiAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgICAgbmFtZTogXCJEZXNpZ25lcjNkLWFjY291bnRcIixcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICBTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICBQcm9maWxlLFxuICAgICAgICAgICAgICAgIENsaWVudHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmZvcjogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3YXRjaDoge30sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc3luYyBtb3VudGVkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiZm9yID0gXCJTZXR0aW5nc1wiLFxuICAgICAgICAgICAgICAgICAgICAkKCdhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykub24oJ3Nob3duLmJzLnRhYicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGh0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2FbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc3luYyBjcmVhdGVkKCkge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsdGVyczoge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGlkOiBcIm15Y2xpZW50c1wiLFxuICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibXljbGllbnRzLXRhYlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBwYi0yXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMiB0ZXh0LWNlbnRlciBtYi01XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoMlwiLCB7fSwgW192bS5fdihcIk15IENsaWVudHNcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uQ2xpZW50c1xuICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQxNCB0ZXh0TGlnaHRHcmF5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uQ2xpZW50cy50b3RhbCkgKyBcIiBDbGllbnRzXCIpLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtYi00XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTYgbWwtYXV0b1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3RTZWFyY2ggZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtbC1hdXRvXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldF9jbGllbnRzKClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggY2xpZW50Li4uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2ggfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLXJlc3BvbnNpdmVcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwiZDNfbWFpbl90YWJcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGl2VGFibGUgbXljbGllbnRzVGFibGUgdmxkLXBhcmVudFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJteWNsaWVudHNUYWJsZUFjY29yZFwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5DbGllbnRzLmRhdGFcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRib2R5IHctMTAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uQ2xpZW50cy5kYXRhLCBmdW5jdGlvbiAoQ2xpZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidGJcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidHIgZC1mbGV4IHdoaXRlUm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRkIG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGllbnQucHJvamVjdC5jb250cmFjdG9yLnZzZF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRkIHR3b1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsaWVudC5wcm9qZWN0LmNsaWVudC5maXJzdF9uYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGllbnQucHJvamVjdC5jbGllbnQubGFzdF9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZCB0aHJlZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50LnByb2plY3QudGVtcGxhdGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZsb29yX3BsYW5fdGVtcGxhdGVzLmZsb29yX3BsYW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZsb29yX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsaWVudC5wcm9qZWN0LnRlbXBsYXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mbG9vcl9wbGFuX3RlbXBsYXRlcy5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRkIGZvdXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50LnByb2plY3QudGVtcGxhdGVzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYXZhdGFyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uc2V0X2ltYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGllbnQucHJvamVjdC50ZW1wbGF0ZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiA3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGQgZml2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoQ2xpZW50LnN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRkIHNpeFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG5UcmFuc3BhcmVudCB2aWV3QWNjQnRuIGNvbGxhcHNlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjb2FcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcIm9hXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1leWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFZpZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhYlwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3cgYWNjb3JkaW9uUm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21BY2NvcmRpb24gY29udGFpbmVyLWZsdWlkIGNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm9hXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwib2FcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXBhcmVudFwiOiBcIiNteWNsaWVudHNUYWJsZUFjY29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBib3JkZXItYm90dG9tIHB5LTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgaW1nV3JwclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50LnJvb21fbGF0ZXN0X2NoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBDbGllbnQucm9vbV9sYXRlc3RfY2hhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dEJvbGQ2MDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlN0YXJ0IERhdGU6XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoQ2xpZW50LmNoYXRfc3RhcnRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHRCb2xkNjAwIHByLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTdGF0dXNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiRHJvcGRvd25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlOiBDbGllbnQuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdHM6IF92bS5jaGF0X3N0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpzZWxlY3RlZFZhbHVlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6c2VsZWN0ZWQtdmFsdWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsaWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wc2VsZWN0ZWQ6IChkdmFsKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0X3N0YXR1cyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsaWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC0yIHRleHQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0blRyYW5zcGFyZW50IHRleHRCb2xkNjAwIGZvbnQxNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDaGF0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb29taWQ6IENsaWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiaW1hZ2VzL2NoYXQucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDaGF0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLkNsaWVudHMuZGF0YVxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBtYi01XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5DbGllbnRzLnRvdGFsID4gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgdGFibGVOYXZpZ2F0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuVHJhbnNwYXJlbnQgbGVmdE5hdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uQ2xpZW50cy5jdXJyZW50X3BhZ2UgPD0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLkNsaWVudHMuY3VycmVudF9wYWdlIDw9IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0X2NsaWVudHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5DbGllbnRzLnByZXZfcGFnZV91cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1hbmdsZS1sZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLkNsaWVudHMuY3VycmVudF9wYWdlID49IF92bS5DbGllbnRzLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uQ2xpZW50cy5jdXJyZW50X3BhZ2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcXHQgICAgICAgICAgICAgICAgICAgIC9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uQ2xpZW50cy5sYXN0X3BhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFxcdCAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLkNsaWVudHMuY3VycmVudF9wYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC9cXG4gICAgICAgICAgICBcXHQgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uQ2xpZW50cy5jdXJyZW50X3BhZ2UgPj1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5DbGllbnRzLmxhc3RfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRfY2xpZW50cyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLkNsaWVudHMubGFzdF9wYWdlX3VybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcXHQgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLkNsaWVudHMubGFzdF9wYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFxcdCAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuVHJhbnNwYXJlbnQgcmlnaHROYXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5DbGllbnRzLmN1cnJlbnRfcGFnZSA+PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLkNsaWVudHMubGFzdF9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLkNsaWVudHMuY3VycmVudF9wYWdlID49XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uQ2xpZW50cy5sYXN0X3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0X2NsaWVudHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5DbGllbnRzLm5leHRfcGFnZV91cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1hbmdsZS1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00XCIgfSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuVHJhbnNwYXJlbnQgc2VhcmNoQnRuXCIsIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHNyYzogXCJpbWFnZXMvYXJyb3ctcG9pbnQtdG8tcmlnaHQucG5nXCIsXG4gICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGVhZCB3LTEwMFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidHIgZC1mbGV4IHdoaXRlUm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRkIG9uZVwiIH0sIFtfdm0uX3YoXCJJRCBTaG93cm9vbVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRkIHR3b1wiIH0sIFtfdm0uX3YoXCJDdXN0b21lclwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRkIHRocmVlXCIgfSwgW192bS5fdihcIlByb2plY3RzXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGQgZm91clwiIH0sIFtfdm0uX3YoXCJUZW1wbGF0ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRkIGZpdmVcIiB9LCBbX3ZtLl92KFwiU3RhdHVzXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGQgc2l4XCIgfSwgW192bS5fdihcIkFjdGlvblwiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgcmVmOiBcIm1haW50YWJcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGlkOiBcIm15cHJvZmlsZVwiLFxuICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibXlwcm9maWxlLXRhYlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIm15c2hvd3Jvb21EZW1vXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgZmV0Y2hfc2hvd3Jvb206IF92bS5zaG93X2RlbW8gfSxcbiAgICAgICAgb246IHsgZGVtb19jaGFuZ2U6IChpc2RlbW8pID0+IChfdm0uc2hvd19kZW1vID0gaXNkZW1vKSB9LFxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnNob3dfZGVtbyAhPSB0cnVlXG4gICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBiZy13aGl0ZSBnYWxsZXJ5Q29uRiBweS01IG1iLTVcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZV9wcm9maWxlLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyIHRleHQtcmlnaHQgbWItNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bk5vcm1hbCBweC00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dfZGVtbyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1leWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgVmlldyBEZW1vXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBjb250MTA4MFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYW1lcmFCdG4gbWItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke192bS5idXNpbmVzc19sb2dvfSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiYnVzc2luZXNzbG9nb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnNldF9pbWFnZShcImltYWdlcy9kc2xyLWNhbWVyYS5wbmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCInaW1hZ2UnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYnVzc2luZXNzbG9nb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiYnVzaW5lc3MgbG9nb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJidXNpbmVzc19sb2dvX3VwbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uY2hvb3NlX2xvZ28gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRCb2xkNjAwIG1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJVcGxvYWQgQnVzaW5lc3MgaW1hZ2VcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJidXNpbmVzc19sb2dvX3VwbG9hZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiYnVzaW5lc3NfbG9nb191cGxvYWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZmlsZS5iYW5uZXJfdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb2ZpbGUuYmFubmVyX3RpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgYmlnZ2VyVGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNvbXBhbnkgTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFubmVyX3RpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiQ29tcGFueSBOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucHJvZmlsZS5iYW5uZXJfdGl0bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYW5uZXJfdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJiYW5uZXJfdGl0bGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImJhbm5lcl90aXRsZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZmlsZS5iYW5uZXJfZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb2ZpbGUuYmFubmVyX2Rlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJXcml0ZSB5b3VyIGJ1c2luZXNzIGJpbyBoZXJlLi4gXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJiYW5uZXJfZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJiYW5uZXIgZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wcm9maWxlLmJhbm5lcl9kZXNjcmlwdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhbm5lcl9kZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImJhbm5lcl9kZXNjcmlwdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJiYW5uZXJfZGVzY3JpcHRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTIgdGV4dEJvbGQ2MDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNYWluIEltYWdlcyBHYWxsZXJ5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dExpZ2h0R3JheSB0ZXh0Qm9sZDYwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVcGxvYWRlIHlvdXIgZmF2b3JpdGUgUHJvamVjdHMuIHdpbGwgYXBwZWFyIGFzIHNsaWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZ2FsbGVyeV91cGxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeVNsaWRlclVwbG9hZCB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJGaWxlRHJvcHpvbmVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImluaXRpYWxWYWx1ZS5zeW5jXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZHRpdGxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRyYWcgJiBEcm9wIG9yIGNsaWNrIHRvIHVwbG9hZCBmcm9tIHlvdXIgY29tcHV0ZXIgZmlsZXMgPGJyPiBTaXplOiA4ODAgeCA1MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBcImdhbGxlcmllc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVZhbGlkYXRpb246IFwiaW1hZ2V8bWltZXM6anBlZyxwbmcsanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2VkOiBfdm0uZ2V0X2ZpbGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGxvYWRlZEl0ZW0gbGlzdC11bnN0eWxlZCBkLWZsZXggZmxleC13cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2FsbGVyeV9maWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZmlsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBfdm0ucmFuX2lueCArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTIgbWItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aHVtYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnNldF9pbWFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuZ2FsbGVyeV9pbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZV9nYWxsZXJ5X2ZpbGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWRnZSBiYWRnZS1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdhbGxlcnlfdXBsb2FkX2Vycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nYWxsZXJ5X3VwbG9hZF9lcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0pKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMiB0ZXh0LXJpZ2h0IG15LTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5Ob3JtYWwgcHgtNCByb3VuZGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uc2V0X2ltYWdlKFwiaW1hZ2VzL2NoYXQucG5nXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgQ2hhdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIHBiLTIgdXNlckFjY291bnRDb250XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtYi01XCIgfSwgW192bS5fdihcIk15IEdhbGxlcnlcIildKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJmb250MTQgdGV4dExpZ2h0R3JheSB0ZXh0Qm9sZDYwMFwiIH0sIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJVcGxvYWQgWW91ciBCdXNpbmVzcyBsb2dvIG9yIHByb2ZpbGVcXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlXCJcbiAgICAgICksXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX3ZtLl92KFwiU2l6ZTogMTgwIFggMTIwXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXktNFwiIH0sIFtcbiAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuU3VjY2VzXCIsIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIlNhdmVcIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBpZDogXCJteVNldHRpbmdzXCIsXG4gICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJteVNldHRpbmdzLXRhYlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBjb250MTA4MCBiZy13aGl0ZSB2ZW5BY2NJbmZvXCIgfSwgW1xuICAgICAgICBfdm0uX20oMSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVJbmZvKClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNiBwci1tZC01XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImxhc3RfbmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmxhc3RfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmxhc3RfbmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJsYXN0X25hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIkxhc3QgTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwibGFzdF9uYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02IHBsLW1kLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibGFzdF9uYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZvcm0ubGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubGFzdF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ubGFzdF9uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImxhc3RfbmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwiTGFzdCBOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJsYXN0X25hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTYgcHItbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJlbWFpbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZW1haWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwiRW1haWxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImVtYWlsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02IHBsLW1kLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiY291bnRyeV9jb2RlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZvcm0uY291bnRyeV9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgc2VsZWN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmZvcm0uY291bnRyeV9jb2RlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbCB3LTEwMFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2VsZWN0RHJvcERvd25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQ291bnRyeUxpc3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGlja2VkOiBfdm0ub25Db3VudHJ5Q2hhbmdlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImNvdW50cnlfY29kZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtOVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJwaG9uZV9udW1iZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5waG9uZV9udW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnBob25lX251bWJlciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBob25lX251bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUGhvbmUgTnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcInBob25lX251bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNiBwci1tZC01XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImNvbXBhbnlfbmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLmNvbXBhbnlfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbXBhbnlfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNvbXBhbnlfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmNvbXBhbnlfbmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBhbnlfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ29tcGFueSBOYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImNvbXBhbnlfbmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNiBwbC1tZC01XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImNvbXBhbnlfcGhvbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5jb21wYW55X3Bob25lLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY29tcGFueV9waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNvbXBhbnlfcGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5jb21wYW55X3Bob25lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcGFueV9waG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiY29tcGFueV9waG9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNiBwci1tZC01XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImNvbXBhbnlfYWRkcmVzc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLmNvbXBhbnlfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbXBhbnlfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNvbXBhbnlfYWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmNvbXBhbnlfYWRkcmVzcyB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBhbnlfYWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiY29tcGFueV9hZGRyZXNzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02IHBsLW1kLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicGFzc3dvcmRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIlBhc3N3b3JkXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBwYi0xXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSwgW192bS5fdihcIk15IFNldHRpbmdzXCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtYi01XCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiQnVzaW5lc3MgSW5mb3JtYXRpb25cIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBcIiwgW1xuICAgICAgICBfdm0uX3YoXCJOb3RpY2UtIHlvdXIgY2hhbmdlcyB3aWxsIGJlIHVwZGF0ZWQgYWZ0ZXIgYSBtYWlsIGFwcHJvdmFsIFwiKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiQ29tcGFueSBQaG9uZSBOdW1iZXIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwib3B0aW9uYWxcIiB9LCBbX3ZtLl92KFwiKG9wdGlvbmFsKVwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiQ29tcGFueSBBZGRyZXNzIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm9wdGlvbmFsXCIgfSwgW192bS5fdihcIihvcHRpb25hbClcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMiB0ZXh0LWNlbnRlciBtYi00XCIgfSwgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0blN1Y2NlcyBweC01XCIsXG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIHZhbHVlOiBcIlNhdmVcIiB9LFxuICAgICAgfSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkIHB4LTAgc3RlcHNCYXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcInVsXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdiBuYXYtdGFicyBjdXN0b21UYWIganVzdGlmeS1jb250ZW50LWNlbnRlciBib3JkZXItdG9wXCIsXG4gICAgICAgIGF0dHJzOiB7IHJvbGU6IFwidGFibGlzdFwiIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwicHJlc2VudGF0aW9uXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnRhYmZvciA9IFwiU2V0dGluZ3NcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rIHJvdW5kZWQtMCBhY3RpdmVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibXlTZXR0aW5ncy10YWJcIixcbiAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI215U2V0dGluZ3NcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJteVNldHRpbmdzXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIk15IFNldHRpbmdzXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJwcmVzZW50YXRpb25cIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0udGFiZm9yID0gXCJQcm9maWxlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGluayByb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibXlwcm9maWxlLXRhYlwiLFxuICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIjbXlwcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwibXlwcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJNeSBQcm9maWxlXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJwcmVzZW50YXRpb25cIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0udGFiZm9yID0gXCJDbGllbnRzXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGluayByb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibXljbGllbnRzLXRhYlwiLFxuICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIjbXljbGllbnRzXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwibXljbGllbnRzXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJNeSBDbGllbnRzXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFiLWNvbnRlbnQgYmdHcmF5XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJTZXR0aW5nc1wiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgZmlsdGVydGFiOiBfdm0udGFiZm9yIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwidXBkYXRlOmZpbHRlcnRhYlwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS50YWJmb3IgPSAkZXZlbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiUHJvZmlsZVwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgZmlsdGVydGFiOiBfdm0udGFiZm9yIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwidXBkYXRlOmZpbHRlcnRhYlwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS50YWJmb3IgPSAkZXZlbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiQ2xpZW50c1wiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgZmlsdGVydGFiOiBfdm0udGFiZm9yIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwidXBkYXRlOmZpbHRlcnRhYlwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS50YWJmb3IgPSAkZXZlbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZXJyb3Jtc2dbZGF0YS12LTc3YTBlYTM5XXtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc3YTBlYTM5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc3YTBlYTM5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03N2EwZWEzOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NsaWVudHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0NGMxN2UyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NsaWVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DbGllbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTQ0YzE3ZTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTQ0YzE3ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTQ0YzE3ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NsaWVudHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0NGMxN2UyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU0NGMxN2UyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvQ2xpZW50cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NsaWVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NsaWVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DbGllbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDRjMTdlMiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjgzMjYzMDMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxwcm9ncmFtbWluZ1xcXFx3YW1wNjRcXFxcd3d3XFxcXHVuaXRlZC1zY3JhcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2ODMyNjMwMycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ODMyNjMwMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ODMyNjMwMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJvZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjgzMjYzMDMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjgzMjYzMDMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9Qcm9maWxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4MzI2MzAzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzdhMGVhMzkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzdhMGVhMzkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc3YTBlYTM5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzdhMGVhMzknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzdhMGVhMzknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzdhMGVhMzknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03N2EwZWEzOSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3N2EwZWEzOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9EZXNpZ25lcjNkL1NldHRpbmdzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc3YTBlYTM5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzdhMGVhMzkmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNWRiMGU0YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTVkYjBlNGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTVkYjBlNGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTVkYjBlNGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNWRiMGU0YyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNWRiMGU0YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9EZXNpZ25lcjNkL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1ZGIwZTRjJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==