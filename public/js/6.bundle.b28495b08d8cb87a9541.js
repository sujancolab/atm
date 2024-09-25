(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forgot_password.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forgot_password.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Forgot_password",
  components: {},
  data: function data() {
    return {
      form: new Form({
        password_confirmation: '',
        password: '',
        token: this.$route.query.token,
        email: this.$route.query.email,
        atm: this.$route.query.atm
      })
    };
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    var cloaderd = this.$loading.show();
    axios.post('/api/password/checkToken', {
      token: this.$route.query.token,
      email: this.$route.query.email
    }).then(function (response) {
      cloaderd.hide();
    })["catch"](function () {
      _this.$router.push('/login')["catch"](function () {});

      cloaderd.hide();
    });
  },
  methods: {
    updatePassword: function updatePassword() {
      var _this2 = this;

      this.$validator.validateAll().then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(valid) {
          var cloaderd;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (valid) {
                    _this2.verrors.clear();

                    cloaderd = _this2.$loading.show({
                      container: _this2.$refs.fpref
                    });

                    _this2.form.post('/api/password/reset').then(function (response) {
                      if (response.data.success == true) {
                        if ($cookies.isKey('anch_remember_me')) {
                          if (_this2.form.email == $cookies.get('anch_log_email')) _this2.$cookies.set("anch_log_pass", _this2.form.password, "340d");
                        }

                        _this2.$router.push('/login')["catch"](function () {});

                        ;
                      }

                      cloaderd.hide();
                      Toast.fire({
                        icon: 'success',
                        title: response.data.message
                      });
                    });
                  }

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", {
    staticClass: "loginsection_bg"
  }, [_c("section", {
    staticClass: "headsection"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
  }, [_c("div", {
    staticClass: "pull-left"
  }, [_c("div", {
    staticClass: "logobox1"
  }, [_c("a", {
    attrs: {
      href: "https://unitedscrap.com/",
      target: "_blank"
    }
  }, [_c("img", {
    attrs: {
      src: _vm.set_image("images/logo.png"),
      alt: "logo"
    }
  })])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-2 col-lg-2"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
  }, [_c("form", {
    ref: "fpref",
    staticClass: "loginbox",
    attrs: {
      autocomplete: "off"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updatePassword.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c("h1", [_vm._v("Reset Password")]), _vm._v(" "), _c("h2", [_vm._v("Set Your Password USM Customer Portal ")]), _vm._v(" "), _c("div", {
    staticClass: "form-group has-feedback"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email,
      expression: "form.email"
    }],
    staticClass: "form-control",
    "class": {
      error: _vm.form.errors.has("email"),
      haveValue: _vm.form.email
    },
    attrs: {
      type: "email",
      placeholder: "Email",
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "email",
      name: "email",
      disabled: ""
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
    staticClass: "glyphicon glyphicon-envelope form-control-feedback"
  }), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "email"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group has-feedback"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password,
      expression: "form.password"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: {
        required: true,
        min: 8,
        regex: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}).*$/
      },
      expression: "{ required: true, min: 8, regex: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,}).*$/ }"
    }],
    ref: "password",
    staticClass: "form-control",
    "class": {
      error: _vm.form.errors.has("password"),
      haveValue: _vm.form.password
    },
    attrs: {
      type: "password",
      placeholder: "password",
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "password",
      name: "password"
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
  }), _vm._v(" "), _vm.verrors.has("password") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("At least one capital letter, one number and one special character. Minimum length of the password should be 8.")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group has-feedback"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password_confirmation,
      expression: "form.password_confirmation"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "confirmed:password",
      expression: "'confirmed:password'"
    }],
    staticClass: "form-control",
    "class": {
      error: _vm.form.errors.has("password_confirmation"),
      haveValue: _vm.form.password_confirmation
    },
    attrs: {
      type: "password",
      placeholder: "Confirm New Password",
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "password confirmation",
      name: "password_confirmation",
      "data-vv-as": "password confirmation"
    },
    domProps: {
      value: _vm.form.password_confirmation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "password_confirmation", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("password_confirmation") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("password_confirmation")))]) : _vm._e()]), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  })])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "form-group"
  }, [_c("button", {
    staticClass: "pull-left btn link1",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Forgot_password.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Forgot_password.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Forgot_password_vue_vue_type_template_id_7cfbf91c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true& */ "./resources/js/components/Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true&");
/* harmony import */ var _Forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forgot_password.vue?vue&type=script&lang=js& */ "./resources/js/components/Forgot_password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Forgot_password_vue_vue_type_template_id_7cfbf91c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Forgot_password_vue_vue_type_template_id_7cfbf91c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7cfbf91c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forgot_password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forgot_password.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Forgot_password.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Forgot_password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forgot_password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_password_vue_vue_type_template_id_7cfbf91c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_password_vue_vue_type_template_id_7cfbf91c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_password_vue_vue_type_template_id_7cfbf91c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRm9yZ290X3Bhc3N3b3JkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Gb3Jnb3RfcGFzc3dvcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZvcmdvdF9wYXNzd29yZC52dWU/YjE2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Gb3Jnb3RfcGFzc3dvcmQudnVlPzEwYjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRm9yZ290X3Bhc3N3b3JkLnZ1ZT9lZWJiIl0sIm5hbWVzIjpbIm5hbWUiLCJjb21wb25lbnRzIiwiZGF0YSIsImZvcm0iLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJwYXNzd29yZCIsInRva2VuIiwiZW1haWwiLCJhdG0iLCJiZWZvcmVDcmVhdGUiLCJheGlvcyIsInRoZW4iLCJjbG9hZGVyZCIsIm1ldGhvZHMiLCJ1cGRhdGVQYXNzd29yZCIsImNvbnRhaW5lciIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJocmVmIiwidGFyZ2V0Iiwic3JjIiwic2V0X2ltYWdlIiwiYWx0IiwiX3YiLCJyZWYiLCJhdXRvY29tcGxldGUiLCJvbiIsInN1Ym1pdCIsIiRldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJrZXlkb3duIiwib25LZXlkb3duIiwiZGlyZWN0aXZlcyIsInJhd05hbWUiLCJ2YWx1ZSIsImV4cHJlc3Npb24iLCJlcnJvciIsImVycm9ycyIsImhhcyIsImhhdmVWYWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwiZG9tUHJvcHMiLCJpbnB1dCIsImNvbXBvc2luZyIsIiRzZXQiLCJmaWVsZCIsInJlcXVpcmVkIiwibWluIiwicmVnZXgiLCJ2ZXJyb3JzIiwiX2UiLCJfcyIsImZpcnN0IiwiX20iLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRlO0VBQ2ZBLHVCQURBO0VBRUFDLGNBRkE7RUFLQUMsSUFMQSxrQkFLQTtJQUNBO01BQ0FDO1FBQ0FDLHlCQURBO1FBRUFDLFlBRkE7UUFHQUMsOEJBSEE7UUFJQUMsOEJBSkE7UUFLQUM7TUFMQTtJQURBO0VBU0EsQ0FmQTtFQWdCQUMsWUFoQkEsMEJBZ0JBO0lBQUE7O0lBQ0E7SUFDQUM7TUFDQUosOEJBREE7TUFFQUM7SUFGQSxHQUlBSSxJQUpBLENBSUE7TUFDQUM7SUFDQSxDQU5BLFdBT0E7TUFDQTs7TUFDQUE7SUFDQSxDQVZBO0VBV0EsQ0E3QkE7RUErQkFDO0lBQ0FDLGNBREEsNEJBQ0E7TUFBQTs7TUFDQTtRQUFBO1VBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7a0JBQ0E7b0JBQ0E7O29CQUVBRixRQUhBLEdBR0E7c0JBQ0FHO29CQURBLEVBSEE7O29CQU1BLHdDQUNBSixJQURBLENBQ0E7c0JBQ0E7d0JBQ0E7MEJBQ0EseURBQ0E7d0JBQ0E7O3dCQUVBOzt3QkFBQTtzQkFDQTs7c0JBQ0FDO3NCQUNBSTt3QkFDQUMsZUFEQTt3QkFFQUM7c0JBRkE7b0JBSUEsQ0FmQTtrQkFnQkE7O2dCQXZCQTtnQkFBQTtrQkFBQTtjQUFBO1lBQUE7VUFBQTtRQUFBOztRQUFBO1VBQUE7UUFBQTtNQUFBO0lBMkJBO0VBN0JBO0FBL0JBLEc7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQSxJQUFJQyxNQUFNLEdBQUcsU0FBU0EsTUFBVCxHQUFrQjtFQUM3QixJQUFJQyxHQUFHLEdBQUcsSUFBVjtFQUFBLElBQ0VDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVVELEVBRGpCOztFQUVBLE9BQU9BLEVBQUUsQ0FBQyxTQUFELEVBQVk7SUFBRUUsV0FBVyxFQUFFO0VBQWYsQ0FB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Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUErTCxDQUFnQiwyUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FuTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNi5idW5kbGUuYjI4NDk1YjA4ZDhjYjg3YTk1NDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImxvZ2luc2VjdGlvbl9iZ1wiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaGVhZHNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29ib3gxXCI+PGEgaHJlZj1cImh0dHBzOi8vdW5pdGVkc2NyYXAuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJzZXRfaW1hZ2UoJ2ltYWdlcy9sb2dvLnBuZycpXCIgYWx0PVwibG9nb1wiPjwvYT4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0yIGNvbC1sZy0yXCI+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTQgY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImxvZ2luYm94XCIgQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlUGFzc3dvcmRcIiBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIiByZWY9XCJmcHJlZlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+UmVzZXQgUGFzc3dvcmQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+U2V0IFlvdXIgUGFzc3dvcmQgVVNNIEN1c3RvbWVyIFBvcnRhbCA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJlbWFpbFwiIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCIgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygnZW1haWwnKSwgJ2hhdmVWYWx1ZSc6IGZvcm0uZW1haWwgfVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlIGZvcm0tY29udHJvbC1mZWVkYmFja1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJlbWFpbFwiIGNsYXNzPVwiZXJyb3Jtc2dcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGhhcy1mZWVkYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpLCAnaGF2ZVZhbHVlJzogZm9ybS5wYXNzd29yZCB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwieyByZXF1aXJlZDogdHJ1ZSwgbWluOiA4LCByZWdleDogL14oPz0uKltBLVpdKSg/PS4qWzAtOV0pKD89LipbIUAjXFwkJVxcXiZcXCpdKSg/PS57OCx9KS4qJC8gfVwiIHJlZj1cInBhc3N3b3JkXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygncGFzc3dvcmQnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj5BdCBsZWFzdCBvbmUgY2FwaXRhbCBsZXR0ZXIsIG9uZSBudW1iZXIgYW5kIG9uZSBzcGVjaWFsIGNoYXJhY3Rlci4gTWluaW11bSBsZW5ndGggb2YgdGhlIHBhc3N3b3JkIHNob3VsZCBiZSA4LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBOZXcgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJwYXNzd29yZCBjb25maXJtYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIG5hbWU9XCJwYXNzd29yZF9jb25maXJtYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZF9jb25maXJtYXRpb24nKSwgJ2hhdmVWYWx1ZSc6IGZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uIH1cIiB2LXZhbGlkYXRlPVwiJ2NvbmZpcm1lZDpwYXNzd29yZCdcIiBkYXRhLXZ2LWFzPVwicGFzc3dvcmQgY29uZmlybWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ3Bhc3N3b3JkX2NvbmZpcm1hdGlvbicpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdwYXNzd29yZF9jb25maXJtYXRpb24nKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwicHVsbC1sZWZ0IGJ0biBsaW5rMVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4IFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+IDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJGb3Jnb3RfcGFzc3dvcmRcIixcclxuICAgIGNvbXBvbmVudHM6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoaXMuJHJvdXRlLnF1ZXJ5LnRva2VuLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuJHJvdXRlLnF1ZXJ5LmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgYXRtOiB0aGlzLiRyb3V0ZS5xdWVyeS5hdG0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJlZm9yZUNyZWF0ZSgpIHsgXHJcbiAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvcGFzc3dvcmQvY2hlY2tUb2tlbicse1xyXG4gICAgICAgICAgICB0b2tlbjogdGhpcy4kcm91dGUucXVlcnkudG9rZW4sXHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLiRyb3V0ZS5xdWVyeS5lbWFpbFxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbG9naW4nKS5jYXRjaCgoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KSA7XHJcbiAgICB9LCBcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdXBkYXRlUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oYXN5bmMgKHZhbGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnJvcnMuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLmZwcmVmXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBvc3QoJy9hcGkvcGFzc3dvcmQvcmVzZXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkY29va2llcy5pc0tleSgnYW5jaF9yZW1lbWJlcl9tZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uZW1haWwgPT0gJGNvb2tpZXMuZ2V0KCdhbmNoX2xvZ19lbWFpbCcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29va2llcy5zZXQoXCJhbmNoX2xvZ19wYXNzXCIsIHRoaXMuZm9ybS5wYXNzd29yZCwgXCIzNDBkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2xvZ2luJykuY2F0Y2goKCkgPT4geyB9KTs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbnNlY3Rpb25fYmdcIiB9LCBbXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZHNlY3Rpb25cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctMTJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ29ib3gxXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly91bml0ZWRzY3JhcC5jb20vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnNldF9pbWFnZShcImltYWdlcy9sb2dvLnBuZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcImxvZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTIgY29sLWxnLTJcIiB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC00IGNvbC1sZy00XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJmcHJlZlwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dpbmJveFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBhdXRvY29tcGxldGU6IFwib2ZmXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVBhc3N3b3JkLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGtleWRvd246IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJSZXNldCBQYXNzd29yZFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJTZXQgWW91ciBQYXNzd29yZCBVU00gQ3VzdG9tZXIgUG9ydGFsIFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImVtYWlsXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZvcm0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtcGxhY2VtZW50XCI6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1haWxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlIGZvcm0tY29udHJvbC1mZWVkYmFja1wiLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiZW1haWxcIiB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvXig/PS4qW0EtWl0pKD89LipbMC05XSkoPz0uKlshQCNcXCQlXFxeJlxcKl0pKD89Lns4LH0pLiokLyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICBcInsgcmVxdWlyZWQ6IHRydWUsIG1pbjogOCwgcmVnZXg6IC9eKD89LipbQS1aXSkoPz0uKlswLTldKSg/PS4qWyFAI1xcXFwkJVxcXFxeJlxcXFwqXSkoPz0uezgsfSkuKiQvIH1cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICByZWY6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJwYXNzd29yZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS1wbGFjZW1lbnRcIjogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwicGFzc3dvcmRcIilcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBdCBsZWFzdCBvbmUgY2FwaXRhbCBsZXR0ZXIsIG9uZSBudW1iZXIgYW5kIG9uZSBzcGVjaWFsIGNoYXJhY3Rlci4gTWluaW11bSBsZW5ndGggb2YgdGhlIHBhc3N3b3JkIHNob3VsZCBiZSA4LlwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImNvbmZpcm1lZDpwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ2NvbmZpcm1lZDpwYXNzd29yZCdcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNvbmZpcm0gTmV3IFBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS1wbGFjZW1lbnRcIjogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwicGFzc3dvcmQgY29uZmlybWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcInBhc3N3b3JkIGNvbmZpcm1hdGlvblwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb24gfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXNzd29yZF9jb25maXJtYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICsgX3ZtLl9zKF92bS52ZXJyb3JzLmZpcnN0KFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9KSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0IGJ0biBsaW5rMVwiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSxcbiAgICAgICAgW192bS5fdihcIlN1Ym1pdFwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiIH0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRm9yZ290X3Bhc3N3b3JkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Y2ZiZjkxYyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Gb3Jnb3RfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Gb3Jnb3RfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3Y2ZiZjkxY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdjZmJmOTFjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdjZmJmOTFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdjZmJmOTFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Gb3Jnb3RfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjZmJmOTFjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdjZmJmOTFjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Gb3Jnb3RfcGFzc3dvcmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb3Jnb3RfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZvcmdvdF9wYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZvcmdvdF9wYXNzd29yZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2NmYmY5MWMmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9