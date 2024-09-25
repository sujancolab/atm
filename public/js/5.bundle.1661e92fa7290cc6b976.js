(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotes/AddEdit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotes/AddEdit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserAddEdit",
  data: function data() {
    return {
      view_mode: false,
      countries: [],
      states: [],
      cities: [],
      editmode: false,
      step: 1,
      users: {},
      frm_user: new Form({
        id: '',
        organization: '',
        name: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        zip_code: '',
        country: 'united states',
        phone: '',
        email: '',
        fax: '',
        type: '',
        status: 'Approve Pending',
        account_info: []
      })
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["errors"])),
  beforeCreate: function beforeCreate() {
    var _this = this;

    axios.get("api/getCountries").then(function (res) {
      _this.countries = res.data.data;
    });
  },
  methods: {
    addInfo: function addInfo() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.frm_user.account_info.push({
                  id: '',
                  account_no: ''
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    next_step: function next_step() {
      var _arguments = arguments,
          _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _final;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _final = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;

                _this3.$validator.validateAll('frmStep' + _this3.step).then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(valid) {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (valid) {
                              _this3.submit_user();
                              /*     this.step++
                                  if (final == 'submit') {
                                      this.step = 1;
                                      this.submit_user();
                                  } */

                            }

                          case 1:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    submit_user: function submit_user() {
      var _this4 = this;

      var cloaderd = this.$loading.show({
        container: this.$refs.ref_load_user
      });

      if (this.frm_user.id > 0) {
        this.frm_user.put('api/user/' + this.frm_user.id).then(function (response) {
          cloaderd.hide();

          if (response.data.success == true) {
            if (_this4.frm_user.organization == 'United Scrap Metal' && _this4.step == 1) {
              _this4.step = 3;
            } else {
              _this4.step++;
            } //  this.frm_user.reset();


            Toast.fire({
              icon: 'success',
              title: response.data.message
            }); // this.$router.push('/users').catch(() => {});
          }
        })["catch"](function () {
          cloaderd.hide();
        });
      } else {
        this.frm_user.post('api/user').then(function (data) {
          cloaderd.hide();
          _this4.frm_user.id = data.data.data.id; // this.frm_user.reset();
          //  $('a[href="#menu1"]').tab('show');

          _this4.frm_user.account_info = [];

          _this4.addInfo();

          if (_this4.frm_user.organization == 'United Scrap Metal') {
            _this4.step = 3;
          } else {
            _this4.step = 2;
          }

          Toast.fire({
            icon: 'success',
            title: data.data.message
          });
        })["catch"](function () {
          cloaderd.hide();
        });
      }
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    if (this.$route.params.id) {
      this.view_mode = true;
      this.frm_user.id = this.$route.params.id;
      var cloaderd = this.$loading.show({
        container: this.$refs.ref_load_user
      });
      axios.get("api/user/" + this.$route.params.id).then(function (res) {
        _this5.frm_user.fill(res.data.data);

        cloaderd.hide();
      })["catch"](function () {
        cloaderd.hide();

        _this5.$router.push('/users/')["catch"](function () {});
      });
    }
  },
  created: function created() {
    this.step = 1;
    this.$Progress.start();
    this.view_mode = false;
    this.addInfo();
    this.$Progress.finish();
  },
  watch: {
    step: function step(n) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                $('a[href="#menu' + n + '"]').tab('show');

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    'frm_user.organization': function frm_userOrganization(n) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (n == 'United Scrap Metal') {
                  if (!['Admin', 'Finance Team', 'Transportation Team', 'Sales Team', 'CEC'].includes(_this6.frm_user.type)) {
                    _this6.frm_user.type = '';
                  }
                } else {
                  if (!['Primary', 'Finance', 'Transportation'].includes(_this6.frm_user.type)) {
                    _this6.frm_user.type = '';
                  }
                }

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    'frm_user.country': {
      immediate: true,
      handler: function handler(n) {
        var _this7 = this;

        if (n) {
          axios.get("api/getStates", {
            params: {
              'country': n
            }
          }).then(function (res) {
            _this7.states = res.data.data;
          });
        }
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotes/AddEdit.vue?vue&type=template&id=145dcf1e&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotes/AddEdit.vue?vue&type=template&id=145dcf1e& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm._m(0);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("section", {
    staticClass: "content-header"
  }, [_c("h1", [_vm._v("Get a Quote")])]), _vm._v(" "), _c("section", {
    staticClass: "content"
  }, [_c("div", {
    staticClass: "card box-warning"
  }, [_c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("User ")])]), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Name")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("Matt Simpson")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Company Name ")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("Bridgeport Metals")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Work Email")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("mattsimpson@bridgeport.metals.com")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Contact Number")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("(312) 022 - 1022")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Address")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("3802 S Racine Avenue")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("City")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("Chicago")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("State")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("IL")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Zip Code")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("60609")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card box-black"
  }, [_c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("Scrap Information")])]), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "tablesection"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-striped table-hover"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      width: "70"
    }
  }, [_vm._v("Sl No.")]), _vm._v(" "), _c("th", [_vm._v("Material")]), _vm._v(" "), _c("th", [_vm._v("Weight (LB) ")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "100"
    }
  }, [_vm._v("Action")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("01")]), _vm._v(" "), _c("td", [_c("select", {
    staticClass: "form-control"
  }, [_c("option", [_vm._v("select")]), _vm._v(" "), _c("option", [_vm._v("Copper 197")])])]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "form-control"
  }, [_vm._v("1300")])]), _vm._v(" "), _c("td", [_c("button", {
    staticClass: "btn btn-danger",
    attrs: {
      type: "button"
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o",
    attrs: {
      "aria-hidden": "true"
    }
  })])])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("02")]), _vm._v(" "), _c("td", [_c("select", {
    staticClass: "form-control"
  }, [_c("option", [_vm._v("select")]), _vm._v(" "), _c("option", [_vm._v("410 Stainless Steel")])])]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "form-control"
  }, [_vm._v("-")])]), _vm._v(" "), _c("td", [_c("button", {
    staticClass: "btn btn-danger",
    attrs: {
      type: "button"
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success",
    attrs: {
      type: "button"
    }
  }, [_c("i", {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  })])])])])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Additional Information")]), _vm._v(" "), _c("textarea", {
    staticClass: "form-control",
    attrs: {
      placeholder: "Enter Additional Information"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Attach scrap metal pictures (If Any)")]), _vm._v(" "), _c("input", {
    attrs: {
      type: "file"
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card box-success"
  }, [_c("div", {
    staticClass: "box-footer"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn link1",
    attrs: {
      type: "button"
    }
  }, [_vm._v("Get Quote")])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/quotes/AddEdit.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/quotes/AddEdit.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddEdit_vue_vue_type_template_id_145dcf1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddEdit.vue?vue&type=template&id=145dcf1e& */ "./resources/js/components/quotes/AddEdit.vue?vue&type=template&id=145dcf1e&");
/* harmony import */ var _AddEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/quotes/AddEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddEdit_vue_vue_type_template_id_145dcf1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddEdit_vue_vue_type_template_id_145dcf1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/quotes/AddEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/quotes/AddEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/quotes/AddEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotes/AddEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/quotes/AddEdit.vue?vue&type=template&id=145dcf1e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/quotes/AddEdit.vue?vue&type=template&id=145dcf1e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_template_id_145dcf1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEdit.vue?vue&type=template&id=145dcf1e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotes/AddEdit.vue?vue&type=template&id=145dcf1e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_template_id_145dcf1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_template_id_145dcf1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcXVvdGVzL0FkZEVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3F1b3Rlcy9BZGRFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/NzdmOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/MDFhNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/NDI0OSJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsInZpZXdfbW9kZSIsImNvdW50cmllcyIsInN0YXRlcyIsImNpdGllcyIsImVkaXRtb2RlIiwic3RlcCIsInVzZXJzIiwiZnJtX3VzZXIiLCJpZCIsIm9yZ2FuaXphdGlvbiIsImFkZHJlc3NfMSIsImFkZHJlc3NfMiIsImNpdHkiLCJzdGF0ZSIsInppcF9jb2RlIiwiY291bnRyeSIsInBob25lIiwiZW1haWwiLCJmYXgiLCJ0eXBlIiwic3RhdHVzIiwiYWNjb3VudF9pbmZvIiwiY29tcHV0ZWQiLCJtYXBHZXR0ZXJzIiwiYmVmb3JlQ3JlYXRlIiwiYXhpb3MiLCJ0aGVuIiwibWV0aG9kcyIsImFkZEluZm8iLCJhY2NvdW50X25vIiwibmV4dF9zdGVwIiwiZmluYWwiLCJzdWJtaXRfdXNlciIsImNvbnRhaW5lciIsImNsb2FkZXJkIiwiVG9hc3QiLCJpY29uIiwidGl0bGUiLCJtb3VudGVkIiwiY3JlYXRlZCIsIndhdGNoIiwibiIsIiQiLCJpbW1lZGlhdGUiLCJoYW5kbGVyIiwicGFyYW1zIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsIl9tIiwic3RhdGljUmVuZGVyRm5zIiwic3RhdGljQ2xhc3MiLCJfdiIsInN0YXRpY1N0eWxlIiwiYXR0cnMiLCJ3aWR0aCIsImFs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QUUsQ0FDQSxRQURBLEVBRUE7SUFBRUksV0FBVyxFQUFFLFdBQWY7SUFBNEJHLEtBQUssRUFBRTtNQUFFcEMsSUFBSSxFQUFFO0lBQVI7RUFBbkMsQ0FGQSxFQUdBLENBQUM0QixHQUFHLENBQUNNLEVBQUosQ0FBTyxXQUFQLENBQUQsQ0FIQSxDQURzQyxDQUF4QyxDQURxQyxDQUF2QyxDQUQyQyxDQUE3QyxDQTNSc0MsQ0FBeEMsQ0FMYSxDQUFSLENBQVQ7QUE2U0QsQ0FqVG1CLENBQXRCO0FBbVRBUCxNQUFNLENBQUNhLGFBQVAsR0FBdUIsSUFBdkI7Ozs7Ozs7Ozs7Ozs7QUN4VEE7QUFBQTtBQUFBO0FBQUE7QUFBc0Y7QUFDM0I7QUFDTDs7O0FBR3REO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxrRkFBTTtBQUNSLEVBQUUsMkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTZMLENBQWdCLG1QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy81LmJ1bmRsZS4xNjYxZTkyZmE3MjkwY2M2Yjk3Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICA8aDE+R2V0IGEgUXVvdGU8L2gxPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJveC13YXJuaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZSBjYXJkLXRleHRcIj5Vc2VyIDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5NYXR0IFNpbXBzb248L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db21wYW55IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5CcmlkZ2Vwb3J0IE1ldGFsczwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPldvcmsgRW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPm1hdHRzaW1wc29uQGJyaWRnZXBvcnQubWV0YWxzLmNvbTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvbnRhY3QgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj4oMzEyKSAwMjIgLSAxMDIyPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+MzgwMiBTIFJhY2luZSBBdmVudWU8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5DaGljYWdvPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+U3RhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPklMPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+WmlwIENvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPjYwNjA5PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtYmxhY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlNjcmFwIEluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCIgd2lkdGg9XCI3MFwiPlNsIE5vLjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk1hdGVyaWFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+V2VpZ2h0IChMQikgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggd2lkdGg9XCIxMDBcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPjAxPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPnNlbGVjdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkNvcHBlciAxOTc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPjEzMDA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPjAyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPnNlbGVjdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjQxMCBTdGFpbmxlc3MgU3RlZWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPi08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRpdGlvbmFsIEluZm9ybWF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+QXR0YWNoIHNjcmFwIG1ldGFsIHBpY3R1cmVzIChJZiBBbnkpPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LXN1Y2Nlc3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWZvb3RlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGxpbmsxIFwiPkdldCBRdW90ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtcclxuICBtYXBHZXR0ZXJzXHJcbn0gZnJvbSBcInZ1ZXhcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiVXNlckFkZEVkaXRcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmlld19tb2RlOiBmYWxzZSxcclxuICAgICAgY291bnRyaWVzOiBbXSxcclxuICAgICAgc3RhdGVzOiBbXSxcclxuICAgICAgY2l0aWVzOiBbXSxcclxuICAgICAgZWRpdG1vZGU6IGZhbHNlLFxyXG4gICAgICBzdGVwOiAxLFxyXG4gICAgICB1c2Vyczoge30sXHJcbiAgICAgIGZybV91c2VyOiBuZXcgRm9ybSh7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIG9yZ2FuaXphdGlvbjogJycsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgYWRkcmVzc18xOiAnJyxcclxuICAgICAgICBhZGRyZXNzXzI6ICcnLFxyXG4gICAgICAgIGNpdHk6ICcnLFxyXG4gICAgICAgIHN0YXRlOiAnJyxcclxuICAgICAgICB6aXBfY29kZTogJycsXHJcbiAgICAgICAgY291bnRyeTogJ3VuaXRlZCBzdGF0ZXMnLFxyXG4gICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgZmF4OiAnJyxcclxuICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICBzdGF0dXM6ICdBcHByb3ZlIFBlbmRpbmcnLFxyXG4gICAgICAgIGFjY291bnRfaW5mbzogW11cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAuLi5tYXBHZXR0ZXJzKFtcImVycm9yc1wiXSlcclxuICB9LFxyXG4gIGJlZm9yZUNyZWF0ZSgpIHtcclxuICAgIGF4aW9zLmdldChcImFwaS9nZXRDb3VudHJpZXNcIilcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuY291bnRyaWVzID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICB9KVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgYWRkSW5mbygpIHtcclxuICAgICAgdGhpcy5mcm1fdXNlci5hY2NvdW50X2luZm8ucHVzaCh7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIGFjY291bnRfbm86ICcnLFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIG5leHRfc3RlcChmaW5hbCA9IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgnZnJtU3RlcCcgKyB0aGlzLnN0ZXApLnRoZW4oYXN5bmMgKHZhbGlkKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdF91c2VyKCk7XHJcbiAgICAgICAgICAvKiAgICAgdGhpcy5zdGVwKytcclxuICAgICAgICAgICAgICBpZiAoZmluYWwgPT0gJ3N1Ym1pdCcpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwID0gMTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRfdXNlcigpO1xyXG4gICAgICAgICAgICAgIH0gKi9cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIHN1Ym1pdF91c2VyKCkge1xyXG4gICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xyXG4gICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5yZWZfbG9hZF91c2VyXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZnJtX3VzZXIuaWQgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5mcm1fdXNlci5wdXQoJ2FwaS91c2VyLycgKyB0aGlzLmZybV91c2VyLmlkKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZnJtX3VzZXIub3JnYW5pemF0aW9uID09ICdVbml0ZWQgU2NyYXAgTWV0YWwnICYmIHRoaXMuc3RlcCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSAzO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXArKztcclxuICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAvLyAgdGhpcy5mcm1fdXNlci5yZXNldCgpO1xyXG4gICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIC8vIHRoaXMuJHJvdXRlci5wdXNoKCcvdXNlcnMnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZnJtX3VzZXIucG9zdCgnYXBpL3VzZXInKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXHJcbiAgICAgICAgICAgIHRoaXMuZnJtX3VzZXIuaWQgPSBkYXRhLmRhdGEuZGF0YS5pZDtcclxuICAgICAgICAgICAgLy8gdGhpcy5mcm1fdXNlci5yZXNldCgpO1xyXG4gICAgICAgICAgICAvLyAgJCgnYVtocmVmPVwiI21lbnUxXCJdJykudGFiKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZnJtX3VzZXIuYWNjb3VudF9pbmZvID0gW11cclxuICAgICAgICAgICAgdGhpcy5hZGRJbmZvKClcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZybV91c2VyLm9yZ2FuaXphdGlvbiA9PSAnVW5pdGVkIFNjcmFwIE1ldGFsJykge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RlcCA9IDM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGVwID0gMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBkYXRhLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG5cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBpZiAodGhpcy4kcm91dGUucGFyYW1zLmlkKSB7XHJcbiAgICAgIHRoaXMudmlld19tb2RlID0gdHJ1ZVxyXG4gICAgICB0aGlzLmZybV91c2VyLmlkID0gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xyXG4gICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xyXG4gICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5yZWZfbG9hZF91c2VyXHJcbiAgICAgIH0pO1xyXG4gICAgICBheGlvcy5nZXQoXCJhcGkvdXNlci9cIiArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZybV91c2VyLmZpbGwocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL3VzZXJzLycpLmNhdGNoKCgpID0+IHsgfSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5zdGVwID0gMVxyXG4gICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgIHRoaXMudmlld19tb2RlID0gZmFsc2VcclxuICAgIHRoaXMuYWRkSW5mbygpO1xyXG4gICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgYXN5bmMgc3RlcChuKSB7XHJcbiAgICAgICQoJ2FbaHJlZj1cIiNtZW51JyArIG4gKyAnXCJdJykudGFiKCdzaG93Jyk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgJ2ZybV91c2VyLm9yZ2FuaXphdGlvbicobikge1xyXG4gICAgICBpZiAobiA9PSAnVW5pdGVkIFNjcmFwIE1ldGFsJykge1xyXG4gICAgICAgIGlmICghWydBZG1pbicsICdGaW5hbmNlIFRlYW0nLCAnVHJhbnNwb3J0YXRpb24gVGVhbScsICdTYWxlcyBUZWFtJywgJ0NFQyddLmluY2x1ZGVzKHRoaXMuZnJtX3VzZXIudHlwZSkpIHtcclxuICAgICAgICAgIHRoaXMuZnJtX3VzZXIudHlwZSA9ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghWydQcmltYXJ5JywgJ0ZpbmFuY2UnLCAnVHJhbnNwb3J0YXRpb24nXS5pbmNsdWRlcyh0aGlzLmZybV91c2VyLnR5cGUpKSB7XHJcbiAgICAgICAgICB0aGlzLmZybV91c2VyLnR5cGUgPSAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICdmcm1fdXNlci5jb3VudHJ5Jzoge1xyXG4gICAgICBpbW1lZGlhdGU6IHRydWUsXHJcbiAgICAgIGhhbmRsZXIobikge1xyXG4gICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvZ2V0U3RhdGVzXCIsIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7ICdjb3VudHJ5JzogbiB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF92bS5fbSgwKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkdldCBhIFF1b3RlXCIpXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LXdhcm5pbmdcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbX3ZtLl92KFwiVXNlciBcIildKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNYXR0IFNpbXBzb25cIiksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJDb21wYW55IE5hbWUgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkJyaWRnZXBvcnQgTWV0YWxzXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiV29yayBFbWFpbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtYXR0c2ltcHNvbkBicmlkZ2Vwb3J0Lm1ldGFscy5jb21cIiksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJDb250YWN0IE51bWJlclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIoMzEyKSAwMjIgLSAxMDIyXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQWRkcmVzc1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIzODAyIFMgUmFjaW5lIEF2ZW51ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkNpdHlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2hpY2Fnb1wiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlN0YXRlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW192bS5fdihcIklMXCIpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlppcCBDb2RlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjYwNjA5XCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGJveC1ibGFja1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIGNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiU2NyYXAgSW5mb3JtYXRpb25cIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlc2VjdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB3aWR0aDogXCI3MFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTbCBOby5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1hdGVyaWFsXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiV2VpZ2h0IChMQikgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHdpZHRoOiBcIjEwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBY3Rpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIwMVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNlbGVjdFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwic2VsZWN0XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwiQ29wcGVyIDE5N1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIxMzAwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaC1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjAyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic2VsZWN0XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJzZWxlY3RcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCI0MTAgU3RhaW5sZXNzIFN0ZWVsXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIi1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoLW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIkVudGVyIEFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQXR0YWNoIHNjcmFwIG1ldGFsIHBpY3R1cmVzIChJZiBBbnkpXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiIH0gfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3gtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsxXCIsIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHZXQgUXVvdGVcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0NWRjZjFlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGhvc3RpbmdlclxcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTQ1ZGNmMWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTQ1ZGNmMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTQ1ZGNmMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0NWRjZjFlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE0NWRjZjFlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDVkY2YxZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=