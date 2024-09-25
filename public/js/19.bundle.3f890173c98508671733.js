(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Vendor/Settings.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/Vendor/Settings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_Wallet_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Wallet.vue */ "./resources/js/components/account/common/Wallet.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Country_list_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Country-list.vue */ "./resources/js/components/Country-list.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['filtertab'],
  name: "Settings",
  components: {
    CountryList: _Country_list_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Wallet: _common_Wallet_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
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
        upfor: 'info'
      }),
      Profits: '',
      ppp: 10
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
                if (!(n == 'My Settings')) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return _this.getVendorProfits();

              case 3:
                _this.$refs.walletftch.update_wallet();

              case 4:
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
    updateInfo: function updateInfo() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.form.put('api/profile').then(function (data) {
                  var fdata = data.data.data;
                  fdata.upfor = 'info';

                  _this2.form.fill(fdata);

                  _this2.$root.$emit('get_profile', '');

                  Toast.fire({
                    icon: 'success',
                    title: data.data.message
                  });
                })["catch"](function (data) {});

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getVendorProfits: function getVendorProfits() {
      var _arguments = arguments,
          _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var url, loaderd;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : "/api/profit";
                loaderd = _this3.$loading.show({
                  container: _this3.$refs.vs_profitRef
                });
                axios.get(url, {
                  params: {
                    ppp: _this3.ppp
                  }
                }).then(function (res) {
                  _this3.Profits = res.data.data;
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
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              axios.get("api/profile").then(function (_ref) {
                var data = _ref.data;
                var fdata = data.data;
                fdata.upfor = 'info';

                _this5.form.fill(fdata);
              });

            case 1:
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Vendor/Settings.vue?vue&type=template&id=90c8f6a6&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/Vendor/Settings.vue?vue&type=template&id=90c8f6a6& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
      id: "settings",
      role: "tabpanel",
      "aria-labelledby": "settings-tab"
    }
  }, [_c("div", {
    staticClass: "container pb-1 cont1080"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("ul", {
    staticClass: "subLink textLightGray list-unstyled d-flex align-items-center justify-content-center"
  }, [_vm._m(1), _vm._v(" "), _c("li", {
    staticClass: "px-3"
  }, [_c("a", {
    directives: [{
      name: "scroll-to",
      rawName: "v-scroll-to",
      value: "#my-profits",
      expression: "'#my-profits'"
    }],
    attrs: {
      href: "#"
    }
  }, [_vm._v("My Profits")])])]), _vm._v(" "), _c("hr")])])]), _vm._v(" "), _c("div", {
    staticClass: "container cont1080 bg-white venAccInfo",
    attrs: {
      id: "business-information"
    }
  }, [_vm._m(2), _vm._v(" "), _c("form", {
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
    staticClass: "inputWrpr haveValue",
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
  }, [_vm._v("First name")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "first_name"
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
  }, [_vm._v("Last name")]), _vm._v(" "), _c("has-error", {
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
  }, [_vm._v("Email address")]), _vm._v(" "), _c("has-error", {
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
  }, [_vm._v("Phone number")]), _vm._v(" "), _c("has-error", {
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
  }, [_vm._v("Business name")]), _vm._v(" "), _c("has-error", {
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
  }), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("has-error", {
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
  }), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "company_address"
    }
  })], 1)]), _vm._v(" "), _vm._m(5)])])]), _vm._v(" "), _c("div", {
    ref: "vs_profitRef",
    staticClass: "container venResult cont1080 bg-white vld-parent",
    attrs: {
      id: "my-profits"
    }
  }, [_c("div", {
    staticClass: "text-center mb-2"
  }, [_c("h3", [_vm._v("My Profit")]), _vm._v(" "), _vm.Profits ? _c("p", [_vm._v(_vm._s(_vm.Profits.total) + " Orders")]) : _vm._e()]), _vm._v(" "), _c("Wallet", {
    ref: "walletftch"
  }), _vm._v(" "), _c("div", {
    staticClass: "divTable myProfitTable d-flex flex-column flex-wrap"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "tbody w-100"
  }, _vm._l(_vm.Profits.data, function (row, index) {
    return _vm.Profits && _vm.Profits.data && _vm.Profits.data.length > 0 ? _c("div", {
      key: index,
      staticClass: "tr d-flex flex-wrap"
    }, [_c("div", {
      staticClass: "td",
      domProps: {
        textContent: _vm._s(row.id)
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "td"
    }, [_vm._v(_vm._s(row.project_contractor_designer ? row.project_contractor_designer : row.client.first_name + " " + row.client.last_name))]), _vm._v(" "), _c("div", {
      staticClass: "td",
      domProps: {
        textContent: _vm._s(row.project_sales_man)
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "td"
    }, [_vm._v(_vm._s(_vm._f("toCurrency")(row.total_order_item_price)))])]) : _vm._e();
  }), 0), _vm._v(" "), _c("UjPagination", {
    attrs: {
      records: _vm.Profits,
      ppp: _vm.ppp,
      scrollto: "my-profits"
    },
    on: {
      fetchRecord: function fetchRecord(val) {
        return _vm.getVendorProfits(val);
      },
      "update:ppp": function updatePpp($event) {
        _vm.ppp = $event;
      }
    }
  })], 1)], 1), _vm._v(" "), _c("br")]);
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
  }, [_vm._v("My Settings")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("li", {
    staticClass: "px-3"
  }, [_c("a", {
    staticClass: "active",
    attrs: {
      href: "#business-information"
    }
  }, [_vm._v("Business Information")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "text-center mb-5"
  }, [_c("h3", [_vm._v("Business Information")]), _vm._v(" "), _c("p", [_vm._v("Any changes will be made after approval")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("span", {
    staticClass: "label"
  }, [_vm._v("Company phone number "), _c("span", {
    staticClass: "optional"
  }, [_vm._v("(optional)")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("span", {
    staticClass: "label"
  }, [_vm._v("Company address "), _c("span", {
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
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "thead w-100"
  }, [_c("div", {
    staticClass: "tr d-flex flex-wrap"
  }, [_c("div", {
    staticClass: "td"
  }, [_vm._v("Confirmation number")]), _vm._v(" "), _c("div", {
    staticClass: "td"
  }, [_vm._v("Contractor")]), _vm._v(" "), _c("div", {
    staticClass: "td"
  }, [_vm._v("Representative")]), _vm._v(" "), _c("div", {
    staticClass: "td"
  }, [_vm._v("Total Price")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/account/Vendor/Settings.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/account/Vendor/Settings.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_90c8f6a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=90c8f6a6& */ "./resources/js/components/account/Vendor/Settings.vue?vue&type=template&id=90c8f6a6&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/components/account/Vendor/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_90c8f6a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_90c8f6a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/Vendor/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/account/Vendor/Settings.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/account/Vendor/Settings.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Vendor/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/account/Vendor/Settings.vue?vue&type=template&id=90c8f6a6&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/account/Vendor/Settings.vue?vue&type=template&id=90c8f6a6& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_90c8f6a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=90c8f6a6& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/Vendor/Settings.vue?vue&type=template&id=90c8f6a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_90c8f6a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_90c8f6a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9WZW5kb3IvU2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvVmVuZG9yL1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1ZlbmRvci9TZXR0aW5ncy52dWU/ODA4MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1ZlbmRvci9TZXR0aW5ncy52dWU/NmIyMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L1ZlbmRvci9TZXR0aW5ncy52dWU/ZDIzZSJdLCJuYW1lcyI6WyJwcm9wcyIsIm5hbWUiLCJjb21wb25lbnRzIiwiQ291bnRyeUxpc3QiLCJXYWxsZXQiLCJkYXRhIiwiZm9ybSIsImlkIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwiY291bnRyeV9jb2RlIiwicGhvbmVfbnVtYmVyIiwiY29tcGFueV9hZGRyZXNzIiwiY29tcGFueV9uYW1lIiwiY29tcGFueV9waG9uZSIsInVwZm9yIiwiUHJvZml0cyIsInBwcCIsIndhdGNoIiwiZmlsdGVydGFiIiwibiIsIm8iLCJtZXRob2RzIiwib25Db3VudHJ5Q2hhbmdlIiwidmFsdWUiLCJ1cGRhdGVJbmZvIiwidGhlbiIsImZkYXRhIiwiVG9hc3QiLCJpY29uIiwidGl0bGUiLCJnZXRWZW5kb3JQcm9maXRzIiwidXJsIiwibG9hZGVyZCIsImNvbnRhaW5lciIsImF4aW9zIiwicGFyYW1zIiwibW91bnRlZCIsImNyZWF0ZWQiLCJmaWx0ZXJzIiwiY29tcHV0ZWQiLCJtYXBHZXR0ZXJzIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJyb2xlIiwiX20iLCJfdiIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwiZXhwcmVzc2lvbiIsImhyZWYiLCJvbiIsInN1Ym1pdCIsIiRldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3IiLCJlcnJvcnMiLCJoYXMiLCJoYXZlVmFsdWUiLCJ0eXBlIiwiZG9tUHJvcHMiLCJpbnB1dCIsInRhcmdldCIsImNvbXBvc2luZyIsIiRzZXQiLCJmaWVsZCIsIl9zIiwiY2xpY2tlZCIsInJlZiIsInRvdGFsIiwiX2UiLCJfbCIsInJvdyIsImluZGV4IiwibGVuZ3RoIiwia2V5IiwidGV4dENvbnRlbnQiLCJwcm9qZWN0X2NvbnRyYWN0b3JfZGVzaWduZXIiLCJjbGllbnQiLCJwcm9qZWN0X3NhbGVzX21hbiIsIl9mIiwidG90YWxfb3JkZXJfaXRlbV9wcmljZSIsInJlY29yZHMiLCJzY3JvbGx0byIsImZldGNoUmVjb3JkIiwidmFsIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0E2SUEsb0o7Ozs7OztBQUEwQztBQUMxQztBQUlBO0FBQ2U7RUFDZkEsb0JBREE7RUFFQUMsZ0JBRkE7RUFHQUM7SUFDQUMsc0VBREE7SUFFQUM7RUFGQSxDQUhBO0VBT0FDLElBUEEsa0JBT0E7SUFDQTtNQUVBQztRQUNBQyxNQURBO1FBRUFDLGNBRkE7UUFHQUMsYUFIQTtRQUlBQyxTQUpBO1FBS0FDLGdCQUxBO1FBTUFDLGdCQU5BO1FBT0FDLG1CQVBBO1FBUUFDLGdCQVJBO1FBU0FDLGlCQVRBO1FBVUFDO01BVkEsRUFGQTtNQWNBQyxXQWRBO01BZUFDO0lBZkE7RUFpQkEsQ0F6QkE7RUEwQkFDO0lBQ0FDLFNBREEscUJBQ0FDLENBREEsRUFDQUMsQ0FEQSxFQUNBO01BQUE7O01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQSxNQUNBRCxrQkFEQTtrQkFBQTtrQkFBQTtnQkFBQTs7Z0JBQUE7Z0JBQUEsT0FFQSx3QkFGQTs7Y0FBQTtnQkFHQTs7Y0FIQTtjQUFBO2dCQUFBO1lBQUE7VUFB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LEdBQVAsQ0FOZ0QsRUFPaEROLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUUsV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUErQixDQUFDSCxHQUFHLENBQUNPLEVBQUosQ0FBTyxhQUFQLENBQUQsQ0FBL0IsQ0FQOEMsQ0FBaEQsQ0FENkMsQ0FBeEMsQ0FBVDtBQVdELENBdEVtQixDQUF0QjtBQXdFQVIsTUFBTSxDQUFDaUQsYUFBUCxHQUF1QixJQUF2Qjs7Ozs7Ozs7Ozs7OztBQzVtQkE7QUFBQTtBQUFBO0FBQUE7QUFBdUY7QUFDM0I7QUFDTDs7O0FBR3ZEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW9NLENBQWdCLG9QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xOS5idW5kbGUuM2Y4OTAxNzNjOTg1MDg2NzE3MzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIGlkPVwic2V0dGluZ3NcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJzZXR0aW5ncy10YWJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHBiLTEgY29udDEwODBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIG1iLTVcIj5NeSBTZXR0aW5nczwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzdWJMaW5rIHRleHRMaWdodEdyYXkgbGlzdC11bnN0eWxlZCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNidXNpbmVzcy1pbmZvcm1hdGlvblwiIGNsYXNzPVwiYWN0aXZlXCI+QnVzaW5lc3MgSW5mb3JtYXRpb248L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInB4LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgdi1zY3JvbGwtdG89XCInI215LXByb2ZpdHMnXCI+TXkgUHJvZml0czwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbnQxMDgwIGJnLXdoaXRlIHZlbkFjY0luZm9cIiBpZD1cImJ1c2luZXNzLWluZm9ybWF0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtYi01XCI+XG4gICAgICAgICAgICA8aDM+QnVzaW5lc3MgSW5mb3JtYXRpb248L2gzPlxuICAgICAgICAgICAgPHA+QW55IGNoYW5nZXMgd2lsbCBiZSBtYWRlIGFmdGVyIGFwcHJvdmFsPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlSW5mbygpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IHByLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByIGhhdmVWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygnZmlyc3RfbmFtZScpICwnaGF2ZVZhbHVlJzogZm9ybS5maXJzdF9uYW1lIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImZvcm0uZmlyc3RfbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkZpcnN0IG5hbWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiZmlyc3RfbmFtZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgcGwtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ2xhc3RfbmFtZScpICwnaGF2ZVZhbHVlJzogZm9ybS5sYXN0X25hbWUgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZm9ybS5sYXN0X25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5MYXN0IG5hbWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwibGFzdF9uYW1lXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBwci1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygnZW1haWwnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0uZW1haWwgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImZvcm0uZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5FbWFpbCBhZGRyZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBwbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygnY291bnRyeV9jb2RlJykgLCdoYXZlVmFsdWUnOiBmb3JtLmNvdW50cnlfY29kZSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdFwiPnt7Zm9ybS5jb3VudHJ5X2NvZGV9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCB3LTEwMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3REcm9wRG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudHJ5TGlzdCAgQGNsaWNrZWQ9XCJvbkNvdW50cnlDaGFuZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJjb3VudHJ5X2NvZGVcIiBjbGFzcz1cImVycm9ybXNnXCI+PC9oYXMtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygncGhvbmVfbnVtYmVyJykgLCdoYXZlVmFsdWUnOiBmb3JtLnBob25lX251bWJlciB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImZvcm0ucGhvbmVfbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+UGhvbmUgbnVtYmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBob25lX251bWJlclwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgcHItbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ2NvbXBhbnlfbmFtZScpICwnaGF2ZVZhbHVlJzogZm9ybS5jb21wYW55X25hbWUgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImZvcm0uY29tcGFueV9uYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5CdXNpbmVzcyBuYW1lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImNvbXBhbnlfbmFtZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgcGwtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ2NvbXBhbnlfcGhvbmUnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0uY29tcGFueV9waG9uZSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS5jb21wYW55X3Bob25lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Db21wYW55IHBob25lIG51bWJlciA8c3BhbiBjbGFzcz1cIm9wdGlvbmFsXCI+KG9wdGlvbmFsKTwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiY29tcGFueV9waG9uZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgcHItbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ2NvbXBhbnlfYWRkcmVzcycpICwnaGF2ZVZhbHVlJzogZm9ybS5jb21wYW55X2FkZHJlc3MgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImZvcm0uY29tcGFueV9hZGRyZXNzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Db21wYW55IGFkZHJlc3MgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPihvcHRpb25hbCk8L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImNvbXBhbnlfYWRkcmVzc1wiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHRleHQtY2VudGVyIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNhdmVcIiBjbGFzcz1cImJ0blN1Y2NlcyBweC01XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgdmVuUmVzdWx0IGNvbnQxMDgwIGJnLXdoaXRlIHZsZC1wYXJlbnRcIiByZWY9XCJ2c19wcm9maXRSZWZcIiBpZD1cIm15LXByb2ZpdHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgIDxoMz5NeSBQcm9maXQ8L2gzPlxuICAgICAgICAgICAgPHAgdi1pZj1cIlByb2ZpdHNcIj57eyBQcm9maXRzLnRvdGFsIH19IE9yZGVyczwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICA8V2FsbGV0IHJlZj1cIndhbGxldGZ0Y2hcIi8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpdlRhYmxlIG15UHJvZml0VGFibGUgZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRoZWFkIHctMTAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyIGQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRkXCI+Q29uZmlybWF0aW9uIG51bWJlcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGRcIj5Db250cmFjdG9yPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZFwiPlJlcHJlc2VudGF0aXZlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZFwiPlRvdGFsIFByaWNlPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0Ym9keSB3LTEwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ciBkLWZsZXggZmxleC13cmFwXCIgIHYtaWY9XCJQcm9maXRzICYmIFByb2ZpdHMuZGF0YSAmJiBQcm9maXRzLmRhdGEubGVuZ3RoPjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHJvdywgaW5kZXgpIGluIFByb2ZpdHMuZGF0YVwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGRcIiB2LXRleHQ9XCJyb3cuaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRkXCI+e3sgcm93LnByb2plY3RfY29udHJhY3Rvcl9kZXNpZ25lciA/IHJvdy5wcm9qZWN0X2NvbnRyYWN0b3JfZGVzaWduZXIgOiByb3cuY2xpZW50LmZpcnN0X25hbWUrJyAnK3Jvdy5jbGllbnQubGFzdF9uYW1lfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRkXCIgdi10ZXh0PVwicm93LnByb2plY3Rfc2FsZXNfbWFuXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZFwiPnt7IHJvdy50b3RhbF9vcmRlcl9pdGVtX3ByaWNlfHRvQ3VycmVuY3kgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFVqUGFnaW5hdGlvbiBAZmV0Y2hSZWNvcmQ9XCJ2YWw9PmdldFZlbmRvclByb2ZpdHModmFsKVwiIDpyZWNvcmRzPVwiUHJvZml0c1wiIDpwcHAuc3luYz1cInBwcFwiIHNjcm9sbHRvPVwibXktcHJvZml0c1wiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGJyPlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFdhbGxldCBmcm9tIFwiLi4vY29tbW9uL1dhbGxldC52dWVcIjtcbmltcG9ydCB7XG4gICAgbWFwR2V0dGVycyxcbiAgICBtYXBBY3Rpb25zXG59IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgQ291bnRyeUxpc3QgZnJvbSAnLi4vLi4vQ291bnRyeS1saXN0LnZ1ZSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydmaWx0ZXJ0YWInXSxcbiAgICBuYW1lOiBcIlNldHRpbmdzXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBDb3VudHJ5TGlzdCxcbiAgICAgICAgV2FsbGV0XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgIGNvdW50cnlfY29kZTogJycsXG4gICAgICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiAnJyxcbiAgICAgICAgICAgICAgICBjb21wYW55X2FkZHJlc3M6ICcnLFxuICAgICAgICAgICAgICAgIGNvbXBhbnlfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgY29tcGFueV9waG9uZTogJycsXG4gICAgICAgICAgICAgICAgdXBmb3I6ICdpbmZvJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUHJvZml0czogJycsXG4gICAgICAgICAgICBwcHA6IDEwLFxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBhc3luYyBmaWx0ZXJ0YWIobiwgbykge1xuICAgICAgICAgICAgaWYgKG4gPT0gJ015IFNldHRpbmdzJykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0VmVuZG9yUHJvZml0cygpO1xuICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy53YWxsZXRmdGNoLnVwZGF0ZV93YWxsZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNvdW50cnlDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5jb3VudHJ5X2NvZGUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgdXBkYXRlSW5mbygpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5wdXQoJ2FwaS9wcm9maWxlJylcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmRhdGEgPSBkYXRhLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICBmZGF0YS51cGZvciA9ICdpbmZvJ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZmlsbChmZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kZW1pdCgnZ2V0X3Byb2ZpbGUnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChkYXRhKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZ2V0VmVuZG9yUHJvZml0cyh1cmwgPSBcIi9hcGkvcHJvZml0XCIpIHtcbiAgICAgICAgICAgIGxldCBsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMudnNfcHJvZml0UmVmLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBheGlvcy5nZXQodXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHBwOiB0aGlzLnBwcCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlByb2ZpdHMgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcmQuaGlkZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyZC5oaWRlKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcInNldEVycm9yc1wiLCB7fSk7XG4gICAgfSxcbiAgICBhc3luYyBjcmVhdGVkKCkge1xuICAgICAgICBheGlvcy5nZXQoXCJhcGkvcHJvZmlsZVwiKVxuICAgICAgICAgICAgLnRoZW4oKHtcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGZkYXRhID0gZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgZmRhdGEudXBmb3IgPSAnaW5mbydcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZmlsbChmZGF0YSlcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG4gICAgZmlsdGVyczoge1xuXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICAuLi5tYXBHZXR0ZXJzKFtcImVycm9yc1wiXSksXG4gICAgfSxcblxufVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBpZDogXCJzZXR0aW5nc1wiLFxuICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwic2V0dGluZ3MtdGFiXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgcGItMSBjb250MTA4MFwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwic3ViTGluayB0ZXh0TGlnaHRHcmF5IGxpc3QtdW5zdHlsZWQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwicHgtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzY3JvbGwtdG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNjcm9sbC10b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIjbXktcHJvZml0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIicjbXktcHJvZml0cydcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTXkgUHJvZml0c1wiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBjb250MTA4MCBiZy13aGl0ZSB2ZW5BY2NJbmZvXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYnVzaW5lc3MtaW5mb3JtYXRpb25cIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZUluZm8oKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02IHByLW1kLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByIGhhdmVWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImZpcnN0X25hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5maXJzdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5maXJzdF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmZpcnN0X25hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaXJzdF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRmlyc3QgbmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiZmlyc3RfbmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02IHBsLW1kLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibGFzdF9uYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmxhc3RfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5sYXN0X25hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJsYXN0X25hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkxhc3QgbmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwibGFzdF9uYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTYgcHItbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJlbWFpbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZvcm0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZW1haWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmVtYWlsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1haWxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVtYWlsIGFkZHJlc3NcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImVtYWlsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTYgcGwtbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJjb3VudHJ5X2NvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLmNvdW50cnlfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgc2VsZWN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybS5jb3VudHJ5X2NvZGUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsIHctMTAwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNlbGVjdERyb3BEb3duXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJDb3VudHJ5TGlzdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2tlZDogX3ZtLm9uQ291bnRyeUNoYW5nZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiY291bnRyeV9jb2RlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicGhvbmVfbnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBob25lX251bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnBob25lX251bWJlciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBob25lX251bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlBob25lIG51bWJlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwicGhvbmVfbnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTYgcHItbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJjb21wYW55X25hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLmNvbXBhbnlfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbXBhbnlfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY29tcGFueV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmNvbXBhbnlfbmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBhbnlfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkJ1c2luZXNzIG5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImNvbXBhbnlfbmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02IHBsLW1kLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiY29tcGFueV9waG9uZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZvcm0uY29tcGFueV9waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbXBhbnlfcGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNvbXBhbnlfcGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uY29tcGFueV9waG9uZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBhbnlfcGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJjb21wYW55X3Bob25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTYgcHItbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJjb21wYW55X2FkZHJlc3NcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLmNvbXBhbnlfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbXBhbnlfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY29tcGFueV9hZGRyZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmNvbXBhbnlfYWRkcmVzcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBhbnlfYWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oNCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImNvbXBhbnlfYWRkcmVzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oNSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwidnNfcHJvZml0UmVmXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIHZlblJlc3VsdCBjb250MTA4MCBiZy13aGl0ZSB2bGQtcGFyZW50XCIsXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibXktcHJvZml0c1wiIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG1iLTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJNeSBQcm9maXRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uUHJvZml0c1xuICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uUHJvZml0cy50b3RhbCkgKyBcIiBPcmRlcnNcIildKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJXYWxsZXRcIiwgeyByZWY6IFwid2FsbGV0ZnRjaFwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImRpdlRhYmxlIG15UHJvZml0VGFibGUgZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtd3JhcFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDYpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGJvZHkgdy0xMDBcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uUHJvZml0cy5kYXRhLCBmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5Qcm9maXRzICYmXG4gICAgICAgICAgICAgICAgICAgIF92bS5Qcm9maXRzLmRhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLlByb2ZpdHMuZGF0YS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJ0ciBkLWZsZXggZmxleC13cmFwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhyb3cuaWQpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnByb2plY3RfY29udHJhY3Rvcl9kZXNpZ25lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcm93LnByb2plY3RfY29udHJhY3Rvcl9kZXNpZ25lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcm93LmNsaWVudC5maXJzdF9uYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuY2xpZW50Lmxhc3RfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhyb3cucHJvamVjdF9zYWxlc19tYW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShyb3cudG90YWxfb3JkZXJfaXRlbV9wcmljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiVWpQYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcmVjb3JkczogX3ZtLlByb2ZpdHMsXG4gICAgICAgICAgICAgICAgICBwcHA6IF92bS5wcHAsXG4gICAgICAgICAgICAgICAgICBzY3JvbGx0bzogXCJteS1wcm9maXRzXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgZmV0Y2hSZWNvcmQ6ICh2YWwpID0+IF92bS5nZXRWZW5kb3JQcm9maXRzKHZhbCksXG4gICAgICAgICAgICAgICAgICBcInVwZGF0ZTpwcHBcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0ucHBwID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbWItNVwiIH0sIFtfdm0uX3YoXCJNeSBTZXR0aW5nc1wiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInB4LTNcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWN0aXZlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI2J1c2luZXNzLWluZm9ybWF0aW9uXCIgfSB9LFxuICAgICAgICBbX3ZtLl92KFwiQnVzaW5lc3MgSW5mb3JtYXRpb25cIildXG4gICAgICApLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbWItNVwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkJ1c2luZXNzIEluZm9ybWF0aW9uXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJBbnkgY2hhbmdlcyB3aWxsIGJlIG1hZGUgYWZ0ZXIgYXBwcm92YWxcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgIF92bS5fdihcIkNvbXBhbnkgcGhvbmUgbnVtYmVyIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm9wdGlvbmFsXCIgfSwgW192bS5fdihcIihvcHRpb25hbClcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgIF92bS5fdihcIkNvbXBhbnkgYWRkcmVzcyBcIiksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25hbFwiIH0sIFtfdm0uX3YoXCIob3B0aW9uYWwpXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTIgdGV4dC1jZW50ZXIgbWItNFwiIH0sIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJidG5TdWNjZXMgcHgtNVwiLFxuICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCJTYXZlXCIgfSxcbiAgICAgIH0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhlYWQgdy0xMDBcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRyIGQtZmxleCBmbGV4LXdyYXBcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGRcIiB9LCBbX3ZtLl92KFwiQ29uZmlybWF0aW9uIG51bWJlclwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRkXCIgfSwgW192bS5fdihcIkNvbnRyYWN0b3JcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZFwiIH0sIFtfdm0uX3YoXCJSZXByZXNlbnRhdGl2ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRkXCIgfSwgW192bS5fdihcIlRvdGFsIFByaWNlXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MGM4ZjZhNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTBjOGY2YTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTBjOGY2YTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTBjOGY2YTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MGM4ZjZhNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5MGM4ZjZhNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9WZW5kb3IvU2V0dGluZ3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTBjOGY2YTYmXCIiXSwic291cmNlUm9vdCI6IiJ9