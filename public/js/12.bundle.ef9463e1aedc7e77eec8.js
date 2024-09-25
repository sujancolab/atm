(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotes/UploadQuote.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotes/UploadQuote.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
      user_id: "2",
      view_mode: false,
      editmode: false,
      products: [],
      step: 1,
      scrap_material_picture: "",
      scrap_material_picture_url: null,
      disabled: 0,
      scrapInfo: 0,
      frm_revise_quotes: new Form({
        quote_id: 1,
        version: 0,
        title: "",
        description: ""
      }),
      revise_quotes: {
        quote_id: 1,
        version: 0,
        title: "",
        description: ""
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("auth", ["user"])),
  beforeCreate: function beforeCreate() {
    var _this = this;

    axios.get("api/getQuoteRevisionVersion", {
      params: {
        quote_id: this.$route.params.id
      }
    }).then(function (res) {
      _this.frm_revise_quotes.version = Number(res.data.data.version_no) + 1;
      console.log(_this.frm_revise_quotes.version);
    });
  },
  methods: {
    // async addInfo() {
    //     this.frm_revise_quotes.material.push({
    //         id: "",
    //         product_id: "",
    //         weight: "",
    //     });
    // },
    // revise_quoteqq() {
    //     if (this.$route.params.id) {
    //         axios
    //             // .post("api/quotes/forward/" + this.$route.params.id)
    //             .post("api/revised_quotes", this.revise_quotes)
    //             .then((data) => {
    //                 console.log(data);
    //                 Toast.fire({
    //                     icon: "success",
    //                     title: data.message,
    //                     confirmText: "ok",
    //                     cancelText: "no",
    //                     confirm: () => {
    //                         console.log("Your callback");
    //                         this.$close(); //If you don't want to close the dialog, you can not use it.
    //                     },
    //                     cancel: () => {
    //                         console.log("Your callback");
    //                         this.$close(); //If you don't want to close the dialog, you can not use it.
    //                     },
    //                 });
    //             })
    //             .catch(() => {
    //                 // cloaderd.hide();
    //             });
    //     }
    // },
    revise_quote: function revise_quote() {
      var _this2 = this;

      this.frm_revise_quotes.quote_id = this.$route.params.id;
      this.$validator.validateAll("frmStep1").then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(valid) {
          var cloaderd;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (valid) {
                    cloaderd = _this2.$loading.show({
                      container: _this2.$refs.ref_load_quotes
                    });

                    _this2.frm_revise_quotes.post("api/revised_quotes").then(function (data) {
                      // console.log(data);
                      // var fd = new FormData();
                      // fd.append(
                      //     "scrap_material_picture",
                      //     this.scrap_material_picture
                      // );
                      // fd.append("_method", "put");
                      // axios
                      //     .post(
                      //         "api/revised_quotes/" + data.data.data.id,
                      //         fd,
                      //         {}
                      //     )
                      //     .then((res) => {
                      //         console.log("gallery uploaded");
                      //     });
                      cloaderd.hide(); // console.log(data);
                      // this.frm_revise_quotes.id = data.data.data.id;
                      // this.frm_revise_quotes.material = [];
                      // this.addInfo();

                      Toast.fire({
                        icon: "success",
                        title: data.data.message
                      });

                      _this2.$router.push('/quotes/edit/' + _this2.$route.params.id)["catch"](function () {});
                    })["catch"](function () {
                      cloaderd.hide();
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
    },
    // check(e) {
    //     this.$nextTick(() => {
    //         if (e.target.checked == true) {
    //             this.frm_revise_quotes.pickup_address_1 =
    //                 this.frm_revise_quotes.address_1;
    //             this.frm_revise_quotes.pickup_city = this.frm_revise_quotes.city;
    //             this.frm_revise_quotes.pickup_state = this.frm_revise_quotes.state;
    //             this.frm_revise_quotes.pickup_zip_code = this.frm_revise_quotes.zip_code;
    //         } else {
    //             this.frm_revise_quotes.pickup_address_1 = "";
    //             this.frm_revise_quotes.pickup_city = "";
    //             this.frm_revise_quotes.pickup_state = "";
    //             this.frm_revise_quotes.pickup_zip_code = "";
    //         }
    //     });
    // },
    onFileChange: function onFileChange(e) {
      var file = this.$refs.material_pictur.files[0];
      this.scrap_material_picture = file;
      this.scrap_material_picture_url = URL.createObjectURL(file);
    }
  },
  mounted: function mounted() {// let cloaderd = this.$loading.show({
    //     container: this.$refs.ref_load_quotes,
    // });
    // if (this.$route.params.id) {
    //     this.view_mode = true;
    //     this.frm_revise_quotes.id = this.$route.params.id;
    //     axios
    //         .get("api/quotes/" + this.$route.params.id)
    //         .then((res) => {
    //             console.log(res);
    //             this.frm_revise_quotes.name = res.data.data.name;
    //             this.frm_revise_quotes.organization = res.data.data.organization;
    //             this.frm_revise_quotes.email = res.data.data.email;
    //             this.frm_revise_quotes.phone = res.data.data.phone;
    //             this.frm_revise_quotes.address_1 = res.data.data.address;
    //             this.frm_quotes.city = res.data.data.city;
    //             this.frm_quotes.state = res.data.data.state;
    //             this.frm_quotes.zip_code = res.data.data.zip;
    //             this.frm_quotes.pickup_address_1 =
    //                 res.data.data.pickup_address_1;
    //             this.frm_quotes.pickup_address_2 =
    //                 res.data.data.pickup_address_2;
    //             this.frm_quotes.pickup_city = res.data.data.pickup_city;
    //             this.frm_quotes.pickup_state = res.data.data.pickup_state;
    //             this.frm_quotes.picup_zip_code = res.data.data.pickup_zip;
    //             this.frm_quotes.additional_information =
    //                 res.data.data.additional_information;
    //             this.frm_quotes.material = res.data.data.quote_products;
    //             this.scrap_material_picture_url =
    //                 res.data.data.material_image;
    //             cloaderd.hide();
    //         })
    //         .catch(() => {
    //             cloaderd.hide();
    //         });
    // } else {
    //     axios
    //         .get("api/user/" + this.user_id)
    //         .then((res) => {
    //             console.log(res);
    //             this.frm_quotes.name = res.data.data.name;
    //             this.frm_quotes.organization = res.data.data.organization;
    //             this.frm_quotes.email = res.data.data.email;
    //             this.frm_quotes.phone = res.data.data.phone;
    //             this.frm_quotes.address_1 = res.data.data.address_1;
    //             this.frm_quotes.city = res.data.data.city;
    //             this.frm_quotes.state = res.data.data.state;
    //             this.frm_quotes.zip_code = res.data.data.zip_code;
    //             cloaderd.hide();
    //         })
    //         .catch(() => {
    //             cloaderd.hide();
    //         });
    // }
  },
  created: function created() {
    this.step = 1;
    this.$Progress.start();
    this.view_mode = false; // this.addInfo();

    this.$Progress.finish();
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotes/UploadQuote.vue?vue&type=template&id=2d454f64&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotes/UploadQuote.vue?vue&type=template&id=2d454f64& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("form", {
    attrs: {
      "data-vv-scope": "frmStep1",
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.revise_quote("submit");
      }
    }
  }, [_c("div", {
    staticClass: "card box-warning"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Title.")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_revise_quotes.title,
      expression: "frm_revise_quotes.title"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.frm_revise_quotes, "title", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", [_vm._v("Select")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Commercial Quotation"
    }
  }, [_vm._v("\n                                        Commercial Quotation\n                                    ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-2 col-lg-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Version No. ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_revise_quotes.version,
      expression: "frm_revise_quotes.version"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.frm_revise_quotes.version
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_revise_quotes, "version", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Description")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_revise_quotes.description,
      expression: "frm_revise_quotes.description"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "Enter Comments"
    },
    domProps: {
      value: _vm.frm_revise_quotes.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_revise_quotes, "description", $event.target.value);
      }
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card box-black"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Accepted file type .jpg, .jpeg, .png, .pdf,\n                            .xlsx / Size : Max 20mb")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm.scrap_material_picture_url != "" ? _c("div", {
    staticClass: "col-xs-2"
  }, [_c("a", {
    attrs: {
      href: _vm.scrap_material_picture_url,
      target: "_blank"
    }
  }, [_c("img", {
    attrs: {
      src: _vm.scrap_material_picture_url,
      width: "80",
      height: "80"
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-xs-8"
  }, [_c("input", {
    ref: "material_pictur",
    attrs: {
      type: "file",
      accept: "image/*",
      disabled: _vm.scrapInfo == 1
    },
    on: {
      change: _vm.onFileChange
    }
  })])])])])]), _vm._v(" "), _vm._m(3)])])]);
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
  }, [_vm._v("\n                        Attachment Summary Information\n                    ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("File Attachment")])]);
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
    staticClass: "btn link2 mx-1",
    attrs: {
      type: "button"
    }
  }, [_vm._v("\n                            Close\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn link1 mx-1",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                            Submit\n                        ")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/quotes/UploadQuote.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/quotes/UploadQuote.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UploadQuote_vue_vue_type_template_id_2d454f64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadQuote.vue?vue&type=template&id=2d454f64& */ "./resources/js/components/quotes/UploadQuote.vue?vue&type=template&id=2d454f64&");
/* harmony import */ var _UploadQuote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadQuote.vue?vue&type=script&lang=js& */ "./resources/js/components/quotes/UploadQuote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UploadQuote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UploadQuote_vue_vue_type_template_id_2d454f64___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UploadQuote_vue_vue_type_template_id_2d454f64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/quotes/UploadQuote.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/quotes/UploadQuote.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/quotes/UploadQuote.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadQuote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadQuote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotes/UploadQuote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadQuote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/quotes/UploadQuote.vue?vue&type=template&id=2d454f64&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/quotes/UploadQuote.vue?vue&type=template&id=2d454f64& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadQuote_vue_vue_type_template_id_2d454f64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadQuote.vue?vue&type=template&id=2d454f64& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotes/UploadQuote.vue?vue&type=template&id=2d454f64&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadQuote_vue_vue_type_template_id_2d454f64___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadQuote_vue_vue_type_template_id_2d454f64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcXVvdGVzL1VwbG9hZFF1b3RlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvVXBsb2FkUXVvdGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3F1b3Rlcy9VcGxvYWRRdW90ZS52dWU/NjA0MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvVXBsb2FkUXVvdGUudnVlP2VkMGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcXVvdGVzL1VwbG9hZFF1b3RlLnZ1ZT83MTM0Il0sIm5hbWVzIjpbIm5hbWUiLCJkYXRhIiwidXNlcl9pZCIsInZpZXdfbW9kZSIsImVkaXRtb2RlIiwicHJvZHVjdHMiLCJzdGVwIiwic2NyYXBfbWF0ZXJpYWxfcGljdHVyZSIsInNjcmFwX21hdGVyaWFsX3BpY3R1cmVfdXJsIiwiZGlzYWJsZWQiLCJzY3JhcEluZm8iLCJmcm1fcmV2aXNlX3F1b3RlcyIsInF1b3RlX2lkIiwidmVyc2lvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJyZXZpc2VfcXVvdGVzIiwiY29tcHV0ZWQiLCJtYXBHZXR0ZXJzIiwiYmVmb3JlQ3JlYXRlIiwiYXhpb3MiLCJnZXQiLCJwYXJhbXMiLCJ0aGVuIiwiTnVtYmVyIiwiY29uc29sZSIsIm1ldGhvZHMiLCJyZXZpc2VfcXVvdGUiLCJjbG9hZGVyZCIsImNvbnRhaW5lciIsInBvc3QiLCJUb2FzdCIsImljb24iLCJvbkZpbGVDaGFuZ2UiLCJlIiwibW91bnRlZCIsImNyZWF0ZWQiLCJ3YXRjaCIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJfbSIsIl92Iiwic3RhdGljQ2xhc3MiLCJhdHRycyIsImVuY3R5cGUiLCJvbiIsInN1Ym1pdCIsIiRldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGlyZWN0aXZlcyIsInJhd05hbWUiLCJ2YWx1ZSIsImV4cHJlc3Npb24iLCJjaGFuZ2UiLCIkJHNlbGVjdGVkVmFsIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmaWx0ZXIiLCJjYWxsIiwidGFyZ2V0Iiwib3B0aW9ucyIsIm8iLCJzZWxlY3RlZCIsIm1hcCIsInZhbCIsIl92YWx1ZSIsIiRzZXQiLCJtdWx0aXBsZSIsInR5cGUiLCJyZWFkb25seSIsImRvbVByb3BzIiwiaW5wdXQiLCJjb21wb3NpbmciLCJwbGFjZWhvbGRlciIsImhyZWYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIl9lIiwicmVmIiwiYWNjZXB0Iiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7K0NBbUZBLG9KOzs7Ozs7Ozs7Ozs7QUFBOEM7QUFFL0I7RUFDZkEscUJBREE7RUFFQUMsSUFGQSxrQkFFQTtJQUNBO01BQ0FDLFlBREE7TUFFQUMsZ0JBRkE7TUFHQUMsZUFIQTtNQUlBQyxZQUpBO01BS0FDLE9BTEE7TUFNQUMsMEJBTkE7TUFPQUMsZ0NBUEE7TUFRQUMsV0FSQTtNQVNBQyxZQVRBO01BVUFDO1FBQ0FDLFdBREE7UUFFQUMsVUFGQTtRQUdBQyxTQUhBO1FBSUFDO01BSkEsRUFWQTtNQWdCQUM7UUFDQUosV0FEQTtRQUVBQyxVQUZBO1FBR0FDLFNBSEE7UUFJQUM7TUFKQTtJQWhCQTtFQXVCQSxDQTFCQTtFQTJCQUUsMENBQ0FDLG1FQURBLEdBRUFBLHlFQUZBLENBM0JBO0VBK0JBQyxZQS9CQSwwQkErQkE7SUFBQTs7SUFDQUMsTUFDQUMsR0FEQSxDQUNBLDZCQURBLEVBQ0E7TUFDQUM7UUFBQVY7TUFBQTtJQURBLENBREEsRUFJQVcsSUFKQSxDQUlBO01BQ0Esa0NBQ0FDLG9DQURBO01BRUFDO0lBQ0EsQ0FSQTtFQVNBLENBekNBO0VBMENBQztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7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QVIsRUFBdUMsQ0FDdkNKLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUksV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUF3QyxDQUN4Q0osRUFBRSxDQUNBLFFBREEsRUFFQTtJQUFFSSxXQUFXLEVBQUUsZ0JBQWY7SUFBaUNDLEtBQUssRUFBRTtNQUFFeUIsSUFBSSxFQUFFO0lBQVI7RUFBeEMsQ0FGQSxFQUdBLENBQ0UvQixHQUFHLENBQUNJLEVBQUosQ0FDRSwrREFERixDQURGLENBSEEsQ0FEc0MsRUFVeENKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FWd0MsRUFXeENILEVBQUUsQ0FDQSxRQURBLEVBRUE7SUFBRUksV0FBVyxFQUFFLGdCQUFmO0lBQWlDQyxLQUFLLEVBQUU7TUFBRXlCLElBQUksRUFBRTtJQUFSO0VBQXhDLENBRkEsRUFHQSxDQUNFL0IsR0FBRyxDQUFDSSxFQUFKLENBQ0UsZ0VBREYsQ0FERixDQUhBLENBWHNDLENBQXhDLENBRHFDLENBQXZDLENBRGtELENBQTdDLENBQVQ7QUF5QkQsQ0F4RG1CLENBQXRCO0FBMERBTCxNQUFNLENBQUM4QyxhQUFQLEdBQXVCLElBQXZCOzs7Ozs7Ozs7Ozs7O0FDOVFBO0FBQUE7QUFBQTtBQUFBO0FBQTBGO0FBQzNCO0FBQ0w7OztBQUcxRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxpRkFBTTtBQUNSLEVBQUUsc0ZBQU07QUFDUixFQUFFLCtGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQix1UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMTIuYnVuZGxlLmVmOTQ2M2UxYWVkYzdlNzdlZWM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5HZXQgYSBRdW90ZTwvaDE+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJyZXZpc2VfcXVvdGUoJ3N1Ym1pdCcpXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJveC13YXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXR0YWNobWVudCBTdW1tYXJ5IEluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC00IGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlRpdGxlLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZnJtX3JldmlzZV9xdW90ZXMudGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+U2VsZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ29tbWVyY2lhbCBRdW90YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tZXJjaWFsIFF1b3RhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMiBjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5WZXJzaW9uIE5vLiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZnJtX3JldmlzZV9xdW90ZXMudmVyc2lvblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZnJtX3JldmlzZV9xdW90ZXMuZGVzY3JpcHRpb25cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGUgY2FyZC10ZXh0XCI+RmlsZSBBdHRhY2htZW50PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY2NlcHRlZCBmaWxlIHR5cGUgLmpwZywgLmpwZWcsIC5wbmcsIC5wZGYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnhsc3ggLyBTaXplIDogTWF4IDIwbWI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMlwiIHYtaWY9XCJzY3JhcF9tYXRlcmlhbF9waWN0dXJlX3VybCAhPSAnJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInNjcmFwX21hdGVyaWFsX3BpY3R1cmVfdXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyB2LWJpbmQ6c3JjPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JhcF9tYXRlcmlhbF9waWN0dXJlX3VybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB3aWR0aD1cIjgwXCIgaGVpZ2h0PVwiODBcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2VcIiByZWY9XCJtYXRlcmlhbF9waWN0dXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwic2NyYXBJbmZvID09IDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gbGluazIgbXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGxpbmsxIG14LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSBcInZ1ZXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiUXVvdGVzQWRkRWRpdFwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VyX2lkOiBcIjJcIixcclxuICAgICAgICAgICAgdmlld19tb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgZWRpdG1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgICAgIHNjcmFwX21hdGVyaWFsX3BpY3R1cmU6IFwiXCIsXHJcbiAgICAgICAgICAgIHNjcmFwX21hdGVyaWFsX3BpY3R1cmVfdXJsOiBudWxsLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogMCxcclxuICAgICAgICAgICAgc2NyYXBJbmZvOiAwLFxyXG4gICAgICAgICAgICBmcm1fcmV2aXNlX3F1b3RlczogbmV3IEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgcXVvdGVfaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiAwLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHJldmlzZV9xdW90ZXM6IHtcclxuICAgICAgICAgICAgICAgIHF1b3RlX2lkOiAxLFxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogMCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIC4uLm1hcEdldHRlcnMoW1wiZXJyb3JzXCJdKSxcclxuICAgICAgICAuLi5tYXBHZXR0ZXJzKFwiYXV0aFwiLCBbXCJ1c2VyXCJdKSxcclxuICAgIH0sXHJcbiAgICBiZWZvcmVDcmVhdGUoKSB7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChcImFwaS9nZXRRdW90ZVJldmlzaW9uVmVyc2lvblwiLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHsgcXVvdGVfaWQ6IHRoaXMuJHJvdXRlLnBhcmFtcy5pZCB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZybV9yZXZpc2VfcXVvdGVzLnZlcnNpb24gPVxyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihyZXMuZGF0YS5kYXRhLnZlcnNpb25fbm8pICsgMTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZnJtX3JldmlzZV9xdW90ZXMudmVyc2lvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAvLyBhc3luYyBhZGRJbmZvKCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmZybV9yZXZpc2VfcXVvdGVzLm1hdGVyaWFsLnB1c2goe1xyXG4gICAgICAgIC8vICAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBwcm9kdWN0X2lkOiBcIlwiLFxyXG4gICAgICAgIC8vICAgICAgICAgd2VpZ2h0OiBcIlwiLFxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHJldmlzZV9xdW90ZXFxKCkge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy4kcm91dGUucGFyYW1zLmlkKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBheGlvc1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIC5wb3N0KFwiYXBpL3F1b3Rlcy9mb3J3YXJkL1wiICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5wb3N0KFwiYXBpL3JldmlzZWRfcXVvdGVzXCIsIHRoaXMucmV2aXNlX3F1b3RlcylcclxuICAgICAgICAvLyAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogXCJva1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogXCJub1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uZmlybTogKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91ciBjYWxsYmFja1wiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRjbG9zZSgpOyAvL0lmIHlvdSBkb24ndCB3YW50IHRvIGNsb3NlIHRoZSBkaWFsb2csIHlvdSBjYW4gbm90IHVzZSBpdC5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjYW5jZWw6ICgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIllvdXIgY2FsbGJhY2tcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2xvc2UoKTsgLy9JZiB5b3UgZG9uJ3Qgd2FudCB0byBjbG9zZSB0aGUgZGlhbG9nLCB5b3UgY2FuIG5vdCB1c2UgaXQuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgcmV2aXNlX3F1b3RlKCkge1xyXG4gICAgICAgICAgICB0aGlzLmZybV9yZXZpc2VfcXVvdGVzLnF1b3RlX2lkID0gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xyXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoXCJmcm1TdGVwMVwiKS50aGVuKGFzeW5jICh2YWxpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX3F1b3RlcyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm1fcmV2aXNlX3F1b3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAucG9zdChcImFwaS9yZXZpc2VkX3F1b3Rlc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZkLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInNjcmFwX21hdGVyaWFsX3BpY3R1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNjcmFwX21hdGVyaWFsX3BpY3R1cmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmZC5hcHBlbmQoXCJfbWV0aG9kXCIsIFwicHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAucG9zdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgXCJhcGkvcmV2aXNlZF9xdW90ZXMvXCIgKyBkYXRhLmRhdGEuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJnYWxsZXJ5IHVwbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5mcm1fcmV2aXNlX3F1b3Rlcy5pZCA9IGRhdGEuZGF0YS5kYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5mcm1fcmV2aXNlX3F1b3Rlcy5tYXRlcmlhbCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5hZGRJbmZvKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9xdW90ZXMvZWRpdC8nICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKS5jYXRjaCgoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gY2hlY2soZSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcmV2aXNlX3F1b3Rlcy5waWNrdXBfYWRkcmVzc18xID1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5mcm1fcmV2aXNlX3F1b3Rlcy5hZGRyZXNzXzE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcmV2aXNlX3F1b3Rlcy5waWNrdXBfY2l0eSA9IHRoaXMuZnJtX3JldmlzZV9xdW90ZXMuY2l0eTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmZybV9yZXZpc2VfcXVvdGVzLnBpY2t1cF9zdGF0ZSA9IHRoaXMuZnJtX3JldmlzZV9xdW90ZXMuc3RhdGU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcmV2aXNlX3F1b3Rlcy5waWNrdXBfemlwX2NvZGUgPSB0aGlzLmZybV9yZXZpc2VfcXVvdGVzLnppcF9jb2RlO1xyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmZybV9yZXZpc2VfcXVvdGVzLnBpY2t1cF9hZGRyZXNzXzEgPSBcIlwiO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZnJtX3JldmlzZV9xdW90ZXMucGlja3VwX2NpdHkgPSBcIlwiO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZnJtX3JldmlzZV9xdW90ZXMucGlja3VwX3N0YXRlID0gXCJcIjtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmZybV9yZXZpc2VfcXVvdGVzLnBpY2t1cF96aXBfY29kZSA9IFwiXCI7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgb25GaWxlQ2hhbmdlKGUpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMuJHJlZnMubWF0ZXJpYWxfcGljdHVyLmZpbGVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLnNjcmFwX21hdGVyaWFsX3BpY3R1cmUgPSBmaWxlO1xyXG4gICAgICAgICAgICB0aGlzLnNjcmFwX21hdGVyaWFsX3BpY3R1cmVfdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgLy8gbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcclxuICAgICAgICAvLyAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX3F1b3RlcyxcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBpZiAodGhpcy4kcm91dGUucGFyYW1zLmlkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudmlld19tb2RlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5mcm1fcmV2aXNlX3F1b3Rlcy5pZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcclxuICAgICAgICAvLyAgICAgYXhpb3NcclxuICAgICAgICAvLyAgICAgICAgIC5nZXQoXCJhcGkvcXVvdGVzL1wiICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxyXG4gICAgICAgIC8vICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcmV2aXNlX3F1b3Rlcy5uYW1lID0gcmVzLmRhdGEuZGF0YS5uYW1lO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZnJtX3JldmlzZV9xdW90ZXMub3JnYW5pemF0aW9uID0gcmVzLmRhdGEuZGF0YS5vcmdhbml6YXRpb247XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcmV2aXNlX3F1b3Rlcy5lbWFpbCA9IHJlcy5kYXRhLmRhdGEuZW1haWw7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcmV2aXNlX3F1b3Rlcy5waG9uZSA9IHJlcy5kYXRhLmRhdGEucGhvbmU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcmV2aXNlX3F1b3Rlcy5hZGRyZXNzXzEgPSByZXMuZGF0YS5kYXRhLmFkZHJlc3M7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLmNpdHkgPSByZXMuZGF0YS5kYXRhLmNpdHk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLnN0YXRlID0gcmVzLmRhdGEuZGF0YS5zdGF0ZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmZybV9xdW90ZXMuemlwX2NvZGUgPSByZXMuZGF0YS5kYXRhLnppcDtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucGlja3VwX2FkZHJlc3NfMSA9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEucGlja3VwX2FkZHJlc3NfMTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucGlja3VwX2FkZHJlc3NfMiA9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEucGlja3VwX2FkZHJlc3NfMjtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucGlja3VwX2NpdHkgPSByZXMuZGF0YS5kYXRhLnBpY2t1cF9jaXR5O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5waWNrdXBfc3RhdGUgPSByZXMuZGF0YS5kYXRhLnBpY2t1cF9zdGF0ZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmZybV9xdW90ZXMucGljdXBfemlwX2NvZGUgPSByZXMuZGF0YS5kYXRhLnBpY2t1cF96aXA7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLmFkZGl0aW9uYWxfaW5mb3JtYXRpb24gPVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZXMuZGF0YS5kYXRhLmFkZGl0aW9uYWxfaW5mb3JtYXRpb247XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLm1hdGVyaWFsID0gcmVzLmRhdGEuZGF0YS5xdW90ZV9wcm9kdWN0cztcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcmFwX21hdGVyaWFsX3BpY3R1cmVfdXJsID1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmVzLmRhdGEuZGF0YS5tYXRlcmlhbF9pbWFnZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBheGlvc1xyXG4gICAgICAgIC8vICAgICAgICAgLmdldChcImFwaS91c2VyL1wiICsgdGhpcy51c2VyX2lkKVxyXG4gICAgICAgIC8vICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLm5hbWUgPSByZXMuZGF0YS5kYXRhLm5hbWU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLm9yZ2FuaXphdGlvbiA9IHJlcy5kYXRhLmRhdGEub3JnYW5pemF0aW9uO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZnJtX3F1b3Rlcy5lbWFpbCA9IHJlcy5kYXRhLmRhdGEuZW1haWw7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLnBob25lID0gcmVzLmRhdGEuZGF0YS5waG9uZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmZybV9xdW90ZXMuYWRkcmVzc18xID0gcmVzLmRhdGEuZGF0YS5hZGRyZXNzXzE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLmNpdHkgPSByZXMuZGF0YS5kYXRhLmNpdHk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mcm1fcXVvdGVzLnN0YXRlID0gcmVzLmRhdGEuZGF0YS5zdGF0ZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmZybV9xdW90ZXMuemlwX2NvZGUgPSByZXMuZGF0YS5kYXRhLnppcF9jb2RlO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IDE7XHJcbiAgICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnZpZXdfbW9kZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuYWRkSW5mbygpO1xyXG4gICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7fSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImZvcm1cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0ucmV2aXNlX3F1b3RlKFwic3VibWl0XCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LXdhcm5pbmdcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC00IGNvbC1sZy00XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlRpdGxlLlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9yZXZpc2VfcXVvdGVzLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcmV2aXNlX3F1b3Rlcy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZnJtX3JldmlzZV9xdW90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwiU2VsZWN0XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJDb21tZXJjaWFsIFF1b3RhdGlvblwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbW1lcmNpYWwgUXVvdGF0aW9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTIgY29sLWxnLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiVmVyc2lvbiBOby4gXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9yZXZpc2VfcXVvdGVzLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fcmV2aXNlX3F1b3Rlcy52ZXJzaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcmVhZG9ubHk6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3JldmlzZV9xdW90ZXMudmVyc2lvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV9yZXZpc2VfcXVvdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkRlc2NyaXB0aW9uXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV9yZXZpc2VfcXVvdGVzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3JldmlzZV9xdW90ZXMuZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIkVudGVyIENvbW1lbnRzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3JldmlzZV9xdW90ZXMuZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fcmV2aXNlX3F1b3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGJveC1ibGFja1wiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiQWNjZXB0ZWQgZmlsZSB0eXBlIC5qcGcsIC5qcGVnLCAucG5nLCAucGRmLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAueGxzeCAvIFNpemUgOiBNYXggMjBtYlwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uc2NyYXBfbWF0ZXJpYWxfcGljdHVyZV91cmwgIT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLnNjcmFwX21hdGVyaWFsX3BpY3R1cmVfdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5zY3JhcF9tYXRlcmlhbF9waWN0dXJlX3VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiODBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjgwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtOFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcIm1hdGVyaWFsX3BpY3R1clwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdDogXCJpbWFnZS8qXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLnNjcmFwSW5mbyA9PSAxLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0ub25GaWxlQ2hhbmdlIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkdldCBhIFF1b3RlXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEF0dGFjaG1lbnQgU3VtbWFyeSBJbmZvcm1hdGlvblxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJGaWxlIEF0dGFjaG1lbnRcIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LXN1Y2Nlc3NcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1mb290ZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gbGluazIgbXgtMVwiLCBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gbGluazEgbXgtMVwiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1VwbG9hZFF1b3RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZDQ1NGY2NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9VcGxvYWRRdW90ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VwbG9hZFF1b3RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmQ0NTRmNjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmQ0NTRmNjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmQ0NTRmNjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VwbG9hZFF1b3RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZDQ1NGY2NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZDQ1NGY2NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcXVvdGVzL1VwbG9hZFF1b3RlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXBsb2FkUXVvdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VwbG9hZFF1b3RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXBsb2FkUXVvdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJkNDU0ZjY0JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==