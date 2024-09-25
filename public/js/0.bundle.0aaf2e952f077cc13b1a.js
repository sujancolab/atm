(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/AddEdit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/AddEdit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/AddEdit.vue?vue&type=template&id=57b1a6e9&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/AddEdit.vue?vue&type=template&id=57b1a6e9& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var render = function render() {
  var _class, _class2, _class3, _class4, _class5, _class6, _class7, _class8, _class9, _class10, _class11, _class12, _class13;

  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("section", {
    staticClass: "content-header"
  }, [_c("h1", [_vm._v(_vm._s(_vm.frm_user.id ? "Update" : "Add") + " User")])]), _vm._v(" "), _c("section", {
    staticClass: "content"
  }, [_c("div", {
    staticClass: "card box-warning"
  }, [_c("div", {
    ref: "ref_load_user",
    staticClass: "box-body vld-parent"
  }, [_c("div", {
    staticClass: "tabssection"
  }, [_c("ul", {
    staticClass: "nav nav-tabs",
    staticStyle: {
      "pointer-events": "none"
    }
  }, [_vm._m(0), _vm._v(" "), _vm.frm_user.organization != "United Scrap Metal" ? _c("li", [_c("a", {
    staticClass: "disabled",
    attrs: {
      "data-toggle": "tab",
      href: "#menu2"
    }
  }, [_vm._v("Account Information")])]) : _vm._e(), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c("div", {
    staticClass: "tab-content"
  }, [_c("div", {
    staticClass: "tab-pane fade in active",
    attrs: {
      id: "menu1"
    }
  }, [_c("form", {
    attrs: {
      "data-vv-scope": "frmStep1"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.next_step("frmStep1");
      }
    }
  }, [_c("div", {
    staticClass: "row",
    "class": {
      view_mode: _vm.view_mode
    }
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Organization")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.organization,
      expression: "frm_user.organization"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class = {
      error: _vm.errors.organization
    }, _defineProperty(_class, "error", _vm.verrors.has("organization")), _defineProperty(_class, "haveValue", _vm.frm_user.organization), _class),
    attrs: {
      "data-vv-name": "organization",
      "data-vv-scope": "frmStep1"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.frm_user, "organization", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "United Scrap Metal"
    }
  }, [_vm._v("United Scrap Metal")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Others"
    }
  }, [_vm._v("Others")])]), _vm._v(" "), _vm.verrors.has("frmStep1.organization") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.organization")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Full Name ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.name,
      expression: "frm_user.name"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class2 = {
      error: _vm.errors.name
    }, _defineProperty(_class2, "error", _vm.verrors.has("name")), _defineProperty(_class2, "haveValue", _vm.frm_user.name), _class2),
    attrs: {
      type: "text",
      placeholder: "Enter Full Name ...",
      "data-vv-name": "name",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.name") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.name")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Address 1")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.address_1,
      expression: "frm_user.address_1"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class3 = {
      error: _vm.errors.address_1
    }, _defineProperty(_class3, "error", _vm.verrors.has("address_1")), _defineProperty(_class3, "haveValue", _vm.frm_user.address_1), _class3),
    attrs: {
      type: "text",
      placeholder: "Enter Address 1 ...",
      "data-vv-name": "address_1",
      "data-vv-scope": "frmStep1",
      "data-vv-as": "Address 1"
    },
    domProps: {
      value: _vm.frm_user.address_1
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "address_1", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.address_1") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.address_1")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Address 2 ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.address_2,
      expression: "frm_user.address_2"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "",
      expression: "''"
    }],
    staticClass: "form-control",
    "class": (_class4 = {
      error: _vm.errors.address_2
    }, _defineProperty(_class4, "error", _vm.verrors.has("address_2")), _defineProperty(_class4, "haveValue", _vm.frm_user.address_2), _class4),
    attrs: {
      type: "text",
      placeholder: "Enter Address 2 ...",
      "data-vv-name": "address_2",
      "data-vv-scope": "frmStep1",
      "data-vv-as": "Address 2"
    },
    domProps: {
      value: _vm.frm_user.address_2
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "address_2", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.address_2") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.address_2")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Country")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    "class": (_class5 = {
      error: _vm.errors.country
    }, _defineProperty(_class5, "error", _vm.verrors.has("country")), _defineProperty(_class5, "haveValue", _vm.frm_user.country), _class5),
    attrs: {
      disabled: "",
      label: "name",
      reduce: function reduce(option) {
        return option.name;
      },
      options: _vm.countries,
      placeholder: "Enter Country ...",
      "data-vv-name": "country",
      "data-vv-scope": "frmStep1"
    },
    model: {
      value: _vm.frm_user.country,
      callback: function callback($$v) {
        _vm.$set(_vm.frm_user, "country", $$v);
      },
      expression: "frm_user.country"
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.country") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.country")))]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("State ")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    "class": (_class6 = {
      error: _vm.errors.state
    }, _defineProperty(_class6, "error", _vm.verrors.has("state")), _defineProperty(_class6, "haveValue", _vm.frm_user.state), _class6),
    attrs: {
      label: "name",
      reduce: function reduce(option) {
        return option.name;
      },
      options: _vm.states,
      placeholder: "Enter State ...",
      "data-vv-name": "state",
      "data-vv-scope": "frmStep1"
    },
    model: {
      value: _vm.frm_user.state,
      callback: function callback($$v) {
        _vm.$set(_vm.frm_user, "state", $$v);
      },
      expression: "frm_user.state"
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.state") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.state")))]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("City ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.city,
      expression: "frm_user.city"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class7 = {
      error: _vm.errors.city
    }, _defineProperty(_class7, "error", _vm.verrors.has("city")), _defineProperty(_class7, "haveValue", _vm.frm_user.city), _class7),
    attrs: {
      type: "text",
      placeholder: "Enter City ...",
      "data-vv-name": "city",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.city
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "city", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.city") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.city")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Zip ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.zip_code,
      expression: "frm_user.zip_code"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class8 = {
      error: _vm.errors.zip_code
    }, _defineProperty(_class8, "error", _vm.verrors.has("zip_code")), _defineProperty(_class8, "haveValue", _vm.frm_user.zip_code), _class8),
    attrs: {
      type: "text",
      placeholder: "Enter Zip ...",
      "data-vv-name": "zip_code",
      "data-vv-scope": "frmStep1",
      "data-vv-as": "zip code"
    },
    domProps: {
      value: _vm.frm_user.zip_code
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "zip_code", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.zip_code") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.zip_code")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Phone ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.phone,
      expression: "frm_user.phone"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class9 = {
      error: _vm.errors.phone
    }, _defineProperty(_class9, "error", _vm.verrors.has("phone")), _defineProperty(_class9, "haveValue", _vm.frm_user.phone), _class9),
    attrs: {
      type: "text",
      placeholder: "Enter Phone ...",
      "data-vv-name": "phone",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "phone", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.phone") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.phone")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Email ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.email,
      expression: "frm_user.email"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required|email",
      expression: "'required|email'"
    }],
    staticClass: "form-control",
    "class": (_class10 = {
      error: _vm.errors.email
    }, _defineProperty(_class10, "error", _vm.verrors.has("email")), _defineProperty(_class10, "haveValue", _vm.frm_user.email), _class10),
    attrs: {
      type: "text",
      placeholder: "Enter Email ...",
      "data-vv-name": "email",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.email") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.email")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Fax ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.fax,
      expression: "frm_user.fax"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "",
      expression: "''"
    }],
    staticClass: "form-control",
    "class": (_class11 = {
      error: _vm.errors.fax
    }, _defineProperty(_class11, "error", _vm.verrors.has("fax")), _defineProperty(_class11, "haveValue", _vm.frm_user.fax), _class11),
    attrs: {
      type: "text",
      placeholder: "Enter Fax ...",
      "data-vv-name": "fax",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.fax
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "fax", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.fax") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.fax")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("User Type ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.type,
      expression: "frm_user.type"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class12 = {
      error: _vm.errors.type
    }, _defineProperty(_class12, "error", _vm.verrors.has("type")), _defineProperty(_class12, "haveValue", _vm.frm_user.type), _class12),
    attrs: {
      "data-vv-name": "type",
      "data-vv-scope": "frmStep1"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.frm_user, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Choose user type")]), _vm._v(" "), _vm.frm_user.organization == "United Scrap Metal" ? [_c("option", {
    attrs: {
      value: "Admin"
    }
  }, [_vm._v("Admin")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Finance Team"
    }
  }, [_vm._v("Finance Team")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Transportation Team"
    }
  }, [_vm._v(" Transportation Team")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Sales Team "
    }
  }, [_vm._v("Sales Team ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "CEC"
    }
  }, [_vm._v("CEC ")])] : [_c("option", {
    attrs: {
      value: "Primary"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Finance"
    }
  }, [_vm._v("Finance")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Transportation"
    }
  }, [_vm._v("Transportation ")])]], 2), _vm._v(" "), _vm.verrors.has("frmStep1.type") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.type")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Status")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.status,
      expression: "frm_user.status"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class13 = {
      error: _vm.errors.type
    }, _defineProperty(_class13, "error", _vm.verrors.has("status")), _defineProperty(_class13, "haveValue", _vm.frm_user.status), _class13),
    attrs: {
      "data-vv-name": "status",
      "data-vv-scope": "frmStep1"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.frm_user, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "Active"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Deactive"
    }
  }, [_vm._v("Inactive")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Approve Pending"
    }
  }, [_vm._v("Approve Pending")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Declined"
    }
  }, [_vm._v("Declined")])]), _vm._v(" "), _vm.verrors.has("frmStep1.status") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.status")))]) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "box-footer"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_vm.frm_user.id && _vm.view_mode ? _c("div", {
    staticClass: "btn btn-warning btn-lg",
    on: {
      click: function click($event) {
        _vm.view_mode = !_vm.view_mode;
      }
    }
  }, [_vm._v("Edit")]) : _vm._e(), _vm._v(" "), !_vm.view_mode ? _c("button", {
    staticClass: "btn link1",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Next")]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade",
    attrs: {
      id: "menu2"
    }
  }, [_c("form", {
    attrs: {
      "data-vv-scope": "frmStep2"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.next_step("frmStep2");
      }
    }
  }, [_c("div", {
    staticClass: "tablesection"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-striped table-hover"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", _vm._l(_vm.frm_user.account_info, function (item, ix) {
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
        value: item.account_no,
        expression: "item.account_no"
      }, {
        name: "validate",
        rawName: "v-validate",
        value: "required",
        expression: "'required'"
      }],
      attrs: {
        type: "text",
        name: "account_no" + ix,
        "data-vv-scope": "frmStep2",
        "data-vv-as": "account no"
      },
      domProps: {
        value: item.account_no
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(item, "account_no", $event.target.value);
        }
      }
    }), _vm._v(" "), _vm.verrors.has("frmStep2.account_no" + ix) ? _c("p", {
      staticClass: "errormsg"
    }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep2.account_no" + ix)))]) : _vm._e()]), _vm._v(" "), _c("td", [ix > 0 ? _c("button", {
      staticClass: "btn btn-danger",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.frm_user.account_info.splice(ix, 1);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash-o",
      attrs: {
        "aria-hidden": "true"
      }
    })]) : _vm._e(), _vm._v(" "), _vm.frm_user.account_info.length == ix + 1 ? _c("button", {
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
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "box-footer"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn link2 mx-1",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.step--;
      }
    }
  }, [_vm._v("Back")]), _vm._v(" "), _c("button", {
    staticClass: "btn link1 mx-1",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Next")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade",
    attrs: {
      id: "menu3"
    }
  }, [_c("form", {
    attrs: {
      "data-vv-scope": "frmStep2"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit_user("submit");
      }
    }
  }, [_c("div", {
    staticClass: "box-header with-border bor"
  }, [_vm._m(3), _vm._v(" "), _vm.frm_user.id ? _c("div", {
    staticClass: "pull-right dropdown"
  }, [_c("router-link", {
    staticClass: "btn link2 widthauto",
    attrs: {
      to: "/user/add_permission/" + _vm.frm_user.id
    }
  }, [_c("span", [_c("i", {
    staticClass: "fa fa-pencil",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" Add Permission")]), _vm._v("    \r\n                    "), _vm._m(4)], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "box-footer"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn link2 mx-1",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.frm_user.organization != "United Scrap Metal" ? _vm.step-- : _vm.step = 1;
      }
    }
  }, [_vm._v("Back")]), _vm._v(" "), _c("button", {
    staticClass: "btn link1 mx-1",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Submit")])])])])])])])])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("li", {
    staticClass: "active"
  }, [_c("a", {
    staticClass: "disabled",
    attrs: {
      "data-toggle": "tab",
      href: "#menu1"
    }
  }, [_vm._v("User Information")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("li", [_c("a", {
    staticClass: "disabled",
    attrs: {
      "data-toggle": "tab",
      href: "#menu3"
    }
  }, [_vm._v("User Settings")])]);
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
  }, [_vm._v("Sl No.")]), _vm._v(" "), _c("th", [_vm._v("Account No")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "100"
    }
  }, [_vm._v("Action")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "pull-left"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("Permissions Granted")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("button", {
    staticClass: "btn link1 widthauto",
    attrs: {
      type: "button",
      "data-toggle": "dropdown"
    }
  }, [_c("i", {
    staticClass: "fa fa-cog",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
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
  }, [_vm._v("Sl No.")]), _vm._v(" "), _c("th", [_c("input", {
    attrs: {
      type: "checkbox"
    }
  })]), _vm._v(" "), _c("th", [_vm._v("Permission Name")]), _vm._v(" "), _c("th", [_vm._v("Permission Deseripton")]), _vm._v(" "), _c("th", [_vm._v("Action")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("01")]), _vm._v(" "), _c("td", [_c("input", {
    attrs: {
      type: "checkbox"
    }
  })]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("02")]), _vm._v(" "), _c("td", [_c("input", {
    attrs: {
      type: "checkbox"
    }
  })]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("03")]), _vm._v(" "), _c("td", [_c("input", {
    attrs: {
      type: "checkbox"
    }
  })]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")])])]), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    attrs: {
      align: "center",
      colspan: "5"
    }
  }, [_vm._v("No Permissions Granted")])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/users/AddEdit.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/users/AddEdit.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddEdit_vue_vue_type_template_id_57b1a6e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddEdit.vue?vue&type=template&id=57b1a6e9& */ "./resources/js/components/users/AddEdit.vue?vue&type=template&id=57b1a6e9&");
/* harmony import */ var _AddEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/users/AddEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddEdit_vue_vue_type_template_id_57b1a6e9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddEdit_vue_vue_type_template_id_57b1a6e9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/AddEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/AddEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/users/AddEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/AddEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/AddEdit.vue?vue&type=template&id=57b1a6e9&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/users/AddEdit.vue?vue&type=template&id=57b1a6e9& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_template_id_57b1a6e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEdit.vue?vue&type=template&id=57b1a6e9& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/AddEdit.vue?vue&type=template&id=57b1a6e9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_template_id_57b1a6e9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_template_id_57b1a6e9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvQWRkRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvQWRkRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvQWRkRWRpdC52dWU/NDkyYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9BZGRFZGl0LnZ1ZT83MzA1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL0FkZEVkaXQudnVlP2I5Y2YiXSwibmFtZXMiOlsibmFtZSIsImRhdGEiLCJ2aWV3X21vZGUiLCJjb3VudHJpZXMiLCJzdGF0ZXMiLCJjaXRpZXMiLCJlZGl0bW9kZSIsInN0ZXAiLCJ1c2VycyIsImZybV91c2VyIiwiaWQiLCJvcmdhbml6YXRpb24iLCJhZGRyZXNzXzEiLCJhZGRyZXNzXzIiLCJjaXR5Iiwic3RhdGUiLCJ6aXBfY29kZSIsImNvdW50cnkiLCJwaG9uZSIsImVtYWlsIiwiZmF4IiwidHlwZSIsInN0YXR1cyIsImFjY291bnRfaW5mbyIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsImJlZm9yZUNyZWF0ZSIsImF4aW9zIiwidGhlbiIsIm1ldGhvZHMiLCJhZGRJbmZvIiwiYWNjb3VudF9ubyIsIm5leHRfc3RlcCIsImZpbmFsIiwic3VibWl0X3VzZXIiLCJjb250YWluZXIiLCJjbG9hZGVyZCIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwibW91bnRlZCIsImNyZWF0ZWQiLCJ3YXRjaCIsIm4iLCIkIiwiaW1tZWRpYXRlIiwiaGFuZGxlciIsInBhcmFtcyIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl92IiwiX3MiLCJyZWYiLCJzdGF0aWNTdHlsZSIsIl9tIiwiYXR0cnMiLCJocmVmIiwiX2UiLCJvbiIsInN1Ym1pdCIsIiRldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGlyZWN0aXZlcyIsInJhd05hbWUiLCJ2YWx1ZSIsImV4cHJlc3Npb24iLCJlcnJvciIsImVycm9ycyIsInZlcnJvcnMiLCJoYXMiLCJjaGFuZ2UiLCIkJHNlbGVjdGVkVmFsIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmaWx0ZXIiLCJjYWxsIiwidGFyZ2V0Iiwib3B0aW9ucyIsIm8iLCJzZWxlY3RlZCIsIm1hcCIsInZhbCIsIl92YWx1ZSIsIiRzZXQiLCJtdWx0aXBsZSIsImZpcnN0IiwicGxhY2Vob2xkZXIiLCJkb21Qcm9wcyIsImlucHV0IiwiY29tcG9zaW5nIiwiZGlzYWJsZWQiLCJsYWJlbCIsInJlZHVjZSIsIm9wdGlvbiIsIm1vZGVsIiwiY2FsbGJhY2siLCIkJHYiLCJjbGljayIsIl9sIiwiaXRlbSIsIml4Iiwia2V5IiwiYWxpZ24iLCJzcGxpY2UiLCJsZW5ndGgiLCJ0byIsInN0YXRpY1JlbmRlckZucyIsIndpZHRoIiwiY29sc3BhbiIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OytDQXNRQSxvSjs7Ozs7Ozs7Ozs7O0FBQUE7QUFHZTtFQUNmQSxtQkFEQTtFQUVBQyxJQUZBLGtCQUVBO0lBQ0E7TUFDQUMsZ0JBREE7TUFFQUMsYUFGQTtNQUdBQyxVQUhBO01BSUFDLFVBSkE7TUFLQUMsZUFMQTtNQU1BQyxPQU5BO01BT0FDLFNBUEE7TUFRQUM7UUFDQUMsTUFEQTtRQUVBQyxnQkFGQTtRQUdBWCxRQUhBO1FBSUFZLGFBSkE7UUFLQUMsYUFMQTtRQU1BQyxRQU5BO1FBT0FDLFNBUEE7UUFRQUMsWUFSQTtRQVNBQyx3QkFUQTtRQVVBQyxTQVZBO1FBV0FDLFNBWEE7UUFZQUMsT0FaQTtRQWFBQyxRQWJBO1FBY0FDLHlCQWRBO1FBZUFDO01BZkE7SUFSQTtFQTBCQSxDQTdCQTtFQThCQUMsNEJBQ0FDLG1FQURBLENBOUJBO0VBaUNBQyxZQWpDQSwwQkFpQ0E7SUFBQTs7SUFDQUMsOEJBQ0FDLElBREEs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Q0FBQyxPQUFELEVBQVUsQ0FDVkEsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUNQQSxFQUFFLENBQUMsSUFBRCxFQUFPO0lBQUVRLEtBQUssRUFBRTtNQUFFK0MsS0FBSyxFQUFFLFFBQVQ7TUFBbUJNLE9BQU8sRUFBRTtJQUE1QjtFQUFULENBQVAsRUFBcUQsQ0FDckQ5RCxHQUFHLENBQUNJLEVBQUosQ0FBTyx3QkFBUCxDQURxRCxDQUFyRCxDQURLLENBQVAsQ0FEUSxDQUFWLENBNUQ0RCxDQUE5RCxDQUQyQyxDQUE3QyxDQUQ4QyxDQUF6QyxDQUFUO0FBd0VELENBOUltQixDQUF0QjtBQWdKQUwsTUFBTSxDQUFDZ0UsYUFBUCxHQUF1QixJQUF2Qjs7Ozs7Ozs7Ozs7OztBQzdpREE7QUFBQTtBQUFBO0FBQUE7QUFBc0Y7QUFDM0I7QUFDTDs7O0FBR3REO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxrRkFBTTtBQUNSLEVBQUUsMkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTZMLENBQWdCLG1QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8wLmJ1bmRsZS4wYWFmMmU5NTJmMDc3Y2MxM2IxYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgIDxoMT57e2ZybV91c2VyLmlkPydVcGRhdGUnOidBZGQnfX0gVXNlcjwvaDE+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LXdhcm5pbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHkgdmxkLXBhcmVudFwiIHJlZj1cInJlZl9sb2FkX3VzZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJzc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiBzdHlsZT1cInBvaW50ZXItZXZlbnRzOiBub25lO1wiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPjxhIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNtZW51MVwiIGNsYXNzPVwiZGlzYWJsZWRcIj5Vc2VyIEluZm9ybWF0aW9uPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHYtaWY9XCJmcm1fdXNlci5vcmdhbml6YXRpb24hPSdVbml0ZWQgU2NyYXAgTWV0YWwnXCI+PGEgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI21lbnUyXCIgY2xhc3M9XCJkaXNhYmxlZFwiPkFjY291bnQgSW5mb3JtYXRpb248L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI21lbnUzXCIgY2xhc3M9XCJkaXNhYmxlZFwiID5Vc2VyIFNldHRpbmdzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW51MVwiIGNsYXNzPVwidGFiLXBhbmUgZmFkZSBpbiBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtICBAc3VibWl0LnByZXZlbnQ9XCJuZXh0X3N0ZXAoJ2ZybVN0ZXAxJylcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA6Y2xhc3M9XCJ7J3ZpZXdfbW9kZSc6dmlld19tb2RlfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPk9yZ2FuaXphdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImZybV91c2VyLm9yZ2FuaXphdGlvblwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLm9yZ2FuaXphdGlvbiwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ29yZ2FuaXphdGlvbicpLCdoYXZlVmFsdWUnOiBmcm1fdXNlci5vcmdhbml6YXRpb24gfVwiIGRhdGEtdnYtbmFtZT1cIm9yZ2FuaXphdGlvblwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVW5pdGVkIFNjcmFwIE1ldGFsXCI+VW5pdGVkIFNjcmFwIE1ldGFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPdGhlcnNcIj5PdGhlcnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5vcmdhbml6YXRpb24nKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEub3JnYW5pemF0aW9uJykgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPkZ1bGwgTmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEZ1bGwgTmFtZSAuLi5cIiB2LW1vZGVsPVwiZnJtX3VzZXIubmFtZVwiICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5uYW1lLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnbmFtZScpLCdoYXZlVmFsdWUnOiBmcm1fdXNlci5uYW1lIH1cIiBkYXRhLXZ2LW5hbWU9XCJuYW1lXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLm5hbWUnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4gIHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLm5hbWUnKSB9fTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5BZGRyZXNzIDE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFkZHJlc3MgMSAuLi5cIiB2LW1vZGVsPVwiZnJtX3VzZXIuYWRkcmVzc18xXCIgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLmFkZHJlc3NfMSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ2FkZHJlc3NfMScpLCdoYXZlVmFsdWUnOiBmcm1fdXNlci5hZGRyZXNzXzEgfVwiIGRhdGEtdnYtbmFtZT1cImFkZHJlc3NfMVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiIGRhdGEtdnYtYXM9XCJBZGRyZXNzIDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEuYWRkcmVzc18xJylcIiBjbGFzcz1cImVycm9ybXNnXCI+ICB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5hZGRyZXNzXzEnKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzIDIgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQWRkcmVzcyAyIC4uLlwiIHYtbW9kZWw9XCJmcm1fdXNlci5hZGRyZXNzXzJcIiAgdi12YWxpZGF0ZT1cIicnXCIgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLmFkZHJlc3NfMiwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ2FkZHJlc3NfMicpLCdoYXZlVmFsdWUnOiBmcm1fdXNlci5hZGRyZXNzXzIgfVwiIGRhdGEtdnYtbmFtZT1cImFkZHJlc3NfMlwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiIGRhdGEtdnYtYXM9XCJBZGRyZXNzIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEuYWRkcmVzc18yJylcIiBjbGFzcz1cImVycm9ybXNnXCI+ICB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5hZGRyZXNzXzInKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPkNvdW50cnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGRpc2FibGVkIGxhYmVsPVwibmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24ubmFtZVwiICA6b3B0aW9ucz1cImNvdW50cmllc1wiIGNsYXNzPVwiXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDb3VudHJ5IC4uLlwiIHYtbW9kZWw9XCJmcm1fdXNlci5jb3VudHJ5XCIgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLmNvdW50cnksICdlcnJvcic6IHZlcnJvcnMuaGFzKCdjb3VudHJ5JyksJ2hhdmVWYWx1ZSc6IGZybV91c2VyLmNvdW50cnkgfVwiIGRhdGEtdnYtbmFtZT1cImNvdW50cnlcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj48L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5jb3VudHJ5JylcIiBjbGFzcz1cImVycm9ybXNnXCI+ICB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5jb3VudHJ5JykgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5TdGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLm5hbWVcIiAgOm9wdGlvbnM9XCJzdGF0ZXNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFN0YXRlIC4uLlwiIHYtbW9kZWw9XCJmcm1fdXNlci5zdGF0ZVwiICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5zdGF0ZSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3N0YXRlJyksJ2hhdmVWYWx1ZSc6IGZybV91c2VyLnN0YXRlIH1cIiBkYXRhLXZ2LW5hbWU9XCJzdGF0ZVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLnN0YXRlJylcIiBjbGFzcz1cImVycm9ybXNnXCI+ICB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5zdGF0ZScpIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPkNpdHkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2l0eSAuLi5cIiB2LW1vZGVsPVwiZnJtX3VzZXIuY2l0eVwiICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5jaXR5LCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnY2l0eScpLCdoYXZlVmFsdWUnOiBmcm1fdXNlci5jaXR5IH1cIiBkYXRhLXZ2LW5hbWU9XCJjaXR5XCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLmNpdHknKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4gIHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLmNpdHknKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+WmlwIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBaaXAgLi4uXCIgdi1tb2RlbD1cImZybV91c2VyLnppcF9jb2RlXCIgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLnppcF9jb2RlLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnemlwX2NvZGUnKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIuemlwX2NvZGUgfVwiIGRhdGEtdnYtbmFtZT1cInppcF9jb2RlXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCIgZGF0YS12di1hcz1cInppcCBjb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLnppcF9jb2RlJylcIiBjbGFzcz1cImVycm9ybXNnXCI+ICB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS56aXBfY29kZScpIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPlBob25lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBQaG9uZSAuLi5cIiB2LW1vZGVsPVwiZnJtX3VzZXIucGhvbmVcIiAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMucGhvbmUsICdlcnJvcic6IHZlcnJvcnMuaGFzKCdwaG9uZScpLCdoYXZlVmFsdWUnOiBmcm1fdXNlci5waG9uZSB9XCIgZGF0YS12di1uYW1lPVwicGhvbmVcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEucGhvbmUnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4gIHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLnBob25lJykgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPkVtYWlsIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWwgLi4uXCIgdi1tb2RlbD1cImZybV91c2VyLmVtYWlsXCIgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWR8ZW1haWwnXCIgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLmVtYWlsLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnZW1haWwnKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIuZW1haWwgfVwiIGRhdGEtdnYtbmFtZT1cImVtYWlsXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLmVtYWlsJylcIiBjbGFzcz1cImVycm9ybXNnXCI+ICB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5lbWFpbCcpIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RmF4IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEZheCAuLi5cIiB2LW1vZGVsPVwiZnJtX3VzZXIuZmF4XCIgIHYtdmFsaWRhdGU9XCInJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5mYXgsICdlcnJvcic6IHZlcnJvcnMuaGFzKCdmYXgnKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIuZmF4IH1cIiBkYXRhLXZ2LW5hbWU9XCJmYXhcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEuZmF4JylcIiBjbGFzcz1cImVycm9ybXNnXCI+ICB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5mYXgnKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+VXNlciBUeXBlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImZybV91c2VyLnR5cGVcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy50eXBlLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygndHlwZScpLCdoYXZlVmFsdWUnOiBmcm1fdXNlci50eXBlIH1cIiBkYXRhLXZ2LW5hbWU9XCJ0eXBlXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Q2hvb3NlIHVzZXIgdHlwZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmcm1fdXNlci5vcmdhbml6YXRpb249PSdVbml0ZWQgU2NyYXAgTWV0YWwnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBZG1pblwiPkFkbWluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGaW5hbmNlIFRlYW1cIj5GaW5hbmNlIFRlYW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRyYW5zcG9ydGF0aW9uIFRlYW1cIj4gVHJhbnNwb3J0YXRpb24gVGVhbTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2FsZXMgVGVhbSBcIj5TYWxlcyBUZWFtIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0VDXCI+Q0VDIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUHJpbWFyeVwiPlByaW1hcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZpbmFuY2VcIj5GaW5hbmNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUcmFuc3BvcnRhdGlvblwiPlRyYW5zcG9ydGF0aW9uIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS50eXBlJylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLnR5cGUnKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPlN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImZybV91c2VyLnN0YXR1c1wiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLnR5cGUsICdlcnJvcic6IHZlcnJvcnMuaGFzKCdzdGF0dXMnKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIuc3RhdHVzIH1cIiBkYXRhLXZ2LW5hbWU9XCJzdGF0dXNcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFjdGl2ZVwiPkFjdGl2ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGVhY3RpdmVcIj5JbmFjdGl2ZTwvb3B0aW9uPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFwcHJvdmUgUGVuZGluZ1wiPkFwcHJvdmUgUGVuZGluZzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGVjbGluZWRcIj5EZWNsaW5lZDwvb3B0aW9uPiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEuc3RhdHVzJylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLnN0YXR1cycpIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0biBidG4td2FybmluZyBidG4tbGdcIiB2LWlmPVwiZnJtX3VzZXIuaWQgJiYgdmlld19tb2RlXCIgQGNsaWNrPVwidmlld19tb2RlPSF2aWV3X21vZGVcIj5FZGl0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gbGluazFcIiB2LWlmPVwiIXZpZXdfbW9kZVwiPk5leHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibWVudTJcIiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtICBAc3VibWl0LnByZXZlbnQ9XCJuZXh0X3N0ZXAoJ2ZybVN0ZXAyJylcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCIgd2lkdGg9XCI3MFwiPlNsIE5vLjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjY291bnQgTm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjEwMFwiPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIoaXRlbSxpeCkgaW4gZnJtX3VzZXIuYWNjb3VudF9pbmZvXCIgOmtleT1cIid1cCcraXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj57e2l4KzF9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB2LW1vZGVsPVwiaXRlbS5hY2NvdW50X25vXCIgdHlwZT1cInRleHRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIDpuYW1lPVwiJ2FjY291bnRfbm8nK2l4XCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAyXCIgIGRhdGEtdnYtYXM9XCJhY2NvdW50IG5vXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDIuYWNjb3VudF9ubycraXgpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMi5hY2NvdW50X25vJytpeCkgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgdi1pZj1cIml4PjBcIiBAY2xpY2s9XCJmcm1fdXNlci5hY2NvdW50X2luZm8uc3BsaWNlKGl4LCAxKVwiPjxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB2LWlmPVwiZnJtX3VzZXIuYWNjb3VudF9pbmZvLmxlbmd0aD09aXgrMVwiIEBjbGljaz1cImFkZEluZm8oKVwiPjxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBsaW5rMiBteC0xXCIgQGNsaWNrPVwic3RlcC0tXCI+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGxpbmsxIG14LTFcIj5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1lbnUzXCIgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSAgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0X3VzZXIoJ3N1Ym1pdCcpXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlciBib3JcIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGUgY2FyZC10ZXh0XCI+UGVybWlzc2lvbnMgR3JhbnRlZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodCBkcm9wZG93blwiIHYtaWY9XCJmcm1fdXNlci5pZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiJy91c2VyL2FkZF9wZXJtaXNzaW9uLycrZnJtX3VzZXIuaWRcIiBjbGFzcz1cImJ0biBsaW5rMiB3aWR0aGF1dG9cIj4gPHNwYW4+PGkgY2xhc3M9XCJmYSBmYS1wZW5jaWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDwvc3Bhbj4gQWRkIFBlcm1pc3Npb248L3JvdXRlci1saW5rPiAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBsaW5rMSB3aWR0aGF1dG9cIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPjxpIGNsYXNzPVwiZmEgZmEtY29nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVzZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIiB3aWR0aD1cIjcwXCI+U2wgTm8uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBlcm1pc3Npb24gTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGVybWlzc2lvbiBEZXNlcmlwdG9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj4wMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj4wMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj4wMzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRmb290PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIGNvbHNwYW49XCI1XCI+Tm8gUGVybWlzc2lvbnMgR3JhbnRlZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gbGluazIgbXgtMVwiIEBjbGljaz1cImZybV91c2VyLm9yZ2FuaXphdGlvbiE9J1VuaXRlZCBTY3JhcCBNZXRhbCcgPyBzdGVwLS0gOiBzdGVwPTFcIj5CYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBsaW5rMSBteC0xXCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtcclxuICAgIG1hcEdldHRlcnNcclxufSBmcm9tIFwidnVleFwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIlVzZXJBZGRFZGl0XCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2aWV3X21vZGU6ZmFsc2UsXHJcbiAgICAgICAgICBjb3VudHJpZXM6W10sXHJcbiAgICAgICAgICBzdGF0ZXM6W10sXHJcbiAgICAgICAgICBjaXRpZXM6W10sXHJcbiAgICAgICAgICBlZGl0bW9kZTogZmFsc2UsXHJcbiAgICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgICAgdXNlcnM6IHt9LFxyXG4gICAgICAgICAgZnJtX3VzZXI6IG5ldyBGb3JtKHtcclxuICAgICAgICAgICAgICBpZDogJycsXHJcbiAgICAgICAgICAgICAgb3JnYW5pemF0aW9uOiAnJyxcclxuICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICBhZGRyZXNzXzE6ICcnLFxyXG4gICAgICAgICAgICAgIGFkZHJlc3NfMjogJycsXHJcbiAgICAgICAgICAgICAgY2l0eTogJycsXHJcbiAgICAgICAgICAgICAgc3RhdGU6ICcnLFxyXG4gICAgICAgICAgICAgIHppcF9jb2RlOiAnJyxcclxuICAgICAgICAgICAgICBjb3VudHJ5OiAndW5pdGVkIHN0YXRlcycsXHJcbiAgICAgICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICBmYXg6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgICAgICAgIHN0YXR1czonQXBwcm92ZSBQZW5kaW5nJyxcclxuICAgICAgICAgICAgICBhY2NvdW50X2luZm86IFtdXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIC4uLm1hcEdldHRlcnMoW1wiZXJyb3JzXCJdKVxyXG4gICAgfSxcclxuICAgIGJlZm9yZUNyZWF0ZSgpeyBcclxuICAgICAgYXhpb3MuZ2V0KFwiYXBpL2dldENvdW50cmllc1wiIClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudHJpZXM9cmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICB9KSAgICAgICAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGFzeW5jIGFkZEluZm8oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJtX3VzZXIuYWNjb3VudF9pbmZvLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgYWNjb3VudF9ubzogJycsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBuZXh0X3N0ZXAoZmluYWwgPSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoJ2ZybVN0ZXAnICsgdGhpcy5zdGVwKS50aGVuKGFzeW5jICh2YWxpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdF91c2VyKCk7XHJcbiAgICAgICAgICAgICAgICAvKiAgICAgdGhpcy5zdGVwKytcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmluYWwgPT0gJ3N1Ym1pdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRfdXNlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCBcclxuXHJcbiAgICAgICAgc3VibWl0X3VzZXIoKSB7XHJcbiAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfdXNlclxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZybV91c2VyLmlkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm1fdXNlci5wdXQoJ2FwaS91c2VyLycgKyB0aGlzLmZybV91c2VyLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZybV91c2VyLm9yZ2FuaXphdGlvbj09J1VuaXRlZCBTY3JhcCBNZXRhbCcgJiYgdGhpcy5zdGVwPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIHRoaXMuZnJtX3VzZXIucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kcm91dGVyLnB1c2goJy91c2VycycpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZybV91c2VyLnBvc3QoJ2FwaS91c2VyJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm1fdXNlci5pZD0gZGF0YS5kYXRhLmRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5mcm1fdXNlci5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICQoJ2FbaHJlZj1cIiNtZW51MVwiXScpLnRhYignc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZybV91c2VyLmFjY291bnRfaW5mbyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkSW5mbygpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZybV91c2VyLm9yZ2FuaXphdGlvbj09J1VuaXRlZCBTY3JhcCBNZXRhbCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy4kcm91dGUucGFyYW1zLmlkKSB7XHJcbiAgICAgICAgICB0aGlzLnZpZXdfbW9kZT10cnVlXHJcbiAgICAgICAgICAgIHRoaXMuZnJtX3VzZXIuaWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfdXNlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL3VzZXIvXCIgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm1fdXNlci5maWxsKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvdXNlcnMvJykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGVwPTFcclxuICAgICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMudmlld19tb2RlPWZhbHNlXHJcbiAgICAgICAgdGhpcy5hZGRJbmZvKCk7XHJcbiAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICBhc3luYyBzdGVwKG4pIHtcclxuICAgICAgICAgICAgJCgnYVtocmVmPVwiI21lbnUnICsgbiArICdcIl0nKS50YWIoJ3Nob3cnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jICdmcm1fdXNlci5vcmdhbml6YXRpb24nKG4pIHtcclxuICAgICAgICAgICAgaWYgKG4gPT0gJ1VuaXRlZCBTY3JhcCBNZXRhbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghWydBZG1pbicsICdGaW5hbmNlIFRlYW0nLCAnVHJhbnNwb3J0YXRpb24gVGVhbScsICdTYWxlcyBUZWFtJywgJ0NFQyddLmluY2x1ZGVzKHRoaXMuZnJtX3VzZXIudHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZybV91c2VyLnR5cGUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFbJ1ByaW1hcnknLCAnRmluYW5jZScsICdUcmFuc3BvcnRhdGlvbiddLmluY2x1ZGVzKHRoaXMuZnJtX3VzZXIudHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZybV91c2VyLnR5cGUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZnJtX3VzZXIuY291bnRyeSc6e1xyXG4gICAgICAgICAgaW1tZWRpYXRlOiB0cnVlLFxyXG4gICAgICAgICAgaGFuZGxlcihuKSB7XHJcbiAgICAgICAgICAgIGlmKG4pe1xyXG4gICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvZ2V0U3RhdGVzXCIse1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczp7J2NvdW50cnknOm59XHJcbiAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVzPXJlcy5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IFxyXG4gICAgICB9LCBcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihfdm0uX3MoX3ZtLmZybV91c2VyLmlkID8gXCJVcGRhdGVcIiA6IFwiQWRkXCIpICsgXCIgVXNlclwiKV0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3gtd2FybmluZ1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHJlZjogXCJyZWZfbG9hZF91c2VyXCIsIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5IHZsZC1wYXJlbnRcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFic3NlY3Rpb25cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYgbmF2LXRhYnNcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwicG9pbnRlci1ldmVudHNcIjogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIub3JnYW5pemF0aW9uICE9IFwiVW5pdGVkIFNjcmFwIE1ldGFsXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpc2FibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLCBocmVmOiBcIiNtZW51MlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBY2NvdW50IEluZm9ybWF0aW9uXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFiLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlIGluIGFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJtZW51MVwiIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubmV4dF9zdGVwKFwiZnJtU3RlcDFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IHZpZXdfbW9kZTogX3ZtLnZpZXdfbW9kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJPcmdhbml6YXRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIub3JnYW5pemF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fdXNlci5vcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLm9yZ2FuaXphdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwib3JnYW5pemF0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLm9yZ2FuaXphdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcIm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG8uX3ZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJVbml0ZWQgU2NyYXAgTWV0YWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVW5pdGVkIFNjcmFwIE1ldGFsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiT3RoZXJzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJPdGhlcnNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLm9yZ2FuaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJtU3RlcDEub3JnYW5pemF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRnVsbCBOYW1lIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV91c2VyLm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIEZ1bGwgTmFtZSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fdXNlci5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEubmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS5uYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQWRkcmVzcyAxXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fdXNlci5hZGRyZXNzXzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fdXNlci5hZGRyZXNzXzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiYWRkcmVzc18xXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci5hZGRyZXNzXzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIEFkZHJlc3MgMSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJhZGRyZXNzXzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiQWRkcmVzcyAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fdXNlci5hZGRyZXNzXzEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkcmVzc18xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLmFkZHJlc3NfMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZybVN0ZXAxLmFkZHJlc3NfMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkFkZHJlc3MgMiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIuYWRkcmVzc18yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3VzZXIuYWRkcmVzc18yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCInJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuYWRkcmVzc18yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiYWRkcmVzc18yXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci5hZGRyZXNzXzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIEFkZHJlc3MgMiAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJhZGRyZXNzXzJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiQWRkcmVzcyAyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fdXNlci5hZGRyZXNzXzIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkcmVzc18yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLmFkZHJlc3NfMlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZybVN0ZXAxLmFkZHJlc3NfMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ291bnRyeVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5jb3VudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJjb3VudHJ5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLmNvdW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogKG9wdGlvbikgPT4gb3B0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmNvdW50cmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBDb3VudHJ5IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiY291bnRyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fdXNlci5jb3VudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZnJtX3VzZXIsIFwiY291bnRyeVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV91c2VyLmNvdW50cnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLmNvdW50cnlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm1TdGVwMS5jb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTdGF0ZSBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcInN0YXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IChvcHRpb24pID0+IG9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zdGF0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgU3RhdGUgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJzdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fdXNlci5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZybV91c2VyLCBcInN0YXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3VzZXIuc3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLnN0YXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJtU3RlcDEuc3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDaXR5IFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIuY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV91c2VyLmNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcImNpdHlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIENpdHkgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3VzZXIuY2l0eSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLmNpdHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEuY2l0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlppcCBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV91c2VyLnppcF9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3VzZXIuemlwX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuemlwX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJ6aXBfY29kZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3VzZXIuemlwX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIFppcCAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJ6aXBfY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJ6aXAgY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3VzZXIuemlwX2NvZGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiemlwX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEuemlwX2NvZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm1TdGVwMS56aXBfY29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlBob25lIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fdXNlci5waG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcInBob25lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgUGhvbmUgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwicGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV91c2VyLnBob25lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLnBob25lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJtU3RlcDEucGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJFbWFpbCBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV91c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3VzZXIuZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZHxlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkfGVtYWlsJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJlbWFpbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3VzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIEVtYWlsIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fdXNlci5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5lbWFpbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZybVN0ZXAxLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRmF4IFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fdXNlci5mYXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fdXNlci5mYXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIicnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5mYXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJmYXhcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLmZheCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgRmF4IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImZheFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3VzZXIuZmF4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZheFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5mYXhcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEuZmF4XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVXNlciBUeXBlIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fdXNlci50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fdXNlci50eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJ0eXBlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gby5fdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDaG9vc2UgdXNlciB0eXBlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLm9yZ2FuaXphdGlvbiA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuaXRlZCBTY3JhcCBNZXRhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJBZG1pblwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWRtaW5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiRmluYW5jZSBUZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkZpbmFuY2UgVGVhbVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJUcmFuc3BvcnRhdGlvbiBUZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBUcmFuc3BvcnRhdGlvbiBUZWFtXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBcIlNhbGVzIFRlYW0gXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYWxlcyBUZWFtIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIkNFQ1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ0VDIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIlByaW1hcnlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlByaW1hcnlcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJGaW5hbmNlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJGaW5hbmNlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlRyYW5zcG9ydGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlRyYW5zcG9ydGF0aW9uIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS50eXBlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEudHlwZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlN0YXR1c1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fdXNlci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV91c2VyLnN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwic3RhdHVzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG8uX3ZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIkFjdGl2ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWN0aXZlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiRGVhY3RpdmVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkluYWN0aXZlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiQXBwcm92ZSBQZW5kaW5nXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBcHByb3ZlIFBlbmRpbmdcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJEZWNsaW5lZFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRGVjbGluZWRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLnN0YXR1c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJtU3RlcDEuc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLmlkICYmIF92bS52aWV3X21vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXdhcm5pbmcgYnRuLWxnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52aWV3X21vZGUgPSAhX3ZtLnZpZXdfbW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFZGl0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS52aWV3X21vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gbGluazFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJOZXh0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsIGF0dHJzOiB7IGlkOiBcIm1lbnUyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubmV4dF9zdGVwKFwiZnJtU3RlcDJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlc2VjdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIuYWNjb3VudF9pbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0sIGl4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBcInVwXCIgKyBpeCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl4ICsgMSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5hY2NvdW50X25vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmFjY291bnRfbm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhY2NvdW50X25vXCIgKyBpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcImFjY291bnQgbm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5hY2NvdW50X25vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWNjb3VudF9ub1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm1TdGVwMi5hY2NvdW50X25vXCIgKyBpeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm1TdGVwMi5hY2NvdW50X25vXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZnJtX3VzZXIuYWNjb3VudF9pbmZvLnNwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmEgZmEtdHJhc2gtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIuYWNjb3VudF9pbmZvLmxlbmd0aCA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkSW5mbygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWZvb3RlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMiBteC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0ZXAtLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkJhY2tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsxIG14LTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJOZXh0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIiwgYXR0cnM6IHsgaWQ6IFwibWVudTNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXRfdXNlcihcInN1Ym1pdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXIgYm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlci5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1yaWdodCBkcm9wZG93blwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMiB3aWR0aGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3VzZXIvYWRkX3Blcm1pc3Npb24vXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1wZW5jaWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEFkZCBQZXJtaXNzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiICDCoMKgXFxyXFxuICAgICAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oNCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsyIG14LTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlci5vcmdhbml6YXRpb24gIT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbml0ZWQgU2NyYXAgTWV0YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnN0ZXAtLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKF92bS5zdGVwID0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkJhY2tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsxIG14LTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTdWJtaXRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcImFjdGl2ZVwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpc2FibGVkXCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLCBocmVmOiBcIiNtZW51MVwiIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJVc2VyIEluZm9ybWF0aW9uXCIpXVxuICAgICAgKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpc2FibGVkXCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLCBocmVmOiBcIiNtZW51M1wiIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJVc2VyIFNldHRpbmdzXCIpXVxuICAgICAgKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIiB9LCBhdHRyczogeyB3aWR0aDogXCI3MFwiIH0gfSxcbiAgICAgICAgICBbX3ZtLl92KFwiU2wgTm8uXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJBY2NvdW50IE5vXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyB3aWR0aDogXCIxMDBcIiB9IH0sIFtfdm0uX3YoXCJBY3Rpb25cIildKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlBlcm1pc3Npb25zIEdyYW50ZWRcIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMSB3aWR0aGF1dG9cIixcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgXCJkYXRhLXRvZ2dsZVwiOiBcImRyb3Bkb3duXCIgfSxcbiAgICAgIH0sXG4gICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY29nXCIsIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9KV1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVzZWN0aW9uXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIgfSwgW1xuICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiIH0sIFtcbiAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBcIjcwXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTbCBOby5cIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW19jKFwiaW5wdXRcIiwgeyBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSB9KV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJQZXJtaXNzaW9uIE5hbWVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUGVybWlzc2lvbiBEZXNlcmlwdG9uXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFjdGlvblwiKV0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiMDFcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9IH0pXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIi1cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCItXCIpXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIjAyXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW19jKFwiaW5wdXRcIiwgeyBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSB9KV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCItXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIi1cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtfdm0uX3YoXCIwM1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0gfSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCItXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIi1cIildKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0Zm9vdFwiLCBbXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBjb2xzcGFuOiBcIjVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJObyBQZXJtaXNzaW9ucyBHcmFudGVkXCIpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWRkRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTdiMWE2ZTkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRkRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcaG9zdGluZ2VyXFxcXHVuaXRlZC1zY3JhcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1N2IxYTZlOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1N2IxYTZlOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1N2IxYTZlOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWRkRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTdiMWE2ZTkmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTdiMWE2ZTknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL0FkZEVkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTdiMWE2ZTkmXCIiXSwic291cmNlUm9vdCI6IiJ9