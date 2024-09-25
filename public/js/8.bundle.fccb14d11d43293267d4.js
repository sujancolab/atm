(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9Vc2VyL1VzZXJJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9Vc2VyL1VzZXJPcmRlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvVXNlci9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9Vc2VyL1VzZXJJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1VzZXIvVXNlck9yZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1VzZXIvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvVXNlci9Vc2VySW5mby52dWU/OTc1MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1VzZXIvVXNlckluZm8udnVlPzYzZTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9Vc2VyL1VzZXJJbmZvLnZ1ZT81YTRiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvVXNlci9Vc2VyT3JkZXIudnVlPzZhYzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9Vc2VyL1VzZXJPcmRlci52dWU/OTg3MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1VzZXIvVXNlck9yZGVyLnZ1ZT8xMWExIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvVXNlci9pbmRleC52dWU/MmRiMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1VzZXIvaW5kZXgudnVlPzU1YmYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9Vc2VyL2luZGV4LnZ1ZT9lOWU1Il0sIm5hbWVzIjpbIm5hbWUiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJDb3VudHJ5TGlzdCIsImRhdGEiLCJmb3JtIiwiaWQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJjb3VudHJ5X2NvZGUiLCJwaG9uZV9udW1iZXIiLCJ1cGZvciIsInNoaXBwaW5nX2FkZHJlc3MiLCJzdHJlZXQiLCJjaXR5Iiwic3RhdGUiLCJ6aXBfY29kZSIsImFwYXJ0bWVudCIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsIm1vdW50ZWQiLCJjcmVhdGVkIiwid2F0Y2giLCJmaWx0ZXJ0YWIiLCJuIiwibyIsImF4aW9zIiwidGhlbiIsImZkYXRhIiwibWV0aG9kcyIsIm9uQ291bnRyeUNoYW5nZSIsInZhbHVlIiwidXBkYXRlSW5mbyIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwib3JkZXJzIiwicHBwIiwic2VhcmNoIiwiZ2V0X215X29yZGVycyIsInVybCIsImxvYWRlcmQiLCJjb250YWluZXIiLCJwYXJhbXMiLCJVc2VyaW5mbyIsIlVzZXJPcmRlciIsInRhYmZvciIsInN3aXRjaF90YWIiLCIkIiwidGh0IiwiZmlsdGVycyIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl9tIiwiX3YiLCJvbiIsInN1Ym1pdCIsIiRldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3IiLCJlcnJvcnMiLCJoYXMiLCJoYXZlVmFsdWUiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsImV4cHJlc3Npb24iLCJhdHRycyIsInR5cGUiLCJkb21Qcm9wcyIsImlucHV0IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiJHNldCIsImZpZWxkIiwiX3MiLCJjbGlja2VkIiwieXBlIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCIsInJlZiIsIl9sIiwib3JkZXIiLCJpbmRleCIsImtleSIsIm9yZGVyX2RhdGUiLCJlc3RpbWF0ZV90aW1lIiwidGV4dENvbnRlbnQiLCJfZSIsInNob3ciLCJvcmRlcl90cmFucyIsIml0ZW0iLCJvaSIsInNyYyIsInNldF9pbWFnZSIsInBob3RvIiwiaGVpZ2h0Iiwid2lkdGgiLCJwcm9kdWN0X25hbWUiLCJwcm9qZWN0Iiwid2lkdGhfc2l6ZSIsImhlaWdodF9zaXplIiwicXR5IiwiX2YiLCJpdGVtX3RvdGFsX3ByaWNlIiwic3RhdHVzIiwidG90YWwiLCJkaXNhYmxlZCIsImN1cnJlbnRfcGFnZSIsImNsaWNrIiwicHJldl9wYWdlX3VybCIsImxhc3RfcGFnZSIsImxhc3RfcGFnZV91cmwiLCJuZXh0X3BhZ2VfdXJsIiwic3RhdGljU3R5bGUiLCJjaGFuZ2UiLCIkJHNlbGVjdGVkVmFsIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmaWx0ZXIiLCJjYWxsIiwib3B0aW9ucyIsInNlbGVjdGVkIiwibWFwIiwidmFsIiwiX3ZhbHVlIiwibXVsdGlwbGUiLCJjb2xvciIsInRvIiwicm9sZSIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzsrQ0F3R0Esb0o7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtFQUNBQSxpQkFEQTtFQUVBQyxvQkFGQTtFQUdBQztJQUNBQztFQURBLENBSEE7RUFNQUMsSUFOQSxrQkFNQTtJQUNBO01BQ0FDO1FBQ0FDLE1BREE7UUFFQUMsY0FGQTtRQUdBQyxhQUhBO1FBSUFDLFNBSkE7UUFLQUMsZ0JBTEE7UUFNQUMsZ0JBTkE7UUFPQUM7TUFQQSxFQURBO01BVUFDO1FBQ0FELGlCQURBO1FBRUFFLFVBRkE7UUFHQUMsUUFIQTtRQUlBQyxTQUpBO1FBS0FDLFlBTEE7UUFNQUM7TUFOQTtJQVZBO0VBbUJBLENBMUJBO0VBMkJBQyw0QkFDQUMsbUVBREEsQ0EzQkE7RUE4QkFDLE9BOUJBLHFCQThCQTtJQUNB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LHFQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvOC5idW5kbGUuZmNjYjE0ZDExZDQzMjkzMjY3ZDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIHBiLTUgdXNlckFjY291bnRDb250XCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtYi01XCI+UGVyc29uYWwgSW5mb3JtYXRpb248L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmRUaXRsZSB0ZXh0TGlnaHRHcmF5IG1iLTVcIj5HZW5lcmFsIEluZm88L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwidGV4dC1sZWZ0XCIgQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlSW5mbygpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdmaXJzdF9uYW1lJykgLCdoYXZlVmFsdWUnOiBmb3JtLmZpcnN0X25hbWUgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImZvcm0uZmlyc3RfbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5GaXJzdCBOYW1lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJmaXJzdF9uYW1lXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ2xhc3RfbmFtZScpICwnaGF2ZVZhbHVlJzogZm9ybS5sYXN0X25hbWUgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImZvcm0ubGFzdF9uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkxhc3QgTmFtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwibGFzdF9uYW1lXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ2VtYWlsJykgLCdoYXZlVmFsdWUnOiBmb3JtLmVtYWlsIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5FbWFpbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiZW1haWxcIiBjbGFzcz1cImVycm9ybXNnXCI+PC9oYXMtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIiAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ2NvdW50cnlfY29kZScpICwnaGF2ZVZhbHVlJzogZm9ybS5jb3VudHJ5X2NvZGUgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VsZWN0XCI+e3tmb3JtLmNvdW50cnlfY29kZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCB3LTEwMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0RHJvcERvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50cnlMaXN0ICBAY2xpY2tlZD1cIm9uQ291bnRyeUNoYW5nZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiY291bnRyeV9jb2RlXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygncGhvbmVfbnVtYmVyJykgLCdoYXZlVmFsdWUnOiBmb3JtLnBob25lX251bWJlciB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmb3JtLnBob25lX251bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5QaG9uZSBOdW1iZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBob25lX251bWJlclwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuU3VjY2VzXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZFRpdGxlIHRleHRMaWdodEdyYXkgbWItNVwiPlNoaXBwaW5nIEFkZHJlc3MgSW5mbzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwidGV4dC1sZWZ0XCIgQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlSW5mbygnc2hpcHBpbmcnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCIgOmNsYXNzPVwieyAnZXJyb3InOiBzaGlwcGluZ19hZGRyZXNzLmVycm9ycy5oYXMoJ3N0cmVldCcpICwnaGF2ZVZhbHVlJzogc2hpcHBpbmdfYWRkcmVzcy5zdHJlZXQgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJzaGlwcGluZ19hZGRyZXNzLnN0cmVldFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlN0cmVldDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwic2hpcHBpbmdfYWRkcmVzc1wiIGZpZWxkPVwic3RyZWV0XCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiIDpjbGFzcz1cInsgJ2Vycm9yJzogc2hpcHBpbmdfYWRkcmVzcy5lcnJvcnMuaGFzKCdjaXR5JykgLCdoYXZlVmFsdWUnOiBzaGlwcGluZ19hZGRyZXNzLmNpdHkgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInNoaXBwaW5nX2FkZHJlc3MuY2l0eVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkNpdHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cInNoaXBwaW5nX2FkZHJlc3NcIiBmaWVsZD1cImNpdHlcIiBjbGFzcz1cImVycm9ybXNnXCI+PC9oYXMtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCIgOmNsYXNzPVwieyAnZXJyb3InOiBzaGlwcGluZ19hZGRyZXNzLmVycm9ycy5oYXMoJ3N0YXRlJykgLCdoYXZlVmFsdWUnOiBzaGlwcGluZ19hZGRyZXNzLnN0YXRlIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwic2hpcHBpbmdfYWRkcmVzcy5zdGF0ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlN0YXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJzaGlwcGluZ19hZGRyZXNzXCIgZmllbGQ9XCJzdGF0ZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIiA6Y2xhc3M9XCJ7ICdlcnJvcic6IHNoaXBwaW5nX2FkZHJlc3MuZXJyb3JzLmhhcygnemlwX2NvZGUnKSAsJ2hhdmVWYWx1ZSc6IHNoaXBwaW5nX2FkZHJlc3MuemlwX2NvZGUgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJzaGlwcGluZ19hZGRyZXNzLnppcF9jb2RlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+WmlwIENvZGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cInNoaXBwaW5nX2FkZHJlc3NcIiBmaWVsZD1cInppcF9jb2RlXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiIDpjbGFzcz1cInsgJ2Vycm9yJzogc2hpcHBpbmdfYWRkcmVzcy5lcnJvcnMuaGFzKCdhcGFydG1lbnQnKSAsJ2hhdmVWYWx1ZSc6IHNoaXBwaW5nX2FkZHJlc3MuYXBhcnRtZW50IH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwic2hpcHBpbmdfYWRkcmVzcy5hcGFydG1lbnRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5BcGFydG1lbnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cInNoaXBwaW5nX2FkZHJlc3NcIiBmaWVsZD1cImFwYXJ0bWVudFwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuU3VjY2VzXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiBpbXBvcnQgQ291bnRyeUxpc3QgZnJvbSAnLi4vLi4vQ291bnRyeS1saXN0LnZ1ZSdcbiBpbXBvcnQge1xuICAgICBtYXBHZXR0ZXJzLFxuICAgICBtYXBBY3Rpb25zXG4gfSBmcm9tIFwidnVleFwiO1xuIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgbmFtZTogXCJVc2VyLWluZm9cIixcbiAgICAgcHJvcHM6IFsnZmlsdGVydGFiJ10sXG4gICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgIENvdW50cnlMaXN0XG4gICAgIH0sXG4gICAgIGRhdGEoKSB7XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgbGFzdF9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgICBjb3VudHJ5X2NvZGU6ICcnLFxuICAgICAgICAgICAgICAgICBwaG9uZV9udW1iZXI6ICcnLFxuICAgICAgICAgICAgICAgICB1cGZvcjogJ2luZm8nLFxuICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgIHNoaXBwaW5nX2FkZHJlc3M6IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgdXBmb3I6ICdzaGlwcGluZycsXG4gICAgICAgICAgICAgICAgIHN0cmVldDogJycsXG4gICAgICAgICAgICAgICAgIGNpdHk6ICcnLFxuICAgICAgICAgICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgICAgICAgICAgIHppcF9jb2RlOiAnJyxcbiAgICAgICAgICAgICAgICAgYXBhcnRtZW50OiAnJyxcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgfVxuICAgICB9LFxuICAgICBjb21wdXRlZDoge1xuICAgICAgICAgLi4ubWFwR2V0dGVycyhbXCJlcnJvcnNcIl0pLFxuICAgICB9LFxuICAgICBtb3VudGVkKCkge1xuICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwic2V0RXJyb3JzXCIsIHt9KTtcbiAgICAgfSxcbiAgICAgY3JlYXRlZCgpIHtcblxuXG4gICAgIH0sXG4gICAgIHdhdGNoOiB7XG4gICAgICAgICBhc3luYyBmaWx0ZXJ0YWIobiwgbykge1xuICAgICAgICAgICAgIGlmIChuID09ICdJbmZvcm1hdGlvbicpIHtcblxuICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvcHJvZmlsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZkYXRhID0gZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgZmRhdGEudXBmb3IgPSAnaW5mbydcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZmlsbChmZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmRhdGEuc2hpcHBpbmdfYWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZGF0YS5zaGlwcGluZ19hZGRyZXNzLnVwZm9yID0gJ3NoaXBwaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nX2FkZHJlc3MuZmlsbChmZGF0YS5zaGlwcGluZ19hZGRyZXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgIH0sXG4gICAgIH0sXG4gICAgIG1ldGhvZHM6IHtcbiAgICAgICAgIG9uQ291bnRyeUNoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgICAgIHRoaXMuZm9ybS5jb3VudHJ5X2NvZGUgPSB2YWx1ZTtcbiAgICAgICAgIH0sXG4gICAgICAgICB1cGRhdGVJbmZvKG4pIHtcbiAgICAgICAgICAgICBpZiAobiA9PSAnc2hpcHBpbmcnKSB7XG4gICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdfYWRkcmVzcy5wdXQoJ2FwaS9wcm9maWxlJylcbiAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZkYXRhID0gZGF0YS5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICBmZGF0YS51cGZvciA9ICdzaGlwcGluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nX2FkZHJlc3MuZmlsbChmZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGRhdGEpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucHV0KCdhcGkvcHJvZmlsZScpXG4gICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmZGF0YSA9IGRhdGEuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgZmRhdGEudXBmb3IgPSAnaW5mbydcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZmlsbChmZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRlbWl0KCdnZXRfcHJvZmlsZScsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGRhdGEpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgfSxcbiAgICAgfVxuIH1cbiAgICA8L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwYi01IHVzZXJBY2NvdW50Q29udFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXIgbWItNVwiPk9yZGVycyBNYW5hZ2VtZW50PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB2bGQtcGFyZW50XCIgcmVmPVwidW9yZF9tYWluX3JlZlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvblwiIGlkPVwiYWNjb3JkaW9uRXhhbXBsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIm9yZGVycyAmJiBvcmRlcnMuZGF0YVwiIHYtZm9yPVwiKG9yZGVyLCBpbmRleCkgaW4gb3JkZXJzLmRhdGFcIiAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIiA6aWQ9XCInaGVhZGluZ09uZScraW5kZXhcIiA6a2V5PVwiJ3AnK2luZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB0YWJJbmZvXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiA6ZGF0YS10YXJnZXQ9XCInI2NvbGxhcHNlT25lJytpbmRleFwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFyaWEtY29udHJvbHM9XCInY29sbGFwc2VPbmUnK2luZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImluZm9UaXRsZVwiPk9yZGVyIE51bWJlcjoge3sgb3JkZXIuaWQgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57e29yZGVyLm9yZGVyX2RhdGUgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb0NvbHVtblwiIHYtaWY9XCJvcmRlci5lc3RpbWF0ZV90aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImluZm9UaXRsZVwiPjxpbWcgc3JjPVwiaW1hZ2VzL3RydWNrLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW1nLWZsdWlkIGF2SWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF2ZXJhZ2UgVGltZSBlc3RpbWF0aW9uOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtdGV4dD1cIm9yZGVyLmVzdGltYXRlX3RpbWVcIj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOmlkPVwiJ2NvbGxhcHNlT25lJytpbmRleFwiIGNsYXNzPVwiY29sbGFwc2UgXCIgOmNsYXNzPVwie3Nob3c6aW5kZXg9PTB9XCIgOmFyaWEtbGFiZWxsZWRieT1cIidoZWFkaW5nT25lJytpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25FeGFtcGxlXCIgOmtleT1cIidzJytpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlckxpc3RSb3cgZC1mbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIiB2LWZvcj1cIihpdGVtLCBvaSkgaW4gb3JkZXIub3JkZXJfdHJhbnNcIiA6a2V5PVwib2lcIiB2LWlmPVwib3JkZXIub3JkZXJfdHJhbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBvcmRlckdlbmVyYWxJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJJbWdXcnByXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwic2V0X2ltYWdlKGl0ZW0ucGhvdG8pXCIgY2xhc3M9XCJpbWctZmx1aWRcIiBoZWlnaHQ9XCIyNTVcIiB3aWR0aD1cIjIzMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+e3sgaXRlbS5wcm9kdWN0X25hbWUgfX0gIHt7IGl0ZW0ucHJvamVjdD8gJyhQcm9qZWN0IElELScrIGl0ZW0ucHJvamVjdC5pZCsnKSc6JycgfX0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRMaWdodEdyYXlcIj5XaWR0aDo8L3NwYW4+PHNwYW4+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRCb2xkNjAwXCIgdi10ZXh0PVwiaXRlbS53aWR0aF9zaXplXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDsmbmJzcDsmbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dExpZ2h0R3JheVwiPkhlaWdodDo8L3NwYW4+PHNwYW4+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRCb2xkNjAwXCIgdi10ZXh0PVwiaXRlbS5oZWlnaHRfc2l6ZVwiPiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRMaWdodEdyYXlcIj5RdHk6PC9zcGFuPjxzcGFuPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0Qm9sZDYwMFwiIHYtdGV4dD1cIml0ZW0ucXR5XCI+Mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlclByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRMaWdodEdyYXlcIj5QcmljZTogPC9zcGFuPjxzcGFuPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dEJvbGQ2MDBcIj57eyBpdGVtLml0ZW1fdG90YWxfcHJpY2V8dG9DdXJyZW5jeSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlclN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0R3JlZW4gdGV4dEJvbGQ1MDBcIiB2LWlmPVwib3JkZXIuc3RhdHVzPT0nUGF5bWVudCBQZW5kaW5nJ1wiPlBheW1lbnQgUGVuZGluZy9GYWlsZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHRHcmVlbiB0ZXh0Qm9sZDUwMFwiIHYtdGV4dD1cIml0ZW0uc3RhdHVzXCIgdi1lbHNlPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgIFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBtYi01XCIgdi1pZj1cIm9yZGVycyAmJiBvcmRlcnMuZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICBcdCAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0YWJsZU5hdmlnYXRpb25cIiB2LWlmPVwib3JkZXJzLnRvdGFsPjBcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blRyYW5zcGFyZW50IGxlZnROYXZcIiA6Y2xhc3M9XCJ7ZGlzYWJsZWQ6IG9yZGVycy5jdXJyZW50X3BhZ2U8PTF9XCJcbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIm9yZGVycy5jdXJyZW50X3BhZ2U8PTFcIlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0X215X29yZGVycyhvcmRlcnMucHJldl9wYWdlX3VybClcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJvcmRlcnMuY3VycmVudF9wYWdlPj1vcmRlcnMubGFzdF9wYWdlXCI+e3tvcmRlcnMuY3VycmVudF9wYWdlfX1cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIC97e29yZGVycy5sYXN0X3BhZ2V9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAge3tvcmRlcnMuY3VycmVudF9wYWdlfX0gL1xuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwb2ludGVyXCIgOmRpc2FibGVkPVwib3JkZXJzLmN1cnJlbnRfcGFnZT49b3JkZXJzLmxhc3RfcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0X215X29yZGVycyhvcmRlcnMubGFzdF9wYWdlX3VybClcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgICAgICB7e29yZGVycy5sYXN0X3BhZ2V9fVxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5UcmFuc3BhcmVudCByaWdodE5hdlwiXG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ZGlzYWJsZWQ6IG9yZGVycy5jdXJyZW50X3BhZ2U+PW9yZGVycy5sYXN0X3BhZ2V9XCJcbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIm9yZGVycy5jdXJyZW50X3BhZ2U+PW9yZGVycy5sYXN0X3BhZ2VcIlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0X215X29yZGVycyhvcmRlcnMubmV4dF9wYWdlX3VybClcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAganVzdGlmeS1jb250ZW50LWVuZCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgIDxzcGFuPlJvd3MgcGVyIHBhZ2UgJm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHAtMiBwci00IHJvdW5kZWRcIiBzdHlsZT1cIndpZHRoOiBhdXRvO1wiIHYtbW9kZWw9XCJwcHBcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNVwiPjE1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFx0ICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLTAgb3JkZXJIZWxwIG10LTVcbiAgICAgICAgICAgICAgICBcIj5PcmRlciBQcm9ibGVtcz8gPHJvdXRlci1saW5rIHRvPVwiL2NvbnRhY3RcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT1cImNvbG9yOiAjMjEyNTI5O1wiPjx1PkdldCBoZWxwPC91PiA8L3JvdXRlci1saW5rPiA8aW1nIHNyYz1cImltYWdlcy9jdXN0b21lci1zZXJ2aWNlLnBuZ1wiIGNsYXNzPVwiaW1nLWZsdWlkXCI+PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJVc2VyLW9yZGVyXCIsXG4gICAgcHJvcHM6IFsnZmlsdGVydGFiJ10sXG4gICAgY29tcG9uZW50czoge30sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9yZGVyczogJycsXG4gICAgICAgICAgICBwcHA6MTAsXG4gICAgICAgICAgICBzZWFyY2g6JycsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGFzeW5jIGZpbHRlcnRhYihuLCBvKSB7XG4gICAgICAgICAgICBpZiAobiA9PSAnT3JkZXJzJykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0X215X29yZGVycygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBwcHAoKXtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0X215X29yZGVycygpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbmFzeW5jIGdldF9teV9vcmRlcnModXJsID0gXCIvYXBpL29yZGVyXCIpIHtcblx0ICAgICAgICAgICAgbGV0IGxvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xuXHQgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnVvcmRfbWFpbl9yZWYsXG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICBheGlvcy5nZXQodXJsLCB7XG5cdCAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHBwcDogdGhpcy5wcHAsXG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSlcblx0ICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gW11cblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVycyA9IHJlcy5kYXRhLmRhdGFcblx0ICAgICAgICAgICAgICAgICAgICBsb2FkZXJkLmhpZGUoKVxuXHQgICAgICAgICAgICAgICAgfSlcblx0ICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuXHQgICAgICAgICAgICAgICAgICAgIGxvYWRlcmQuaGlkZSgpXG5cdCAgICAgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9LFxuICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBweC0wIHN0ZXBzQmFyXCI+XG4gICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzIGN1c3RvbVRhYiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJvcmRlci10b3BcIiBpZD1cIlwiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCIgQGNsaWNrPVwidGFiZm9yPSdJbmZvcm1hdGlvbidcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgcm91bmRlZC0wIGFjdGl2ZVwiICBpZD1cImluZm8tdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2luZm9cIiByb2xlPVwidGFiXCJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJpbmZvXCIgYXJpYS1zZWxlY3RlZD1cInRydWVcIj5JbmZvcm1hdGlvbjwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiBAY2xpY2s9XCJ0YWJmb3I9J09yZGVycydcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgcm91bmRlZC0wIFwiICBpZD1cIm9yZGVycy10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjb3JkZXJzXCIgcm9sZT1cInRhYlwiXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwib3JkZXJzXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+T3JkZXJzIE1hbmFnZW1lbnQ8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnQgYmdHcmF5XCIgaWQ9XCJteVRhYkNvbnRlbnRcIj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgaWQ9XCJpbmZvXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaW5mby10YWJcIj5cbiAgICAgICAgICAgIDxVc2VyaW5mbyA6ZmlsdGVydGFiLnN5bmM9XCJ0YWJmb3JcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZSAgb3JkZXJBY2NvcmR0aW9uXCIgaWQ9XCJvcmRlcnNcIiByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwib3JkZXJzLXRhYlwiPlxuICAgICAgICAgICAgPFVzZXJPcmRlciA6ZmlsdGVydGFiLnN5bmM9XCJ0YWJmb3JcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBVc2VyaW5mbyBmcm9tICcuL1VzZXJJbmZvLnZ1ZSdcbiAgICBpbXBvcnQgVXNlck9yZGVyIGZyb20gJy4vVXNlck9yZGVyLnZ1ZSdcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiVXNlci1hY2NvdW50XCIsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIFVzZXJpbmZvLFxuICAgICAgICAgICAgVXNlck9yZGVyXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRhYmZvcjonJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge30sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGFzeW5jIHN3aXRjaF90YWIoKSB7XG5cbiAgICAgICAgICAgfSxcblxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy50YWJmb3I9XCJJbmZvcm1hdGlvblwiO1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kcm91dGUuaGFzaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRyb3V0ZS5oYXNoID09JyNvcmRlcl9tbmd0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmZvciA9ICdPcmRlcnMnO1xuICAgICAgICAgICAgICAgICAgICAkKCdhW2hyZWY9XCIjb3JkZXJzXCJdJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2FbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5vbignc2hvd24uYnMudGFiJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciB0aHQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAkKCdhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgdGh0LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBjcmVhdGVkKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcnM6IHtcblxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIH0sXG5cbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBwYi01IHVzZXJBY2NvdW50Q29udFwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkVGl0bGUgdGV4dExpZ2h0R3JheSBtYi01XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJHZW5lcmFsIEluZm9cIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWxlZnRcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlSW5mbygpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJmaXJzdF9uYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZvcm0uZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5maXJzdF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uZmlyc3RfbmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJmaXJzdF9uYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGaXJzdCBOYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImZpcnN0X25hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImxhc3RfbmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmxhc3RfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmxhc3RfbmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJsYXN0X25hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIkxhc3QgTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwibGFzdF9uYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJlbWFpbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZW1haWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwiRW1haWxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImVtYWlsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJjb3VudHJ5X2NvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5jb3VudHJ5X2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBzZWxlY3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybS5jb3VudHJ5X2NvZGUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsIHctMTAwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzZWxlY3REcm9wRG93blwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJDb3VudHJ5TGlzdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrZWQ6IF92bS5vbkNvdW50cnlDaGFuZ2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiY291bnRyeV9jb2RlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC05XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInBob25lX251bWJlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLnBob25lX251bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBob25lX251bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBob25lX251bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucGhvbmVfbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGhvbmVfbnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQaG9uZSBOdW1iZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwicGhvbmVfbnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctNlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRUaXRsZSB0ZXh0TGlnaHRHcmF5IG1iLTVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlNoaXBwaW5nIEFkZHJlc3MgSW5mb1wiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtbGVmdFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVJbmZvKFwic2hpcHBpbmdcIilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnNoaXBwaW5nX2FkZHJlc3MuZXJyb3JzLmhhcyhcInN0cmVldFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5zaGlwcGluZ19hZGRyZXNzLnN0cmVldCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaGlwcGluZ19hZGRyZXNzLnN0cmVldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaGlwcGluZ19hZGRyZXNzLnN0cmVldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zaGlwcGluZ19hZGRyZXNzLnN0cmVldCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hpcHBpbmdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cmVldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwiU3RyZWV0XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5zaGlwcGluZ19hZGRyZXNzLCBmaWVsZDogXCJzdHJlZXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnNoaXBwaW5nX2FkZHJlc3MuZXJyb3JzLmhhcyhcImNpdHlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy5jaXR5LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNoaXBwaW5nX2FkZHJlc3MuY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaGlwcGluZ19hZGRyZXNzLmNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zaGlwcGluZ19hZGRyZXNzLmNpdHkgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNoaXBwaW5nX2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCJDaXR5XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5zaGlwcGluZ19hZGRyZXNzLCBmaWVsZDogXCJjaXR5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5zaGlwcGluZ19hZGRyZXNzLmVycm9ycy5oYXMoXCJzdGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5zaGlwcGluZ19hZGRyZXNzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNoaXBwaW5nX2FkZHJlc3Muc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hpcHBpbmdfYWRkcmVzcy5zdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zaGlwcGluZ19hZGRyZXNzLnN0YXRlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaGlwcGluZ19hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIlN0YXRlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5zaGlwcGluZ19hZGRyZXNzLCBmaWVsZDogXCJzdGF0ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy5lcnJvcnMuaGFzKFwiemlwX2NvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy56aXBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaGlwcGluZ19hZGRyZXNzLnppcF9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNoaXBwaW5nX2FkZHJlc3MuemlwX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2hpcHBpbmdfYWRkcmVzcy56aXBfY29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hpcHBpbmdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCJaaXAgQ29kZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uc2hpcHBpbmdfYWRkcmVzcywgZmllbGQ6IFwiemlwX2NvZGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnNoaXBwaW5nX2FkZHJlc3MuZXJyb3JzLmhhcyhcImFwYXJ0bWVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5zaGlwcGluZ19hZGRyZXNzLmFwYXJ0bWVudCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaGlwcGluZ19hZGRyZXNzLmFwYXJ0bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaGlwcGluZ19hZGRyZXNzLmFwYXJ0bWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zaGlwcGluZ19hZGRyZXNzLmFwYXJ0bWVudCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hpcHBpbmdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwYXJ0bWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwiQXBhcnRtZW50XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5zaGlwcGluZ19hZGRyZXNzLCBmaWVsZDogXCJhcGFydG1lbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtYi01XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlBlcnNvbmFsIEluZm9ybWF0aW9uXCIpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuU3VjY2VzXCIsIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIlNhdmVcIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0blN1Y2Nlc1wiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJTYXZlXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgcGItNSB1c2VyQWNjb3VudENvbnRcIiB9LCBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyByZWY6IFwidW9yZF9tYWluX3JlZlwiLCBzdGF0aWNDbGFzczogXCJyb3cgdmxkLXBhcmVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhY2NvcmRpb25cIiwgYXR0cnM6IHsgaWQ6IFwiYWNjb3JkaW9uRXhhbXBsZVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ub3JkZXJzLmRhdGEsIGZ1bmN0aW9uIChvcmRlciwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcmRlcnMgJiYgX3ZtLm9yZGVycy5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInBcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImhlYWRpbmdPbmVcIiArIGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdGFiSW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjY29sbGFwc2VPbmVcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImNvbGxhcHNlT25lXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9Db2x1bW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9UaXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9yZGVyIE51bWJlcjogXCIgKyBfdm0uX3Mob3JkZXIuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhvcmRlci5vcmRlcl9kYXRlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZXN0aW1hdGVfdGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5mb0NvbHVtblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgxLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZXN0aW1hdGVfdGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJzXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBzaG93OiBpbmRleCA9PSAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJjb2xsYXBzZU9uZVwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwiaGVhZGluZ09uZVwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1wYXJlbnRcIjogXCIjYWNjb3JkaW9uRXhhbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChvcmRlci5vcmRlcl90cmFucywgZnVuY3Rpb24gKGl0ZW0sIG9pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yZGVyLm9yZGVyX3RyYW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBvaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZGVyTGlzdFJvdyBkLWZsZXggZmxleC13cmFwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IG9yZGVyR2VuZXJhbEluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwib3JkZXJJbWdXcnByXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5zZXRfaW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGhvdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjU1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMzBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJvcmRlckRldGFpbHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJvZHVjdF9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIoUHJvamVjdCBJRC1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlkICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRMaWdodEdyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiV2lkdGg6XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLCoFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRCb2xkNjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ud2lkdGhfc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiwqDCoMKgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRMaWdodEdyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSGVpZ2h0OlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiwqBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0Qm9sZDYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmhlaWdodF9zaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRMaWdodEdyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUXR5OlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiwqBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dEJvbGQ2MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwib3JkZXJQcmljZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0TGlnaHRHcmF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlByaWNlOiBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIsKgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0Qm9sZDYwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b0N1cnJlbmN5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLml0ZW1fdG90YWxfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJvcmRlclN0YXR1c1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5zdGF0dXMgPT0gXCJQYXltZW50IFBlbmRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0R3JlZW4gdGV4dEJvbGQ1MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQYXltZW50IFBlbmRpbmcvRmFpbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRHcmVlbiB0ZXh0Qm9sZDUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ub3JkZXJzICYmIF92bS5vcmRlcnMuZGF0YVxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBtYi01XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5vcmRlcnMudG90YWwgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciB0YWJsZU5hdmlnYXRpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5UcmFuc3BhcmVudCBsZWZ0TmF2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5vcmRlcnMuY3VycmVudF9wYWdlIDw9IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5vcmRlcnMuY3VycmVudF9wYWdlIDw9IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0X215X29yZGVycyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVycy5wcmV2X3BhZ2VfdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtYW5nbGUtbGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlcnMuY3VycmVudF9wYWdlID49IF92bS5vcmRlcnMubGFzdF9wYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5vcmRlcnMuY3VycmVudF9wYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFxcdCAgICAgICAgICAgICAgICAgICAgL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5vcmRlcnMubGFzdF9wYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXFx0ICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ub3JkZXJzLmN1cnJlbnRfcGFnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAvXFxuICAgICAgICAgICAgICAgIFxcdCAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlcnMuY3VycmVudF9wYWdlID49XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJzLmxhc3RfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRfbXlfb3JkZXJzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJzLmxhc3RfcGFnZV91cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFxcdCAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ub3JkZXJzLmxhc3RfcGFnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXFx0ICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5UcmFuc3BhcmVudCByaWdodE5hdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVycy5jdXJyZW50X3BhZ2UgPj1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlcnMubGFzdF9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVycy5jdXJyZW50X3BhZ2UgPj1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlcnMubGFzdF9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldF9teV9vcmRlcnMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlcnMubmV4dF9wYWdlX3VybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWFuZ2xlLXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidy0xMDAganVzdGlmeS1jb250ZW50LWVuZCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlJvd3MgcGVyIHBhZ2UgwqBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHBwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHAtMiBwci00IHJvdW5kZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCJhdXRvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBwcCA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiNVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMTBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjEwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxNVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMTVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibS0wIG9yZGVySGVscCBtdC01XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiT3JkZXIgUHJvYmxlbXM/IFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIiMyMTI1MjlcIiB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IFwiL2NvbnRhY3RcIiwgdGFyZ2V0OiBcIl9ibGFua1wiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJ1XCIsIFtfdm0uX3YoXCJHZXQgaGVscFwiKV0pXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcImltYWdlcy9jdXN0b21lci1zZXJ2aWNlLnBuZ1wiIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG1iLTVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiT3JkZXJzIE1hbmFnZW1lbnRcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mb1RpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWQgYXZJY29uXCIsXG4gICAgICAgIGF0dHJzOiB7IHNyYzogXCJpbWFnZXMvdHJ1Y2sucG5nXCIgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFxuICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF2ZXJhZ2UgVGltZSBlc3RpbWF0aW9uOlwiXG4gICAgICApLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBweC0wIHN0ZXBzQmFyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJ1bFwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYgbmF2LXRhYnMgY3VzdG9tVGFiIGp1c3RpZnktY29udGVudC1jZW50ZXIgYm9yZGVyLXRvcFwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJcIiwgcm9sZTogXCJ0YWJsaXN0XCIgfSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0udGFiZm9yID0gXCJJbmZvcm1hdGlvblwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmsgcm91bmRlZC0wIGFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJpbmZvLXRhYlwiLFxuICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIjaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiSW5mb3JtYXRpb25cIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS50YWJmb3IgPSBcIk9yZGVyc1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmsgcm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm9yZGVycy10YWJcIixcbiAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI29yZGVyc1wiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcIm9yZGVyc1wiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiT3JkZXJzIE1hbmFnZW1lbnRcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItY29udGVudCBiZ0dyYXlcIiwgYXR0cnM6IHsgaWQ6IFwibXlUYWJDb250ZW50XCIgfSB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcImluZm9cIixcbiAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImluZm8tdGFiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJVc2VyaW5mb1wiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGZpbHRlcnRhYjogX3ZtLnRhYmZvciB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIFwidXBkYXRlOmZpbHRlcnRhYlwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0udGFiZm9yID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGUgb3JkZXJBY2NvcmR0aW9uXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogXCJvcmRlcnNcIixcbiAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcIm9yZGVycy10YWJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcIlVzZXJPcmRlclwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGZpbHRlcnRhYjogX3ZtLnRhYmZvciB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIFwidXBkYXRlOmZpbHRlcnRhYlwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0udGFiZm9yID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VySW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWMyNjY5YzAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlckluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VySW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFjMjY2OWMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFjMjY2OWMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFjMjY2OWMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VySW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWMyNjY5YzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWMyNjY5YzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvVXNlci9Vc2VySW5mby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VySW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzI2NjljMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlck9yZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTg2YjhhYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyT3JkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyT3JkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxwcm9ncmFtbWluZ1xcXFx3YW1wNjRcXFxcd3d3XFxcXHVuaXRlZC1zY3JhcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwYTg2YjhhYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYTg2YjhhYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYTg2YjhhYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVXNlck9yZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTg2YjhhYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwYTg2YjhhYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9Vc2VyL1VzZXJPcmRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJPcmRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlck9yZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlck9yZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTg2YjhhYyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwZWVlMDViJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxwcm9ncmFtbWluZ1xcXFx3YW1wNjRcXFxcd3d3XFxcXHVuaXRlZC1zY3JhcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1MGVlZTA1YicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MGVlZTA1YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MGVlZTA1YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwZWVlMDViJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUwZWVlMDViJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1VzZXIvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTBlZWUwNWImXCIiXSwic291cmNlUm9vdCI6IiJ9