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
  beforeCreate: function beforeCreate() {},
  methods: {
    addInfo: function addInfo() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.frm_quotes.material.push({
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
          _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _final;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _final = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;

                _this2.$validator.validateAll('frmStep' + _this2.step).then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(valid) {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (valid) {
                              _this2.submit_user();
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
      var _this3 = this;

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
          _this3.frm_user.id = data.data.data.id; // this.frm_user.reset();
          //  $('a[href="#menu1"]').tab('show');

          _this3.frm_user.account_info = [];

          _this3.addInfo();

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
    var _this4 = this;

    if (this.$route.params.id) {
      this.view_mode = true;
      this.frm_user.id = this.$route.params.id;
      var cloaderd = this.$loading.show({
        container: this.$refs.ref_load_user
      });
      axios.get("api/user/" + this.$route.params.id).then(function (res) {
        _this4.frm_user.fill(res.data.data);

        cloaderd.hide();
      })["catch"](function () {
        cloaderd.hide();

        _this4.$router.push('/users/')["catch"](function () {});
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
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (n == 'United Scrap Metal') {
                  if (!['Admin', 'Finance Team', 'Transportation Team', 'Sales Team', 'CEC'].includes(_this5.frm_user.type)) {
                    _this5.frm_user.type = '';
                  }
                } else {
                  if (!['Primary', 'Finance', 'Transportation'].includes(_this5.frm_user.type)) {
                    _this5.frm_user.type = '';
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
    return _c("tr", {
      key: "up" + ix
    }, [_c("td", {
      attrs: {
        align: "center"
      }
    }, [_vm._v(_vm._s(ix + 1))]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.material_no,
        expression: "item.material_no"
      }, {
        name: "validate",
        rawName: "v-validate",
        value: "required",
        expression: "'required'"
      }],
      attrs: {
        type: "text",
        name: "material_no" + ix,
        "data-vv-scope": "frmStep1",
        "data-vv-as": "material no"
      },
      domProps: {
        value: item.material_no
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(item, "material_no", $event.target.value);
        }
      }
    }), _vm._v(" "), _vm.verrors.has("frmStep1.material_no" + ix) ? _c("p", {
      staticClass: "errormsg"
    }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.material_no" + ix)))]) : _vm._e()]), _vm._v(" "), _c("td", [_c("input", {
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
    }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.weight" + ix)))]) : _vm._e()]), _vm._v(" "), _c("td")]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcXVvdGVzL0FkZEVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3F1b3Rlcy9BZGRFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/NzdmOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/MDFhNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/NDI0OSJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsInZpZXdfbW9kZSIsImVkaXRtb2RlIiwic3RlcCIsInVzZXJzIiwiZnJtX3F1b3RlcyIsImlkIiwib3JnYW5pemF0aW9uIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3NfMSIsImNpdHkiLCJzdGF0ZSIsInppcF9jb2RlIiwidHlwZSIsIm1hdGVyaWFsIiwiY29tcHV0ZWQiLCJtYXBHZXR0ZXJzIiwiYmVmb3JlQ3JlYXRlIiwibWV0aG9kcyIsImFkZEluZm8iLCJtYXRlcmlhbF9ubyIsIndlaWdodCIsIm5leHRfc3RlcCIsImZpbmFsIiwic3VibWl0X3VzZXIiLCJjb250YWluZXIiLCJ0aGVuIiwiY2xvYWRlcmQiLCJUb2FzdCIsImljb24iLCJ0aXRsZSIsIm1vdW50ZWQiLCJheGlvcyIsImNyZWF0ZWQiLCJ3YXRjaCIsIm4iLCIkIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsIl9tIiwiX3YiLCJzdGF0aWNDbGFzcyIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwidmFsdWUiLCJleHByZXNzaW9uIiwiYXR0cnMiLCJwbGFjZWhvbGRlciIsImRvbVByb3BzIiwib24iLCJpbnB1dCIsIiRldmVudCIsInRhcmdldCIsImNvbXBvc2luZyIsIiRzZXQiLCJ2ZXJyb3JzIiwiaGFzIiwiX3MiLCJmaXJzdCIsIl9lIiwiZXJyb3IiLCJlcnJvcnMiLCJfbCIsIml0ZW0iLCJpeCIsImtleSIsImFsaWduIiwic3RhdGljUmVuZGVyRm5zIiwic3RhdGljU3R5bGUiLCJ3aWR0aCIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OytDQXVLQSxvSjs7Ozs7Ozs7Ozs7O0FBQUE7QUFHZTtFQUNmQSxxQkFEQTtFQUVBQyxJQUZBLGtCQUVBO0lBQ0E7TUFDQUMsZ0JBREE7TUFFQUMsZUFGQTtNQUdBQyxPQUhBO01BSUFDLFNBSkE7TUFLQUM7UUFDQUMsTUFEQTtRQUVBUCxRQUZBO1FBR0FRLGdCQUhBO1FBSUFDLFNBSkE7UUFLQUMsU0FMQTtRQU1BQyxhQU5BO1FBT0FDLFFBUEE7UUFRQUMsU0FSQTtRQVNBQyxZQVRBO1FBVUFDLFFBVkE7UUFXQUM7TUFYQTtJQUxBO0VBbUJBLENBdEJBO0VBdUJBQyw0QkFDQUMsbUVBREEsQ0F2QkE7RUEwQkFDLFlBMUJBLDBCQTBCQSxDQUNBLENBM0JBO0VBNEJBQztJQUNBQyxPQURBLHFCQUNBO01BQUE7O01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFDQTtrQkFDQWQsTUFEQTtrQkFFQWUsZUFGQTtrQkFHQUM7Z0JBSEE7O2NBREE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBTUEsQ0FQQTtJQVFBQyxTQVJBLHVCQVFBO01BQUE7TUFBQTs7TUFBQTtRQUFBOztRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBQzs7Z0JBQ0E7a0JBQUE7b0JBQUE7c0JBQUE7d0JBQUE7MEJBQUE7NEJBQ0E7OEJBQ0E7OEJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7NEJBQ0E7OzBCQVJBOzBCQUFBOzRCQUFBO3dCQUFBO3NCQUFBO29CQUFBO2tCQUFBOztrQkFBQTtvQkFBQTtrQkFBQTtnQkFBQTs7Y0FEQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFXQSxDQW5CQTtJQXFCQUMsV0FyQkEseUJBcUJBO01BQUE7O01B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b250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICA8aDE+R2V0IGEgUXVvdGU8L2gxPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJveC13YXJuaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZSBjYXJkLXRleHRcIj5Vc2VyIDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOYW1lIC4uLlwiIHYtbW9kZWw9XCJmcm1fcXVvdGVzLmFkZHJlc3NfMVwiXHJcbiAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Q29tcGFueSBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ29tcGFueSAuLi5cIlxyXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZnJtX3F1b3Rlcy5vcmdhbml6YXRpb25cIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5vcmdhbml6YXRpb24nKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3tcclxuICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5vcmdhbml6YXRpb24nKVxyXG4gICAgICAgICAgICAgICAgfX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPldvcmsgRW1haWwgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbCAuLi5cIiB2LW1vZGVsPVwiZnJtX3F1b3Rlcy5lbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWR8ZW1haWwnXCJcclxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMuZW1haWwsICdlcnJvcic6IHZlcnJvcnMuaGFzKCdlbWFpbCcpLCAnaGF2ZVZhbHVlJzogZnJtX3F1b3Rlcy5lbWFpbCB9XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiZW1haWxcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEuZW1haWwnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuZW1haWwnKSB9fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db250YWN0IE51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGhvbmUgLi4uXCIgdi1tb2RlbD1cImZybV9xdW90ZXMucGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXHJcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLnBob25lLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygncGhvbmUnKSwgJ2hhdmVWYWx1ZSc6IGZybV9xdW90ZXMucGhvbmUgfVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cInBob25lXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLnBob25lJylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLnBob25lJykgfX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQWRkcmVzcyAuLi5cIiB2LW1vZGVsPVwiZnJtX3F1b3Rlcy5hZGRyZXNzXzFcIlxyXG4gICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXHJcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLmFkZHJlc3NfMSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ2FkZHJlc3NfMScpLCAnaGF2ZVZhbHVlJzogZnJtX3F1b3Rlcy5hZGRyZXNzXzEgfVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImFkZHJlc3NfMVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5hZGRyZXNzXzEnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuYWRkcmVzc18xJykgfX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDaXR5IC4uLlwiIHYtbW9kZWw9XCJmcm1fcXVvdGVzLmNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXHJcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLmNpdHksICdlcnJvcic6IHZlcnJvcnMuaGFzKCdjaXR5JyksICdoYXZlVmFsdWUnOiBmcm1fcXVvdGVzLmNpdHkgfVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImNpdHlcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEuY2l0eScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5jaXR5JykgfX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgU3RhdGUgLi4uXCIgdi1tb2RlbD1cImZybV9xdW90ZXMuc3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXHJcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLnN0YXRlLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnc3RhdGUnKSwgJ2hhdmVWYWx1ZSc6IGZybV9xdW90ZXMuc3RhdGUgfVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cInN0YXRlXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLnN0YXRlJylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLnN0YXRlJykgfX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5aaXAgQ29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWklQIC4uLlwiIHYtbW9kZWw9XCJmcm1fcXVvdGVzLnppcF9jb2RlXCJcclxuICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxyXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy56aXBfY29kZSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3ppcF9jb2RlJyksICdoYXZlVmFsdWUnOiBmcm1fcXVvdGVzLnppcF9jb2RlIH1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJ6aXBfY29kZVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS56aXBfY29kZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS56aXBfY29kZScpIH19XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtYmxhY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlNjcmFwIEluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCIgd2lkdGg9XCI3MFwiPlNsIE5vLjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk1hdGVyaWFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+V2VpZ2h0IChMQikgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggd2lkdGg9XCIxMDBcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKGl0ZW0sIGl4KSBpbiBmcm1fcXVvdGVzLm1hdGVyaWFsXCIgOmtleT1cIid1cCcgKyBpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPnt7IGl4ICsgMSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJpdGVtLm1hdGVyaWFsX25vXCIgdHlwZT1cInRleHRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIDpuYW1lPVwiJ21hdGVyaWFsX25vJyArIGl4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCIgZGF0YS12di1hcz1cIm1hdGVyaWFsIG5vXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEubWF0ZXJpYWxfbm8nICsgaXgpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLm1hdGVyaWFsX25vJyArIGl4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cIml0ZW0ud2VpZ2h0XCIgdHlwZT1cInRleHRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIDpuYW1lPVwiJ3dlaWdodCcgKyBpeFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiIGRhdGEtdnYtYXM9XCJ3ZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS53ZWlnaHQnICsgaXgpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLndlaWdodCcgKyBpeClcclxuICAgICAgICAgICAgICAgICAgICAgIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRpdGlvbmFsIEluZm9ybWF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+QXR0YWNoIHNjcmFwIG1ldGFsIHBpY3R1cmVzIChJZiBBbnkpPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LXN1Y2Nlc3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWZvb3RlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGxpbmsxIFwiPkdldCBRdW90ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtcclxuICBtYXBHZXR0ZXJzXHJcbn0gZnJvbSBcInZ1ZXhcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiUXVvdGVzQWRkRWRpdFwiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2aWV3X21vZGU6IGZhbHNlLFxyXG4gICAgICBlZGl0bW9kZTogZmFsc2UsXHJcbiAgICAgIHN0ZXA6IDEsXHJcbiAgICAgIHVzZXJzOiB7fSxcclxuICAgICAgZnJtX3F1b3RlczogbmV3IEZvcm0oe1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBvcmdhbml6YXRpb246ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgYWRkcmVzc18xOiAnJyxcclxuICAgICAgICBjaXR5OiAnJyxcclxuICAgICAgICBzdGF0ZTogJycsXHJcbiAgICAgICAgemlwX2NvZGU6ICcnLFxyXG4gICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgIG1hdGVyaWFsOiBbXVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC4uLm1hcEdldHRlcnMoW1wiZXJyb3JzXCJdKVxyXG4gIH0sXHJcbiAgYmVmb3JlQ3JlYXRlKCkge1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgYWRkSW5mbygpIHtcclxuICAgICAgdGhpcy5mcm1fcXVvdGVzLm1hdGVyaWFsLnB1c2goe1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBtYXRlcmlhbF9ubzogJycsXHJcbiAgICAgICAgd2VpZ2h0OiAnJyxcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhc3luYyBuZXh0X3N0ZXAoZmluYWwgPSBmYWxzZSkge1xyXG4gICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoJ2ZybVN0ZXAnICsgdGhpcy5zdGVwKS50aGVuKGFzeW5jICh2YWxpZCkgPT4ge1xyXG4gICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXRfdXNlcigpO1xyXG4gICAgICAgICAgLyogICAgIHRoaXMuc3RlcCsrXHJcbiAgICAgICAgICAgICAgaWYgKGZpbmFsID09ICdzdWJtaXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0X3VzZXIoKTtcclxuICAgICAgICAgICAgICB9ICovXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJtaXRfdXNlcigpIHtcclxuICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcclxuICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfdXNlclxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmZybV91c2VyLmlkID4gMCkge1xyXG4gICAgICAgIHRoaXMuZnJtX3VzZXIucHV0KCdhcGkvdXNlci8nICsgdGhpcy5mcm1fdXNlci5pZClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjbG9hZGVyZC5oaWRlKClcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAvLyAgdGhpcy5mcm1fdXNlci5yZXNldCgpO1xyXG4gICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIC8vIHRoaXMuJHJvdXRlci5wdXNoKCcvdXNlcnMnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZnJtX3VzZXIucG9zdCgnYXBpL3VzZXInKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXHJcbiAgICAgICAgICAgIHRoaXMuZnJtX3VzZXIuaWQgPSBkYXRhLmRhdGEuZGF0YS5pZDtcclxuICAgICAgICAgICAgLy8gdGhpcy5mcm1fdXNlci5yZXNldCgpO1xyXG4gICAgICAgICAgICAvLyAgJCgnYVtocmVmPVwiI21lbnUxXCJdJykudGFiKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZnJtX3VzZXIuYWNjb3VudF9pbmZvID0gW11cclxuICAgICAgICAgICAgdGhpcy5hZGRJbmZvKClcclxuXHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLm1lc3NhZ2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuXHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgaWYgKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCkge1xyXG4gICAgICB0aGlzLnZpZXdfbW9kZSA9IHRydWVcclxuICAgICAgdGhpcy5mcm1fdXNlci5pZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcclxuICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcclxuICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfdXNlclxyXG4gICAgICB9KTtcclxuICAgICAgYXhpb3MuZ2V0KFwiYXBpL3VzZXIvXCIgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mcm1fdXNlci5maWxsKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xyXG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy91c2Vycy8nKS5jYXRjaCgoKSA9PiB7IH0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuc3RlcCA9IDFcclxuICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICB0aGlzLnZpZXdfbW9kZSA9IGZhbHNlXHJcbiAgICB0aGlzLmFkZEluZm8oKTtcclxuICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGFzeW5jIHN0ZXAobikge1xyXG4gICAgICAkKCdhW2hyZWY9XCIjbWVudScgKyBuICsgJ1wiXScpLnRhYignc2hvdycpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jICdmcm1fdXNlci5vcmdhbml6YXRpb24nKG4pIHtcclxuICAgICAgaWYgKG4gPT0gJ1VuaXRlZCBTY3JhcCBNZXRhbCcpIHtcclxuICAgICAgICBpZiAoIVsnQWRtaW4nLCAnRmluYW5jZSBUZWFtJywgJ1RyYW5zcG9ydGF0aW9uIFRlYW0nLCAnU2FsZXMgVGVhbScsICdDRUMnXS5pbmNsdWRlcyh0aGlzLmZybV91c2VyLnR5cGUpKSB7XHJcbiAgICAgICAgICB0aGlzLmZybV91c2VyLnR5cGUgPSAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIVsnUHJpbWFyeScsICdGaW5hbmNlJywgJ1RyYW5zcG9ydGF0aW9uJ10uaW5jbHVkZXModGhpcy5mcm1fdXNlci50eXBlKSkge1xyXG4gICAgICAgICAgdGhpcy5mcm1fdXNlci50eXBlID0gJydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3gtd2FybmluZ1wiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5hZGRyZXNzXzEsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV9xdW90ZXMuYWRkcmVzc18xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIE5hbWUgLi4uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fcXVvdGVzLmFkZHJlc3NfMSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcXVvdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZHJlc3NfMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQ29tcGFueSBOYW1lIFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMub3JnYW5pemF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBDb21wYW55IC4uLlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5vcmdhbml6YXRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3F1b3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5vcmdhbml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLm9yZ2FuaXphdGlvblwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiV29yayBFbWFpbCBcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fcXVvdGVzLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLmVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkfGVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZHxlbWFpbCdcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBFbWFpbCAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fcXVvdGVzLmVtYWlsIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZnJtX3F1b3RlcywgXCJlbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5lbWFpbFwiKVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLmVtYWlsXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQ29udGFjdCBOdW1iZXJcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fcXVvdGVzLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLnBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwicGhvbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBQaG9uZSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fcXVvdGVzLnBob25lIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZnJtX3F1b3RlcywgXCJwaG9uZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5waG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLnBob25lXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQWRkcmVzc1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLmFkZHJlc3NfMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJhZGRyZXNzXzFcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5hZGRyZXNzXzEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgQWRkcmVzcyAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImFkZHJlc3NfMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5hZGRyZXNzXzEgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3F1b3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzXzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5hZGRyZXNzXzFcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLmFkZHJlc3NfMVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQ2l0eVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5jaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJjaXR5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMuY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBDaXR5IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5jaXR5IH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZnJtX3F1b3RlcywgXCJjaXR5XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLmNpdHlcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLmNpdHlcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlN0YXRlXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5zdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcInN0YXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgU3RhdGUgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJzdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5zdGF0ZSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZybV9xdW90ZXMsIFwic3RhdGVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEuc3RhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLnN0YXRlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJaaXAgQ29kZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuemlwX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV9xdW90ZXMuemlwX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLnppcF9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJ6aXBfY29kZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fcXVvdGVzLnppcF9jb2RlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIFpJUCAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fcXVvdGVzLnppcF9jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV9xdW90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiemlwX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS56aXBfY29kZVwiKVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEuemlwX2NvZGVcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LWJsYWNrXCIgfSwgW1xuICAgICAgICBfdm0uX20oMiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZXNlY3Rpb25cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLXJlc3BvbnNpdmVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5mcm1fcXVvdGVzLm1hdGVyaWFsLCBmdW5jdGlvbiAoaXRlbSwgaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IFwidXBcIiArIGl4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl4ICsgMSkpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ubWF0ZXJpYWxfbm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ubWF0ZXJpYWxfbm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXRlcmlhbF9ub1wiICsgaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJtYXRlcmlhbCBub1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogaXRlbS5tYXRlcmlhbF9ubyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJtYXRlcmlhbF9ub1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5tYXRlcmlhbF9ub1wiICsgaXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm1TdGVwMS5tYXRlcmlhbF9ub1wiICsgaXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS53ZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ud2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwid2VpZ2h0XCIgKyBpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIndlaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogaXRlbS53ZWlnaHQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwid2VpZ2h0XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLndlaWdodFwiICsgaXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLndlaWdodFwiICsgaXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSg1KSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiR2V0IGEgUXVvdGVcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIGNhcmQtdGV4dFwiIH0sIFtfdm0uX3YoXCJVc2VyIFwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJTY3JhcCBJbmZvcm1hdGlvblwiKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiIH0sIGF0dHJzOiB7IHdpZHRoOiBcIjcwXCIgfSB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJTbCBOby5cIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1hdGVyaWFsXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIldlaWdodCAoTEIpIFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgd2lkdGg6IFwiMTAwXCIgfSB9LCBbX3ZtLl92KFwiQWN0aW9uXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCJFbnRlciBBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCIgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJBdHRhY2ggc2NyYXAgbWV0YWwgcGljdHVyZXMgKElmIEFueSlcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwgeyBhdHRyczogeyB0eXBlOiBcImZpbGVcIiB9IH0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3gtc3VjY2Vzc1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWZvb3RlclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMVwiLCBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJHZXQgUXVvdGVcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0NWRjZjFlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGhvc3RpbmdlclxcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTQ1ZGNmMWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTQ1ZGNmMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTQ1ZGNmMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0NWRjZjFlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE0NWRjZjFlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDVkY2YxZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=