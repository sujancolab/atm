(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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
      ppp: 5,
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
      value: "5"
    }
  }, [_vm._v("5")]), _vm._v(" "), _c("option", {
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
  }, [_vm._m(4), _vm._v(" "), _c("tbody", _vm._l(_vm.ulist.data, function (ua, x) {
    return _vm.ulist && _vm.ulist.data ? _c("tr", {
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
    }, [_vm._v(_vm._s(ua.status))])])]) : _c("tr", [_c("td", [_vm._v("No record")])]);
  }), 0)])])]), _vm._v(" "), _c("UjPagination", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvbGlzdC52dWU/MTA3MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9saXN0LnZ1ZT82YzExIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL2xpc3QudnVlP2I0NTkiXSwibmFtZXMiOlsibmFtZSIsImRhdGEiLCJwcHAiLCJzZWFyY2giLCJvcmdhbmlzYXRpb24iLCJ0eXBlIiwicGhvbmUiLCJlbWFpbCIsImVkaXRtb2RlIiwidWxpc3QiLCJ1c2VycyIsImZvcm0iLCJpZCIsInBhc3N3b3JkIiwiZW1haWxfdmVyaWZpZWRfYXQiLCJ3YXRjaCIsIm4iLCJtZXRob2RzIiwiZGVsZXRlVXNlciIsIlN3YWwiLCJ0aXRsZSIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJsb2FkVXNlcnMiLCJjb250YWluZXIiLCJheGlvcyIsInBhcmFtcyIsIlVGbG9kZXIiLCJUb2FzdCIsImljb24iLCJtb3VudGVkIiwiY29uc29sZSIsImNyZWF0ZWQiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwiX20iLCJfdiIsInJlZiIsInN0YXRpY0NsYXNzIiwib24iLCJzdWJtaXQiLCIkZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwidmFsdWUiLCJleHByZXNzaW9uIiwiYXR0cnMiLCJwbGFjZWhvbGRlciIsImRvbVByb3BzIiwiaW5wdXQiLCJ0YXJnZXQiLCJjb21wb3NpbmciLCIkc2V0IiwiY2hhbmdlIiwiJCRzZWxlY3RlZFZhbCIsIkFycmF5IiwicHJvdG90eXBlIiwiZmlsdGVyIiwiY2FsbCIsIm9wdGlvbnMiLCJvIiwic2VsZWN0ZWQiLCJtYXAiLCJ2YWwiLCJfdmFsdWUiLCJtdWx0aXBsZSIsInRvIiwiX2wiLCJ1YSIsIngiLCJrZXkiLCJhbGlnbiIsIl9zIiwib3JnYW5pemF0aW9uIiwic3RhdHVzIiwicmVjb3JkcyIsImZldGNoUmVjb3JkIiwic3RhdGljUmVuZGVyRm5zIiwic3RhdGljU3R5bGUiLCJkaXNwbGF5Iiwid2lkdGgiLCJfd2l0aFN0cmlwcGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OytDQStJQSxvSjs7Ozs7O0FBQWU7RUFDZkEsZ0JBREE7RUFFQUMsSUFGQSxrQkFFQTtJQUNBO01BQ0FDLE1BREE7TUFFQUM7UUFDQUMsZ0JBREE7UUFFQUMsUUFGQTtRQUdBTCxRQUhBO1FBSUFNLFNBSkE7UUFLQUM7TUFMQSxDQUZBO01BU0FDLGVBVEE7TUFVQUMsU0FWQTtNQVdBQyxTQVhBO01BWUFDO1FBQ0FDLE1BREE7UUFFQVAsUUFGQTtRQUdBTCxRQUhBO1FBSUFPLFNBSkE7UUFLQU0sWUFMQTtRQU1BQztNQU5BO0lBWkE7RUFxQkEsQ0F4QkE7RUF5QkFDO0lBQ0FiLEdBREEsaUJBQ0E7TUFBQTs7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBLE9BQ0EsaUJBREE7O2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRUEsQ0FIQTtJQUlBLHFCQUpBLDhCQUlBYyxDQUpBLEVBSUE7TUFBQTs7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNBO2tCQUNBO29CQUNBO2tCQUNBO2dCQUNBLENBSkEsTUFJQTtrQkFDQTtvQkFDQTtrQkFDQTtnQkFDQTs7Y0FUQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFVQTtFQWRBLENBekJBO0VBeUNBQztJQUVBQyxVQUZBLHNCQUVBTixFQUZBLEVBRUE7TUFBQTs7TUFDQU87UUFDQUMsc0JBREE7UUFFQUMseUNBRkE7UUFHQUMsc0JBSEE7UUFJQUMsMEJBSkE7UUFLQUMsNEJBTEE7UUFNQUM7TUFOQSxHQU9BQyxJQVBBLENBT0E7UUFFQTtRQUNBO1VBQ0E7WUFDQVAsVUFDQSxVQURBLEVBRUEsNkJBRkEsRUFHQSxTQUhBLEVBREEsQ0FNQTs7WUFDQTtVQUNBLENBUkEsV0FRQTtZQUNBQTtVQUNBLENBVkE7UUFXQTtNQUNBLENBdkJBO0lBd0JBLENBM0JBO0lBNkJBUSxTQTdCQSx1QkE2QkE7TUFBQTs7TUFBQTtNQUNBO01BQ0E7TUFDQTtRQUNBQztNQURBO01BR0FDO1FBQ0FDO1VBQ0ExQixzQ0FEQTtVQUVBQyxzQkFGQTtVQUdBTCxzQkFIQTtVQUlBTSx3QkFKQTtVQUtBQyx3QkFMQTtVQU1BTDtRQU5BO01BREEsR0FVQXdCLElBVkEsQ0FVQTtRQUNBO1FBQ0FLO01BQ0EsQ0FiQSxXQWNBO1FBQ0FDO1VBQ0FDLGFBREE7VUFFQWI7UUFGQTtRQUlBVztNQUNBLENBcEJBO0lBcUJBO0VBeERBLENBekNBO0VBc0dBRyxPQXRHQSxxQkFzR0E7SUFDQUM7RUFDQSxDQXhHQTtFQXlHQUMsT0F6R0EscUJBeUdBO0lBRUE7SUFDQTtJQUNBO0VBQ0E7QUE5R0EsRzs7Ozs7Ozs7Ozs7O0FDL0lBO0FBQUE7QUFBQTtBQUFBLElBQUlDLE1BQU0sR0FBRyxTQUFTQSxNQUFULEdBQWtCO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFWO0VBQUEsSUFDRUMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVUQsRUFEakI7O0VBRUEsT0FBT0EsRUFBRSxDQUFDLEtBQUQsRUFBUSxDQUNmRCxHQUFHLENBQUNHLEVBQUosQ0FBTyxDQUFQLENBRGUsRUFFZkgsR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUZlLEVBR2ZILEVBQUUsQ0FDQSxTQURBLEVBRUE7SUFBRUksR0FBRyxFQUFFLHNCQUFQO0lBQStCQyxXQUFXLEVBQUU7RUFBNUMsQ0FGQSxFQUdBLENBQ0VMLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUssV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUE2QyxDQUM3Q04sR0FBRyxDQUFDRyxFQUFKLENBQU8sQ0FBUCxDQUQ2QyxFQUU3Q0gsR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUY2QyxFQUc3Q0gsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQXFDLENBQ3JDTCxFQUFFLENBQ0EsTUFEQSxFQUVBO0lBQ0VLLFdBQVcsRUFBRSxLQURmO0lBRUVDLEVBQUUsRUFBRTtNQUNGQyxNQUFNLEVBQUUsZ0JBQVVDLE1BQVYsRUFBa0I7UUFDeEJBLE1BQU0sQ0FBQ0MsY0FBUDtRQUNBLE9BQU9WLEdBQUcsQ0FBQ1gsU0FBSixFQUFQO01BQ0Q7SUFKQztFQUZOLENBRkEsRUFXQSxDQUNFWSxFQUFFLENBQ0EsS0FEQSxFQUVBO0lBQUVLLFdBQVcsRUFBRTtFQUFmLENBRkEsRUFHQSxDQUNFTCxFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVLLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBdUMsQ0FDdkNMLEVBQUUsQ0FBQyxPQUFELEVBQVUsQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sTUFBUCxDQUFELENBQVYsQ0FEcUMsRUFFdkNKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FGdUMsRUFHdkNILEVBQUUsQ0FBQyxPQUFELEVBQVU7SUFDVlUsVUFBVSxFQUFFLENBQ1Y7TUFDRWpELElBQUksRUFBRSxPQURSO01BRUVrRCxPQUFPLEVBQUUsU0FGWDtNQUdFQyxLQUFLLEVBQUViLEdBQUcsQ0FBQ25DLE1BQUosQ0FBV0gsSUFIcEI7TUFJRW9ELFVBQVUsRUFBRTtJQUpkLENBRFUsQ0FERjtJQVNWUixXQUFXLEVBQUUsY0FUSDtJQVVWUyxLQUFLLEVBQUU7TUFBRWhELElBQUksRUFBRSxNQUFSO01BQWdCaUQsV0FBVyxFQUFFO0lBQTdCLENBVkc7SUFXVkMsUUFBUSxFQUFFO01BQUVKLEtBQUssRUFBRWIsR0FBRyxDQUFDbkMsTUFBSixDQUFXSDtJQUFwQixDQVhBO0lBWVY2QyxFQUFFLEVBQUU7TUFDRlcsS0FBSyxFQUFFLGVBQVVULE1BQVYsRUFBa0I7UUFDdkIsSUFBSUEsTUFBTSxDQUFDVSxNQUFQLENBQWNDLFNBQWxCLEVBQTZCOztRQUM3QnBCLEdBQUcsQ0FBQ3FCLElBQUosQ0FBU3JCLEdBQUcsQ0FBQ25DLE1BQWIsRUFBcUIsTUFBckIsRUFBNkI0QyxNQUFNLENBQUNVLE1BQVAsQ0FBY04sS0FBM0M7TUFDRDtJQUpDO0VBWk0sQ0FBVixDQUhxQyxDQUF2QyxDQURKLENBSEEsQ0FESixFQThCRWIsR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQTlCRixFQStCRUgsRUFBRSxDQUNBLEtBREEsRUFFQTtJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUZBLEVBR0EsQ0FDRUwsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQXVDLENBQ3ZDTCxFQUFFLENBQUMsT0FBRCxFQUFVLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFdBQVAsQ0FBRCxDQUFWLENBRHFDLEVBRXZDSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBRnVDLEVBR3ZDSCxFQUFFLENBQUMsT0FBRCxFQUFVO0lBQ1ZVLFVBQVUsRUFBRSxDQUNWO01BQ0VqRCxJQUFJLEVBQUUsT0FEUjtNQUVFa0QsT0FBTyxFQUFFLFNBRlg7TUFHRUMsS0FBSyxFQUFFYixHQUFHLENBQUNuQyxNQUFKLENBQVdHLEtBSHBCO01BSUU4QyxVQUFVLEVBQUU7SUFKZCxDQURVLENBREY7SUFTVlIsV0FBVyxFQUFFLGNBVEg7SUFVVlMsS0FBSyxFQUFFO01BQ0xoRCxJQUFJLEVBQUUsS0FERDtNQUVMaUQsV0FBVyxFQUFFO0lBRlIsQ0FWRztJQWNWQyxRQUFRLEVBQUU7TUFBRUosS0FBSyxFQUFFYixHQUFHLENBQUNuQyxNQUFKLENBQVdHO0lBQXBCLENBZEE7SUFlVnVDLEVBQUUsRUFBRTtNQUNGVyxLQUFLLEVBQUUsZUFBVVQsTUFBVixFQUFrQjtRQUN2QixJQUFJQSxNQUFNLENBQUNVLE1BQVAsQ0FBY0MsU0FBbEIsRUFBNkI7O1FBQzdCcEIsR0FBRyxDQUFDcUIsSUFBSixDQUFTckIsR0FBRyxDQUFDbkMsTUFBYixFQUFxQixPQUFyQixFQUE4QjRDLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjTixLQUE1QztNQUNEO0lBSkM7RUFmTSxDQUFWLENBSHFDLENBQXZDLENBREosQ0FIQSxDQS9CSixFQStERWIsR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQS9ERixFQWdFRUgsRUFBRSxDQUNBLEtBREEsRUFFQTtJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUZBLEVBR0EsQ0FDRUwsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQXVDLENBQ3ZDTCxFQUFFLENBQUMsT0FBRCxFQUFVLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLE9BQVAsQ0FBRCxDQUFWLENBRHFDLEVBRXZDSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBRnVDLEVBR3ZDSCxFQUFFLENBQUMsT0FBRCxFQUFVO0lBQ1ZVLFVBQVUsRUFBRSxDQUNWO01BQ0VqRCxJQUFJLEVBQUUsT0FEUjtNQUVFa0QsT0FBTyxFQUFFLFNBRlg7TUFHRUMsS0FBSyxFQUFFYixHQUFHLENBQUNuQyxNQUFKLENBQVdJLEtBSHBCO01BSUU2QyxVQUFVLEVBQUU7SUFKZCxDQURVLENBREY7SUFTVlIsV0FBVyxFQUFFLGNBVEg7SUFVVlMsS0FBSyxFQUFFO01BQ0xoRCxJQUFJLEVBQUUsT0FERDtNQUVMaUQsV0FBVyxFQUFFO0lBRlIsQ0FWRztJQWNWQyxRQUFRLEVBQUU7TUFBRUosS0FBSyxFQUFFYixHQUFHLENBQUNuQyxNQUFKLENBQVdJO0lBQXBCLENBZEE7SUFlVnNDLEVBQUUsRUFBRTtNQUNGVyxLQUFLLEVBQUUsZUFBVVQsTUFBVixFQUFrQjtRQUN2QixJQUFJQSxNQUFNLENBQUNVLE1BQVAsQ0FBY0MsU0FBbEIsRUFBNkI7O1FBQzdCcEIsR0FBRyxDQUFDcUIsSUFBSixDQUFTckIsR0FBRyxDQUFDbkMsTUFBYixFQUFxQixPQUFyQixFQUE4QjRDLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjTixLQUE1QztNQUNEO0lBSkM7RUFmTSxDQUFWLENBSHFDLENBQXZDLENBREosQ0FIQSxDQWhFSixFQWdHRWIsR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQWhHRixFQWlHRUgsRUFBRSxDQUNBLEtBREEsRUFFQTtJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUZBLEVBR0EsQ0FDRUwsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQXVDLENBQ3ZDTCxFQUFFLENBQUMsT0FBRCxFQUFVLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLGNBQVAsQ0FBRCxDQUFWLENBRHFDLEVBRXZDSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBRnVDLEVBR3ZDSCxFQUFFLENBQ0EsUUFEQSxFQUVBO0lBQ0VVLFVBQVUsRUFBRSxDQUNWO01BQ0VqRCxJQUFJLEVBQUUsT0FEUjtNQUVFa0QsT0FBTyxFQUFFLFNBRlg7TUFHRUMsS0FBSyxFQUFFYixHQUFHLENBQUNuQyxNQUFKLENBQVdDLFlBSHBCO01BSUVnRCxVQUFVLEVBQUU7SUFKZCxDQURVLENBRGQ7SUFTRVIsV0FBVyxFQUFFLGNBVGY7SUFVRUMsRUFBRSxFQUFFO01BQ0ZlLE1BQU0sRUFBRSxnQkFBVWIsTUFBVixFQUFrQjtRQUN4QixJQUFJYyxhQUFhLEdBQUdDLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsTUFBaEIsQ0FDakJDLElBRGlCLENBQ1psQixNQUFNLENBQUNVLE1BQVAsQ0FBY1MsT0FERixFQUNXLFVBQVVDLENBQVYsRUFBYTtVQUN4QyxPQUFPQSxDQUFDLENBQUNDLFFBQVQ7UUFDRCxDQUhpQixFQUlqQkMsR0FKaUIsQ0FJYixVQUFVRixDQUFWLEVBQWE7VUFDaEIsSUFBSUcsR0FBRyxHQUFHLFlBQVlILENBQVosR0FBZ0JBLENBQUMsQ0FBQ0ksTUFBbEIsR0FBMkJKLENBQUMsQ0FBQ2hCLEtBQXZDO1VBQ0EsT0FBT21CLEdBQVA7UUFDRCxDQVBpQixDQUFwQjs7UUFRQWhDLEdBQUcsQ0FBQ3FCLElBQUosQ0FDRXJCLEdBQUcsQ0FBQ25DLE1BRE4sRUFFRSxjQUZGLEVBR0U0QyxNQUFNLENBQUNVLE1BQVAsQ0FBY2UsUUFBZCxHQUNJWCxhQURKLEdBRUlBLGFBQWEsQ0FBQyxDQUFELENBTG5CO01BT0Q7SUFqQkM7RUFWTixDQUZBLEVBZ0NBLENBQ0V0QixFQUFFLENBQUMsUUFBRCxFQUFXO0lBQUVjLEtBQUssRUFBRTtNQUFFRixLQUFLLEVBQUU7SUFBVDtFQUFULENBQVgsRUFBcUMsQ0FDckNiLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLHFCQUFQLENBRHFDLENBQXJDLENBREosRUFJRUosR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUpGLEVBS0VILEVBQUUsQ0FDQSxRQURBLEVBRUE7SUFBRWMsS0FBSyxFQUFFO01BQUVGLEtBQUssRUFBRTtJQUFUO0VBQVQsQ0FGQSxFQUdBLENBQUNiLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLG9CQUFQLENBQUQsQ0FIQSxDQUxKLEVBVUVKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FWRixFQVdFSCxFQUFFLENBQUMsUUFBRCxFQUFXO0lBQUVjLEtBQUssRUFBRTtNQUFFRixLQUFLLEVBQUU7SUFBVDtFQUFULENBQVgsRUFBMkMsQ0FDM0NiLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFFBQVAsQ0FEMkMsQ0FBM0MsQ0FYSixDQWhDQSxDQUhxQyxDQUF2QyxDQURKLENBSEEsQ0FqR0osRUEySkVKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0EzSkYsRUE0SkVILEVBQUUsQ0FDQSxLQURBLEVBRUE7SUFBRUssV0FBVyxFQUFFO0VBQWYsQ0FGQSxFQUdBLENBQ0VMLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUssV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUF1QyxDQUN2Q0wsRUFBRSxDQUFDLE9BQUQsRUFBVSxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxNQUFQLENBQUQsQ0FBVixDQURxQyxFQUV2Q0osR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUZ1QyxFQUd2Q0gsRUFBRSxDQUNBLFFBREEsRUFFQTtJQUNFVSxVQUFVLEVBQUUsQ0FDVjtNQUNFakQsSUFBSSxFQUFFLE9BRFI7TUFFRWtELE9BQU8sRUFBRSxTQUZYO01BR0VDLEtBQUssRUFBRWIsR0FBRyxDQUFDbkMsTUFBSixDQUFXRSxJQUhwQjtNQUlFK0MsVUFBVSxFQUFFO0lBSmQsQ0FEVSxDQURkO0lBU0VSLFdBQVcsRUFBRSxjQVRmO0lBVUVDLEVBQUUsRUFBRTtNQUNGZSxNQUFNLEVBQUUsZ0JBQVViLE1BQVYsRUFBa0I7UUFDeEIsSUFBSWMsYUFBYSxHQUFHQyxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQ2pCQyxJQURpQixDQUNabEIsTUFBTSxDQUFDVSxNQUFQLENBQWNTLE9BREYsRUFDVyxVQUFVQyxDQUFWLEVBQWE7VUFDeEMsT0FBT0EsQ0FBQyxDQUFDQyxRQUFUO1FBQ0QsQ0FIaUIsRUFJakJDLEdBSmlCLENBSWIsVUFBVUYsQ0FBVixFQUFhO1VBQ2hCLElBQUlHLEdBQUcsR0FBRyxZQUFZSCxDQUFaLEdBQWdCQSxDQUFDLENBQUNJLE1BQWxCLEdBQTJCSixDQUFDLENBQUNoQixLQUF2QztVQUNBLE9BQU9tQixHQUFQO1FBQ0QsQ0FQaUIsQ0FBcEI7O1FBUUFoQyxHQUFHLENBQUNxQixJQUFKLENBQ0VyQixHQUFHLENBQUNuQyxNQUROLEVBRUUsTUFGRixFQUdFNEMsTUFBTSxDQUFDVSxNQUFQLENBQWNlLFFBQWQsR0FDSVgsYUFESixHQUVJQSxhQUFhLENBQUMsQ0FBRCxDQUxuQjtNQU9EO0lBakJDO0VBVk4sQ0FGQSxFQWdDQSxDQUNFdkIsR0FBRyxDQUFDbkMsTUFBSixDQUFXQyxZQUFYLElBQTJCLG9CQUEzQixHQUNJLENBQ0VtQyxFQUFFLENBQUMsUUFBRCxFQUFXO0lBQUVjLEtBQUssRUFBRTtNQUFFRixLQUFLLEVBQUU7SUFBVDtFQUFULENBQVgsRUFBMEMsQ0FDMUNiLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLE9BQVAsQ0FEMEMsQ0FBMUMsQ0FESixFQUlFSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBSkYsRUFLRUgsRUFBRSxDQUNBLFFBREEsRUFFQTtJQUFFYyxLQUFLLEVBQUU7TUFBRUYsS0FBSyxFQUFFO0lBQVQ7RUFBVCxDQUZBLEVBR0EsQ0FBQ2IsR0FBRyxDQUFDSSxFQUFKLENBQU8sY0FBUCxDQUFELENBSEEsQ0FMSixFQVVFSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBVkYsRUFXRUgsRUFBRSxDQUNBLFFBREEsRUFFQTtJQUFFYyxLQUFLLEVBQUU7TUFBRUYsS0FBSyxFQUFFO0lBQVQ7RUFBVCxDQUZBLEVBR0EsQ0FBQ2IsR0FBRyxDQUFDSSxFQUFKLENBQU8sc0JBQVAsQ0FBRCxDQUhBLENBWEosRUFnQkVKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FoQkYsRUFpQkVILEVBQUUsQ0FDQSxRQURBLEVBRUE7SUFBRWMsS0FBSyxFQUFFO01BQUVGLEtBQUssRUFBRTtJQUFUO0VBQVQsQ0FGQSxFQUdBLENBQUNiLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLGFBQVAsQ0FBRCxDQUhBLENBakJKLEVBc0JFSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBdEJGLEVBdUJFSCxFQUFFLENBQUMsUUFBRCxFQUFXO0lBQUVjLEtBQUssRUFBRTtNQUFFRixLQUFLLEVBQUU7SUFBVDtFQUFULENBQVgsRUFBd0MsQ0FDeENiLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLE1BQVAsQ0FEd0MsQ0FBeEMsQ0F2QkosQ0FESixHQTRCSSxDQUNFSCxFQUFFLENBQUMsUUFBRCxFQUFXO0lBQUVjLEtBQUssRUFBRTtNQUFFRixLQUFLLEVBQUU7SUFBVDtFQUFULENBQVgsRUFBNEMsQ0FDNUNiLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFNBQVAsQ0FENEMsQ0FBNUMsQ0FESixFQUlFSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBSkYsRUFLRUgsRUFBRSxDQUFDLFFBQUQsRUFBVztJQUFFYyxLQUFLLEVBQUU7TUFBRUYsS0FBSyxFQUFFO0lBQVQ7RUFBVCxDQUFYLEVBQTRDLENBQzVDYixHQUFHLENBQUNJLEVBQUosQ0FBTyxTQUFQLENBRDRDLENBQTVDLENBTEosRUFRRUosR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQVJGLEVBU0VILEVBQUUsQ0FDQSxRQURBLEVBRUE7SUFBRWMsS0FBSyxFQUFFO01BQUVGLEtBQUssRUFBRTtJQUFUO0VBQVQsQ0FGQSxFQUdBLENBQUNiLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLGlCQUFQLENBQUQsQ0FIQSxDQVRKLENBN0JOLENBaENBLEVBNkVBLENBN0VBLENBSHFDLENBQXZDLENBREosQ0FIQSxDQTVKSixFQXFQRUosR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQXJQRixFQXNQRUosR0FBRyxDQUFDRyxFQUFKLENBQU8sQ0FBUCxDQXRQRixDQVhBLENBRG1DLENBQXJDLENBSDJDLENBQTdDLENBREosRUEyUUVILEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0EzUUYsRUE0UUVILEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUssV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUEyQyxDQUMzQ04sR0FBRyxDQUFDRyxFQUFKLENBQU8sQ0FBUCxDQUQyQyxFQUUzQ0gsR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUYyQyxFQUczQ0gsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQThDLENBQzlDTCxFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVLLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBc0MsQ0FDdENMLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUssV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUF1QyxDQUN2Q0wsRUFBRSxDQUFDLE1BQUQsRUFBUztJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUFULEVBQXVDLENBQUNOLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFVBQVAsQ0FBRCxDQUF2QyxDQURxQyxFQUV2Q0osR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUZ1QyxFQUd2Q0gsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQTJDLENBQzNDTCxFQUFFLENBQ0EsUUFEQSxFQUVBO0lBQ0VVLFVBQVUsRUFBRSxDQUNWO01BQ0VqRCxJQUFJLEVBQUUsT0FEUjtNQUVFa0QsT0FBTyxFQUFFLFNBRlg7TUFHRUMsS0FBSyxFQUFFYixHQUFHLENBQUNwQyxHQUhiO01BSUVrRCxVQUFVLEVBQUU7SUFKZCxDQURVLENBRGQ7SUFTRVIsV0FBVyxFQUFFLGNBVGY7SUFVRUMsRUFBRSxFQUFFO01BQ0ZlLE1BQU0sRUFBRSxnQkFBVWIsTUFBVixFQUFrQjtRQUN4QixJQUFJYyxhQUFhLEdBQUdDLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsTUFBaEIsQ0FDakJDLElBRGlCLENBQ1psQixNQUFNLENBQUNVLE1BQVAsQ0FBY1MsT0FERixFQUNXLFVBQVVDLENBQVYsRUFBYTtVQUN4QyxPQUFPQSxDQUFDLENBQUNDLFFBQVQ7UUFDRCxDQUhpQixFQUlqQkMsR0FKaUIsQ0FJYixVQUFVRixDQUFWLEVBQWE7VUFDaEIsSUFBSUcsR0FBRyxHQUFHLFlBQVlILENBQVosR0FBZ0JBLENBQUMsQ0FBQ0ksTUFBbEIsR0FBMkJKLENBQUMsQ0FBQ2hCLEtBQXZDO1VBQ0EsT0FBT21CLEdBQVA7UUFDRCxDQVBpQixDQUFwQjtRQVFBaEMsR0FBRyxDQUFDcEMsR0FBSixHQUFVNkMsTUFBTSxDQUFDVSxNQUFQLENBQWNlLFFBQWQsR0FDTlgsYUFETSxHQUVOQSxhQUFhLENBQUMsQ0FBRCxDQUZqQjtNQUdEO0lBYkM7RUFWTixDQUZBLEVBNEJBLENBQ0V0QixFQUFFLENBQUMsUUFBRCxFQUFXO0lBQUVjLEtBQUssRUFBRTtNQUFFRixLQUFLLEVBQUU7SUFBVDtFQUFULENBQVgsRUFBc0MsQ0FBQ2IsR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUFELENBQXRDLENBREosRUFFRUosR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUZGLEVBR0VILEVBQUUsQ0FBQyxRQUFELEVBQVc7SUFBRWMsS0FBSyxFQUFFO01BQUVGLEtBQUssRUFBRTtJQUFUO0VBQVQsQ0FBWCxFQUF1QyxDQUFDYixHQUFHLENBQUNJLEVBQUosQ0FBTyxJQUFQLENBQUQsQ0FBdkMsQ0FISixFQUlFSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBSkYsRUFLRUgsRUFBRSxDQUFDLFFBQUQsRUFBVztJQUFFYyxLQUFLLEVBQUU7TUFBRUYsS0FBSyxFQUFFO0lBQVQ7RUFBVCxDQUFYLEVBQXVDLENBQUNiLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLElBQVAsQ0FBRCxDQUF2QyxDQUxKLEVBTUVKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FORixFQU9FSCxFQUFFLENBQUMsUUFBRCxFQUFXO0lBQUVjLEtBQUssRUFBRTtNQUFFRixLQUFLLEVBQUU7SUFBVDtFQUFULENBQVgsRUFBd0MsQ0FDeENiLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEtBQVAsQ0FEd0MsQ0FBeEMsQ0FQSixDQTVCQSxDQUR5QyxDQUEzQyxDQUhxQyxFQTZDdkNKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0E3Q3VDLEVBOEN2Q0gsRUFBRSxDQUFDLE1BQUQsRUFBUztJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUFULEVBQXVDLENBQUNOLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFVBQVAsQ0FBRCxDQUF2QyxDQTlDcUMsRUErQ3ZDSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBL0N1QyxFQWdEdkNILEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUssV0FBVyxFQUFFO0VBQWYsQ0FBUixDQWhEcUMsQ0FBdkMsQ0FEb0MsQ0FBdEMsQ0FENEMsRUFxRDlDTixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBckQ4QyxFQXNEOUNILEVBQUUsQ0FDQSxLQURBLEVBRUE7SUFBRUssV0FBVyxFQUFFO0VBQWYsQ0FGQSxFQUdBLENBQ0VMLEVBQUUsQ0FDQSxhQURBLEVBRUE7SUFBRUssV0FBVyxFQUFFLFdBQWY7SUFBNEJTLEtBQUssRUFBRTtNQUFFb0IsRUFBRSxFQUFFO0lBQU47RUFBbkMsQ0FGQSxFQUdBLENBQ0VsQyxFQUFFLENBQUMsTUFBRCxFQUFTLENBQ1RBLEVBQUUsQ0FBQyxHQUFELEVBQU07SUFDTkssV0FBVyxFQUFFLHFCQURQO0lBRU5TLEtBQUssRUFBRTtNQUFFLGVBQWU7SUFBakI7RUFGRCxDQUFOLENBRE8sQ0FBVCxDQURKLEVBT0VmLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFlBQVAsQ0FQRixDQUhBLENBREosQ0FIQSxFQWtCQSxDQWxCQSxDQXRENEMsRUEwRTlDSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBMUU4QyxFQTJFOUNILEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUssV0FBVyxFQUFFO0VBQWYsQ0FBUixDQTNFNEMsQ0FBOUMsQ0FIeUMsRUFnRjNDTixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBaEYyQyxFQWlGM0NILEVBQUUsQ0FDQSxLQURBLEVBRUE7SUFBRUssV0FBVyxFQUFFO0VBQWYsQ0FGQSxFQUdBLENBQ0VMLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUssV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUF5QyxDQUN6Q0wsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQTZDLENBQzdDTCxFQUFFLENBQ0EsT0FEQSxFQUVBO0lBQUVLLFdBQVcsRUFBRTtFQUFmLENBRkEsRUFHQSxDQUNFTixHQUFHLENBQUNHLEVBQUosQ0FBTyxDQUFQLENBREYsRUFFRUgsR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUZGLEVBR0VILEVBQUUsQ0FDQSxPQURBLEVBRUFELEdBQUcsQ0FBQ29DLEVBQUosQ0FBT3BDLEdBQUcsQ0FBQzdCLEtBQUosQ0FBVVIsSUFBakIsRUFBdUIsVUFBVTBFLEVBQVYsRUFBY0MsQ0FBZCxFQUFpQjtJQUN0QyxPQUFPdEMsR0FBRyxDQUFDN0IsS0FBSixJQUFhNkIsR0FBRyxDQUFDN0IsS0FBSixDQUFVUixJQUF2QixHQUNIc0MsRUFBRSxDQUFDLElBQUQsRUFBTztNQUFFc0MsR0FBRyxFQUFFRixFQUFFLENBQUMvRDtJQUFWLENBQVAsRUFBdUIsQ0FDdkIyQixFQUFFLENBQUMsSUFBRCxFQUFPO01BQUVjLEtBQUssRUFBRTtRQUFFeUIsS0FBSyxFQUFFO01BQVQ7SUFBVCxDQUFQLEVBQXVDLENBQ3ZDeEMsR0FBRyxDQUFDSSxFQUFKLENBQU9KLEdBQUcsQ0FBQ3lDLEVBQUosQ0FBT0gsQ0FBQyxHQUFHLENBQVgsQ0FBUCxDQUR1QyxDQUF2QyxDQURxQixFQUl2QnRDLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FKdUIsRUFLdkJILEVBQUUsQ0FDQSxJQURBLEVBRUEsQ0FDRUEsRUFBRSxDQUNBLGFBREEsRUFFQTtNQUNFSyxXQUFXLEVBQUUsWUFEZjtNQUVFUyxLQUFLLEVBQUU7UUFBRW9CLEVBQUUsRUFBRSxnQkFBZ0JFLEVBQUUsQ0FBQy9EO01BQXpCO0lBRlQsQ0FGQSxFQU1BLENBQUMwQixHQUFHLENBQUNJLEVBQUosQ0FBT0osR0FBRyxDQUFDeUMsRUFBSixDQUFPSixFQUFFLENBQUMzRSxJQUFWLENBQVAsQ0FBRCxDQU5BLENBREosQ0FGQSxFQVlBLENBWkEsQ0FMcUIsRUFtQnZCc0MsR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQW5CdUIsRUFvQnZCSCxFQUFFLENBQUMsSUFBRCxFQUFPLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPSixHQUFHLENBQUN5QyxFQUFKLENBQU9KLEVBQUUsQ0FBQ3JFLEtBQVYsQ0FBUCxDQUFELENBQVAsQ0FwQnFCLEVBcUJ2QmdDLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FyQnVCLEVBc0J2QkgsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBT0osR0FBRyxDQUFDeUMsRUFBSixDQUFPSixFQUFFLENBQUNwRSxLQUFWLENBQVAsQ0FBRCxDQUFQLENBdEJxQixFQXVCdkIrQixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBdkJ1QixFQXdCdkJILEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU9KLEdBQUcsQ0FBQ3lDLEVBQUosQ0FBT0osRUFBRSxDQUFDSyxZQUFWLENBQVAsQ0FBRCxDQUFQLENBeEJxQixFQXlCdkIxQyxHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBekJ1QixFQTBCdkJILEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU9KLEdBQUcsQ0FBQ3lDLEVBQUosQ0FBT0osRUFBRSxDQUFDdEUsSUFBVixDQUFQLENBQUQsQ0FBUCxDQTFCcUIsRUEyQnZCaUMsR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQTNCdUIsRUE0QnZCSCxFQUFFLENBQUMsSUFBRCxFQUFPLENBQ1BBLEVBQUUsQ0FDQSxNQURBLEVBRUE7TUFDRUssV0FBVyxFQUFFLE9BRGY7TUFFRSxTQUNFK0IsRUFBRSxDQUFDTSxNQUFILElBQWEsUUFBYixJQUNBTixFQUFFLENBQUNNLE1BQUgsSUFBYSxTQURiLEdBRUksVUFGSixHQUdJO0lBTlIsQ0FGQSxFQVVBLENBQUMzQyxHQUFHLENBQUNJLEVBQUosQ0FBT0osR0FBRyxDQUFDeUMsRUFBSixDQUFPSixFQUFFLENBQUNNLE1BQVYsQ0FBUCxDQUFELENBVkEsQ0FESyxDQUFQLENBNUJxQixDQUF2QixDQURDLEdBNENIMUMsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUFDQSxFQUFFLENBQUMsSUFBRCxFQUFPLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFdBQVAsQ0FBRCxDQUFQLENBQUgsQ0FBUCxDQTVDTjtFQTZDRCxDQTlDRCxDQUZBLEVBaURBLENBakRBLENBSEosQ0FIQSxDQUQyQyxDQUE3QyxDQUR1QyxDQUF6QyxDQURKLEVBZ0VFSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBaEVGLEVBaUVFSCxFQUFFLENBQUMsY0FBRCxFQUFpQjtJQUNqQmMsS0FBSyxFQUFFO01BQUU2QixPQUFPLEVBQUU1QyxHQUFHLENBQUM3QixLQUFmO01BQXNCUCxHQUFHLEVBQUVvQyxHQUFHLENBQUNwQztJQUEvQixDQURVO0lBRWpCMkMsRUFBRSxFQUFFO01BQ0ZzQyxXQUFXLEVBQUUscUJBQUNiLEdBQUQ7UUFBQSxPQUFTaEMsR0FBRyxDQUFDWCxTQUFKLENBQWMyQyxHQUFkLENBQVQ7TUFBQSxDQURYO01BRUYsY0FBYyxtQkFBVXZCLE1BQVYsRUFBa0I7UUFDOUJULEdBQUcsQ0FBQ3BDLEdBQUosR0FBVTZDLE1BQVY7TUFDRDtJQUpDO0VBRmEsQ0FBakIsQ0FqRUosQ0FIQSxFQThFQSxDQTlFQSxDQWpGeUMsQ0FBM0MsQ0E1UUosQ0FIQSxDQUhhLENBQVIsQ0FBVDtBQXViRCxDQTFiRDs7QUEyYkEsSUFBSXFDLGVBQWUsR0FBRyxDQUNwQixZQUFZO0VBQ1YsSUFBSTlDLEdBQUcsR0FBRyxJQUFWO0VBQUEsSUFDRUMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVUQsRUFEakI7O0VBRUEsT0FBT0EsRUFBRSxDQUFDLFNBQUQsRUFBWTtJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUFaLEVBQStDLENBQ3RETCxFQUFFLENBQUMsSUFBRCxFQUFPLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLE9BQVAsQ0FBRCxDQUFQLENBRG9ELENBQS9DLENBQVQ7QUFHRCxDQVBtQixFQVFwQixZQUFZO0VBQ1YsSUFBSUosR0FBRyxHQUFHLElBQVY7RUFBQSxJQUNFQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxFQURqQjs7RUFFQSxPQUFPQSxFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVLLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBbUQsQ0FDMURMLEVBQUUsQ0FBQyxJQUFELEVBQU87SUFBRUssV0FBVyxFQUFFO0VBQWYsQ0FBUCxFQUErQyxDQUFDTixHQUFHLENBQUNJLEVBQUosQ0FBTyxhQUFQLENBQUQsQ0FBL0MsQ0FEd0QsQ0FBbkQsQ0FBVDtBQUdELENBZG1CLEVBZXBCLFlBQVk7RUFDVixJQUFJSixHQUFHLEdBQUcsSUFBVjtFQUFBLElBQ0VDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVVELEVBRGpCOztFQUVBLE9BQU9BLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUssV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUFrRSxDQUN6RUwsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQXVDLENBQ3ZDTCxFQUFFLENBQUMsT0FBRCxFQUFVO0lBQUU4QyxXQUFXLEVBQUU7TUFBRUMsT0FBTyxFQUFFO0lBQVg7RUFBZixDQUFWLEVBQWlELENBQUNoRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxNQUFQLENBQUQsQ0FBakQsQ0FEcUMsRUFFdkNKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FGdUMsRUFHdkNILEVBQUUsQ0FBQyxRQUFELEVBQVc7SUFBRUssV0FBVyxFQUFFLFdBQWY7SUFBNEJTLEtBQUssRUFBRTtNQUFFaEQsSUFBSSxFQUFFO0lBQVI7RUFBbkMsQ0FBWCxFQUFvRSxDQUNwRWlDLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFFBQVAsQ0FEb0UsQ0FBcEUsQ0FIcUMsQ0FBdkMsQ0FEdUUsQ0FBbEUsQ0FBVDtBQVNELENBM0JtQixFQTRCcEIsWUFBWTtFQUNWLElBQUlKLEdBQUcsR0FBRyxJQUFWO0VBQUEsSUFDRUMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVUQsRUFEakI7O0VBRUEsT0FBT0EsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSyxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQW1ELENBQzFETCxFQUFFLENBQUMsSUFBRCxFQUFPO0lBQUVLLFdBQVcsRUFBRTtFQUFmLENBQVAsRUFBK0MsQ0FBQ04sR0FBRyxDQUFDSSxFQUFKLENBQU8sYUFBUCxDQUFELENBQS9DLENBRHdELENBQW5ELENBQVQ7QUFHRCxDQWxDbUIsRUFtQ3BCLFlBQVk7RUFDVixJQUFJSixHQUFHLEdBQUcsSUFBVjtFQUFBLElBQ0VDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVVELEVBRGpCOztFQUVBLE9BQU9BLEVBQUUsQ0FBQyxPQUFELEVBQVUsQ0FDakJBLEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FDUEEsRUFBRSxDQUNBLElBREEsRUFFQTtJQUFFOEMsV0FBVyxFQUFFO01BQUUsY0FBYztJQUFoQixDQUFmO0lBQTJDaEMsS0FBSyxFQUFFO01BQUVrQyxLQUFLLEVBQUU7SUFBVDtFQUFsRCxDQUZBLEVBR0EsQ0FBQ2pELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFFBQVAsQ0FBRCxDQUhBLENBREssRUFNUEosR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQU5PLEVBT1BILEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sT0FBUCxDQUFELENBQVAsQ0FQSyxFQVFQSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBUk8sRUFTUEgsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxXQUFQLENBQUQsQ0FBUCxDQVRLLEVBVVBKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FWTyxFQVdQSCxFQUFFLENBQUMsSUFBRCxFQUFPLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLE9BQVAsQ0FBRCxDQUFQLENBWEssRUFZUEosR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQVpPLEVBYVBILEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sZUFBUCxDQUFELENBQVAsQ0FiSyxFQWNQSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBZE8sRUFlUEgsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxNQUFQLENBQUQsQ0FBUCxDQWZLLEVBZ0JQSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBaEJPLEVBaUJQSCxFQUFFLENBQUMsSUFBRCxFQUFPLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFNBQVAsQ0FBRCxDQUFQLENBakJLLENBQVAsQ0FEZSxDQUFWLENBQVQ7QUFxQkQsQ0EzRG1CLENBQXRCO0FBNkRBTCxNQUFNLENBQUNtRCxhQUFQLEdBQXVCLElBQXZCOzs7Ozs7Ozs7Ozs7O0FDeGZBO0FBQUE7QUFBQTtBQUFBO0FBQW1GO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEwTCxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMTcuYnVuZGxlLjEzZDRhOGU2MmEyZTk4NjhlNTFjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgIDxoMT5Vc2VyczwvaDE+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQgdmxkLXBhcmVudFwiIHJlZj1cInJlZl9sb2FkX2ZpbHRlcl91c2VyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJveC13YXJuaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZSBjYXJkLXRleHRcIj5Vc2VyIFNlYXJjaDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJsb2FkVXNlcnMoKVwiIGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOYW1lIC4uLlwiIHYtbW9kZWw9XCJzZWFyY2gubmFtZVwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlBob25lIE5vLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBQaG9uZSBOby4gLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5waG9uZVwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWwgLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5lbWFpbFwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk9yZ2FuaXNhdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInNlYXJjaC5vcmdhbmlzYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBPcmdhbmlzYXRpb248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVuaXRlZCBTY3JhcCBNZXRhbFwiPlVuaXRlZCBTY3JhcCBNZXRhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3RoZXJzXCI+T3RoZXJzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Sb2xlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwic2VhcmNoLnR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJzZWFyY2gub3JnYW5pc2F0aW9uID09ICdVbml0ZWQgU2NyYXAgTWV0YWwnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFkbWluXCI+QWRtaW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmluYW5jZSBUZWFtXCI+RmluYW5jZSBUZWFtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRyYW5zcG9ydGF0aW9uIFRlYW1cIj4gVHJhbnNwb3J0YXRpb24gVGVhbTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTYWxlcyBUZWFtIFwiPlNhbGVzIFRlYW0gPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNFQ1wiPkNFQyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUHJpbWFyeVwiPlByaW1hcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmluYW5jZVwiPkZpbmFuY2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHJhbnNwb3J0YXRpb25cIj5UcmFuc3BvcnRhdGlvbiA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCI+ICZuYnNwOyZuYnNwOyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gbGluazFcIj5GaWx0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtYmxhY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlVzZXJzIFRhYmxlPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWJveC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlNob3dpbmdib3hcIj4gPHNwYW4gY2xhc3M9XCJwdWxsLWxlZnRcIj5TaG93aW5nIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0IGRyb3BcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwicHBwXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI1XCI+MjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMFwiPjEwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLWxlZnRcIj5lbnRyaWVzIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi91c2VyL2FkZFwiIGNsYXNzPVwiYnRuIGxpbmsxXCI+IDxzcGFuPjxpIGNsYXNzPVwiZmEgZmEtcGx1cy1zcXVhcmUtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L3NwYW4+IEFkZCBVc2VyIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIiB3aWR0aD1cIjcwXCI+U2wgTm8uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZSA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5QaG9uZSBOby48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk9yZ2FuaXNhdGlvbi48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGJvZHkgPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIodWEsIHgpIGluIHVsaXN0LmRhdGFcIiA6a2V5PVwidWEuaWRcIiB2LWlmPVwidWxpc3QgJiYgdWxpc3QuZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPnt7IHggKyAxIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiJy91c2VyL2VkaXQvJyArIHVhLmlkXCIgY2xhc3M9XCJ0ZXh0LWdyZWVuXCI+e3sgdWEubmFtZSB9fTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdWEucGhvbmUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57eyB1YS5lbWFpbCB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHVhLm9yZ2FuaXphdGlvbiB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHVhLnR5cGUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzcz1cImJhZGdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwidWEuc3RhdHVzID09ICdBY3RpdmUnIHx8IHVhLnN0YXR1cyA9PSAnQXBwcm92ZScgPyAnYmctZ3JlZW4nIDogJ2JnLXJlZCdcIj57eyB1YS5zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+Tm8gcmVjb3JkPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8VWpQYWdpbmF0aW9uIEBmZXRjaFJlY29yZD1cInZhbCA9PiBsb2FkVXNlcnModmFsKVwiIDpyZWNvcmRzPVwidWxpc3RcIiA6cHBwLnN5bmM9XCJwcHBcIiAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcInVzZXJsaXN0XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBwcDogNSxcclxuICAgICAgc2VhcmNoOiB7XHJcbiAgICAgICAgb3JnYW5pc2F0aW9uOiAnJyxcclxuICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnXHJcbiAgICAgIH0sXHJcbiAgICAgIGVkaXRtb2RlOiBmYWxzZSxcclxuICAgICAgdWxpc3Q6IFwiXCIsXHJcbiAgICAgIHVzZXJzOiB7fSxcclxuICAgICAgZm9ybTogbmV3IEZvcm0oe1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGVtYWlsX3ZlcmlmaWVkX2F0OiAnJyxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBhc3luYyBwcHAoKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMubG9hZFVzZXJzKClcclxuICAgIH0sXHJcbiAgICBhc3luYyAnc2VhcmNoLm9yZ2FuaXphdGlvbicobikge1xyXG4gICAgICBpZiAobiA9PSAnVW5pdGVkIFNjcmFwIE1ldGFsJykge1xyXG4gICAgICAgIGlmICghWydBZG1pbicsICdGaW5hbmNlIFRlYW0nLCAnVHJhbnNwb3J0YXRpb24gVGVhbScsICdTYWxlcyBUZWFtJywgJ0NFQyddLmluY2x1ZGVzKHRoaXMuc2VhcmNoLnR5cGUpKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaC50eXBlID0gJydcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFbJ1ByaW1hcnknLCAnRmluYW5jZScsICdUcmFuc3BvcnRhdGlvbiddLmluY2x1ZGVzKHRoaXMuc2VhcmNoLnR5cGUpKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaC50eXBlID0gJydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuXHJcbiAgICBkZWxldGVVc2VyKGlkKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgICB0ZXh0OiBcIllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzIVwiLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnI2QzMycsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgZGVsZXRlIGl0ISdcclxuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICAgIC8vIFNlbmQgcmVxdWVzdCB0byB0aGUgc2VydmVyXHJcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5mb3JtLmRlbGV0ZSgnYXBpL3VzZXIvJyArIGlkKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgU3dhbC5maXJlKFxyXG4gICAgICAgICAgICAgICdEZWxldGVkIScsXHJcbiAgICAgICAgICAgICAgJ1lvdXIgZmlsZSBoYXMgYmVlbiBkZWxldGVkLicsXHJcbiAgICAgICAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vIEZpcmUuJGVtaXQoJ0FmdGVyQ3JlYXRlJyk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XHJcbiAgICAgICAgICB9KS5jYXRjaCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBTd2FsLmZpcmUoXCJGYWlsZWQhXCIsIGRhdGEubWVzc2FnZSwgXCJ3YXJuaW5nXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkVXNlcnModXJsID0gJy9hcGkvdXNlcicpIHtcclxuICAgICAgLy8gaWYodGhpcy4kZ2F0ZS5pc0FkbWluKCkpe1xyXG4gICAgICAvLyBheGlvcy5nZXQoXCJhcGkvdXNlclwiKS50aGVuKCh7IGRhdGEgfSkgPT4gKHRoaXMudXNlcnMgPSBkYXRhKSk7XHJcbiAgICAgIGxldCBVRmxvZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHtcclxuICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfZmlsdGVyX3VzZXJcclxuICAgICAgfSk7XHJcbiAgICAgIGF4aW9zLmdldCh1cmwsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIG9yZ2FuaXNhdGlvbjogdGhpcy5zZWFyY2gub3JnYW5pc2F0aW9uLFxyXG4gICAgICAgICAgdHlwZTogdGhpcy5zZWFyY2gudHlwZSxcclxuICAgICAgICAgIG5hbWU6IHRoaXMuc2VhcmNoLm5hbWUsXHJcbiAgICAgICAgICBwaG9uZTogdGhpcy5zZWFyY2gucGhvbmUsXHJcbiAgICAgICAgICBlbWFpbDogdGhpcy5zZWFyY2guZW1haWwsXHJcbiAgICAgICAgICBwcHA6IHRoaXMucHBwLFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnVsaXN0ID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgVUZsb2Rlci5oaWRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NvbWUgZXJyb3Igb2NjdXJlZCEgUGxlYXNlIHRyeSBhZ2FpbidcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgVUZsb2Rlci5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdVc2VyIENvbXBvbmVudCBtb3VudGVkLicpXHJcbiAgfSxcclxuICBjcmVhdGVkKCkge1xyXG5cclxuICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICB0aGlzLmxvYWRVc2VycygpO1xyXG4gICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICB7IHJlZjogXCJyZWZfbG9hZF9maWx0ZXJfdXNlclwiLCBzdGF0aWNDbGFzczogXCJjb250ZW50IHZsZC1wYXJlbnRcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LXdhcm5pbmdcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkVXNlcnMoKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gubmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIE5hbWUgLi4uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VhcmNoLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiUGhvbmUgTm8uXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5waG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgUGhvbmUgTm8uIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VhcmNoLnBob25lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJwaG9uZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgRW1haWwgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2guZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImVtYWlsXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIk9yZ2FuaXNhdGlvblwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5vcmdhbmlzYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5vcmdhbmlzYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmdhbmlzYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBPcmdhbmlzYXRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiVW5pdGVkIFNjcmFwIE1ldGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJVbml0ZWQgU2NyYXAgTWV0YWxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiT3RoZXJzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiT3RoZXJzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlJvbGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaC5vcmdhbmlzYXRpb24gPT0gXCJVbml0ZWQgU2NyYXAgTWV0YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIkFkbWluXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQWRtaW5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiRmluYW5jZSBUZWFtXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJGaW5hbmNlIFRlYW1cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJUcmFuc3BvcnRhdGlvbiBUZWFtXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgVHJhbnNwb3J0YXRpb24gVGVhbVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIlNhbGVzIFRlYW0gXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYWxlcyBUZWFtIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJDRUNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDRUMgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJQcmltYXJ5XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUHJpbWFyeVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiRmluYW5jZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZpbmFuY2VcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiVHJhbnNwb3J0YXRpb25cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlRyYW5zcG9ydGF0aW9uIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LWJsYWNrXCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tLWJveC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJTaG93aW5nYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiIH0sIFtfdm0uX3YoXCJTaG93aW5nIFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnQgZHJvcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBwcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcHBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBwcCA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNVwiIH0gfSwgW192bS5fdihcIjVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMjVcIiB9IH0sIFtfdm0uX3YoXCIyNVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI1MFwiIH0gfSwgW192bS5fdihcIjUwXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjEwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMTAwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIgfSwgW192bS5fdihcImVudHJpZXMgXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsxXCIsIGF0dHJzOiB7IHRvOiBcIi91c2VyL2FkZFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1cy1zcXVhcmUtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEFkZCBVc2VyIFwiKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlc2VjdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLXJlc3BvbnNpdmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnVsaXN0LmRhdGEsIGZ1bmN0aW9uICh1YSwgeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVsaXN0ICYmIF92bS51bGlzdC5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRyXCIsIHsga2V5OiB1YS5pZCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHggKyAxKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZ3JlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvdXNlci9lZGl0L1wiICsgdWEuaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModWEubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1YS5waG9uZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModWEuZW1haWwpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVhLm9yZ2FuaXphdGlvbikpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModWEudHlwZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJhZGdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVhLnN0YXR1cyA9PSBcIkFjdGl2ZVwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWEuc3RhdHVzID09IFwiQXBwcm92ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJnLXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVhLnN0YXR1cykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwidHJcIiwgW19jKFwidGRcIiwgW192bS5fdihcIk5vIHJlY29yZFwiKV0pXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcIlVqUGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcmVjb3JkczogX3ZtLnVsaXN0LCBwcHA6IF92bS5wcHAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgZmV0Y2hSZWNvcmQ6ICh2YWwpID0+IF92bS5sb2FkVXNlcnModmFsKSxcbiAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnBwcFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5wcHAgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlVzZXJzXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbX3ZtLl92KFwiVXNlciBTZWFyY2hcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNTdHlsZTogeyBkaXNwbGF5OiBcImJsb2NrXCIgfSB9LCBbX3ZtLl92KFwiIMKgwqAgXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsxXCIsIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiRmlsdGVyXCIpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgY2FyZC10ZXh0XCIgfSwgW192bS5fdihcIlVzZXJzIFRhYmxlXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSwgYXR0cnM6IHsgd2lkdGg6IFwiNzBcIiB9IH0sXG4gICAgICAgICAgW192bS5fdihcIlNsIE5vLlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZSBcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUGhvbmUgTm8uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk9yZ2FuaXNhdGlvbi5cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUm9sZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTdGF0dXMgXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5NzVhMzYwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzk3NWEzNjAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzk3NWEzNjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzk3NWEzNjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5NzVhMzYwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc5NzVhMzYwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9saXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5NzVhMzYwJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==