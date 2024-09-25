(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/AddEdit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/AddEdit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserAddEdit",
  data: function data() {
    return {
      editmode: false,
      step: 1,
      users: {},
      frm_user: new Form({
        id: '',
        organization: '',
        name: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        zip_code: '',
        country: '',
        phone: '',
        email: '',
        fax: '',
        type: '',
        account_info: []
      })
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["errors"])),
  methods: {
    addInfo: function addInfo() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.frm_user.account_info.push({
                  id: '',
                  account_no: ''
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    next_step: function next_step() {
      var _arguments = arguments,
          _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _final;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _final = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;

                _this2.$validator.validateAll('frmStep' + _this2.step).then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(valid) {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (valid) {
                              _this2.step++;

                              if (_final == 'submit') {
                                _this2.step = 1;

                                _this2.submit_user();
                              }
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

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    submit_user: function submit_user() {
      var _this3 = this;

      if (this.frm_user.id > 0) {
        this.frm_user.put('api/user/' + this.frm_user.id).then(function (response) {
          if (response.data.success == true) {
            _this3.frm_user.reset();

            Toast.fire({
              icon: 'success',
              title: response.data.message
            });
            axios.get("/api/user?layercat=1").then(function (_ref2) {
              var data = _ref2.data;
              return _this3.product_categories = data.data;
            });
            $('#product_category_popup').modal('hide');
          }
        });
      } else {
        this.frm_user.post('api/user').then(function (data) {
          _this3.frm_user.reset();

          $('a[href="#menu1"]').tab('show');
          _this3.frm_user.account_info = [];

          _this3.addInfo();

          Toast.fire({
            icon: 'success',
            title: data.data.message
          });
        });
      }
    },
    getResults: function getResults() {
      var _this4 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.$Progress.start();
      axios.get('api/user?page=' + page).then(function (_ref3) {
        var data = _ref3.data;
        return _this4.users = data.data;
      });
      this.$Progress.finish();
    },
    updateUser: function updateUser() {
      var _this5 = this;

      this.$Progress.start(); // console.log('Editing data');

      this.form.put('api/user/' + this.form.id).then(function (response) {
        // success
        $('#addNew').modal('hide');
        Toast.fire({
          icon: 'success',
          title: response.data.message
        });

        _this5.$Progress.finish(); //  Fire.$emit('AfterCreate');


        _this5.loadUsers();
      })["catch"](function () {
        _this5.$Progress.fail();
      });
    },
    editModal: function editModal(user) {
      this.editmode = true;
      this.form.reset();
      $('#addNew').modal('show');
      this.form.fill(user);
    },
    newModal: function newModal() {
      this.editmode = false;
      this.form.reset();
      $('#addNew').modal('show');
    },
    deleteUser: function deleteUser(id) {
      var _this6 = this;

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
          _this6.form["delete"]('api/user/' + id).then(function () {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success'); // Fire.$emit('AfterCreate');

            _this6.loadUsers();
          })["catch"](function (data) {
            Swal.fire("Failed!", data.message, "warning");
          });
        }
      });
    },
    loadUsers: function loadUsers() {
      var _this7 = this;

      this.$Progress.start();

      if (this.$gate.isAdmin()) {
        axios.get("api/user").then(function (_ref4) {
          var data = _ref4.data;
          return _this7.users = data.data;
        });
      }

      this.$Progress.finish();
    },
    createUser: function createUser() {
      var _this8 = this;

      this.form.post('api/user').then(function (response) {
        $('#addNew').modal('hide');
        Toast.fire({
          icon: 'success',
          title: response.data.message
        });

        _this8.$Progress.finish();

        _this8.loadUsers();
      })["catch"](function () {
        Toast.fire({
          icon: 'error',
          title: 'Some error occured! Please try again'
        });
      });
    }
  },
  mounted: function mounted() {
    console.log('User Component mounted.');
  },
  created: function created() {
    this.$Progress.start();
    this.addInfo();
    this.$Progress.finish();
  },
  watch: {
    step: function step(n) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                $('a[href="#menu' + n + '"]').tab('show');

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/AddEdit.vue?vue&type=template&id=57b1a6e9&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/AddEdit.vue?vue&type=template&id=57b1a6e9& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "content"
  }, [_c("div", {
    staticClass: "card box-warning"
  }, [_c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "tabssection"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "tab-content"
  }, [_c("div", {
    staticClass: "tab-pane fade in active",
    attrs: {
      id: "menu1"
    }
  }, [_c("form", {
    attrs: {
      "data-vv-scope": "frmStep1"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.next_step("frmStep1");
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Organization")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.organization,
      expression: "frm_user.organization"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class = {
      error: _vm.errors.organization
    }, _defineProperty(_class, "error", _vm.verrors.has("organization")), _defineProperty(_class, "haveValue", _vm.frm_user.organization), _class),
    attrs: {
      "data-vv-name": "organization",
      "data-vv-scope": "frmStep1"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.frm_user, "organization", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "Organization 1"
    }
  }, [_vm._v("Organization 1")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Organization 2"
    }
  }, [_vm._v("Organization 2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Organization 3"
    }
  }, [_vm._v("Organization 3")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Organization 4"
    }
  }, [_vm._v("Organization 4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Organization 5"
    }
  }, [_vm._v("Organization 5")])]), _vm._v(" "), _vm.verrors.has("frmStep1.organization") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.organization")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Full Name ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.name,
      expression: "frm_user.name"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class2 = {
      error: _vm.errors.name
    }, _defineProperty(_class2, "error", _vm.verrors.has("name")), _defineProperty(_class2, "haveValue", _vm.frm_user.name), _class2),
    attrs: {
      type: "text",
      placeholder: "Enter Full Name ...",
      "data-vv-name": "name",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.name") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.name")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Address 1 ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.address_1,
      expression: "frm_user.address_1"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class3 = {
      error: _vm.errors.address_1
    }, _defineProperty(_class3, "error", _vm.verrors.has("address_1")), _defineProperty(_class3, "haveValue", _vm.frm_user.address_1), _class3),
    attrs: {
      type: "text",
      placeholder: "Enter Address 1 ...",
      "data-vv-name": "address_1",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.address_1
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "address_1", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.address_1") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.address_1")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_vm._m(2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.address_2,
      expression: "frm_user.address_2"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class4 = {
      error: _vm.errors.address_2
    }, _defineProperty(_class4, "error", _vm.verrors.has("address_2")), _defineProperty(_class4, "haveValue", _vm.frm_user.address_2), _class4),
    attrs: {
      type: "text",
      placeholder: "Enter Address 2 ...",
      "data-vv-name": "address_2",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.address_2
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "address_2", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.address_2") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.address_2")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("City ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.city,
      expression: "frm_user.city"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class5 = {
      error: _vm.errors.city
    }, _defineProperty(_class5, "error", _vm.verrors.has("city")), _defineProperty(_class5, "haveValue", _vm.frm_user.city), _class5),
    attrs: {
      type: "text",
      placeholder: "Enter City ...",
      "data-vv-name": "city",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.city
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "city", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.city") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.city")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("State ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.state,
      expression: "frm_user.state"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class6 = {
      error: _vm.errors.state
    }, _defineProperty(_class6, "error", _vm.verrors.has("state")), _defineProperty(_class6, "haveValue", _vm.frm_user.state), _class6),
    attrs: {
      type: "text",
      placeholder: "Enter State ...",
      "data-vv-name": "state",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.state
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "state", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.state") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.state")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Zip ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.zip_code,
      expression: "frm_user.zip_code"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class7 = {
      error: _vm.errors.zip_code
    }, _defineProperty(_class7, "error", _vm.verrors.has("zip_code")), _defineProperty(_class7, "haveValue", _vm.frm_user.zip_code), _class7),
    attrs: {
      type: "text",
      placeholder: "Enter Zip ...",
      "data-vv-name": "zip_code",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.zip_code
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "zip_code", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.zip_code") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.zip_code")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Country ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.country,
      expression: "frm_user.country"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class8 = {
      error: _vm.errors.country
    }, _defineProperty(_class8, "error", _vm.verrors.has("country")), _defineProperty(_class8, "haveValue", _vm.frm_user.country), _class8),
    attrs: {
      type: "text",
      placeholder: "Enter Country ...",
      "data-vv-name": "country",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.country
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "country", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.country") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.country")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Phone ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.phone,
      expression: "frm_user.phone"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class9 = {
      error: _vm.errors.phone
    }, _defineProperty(_class9, "error", _vm.verrors.has("phone")), _defineProperty(_class9, "haveValue", _vm.frm_user.phone), _class9),
    attrs: {
      type: "text",
      placeholder: "Enter Phone ...",
      "data-vv-name": "phone",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "phone", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.phone") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.phone")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Email ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.email,
      expression: "frm_user.email"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required|email",
      expression: "'required|email'"
    }],
    staticClass: "form-control",
    "class": (_class10 = {
      error: _vm.errors.email
    }, _defineProperty(_class10, "error", _vm.verrors.has("email")), _defineProperty(_class10, "haveValue", _vm.frm_user.email), _class10),
    attrs: {
      type: "text",
      placeholder: "Enter Email ...",
      "data-vv-name": "email",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.email") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.email")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_vm._m(3), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.fax,
      expression: "frm_user.fax"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class11 = {
      error: _vm.errors.fax
    }, _defineProperty(_class11, "error", _vm.verrors.has("fax")), _defineProperty(_class11, "haveValue", _vm.frm_user.fax), _class11),
    attrs: {
      type: "text",
      placeholder: "Enter Fax ...",
      "data-vv-name": "fax",
      "data-vv-scope": "frmStep1"
    },
    domProps: {
      value: _vm.frm_user.fax
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.frm_user, "fax", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("frmStep1.fax") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("  " + _vm._s(_vm.verrors.first("frmStep1.fax")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("User Type ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.frm_user.type,
      expression: "frm_user.type"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    "class": (_class12 = {
      error: _vm.errors.type
    }, _defineProperty(_class12, "error", _vm.verrors.has("type")), _defineProperty(_class12, "haveValue", _vm.frm_user.type), _class12),
    attrs: {
      "data-vv-name": "type",
      "data-vv-scope": "frmStep1"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.frm_user, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_vm._m(4), _vm._v(" "), _vm._m(5)]), _vm._v(" "), _vm.verrors.has("frmStep1.type") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep1.type")))]) : _vm._e()])])]), _vm._v(" "), _vm._m(6)])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade",
    attrs: {
      id: "menu2"
    }
  }, [_c("form", {
    attrs: {
      "data-vv-scope": "frmStep2"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.next_step("frmStep2");
      }
    }
  }, [_c("div", {
    staticClass: "tablesection"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-striped table-hover"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", [_vm._v("\r\n                        " + _vm._s(_vm.verrors) + "\r\n                        "), _vm._l(_vm.frm_user.account_info, function (item, ix) {
    return _c("tr", {
      key: "up" + item.id
    }, [_c("td", {
      attrs: {
        align: "center"
      }
    }, [_vm._v(_vm._s(ix + 1))]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.account_no,
        expression: "item.account_no"
      }, {
        name: "validate",
        rawName: "v-validate",
        value: "required",
        expression: "'required'"
      }],
      attrs: {
        type: "text",
        "data-vv-name": "account no",
        "data-vv-scope": "frmStep2",
        name: "account_no"
      },
      domProps: {
        value: item.account_no
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(item, "account_no", $event.target.value);
        }
      }
    }), _vm._v(" "), _vm.verrors.has("frmStep2.account_no") ? _c("p", {
      staticClass: "errormsg"
    }, [_vm._v(" " + _vm._s(_vm.verrors.first("frmStep2.account_no")))]) : _vm._e()]), _vm._v(" "), _c("td", [ix > 1 ? _c("button", {
      staticClass: "btn btn-danger",
      attrs: {
        type: "button"
      }
    }, [_c("i", {
      staticClass: "fa fa-trash-o",
      attrs: {
        "aria-hidden": "true"
      }
    })]) : _vm._e(), _vm._v(" "), _vm.frm_user.account_info.length == ix + 1 ? _c("button", {
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
  })], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "box-footer"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn link2 mx-1",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.step--;
      }
    }
  }, [_vm._v("Back")]), _vm._v(" "), _c("button", {
    staticClass: "btn link1 mx-1",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Next")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade",
    attrs: {
      id: "menu3"
    }
  }, [_c("form", {
    attrs: {
      "data-vv-scope": "frmStep2"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit_user("submit");
      }
    }
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "box-footer"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn link2 mx-1",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.step--;
      }
    }
  }, [_vm._v("Back")]), _vm._v(" "), _c("button", {
    staticClass: "btn link1 mx-1",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Submit")])])])])])])])])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", {
    staticClass: "content-header"
  }, [_c("h1", [_vm._v("Add User")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("ul", {
    staticClass: "nav nav-tabs"
  }, [_c("li", {
    staticClass: "active"
  }, [_c("a", {
    attrs: {
      "data-toggle": "tab",
      href: "#menu1"
    }
  }, [_vm._v("User Information")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      "data-toggle": "tab",
      href: "#menu2"
    }
  }, [_vm._v("Account Information")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      "data-toggle": "tab",
      href: "#menu3"
    }
  }, [_vm._v("User Settings")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("label", [_vm._v("Address 2 "), _c("span", [_vm._v("(optional)")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("label", [_vm._v("Fax "), _c("span", [_vm._v(" (optional)")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("optgroup", {
    attrs: {
      label: "Internal (USM Employees)"
    }
  }, [_c("option", {
    attrs: {
      value: "Admin"
    }
  }, [_vm._v("Admin")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Internal Customer Service"
    }
  }, [_vm._v("Customer Service ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Internal Customer Service KAM"
    }
  }, [_vm._v("    KAM?")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Internal Finance"
    }
  }, [_vm._v("Finance")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Internal Logistics"
    }
  }, [_vm._v("Logistics ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("optgroup", {
    attrs: {
      label: "External (Customers)"
    }
  }, [_c("option", {
    attrs: {
      value: "External Primary"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "External Finance"
    }
  }, [_vm._v("Finance")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "External Logistics"
    }
  }, [_vm._v("Logistics ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-footer"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn link1",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Next")])])]);
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
  }, [_vm._v("Sl No.")]), _vm._v(" "), _c("th", [_vm._v("Account No")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "100"
    }
  }, [_vm._v("Action")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-header with-border bor"
  }, [_c("div", {
    staticClass: "pull-left"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("Permissions Granted")])]), _vm._v(" "), _c("div", {
    staticClass: "pull-right dropdown"
  }, [_c("a", {
    staticClass: "btn link2 widthauto",
    attrs: {
      href: "add_permission.html"
    }
  }, [_c("span", [_c("i", {
    staticClass: "fa fa-pencil",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" Add Permission")]), _vm._v("   \r\n                    "), _c("button", {
    staticClass: "btn link1 widthauto",
    attrs: {
      type: "button",
      "data-toggle": "dropdown"
    }
  }, [_c("i", {
    staticClass: "fa fa-cog",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c("ul", {
    staticClass: "dropdown-menu"
  }, [_c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("HTML")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("CSS")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("JavaScript")])])])]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
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
  }, [_vm._v("Sl No.")]), _vm._v(" "), _c("th", [_c("input", {
    attrs: {
      type: "checkbox"
    }
  })]), _vm._v(" "), _c("th", [_vm._v("Permission Name")]), _vm._v(" "), _c("th", [_vm._v("Permission Deseripton")]), _vm._v(" "), _c("th", [_vm._v("Action")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("01")]), _vm._v(" "), _c("td", [_c("input", {
    attrs: {
      type: "checkbox"
    }
  })]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("02")]), _vm._v(" "), _c("td", [_c("input", {
    attrs: {
      type: "checkbox"
    }
  })]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("03")]), _vm._v(" "), _c("td", [_c("input", {
    attrs: {
      type: "checkbox"
    }
  })]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")])])]), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    attrs: {
      align: "center",
      colspan: "5"
    }
  }, [_vm._v("No Permissions Granted")])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/users/AddEdit.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/users/AddEdit.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddEdit_vue_vue_type_template_id_57b1a6e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddEdit.vue?vue&type=template&id=57b1a6e9& */ "./resources/js/components/users/AddEdit.vue?vue&type=template&id=57b1a6e9&");
/* harmony import */ var _AddEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/users/AddEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddEdit_vue_vue_type_template_id_57b1a6e9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddEdit_vue_vue_type_template_id_57b1a6e9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/AddEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/AddEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/users/AddEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/AddEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/AddEdit.vue?vue&type=template&id=57b1a6e9&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/users/AddEdit.vue?vue&type=template&id=57b1a6e9& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_template_id_57b1a6e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEdit.vue?vue&type=template&id=57b1a6e9& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/AddEdit.vue?vue&type=template&id=57b1a6e9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_template_id_57b1a6e9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEdit_vue_vue_type_template_id_57b1a6e9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvQWRkRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvQWRkRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvQWRkRWRpdC52dWU/NDkyYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9BZGRFZGl0LnZ1ZT83MzA1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL0FkZEVkaXQudnVlP2I5Y2YiXSwibmFtZXMiOlsibmFtZSIsImRhdGEiLCJlZGl0bW9kZSIsInN0ZXAiLCJ1c2VycyIsImZybV91c2VyIiwiaWQiLCJvcmdhbml6YXRpb24iLCJhZGRyZXNzXzEiLCJhZGRyZXNzXzIiLCJjaXR5Iiwic3RhdGUiLCJ6aXBfY29kZSIsImNvdW50cnkiLCJwaG9uZSIsImVtYWlsIiwiZmF4IiwidHlwZSIsImFjY291bnRfaW5mbyIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsIm1ldGhvZHMiLCJhZGRJbmZvIiwiYWNjb3VudF9ubyIsIm5leHRfc3RlcCIsImZpbmFsIiwic3VibWl0X3VzZXIiLCJ0aGVuIiwiVG9hc3QiLCJpY29uIiwidGl0bGUiLCJheGlvcyIsIiQiLCJnZXRSZXN1bHRzIiwidXBkYXRlVXNlciIsImVkaXRNb2RhbCIsInVzZXIiLCJuZXdNb2RhbCIsImRlbGV0ZVVzZXIiLCJTd2FsIiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwibG9hZFVzZXJzIiwiY3JlYXRlVXNlciIsIm1vdW50ZWQiLCJjb25zb2xlIiwiY3JlYXRlZCIsIndhdGNoIiwibiIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJfbSIsIl92Iiwic3RhdGljQ2xhc3MiLCJhdHRycyIsIm9uIiwic3VibWl0IiwiJGV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsInZhbHVlIiwiZXhwcmVzc2lvbiIsImVycm9yIiwiZXJyb3JzIiwidmVycm9ycyIsImhhcyIsImNoYW5nZSIsIiQkc2VsZWN0ZWRWYWwiLCJBcnJheSIsInByb3RvdHlwZSIsImZpbHRlciIsImNhbGwiLCJ0YXJnZXQiLCJvcHRpb25zIiwibyIsInNlbGVjdGVkIiwibWFwIiwidmFsIiwiX3ZhbHVlIiwiJHNldCIsIm11bHRpcGxlIiwiX3MiLCJmaXJzdCIsIl9lIiwicGxhY2Vob2xkZXIiLCJkb21Qcm9wcyIsImlucHV0IiwiY29tcG9zaW5nIiwiX2wiLCJpdGVtIiwiaXgiLCJrZXkiLCJhbGlnbiIsImxlbmd0aCIsImNsaWNrIiwic3RhdGljUmVuZGVyRm5zIiwiaHJlZiIsImxhYmVsIiwic3RhdGljU3R5bGUiLCJ3aWR0aCIsImNvbHNwYW4iLCJfd2l0aFN0cmlwcGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzsrQ0F3UEEsb0o7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7RUFDQUEsbUJBREE7RUFFQUMsSUFGQSxrQkFFQTtJQUNBO01BQ0FDLGVBREE7TUFFQUMsT0FGQTtNQUdBQyxTQUhBO01BSUFDO1FBQ0FDLE1BREE7UUFFQUMsZ0JBRkE7UUFHQVAsUUFIQTtRQUlBUSxhQUpBO1FBS0FDLGFBTEE7UUFNQUMsUUFOQTtRQU9BQyxTQVBBO1FBUUFDLFlBUkE7UUFTQUMsV0FUQTtRQVVBQyxTQVZBO1FBV0FDLFNBWEE7UUFZQUMsT0FaQTtRQWFBQyxRQWJBO1FBY0FDO01BZEE7SUFKQTtFQXFCQSxDQXhCQTtFQXlCQUMsNEJBQ0FDLG1FQURBLENBekJBO0VBNEJBQztJQUNBQyxPQURBLHFCQUNBO01BQUE7O01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFDQTtrQkFDQWhCLE1BREE7a0JBRUFpQjtnQkFGQTs7Y0FEQTtjQUFB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LENBUEssRUFRUEosR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQVJPLEVBU1BILEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUFELENBQVAsQ0FUSyxDQUFQLENBekJRLENBQVYsQ0F0QjRELEVBMkQ5REosR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQTNEOEQsRUE0RDlESCxFQUFFLENBQUMsT0FBRCxFQUFVLENBQ1ZBLEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FDUEEsRUFBRSxDQUFDLElBQUQsRUFBTztJQUFFSyxLQUFLLEVBQUU7TUFBRXVDLEtBQUssRUFBRSxRQUFUO01BQW1CUSxPQUFPLEVBQUU7SUFBNUI7RUFBVCxDQUFQLEVBQXFELENBQ3JEckQsR0FBRyxDQUFDSSxFQUFKLENBQU8sd0JBQVAsQ0FEcUQsQ0FBckQsQ0FESyxDQUFQLENBRFEsQ0FBVixDQTVENEQsQ0FBOUQsQ0FEMkMsQ0FBN0MsQ0FEOEMsQ0FBekMsQ0FBVDtBQXdFRCxDQWpQbUIsQ0FBdEI7QUFtUEFMLE1BQU0sQ0FBQ3VELGFBQVAsR0FBdUIsSUFBdkI7Ozs7Ozs7Ozs7Ozs7QUMvMENBO0FBQUE7QUFBQTtBQUFBO0FBQXNGO0FBQzNCO0FBQ0w7OztBQUd0RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUE2TCxDQUFnQixtUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FqTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMC5idW5kbGUuYTcwMzBhNDhkZmY2N2I3YTE4OGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjxkaXY+XHJcblxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICA8aDE+QWRkIFVzZXI8L2gxPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJveC13YXJuaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFic3NlY3Rpb25cIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+PGEgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI21lbnUxXCI+VXNlciBJbmZvcm1hdGlvbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjbWVudTJcIj5BY2NvdW50IEluZm9ybWF0aW9uPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNtZW51M1wiPlVzZXIgU2V0dGluZ3M8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1lbnUxXCIgY2xhc3M9XCJ0YWItcGFuZSBmYWRlIGluIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gIEBzdWJtaXQucHJldmVudD1cIm5leHRfc3RlcCgnZnJtU3RlcDEnKVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+T3JnYW5pemF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZnJtX3VzZXIub3JnYW5pemF0aW9uXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMub3JnYW5pemF0aW9uLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnb3JnYW5pemF0aW9uJyksJ2hhdmVWYWx1ZSc6IGZybV91c2VyLm9yZ2FuaXphdGlvbiB9XCIgZGF0YS12di1uYW1lPVwib3JnYW5pemF0aW9uXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPcmdhbml6YXRpb24gMVwiPk9yZ2FuaXphdGlvbiAxPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPcmdhbml6YXRpb24gMlwiPk9yZ2FuaXphdGlvbiAyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPcmdhbml6YXRpb24gM1wiPk9yZ2FuaXphdGlvbiAzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPcmdhbml6YXRpb24gNFwiPk9yZ2FuaXphdGlvbiA0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPcmdhbml6YXRpb24gNVwiPk9yZ2FuaXphdGlvbiA1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEub3JnYW5pemF0aW9uJylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLm9yZ2FuaXphdGlvbicpIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZ1bGwgTmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEZ1bGwgTmFtZSAuLi5cIiB2LW1vZGVsPVwiZnJtX3VzZXIubmFtZVwiICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5uYW1lLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnbmFtZScpLCdoYXZlVmFsdWUnOiBmcm1fdXNlci5uYW1lIH1cIiBkYXRhLXZ2LW5hbWU9XCJuYW1lXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLm5hbWUnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4gIHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLm5hbWUnKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3MgMSA8L2xhYmVsPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBZGRyZXNzIDEgLi4uXCIgdi1tb2RlbD1cImZybV91c2VyLmFkZHJlc3NfMVwiICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5hZGRyZXNzXzEsICdlcnJvcic6IHZlcnJvcnMuaGFzKCdhZGRyZXNzXzEnKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIuYWRkcmVzc18xIH1cIiBkYXRhLXZ2LW5hbWU9XCJhZGRyZXNzXzFcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEuYWRkcmVzc18xJylcIiBjbGFzcz1cImVycm9ybXNnXCI+ICB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5hZGRyZXNzXzEnKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzIDIgPHNwYW4+KG9wdGlvbmFsKTwvc3Bhbj4gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQWRkcmVzcyAyIC4uLlwiIHYtbW9kZWw9XCJmcm1fdXNlci5hZGRyZXNzXzJcIiAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMuYWRkcmVzc18yLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnYWRkcmVzc18yJyksJ2hhdmVWYWx1ZSc6IGZybV91c2VyLmFkZHJlc3NfMiB9XCIgZGF0YS12di1uYW1lPVwiYWRkcmVzc18yXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLmFkZHJlc3NfMicpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiAge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuYWRkcmVzc18yJykgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2l0eSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDaXR5IC4uLlwiIHYtbW9kZWw9XCJmcm1fdXNlci5jaXR5XCIgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLmNpdHksICdlcnJvcic6IHZlcnJvcnMuaGFzKCdjaXR5JyksJ2hhdmVWYWx1ZSc6IGZybV91c2VyLmNpdHkgfVwiIGRhdGEtdnYtbmFtZT1cImNpdHlcIiBkYXRhLXZ2LXNjb3BlPVwiZnJtU3RlcDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDEuY2l0eScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiAge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuY2l0eScpIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlN0YXRlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgU3RhdGUgLi4uXCIgdi1tb2RlbD1cImZybV91c2VyLnN0YXRlXCIgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLnN0YXRlLCAnZXJyb3InOiB2ZXJyb3JzLmhhcygnc3RhdGUnKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIuc3RhdGUgfVwiIGRhdGEtdnYtbmFtZT1cInN0YXRlXCIgZGF0YS12di1zY29wZT1cImZybVN0ZXAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2ZybVN0ZXAxLnN0YXRlJylcIiBjbGFzcz1cImVycm9ybXNnXCI+ICB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5zdGF0ZScpIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlppcCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWmlwIC4uLlwiIHYtbW9kZWw9XCJmcm1fdXNlci56aXBfY29kZVwiICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy56aXBfY29kZSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3ppcF9jb2RlJyksJ2hhdmVWYWx1ZSc6IGZybV91c2VyLnppcF9jb2RlIH1cIiBkYXRhLXZ2LW5hbWU9XCJ6aXBfY29kZVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS56aXBfY29kZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiAge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuemlwX2NvZGUnKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db3VudHJ5IDwvbGFiZWw+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIENvdW50cnkgLi4uXCIgdi1tb2RlbD1cImZybV91c2VyLmNvdW50cnlcIiAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMuY291bnRyeSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ2NvdW50cnknKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIuY291bnRyeSB9XCIgZGF0YS12di1uYW1lPVwiY291bnRyeVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5jb3VudHJ5JylcIiBjbGFzcz1cImVycm9ybXNnXCI+ICB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMS5jb3VudHJ5JykgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGhvbmUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFBob25lIC4uLlwiIHYtbW9kZWw9XCJmcm1fdXNlci5waG9uZVwiICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5waG9uZSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3Bob25lJyksJ2hhdmVWYWx1ZSc6IGZybV91c2VyLnBob25lIH1cIiBkYXRhLXZ2LW5hbWU9XCJwaG9uZVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5waG9uZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiAge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEucGhvbmUnKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsIC4uLlwiIHYtbW9kZWw9XCJmcm1fdXNlci5lbWFpbFwiICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkfGVtYWlsJ1wiICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9ycy5lbWFpbCwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ2VtYWlsJyksJ2hhdmVWYWx1ZSc6IGZybV91c2VyLmVtYWlsIH1cIiBkYXRhLXZ2LW5hbWU9XCJlbWFpbFwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5lbWFpbCcpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiAge3sgdmVycm9ycy5maXJzdCgnZnJtU3RlcDEuZW1haWwnKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GYXggPHNwYW4+IChvcHRpb25hbCk8L3NwYW4+IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEZheCAuLi5cIiB2LW1vZGVsPVwiZnJtX3VzZXIuZmF4XCIgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgIDpjbGFzcz1cInsgJ2Vycm9yJzogZXJyb3JzLmZheCwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ2ZheCcpLCdoYXZlVmFsdWUnOiBmcm1fdXNlci5mYXggfVwiIGRhdGEtdnYtbmFtZT1cImZheFwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS5mYXgnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj4gIHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLmZheCcpIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlVzZXIgVHlwZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmcm1fdXNlci50eXBlXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiAgOmNsYXNzPVwieyAnZXJyb3InOiBlcnJvcnMudHlwZSwgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3R5cGUnKSwnaGF2ZVZhbHVlJzogZnJtX3VzZXIudHlwZSB9XCIgZGF0YS12di1uYW1lPVwidHlwZVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGdyb3VwIGxhYmVsPVwiSW50ZXJuYWwgKFVTTSBFbXBsb3llZXMpXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWRtaW5cIj5BZG1pbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW50ZXJuYWwgQ3VzdG9tZXIgU2VydmljZVwiPkN1c3RvbWVyIFNlcnZpY2UgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbnRlcm5hbCBDdXN0b21lciBTZXJ2aWNlIEtBTVwiPiAgICBLQU0/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbnRlcm5hbCBGaW5hbmNlXCI+RmluYW5jZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW50ZXJuYWwgTG9naXN0aWNzXCI+TG9naXN0aWNzIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0Z3JvdXAgbGFiZWw9XCJFeHRlcm5hbCAoQ3VzdG9tZXJzKVwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkV4dGVybmFsIFByaW1hcnlcIj5QcmltYXJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFeHRlcm5hbCBGaW5hbmNlXCI+RmluYW5jZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRXh0ZXJuYWwgTG9naXN0aWNzXCI+TG9naXN0aWNzIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdmcm1TdGVwMS50eXBlJylcIiBjbGFzcz1cImVycm9ybXNnXCI+IHt7IHZlcnJvcnMuZmlyc3QoJ2ZybVN0ZXAxLnR5cGUnKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGxpbmsxXCI+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW51MlwiIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gIEBzdWJtaXQucHJldmVudD1cIm5leHRfc3RlcCgnZnJtU3RlcDInKVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMlwiPiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCIgd2lkdGg9XCI3MFwiPlNsIE5vLjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjY291bnQgTm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjEwMFwiPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e3ZlcnJvcnN9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIoaXRlbSxpeCkgaW4gZnJtX3VzZXIuYWNjb3VudF9pbmZvXCIgOmtleT1cIid1cCcraXRlbS5pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPnt7aXgrMX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHYtbW9kZWw9XCJpdGVtLmFjY291bnRfbm9cIiB0eXBlPVwidGV4dFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1uYW1lPVwiYWNjb3VudCBub1wiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMlwiIG5hbWU9XCJhY2NvdW50X25vXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZnJtU3RlcDIuYWNjb3VudF9ubycpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPiB7eyB2ZXJyb3JzLmZpcnN0KCdmcm1TdGVwMi5hY2NvdW50X25vJykgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgdi1pZj1cIml4PjFcIj48aSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIj48L2k+PC9idXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHYtaWY9XCJmcm1fdXNlci5hY2NvdW50X2luZm8ubGVuZ3RoPT1peCsxXCIgQGNsaWNrPVwiYWRkSW5mbygpXCI+PGkgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gbGluazIgbXgtMVwiIEBjbGljaz1cInN0ZXAtLVwiPkJhY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBsaW5rMSBteC0xXCI+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW51M1wiIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdF91c2VyKCdzdWJtaXQnKVwiIGRhdGEtdnYtc2NvcGU9XCJmcm1TdGVwMlwiPiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyIGJvclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlBlcm1pc3Npb25zIEdyYW50ZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHQgZHJvcGRvd25cIj4gPGEgaHJlZj1cImFkZF9wZXJtaXNzaW9uLmh0bWxcIiBjbGFzcz1cImJ0biBsaW5rMiB3aWR0aGF1dG9cIj4gPHNwYW4+PGkgY2xhc3M9XCJmYSBmYS1wZW5jaWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDwvc3Bhbj4gQWRkIFBlcm1pc3Npb248L2E+ICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gbGluazEgd2lkdGhhdXRvXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj48aSBjbGFzcz1cImZhIGZhLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5IVE1MPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5DU1M8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkphdmFTY3JpcHQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVzZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIiB3aWR0aD1cIjcwXCI+U2wgTm8uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBlcm1pc3Npb24gTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGVybWlzc2lvbiBEZXNlcmlwdG9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj4wMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj4wMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj4wMzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRmb290PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIGNvbHNwYW49XCI1XCI+Tm8gUGVybWlzc2lvbnMgR3JhbnRlZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gbGluazIgbXgtMVwiIEBjbGljaz1cInN0ZXAtLVwiPkJhY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGxpbmsxIG14LTFcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+IFxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtcclxuICAgIG1hcEdldHRlcnNcclxufSBmcm9tIFwidnVleFwiO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBuYW1lOlwiVXNlckFkZEVkaXRcIixcclxuICAgICAgICBkYXRhICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVkaXRtb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN0ZXA6MSxcclxuICAgICAgICAgICAgICAgIHVzZXJzIDoge30sIFxyXG4gICAgICAgICAgICAgICAgZnJtX3VzZXI6IG5ldyBGb3JtKHtcclxuICAgICAgICAgICAgICAgICAgaWQgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3NfMTogJycsXHJcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3NfMjogJycsXHJcbiAgICAgICAgICAgICAgICAgIGNpdHk6ICcnLFxyXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgIHppcF9jb2RlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgY291bnRyeTogJycsXHJcbiAgICAgICAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICBmYXg6ICcnLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgYWNjb3VudF9pbmZvOltdXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAuLi5tYXBHZXR0ZXJzKFtcImVycm9yc1wiXSlcclxuICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgYWRkSW5mbygpIHtcclxuICAgICAgICAgICAgdGhpcy5mcm1fdXNlci5hY2NvdW50X2luZm8ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDonJyxcclxuICAgICAgICAgICAgICAgIGFjY291bnRfbm86JycsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgYXN5bmMgbmV4dF9zdGVwKGZpbmFsPWZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgnZnJtU3RlcCcgKyB0aGlzLnN0ZXApLnRoZW4oYXN5bmMgKHZhbGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXArK1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaW5hbD09J3N1Ym1pdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0X3VzZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG5cclxuICAgICAgICBzdWJtaXRfdXNlcigpe1xyXG4gICAgICAgICAgICBpZih0aGlzLmZybV91c2VyLmlkPjApe1xyXG4gICAgICAgICAgICAgIHRoaXMuZnJtX3VzZXIucHV0KCdhcGkvdXNlci8nK3RoaXMuZnJtX3VzZXIuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZybV91c2VyLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCIvYXBpL3VzZXI/bGF5ZXJjYXQ9MVwiKS50aGVuKCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgICAgICAgICAgfSkgPT4gKHRoaXMucHJvZHVjdF9jYXRlZ29yaWVzID0gZGF0YS5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcm9kdWN0X2NhdGVnb3J5X3BvcHVwJykubW9kYWwoJ2hpZGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgdGhpcy5mcm1fdXNlci5wb3N0KCdhcGkvdXNlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm1fdXNlci5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdhW2hyZWY9XCIjbWVudTFcIl0nKS50YWIoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm1fdXNlci5hY2NvdW50X2luZm89W11cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRJbmZvKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgICAgIGdldFJlc3VsdHMocGFnZSA9IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBheGlvcy5nZXQoJ2FwaS91c2VyP3BhZ2U9JyArIHBhZ2UpLnRoZW4oKHsgZGF0YSB9KSA9PiAodGhpcy51c2VycyA9IGRhdGEuZGF0YSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZVVzZXIoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnRWRpdGluZyBkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucHV0KCdhcGkvdXNlci8nK3RoaXMuZm9ybS5pZClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAkKCcjYWRkTmV3JykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIEZpcmUuJGVtaXQoJ0FmdGVyQ3JlYXRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5mYWlsKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVkaXRNb2RhbCh1c2VyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG1vZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjYWRkTmV3JykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5maWxsKHVzZXIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBuZXdNb2RhbCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0bW9kZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjYWRkTmV3JykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlVXNlcihpZCl7XHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyFcIixcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyNkMzMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdZZXMsIGRlbGV0ZSBpdCEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZW5kIHJlcXVlc3QgdG8gdGhlIHNlcnZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5kZWxldGUoJ2FwaS91c2VyLycraWQpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZWxldGVkIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWW91ciBmaWxlIGhhcyBiZWVuIGRlbGV0ZWQuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZS4kZW1pdCgnQWZ0ZXJDcmVhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVXNlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXCJGYWlsZWQhXCIsIGRhdGEubWVzc2FnZSwgXCJ3YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgbG9hZFVzZXJzKCl7XHJcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLiRnYXRlLmlzQWRtaW4oKSl7XHJcbiAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL3VzZXJcIikudGhlbigoeyBkYXRhIH0pID0+ICh0aGlzLnVzZXJzID0gZGF0YS5kYXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY3JlYXRlVXNlcigpe1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLmZvcm0ucG9zdCgnYXBpL3VzZXInKVxyXG4gICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgICAgICAgJCgnI2FkZE5ldycpLm1vZGFsKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XHJcblxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKCgpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NvbWUgZXJyb3Igb2NjdXJlZCEgUGxlYXNlIHRyeSBhZ2FpbidcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBDb21wb25lbnQgbW91bnRlZC4nKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCgpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkSW5mbygpO1xyXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICAgIGFzeW5jIHN0ZXAobiApIHtcclxuICAgICAgICAgICAgICAgICQoJ2FbaHJlZj1cIiNtZW51JytuKydcIl0nKS50YWIoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3gtd2FybmluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYnNzZWN0aW9uXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFiLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZSBpbiBhY3RpdmVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm1lbnUxXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubmV4dF9zdGVwKFwiZnJtU3RlcDFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiT3JnYW5pemF0aW9uXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIub3JnYW5pemF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV91c2VyLm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLm9yZ2FuaXphdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJvcmdhbml6YXRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci5vcmdhbml6YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJvcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiT3JnYW5pemF0aW9uIDFcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT3JnYW5pemF0aW9uIDFcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiT3JnYW5pemF0aW9uIDJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT3JnYW5pemF0aW9uIDJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiT3JnYW5pemF0aW9uIDNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT3JnYW5pemF0aW9uIDNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiT3JnYW5pemF0aW9uIDRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT3JnYW5pemF0aW9uIDRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiT3JnYW5pemF0aW9uIDVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT3JnYW5pemF0aW9uIDVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5vcmdhbml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZybVN0ZXAxLm9yZ2FuaXphdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkZ1bGwgTmFtZSBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fdXNlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fdXNlci5uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgRnVsbCBOYW1lIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3VzZXIubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEubmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEubmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJBZGRyZXNzIDEgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIuYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fdXNlci5hZGRyZXNzXzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLmFkZHJlc3NfMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiYWRkcmVzc18xXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLmFkZHJlc3NfMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBBZGRyZXNzIDEgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJhZGRyZXNzXzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV91c2VyLmFkZHJlc3NfMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzXzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5hZGRyZXNzXzFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm1TdGVwMS5hZGRyZXNzXzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIuYWRkcmVzc18yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fdXNlci5hZGRyZXNzXzJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLmFkZHJlc3NfMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiYWRkcmVzc18yXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLmFkZHJlc3NfMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBBZGRyZXNzIDIgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJhZGRyZXNzXzJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV91c2VyLmFkZHJlc3NfMiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzXzJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5hZGRyZXNzXzJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm1TdGVwMS5hZGRyZXNzXzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJDaXR5IFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV91c2VyLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV91c2VyLmNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcImNpdHlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3VzZXIuY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBDaXR5IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3VzZXIuY2l0eSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEuY2l0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEuY2l0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTdGF0ZSBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fdXNlci5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3VzZXIuc3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJzdGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBTdGF0ZSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fdXNlci5zdGF0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLnN0YXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS5zdGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJaaXAgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIuemlwX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV91c2VyLnppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy56aXBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiemlwX2NvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3VzZXIuemlwX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgWmlwIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiemlwX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV91c2VyLnppcF9jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEuemlwX2NvZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLnppcF9jb2RlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkNvdW50cnkgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZnJtX3VzZXIuY291bnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZnJtX3VzZXIuY291bnRyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuY291bnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiY291bnRyeVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci5jb3VudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIENvdW50cnkgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJjb3VudHJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mcm1fdXNlci5jb3VudHJ5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdW50cnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS5jb3VudHJ5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm1TdGVwMS5jb3VudHJ5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlBob25lIFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV91c2VyLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fdXNlci5waG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcInBob25lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIFBob25lIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwicGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV91c2VyLnBob25lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEucGhvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLnBob25lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkVtYWlsIFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZybV91c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmcm1fdXNlci5lbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZHxlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWR8ZW1haWwnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcImVtYWlsXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZybV91c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIEVtYWlsIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZybV91c2VyLmVtYWlsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZnJtU3RlcDEuZW1haWxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLmVtYWlsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fdXNlci5mYXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV91c2VyLmZheFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvcnMuZmF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJmYXhcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZnJtX3VzZXIuZmF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIEZheCAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImZheFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZnJtX3VzZXIuZmF4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZheFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImZybVN0ZXAxLmZheFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiZnJtU3RlcDEuZmF4XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlVzZXIgVHlwZSBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mcm1fdXNlci50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZybV91c2VyLnR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9ycy50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcInR5cGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mcm1fdXNlci50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fbSg0KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDUpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMS50eXBlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcImZybVN0ZXAxLnR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oNiksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLCBhdHRyczogeyBpZDogXCJtZW51MlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdnYtc2NvcGVcIjogXCJmcm1TdGVwMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5leHRfc3RlcChcImZybVN0ZXAyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlc2VjdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtcmVzcG9uc2l2ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52ZXJyb3JzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mcm1fdXNlci5hY2NvdW50X2luZm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSwgaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IFwidXBcIiArIGl0ZW0uaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpeCArIDEpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uYWNjb3VudF9ubyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5hY2NvdW50X25vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiYWNjb3VudCBub1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1zY29wZVwiOiBcImZybVN0ZXAyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhY2NvdW50X25vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uYWNjb3VudF9ubyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjY291bnRfbm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm1TdGVwMi5hY2NvdW50X25vXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZybVN0ZXAyLmFjY291bnRfbm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpeCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhIGZhLXRyYXNoLW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZybV91c2VyLmFjY291bnRfaW5mby5sZW5ndGggPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZEluZm8oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBsdXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWZvb3RlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsyIG14LTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0ZXAtLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJCYWNrXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMSBteC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTmV4dFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIiwgYXR0cnM6IHsgaWQ6IFwibWVudTNcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiZnJtU3RlcDJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXRfdXNlcihcInN1Ym1pdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSg5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gbGluazIgbXgtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zdGVwLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJCYWNrXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMSBteC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3VibWl0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkFkZCBVc2VyXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdiBuYXYtdGFic1wiIH0sIFtcbiAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiB9LCBbXG4gICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIiwgaHJlZjogXCIjbWVudTFcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJVc2VyIEluZm9ybWF0aW9uXCIpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCIsIGhyZWY6IFwiI21lbnUyXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiQWNjb3VudCBJbmZvcm1hdGlvblwiKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLCBocmVmOiBcIiNtZW51M1wiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIlVzZXIgU2V0dGluZ3NcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJsYWJlbFwiLCBbXG4gICAgICBfdm0uX3YoXCJBZGRyZXNzIDIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIob3B0aW9uYWwpXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRmF4IFwiKSwgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIgKG9wdGlvbmFsKVwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJvcHRncm91cFwiLCB7IGF0dHJzOiB7IGxhYmVsOiBcIkludGVybmFsIChVU00gRW1wbG95ZWVzKVwiIH0gfSwgW1xuICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJBZG1pblwiIH0gfSwgW192bS5fdihcIkFkbWluXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJJbnRlcm5hbCBDdXN0b21lciBTZXJ2aWNlXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIkN1c3RvbWVyIFNlcnZpY2UgXCIpLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJJbnRlcm5hbCBDdXN0b21lciBTZXJ2aWNlIEtBTVwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCIgICAgS0FNP1wiKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiSW50ZXJuYWwgRmluYW5jZVwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJGaW5hbmNlXCIpLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJJbnRlcm5hbCBMb2dpc3RpY3NcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiTG9naXN0aWNzIFwiKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwib3B0Z3JvdXBcIiwgeyBhdHRyczogeyBsYWJlbDogXCJFeHRlcm5hbCAoQ3VzdG9tZXJzKVwiIH0gfSwgW1xuICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJFeHRlcm5hbCBQcmltYXJ5XCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIlByaW1hcnlcIiksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIkV4dGVybmFsIEZpbmFuY2VcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiRmluYW5jZVwiKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiRXh0ZXJuYWwgTG9naXN0aWNzXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIkxvZ2lzdGljcyBcIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1mb290ZXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMVwiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIk5leHRcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSwgYXR0cnM6IHsgd2lkdGg6IFwiNzBcIiB9IH0sXG4gICAgICAgICAgW192bS5fdihcIlNsIE5vLlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQWNjb3VudCBOb1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgd2lkdGg6IFwiMTAwXCIgfSB9LCBbX3ZtLl92KFwiQWN0aW9uXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXIgYm9yXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIiB9LCBbXG4gICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlBlcm1pc3Npb25zIEdyYW50ZWRcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0IGRyb3Bkb3duXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gbGluazIgd2lkdGhhdXRvXCIsXG4gICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImFkZF9wZXJtaXNzaW9uLmh0bWxcIiB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1wZW5jaWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgQWRkIFBlcm1pc3Npb25cIiksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgwqDCoFxcclxcbiAgICAgICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMSB3aWR0aGF1dG9cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIFwiZGF0YS10b2dnbGVcIjogXCJkcm9wZG93blwiIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jb2dcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tbWVudVwiIH0sIFtcbiAgICAgICAgICBfYyhcImxpXCIsIFtfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtfdm0uX3YoXCJIVE1MXCIpXSldKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW19jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW192bS5fdihcIkNTU1wiKV0pXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtfdm0uX3YoXCJKYXZhU2NyaXB0XCIpXSldKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZXNlY3Rpb25cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLXJlc3BvbnNpdmVcIiB9LCBbXG4gICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiNzBcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlNsIE5vLlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9IH0pXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlBlcm1pc3Npb24gTmFtZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJQZXJtaXNzaW9uIERlc2VyaXB0b25cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQWN0aW9uXCIpXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtfdm0uX3YoXCIwMVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0gfSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCItXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIi1cIildKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiMDJcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9IH0pXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIi1cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCItXCIpXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIjAzXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW19jKFwiaW5wdXRcIiwgeyBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSB9KV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCItXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIi1cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRmb290XCIsIFtcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIsIGNvbHNwYW46IFwiNVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIk5vIFBlcm1pc3Npb25zIEdyYW50ZWRcIiksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01N2IxYTZlOSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWRkRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU3YjFhNmU5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU3YjFhNmU5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU3YjFhNmU5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01N2IxYTZlOSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1N2IxYTZlOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvQWRkRWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01N2IxYTZlOSZcIiJdLCJzb3VyY2VSb290IjoiIn0=