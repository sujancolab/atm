(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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
        organisation: '',
        type: '',
        name: '',
        phone: '',
        email: ''
      },
      editmode: false,
      ulist: "",
      users: {},
      form: new Form({
        id: '',
        type: '',
        name: '',
        email: '',
        password: '',
        email_verified_at: ''
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
    'search.organization': function searchOrganization(n) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (n == 'United Scrap Metal') {
                  if (!['Admin', 'Finance Team', 'Transportation Team', 'Sales Team', 'CEC'].includes(_this2.search.type)) {
                    _this2.search.type = '';
                  }
                } else {
                  if (!['Primary', 'Finance', 'Transportation'].includes(_this2.search.type)) {
                    _this2.search.type = '';
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
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        // Send request to the server
        if (result.value) {
          _this3.form["delete"]('api/user/' + id).then(function () {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success'); // Fire.$emit('AfterCreate');

            _this3.loadUsers();
          })["catch"](function (data) {
            Swal.fire("Failed!", data.message, "warning");
          });
        }
      });
    },
    loadUsers: function loadUsers() {
      var _this4 = this;

      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/api/user';
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
          icon: 'error',
          title: 'Some error occured! Please try again'
        });
        UFloder.hide();
      });
    }
  },
  mounted: function mounted() {
    console.log('User Component mounted.');
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
  }, [_vm._v("Select Organisation")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "United Scrap Metal"
    }
  }, [_vm._v("United Scrap Metal")]), _vm._v(" "), _c("option", {
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
  }, [_vm._v("Transportation ")])]], 2)])]), _vm._v(" "), _vm._m(2)])])]), _vm._v(" "), _c("div", {
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
  })]), _vm._v(" Add User ")])], 1), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Showing " + _vm._s(_vm.ulist.from) + " to " + _vm._s(_vm.ulist.to) + " of " + _vm._s(_vm.ulist.total) + " results")])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("    ")]), _vm._v(" "), _c("button", {
    staticClass: "btn link1",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Filter")])])]);
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
  }, [_vm._v("Sl No.")]), _vm._v(" "), _c("th", [_vm._v("Name ")]), _vm._v(" "), _c("th", [_vm._v("Phone No.")]), _vm._v(" "), _c("th", [_vm._v("Email")]), _vm._v(" "), _c("th", [_vm._v("Organisation.")]), _vm._v(" "), _c("th", [_vm._v("Role")]), _vm._v(" "), _c("th", [_vm._v("Status ")])])]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9pbmRleC52dWU/MzczYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9pbmRleC52dWU/ZTNjNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9pbmRleC52dWU/MjkyMCJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsInBwcCIsInNlYXJjaCIsIm9yZ2FuaXNhdGlvbiIsInR5cGUiLCJwaG9uZSIsImVtYWlsIiwiZWRpdG1vZGUiLCJ1bGlzdCIsInVzZXJzIiwiZm9ybSIsImlkIiwicGFzc3dvcmQiLCJlbWFpbF92ZXJpZmllZF9hdCIsIndhdGNoIiwibiIsIm1ldGhvZHMiLCJkZWxldGVVc2VyIiwiU3dhbCIsInRpdGxlIiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsImxvYWRVc2VycyIsImNvbnRhaW5lciIsImF4aW9zIiwicGFyYW1zIiwiVUZsb2RlciIsIlRvYXN0IiwiaWNvbiIsIm1vdW50ZWQiLCJjb25zb2xlIiwiY3JlYXRlZCIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJfbSIsIl92IiwicmVmIiwic3RhdGljQ2xhc3MiLCJvbiIsInN1Ym1pdCIsIiRldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGlyZWN0aXZlcyIsInJhd05hbWUiLCJ2YWx1ZSIsImV4cHJlc3Npb24iLCJhdHRycyIsInBsYWNlaG9sZGVyIiwiZG9tUHJvcHMiLCJpbnB1dCIsInRhcmdldCIsImNvbXBvc2luZyIsIiRzZXQiLCJjaGFuZ2UiLCIkJHNlbGVjdGVkVmFsIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmaWx0ZXIiLCJjYWxsIiwib3B0aW9ucyIsIm8iLCJzZWxlY3RlZCIsIm1hcCIsInZhbCIsIl92YWx1ZSIsIm11bHRpcGxlIiwidG8iLCJfbCIsInVhIiwieCIsImtleSIsImFsaWduIiwiX3MiLCJvcmdhbml6YXRpb24iLCJzdGF0dXMiLCJfZSIsImZyb20iLCJ0b3RhbCIsImxpbmtzIiwiaW5kZXgiLCJhY3RpdmUiLCJkaXNhYmxlZCIsInVybCIsInBhZ2luYXRlX2J1dHRvbiIsImxlbmd0aCIsImhyZWYiLCJpbm5lckhUTUwiLCJsYWJlbCIsImNsaWNrIiwic3RhdGljUmVuZGVyRm5zIiwic3RhdGljU3R5bGUiLCJkaXNwbGF5Iiwid2lkdGgiLCJfd2l0aFN0cmlwcGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OytDQW9KQSxvSjs7Ozs7O0FBQUE7RUFDQUEsZ0JBREE7RUFFQUMsSUFGQSxrQkFFQTtJQUNBO01BQ0FDLE9BREE7TUFFQUM7UUFDQUMsZ0JBREE7UUFFQUMsUUFGQTtRQUdBTCxRQUhBO1FBSUFNLFNBSkE7UUFLQUM7TUFMQSxDQUZBO01BU0FDLGVBVEE7TUFVQUMsU0FWQTtNQVdBQyxTQVhBO01BWUFDO1FBQ0FDLE1BREE7UUFFQVAsUUFGQTtRQUdBTCxRQUhBO1FBSUFPLFNBSkE7UUFLQU0sWUFMQTtRQU1BQztNQU5BO0lBWkE7RUFxQkEsQ0F4QkE7RUF5QkFDO0lBQ0FiLEdBREEsaUJBQ0E7TUFBQTs7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBLE9BQ0EsaUJBREE7O2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRUEsQ0FIQTtJQUlBLHFCQUpBLDhCQUlBYyxDQUpBLEVBSUE7TUFBQTs7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNBO2tCQUNBO29CQUNBO2tCQUNBO2dCQUNBLENBSkEsTUFJQTtrQkFDQTtvQkFDQTtrQkFD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LENBZE8sRUFlUEgsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxNQUFQLENBQUQsQ0FBUCxDQWZLLEVBZ0JQSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBaEJPLEVBaUJQSCxFQUFFLENBQUMsSUFBRCxFQUFPLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFNBQVAsQ0FBRCxDQUFQLENBakJLLENBQVAsQ0FEZSxDQUFWLENBQVQ7QUFxQkQsQ0EzRG1CLENBQXRCO0FBNkRBTCxNQUFNLENBQUMrRCxhQUFQLEdBQXVCLElBQXZCOzs7Ozs7Ozs7Ozs7O0FDeGlCQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzExLmJ1bmRsZS5jZWI3NTM0MDMxZGJkNzgzMmE3ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cclxuICAgICAgPGgxPlVzZXJzPC9oMT5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudCB2bGQtcGFyZW50XCIgcmVmPVwicmVmX2xvYWRfZmlsdGVyX3VzZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LXdhcm5pbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlVzZXIgU2VhcmNoPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cImxvYWRVc2VycygpXCIgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE5hbWUgLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5uYW1lXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UGhvbmUgTm8uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFBob25lIE5vLiAuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnBob25lXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbCAuLi5cIiB2LW1vZGVsPVwic2VhcmNoLmVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+T3JnYW5pc2F0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwic2VhcmNoLm9yZ2FuaXNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBPcmdhbmlzYXRpb248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVuaXRlZCBTY3JhcCBNZXRhbFwiPlVuaXRlZCBTY3JhcCBNZXRhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3RoZXJzXCI+T3RoZXJzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Sb2xlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwic2VhcmNoLnR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInNlYXJjaC5vcmdhbmlzYXRpb249PSdVbml0ZWQgU2NyYXAgTWV0YWwnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBZG1pblwiPkFkbWluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGaW5hbmNlIFRlYW1cIj5GaW5hbmNlIFRlYW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRyYW5zcG9ydGF0aW9uIFRlYW1cIj4gVHJhbnNwb3J0YXRpb24gVGVhbTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2FsZXMgVGVhbSBcIj5TYWxlcyBUZWFtIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0VDXCI+Q0VDIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUHJpbWFyeVwiPlByaW1hcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZpbmFuY2VcIj5GaW5hbmNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUcmFuc3BvcnRhdGlvblwiPlRyYW5zcG9ydGF0aW9uIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCI+ICZuYnNwOyZuYnNwOyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gbGluazFcIj5GaWx0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtYmxhY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlVzZXJzIFRhYmxlPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWJveC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlNob3dpbmdib3hcIj4gPHNwYW4gY2xhc3M9XCJwdWxsLWxlZnRcIj5TaG93aW5nIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0IGRyb3BcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwicHBwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyNVwiPjI1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MFwiPjUwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDBcIj4xMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHVsbC1sZWZ0XCI+ZW50cmllcyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiPiA8cm91dGVyLWxpbmsgdG89XCIvdXNlci9hZGRcIiBjbGFzcz1cImJ0biBsaW5rMVwiPiA8c3Bhbj48aSBjbGFzcz1cImZhIGZhLXBsdXMtc3F1YXJlLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDwvc3Bhbj4gQWRkIFVzZXIgPC9yb3V0ZXItbGluaz48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIiB3aWR0aD1cIjcwXCI+U2wgTm8uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZSA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5QaG9uZSBOby48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk9yZ2FuaXNhdGlvbi48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGJvZHkgdi1pZj1cInVsaXN0ICYmIHVsaXN0LmRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKHVhLHgpIGluIHVsaXN0LmRhdGFcIiA6a2V5PVwidWEuaWRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+e3t4KzF9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCInL3VzZXIvZWRpdC8nK3VhLmlkXCIgY2xhc3M9XCJ0ZXh0LWdyZWVuXCI+e3t1YS5uYW1lfX08L3JvdXRlci1saW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7dWEucGhvbmV9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7dWEuZW1haWx9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7dWEub3JnYW5pemF0aW9ufX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3VhLnR5cGV9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuIGNsYXNzPVwiYmFkZ2VcIiA6Y2xhc3M9XCJ1YS5zdGF0dXM9PSdBY3RpdmUnfHx1YS5zdGF0dXM9PSdBcHByb3ZlJz8nYmctZ3JlZW4nOidiZy1yZWQnXCI+e3t1YS5zdGF0dXN9fTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uc2VjdGlvbmJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInVsaXN0ICYmIHVsaXN0LmRhdGFcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNSBjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlNob3dpbmdib3h0bzFcIj5TaG93aW5nIHt7IHVsaXN0LmZyb20gfX0gdG8ge3sgdWxpc3QudG8gfX0gb2Yge3sgdWxpc3QudG90YWwgfX0gcmVzdWx0czwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC03IGNvbC1sZy03XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiU2hvd2luZ2JveHRvMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCIobGlua3MsIGluZGV4KSBpbiB1bGlzdC5saW5rc1wiIDprZXk9XCJpbmRleFwiIDpjbGFzcz1cInsnYWN0aXZlIGRpc2FibGVkJzpsaW5rcy5hY3RpdmUsICdkaXNhYmxlZCc6IWxpbmtzLnVybCwgJ3BhZ2luYXRlX2J1dHRvbic6aW5kZXghPSAwICYmIGluZGV4KzEhPXVsaXN0LmxpbmtzLmxlbmd0aCB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgdi1odG1sPVwibGlua3MubGFiZWxcIiBAY2xpY2s9XCJsb2FkVXNlcnMobGlua3MudXJsKTtcIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBuYW1lOlwidXNlcmxpc3RcIixcclxuICAgICAgICBkYXRhICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBwcDoyNSxcclxuICAgICAgICAgICAgICAgIHNlYXJjaDp7XHJcbiAgICAgICAgICAgICAgICAgIG9yZ2FuaXNhdGlvbjonJyxcclxuICAgICAgICAgICAgICAgICAgdHlwZTonJyxcclxuICAgICAgICAgICAgICAgICAgbmFtZTonJyxcclxuICAgICAgICAgICAgICAgICAgcGhvbmU6JycsXHJcbiAgICAgICAgICAgICAgICAgIGVtYWlsOicnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZWRpdG1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdWxpc3Q6XCJcIixcclxuICAgICAgICAgICAgICAgIHVzZXJzIDoge30sXHJcbiAgICAgICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbF92ZXJpZmllZF9hdDogJycsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgYXN5bmMgcHBwKCl7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFVzZXJzKClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jICdzZWFyY2gub3JnYW5pemF0aW9uJyhuKXtcclxuICAgICAgICBpZihuPT0nVW5pdGVkIFNjcmFwIE1ldGFsJyl7XHJcbiAgICAgICAgICBpZighWydBZG1pbicsJ0ZpbmFuY2UgVGVhbScsJ1RyYW5zcG9ydGF0aW9uIFRlYW0nLCdTYWxlcyBUZWFtJywnQ0VDJ10uaW5jbHVkZXModGhpcy5zZWFyY2gudHlwZSkpe1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50eXBlPScnXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICBpZighWydQcmltYXJ5JywnRmluYW5jZScsJ1RyYW5zcG9ydGF0aW9uJ10uaW5jbHVkZXModGhpcy5zZWFyY2gudHlwZSkpe1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50eXBlPScnXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlVXNlcihpZCl7XHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyFcIixcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyNkMzMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdZZXMsIGRlbGV0ZSBpdCEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZW5kIHJlcXVlc3QgdG8gdGhlIHNlcnZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5kZWxldGUoJ2FwaS91c2VyLycraWQpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZWxldGVkIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWW91ciBmaWxlIGhhcyBiZWVuIGRlbGV0ZWQuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZS4kZW1pdCgnQWZ0ZXJDcmVhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVXNlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXCJGYWlsZWQhXCIsIGRhdGEubWVzc2FnZSwgXCJ3YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgbG9hZFVzZXJzKHVybD0nL2FwaS91c2VyJyl7XHJcbiAgICAgICAgICAgLy8gaWYodGhpcy4kZ2F0ZS5pc0FkbWluKCkpe1xyXG4gICAgICAgICAgICAgLy8gYXhpb3MuZ2V0KFwiYXBpL3VzZXJcIikudGhlbigoeyBkYXRhIH0pID0+ICh0aGlzLnVzZXJzID0gZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IFVGbG9kZXIgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5yZWZfbG9hZF9maWx0ZXJfdXNlclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldCh1cmwse1xyXG4gICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICBvcmdhbmlzYXRpb246dGhpcy5zZWFyY2gub3JnYW5pc2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOnRoaXMuc2VhcmNoLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6dGhpcy5zZWFyY2gubmFtZSxcclxuICAgICAgICAgICAgICAgICAgcGhvbmU6dGhpcy5zZWFyY2gucGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgIGVtYWlsOnRoaXMuc2VhcmNoLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICBwcHA6IHRoaXMucHBwLFxyXG5cdCAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy51bGlzdCA9IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICBVRmxvZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTb21lIGVycm9yIG9jY3VyZWQhIFBsZWFzZSB0cnkgYWdhaW4nXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgVUZsb2Rlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuXHJcblxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIENvbXBvbmVudCBtb3VudGVkLicpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkKCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkVXNlcnMoKTtcclxuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwic2VjdGlvblwiLFxuICAgICAgeyByZWY6IFwicmVmX2xvYWRfZmlsdGVyX3VzZXJcIiwgc3RhdGljQ2xhc3M6IFwiY29udGVudCB2bGQtcGFyZW50XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGJveC13YXJuaW5nXCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3dcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9hZFVzZXJzKClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBOYW1lIC4uLlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNlYXJjaC5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlBob25lIE5vLlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gucGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIFBob25lIE5vLiAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNlYXJjaC5waG9uZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwicGhvbmVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRW1haWxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIEVtYWlsIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VhcmNoLmVtYWlsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJlbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJPcmdhbmlzYXRpb25cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gub3JnYW5pc2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gub3JnYW5pc2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JnYW5pc2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZWxlY3QgT3JnYW5pc2F0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIlVuaXRlZCBTY3JhcCBNZXRhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVW5pdGVkIFNjcmFwIE1ldGFsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIk90aGVyc1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk90aGVyc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJSb2xlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC50eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2gub3JnYW5pc2F0aW9uID09IFwiVW5pdGVkIFNjcmFwIE1ldGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJBZG1pblwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFkbWluXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIkZpbmFuY2UgVGVhbVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRmluYW5jZSBUZWFtXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiVHJhbnNwb3J0YXRpb24gVGVhbVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIFRyYW5zcG9ydGF0aW9uIFRlYW1cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJTYWxlcyBUZWFtIFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2FsZXMgVGVhbSBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiQ0VDXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ0VDIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiUHJpbWFyeVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlByaW1hcnlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIkZpbmFuY2VcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGaW5hbmNlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIlRyYW5zcG9ydGF0aW9uXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUcmFuc3BvcnRhdGlvbiBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGJveC1ibGFja1wiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbS1ib3gtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiU2hvd2luZ2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIiB9LCBbX3ZtLl92KFwiU2hvd2luZyBcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0IGRyb3BcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHBwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcHAgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjI1XCIgfSB9LCBbX3ZtLl92KFwiMjVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNTBcIiB9IH0sIFtfdm0uX3YoXCI1MFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxMDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjEwMFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiIH0sIFtfdm0uX3YoXCJlbnRyaWVzIFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiIH0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInB1bGwtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMVwiLCBhdHRyczogeyB0bzogXCIvdXNlci9hZGRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBsdXMtc3F1YXJlLW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBBZGQgVXNlciBcIiksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZXNlY3Rpb25cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtcmVzcG9uc2l2ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnVsaXN0ICYmIF92bS51bGlzdC5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnVsaXN0LmRhdGEsIGZ1bmN0aW9uICh1YSwgeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiB1YS5pZCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoeCArIDEpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvdXNlci9lZGl0L1wiICsgdWEuaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1YS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVhLnBob25lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVhLmVtYWlsKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVhLm9yZ2FuaXphdGlvbikpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1YS50eXBlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmFkZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1YS5zdGF0dXMgPT0gXCJBY3RpdmVcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1YS5zdGF0dXMgPT0gXCJBcHByb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJiZy1yZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVhLnN0YXR1cykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uc2VjdGlvbmJveFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLnVsaXN0ICYmIF92bS51bGlzdC5kYXRhXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTUgY29sLWxnLTVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiU2hvd2luZ2JveHRvMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2hvd2luZyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVsaXN0LmZyb20pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHRvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udWxpc3QudG8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG9mIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udWxpc3QudG90YWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHJlc3VsdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNyBjb2wtbGctN1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJTaG93aW5nYm94dG8yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS51bGlzdC5saW5rcywgZnVuY3Rpb24gKGxpbmtzLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZSBkaXNhYmxlZFwiOiBsaW5rcy5hY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWxpbmtzLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRlX2J1dHRvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIDEgIT0gX3ZtLnVsaXN0LmxpbmtzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhsaW5rcy5sYWJlbCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWRVc2VycyhsaW5rcy51cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlVzZXJzXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbX3ZtLl92KFwiVXNlciBTZWFyY2hcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNTdHlsZTogeyBkaXNwbGF5OiBcImJsb2NrXCIgfSB9LCBbX3ZtLl92KFwiIMKgwqAgXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsxXCIsIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiRmlsdGVyXCIpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgY2FyZC10ZXh0XCIgfSwgW192bS5fdihcIlVzZXJzIFRhYmxlXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSwgYXR0cnM6IHsgd2lkdGg6IFwiNzBcIiB9IH0sXG4gICAgICAgICAgW192bS5fdihcIlNsIE5vLlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZSBcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUGhvbmUgTm8uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk9yZ2FuaXNhdGlvbi5cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUm9sZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTdGF0dXMgXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTU1YzhlMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2U1NWM4ZTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2U1NWM4ZTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2U1NWM4ZTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTU1YzhlMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZTU1YzhlMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U1NWM4ZTAmXCIiXSwic291cmNlUm9vdCI6IiJ9