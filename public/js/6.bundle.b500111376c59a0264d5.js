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
      cloaderd.hide();
      var th = _this;
      Swal.fire({
        title: 'The Link You Followed Has Expired'
      }).then(function (_ref) {
        var value = _ref.value;

        if (value) {
          th.$router.push('/login')["catch"](function () {});
        }
      });
    });
  },
  methods: {
    updatePassword: function updatePassword() {
      var _this2 = this;

      this.$validator.validateAll().then( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(valid) {
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
          return _ref2.apply(this, arguments);
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
  }, [_c("h1", [_vm._v("Set Password")]), _vm._v(" "), _c("h2", [_vm._v("Set Your Password USM Customer Portal ")]), _vm._v(" "), _c("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRm9yZ290X3Bhc3N3b3JkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Gb3Jnb3RfcGFzc3dvcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZvcmdvdF9wYXNzd29yZC52dWU/YjE2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Gb3Jnb3RfcGFzc3dvcmQudnVlPzEwYjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRm9yZ290X3Bhc3N3b3JkLnZ1ZT9lZWJiIl0sIm5hbWVzIjpbIm5hbWUiLCJjb21wb25lbnRzIiwiZGF0YSIsImZvcm0iLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJwYXNzd29yZCIsInRva2VuIiwiZW1haWwiLCJhdG0iLCJiZWZvcmVDcmVhdGUiLCJheGlvcyIsInRoZW4iLCJjbG9hZGVyZCIsIlN3YWwiLCJ0aXRsZSIsInRoIiwibWV0aG9kcyIsInVwZGF0ZVBhc3N3b3JkIiwiY29udGFpbmVyIiwiVG9hc3QiLCJpY29uIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJocmVmIiwidGFyZ2V0Iiwic3JjIiwic2V0X2ltYWdlIiwiYWx0IiwiX3YiLCJyZWYiLCJhdXRvY29tcGxldGUiLCJvbiIsInN1Ym1pdCIsIiRldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJrZXlkb3duIiwib25LZXlkb3duIiwiZGlyZWN0aXZlcyIsInJhd05hbWUiLCJ2YWx1ZSIsImV4cHJlc3Npb24iLCJlcnJvciIsImVycm9ycyIsImhhcyIsImhhdmVWYWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwiZG9tUHJvcHMiLCJpbnB1dCIsImNvbXBvc2luZyIsIiRzZXQiLCJmaWVsZCIsInJlcXVpcmVkIiwibWluIiwicmVnZXgiLCJ2ZXJyb3JzIiwiX2UiLCJfcyIsImZpcnN0IiwiX20iLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRlO0VBQ2ZBLHVCQURBO0VBRUFDLGNBRkE7RUFLQUMsSUFMQSxrQkFLQTtJQUNBO01BQ0FDO1FBQ0FDLHlCQURBO1FBRUFDLFlBRkE7UUFHQUMsOEJBSEE7UUFJQUMsOEJBSkE7UUFLQUM7TUFMQTtJQURBO0VBU0EsQ0FmQTtFQWdCQUMsWUFoQkEsMEJBZ0JBO0lBQUE7O0lBQ0E7SUFDQUM7TUFDQUosOEJBREE7TUFFQUM7SUFGQSxHQUlBSSxJQUpBLENBSUE7TUFDQUM7SUFDQSxDQU5BLFdBT0E7TUFFQUE7TUFFQTtNQUNBQztRQUNBQztNQURBLEdBRUFILElBRkEsQ0FFQTtRQUFBOztRQUNBO1VBQ0FJO1FBQ0E7TUFDQSxDQU5BO0lBU0EsQ0FyQkE7RUFzQkEsQ0F4Q0E7RUEwQ0FDO0lBQ0FDLGNBREEsNEJBQ0E7TUFBQTs7TUFDQTtRQUFBO1VBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7a0JBQ0E7b0JBQ0E7O29CQUVBTCxRQUhBLEdBR0E7c0JBQ0FNO29CQURBLEVBSEE7O29CQU1BLHdDQUNBUCxJQURBLENBQ0E7c0JBQ0E7d0JBQ0E7MEJBQ0EseURBQ0E7d0JBQ0E7O3dCQUVBOzt3QkFBQTtzQkFDQTs7c0JBQ0FDO3NCQUNBTzt3QkFDQUMsZUFEQTt3QkFFQU47c0JBRkE7b0JBSUEsQ0FmQTtrQkFnQkE7O2dCQXZCQTtnQkFBQTtrQkFBQTtjQUFBO1lBQUE7VUFBQTtRQUFBOztRQUFBO1VBQUE7UUFBQTtNQUFBO0lBMkJBO0VBN0JBO0FBMUNBLEc7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQSxJQUFJTyxNQUFNLEdBQUcsU0FBU0EsTUFBVCxHQUFrQjtFQUM3QixJQUFJQyxHQUFHLEdBQUcsSUFBVjtFQUFBLElBQ0VDLEVBQUUsR0FBR0QsR0FBRyxD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QzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQStMLENBQWdCLDJQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQW5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy82LmJ1bmRsZS5iNTAwMTExMzc2YzU5YTAyNjRkNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwibG9naW5zZWN0aW9uX2JnXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJoZWFkc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb2JveDFcIj48YSBocmVmPVwiaHR0cHM6Ly91bml0ZWRzY3JhcC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cInNldF9pbWFnZSgnaW1hZ2VzL2xvZ28ucG5nJylcIiBhbHQ9XCJsb2dvXCI+PC9hPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTIgY29sLWxnLTJcIj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwibG9naW5ib3hcIiBAc3VibWl0LnByZXZlbnQ9XCJ1cGRhdGVQYXNzd29yZFwiIEBrZXlkb3duPVwiZm9ybS5vbktleWRvd24oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHJlZj1cImZwcmVmXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5TZXQgUGFzc3dvcmQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+U2V0IFlvdXIgUGFzc3dvcmQgVVNNIEN1c3RvbWVyIFBvcnRhbCA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJlbWFpbFwiIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCIgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygnZW1haWwnKSwgJ2hhdmVWYWx1ZSc6IGZvcm0uZW1haWwgfVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlIGZvcm0tY29udHJvbC1mZWVkYmFja1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJlbWFpbFwiIGNsYXNzPVwiZXJyb3Jtc2dcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGhhcy1mZWVkYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpLCAnaGF2ZVZhbHVlJzogZm9ybS5wYXNzd29yZCB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwieyByZXF1aXJlZDogdHJ1ZSwgbWluOiA4LCByZWdleDogL14oPz0uKltBLVpdKSg/PS4qWzAtOV0pKD89LipbIUAjXFwkJVxcXiZcXCpdKSg/PS57OCx9KS4qJC8gfVwiIHJlZj1cInBhc3N3b3JkXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygncGFzc3dvcmQnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj5BdCBsZWFzdCBvbmUgY2FwaXRhbCBsZXR0ZXIsIG9uZSBudW1iZXIgYW5kIG9uZSBzcGVjaWFsIGNoYXJhY3Rlci4gTWluaW11bSBsZW5ndGggb2YgdGhlIHBhc3N3b3JkIHNob3VsZCBiZSA4LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBOZXcgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJwYXNzd29yZCBjb25maXJtYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIG5hbWU9XCJwYXNzd29yZF9jb25maXJtYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZF9jb25maXJtYXRpb24nKSwgJ2hhdmVWYWx1ZSc6IGZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uIH1cIiB2LXZhbGlkYXRlPVwiJ2NvbmZpcm1lZDpwYXNzd29yZCdcIiBkYXRhLXZ2LWFzPVwicGFzc3dvcmQgY29uZmlybWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ3Bhc3N3b3JkX2NvbmZpcm1hdGlvbicpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdwYXNzd29yZF9jb25maXJtYXRpb24nKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwicHVsbC1sZWZ0IGJ0biBsaW5rMVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4IFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+IDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJGb3Jnb3RfcGFzc3dvcmRcIixcclxuICAgIGNvbXBvbmVudHM6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoaXMuJHJvdXRlLnF1ZXJ5LnRva2VuLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuJHJvdXRlLnF1ZXJ5LmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgYXRtOiB0aGlzLiRyb3V0ZS5xdWVyeS5hdG0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJlZm9yZUNyZWF0ZSgpIHsgXHJcbiAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvcGFzc3dvcmQvY2hlY2tUb2tlbicse1xyXG4gICAgICAgICAgICB0b2tlbjogdGhpcy4kcm91dGUucXVlcnkudG9rZW4sXHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLiRyb3V0ZS5xdWVyeS5lbWFpbFxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRoPXRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUaGUgTGluayBZb3UgRm9sbG93ZWQgSGFzIEV4cGlyZWQnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHt2YWx1ZX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGguJHJvdXRlci5wdXNoKCcvbG9naW4nKS5jYXRjaCgoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSkgO1xyXG4gICAgfSwgXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHVwZGF0ZVBhc3N3b3JkKCkge1xyXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKGFzeW5jICh2YWxpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJyb3JzLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5mcHJlZlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wb3N0KCcvYXBpL3Bhc3N3b3JkL3Jlc2V0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGNvb2tpZXMuaXNLZXkoJ2FuY2hfcmVtZW1iZXJfbWUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLmVtYWlsID09ICRjb29raWVzLmdldCgnYW5jaF9sb2dfZW1haWwnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGNvb2tpZXMuc2V0KFwiYW5jaF9sb2dfcGFzc1wiLCB0aGlzLmZvcm0ucGFzc3dvcmQsIFwiMzQwZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9sb2dpbicpLmNhdGNoKCgpID0+IHsgfSk7O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5zZWN0aW9uX2JnXCIgfSwgW1xuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRzZWN0aW9uXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dvYm94MVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vdW5pdGVkc2NyYXAuY29tL1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5zZXRfaW1hZ2UoXCJpbWFnZXMvbG9nby5wbmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJsb2dvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0yIGNvbC1sZy0yXCIgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNCBjb2wtbGctNFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwiZnByZWZcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9naW5ib3hcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgYXV0b2NvbXBsZXRlOiBcIm9mZlwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVQYXNzd29yZC5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZvcm0ub25LZXlkb3duKCRldmVudClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiU2V0IFBhc3N3b3JkXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIlNldCBZb3VyIFBhc3N3b3JkIFVTTSBDdXN0b21lciBQb3J0YWwgXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIGhhcy1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1wbGFjZW1lbnRcIjogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmVtYWlsIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcImdseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGUgZm9ybS1jb250cm9sLWZlZWRiYWNrXCIsXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIGhhcy1mZWVkYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC9eKD89LipbQS1aXSkoPz0uKlswLTldKSg/PS4qWyFAI1xcJCVcXF4mXFwqXSkoPz0uezgsfSkuKiQvLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieyByZXF1aXJlZDogdHJ1ZSwgbWluOiA4LCByZWdleDogL14oPz0uKltBLVpdKSg/PS4qWzAtOV0pKD89LipbIUAjXFxcXCQlXFxcXF4mXFxcXCpdKSg/PS57OCx9KS4qJC8gfVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInBhc3N3b3JkXCIpLFxuICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXBsYWNlbWVudFwiOiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJwYXNzd29yZFwiKVxuICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkF0IGxlYXN0IG9uZSBjYXBpdGFsIGxldHRlciwgb25lIG51bWJlciBhbmQgb25lIHNwZWNpYWwgY2hhcmFjdGVyLiBNaW5pbXVtIGxlbmd0aCBvZiB0aGUgcGFzc3dvcmQgc2hvdWxkIGJlIDguXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiY29uZmlybWVkOnBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCInY29uZmlybWVkOnBhc3N3b3JkJ1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ29uZmlybSBOZXcgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXBsYWNlbWVudFwiOiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJwYXNzd29yZCBjb25maXJtYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZF9jb25maXJtYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwicGFzc3dvcmQgY29uZmlybWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIilcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIikpXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiIH0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnQgYnRuIGxpbmsxXCIsIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LFxuICAgICAgICBbX3ZtLl92KFwiU3VibWl0XCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Gb3Jnb3RfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjZmJmOTFjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZvcmdvdF9wYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZvcmdvdF9wYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdjZmJmOTFjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2NmYmY5MWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2NmYmY5MWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2NmYmY5MWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZvcmdvdF9wYXNzd29yZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2NmYmY5MWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2NmYmY5MWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZvcmdvdF9wYXNzd29yZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZvcmdvdF9wYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9yZ290X3Bhc3N3b3JkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9yZ290X3Bhc3N3b3JkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Y2ZiZjkxYyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=