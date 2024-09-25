(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/index.vue?vue&type=template&id=7e55c8e0&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/index.vue?vue&type=template&id=7e55c8e0& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    ref: "ref_load_filter_user",
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
        return _vm.loadUsers();
      }
    }
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search.name,
      expression: "search.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Enter Name ..."
    },
    domProps: {
      value: _vm.search.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.search, "name", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Phone No.")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search.phone,
      expression: "search.phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "tel",
      placeholder: "Enter Phone No. ..."
    },
    domProps: {
      value: _vm.search.phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.search, "phone", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Email")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search.email,
      expression: "search.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email",
      placeholder: "Enter Email ..."
    },
    domProps: {
      value: _vm.search.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.search, "email", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Organisation")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search.organisation,
      expression: "search.organisation"
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

        _vm.$set(_vm.search, "organisation", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("\n                                    Select Organisation\n                                ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "United Scrap Metal"
    }
  }, [_vm._v("\n                                    United Scrap Metal\n                                ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Others"
    }
  }, [_vm._v("Others")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Role")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search.type,
      expression: "search.type"
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

        _vm.$set(_vm.search, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_vm.search.organisation == "United Scrap Metal" ? [_c("option", {
    attrs: {
      value: "Admin"
    }
  }, [_vm._v("Admin")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Finance Team"
    }
  }, [_vm._v("\n                                        Finance Team\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Transportation Team"
    }
  }, [_vm._v("\n                                        Transportation Team\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Sales Team "
    }
  }, [_vm._v("\n                                        Sales Team\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "CEC"
    }
  }, [_vm._v("CEC")])] : [_c("option", {
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
  }, [_vm._v("\n                                        Transportation\n                                    ")])]], 2)])]), _vm._v(" "), _vm._m(2)])])]), _vm._v(" "), _c("div", {
    staticClass: "card box-black"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
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
      to: "/user/add"
    }
  }, [_c("span", [_c("i", {
    staticClass: "fa fa-plus-square-o",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v("\n                        Add User\n                    ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "tablesection"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-striped table-hover"
  }, [_vm._m(4), _vm._v(" "), _vm.ulist && _vm.ulist.data ? _c("tbody", _vm._l(_vm.ulist.data, function (ua, x) {
    return _c("tr", {
      key: ua.id
    }, [_c("td", {
      attrs: {
        align: "center"
      }
    }, [_vm._v(_vm._s(x + 1))]), _vm._v(" "), _c("td", [_c("router-link", {
      staticClass: "text-green",
      attrs: {
        to: "/user/edit/" + ua.id
      }
    }, [_vm._v(_vm._s(ua.name))])], 1), _vm._v(" "), _c("td", [_vm._v(_vm._s(ua.phone))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(ua.email))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(ua.organization))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(ua.type))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge",
      "class": ua.status == "Active" || ua.status == "Approve" ? "bg-green" : "bg-red"
    }, [_vm._v(_vm._s(ua.status))])])]);
  }), 0) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "paginationsectionbox"
  }, [_vm.ulist && _vm.ulist.data ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-5 col-lg-5"
  }, [_c("div", {
    staticClass: "Showingboxto1"
  }, [_vm._v("\n                                Showing " + _vm._s(_vm.ulist.from) + " to\n                                " + _vm._s(_vm.ulist.to) + " of " + _vm._s(_vm.ulist.total) + " results\n                            ")])]), _vm._v(" "), _c("div", {
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
          return _vm.loadUsers(links.url);
        }
      }
    })]);
  }), 0)])])]) : _vm._e()])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", {
    staticClass: "content-header"
  }, [_c("h1", [_vm._v("Users")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("User Search")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticStyle: {
      display: "block"
    }
  }, [_vm._v("\n                                  \n                            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn link1",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                                Filter\n                            ")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("Users Table")])]);
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
  }, [_vm._v("\n                                        Sl No.\n                                    ")]), _vm._v(" "), _c("th", [_vm._v("Name")]), _vm._v(" "), _c("th", [_vm._v("Phone No.")]), _vm._v(" "), _c("th", [_vm._v("Email")]), _vm._v(" "), _c("th", [_vm._v("Organisation.")]), _vm._v(" "), _c("th", [_vm._v("Role")]), _vm._v(" "), _c("th", [_vm._v("Status")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/users/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/users/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7e55c8e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7e55c8e0& */ "./resources/js/components/users/index.vue?vue&type=template&id=7e55c8e0&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7e55c8e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7e55c8e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/users/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/index.vue?vue&type=template&id=7e55c8e0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/users/index.vue?vue&type=template&id=7e55c8e0& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e55c8e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7e55c8e0& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/index.vue?vue&type=template&id=7e55c8e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e55c8e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e55c8e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9pbmRleC52dWU/MzczYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9pbmRleC52dWU/ZTNjNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9pbmRleC52dWU/MjkyMCJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsInBwcCIsInNlYXJjaCIsIm9yZ2FuaXNhdGlvbiIsInR5cGUiLCJwaG9uZSIsImVtYWlsIiwiZWRpdG1vZGUiLCJ1bGlzdCIsInVzZXJzIiwiZm9ybSIsImlkIiwicGFzc3dvcmQiLCJlbWFpbF92ZXJpZmllZF9hdCIsIndhdGNoIiwibiIsImluY2x1ZGVzIiwibWV0aG9kcyIsImRlbGV0ZVVzZXIiLCJTd2FsIiwidGl0bGUiLCJ0ZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJ0aGVuIiwibG9hZFVzZXJzIiwiY29udGFpbmVyIiwiYXhpb3MiLCJnZXQiLCJ1cmwiLCJwYXJhbXMiLCJVRmxvZGVyIiwiVG9hc3QiLCJpY29uIiwibW91bnRlZCIsImNvbnNvbGUiLCJjcmVhdGVkIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsIl9tIiwiX3YiLCJyZWYiLCJzdGF0aWNDbGFzcyIsIm9uIiwic3VibWl0IiwiJGV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsInZhbHVlIiwiZXhwcmVzc2lvbiIsImF0dHJzIiwicGxhY2Vob2xkZXIiLCJkb21Qcm9wcyIsImlucHV0IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiJHNldCIsImNoYW5nZSIsIiQkc2VsZWN0ZWRWYWwiLCJBcnJheSIsInByb3RvdHlwZSIsImZpbHRlciIsImNhbGwiLCJvcHRpb25zIiwibyIsInNlbGVjdGVkIiwibWFwIiwidmFsIiwiX3ZhbHVlIiwibXVsdGlwbGUiLCJ0byIsIl9sIiwidWEiLCJ4Iiwia2V5IiwiYWxpZ24iLCJfcyIsIm9yZ2FuaXphdGlvbiIsInN0YXR1cyIsIl9lIiwiZnJvbSIsInRvdGFsIiwibGlua3MiLCJpbmRleCIsImFjdGl2ZSIsImRpc2FibGVkIiwicGFnaW5hdGVfYnV0dG9uIiwibGVuZ3RoIiwiaHJlZiIsImlubmVySFRNTCIsImxhYmVsIiwiY2xpY2siLCJzdGF0aWNSZW5kZXJGbnMiLCJzdGF0aWNTdHlsZSIsImRpc3BsYXkiLCJ3aWR0aCIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7K0NBZ1BBLG9KOzs7Ozs7QUFBZTtFQUNmQSxnQkFEQTtFQUVBQyxJQUZBLGtCQUVBO0lBQ0E7TUFDQUMsT0FEQTtNQUVBQztRQUNBQyxnQkFEQTtRQUVBQyxRQUZBO1FBR0FMLFFBSEE7UUFJQU0sU0FKQTtRQUtBQztNQUxBLENBRkE7TUFTQUMsZUFUQTtNQVVBQyxTQVZBO01BV0FDLFNBWEE7TUFZQUM7UUFDQUMsTUFEQTtRQUVBUCxRQUZBO1FBR0FMLFFBSEE7UUFJQU8sU0FKQTtRQUtBTSxZQUxBO1FBTUFDO01BTkE7SUFaQTtFQXFCQSxDQXhCQTtFQXlCQUM7SUFDQWIsR0FEQSxpQkFDQTtNQUFBOztNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUEsT0FDQSxpQkFEQTs7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFFQSxDQUhBO0lBSUEscUJBSkEsOEJBSUFjLENBSkEsRUFJQTtNQUFBOztNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQ0E7a0JBQ0EsSUFDQSxFQUNBLE9BREEsRUFFQSxjQUZBLEVB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RUFlUEgsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxPQUFQLENBQUQsQ0FBUCxDQWZLLEVBZ0JQSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBaEJPLEVBaUJQSCxFQUFFLENBQUMsSUFBRCxFQUFPLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLGVBQVAsQ0FBRCxDQUFQLENBakJLLEVBa0JQSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBbEJPLEVBbUJQSCxFQUFFLENBQUMsSUFBRCxFQUFPLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLE1BQVAsQ0FBRCxDQUFQLENBbkJLLEVBb0JQSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBcEJPLEVBcUJQSCxFQUFFLENBQUMsSUFBRCxFQUFPLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFFBQVAsQ0FBRCxDQUFQLENBckJLLENBQVAsQ0FEZSxDQUFWLENBQVQ7QUF5QkQsQ0FyRW1CLENBQXRCO0FBdUVBTCxNQUFNLENBQUM4RCxhQUFQLEdBQXVCLElBQXZCOzs7Ozs7Ozs7Ozs7O0FDMWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzIuYnVuZGxlLjEwMzY0YzJiMDgzNmNmMWU0ZDUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5Vc2VyczwvaDE+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudCB2bGQtcGFyZW50XCIgcmVmPVwicmVmX2xvYWRfZmlsdGVyX3VzZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LXdhcm5pbmdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlVzZXIgU2VhcmNoPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwibG9hZFVzZXJzKClcIiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE5hbWUgLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaC5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGhvbmUgTm8uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQaG9uZSBOby4gLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaC5waG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsIC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2guZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5PcmdhbmlzYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoLm9yZ2FuaXNhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgT3JnYW5pc2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVW5pdGVkIFNjcmFwIE1ldGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbml0ZWQgU2NyYXAgTWV0YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPdGhlcnNcIj5PdGhlcnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlJvbGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoLnR5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoLm9yZ2FuaXNhdGlvbiA9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVbml0ZWQgU2NyYXAgTWV0YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWRtaW5cIj5BZG1pbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZpbmFuY2UgVGVhbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmFuY2UgVGVhbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHJhbnNwb3J0YXRpb24gVGVhbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zcG9ydGF0aW9uIFRlYW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNhbGVzIFRlYW0gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2FsZXMgVGVhbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0VDXCI+Q0VDPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUHJpbWFyeVwiPlByaW1hcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGaW5hbmNlXCI+RmluYW5jZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRyYW5zcG9ydGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNwb3J0YXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJkaXNwbGF5OiBibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGxpbmsxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZSBjYXJkLXRleHRcIj5Vc2VycyBUYWJsZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b20tYm94LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlNob3dpbmdib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHVsbC1sZWZ0XCI+U2hvd2luZyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0IGRyb3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInBwcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjVcIj4yNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTBcIj41MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwXCI+MTAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHVsbC1sZWZ0XCI+ZW50cmllcyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL3VzZXIvYWRkXCIgY2xhc3M9XCJidG4gbGluazFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtcGx1cy1zcXVhcmUtb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBVc2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjcwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbCBOby5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGhvbmUgTm8uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+T3JnYW5pc2F0aW9uLjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgdi1pZj1cInVsaXN0ICYmIHVsaXN0LmRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIih1YSwgeCkgaW4gdWxpc3QuZGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwidWEuaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj57eyB4ICsgMSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0bz1cIicvdXNlci9lZGl0LycgKyB1YS5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyB1YS5uYW1lIH19PC9yb3V0ZXItbGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdWEucGhvbmUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHVhLmVtYWlsIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB1YS5vcmdhbml6YXRpb24gfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHVhLnR5cGUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmFkZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVhLnN0YXR1cyA9PSAnQWN0aXZlJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWEuc3RhdHVzID09ICdBcHByb3ZlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWdyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLXJlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IHVhLnN0YXR1cyB9fTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uc2VjdGlvbmJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInVsaXN0ICYmIHVsaXN0LmRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC01IGNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlNob3dpbmdib3h0bzFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvd2luZyB7eyB1bGlzdC5mcm9tIH19IHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHVsaXN0LnRvIH19IG9mIHt7IHVsaXN0LnRvdGFsIH19IHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTcgY29sLWxnLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiU2hvd2luZ2JveHRvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua3MsIGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSBpbiB1bGlzdC5saW5rc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY3RpdmUgZGlzYWJsZWQnOiBsaW5rcy5hY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhbGlua3MudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0ZV9idXR0b246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAhPSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIDEgIT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bGlzdC5saW5rcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWh0bWw9XCJsaW5rcy5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImxvYWRVc2VycyhsaW5rcy51cmwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidXNlcmxpc3RcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHBwOiAyNSxcclxuICAgICAgICAgICAgc2VhcmNoOiB7XHJcbiAgICAgICAgICAgICAgICBvcmdhbmlzYXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHBob25lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVkaXRtb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgdWxpc3Q6IFwiXCIsXHJcbiAgICAgICAgICAgIHVzZXJzOiB7fSxcclxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbF92ZXJpZmllZF9hdDogXCJcIixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIGFzeW5jIHBwcCgpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkVXNlcnMoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIFwic2VhcmNoLm9yZ2FuaXphdGlvblwiKG4pIHtcclxuICAgICAgICAgICAgaWYgKG4gPT0gXCJVbml0ZWQgU2NyYXAgTWV0YWxcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICFbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQWRtaW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGaW5hbmNlIFRlYW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUcmFuc3BvcnRhdGlvbiBUZWFtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU2FsZXMgVGVhbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNFQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIF0uaW5jbHVkZXModGhpcy5zZWFyY2gudHlwZSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnR5cGUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICFbXCJQcmltYXJ5XCIsIFwiRmluYW5jZVwiLCBcIlRyYW5zcG9ydGF0aW9uXCJdLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC50eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gudHlwZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBkZWxldGVVc2VyKGlkKSB7XHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzIVwiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGRlbGV0ZSBpdCFcIixcclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZW5kIHJlcXVlc3QgdG8gdGhlIHNlcnZlclxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVsZXRlKFwiYXBpL3VzZXIvXCIgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRGVsZXRlZCFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllvdXIgZmlsZSBoYXMgYmVlbiBkZWxldGVkLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZS4kZW1pdCgnQWZ0ZXJDcmVhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKFwiRmFpbGVkIVwiLCBkYXRhLm1lc3NhZ2UsIFwid2FybmluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9hZFVzZXJzKHVybCA9IFwiL2FwaS91c2VyXCIpIHtcclxuICAgICAgICAgICAgLy8gaWYodGhpcy4kZ2F0ZS5pc0FkbWluKCkpe1xyXG4gICAgICAgICAgICAvLyBheGlvcy5nZXQoXCJhcGkvdXNlclwiKS50aGVuKCh7IGRhdGEgfSkgPT4gKHRoaXMudXNlcnMgPSBkYXRhKSk7XHJcbiAgICAgICAgICAgIGxldCBVRmxvZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5yZWZfbG9hZF9maWx0ZXJfdXNlcixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KHVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmdhbmlzYXRpb246IHRoaXMuc2VhcmNoLm9yZ2FuaXNhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5zZWFyY2gudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zZWFyY2gubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHRoaXMuc2VhcmNoLnBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5zZWFyY2guZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBwcDogdGhpcy5wcHAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bGlzdCA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgVUZsb2Rlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTb21lIGVycm9yIG9jY3VyZWQhIFBsZWFzZSB0cnkgYWdhaW5cIixcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBVRmxvZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgQ29tcG9uZW50IG1vdW50ZWQuXCIpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgICB0aGlzLmxvYWRVc2VycygpO1xyXG4gICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcInNlY3Rpb25cIixcbiAgICAgIHsgcmVmOiBcInJlZl9sb2FkX2ZpbHRlcl91c2VyXCIsIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgdmxkLXBhcmVudFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3gtd2FybmluZ1wiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm93XCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWRVc2VycygpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgTmFtZSAuLi5cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2gubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJQaG9uZSBOby5cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBQaG9uZSBOby4gLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2gucGhvbmUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInBob25lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5lbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBFbWFpbCAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNlYXJjaC5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiZW1haWxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiT3JnYW5pc2F0aW9uXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLm9yZ2FuaXNhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLm9yZ2FuaXNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZ2FuaXNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgT3JnYW5pc2F0aW9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiVW5pdGVkIFNjcmFwIE1ldGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbml0ZWQgU2NyYXAgTWV0YWxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJPdGhlcnNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJPdGhlcnNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiUm9sZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gudHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoLm9yZ2FuaXNhdGlvbiA9PSBcIlVuaXRlZCBTY3JhcCBNZXRhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiQWRtaW5cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBZG1pblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJGaW5hbmNlIFRlYW1cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaW5hbmNlIFRlYW1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJUcmFuc3BvcnRhdGlvbiBUZWFtXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNwb3J0YXRpb24gVGVhbVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIlNhbGVzIFRlYW0gXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2FsZXMgVGVhbVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJDRUNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDRUNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlByaW1hcnlcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQcmltYXJ5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJGaW5hbmNlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRmluYW5jZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJUcmFuc3BvcnRhdGlvblwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zcG9ydGF0aW9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3gtYmxhY2tcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b20tYm94LWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIlNob3dpbmdib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIgfSwgW192bS5fdihcIlNob3dpbmcgXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdCBkcm9wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHBwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBwcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHBwID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIyNVwiIH0gfSwgW192bS5fdihcIjI1XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjUwXCIgfSB9LCBbX3ZtLl92KFwiNTBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMTAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIxMDBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIiB9LCBbX3ZtLl92KFwiZW50cmllcyBcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9KSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gbGluazFcIiwgYXR0cnM6IHsgdG86IFwiL3VzZXIvYWRkXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1wbHVzLXNxdWFyZS1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgVXNlclxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlc2VjdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0udWxpc3QgJiYgX3ZtLnVsaXN0LmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udWxpc3QuZGF0YSwgZnVuY3Rpb24gKHVhLCB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IHVhLmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh4ICsgMSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi91c2VyL2VkaXQvXCIgKyB1YS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVhLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModWEucGhvbmUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModWEuZW1haWwpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModWEub3JnYW5pemF0aW9uKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVhLnR5cGUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiYWRnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVhLnN0YXR1cyA9PSBcIkFjdGl2ZVwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVhLnN0YXR1cyA9PSBcIkFwcHJvdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1ncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJnLXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModWEuc3RhdHVzKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb25zZWN0aW9uYm94XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0udWxpc3QgJiYgX3ZtLnVsaXN0LmRhdGFcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNSBjb2wtbGctNVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJTaG93aW5nYm94dG8xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3dpbmcgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51bGlzdC5mcm9tKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB0b1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51bGlzdC50bykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgb2YgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51bGlzdC50b3RhbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgcmVzdWx0c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNyBjb2wtbGctN1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJTaG93aW5nYm94dG8yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS51bGlzdC5saW5rcywgZnVuY3Rpb24gKGxpbmtzLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZSBkaXNhYmxlZFwiOiBsaW5rcy5hY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWxpbmtzLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRlX2J1dHRvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIDEgIT0gX3ZtLnVsaXN0LmxpbmtzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhsaW5rcy5sYWJlbCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWRVc2VycyhsaW5rcy51cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlVzZXJzXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbX3ZtLl92KFwiVXNlciBTZWFyY2hcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNTdHlsZTogeyBkaXNwbGF5OiBcImJsb2NrXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMKgwqBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gbGluazFcIiwgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIGNhcmQtdGV4dFwiIH0sIFtfdm0uX3YoXCJVc2VycyBUYWJsZVwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiIH0sIGF0dHJzOiB7IHdpZHRoOiBcIjcwXCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2wgTm8uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlBob25lIE5vLlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJPcmdhbmlzYXRpb24uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJvbGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU3RhdHVzXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTU1YzhlMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGhvc3RpbmdlclxcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2U1NWM4ZTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2U1NWM4ZTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2U1NWM4ZTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTU1YzhlMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZTU1YzhlMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U1NWM4ZTAmXCIiXSwic291cmNlUm9vdCI6IiJ9