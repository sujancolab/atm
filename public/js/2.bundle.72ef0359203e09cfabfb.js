(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/list.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
    getResults: function getResults() {
      var _this4 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.$Progress.start();
      axios.get('api/user?page=' + page).then(function (_ref) {
        var data = _ref.data;
        return _this4.ulist = data.data;
      });
      this.$Progress.finish();
    },
    loadUsers: function loadUsers() {
      var _this5 = this;

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
        _this5.ulist = res.data.data;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/list.vue?vue&type=template&id=7975a360&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/list.vue?vue&type=template&id=7975a360& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  }), 0) : _vm._e()])])]), _vm._v(" "), _c("UjPagination", {
    attrs: {
      records: _vm.ulist,
      ppp: _vm.ppp
    },
    on: {
      fetchRecord: function fetchRecord(val) {
        return _vm.loadUsers(val);
      },
      "update:ppp": function updatePpp($event) {
        _vm.ppp = $event;
      }
    }
  })], 1)])])]);
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

/***/ "./resources/js/components/users/list.vue":
/*!************************************************!*\
  !*** ./resources/js/components/users/list.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_7975a360___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=7975a360& */ "./resources/js/components/users/list.vue?vue&type=template&id=7975a360&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./resources/js/components/users/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_7975a360___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_7975a360___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/list.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/users/list.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/list.vue?vue&type=template&id=7975a360&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/users/list.vue?vue&type=template&id=7975a360& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_7975a360___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=7975a360& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/list.vue?vue&type=template&id=7975a360&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_7975a360___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_7975a360___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvbGlzdC52dWU/MTA3MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9saXN0LnZ1ZT82YzExIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL2xpc3QudnVlP2I0NTkiXSwibmFtZXMiOlsibmFtZSIsImRhdGEiLCJwcHAiLCJzZWFyY2giLCJvcmdhbmlzYXRpb24iLCJ0eXBlIiwicGhvbmUiLCJlbWFpbCIsImVkaXRtb2RlIiwidWxpc3QiLCJ1c2VycyIsImZvcm0iLCJpZCIsInBhc3N3b3JkIiwiZW1haWxfdmVyaWZpZWRfYXQiLCJ3YXRjaCIsIm4iLCJtZXRob2RzIiwiZGVsZXRlVXNlciIsIlN3YWwiLCJ0aXRsZSIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJnZXRSZXN1bHRzIiwiYXhpb3MiLCJsb2FkVXNlcnMiLCJjb250YWluZXIiLCJwYXJhbXMiLCJVRmxvZGVyIiwiVG9hc3QiLCJpY29uIiwibW91bnRlZCIsImNvbnNvbGUiLCJjcmVhdGVkIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsIl9tIiwiX3YiLCJyZWYiLCJzdGF0aWNDbGFzcyIsIm9uIiwic3VibWl0IiwiJGV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsInZhbHVlIiwiZXhwcmVzc2lvbiIsImF0dHJzIiwicGxhY2Vob2xkZXIiLCJkb21Qcm9wcyIsImlucHV0IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiJHNldCIsImNoYW5nZSIsIiQkc2VsZWN0ZWRWYWwiLCJBcnJheSIsInByb3RvdHlwZSIsImZpbHRlciIsImNhbGwiLCJvcHRpb25zIiwibyIsInNlbGVjdGVkIiwibWFwIiwidmFsIiwiX3ZhbHVlIiwibXVsdGlwbGUiLCJ0byIsIl9sIiwidWEiLCJ4Iiwia2V5IiwiYWxpZ24iLCJfcyIsIm9yZ2FuaXphdGlvbiIsInN0YXR1cyIsIl9lIiwicmVjb3JkcyIsImZldGNoUmVjb3JkIiwic3RhdGljUmVuZGVyRm5zIiwic3RhdGljU3R5bGUiLCJkaXNwbGF5Iiwid2lkdGgiLCJfd2l0aFN0cmlwcGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OytDQXFJQSxvSjs7Ozs7O0FBQUE7RUFDQUEsZ0JBREE7RUFFQUMsSUFGQSxrQkFFQTtJQUNBO01BQ0FDLE9BREE7TUFFQUM7UUFDQUMsZ0JBREE7UUFFQUMsUUFGQTtRQUdBTCxRQUhBO1FBSUFNLFNBSkE7UUFLQUM7TUFMQSxDQUZBO01BU0FDLGVBVEE7TUFVQUMsU0FWQTtNQVdBQyxTQVhBO01BWUFDO1FBQ0FDLE1BREE7UUFFQVAsUUFGQTtRQUdBTCxRQUhBO1FBSUFPLFNBSkE7UUFLQU0sWUFMQTtRQU1BQztNQU5BO0lBWkE7RUFxQkEsQ0F4QkE7RUF5QkFDO0lBQ0FiLEdBREEsaUJBQ0E7TUFBQTs7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBLE9BQ0EsaUJBREE7O2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRUEsQ0FIQTtJQUlBLHFCQUpBLDhCQUlBYyxDQUpBLEVBSUE7TUFBQTs7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNBO2tCQUNBO29CQUNBO2tCQUNBO2dCQUNBLENBSkEsTUFJQTtrQkFDQTtvQkFDQTtrQkFDQTtnQkFDQTs7Y0FUQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFVQTtFQWRBLENBekJBO0VBeUNBQztJQUVBQyxVQUZBLHNCQUVBTixF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QzNCO0FBQ0w7OztBQUduRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEwTCxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMi5idW5kbGUuNzJlZjAzNTkyMDNlMDljZmFiZmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjxkaXY+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgIDxoMT5Vc2VyczwvaDE+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQgdmxkLXBhcmVudFwiIHJlZj1cInJlZl9sb2FkX2ZpbHRlcl91c2VyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJveC13YXJuaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZSBjYXJkLXRleHRcIj5Vc2VyIFNlYXJjaDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJsb2FkVXNlcnMoKVwiIGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOYW1lIC4uLlwiIHYtbW9kZWw9XCJzZWFyY2gubmFtZVwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlBob25lIE5vLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBQaG9uZSBOby4gLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5waG9uZVwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWwgLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5lbWFpbFwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk9yZ2FuaXNhdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInNlYXJjaC5vcmdhbmlzYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgT3JnYW5pc2F0aW9uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVbml0ZWQgU2NyYXAgTWV0YWxcIj5Vbml0ZWQgU2NyYXAgTWV0YWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk90aGVyc1wiPk90aGVyczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Um9sZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInNlYXJjaC50eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJzZWFyY2gub3JnYW5pc2F0aW9uPT0nVW5pdGVkIFNjcmFwIE1ldGFsJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWRtaW5cIj5BZG1pbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmluYW5jZSBUZWFtXCI+RmluYW5jZSBUZWFtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUcmFuc3BvcnRhdGlvbiBUZWFtXCI+IFRyYW5zcG9ydGF0aW9uIFRlYW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNhbGVzIFRlYW0gXCI+U2FsZXMgVGVhbSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNFQ1wiPkNFQyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlByaW1hcnlcIj5QcmltYXJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGaW5hbmNlXCI+RmluYW5jZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHJhbnNwb3J0YXRpb25cIj5UcmFuc3BvcnRhdGlvbiA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiPiAmbmJzcDsmbmJzcDsgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGxpbmsxXCI+RmlsdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LWJsYWNrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZSBjYXJkLXRleHRcIj5Vc2VycyBUYWJsZTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbS1ib3gtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJTaG93aW5nYm94XCI+IDxzcGFuIGNsYXNzPVwicHVsbC1sZWZ0XCI+U2hvd2luZyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdCBkcm9wXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInBwcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjVcIj4yNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTBcIj41MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwXCI+MTAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInB1bGwtbGVmdFwiPmVudHJpZXMgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIj4gPHJvdXRlci1saW5rIHRvPVwiL3VzZXIvYWRkXCIgY2xhc3M9XCJidG4gbGluazFcIj4gPHNwYW4+PGkgY2xhc3M9XCJmYSBmYS1wbHVzLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA8L3NwYW4+IEFkZCBVc2VyIDwvcm91dGVyLWxpbms+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCIgd2lkdGg9XCI3MFwiPlNsIE5vLjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWUgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+UGhvbmUgTm8uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5PcmdhbmlzYXRpb24uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1cyA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPHRib2R5IHYtaWY9XCJ1bGlzdCAmJiB1bGlzdC5kYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIih1YSx4KSBpbiB1bGlzdC5kYXRhXCIgOmtleT1cInVhLmlkXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPnt7eCsxfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwiJy91c2VyL2VkaXQvJyt1YS5pZFwiIGNsYXNzPVwidGV4dC1ncmVlblwiPnt7dWEubmFtZX19PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3VhLnBob25lfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3VhLmVtYWlsfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3VhLm9yZ2FuaXphdGlvbn19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t1YS50eXBlfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzcz1cImJhZGdlXCIgOmNsYXNzPVwidWEuc3RhdHVzPT0nQWN0aXZlJ3x8dWEuc3RhdHVzPT0nQXBwcm92ZSc/J2JnLWdyZWVuJzonYmctcmVkJ1wiPnt7dWEuc3RhdHVzfX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxValBhZ2luYXRpb24gQGZldGNoUmVjb3JkPVwidmFsPT5sb2FkVXNlcnModmFsKVwiIDpyZWNvcmRzPVwidWxpc3RcIiA6cHBwLnN5bmM9XCJwcHBcIiAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBuYW1lOlwidXNlcmxpc3RcIixcclxuICAgICAgICBkYXRhICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBwcDoyNSxcclxuICAgICAgICAgICAgICAgIHNlYXJjaDp7XHJcbiAgICAgICAgICAgICAgICAgIG9yZ2FuaXNhdGlvbjonJyxcclxuICAgICAgICAgICAgICAgICAgdHlwZTonJyxcclxuICAgICAgICAgICAgICAgICAgbmFtZTonJyxcclxuICAgICAgICAgICAgICAgICAgcGhvbmU6JycsXHJcbiAgICAgICAgICAgICAgICAgIGVtYWlsOicnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZWRpdG1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdWxpc3Q6XCJcIixcclxuICAgICAgICAgICAgICAgIHVzZXJzIDoge30sXHJcbiAgICAgICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbF92ZXJpZmllZF9hdDogJycsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgYXN5bmMgcHBwKCl7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFVzZXJzKClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jICdzZWFyY2gub3JnYW5pemF0aW9uJyhuKXtcclxuICAgICAgICBpZihuPT0nVW5pdGVkIFNjcmFwIE1ldGFsJyl7XHJcbiAgICAgICAgICBpZighWydBZG1pbicsJ0ZpbmFuY2UgVGVhbScsJ1RyYW5zcG9ydGF0aW9uIFRlYW0nLCdTYWxlcyBUZWFtJywnQ0VDJ10uaW5jbHVkZXModGhpcy5zZWFyY2gudHlwZSkpe1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50eXBlPScnXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICBpZighWydQcmltYXJ5JywnRmluYW5jZScsJ1RyYW5zcG9ydGF0aW9uJ10uaW5jbHVkZXModGhpcy5zZWFyY2gudHlwZSkpe1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50eXBlPScnXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlVXNlcihpZCl7XHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyFcIixcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyNkMzMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdZZXMsIGRlbGV0ZSBpdCEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZW5kIHJlcXVlc3QgdG8gdGhlIHNlcnZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5kZWxldGUoJ2FwaS91c2VyLycraWQpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZWxldGVkIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWW91ciBmaWxlIGhhcyBiZWVuIGRlbGV0ZWQuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZS4kZW1pdCgnQWZ0ZXJDcmVhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVXNlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXCJGYWlsZWQhXCIsIGRhdGEubWVzc2FnZSwgXCJ3YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgICBnZXRSZXN1bHRzKHBhZ2UgPSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYXhpb3MuZ2V0KCdhcGkvdXNlcj9wYWdlPScgKyBwYWdlKS50aGVuKCh7IGRhdGEgfSkgPT4gKHRoaXMudWxpc3QgPSBkYXRhLmRhdGEpKTtcclxuXHJcbiAgICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgICBsb2FkVXNlcnModXJsPScvYXBpL3VzZXInKXtcclxuICAgICAgICAgICAvLyBpZih0aGlzLiRnYXRlLmlzQWRtaW4oKSl7XHJcbiAgICAgICAgICAgICAvLyBheGlvcy5nZXQoXCJhcGkvdXNlclwiKS50aGVuKCh7IGRhdGEgfSkgPT4gKHRoaXMudXNlcnMgPSBkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgVUZsb2RlciA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX2ZpbHRlcl91c2VyXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KHVybCx7XHJcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgIG9yZ2FuaXNhdGlvbjp0aGlzLnNlYXJjaC5vcmdhbmlzYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6dGhpcy5zZWFyY2gudHlwZSxcclxuICAgICAgICAgICAgICAgICAgbmFtZTp0aGlzLnNlYXJjaC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICBwaG9uZTp0aGlzLnNlYXJjaC5waG9uZSxcclxuICAgICAgICAgICAgICAgICAgZW1haWw6dGhpcy5zZWFyY2guZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgIHBwcDogdGhpcy5wcHAsXHJcblx0ICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVsaXN0ID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgIFVGbG9kZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NvbWUgZXJyb3Igb2NjdXJlZCEgUGxlYXNlIHRyeSBhZ2FpbidcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBVRmxvZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgQ29tcG9uZW50IG1vdW50ZWQuJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRVc2VycygpO1xyXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICB7IHJlZjogXCJyZWZfbG9hZF9maWx0ZXJfdXNlclwiLCBzdGF0aWNDbGFzczogXCJjb250ZW50IHZsZC1wYXJlbnRcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LXdhcm5pbmdcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkVXNlcnMoKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gubmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIE5hbWUgLi4uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VhcmNoLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiUGhvbmUgTm8uXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5waG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgUGhvbmUgTm8uIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VhcmNoLnBob25lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJwaG9uZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgRW1haWwgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2guZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImVtYWlsXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIk9yZ2FuaXNhdGlvblwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5vcmdhbmlzYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5vcmdhbmlzYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmdhbmlzYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBPcmdhbmlzYXRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiVW5pdGVkIFNjcmFwIE1ldGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJVbml0ZWQgU2NyYXAgTWV0YWxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiT3RoZXJzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiT3RoZXJzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlJvbGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaC5vcmdhbmlzYXRpb24gPT0gXCJVbml0ZWQgU2NyYXAgTWV0YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIkFkbWluXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQWRtaW5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiRmluYW5jZSBUZWFtXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJGaW5hbmNlIFRlYW1cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJUcmFuc3BvcnRhdGlvbiBUZWFtXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgVHJhbnNwb3J0YXRpb24gVGVhbVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIlNhbGVzIFRlYW0gXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYWxlcyBUZWFtIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJDRUNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDRUMgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJQcmltYXJ5XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUHJpbWFyeVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiRmluYW5jZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZpbmFuY2VcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiVHJhbnNwb3J0YXRpb25cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlRyYW5zcG9ydGF0aW9uIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LWJsYWNrXCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tLWJveC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJTaG93aW5nYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiIH0sIFtfdm0uX3YoXCJTaG93aW5nIFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnQgZHJvcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBwcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcHBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBwcCA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMjVcIiB9IH0sIFtfdm0uX3YoXCIyNVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI1MFwiIH0gfSwgW192bS5fdihcIjUwXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjEwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMTAwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIgfSwgW192bS5fdihcImVudHJpZXMgXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsxXCIsIGF0dHJzOiB7IHRvOiBcIi91c2VyL2FkZFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1cy1zcXVhcmUtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEFkZCBVc2VyIFwiKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlc2VjdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLXJlc3BvbnNpdmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnVsaXN0ICYmIF92bS51bGlzdC5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnVsaXN0LmRhdGEsIGZ1bmN0aW9uICh1YSwgeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IHVhLmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoeCArIDEpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi91c2VyL2VkaXQvXCIgKyB1YS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1YS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVhLnBob25lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1YS5lbWFpbCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModWEub3JnYW5pemF0aW9uKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1YS50eXBlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmFkZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWEuc3RhdHVzID09IFwiQWN0aXZlXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1YS5zdGF0dXMgPT0gXCJBcHByb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1ncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModWEuc3RhdHVzKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiVWpQYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyByZWNvcmRzOiBfdm0udWxpc3QsIHBwcDogX3ZtLnBwcCB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBmZXRjaFJlY29yZDogKHZhbCkgPT4gX3ZtLmxvYWRVc2Vycyh2YWwpLFxuICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cHBwXCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnBwcCA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICBdXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiVXNlcnNcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIGNhcmQtdGV4dFwiIH0sIFtfdm0uX3YoXCJVc2VyIFNlYXJjaFwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9IH0sIFtfdm0uX3YoXCIgwqDCoCBcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gbGluazFcIiwgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJGaWx0ZXJcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbX3ZtLl92KFwiVXNlcnMgVGFibGVcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIiB9LCBhdHRyczogeyB3aWR0aDogXCI3MFwiIH0gfSxcbiAgICAgICAgICBbX3ZtLl92KFwiU2wgTm8uXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lIFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJQaG9uZSBOby5cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRW1haWxcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiT3JnYW5pc2F0aW9uLlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJSb2xlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlN0YXR1cyBcIildKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzk3NWEzNjAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxwcm9ncmFtbWluZ1xcXFx3YW1wNjRcXFxcd3d3XFxcXHVuaXRlZC1zY3JhcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3OTc1YTM2MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3OTc1YTM2MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3OTc1YTM2MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzk3NWEzNjAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzk3NWEzNjAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL2xpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzk3NWEzNjAmXCIiXSwic291cmNlUm9vdCI6IiJ9