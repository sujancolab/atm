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
  name: "QuotesAddEdit",
  data: function data() {
    return {
      view_mode: false,
      editmode: false,
      products: [],
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

    axios.get("api/getProducts").then(function (res) {
      _this.products = res.data.data;
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
                  material_no: '',
                  weight: ''
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
            //  this.frm_user.reset();
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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var render = function render() {
  var _class, _class2, _class3, _class4, _class5, _class6;

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
      type: "text",
      placeholder: "Enter Name ..."
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
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Company Name ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_quotes.organization,
      expression: "frm_quotes.organization"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Enter Company ..."
    },
    domProps: {
      value: _vm.frm_quotes.organization
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_quotes, "organization", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.organization") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.organization")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Work Email ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_quotes.email,
      expression: "frm_quotes.email"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required|email",
      expression: "'required|email'"
    }],
    staticClass: "form-control",
    "class": (_class = {
      error: _vm.errors.email
    }, _defineProperty(_class, "error", _vm.verrors.has("email")), _defineProperty(_class, "haveValue", _vm.frm_quotes.email), _class),
    attrs: {
      type: "text",
      placeholder: "Enter Email ...",
      "data-vv-name": "email",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_quotes.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_quotes, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.email") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.email")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Contact Number")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_quotes.phone,
      expression: "frm_quotes.phone"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class2 = {
      error: _vm.errors.phone
    }, _defineProperty(_class2, "error", _vm.verrors.has("phone")), _defineProperty(_class2, "haveValue", _vm.frm_quotes.phone), _class2),
    attrs: {
      type: "text",
      placeholder: "Enter Phone ...",
      "data-vv-name": "phone",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_quotes.phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_quotes, "phone", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.phone") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.phone")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Address")]), _vm._v(" "), _c("input", {
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
    "class": (_class3 = {
      error: _vm.errors.address_1
    }, _defineProperty(_class3, "error", _vm.verrors.has("address_1")), _defineProperty(_class3, "haveValue", _vm.frm_quotes.address_1), _class3),
    attrs: {
      type: "text",
      placeholder: "Enter Address ...",
      "data-vv-name": "address_1",
      "data-vv-scope": "frmStep1"
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
  }), _vm._v(" "), _vm.verrors.has("frmStep1.address_1") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.address_1")) + "\n              ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("City")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_quotes.city,
      expression: "frm_quotes.city"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class4 = {
      error: _vm.errors.city
    }, _defineProperty(_class4, "error", _vm.verrors.has("city")), _defineProperty(_class4, "haveValue", _vm.frm_quotes.city), _class4),
    attrs: {
      type: "text",
      placeholder: "Enter City ...",
      "data-vv-name": "city",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_quotes.city
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_quotes, "city", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.city") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.city")) + "\n              ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("State")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_quotes.state,
      expression: "frm_quotes.state"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class5 = {
      error: _vm.errors.state
    }, _defineProperty(_class5, "error", _vm.verrors.has("state")), _defineProperty(_class5, "haveValue", _vm.frm_quotes.state), _class5),
    attrs: {
      type: "text",
      placeholder: "Enter State ...",
      "data-vv-name": "state",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_quotes.state
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_quotes, "state", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.state") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.state")) + "\n              ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Zip Code")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_quotes.zip_code,
      expression: "frm_quotes.zip_code"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class6 = {
      error: _vm.errors.zip_code
    }, _defineProperty(_class6, "error", _vm.verrors.has("zip_code")), _defineProperty(_class6, "haveValue", _vm.frm_quotes.zip_code), _class6),
    attrs: {
      type: "text",
      placeholder: "Enter ZIP ...",
      "data-vv-name": "zip_code",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_quotes.zip_code
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_quotes, "zip_code", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.zip_code") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.zip_code")) + "\n              ")]) : _vm._e()])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card box-black"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "tablesection"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-striped table-hover"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", _vm._l(_vm.frm_quotes.material, function (item, ix) {
    var _class7;

    return _c("tr", {
      key: "up" + ix
    }, [_c("td", {
      attrs: {
        align: "center"
      }
    }, [_vm._v(_vm._s(ix + 1))]), _vm._v(" "), _c("td", [_c("v-select", {
      directives: [{
        name: "validate",
        rawName: "v-validate",
        value: "required",
        expression: "'required'"
      }],
      "class": (_class7 = {
        error: _vm.errors.state
      }, _defineProperty(_class7, "error", _vm.verrors.has("products")), _defineProperty(_class7, "haveValue", _vm.frm_quotes.products), _class7),
      attrs: {
        label: "name",
        reduce: function reduce(option) {
          return option.name;
        },
        options: _vm.products,
        placeholder: "Search Product ...",
        name: "material_no" + ix,
        "data-vv-as": "product",
        "data-vv-scope": "frmStep1"
      },
      model: {
        value: item.material_no,
        callback: function callback($$v) {
          _vm.$set(item, "material_no", $$v);
        },
        expression: "item.material_no"
      }
    }), _vm._v(" "), _vm.verrors.has("frmStep1.material_no" + ix) ? _c("p", {
      staticClass: "errormsg"
    }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.material_no" + ix)))]) : _vm._e()], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.weight,
        expression: "item.weight"
      }, {
        name: "validate",
        rawName: "v-validate",
        value: "required",
        expression: "'required'"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        name: "weight" + ix,
        "data-vv-scope": "frmStep1",
        "data-vv-as": "weight"
      },
      domProps: {
        value: item.weight
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(item, "weight", $event.target.value);
        }
      }
    }), _vm._v(" "), _vm.verrors.has("frmStep1.weight" + ix) ? _c("p", {
      staticClass: "errormsg"
    }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.weight" + ix)))]) : _vm._e()]), _vm._v(" "), _c("td", [ix > 0 ? _c("button", {
      staticClass: "btn btn-danger",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.frm_quotes.material.splice(ix, 1);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash-o",
      attrs: {
        "aria-hidden": "true"
      }
    })]) : _vm._e(), _vm._v(" "), _vm.frm_quotes.material.length == ix + 1 ? _c("button", {
      staticClass: "btn btn-success",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.addInfo();
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-plus",
      attrs: {
        "aria-hidden": "true"
      }
    })]) : _vm._e()])]);
  }), 0)])])]), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(4)])]), _vm._v(" "), _vm._m(5)])]);
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
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("Scrap Information")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("thead", [_c("tr", [_c("th", {
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
  }, [_vm._v("Action")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
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
  })])])]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcXVvdGVzL0FkZEVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3F1b3Rlcy9BZGRFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/NzdmOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/MDFhNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/NDI0OSJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsInZpZXdfbW9kZSIsImVkaXRtb2RlIiwicHJvZHVjdHMiLCJzdGVwIiwidXNlcnMiLCJmcm1fcXVvdGVzIiwiaWQiLCJvcmdhbml6YXRpb24iLCJlbWFpbCIsInBob25lIiwiYWRkcmVzc18xIiwiY2l0eSIsInN0YXRlIiwiemlwX2NvZGUiLCJ0eXBlIiwibWF0ZXJpYWwiLCJjb21wdXRlZCIsIm1hcEdldHRlcnMiLCJiZWZvcmVDcmVhdGUiLCJheGlvcyIsInRoZW4iLCJtZXRob2RzIiwiYWRkSW5mbyIsIm1hdGVyaWFsX25vIiwid2VpZ2h0IiwibmV4dF9zdGVwIiwiZmluYWwiLCJzdWJtaXRfdXNlciIsImNvbnRhaW5lciIsImNsb2FkZXJkIiwiVG9hc3QiLCJpY29uIiwidGl0bGUiLCJtb3VudGVkIiwiY3JlYXRlZCIsIndhdGNoIiwibiIsIiQiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwiX20iLCJfdiIsInN0YXRpY0NsYXNzIiwiZGlyZWN0aXZlcyIsInJhd05hbWUiLCJ2YWx1ZSIsImV4cHJlc3Npb24iLCJhdHRycyIsInBsYWNlaG9sZGVyIiwiZG9tUHJvcHMiLCJvbiIsImlucHV0IiwiJGV2ZW50IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiJHNldCIsInZlcnJvcnMiLCJoYXMiLCJfcyIsImZpcnN0IiwiX2UiLCJlcnJvciIsImVycm9ycyIsIl9sIiwiaXRlbSIsIml4Iiwia2V5IiwiYWxpZ24iLCJsYWJlbCIsInJlZHVjZSIsIm9wdGlvbiIsIm9wdGlvbnMiLCJtb2RlbCIsImNhbGxiYWNrIiwiJCR2IiwiY2xpY2siLCJzcGxpY2UiLCJsZW5ndGgiLCJzdGF0aWNSZW5kZXJGbnMiLCJzdGF0aWNTdHlsZSIsIndpZHRoIiwiX3dpdGhTdHJpcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7K0NBNEtBLG9KOzs7Ozs7Ozs7Ozs7QUFBQTtBQUdlO0VBQ2ZBLHFCQURBO0VBRUFDLElBRkEsa0JBRUE7SUFDQTtNQUNBQyxnQkFEQTtNQUVBQyxlQUZBO01BR0FDLFlBSEE7TUFJQUMsT0FKQTtNQUtBQyxTQUxBO01BTUFDO1FBQ0FDLE1BREE7UUFFQVIsUUFGQTtRQUdBUyxnQkFIQTtRQUlBQyxTQUpBO1FBS0FDLFNBTEE7UUFNQUMsYUFOQTtRQU9BQyxRQVBBO1FBUUFDLFNBUkE7UUFTQUMsWUFUQTtRQVVBQyxRQVZBO1FBV0FDO01BWEE7SUFOQTtFQW9CQSxDQXZCQTtFQXdCQUMsNEJBQ0FDLG1FQURBLENBeEJBO0VBMkJBQyxZQTNCQSwwQkEyQkE7SUFBQTs7SUFDQUMsNkJBQ0FDLElBREEsQ0FDQTtNQUNBO0lBQ0EsQ0FIQTtFQUlBLENBaENBO0VBaUNBQztJQUNBQyxPQURBLHFCQUNBO01BQUE7O01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFDQTtrQkFDQWhCLE1BREE7a0JBRUFpQixlQUZBO2tCQUdBQztnQkFIQTs7Y0FEQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFNQSxDQVBBO0lBUUFDLFNBUkEsdUJBUUE7TUFBQTtNQUFBOztNQUFBO1FBQUE7O1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUFDOztnQkFDQTtrQkFBQTtvQkFBQTtzQkFBQTt3QkFBQTswQkFBQTs0QkFDQTs4QkFDQTs4QkFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUUsNkVBQU07QUFDUixFQUFFLGtGQUFNO0FBQ1IsRUFBRSwyRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBNkwsQ0FBZ0IsbVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBak47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzUuYnVuZGxlLmJjMGM1OGFkMmRmNGViN2IyYWQ4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgIDxoMT5HZXQgYSBRdW90ZTwvaDE+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LXdhcm5pbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlVzZXIgPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE5hbWUgLi4uXCIgdi1tb2RlbD1cImZybV9xdW90ZXMuYWRkcmVzc18xXCJcclxuICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db21wYW55IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDb21wYW55IC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmcm1fcXVvdGVzLm9yZ2FuaXphdGlvblwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCI+XHJcbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLm9yZ2FuaXphdGlvbicpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7e1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLm9yZ2FuaXphdGlvbicpXHJcbiAgICAgICAgICAgICAgICB9fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+V29yayBFbWFpbCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsIC4uLlwiIHYtbW9kZWw9XCJmcm1fcXVvdGVzLmVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZHxlbWFpbCdcIlxyXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5lbWFpbCwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ2VtYWlsJyksICdoYXZlVmFsdWUnOiBmcm1fcXVvdGVzLmVtYWlsIH1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJlbWFpbFwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5lbWFpbCcpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5lbWFpbCcpIH19PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvbnRhY3QgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBQaG9uZSAuLi5cIiB2LW1vZGVsPVwiZnJtX3F1b3Rlcy5waG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcclxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMucGhvbmUsICdlcnJvcic6IHZlcnJvcnMuaGFzKCdwaG9uZScpLCAnaGF2ZVZhbHVlJzogZnJtX3F1b3Rlcy5waG9uZSB9XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwicGhvbmVcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEucGhvbmUnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEucGhvbmUnKSB9fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBZGRyZXNzIC4uLlwiIHYtbW9kZWw9XCJmcm1fcXVvdGVzLmFkZHJlc3NfMVwiXHJcbiAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcclxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMuYWRkcmVzc18xLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnYWRkcmVzc18xJyksICdoYXZlVmFsdWUnOiBmcm1fcXVvdGVzLmFkZHJlc3NfMSB9XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiYWRkcmVzc18xXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLmFkZHJlc3NfMScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5hZGRyZXNzXzEnKSB9fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIENpdHkgLi4uXCIgdi1tb2RlbD1cImZybV9xdW90ZXMuY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcclxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMuY2l0eSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ2NpdHknKSwgJ2hhdmVWYWx1ZSc6IGZybV9xdW90ZXMuY2l0eSB9XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiY2l0eVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5jaXR5JylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLmNpdHknKSB9fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlN0YXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBTdGF0ZSAuLi5cIiB2LW1vZGVsPVwiZnJtX3F1b3Rlcy5zdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcclxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMuc3RhdGUsICdlcnJvcic6IHZlcnJvcnMuaGFzKCdzdGF0ZScpLCAnaGF2ZVZhbHVlJzogZnJtX3F1b3Rlcy5zdGF0ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwic3RhdGVcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEuc3RhdGUnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuc3RhdGUnKSB9fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlppcCBDb2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBaSVAgLi4uXCIgdi1tb2RlbD1cImZybV9xdW90ZXMuemlwX2NvZGVcIlxyXG4gICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXHJcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLnppcF9jb2RlLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnemlwX2NvZGUnKSwgJ2hhdmVWYWx1ZSc6IGZybV9xdW90ZXMuemlwX2NvZGUgfVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cInppcF9jb2RlXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLnppcF9jb2RlJylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLnppcF9jb2RlJykgfX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJveC1ibGFja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGUgY2FyZC10ZXh0XCI+U2NyYXAgSW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIiB3aWR0aD1cIjcwXCI+U2wgTm8uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TWF0ZXJpYWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5XZWlnaHQgKExCKSA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjEwMFwiPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIoaXRlbSwgaXgpIGluIGZybV9xdW90ZXMubWF0ZXJpYWxcIiA6a2V5PVwiJ3VwJyArIGl4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+e3sgaXggKyAxIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5uYW1lXCIgOm9wdGlvbnM9XCJwcm9kdWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFByb2R1Y3QgLi4uXCIgdi1tb2RlbD1cIml0ZW0ubWF0ZXJpYWxfbm9cIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLnN0YXRlLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygncHJvZHVjdHMnKSwgJ2hhdmVWYWx1ZSc6IGZybV9xdW90ZXMucHJvZHVjdHMgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiJ21hdGVyaWFsX25vJyArIGl4XCIgZGF0YS12di1hcz1cInByb2R1Y3RcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5tYXRlcmlhbF9ubycgKyBpeClcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEubWF0ZXJpYWxfbm8nICsgaXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJpdGVtLndlaWdodFwiIHR5cGU9XCJ0ZXh0XCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cIid3ZWlnaHQnICsgaXhcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIiBkYXRhLXZ2LWFzPVwid2VpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEud2VpZ2h0JyArIGl4KVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS53ZWlnaHQnICsgaXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiB2LWlmPVwiaXggPiAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZnJtX3F1b3Rlcy5tYXRlcmlhbC5zcGxpY2UoaXgsIDEpXCI+PGkgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHYtaWY9XCJmcm1fcXVvdGVzLm1hdGVyaWFsLmxlbmd0aCA9PSBpeCArIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJhZGRJbmZvKClcIj48aSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxicj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkFkZGl0aW9uYWwgSW5mb3JtYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5BdHRhY2ggc2NyYXAgbWV0YWwgcGljdHVyZXMgKElmIEFueSk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtc3VjY2Vzc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtZm9vdGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gbGluazEgXCI+R2V0IFF1b3RlPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQge1xyXG4gIG1hcEdldHRlcnNcclxufSBmcm9tIFwidnVleFwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJRdW90ZXNBZGRFZGl0XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZpZXdfbW9kZTogZmFsc2UsXHJcbiAgICAgIGVkaXRtb2RlOiBmYWxzZSxcclxuICAgICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgICBzdGVwOiAxLFxyXG4gICAgICB1c2Vyczoge30sXHJcbiAgICAgIGZybV9xdW90ZXM6IG5ldyBGb3JtKHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgb3JnYW5pemF0aW9uOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgIGFkZHJlc3NfMTogJycsXHJcbiAgICAgICAgY2l0eTogJycsXHJcbiAgICAgICAgc3RhdGU6ICcnLFxyXG4gICAgICAgIHppcF9jb2RlOiAnJyxcclxuICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICBtYXRlcmlhbDogW11cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAuLi5tYXBHZXR0ZXJzKFtcImVycm9yc1wiXSlcclxuICB9LFxyXG4gIGJlZm9yZUNyZWF0ZSgpIHtcclxuICAgIGF4aW9zLmdldChcImFwaS9nZXRQcm9kdWN0c1wiKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlcy5kYXRhLmRhdGFcclxuICAgICAgfSlcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGFkZEluZm8oKSB7XHJcbiAgICAgIHRoaXMuZnJtX3F1b3Rlcy5tYXRlcmlhbC5wdXNoKHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgbWF0ZXJpYWxfbm86ICcnLFxyXG4gICAgICAgIHdlaWdodDogJycsXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgbmV4dF9zdGVwKGZpbmFsID0gZmFsc2UpIHtcclxuICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCdmcm1TdGVwJyArIHRoaXMuc3RlcCkudGhlbihhc3luYyAodmFsaWQpID0+IHtcclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgIHRoaXMuc3VibWl0X3VzZXIoKTtcclxuICAgICAgICAgIC8qICAgICB0aGlzLnN0ZXArK1xyXG4gICAgICAgICAgICAgIGlmIChmaW5hbCA9PSAnc3VibWl0Jykge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSAxO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdF91c2VyKCk7XHJcbiAgICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgc3VibWl0X3VzZXIoKSB7XHJcbiAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XHJcbiAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX3VzZXJcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5mcm1fdXNlci5pZCA+IDApIHtcclxuICAgICAgICB0aGlzLmZybV91c2VyLnB1dCgnYXBpL3VzZXIvJyArIHRoaXMuZnJtX3VzZXIuaWQpXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgLy8gIHRoaXMuZnJtX3VzZXIucmVzZXQoKTtcclxuICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAvLyB0aGlzLiRyb3V0ZXIucHVzaCgnL3VzZXJzJykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZybV91c2VyLnBvc3QoJ2FwaS91c2VyJylcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKVxyXG4gICAgICAgICAgICB0aGlzLmZybV91c2VyLmlkID0gZGF0YS5kYXRhLmRhdGEuaWQ7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZnJtX3VzZXIucmVzZXQoKTtcclxuICAgICAgICAgICAgLy8gICQoJ2FbaHJlZj1cIiNtZW51MVwiXScpLnRhYignc2hvdycpO1xyXG4gICAgICAgICAgICB0aGlzLmZybV91c2VyLmFjY291bnRfaW5mbyA9IFtdXHJcbiAgICAgICAgICAgIHRoaXMuYWRkSW5mbygpXHJcblxyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGRhdGEuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGlmICh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpIHtcclxuICAgICAgdGhpcy52aWV3X21vZGUgPSB0cnVlXHJcbiAgICAgIHRoaXMuZnJtX3VzZXIuaWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XHJcbiAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XHJcbiAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX3VzZXJcclxuICAgICAgfSk7XHJcbiAgICAgIGF4aW9zLmdldChcImFwaS91c2VyL1wiICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMuZnJtX3VzZXIuZmlsbChyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvdXNlcnMvJykuY2F0Y2goKCkgPT4geyB9KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLnN0ZXAgPSAxXHJcbiAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgdGhpcy52aWV3X21vZGUgPSBmYWxzZVxyXG4gICAgdGhpcy5hZGRJbmZvKCk7XHJcbiAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBhc3luYyBzdGVwKG4pIHtcclxuICAgICAgJCgnYVtocmVmPVwiI21lbnUnICsgbiArICdcIl0nKS50YWIoJ3Nob3cnKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyAnZnJtX3VzZXIub3JnYW5pemF0aW9uJyhuKSB7XHJcbiAgICAgIGlmIChuID09ICdVbml0ZWQgU2NyYXAgTWV0YWwnKSB7XHJcbiAgICAgICAgaWYgKCFbJ0FkbWluJywgJ0ZpbmFuY2UgVGVhbScsICdUcmFuc3BvcnRhdGlvbiBUZWFtJywgJ1NhbGVzIFRlYW0nLCAnQ0VDJ10uaW5jbHVkZXModGhpcy5mcm1fdXNlci50eXBlKSkge1xyXG4gICAgICAgICAgdGhpcy5mcm1fdXNlci50eXBlID0gJydcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFbJ1ByaW1hcnknLCAnRmluYW5jZScsICdUcmFuc3BvcnRhdGlvbiddLmluY2x1ZGVzKHRoaXMuZnJtX3VzZXIudHlwZSkpIHtcclxuICAgICAgICAgIHRoaXMuZnJtX3VzZXIudHlwZSA9ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LXdhcm5pbmdcIiB9LCBbXG4gICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLmFkZHJlc3NfMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBOYW1lIC4uLlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5hZGRyZXNzXzEgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3F1b3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzXzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkNvbXBhbnkgTmFtZSBcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fcXVvdGVzLm9yZ2FuaXphdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5vcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgQ29tcGFueSAuLi5cIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV9xdW90ZXMub3JnYW5pemF0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV9xdW90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEub3JnYW5pemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS5vcmdhbml6YXRpb25cIikpXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIldvcmsgRW1haWwgXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5lbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZHxlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWR8ZW1haWwnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcImVtYWlsXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgRW1haWwgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZybV9xdW90ZXMsIFwiZW1haWxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEuZW1haWxcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS5lbWFpbFwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkNvbnRhY3QgTnVtYmVyXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5waG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcInBob25lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgUGhvbmUgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJwaG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5waG9uZSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZybV9xdW90ZXMsIFwicGhvbmVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEucGhvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS5waG9uZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkFkZHJlc3NcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fcXVvdGVzLmFkZHJlc3NfMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5hZGRyZXNzXzFcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLmFkZHJlc3NfMSxcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiYWRkcmVzc18xXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMuYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIEFkZHJlc3MgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJhZGRyZXNzXzFcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuYWRkcmVzc18xIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV9xdW90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkcmVzc18xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEuYWRkcmVzc18xXCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS5hZGRyZXNzXzFcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkNpdHlcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fcXVvdGVzLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV9xdW90ZXMuY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiY2l0eVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fcXVvdGVzLmNpdHksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgQ2l0eSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuY2l0eSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZybV9xdW90ZXMsIFwiY2l0eVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5jaXR5XCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS5jaXR5XCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTdGF0ZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV9xdW90ZXMuc3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJzdGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fcXVvdGVzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIFN0YXRlIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuc3RhdGUgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mcm1fcXVvdGVzLCBcInN0YXRlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLnN0YXRlXCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS5zdGF0ZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiWmlwIENvZGVcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fcXVvdGVzLnppcF9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLnppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy56aXBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiemlwX2NvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3F1b3Rlcy56aXBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBaSVAgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJ6aXBfY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy56aXBfY29kZSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcXVvdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEuemlwX2NvZGVcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLnppcF9jb2RlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGJveC1ibGFja1wiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVzZWN0aW9uXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZnJtX3F1b3Rlcy5tYXRlcmlhbCwgZnVuY3Rpb24gKGl0ZW0sIGl4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBcInVwXCIgKyBpeCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpeCArIDEpKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJwcm9kdWN0c1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMucHJvZHVjdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiAob3B0aW9uKSA9PiBvcHRpb24ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5wcm9kdWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBQcm9kdWN0IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXRlcmlhbF9ub1wiICsgaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJwcm9kdWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLm1hdGVyaWFsX25vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJtYXRlcmlhbF9ub1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLm1hdGVyaWFsX25vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLm1hdGVyaWFsX25vXCIgKyBpeClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZybVN0ZXAxLm1hdGVyaWFsX25vXCIgKyBpeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS53ZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ud2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIndlaWdodFwiICsgaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJ3ZWlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGl0ZW0ud2VpZ2h0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChpdGVtLCBcIndlaWdodFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS53ZWlnaHRcIiArIGl4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS53ZWlnaHRcIiArIGl4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgaXggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZnJtX3F1b3Rlcy5tYXRlcmlhbC5zcGxpY2UoaXgsIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdHJhc2gtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcXVvdGVzLm1hdGVyaWFsLmxlbmd0aCA9PSBpeCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkSW5mbygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oNCksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDUpLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJHZXQgYSBRdW90ZVwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgY2FyZC10ZXh0XCIgfSwgW192bS5fdihcIlVzZXIgXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlNjcmFwIEluZm9ybWF0aW9uXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSwgYXR0cnM6IHsgd2lkdGg6IFwiNzBcIiB9IH0sXG4gICAgICAgICAgW192bS5fdihcIlNsIE5vLlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTWF0ZXJpYWxcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiV2VpZ2h0IChMQikgXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyB3aWR0aDogXCIxMDBcIiB9IH0sIFtfdm0uX3YoXCJBY3Rpb25cIildKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIkVudGVyIEFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIiB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkF0dGFjaCBzY3JhcCBtZXRhbCBwaWN0dXJlcyAoSWYgQW55KVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiIH0gfSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGJveC1zdWNjZXNzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtZm9vdGVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsxXCIsIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIkdldCBRdW90ZVwiKV1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWRkRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ1ZGNmMWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRkRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcaG9zdGluZ2VyXFxcXHVuaXRlZC1zY3JhcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNDVkY2YxZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNDVkY2YxZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNDVkY2YxZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWRkRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ1ZGNmMWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTQ1ZGNmMWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3F1b3Rlcy9BZGRFZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0NWRjZjFlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==