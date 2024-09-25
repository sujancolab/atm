(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9EZXNpZ25lcjNkL0NsaWVudHMudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvUHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9TZXR0aW5ncy52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9EZXNpZ25lcjNkL0NsaWVudHMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9Qcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvU2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9EZXNpZ25lcjNkL1NldHRpbmdzLnZ1ZT80NmRiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9TZXR0aW5ncy52dWU/MjM5ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvQ2xpZW50cy52dWU/NDc1MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvQ2xpZW50cy52dWU/ZDNiYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvQ2xpZW50cy52dWU/Y2U1MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvUHJvZmlsZS52dWU/ZGVjZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvUHJvZmlsZS52dWU/NGI5ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvUHJvZmlsZS52dWU/NTQwYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvU2V0dGluZ3MudnVlP2QyYTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9EZXNpZ25lcjNkL1NldHRpbmdzLnZ1ZT85ZGMxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9TZXR0aW5ncy52dWU/ODJmNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvU2V0dGluZ3MudnVlP2NkNzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9EZXNpZ25lcjNkL2luZGV4LnZ1ZT84YTllIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9pbmRleC52dWU/OTJkZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvaW5kZXgudnVlPzUwMGUiXSwibmFtZXMiOlsicHJvcHMiLCJuYW1lIiwiY29tcG9uZW50cyIsImRhdGEiLCJzZWFyY2giLCJDbGllbnRzIiwiY2hhdF9zdGF0dXMiLCJ2YWx1ZSIsInRleHQiLCJ3YXRjaCIsImZpbHRlcnRhYiIsIm4iLCJvIiwibWV0aG9kcyIsImdldF9jbGllbnRzIiwidXJsIiwibG9hZGVyZCIsImNvbnRhaW5lciIsImF4aW9zIiwicGFyYW1zIiwidGhlbiIsInNldF9zdGF0dXMiLCJ2bCIsImNoYXQiLCJpbmRleCIsInN0YXR1cyIsIm1vdW50ZWQiLCJjcmVhdGVkIiwiZmlsdGVycyIsImNvbXB1dGVkIiwibXlzaG93cm9vbURlbW8iLCJzaG93X2RlbW8iLCJwcm9maWxlIiwiYnVzaW5lc3NfbG9nb191cGxvYWQiLCJidXNpbmVzc19sb2dvIiwiZ2FsbGVyeV9maWxlcyIsImdhbGxlcnlfdXBsb2FkX2Vycm9yIiwibG9hZGVyIiwiZ2V0X3Byb2ZpbGUiLCJnZXRfZmlsZSIsImZpbGVzIiwiZmQiLCJlbGVtZW50IiwiVG9hc3QiLCJpY29uIiwidGl0bGUiLCJjaG9vc2VfbG9nbyIsImNyZWF0ZVRodW1iVVJMIiwiZmlsZSIsInNhdmVfcHJvZmlsZSIsIk9iamVjdCIsInJlbW92ZV9nYWxsZXJ5X2ZpbGUiLCJpZCIsIngiLCJ0aHQiLCJTd2FsIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJDb3VudHJ5TGlzdCIsImZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJjb3VudHJ5X2NvZGUiLCJwaG9uZV9udW1iZXIiLCJjb21wYW55X2FkZHJlc3MiLCJjb21wYW55X25hbWUiLCJjb21wYW55X3Bob25lIiwicGFzc3dvcmQiLCJ1cGZvciIsIm9uQ291bnRyeUNoYW5nZSIsImdldF91c2VyIiwiZmRhdGEiLCJ1cGRhdGVJbmZvIiwibWFwR2V0dGVycyIsIlNldHRpbmdzIiwiUHJvZmlsZSIsInRhYmZvciIsIiQiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsInJvbGUiLCJfdiIsIl9zIiwidG90YWwiLCJfZSIsIm9uIiwic3VibWl0IiwiJGV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsImV4cHJlc3Npb24iLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJkb21Qcm9wcyIsImlucHV0IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiX20iLCJyZWYiLCJfbCIsIkNsaWVudCIsImtleSIsInRleHRDb250ZW50IiwicHJvamVjdCIsImNvbnRyYWN0b3IiLCJ2c2RfaWQiLCJjbGllbnQiLCJ0ZW1wbGF0ZXMiLCJmbG9vcl9wbGFuX3RlbXBsYXRlcyIsImZsb29yX3BsYW5zIiwiZmxvb3JfbmFtZSIsInRlbXBsYXRlIiwic3JjIiwic2V0X2ltYWdlIiwic2l6ZSIsInJvdW5kZWQiLCJyb29tX2xhdGVzdF9jaGF0IiwiYWx0IiwiY2hhdF9zdGFydF9hdCIsInNlbGVjdGVkVmFsdWUiLCJsaXN0cyIsIiRzZXQiLCJkcm9wc2VsZWN0ZWQiLCJkdmFsIiwiY2xpY2siLCIkcm91dGVyIiwicHVzaCIsInJvb21pZCIsImRpc2FibGVkIiwiY3VycmVudF9wYWdlIiwicHJldl9wYWdlX3VybCIsImxhc3RfcGFnZSIsImxhc3RfcGFnZV91cmwiLCJuZXh0X3BhZ2VfdXJsIiwic3RhdGljUmVuZGVyRm5zIiwid2lkdGgiLCJfd2l0aFN0cmlwcGVkIiwiZmV0Y2hfc2hvd3Jvb20iLCJkZW1vX2NoYW5nZSIsImlzZGVtbyIsImFwcGx5IiwiYXJndW1lbnRzIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoaWRkZW4iLCJjaGFuZ2UiLCJ2ZXJyb3JzIiwiaGFzIiwiZmlyc3QiLCJiYW5uZXJfdGl0bGUiLCJiYW5uZXJfZGVzY3JpcHRpb24iLCJtYXgiLCJ1cGxvYWR0aXRsZSIsImZpbGVuYW1lIiwiZmlsZVZhbGlkYXRpb24iLCJjaGFuZ2VkIiwicmFuX2lueCIsImdhbGxlcnlfaW1hZ2UiLCJoZWlnaHQiLCJpdGVtIiwiZXJyb3IiLCJlcnJvcnMiLCJoYXZlVmFsdWUiLCJmaWVsZCIsImNsaWNrZWQiLCJocmVmIl0sIm1h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Y2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwibXljbGllbnRzXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwibXljbGllbnRzLXRhYlwiPlxuICAgIDxicj5cbiAgICA8YnI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwYi0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1jZW50ZXIgbWItNVwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIlwiPk15IENsaWVudHM8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udDE0IHRleHRMaWdodEdyYXlcIiB2LWlmPVwiQ2xpZW50c1wiPnt7Q2xpZW50cy50b3RhbH19IENsaWVudHM8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJnZXRfY2xpZW50cygpXCIgY2xhc3M9XCJwcm9kdWN0U2VhcmNoIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGNsaWVudC4uLlwiIHYtbW9kZWw9XCJzZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuVHJhbnNwYXJlbnQgc2VhcmNoQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Fycm93LXBvaW50LXRvLXJpZ2h0LnBuZ1wiIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgd2lkdGg9XCIxNlwiPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdlRhYmxlIG15Y2xpZW50c1RhYmxlIHZsZC1wYXJlbnRcIiBpZD1cIm15Y2xpZW50c1RhYmxlQWNjb3JkXCIgcmVmPVwiZDNfbWFpbl90YWJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhlYWQgdy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyIGQtZmxleCB3aGl0ZVJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRkIG9uZVwiPklEIFNob3dyb29tPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGQgdHdvXCI+Q3VzdG9tZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZCB0aHJlZVwiPlByb2plY3RzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGQgZm91clwiPlRlbXBsYXRlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGQgZml2ZVwiPlN0YXR1czwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRkIHNpeFwiPkFjdGlvbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGJvZHkgdy0xMDBcIiAgdi1pZj1cIkNsaWVudHMuZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoQ2xpZW50LGluZGV4ICkgaW4gQ2xpZW50cy5kYXRhXCIgPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ciBkLWZsZXggd2hpdGVSb3dcIiA6a2V5PVwiJ3RiJytpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRkIG9uZVwiIHYtdGV4dD1cIkNsaWVudC5wcm9qZWN0LmNvbnRyYWN0b3IudnNkX2lkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGQgdHdvXCI+e3sgQ2xpZW50LnByb2plY3QuY2xpZW50LmZpcnN0X25hbWUgKyAnICcgKyBDbGllbnQucHJvamVjdC5jbGllbnQubGFzdF9uYW1lIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGQgdGhyZWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBDbGllbnQucHJvamVjdC50ZW1wbGF0ZXMuZmxvb3JfcGxhbl90ZW1wbGF0ZXMuZmxvb3JfcGxhbnMuZmxvb3JfbmFtZSB9fSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgQ2xpZW50LnByb2plY3QudGVtcGxhdGVzLmZsb29yX3BsYW5fdGVtcGxhdGVzLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZCBmb3VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhdmF0YXIgOnNyYz1cInNldF9pbWFnZShDbGllbnQucHJvamVjdC50ZW1wbGF0ZXMudGVtcGxhdGUpXCIgOnNpemU9XCI3NVwiIHYtaWY9XCJDbGllbnQucHJvamVjdC50ZW1wbGF0ZXMudGVtcGxhdGVcIiA6cm91bmRlZD1cImZhbHNlXCI+IDwvYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRkIGZpdmVcIiB2LXRleHQ9XCJDbGllbnQuc3RhdHVzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGQgc2l4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIDpkYXRhLXRhcmdldD1cIicjb2EnK2luZGV4XCIgYXJpYS1leHBhbmRlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YXJpYS1jb250cm9scz1cIidvYScraW5kZXhcIiBjbGFzcz1cImJ0blRyYW5zcGFyZW50IHZpZXdBY2NCdG4gY29sbGFwc2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPiBWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWNjb3JkaW9uUm93IFwiIDprZXk9XCInYWInK2luZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tQWNjb3JkaW9uIGNvbnRhaW5lci1mbHVpZCBjb2xsYXBzZVwiIDppZD1cIidvYScraW5kZXhcIiA6YXJpYS1sYWJlbGxlZGJ5PVwiJ29hJytpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wYXJlbnQ9XCIjbXljbGllbnRzVGFibGVBY2NvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBib3JkZXItYm90dG9tIHB5LTRcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgaW1nV3JwclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIkNsaWVudC5yb29tX2xhdGVzdF9jaGF0LmZpbGVcIiBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlwiIHYtaWY9XCJDbGllbnQucm9vbV9sYXRlc3RfY2hhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gY2xhc3M9XCJ0ZXh0Qm9sZDYwMFwiPlN0YXJ0IERhdGU6PC9zcGFuPiB7eyBDbGllbnQuY2hhdF9zdGFydF9hdCB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0Qm9sZDYwMCBwci0zXCI+U3RhdHVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIDpzZWxlY3RlZFZhbHVlLnN5bmM9XCJDbGllbnQuc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRyb3BzZWxlY3RlZD1cImR2YWw9PiBzZXRfc3RhdHVzKGR2YWwsIENsaWVudCxpbmRleClcIiA6bGlzdHM9XCJjaGF0X3N0YXR1c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuVHJhbnNwYXJlbnQgdGV4dEJvbGQ2MDAgZm9udDE0XCIgQGNsaWNrPVwiJHJvdXRlci5wdXNoKHsgbmFtZTogJ0NoYXQnLCBwYXJhbXM6IHtyb29taWQ6ICBDbGllbnQuaWQgfX0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2hhdC5wbmdcIiBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlwiIC8+Q2hhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBtYi01XCIgdi1pZj1cIkNsaWVudHMuZGF0YVwiPlxuICAgICAgICAgICAgXHQgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPjwvZGl2PlxuICAgICAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgICAgXHQgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgdGFibGVOYXZpZ2F0aW9uXCIgdi1pZj1cIkNsaWVudHMudG90YWw+MFwiPlxuICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blRyYW5zcGFyZW50IGxlZnROYXZcIiA6Y2xhc3M9XCJ7ZGlzYWJsZWQ6IENsaWVudHMuY3VycmVudF9wYWdlPD0xfVwiXG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiQ2xpZW50cy5jdXJyZW50X3BhZ2U8PTFcIiBAY2xpY2s9XCJnZXRfY2xpZW50cyhDbGllbnRzLnByZXZfcGFnZV91cmwpXCI+XG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiQ2xpZW50cy5jdXJyZW50X3BhZ2U+PUNsaWVudHMubGFzdF9wYWdlXCI+e3tDbGllbnRzLmN1cnJlbnRfcGFnZX19XG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgL3t7Q2xpZW50cy5sYXN0X3BhZ2V9fTwvc3Bhbj5cbiAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5cbiAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICB7e0NsaWVudHMuY3VycmVudF9wYWdlfX0gL1xuICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicG9pbnRlclwiIDpkaXNhYmxlZD1cIkNsaWVudHMuY3VycmVudF9wYWdlPj1DbGllbnRzLmxhc3RfcGFnZVwiXG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldF9jbGllbnRzKENsaWVudHMubGFzdF9wYWdlX3VybClcIj5cbiAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICAgICAge3tDbGllbnRzLmxhc3RfcGFnZX19XG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blRyYW5zcGFyZW50IHJpZ2h0TmF2XCJcbiAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ZGlzYWJsZWQ6IENsaWVudHMuY3VycmVudF9wYWdlPj1DbGllbnRzLmxhc3RfcGFnZX1cIlxuICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIkNsaWVudHMuY3VycmVudF9wYWdlPj1DbGllbnRzLmxhc3RfcGFnZVwiXG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0X2NsaWVudHMoQ2xpZW50cy5uZXh0X3BhZ2VfdXJsKVwiPlxuICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICBcdCAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIFx0ICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+PC9kaXY+XG4gICAgICAgICAgICBcdCAgICA8L2Rpdj5cbiAgICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxicj5cbiAgICA8YnI+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5zY1xuPHNjcmlwdD5cbmltcG9ydCB7XG4gICAgICAgIG1hcEdldHRlcnNcbiAgICB9IGZyb20gXCJ2dWV4XCI7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczogWydmaWx0ZXJ0YWInXSxcbiAgICAgICAgbmFtZTogXCJEZXNpbmczZC1jbGllbnRcIixcbiAgICAgICAgY29tcG9uZW50czoge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNlYXJjaDonJyxcbiAgICAgICAgICAgICAgICBDbGllbnRzOicnLFxuICAgICAgICAgICAgICAgIGNoYXRfc3RhdHVzOiBbe1xuXHQgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuXHQgICAgICAgICAgICAgICAgICAgIHRleHQ6ICctJ1xuXHQgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ09uIEdvaW5nJyxcblx0ICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnT24gR29pbmcnXG5cdCAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnUmUgT3BlbicsXG5cdCAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1JlIE9wZW4nXG5cdCAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnQ29tcGxldGVkJyxcblx0ICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ29tcGxldGVkJ1xuXHQgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0luY29tcGxldGVkJyxcblx0ICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnSW5jb21wbGV0ZWQnXG5cdCAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBhc3luYyBmaWx0ZXJ0YWIobiwgbykge1xuICAgICAgICAgICAgICAgIGlmIChuID09ICdDbGllbnRzJykge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldF9jbGllbnRzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jIHNlYXJjaChuLG8pe1xuICAgICAgICAgICAgICAgIGlmIChuLnRyaW0oKS5sZW5ndGg9PTAgJiYgby50cmltKCkubGVuZ3RoPjApIHtcbiAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldF9jbGllbnRzKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICAgIGFzeW5jIGdldF9jbGllbnRzKHVybCA9IFwiL2FwaS9kZXNpZ25lcjNkL2NsaWVudHNcIikge1xuXHQgICAgICAgICAgICBsZXQgbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XG5cdCAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMuZDNfbWFpbl90YWIsXG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICBheGlvcy5nZXQodXJsLCB7XG5cdCAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSlcblx0ICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLkNsaWVudHMgPSByZXMuZGF0YS5kYXRhXG5cdCAgICAgICAgICAgICAgICAgICAgbG9hZGVyZC5oaWRlKClcblx0ICAgICAgICAgICAgICAgIH0pXG5cdCAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcblx0ICAgICAgICAgICAgICAgICAgICBsb2FkZXJkLmhpZGUoKVxuXHQgICAgICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jIHNldF9zdGF0dXModmwsIGNoYXQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgbGV0IGxvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMuZDNfbWFpbl90YWIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYXhpb3MucHV0KCcvYXBpL3Byb2plY3RDaGF0LycgKyBjaGF0LmlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHZsLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2xpZW50cy5kYXRhW2luZGV4XS5zdGF0dXMgPSByZXMuZGF0YS5kYXRhLnN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyZC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgbW91bnRlZCgpIHtcblxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBjcmVhdGVkKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcnM6IHtcblxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIH0sXG5cbiAgICB9XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJteXByb2ZpbGVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJteXByb2ZpbGUtdGFiXCIgcmVmPVwibWFpbnRhYlwiPlxuICAgIDxicj5cbiAgICA8YnI+XG4gICAgPG15c2hvd3Jvb21EZW1vICBAZGVtb19jaGFuZ2U9XCJpc2RlbW8gPT4gc2hvd19kZW1vPWlzZGVtb1wiIDpmZXRjaF9zaG93cm9vbT1cInNob3dfZGVtb1wiIC8+XG4gICAgPGRpdiB2LWlmPVwic2hvd19kZW1vIT10cnVlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcGItMiB1c2VyQWNjb3VudENvbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIG1iLTVcIj5NeSBHYWxsZXJ5PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJjb250YWluZXItZmx1aWQgYmctd2hpdGUgZ2FsbGVyeUNvbkYgcHktNSBtYi01XCIgQHN1Ym1pdC5wcmV2ZW50PVwic2F2ZV9wcm9maWxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHRleHQtcmlnaHQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bk5vcm1hbCBweC00XCIgdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cInNob3dfZGVtbz10cnVlXCI+PGkgY2xhc3M9XCJmYSBmYS1leWVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IFZpZXcgRGVtbzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjb250MTA4MFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjYW1lcmFCdG4gbWItMlwiIGZvcj1cImJ1c3NpbmVzc2xvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YnVzaW5lc3NfbG9nb30pYCB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwic2V0X2ltYWdlKCdpbWFnZXMvZHNsci1jYW1lcmEucG5nJylcIiBjbGFzcz1cImltZy1mbHVpZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBoaWRkZW4gaWQ9XCJidXNzaW5lc3Nsb2dvXCIgQGNoYW5nZT1cImNob29zZV9sb2dvXCIgdi12YWxpZGF0ZT1cIidpbWFnZSdcIiBkYXRhLXZ2LWFzPVwiYnVzaW5lc3MgbG9nb1wiIGRhdGEtdnYtbmFtZT1cImJ1c2luZXNzX2xvZ29fdXBsb2FkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dEJvbGQ2MDAgbWItMVwiPlVwbG9hZCBCdXNpbmVzcyBpbWFnZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udDE0IHRleHRMaWdodEdyYXkgdGV4dEJvbGQ2MDBcIj5VcGxvYWQgWW91ciBCdXNpbmVzcyBsb2dvIG9yIHByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmU8YnI+U2l6ZTogMTgwIFggMTIwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdidXNpbmVzc19sb2dvX3VwbG9hZCcpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPnt7IHZlcnJvcnMuZmlyc3QoJ2J1c2luZXNzX2xvZ29fdXBsb2FkJykgfX0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGJpZ2dlclRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29tcGFueSBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvZmlsZS5iYW5uZXJfdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFubmVyX3RpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVwiQ29tcGFueSBOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdiYW5uZXJfdGl0bGUnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3sgdmVycm9ycy5maXJzdCgnYmFubmVyX3RpdGxlJykgfX0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBidXNpbmVzcyBiaW8gaGVyZS4uIFwiIHYtbW9kZWw9XCJwcm9maWxlLmJhbm5lcl9kZXNjcmlwdGlvblwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgbmFtZT1cImJhbm5lcl9kZXNjcmlwdGlvblwiIGRhdGEtdnYtYXM9XCJiYW5uZXIgZGVzY3JpcHRpb25cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnYmFubmVyX2Rlc2NyaXB0aW9uJylcIiBjbGFzcz1cImVycm9ybXNnXCI+e3sgdmVycm9ycy5maXJzdCgnYmFubmVyX2Rlc2NyaXB0aW9uJykgfX0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gIDx1bCBjbGFzcz1cImxpc3QtdW5zdHlsZWQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0R3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibXgtMVwiPjxpIGNsYXNzPVwiZmEgZmEtc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJteC0xXCI+PGkgY2xhc3M9XCJmYSBmYS1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm14LTFcIj48aSBjbGFzcz1cImZhIGZhLXN0YXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibXgtMVwiPjxpIGNsYXNzPVwiZmEgZmEtc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJteC0xXCI+PGkgY2xhc3M9XCJmYSBmYS1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0yIHRleHRCb2xkNjAwXCI+TWFpbiBJbWFnZXMgR2FsbGVyeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dExpZ2h0R3JheSB0ZXh0Qm9sZDYwMFwiPlVwbG9hZGUgeW91ciBmYXZvcml0ZSBQcm9qZWN0cy4gd2lsbCBhcHBlYXIgYXMgc2xpZGVyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnlTbGlkZXJVcGxvYWQgdGV4dC1jZW50ZXJcIiByZWY9XCJnYWxsZXJ5X3VwbG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiBjbGFzcz1cImNhbWVyYUJ0biBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvZHNsci1jYW1lcmEucG5nXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EcmFnICYgRHJvcCBvciBjbGljayB0byB1cGxvYWQgZnJvbSB5b3VyIGNvbXB1dGVyIGZpbGVzPGJyPlNpemU6IDg4MCB4IDUwMDwvcD4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGVEcm9wem9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2VkPVwiZ2V0X2ZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZS5zeW5jPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWF4PVwiMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppY29uPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnVwbG9hZHRpdGxlPVwiJ0RyYWcgJiBEcm9wIG9yIGNsaWNrIHRvIHVwbG9hZCBmcm9tIHlvdXIgY29tcHV0ZXIgZmlsZXMgPGJyPiBTaXplOiA4ODAgeCA1MDAnXCIgOmZpbGVuYW1lPVwiJ2dhbGxlcmllcydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWxlVmFsaWRhdGlvbj1cIidpbWFnZXxtaW1lczpqcGVnLHBuZyxqcGcnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInVwbG9hZGVkSXRlbSBsaXN0LXVuc3R5bGVkIGQtZmxleCBmbGV4LXdyYXBcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibXItMiBtYi0yXCIgdi1mb3I9XCIoZmlsZSwgaW5kZXgpIGluIGdhbGxlcnlfZmlsZXNcIiA6a2V5PVwicmFuX2lueCtpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwic2V0X2ltYWdlKGZpbGUuZ2FsbGVyeV9pbWFnZSlcIiBoZWlnaHQ9XCI1MFwiIHdpZHRoPVwiNTBcIiBjbGFzcz1cInRodW1iXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsXCIgQGNsaWNrPVwicmVtb3ZlX2dhbGxlcnlfZmlsZShmaWxlLmlkLCBpbmRleCk7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4IDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cImdhbGxlcnlfdXBsb2FkX2Vycm9yXCIgY2xhc3M9XCJlcnJvcm1zZ1wiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBnYWxsZXJ5X3VwbG9hZF9lcnJvclwiIDprZXk9XCJpbmRleFwiPnt7aXRlbX19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHRleHQtcmlnaHQgbXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG5Ob3JtYWwgcHgtNCByb3VuZGVkXCI+PGltZyA6c3JjPVwic2V0X2ltYWdlKCdpbWFnZXMvY2hhdC5wbmcnKVwiIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCI+IENoYXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS00XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG5TdWNjZXNcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7XG4gICAgICAgIG1hcEdldHRlcnNcbiAgICB9IGZyb20gXCJ2dWV4XCI7XG4gICAgaW1wb3J0IG15c2hvd3Jvb21EZW1vIGZyb20gJy4uL2NvbW1vbi9TaG9wRGVtby52dWUnXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczogWydmaWx0ZXJ0YWInXSxcbiAgICAgICAgbmFtZTogXCJEZXNpZ25lcjNkLXByb2ZpbGVcIixcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgbXlzaG93cm9vbURlbW9cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2hvd19kZW1vOmZhbHNlLFxuICAgICAgICAgICAgICAgIHByb2ZpbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYnVzaW5lc3NfbG9nb191cGxvYWQ6ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBidXNpbmVzc19sb2dvOiBudWxsLFxuICAgICAgICAgICAgICAgIGdhbGxlcnlfZmlsZXM6IFtdLFxuICAgICAgICAgICAgICAgIGdhbGxlcnlfdXBsb2FkX2Vycm9yOicnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBhc3luYyBmaWx0ZXJ0YWIobiwgbykge1xuICAgICAgICAgICAgICAgIGlmIChuID09ICdQcm9maWxlJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbG9hZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5tYWludGFiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93X2RlbW89ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRfcHJvZmlsZSgpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgYXN5bmMgZ2V0X3Byb2ZpbGUoKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9zaG9wX3Byb2ZpbGVcIilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0aWYocmVzLmRhdGEuZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGUgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idXNpbmVzc19sb2dvID0gdGhpcy5zZXRfaW1hZ2UodGhpcy5wcm9maWxlLmJ1c2luZXNzX2xvZ28pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbGxlcnlfZmlsZXMgPSByZXMuZGF0YS5kYXRhLmdhbGxlcmllc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wcm9maWxlLmdhbGxlcmllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnByb2ZpbGUuYmVuZWZpdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wcm9maWxlLmJlbmVmaXRfaWRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucHJvZmlsZS5jcmVhdGVkX2F0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucHJvZmlsZS51cGRhdGVkX2F0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucHJvZmlsZS51c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FsbGVyeV91cGxvYWRfZXJyb3I9Jyc7XG5cdFx0XHRcdFx0XHR9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYXN5bmMgZ2V0X2ZpbGUoZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgdGhpcy5nYWxsZXJ5X3VwbG9hZF9lcnJvcj0nJztcbiAgICAgICAgICAgICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmlsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBmaWxlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgnZ2FsbGVyaWVzW10nLCBlbGVtZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbG9hZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLmdhbGxlcnlfdXBsb2FkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvc2hvcF9wcm9maWxlL3VwbG9hZF9nYWxsZXJ5JywgZmQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbGxlcnlfZmlsZXMgPSByZXMuZGF0YS5kYXRhLmdhbGxlcmllcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbGxlcnlfdXBsb2FkX2Vycm9yID0gcmVzLmRhdGEuZGF0YS5lcnJvcl9tZXNzYWdlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5tZXNzYWdlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChlcnIucmVzcG9uc2UuZGF0YSkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UoZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jIGNob29zZV9sb2dvKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZS5idXNpbmVzc19sb2dvX3VwbG9hZCA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1c2luZXNzX2xvZ28gPSB0aGlzLmNyZWF0ZVRodW1iVVJMKHRoaXMucHJvZmlsZS5idXNpbmVzc19sb2dvX3VwbG9hZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlVGh1bWJVUkwoZmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jIHNhdmVfcHJvZmlsZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKGFzeW5jICh2YWxpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9maWxlKS5tYXAoZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGUsIHRoaXMucHJvZmlsZVtlXSA9PSBudWxsID8gJycgOiB0aGlzLnByb2ZpbGVbZV0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9hZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMubWFpbnRhYixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9zaG9wX3Byb2ZpbGUnLCBmZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVzaW5lc3NfbG9nbyA9IHRoaXMuc2V0X2ltYWdlKHRoaXMucHJvZmlsZS5idXNpbmVzc19sb2dvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYWxsZXJ5X2ZpbGVzID0gcmVzLmRhdGEuZGF0YS5nYWxsZXJpZXNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucHJvZmlsZS5nYWxsZXJpZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wcm9maWxlLmJlbmVmaXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucHJvZmlsZS5iZW5lZml0X2lkcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnByb2ZpbGUuY3JlYXRlZF9hdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnByb2ZpbGUudXBkYXRlZF9hdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnByb2ZpbGUudXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChlcnIucmVzcG9uc2UuZGF0YSkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldEVycm9yc0Zyb21SZXNwb25zZShlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jIHJlbW92ZV9nYWxsZXJ5X2ZpbGUoaWQsIHgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGh0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0FyZSBZb3UgU3VyZSBZb3UgV2FudCBUbyBEZWxldGU/JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJHYWxsZXJ5J3MgSW1hZ2VzIFdpbGwgQmUgRGVsZXRlZC4gWW91IFdvbid0IEJlIEFibGUgVG8gUmV2ZXJ0IFRoaXMhXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyNkMzMnLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgRGVsZXRlIEl0ISdcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKFwiL2FwaS9zaG9wX3Byb2ZpbGUvXCIgKyBpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodC5nYWxsZXJ5X2ZpbGVzLnNwbGljZSh4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIG1vdW50ZWQoKSB7fSxcbiAgICAgICAgYXN5bmMgY3JlYXRlZCgpIHt9LFxuICAgICAgICBmaWx0ZXJzOiB7fSxcbiAgICAgICAgY29tcHV0ZWQ6IHt9LFxuXG4gICAgfVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIGlkPVwibXlTZXR0aW5nc1wiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cIm15U2V0dGluZ3MtdGFiXCI+XG4gICAgPGJyPlxuICAgIDxicj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHBiLTFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIiBtYi0zXCI+TXkgU2V0dGluZ3M8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxicj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbnQxMDgwIGJnLXdoaXRlIHZlbkFjY0luZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG1iLTVcIj5cbiAgICAgICAgICAgIDxoMz5CdXNpbmVzcyBJbmZvcm1hdGlvbjwvaDM+XG4gICAgICAgICAgICA8cD5Ob3RpY2UtIHlvdXIgY2hhbmdlcyB3aWxsIGJlIHVwZGF0ZWQgYWZ0ZXIgYSBtYWlsIGFwcHJvdmFsIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInVwZGF0ZUluZm8oKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBwci1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygnbGFzdF9uYW1lJykgLCdoYXZlVmFsdWUnOiBmb3JtLmxhc3RfbmFtZSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmb3JtLmxhc3RfbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkxhc3QgTmFtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJsYXN0X25hbWVcIiBjbGFzcz1cImVycm9ybXNnXCI+PC9oYXMtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IHBsLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdsYXN0X25hbWUnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0ubGFzdF9uYW1lIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImZvcm0ubGFzdF9uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+TGFzdCBOYW1lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImxhc3RfbmFtZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgcHItbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ2VtYWlsJykgLCdoYXZlVmFsdWUnOiBmb3JtLmVtYWlsIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+RW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiZW1haWxcIiBjbGFzcz1cImVycm9ybXNnXCI+PC9oYXMtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IHBsLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCIgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdjb3VudHJ5X2NvZGUnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0uY291bnRyeV9jb2RlIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VsZWN0XCI+e3tmb3JtLmNvdW50cnlfY29kZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIHctMTAwXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdERyb3BEb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50cnlMaXN0ICBAY2xpY2tlZD1cIm9uQ291bnRyeUNoYW5nZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImNvdW50cnlfY29kZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdwaG9uZV9udW1iZXInKSAsJ2hhdmVWYWx1ZSc6IGZvcm0ucGhvbmVfbnVtYmVyIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZm9ybS5waG9uZV9udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5QaG9uZSBOdW1iZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwicGhvbmVfbnVtYmVyXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBwci1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygnY29tcGFueV9uYW1lJykgLCdoYXZlVmFsdWUnOiBmb3JtLmNvbXBhbnlfbmFtZSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS5jb21wYW55X25hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkNvbXBhbnkgTmFtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJjb21wYW55X25hbWVcIiBjbGFzcz1cImVycm9ybXNnXCI+PC9oYXMtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IHBsLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdjb21wYW55X3Bob25lJykgLCdoYXZlVmFsdWUnOiBmb3JtLmNvbXBhbnlfcGhvbmUgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImZvcm0uY29tcGFueV9waG9uZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+Q29tcGFueSBQaG9uZSBOdW1iZXIgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPihvcHRpb25hbCk8L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImNvbXBhbnlfcGhvbmVcIiBjbGFzcz1cImVycm9ybXNnXCI+PC9oYXMtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IHByLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdjb21wYW55X2FkZHJlc3MnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0uY29tcGFueV9hZGRyZXNzIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJmb3JtLmNvbXBhbnlfYWRkcmVzc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+Q29tcGFueSBBZGRyZXNzIDxzcGFuIGNsYXNzPVwib3B0aW9uYWxcIj4ob3B0aW9uYWwpPC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJjb21wYW55X2FkZHJlc3NcIiBjbGFzcz1cImVycm9ybXNnXCI+PC9oYXMtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IHBsLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpICwnaGF2ZVZhbHVlJzogZm9ybS5wYXNzd29yZCB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlBhc3N3b3JkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2F2ZVwiIGNsYXNzPVwiYnRuU3VjY2VzIHB4LTVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgPGJyPlxuICAgIDxicj5cbiAgICA8YnI+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ291bnRyeUxpc3QgZnJvbSAnLi4vLi4vQ291bnRyeS1saXN0LnZ1ZSdcbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSBcInZ1ZXhcIjtcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbJ2ZpbHRlcnRhYiddLFxuICAgICAgICBuYW1lOiBcIkRlc2lnbmVyM2Qtc2V0dGluZ1wiLFxuICAgICAgICBjb21wb25lbnRzOiB7XG5Db3VudHJ5TGlzdFxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeV9jb2RlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGFueV9hZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGFueV9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGFueV9waG9uZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdXBmb3I6ICdpbmZvJyxcbiAgICAgICAgICAgICAgICB9KSxcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBhc3luYyBmaWx0ZXJ0YWIobiwgbykge1xuICAgICAgICAgICAgICAgIGlmIChuID09ICdTZXR0aW5ncycpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRfdXNlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICBvbkNvdW50cnlDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY291bnRyeV9jb2RlID0gdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgZ2V0X3VzZXIoKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL3Byb2ZpbGVcIilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZkYXRhID0gZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZzZF9pZCA9IGZkYXRhLnZzZF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgZmRhdGEudXBmb3IgPSAnaW5mbydcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5maWxsKGZkYXRhKSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc3luYyB1cGRhdGVJbmZvKCkge1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5mb3JtLnBhc3N3b3JkID09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhc3N3b3JkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wdXQoJ2FwaS9wcm9maWxlJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmZGF0YSA9IGRhdGEuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBmZGF0YS51cGZvciA9ICdpbmZvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmZpbGwoZmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRlbWl0KCdnZXRfcHJvZmlsZScsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwic2V0RXJyb3JzXCIsIHt9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgY3JlYXRlZCgpIHtcblxuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJzOiB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoW1wiZXJyb3JzXCJdKSxcbiAgICAgICAgfSxcblxuICAgIH1cbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbi5lcnJvcm1zZ3tcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHB4LTAgc3RlcHNCYXJcIj5cbiAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnMgY3VzdG9tVGFiIGp1c3RpZnktY29udGVudC1jZW50ZXIgYm9yZGVyLXRvcFwiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCIgcm9sZT1cInByZXNlbnRhdGlvblwiIEBjbGljaz1cInRhYmZvcj0nU2V0dGluZ3MnXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIHJvdW5kZWQtMCBhY3RpdmVcIiBpZD1cIm15U2V0dGluZ3MtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI215U2V0dGluZ3NcIiByb2xlPVwidGFiXCJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJteVNldHRpbmdzXCIgYXJpYS1zZWxlY3RlZD1cInRydWVcIj5NeSBTZXR0aW5nczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiByb2xlPVwicHJlc2VudGF0aW9uXCIgQGNsaWNrPVwidGFiZm9yPSdQcm9maWxlJ1wiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayByb3VuZGVkLTBcIiBpZD1cIm15cHJvZmlsZS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjbXlwcm9maWxlXCIgcm9sZT1cInRhYlwiXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibXlwcm9maWxlXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+TXkgUHJvZmlsZTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiByb2xlPVwicHJlc2VudGF0aW9uXCIgQGNsaWNrPVwidGFiZm9yPSdDbGllbnRzJ1wiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayByb3VuZGVkLTBcIiBpZD1cIm15Y2xpZW50cy10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjbXljbGllbnRzXCIgcm9sZT1cInRhYlwiXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibXljbGllbnRzXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+TXkgQ2xpZW50czwvYT5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudCBiZ0dyYXlcIj5cbiAgICAgICAgPFNldHRpbmdzIDpmaWx0ZXJ0YWIuc3luYz1cInRhYmZvclwiIC8+XG4gICAgICAgIDxQcm9maWxlIDpmaWx0ZXJ0YWIuc3luYz1cInRhYmZvclwiIC8+XG4gICAgICAgICAgICA8Q2xpZW50cyA6ZmlsdGVydGFiLnN5bmM9XCJ0YWJmb3JcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgICAgICBpbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncy52dWUnXG4gICAgICAgIGltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZS52dWUnXG4gICAgICAgIGltcG9ydCBDbGllbnRzIGZyb20gJy4vQ2xpZW50cy52dWUnXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgICAgIG5hbWU6IFwiRGVzaWduZXIzZC1hY2NvdW50XCIsXG4gICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgUHJvZmlsZSxcbiAgICAgICAgICAgICAgICBDbGllbnRzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0YWJmb3I6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2F0Y2g6IHt9LFxuICAgICAgICAgICAgbWV0aG9kczoge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgbW91bnRlZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmZvciA9IFwiU2V0dGluZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgJCgnYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScpLm9uKCdzaG93bi5icy50YWInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRodCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh0LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgY3JlYXRlZCgpIHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbHRlcnM6IHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBpZDogXCJteWNsaWVudHNcIixcbiAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcIm15Y2xpZW50cy10YWJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgcGItMlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTIgdGV4dC1jZW50ZXIgbWItNVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDJcIiwge30sIFtfdm0uX3YoXCJNeSBDbGllbnRzXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLkNsaWVudHNcbiAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJmb250MTQgdGV4dExpZ2h0R3JheVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLkNsaWVudHMudG90YWwpICsgXCIgQ2xpZW50c1wiKSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbWItNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02IG1sLWF1dG9cIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0U2VhcmNoIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWwtYXV0b1wiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRfY2xpZW50cygpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMTAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIGNsaWVudC4uLlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VhcmNoIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcImQzX21haW5fdGFiXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpdlRhYmxlIG15Y2xpZW50c1RhYmxlIHZsZC1wYXJlbnRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibXljbGllbnRzVGFibGVBY2NvcmRcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uQ2xpZW50cy5kYXRhXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0Ym9keSB3LTEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLkNsaWVudHMuZGF0YSwgZnVuY3Rpb24gKENsaWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInRiXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRyIGQtZmxleCB3aGl0ZVJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZCBvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50LnByb2plY3QuY29udHJhY3Rvci52c2RfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZCB0d29cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGllbnQucHJvamVjdC5jbGllbnQuZmlyc3RfbmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50LnByb2plY3QuY2xpZW50Lmxhc3RfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGQgdGhyZWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsaWVudC5wcm9qZWN0LnRlbXBsYXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mbG9vcl9wbGFuX3RlbXBsYXRlcy5mbG9vcl9wbGFuc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mbG9vcl9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGllbnQucHJvamVjdC50ZW1wbGF0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmxvb3JfcGxhbl90ZW1wbGF0ZXMubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZCBmb3VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsaWVudC5wcm9qZWN0LnRlbXBsYXRlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImF2YXRhclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnNldF9pbWFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50LnByb2plY3QudGVtcGxhdGVzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRkIGZpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKENsaWVudC5zdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZCBzaXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuVHJhbnNwYXJlbnQgdmlld0FjY0J0biBjb2xsYXBzZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI29hXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJvYVwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZXllXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBWaWV3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYWJcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm93IGFjY29yZGlvblJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tQWNjb3JkaW9uIGNvbnRhaW5lci1mbHVpZCBjb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJvYVwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcIm9hXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1wYXJlbnRcIjogXCIjbXljbGllbnRzVGFibGVBY2NvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgYm9yZGVyLWJvdHRvbSBweS00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGltZ1dycHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsaWVudC5yb29tX2xhdGVzdF9jaGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogQ2xpZW50LnJvb21fbGF0ZXN0X2NoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHRCb2xkNjAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTdGFydCBEYXRlOlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKENsaWVudC5jaGF0X3N0YXJ0X2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0Qm9sZDYwMCBwci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3RhdHVzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkRyb3Bkb3duXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZTogQ2xpZW50LnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RzOiBfdm0uY2hhdF9zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6c2VsZWN0ZWRWYWx1ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnNlbGVjdGVkLXZhbHVlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcHNlbGVjdGVkOiAoZHZhbCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldF9zdGF0dXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHZhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtMiB0ZXh0LXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG5UcmFuc3BhcmVudCB0ZXh0Qm9sZDYwMCBmb250MTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2hhdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vbWlkOiBDbGllbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcImltYWdlcy9jaGF0LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2hhdFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTFcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5DbGllbnRzLmRhdGFcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uQ2xpZW50cy50b3RhbCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHRhYmxlTmF2aWdhdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0blRyYW5zcGFyZW50IGxlZnROYXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLkNsaWVudHMuY3VycmVudF9wYWdlIDw9IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5DbGllbnRzLmN1cnJlbnRfcGFnZSA8PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldF9jbGllbnRzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uQ2xpZW50cy5wcmV2X3BhZ2VfdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtYW5nbGUtbGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5DbGllbnRzLmN1cnJlbnRfcGFnZSA+PSBfdm0uQ2xpZW50cy5sYXN0X3BhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLkNsaWVudHMuY3VycmVudF9wYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXFx0ICAgICAgICAgICAgICAgICAgICAvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLkNsaWVudHMubGFzdF9wYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcXHQgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5DbGllbnRzLmN1cnJlbnRfcGFnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAvXFxuICAgICAgICAgICAgXFx0ICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLkNsaWVudHMuY3VycmVudF9wYWdlID49XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uQ2xpZW50cy5sYXN0X3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0X2NsaWVudHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5DbGllbnRzLmxhc3RfcGFnZV91cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXFx0ICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5DbGllbnRzLmxhc3RfcGFnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcXHQgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0blRyYW5zcGFyZW50IHJpZ2h0TmF2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uQ2xpZW50cy5jdXJyZW50X3BhZ2UgPj1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5DbGllbnRzLmxhc3RfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5DbGllbnRzLmN1cnJlbnRfcGFnZSA+PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLkNsaWVudHMubGFzdF9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldF9jbGllbnRzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uQ2xpZW50cy5uZXh0X3BhZ2VfdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtYW5nbGUtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0blRyYW5zcGFyZW50IHNlYXJjaEJ0blwiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBzcmM6IFwiaW1hZ2VzL2Fycm93LXBvaW50LXRvLXJpZ2h0LnBuZ1wiLFxuICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTZcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhlYWQgdy0xMDBcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRyIGQtZmxleCB3aGl0ZVJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZCBvbmVcIiB9LCBbX3ZtLl92KFwiSUQgU2hvd3Jvb21cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZCB0d29cIiB9LCBbX3ZtLl92KFwiQ3VzdG9tZXJcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZCB0aHJlZVwiIH0sIFtfdm0uX3YoXCJQcm9qZWN0c1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRkIGZvdXJcIiB9LCBbX3ZtLl92KFwiVGVtcGxhdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZCBmaXZlXCIgfSwgW192bS5fdihcIlN0YXR1c1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRkIHNpeFwiIH0sIFtfdm0uX3YoXCJBY3Rpb25cIildKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHJlZjogXCJtYWludGFiXCIsXG4gICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBpZDogXCJteXByb2ZpbGVcIixcbiAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcIm15cHJvZmlsZS10YWJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJteXNob3dyb29tRGVtb1wiLCB7XG4gICAgICAgIGF0dHJzOiB7IGZldGNoX3Nob3dyb29tOiBfdm0uc2hvd19kZW1vIH0sXG4gICAgICAgIG9uOiB7IGRlbW9fY2hhbmdlOiAoaXNkZW1vKSA9PiAoX3ZtLnNob3dfZGVtbyA9IGlzZGVtbykgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5zaG93X2RlbW8gIT0gdHJ1ZVxuICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWQgYmctd2hpdGUgZ2FsbGVyeUNvbkYgcHktNSBtYi01XCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNhdmVfcHJvZmlsZS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMiB0ZXh0LXJpZ2h0IG1iLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5Ob3JtYWwgcHgtNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93X2RlbW8gPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZXllXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFZpZXcgRGVtb1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgY29udDEwODBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FtZXJhQnRuIG1iLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtfdm0uYnVzaW5lc3NfbG9nb30pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImJ1c3NpbmVzc2xvZ29cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5zZXRfaW1hZ2UoXCJpbWFnZXMvZHNsci1jYW1lcmEucG5nXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ2ltYWdlJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJ1c3NpbmVzc2xvZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcImJ1c2luZXNzIGxvZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiYnVzaW5lc3NfbG9nb191cGxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmNob29zZV9sb2dvIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0Qm9sZDYwMCBtYi0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVXBsb2FkIEJ1c2luZXNzIGltYWdlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiYnVzaW5lc3NfbG9nb191cGxvYWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcImJ1c2luZXNzX2xvZ29fdXBsb2FkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnByb2ZpbGUuYmFubmVyX3RpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9maWxlLmJhbm5lcl90aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIGJpZ2dlclRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDb21wYW55IE5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImJhbm5lcl90aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkNvbXBhbnkgTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnByb2ZpbGUuYmFubmVyX3RpdGxlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFubmVyX3RpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiYmFubmVyX3RpdGxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJiYW5uZXJfdGl0bGVcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnByb2ZpbGUuYmFubmVyX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9maWxlLmJhbm5lcl9kZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiV3JpdGUgeW91ciBidXNpbmVzcyBiaW8gaGVyZS4uIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFubmVyX2Rlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiYmFubmVyIGRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucHJvZmlsZS5iYW5uZXJfZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYW5uZXJfZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJiYW5uZXJfZGVzY3JpcHRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiYmFubmVyX2Rlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0yIHRleHRCb2xkNjAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTWFpbiBJbWFnZXMgR2FsbGVyeVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRMaWdodEdyYXkgdGV4dEJvbGQ2MDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiVXBsb2FkZSB5b3VyIGZhdm9yaXRlIFByb2plY3RzLiB3aWxsIGFwcGVhciBhcyBzbGlkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImdhbGxlcnlfdXBsb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbGxlcnlTbGlkZXJVcGxvYWQgdGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiRmlsZURyb3B6b25lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbml0aWFsVmFsdWUuc3luY1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWR0aXRsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEcmFnICYgRHJvcCBvciBjbGljayB0byB1cGxvYWQgZnJvbSB5b3VyIGNvbXB1dGVyIGZpbGVzIDxicj4gU2l6ZTogODgwIHggNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZTogXCJnYWxsZXJpZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVWYWxpZGF0aW9uOiBcImltYWdlfG1pbWVzOmpwZWcscG5nLGpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2hhbmdlZDogX3ZtLmdldF9maWxlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBsb2FkZWRJdGVtIGxpc3QtdW5zdHlsZWQgZC1mbGV4IGZsZXgtd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdhbGxlcnlfZmlsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGZpbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogX3ZtLnJhbl9pbnggKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yIG1iLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGh1bWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5zZXRfaW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmdhbGxlcnlfaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVfZ2FsbGVyeV9maWxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4IFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nYWxsZXJ5X3VwbG9hZF9lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2FsbGVyeV91cGxvYWRfZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTIgdGV4dC1yaWdodCBteS00XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuTm9ybWFsIHB4LTQgcm91bmRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnNldF9pbWFnZShcImltYWdlcy9jaGF0LnBuZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIENoYXRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBwYi0yIHVzZXJBY2NvdW50Q29udFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbWItNVwiIH0sIFtfdm0uX3YoXCJNeSBHYWxsZXJ5XCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udDE0IHRleHRMaWdodEdyYXkgdGV4dEJvbGQ2MDBcIiB9LCBbXG4gICAgICBfdm0uX3YoXG4gICAgICAgIFwiVXBsb2FkIFlvdXIgQnVzaW5lc3MgbG9nbyBvciBwcm9maWxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZVwiXG4gICAgICApLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIlNpemU6IDE4MCBYIDEyMFwiKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG15LTRcIiB9LCBbXG4gICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0blN1Y2Nlc1wiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJTYXZlXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgaWQ6IFwibXlTZXR0aW5nc1wiLFxuICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibXlTZXR0aW5ncy10YWJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgY29udDEwODAgYmctd2hpdGUgdmVuQWNjSW5mb1wiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlSW5mbygpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTYgcHItbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJsYXN0X25hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5sYXN0X25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5sYXN0X25hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibGFzdF9uYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCJMYXN0IE5hbWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImxhc3RfbmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNiBwbC1tZC01XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImxhc3RfbmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmxhc3RfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmxhc3RfbmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJsYXN0X25hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIkxhc3QgTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwibGFzdF9uYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02IHByLW1kLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1haWxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNiBwbC1tZC01XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImNvdW50cnlfY29kZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLmNvdW50cnlfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHNlbGVjdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5mb3JtLmNvdW50cnlfY29kZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWwgdy0xMDBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNlbGVjdERyb3BEb3duXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkNvdW50cnlMaXN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2tlZDogX3ZtLm9uQ291bnRyeUNoYW5nZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJjb3VudHJ5X2NvZGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicGhvbmVfbnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZvcm0ucGhvbmVfbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGhvbmVfbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGhvbmVfbnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5waG9uZV9udW1iZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwaG9uZV9udW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlBob25lIE51bWJlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJwaG9uZV9udW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTYgcHItbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJjb21wYW55X25hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5jb21wYW55X25hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jb21wYW55X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb21wYW55X25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5jb21wYW55X25hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wYW55X25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNvbXBhbnkgTmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJjb21wYW55X25hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTYgcGwtbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJjb21wYW55X3Bob25lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZvcm0uY29tcGFueV9waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbXBhbnlfcGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb21wYW55X3Bob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uY29tcGFueV9waG9uZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBhbnlfcGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImNvbXBhbnlfcGhvbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTYgcHItbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJjb21wYW55X2FkZHJlc3NcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5jb21wYW55X2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jb21wYW55X2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb21wYW55X2FkZHJlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5jb21wYW55X2FkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wYW55X2FkZHJlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImNvbXBhbnlfYWRkcmVzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNiBwbC1tZC01XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInBhc3N3b3JkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCJQYXNzd29yZFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgcGItMVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMiB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sIFtfdm0uX3YoXCJNeSBTZXR0aW5nc1wiKV0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbWItNVwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkJ1c2luZXNzIEluZm9ybWF0aW9uXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgX3ZtLl92KFwiTm90aWNlLSB5b3VyIGNoYW5nZXMgd2lsbCBiZSB1cGRhdGVkIGFmdGVyIGEgbWFpbCBhcHByb3ZhbCBcIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgIF92bS5fdihcIkNvbXBhbnkgUGhvbmUgTnVtYmVyIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm9wdGlvbmFsXCIgfSwgW192bS5fdihcIihvcHRpb25hbClcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgIF92bS5fdihcIkNvbXBhbnkgQWRkcmVzcyBcIiksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25hbFwiIH0sIFtfdm0uX3YoXCIob3B0aW9uYWwpXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTIgdGV4dC1jZW50ZXIgbWItNFwiIH0sIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJidG5TdWNjZXMgcHgtNVwiLFxuICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCJTYXZlXCIgfSxcbiAgICAgIH0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBweC0wIHN0ZXBzQmFyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJ1bFwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYgbmF2LXRhYnMgY3VzdG9tVGFiIGp1c3RpZnktY29udGVudC1jZW50ZXIgYm9yZGVyLXRvcFwiLFxuICAgICAgICBhdHRyczogeyByb2xlOiBcInRhYmxpc3RcIiB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIsXG4gICAgICAgICAgICBhdHRyczogeyByb2xlOiBcInByZXNlbnRhdGlvblwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS50YWJmb3IgPSBcIlNldHRpbmdzXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGluayByb3VuZGVkLTAgYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm15U2V0dGluZ3MtdGFiXCIsXG4gICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIiNteVNldHRpbmdzXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwibXlTZXR0aW5nc1wiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJNeSBTZXR0aW5nc1wiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwicHJlc2VudGF0aW9uXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnRhYmZvciA9IFwiUHJvZmlsZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmsgcm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm15cHJvZmlsZS10YWJcIixcbiAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI215cHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcIm15cHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiTXkgUHJvZmlsZVwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwicHJlc2VudGF0aW9uXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnRhYmZvciA9IFwiQ2xpZW50c1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmsgcm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm15Y2xpZW50cy10YWJcIixcbiAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI215Y2xpZW50c1wiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcIm15Y2xpZW50c1wiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiTXkgQ2xpZW50c1wiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50IGJnR3JheVwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiU2V0dGluZ3NcIiwge1xuICAgICAgICAgIGF0dHJzOiB7IGZpbHRlcnRhYjogX3ZtLnRhYmZvciB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcInVwZGF0ZTpmaWx0ZXJ0YWJcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0udGFiZm9yID0gJGV2ZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcIlByb2ZpbGVcIiwge1xuICAgICAgICAgIGF0dHJzOiB7IGZpbHRlcnRhYjogX3ZtLnRhYmZvciB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcInVwZGF0ZTpmaWx0ZXJ0YWJcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0udGFiZm9yID0gJGV2ZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcIkNsaWVudHNcIiwge1xuICAgICAgICAgIGF0dHJzOiB7IGZpbHRlcnRhYjogX3ZtLnRhYmZvciB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcInVwZGF0ZTpmaWx0ZXJ0YWJcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0udGFiZm9yID0gJGV2ZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmVycm9ybXNnW2RhdGEtdi03N2EwZWEzOV17XFxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03N2EwZWEzOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03N2EwZWEzOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzdhMGVhMzkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DbGllbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDRjMTdlMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DbGllbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2xpZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU0NGMxN2UyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU0NGMxN2UyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU0NGMxN2UyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DbGllbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDRjMTdlMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NDRjMTdlMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9EZXNpZ25lcjNkL0NsaWVudHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DbGllbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DbGllbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2xpZW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQ0YzE3ZTImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4MzI2MzAzJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjgzMjYzMDMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjgzMjYzMDMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjgzMjYzMDMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4MzI2MzAzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY4MzI2MzAzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L0Rlc2lnbmVyM2QvUHJvZmlsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ODMyNjMwMyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3YTBlYTM5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc3YTBlYTM5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3N2EwZWEzOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc3YTBlYTM5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc3YTBlYTM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc3YTBlYTM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzdhMGVhMzkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzdhMGVhMzknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9TZXR0aW5ncy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03N2EwZWEzOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3YTBlYTM5JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTVkYjBlNGMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE1ZGIwZTRjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE1ZGIwZTRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE1ZGIwZTRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTVkYjBlNGMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTVkYjBlNGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvRGVzaWduZXIzZC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNWRiMGU0YyZcIiJdLCJzb3VyY2VSb290IjoiIn0=