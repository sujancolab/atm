(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotes/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotes/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "userlist",
  data: function data() {
    return {
      ppp: 25,
      search: {
        organisation: "",
        type: "",
        name: "",
        phone: "",
        email: ""
      },
      editmode: false,
      ulist: "",
      users: {},
      form: new Form({
        id: "",
        type: "",
        name: "",
        email: "",
        password: "",
        email_verified_at: ""
      })
    };
  },
  watch: {
    ppp: function ppp() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.loadUsers();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    "search.organization": function searchOrganization(n) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (n == "United Scrap Metal") {
                  if (!["Admin", "Finance Team", "Transportation Team", "Sales Team", "CEC"].includes(_this2.search.type)) {
                    _this2.search.type = "";
                  }
                } else {
                  if (!["Primary", "Finance", "Transportation"].includes(_this2.search.type)) {
                    _this2.search.type = "";
                  }
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  methods: {
    deleteUser: function deleteUser(id) {
      var _this3 = this;

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        // Send request to the server
        if (result.value) {
          _this3.form["delete"]("api/user/" + id).then(function () {
            Swal.fire("Deleted!", "Your file has been deleted.", "success"); // Fire.$emit('AfterCreate');

            _this3.loadUsers();
          })["catch"](function (data) {
            Swal.fire("Failed!", data.message, "warning");
          });
        }
      });
    },
    loadUsers: function loadUsers() {
      var _this4 = this;

      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/api/user";
      // if(this.$gate.isAdmin()){
      // axios.get("api/user").then(({ data }) => (this.users = data));
      var UFloder = this.$loading.show({
        container: this.$refs.ref_load_filter_user
      });
      axios.get(url, {
        params: {
          organisation: this.search.organisation,
          type: this.search.type,
          name: this.search.name,
          phone: this.search.phone,
          email: this.search.email,
          ppp: this.ppp
        }
      }).then(function (res) {
        _this4.ulist = res.data.data;
        UFloder.hide();
      })["catch"](function (err) {
        Toast.fire({
          icon: "error",
          title: "Some error occured! Please try again"
        });
        UFloder.hide();
      });
    }
  },
  mounted: function mounted() {
    console.log("User Component mounted.");
  },
  created: function created() {
    this.$Progress.start();
    this.loadUsers();
    this.$Progress.finish();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotes/index.vue?vue&type=template&id=513065f6&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotes/index.vue?vue&type=template&id=513065f6& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "card box-black"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "bottom-box-header"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "pull-right"
  }, [_c("router-link", {
    staticClass: "btn link1",
    attrs: {
      to: "/quotes/add"
    }
  }, [_c("span", [_c("i", {
    staticClass: "fa fa-plus-square-o",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v("\n            Get a Quote\n          ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })]), _vm._v(" "), _vm._m(4)])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", {
    staticClass: "content-header"
  }, [_c("h1", [_vm._v("Quotes")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "card box-warning"
  }, [_c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("Quotation Search")])]), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-2 col-lg-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Yard Location")]), _vm._v(" "), _c("select", {
    staticClass: "form-control"
  }, [_c("option", [_vm._v("select")]), _vm._v(" "), _c("option", [_vm._v("A")]), _vm._v(" "), _c("option", [_vm._v("B")]), _vm._v(" "), _c("option", [_vm._v("C")]), _vm._v(" "), _c("option", [_vm._v("D")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Customer")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Enter Customer..."
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-2 col-lg-2"
  }, [_c("div", {
    staticClass: "form-group calendar-icon"
  }, [_c("label", [_vm._v("Date")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "date"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-2 col-lg-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Status")]), _vm._v(" "), _c("select", {
    staticClass: "form-control"
  }, [_c("option", [_vm._v("select")]), _vm._v(" "), _c("option", [_vm._v("A")]), _vm._v(" "), _c("option", [_vm._v("B")]), _vm._v(" "), _c("option", [_vm._v("C")]), _vm._v(" "), _c("option", [_vm._v("D")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-2 col-lg-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticStyle: {
      display: "block"
    }
  }, [_vm._v("\n                  \n              ")]), _vm._v(" "), _c("button", {
    staticClass: "btn link1",
    attrs: {
      type: "button"
    }
  }, [_vm._v("\n                Filter\n              ")])])])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("Tasks List")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "pull-left"
  }, [_c("div", {
    staticClass: "Showingbox"
  }, [_c("span", {
    staticClass: "pull-left"
  }, [_vm._v("Showing ")]), _vm._v(" "), _c("div", {
    staticClass: "pull-left drop"
  }, [_c("select", {
    staticClass: "form-control"
  }, [_c("option", {
    attrs: {
      value: "25"
    }
  }, [_vm._v("25")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "50"
    }
  }, [_vm._v("50")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "100"
    }
  }, [_vm._v("100")])])]), _vm._v(" "), _c("span", {
    staticClass: "pull-left"
  }, [_vm._v("entries ")]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
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
  }, [_vm._v("\n                    Sl No.\n                  ")]), _vm._v(" "), _c("th", [_vm._v("Customer")]), _vm._v(" "), _c("th", [_vm._v("Yard Location")]), _vm._v(" "), _c("th", [_vm._v("Date")]), _vm._v(" "), _c("th", [_vm._v("Volume")]), _vm._v(" "), _c("th", [_vm._v("Pending With")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "100"
    }
  }, [_vm._v("Status")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("01")]), _vm._v(" "), _c("td", [_c("a", {
    staticClass: "text-green",
    attrs: {
      href: "quote-request.html"
    }
  }, [_vm._v("\n                      Sims Metal\n                    ")])]), _vm._v(" "), _c("td", [_vm._v("Cicero")]), _vm._v(" "), _c("td", [_vm._v("11 July 2022")]), _vm._v(" "), _c("td", [_vm._v("50 MT")]), _vm._v(" "), _c("td", [_vm._v("Shyamsundar Bera")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "badge bg-primary"
  }, [_vm._v("Submitted")])])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("02")]), _vm._v(" "), _c("td", [_c("a", {
    staticClass: "text-green",
    attrs: {
      href: "quote-request.html"
    }
  }, [_vm._v("\n                      Greenway Metal Recycling Inc.\n                    ")])]), _vm._v(" "), _c("td", [_vm._v("Charlotte")]), _vm._v(" "), _c("td", [_vm._v("09 July 2022")]), _vm._v(" "), _c("td", [_vm._v("20 MT")]), _vm._v(" "), _c("td", [_vm._v("Debabrata Samanta")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "badge bg-primary"
  }, [_vm._v("Submitted")])])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("03")]), _vm._v(" "), _c("td", [_c("a", {
    staticClass: "text-green",
    attrs: {
      href: "quote-request.html"
    }
  }, [_vm._v("\n                      Windy City Iron & Metal\n                    ")])]), _vm._v(" "), _c("td", [_vm._v("Philly")]), _vm._v(" "), _c("td", [_vm._v("05 July 2022")]), _vm._v(" "), _c("td", [_vm._v("05 MT")]), _vm._v(" "), _c("td", [_vm._v("Shyamsundar Bera")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "badge bg-red"
  }, [_vm._v("Pending\n                    ")])])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("04")]), _vm._v(" "), _c("td", [_c("a", {
    staticClass: "text-green",
    attrs: {
      href: "quote-request.html"
    }
  }, [_vm._v("\n                      Safron Metal Co.\n                    ")])]), _vm._v(" "), _c("td", [_vm._v("St. Louis")]), _vm._v(" "), _c("td", [_vm._v("05 July 2022")]), _vm._v(" "), _c("td", [_vm._v("12 MT")]), _vm._v(" "), _c("td", [_vm._v("Debabrata Samanta")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "badge bg-red"
  }, [_vm._v("Pending\n                    ")])])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("05")]), _vm._v(" "), _c("td", [_c("a", {
    staticClass: "text-green",
    attrs: {
      href: "quote-request.html"
    }
  }, [_vm._v("\n                      J&S Metals\n                    ")])]), _vm._v(" "), _c("td", [_vm._v("Richmond")]), _vm._v(" "), _c("td", [_vm._v("05 July 2022")]), _vm._v(" "), _c("td", [_vm._v("100 MT")]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "badge bg-green"
  }, [_vm._v("Approved")])])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("06")]), _vm._v(" "), _c("td", [_c("a", {
    staticClass: "text-green",
    attrs: {
      href: "quote-request.html"
    }
  }, [_vm._v("\n                      JB Scrap Metal\n                    ")])]), _vm._v(" "), _c("td", [_vm._v("Shelbyville")]), _vm._v(" "), _c("td", [_vm._v("05 July 2022")]), _vm._v(" "), _c("td", [_vm._v("100 MT")]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "badge bg-warning"
  }, [_vm._v("Declined")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "paginationsectionbox"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-5 col-lg-5"
  }, [_c("div", {
    staticClass: "Showingboxto1"
  }, [_vm._v("\n                Showing 1 to 18 of 18 results\n              ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-7 col-lg-7"
  }, [_c("div", {
    staticClass: "Showingboxto2"
  }, [_c("ul", [_c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "fa fa-angle-double-left",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v("\n                      Previous")])]), _vm._v(" "), _c("li", {
    staticClass: "paginate_button active"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("1")])]), _vm._v(" "), _c("li", {
    staticClass: "paginate_button"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("2")])]), _vm._v(" "), _c("li", {
    staticClass: "paginate_button"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("3")])]), _vm._v(" "), _c("li", {
    staticClass: "paginate_button"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("4")])]), _vm._v(" "), _c("li", {
    staticClass: "paginate_button"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("5")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("\n                      Next\n                      "), _c("i", {
    staticClass: "fa fa-angle-double-right",
    attrs: {
      "aria-hidden": "true"
    }
  })])])])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/quotes/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/quotes/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_513065f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=513065f6& */ "./resources/js/components/quotes/index.vue?vue&type=template&id=513065f6&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/quotes/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_513065f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_513065f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/quotes/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/quotes/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/quotes/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotes/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/quotes/index.vue?vue&type=template&id=513065f6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/quotes/index.vue?vue&type=template&id=513065f6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_513065f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=513065f6& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotes/index.vue?vue&type=template&id=513065f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_513065f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_513065f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcXVvdGVzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3F1b3Rlcy9pbmRleC52dWU/NDIxNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvaW5kZXgudnVlPzRmNjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcXVvdGVzL2luZGV4LnZ1ZT85MDE5Il0sIm5hbWVzIjpbIm5hbWUiLCJkYXRhIiwicHBwIiwic2VhcmNoIiwib3JnYW5pc2F0aW9uIiwidHlwZSIsInBob25lIiwiZW1haWwiLCJlZGl0bW9kZSIsInVsaXN0IiwidXNlcnMiLCJmb3JtIiwiaWQiLCJwYXNzd29yZCIsImVtYWlsX3ZlcmlmaWVkX2F0Iiwid2F0Y2giLCJuIiwiaW5jbHVkZXMiLCJtZXRob2RzIiwiZGVsZXRlVXNlciIsIlN3YWwiLCJ0aXRsZSIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJsb2FkVXNlcnMiLCJjb250YWluZXIiLCJheGlvcyIsImdldCIsInVybCIsInBhcmFtcyIsIlVGbG9kZXIiLCJUb2FzdCIsImljb24iLCJtb3VudGVkIiwiY29uc29sZSIsImNyZWF0ZWQiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwiX20iLCJfdiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJ0byIsInN0YXRpY1JlbmRlckZucyIsInBsYWNlaG9sZGVyIiwic3RhdGljU3R5bGUiLCJkaXNwbGF5IiwidmFsdWUiLCJ3aWR0aCIsImFsaWduIiwiaHJlZiIsIl93aXRoU3RyaXBwZWQiXSwibWFw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LFdBQVcsRUFBRSwwQkFEUDtJQUVOQyxLQUFLLEVBQUU7TUFBRSxlQUFlO0lBQWpCO0VBRkQsQ0FBTixDQUo4QixDQUFoQyxDQURLLENBQVAsQ0EvQkssQ0FBUCxDQUR3QyxDQUExQyxDQURnRSxDQUFsRSxDQVQ4QixDQUFoQyxDQUQrQyxDQUFqRCxDQXhPMEMsQ0FBckMsQ0FBVDtBQW9TRCxDQXBhbUIsQ0FBdEI7QUFzYUFQLE1BQU0sQ0FBQ2lCLGFBQVAsR0FBdUIsSUFBdkI7Ozs7Ozs7Ozs7Ozs7QUNsZEE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xLmJ1bmRsZS40NTI1NjBjNmM3ZGNhNjYwNTAwYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICA8aDE+UXVvdGVzPC9oMT5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtd2FybmluZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGUgY2FyZC10ZXh0XCI+UXVvdGF0aW9uIFNlYXJjaDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0yIGNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5ZYXJkIExvY2F0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5zZWxlY3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+Qjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPkM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5EPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5DdXN0b21lcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ3VzdG9tZXIuLi5cIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTIgY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjYWxlbmRhci1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMiBjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+U3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5zZWxlY3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+Qjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPkM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5EPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0yIGNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGxpbmsxXCI+XHJcbiAgICAgICAgICAgICAgICAgIEZpbHRlclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtYmxhY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlRhc2tzIExpc3Q8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b20tYm94LWhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiU2hvd2luZ2JveFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHVsbC1sZWZ0XCI+U2hvd2luZyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdCBkcm9wXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyNVwiPjI1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MFwiPjUwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDBcIj4xMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHVsbC1sZWZ0XCI+ZW50cmllcyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvcXVvdGVzL2FkZFwiIGNsYXNzPVwiYnRuIGxpbmsxXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3M9XCJmYSBmYS1wbHVzLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICBHZXQgYSBRdW90ZVxyXG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIiB3aWR0aD1cIjcwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTbCBOby5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5DdXN0b21lcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPllhcmQgTG9jYXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Vm9sdW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+UGVuZGluZyBXaXRoPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggd2lkdGg9XCIxMDBcIj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPjAxPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicXVvdGUtcmVxdWVzdC5odG1sXCIgY2xhc3M9XCJ0ZXh0LWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpbXMgTWV0YWxcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5DaWNlcm88L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4xMSBKdWx5IDIwMjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD41MCBNVDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlNoeWFtc3VuZGFyIEJlcmE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmctcHJpbWFyeVwiPlN1Ym1pdHRlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJxdW90ZS1yZXF1ZXN0Lmh0bWxcIiBjbGFzcz1cInRleHQtZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR3JlZW53YXkgTWV0YWwgUmVjeWNsaW5nIEluYy5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5DaGFybG90dGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4wOSBKdWx5IDIwMjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4yMCBNVDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPkRlYmFicmF0YSBTYW1hbnRhPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJnLXByaW1hcnlcIj5TdWJtaXR0ZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPjAzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicXVvdGUtcmVxdWVzdC5odG1sXCIgY2xhc3M9XCJ0ZXh0LWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdpbmR5IENpdHkgSXJvbiAmIE1ldGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+UGhpbGx5PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+MDUgSnVseSAyMDIyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+MDUgTVQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TaHlhbXN1bmRhciBCZXJhPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJnLXJlZFwiPlBlbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJxdW90ZS1yZXF1ZXN0Lmh0bWxcIiBjbGFzcz1cInRleHQtZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2Fmcm9uIE1ldGFsIENvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlN0LiBMb3VpczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjA1IEp1bHkgMjAyMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjEyIE1UPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+RGViYWJyYXRhIFNhbWFudGE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmctcmVkXCI+UGVuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj4wNTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInF1b3RlLXJlcXVlc3QuaHRtbFwiIGNsYXNzPVwidGV4dC1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKJlMgTWV0YWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+UmljaG1vbmQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4wNSBKdWx5IDIwMjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4xMDAgTVQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4tPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJnLWdyZWVuXCI+QXBwcm92ZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPjA2PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicXVvdGUtcmVxdWVzdC5odG1sXCIgY2xhc3M9XCJ0ZXh0LWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpCIFNjcmFwIE1ldGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+U2hlbGJ5dmlsbGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4wNSBKdWx5IDIwMjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4xMDAgTVQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4tPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJnLXdhcm5pbmdcIj5EZWNsaW5lZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb25zZWN0aW9uYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNSBjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlNob3dpbmdib3h0bzFcIj5cclxuICAgICAgICAgICAgICAgICAgU2hvd2luZyAxIHRvIDE4IG9mIDE4IHJlc3VsdHNcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC03IGNvbC1sZy03XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiU2hvd2luZ2JveHRvMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmV2aW91czwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2luYXRlX2J1dHRvbiBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+MTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2luYXRlX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj4yPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnaW5hdGVfYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdpbmF0ZV9idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+NDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2luYXRlX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj41PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcInVzZXJsaXN0XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBwcDogMjUsXHJcbiAgICAgIHNlYXJjaDoge1xyXG4gICAgICAgIG9yZ2FuaXNhdGlvbjogXCJcIixcclxuICAgICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGVkaXRtb2RlOiBmYWxzZSxcclxuICAgICAgdWxpc3Q6IFwiXCIsXHJcbiAgICAgIHVzZXJzOiB7fSxcclxuICAgICAgZm9ybTogbmV3IEZvcm0oe1xyXG4gICAgICAgIGlkOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBlbWFpbF92ZXJpZmllZF9hdDogXCJcIixcclxuICAgICAgfSksXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGFzeW5jIHBwcCgpIHtcclxuICAgICAgYXdhaXQgdGhpcy5sb2FkVXNlcnMoKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBcInNlYXJjaC5vcmdhbml6YXRpb25cIihuKSB7XHJcbiAgICAgIGlmIChuID09IFwiVW5pdGVkIFNjcmFwIE1ldGFsXCIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhW1xyXG4gICAgICAgICAgICBcIkFkbWluXCIsXHJcbiAgICAgICAgICAgIFwiRmluYW5jZSBUZWFtXCIsXHJcbiAgICAgICAgICAgIFwiVHJhbnNwb3J0YXRpb24gVGVhbVwiLFxyXG4gICAgICAgICAgICBcIlNhbGVzIFRlYW1cIixcclxuICAgICAgICAgICAgXCJDRUNcIixcclxuICAgICAgICAgIF0uaW5jbHVkZXModGhpcy5zZWFyY2gudHlwZSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoLnR5cGUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhW1wiUHJpbWFyeVwiLCBcIkZpbmFuY2VcIiwgXCJUcmFuc3BvcnRhdGlvblwiXS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2gudHlwZVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2gudHlwZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZGVsZXRlVXNlcihpZCkge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcclxuICAgICAgICB0ZXh0OiBcIllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzIVwiLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBkZWxldGUgaXQhXCIsXHJcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vIFNlbmQgcmVxdWVzdCB0byB0aGUgc2VydmVyXHJcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5mb3JtXHJcbiAgICAgICAgICAgIC5kZWxldGUoXCJhcGkvdXNlci9cIiArIGlkKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgU3dhbC5maXJlKFxyXG4gICAgICAgICAgICAgICAgXCJEZWxldGVkIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJZb3VyIGZpbGUgaGFzIGJlZW4gZGVsZXRlZC5cIixcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAvLyBGaXJlLiRlbWl0KCdBZnRlckNyZWF0ZScpO1xyXG4gICAgICAgICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIFN3YWwuZmlyZShcIkZhaWxlZCFcIiwgZGF0YS5tZXNzYWdlLCBcIndhcm5pbmdcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbG9hZFVzZXJzKHVybCA9IFwiL2FwaS91c2VyXCIpIHtcclxuICAgICAgLy8gaWYodGhpcy4kZ2F0ZS5pc0FkbWluKCkpe1xyXG4gICAgICAvLyBheGlvcy5nZXQoXCJhcGkvdXNlclwiKS50aGVuKCh7IGRhdGEgfSkgPT4gKHRoaXMudXNlcnMgPSBkYXRhKSk7XHJcbiAgICAgIGxldCBVRmxvZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHtcclxuICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfZmlsdGVyX3VzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQodXJsLCB7XHJcbiAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgb3JnYW5pc2F0aW9uOiB0aGlzLnNlYXJjaC5vcmdhbmlzYXRpb24sXHJcbiAgICAgICAgICAgIHR5cGU6IHRoaXMuc2VhcmNoLnR5cGUsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuc2VhcmNoLm5hbWUsXHJcbiAgICAgICAgICAgIHBob25lOiB0aGlzLnNlYXJjaC5waG9uZSxcclxuICAgICAgICAgICAgZW1haWw6IHRoaXMuc2VhcmNoLmVtYWlsLFxyXG4gICAgICAgICAgICBwcHA6IHRoaXMucHBwLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMudWxpc3QgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgVUZsb2Rlci5oaWRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiU29tZSBlcnJvciBvY2N1cmVkISBQbGVhc2UgdHJ5IGFnYWluXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFVGbG9kZXIuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlVzZXIgQ29tcG9uZW50IG1vdW50ZWQuXCIpO1xyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICB0aGlzLmxvYWRVc2VycygpO1xyXG4gICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgIF92bS5fbSgxKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LWJsYWNrXCIgfSwgW1xuICAgICAgICBfdm0uX20oMiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tLWJveC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsxXCIsIGF0dHJzOiB7IHRvOiBcIi9xdW90ZXMvYWRkXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1cy1zcXVhcmUtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIEdldCBhIFF1b3RlXFxuICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oNCksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiUXVvdGVzXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGJveC13YXJuaW5nXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIGNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJRdW90YXRpb24gU2VhcmNoXCIpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMiBjb2wtbGctMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiWWFyZCBMb2NhdGlvblwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNlbGVjdFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwic2VsZWN0XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwiQVwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcIkJcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJDXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwiRFwiKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJDdXN0b21lclwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgQ3VzdG9tZXIuLi5cIiB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0yIGNvbC1sZy0yXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIGNhbGVuZGFyLWljb25cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkRhdGVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJkYXRlXCIgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMiBjb2wtbGctMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiU3RhdHVzXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic2VsZWN0XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJzZWxlY3RcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJBXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwiQlwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcIkNcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJEXCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTIgY29sLWxnLTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNTdHlsZTogeyBkaXNwbGF5OiBcImJsb2NrXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIMKgwqBcXG4gICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gbGluazFcIiwgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBGaWx0ZXJcXG4gICAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgY2FyZC10ZXh0XCIgfSwgW192bS5fdihcIlRhc2tzIExpc3RcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiU2hvd2luZ2JveFwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIgfSwgW192bS5fdihcIlNob3dpbmcgXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0IGRyb3BcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzZWxlY3RcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIiB9LCBbXG4gICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjI1XCIgfSB9LCBbX3ZtLl92KFwiMjVcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjUwXCIgfSB9LCBbX3ZtLl92KFwiNTBcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjEwMFwiIH0gfSwgW192bS5fdihcIjEwMFwiKV0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIgfSwgW192bS5fdihcImVudHJpZXMgXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9KSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlc2VjdGlvblwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIgfSwgW1xuICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB3aWR0aDogXCI3MFwiIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgU2wgTm8uXFxuICAgICAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDdXN0b21lclwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiWWFyZCBMb2NhdGlvblwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRGF0ZVwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVm9sdW1lXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJQZW5kaW5nIFdpdGhcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyB3aWR0aDogXCIxMDBcIiB9IH0sIFtfdm0uX3YoXCJTdGF0dXNcIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIjAxXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZ3JlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcInF1b3RlLXJlcXVlc3QuaHRtbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBTaW1zIE1ldGFsXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJDaWNlcm9cIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIjExIEp1bHkgMjAyMlwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiNTAgTVRcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIlNoeWFtc3VuZGFyIEJlcmFcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmctcHJpbWFyeVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU3VibWl0dGVkXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiMDJcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwicXVvdGUtcmVxdWVzdC5odG1sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIEdyZWVud2F5IE1ldGFsIFJlY3ljbGluZyBJbmMuXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJDaGFybG90dGVcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIjA5IEp1bHkgMjAyMlwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiMjAgTVRcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkRlYmFicmF0YSBTYW1hbnRhXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJnLXByaW1hcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlN1Ym1pdHRlZFwiKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIjAzXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZ3JlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcInF1b3RlLXJlcXVlc3QuaHRtbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBXaW5keSBDaXR5IElyb24gJiBNZXRhbFxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiUGhpbGx5XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCIwNSBKdWx5IDIwMjJcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIjA1IE1UXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJTaHlhbXN1bmRhciBCZXJhXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJnLXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUGVuZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiMDRcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwicXVvdGUtcmVxdWVzdC5odG1sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIFNhZnJvbiBNZXRhbCBDby5cXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIlN0LiBMb3Vpc1wiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiMDUgSnVseSAyMDIyXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCIxMiBNVFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiRGViYWJyYXRhIFNhbWFudGFcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmctcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQZW5kaW5nXFxuICAgICAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtfdm0uX3YoXCIwNVwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJxdW90ZS1yZXF1ZXN0Lmh0bWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgSiZTIE1ldGFsc1xcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiUmljaG1vbmRcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIjA1IEp1bHkgMjAyMlwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiMTAwIE1UXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCItXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJnLWdyZWVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBcHByb3ZlZFwiKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIjA2XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZ3JlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcInF1b3RlLXJlcXVlc3QuaHRtbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBKQiBTY3JhcCBNZXRhbFxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiU2hlbGJ5dmlsbGVcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIjA1IEp1bHkgMjAyMlwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiMTAwIE1UXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCItXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJnLXdhcm5pbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRlY2xpbmVkXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uc2VjdGlvbmJveFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC01IGNvbC1sZy01XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJTaG93aW5nYm94dG8xXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgU2hvd2luZyAxIHRvIDE4IG9mIDE4IHJlc3VsdHNcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNyBjb2wtbGctN1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiU2hvd2luZ2JveHRvMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1hbmdsZS1kb3VibGUtbGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICBQcmV2aW91c1wiKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRlX2J1dHRvbiBhY3RpdmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtfdm0uX3YoXCIxXCIpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGVfYnV0dG9uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbX3ZtLl92KFwiMlwiKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRlX2J1dHRvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW192bS5fdihcIjNcIildKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0ZV9idXR0b25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtfdm0uX3YoXCI0XCIpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGVfYnV0dG9uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbX3ZtLl92KFwiNVwiKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIE5leHRcXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTEzMDY1ZjYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxob3N0aW5nZXJcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUxMzA2NWY2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUxMzA2NWY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUxMzA2NWY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTEzMDY1ZjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTEzMDY1ZjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3F1b3Rlcy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTMwNjVmNiZcIiJdLCJzb3VyY2VSb290IjoiIn0=