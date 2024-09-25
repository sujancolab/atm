(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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
      user_id: '2',
      view_mode: false,
      editmode: false,
      products: [],
      step: 1,
      frm_quotes: new Form({
        created_by: 2,
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
                      console.log(data);
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

    if (this.$route.params.id) {
      axios.get("api/quotes/" + this.$route.params.id).then(function (res) {
        console.log(res);
        _this5.frm_quotes.name = res.data.data.name;
        _this5.frm_quotes.organization = res.data.data.organization;
        _this5.frm_quotes.email = res.data.data.email;
        _this5.frm_quotes.phone = res.data.data.phone;
        _this5.frm_quotes.address_1 = res.data.data.address;
        _this5.frm_quotes.city = res.data.data.city;
        _this5.frm_quotes.state = res.data.data.state;
        _this5.frm_quotes.zip_code = res.data.data.zip;
        _this5.frm_quotes.pickup_address_1 = res.data.data.pickup_address_1;
        _this5.frm_quotes.pickup_address_2 = res.data.data.pickup_address_2;
        _this5.frm_quotes.pickup_city = res.data.data.pickup_city;
        _this5.frm_quotes.pickup_state = res.data.data.pickup_state;
        _this5.frm_quotes.picup_zip_code = res.data.data.pickup_zip;
        _this5.frm_quotes.additional_information = res.data.data.additional_information;
        _this5.frm_quotes.material = res.data.data.quote_products;
        cloaderd.hide();
      })["catch"](function () {
        cloaderd.hide();
      });
    } else {
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
    }
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
        "item-text": "id",
        "item-value": "name",
        items: _vm.products,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcXVvdGVzL0FkZEVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3F1b3Rlcy9BZGRFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/NzdmOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/MDFhNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvQWRkRWRpdC52dWU/NDI0OSJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsInVzZXJfaWQiLCJ2aWV3X21vZGUiLCJlZGl0bW9kZSIsInByb2R1Y3RzIiwic3RlcCIsImZybV9xdW90ZXMiLCJjcmVhdGVkX2J5Iiwib3JnYW5pemF0aW9uIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3NfMSIsImNpdHkiLCJzdGF0ZSIsInppcF9jb2RlIiwicGlja3VwX2FkZHJlc3NfMSIsInBpY2t1cF9hZGRyZXNzXzIiLCJwaWNrdXBfY2l0eSIsInBpY2t1cF9zdGF0ZSIsInBpY2t1cF96aXBfY29kZSIsImFkZGl0aW9uYWxfaW5mb3JtYXRpb24iLCJzY3JhcF9tYXRlcmlhbF9waWN0dXJlIiwic2NyYXBfbWF0ZXJpYWxfcGljdHVyZV91cmwiLCJtYXRlcmlhbCIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsImJlZm9yZUNyZWF0ZSIsImF4aW9zIiwidGhlbiIsIm1ldGhvZHMiLCJhZGRJbmZvIiwiaWQiLCJwcm9kdWN0X2lkIiwid2VpZ2h0Iiwic3VibWl0X3F1b3RlIiwiY2xvYWRlcmQiLCJjb250YWluZXIiLCJjb25zb2xlIiwiVG9hc3QiLCJpY29uIiwidGl0bGUiLCJjaGVjayIsImUiLCJvbkZpbGVDaGFuZ2UiLCJtb3VudGVkIiwiY3JlYXRlZCIsIndhdGNoIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsIl9tIiwiX3YiLCJyZWYiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwib24iLCJzdWJtaXQiLCIkZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwidmFsdWUiLCJleHByZXNzaW9uIiwiZXJyb3IiLCJlcnJvcnMiLCJ2ZXJyb3JzIiwiaGFzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZG9tUHJvcHMiLCJpbnB1dCIsInRhcmdldCIsImNvbXBvc2luZyIsIiRzZXQiLCJfcyIsImZpcnN0IiwiX2UiLCJjaGFuZ2UiLCJfbCIsIml0ZW0iLCJpeCIsImtleSIsImFsaWduIiwibGFiZWwiLCJpdGVtcyIsIm1vZGVsIiwiY2FsbGJhY2siLCIkJHYiLCJjbGljayIsInNwbGljZSIsImxlbmd0aCIsImFjY2VwdCIsInN0YXRpY1JlbmRlckZucyIsInN0YXRpY1N0eWxlIiwid2lkdGgiLCJfd2l0aFN0cmlwcGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzsrQ0E4UEEsb0o7Ozs7Ozs7Ozs7OztBQUFBO0FBR2U7RUFDZkEscUJBREE7RUFFQUMsSUFGQSxrQkFFQTtJQUNBO01BQ0FDLFlBREE7TUFFQUMsZ0JBRkE7TUFHQUMsZUFIQTtNQUlBQyxZQUpBO01BS0FDLE9BTEE7TUFNQUM7UUFDQUMsYUFEQTtRQUVBUixRQUZBO1FBR0FTLGdCQUhBO1FBSUFDLFNBSkE7UUFLQUMsU0FMQTtRQU1BQyxhQU5BO1FBT0FDLFFBUEE7UUFRQUMsU0FSQTtRQVNBQyxZQVRBO1FBVUFDLG9CQVZBO1FBV0FDLG9CQVhBO1FBWUFDLGVBWkE7UUFhQUMsZ0JBYkE7UUFjQUMsbUJBZEE7UUFlQUMsMEJBZkE7UUFnQkFDLDRCQWhCQTtRQWlCQUMsZ0NBakJBO1FBa0JBQztNQWxCQTtJQU5BO0VBMkJBLENBOUJBO0VBK0JBQyw0QkFDQUMsbUVBREEsQ0EvQkE7RUFrQ0FDLFlBbENBLDBCQWtDQTtJQUFBOztJQUNBQyw2QkFDQUMsSUFEQSxDQUNBO01B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QTtBQUFBIiwiZmlsZSI6ImpzLzQuYnVuZGxlLjJjMjViMjVjMGM3YmY3ZGNhYmE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgIDxoMT5HZXQgYSBRdW90ZTwvaDE+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQgdmxkLXBhcmVudFwiIHJlZj1cInJlZl9sb2FkX3F1b3Rlc1wiPlxyXG4gICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRfcXVvdGUoJ3N1Ym1pdCcpXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZSBjYXJkLXRleHRcIj5Vc2VyIDwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keSBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgTmFtZSAuLi5cIiB2LW1vZGVsPVwiZnJtX3F1b3Rlcy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIGRhdGEtdnYtbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLm5hbWUsICdlcnJvcic6IHZlcnJvcnMuaGFzKCduYW1lJyksICdoYXZlVmFsdWUnOiBmcm1fcXVvdGVzLm5hbWUgfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLm5hbWUnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3tcclxuICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLm5hbWUnKVxyXG4gICAgICAgICAgICAgICAgICB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPkNvbXBhbnkgTmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ29tcGFueSAuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmcm1fcXVvdGVzLm9yZ2FuaXphdGlvblwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1uYW1lPVwib3JnYW5pemF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5vcmdhbml6YXRpb24sICdlcnJvcic6IHZlcnJvcnMuaGFzKCdvcmdhbml6YXRpb24nKSwgJ2hhdmVWYWx1ZSc6IGZybV9xdW90ZXMub3JnYW5pemF0aW9uIH1cIj5cclxuICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5vcmdhbml6YXRpb24nKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3tcclxuICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLm9yZ2FuaXphdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+V29yayBFbWFpbCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWwgLi4uXCIgdi1tb2RlbD1cImZybV9xdW90ZXMuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWR8ZW1haWwnXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5lbWFpbCwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ2VtYWlsJyksICdoYXZlVmFsdWUnOiBmcm1fcXVvdGVzLmVtYWlsIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImVtYWlsXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEuZW1haWwnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuZW1haWwnKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPkNvbnRhY3QgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFBob25lIC4uLlwiIHYtbW9kZWw9XCJmcm1fcXVvdGVzLnBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIGRhdGEtdnYtbmFtZT1cInBob25lXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCIgZGF0YS12di1hcz1cInBob25lIG5vXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5waG9uZSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3Bob25lJyksICdoYXZlVmFsdWUnOiBmcm1fcXVvdGVzLnBob25lIH1cIj5cclxuICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5waG9uZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5waG9uZScpIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+QWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBZGRyZXNzIC4uLlwiIHYtbW9kZWw9XCJmcm1fcXVvdGVzLmFkZHJlc3NfMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LW5hbWU9XCJhZGRyZXNzXzFcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIiBkYXRhLXZ2LWFzPVwiYWRkcmVzcyAxXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5hZGRyZXNzXzEsICdlcnJvcic6IHZlcnJvcnMuaGFzKCdhZGRyZXNzXzEnKSwgJ2hhdmVWYWx1ZSc6IGZybV9xdW90ZXMuYWRkcmVzc18xIH1cIj5cclxuICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5hZGRyZXNzXzEnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuYWRkcmVzc18xJylcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDaXR5IC4uLlwiIHYtbW9kZWw9XCJmcm1fcXVvdGVzLmNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1uYW1lPVwiY2l0eVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMuY2l0eSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ2NpdHknKSwgJ2hhdmVWYWx1ZSc6IGZybV9xdW90ZXMuY2l0eSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEuY2l0eScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5jaXR5JykgfX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+U3RhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgU3RhdGUgLi4uXCIgdi1tb2RlbD1cImZybV9xdW90ZXMuc3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5zdGF0ZSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3N0YXRlJyksICdoYXZlVmFsdWUnOiBmcm1fcXVvdGVzLnN0YXRlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cInN0YXRlXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEuc3RhdGUnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuc3RhdGUnKSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5aaXAgQ29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBaSVAgLi4uXCIgdi1tb2RlbD1cImZybV9xdW90ZXMuemlwX2NvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1hcz1cInppcCBjb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy56aXBfY29kZSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3ppcF9jb2RlJyksICdoYXZlVmFsdWUnOiBmcm1fcXVvdGVzLnppcF9jb2RlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cInppcF9jb2RlXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEuemlwX2NvZGUnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4ge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuemlwX2NvZGUnKSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZSBjYXJkLXRleHRcIj5QaWNrdXAgTG9jYXRpb248L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgQGNoYW5nZT1cImNoZWNrKCRldmVudClcIj4gU2FtZSBhcyBvZmZpY2VcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHkgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmVxdWlyZWRcIj5BZGRyZXNzIDE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgYWRkcmVzcyAuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmcm1fcXVvdGVzLnBpY2t1cF9hZGRyZXNzXzFcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIGRhdGEtdnYtYXM9XCJwaWNrdXAgYWRkcmVzcyAxXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5waWNrdXBfYWRkcmVzc18xLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygncGlja3VwX2FkZHJlc3NfMScpLCAnaGF2ZVZhbHVlJzogZnJtX3F1b3Rlcy5waWNrdXBfYWRkcmVzc18xIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cInBpY2t1cF9hZGRyZXNzXzFcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5waWNrdXBfYWRkcmVzc18xJylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5waWNrdXBfYWRkcmVzc18xJylcclxuICAgICAgICAgICAgICAgICAgfX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3MgMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBhZGRyZXNzIC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZybV9xdW90ZXMucGlja3VwX2FkZHJlc3NfMlwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDaXR5IC4uLlwiIHYtbW9kZWw9XCJmcm1fcXVvdGVzLnBpY2t1cF9jaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMucGlja3VwX2NpdHksICdlcnJvcic6IHZlcnJvcnMuaGFzKCdwaWNrdXBfY2l0eScpLCAnaGF2ZVZhbHVlJzogZnJtX3F1b3Rlcy5waWNrdXBfY2l0eSB9XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJwaWNrdXBfY2l0eVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiIGRhdGEtdnYtYXM9XCJwaWNrdXAgY2l0eVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLnBpY2t1cF9jaXR5JylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5waWNrdXBfY2l0eScpXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyZXF1aXJlZFwiPlN0YXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFN0YXRlIC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZybV9xdW90ZXMucGlja3VwX3N0YXRlXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLnBpY2t1cF9zdGF0ZSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3BpY2t1cF9zdGF0ZScpLCAnaGF2ZVZhbHVlJzogZnJtX3F1b3Rlcy5waWNrdXBfc3RhdGUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwicGlja3VwX3N0YXRlXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCIgZGF0YS12di1hcz1cInBpY2t1cCBzdGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLnBpY2t1cF9zdGF0ZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEucGlja3VwX3N0YXRlJylcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJlcXVpcmVkXCI+WmlwIENvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWklQIC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZybV9xdW90ZXMucGlja3VwX3ppcF9jb2RlXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLnBpY2t1cF96aXBfY29kZSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3ppcF9jb2RlJyksICdoYXZlVmFsdWUnOiBmcm1fcXVvdGVzLnBpY2t1cF96aXBfY29kZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJwaWNrdXBfemlwX2NvZGVcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIiBkYXRhLXZ2LWFzPVwicGlja3VwIHppcCBjb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEucGlja3VwX3ppcF9jb2RlJylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5waWNrdXBfemlwX2NvZGUnKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlNjcmFwIEluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCIgd2lkdGg9XCI3MFwiPlNsIE5vLjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+TWF0ZXJpYWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPldlaWdodCAoTEIpIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggd2lkdGg9XCIxMDBcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIoaXRlbSwgaXgpIGluIGZybV9xdW90ZXMubWF0ZXJpYWxcIiA6a2V5PVwiJ3VwJyArIGl4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj57eyBpeCArIDEgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgaXRlbS10ZXh0PVwiaWRcIiBpdGVtLXZhbHVlPVwibmFtZVwiIDppdGVtcz1cInByb2R1Y3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBQcm9kdWN0IC4uLlwiIHYtbW9kZWw9XCJpdGVtLnByb2R1Y3RfaWRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMuc3RhdGUsICdlcnJvcic6IHZlcnJvcnMuaGFzKCdwcm9kdWN0cycpLCAnaGF2ZVZhbHVlJzogZnJtX3F1b3Rlcy5wcm9kdWN0cyB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cIidwcm9kdWN0X2lkJyArIGl4XCIgZGF0YS12di1hcz1cInByb2R1Y3RcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLnByb2R1Y3RfaWQnICsgaXgpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEucHJvZHVjdF9pZCcgKyBpeClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiaXRlbS53ZWlnaHRcIiB0eXBlPVwidGV4dFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cIid3ZWlnaHQnICsgaXhcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIiBkYXRhLXZ2LWFzPVwid2VpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS53ZWlnaHQnICsgaXgpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEud2VpZ2h0JyArIGl4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiB2LWlmPVwiaXggPiAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJmcm1fcXVvdGVzLm1hdGVyaWFsLnNwbGljZShpeCwgMSlcIj48aSBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHYtaWY9XCJmcm1fcXVvdGVzLm1hdGVyaWFsLmxlbmd0aCA9PSBpeCArIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImFkZEluZm8oKVwiPjxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZGl0aW9uYWwgSW5mb3JtYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmcm1fcXVvdGVzLmFkZGl0aW9uYWxfaW5mb3JtYXRpb25cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5BdHRhY2ggc2NyYXAgbWV0YWwgcGljdHVyZXMgKElmIEFueSk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgQGNoYW5nZT1cIm9uRmlsZUNoYW5nZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gbGluazEgbXgtMVwiPkdldCBRdW90ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQge1xyXG4gIG1hcEdldHRlcnNcclxufSBmcm9tIFwidnVleFwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJRdW90ZXNBZGRFZGl0XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXJfaWQ6ICcyJyxcclxuICAgICAgdmlld19tb2RlOiBmYWxzZSxcclxuICAgICAgZWRpdG1vZGU6IGZhbHNlLFxyXG4gICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgIHN0ZXA6IDEsXHJcbiAgICAgIGZybV9xdW90ZXM6IG5ldyBGb3JtKHtcclxuICAgICAgICBjcmVhdGVkX2J5OiAyLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIG9yZ2FuaXphdGlvbjogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICBhZGRyZXNzXzE6ICcnLFxyXG4gICAgICAgIGNpdHk6ICcnLFxyXG4gICAgICAgIHN0YXRlOiAnJyxcclxuICAgICAgICB6aXBfY29kZTogJycsXHJcbiAgICAgICAgcGlja3VwX2FkZHJlc3NfMTogJycsXHJcbiAgICAgICAgcGlja3VwX2FkZHJlc3NfMjogJycsXHJcbiAgICAgICAgcGlja3VwX2NpdHk6ICcnLFxyXG4gICAgICAgIHBpY2t1cF9zdGF0ZTogJycsXHJcbiAgICAgICAgcGlja3VwX3ppcF9jb2RlOiAnJyxcclxuICAgICAgICBhZGRpdGlvbmFsX2luZm9ybWF0aW9uOiAnJyxcclxuICAgICAgICBzY3JhcF9tYXRlcmlhbF9waWN0dXJlOiBudWxsLFxyXG4gICAgICAgIHNjcmFwX21hdGVyaWFsX3BpY3R1cmVfdXJsOiBudWxsLFxyXG4gICAgICAgIG1hdGVyaWFsOiBbXVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC4uLm1hcEdldHRlcnMoW1wiZXJyb3JzXCJdKVxyXG4gIH0sXHJcbiAgYmVmb3JlQ3JlYXRlKCkge1xyXG4gICAgYXhpb3MuZ2V0KFwiYXBpL2dldFByb2R1Y3RzXCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICB9KVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgYWRkSW5mbygpIHtcclxuICAgICAgdGhpcy5mcm1fcXVvdGVzLm1hdGVyaWFsLnB1c2goe1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBwcm9kdWN0X2lkOiAnJyxcclxuICAgICAgICB3ZWlnaHQ6ICcnLFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHN1Ym1pdF9xdW90ZSgpIHtcclxuICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCdmcm1TdGVwMScpLnRoZW4oYXN5bmMgKHZhbGlkKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xyXG4gICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfcXVvdGVzXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucG9zdCgnYXBpL3F1b3RlcycpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5pZCA9IGRhdGEuZGF0YS5kYXRhLmlkO1xyXG4gICAgICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5tYXRlcmlhbCA9IFtdXHJcbiAgICAgICAgICAgICAgdGhpcy5hZGRJbmZvKClcclxuXHJcbiAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBjaGVjayhlKSB7XHJcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucGlja3VwX2FkZHJlc3NfMSA9IHRoaXMuZnJtX3F1b3Rlcy5hZGRyZXNzXzE7XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucGlja3VwX2NpdHkgPSB0aGlzLmZybV9xdW90ZXMuY2l0eTtcclxuICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5waWNrdXBfc3RhdGUgPSB0aGlzLmZybV9xdW90ZXMuc3RhdGU7XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucGlja3VwX3ppcF9jb2RlID0gdGhpcy5mcm1fcXVvdGVzLnppcF9jb2RlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucGlja3VwX2FkZHJlc3NfMSA9ICcnO1xyXG4gICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLnBpY2t1cF9jaXR5ID0gJyc7XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucGlja3VwX3N0YXRlID0gJyc7XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucGlja3VwX3ppcF9jb2RlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uRmlsZUNoYW5nZShlKSB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxyXG4gICAgICB0aGlzLnNjcmFwX21hdGVyaWFsX3BpY3R1cmUgPSBmaWxlXHJcbiAgICAgIHRoaXMuZnJtX3F1b3Rlcy5zY3JhcF9tYXRlcmlhbF9waWN0dXJlX3VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xyXG4gICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfcXVvdGVzXHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpIHtcclxuICAgICAgYXhpb3MuZ2V0KFwiYXBpL3F1b3Rlcy9cIiArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLm5hbWUgPSByZXMuZGF0YS5kYXRhLm5hbWU7XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMub3JnYW5pemF0aW9uID0gcmVzLmRhdGEuZGF0YS5vcmdhbml6YXRpb247XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMuZW1haWwgPSByZXMuZGF0YS5kYXRhLmVtYWlsO1xyXG4gICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLnBob25lID0gcmVzLmRhdGEuZGF0YS5waG9uZTtcclxuICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5hZGRyZXNzXzEgPSByZXMuZGF0YS5kYXRhLmFkZHJlc3M7XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMuY2l0eSA9IHJlcy5kYXRhLmRhdGEuY2l0eTtcclxuICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5zdGF0ZSA9IHJlcy5kYXRhLmRhdGEuc3RhdGU7XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMuemlwX2NvZGUgPSByZXMuZGF0YS5kYXRhLnppcDtcclxuICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5waWNrdXBfYWRkcmVzc18xID0gcmVzLmRhdGEuZGF0YS5waWNrdXBfYWRkcmVzc18xO1xyXG4gICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLnBpY2t1cF9hZGRyZXNzXzIgPSByZXMuZGF0YS5kYXRhLnBpY2t1cF9hZGRyZXNzXzI7XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucGlja3VwX2NpdHkgPSByZXMuZGF0YS5kYXRhLnBpY2t1cF9jaXR5O1xyXG4gICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLnBpY2t1cF9zdGF0ZSA9IHJlcy5kYXRhLmRhdGEucGlja3VwX3N0YXRlO1xyXG4gICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLnBpY3VwX3ppcF9jb2RlID0gcmVzLmRhdGEuZGF0YS5waWNrdXBfemlwO1xyXG4gICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLmFkZGl0aW9uYWxfaW5mb3JtYXRpb24gPSByZXMuZGF0YS5kYXRhLmFkZGl0aW9uYWxfaW5mb3JtYXRpb247XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMubWF0ZXJpYWwgPSByZXMuZGF0YS5kYXRhLnF1b3RlX3Byb2R1Y3RzO1xyXG5cclxuICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF4aW9zLmdldChcImFwaS91c2VyL1wiICsgdGhpcy51c2VyX2lkKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMubmFtZSA9IHJlcy5kYXRhLmRhdGEubmFtZTtcclxuICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5vcmdhbml6YXRpb24gPSByZXMuZGF0YS5kYXRhLm9yZ2FuaXphdGlvbjtcclxuICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5lbWFpbCA9IHJlcy5kYXRhLmRhdGEuZW1haWw7XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucGhvbmUgPSByZXMuZGF0YS5kYXRhLnBob25lO1xyXG4gICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLmFkZHJlc3NfMSA9IHJlcy5kYXRhLmRhdGEuYWRkcmVzc18xO1xyXG4gICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLmNpdHkgPSByZXMuZGF0YS5kYXRhLmNpdHk7XHJcbiAgICAgICAgICB0aGlzLmZybV9xdW90ZXMuc3RhdGUgPSByZXMuZGF0YS5kYXRhLnN0YXRlO1xyXG4gICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLnppcF9jb2RlID0gcmVzLmRhdGEuZGF0YS56aXBfY29kZTtcclxuICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgfSxcclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5zdGVwID0gMVxyXG4gICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgIHRoaXMudmlld19tb2RlID0gZmFsc2VcclxuICAgIHRoaXMuYWRkSW5mbygpO1xyXG4gICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwic2VjdGlvblwiLFxuICAgICAgeyByZWY6IFwicmVmX2xvYWRfcXVvdGVzXCIsIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgdmxkLXBhcmVudFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXRfcXVvdGUoXCJzdWJtaXRcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIE5hbWUgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV9xdW90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS5uYW1lXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb21wYW55IE5hbWUgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5vcmdhbml6YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV9xdW90ZXMub3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5vcmdhbml6YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcIm9yZ2FuaXphdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fcXVvdGVzLm9yZ2FuaXphdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBDb21wYW55IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwib3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5vcmdhbml6YXRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3F1b3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5vcmdhbml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEub3JnYW5pemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiV29yayBFbWFpbCBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fcXVvdGVzLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLmVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkfGVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZHxlbWFpbCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBFbWFpbCAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fcXVvdGVzLmVtYWlsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV9xdW90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5lbWFpbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEuZW1haWxcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNvbnRhY3QgTnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5waG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcInBob25lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgUGhvbmUgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJwaG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwicGhvbmUgbm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fcXVvdGVzLnBob25lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV9xdW90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5waG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEucGhvbmVcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBZGRyZXNzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5hZGRyZXNzXzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV9xdW90ZXMuYWRkcmVzc18xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5hZGRyZXNzXzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcImFkZHJlc3NfMVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fcXVvdGVzLmFkZHJlc3NfMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBBZGRyZXNzIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiYWRkcmVzc18xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJhZGRyZXNzIDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fcXVvdGVzLmFkZHJlc3NfMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcXVvdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZHJlc3NfMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLmFkZHJlc3NfMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS5hZGRyZXNzXzFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDaXR5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLmNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcImNpdHlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIENpdHkgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJjaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fcXVvdGVzLmNpdHkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3F1b3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEuY2l0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEuY2l0eVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlN0YXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5zdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcInN0YXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgU3RhdGUgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJzdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5zdGF0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcXVvdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEuc3RhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLnN0YXRlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiWmlwIENvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fcXVvdGVzLnppcF9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLnppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy56aXBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiemlwX2NvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3F1b3Rlcy56aXBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBaSVAgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiemlwIGNvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fcXVvdGVzLnppcF9jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV9xdW90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiemlwX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS56aXBfY29kZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS56aXBfY29kZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVjaygkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFNhbWUgYXMgb2ZmaWNlXFxuICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9KSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQWRkcmVzcyAxXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5waWNrdXBfYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLnBpY2t1cF9hZGRyZXNzXzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLnBpY2t1cF9hZGRyZXNzXzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcInBpY2t1cF9hZGRyZXNzXzFcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5waWNrdXBfYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIGFkZHJlc3MgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwicGlja3VwIGFkZHJlc3MgMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwicGlja3VwX2FkZHJlc3NfMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5waWNrdXBfYWRkcmVzc18xIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV9xdW90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGlja3VwX2FkZHJlc3NfMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLnBpY2t1cF9hZGRyZXNzXzFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZybVN0ZXAxLnBpY2t1cF9hZGRyZXNzXzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkFkZHJlc3MgMlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMucGlja3VwX2FkZHJlc3NfMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5waWNrdXBfYWRkcmVzc18yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgYWRkcmVzcyAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fcXVvdGVzLnBpY2t1cF9hZGRyZXNzXzIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3F1b3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwaWNrdXBfYWRkcmVzc18yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDaXR5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5waWNrdXBfY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5waWNrdXBfY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMucGlja3VwX2NpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcInBpY2t1cF9jaXR5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMucGlja3VwX2NpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgQ2l0eSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInBpY2t1cF9jaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJwaWNrdXAgY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV9xdW90ZXMucGlja3VwX2NpdHkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3F1b3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwaWNrdXBfY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLnBpY2t1cF9jaXR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLnBpY2t1cF9jaXR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU3RhdGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fcXVvdGVzLnBpY2t1cF9zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3F1b3Rlcy5waWNrdXBfc3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLnBpY2t1cF9zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwicGlja3VwX3N0YXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV9xdW90ZXMucGlja3VwX3N0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIFN0YXRlIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwicGlja3VwX3N0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJwaWNrdXAgc3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fcXVvdGVzLnBpY2t1cF9zdGF0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcXVvdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBpY2t1cF9zdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLnBpY2t1cF9zdGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS5waWNrdXBfc3RhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJaaXAgQ29kZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMucGlja3VwX3ppcF9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcXVvdGVzLnBpY2t1cF96aXBfY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMucGlja3VwX3ppcF9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJ6aXBfY29kZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fcXVvdGVzLnBpY2t1cF96aXBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBaSVAgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJwaWNrdXBfemlwX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcInBpY2t1cCB6aXAgY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV9xdW90ZXMucGlja3VwX3ppcF9jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV9xdW90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGlja3VwX3ppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEucGlja3VwX3ppcF9jb2RlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm1TdGVwMS5waWNrdXBfemlwX2NvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZXNlY3Rpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7fSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oNCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5mcm1fcXVvdGVzLm1hdGVyaWFsLCBmdW5jdGlvbiAoaXRlbSwgaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogXCJ1cFwiICsgaXggfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl4ICsgMSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJwcm9kdWN0c1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3F1b3Rlcy5wcm9kdWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnByb2R1Y3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2ggUHJvZHVjdCAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwcm9kdWN0X2lkXCIgKyBpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwicHJvZHVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnByb2R1Y3RfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJwcm9kdWN0X2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnByb2R1Y3RfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5wcm9kdWN0X2lkXCIgKyBpeClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZybVN0ZXAxLnByb2R1Y3RfaWRcIiArIGl4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ud2VpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ud2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIndlaWdodFwiICsgaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwid2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogaXRlbS53ZWlnaHQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEud2VpZ2h0XCIgKyBpeClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZybVN0ZXAxLndlaWdodFwiICsgaXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl4ID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mcm1fcXVvdGVzLm1hdGVyaWFsLnNwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaC1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3F1b3Rlcy5tYXRlcmlhbC5sZW5ndGggPT0gaXggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRJbmZvKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1wbHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fcXVvdGVzLmFkZGl0aW9uYWxfaW5mb3JtYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV9xdW90ZXMuYWRkaXRpb25hbF9pbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIEFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9xdW90ZXMuYWRkaXRpb25hbF9pbmZvcm1hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3F1b3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRpdGlvbmFsX2luZm9ybWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQXR0YWNoIHNjcmFwIG1ldGFsIHBpY3R1cmVzIChJZiBBbnkpXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBhY2NlcHQ6IFwiaW1hZ2UvKlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLm9uRmlsZUNoYW5nZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDUpLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJHZXQgYSBRdW90ZVwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgY2FyZC10ZXh0XCIgfSwgW192bS5fdihcIlVzZXIgXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIGNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiUGlja3VwIExvY2F0aW9uXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlNjcmFwIEluZm9ybWF0aW9uXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSwgYXR0cnM6IHsgd2lkdGg6IFwiNzBcIiB9IH0sXG4gICAgICAgICAgW192bS5fdihcIlNsIE5vLlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTWF0ZXJpYWxcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiV2VpZ2h0IChMQikgXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyB3aWR0aDogXCIxMDBcIiB9IH0sIFtfdm0uX3YoXCJBY3Rpb25cIildKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3gtc3VjY2Vzc1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWZvb3RlclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMSBteC0xXCIsIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIkdldCBRdW90ZVwiKV1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWRkRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ1ZGNmMWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRkRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcaG9zdGluZ2VyXFxcXHVuaXRlZC1zY3JhcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNDVkY2YxZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNDVkY2YxZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNDVkY2YxZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWRkRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ1ZGNmMWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTQ1ZGNmMWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3F1b3Rlcy9BZGRFZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0NWRjZjFlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==