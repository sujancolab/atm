(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotes/AddEdit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotes/AddEdit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
      user_id: 2,
      view_mode: false,
      editmode: false,
      products: [],
      step: 1,
      frm_quotes: new Form({
        created_by: this.user_id,
        name: '',
        organization: '',
        email: '',
        phone: '',
        address_1: '',
        city: '',
        state: '',
        zip_code: '',
        pickup_address_1: '',
        pickup_address_2: '',
        pickup_city: '',
        pickup_state: '',
        pickup_zip_code: '',
        additional_information: '',
        scrap_material_picture: null,
        scrap_material_picture_url: null,
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
                  product_id: '',
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
    submit_quote: function submit_quote() {
      var _this3 = this;

      this.$validator.validateAll('frmStep1').then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(valid) {
          var cloaderd;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (valid) {
                    cloaderd = _this3.$loading.show({
                      container: _this3.$refs.ref_load_quotes
                    });

                    _this3.frm_quotes.post('api/quotes').then(function (data) {
                      cloaderd.hide();
                      _this3.frm_quotes.id = data.data.data.id;
                      _this3.frm_quotes.material = [];

                      _this3.addInfo();

                      Toast.fire({
                        icon: 'success',
                        title: data.message
                      });
                    })["catch"](function () {
                      cloaderd.hide();
                    });
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
    },
    check: function check(e) {
      var _this4 = this;

      this.$nextTick(function () {
        if (e.target.checked == true) {
          _this4.frm_quotes.pickup_address_1 = _this4.frm_quotes.address_1;
          _this4.frm_quotes.pickup_city = _this4.frm_quotes.city;
          _this4.frm_quotes.pickup_state = _this4.frm_quotes.state;
          _this4.frm_quotes.pickup_zip_code = _this4.frm_quotes.zip_code;
        } else {
          _this4.frm_quotes.pickup_address_1 = '';
          _this4.frm_quotes.pickup_city = '';
          _this4.frm_quotes.pickup_state = '';
          _this4.frm_quotes.pickup_zip_code = '';
        }
      });
    },
    onFileChange: function onFileChange(e) {
      var file = e.target.files[0];
      this.scrap_material_picture = file;
      this.frm_quotes.scrap_material_picture_url = URL.createObjectURL(file);
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    var cloaderd = this.$loading.show({
      container: this.$refs.ref_load_quotes
    });
    axios.get("api/user/" + this.user_id).then(function (res) {
      console.log(res);
      _this5.frm_quotes.name = res.data.data.name;
      _this5.frm_quotes.organization = res.data.data.organization;
      _this5.frm_quotes.email = res.data.data.email;
      _this5.frm_quotes.phone = res.data.data.phone;
      _this5.frm_quotes.address_1 = res.data.data.address_1;
      _this5.frm_quotes.city = res.data.data.city;
      _this5.frm_quotes.state = res.data.data.state;
      _this5.frm_quotes.zip_code = res.data.data.zip_code;
      cloaderd.hide();
    })["catch"](function () {
      cloaderd.hide();
    });
  },
  created: function created() {
    this.step = 1;
    this.$Progress.start();
    this.view_mode = false;
    this.addInfo();
    this.$Progress.finish();
  },
  watch: {}
});

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
  var _class, _class2, _class3, _class4, _class5, _class6, _class7, _class8, _class9, _class10, _class11, _class12;

  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_vm._m(0), _vm._v(" "), _c("section", {
    ref: "ref_load_quotes",
    staticClass: "content vld-parent"
  }, [_c("form", {
    attrs: {
      "data-vv-scope": "frmStep1"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit_quote("submit");
      }
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_quotes.name,
      expression: "frm_quotes.name"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class = {
      error: _vm.errors.name
    }, _defineProperty(_class, "error", _vm.verrors.has("name")), _defineProperty(_class, "haveValue", _vm.frm_quotes.name), _class),
    attrs: {
      type: "text",
      placeholder: "Enter Name ...",
      "data-vv-name": "name"
    },
    domProps: {
      value: _vm.frm_quotes.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_quotes, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.name") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.name")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Company Name ")]), _vm._v(" "), _c("input", {
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
    "class": (_class2 = {
      error: _vm.errors.organization
    }, _defineProperty(_class2, "error", _vm.verrors.has("organization")), _defineProperty(_class2, "haveValue", _vm.frm_quotes.organization), _class2),
    attrs: {
      type: "text",
      placeholder: "Enter Company ...",
      "data-vv-name": "organization"
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
    staticClass: "clearfix"
  }), _vm._v(" "), _c("div", {
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
    "class": (_class3 = {
      error: _vm.errors.email
    }, _defineProperty(_class3, "error", _vm.verrors.has("email")), _defineProperty(_class3, "haveValue", _vm.frm_quotes.email), _class3),
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
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Contact Number")]), _vm._v(" "), _c("input", {
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
    "class": (_class4 = {
      error: _vm.errors.phone
    }, _defineProperty(_class4, "error", _vm.verrors.has("phone")), _defineProperty(_class4, "haveValue", _vm.frm_quotes.phone), _class4),
    attrs: {
      type: "text",
      placeholder: "Enter Phone ...",
      "data-vv-name": "phone",
      "data-vv-scope": "frmStep1",
      "data-vv-as": "phone no"
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
    staticClass: "clearfix"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Address")]), _vm._v(" "), _c("input", {
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
    "class": (_class5 = {
      error: _vm.errors.address_1
    }, _defineProperty(_class5, "error", _vm.verrors.has("address_1")), _defineProperty(_class5, "haveValue", _vm.frm_quotes.address_1), _class5),
    attrs: {
      type: "text",
      placeholder: "Enter Address ...",
      "data-vv-name": "address_1",
      "data-vv-scope": "frmStep1",
      "data-vv-as": "address 1"
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
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.address_1")) + "\n                ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("City")]), _vm._v(" "), _c("input", {
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
    "class": (_class6 = {
      error: _vm.errors.city
    }, _defineProperty(_class6, "error", _vm.verrors.has("city")), _defineProperty(_class6, "haveValue", _vm.frm_quotes.city), _class6),
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
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.city")) + "\n                ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("State")]), _vm._v(" "), _c("input", {
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
    "class": (_class7 = {
      error: _vm.errors.state
    }, _defineProperty(_class7, "error", _vm.verrors.has("state")), _defineProperty(_class7, "haveValue", _vm.frm_quotes.state), _class7),
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
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.state")) + "\n                ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Zip Code")]), _vm._v(" "), _c("input", {
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
    "class": (_class8 = {
      error: _vm.errors.zip_code
    }, _defineProperty(_class8, "error", _vm.verrors.has("zip_code")), _defineProperty(_class8, "haveValue", _vm.frm_quotes.zip_code), _class8),
    attrs: {
      type: "text",
      placeholder: "Enter ZIP ...",
      "data-vv-as": "zip code",
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
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.zip_code")) + "\n                ")]) : _vm._e()])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "box-header with-border"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "pull-right"
  }, [_c("input", {
    attrs: {
      type: "checkbox"
    },
    on: {
      change: function change($event) {
        return _vm.check($event);
      }
    }
  }), _vm._v(" Same as office\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Address 1")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_quotes.pickup_address_1,
      expression: "frm_quotes.pickup_address_1"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class9 = {
      error: _vm.errors.pickup_address_1
    }, _defineProperty(_class9, "error", _vm.verrors.has("pickup_address_1")), _defineProperty(_class9, "haveValue", _vm.frm_quotes.pickup_address_1), _class9),
    attrs: {
      type: "text",
      placeholder: "Enter address ...",
      "data-vv-as": "pickup address 1",
      "data-vv-name": "pickup_address_1",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_quotes.pickup_address_1
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_quotes, "pickup_address_1", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.pickup_address_1") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.pickup_address_1")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Address 2")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_quotes.pickup_address_2,
      expression: "frm_quotes.pickup_address_2"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Enter address ..."
    },
    domProps: {
      value: _vm.frm_quotes.pickup_address_2
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_quotes, "pickup_address_2", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("City")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_quotes.pickup_city,
      expression: "frm_quotes.pickup_city"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class10 = {
      error: _vm.errors.pickup_city
    }, _defineProperty(_class10, "error", _vm.verrors.has("pickup_city")), _defineProperty(_class10, "haveValue", _vm.frm_quotes.pickup_city), _class10),
    attrs: {
      type: "text",
      placeholder: "Enter City ...",
      "data-vv-name": "pickup_city",
      "data-vv-scope": "frmStep1",
      "data-vv-as": "pickup city"
    },
    domProps: {
      value: _vm.frm_quotes.pickup_city
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_quotes, "pickup_city", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.pickup_city") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.pickup_city")) + "\n                ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("State")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_quotes.pickup_state,
      expression: "frm_quotes.pickup_state"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class11 = {
      error: _vm.errors.pickup_state
    }, _defineProperty(_class11, "error", _vm.verrors.has("pickup_state")), _defineProperty(_class11, "haveValue", _vm.frm_quotes.pickup_state), _class11),
    attrs: {
      type: "text",
      placeholder: "Enter State ...",
      "data-vv-name": "pickup_state",
      "data-vv-scope": "frmStep1",
      "data-vv-as": "pickup state"
    },
    domProps: {
      value: _vm.frm_quotes.pickup_state
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_quotes, "pickup_state", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.pickup_state") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.pickup_state")) + "\n                ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v("Zip Code")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_quotes.pickup_zip_code,
      expression: "frm_quotes.pickup_zip_code"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class12 = {
      error: _vm.errors.pickup_zip_code
    }, _defineProperty(_class12, "error", _vm.verrors.has("zip_code")), _defineProperty(_class12, "haveValue", _vm.frm_quotes.pickup_zip_code), _class12),
    attrs: {
      type: "text",
      placeholder: "Enter ZIP ...",
      "data-vv-name": "pickup_zip_code",
      "data-vv-scope": "frmStep1",
      "data-vv-as": "pickup zip code"
    },
    domProps: {
      value: _vm.frm_quotes.pickup_zip_code
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_quotes, "pickup_zip_code", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.pickup_zip_code") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.pickup_zip_code")) + "\n                ")]) : _vm._e()])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "tablesection"
  }, [_c("div", {}, [_c("table", {
    staticClass: "table table-striped table-hover"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", _vm._l(_vm.frm_quotes.material, function (item, ix) {
    var _class13;

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
      "class": (_class13 = {
        error: _vm.errors.state
      }, _defineProperty(_class13, "error", _vm.verrors.has("products")), _defineProperty(_class13, "haveValue", _vm.frm_quotes.products), _class13),
      attrs: {
        label: "name",
        reduce: function reduce(option) {
          return option.name;
        },
        options: _vm.products,
        placeholder: "Search Product ...",
        name: "product_id" + ix,
        "data-vv-as": "product",
        "data-vv-scope": "frmStep1"
      },
      model: {
        value: item.product_id,
        callback: function callback($$v) {
          _vm.$set(item, "product_id", $$v);
        },
        expression: "item.product_id"
      }
    }), _vm._v(" "), _vm.verrors.has("frmStep1.product_id" + ix) ? _c("p", {
      staticClass: "errormsg"
    }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.product_id" + ix)))]) : _vm._e()], 1), _vm._v(" "), _c("td", [_c("input", {
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
  }), 0)])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Additional Information")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_quotes.additional_information,
      expression: "frm_quotes.additional_information"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "Enter Additional Information"
    },
    domProps: {
      value: _vm.frm_quotes.additional_information
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_quotes, "additional_information", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Attach scrap metal pictures (If Any)")]), _vm._v(" "), _c("input", {
    attrs: {
      type: "file",
      accept: "image/*"
    },
    on: {
      change: _vm.onFileChange
    }
  })])])])])]), _vm._v(" "), _vm._m(5)])])]);
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
    staticClass: "pull-left"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("Pickup Location")])]);
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
    staticClass: "card box-success"
  }, [_c("div", {
    staticClass: "box-footer"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn link1 mx-1",
    attrs: {
      type: "submit"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcXVvdGVzL0FkZEVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3F1b3Rlcy9BZGRFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/NzdmOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/MDFhNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/NDI0OSJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsInVzZXJfaWQiLCJ2aWV3X21vZGUiLCJlZGl0bW9kZSIsInByb2R1Y3RzIiwic3RlcCIsImZybV9xdW90ZXMiLCJjcmVhdGVkX2J5Iiwib3JnYW5pemF0aW9uIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3NfMSIsImNpdHkiLCJzdGF0ZSIsInppcF9jb2RlIiwicGlja3VwX2FkZHJlc3NfMSIsInBpY2t1cF9hZGRyZXNzXzIiLCJwaWNrdXBfY2l0eSIsInBpY2t1cF9zdGF0ZSIsInBpY2t1cF96aXBfY29kZSIsImFkZGl0aW9uYWxfaW5mb3JtYXRpb24iLCJzY3JhcF9tYXRlcmlhbF9waWN0dXJlIiwic2NyYXBfbWF0ZXJpYWxfcGljdHVyZV91cmwiLCJtYXRlcmlhbCIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsImJlZm9yZUNyZWF0ZSIsImF4aW9zIiwidGhlbiIsIm1ldGhvZHMiLCJhZGRJbmZvIiwiaWQiLCJwcm9kdWN0X2lkIiwid2VpZ2h0Iiwic3VibWl0X3F1b3RlIiwiY2xvYWRlcmQiLCJjb250YWluZXIiLCJUb2FzdCIsImljb24iLCJ0aXRsZSIsImNoZWNrIiwiZSIsIm9uRmlsZUNoYW5nZSIsIm1vdW50ZWQiLCJjb25zb2xlIiwiY3JlYXRlZCIsIndhdGNoIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsIl9tIiwiX3YiLCJyZWYiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwib24iLCJzdWJtaXQiLCIkZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwidmFsdWUiLCJleHByZXNzaW9uIiwiZXJyb3IiLCJlcnJvcnMiLCJ2ZXJyb3JzIiwiaGFzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZG9tUHJvcHMiLCJpbnB1dCIsInRhcmdldCIsImNvbXBvc2luZyIsIiRzZXQiLCJfcyIsImZpcnN0IiwiX2UiLCJjaGFuZ2UiLCJfbCIsIml0ZW0iLCJpeCIsImtleSIsImFsaWduIiwibGFiZWwiLCJyZWR1Y2UiLCJvcHRpb24iLCJvcHRpb25zIiwibW9kZWwiLCJjYWxsYmFjayIsIiQkdiIsImNsaWNrIiwic3BsaWNlIiwibGVuZ3RoIiwiYWNjZXB0Iiwic3RhdGljUmVuZGVyRm5zIiwic3RhdGljU3R5bGUiLCJ3aWR0aCIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OytDQThQQSxvSjs7Ozs7Ozs7Ozs7O0FBQUE7QUFHZTtFQUNmQSxxQkFEQTtFQUVBQyxJQUZBLGtCQUVBO0lBQ0E7TUFDQUMsVUFEQTtNQUVBQyxnQkFGQTtNQUdBQyxlQUhBO01BSUFDLFlBSkE7TUFLQUMsT0FMQTtNQU1BQztRQUNBQyx3QkFEQTtRQUVBUixRQUZBO1FBR0FTLGdCQUhBO1FBSUFDLFNBSkE7UUFLQUMsU0FMQTtRQU1BQyxhQU5BO1FBT0FDLFFBUEE7UUFRQUMsU0FSQTtRQVNBQyxZQVRBO1FBVUFDLG9CQVZBO1FBV0FDLG9CQVhBO1FBWUFDLGVBWkE7UUFhQUMsZ0JBYkE7UUFjQUMsbUJBZEE7UUFlQUMsMEJBZkE7UUFnQkFDLDRCQWhCQTtRQWlCQUMsZ0NBakJBO1FBa0JBQztNQWxCQTtJQU5BO0VBMkJBLENBOUJBO0VBK0JBQyw0QkFDQUMsbUVBREEsQ0EvQkE7RUFrQ0FDLFlBbENBLDBCQWtDQTtJQUFBOztJQUNB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QUcsR0FBRyxJQUFWO0VBQUEsSUFDRUMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVUQsRUFEakI7O0VBRUEsT0FBT0EsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQTZDLENBQ3BETCxFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVLLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBdUMsQ0FDdkNMLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUssV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUF3QyxDQUN4Q0wsRUFBRSxDQUNBLFFBREEsRUFFQTtJQUFFSyxXQUFXLEVBQUUsZ0JBQWY7SUFBaUNDLEtBQUssRUFBRTtNQUFFYSxJQUFJLEVBQUU7SUFBUjtFQUF4QyxDQUZBLEVBR0EsQ0FBQ3BCLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFdBQVAsQ0FBRCxDQUhBLENBRHNDLENBQXhDLENBRHFDLENBQXZDLENBRGtELENBQTdDLENBQVQ7QUFXRCxDQWxFbUIsQ0FBdEI7QUFvRUFMLE1BQU0sQ0FBQ21ELGFBQVAsR0FBdUIsSUFBdkI7Ozs7Ozs7Ozs7Ozs7QUNscENBO0FBQUE7QUFBQTtBQUFBO0FBQXNGO0FBQzNCO0FBQ0w7OztBQUd0RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUE2TCxDQUFnQixtUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FqTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNS5idW5kbGUuYTYzNjY2MjRjYWYxODUyYzZjNWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cclxuICAgICAgPGgxPkdldCBhIFF1b3RlPC9oMT5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudCB2bGQtcGFyZW50XCIgcmVmPVwicmVmX2xvYWRfcXVvdGVzXCI+XHJcbiAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdF9xdW90ZSgnc3VibWl0JylcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlVzZXIgPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5IFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOYW1lIC4uLlwiIHYtbW9kZWw9XCJmcm1fcXVvdGVzLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1uYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMubmFtZSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ25hbWUnKSwgJ2hhdmVWYWx1ZSc6IGZybV9xdW90ZXMubmFtZSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEubmFtZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEubmFtZScpXHJcbiAgICAgICAgICAgICAgICAgIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+Q29tcGFueSBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDb21wYW55IC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZybV9xdW90ZXMub3JnYW5pemF0aW9uXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LW5hbWU9XCJvcmdhbml6YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLm9yZ2FuaXphdGlvbiwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ29yZ2FuaXphdGlvbicpLCAnaGF2ZVZhbHVlJzogZnJtX3F1b3Rlcy5vcmdhbml6YXRpb24gfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLm9yZ2FuaXphdGlvbicpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEub3JnYW5pemF0aW9uJylcclxuICAgICAgICAgICAgICAgICAgfX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5Xb3JrIEVtYWlsIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbCAuLi5cIiB2LW1vZGVsPVwiZnJtX3F1b3Rlcy5lbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZHxlbWFpbCdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLmVtYWlsLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnZW1haWwnKSwgJ2hhdmVWYWx1ZSc6IGZybV9xdW90ZXMuZW1haWwgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiZW1haWxcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5lbWFpbCcpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5lbWFpbCcpIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+Q29udGFjdCBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGhvbmUgLi4uXCIgdi1tb2RlbD1cImZybV9xdW90ZXMucGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1uYW1lPVwicGhvbmVcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIiBkYXRhLXZ2LWFzPVwicGhvbmUgbm9cIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLnBob25lLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygncGhvbmUnKSwgJ2hhdmVWYWx1ZSc6IGZybV9xdW90ZXMucGhvbmUgfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLnBob25lJylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLnBob25lJykgfX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5BZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFkZHJlc3MgLi4uXCIgdi1tb2RlbD1cImZybV9xdW90ZXMuYWRkcmVzc18xXCJcclxuICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIGRhdGEtdnYtbmFtZT1cImFkZHJlc3NfMVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiIGRhdGEtdnYtYXM9XCJhZGRyZXNzIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLmFkZHJlc3NfMSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ2FkZHJlc3NfMScpLCAnaGF2ZVZhbHVlJzogZnJtX3F1b3Rlcy5hZGRyZXNzXzEgfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLmFkZHJlc3NfMScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5hZGRyZXNzXzEnKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIENpdHkgLi4uXCIgdi1tb2RlbD1cImZybV9xdW90ZXMuY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LW5hbWU9XCJjaXR5XCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5jaXR5LCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnY2l0eScpLCAnaGF2ZVZhbHVlJzogZnJtX3F1b3Rlcy5jaXR5IH1cIj5cclxuICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5jaXR5JylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLmNpdHknKSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5TdGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBTdGF0ZSAuLi5cIiB2LW1vZGVsPVwiZnJtX3F1b3Rlcy5zdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLnN0YXRlLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnc3RhdGUnKSwgJ2hhdmVWYWx1ZSc6IGZybV9xdW90ZXMuc3RhdGUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwic3RhdGVcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5zdGF0ZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5zdGF0ZScpIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPlppcCBDb2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFpJUCAuLi5cIiB2LW1vZGVsPVwiZnJtX3F1b3Rlcy56aXBfY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwiemlwIGNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLnppcF9jb2RlLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnemlwX2NvZGUnKSwgJ2hhdmVWYWx1ZSc6IGZybV9xdW90ZXMuemlwX2NvZGUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiemlwX2NvZGVcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS56aXBfY29kZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS56aXBfY29kZScpIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlBpY2t1cCBMb2NhdGlvbjwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBAY2hhbmdlPVwiY2hlY2soJGV2ZW50KVwiPiBTYW1lIGFzIG9mZmljZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keSBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPkFkZHJlc3MgMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBhZGRyZXNzIC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZybV9xdW90ZXMucGlja3VwX2FkZHJlc3NfMVwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1hcz1cInBpY2t1cCBhZGRyZXNzIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLnBpY2t1cF9hZGRyZXNzXzEsICdlcnJvcic6IHZlcnJvcnMuaGFzKCdwaWNrdXBfYWRkcmVzc18xJyksICdoYXZlVmFsdWUnOiBmcm1fcXVvdGVzLnBpY2t1cF9hZGRyZXNzXzEgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwicGlja3VwX2FkZHJlc3NfMVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLnBpY2t1cF9hZGRyZXNzXzEnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3tcclxuICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLnBpY2t1cF9hZGRyZXNzXzEnKVxyXG4gICAgICAgICAgICAgICAgICB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzcyAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGFkZHJlc3MgLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZnJtX3F1b3Rlcy5waWNrdXBfYWRkcmVzc18yXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIENpdHkgLi4uXCIgdi1tb2RlbD1cImZybV9xdW90ZXMucGlja3VwX2NpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5waWNrdXBfY2l0eSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3BpY2t1cF9jaXR5JyksICdoYXZlVmFsdWUnOiBmcm1fcXVvdGVzLnBpY2t1cF9jaXR5IH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cInBpY2t1cF9jaXR5XCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCIgZGF0YS12di1hcz1cInBpY2t1cCBjaXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEucGlja3VwX2NpdHknKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3tcclxuICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLnBpY2t1cF9jaXR5JylcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+U3RhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgU3RhdGUgLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZnJtX3F1b3Rlcy5waWNrdXBfc3RhdGVcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMucGlja3VwX3N0YXRlLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygncGlja3VwX3N0YXRlJyksICdoYXZlVmFsdWUnOiBmcm1fcXVvdGVzLnBpY2t1cF9zdGF0ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJwaWNrdXBfc3RhdGVcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIiBkYXRhLXZ2LWFzPVwicGlja3VwIHN0YXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEucGlja3VwX3N0YXRlJylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5waWNrdXBfc3RhdGUnKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5aaXAgQ29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBaSVAgLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZnJtX3F1b3Rlcy5waWNrdXBfemlwX2NvZGVcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMucGlja3VwX3ppcF9jb2RlLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnemlwX2NvZGUnKSwgJ2hhdmVWYWx1ZSc6IGZybV9xdW90ZXMucGlja3VwX3ppcF9jb2RlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cInBpY2t1cF96aXBfY29kZVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiIGRhdGEtdnYtYXM9XCJwaWNrdXAgemlwIGNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5waWNrdXBfemlwX2NvZGUnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3tcclxuICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLnBpY2t1cF96aXBfY29kZScpXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGUgY2FyZC10ZXh0XCI+U2NyYXAgSW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIiB3aWR0aD1cIjcwXCI+U2wgTm8uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXRlcmlhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+V2VpZ2h0IChMQikgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjEwMFwiPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIihpdGVtLCBpeCkgaW4gZnJtX3F1b3Rlcy5tYXRlcmlhbFwiIDprZXk9XCIndXAnICsgaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPnt7IGl4ICsgMSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLm5hbWVcIiA6b3B0aW9ucz1cInByb2R1Y3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBQcm9kdWN0IC4uLlwiIHYtbW9kZWw9XCJpdGVtLnByb2R1Y3RfaWRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMuc3RhdGUsICdlcnJvcic6IHZlcnJvcnMuaGFzKCdwcm9kdWN0cycpLCAnaGF2ZVZhbHVlJzogZnJtX3F1b3Rlcy5wcm9kdWN0cyB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cIidwcm9kdWN0X2lkJyArIGl4XCIgZGF0YS12di1hcz1cInByb2R1Y3RcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLnByb2R1Y3RfaWQnICsgaXgpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEucHJvZHVjdF9pZCcgKyBpeClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiaXRlbS53ZWlnaHRcIiB0eXBlPVwidGV4dFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cIid3ZWlnaHQnICsgaXhcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIiBkYXRhLXZ2LWFzPVwid2VpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS53ZWlnaHQnICsgaXgpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEud2VpZ2h0JyArIGl4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiB2LWlmPVwiaXggPiAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJmcm1fcXVvdGVzLm1hdGVyaWFsLnNwbGljZShpeCwgMSlcIj48aSBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHYtaWY9XCJmcm1fcXVvdGVzLm1hdGVyaWFsLmxlbmd0aCA9PSBpeCArIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImFkZEluZm8oKVwiPjxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZGl0aW9uYWwgSW5mb3JtYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmcm1fcXVvdGVzLmFkZGl0aW9uYWxfaW5mb3JtYXRpb25cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5BdHRhY2ggc2NyYXAgbWV0YWwgcGljdHVyZXMgKElmIEFueSk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgQGNoYW5nZT1cIm9uRmlsZUNoYW5nZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gbGluazEgbXgtMVwiPkdldCBRdW90ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQge1xyXG4gIG1hcEdldHRlcnNcclxufSBmcm9tIFwidnVleFwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJRdW90ZXNBZGRFZGl0XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXJfaWQ6IDIsXHJcbiAgICAgIHZpZXdfbW9kZTogZmFsc2UsXHJcbiAgICAgIGVkaXRtb2RlOiBmYWxzZSxcclxuICAgICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgICBzdGVwOiAxLFxyXG4gICAgICBmcm1fcXVvdGVzOiBuZXcgRm9ybSh7XHJcbiAgICAgICAgY3JlYXRlZF9ieTogdGhpcy51c2VyX2lkLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIG9yZ2FuaXphdGlvbjogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICBhZGRyZXNzXzE6ICcnLFxyXG4gICAgICAgIGNpdHk6ICcnLFxyXG4gICAgICAgIHN0YXRlOiAnJyxcclxuICAgICAgICB6aXBfY29kZTogJycsXHJcbiAgICAgICAgcGlja3VwX2FkZHJlc3NfMTogJycsXHJcbiAgICAgICAgcGlja3VwX2FkZHJlc3NfMjogJycsXHJcbiAgICAgICAgcGlja3VwX2NpdHk6ICcnLFxyXG4gICAgICAgIHBpY2t1cF9zdGF0ZTogJycsXHJcbiAgICAgICAgcGlja3VwX3ppcF9jb2RlOiAnJyxcclxuICAgICAgICBhZGRpdGlvbmFsX2luZm9ybWF0aW9uOiAnJyxcclxuICAgICAgICBzY3JhcF9tYXRlcmlhbF9waWN0dXJlOiBudWxsLFxyXG4gICAgICAgIHNjcmFwX21hdGVyaWFsX3BpY3R1cmVfdXJsOiBudWxsLFxyXG4gICAgICAgIG1hdGVyaWFsOiBbXVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC4uLm1hcEdldHRlcnMoW1wiZXJyb3JzXCJdKVxyXG4gIH0sXHJcbiAgYmVmb3JlQ3JlYXRlKCkge1xyXG4gICAgYXhpb3MuZ2V0KFwiYXBpL2dldFByb2R1Y3RzXCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICB9KVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgYWRkSW5mbygpIHtcclxuICAgICAgdGhpcy5mcm1fcXVvdGVzLm1hdGVyaWFsLnB1c2goe1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBwcm9kdWN0X2lkOiAnJyxcclxuICAgICAgICB3ZWlnaHQ6ICcnLFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHN1Ym1pdF9xdW90ZSgpIHtcclxuICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCdmcm1TdGVwMScpLnRoZW4oYXN5bmMgKHZhbGlkKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xyXG4gICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfcXVvdGVzXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucG9zdCgnYXBpL3F1b3RlcycpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXHJcbiAgICAgICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLmlkID0gZGF0YS5kYXRhLmRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLm1hdGVyaWFsID0gW11cclxuICAgICAgICAgICAgICB0aGlzLmFkZEluZm8oKVxyXG5cclxuICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLm1lc3NhZ2VcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGNoZWNrKGUpIHtcclxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5waWNrdXBfYWRkcmVzc18xID0gdGhpcy5mcm1fcXVvdGVzLmFkZHJlc3NfMTtcclxuICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5waWNrdXBfY2l0eSA9IHRoaXMuZnJtX3F1b3Rlcy5jaXR5O1xyXG4gICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLnBpY2t1cF9zdGF0ZSA9IHRoaXMuZnJtX3F1b3Rlcy5zdGF0ZTtcclxuICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5waWNrdXBfemlwX2NvZGUgPSB0aGlzLmZybV9xdW90ZXMuemlwX2NvZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5waWNrdXBfYWRkcmVzc18xID0gJyc7XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucGlja3VwX2NpdHkgPSAnJztcclxuICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5waWNrdXBfc3RhdGUgPSAnJztcclxuICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5waWNrdXBfemlwX2NvZGUgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25GaWxlQ2hhbmdlKGUpIHtcclxuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICAgIHRoaXMuc2NyYXBfbWF0ZXJpYWxfcGljdHVyZSA9IGZpbGVcclxuICAgICAgdGhpcy5mcm1fcXVvdGVzLnNjcmFwX21hdGVyaWFsX3BpY3R1cmVfdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XHJcbiAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5yZWZfbG9hZF9xdW90ZXNcclxuICAgIH0pO1xyXG4gICAgYXhpb3MuZ2V0KFwiYXBpL3VzZXIvXCIgKyB0aGlzLnVzZXJfaWQpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5uYW1lID0gcmVzLmRhdGEuZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5vcmdhbml6YXRpb24gPSByZXMuZGF0YS5kYXRhLm9yZ2FuaXphdGlvbjtcclxuICAgICAgICB0aGlzLmZybV9xdW90ZXMuZW1haWwgPSByZXMuZGF0YS5kYXRhLmVtYWlsO1xyXG4gICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5waG9uZSA9IHJlcy5kYXRhLmRhdGEucGhvbmU7XHJcbiAgICAgICAgdGhpcy5mcm1fcXVvdGVzLmFkZHJlc3NfMSA9IHJlcy5kYXRhLmRhdGEuYWRkcmVzc18xO1xyXG4gICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5jaXR5ID0gcmVzLmRhdGEuZGF0YS5jaXR5O1xyXG4gICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5zdGF0ZSA9IHJlcy5kYXRhLmRhdGEuc3RhdGU7XHJcbiAgICAgICAgdGhpcy5mcm1fcXVvdGVzLnppcF9jb2RlID0gcmVzLmRhdGEuZGF0YS56aXBfY29kZTtcclxuICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xyXG4gICAgICB9KVxyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuc3RlcCA9IDFcclxuICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICB0aGlzLnZpZXdfbW9kZSA9IGZhbHNlXHJcbiAgICB0aGlzLmFkZEluZm8oKTtcclxuICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcInNlY3Rpb25cIixcbiAgICAgIHsgcmVmOiBcInJlZl9sb2FkX3F1b3Rlc1wiLCBzdGF0aWNDbGFzczogXCJjb250ZW50IHZsZC1wYXJlbnRcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0X3F1b3RlKFwic3VibWl0XCIpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBOYW1lIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV9xdW90ZXMubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcXVvdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5uYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICsgX3ZtLl9zKF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEubmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ29tcGFueSBOYW1lIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMub3JnYW5pemF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMub3JnYW5pemF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJvcmdhbml6YXRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5vcmdhbml6YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgQ29tcGFueSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcIm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV9xdW90ZXMub3JnYW5pemF0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV9xdW90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEub3JnYW5pemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLm9yZ2FuaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIldvcmsgRW1haWwgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5lbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZHxlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWR8ZW1haWwnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcImVtYWlsXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgRW1haWwgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcXVvdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEuZW1haWxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLmVtYWlsXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb250YWN0IE51bWJlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV9xdW90ZXMucGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJwaG9uZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fcXVvdGVzLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIFBob25lIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwicGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcInBob25lIG5vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5waG9uZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcXVvdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEucGhvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLnBob25lXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQWRkcmVzc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLmFkZHJlc3NfMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJhZGRyZXNzXzFcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5hZGRyZXNzXzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgQWRkcmVzcyAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImFkZHJlc3NfMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiYWRkcmVzcyAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5hZGRyZXNzXzEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3F1b3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzXzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5hZGRyZXNzXzFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEuYWRkcmVzc18xXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2l0eVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5jaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJjaXR5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMuY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBDaXR5IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5jaXR5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV9xdW90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLmNpdHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLmNpdHlcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTdGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV9xdW90ZXMuc3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJzdGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fcXVvdGVzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIFN0YXRlIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuc3RhdGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3F1b3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLnN0YXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS5zdGF0ZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlppcCBDb2RlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy56aXBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy56aXBfY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuemlwX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcInppcF9jb2RlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMuemlwX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgWklQIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcInppcCBjb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJ6aXBfY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy56aXBfY29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcXVvdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEuemlwX2NvZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEuemlwX2NvZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hlY2soJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBTYW1lIGFzIG9mZmljZVxcbiAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFkZHJlc3MgMVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMucGlja3VwX2FkZHJlc3NfMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5waWNrdXBfYWRkcmVzc18xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5waWNrdXBfYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJwaWNrdXBfYWRkcmVzc18xXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMucGlja3VwX2FkZHJlc3NfMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBhZGRyZXNzIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcInBpY2t1cCBhZGRyZXNzIDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInBpY2t1cF9hZGRyZXNzXzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV9xdW90ZXMucGlja3VwX2FkZHJlc3NfMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcXVvdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBpY2t1cF9hZGRyZXNzXzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5waWNrdXBfYWRkcmVzc18xXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm1TdGVwMS5waWNrdXBfYWRkcmVzc18xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJBZGRyZXNzIDJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fcXVvdGVzLnBpY2t1cF9hZGRyZXNzXzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV9xdW90ZXMucGlja3VwX2FkZHJlc3NfMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIGFkZHJlc3MgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5waWNrdXBfYWRkcmVzc18yIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV9xdW90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGlja3VwX2FkZHJlc3NfMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2l0eVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMucGlja3VwX2NpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV9xdW90ZXMucGlja3VwX2NpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLnBpY2t1cF9jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJwaWNrdXBfY2l0eVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fcXVvdGVzLnBpY2t1cF9jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIENpdHkgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJwaWNrdXBfY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwicGlja3VwIGNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fcXVvdGVzLnBpY2t1cF9jaXR5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV9xdW90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGlja3VwX2NpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5waWNrdXBfY2l0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS5waWNrdXBfY2l0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlN0YXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5waWNrdXBfc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV9xdW90ZXMucGlja3VwX3N0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5waWNrdXBfc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcInBpY2t1cF9zdGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fcXVvdGVzLnBpY2t1cF9zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBTdGF0ZSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInBpY2t1cF9zdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwicGlja3VwIHN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5waWNrdXBfc3RhdGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3F1b3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwaWNrdXBfc3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5waWNrdXBfc3RhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEucGlja3VwX3N0YXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiWmlwIENvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fcXVvdGVzLnBpY2t1cF96aXBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5waWNrdXBfemlwX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLnBpY2t1cF96aXBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiemlwX2NvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5waWNrdXBfemlwX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgWklQIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwicGlja3VwX3ppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJwaWNrdXAgemlwIGNvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fcXVvdGVzLnBpY2t1cF96aXBfY29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcXVvdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBpY2t1cF96aXBfY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLnBpY2t1cF96aXBfY29kZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJtU3RlcDEucGlja3VwX3ppcF9jb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVzZWN0aW9uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge30sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZnJtX3F1b3Rlcy5tYXRlcmlhbCwgZnVuY3Rpb24gKGl0ZW0sIGl4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IFwidXBcIiArIGl4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpeCArIDEpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwicHJvZHVjdHNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMucHJvZHVjdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IChvcHRpb24pID0+IG9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ucHJvZHVjdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBQcm9kdWN0IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3RfaWRcIiArIGl4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJwcm9kdWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ucHJvZHVjdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChpdGVtLCBcInByb2R1Y3RfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucHJvZHVjdF9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLnByb2R1Y3RfaWRcIiArIGl4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJtU3RlcDEucHJvZHVjdF9pZFwiICsgaXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS53ZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS53ZWlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwid2VpZ2h0XCIgKyBpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJ3ZWlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBpdGVtLndlaWdodCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS53ZWlnaHRcIiArIGl4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJtU3RlcDEud2VpZ2h0XCIgKyBpeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZybV9xdW90ZXMubWF0ZXJpYWwuc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoLW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcXVvdGVzLm1hdGVyaWFsLmxlbmd0aCA9PSBpeCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZEluZm8oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBsdXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuYWRkaXRpb25hbF9pbmZvcm1hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5hZGRpdGlvbmFsX2luZm9ybWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5hZGRpdGlvbmFsX2luZm9ybWF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcXVvdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZGl0aW9uYWxfaW5mb3JtYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBdHRhY2ggc2NyYXAgbWV0YWwgcGljdHVyZXMgKElmIEFueSlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIsIGFjY2VwdDogXCJpbWFnZS8qXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0ub25GaWxlQ2hhbmdlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oNSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkdldCBhIFF1b3RlXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbX3ZtLl92KFwiVXNlciBcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJQaWNrdXAgTG9jYXRpb25cIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIGNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiU2NyYXAgSW5mb3JtYXRpb25cIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIiB9LCBhdHRyczogeyB3aWR0aDogXCI3MFwiIH0gfSxcbiAgICAgICAgICBbX3ZtLl92KFwiU2wgTm8uXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJNYXRlcmlhbFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJXZWlnaHQgKExCKSBcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHdpZHRoOiBcIjEwMFwiIH0gfSwgW192bS5fdihcIkFjdGlvblwiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGJveC1zdWNjZXNzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtZm9vdGVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsxIG14LTFcIiwgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiR2V0IFF1b3RlXCIpXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDVkY2YxZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWRkRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxob3N0aW5nZXJcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE0NWRjZjFlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE0NWRjZjFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE0NWRjZjFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDVkY2YxZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNDVkY2YxZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcXVvdGVzL0FkZEVkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ1ZGNmMWUmXCIiXSwic291cmNlUm9vdCI6IiJ9