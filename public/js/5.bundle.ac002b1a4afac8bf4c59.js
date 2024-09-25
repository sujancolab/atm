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
      frm_quotes: new Form({
        id: '',
        name: '',
        organization: '',
        email: '',
        phone: '',
        address_1: '',
        city: '',
        state: '',
        zip_code: '',
        type: '',
        material: []
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
                _this2.frm_quotes.material.push({
                  id: '',
                  material_: ''
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

  return _c("div", [_vm._m(0), _vm._v(" "), _c("section", {
    staticClass: "content"
  }, [_c("div", {
    staticClass: "card box-warning"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_quotes.address_1,
      expression: "frm_quotes.address_1"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.frm_quotes.address_1
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_quotes, "address_1", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8)])])]), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10)])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", {
    staticClass: "content-header"
  }, [_c("h1", [_vm._v("Get a Quote")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("User ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Company Name ")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("Bridgeport Metals")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Work Email")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("mattsimpson@bridgeport.metals.com")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Contact Number")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("(312) 022 - 1022")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Address")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("3802 S Racine Avenue")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("City")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("Chicago")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("State")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("IL")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Zip Code")]), _vm._v(" "), _c("div", {
    staticClass: "form-control"
  }, [_vm._v("60609")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
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
  })])])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
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
  }, [_vm._v("Get Quote")])])])]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcXVvdGVzL0FkZEVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3F1b3Rlcy9BZGRFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/NzdmOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/MDFhNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/NDI0OSJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsInZpZXdfbW9kZSIsImNvdW50cmllcyIsInN0YXRlcyIsImNpdGllcyIsImVkaXRtb2RlIiwic3RlcCIsInVzZXJzIiwiZnJtX3F1b3RlcyIsImlkIiwib3JnYW5pemF0aW9uIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3NfMSIsImNpdHkiLCJzdGF0ZSIsInppcF9jb2RlIiwidHlwZSIsIm1hdGVyaWFsIiwiY29tcHV0ZWQiLCJtYXBHZXR0ZXJzIiwiYmVmb3JlQ3JlYXRlIiwiYXhpb3MiLCJ0aGVuIiwibWV0aG9kcyIsImFkZEluZm8iLCJtYXRlcmlhbF8iLCJuZXh0X3N0ZXAiLCJmaW5hbCIsInN1Ym1pdF91c2VyIiwiY29udGFpbmVyIiwiY2xvYWRlcmQiLCJUb2FzdCIsImljb24iLCJ0aXRsZSIsIm1vdW50ZWQiLCJjcmVhdGVkIiwid2F0Y2giLCJuIiwiJCIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJfbSIsIl92Iiwic3RhdGljQ2xhc3MiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsInZhbHVlIiwiZXhwcmVzc2lvbiIsImF0dHJzIiwiZG9tUHJvcHMiLCJvbiIsImlucHV0IiwiJGV2ZW50IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiJHNldCIsInN0YXRpY1JlbmRlckZucyIsInN0YXRpY1N0eWxlIiwid2lkdGgiLCJhbGlnbiIsInBsYWNlaG9sZGVyIiwiX3dpdGhTdHJpcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7K0NBNElBLG9KOzs7Ozs7Ozs7Ozs7QUFBQTtBQUdlO0VBQ2ZBLG1CQURBO0VBRUFDLElBRkEsa0JBRUE7SUFDQTtNQUNBQyxnQkFEQTtNQUVBQyxhQUZBO01BR0FDLFVBSEE7TUFJQUMsVUFKQTtNQUtBQyxlQUxBO01BTUFDLE9BTkE7TUFPQUMsU0FQQTtNQVFBQztRQUNBQyxNQURBO1FBRUFWLFFBRkE7UUFHQVcsZ0JBSEE7UUFJQUMsU0FKQTtRQUtBQyxTQUxBO1FBTUFDLGFBTkE7UUFPQUMsUUFQQTtRQVFBQyxTQVJBO1FBU0FDLFlBVEE7UUFVQUMsUUFWQTtRQVdBQztNQVhBO0lBUkE7RUFzQkEsQ0F6QkE7RUEwQkFDLDRCQUNBQyxtRUFEQSxDQTFCQTtFQTZCQUMsWUE3QkEsMEJBNkJBO0lBQUE7O0lBQ0FDLDhCQUNBQyxJQURBLENBQ0E7TUFDQTtJQUNBLENBSEE7RUFJQSxDQWxDQTtFQW1DQUM7SUFDQUMsT0FEQSxxQkFDQTtNQUFBOztNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQ0E7a0JBQ0FoQixNQURBO2tCQUVBaUI7Z0JBRkE7O2NBREE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBS0EsQ0FOQTtJQU9BQyxTQVBBLHVCQU9BO01BQUE7TUFBQTs7TUFBQTtRQUFBOztRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBQzs7Z0JBQ0E7a0JBQUE7b0JBQUE7c0JBQUE7d0JBQUE7MEJBQUE7NEJBQ0E7OEJBQ0E7OEJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7NEJBQ0E7OzBCQVJBOzBCQUFBOzRCQUFBO3dCQUFBO3NCQUFBO29CQUFBO2tCQUFBOztrQkFBQTtvQkFBQTtrQkFBQTtnQkFBQTs7Y0FEQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFXQSxDQWxCQTtJQW9CQUMsV0FwQkEseUJB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LEtBQUQsRUFBUTtJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQXdDLENBQ3hDSixFQUFFLENBQ0EsUUFEQSxFQUVBO0lBQUVJLFdBQVcsRUFBRSxXQUFmO0lBQTRCSyxLQUFLLEVBQUU7TUFBRWxDLElBQUksRUFBRTtJQUFSO0VBQW5DLENBRkEsRUFHQSxDQUFDd0IsR0FBRyxDQUFDSSxFQUFKLENBQU8sV0FBUCxDQUFELENBSEEsQ0FEc0MsQ0FBeEMsQ0FEcUMsQ0FBdkMsQ0FEa0QsQ0FBN0MsQ0FBVDtBQVdELENBalFtQixDQUF0QjtBQW1RQUwsTUFBTSxDQUFDd0IsYUFBUCxHQUF1QixJQUF2Qjs7Ozs7Ozs7Ozs7OztBQzlVQTtBQUFBO0FBQUE7QUFBQTtBQUFzRjtBQUMzQjtBQUNMOzs7QUFHdEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLGtGQUFNO0FBQ1IsRUFBRSwyRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBNkwsQ0FBZ0IsbVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBak47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzUuYnVuZGxlLmFjMDAyYjFhNGFmYWM4YmY0YzU5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgIDxoMT5HZXQgYSBRdW90ZTwvaDE+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LXdhcm5pbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlVzZXIgPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZnJtX3F1b3Rlcy5hZGRyZXNzXzFcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvbXBhbnkgTmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPkJyaWRnZXBvcnQgTWV0YWxzPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+V29yayBFbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+bWF0dHNpbXBzb25AYnJpZGdlcG9ydC5tZXRhbHMuY29tPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Q29udGFjdCBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPigzMTIpIDAyMiAtIDEwMjI8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj4zODAyIFMgUmFjaW5lIEF2ZW51ZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPkNoaWNhZ288L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+SUw8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5aaXAgQ29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+NjA2MDk8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJveC1ibGFja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGUgY2FyZC10ZXh0XCI+U2NyYXAgSW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIiB3aWR0aD1cIjcwXCI+U2wgTm8uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TWF0ZXJpYWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5XZWlnaHQgKExCKSA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjEwMFwiPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+c2VsZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Q29wcGVyIDE5Nzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+MTMwMDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+c2VsZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+NDEwIFN0YWlubGVzcyBTdGVlbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+LTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxicj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkFkZGl0aW9uYWwgSW5mb3JtYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5BdHRhY2ggc2NyYXAgbWV0YWwgcGljdHVyZXMgKElmIEFueSk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtc3VjY2Vzc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtZm9vdGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gbGluazEgXCI+R2V0IFF1b3RlPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQge1xyXG4gIG1hcEdldHRlcnNcclxufSBmcm9tIFwidnVleFwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJVc2VyQWRkRWRpdFwiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2aWV3X21vZGU6IGZhbHNlLFxyXG4gICAgICBjb3VudHJpZXM6IFtdLFxyXG4gICAgICBzdGF0ZXM6IFtdLFxyXG4gICAgICBjaXRpZXM6IFtdLFxyXG4gICAgICBlZGl0bW9kZTogZmFsc2UsXHJcbiAgICAgIHN0ZXA6IDEsXHJcbiAgICAgIHVzZXJzOiB7fSxcclxuICAgICAgZnJtX3F1b3RlczogbmV3IEZvcm0oe1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBvcmdhbml6YXRpb246ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgYWRkcmVzc18xOiAnJyxcclxuICAgICAgICBjaXR5OiAnJyxcclxuICAgICAgICBzdGF0ZTogJycsXHJcbiAgICAgICAgemlwX2NvZGU6ICcnLFxyXG4gICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgIG1hdGVyaWFsOiBbXVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC4uLm1hcEdldHRlcnMoW1wiZXJyb3JzXCJdKVxyXG4gIH0sXHJcbiAgYmVmb3JlQ3JlYXRlKCkge1xyXG4gICAgYXhpb3MuZ2V0KFwiYXBpL2dldENvdW50cmllc1wiKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb3VudHJpZXMgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgIH0pXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhc3luYyBhZGRJbmZvKCkge1xyXG4gICAgICB0aGlzLmZybV9xdW90ZXMubWF0ZXJpYWwucHVzaCh7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIG1hdGVyaWFsXzogJycsXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgbmV4dF9zdGVwKGZpbmFsID0gZmFsc2UpIHtcclxuICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCdmcm1TdGVwJyArIHRoaXMuc3RlcCkudGhlbihhc3luYyAodmFsaWQpID0+IHtcclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgIHRoaXMuc3VibWl0X3VzZXIoKTtcclxuICAgICAgICAgIC8qICAgICB0aGlzLnN0ZXArK1xyXG4gICAgICAgICAgICAgIGlmIChmaW5hbCA9PSAnc3VibWl0Jykge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSAxO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdF91c2VyKCk7XHJcbiAgICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgc3VibWl0X3VzZXIoKSB7XHJcbiAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XHJcbiAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX3VzZXJcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5mcm1fdXNlci5pZCA+IDApIHtcclxuICAgICAgICB0aGlzLmZybV91c2VyLnB1dCgnYXBpL3VzZXIvJyArIHRoaXMuZnJtX3VzZXIuaWQpXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgICBpZiAodGhpcy5mcm1fdXNlci5vcmdhbml6YXRpb24gPT0gJ1VuaXRlZCBTY3JhcCBNZXRhbCcgJiYgdGhpcy5zdGVwID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RlcCA9IDM7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RlcCsrO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIC8vICB0aGlzLmZybV91c2VyLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgLy8gdGhpcy4kcm91dGVyLnB1c2goJy91c2VycycpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mcm1fdXNlci5wb3N0KCdhcGkvdXNlcicpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjbG9hZGVyZC5oaWRlKClcclxuICAgICAgICAgICAgdGhpcy5mcm1fdXNlci5pZCA9IGRhdGEuZGF0YS5kYXRhLmlkO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmZybV91c2VyLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIC8vICAkKCdhW2hyZWY9XCIjbWVudTFcIl0nKS50YWIoJ3Nob3cnKTtcclxuICAgICAgICAgICAgdGhpcy5mcm1fdXNlci5hY2NvdW50X2luZm8gPSBbXVxyXG4gICAgICAgICAgICB0aGlzLmFkZEluZm8oKVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZnJtX3VzZXIub3JnYW5pemF0aW9uID09ICdVbml0ZWQgU2NyYXAgTWV0YWwnKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGVwID0gMztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSAyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGRhdGEuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGlmICh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpIHtcclxuICAgICAgdGhpcy52aWV3X21vZGUgPSB0cnVlXHJcbiAgICAgIHRoaXMuZnJtX3VzZXIuaWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XHJcbiAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XHJcbiAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX3VzZXJcclxuICAgICAgfSk7XHJcbiAgICAgIGF4aW9zLmdldChcImFwaS91c2VyL1wiICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMuZnJtX3VzZXIuZmlsbChyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvdXNlcnMvJykuY2F0Y2goKCkgPT4geyB9KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLnN0ZXAgPSAxXHJcbiAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgdGhpcy52aWV3X21vZGUgPSBmYWxzZVxyXG4gICAgdGhpcy5hZGRJbmZvKCk7XHJcbiAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBhc3luYyBzdGVwKG4pIHtcclxuICAgICAgJCgnYVtocmVmPVwiI21lbnUnICsgbiArICdcIl0nKS50YWIoJ3Nob3cnKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyAnZnJtX3VzZXIub3JnYW5pemF0aW9uJyhuKSB7XHJcbiAgICAgIGlmIChuID09ICdVbml0ZWQgU2NyYXAgTWV0YWwnKSB7XHJcbiAgICAgICAgaWYgKCFbJ0FkbWluJywgJ0ZpbmFuY2UgVGVhbScsICdUcmFuc3BvcnRhdGlvbiBUZWFtJywgJ1NhbGVzIFRlYW0nLCAnQ0VDJ10uaW5jbHVkZXModGhpcy5mcm1fdXNlci50eXBlKSkge1xyXG4gICAgICAgICAgdGhpcy5mcm1fdXNlci50eXBlID0gJydcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFbJ1ByaW1hcnknLCAnRmluYW5jZScsICdUcmFuc3BvcnRhdGlvbiddLmluY2x1ZGVzKHRoaXMuZnJtX3VzZXIudHlwZSkpIHtcclxuICAgICAgICAgIHRoaXMuZnJtX3VzZXIudHlwZSA9ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LXdhcm5pbmdcIiB9LCBbXG4gICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLmFkZHJlc3NfMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5hZGRyZXNzXzEgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3F1b3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzXzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oNSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDYpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSg3KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oOCksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDkpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgxMCksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkdldCBhIFF1b3RlXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbX3ZtLl92KFwiVXNlciBcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkNvbXBhbnkgTmFtZSBcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiQnJpZGdlcG9ydCBNZXRhbHNcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJXb3JrIEVtYWlsXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIm1hdHRzaW1wc29uQGJyaWRnZXBvcnQubWV0YWxzLmNvbVwiKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkNvbnRhY3QgTnVtYmVyXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIigzMTIpIDAyMiAtIDEwMjJcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJBZGRyZXNzXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIjM4MDIgUyBSYWNpbmUgQXZlbnVlXCIpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQ2l0eVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiIH0sIFtfdm0uX3YoXCJDaGljYWdvXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlN0YXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW192bS5fdihcIklMXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlppcCBDb2RlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW192bS5fdihcIjYwNjA5XCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LWJsYWNrXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIGNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJTY3JhcCBJbmZvcm1hdGlvblwiKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlc2VjdGlvblwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLXJlc3BvbnNpdmVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB3aWR0aDogXCI3MFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTbCBOby5cIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1hdGVyaWFsXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiV2VpZ2h0IChMQikgXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHdpZHRoOiBcIjEwMFwiIH0gfSwgW192bS5fdihcIkFjdGlvblwiKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiMDFcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzZWxlY3RcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcInNlbGVjdFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcIkNvcHBlciAxOTdcIildKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMTMwMFwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdHJhc2gtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIjAyXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic2VsZWN0XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJzZWxlY3RcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCI0MTAgU3RhaW5sZXNzIFN0ZWVsXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW192bS5fdihcIi1cIildKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaC1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBsdXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwiRW50ZXIgQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkF0dGFjaCBzY3JhcCBtZXRhbCBwaWN0dXJlcyAoSWYgQW55KVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIgfSB9KSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3gtc3VjY2Vzc1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWZvb3RlclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMVwiLCBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJHZXQgUXVvdGVcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0NWRjZjFlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGhvc3RpbmdlclxcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTQ1ZGNmMWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTQ1ZGNmMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTQ1ZGNmMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0NWRjZjFlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE0NWRjZjFlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDVkY2YxZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=