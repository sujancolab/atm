(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/User/UserInfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/User/UserInfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Country_list_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Country-list.vue */ "./resources/js/components/Country-list.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "User-info",
  props: ['filtertab'],
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
        upfor: 'info'
      }),
      shipping_address: new Form({
        upfor: 'shipping',
        street: '',
        city: '',
        state: '',
        zip_code: '',
        apartment: ''
      })
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["errors"])),
  mounted: function mounted() {
    this.$store.commit("setErrors", {});
  },
  created: function created() {},
  watch: {
    filtertab: function filtertab(n, o) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (n == 'Information') {
                  axios.get("api/profile").then(function (_ref) {
                    var data = _ref.data;
                    var fdata = data.data;
                    fdata.upfor = 'info';

                    _this.form.fill(fdata);

                    if (fdata.shipping_address) {
                      fdata.shipping_address.upfor = 'shipping';

                      _this.shipping_address.fill(fdata.shipping_address);
                    }
                  });
                }

              case 1:
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
    updateInfo: function updateInfo(n) {
      var _this2 = this;

      if (n == 'shipping') {
        this.shipping_address.put('api/profile').then(function (data) {
          var fdata = data.data.data;
          fdata.upfor = 'shipping';

          _this2.shipping_address.fill(fdata);

          Toast.fire({
            icon: 'success',
            title: data.data.message
          });
        })["catch"](function (data) {});
      } else {
        this.form.put('api/profile').then(function (data) {
          var fdata = data.data.data;
          fdata.upfor = 'info';

          _this2.form.fill(fdata);

          _this2.$root.$emit('get_profile', '');

          Toast.fire({
            icon: 'success',
            title: data.data.message
          });
        })["catch"](function (data) {});
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/User/UserOrder.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/User/UserOrder.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "User-order",
  props: ['filtertab'],
  components: {},
  data: function data() {
    return {
      orders: '',
      ppp: 10,
      search: ''
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
                if (!(n == 'Orders')) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return _this.get_my_orders();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    ppp: function ppp() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.get_my_orders();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  methods: {
    get_my_orders: function get_my_orders() {
      var _arguments = arguments,
          _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var url, loaderd;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : "/api/order";
                loaderd = _this3.$loading.show({
                  container: _this3.$refs.uord_main_ref
                });
                axios.get(url, {
                  params: {
                    search: _this3.search,
                    ppp: _this3.ppp
                  }
                }).then(function (res) {
                  _this3.selected = [];
                  _this3.orders = res.data.data;
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/User/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/User/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _UserInfo_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserInfo.vue */ "./resources/js/components/account/User/UserInfo.vue");
/* harmony import */ var _UserOrder_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserOrder.vue */ "./resources/js/components/account/User/UserOrder.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "User-account",
  components: {
    Userinfo: _UserInfo_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserOrder: _UserOrder_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      tabfor: ''
    };
  },
  watch: {},
  methods: {
    switch_tab: function switch_tab() {
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
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.tabfor = "Information";

              if (_this.$route.hash) {
                if (_this.$route.hash == '#order_mngt') {
                  _this.tabfor = 'Orders';
                  $('a[href="#orders"]').trigger('click');
                }
              }

              $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                var tht = $(this);
                $('a[data-toggle="tab"]').removeClass('active');
                tht.addClass('active');
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  created: function created() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  filters: {},
  computed: {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/User/UserInfo.vue?vue&type=template&id=1c2669c0&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/User/UserInfo.vue?vue&type=template&id=1c2669c0& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container pb-5 userAccountCont"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h3", {
    staticClass: "cardTitle textLightGray mb-5"
  }, [_vm._v("General Info")]), _vm._v(" "), _c("form", {
    staticClass: "text-left",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateInfo();
      }
    }
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("first_name"),
      haveValue: _vm.form.first_name
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.first_name,
      expression: "form.first_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.first_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "first_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("First Name")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "first_name"
    }
  })], 1), _vm._v(" "), _c("label", {
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
  })], 1), _vm._v(" "), _c("label", {
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
  })], 1), _vm._v(" "), _c("div", {
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
  })], 1)])])]), _vm._v(" "), _vm._m(1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h3", {
    staticClass: "cardTitle textLightGray mb-5"
  }, [_vm._v("Shipping Address Info")]), _vm._v(" "), _c("form", {
    staticClass: "text-left",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateInfo("shipping");
      }
    }
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.shipping_address.errors.has("street"),
      haveValue: _vm.shipping_address.street
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.shipping_address.street,
      expression: "shipping_address.street"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.shipping_address.street
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.shipping_address, "street", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Street")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.shipping_address,
      field: "street"
    }
  })], 1), _vm._v(" "), _c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.shipping_address.errors.has("city"),
      haveValue: _vm.shipping_address.city
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.shipping_address.city,
      expression: "shipping_address.city"
    }],
    staticClass: "form-control",
    attrs: {
      ype: "text"
    },
    domProps: {
      value: _vm.shipping_address.city
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.shipping_address, "city", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("City")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.shipping_address,
      field: "city"
    }
  })], 1), _vm._v(" "), _c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.shipping_address.errors.has("state"),
      haveValue: _vm.shipping_address.state
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.shipping_address.state,
      expression: "shipping_address.state"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.shipping_address.state
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.shipping_address, "state", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("State")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.shipping_address,
      field: "state"
    }
  })], 1), _vm._v(" "), _c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.shipping_address.errors.has("zip_code"),
      haveValue: _vm.shipping_address.zip_code
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.shipping_address.zip_code,
      expression: "shipping_address.zip_code"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.shipping_address.zip_code
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.shipping_address, "zip_code", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Zip Code")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.shipping_address,
      field: "zip_code"
    }
  })], 1), _vm._v(" "), _c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.shipping_address.errors.has("apartment"),
      haveValue: _vm.shipping_address.apartment
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.shipping_address.apartment,
      expression: "shipping_address.apartment"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.shipping_address.apartment
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.shipping_address, "apartment", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Apartment")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.shipping_address,
      field: "apartment"
    }
  })], 1), _vm._v(" "), _vm._m(2)])])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h2", {
    staticClass: "text-center mb-5"
  }, [_vm._v("Personal Information")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "form-group text-center"
  }, [_c("button", {
    staticClass: "btnSucces",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Save")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "form-group text-center"
  }, [_c("button", {
    staticClass: "btnSucces",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Save")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/User/UserOrder.vue?vue&type=template&id=0a86b8ac&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/User/UserOrder.vue?vue&type=template&id=0a86b8ac& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", [_c("div", {
    staticClass: "container pb-5 userAccountCont"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    ref: "uord_main_ref",
    staticClass: "row vld-parent"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "accordion",
    attrs: {
      id: "accordionExample"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_vm._l(_vm.orders.data, function (order, index) {
    return _vm.orders && _vm.orders.data ? [_c("div", {
      key: "p" + index,
      staticClass: "card-header",
      attrs: {
        id: "headingOne" + index
      }
    }, [_c("h2", {
      staticClass: "mb-0"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between tabInfo",
      attrs: {
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#collapseOne" + index,
        "aria-expanded": "true",
        "aria-controls": "collapseOne" + index
      }
    }, [_c("div", {
      staticClass: "infoColumn"
    }, [_c("p", {
      staticClass: "infoTitle"
    }, [_vm._v("Order Number: " + _vm._s(order.id))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(order.order_date))])]), _vm._v(" "), order.estimate_time ? _c("div", {
      staticClass: "infoColumn"
    }, [_vm._m(1, true), _vm._v(" "), _c("p", {
      domProps: {
        textContent: _vm._s(order.estimate_time)
      }
    })]) : _vm._e()])])]), _vm._v(" "), _c("div", {
      key: "s" + index,
      staticClass: "collapse",
      "class": {
        show: index == 0
      },
      attrs: {
        id: "collapseOne" + index,
        "aria-labelledby": "headingOne" + index,
        "data-parent": "#accordionExample"
      }
    }, [_c("div", {
      staticClass: "card-body"
    }, _vm._l(order.order_trans, function (item, oi) {
      return order.order_trans ? _c("div", {
        key: oi,
        staticClass: "orderListRow d-flex flex-wrap justify-content-between align-items-center"
      }, [_c("div", {
        staticClass: "d-flex orderGeneralInfo"
      }, [_c("div", {
        staticClass: "orderImgWrpr"
      }, [_c("img", {
        staticClass: "img-fluid",
        attrs: {
          src: _vm.set_image(item.photo),
          height: "255",
          width: "230"
        }
      })]), _vm._v(" "), _c("div", {
        staticClass: "orderDetails"
      }, [_c("p", {
        staticClass: "name"
      }, [_vm._v(_vm._s(item.product_name) + "  " + _vm._s(item.project ? "(Project ID-" + item.project.id + ")" : "") + " ")]), _vm._v(" "), _c("p", [_c("span", {
        staticClass: "textLightGray"
      }, [_vm._v("Width:")]), _c("span", [_vm._v(" ")]), _vm._v(" "), _c("span", {
        staticClass: "textBold600",
        domProps: {
          textContent: _vm._s(item.width_size)
        }
      }), _vm._v(" "), _c("span", [_vm._v("   ")]), _vm._v(" "), _c("span", {
        staticClass: "textLightGray"
      }, [_vm._v("Height:")]), _c("span", [_vm._v(" ")]), _vm._v(" "), _c("span", {
        staticClass: "textBold600",
        domProps: {
          textContent: _vm._s(item.height_size)
        }
      })]), _vm._v(" "), _c("p", [_c("span", {
        staticClass: "textLightGray"
      }, [_vm._v("Qty:")]), _c("span", [_vm._v(" ")]), _vm._v(" "), _c("span", {
        staticClass: "textBold600",
        domProps: {
          textContent: _vm._s(item.qty)
        }
      }, [_vm._v("2")])])])]), _vm._v(" "), _c("div", {
        staticClass: "orderPrice"
      }, [_c("span", {
        staticClass: "textLightGray"
      }, [_vm._v("Price: ")]), _c("span", [_vm._v(" ")]), _vm._v(" "), _c("span", {
        staticClass: "textBold600"
      }, [_vm._v(_vm._s(_vm._f("toCurrency")(item.item_total_price)))])]), _vm._v(" "), _c("div", {
        staticClass: "orderStatus"
      }, [order.status == "Payment Pending" ? _c("p", {
        staticClass: "textGreen textBold500"
      }, [_vm._v("Payment Pending/Failed")]) : _c("p", {
        staticClass: "textGreen textBold500",
        domProps: {
          textContent: _vm._s(item.status)
        }
      })])]) : _vm._e();
    }), 0)])] : _vm._e();
  })], 2)]), _vm._v(" "), _vm.orders && _vm.orders.data ? _c("div", {
    staticClass: "container mb-5"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-4"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_vm.orders.total > 0 ? _c("div", {
    staticClass: "text-center tableNavigation"
  }, [_c("button", {
    staticClass: "btnTransparent leftNav",
    "class": {
      disabled: _vm.orders.current_page <= 1
    },
    attrs: {
      disabled: _vm.orders.current_page <= 1
    },
    on: {
      click: function click($event) {
        return _vm.get_my_orders(_vm.orders.prev_page_url);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-angle-left",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _vm.orders.current_page >= _vm.orders.last_page ? _c("span", [_vm._v(_vm._s(_vm.orders.current_page) + "\n                \t                    /" + _vm._s(_vm.orders.last_page))]) : _c("span", [_vm._v("\n                \t                    " + _vm._s(_vm.orders.current_page) + " /\n                \t                    "), _c("a", {
    staticClass: "pointer",
    attrs: {
      disabled: _vm.orders.current_page >= _vm.orders.last_page
    },
    on: {
      click: function click($event) {
        return _vm.get_my_orders(_vm.orders.last_page_url);
      }
    }
  }, [_vm._v("\n                \t                        " + _vm._s(_vm.orders.last_page) + "\n                \t                    ")])]), _vm._v(" "), _c("button", {
    staticClass: "btnTransparent rightNav",
    "class": {
      disabled: _vm.orders.current_page >= _vm.orders.last_page
    },
    attrs: {
      disabled: _vm.orders.current_page >= _vm.orders.last_page
    },
    on: {
      click: function click($event) {
        return _vm.get_my_orders(_vm.orders.next_page_url);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-angle-right",
    attrs: {
      "aria-hidden": "true"
    }
  })])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "w-100 justify-content-end d-flex align-items-center"
  }, [_c("span", [_vm._v("Rows per page  ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ppp,
      expression: "ppp"
    }],
    staticClass: "form-control p-2 pr-4 rounded",
    staticStyle: {
      width: "auto"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.ppp = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "5"
    }
  }, [_vm._v("5")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "10"
    }
  }, [_vm._v("10")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "15"
    }
  }, [_vm._v("15")])])])])])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("p", {
    staticClass: "m-0 orderHelp mt-5"
  }, [_vm._v("Order Problems? "), _c("router-link", {
    staticStyle: {
      color: "#212529"
    },
    attrs: {
      to: "/contact",
      target: "_blank"
    }
  }, [_c("u", [_vm._v("Get help")])]), _vm._v(" "), _c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: "images/customer-service.png"
    }
  })], 1)])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h2", {
    staticClass: "text-center mb-5"
  }, [_vm._v("Orders Management")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("p", {
    staticClass: "infoTitle"
  }, [_c("img", {
    staticClass: "img-fluid avIcon",
    attrs: {
      src: "images/truck.png"
    }
  }), _vm._v("\n                                                Average Time estimation:")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/User/index.vue?vue&type=template&id=50eee05b&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/User/index.vue?vue&type=template&id=50eee05b& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
      id: "",
      role: "tablist"
    }
  }, [_c("li", {
    staticClass: "nav-item",
    on: {
      click: function click($event) {
        _vm.tabfor = "Information";
      }
    }
  }, [_c("a", {
    staticClass: "nav-link rounded-0 active",
    attrs: {
      id: "info-tab",
      "data-toggle": "tab",
      href: "#info",
      role: "tab",
      "aria-controls": "info",
      "aria-selected": "true"
    }
  }, [_vm._v("Information")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item",
    on: {
      click: function click($event) {
        _vm.tabfor = "Orders";
      }
    }
  }, [_c("a", {
    staticClass: "nav-link rounded-0",
    attrs: {
      id: "orders-tab",
      "data-toggle": "tab",
      href: "#orders",
      role: "tab",
      "aria-controls": "orders",
      "aria-selected": "false"
    }
  }, [_vm._v("Orders Management")])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-content bgGray",
    attrs: {
      id: "myTabContent"
    }
  }, [_c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade show active",
    attrs: {
      id: "info",
      role: "tabpanel",
      "aria-labelledby": "info-tab"
    }
  }, [_c("Userinfo", {
    attrs: {
      filtertab: _vm.tabfor
    },
    on: {
      "update:filtertab": function updateFiltertab($event) {
        _vm.tabfor = $event;
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade orderAccordtion",
    attrs: {
      id: "orders",
      role: "tabpanel",
      "aria-labelledby": "orders-tab"
    }
  }, [_c("UserOrder", {
    attrs: {
      filtertab: _vm.tabfor
    },
    on: {
      "update:filtertab": function updateFiltertab($event) {
        _vm.tabfor = $event;
      }
    }
  })], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/account/User/UserInfo.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/account/User/UserInfo.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserInfo_vue_vue_type_template_id_1c2669c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserInfo.vue?vue&type=template&id=1c2669c0& */ "./resources/js/components/account/User/UserInfo.vue?vue&type=template&id=1c2669c0&");
/* harmony import */ var _UserInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/account/User/UserInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserInfo_vue_vue_type_template_id_1c2669c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserInfo_vue_vue_type_template_id_1c2669c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/User/UserInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/account/User/UserInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/account/User/UserInfo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/User/UserInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/account/User/UserInfo.vue?vue&type=template&id=1c2669c0&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/account/User/UserInfo.vue?vue&type=template&id=1c2669c0& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_template_id_1c2669c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInfo.vue?vue&type=template&id=1c2669c0& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/User/UserInfo.vue?vue&type=template&id=1c2669c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_template_id_1c2669c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_template_id_1c2669c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/account/User/UserOrder.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/account/User/UserOrder.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserOrder_vue_vue_type_template_id_0a86b8ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserOrder.vue?vue&type=template&id=0a86b8ac& */ "./resources/js/components/account/User/UserOrder.vue?vue&type=template&id=0a86b8ac&");
/* harmony import */ var _UserOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserOrder.vue?vue&type=script&lang=js& */ "./resources/js/components/account/User/UserOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserOrder_vue_vue_type_template_id_0a86b8ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserOrder_vue_vue_type_template_id_0a86b8ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/User/UserOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/account/User/UserOrder.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/account/User/UserOrder.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/User/UserOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/account/User/UserOrder.vue?vue&type=template&id=0a86b8ac&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/account/User/UserOrder.vue?vue&type=template&id=0a86b8ac& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserOrder_vue_vue_type_template_id_0a86b8ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserOrder.vue?vue&type=template&id=0a86b8ac& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/User/UserOrder.vue?vue&type=template&id=0a86b8ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserOrder_vue_vue_type_template_id_0a86b8ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserOrder_vue_vue_type_template_id_0a86b8ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/account/User/index.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/account/User/index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_50eee05b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=50eee05b& */ "./resources/js/components/account/User/index.vue?vue&type=template&id=50eee05b&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/account/User/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_50eee05b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_50eee05b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/User/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/account/User/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/account/User/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/User/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/account/User/index.vue?vue&type=template&id=50eee05b&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/account/User/index.vue?vue&type=template&id=50eee05b& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_50eee05b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=50eee05b& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/User/index.vue?vue&type=template&id=50eee05b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_50eee05b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_50eee05b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9Vc2VyL1VzZXJJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9Vc2VyL1VzZXJPcmRlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvVXNlci9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9Vc2VyL1VzZXJJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1VzZXIvVXNlck9yZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1VzZXIvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvVXNlci9Vc2VySW5mby52dWU/OTc1MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1VzZXIvVXNlckluZm8udnVlPzYzZTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9Vc2VyL1VzZXJJbmZvLnZ1ZT81YTRiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvVXNlci9Vc2VyT3JkZXIudnVlPzZhYzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9Vc2VyL1VzZXJPcmRlci52dWU/OTg3MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1VzZXIvVXNlck9yZGVyLnZ1ZT8xMWExIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvVXNlci9pbmRleC52dWU/MmRiMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1VzZXIvaW5kZXgudnVlPzU1YmYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9Vc2VyL2luZGV4LnZ1ZT9lOWU1Il0sIm5hbWVzIjpbIm5hbWUiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJDb3VudHJ5TGlzdCIsImRhdGEiLCJmb3JtIiwiaWQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJjb3VudHJ5X2NvZGUiLCJwaG9uZV9udW1iZXIiLCJ1cGZvciIsInNoaXBwaW5nX2FkZHJlc3MiLCJzdHJlZXQiLCJjaXR5Iiwic3RhdGUiLCJ6aXBfY29kZSIsImFwYXJ0bWVudCIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsIm1vdW50ZWQiLCJjcmVhdGVkIiwid2F0Y2giLCJmaWx0ZXJ0YWIiLCJuIiwibyIsImF4aW9zIiwidGhlbiIsImZkYXRhIiwibWV0aG9kcyIsIm9uQ291bnRyeUNoYW5nZSIsInZhbHVlIiwidXBkYXRlSW5mbyIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwib3JkZXJzIiwicHBwIiwic2VhcmNoIiwiZ2V0X215X29yZGVycyIsInVybCIsImxvYWRlcmQiLCJjb250YWluZXIiLCJwYXJhbXMiLCJVc2VyaW5mbyIsIlVzZXJPcmRlciIsInRhYmZvciIsInN3aXRjaF90YWIiLCIkIiwidGh0IiwiZmlsdGVycyIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl9tIiwiX3YiLCJvbiIsInN1Ym1pdCIsIiRldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3IiLCJlcnJvcnMiLCJoYXMiLCJoYXZlVmFsdWUiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsImV4cHJlc3Npb24iLCJhdHRycyIsInR5cGUiLCJkb21Qcm9wcyIsImlucHV0IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiJHNldCIsImZpZWxkIiwiX3MiLCJjbGlja2VkIiwieXBlIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCIsInJlZiIsIl9sIiwib3JkZXIiLCJpbmRleCIsImtleSIsIm9yZGVyX2RhdGUiLCJlc3RpbWF0ZV90aW1lIiwidGV4dENvbnRlbnQiLCJfZSIsInNob3ciLCJvcmRlcl90cmFucyIsIml0ZW0iLCJvaSIsInNyYyIsInNldF9pbWFnZSIsInBob3RvIiwiaGVpZ2h0Iiwid2lkdGgiLCJwcm9kdWN0X25hbWUiLCJwcm9qZWN0Iiwid2lkdGhfc2l6ZSIsImhlaWdodF9zaXplIiwicXR5IiwiX2YiLCJpdGVtX3RvdGFsX3ByaWNlIiwic3RhdHVzIiwidG90YWwiLCJkaXNhYmxlZCIsImN1cnJlbnRfcGFnZSIsImNsaWNrIiwicHJldl9wYWdlX3VybCIsImxhc3RfcGFnZSIsImxhc3RfcGFnZV91cmwiLCJuZXh0X3BhZ2VfdXJsIiwic3RhdGljU3R5bGUiLCJjaGFuZ2UiLCIkJHNlbGVjdGVkVmFsIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmaWx0ZXIiLCJjYWxsIiwib3B0aW9ucyIsInNlbGVjdGVkIiwibWFwIiwidmFsIiwiX3ZhbHVlIiwibXVsdGlwbGUiLCJjb2xvciIsInRvIiwicm9sZSIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzsrQ0F3R0Esb0o7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtFQUNBQSxpQkFEQTtFQUVBQyxvQkFGQTtFQUdBQztJQUNBQztFQURBLENBSEE7RUFNQUMsSUFOQSxrQkFNQTtJQUNBO01BQ0FDO1FBQ0FDLE1BREE7UUFFQUMsY0FGQTtRQUdBQyxhQUhBO1FBSUFDLFNBSkE7UUFLQUMsZ0JBTEE7UUFNQUMsZ0JBTkE7UUFPQUM7TUFQQSxFQURBO01BVUFDO1FBQ0FELGlCQURBO1FBRUFFLFVBRkE7UUFHQUMsUUFIQTtRQUlBQyxTQUpBO1FBS0FDLFlBTEE7UUFNQUM7TUFOQTtJQVZBO0VBbUJBLENBMUJBO0VBMkJBQyw0QkFDQUMsbUVBREEsQ0EzQkE7RUE4QkFDLE9BOUJBLHFCQThCQTtJQUNB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LHFQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMTIuYnVuZGxlLmM3OGNkMTc4ZmJiMmFiOTllY2E0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwYi01IHVzZXJBY2NvdW50Q29udFwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXIgbWItNVwiPlBlcnNvbmFsIEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkVGl0bGUgdGV4dExpZ2h0R3JheSBtYi01XCI+R2VuZXJhbCBJbmZvPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInRleHQtbGVmdFwiIEBzdWJtaXQucHJldmVudD1cInVwZGF0ZUluZm8oKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygnZmlyc3RfbmFtZScpICwnaGF2ZVZhbHVlJzogZm9ybS5maXJzdF9uYW1lIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmb3JtLmZpcnN0X25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+Rmlyc3QgTmFtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiZmlyc3RfbmFtZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdsYXN0X25hbWUnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0ubGFzdF9uYW1lIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmb3JtLmxhc3RfbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5MYXN0IE5hbWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImxhc3RfbmFtZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpICwnaGF2ZVZhbHVlJzogZm9ybS5lbWFpbCB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImZvcm0uZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+RW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCIgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdjb3VudHJ5X2NvZGUnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0uY291bnRyeV9jb2RlIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdFwiPnt7Zm9ybS5jb3VudHJ5X2NvZGV9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgdy0xMDBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdERyb3BEb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudHJ5TGlzdCAgQGNsaWNrZWQ9XCJvbkNvdW50cnlDaGFuZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImNvdW50cnlfY29kZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ3Bob25lX251bWJlcicpICwnaGF2ZVZhbHVlJzogZm9ybS5waG9uZV9udW1iZXIgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZm9ybS5waG9uZV9udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+UGhvbmUgTnVtYmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJwaG9uZV9udW1iZXJcIiBjbGFzcz1cImVycm9ybXNnXCI+PC9oYXMtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0blN1Y2Nlc1wiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmRUaXRsZSB0ZXh0TGlnaHRHcmF5IG1iLTVcIj5TaGlwcGluZyBBZGRyZXNzIEluZm88L2gzPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInRleHQtbGVmdFwiIEBzdWJtaXQucHJldmVudD1cInVwZGF0ZUluZm8oJ3NoaXBwaW5nJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiIDpjbGFzcz1cInsgJ2Vycm9yJzogc2hpcHBpbmdfYWRkcmVzcy5lcnJvcnMuaGFzKCdzdHJlZXQnKSAsJ2hhdmVWYWx1ZSc6IHNoaXBwaW5nX2FkZHJlc3Muc3RyZWV0IH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwic2hpcHBpbmdfYWRkcmVzcy5zdHJlZXRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5TdHJlZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cInNoaXBwaW5nX2FkZHJlc3NcIiBmaWVsZD1cInN0cmVldFwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIiA6Y2xhc3M9XCJ7ICdlcnJvcic6IHNoaXBwaW5nX2FkZHJlc3MuZXJyb3JzLmhhcygnY2l0eScpICwnaGF2ZVZhbHVlJzogc2hpcHBpbmdfYWRkcmVzcy5jaXR5IH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgeXBlPVwidGV4dFwiIHYtbW9kZWw9XCJzaGlwcGluZ19hZGRyZXNzLmNpdHlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5DaXR5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJzaGlwcGluZ19hZGRyZXNzXCIgZmllbGQ9XCJjaXR5XCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiIDpjbGFzcz1cInsgJ2Vycm9yJzogc2hpcHBpbmdfYWRkcmVzcy5lcnJvcnMuaGFzKCdzdGF0ZScpICwnaGF2ZVZhbHVlJzogc2hpcHBpbmdfYWRkcmVzcy5zdGF0ZSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInNoaXBwaW5nX2FkZHJlc3Muc3RhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5TdGF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwic2hpcHBpbmdfYWRkcmVzc1wiIGZpZWxkPVwic3RhdGVcIiBjbGFzcz1cImVycm9ybXNnXCI+PC9oYXMtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCIgOmNsYXNzPVwieyAnZXJyb3InOiBzaGlwcGluZ19hZGRyZXNzLmVycm9ycy5oYXMoJ3ppcF9jb2RlJykgLCdoYXZlVmFsdWUnOiBzaGlwcGluZ19hZGRyZXNzLnppcF9jb2RlIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwic2hpcHBpbmdfYWRkcmVzcy56aXBfY29kZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlppcCBDb2RlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJzaGlwcGluZ19hZGRyZXNzXCIgZmllbGQ9XCJ6aXBfY29kZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIiA6Y2xhc3M9XCJ7ICdlcnJvcic6IHNoaXBwaW5nX2FkZHJlc3MuZXJyb3JzLmhhcygnYXBhcnRtZW50JykgLCdoYXZlVmFsdWUnOiBzaGlwcGluZ19hZGRyZXNzLmFwYXJ0bWVudCB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInNoaXBwaW5nX2FkZHJlc3MuYXBhcnRtZW50XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+QXBhcnRtZW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJzaGlwcGluZ19hZGRyZXNzXCIgZmllbGQ9XCJhcGFydG1lbnRcIiBjbGFzcz1cImVycm9ybXNnXCI+PC9oYXMtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0blN1Y2Nlc1wiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gaW1wb3J0IENvdW50cnlMaXN0IGZyb20gJy4uLy4uL0NvdW50cnktbGlzdC52dWUnXG4gaW1wb3J0IHtcbiAgICAgbWFwR2V0dGVycyxcbiAgICAgbWFwQWN0aW9uc1xuIH0gZnJvbSBcInZ1ZXhcIjtcbiBleHBvcnQgZGVmYXVsdCB7XG4gICAgIG5hbWU6IFwiVXNlci1pbmZvXCIsXG4gICAgIHByb3BzOiBbJ2ZpbHRlcnRhYiddLFxuICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICBDb3VudHJ5TGlzdFxuICAgICB9LFxuICAgICBkYXRhKCkge1xuICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICAgY291bnRyeV9jb2RlOiAnJyxcbiAgICAgICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiAnJyxcbiAgICAgICAgICAgICAgICAgdXBmb3I6ICdpbmZvJyxcbiAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICBzaGlwcGluZ19hZGRyZXNzOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgIHVwZm9yOiAnc2hpcHBpbmcnLFxuICAgICAgICAgICAgICAgICBzdHJlZXQ6ICcnLFxuICAgICAgICAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICAgICAgICAgICB6aXBfY29kZTogJycsXG4gICAgICAgICAgICAgICAgIGFwYXJ0bWVudDogJycsXG4gICAgICAgICAgICAgfSlcbiAgICAgICAgIH1cbiAgICAgfSxcbiAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgIC4uLm1hcEdldHRlcnMoW1wiZXJyb3JzXCJdKSxcbiAgICAgfSxcbiAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcInNldEVycm9yc1wiLCB7fSk7XG4gICAgIH0sXG4gICAgIGNyZWF0ZWQoKSB7XG5cblxuICAgICB9LFxuICAgICB3YXRjaDoge1xuICAgICAgICAgYXN5bmMgZmlsdGVydGFiKG4sIG8pIHtcbiAgICAgICAgICAgICBpZiAobiA9PSAnSW5mb3JtYXRpb24nKSB7XG5cbiAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL3Byb2ZpbGVcIilcbiAgICAgICAgICAgICAgICAgICAgIC50aGVuKCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmZGF0YSA9IGRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgIGZkYXRhLnVwZm9yID0gJ2luZm8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmZpbGwoZmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZkYXRhLnNoaXBwaW5nX2FkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmRhdGEuc2hpcHBpbmdfYWRkcmVzcy51cGZvciA9ICdzaGlwcGluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ19hZGRyZXNzLmZpbGwoZmRhdGEuc2hpcHBpbmdfYWRkcmVzcylcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9LFxuICAgICB9LFxuICAgICBtZXRob2RzOiB7XG4gICAgICAgICBvbkNvdW50cnlDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgICB0aGlzLmZvcm0uY291bnRyeV9jb2RlID0gdmFsdWU7XG4gICAgICAgICB9LFxuICAgICAgICAgdXBkYXRlSW5mbyhuKSB7XG4gICAgICAgICAgICAgaWYgKG4gPT0gJ3NoaXBwaW5nJykge1xuICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nX2FkZHJlc3MucHV0KCdhcGkvcHJvZmlsZScpXG4gICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmZGF0YSA9IGRhdGEuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgZmRhdGEudXBmb3IgPSAnc2hpcHBpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ19hZGRyZXNzLmZpbGwoZmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChkYXRhKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnB1dCgnYXBpL3Byb2ZpbGUnKVxuICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmRhdGEgPSBkYXRhLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgIGZkYXRhLnVwZm9yID0gJ2luZm8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmZpbGwoZmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kZW1pdCgnZ2V0X3Byb2ZpbGUnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChkYXRhKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgIH0sXG4gICAgIH1cbiB9XG4gICAgPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcGItNSB1c2VyQWNjb3VudENvbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIG1iLTVcIj5PcmRlcnMgTWFuYWdlbWVudDwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdmxkLXBhcmVudFwiIHJlZj1cInVvcmRfbWFpbl9yZWZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb25cIiBpZD1cImFjY29yZGlvbkV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJvcmRlcnMgJiYgb3JkZXJzLmRhdGFcIiB2LWZvcj1cIihvcmRlciwgaW5kZXgpIGluIG9yZGVycy5kYXRhXCIgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCIgOmlkPVwiJ2hlYWRpbmdPbmUnK2luZGV4XCIgOmtleT1cIidwJytpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdGFiSW5mb1wiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgOmRhdGEtdGFyZ2V0PVwiJyNjb2xsYXBzZU9uZScraW5kZXhcIiBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphcmlhLWNvbnRyb2xzPVwiJ2NvbGxhcHNlT25lJytpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb0NvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvVGl0bGVcIj5PcmRlciBOdW1iZXI6IHt7IG9yZGVyLmlkIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3tvcmRlci5vcmRlcl9kYXRlIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9Db2x1bW5cIiB2LWlmPVwib3JkZXIuZXN0aW1hdGVfdGltZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvVGl0bGVcIj48aW1nIHNyYz1cImltYWdlcy90cnVjay5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZCBhdkljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdmVyYWdlIFRpbWUgZXN0aW1hdGlvbjo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LXRleHQ9XCJvcmRlci5lc3RpbWF0ZV90aW1lXCI+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDppZD1cIidjb2xsYXBzZU9uZScraW5kZXhcIiBjbGFzcz1cImNvbGxhcHNlIFwiIDpjbGFzcz1cIntzaG93OmluZGV4PT0wfVwiIDphcmlhLWxhYmVsbGVkYnk9XCInaGVhZGluZ09uZScraW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uRXhhbXBsZVwiIDprZXk9XCIncycraW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJMaXN0Um93IGQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCIgdi1mb3I9XCIoaXRlbSwgb2kpIGluIG9yZGVyLm9yZGVyX3RyYW5zXCIgOmtleT1cIm9pXCIgdi1pZj1cIm9yZGVyLm9yZGVyX3RyYW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggb3JkZXJHZW5lcmFsSW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVySW1nV3JwclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInNldF9pbWFnZShpdGVtLnBob3RvKVwiIGNsYXNzPVwiaW1nLWZsdWlkXCIgaGVpZ2h0PVwiMjU1XCIgd2lkdGg9XCIyMzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPnt7IGl0ZW0ucHJvZHVjdF9uYW1lIH19ICB7eyBpdGVtLnByb2plY3Q/ICcoUHJvamVjdCBJRC0nKyBpdGVtLnByb2plY3QuaWQrJyknOicnIH19IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0TGlnaHRHcmF5XCI+V2lkdGg6PC9zcGFuPjxzcGFuPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0Qm9sZDYwMFwiIHYtdGV4dD1cIml0ZW0ud2lkdGhfc2l6ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRMaWdodEdyYXlcIj5IZWlnaHQ6PC9zcGFuPjxzcGFuPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0Qm9sZDYwMFwiIHYtdGV4dD1cIml0ZW0uaGVpZ2h0X3NpemVcIj4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0TGlnaHRHcmF5XCI+UXR5Ojwvc3Bhbj48c3Bhbj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dEJvbGQ2MDBcIiB2LXRleHQ9XCJpdGVtLnF0eVwiPjI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJQcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0TGlnaHRHcmF5XCI+UHJpY2U6IDwvc3Bhbj48c3Bhbj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRCb2xkNjAwXCI+e3sgaXRlbS5pdGVtX3RvdGFsX3ByaWNlfHRvQ3VycmVuY3kgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJTdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dEdyZWVuIHRleHRCb2xkNTAwXCIgdi1pZj1cIm9yZGVyLnN0YXR1cz09J1BheW1lbnQgUGVuZGluZydcIj5QYXltZW50IFBlbmRpbmcvRmFpbGVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0R3JlZW4gdGV4dEJvbGQ1MDBcIiB2LXRleHQ9XCJpdGVtLnN0YXR1c1wiIHYtZWxzZT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgbWItNVwiIHYtaWY9XCJvcmRlcnMgJiYgb3JkZXJzLmRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgdGFibGVOYXZpZ2F0aW9uXCIgdi1pZj1cIm9yZGVycy50b3RhbD4wXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5UcmFuc3BhcmVudCBsZWZ0TmF2XCIgOmNsYXNzPVwie2Rpc2FibGVkOiBvcmRlcnMuY3VycmVudF9wYWdlPD0xfVwiXG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJvcmRlcnMuY3VycmVudF9wYWdlPD0xXCJcbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldF9teV9vcmRlcnMob3JkZXJzLnByZXZfcGFnZV91cmwpXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwib3JkZXJzLmN1cnJlbnRfcGFnZT49b3JkZXJzLmxhc3RfcGFnZVwiPnt7b3JkZXJzLmN1cnJlbnRfcGFnZX19XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICAve3tvcmRlcnMubGFzdF9wYWdlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIHt7b3JkZXJzLmN1cnJlbnRfcGFnZX19IC9cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicG9pbnRlclwiIDpkaXNhYmxlZD1cIm9yZGVycy5jdXJyZW50X3BhZ2U+PW9yZGVycy5sYXN0X3BhZ2VcIlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldF9teV9vcmRlcnMob3JkZXJzLmxhc3RfcGFnZV91cmwpXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICAgICAge3tvcmRlcnMubGFzdF9wYWdlfX1cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuVHJhbnNwYXJlbnQgcmlnaHROYXZcIlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie2Rpc2FibGVkOiBvcmRlcnMuY3VycmVudF9wYWdlPj1vcmRlcnMubGFzdF9wYWdlfVwiXG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJvcmRlcnMuY3VycmVudF9wYWdlPj1vcmRlcnMubGFzdF9wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldF9teV9vcmRlcnMob3JkZXJzLm5leHRfcGFnZV91cmwpXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIGp1c3RpZnktY29udGVudC1lbmQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICA8c3Bhbj5Sb3dzIHBlciBwYWdlICZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBwLTIgcHItNCByb3VuZGVkXCIgc3R5bGU9XCJ3aWR0aDogYXV0bztcIiB2LW1vZGVsPVwicHBwXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTVcIj4xNTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcdCAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibS0wIG9yZGVySGVscCBtdC01XG4gICAgICAgICAgICAgICAgXCI+T3JkZXIgUHJvYmxlbXM/IDxyb3V0ZXItbGluayB0bz1cIi9jb250YWN0XCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9XCJjb2xvcjogIzIxMjUyOTtcIj48dT5HZXQgaGVscDwvdT4gPC9yb3V0ZXItbGluaz4gPGltZyBzcmM9XCJpbWFnZXMvY3VzdG9tZXItc2VydmljZS5wbmdcIiBjbGFzcz1cImltZy1mbHVpZFwiPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiVXNlci1vcmRlclwiLFxuICAgIHByb3BzOiBbJ2ZpbHRlcnRhYiddLFxuICAgIGNvbXBvbmVudHM6IHt9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcmRlcnM6ICcnLFxuICAgICAgICAgICAgcHBwOjEwLFxuICAgICAgICAgICAgc2VhcmNoOicnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBhc3luYyBmaWx0ZXJ0YWIobiwgbykge1xuICAgICAgICAgICAgaWYgKG4gPT0gJ09yZGVycycpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldF9teV9vcmRlcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgcHBwKCl7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdldF9teV9vcmRlcnMoKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG5hc3luYyBnZXRfbXlfb3JkZXJzKHVybCA9IFwiL2FwaS9vcmRlclwiKSB7XG5cdCAgICAgICAgICAgIGxldCBsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcblx0ICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy51b3JkX21haW5fcmVmLFxuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgYXhpb3MuZ2V0KHVybCwge1xuXHQgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwcHA6IHRoaXMucHBwLFxuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0pXG5cdCAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IFtdXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlcnMgPSByZXMuZGF0YS5kYXRhXG5cdCAgICAgICAgICAgICAgICAgICAgbG9hZGVyZC5oaWRlKClcblx0ICAgICAgICAgICAgICAgIH0pXG5cdCAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcblx0ICAgICAgICAgICAgICAgICAgICBsb2FkZXJkLmhpZGUoKVxuXHQgICAgICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfSxcbiAgICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcHgtMCBzdGVwc0JhclwiPlxuICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFicyBjdXN0b21UYWIganVzdGlmeS1jb250ZW50LWNlbnRlciBib3JkZXItdG9wXCIgaWQ9XCJcIiByb2xlPVwidGFibGlzdFwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIEBjbGljaz1cInRhYmZvcj0nSW5mb3JtYXRpb24nXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIHJvdW5kZWQtMCBhY3RpdmVcIiAgaWQ9XCJpbmZvLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNpbmZvXCIgcm9sZT1cInRhYlwiXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiaW5mb1wiIGFyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCI+SW5mb3JtYXRpb248L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCIgQGNsaWNrPVwidGFiZm9yPSdPcmRlcnMnXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIHJvdW5kZWQtMCBcIiAgaWQ9XCJvcmRlcnMtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI29yZGVyc1wiIHJvbGU9XCJ0YWJcIlxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm9yZGVyc1wiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPk9yZGVycyBNYW5hZ2VtZW50PC9hPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50IGJnR3JheVwiIGlkPVwibXlUYWJDb250ZW50XCI+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIGlkPVwiaW5mb1wiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImluZm8tdGFiXCI+XG4gICAgICAgICAgICA8VXNlcmluZm8gOmZpbHRlcnRhYi5zeW5jPVwidGFiZm9yXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGUgIG9yZGVyQWNjb3JkdGlvblwiIGlkPVwib3JkZXJzXCIgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm9yZGVycy10YWJcIj5cbiAgICAgICAgICAgIDxVc2VyT3JkZXIgOmZpbHRlcnRhYi5zeW5jPVwidGFiZm9yXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgVXNlcmluZm8gZnJvbSAnLi9Vc2VySW5mby52dWUnXG4gICAgaW1wb3J0IFVzZXJPcmRlciBmcm9tICcuL1VzZXJPcmRlci52dWUnXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIlVzZXItYWNjb3VudFwiLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBVc2VyaW5mbyxcbiAgICAgICAgICAgIFVzZXJPcmRlclxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0YWJmb3I6JydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHt9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBhc3luYyBzd2l0Y2hfdGFiKCkge1xuXG4gICAgICAgICAgIH0sXG5cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMudGFiZm9yPVwiSW5mb3JtYXRpb25cIjtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJHJvdXRlLmhhc2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcm91dGUuaGFzaCA9PScjb3JkZXJfbW5ndCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJmb3IgPSAnT3JkZXJzJztcbiAgICAgICAgICAgICAgICAgICAgJCgnYVtocmVmPVwiI29yZGVyc1wiXScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykub24oJ3Nob3duLmJzLnRhYicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGh0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgJCgnYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgIHRodC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgY3JlYXRlZCgpIHtcblxuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJzOiB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICB9LFxuXG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgcGItNSB1c2VyQWNjb3VudENvbnRcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy02XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFRpdGxlIHRleHRMaWdodEdyYXkgbWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiR2VuZXJhbCBJbmZvXCIpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1sZWZ0XCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZUluZm8oKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZmlyc3RfbmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5maXJzdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZmlyc3RfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmZpcnN0X25hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZmlyc3RfbmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRmlyc3QgTmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJmaXJzdF9uYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJsYXN0X25hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5sYXN0X25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5sYXN0X25hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibGFzdF9uYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCJMYXN0IE5hbWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImxhc3RfbmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1haWxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiY291bnRyeV9jb2RlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZvcm0uY291bnRyeV9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgc2VsZWN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmZvcm0uY291bnRyeV9jb2RlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbCB3LTEwMFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2VsZWN0RHJvcERvd25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQ291bnRyeUxpc3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGlja2VkOiBfdm0ub25Db3VudHJ5Q2hhbmdlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImNvdW50cnlfY29kZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtOVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJwaG9uZV9udW1iZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5waG9uZV9udW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnBob25lX251bWJlciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBob25lX251bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUGhvbmUgTnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcInBob25lX251bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkVGl0bGUgdGV4dExpZ2h0R3JheSBtYi01XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJTaGlwcGluZyBBZGRyZXNzIEluZm9cIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWxlZnRcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlSW5mbyhcInNoaXBwaW5nXCIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5zaGlwcGluZ19hZGRyZXNzLmVycm9ycy5oYXMoXCJzdHJlZXRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy5zdHJlZXQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy5zdHJlZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hpcHBpbmdfYWRkcmVzcy5zdHJlZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy5zdHJlZXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNoaXBwaW5nX2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJlZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIlN0cmVldFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uc2hpcHBpbmdfYWRkcmVzcywgZmllbGQ6IFwic3RyZWV0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5zaGlwcGluZ19hZGRyZXNzLmVycm9ycy5oYXMoXCJjaXR5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLnNoaXBwaW5nX2FkZHJlc3MuY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaGlwcGluZ19hZGRyZXNzLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hpcHBpbmdfYWRkcmVzcy5jaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgeXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy5jaXR5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaGlwcGluZ19hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwiQ2l0eVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uc2hpcHBpbmdfYWRkcmVzcywgZmllbGQ6IFwiY2l0eVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy5lcnJvcnMuaGFzKFwic3RhdGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaGlwcGluZ19hZGRyZXNzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNoaXBwaW5nX2FkZHJlc3Muc3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy5zdGF0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hpcHBpbmdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCJTdGF0ZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uc2hpcHBpbmdfYWRkcmVzcywgZmllbGQ6IFwic3RhdGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnNoaXBwaW5nX2FkZHJlc3MuZXJyb3JzLmhhcyhcInppcF9jb2RlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLnNoaXBwaW5nX2FkZHJlc3MuemlwX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy56aXBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaGlwcGluZ19hZGRyZXNzLnppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNoaXBwaW5nX2FkZHJlc3MuemlwX2NvZGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNoaXBwaW5nX2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ6aXBfY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwiWmlwIENvZGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLnNoaXBwaW5nX2FkZHJlc3MsIGZpZWxkOiBcInppcF9jb2RlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5zaGlwcGluZ19hZGRyZXNzLmVycm9ycy5oYXMoXCJhcGFydG1lbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy5hcGFydG1lbnQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy5hcGFydG1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hpcHBpbmdfYWRkcmVzcy5hcGFydG1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy5hcGFydG1lbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNoaXBwaW5nX2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcGFydG1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIkFwYXJ0bWVudFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uc2hpcHBpbmdfYWRkcmVzcywgZmllbGQ6IFwiYXBhcnRtZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbWItNVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJQZXJzb25hbCBJbmZvcm1hdGlvblwiKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0blN1Y2Nlc1wiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJTYXZlXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG5TdWNjZXNcIiwgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiU2F2ZVwiKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcInNlY3Rpb25cIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIHBiLTUgdXNlckFjY291bnRDb250XCIgfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcInVvcmRfbWFpbl9yZWZcIiwgc3RhdGljQ2xhc3M6IFwicm93IHZsZC1wYXJlbnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWNjb3JkaW9uXCIsIGF0dHJzOiB7IGlkOiBcImFjY29yZGlvbkV4YW1wbGVcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm9yZGVycy5kYXRhLCBmdW5jdGlvbiAob3JkZXIsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3JkZXJzICYmIF92bS5vcmRlcnMuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJwXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJoZWFkaW5nT25lXCIgKyBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHRhYkluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI2NvbGxhcHNlT25lXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJjb2xsYXBzZU9uZVwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvQ29sdW1uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvVGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPcmRlciBOdW1iZXI6IFwiICsgX3ZtLl9zKG9yZGVyLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mob3JkZXIub3JkZXJfZGF0ZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmVzdGltYXRlX3RpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm9Db2x1bW5cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmVzdGltYXRlX3RpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwic1wiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgc2hvdzogaW5kZXggPT0gMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY29sbGFwc2VPbmVcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImhlYWRpbmdPbmVcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtcGFyZW50XCI6IFwiI2FjY29yZGlvbkV4YW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wob3JkZXIub3JkZXJfdHJhbnMsIGZ1bmN0aW9uIChpdGVtLCBvaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmRlci5vcmRlcl90cmFuc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogb2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlckxpc3RSb3cgZC1mbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBvcmRlckdlbmVyYWxJbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm9yZGVySW1nV3JwclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uc2V0X2ltYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBob3RvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI1NVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjMwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwib3JkZXJEZXRhaWxzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByb2R1Y3RfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJvamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiKFByb2plY3QgSUQtXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pZCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0TGlnaHRHcmF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIldpZHRoOlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiwqBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0Qm9sZDYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLndpZHRoX3NpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIsKgwqDCoFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0TGlnaHRHcmF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkhlaWdodDpcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIsKgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dEJvbGQ2MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5oZWlnaHRfc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0TGlnaHRHcmF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlF0eTpcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIsKgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRCb2xkNjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiMlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm9yZGVyUHJpY2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dExpZ2h0R3JheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJQcmljZTogXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLCoFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dEJvbGQ2MDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pdGVtX3RvdGFsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwib3JkZXJTdGF0dXNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuc3RhdHVzID09IFwiUGF5bWVudCBQZW5kaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dEdyZWVuIHRleHRCb2xkNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUGF5bWVudCBQZW5kaW5nL0ZhaWxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0R3JlZW4gdGV4dEJvbGQ1MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLm9yZGVycyAmJiBfdm0ub3JkZXJzLmRhdGFcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJzLnRvdGFsID4gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgdGFibGVOYXZpZ2F0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuVHJhbnNwYXJlbnQgbGVmdE5hdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0ub3JkZXJzLmN1cnJlbnRfcGFnZSA8PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0ub3JkZXJzLmN1cnJlbnRfcGFnZSA8PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldF9teV9vcmRlcnMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlcnMucHJldl9wYWdlX3VybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWFuZ2xlLWxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJzLmN1cnJlbnRfcGFnZSA+PSBfdm0ub3JkZXJzLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ub3JkZXJzLmN1cnJlbnRfcGFnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcXHQgICAgICAgICAgICAgICAgICAgIC9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ub3JkZXJzLmxhc3RfcGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFxcdCAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZGVycy5jdXJyZW50X3BhZ2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgL1xcbiAgICAgICAgICAgICAgICBcXHQgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJzLmN1cnJlbnRfcGFnZSA+PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVycy5sYXN0X3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0X215X29yZGVycyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVycy5sYXN0X3BhZ2VfdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcXHQgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZGVycy5sYXN0X3BhZ2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFxcdCAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuVHJhbnNwYXJlbnQgcmlnaHROYXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlcnMuY3VycmVudF9wYWdlID49XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJzLmxhc3RfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlcnMuY3VycmVudF9wYWdlID49XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJzLmxhc3RfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRfbXlfb3JkZXJzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJzLm5leHRfcGFnZV91cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1hbmdsZS1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInctMTAwIGp1c3RpZnktY29udGVudC1lbmQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJSb3dzIHBlciBwYWdlIMKgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHBwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBwcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBwLTIgcHItNCByb3VuZGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcHAgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjEwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIxMFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMTVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjE1XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm0tMCBvcmRlckhlbHAgbXQtNVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIk9yZGVyIFByb2JsZW1zPyBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjMjEyNTI5XCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9jb250YWN0XCIsIHRhcmdldDogXCJfYmxhbmtcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidVwiLCBbX3ZtLl92KFwiR2V0IGhlbHBcIildKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJpbWFnZXMvY3VzdG9tZXItc2VydmljZS5wbmdcIiB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtYi01XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIk9yZGVycyBNYW5hZ2VtZW50XCIpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9UaXRsZVwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkIGF2SWNvblwiLFxuICAgICAgICBhdHRyczogeyBzcmM6IFwiaW1hZ2VzL3RydWNrLnBuZ1wiIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdmVyYWdlIFRpbWUgZXN0aW1hdGlvbjpcIlxuICAgICAgKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWQgcHgtMCBzdGVwc0JhclwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwidWxcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2IG5hdi10YWJzIGN1c3RvbVRhYiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJvcmRlci10b3BcIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwiXCIsIHJvbGU6IFwidGFibGlzdFwiIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnRhYmZvciA9IFwiSW5mb3JtYXRpb25cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rIHJvdW5kZWQtMCBhY3RpdmVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5mby10YWJcIixcbiAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI2luZm9cIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkluZm9ybWF0aW9uXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0udGFiZm9yID0gXCJPcmRlcnNcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJvcmRlcnMtdGFiXCIsXG4gICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIiNvcmRlcnNcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJvcmRlcnNcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIk9yZGVycyBNYW5hZ2VtZW50XCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFiLWNvbnRlbnQgYmdHcmF5XCIsIGF0dHJzOiB7IGlkOiBcIm15VGFiQ29udGVudFwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogXCJpbmZvXCIsXG4gICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJpbmZvLXRhYlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiVXNlcmluZm9cIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBmaWx0ZXJ0YWI6IF92bS50YWJmb3IgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBcInVwZGF0ZTpmaWx0ZXJ0YWJcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnRhYmZvciA9ICRldmVudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlIG9yZGVyQWNjb3JkdGlvblwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwib3JkZXJzXCIsXG4gICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJvcmRlcnMtdGFiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJVc2VyT3JkZXJcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBmaWx0ZXJ0YWI6IF92bS50YWJmb3IgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBcInVwZGF0ZTpmaWx0ZXJ0YWJcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnRhYmZvciA9ICRldmVudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlckluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjMjY2OWMwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXJJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlckluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxwcm9ncmFtbWluZ1xcXFx3YW1wNjRcXFxcd3d3XFxcXHVuaXRlZC1zY3JhcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYzI2NjljMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYzI2NjljMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYzI2NjljMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVXNlckluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjMjY2OWMwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFjMjY2OWMwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1VzZXIvVXNlckluZm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VySW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VySW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWMyNjY5YzAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1VzZXJPcmRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGE4NmI4YWMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlck9yZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlck9yZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGE4NmI4YWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGE4NmI4YWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGE4NmI4YWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXJPcmRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGE4NmI4YWMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGE4NmI4YWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvVXNlci9Vc2VyT3JkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyT3JkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJPcmRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJPcmRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGE4NmI4YWMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MGVlZTA1YiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTBlZWUwNWInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTBlZWUwNWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTBlZWUwNWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MGVlZTA1YiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MGVlZTA1YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9Vc2VyL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwZWVlMDViJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==