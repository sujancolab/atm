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
                return _this.loadQuotes();

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
    // deleteUser(id) {
    //   Swal.fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     showCancelButton: true,
    //     confirmButtonColor: "#d33",
    //     cancelButtonColor: "#3085d6",
    //     confirmButtonText: "Yes, delete it!",
    //   }).then((result) => {
    //     // Send request to the server
    //     if (result.value) {
    //       this.form
    //         .delete("api/user/" + id)
    //         .then(() => {
    //           Swal.fire(
    //             "Deleted!",
    //             "Your file has been deleted.",
    //             "success"
    //           );
    //           // Fire.$emit('AfterCreate');
    //           this.loadQuotes();
    //         })
    //         .catch((data) => {
    //           Swal.fire("Failed!", data.message, "warning");
    //         });
    //     }
    //   });
    // },
    loadQuotes: function loadQuotes() {
      var _this3 = this;

      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/api/quotes";
      // if(this.$gate.isAdmin()){
      // axios.get("api/user").then(({ data }) => (this.users = data));
      var UFloder = this.$loading.show({
        container: this.$refs.ref_load_filter_quotes
      });
      axios.get(url, {
        params: {
          yard_location: this.search.yard_location,
          name: this.search.name,
          date: this.search.date,
          status: this.search.status,
          ppp: this.ppp
        }
      }).then(function (res) {
        _this3.ulist = res.data.data;
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
    this.loadQuotes();
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
    ref: "ref_load_filter_quotes",
    staticClass: "content vld-parent"
  }, [_c("div", {
    staticClass: "card box-warning"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("form", {
    staticClass: "row",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.loadQuotes();
      }
    }
  }, [_vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-2 col-lg-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Status")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search.status,
      expression: "search.status"
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

        _vm.$set(_vm.search, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "Submitted"
    }
  }, [_vm._v("Submitted")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Pending"
    }
  }, [_vm._v("Pending")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Approved"
    }
  }, [_vm._v("Approved")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Declined"
    }
  }, [_vm._v("Declined")])])])]), _vm._v(" "), _vm._m(5)])])]), _vm._v(" "), _c("div", {
    staticClass: "card box-black"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "bottom-box-header"
  }, [_c("div", {
    staticClass: "pull-left"
  }, [_c("div", {
    staticClass: "Showingbox"
  }, [_c("span", {
    staticClass: "pull-left"
  }, [_vm._v("Showing ")]), _vm._v(" "), _c("div", {
    staticClass: "pull-left drop"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ppp,
      expression: "ppp"
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
        _vm.ppp = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
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
  })])]), _vm._v(" "), _c("div", {
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
  })]), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "tablesection"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-striped table-hover"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", _vm._l(_vm.ulist.data, function (ua, x) {
    return _c("tr", {
      key: ua.id
    }, [_c("td", {
      attrs: {
        align: "center"
      }
    }, [_vm._v(_vm._s(x + 1))]), _vm._v(" "), _c("td", [_c("router-link", {
      staticClass: "text-green",
      attrs: {
        to: "/quotes/edit/" + ua.id
      }
    }, [_vm._v(_vm._s(ua.name))])], 1), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("myDate")(ua.created_at)))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v(_vm._s(ua.pending_with))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge",
      "class": ua.status == "Approved" ? "bg-green" : ua.status == "Pending" ? "bg-yellow" : "bg-red"
    }, [_vm._v(_vm._s(ua.status))])])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "paginationsectionbox"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-5 col-lg-5"
  }, [_c("div", {
    staticClass: "Showingboxto1"
  }, [_vm._v("\n                Showing " + _vm._s(_vm.ulist.from) + " to\n                " + _vm._s(_vm.ulist.to) + " of " + _vm._s(_vm.ulist.total) + " results\n              ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-7 col-lg-7"
  }, [_c("div", {
    staticClass: "Showingboxto2"
  }, [_c("ul", _vm._l(_vm.ulist.links, function (links, index) {
    return _c("li", {
      key: index,
      "class": {
        "active disabled": links.active,
        disabled: !links.url,
        paginate_button: index != 0 && index + 1 != _vm.ulist.links.length
      }
    }, [_c("a", {
      attrs: {
        href: "javascript:void(0);"
      },
      domProps: {
        innerHTML: _vm._s(links.label)
      },
      on: {
        click: function click($event) {
          return _vm.loadQuotes(links.url);
        }
      }
    })]);
  }), 0)])])])])])])])]);
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
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("Quotation Search")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-2 col-lg-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Yard Location")]), _vm._v(" "), _c("select", {
    staticClass: "form-control"
  }, [_c("option", [_vm._v("select")]), _vm._v(" "), _c("option", [_vm._v("A")]), _vm._v(" "), _c("option", [_vm._v("B")]), _vm._v(" "), _c("option", [_vm._v("C")]), _vm._v(" "), _c("option", [_vm._v("D")])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Customer")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Enter Customer..."
    }
  })])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-2 col-lg-2"
  }, [_c("div", {
    staticClass: "form-group calendar-icon"
  }, [_c("label", [_vm._v("Date")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "date"
    }
  })])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
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
  }, [_vm._v("\n                Filter\n              ")])])]);
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

  return _c("thead", [_c("tr", [_c("th", {
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
  }, [_vm._v("Status")])])]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcXVvdGVzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3F1b3Rlcy9pbmRleC52dWU/NDIxNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9xdW90ZXMvaW5kZXgudnVlPzRmNjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcXVvdGVzL2luZGV4LnZ1ZT85MDE5Il0sIm5hbWVzIjpbIm5hbWUiLCJkYXRhIiwicHBwIiwic2VhcmNoIiwib3JnYW5pc2F0aW9uIiwidHlwZSIsInBob25lIiwiZW1haWwiLCJlZGl0bW9kZSIsInVsaXN0IiwidXNlcnMiLCJmb3JtIiwiaWQiLCJwYXNzd29yZCIsImVtYWlsX3ZlcmlmaWVkX2F0Iiwid2F0Y2giLCJuIiwiaW5jbHVkZXMiLCJtZXRob2RzIiwibG9hZFF1b3RlcyIsImNvbnRhaW5lciIsImF4aW9zIiwiZ2V0IiwidXJsIiwicGFyYW1zIiwieWFyZF9sb2NhdGlvbiIsImRhdGUiLCJzdGF0dXMiLCJ0aGVuIiwiVUZsb2RlciIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwibW91bnRlZCIsImNvbnNvbGUiLCJjcmVhdGVkIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsIl9tIiwiX3YiLCJyZWYiLCJzdGF0aWNDbGFzcyIsIm9uIiwic3VibWl0IiwiJGV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsInZhbHVlIiwiZXhwcmVzc2lvbiIsImNoYW5nZSIsIiQkc2VsZWN0ZWRWYWwiLCJBcnJheSIsInByb3RvdHlwZSIsImZpbHRlciIsImNhbGwiLCJ0YXJnZXQiLCJvcHRpb25zIiwibyIsInNlbGVjdGVkIiwibWFwIiwidmFsIiwiX3ZhbHVlIiwiJHNldCIsIm11bHRpcGxlIiwiYXR0cnMiLCJ0byIsIl9sIiwidWEiLCJ4Iiwia2V5IiwiYWxpZ24iLCJfcyIsIl9mIiwiY3JlYXRlZF9hdCIsInBlbmRpbmdfd2l0aCIsImZyb20iLCJ0b3RhbCIsImxpbmtzIiwiaW5kZXgiLCJhY3RpdmUiLCJkaXNhYmxlZCIsInBhZ2luYXRlX2J1dHRvbiIsImxlbmd0aCIsImhyZWYiLCJkb21Qcm9wcyIsImlubmVySFRNTCIsImxhYmVsIiwiY2xpY2siLCJzdGF0aWNSZW5kZXJGbnMiLCJwbGFjZWhvbGRlciIsInN0YXRpY1N0eWxlIiwiZGlzcGxheSIsIndpZHRoIiwiX3dpdGhTdHJpcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzsrQ0FpS0Esb0o7Ozs7OztBQUFlO0VBQ2ZBLGdCQURBO0VBRUFDLElBRkEsa0JBRUE7SUFDQTtNQUNBQyxPQURBO01BRUFDO1FBQ0FDLGdCQURBO1FBRUFDLFFBRkE7UUFHQUwsUUFIQTtRQUlBTSxTQUpBO1FBS0FDO01BTEEsQ0FGQTtNQVNBQyxlQVRBO01BVUFDLFNBVkE7TUFXQUMsU0FYQTtNQVlBQztRQUNBQyxNQURBO1FBRUFQLFFBRkE7UUFHQUwsUUFIQTtRQUlBTyxTQUpBO1FBS0FNLFlBTEE7UUFNQUM7TUFOQTtJQVpBO0VBcUJBLENBeEJBO0VBeUJBQztJQUNBYixHQURBLGlCQUNBO01BQUE7O01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQSxPQUNBLGtCQURBOztjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBLENBSEE7SUFJQSxxQkFKQSw4QkFJQWMsQ0FKQSxFQUlBO01BQUE7O01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFDQTtrQkFDQSxJQUNBLEVBQ0EsT0FEQSxFQUVBLGNBRkEsRUFHQSxxQkFIQSxFQUlBLFlBSkEsRUFLQSxLQUxBLEVBTUFDLFFBTkEsQ0FNQSxrQkFOQSxDQURBLEVBUUE7b0JBQ0E7a0JBQ0E7Z0JBQ0EsQ0FaQSxN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RTtNQUFFNEIsS0FBSyxFQUFFO0lBQVQ7RUFBVCxDQUFQLEVBQW9DLENBQUMxRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxRQUFQLENBQUQsQ0FBcEMsQ0FqQkssQ0FBUCxDQURlLENBQVYsQ0FBVDtBQXFCRCxDQTdHbUIsQ0FBdEI7QUErR0FMLE1BQU0sQ0FBQzRELGFBQVAsR0FBdUIsSUFBdkI7Ozs7Ozs7Ozs7Ozs7QUNyYUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xLmJ1bmRsZS4wOGQ3ZjU3OGUzZmRhMTczOTdmMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICA8aDE+UXVvdGVzPC9oMT5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudCB2bGQtcGFyZW50XCIgcmVmPVwicmVmX2xvYWRfZmlsdGVyX3F1b3Rlc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtd2FybmluZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGUgY2FyZC10ZXh0XCI+UXVvdGF0aW9uIFNlYXJjaDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcblxyXG4gICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwibG9hZFF1b3RlcygpXCIgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTIgY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPllhcmQgTG9jYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPnNlbGVjdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPkE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5CPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+Qzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPkQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkN1c3RvbWVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDdXN0b21lci4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMiBjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNhbGVuZGFyLWljb25cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5EYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0yIGNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJzZWFyY2guc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdWJtaXR0ZWRcIj5TdWJtaXR0ZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBlbmRpbmdcIj5QZW5kaW5nPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcHByb3ZlZFwiPkFwcHJvdmVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEZWNsaW5lZFwiPkRlY2xpbmVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0yIGNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGxpbmsxXCI+XHJcbiAgICAgICAgICAgICAgICAgIEZpbHRlclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LWJsYWNrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZSBjYXJkLXRleHRcIj5UYXNrcyBMaXN0PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWJveC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlNob3dpbmdib3hcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInB1bGwtbGVmdFwiPlNob3dpbmcgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnQgZHJvcFwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJwcHBcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI1XCI+MjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMFwiPjEwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLWxlZnRcIj5lbnRyaWVzIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9xdW90ZXMvYWRkXCIgY2xhc3M9XCJidG4gbGluazFcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImZhIGZhLXBsdXMtc3F1YXJlLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIEdldCBhIFF1b3RlXHJcbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiIHdpZHRoPVwiNzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNsIE5vLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkN1c3RvbWVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+WWFyZCBMb2NhdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Wb2x1bWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5QZW5kaW5nIFdpdGg8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjEwMFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIodWEsIHgpIGluIHVsaXN0LmRhdGFcIiA6a2V5PVwidWEuaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj57eyB4ICsgMSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cIicvcXVvdGVzL2VkaXQvJyArIHVhLmlkXCIgY2xhc3M9XCJ0ZXh0LWdyZWVuXCI+e3sgdWEubmFtZSB9fTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdWEuY3JlYXRlZF9hdCB8IG15RGF0ZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHVhLnBlbmRpbmdfd2l0aCB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIDpjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1YS5zdGF0dXMgPT0gJ0FwcHJvdmVkJyA/ICdiZy1ncmVlbicgOiB1YS5zdGF0dXMgPT0gJ1BlbmRpbmcnID8gJ2JnLXllbGxvdycgOiAnYmctcmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCI+e3sgdWEuc3RhdHVzIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbnNlY3Rpb25ib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC01IGNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiU2hvd2luZ2JveHRvMVwiPlxyXG4gICAgICAgICAgICAgICAgICBTaG93aW5nIHt7IHVsaXN0LmZyb20gfX0gdG9cclxuICAgICAgICAgICAgICAgICAge3sgdWxpc3QudG8gfX0gb2Yge3sgdWxpc3QudG90YWwgfX0gcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTcgY29sLWxnLTdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJTaG93aW5nYm94dG8yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzLCBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgaW4gdWxpc3QubGlua3NcIiA6a2V5PVwiaW5kZXhcIiA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWN0aXZlIGRpc2FibGVkJzogbGlua3MuYWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFsaW5rcy51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0ZV9idXR0b246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICE9IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKyAxICE9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsaXN0LmxpbmtzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHYtaHRtbD1cImxpbmtzLmxhYmVsXCIgQGNsaWNrPVwibG9hZFF1b3RlcyhsaW5rcy51cmwpXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJ1c2VybGlzdFwiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcHA6IDI1LFxyXG4gICAgICBzZWFyY2g6IHtcclxuICAgICAgICBvcmdhbmlzYXRpb246IFwiXCIsXHJcbiAgICAgICAgdHlwZTogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIHBob25lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBlZGl0bW9kZTogZmFsc2UsXHJcbiAgICAgIHVsaXN0OiBcIlwiLFxyXG4gICAgICB1c2Vyczoge30sXHJcbiAgICAgIGZvcm06IG5ldyBGb3JtKHtcclxuICAgICAgICBpZDogXCJcIixcclxuICAgICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgZW1haWxfdmVyaWZpZWRfYXQ6IFwiXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBhc3luYyBwcHAoKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMubG9hZFF1b3RlcygpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIFwic2VhcmNoLm9yZ2FuaXphdGlvblwiKG4pIHtcclxuICAgICAgaWYgKG4gPT0gXCJVbml0ZWQgU2NyYXAgTWV0YWxcIikge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFbXHJcbiAgICAgICAgICAgIFwiQWRtaW5cIixcclxuICAgICAgICAgICAgXCJGaW5hbmNlIFRlYW1cIixcclxuICAgICAgICAgICAgXCJUcmFuc3BvcnRhdGlvbiBUZWFtXCIsXHJcbiAgICAgICAgICAgIFwiU2FsZXMgVGVhbVwiLFxyXG4gICAgICAgICAgICBcIkNFQ1wiLFxyXG4gICAgICAgICAgXS5pbmNsdWRlcyh0aGlzLnNlYXJjaC50eXBlKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2gudHlwZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFbXCJQcmltYXJ5XCIsIFwiRmluYW5jZVwiLCBcIlRyYW5zcG9ydGF0aW9uXCJdLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50eXBlXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaC50eXBlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvLyBkZWxldGVVc2VyKGlkKSB7XHJcbiAgICAvLyAgIFN3YWwuZmlyZSh7XHJcbiAgICAvLyAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgLy8gICAgIHRleHQ6IFwiWW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhXCIsXHJcbiAgICAvLyAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgIC8vICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgLy8gICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgIC8vICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGRlbGV0ZSBpdCFcIixcclxuICAgIC8vICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAvLyAgICAgLy8gU2VuZCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXJcclxuICAgIC8vICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAvLyAgICAgICB0aGlzLmZvcm1cclxuICAgIC8vICAgICAgICAgLmRlbGV0ZShcImFwaS91c2VyL1wiICsgaWQpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICBTd2FsLmZpcmUoXHJcbiAgICAvLyAgICAgICAgICAgICBcIkRlbGV0ZWQhXCIsXHJcbiAgICAvLyAgICAgICAgICAgICBcIllvdXIgZmlsZSBoYXMgYmVlbiBkZWxldGVkLlwiLFxyXG4gICAgLy8gICAgICAgICAgICAgXCJzdWNjZXNzXCJcclxuICAgIC8vICAgICAgICAgICApO1xyXG4gICAgLy8gICAgICAgICAgIC8vIEZpcmUuJGVtaXQoJ0FmdGVyQ3JlYXRlJyk7XHJcbiAgICAvLyAgICAgICAgICAgdGhpcy5sb2FkUXVvdGVzKCk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaCgoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgIFN3YWwuZmlyZShcIkZhaWxlZCFcIiwgZGF0YS5tZXNzYWdlLCBcIndhcm5pbmdcIik7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9LFxyXG4gICAgbG9hZFF1b3Rlcyh1cmwgPSBcIi9hcGkvcXVvdGVzXCIpIHtcclxuICAgICAgLy8gaWYodGhpcy4kZ2F0ZS5pc0FkbWluKCkpe1xyXG4gICAgICAvLyBheGlvcy5nZXQoXCJhcGkvdXNlclwiKS50aGVuKCh7IGRhdGEgfSkgPT4gKHRoaXMudXNlcnMgPSBkYXRhKSk7XHJcbiAgICAgIGxldCBVRmxvZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHtcclxuICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfZmlsdGVyX3F1b3RlcyxcclxuICAgICAgfSk7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldCh1cmwsIHtcclxuICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICB5YXJkX2xvY2F0aW9uOiB0aGlzLnNlYXJjaC55YXJkX2xvY2F0aW9uLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnNlYXJjaC5uYW1lLFxyXG4gICAgICAgICAgICBkYXRlOiB0aGlzLnNlYXJjaC5kYXRlLFxyXG4gICAgICAgICAgICBzdGF0dXM6IHRoaXMuc2VhcmNoLnN0YXR1cyxcclxuICAgICAgICAgICAgcHBwOiB0aGlzLnBwcCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnVsaXN0ID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgIFVGbG9kZXIuaGlkZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlNvbWUgZXJyb3Igb2NjdXJlZCEgUGxlYXNlIHRyeSBhZ2FpblwiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBVRmxvZGVyLmhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJVc2VyIENvbXBvbmVudCBtb3VudGVkLlwiKTtcclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgdGhpcy5sb2FkUXVvdGVzKCk7XHJcbiAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwic2VjdGlvblwiLFxuICAgICAgeyByZWY6IFwicmVmX2xvYWRfZmlsdGVyX3F1b3Rlc1wiLCBzdGF0aWNDbGFzczogXCJjb250ZW50IHZsZC1wYXJlbnRcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LXdhcm5pbmdcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkUXVvdGVzKClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMiBjb2wtbGctMlwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTdGF0dXNcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJTdWJtaXR0ZWRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTdWJtaXR0ZWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlBlbmRpbmdcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQZW5kaW5nXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJBcHByb3ZlZFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFwcHJvdmVkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJEZWNsaW5lZFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRlY2xpbmVkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDUpLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGJveC1ibGFja1wiIH0sIFtcbiAgICAgICAgICBfdm0uX20oNiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbS1ib3gtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiU2hvd2luZ2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIiB9LCBbX3ZtLl92KFwiU2hvd2luZyBcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0IGRyb3BcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHBwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcHAgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjI1XCIgfSB9LCBbX3ZtLl92KFwiMjVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNTBcIiB9IH0sIFtfdm0uX3YoXCI1MFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxMDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjEwMFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiIH0sIFtfdm0uX3YoXCJlbnRyaWVzIFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiIH0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInB1bGwtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMVwiLCBhdHRyczogeyB0bzogXCIvcXVvdGVzL2FkZFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1cy1zcXVhcmUtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgR2V0IGEgUXVvdGVcXG4gICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiIH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVzZWN0aW9uXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLXJlc3BvbnNpdmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oNyksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnVsaXN0LmRhdGEsIGZ1bmN0aW9uICh1YSwgeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IHVhLmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoeCArIDEpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9xdW90ZXMvZWRpdC9cIiArIHVhLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVhLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLl9mKFwibXlEYXRlXCIpKHVhLmNyZWF0ZWRfYXQpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVhLnBlbmRpbmdfd2l0aCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJhZGdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVhLnN0YXR1cyA9PSBcIkFwcHJvdmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1ncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVhLnN0YXR1cyA9PSBcIlBlbmRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJnLXllbGxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModWEuc3RhdHVzKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbnNlY3Rpb25ib3hcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNSBjb2wtbGctNVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiU2hvd2luZ2JveHRvMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBTaG93aW5nIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51bGlzdC5mcm9tKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHRvXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51bGlzdC50bykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBvZiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udWxpc3QudG90YWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgcmVzdWx0c1xcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC03IGNvbC1sZy03XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJTaG93aW5nYm94dG8yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS51bGlzdC5saW5rcywgZnVuY3Rpb24gKGxpbmtzLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZSBkaXNhYmxlZFwiOiBsaW5rcy5hY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhbGlua3MudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0ZV9idXR0b246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICsgMSAhPSBfdm0udWxpc3QubGlua3MubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKGxpbmtzLmxhYmVsKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWRRdW90ZXMobGlua3MudXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlF1b3Rlc1wiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJRdW90YXRpb24gU2VhcmNoXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0yIGNvbC1sZy0yXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJZYXJkIExvY2F0aW9uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwic2VsZWN0XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW1xuICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJzZWxlY3RcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJBXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwiQlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcIkNcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJEXCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJDdXN0b21lclwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgQ3VzdG9tZXIuLi5cIiB9LFxuICAgICAgICB9KSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMiBjb2wtbGctMlwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBjYWxlbmRhci1pY29uXCIgfSwgW1xuICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJEYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIiwgYXR0cnM6IHsgdHlwZTogXCJkYXRlXCIgfSB9KSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMiBjb2wtbGctMlwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgwqDCoFxcbiAgICAgICAgICAgICAgXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gbGluazFcIiwgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgRmlsdGVyXFxuICAgICAgICAgICAgICBcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbX3ZtLl92KFwiVGFza3MgTGlzdFwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiIH0sIGF0dHJzOiB7IHdpZHRoOiBcIjcwXCIgfSB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFNsIE5vLlxcbiAgICAgICAgICAgICAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3VzdG9tZXJcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiWWFyZCBMb2NhdGlvblwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJEYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlZvbHVtZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJQZW5kaW5nIFdpdGhcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHdpZHRoOiBcIjEwMFwiIH0gfSwgW192bS5fdihcIlN0YXR1c1wiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTEzMDY1ZjYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxob3N0aW5nZXJcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUxMzA2NWY2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUxMzA2NWY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUxMzA2NWY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTEzMDY1ZjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTEzMDY1ZjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3F1b3Rlcy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTMwNjVmNiZcIiJdLCJzb3VyY2VSb290IjoiIn0=