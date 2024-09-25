(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout_payment.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/checkout_payment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
  props: ['applied_coupon', 'appliedShippingAddress', 'appliedShippingCharge'],
  name: "Header",
  data: function data() {
    return {
      cardErrors: {},
      cardBrand: null,
      $cardFormat: Vue.prototype.$cardFormat,
      payment_gateway: 'Stripe',
      discount_amt: 0,
      stripeToken: null,
      stripeAPIToken: '',
      pageLoader: false
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.pageLoader = false;
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("auth", ["user"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("Checkout", ["UserShippingAddress", "Coupon", "ShippingCharge", "PaymentCart"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("cart", ["projectCart"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("Common", ["Setting"])), {}, {
    cardBrandClass: function cardBrandClass() {
      return this.getBrandClass(this.cardBrand);
    }
  }),
  watch: {
    Setting: {
      handler: function handler(items) {
        if (items) this.stripeAPIToken = items.STRIPEPUBLICKEY;
      },
      immediate: true,
      deep: true
    },
    'appliedShippingAddress': {
      handler: function handler(n) {
        if (n) {
          this.PaymentCart.street = n.street;
          this.PaymentCart.city = n.city;
          this.PaymentCart.state = n.state;
          this.PaymentCart.zip_code = n.zip_code;
          this.PaymentCart.apartment = n.apartment;
        }
      },
      deep: true,
      immediate: true
    },

    /*         'PaymentCart':{
                handler(n,o) {
                    console.log(n,o);
                    console.warn(this.appliedShippingAddress,n,o);
                     if (this.appliedShippingAddress && typeof (o) == 'undefined') {
    
                        this.PaymentCart.street = this.appliedShippingAddress.street
                        this.PaymentCart.city = this.appliedShippingAddress.city
                        this.PaymentCart.state = this.appliedShippingAddress.state
                        this.PaymentCart.zip_code = this.appliedShippingAddress.zip_code
                    }
                },
                deep: true,
                immediate: true,
            }, */
    projectCart: {
      handler: function handler(crd) {
        if (crd && crd.Project_tans && crd.Project_tans.length === 0) {
          Toast.fire({
            icon: 'warning',
            title: 'Please Add Products to Shopping Cart To Place Order.'
          });
          this.$router.push('/')["catch"]({});
        }
      },
      deep: true,
      immediate: true
    },
    'PaymentCart.card_number': function PaymentCartCard_number(val) {
      if (this.$cardFormat.validateCardNumber(val)) {
        this.$refs.cardNameInput.focus();
      }
    },
    'PaymentCart.exp_date': function PaymentCartExp_date(val) {
      if (this.$cardFormat.validateCardExpiry(val)) {
        this.$refs.cardCvvInput.focus();
      }
    }
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var ordersummeryloader, cartinfoloader;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.appliedShippingAddress) {
                _context.next = 4;
                break;
              }

              Toast.fire({
                icon: 'success',
                title: 'Please Add your Shipping Address To Place Order.'
              });

              _this.$router.push({
                name: 'Cart'
              })["catch"](function () {});

              return _context.abrupt("return", false);

            case 4:
              ordersummeryloader = _this.$loading.show({
                container: _this.$refs.CPOrdersummery_ref
              });

              _this.getCartData().then(function () {
                ordersummeryloader.hide();
              })["catch"](function (err) {
                ordersummeryloader.hide();
              });

              cartinfoloader = _this.$loading.show({
                container: _this.$refs.CPCartinfo_ref
              });

              _this.getShippingAddressData({
                payment: 1
              }).then(function () {
                cartinfoloader.hide();
              })["catch"](function (err) {
                Toast.fire({
                  icon: 'success',
                  title: 'Please Add your Shipping Address To Place Order.'
                });

                _this.$router.push({
                  name: 'Cart'
                })["catch"](function () {});
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.includeStripe('js.stripe.com/v2/', function () {
                this.configureStripe();
              }.bind(_this2));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  methods: _objectSpread(_objectSpread(_objectSpread({
    includeStripe: function includeStripe(URL, callback) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var documentTag, tag, object, scriptTag;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                documentTag = document, tag = 'script', object = documentTag.createElement(tag), scriptTag = documentTag.getElementsByTagName(tag)[0];
                object.src = 'https://' + URL;

                if (callback) {
                  object.addEventListener('load', function (e) {
                    callback(null, e);
                  }, false);
                }

                scriptTag.parentNode.insertBefore(object, scriptTag);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    configureStripe: function configureStripe() {
      Stripe.setPublishableKey(this.stripeAPIToken);
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("cart", ["getCartData"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("Checkout", ["getShippingAddressData", "UpdateShippingAddress"])), {}, {
    calculate_cart_total: function calculate_cart_total() {
      var cart_price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var coupon_percent = 0;
      var discount_price = 0;

      if (this.applied_coupon && this.applied_coupon.discount && !isNaN(this.applied_coupon.discount)) {
        coupon_percent = Number(this.applied_coupon.discount);
      }

      discount_price = Number(cart_price * coupon_percent / 100);
      this.discount_amt = discount_price.toFixed(2);
      var totalp = Number(cart_price - discount_price);
      var ship = this.appliedShippingCharge ? this.appliedShippingCharge.charge : 0;
      var orderprofit = Number(cart_price * this.Setting.ORDER_PROFIT / 100);
      return Number(totalp + ship + orderprofit).toFixed(2);
    },
    prefill: function prefill(ccNum) {
      this.details.card_number = ccNum;
      this.$cardFormat.setCardType({
        currentTarget: this.$refs.cardNumInput,
        value: ccNum
      });
    },
    getBrandClass: function getBrandClass(brand) {
      var icon = '';
      brand = brand || 'unknown';
      var cardBrandToClass = {
        'visa': 'fa fa-cc-visa',
        'mastercard': 'fa fa-cc-mastercard',
        'amex': 'fa fa-cc-amex',
        'discover': 'fa fa-cc-discover',
        'diners': 'fa fa-cc-diners-club',
        'jcb': 'fa fa-cc-jcb',
        'unknown': 'fa fa-credit-card'
      };

      if (cardBrandToClass[brand]) {
        icon = cardBrandToClass[brand];
      }

      ;
      return icon;
    },
    updateShipping: function updateShipping() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this3.$validator.validate().then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(valid) {
                    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            if (valid) {
                              $('#cartAddressModal').model('hide');
                            }

                          case 1:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    submit_payment: function submit_payment() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var fdata;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(_this4.payment_gateway == "Stripe")) {
                  _context6.next = 5;
                  break;
                }

                _context6.next = 3;
                return _this4.$validator.validate().then(function (valid) {
                  if (valid) {
                    _this4.cardErrors = {};

                    if (!_this4.$cardFormat.validateCardNumber(_this4.PaymentCart.card_number) && _this4.PaymentCart.card_number) {
                      _this4.cardErrors.cardNumber = "Invalid Card Number.";
                    }

                    ;

                    if (!_this4.$cardFormat.validateCardExpiry(_this4.PaymentCart.exp_date) && _this4.PaymentCart.exp_date) {
                      _this4.cardErrors.cardExpiry = "Invalid Expiration Date.";
                    }

                    ;

                    if (!_this4.$cardFormat.validateCardCVC(_this4.PaymentCart.cvv) && _this4.PaymentCart.cvv) {
                      _this4.cardErrors.cardCvc = "Invalid CVC.";
                    }

                    ;

                    if (Object.keys(_this4.cardErrors).length == 0) {
                      _this4.pageLoader = true;

                      var exp = _this4.PaymentCart.exp_date.split('/');

                      Stripe.createToken({
                        number: _this4.PaymentCart.card_number,
                        cvc: _this4.PaymentCart.cvv,
                        exp_month: exp[0].trim(),
                        exp_year: exp[1].trim()
                      }, _this4.stripeResponseHandler);
                      return false;
                    }
                  }
                });

              case 3:
                _context6.next = 8;
                break;

              case 5:
                _this4.pageLoader = true;
                fdata = {
                  payment_gateway: _this4.payment_gateway,
                  applied_coupon: _this4.applied_coupon,
                  appliedShippingAddress: _this4.appliedShippingAddress,
                  appliedShippingCharge: _this4.appliedShippingCharge
                };
                axios.post('/api/order', fdata).then(function (res) {
                  _this4.pageLoader = false;

                  if (res.data && res.data.data && res.data.data.Payment && res.data.data.Payment.payment_url) {
                    window.location.href = res.data.data.Payment.payment_url;
                  } else {
                    _this4.$router.push({
                      name: 'Thankyou',
                      params: {
                        order: res.data.data.order
                      }
                    });
                  }
                })["catch"](function (err) {
                  _this4.pageLoader = false;
                });

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    stripeResponseHandler: function stripeResponseHandler(status, response) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var fdata;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (response.error) {
                  _this5.cardErrors = {};

                  if (response.error.param == 'number') {
                    _this5.cardErrors.cardNumber = response.error.message;
                  }

                  ;

                  if (response.error.param == 'exp_year') {
                    _this5.cardErrors.cardExpiry = response.error.message;
                  }

                  ;

                  if (response.error.param == 'cvc') {
                    _this5.cardErrors.cardCvc = response.error.message;
                  }

                  ;

                  if (typeof response.error.param === 'undefined' || response.error.param != 'number' && response.error.param != 'exp_year' && response.error.param != 'cvc') {
                    Toast.fire({
                      icon: 'warning',
                      title: response.error.message
                    });
                  }

                  _this5.pageLoader = false;
                } else {
                  _this5.stripeToken = response['id'];
                  fdata = {
                    stripeToken: response['id'],
                    PaymentCart: _this5.PaymentCart,
                    payment_gateway: _this5.payment_gateway,
                    applied_coupon: _this5.applied_coupon,
                    appliedShippingAddress: _this5.appliedShippingAddress,
                    appliedShippingCharge: _this5.appliedShippingCharge
                  };
                  axios.post('/api/order', fdata).then(function (res) {
                    _this5.pageLoader = false;

                    _this5.$router.push({
                      name: 'Thankyou',
                      params: {
                        order: res.data.data.order
                      }
                    });
                  })["catch"](function (err) {
                    _this5.pageLoader = false;
                  });
                }

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    }
  })
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout_payment.vue?vue&type=template&id=204f0fd8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/checkout_payment.vue?vue&type=template&id=204f0fd8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    ref: "CP_main_ref",
    staticClass: "shopping-cart payment vld-parent"
  }, [_c("loading", {
    attrs: {
      active: _vm.pageLoader,
      color: "#0dc07f"
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.pageLoader = $event;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-8"
  }, [_c("h2", [_vm._v("Payment Selection")]), _vm._v(" "), _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit_payment();
      }
    }
  }, [_c("div", {
    staticClass: "payment-group"
  }, [_c("div", {
    ref: "CPCartinfo_ref",
    staticClass: "row pgTop vld-parent"
  }, [_c("div", {
    staticClass: "col-sm-7 col-lg-8"
  }, [_c("div", {
    staticClass: "radioCommon"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payment_gateway,
      expression: "payment_gateway"
    }],
    attrs: {
      type: "radio",
      id: "test1",
      name: "radio-group",
      value: "Stripe"
    },
    domProps: {
      checked: _vm._q(_vm.payment_gateway, "Stripe")
    },
    on: {
      change: function change($event) {
        _vm.payment_gateway = "Stripe";
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "test1"
    }
  }, [_vm._v("Credit Card")])]), _vm._v(" "), _c("p", [_vm._v("Safe money transfer using your bank account. Visa, Maestro, Discover,\n\t\t\t\t\t\t\t\t\tAmerican Express")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm.payment_gateway == "Stripe" ? _c("div", {
    staticClass: "col-md-12 formSection"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "haveToolTip"
  }, [_vm._v("Card Number\n\t\t\t\t\t\t\t\t\t        "), _c("span", {
    staticClass: "icons help"
  }, [_vm.cardBrandClass ? _c("i", {
    "class": _vm.cardBrandClass
  }) : _c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: "images/card.png",
      alt: ""
    }
  })])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.PaymentCart.card_number,
      expression: "PaymentCart.card_number"
    }, {
      name: "cardformat",
      rawName: "v-cardformat:formatCardNumber",
      arg: "formatCardNumber"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "card_number",
      placeholder: "#### #### #### ####",
      "data-vv-as": "card numbere"
    },
    domProps: {
      value: _vm.PaymentCart.card_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.PaymentCart, "card_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("card_number") || _vm.cardErrors.cardNumber ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("\n                                            " + _vm._s(typeof _vm.cardErrors.cardNumber == "undefined" ? _vm.verrors.first("card_number") : _vm.cardErrors.cardNumber) + "\n                                        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("div", [_c("label", [_vm._v("Name on Card")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.PaymentCart.name_on_Card,
      expression: "PaymentCart.name_on_Card"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    ref: "cardNameInput",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name_on_Card",
      "data-vv-as": "name on Card"
    },
    domProps: {
      value: _vm.PaymentCart.name_on_Card
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.PaymentCart, "name_on_Card", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("name_on_Card") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(_vm._s(_vm.verrors.first("name_on_Card")))]) : _vm._e()]), _vm._v(" "), _c("div", [_c("label", [_vm._v("Expiration Date")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.PaymentCart.exp_date,
      expression: "PaymentCart.exp_date"
    }, {
      name: "cardformat",
      rawName: "v-cardformat:formatCardExpiry",
      arg: "formatCardExpiry"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "datepicker form-control",
    attrs: {
      type: "text",
      placeholder: "MM/YY",
      name: "exp_date",
      "data-vv-as": "expiry date"
    },
    domProps: {
      value: _vm.PaymentCart.exp_date
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.PaymentCart, "exp_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("exp_date") || _vm.cardErrors.cardExpiry ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("\n                                            " + _vm._s(typeof _vm.cardErrors.cardExpiry == "undefined" ? _vm.verrors.first("exp_date") : _vm.cardErrors.cardExpiry) + "\n                                        ")]) : _vm._e()]), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "haveToolTip"
  }, [_vm._v("CVV Code "), _c("span", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: "It's the 3-digit number on the back of the card",
      expression: "'It\\'s the 3-digit number on the back of the card'"
    }],
    staticClass: "icons help"
  }, [_c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: "images/help.png",
      alt: ""
    }
  })])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.PaymentCart.cvv,
      expression: "PaymentCart.cvv"
    }, {
      name: "cardformat",
      rawName: "v-cardformat:formatCardCVC",
      arg: "formatCardCVC"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    ref: "cardCvvInput",
    staticClass: "form-control",
    attrs: {
      type: "password",
      name: "cvv",
      "data-vv-as": "CVV"
    },
    domProps: {
      value: _vm.PaymentCart.cvv
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.PaymentCart, "cvv", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.verrors.has("cvv") || _vm.cardErrors.cardCvc ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v("\n                                            " + _vm._s(typeof _vm.cardErrors.cardCvc == "undefined" ? _vm.verrors.first("cvv") : _vm.cardErrors.cardCvc) + "\n                                        ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "form-group change-address"
  }, [_c("h4", [_vm._v("Card address")]), _vm._v(" "), _vm.PaymentCart ? _c("p", [_vm._v("\n                                            " + _vm._s(_vm.PaymentCart.apartment)), _c("br"), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.PaymentCart.street)), _c("br"), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t " + _vm._s(_vm.PaymentCart.city) + ", " + _vm._s(_vm.PaymentCart.state)), _c("br"), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.PaymentCart.zip_code) + "\n\n\t\t\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _c("a", {
    staticClass: "changeAddress",
    attrs: {
      href: "javascript:void(0);",
      "data-toggle": "modal",
      "data-target": "#cartAddressModal"
    }
  }, [_vm._v("Change  Address")]), _vm._v(" "), _vm.verrors.has("street") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(_vm._s(_vm.verrors.first("street")))]) : _vm._e(), _vm._v(" "), _vm.verrors.has("state") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(_vm._s(_vm.verrors.first("state")))]) : _vm._e(), _vm._v(" "), _vm.verrors.has("city") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(_vm._s(_vm.verrors.first("city")))]) : _vm._e(), _vm._v(" "), _vm.verrors.has("zip_code") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(_vm._s(_vm.verrors.first("zip_code")))]) : _vm._e()])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "buttonGroup paybtnGroup"
  }, [_c("div", [_c("a", {
    attrs: {
      href: "javascript:void(0);"
    },
    on: {
      click: function click($event) {
        return _vm.$router.push({
          name: "Checkout",
          params: {
            coupondata: _vm.applied_coupon
          }
        });
      }
    }
  }, [_vm._v("Back to Shipping Info")])]), _vm._v(" "), _vm._m(1)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    ref: "CPOrdersummery_ref",
    staticClass: "order-Summery vld-parent"
  }, [_c("div", {
    staticClass: "titleTop smTitletop"
  }, [_vm._m(2), _vm.projectCart && _vm.projectCart.Project_tans ? _c("span", [_vm._v("(" + _vm._s(_vm.projectCart.Project_tans.length) + " Items)")]) : _vm._e()]), _vm._v(" "), _vm.projectCart && _vm.projectCart.Project_tans ? _c("div", {
    staticClass: "contemBottom"
  }, [_c("div", {
    staticClass: "shipping-list"
  }, _vm._l(_vm.projectCart.Project_tans, function (item, index) {
    return _c("div", {
      key: "cp" + index,
      staticClass: "row slGroup"
    }, [_c("div", {
      staticClass: "col-5"
    }, [_c("figure", [_c("img", {
      staticClass: "img-fluid",
      attrs: {
        src: _vm.set_image(item.photo)
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "col-7"
    }, [_c("h3", [_vm._v(_vm._s(item.name)), item.is_sample == 1 ? _c("span", [_vm._v("(Sample)")]) : _vm._e()]), _vm._v(" "), item.sku ? _c("p", [_c("span", [_vm._v("SKU:")]), _c("span", [_vm._v(_vm._s(item.sku))])]) : _vm._e(), _vm._v(" "), _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", [_c("span", [_vm._v("Width:")]), _c("span", [_vm._v(_vm._s(item.width_size))])]), _vm._v(" "), _c("li", [_c("span", [_vm._v("Height:")]), _c("span", [_vm._v(_vm._s(item.height_size))])])]), _vm._v(" "), _c("p", [_c("span", [_vm._v("Qty:")]), _c("span", [_vm._v(_vm._s(item.qty))])]), _vm._v(" "), _c("p", [_c("span", [_vm._v("Price:")]), _c("span", [_vm._v(_vm._s(_vm._f("toCurrency")(item.product_total_price)))])])])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "itemdetail-group"
  }, [_c("ul", {
    staticClass: "list-unstyled"
  }, [_c("li", [_c("span", [_vm._v("Subtotal")]), _c("span", [_vm._v(_vm._s(_vm._f("toCurrency")(_vm.projectCart.cart_price)))])]), _vm._v(" "), _vm.user && _vm.user.type == "User" && _vm.applied_coupon && _vm.applied_coupon.coupon ? _c("li", [_c("span", [_vm._v("Discount- " + _vm._s(_vm.applied_coupon.coupon) + " (" + _vm._s(_vm.applied_coupon.discount) + "%)")]), _c("span", [_vm._v("- " + _vm._s(_vm._f("toCurrency")(_vm.discount_amt)))])]) : _vm._e(), _vm._v(" "), _c("li", [_c("span", [_vm._v("Shipping")]), _c("span", [_vm._v(_vm._s(_vm._f("toCurrency")(_vm.appliedShippingCharge ? _vm.appliedShippingCharge.charge : 0)))])]), _vm._v(" "), _c("li", [_c("span", [_vm._v("Tax")]), _c("span", [_vm._v(_vm._s(_vm._f("toCurrency")(Number(_vm.projectCart.cart_price * _vm.Setting.ORDER_PROFIT / 100))))])])])]), _vm._v(" "), _c("div", {
    staticClass: "total"
  }, [_c("span", [_vm._v("Total")]), _c("span", [_vm._v(_vm._s(_vm._f("toCurrency")(_vm.calculate_cart_total(_vm.projectCart.cart_price))))])])]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "cartAddressModal",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    attrs: {
      role: "document"
    }
  }, [_c("form", {
    staticClass: "modal-content",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateShipping();
      }
    }
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    ref: "CPCart_cng_ref",
    staticClass: "modal-body py-5 vld-parent"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.verrors.has("street"),
      haveValue: _vm.PaymentCart.street
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.PaymentCart.street,
      expression: "PaymentCart.street"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-as": "street",
      name: "street"
    },
    domProps: {
      value: _vm.PaymentCart.street
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.PaymentCart, "street", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Street")]), _vm._v(" "), _vm.verrors.has("street") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(_vm._s(_vm.verrors.first("street")) + " ")]) : _vm._e()]), _vm._v(" "), _c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.verrors.has("city"),
      haveValue: _vm.PaymentCart.city
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.PaymentCart.city,
      expression: "PaymentCart.city"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      ype: "text",
      "data-vv-as": "city",
      name: "city"
    },
    domProps: {
      value: _vm.PaymentCart.city
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.PaymentCart, "city", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("City")]), _vm._v(" "), _vm.verrors.has("city") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(_vm._s(_vm.verrors.first("city")) + " ")]) : _vm._e()]), _vm._v(" "), _c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.verrors.has("state"),
      haveValue: _vm.PaymentCart.state
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.PaymentCart.state,
      expression: "PaymentCart.state"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-as": "state",
      name: "state"
    },
    domProps: {
      value: _vm.PaymentCart.state
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.PaymentCart, "state", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("State")]), _vm._v(" "), _vm.verrors.has("state") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(_vm._s(_vm.verrors.first("state")) + " ")]) : _vm._e()]), _vm._v(" "), _c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.verrors.has("zip_code"),
      haveValue: _vm.PaymentCart.zip_code
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.PaymentCart.zip_code,
      expression: "PaymentCart.zip_code"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required|numeric",
      expression: "'required|numeric'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-as": "zip code",
      name: "zip_code"
    },
    domProps: {
      value: _vm.PaymentCart.zip_code
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.PaymentCart, "zip_code", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Zip Code")]), _vm._v(" "), _vm.verrors.has("zip_code") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(_vm._s(_vm.verrors.first("zip_code")) + " ")]) : _vm._e()]), _vm._v(" "), _c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.verrors.has("apartment"),
      haveValue: _vm.PaymentCart.apartment
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.PaymentCart.apartment,
      expression: "PaymentCart.apartment"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "",
      expression: "''"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-as": "Apartment",
      name: "apartment"
    },
    domProps: {
      value: _vm.PaymentCart.apartment
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.PaymentCart, "apartment", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Apartment")]), _vm._v(" "), _vm.verrors.has("apartment") ? _c("p", {
    staticClass: "errormsg"
  }, [_vm._v(_vm._s(_vm.verrors.first("apartment")) + " ")]) : _vm._e()])]), _vm._v(" "), _vm._m(4)])])])], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-sm-5 col-lg-4 paymentIcon"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("img", {
    attrs: {
      src: "images/payment-icon01.png"
    }
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("img", {
    attrs: {
      src: "images/payment-icon02.png"
    }
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("img", {
    attrs: {
      src: "images/payment-icon03.png"
    }
  })])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("button", {
    staticClass: "payBtn",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Pay Now")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("span", [_c("h3", [_vm._v("Wevisu Shopping Cart")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h2", {
    staticClass: "modal-title h4",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v("Cart Address Info")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-footer justify-content-center"
  }, [_c("button", {
    staticClass: "btn btn-secondary m-2",
    attrs: {
      type: "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary m-2",
    attrs: {
      type: "submit",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Change")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout_payment.vue?vue&type=style&index=0&id=204f0fd8&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/checkout_payment.vue?vue&type=style&index=0&id=204f0fd8&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.errormsg[data-v-204f0fd8] {\n    color: #e3342f !important;\n    font-size: 12px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout_payment.vue?vue&type=style&index=0&id=204f0fd8&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/checkout_payment.vue?vue&type=style&index=0&id=204f0fd8&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./checkout_payment.vue?vue&type=style&index=0&id=204f0fd8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout_payment.vue?vue&type=style&index=0&id=204f0fd8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/checkout_payment.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/checkout_payment.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkout_payment_vue_vue_type_template_id_204f0fd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout_payment.vue?vue&type=template&id=204f0fd8&scoped=true& */ "./resources/js/components/checkout_payment.vue?vue&type=template&id=204f0fd8&scoped=true&");
/* harmony import */ var _checkout_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout_payment.vue?vue&type=script&lang=js& */ "./resources/js/components/checkout_payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _checkout_payment_vue_vue_type_style_index_0_id_204f0fd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout_payment.vue?vue&type=style&index=0&id=204f0fd8&scoped=true&lang=css& */ "./resources/js/components/checkout_payment.vue?vue&type=style&index=0&id=204f0fd8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checkout_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkout_payment_vue_vue_type_template_id_204f0fd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkout_payment_vue_vue_type_template_id_204f0fd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "204f0fd8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/checkout_payment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/checkout_payment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/checkout_payment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./checkout_payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout_payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/checkout_payment.vue?vue&type=style&index=0&id=204f0fd8&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/checkout_payment.vue?vue&type=style&index=0&id=204f0fd8&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_payment_vue_vue_type_style_index_0_id_204f0fd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./checkout_payment.vue?vue&type=style&index=0&id=204f0fd8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout_payment.vue?vue&type=style&index=0&id=204f0fd8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_payment_vue_vue_type_style_index_0_id_204f0fd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_payment_vue_vue_type_style_index_0_id_204f0fd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_payment_vue_vue_type_style_index_0_id_204f0fd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_payment_vue_vue_type_style_index_0_id_204f0fd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/checkout_payment.vue?vue&type=template&id=204f0fd8&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/checkout_payment.vue?vue&type=template&id=204f0fd8&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_payment_vue_vue_type_template_id_204f0fd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./checkout_payment.vue?vue&type=template&id=204f0fd8&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout_payment.vue?vue&type=template&id=204f0fd8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_payment_vue_vue_type_template_id_204f0fd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_payment_vue_vue_type_template_id_204f0fd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2hlY2tvdXRfcGF5bWVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2hlY2tvdXRfcGF5bWVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2hlY2tvdXRfcGF5bWVudC52dWU/MmI2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jaGVja291dF9wYXltZW50LnZ1ZT84NDZiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NoZWNrb3V0X3BheW1lbnQudnVlPzIxNjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2hlY2tvdXRfcGF5bWVudC52dWU/NzVkYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jaGVja291dF9wYXltZW50LnZ1ZT81YzUwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NoZWNrb3V0X3BheW1lbnQudnVlPzczMDAiXSwibmFtZXMiOlsicHJvcHMiLCJuYW1lIiwiZGF0YSIsImNhcmRFcnJvcnMiLCJjYXJkQnJhbmQiLCIkY2FyZEZvcm1hdCIsInBheW1lbnRfZ2F0ZXdheSIsImRpc2NvdW50X2FtdCIsInN0cmlwZVRva2VuIiwic3RyaXBlQVBJVG9rZW4iLCJwYWdlTG9hZGVyIiwiYmVmb3JlRGVzdHJveSIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsImNhcmRCcmFuZENsYXNzIiwid2F0Y2giLCJTZXR0aW5nIiwiaGFuZGxlciIsIml0ZW1zIiwiaW1tZWRpYXRlIiwiZGVlcCIsIm4iLCJwcm9qZWN0Q2FydCIsImNyZCIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwiY3JlYXRlZCIsIm9yZGVyc3VtbWVyeWxvYWRlciIsImNvbnRhaW5lciIsImNhcnRpbmZvbG9hZGVyIiwicGF5bWVudCIsInRoZW4iLCJtb3VudGVkIiwiYmluZCIsIm1ldGhvZHMiLCJpbmNsdWRlU3RyaXBlIiwiVVJMIiwiY2FsbGJhY2siLCJkb2N1bWVudFRhZyIsImRvY3VtZW50IiwidGFnIiwib2JqZWN0Iiwic2NyaXB0VGFnIiwiY29uZmlndXJlU3RyaXBlIiwiU3RyaXBlIiwibWFwQWN0aW9ucyIsImNhbGN1bGF0ZV9jYXJ0X3RvdGFsIiwiY291cG9uX3BlcmNlbnQiLCJkaXNjb3VudF9wcmljZSIsInByZWZpbGwiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJnZXRCcmFuZENsYXNzIiwiYnJhbmQiLCJ1cGRhdGVTaGlwcGluZyIsIiQiLCJzdWJtaXRfcGF5bWVudCIsIm51bWJlciIsImN2YyIsImV4cF9tb250aCIsImV4cF95ZWFyIiwiZmRhdGEiLCJhcHBsaWVkX2NvdXBvbiIsImFwcGxpZWRTaGlwcGluZ0FkZHJlc3MiLCJhcHBsaWVkU2hpcHBpbmdDaGFyZ2UiLCJheGlvcyIsIndpbmRvdyIsInBhcmFtcyIsIm9yZGVyIiwic3RyaXBlUmVzcG9uc2VIYW5kbGVyIiwic3RhdHVzIiwicmVzcG9uc2UiLCJQYXltZW50Q2FydCIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJyZWYiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwiYWN0aXZlIiwiY29sb3IiLCJvbiIsIiRldmVudCIsIl92Iiwic3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsImV4cHJlc3Npb24iLCJ0eXBlIiwiaWQiLCJkb21Qcm9wcyIsImNoZWNrZWQiLCJfcSIsImNoYW5nZSIsIl9tIiwic3JjIiwiYWx0IiwiY2FyZF9udW1iZXIiLCJhcmciLCJwbGFjZWhvbGRlciIsImlucHV0IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiJHNldCIsInZlcnJvcnMiLCJoYXMiLCJjYXJkTnVtYmVyIiwiX3MiLCJmaXJzdCIsIl9lIiwibmFtZV9vbl9DYXJkIiwiZXhwX2RhdGUiLCJjYXJkRXhwaXJ5IiwiY3Z2IiwiY2FyZEN2YyIsImFwYXJ0bWVudCIsInN0cmVldCIsImNpdHkiLCJzdGF0ZSIsInppcF9jb2RlIiwiaHJlZiIsImNsaWNrIiwiJHJvdXRlciIsInB1c2giLCJjb3Vwb25kYXRhIiwiUHJvamVjdF90YW5zIiwibGVuZ3RoIiwiX2wiLCJpdGVtIiwiaW5kZXgiLCJrZXkiLCJzZXRfaW1hZ2UiLCJwaG90byIsImlzX3NhbXBsZSIsInNrdSIsIndpZHRoX3NpemUiLCJoZWlnaHRfc2l6ZSIsInF0eSIsIl9mIiwicHJvZHVjdF90b3RhbF9wcmljZSIsImNhcnRfcHJpY2UiLCJ1c2VyIiwiY291cG9uIiwiZGlzY291bnQiLCJjaGFyZ2UiLCJOdW1iZXIiLCJPUkRFUl9QUk9GSVQiLCJ0YWJpbmRleCIsInJvbGUiLCJlcnJvciIsImhhdmVWYWx1ZSIsInlwZSIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OytDQThNQSxvSjs7Ozs7Ozs7Ozs7O0FBQUE7QUFJZTtFQUNmQSw0RUFEQTtFQUVBQyxjQUZBO0VBR0FDLElBSEEsa0JBR0E7SUFDQTtNQUNBQyxjQURBO01BRUFDLGVBRkE7TUFHQUMsc0NBSEE7TUFJQUMseUJBSkE7TUFLQUMsZUFMQTtNQU1BQyxpQkFOQTtNQU9BQyxrQkFQQTtNQVFBQztJQVJBO0VBVUEsQ0FkQTtFQWVBQyxhQWZBLDJCQWVBO0lBQ0E7RUFDQSxDQWpCQTtFQWtCQUMsa0dBQ0FDLG1FQURBLEdBRUFBLHlFQUZBLEdBR0FBLHVJQUhBLEdBSUFBLGdGQUpBLEdBS0FBLDhFQUxBO0lBTUFDLGNBTkEsNEJBTUE7TUFDQTtJQUNBO0VBUkEsRUFsQkE7RUE0QkFDO0lBQ0FDO01BQ0FDLE9BREEsbUJBQ0FDLEtBREEsRUFDQTtRQUNBLFdBQ0E7TUFDQSxDQUpBO01BS0FDLGVBTEE7TUFNQUM7SUFOQSxDQURBO0lBU0E7TUFDQUgsT0FEQSxtQkFDQUksQ0FEQSxFQUNBO1FBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNB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QUFDVSxFQUFKLENBQU8sUUFBUCxDQUFELENBTkEsQ0FWcUUsQ0FBaEUsQ0FBVDtBQW1CRCxDQTlFbUIsQ0FBdEI7QUFnRkFYLE1BQU0sQ0FBQ2tGLGFBQVAsR0FBdUIsSUFBdkI7Ozs7Ozs7Ozs7OztBQzVqQ0EsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxpQ0FBaUMsZ0NBQWdDLGlDQUFpQyxHQUFHOztBQUU1SDs7Ozs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyx5a0JBQXFVOztBQUUzViw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRztBQUN2QztBQUNMO0FBQ3FDOzs7QUFHcEc7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsc0ZBQU07QUFDUixFQUFFLHVHQUFNO0FBQ1IsRUFBRSxnSEFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBZ00sQ0FBZ0IsNFBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcE47QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMy5idW5kbGUuMWY2OTkwZWI3NmU3ZGY2NThlYTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwic2hvcHBpbmctY2FydCBwYXltZW50IHZsZC1wYXJlbnRcIiByZWY9XCJDUF9tYWluX3JlZlwiPlxuICAgIDxsb2FkaW5nIDphY3RpdmUuc3luYz1cInBhZ2VMb2FkZXJcIiBjb2xvcj0nIzBkYzA3Zic+PC9sb2FkaW5nPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cblx0XHRcdFx0XHQ8aDI+UGF5bWVudCBTZWxlY3Rpb248L2gyPlxuXHRcdFx0XHRcdDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdF9wYXltZW50KClcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYXltZW50LWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgcGdUb3AgdmxkLXBhcmVudFwiIHJlZj1cIkNQQ2FydGluZm9fcmVmXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS03IGNvbC1sZy04XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmFkaW9Db21tb25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwidGVzdDFcIiBuYW1lPVwicmFkaW8tZ3JvdXBcIiB2YWx1ZT1cIlN0cmlwZVwiIHYtbW9kZWw9XCJwYXltZW50X2dhdGV3YXlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInRlc3QxXCI+Q3JlZGl0IENhcmQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5TYWZlIG1vbmV5IHRyYW5zZmVyIHVzaW5nIHlvdXIgYmFuayBhY2NvdW50LiBWaXNhLCBNYWVzdHJvLCBEaXNjb3Zlcixcblx0XHRcdFx0XHRcdFx0XHRcdEFtZXJpY2FuIEV4cHJlc3M8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS01IGNvbC1sZy00IHBheW1lbnRJY29uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPjxpbWcgc3JjPVwiaW1hZ2VzL3BheW1lbnQtaWNvbjAxLnBuZ1wiPjwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+PGltZyBzcmM9XCJpbWFnZXMvcGF5bWVudC1pY29uMDIucG5nXCI+PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj48aW1nIHNyYz1cImltYWdlcy9wYXltZW50LWljb24wMy5wbmdcIj48L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGZvcm1TZWN0aW9uXCIgdi1pZj1cInBheW1lbnRfZ2F0ZXdheT09J1N0cmlwZSdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgPGxhYmVsIGNsYXNzPVwiaGF2ZVRvb2xUaXBcIj5DYXJkIE51bWJlclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICA8c3BhbiBjbGFzcz1cImljb25zIGhlbHBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxpIDpjbGFzcz1cImNhcmRCcmFuZENsYXNzXCIgdi1pZj1cImNhcmRCcmFuZENsYXNzXCI+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgPGltZyB2LWVsc2Ugc3JjPVwiaW1hZ2VzL2NhcmQucG5nXCIgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNhcmRfbnVtYmVyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiUGF5bWVudENhcnQuY2FyZF9udW1iZXJcIiB2LWNhcmRmb3JtYXQ6Zm9ybWF0Q2FyZE51bWJlciBwbGFjZWhvbGRlcj1cIiMjIyMgIyMjIyAjIyMjICMjIyNcIiAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwiY2FyZCBudW1iZXJlXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2FyZF9udW1iZXInKXx8Y2FyZEVycm9ycy5jYXJkTnVtYmVyXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0eXBlb2YgY2FyZEVycm9ycy5jYXJkTnVtYmVyICA9PSAndW5kZWZpbmVkJyA/IHZlcnJvcnMuZmlyc3QoJ2NhcmRfbnVtYmVyJykgOiBjYXJkRXJyb3JzLmNhcmROdW1iZXIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZSBvbiBDYXJkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZV9vbl9DYXJkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiUGF5bWVudENhcnQubmFtZV9vbl9DYXJkXCIgcmVmPVwiY2FyZE5hbWVJbnB1dFwiICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIGRhdGEtdnYtYXM9XCJuYW1lIG9uIENhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ25hbWVfb25fQ2FyZCcpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPnt7IHZlcnJvcnMuZmlyc3QoJ25hbWVfb25fQ2FyZCcpICB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXhwaXJhdGlvbiBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1NL1lZXCIgbmFtZT1cImV4cF9kYXRlXCIgY2xhc3M9XCJkYXRlcGlja2VyIGZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJQYXltZW50Q2FydC5leHBfZGF0ZVwiIHYtY2FyZGZvcm1hdDpmb3JtYXRDYXJkRXhwaXJ5ICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIGRhdGEtdnYtYXM9XCJleHBpcnkgZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnZXhwX2RhdGUnKXx8Y2FyZEVycm9ycy5jYXJkRXhwaXJ5XCIgY2xhc3M9XCJlcnJvcm1zZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0eXBlb2YgY2FyZEVycm9ycy5jYXJkRXhwaXJ5ICA9PSAndW5kZWZpbmVkJyA/IHZlcnJvcnMuZmlyc3QoJ2V4cF9kYXRlJykgOiBjYXJkRXJyb3JzLmNhcmRFeHBpcnkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaGF2ZVRvb2xUaXBcIj5DVlYgQ29kZSA8c3BhbiBjbGFzcz1cImljb25zIGhlbHBcIiB2LXRvb2x0aXA9XCInSXRcXCdzIHRoZSAzLWRpZ2l0IG51bWJlciBvbiB0aGUgYmFjayBvZiB0aGUgY2FyZCdcIj48aW1nIHNyYz1cImltYWdlcy9oZWxwLnBuZ1wiIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCI+PC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJjdnZcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJQYXltZW50Q2FydC5jdnZcIiB2LWNhcmRmb3JtYXQ6Zm9ybWF0Q2FyZENWQyByZWY9XCJjYXJkQ3Z2SW5wdXRcIiAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwiQ1ZWXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2N2dicpfHxjYXJkRXJyb3JzLmNhcmRDdmNcIiBjbGFzcz1cImVycm9ybXNnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHR5cGVvZiBjYXJkRXJyb3JzLmNhcmRDdmMgID09ICd1bmRlZmluZWQnID8gdmVycm9ycy5maXJzdCgnY3Z2JykgOiBjYXJkRXJyb3JzLmNhcmRDdmMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNoYW5nZS1hZGRyZXNzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoND5DYXJkIGFkZHJlc3M8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCB2LWlmPVwiUGF5bWVudENhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgUGF5bWVudENhcnQuYXBhcnRtZW50IH19PGJyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt7IFBheW1lbnRDYXJ0LnN0cmVldCB9fTxicj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQge3sgUGF5bWVudENhcnQuY2l0eSB9fSwge3sgUGF5bWVudENhcnQuc3RhdGUgfX08YnI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3sgUGF5bWVudENhcnQuemlwX2NvZGUgfX1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2NhcnRBZGRyZXNzTW9kYWxcIiBjbGFzcz1cImNoYW5nZUFkZHJlc3NcIj5DaGFuZ2UgIEFkZHJlc3M8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnc3RyZWV0JylcIiBjbGFzcz1cImVycm9ybXNnXCI+e3sgdmVycm9ycy5maXJzdCgnc3RyZWV0JykgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ3N0YXRlJylcIiBjbGFzcz1cImVycm9ybXNnXCI+e3sgdmVycm9ycy5maXJzdCgnc3RhdGUnKSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2l0eScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPnt7IHZlcnJvcnMuZmlyc3QoJ2NpdHknKSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnemlwX2NvZGUnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj57eyB2ZXJyb3JzLmZpcnN0KCd6aXBfY29kZScpIH19PC9wPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG5cdFx0XHRcdFx0XHQgICAgICA8IS0tICAgPGRpdiBjbGFzcz1cInBheXBhbEdyb3VwXCI+XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGF5cGFsdG9wXCI+XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvQ29tbW9uXCI+XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRlc3QyXCIgbmFtZT1cInJhZGlvLWdyb3VwXCIgdmFsdWU9XCJDcnlwdG9cIiB2LW1vZGVsPVwicGF5bWVudF9nYXRld2F5XCI+XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0ZXN0MlwiPkNyeXB0byBDdXJyZW5jeTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYXlwYWxJY29uXCI+PGltZyBzcmM9XCJpbWFnZXMvY3J5cHRvLnBuZ1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgPHA+WW91IHdpbGwgYmUgcmVkaXJlY3RlZCB0byBDb2luZ2F0ZSB3ZWJzaXRlIHRvIGNvbXBsZXRlIHlvdXIgcHVyY2hhc2Ugc2VjdXJlbHkuPC9wPlxuXHRcdFx0XHRcdFx0ICAgICAgICA8L2Rpdj4gIC0tPlxuXHRcdFx0XHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uR3JvdXAgcGF5YnRuR3JvdXBcIj5cblx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIlxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLnB1c2goe25hbWU6ICdDaGVja291dCcscGFyYW1zOiB7Y291cG9uZGF0YTogYXBwbGllZF9jb3Vwb259fSlcIj5CYWNrIHRvIFNoaXBwaW5nIEluZm88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgPGRpdj48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInBheUJ0blwiPlBheSBOb3c8L2J1dHRvbj48L2Rpdj5cblx0XHRcdFx0XHRcdCAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHQgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3JkZXItU3VtbWVyeSB2bGQtcGFyZW50XCIgcmVmPVwiQ1BPcmRlcnN1bW1lcnlfcmVmXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGl0bGVUb3Agc21UaXRsZXRvcFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj48aDM+V2V2aXN1IFNob3BwaW5nIENhcnQ8L2gzPjwvc3Bhbj48c3BhbiB2LWlmPVwicHJvamVjdENhcnQgJiYgcHJvamVjdENhcnQuUHJvamVjdF90YW5zXCI+KHt7cHJvamVjdENhcnQuUHJvamVjdF90YW5zLmxlbmd0aH19IEl0ZW1zKTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbUJvdHRvbSBcIiAgdi1pZj1cInByb2plY3RDYXJ0ICYmIHByb2plY3RDYXJ0LlByb2plY3RfdGFuc1wiPlxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzaGlwcGluZy1saXN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJvdyBzbEdyb3VwXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHByb2plY3RDYXJ0LlByb2plY3RfdGFuc1wiIDprZXk9XCInY3AnK2luZGV4XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTVcIj48ZmlndXJlPjxpbWcgOnNyYz1cInNldF9pbWFnZShpdGVtLnBob3RvKVwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+PC9maWd1cmU+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzPnt7aXRlbS5uYW1lfX08c3BhbiB2LWlmPVwiaXRlbS5pc19zYW1wbGU9PTFcIj4oU2FtcGxlKTwvc3Bhbj48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJpdGVtLnNrdVwiPjxzcGFuPlNLVTo8L3NwYW4+PHNwYW4+e3tpdGVtLnNrdX19PC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzPVwibGlzdC11bnN0eWxlZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48c3Bhbj5XaWR0aDo8L3NwYW4+PHNwYW4+e3tpdGVtLndpZHRoX3NpemV9fTwvc3Bhbj48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICA8bGk+PHNwYW4+SGVpZ2h0Ojwvc3Bhbj48c3Bhbj57e2l0ZW0uaGVpZ2h0X3NpemV9fTwvc3Bhbj48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD48c3Bhbj5RdHk6PC9zcGFuPjxzcGFuPnt7aXRlbS5xdHl9fTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPjxzcGFuPlByaWNlOjwvc3Bhbj48c3Bhbj57e2l0ZW0ucHJvZHVjdF90b3RhbF9wcmljZXx0b0N1cnJlbmN5fX08L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpdGVtZGV0YWlsLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzPVwibGlzdC11bnN0eWxlZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxzcGFuPlN1YnRvdGFsPC9zcGFuPjxzcGFuPnt7IHByb2plY3RDYXJ0LmNhcnRfcHJpY2V8dG9DdXJyZW5jeSB9fTwvc3Bhbj48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIHYtaWY9XCJ1c2VyICYmIHVzZXIudHlwZT09J1VzZXInICYmIGFwcGxpZWRfY291cG9uICYmICBhcHBsaWVkX2NvdXBvbi5jb3Vwb25cIj48c3Bhbj5EaXNjb3VudC0ge3sgYXBwbGllZF9jb3Vwb24uY291cG9uIH19ICh7eyBhcHBsaWVkX2NvdXBvbi5kaXNjb3VudCB9fSUpPC9zcGFuPjxzcGFuPi0ge3sgZGlzY291bnRfYW10fHRvQ3VycmVuY3kgfX08L3NwYW4+PC9saT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxzcGFuPlNoaXBwaW5nPC9zcGFuPjxzcGFuPnt7IGFwcGxpZWRTaGlwcGluZ0NoYXJnZT8gYXBwbGllZFNoaXBwaW5nQ2hhcmdlLmNoYXJnZSA6IDAgfHRvQ3VycmVuY3l9fTwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuPlRheDwvc3Bhbj48c3Bhbj57eyBOdW1iZXIocHJvamVjdENhcnQuY2FydF9wcmljZSAgKiBTZXR0aW5nLk9SREVSX1BST0ZJVCAvIDEwMCkgfHRvQ3VycmVuY3l9fTwvc3Bhbj48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0b3RhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlRvdGFsPC9zcGFuPjxzcGFuPnt7Y2FsY3VsYXRlX2NhcnRfdG90YWwocHJvamVjdENhcnQuY2FydF9wcmljZSl8dG9DdXJyZW5jeX19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwiY2FydEFkZHJlc3NNb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIiBAc3VibWl0LnByZXZlbnQ9XCJ1cGRhdGVTaGlwcGluZygpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsLXRpdGxlIGg0XCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPkNhcnQgQWRkcmVzcyBJbmZvPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5IHB5LTUgdmxkLXBhcmVudFwiIHJlZj1cIkNQQ2FydF9jbmdfcmVmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3N0cmVldCcpICwnaGF2ZVZhbHVlJzogUGF5bWVudENhcnQuc3RyZWV0IH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiUGF5bWVudENhcnQuc3RyZWV0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwic3RyZWV0XCIgbmFtZT1cInN0cmVldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5TdHJlZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdzdHJlZXQnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj57eyB2ZXJyb3JzLmZpcnN0KCdzdHJlZXQnKSB9fSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IHZlcnJvcnMuaGFzKCdjaXR5JykgLCdoYXZlVmFsdWUnOiBQYXltZW50Q2FydC5jaXR5IH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgeXBlPVwidGV4dFwiIHYtbW9kZWw9XCJQYXltZW50Q2FydC5jaXR5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwiY2l0eVwiIG5hbWU9XCJjaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkNpdHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdjaXR5JylcIiBjbGFzcz1cImVycm9ybXNnXCI+e3sgdmVycm9ycy5maXJzdCgnY2l0eScpIH19IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogdmVycm9ycy5oYXMoJ3N0YXRlJykgLCdoYXZlVmFsdWUnOiBQYXltZW50Q2FydC5zdGF0ZSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIlBheW1lbnRDYXJ0LnN0YXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwic3RhdGVcIiBuYW1lPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+U3RhdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ3N0YXRlJylcIiBjbGFzcz1cImVycm9ybXNnXCI+e3sgdmVycm9ycy5maXJzdCgnc3RhdGUnKSB9fSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IHZlcnJvcnMuaGFzKCd6aXBfY29kZScpICwnaGF2ZVZhbHVlJzogUGF5bWVudENhcnQuemlwX2NvZGUgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJQYXltZW50Q2FydC56aXBfY29kZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZHxudW1lcmljJ1wiIGRhdGEtdnYtYXM9XCJ6aXAgY29kZVwiIG5hbWU9XCJ6aXBfY29kZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5aaXAgQ29kZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ3ppcF9jb2RlJylcIiBjbGFzcz1cImVycm9ybXNnXCI+e3sgdmVycm9ycy5maXJzdCgnemlwX2NvZGUnKSB9fSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IHZlcnJvcnMuaGFzKCdhcGFydG1lbnQnKSAsJ2hhdmVWYWx1ZSc6IFBheW1lbnRDYXJ0LmFwYXJ0bWVudCB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIlBheW1lbnRDYXJ0LmFwYXJ0bWVudFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi12YWxpZGF0ZT1cIicnXCIgZGF0YS12di1hcz1cIkFwYXJ0bWVudFwiIG5hbWU9XCJhcGFydG1lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+QXBhcnRtZW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnYXBhcnRtZW50JylcIiBjbGFzcz1cImVycm9ybXNnXCI+e3sgdmVycm9ycy5maXJzdCgnYXBhcnRtZW50JykgfX0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IG0tMlwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tMlwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2hhbmdlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG5cdDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtcbiAgICBtYXBHZXR0ZXJzLFxuICAgIG1hcEFjdGlvbnNcbn0gZnJvbSBcInZ1ZXhcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydhcHBsaWVkX2NvdXBvbicsICdhcHBsaWVkU2hpcHBpbmdBZGRyZXNzJywgJ2FwcGxpZWRTaGlwcGluZ0NoYXJnZSddLFxuICAgIG5hbWU6IFwiSGVhZGVyXCIsXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhcmRFcnJvcnM6IHt9LFxuICAgICAgICAgICAgY2FyZEJyYW5kOiBudWxsLFxuICAgICAgICAgICAgJGNhcmRGb3JtYXQ6IFZ1ZS5wcm90b3R5cGUuJGNhcmRGb3JtYXQsXG4gICAgICAgICAgICBwYXltZW50X2dhdGV3YXk6ICdTdHJpcGUnLFxuICAgICAgICAgICAgZGlzY291bnRfYW10OiAwLFxuICAgICAgICAgICAgc3RyaXBlVG9rZW46IG51bGwsXG4gICAgICAgICAgICBzdHJpcGVBUElUb2tlbjogJycsXG4gICAgICAgICAgICBwYWdlTG9hZGVyOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IGZhbHNlO1xuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgLi4ubWFwR2V0dGVycyhbXCJlcnJvcnNcIl0pLFxuICAgICAgICAuLi5tYXBHZXR0ZXJzKFwiYXV0aFwiLCBbXCJ1c2VyXCJdKSxcbiAgICAgICAgLi4ubWFwR2V0dGVycyhcIkNoZWNrb3V0XCIsIFtcIlVzZXJTaGlwcGluZ0FkZHJlc3NcIiwgXCJDb3Vwb25cIiwgXCJTaGlwcGluZ0NoYXJnZVwiLCBcIlBheW1lbnRDYXJ0XCJdKSxcbiAgICAgICAgLi4ubWFwR2V0dGVycyhcImNhcnRcIiwgW1wicHJvamVjdENhcnRcIl0pLFxuICAgICAgICAuLi5tYXBHZXR0ZXJzKFwiQ29tbW9uXCIsIFtcIlNldHRpbmdcIl0pLFxuICAgICAgICBjYXJkQnJhbmRDbGFzcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEJyYW5kQ2xhc3ModGhpcy5jYXJkQnJhbmQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBTZXR0aW5nOiB7XG4gICAgICAgICAgICBoYW5kbGVyKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmlwZUFQSVRva2VuID0gaXRlbXMuU1RSSVBFUFVCTElDS0VZXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgICAgICAgZGVlcDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAnYXBwbGllZFNoaXBwaW5nQWRkcmVzcyc6IHtcbiAgICAgICAgICAgIGhhbmRsZXIobikge1xuICAgICAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGF5bWVudENhcnQuc3RyZWV0ID0gbi5zdHJlZXRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXltZW50Q2FydC5jaXR5ID0gbi5jaXR5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGF5bWVudENhcnQuc3RhdGUgPSBuLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGF5bWVudENhcnQuemlwX2NvZGUgPSBuLnppcF9jb2RlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGF5bWVudENhcnQuYXBhcnRtZW50ID0gbi5hcGFydG1lbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICAgICAgfSxcbi8qICAgICAgICAgJ1BheW1lbnRDYXJ0Jzp7XG4gICAgICAgICAgICBoYW5kbGVyKG4sbykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG4sbyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMuYXBwbGllZFNoaXBwaW5nQWRkcmVzcyxuLG8pO1xuICAgICAgICAgICAgICAgICBpZiAodGhpcy5hcHBsaWVkU2hpcHBpbmdBZGRyZXNzICYmIHR5cGVvZiAobykgPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLlBheW1lbnRDYXJ0LnN0cmVldCA9IHRoaXMuYXBwbGllZFNoaXBwaW5nQWRkcmVzcy5zdHJlZXRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXltZW50Q2FydC5jaXR5ID0gdGhpcy5hcHBsaWVkU2hpcHBpbmdBZGRyZXNzLmNpdHlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXltZW50Q2FydC5zdGF0ZSA9IHRoaXMuYXBwbGllZFNoaXBwaW5nQWRkcmVzcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLlBheW1lbnRDYXJ0LnppcF9jb2RlID0gdGhpcy5hcHBsaWVkU2hpcHBpbmdBZGRyZXNzLnppcF9jb2RlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgICAgICBpbW1lZGlhdGU6IHRydWUsXG4gICAgICAgIH0sICovXG5cbiAgICAgICAgcHJvamVjdENhcnQ6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoY3JkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNyZCAmJiBjcmQuUHJvamVjdF90YW5zICYmIGNyZC5Qcm9qZWN0X3RhbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdQbGVhc2UgQWRkIFByb2R1Y3RzIHRvIFNob3BwaW5nIENhcnQgVG8gUGxhY2UgT3JkZXIuJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKS5jYXRjaCh7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgICAgICBpbW1lZGlhdGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICdQYXltZW50Q2FydC5jYXJkX251bWJlcic6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRjYXJkRm9ybWF0LnZhbGlkYXRlQ2FyZE51bWJlcih2YWwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5jYXJkTmFtZUlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdQYXltZW50Q2FydC5leHBfZGF0ZSc6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRjYXJkRm9ybWF0LnZhbGlkYXRlQ2FyZEV4cGlyeSh2YWwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5jYXJkQ3Z2SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgY3JlYXRlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFwcGxpZWRTaGlwcGluZ0FkZHJlc3MpIHtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBBZGQgeW91ciBTaGlwcGluZyBBZGRyZXNzIFRvIFBsYWNlIE9yZGVyLidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdDYXJ0J30pLmNhdGNoKCgpID0+IHt9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3JkZXJzdW1tZXJ5bG9hZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5DUE9yZGVyc3VtbWVyeV9yZWZcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2V0Q2FydERhdGEoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBvcmRlcnN1bW1lcnlsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgb3JkZXJzdW1tZXJ5bG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBsZXQgY2FydGluZm9sb2FkZXIgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xuICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLkNQQ2FydGluZm9fcmVmXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdldFNoaXBwaW5nQWRkcmVzc0RhdGEoe1xuICAgICAgICAgICAgICAgIHBheW1lbnQ6IDFcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhcnRpbmZvbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxlYXNlIEFkZCB5b3VyIFNoaXBwaW5nIEFkZHJlc3MgVG8gUGxhY2UgT3JkZXIuJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnQ2FydCd9KS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICAgICAgICB9KVxuICAgIH0sXG4gICAgYXN5bmMgbW91bnRlZCgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5pbmNsdWRlU3RyaXBlKCdqcy5zdHJpcGUuY29tL3YyLycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJlU3RyaXBlKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIGluY2x1ZGVTdHJpcGUoVVJMLCBjYWxsYmFjaykge1xuXG4gICAgICAgICAgICBsZXQgZG9jdW1lbnRUYWcgPSBkb2N1bWVudCxcbiAgICAgICAgICAgICAgICB0YWcgPSAnc2NyaXB0JyxcbiAgICAgICAgICAgICAgICBvYmplY3QgPSBkb2N1bWVudFRhZy5jcmVhdGVFbGVtZW50KHRhZyksXG4gICAgICAgICAgICAgICAgc2NyaXB0VGFnID0gZG9jdW1lbnRUYWcuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKVswXTtcbiAgICAgICAgICAgIG9iamVjdC5zcmMgPSAnaHR0cHM6Ly8nICsgVVJMO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBlKTtcbiAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzY3JpcHRUYWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUob2JqZWN0LCBzY3JpcHRUYWcpO1xuICAgICAgICB9LFxuICAgICAgICBjb25maWd1cmVTdHJpcGUoKSB7XG4gICAgICAgICAgICBTdHJpcGUuc2V0UHVibGlzaGFibGVLZXkodGhpcy5zdHJpcGVBUElUb2tlbik7XG4gICAgICAgIH0sXG4gICAgICAgIC4uLm1hcEFjdGlvbnMoXCJjYXJ0XCIsIFtcImdldENhcnREYXRhXCJdKSxcbiAgICAgICAgLi4ubWFwQWN0aW9ucyhcIkNoZWNrb3V0XCIsIFtcImdldFNoaXBwaW5nQWRkcmVzc0RhdGFcIiwgXCJVcGRhdGVTaGlwcGluZ0FkZHJlc3NcIl0pLFxuXG4gICAgICAgIGNhbGN1bGF0ZV9jYXJ0X3RvdGFsKGNhcnRfcHJpY2UgPSAwKSB7XG4gICAgICAgICAgICBsZXQgY291cG9uX3BlcmNlbnQgPSAwXG4gICAgICAgICAgICBsZXQgZGlzY291bnRfcHJpY2UgPSAwXG4gICAgICAgICAgICBpZiAodGhpcy5hcHBsaWVkX2NvdXBvbiAmJiB0aGlzLmFwcGxpZWRfY291cG9uLmRpc2NvdW50ICYmICFpc05hTih0aGlzLmFwcGxpZWRfY291cG9uLmRpc2NvdW50KSkge1xuICAgICAgICAgICAgICAgIGNvdXBvbl9wZXJjZW50ID0gTnVtYmVyKHRoaXMuYXBwbGllZF9jb3Vwb24uZGlzY291bnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNjb3VudF9wcmljZSA9IE51bWJlcihjYXJ0X3ByaWNlICogY291cG9uX3BlcmNlbnQgLyAxMDApXG4gICAgICAgICAgICB0aGlzLmRpc2NvdW50X2FtdCA9IGRpc2NvdW50X3ByaWNlLnRvRml4ZWQoMilcbiAgICAgICAgICAgIGxldCB0b3RhbHAgPSBOdW1iZXIoY2FydF9wcmljZSAtIGRpc2NvdW50X3ByaWNlKTtcbiAgICAgICAgICAgIGxldCBzaGlwID0gdGhpcy5hcHBsaWVkU2hpcHBpbmdDaGFyZ2UgPyB0aGlzLmFwcGxpZWRTaGlwcGluZ0NoYXJnZS5jaGFyZ2UgOiAwXG4gICAgICAgICAgICBsZXQgb3JkZXJwcm9maXQ9IE51bWJlcihjYXJ0X3ByaWNlICAqIHRoaXMuU2V0dGluZy5PUkRFUl9QUk9GSVQgLyAxMDApXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHRvdGFscCArIHNoaXAgKyBvcmRlcnByb2ZpdCkudG9GaXhlZCgyKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmlsbDogZnVuY3Rpb24gKGNjTnVtKSB7XG4gICAgICAgICAgICB0aGlzLmRldGFpbHMuY2FyZF9udW1iZXIgPSBjY051bTtcbiAgICAgICAgICAgIHRoaXMuJGNhcmRGb3JtYXQuc2V0Q2FyZFR5cGUoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQ6IHRoaXMuJHJlZnMuY2FyZE51bUlucHV0LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBjY051bVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEJyYW5kQ2xhc3M6IGZ1bmN0aW9uIChicmFuZCkge1xuICAgICAgICAgICAgbGV0IGljb24gPSAnJztcbiAgICAgICAgICAgIGJyYW5kID0gYnJhbmQgfHwgJ3Vua25vd24nO1xuICAgICAgICAgICAgbGV0IGNhcmRCcmFuZFRvQ2xhc3MgPSB7XG4gICAgICAgICAgICAgICAgJ3Zpc2EnOiAnZmEgZmEtY2MtdmlzYScsXG4gICAgICAgICAgICAgICAgJ21hc3RlcmNhcmQnOiAnZmEgZmEtY2MtbWFzdGVyY2FyZCcsXG4gICAgICAgICAgICAgICAgJ2FtZXgnOiAnZmEgZmEtY2MtYW1leCcsXG4gICAgICAgICAgICAgICAgJ2Rpc2NvdmVyJzogJ2ZhIGZhLWNjLWRpc2NvdmVyJyxcbiAgICAgICAgICAgICAgICAnZGluZXJzJzogJ2ZhIGZhLWNjLWRpbmVycy1jbHViJyxcbiAgICAgICAgICAgICAgICAnamNiJzogJ2ZhIGZhLWNjLWpjYicsXG4gICAgICAgICAgICAgICAgJ3Vua25vd24nOiAnZmEgZmEtY3JlZGl0LWNhcmQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjYXJkQnJhbmRUb0NsYXNzW2JyYW5kXSkge1xuICAgICAgICAgICAgICAgIGljb24gPSBjYXJkQnJhbmRUb0NsYXNzW2JyYW5kXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gaWNvbjtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgdXBkYXRlU2hpcHBpbmcoKSB7XG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGUoKS50aGVuKGFzeW5jICh2YWxpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjY2FydEFkZHJlc3NNb2RhbCcpLm1vZGVsKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgc3VibWl0X3BheW1lbnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXltZW50X2dhdGV3YXkgPT0gXCJTdHJpcGVcIikge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZSgpLnRoZW4oKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkRXJyb3JzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuJGNhcmRGb3JtYXQudmFsaWRhdGVDYXJkTnVtYmVyKHRoaXMuUGF5bWVudENhcnQuY2FyZF9udW1iZXIpICYmIHRoaXMuUGF5bWVudENhcnQuY2FyZF9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRFcnJvcnMuY2FyZE51bWJlciA9IFwiSW52YWxpZCBDYXJkIE51bWJlci5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuJGNhcmRGb3JtYXQudmFsaWRhdGVDYXJkRXhwaXJ5KHRoaXMuUGF5bWVudENhcnQuZXhwX2RhdGUpICYmIHRoaXMuUGF5bWVudENhcnQuZXhwX2RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRFcnJvcnMuY2FyZEV4cGlyeSA9IFwiSW52YWxpZCBFeHBpcmF0aW9uIERhdGUuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRjYXJkRm9ybWF0LnZhbGlkYXRlQ2FyZENWQyh0aGlzLlBheW1lbnRDYXJ0LmN2dikgJiYgdGhpcy5QYXltZW50Q2FydC5jdnYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRFcnJvcnMuY2FyZEN2YyA9IFwiSW52YWxpZCBDVkMuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5jYXJkRXJyb3JzKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXhwID0gdGhpcy5QYXltZW50Q2FydC5leHBfZGF0ZS5zcGxpdCgnLycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmlwZS5jcmVhdGVUb2tlbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcjogdGhpcy5QYXltZW50Q2FydC5jYXJkX251bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ZjOiB0aGlzLlBheW1lbnRDYXJ0LmN2dixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwX21vbnRoOiBleHBbMF0udHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBfeWVhcjogZXhwWzFdLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuc3RyaXBlUmVzcG9uc2VIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgIGxldCBmZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfZ2F0ZXdheTogdGhpcy5wYXltZW50X2dhdGV3YXksXG4gICAgICAgICAgICAgICAgICAgICBhcHBsaWVkX2NvdXBvbjogdGhpcy5hcHBsaWVkX2NvdXBvbixcbiAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWRTaGlwcGluZ0FkZHJlc3M6IHRoaXMuYXBwbGllZFNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWRTaGlwcGluZ0NoYXJnZTogdGhpcy5hcHBsaWVkU2hpcHBpbmdDaGFyZ2VcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL29yZGVyJywgZmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5kYXRhICYmIHJlcy5kYXRhLmRhdGEuUGF5bWVudCAmJiByZXMuZGF0YS5kYXRhLlBheW1lbnQucGF5bWVudF91cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YS5kYXRhLlBheW1lbnQucGF5bWVudF91cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVGhhbmt5b3UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHJlcy5kYXRhLmRhdGEub3JkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgc3RyaXBlUmVzcG9uc2VIYW5kbGVyKHN0YXR1cywgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZEVycm9ycyA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvci5wYXJhbSA9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRFcnJvcnMuY2FyZE51bWJlciA9IHJlc3BvbnNlLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IucGFyYW0gPT0gJ2V4cF95ZWFyJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRFcnJvcnMuY2FyZEV4cGlyeSA9IHJlc3BvbnNlLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IucGFyYW0gPT0gJ2N2YycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkRXJyb3JzLmNhcmRDdmMgPSByZXNwb25zZS5lcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAocmVzcG9uc2UuZXJyb3IucGFyYW0pID09PSAndW5kZWZpbmVkJyB8fCAocmVzcG9uc2UuZXJyb3IucGFyYW0gIT0gJ251bWJlcicgJiYgcmVzcG9uc2UuZXJyb3IucGFyYW0gIT0gJ2V4cF95ZWFyJyAmJiByZXNwb25zZS5lcnJvci5wYXJhbSAhPSAnY3ZjJykpIHtcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHJpcGVUb2tlbiA9IHJlc3BvbnNlWydpZCddXG4gICAgICAgICAgICAgICAgbGV0IGZkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBzdHJpcGVUb2tlbjogcmVzcG9uc2VbJ2lkJ10sXG4gICAgICAgICAgICAgICAgICAgIFBheW1lbnRDYXJ0OiB0aGlzLlBheW1lbnRDYXJ0LFxuICAgICAgICAgICAgICAgICAgICBwYXltZW50X2dhdGV3YXk6IHRoaXMucGF5bWVudF9nYXRld2F5LFxuICAgICAgICAgICAgICAgICAgICBhcHBsaWVkX2NvdXBvbjogdGhpcy5hcHBsaWVkX2NvdXBvbixcbiAgICAgICAgICAgICAgICAgICAgYXBwbGllZFNoaXBwaW5nQWRkcmVzczogdGhpcy5hcHBsaWVkU2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBhcHBsaWVkU2hpcHBpbmdDaGFyZ2U6IHRoaXMuYXBwbGllZFNoaXBwaW5nQ2hhcmdlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9vcmRlcicsIGZkYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1RoYW5reW91JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHJlcy5kYXRhLmRhdGEub3JkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbi5lcnJvcm1zZyB7XG4gICAgY29sb3I6ICNlMzM0MmYgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHJlZjogXCJDUF9tYWluX3JlZlwiLCBzdGF0aWNDbGFzczogXCJzaG9wcGluZy1jYXJ0IHBheW1lbnQgdmxkLXBhcmVudFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJsb2FkaW5nXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgYWN0aXZlOiBfdm0ucGFnZUxvYWRlciwgY29sb3I6IFwiIzBkYzA3ZlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJ1cGRhdGU6YWN0aXZlXCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5wYWdlTG9hZGVyID0gJGV2ZW50XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC04XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiUGF5bWVudCBTZWxlY3Rpb25cIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0X3BheW1lbnQoKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwYXltZW50LWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiQ1BDYXJ0aW5mb19yZWZcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3cgcGdUb3AgdmxkLXBhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tNyBjb2wtbGctOFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmFkaW9Db21tb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXltZW50X2dhdGV3YXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGF5bWVudF9nYXRld2F5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInRlc3QxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJTdHJpcGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoX3ZtLnBheW1lbnRfZ2F0ZXdheSwgXCJTdHJpcGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2dhdGV3YXkgPSBcIlN0cmlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRlc3QxXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ3JlZGl0IENhcmRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2FmZSBtb25leSB0cmFuc2ZlciB1c2luZyB5b3VyIGJhbmsgYWNjb3VudC4gVmlzYSwgTWFlc3RybywgRGlzY292ZXIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0QW1lcmljYW4gRXhwcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2dhdGV3YXkgPT0gXCJTdHJpcGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMiBmb3JtU2VjdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGF2ZVRvb2xUaXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNhcmQgTnVtYmVyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29ucyBoZWxwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jYXJkQnJhbmRDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBjbGFzczogX3ZtLmNhcmRCcmFuZENsYXNzIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcImltYWdlcy9jYXJkLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLlBheW1lbnRDYXJ0LmNhcmRfbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJQYXltZW50Q2FydC5jYXJkX251bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjYXJkZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtY2FyZGZvcm1hdDpmb3JtYXRDYXJkTnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZm9ybWF0Q2FyZE51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjYXJkX251bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIiMjIyMgIyMjIyAjIyMjICMjIyNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJjYXJkIG51bWJlcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLlBheW1lbnRDYXJ0LmNhcmRfbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5QYXltZW50Q2FydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXJkX251bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNhcmRfbnVtYmVyXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2FyZEVycm9ycy5jYXJkTnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIF92bS5jYXJkRXJyb3JzLmNhcmROdW1iZXIgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS52ZXJyb3JzLmZpcnN0KFwiY2FyZF9udW1iZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uY2FyZEVycm9ycy5jYXJkTnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTmFtZSBvbiBDYXJkXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5QYXltZW50Q2FydC5uYW1lX29uX0NhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiUGF5bWVudENhcnQubmFtZV9vbl9DYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY2FyZE5hbWVJbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZV9vbl9DYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJuYW1lIG9uIENhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLlBheW1lbnRDYXJ0Lm5hbWVfb25fQ2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uUGF5bWVudENhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lX29uX0NhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcIm5hbWVfb25fQ2FyZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcIm5hbWVfb25fQ2FyZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRXhwaXJhdGlvbiBEYXRlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5QYXltZW50Q2FydC5leHBfZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJQYXltZW50Q2FydC5leHBfZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjYXJkZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1jYXJkZm9ybWF0OmZvcm1hdENhcmRFeHBpcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImZvcm1hdENhcmRFeHBpcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRhdGVwaWNrZXIgZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTU0vWVlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZXhwX2RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcImV4cGlyeSBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLlBheW1lbnRDYXJ0LmV4cF9kYXRlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5QYXltZW50Q2FydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cF9kYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJleHBfZGF0ZVwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2FyZEVycm9ycy5jYXJkRXhwaXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBfdm0uY2FyZEVycm9ycy5jYXJkRXhwaXJ5ID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnZlcnJvcnMuZmlyc3QoXCJleHBfZGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmNhcmRFcnJvcnMuY2FyZEV4cGlyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGF2ZVRvb2xUaXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ1ZWIENvZGUgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJdCdzIHRoZSAzLWRpZ2l0IG51bWJlciBvbiB0aGUgYmFjayBvZiB0aGUgY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCInSXRcXFxcJ3MgdGhlIDMtZGlnaXQgbnVtYmVyIG9uIHRoZSBiYWNrIG9mIHRoZSBjYXJkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25zIGhlbHBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcImltYWdlcy9oZWxwLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uUGF5bWVudENhcnQuY3Z2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlBheW1lbnRDYXJ0LmN2dlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjYXJkZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1jYXJkZm9ybWF0OmZvcm1hdENhcmRDVkNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImZvcm1hdENhcmRDVkNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJjYXJkQ3Z2SW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjdnZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkNWVlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5QYXltZW50Q2FydC5jdnYgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLlBheW1lbnRDYXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3Z2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjdnZcIikgfHwgX3ZtLmNhcmRFcnJvcnMuY2FyZEN2Y1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgX3ZtLmNhcmRFcnJvcnMuY2FyZEN2YyA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS52ZXJyb3JzLmZpcnN0KFwiY3Z2XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uY2FyZEVycm9ycy5jYXJkQ3ZjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBjaGFuZ2UtYWRkcmVzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIkNhcmQgYWRkcmVzc1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uUGF5bWVudENhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5QYXltZW50Q2FydC5hcGFydG1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uUGF5bWVudENhcnQuc3RyZWV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5QYXltZW50Q2FydC5jaXR5KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5QYXltZW50Q2FydC5zdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5QYXltZW50Q2FydC56aXBfY29kZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjaGFuZ2VBZGRyZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjY2FydEFkZHJlc3NNb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDaGFuZ2UgIEFkZHJlc3NcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcInN0cmVldFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJzdHJlZXRcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcInN0YXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcInN0YXRlXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjaXR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImNpdHlcIikpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiemlwX2NvZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52ZXJyb3JzLmZpcnN0KFwiemlwX2NvZGVcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbkdyb3VwIHBheWJ0bkdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNoZWNrb3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGNvdXBvbmRhdGE6IF92bS5hcHBsaWVkX2NvdXBvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQmFjayB0byBTaGlwcGluZyBJbmZvXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZjogXCJDUE9yZGVyc3VtbWVyeV9yZWZcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJvcmRlci1TdW1tZXJ5IHZsZC1wYXJlbnRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVUb3Agc21UaXRsZXRvcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICAgIF92bS5wcm9qZWN0Q2FydCAmJiBfdm0ucHJvamVjdENhcnQuUHJvamVjdF90YW5zXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvamVjdENhcnQuUHJvamVjdF90YW5zLmxlbmd0aCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIEl0ZW1zKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0ucHJvamVjdENhcnQgJiYgX3ZtLnByb2plY3RDYXJ0LlByb2plY3RfdGFuc1xuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbUJvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNoaXBwaW5nLWxpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvamVjdENhcnQuUHJvamVjdF90YW5zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IFwiY3BcIiArIGluZGV4LCBzdGF0aWNDbGFzczogXCJyb3cgc2xHcm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmaWd1cmVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uc2V0X2ltYWdlKGl0ZW0ucGhvdG8pIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc19zYW1wbGUgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiKFNhbXBsZSlcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5za3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlNLVTpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5za3UpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LXVuc3R5bGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiV2lkdGg6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLndpZHRoX3NpemUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJIZWlnaHQ6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmhlaWdodF9zaXplKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJRdHk6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5xdHkpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiUHJpY2U6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm9kdWN0X3RvdGFsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtZGV0YWlsLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtdW5zdHlsZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiU3VidG90YWxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9qZWN0Q2FydC5jYXJ0X3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIudHlwZSA9PSBcIlVzZXJcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYXBwbGllZF9jb3Vwb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFwcGxpZWRfY291cG9uLmNvdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEaXNjb3VudC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmFwcGxpZWRfY291cG9uLmNvdXBvbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmFwcGxpZWRfY291cG9uLmRpc2NvdW50KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b0N1cnJlbmN5XCIpKF92bS5kaXNjb3VudF9hbXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJTaGlwcGluZ1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b0N1cnJlbmN5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFwcGxpZWRTaGlwcGluZ0NoYXJnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5hcHBsaWVkU2hpcHBpbmdDaGFyZ2UuY2hhcmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiVGF4XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcInRvQ3VycmVuY3lcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0ucHJvamVjdENhcnQuY2FydF9wcmljZSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLlNldHRpbmcuT1JERVJfUFJPRklUKSAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3RhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiVG90YWxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b0N1cnJlbmN5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2FsY3VsYXRlX2NhcnRfdG90YWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2plY3RDYXJ0LmNhcnRfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGZhZGVcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IFwiY2FydEFkZHJlc3NNb2RhbFwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIixcbiAgICAgICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImV4YW1wbGVNb2RhbExhYmVsXCIsXG4gICAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZ1wiLCBhdHRyczogeyByb2xlOiBcImRvY3VtZW50XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlU2hpcHBpbmcoKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJDUENhcnRfY25nX3JlZlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHkgcHktNSB2bGQtcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcInN0cmVldFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5QYXltZW50Q2FydC5zdHJlZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uUGF5bWVudENhcnQuc3RyZWV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlBheW1lbnRDYXJ0LnN0cmVldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwic3RyZWV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0cmVldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5QYXltZW50Q2FydC5zdHJlZXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLlBheW1lbnRDYXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyZWV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTdHJlZXRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJzdHJlZXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52ZXJyb3JzLmZpcnN0KFwic3RyZWV0XCIpKSArIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiY2l0eVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5QYXltZW50Q2FydC5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLlBheW1lbnRDYXJ0LmNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiUGF5bWVudENhcnQuY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJjaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uUGF5bWVudENhcnQuY2l0eSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uUGF5bWVudENhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDaXR5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY2l0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJjaXR5XCIpKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJzdGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5QYXltZW50Q2FydC5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5QYXltZW50Q2FydC5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJQYXltZW50Q2FydC5zdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uUGF5bWVudENhcnQuc3RhdGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLlBheW1lbnRDYXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlN0YXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwic3RhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52ZXJyb3JzLmZpcnN0KFwic3RhdGVcIikpICsgXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJ6aXBfY29kZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5QYXltZW50Q2FydC56aXBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5QYXltZW50Q2FydC56aXBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJQYXltZW50Q2FydC56aXBfY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWR8bnVtZXJpY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZHxudW1lcmljJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcInppcCBjb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLlBheW1lbnRDYXJ0LnppcF9jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5QYXltZW50Q2FydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInppcF9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJaaXAgQ29kZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcInppcF9jb2RlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcInppcF9jb2RlXCIpKSArIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiYXBhcnRtZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLlBheW1lbnRDYXJ0LmFwYXJ0bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5QYXltZW50Q2FydC5hcGFydG1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiUGF5bWVudENhcnQuYXBhcnRtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCInJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkFwYXJ0bWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcGFydG1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uUGF5bWVudENhcnQuYXBhcnRtZW50IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5QYXltZW50Q2FydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwYXJ0bWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQXBhcnRtZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiYXBhcnRtZW50XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImFwYXJ0bWVudFwiKSkgKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS01IGNvbC1sZy00IHBheW1lbnRJY29uXCIgfSwgW1xuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgfSB9LCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcImltYWdlcy9wYXltZW50LWljb24wMS5wbmdcIiB9IH0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgfSB9LCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcImltYWdlcy9wYXltZW50LWljb24wMi5wbmdcIiB9IH0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgfSB9LCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcImltYWdlcy9wYXltZW50LWljb24wMy5wbmdcIiB9IH0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJwYXlCdG5cIiwgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiUGF5IE5vd1wiKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCBbX2MoXCJoM1wiLCBbX3ZtLl92KFwiV2V2aXN1IFNob3BwaW5nIENhcnRcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiaDJcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZSBoNFwiLCBhdHRyczogeyBpZDogXCJleGFtcGxlTW9kYWxMYWJlbFwiIH0gfSxcbiAgICAgICAgW192bS5fdihcIkNhcnQgQWRkcmVzcyBJbmZvXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcInNwYW5cIiwgeyBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0gfSwgW192bS5fdihcIsOXXCIpXSldXG4gICAgICApLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9vdGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc2Vjb25kYXJ5IG0tMlwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiQ2xvc2VcIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IG0tMlwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiQ2hhbmdlXCIpXVxuICAgICAgKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5lcnJvcm1zZ1tkYXRhLXYtMjA0ZjBmZDhdIHtcXG4gICAgY29sb3I6ICNlMzM0MmYgIWltcG9ydGFudDtcXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tvdXRfcGF5bWVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDRmMGZkOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGVja291dF9wYXltZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIwNGYwZmQ4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGVja291dF9wYXltZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIwNGYwZmQ4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2hlY2tvdXRfcGF5bWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjA0ZjBmZDgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2hlY2tvdXRfcGF5bWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NoZWNrb3V0X3BheW1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NoZWNrb3V0X3BheW1lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjA0ZjBmZDgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjIwNGYwZmQ4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjA0ZjBmZDgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjA0ZjBmZDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjA0ZjBmZDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NoZWNrb3V0X3BheW1lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwNGYwZmQ4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzIwNGYwZmQ4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9jaGVja291dF9wYXltZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tvdXRfcGF5bWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tvdXRfcGF5bWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGVja291dF9wYXltZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIwNGYwZmQ4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGVja291dF9wYXltZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDRmMGZkOCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=