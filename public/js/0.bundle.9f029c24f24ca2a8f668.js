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
    staticClass: "btn link1",
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
  }, [_vm._m(3), _vm._v(" "), _vm.$route.params.id ? _c("div", {
    staticClass: "pull-right dropdown"
  }, [_c("router-link", {
    staticClass: "btn link2 widthauto",
    attrs: {
      to: "/user/add_permission/" + _vm.$route.params.id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvQWRkRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvQWRkRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvQWRkRWRpdC52dWU/NDkyYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9BZGRFZGl0LnZ1ZT83MzA1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL0FkZEVkaXQudnVlP2I5Y2YiXSwibmFtZXMiOlsibmFtZSIsImRhdGEiLCJ2aWV3X21vZGUiLCJjb3VudHJpZXMiLCJzdGF0ZXMiLCJjaXRpZXMiLCJlZGl0bW9kZSIsInN0ZXAiLCJ1c2VycyIsImZybV91c2VyIiwiaWQiLCJvcmdhbml6YXRpb24iLCJhZGRyZXNzXzEiLCJhZGRyZXNzXzIiLCJjaXR5Iiwic3RhdGUiLCJ6aXBfY29kZSIsImNvdW50cnkiLCJwaG9uZSIsImVtYWlsIiwiZmF4IiwidHlwZSIsInN0YXR1cyIsImFjY291bnRfaW5mbyIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsImJlZm9yZUNyZWF0ZSIsImF4aW9zIiwidGhlbiIsIm1ldGhvZHMiLCJhZGRJbmZvIiwiYWNjb3VudF9ubyIsIm5leHRfc3RlcCIsImZpbmFsIiwic3VibWl0X3VzZXIiLCJjb250YWluZXIiLCJjbG9hZGVyZCIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwibW91bnRlZCIsImNyZWF0ZWQiLCJ3YXRjaCIsIm4iLCIkIiwiaW1tZWRpYXRlIiwiaGFuZGxlciIsInBhcmFtcyIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl92IiwiX3MiLCJyZWYiLCJzdGF0aWNTdHlsZSIsIl9tIiwiYXR0cnMiLCJocmVmIiwiX2UiLCJvbiIsInN1Ym1pdCIsIiRldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGlyZWN0aXZlcyIsInJhd05hbWUiLCJ2YWx1ZSIsImV4cHJlc3Npb24iLCJlcnJvciIsImVycm9ycyIsInZlcnJvcnMiLCJoYXMiLCJjaGFuZ2UiLCIkJHNlbGVjdGVkVmFsIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmaWx0ZXIiLCJjYWxsIiwidGFyZ2V0Iiwib3B0aW9ucyIsIm8iLCJzZWxlY3RlZCIsIm1hcCIsInZhbCIsIl92YWx1ZSIsIiRzZXQiLCJtdWx0aXBsZSIsImZpcnN0IiwicGxhY2Vob2xkZXIiLCJkb21Qcm9wcyIsImlucHV0IiwiY29tcG9zaW5nIiwiZGlzYWJsZWQiLCJsYWJlbCIsInJlZHVjZSIsIm9wdGlvbiIsIm1vZGVsIiwiY2FsbGJhY2siLCIkJHYiLCJjbGljayIsIl9sIiwiaXRlbSIsIml4Iiwia2V5IiwiYWxpZ24iLCJzcGxpY2UiLCJsZW5ndGgiLCIkcm91dGUiLCJ0byIsInN0YXRpY1JlbmRlckZucyIsIndpZHRoIiwiY29sc3BhbiIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OytDQXNRQSxvSjs7Ozs7Ozs7Ozs7O0FBQUE7QUFHZTtFQUNmQSxtQkFEQTtFQUVBQyxJQUZBLGtCQUVBO0lBQ0E7TUFDQUMsZ0JBREE7TUFFQUMsYUFGQTtNQUdBQyxVQUhBO01BSUFDLFVBSkE7TUFLQUMsZUFMQTtNQU1BQyxPQU5BO01BT0FDLFNBUEE7TUFRQUM7UUFDQUMsTUFEQTtRQUVBQyxnQkFGQTtRQUdBWCxRQUhBO1FBSUFZLGFBSkE7UUFLQUMsYUFMQTtRQU1BQyxRQU5BO1FBT0FDLFNBUEE7UUFRQUMsWUFSQTtRQVNBQyx3QkFUQTtRQVVBQyxTQVZBO1FBV0FDLFNBWEE7UUFZQUMsT0FaQTtRQWFBQyxRQWJBO1FBY0FDLHlCQWRBO1FBZUFDO01BZkE7SUFSQTtFQTBCQSxDQTdCQTtFQThCQUMsNEJBQ0FDLG1FQURBLENBOUJBO0VBaUNBQyxZQWpDQSwwQkFpQ0E7SUFBQTs7SUFDQUMsOEJB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SSxFQUFKLENBQU8sR0FBUCxDQTNEOEQsRUE0RDlESCxFQUFFLENBQUMsT0FBRCxFQUFVLENBQ1ZBLEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FDUEEsRUFBRSxDQUFDLElBQUQsRUFBTztJQUFFUSxLQUFLLEVBQUU7TUFBRStDLEtBQUssRUFBRSxRQUFUO01BQW1CTyxPQUFPLEVBQUU7SUFBNUI7RUFBVCxDQUFQLEVBQXFELENBQ3JEL0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sd0JBQVAsQ0FEcUQsQ0FBckQsQ0FESyxDQUFQLENBRFEsQ0FBVixDQTVENEQsQ0FBOUQsQ0FEMkMsQ0FBN0MsQ0FEOEMsQ0FBekMsQ0FBVDtBQXdFRCxDQTlJbUIsQ0FBdEI7QUFnSkFMLE1BQU0sQ0FBQ2lFLGFBQVAsR0FBdUIsSUFBdkI7Ozs7Ozs7Ozs7Ozs7QUM3aURBO0FBQUE7QUFBQTtBQUFBO0FBQXNGO0FBQzNCO0FBQ0w7OztBQUd0RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUE2TCxDQUFnQixtUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FqTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMC5idW5kbGUuOWYwMjljMjRmMjRjYTJhOGY2NjguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjxkaXY+XHJcblxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICA8aDE+e3tmcm1fdXNlci5pZD8nVXBkYXRlJzonQWRkJ319IFVzZXI8L2gxPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJveC13YXJuaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5IHZsZC1wYXJlbnRcIiByZWY9XCJyZWZfbG9hZF91c2VyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFic3NlY3Rpb25cIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgc3R5bGU9XCJwb2ludGVyLWV2ZW50czogbm9uZTtcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhY3RpdmVcIj48YSBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjbWVudTFcIiBjbGFzcz1cImRpc2FibGVkXCI+VXNlciBJbmZvcm1hdGlvbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSB2LWlmPVwiZnJtX3VzZXIub3JnYW5pemF0aW9uIT0nVW5pdGVkIFNjcmFwIE1ldGFsJ1wiPjxhIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNtZW51MlwiIGNsYXNzPVwiZGlzYWJsZWRcIj5BY2NvdW50IEluZm9ybWF0aW9uPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNtZW51M1wiIGNsYXNzPVwiZGlzYWJsZWRcIiA+VXNlciBTZXR0aW5nczwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibWVudTFcIiBjbGFzcz1cInRhYi1wYW5lIGZhZGUgaW4gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSAgQHN1Ym1pdC5wcmV2ZW50PVwibmV4dF9zdGVwKCdmcm1TdGVwMScpXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgOmNsYXNzPVwieyd2aWV3X21vZGUnOnZpZXdfbW9kZX1cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5Pcmdhbml6YXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmcm1fdXNlci5vcmdhbml6YXRpb25cIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5vcmdhbml6YXRpb24sICdlcnJvcic6IHZlcnJvcnMuaGFzKCdvcmdhbml6YXRpb24nKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIub3JnYW5pemF0aW9uIH1cIiBkYXRhLXZ2LW5hbWU9XCJvcmdhbml6YXRpb25cIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVuaXRlZCBTY3JhcCBNZXRhbFwiPlVuaXRlZCBTY3JhcCBNZXRhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3RoZXJzXCI+T3RoZXJzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEub3JnYW5pemF0aW9uJylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLm9yZ2FuaXphdGlvbicpIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5GdWxsIE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBGdWxsIE5hbWUgLi4uXCIgdi1tb2RlbD1cImZybV91c2VyLm5hbWVcIiAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMubmFtZSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ25hbWUnKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIubmFtZSB9XCIgZGF0YS12di1uYW1lPVwibmFtZVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5uYW1lJylcIiBjbGFzcz1cImVycm9ybXNnXCI+ICB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5uYW1lJykgfX08L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+QWRkcmVzcyAxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBZGRyZXNzIDEgLi4uXCIgdi1tb2RlbD1cImZybV91c2VyLmFkZHJlc3NfMVwiICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5hZGRyZXNzXzEsICdlcnJvcic6IHZlcnJvcnMuaGFzKCdhZGRyZXNzXzEnKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIuYWRkcmVzc18xIH1cIiBkYXRhLXZ2LW5hbWU9XCJhZGRyZXNzXzFcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIiBkYXRhLXZ2LWFzPVwiQWRkcmVzcyAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLmFkZHJlc3NfMScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiAge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuYWRkcmVzc18xJykgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzcyAyIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFkZHJlc3MgMiAuLi5cIiB2LW1vZGVsPVwiZnJtX3VzZXIuYWRkcmVzc18yXCIgIHYtdmFsaWRhdGU9XCInJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5hZGRyZXNzXzIsICdlcnJvcic6IHZlcnJvcnMuaGFzKCdhZGRyZXNzXzInKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIuYWRkcmVzc18yIH1cIiBkYXRhLXZ2LW5hbWU9XCJhZGRyZXNzXzJcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIiBkYXRhLXZ2LWFzPVwiQWRkcmVzcyAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLmFkZHJlc3NfMicpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiAge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuYWRkcmVzc18yJykgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5Db3VudHJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBkaXNhYmxlZCBsYWJlbD1cIm5hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLm5hbWVcIiAgOm9wdGlvbnM9XCJjb3VudHJpZXNcIiBjbGFzcz1cIlwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ291bnRyeSAuLi5cIiB2LW1vZGVsPVwiZnJtX3VzZXIuY291bnRyeVwiICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5jb3VudHJ5LCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnY291bnRyeScpLCdoYXZlVmFsdWUnOiBmcm1fdXNlci5jb3VudHJ5IH1cIiBkYXRhLXZ2LW5hbWU9XCJjb3VudHJ5XCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+PC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEuY291bnRyeScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiAge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuY291bnRyeScpIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+U3RhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5uYW1lXCIgIDpvcHRpb25zPVwic3RhdGVzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBTdGF0ZSAuLi5cIiB2LW1vZGVsPVwiZnJtX3VzZXIuc3RhdGVcIiAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMuc3RhdGUsICdlcnJvcic6IHZlcnJvcnMuaGFzKCdzdGF0ZScpLCdoYXZlVmFsdWUnOiBmcm1fdXNlci5zdGF0ZSB9XCIgZGF0YS12di1uYW1lPVwic3RhdGVcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5zdGF0ZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiAge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuc3RhdGUnKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5DaXR5IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIENpdHkgLi4uXCIgdi1tb2RlbD1cImZybV91c2VyLmNpdHlcIiAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMuY2l0eSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ2NpdHknKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIuY2l0eSB9XCIgZGF0YS12di1uYW1lPVwiY2l0eVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5jaXR5JylcIiBjbGFzcz1cImVycm9ybXNnXCI+ICB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5jaXR5JykgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPlppcCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWmlwIC4uLlwiIHYtbW9kZWw9XCJmcm1fdXNlci56aXBfY29kZVwiICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy56aXBfY29kZSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3ppcF9jb2RlJyksJ2hhdmVWYWx1ZSc6IGZybV91c2VyLnppcF9jb2RlIH1cIiBkYXRhLXZ2LW5hbWU9XCJ6aXBfY29kZVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiIGRhdGEtdnYtYXM9XCJ6aXAgY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS56aXBfY29kZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiAge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuemlwX2NvZGUnKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5QaG9uZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGhvbmUgLi4uXCIgdi1tb2RlbD1cImZybV91c2VyLnBob25lXCIgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLnBob25lLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygncGhvbmUnKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIucGhvbmUgfVwiIGRhdGEtdnYtbmFtZT1cInBob25lXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLnBob25lJylcIiBjbGFzcz1cImVycm9ybXNnXCI+ICB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5waG9uZScpIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5FbWFpbCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsIC4uLlwiIHYtbW9kZWw9XCJmcm1fdXNlci5lbWFpbFwiICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkfGVtYWlsJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5lbWFpbCwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ2VtYWlsJyksJ2hhdmVWYWx1ZSc6IGZybV91c2VyLmVtYWlsIH1cIiBkYXRhLXZ2LW5hbWU9XCJlbWFpbFwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5lbWFpbCcpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiAge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuZW1haWwnKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZheCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBGYXggLi4uXCIgdi1tb2RlbD1cImZybV91c2VyLmZheFwiICB2LXZhbGlkYXRlPVwiJydcIiAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMuZmF4LCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnZmF4JyksJ2hhdmVWYWx1ZSc6IGZybV91c2VyLmZheCB9XCIgZGF0YS12di1uYW1lPVwiZmF4XCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLmZheCcpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiAge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuZmF4JykgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPlVzZXIgVHlwZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmcm1fdXNlci50eXBlXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMudHlwZSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3R5cGUnKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIudHlwZSB9XCIgZGF0YS12di1uYW1lPVwidHlwZVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkNob29zZSB1c2VyIHR5cGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZnJtX3VzZXIub3JnYW5pemF0aW9uPT0nVW5pdGVkIFNjcmFwIE1ldGFsJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWRtaW5cIj5BZG1pbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmluYW5jZSBUZWFtXCI+RmluYW5jZSBUZWFtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUcmFuc3BvcnRhdGlvbiBUZWFtXCI+IFRyYW5zcG9ydGF0aW9uIFRlYW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNhbGVzIFRlYW0gXCI+U2FsZXMgVGVhbSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNFQ1wiPkNFQyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlByaW1hcnlcIj5QcmltYXJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGaW5hbmNlXCI+RmluYW5jZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHJhbnNwb3J0YXRpb25cIj5UcmFuc3BvcnRhdGlvbiA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEudHlwZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS50eXBlJykgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5TdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmcm1fdXNlci5zdGF0dXNcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy50eXBlLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnc3RhdHVzJyksJ2hhdmVWYWx1ZSc6IGZybV91c2VyLnN0YXR1cyB9XCIgZGF0YS12di1uYW1lPVwic3RhdHVzXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBY3RpdmVcIj5BY3RpdmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRlYWN0aXZlXCI+SW5hY3RpdmU8L29wdGlvbj4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcHByb3ZlIFBlbmRpbmdcIj5BcHByb3ZlIFBlbmRpbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRlY2xpbmVkXCI+RGVjbGluZWQ8L29wdGlvbj4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLnN0YXR1cycpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5zdGF0dXMnKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4gbGluazFcIiB2LWlmPVwiZnJtX3VzZXIuaWQgJiYgdmlld19tb2RlXCIgQGNsaWNrPVwidmlld19tb2RlPSF2aWV3X21vZGVcIj5FZGl0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gbGluazFcIiB2LWlmPVwiIXZpZXdfbW9kZVwiPk5leHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibWVudTJcIiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtICBAc3VibWl0LnByZXZlbnQ9XCJuZXh0X3N0ZXAoJ2ZybVN0ZXAyJylcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCIgd2lkdGg9XCI3MFwiPlNsIE5vLjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjY291bnQgTm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjEwMFwiPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIoaXRlbSxpeCkgaW4gZnJtX3VzZXIuYWNjb3VudF9pbmZvXCIgOmtleT1cIid1cCcraXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj57e2l4KzF9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB2LW1vZGVsPVwiaXRlbS5hY2NvdW50X25vXCIgdHlwZT1cInRleHRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIDpuYW1lPVwiJ2FjY291bnRfbm8nK2l4XCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAyXCIgIGRhdGEtdnYtYXM9XCJhY2NvdW50IG5vXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDIuYWNjb3VudF9ubycraXgpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMi5hY2NvdW50X25vJytpeCkgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgdi1pZj1cIml4PjBcIiBAY2xpY2s9XCJmcm1fdXNlci5hY2NvdW50X2luZm8uc3BsaWNlKGl4LCAxKVwiPjxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB2LWlmPVwiZnJtX3VzZXIuYWNjb3VudF9pbmZvLmxlbmd0aD09aXgrMVwiIEBjbGljaz1cImFkZEluZm8oKVwiPjxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBsaW5rMiBteC0xXCIgQGNsaWNrPVwic3RlcC0tXCI+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGxpbmsxIG14LTFcIj5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1lbnUzXCIgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSAgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0X3VzZXIoJ3N1Ym1pdCcpXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlciBib3JcIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGUgY2FyZC10ZXh0XCI+UGVybWlzc2lvbnMgR3JhbnRlZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodCBkcm9wZG93blwiIHYtaWY9XCIkcm91dGUucGFyYW1zLmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCInL3VzZXIvYWRkX3Blcm1pc3Npb24vJyskcm91dGUucGFyYW1zLmlkXCIgY2xhc3M9XCJidG4gbGluazIgd2lkdGhhdXRvXCI+IDxzcGFuPjxpIGNsYXNzPVwiZmEgZmEtcGVuY2lsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA8L3NwYW4+IEFkZCBQZXJtaXNzaW9uPC9yb3V0ZXItbGluaz4gICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gbGluazEgd2lkdGhhdXRvXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj48aSBjbGFzcz1cImZhIGZhLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCIgd2lkdGg9XCI3MFwiPlNsIE5vLjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QZXJtaXNzaW9uIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBlcm1pc3Npb24gRGVzZXJpcHRvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBjb2xzcGFuPVwiNVwiPk5vIFBlcm1pc3Npb25zIEdyYW50ZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGxpbmsyIG14LTFcIiBAY2xpY2s9XCJmcm1fdXNlci5vcmdhbml6YXRpb24hPSdVbml0ZWQgU2NyYXAgTWV0YWwnID8gc3RlcC0tIDogc3RlcD0xXCI+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gbGluazEgbXgtMVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcbiAgICBtYXBHZXR0ZXJzXHJcbn0gZnJvbSBcInZ1ZXhcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJVc2VyQWRkRWRpdFwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdmlld19tb2RlOmZhbHNlLFxyXG4gICAgICAgICAgY291bnRyaWVzOltdLFxyXG4gICAgICAgICAgc3RhdGVzOltdLFxyXG4gICAgICAgICAgY2l0aWVzOltdLFxyXG4gICAgICAgICAgZWRpdG1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICAgIHVzZXJzOiB7fSxcclxuICAgICAgICAgIGZybV91c2VyOiBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgICAgICAgIG9yZ2FuaXphdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgYWRkcmVzc18xOiAnJyxcclxuICAgICAgICAgICAgICBhZGRyZXNzXzI6ICcnLFxyXG4gICAgICAgICAgICAgIGNpdHk6ICcnLFxyXG4gICAgICAgICAgICAgIHN0YXRlOiAnJyxcclxuICAgICAgICAgICAgICB6aXBfY29kZTogJycsXHJcbiAgICAgICAgICAgICAgY291bnRyeTogJ3VuaXRlZCBzdGF0ZXMnLFxyXG4gICAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgICAgZmF4OiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICAgICAgICBzdGF0dXM6J0FwcHJvdmUgUGVuZGluZycsXHJcbiAgICAgICAgICAgICAgYWNjb3VudF9pbmZvOiBbXVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAuLi5tYXBHZXR0ZXJzKFtcImVycm9yc1wiXSlcclxuICAgIH0sXHJcbiAgICBiZWZvcmVDcmVhdGUoKXsgXHJcbiAgICAgIGF4aW9zLmdldChcImFwaS9nZXRDb3VudHJpZXNcIiApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRyaWVzPXJlcy5kYXRhLmRhdGFcclxuICAgICAgICAgICAgfSkgICAgICAgICAgICAgIFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhc3luYyBhZGRJbmZvKCkge1xyXG4gICAgICAgICAgICB0aGlzLmZybV91c2VyLmFjY291bnRfaW5mby5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiAnJyxcclxuICAgICAgICAgICAgICAgIGFjY291bnRfbm86ICcnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgbmV4dF9zdGVwKGZpbmFsID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCdmcm1TdGVwJyArIHRoaXMuc3RlcCkudGhlbihhc3luYyAodmFsaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRfdXNlcigpO1xyXG4gICAgICAgICAgICAgICAgLyogICAgIHRoaXMuc3RlcCsrXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmFsID09ICdzdWJtaXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0X3VzZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9ICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgXHJcblxyXG4gICAgICAgIHN1Ym1pdF91c2VyKCkge1xyXG4gICAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX3VzZXJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5mcm1fdXNlci5pZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJtX3VzZXIucHV0KCdhcGkvdXNlci8nICsgdGhpcy5mcm1fdXNlci5pZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5mcm1fdXNlci5vcmdhbml6YXRpb249PSdVbml0ZWQgU2NyYXAgTWV0YWwnICYmIHRoaXMuc3RlcD09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICB0aGlzLmZybV91c2VyLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuJHJvdXRlci5wdXNoKCcvdXNlcnMnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm1fdXNlci5wb3N0KCdhcGkvdXNlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJtX3VzZXIuaWQ9IGRhdGEuZGF0YS5kYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZnJtX3VzZXIucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAkKCdhW2hyZWY9XCIjbWVudTFcIl0nKS50YWIoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm1fdXNlci5hY2NvdW50X2luZm8gPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEluZm8oKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5mcm1fdXNlci5vcmdhbml6YXRpb249PSdVbml0ZWQgU2NyYXAgTWV0YWwnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCkge1xyXG4gICAgICAgICAgdGhpcy52aWV3X21vZGU9dHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmZybV91c2VyLmlkID0gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xyXG4gICAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX3VzZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS91c2VyL1wiICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJtX3VzZXIuZmlsbChyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL3VzZXJzLycpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIHRoaXMuc3RlcD0xXHJcbiAgICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnZpZXdfbW9kZT1mYWxzZVxyXG4gICAgICAgIHRoaXMuYWRkSW5mbygpO1xyXG4gICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgYXN5bmMgc3RlcChuKSB7XHJcbiAgICAgICAgICAgICQoJ2FbaHJlZj1cIiNtZW51JyArIG4gKyAnXCJdJykudGFiKCdzaG93Jyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyAnZnJtX3VzZXIub3JnYW5pemF0aW9uJyhuKSB7XHJcbiAgICAgICAgICAgIGlmIChuID09ICdVbml0ZWQgU2NyYXAgTWV0YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVsnQWRtaW4nLCAnRmluYW5jZSBUZWFtJywgJ1RyYW5zcG9ydGF0aW9uIFRlYW0nLCAnU2FsZXMgVGVhbScsICdDRUMnXS5pbmNsdWRlcyh0aGlzLmZybV91c2VyLnR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm1fdXNlci50eXBlID0gJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghWydQcmltYXJ5JywgJ0ZpbmFuY2UnLCAnVHJhbnNwb3J0YXRpb24nXS5pbmNsdWRlcyh0aGlzLmZybV91c2VyLnR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm1fdXNlci50eXBlID0gJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2ZybV91c2VyLmNvdW50cnknOntcclxuICAgICAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcclxuICAgICAgICAgIGhhbmRsZXIobikge1xyXG4gICAgICAgICAgICBpZihuKXtcclxuICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2dldFN0YXRlc1wiLHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6eydjb3VudHJ5JzpufVxyXG4gICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlcz1yZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBcclxuICAgICAgfSwgXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImgxXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5mcm1fdXNlci5pZCA/IFwiVXBkYXRlXCIgOiBcIkFkZFwiKSArIFwiIFVzZXJcIildKSxcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LXdhcm5pbmdcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyByZWY6IFwicmVmX2xvYWRfdXNlclwiLCBzdGF0aWNDbGFzczogXCJib3gtYm9keSB2bGQtcGFyZW50XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYnNzZWN0aW9uXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2IG5hdi10YWJzXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInBvaW50ZXItZXZlbnRzXCI6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLm9yZ2FuaXphdGlvbiAhPSBcIlVuaXRlZCBTY3JhcCBNZXRhbFwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkaXNhYmxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIiwgaHJlZjogXCIjbWVudTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWNjb3VudCBJbmZvcm1hdGlvblwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZSBpbiBhY3RpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibWVudTFcIiB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5leHRfc3RlcChcImZybVN0ZXAxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyB2aWV3X21vZGU6IF92bS52aWV3X21vZGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiT3JnYW5pemF0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV91c2VyLm9yZ2FuaXphdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3VzZXIub3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5vcmdhbml6YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcIm9yZ2FuaXphdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci5vcmdhbml6YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJvcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvLl92YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiVW5pdGVkIFNjcmFwIE1ldGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlVuaXRlZCBTY3JhcCBNZXRhbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIk90aGVyc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT3RoZXJzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5vcmdhbml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZybVN0ZXAxLm9yZ2FuaXphdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZ1bGwgTmFtZSBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV91c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fdXNlci5uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBGdWxsIE5hbWUgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3VzZXIubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEubmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFkZHJlc3MgMVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIuYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3VzZXIuYWRkcmVzc18xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLmFkZHJlc3NfMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcImFkZHJlc3NfMVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3VzZXIuYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBBZGRyZXNzIDEgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiYWRkcmVzc18xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkFkZHJlc3MgMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3VzZXIuYWRkcmVzc18xIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZHJlc3NfMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5hZGRyZXNzXzFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm1TdGVwMS5hZGRyZXNzXzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJBZGRyZXNzIDIgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV91c2VyLmFkZHJlc3NfMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV91c2VyLmFkZHJlc3NfMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJydcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLmFkZHJlc3NfMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcImFkZHJlc3NfMlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3VzZXIuYWRkcmVzc18yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBBZGRyZXNzIDIgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiYWRkcmVzc18yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkFkZHJlc3MgMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3VzZXIuYWRkcmVzc18yIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZHJlc3NfMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5hZGRyZXNzXzJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm1TdGVwMS5hZGRyZXNzXzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNvdW50cnlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuY291bnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiY291bnRyeVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci5jb3VudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IChvcHRpb24pID0+IG9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5jb3VudHJpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgQ291bnRyeSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImNvdW50cnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIuY291bnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZybV91c2VyLCBcImNvdW50cnlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fdXNlci5jb3VudHJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5jb3VudHJ5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJtU3RlcDEuY291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU3RhdGUgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJzdGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiAob3B0aW9uKSA9PiBvcHRpb24ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc3RhdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIFN0YXRlIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mcm1fdXNlciwgXCJzdGF0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV91c2VyLnN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5zdGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZybVN0ZXAxLnN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2l0eSBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV91c2VyLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fdXNlci5jaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJjaXR5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBDaXR5IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV91c2VyLmNpdHkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5jaXR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLmNpdHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJaaXAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fdXNlci56aXBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV91c2VyLnppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLnppcF9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiemlwX2NvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLnppcF9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBaaXAgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiemlwX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiemlwIGNvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV91c2VyLnppcF9jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLnppcF9jb2RlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJtU3RlcDEuemlwX2NvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQaG9uZSBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV91c2VyLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3VzZXIucGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJwaG9uZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3VzZXIucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIFBob25lIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fdXNlci5waG9uZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwaG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5waG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZybVN0ZXAxLnBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRW1haWwgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV91c2VyLmVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWR8ZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZHxlbWFpbCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBFbWFpbCAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3VzZXIuZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEuZW1haWxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm1TdGVwMS5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkZheCBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIuZmF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3VzZXIuZmF4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCInJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuZmF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiZmF4XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci5mYXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIEZheCAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJmYXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV91c2VyLmZheCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEuZmF4XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLmZheFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlVzZXIgVHlwZSBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3VzZXIudHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwidHlwZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG8uX3ZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2hvb3NlIHVzZXIgdHlwZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlci5vcmdhbml6YXRpb24gPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbml0ZWQgU2NyYXAgTWV0YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiQWRtaW5cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFkbWluXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIkZpbmFuY2UgVGVhbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJGaW5hbmNlIFRlYW1cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiVHJhbnNwb3J0YXRpb24gVGVhbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgVHJhbnNwb3J0YXRpb24gVGVhbVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YWx1ZTogXCJTYWxlcyBUZWFtIFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2FsZXMgVGVhbSBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJDRUNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNFQyBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJQcmltYXJ5XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJQcmltYXJ5XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiRmluYW5jZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRmluYW5jZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJUcmFuc3BvcnRhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUcmFuc3BvcnRhdGlvbiBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEudHlwZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLnR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTdGF0dXNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fdXNlci5zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcInN0YXR1c1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJzdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvLl92YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJBY3RpdmVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFjdGl2ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIkRlYWN0aXZlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJJbmFjdGl2ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIkFwcHJvdmUgUGVuZGluZ1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQXBwcm92ZSBQZW5kaW5nXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiRGVjbGluZWRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRlY2xpbmVkXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5zdGF0dXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZybVN0ZXAxLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtZm9vdGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlci5pZCAmJiBfdm0udmlld19tb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52aWV3X21vZGUgPSAhX3ZtLnZpZXdfbW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFZGl0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS52aWV3X21vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gbGluazFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJOZXh0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsIGF0dHJzOiB7IGlkOiBcIm1lbnUyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubmV4dF9zdGVwKFwiZnJtU3RlcDJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlc2VjdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIuYWNjb3VudF9pbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0sIGl4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBcInVwXCIgKyBpeCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl4ICsgMSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5hY2NvdW50X25vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmFjY291bnRfbm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhY2NvdW50X25vXCIgKyBpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcImFjY291bnQgbm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5hY2NvdW50X25vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWNjb3VudF9ub1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm1TdGVwMi5hY2NvdW50X25vXCIgKyBpeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm1TdGVwMi5hY2NvdW50X25vXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZnJtX3VzZXIuYWNjb3VudF9pbmZvLnNwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmEgZmEtdHJhc2gtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIuYWNjb3VudF9pbmZvLmxlbmd0aCA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkSW5mbygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWZvb3RlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMiBteC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0ZXAtLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkJhY2tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsxIG14LTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJOZXh0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIiwgYXR0cnM6IHsgaWQ6IFwibWVudTNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXRfdXNlcihcInN1Ym1pdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXIgYm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcm91dGUucGFyYW1zLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0IGRyb3Bkb3duXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsyIHdpZHRoYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdXNlci9hZGRfcGVybWlzc2lvbi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGVuY2lsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBBZGQgUGVybWlzc2lvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiAgwqDCoFxcclxcbiAgICAgICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSg1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtZm9vdGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMiBteC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3VzZXIub3JnYW5pemF0aW9uICE9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5pdGVkIFNjcmFwIE1ldGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5zdGVwLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChfdm0uc3RlcCA9IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJCYWNrXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMSBteC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3VibWl0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJkaXNhYmxlZFwiLFxuICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIiwgaHJlZjogXCIjbWVudTFcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiVXNlciBJbmZvcm1hdGlvblwiKV1cbiAgICAgICksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJsaVwiLCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJkaXNhYmxlZFwiLFxuICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIiwgaHJlZjogXCIjbWVudTNcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiVXNlciBTZXR0aW5nc1wiKV1cbiAgICAgICksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSwgYXR0cnM6IHsgd2lkdGg6IFwiNzBcIiB9IH0sXG4gICAgICAgICAgW192bS5fdihcIlNsIE5vLlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQWNjb3VudCBOb1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgd2lkdGg6IFwiMTAwXCIgfSB9LCBbX3ZtLl92KFwiQWN0aW9uXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJQZXJtaXNzaW9ucyBHcmFudGVkXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gbGluazEgd2lkdGhhdXRvXCIsXG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIFwiZGF0YS10b2dnbGVcIjogXCJkcm9wZG93blwiIH0sXG4gICAgICB9LFxuICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWNvZ1wiLCBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0gfSldXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlc2VjdGlvblwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtcmVzcG9uc2l2ZVwiIH0sIFtcbiAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB3aWR0aDogXCI3MFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2wgTm8uXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0gfSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUGVybWlzc2lvbiBOYW1lXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlBlcm1pc3Npb24gRGVzZXJpcHRvblwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJBY3Rpb25cIildKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIjAxXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW19jKFwiaW5wdXRcIiwgeyBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSB9KV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCItXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIi1cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtfdm0uX3YoXCIwMlwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0gfSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCItXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIi1cIildKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiMDNcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9IH0pXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIi1cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCItXCIpXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGZvb3RcIiwgW1xuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwgY29sc3BhbjogXCI1XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiTm8gUGVybWlzc2lvbnMgR3JhbnRlZFwiKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3YjFhNmU5JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTdiMWE2ZTknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTdiMWE2ZTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTdiMWE2ZTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3YjFhNmU5JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU3YjFhNmU5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9BZGRFZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3YjFhNmU5JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==