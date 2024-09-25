(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2hlY2tvdXRfcGF5bWVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2hlY2tvdXRfcGF5bWVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2hlY2tvdXRfcGF5bWVudC52dWU/MmI2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jaGVja291dF9wYXltZW50LnZ1ZT84NDZiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NoZWNrb3V0X3BheW1lbnQudnVlPzIxNjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2hlY2tvdXRfcGF5bWVudC52dWU/NzVkYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jaGVja291dF9wYXltZW50LnZ1ZT81YzUwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NoZWNrb3V0X3BheW1lbnQudnVlPzczMDAiXSwibmFtZXMiOlsicHJvcHMiLCJuYW1lIiwiZGF0YSIsImNhcmRFcnJvcnMiLCJjYXJkQnJhbmQiLCIkY2FyZEZvcm1hdCIsInBheW1lbnRfZ2F0ZXdheSIsImRpc2NvdW50X2FtdCIsInN0cmlwZVRva2VuIiwic3RyaXBlQVBJVG9rZW4iLCJwYWdlTG9hZGVyIiwiYmVmb3JlRGVzdHJveSIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsImNhcmRCcmFuZENsYXNzIiwid2F0Y2giLCJTZXR0aW5nIiwiaGFuZGxlciIsIml0ZW1zIiwiaW1tZWRpYXRlIiwiZGVlcCIsIm4iLCJwcm9qZWN0Q2FydCIsImNyZCIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwiY3JlYXRlZCIsIm9yZGVyc3VtbWVyeWxvYWRlciIsImNvbnRhaW5lciIsImNhcnRpbmZvbG9hZGVyIiwicGF5bWVudCIsInRoZW4iLCJtb3VudGVkIiwiYmluZCIsIm1ldGhvZHMiLCJpbmNsdWRlU3RyaXBlIiwiVVJMIiwiY2FsbGJhY2siLCJkb2N1bWVudFRhZyIsImRvY3VtZW50IiwidGFnIiwib2JqZWN0Iiwic2NyaXB0VGFnIiwiY29uZmlndXJlU3RyaXBlIiwiU3RyaXBlIiwibWFwQWN0aW9ucyIsImNhbGN1bGF0ZV9jYXJ0X3RvdGFsIiwiY291cG9uX3BlcmNlbnQiLCJkaXNjb3VudF9wcmljZSIsInByZWZpbGwiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJnZXRCcmFuZENsYXNzIiwiYnJhbmQiLCJ1cGRhdGVTaGlwcGluZyIsIiQiLCJzdWJtaXRfcGF5bWVudCIsIm51bWJlciIsImN2YyIsImV4cF9tb250aCIsImV4cF95ZWFyIiwiZmRhdGEiLCJhcHBsaWVkX2NvdXBvbiIsImFwcGxpZWRTaGlwcGluZ0FkZHJlc3MiLCJhcHBsaWVkU2hpcHBpbmdDaGFyZ2UiLCJheGlvcyIsIndpbmRvdyIsInBhcmFtcyIsIm9yZGVyIiwic3RyaXBlUmVzcG9uc2VIYW5kbGVyIiwic3RhdHVzIiwicmVzcG9uc2UiLCJQYXltZW50Q2FydCIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJyZWYiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwiYWN0aXZlIiwiY29sb3IiLCJvbiIsIiRldmVudCIsIl92Iiwic3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsImV4cHJlc3Npb24iLCJ0eXBlIiwiaWQiLCJkb21Qcm9wcyIsImNoZWNrZWQiLCJfcSIsImNoYW5nZSIsIl9tIiwic3JjIiwiYWx0IiwiY2FyZF9udW1iZXIiLCJhcmciLCJwbGFjZWhvbGRlciIsImlucHV0IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiJHNldCIsInZlcnJvcnMiLCJoYXMiLCJjYXJkTnVtYmVyIiwiX3MiLCJmaXJzdCIsIl9lIiwibmFtZV9vbl9DYXJkIiwiZXhwX2RhdGUiLCJjYXJkRXhwaXJ5IiwiY3Z2IiwiY2FyZEN2YyIsImFwYXJ0bWVudCIsInN0cmVldCIsImNpdHkiLCJzdGF0ZSIsInppcF9jb2RlIiwiaHJlZiIsImNsaWNrIiwiJHJvdXRlciIsInB1c2giLCJjb3Vwb25kYXRhIiwiUHJvamVjdF90YW5zIiwibGVuZ3RoIiwiX2wiLCJpdGVtIiwiaW5kZXgiLCJrZXkiLCJzZXRfaW1hZ2UiLCJwaG90byIsImlzX3NhbXBsZSIsInNrdSIsIndpZHRoX3NpemUiLCJoZWlnaHRfc2l6ZSIsInF0eSIsIl9mIiwicHJvZHVjdF90b3RhbF9wcmljZSIsImNhcnRfcHJpY2UiLCJ1c2VyIiwiY291cG9uIiwiZGlzY291bnQiLCJjaGFyZ2UiLCJOdW1iZXIiLCJPUkRFUl9QUk9GSVQiLCJ0YWJpbmRleCIsInJvbGUiLCJlcnJvciIsImhhdmVWYWx1ZSIsInlwZSIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OytDQThNQSxvSjs7Ozs7Ozs7Ozs7O0FBQUE7QUFJZTtFQUNmQSw0RUFEQTtFQUVBQyxjQUZBO0VBR0FDLElBSEEsa0JBR0E7SUFDQTtNQUNBQyxjQURBO01BRUFDLGVBRkE7TUFHQUMsc0NBSEE7TUFJQUMseUJBSkE7TUFLQUMsZUFMQTtNQU1BQyxpQkFOQTtNQU9BQyxrQkFQQTtNQVFBQztJQVJBO0VBVUEsQ0FkQTtFQWVBQyxhQWZBLDJCQWVBO0lBQ0E7RUFDQSxDQWpCQTtFQWtCQUMsa0dBQ0FDLG1FQURBLEdBRUFBLHlFQUZBLEdBR0FBLHVJQUhBLEdBSUFBLGdGQUpBLEdBS0FBLDhFQUxBO0lBTUFDLGNBTkEsNEJBTUE7TUFDQTtJQUNBO0VBUkEsRUFsQkE7RUE0QkFDO0lBQ0FDO01BQ0FDLE9BREEsbUJBQ0FDLEtBREEsRUFDQTtRQUNBLFdBQ0E7TUFDQSxDQUpBO01BS0FDLGVBTEE7TUFNQUM7SUFOQSxDQURBO0lBU0E7TUFDQUgsT0FEQSxtQkFDQUksQ0FEQSxFQUNBO1FBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNB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QUFDVSxFQUFKLENBQU8sUUFBUCxDQUFELENBTkEsQ0FWcUUsQ0FBaEUsQ0FBVDtBQW1CRCxDQTlFbUIsQ0FBdEI7QUFnRkFYLE1BQU0sQ0FBQ2tGLGFBQVAsR0FBdUIsSUFBdkI7Ozs7Ozs7Ozs7OztBQzVqQ0EsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxpQ0FBaUMsZ0NBQWdDLGlDQUFpQyxHQUFHOztBQUU1SDs7Ozs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyx5a0JBQXFVOztBQUUzViw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRztBQUN2QztBQUNMO0FBQ3FDOzs7QUFHcEc7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsc0ZBQU07QUFDUixFQUFFLHVHQUFNO0FBQ1IsRUFBRSxnSEFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBZ00sQ0FBZ0IsNFBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcE47QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMTMuYnVuZGxlLmI0MjYyMmUzY2JhYmY4YjkwNzI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiBjbGFzcz1cInNob3BwaW5nLWNhcnQgcGF5bWVudCB2bGQtcGFyZW50XCIgcmVmPVwiQ1BfbWFpbl9yZWZcIj5cbiAgICA8bG9hZGluZyA6YWN0aXZlLnN5bmM9XCJwYWdlTG9hZGVyXCIgY29sb3I9JyMwZGMwN2YnPjwvbG9hZGluZz5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XG5cdFx0XHRcdFx0PGgyPlBheW1lbnQgU2VsZWN0aW9uPC9oMj5cblx0XHRcdFx0XHQ8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRfcGF5bWVudCgpXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicGF5bWVudC1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93IHBnVG9wIHZsZC1wYXJlbnRcIiByZWY9XCJDUENhcnRpbmZvX3JlZlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNyBjb2wtbGctOFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJhZGlvQ29tbW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRlc3QxXCIgbmFtZT1cInJhZGlvLWdyb3VwXCIgdmFsdWU9XCJTdHJpcGVcIiB2LW1vZGVsPVwicGF5bWVudF9nYXRld2F5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJ0ZXN0MVwiPkNyZWRpdCBDYXJkPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+U2FmZSBtb25leSB0cmFuc2ZlciB1c2luZyB5b3VyIGJhbmsgYWNjb3VudC4gVmlzYSwgTWFlc3RybywgRGlzY292ZXIsXG5cdFx0XHRcdFx0XHRcdFx0XHRBbWVyaWNhbiBFeHByZXNzPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNSBjb2wtbGctNCBwYXltZW50SWNvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj48aW1nIHNyYz1cImltYWdlcy9wYXltZW50LWljb24wMS5wbmdcIj48L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPjxpbWcgc3JjPVwiaW1hZ2VzL3BheW1lbnQtaWNvbjAyLnBuZ1wiPjwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+PGltZyBzcmM9XCJpbWFnZXMvcGF5bWVudC1pY29uMDMucG5nXCI+PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiBmb3JtU2VjdGlvblwiIHYtaWY9XCJwYXltZW50X2dhdGV3YXk9PSdTdHJpcGUnXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIDxsYWJlbCBjbGFzcz1cImhhdmVUb29sVGlwXCI+Q2FyZCBOdW1iZXJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29ucyBoZWxwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICA8aSA6Y2xhc3M9XCJjYXJkQnJhbmRDbGFzc1wiIHYtaWY9XCJjYXJkQnJhbmRDbGFzc1wiPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxpbWcgdi1lbHNlIHNyYz1cImltYWdlcy9jYXJkLnBuZ1wiIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdCAgICA8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjYXJkX251bWJlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cIlBheW1lbnRDYXJ0LmNhcmRfbnVtYmVyXCIgdi1jYXJkZm9ybWF0OmZvcm1hdENhcmROdW1iZXIgcGxhY2Vob2xkZXI9XCIjIyMjICMjIyMgIyMjIyAjIyMjXCIgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1hcz1cImNhcmQgbnVtYmVyZVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2NhcmRfbnVtYmVyJyl8fGNhcmRFcnJvcnMuY2FyZE51bWJlclwiIGNsYXNzPVwiZXJyb3Jtc2dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdHlwZW9mIGNhcmRFcnJvcnMuY2FyZE51bWJlciAgPT0gJ3VuZGVmaW5lZCcgPyB2ZXJyb3JzLmZpcnN0KCdjYXJkX251bWJlcicpIDogY2FyZEVycm9ycy5jYXJkTnVtYmVyIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWUgb24gQ2FyZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVfb25fQ2FyZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cIlBheW1lbnRDYXJ0Lm5hbWVfb25fQ2FyZFwiIHJlZj1cImNhcmROYW1lSW5wdXRcIiAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwibmFtZSBvbiBDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCduYW1lX29uX0NhcmQnKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj57eyB2ZXJyb3JzLmZpcnN0KCduYW1lX29uX0NhcmQnKSAgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkV4cGlyYXRpb24gRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNTS9ZWVwiIG5hbWU9XCJleHBfZGF0ZVwiIGNsYXNzPVwiZGF0ZXBpY2tlciBmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiUGF5bWVudENhcnQuZXhwX2RhdGVcIiB2LWNhcmRmb3JtYXQ6Zm9ybWF0Q2FyZEV4cGlyeSAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwiZXhwaXJ5IGRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2V4cF9kYXRlJyl8fGNhcmRFcnJvcnMuY2FyZEV4cGlyeVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdHlwZW9mIGNhcmRFcnJvcnMuY2FyZEV4cGlyeSAgPT0gJ3VuZGVmaW5lZCcgPyB2ZXJyb3JzLmZpcnN0KCdleHBfZGF0ZScpIDogY2FyZEVycm9ycy5jYXJkRXhwaXJ5IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImhhdmVUb29sVGlwXCI+Q1ZWIENvZGUgPHNwYW4gY2xhc3M9XCJpY29ucyBoZWxwXCIgdi10b29sdGlwPVwiJ0l0XFwncyB0aGUgMy1kaWdpdCBudW1iZXIgb24gdGhlIGJhY2sgb2YgdGhlIGNhcmQnXCI+PGltZyBzcmM9XCJpbWFnZXMvaGVscC5wbmdcIiBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlwiPjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwiY3Z2XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiUGF5bWVudENhcnQuY3Z2XCIgdi1jYXJkZm9ybWF0OmZvcm1hdENhcmRDVkMgcmVmPVwiY2FyZEN2dklucHV0XCIgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1hcz1cIkNWVlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdjdnYnKXx8Y2FyZEVycm9ycy5jYXJkQ3ZjXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0eXBlb2YgY2FyZEVycm9ycy5jYXJkQ3ZjICA9PSAndW5kZWZpbmVkJyA/IHZlcnJvcnMuZmlyc3QoJ2N2dicpIDogY2FyZEVycm9ycy5jYXJkQ3ZjIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjaGFuZ2UtYWRkcmVzc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQ+Q2FyZCBhZGRyZXNzPC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgdi1pZj1cIlBheW1lbnRDYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IFBheW1lbnRDYXJ0LmFwYXJ0bWVudCB9fTxicj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7eyBQYXltZW50Q2FydC5zdHJlZXQgfX08YnI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHt7IFBheW1lbnRDYXJ0LmNpdHkgfX0sIHt7IFBheW1lbnRDYXJ0LnN0YXRlIH19PGJyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt7IFBheW1lbnRDYXJ0LnppcF9jb2RlIH19XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNjYXJ0QWRkcmVzc01vZGFsXCIgY2xhc3M9XCJjaGFuZ2VBZGRyZXNzXCI+Q2hhbmdlICBBZGRyZXNzPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ3N0cmVldCcpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPnt7IHZlcnJvcnMuZmlyc3QoJ3N0cmVldCcpIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdzdGF0ZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPnt7IHZlcnJvcnMuZmlyc3QoJ3N0YXRlJykgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2NpdHknKVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj57eyB2ZXJyb3JzLmZpcnN0KCdjaXR5JykgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ3ppcF9jb2RlJylcIiBjbGFzcz1cImVycm9ybXNnXCI+e3sgdmVycm9ycy5maXJzdCgnemlwX2NvZGUnKSB9fTwvcD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdFx0XHQgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuXHRcdFx0XHRcdFx0ICAgICAgPCEtLSAgIDxkaXYgY2xhc3M9XCJwYXlwYWxHcm91cFwiPlxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBheXBhbHRvcFwiPlxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpb0NvbW1vblwiPlxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0ZXN0MlwiIG5hbWU9XCJyYWRpby1ncm91cFwiIHZhbHVlPVwiQ3J5cHRvXCIgdi1tb2RlbD1cInBheW1lbnRfZ2F0ZXdheVwiPlxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGVzdDJcIj5DcnlwdG8gQ3VycmVuY3k8L2xhYmVsPlxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGF5cGFsSWNvblwiPjxpbWcgc3JjPVwiaW1hZ2VzL2NyeXB0by5wbmdcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxwPllvdSB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gQ29pbmdhdGUgd2Vic2l0ZSB0byBjb21wbGV0ZSB5b3VyIHB1cmNoYXNlIHNlY3VyZWx5LjwvcD5cblx0XHRcdFx0XHRcdCAgICAgICAgPC9kaXY+ICAtLT5cblx0XHRcdFx0XHRcdCAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbkdyb3VwIHBheWJ0bkdyb3VwXCI+XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCJcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKHtuYW1lOiAnQ2hlY2tvdXQnLHBhcmFtczoge2NvdXBvbmRhdGE6IGFwcGxpZWRfY291cG9ufX0pXCI+QmFjayB0byBTaGlwcGluZyBJbmZvPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxkaXY+PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJwYXlCdG5cIj5QYXkgTm93PC9idXR0b24+PC9kaXY+XG5cdFx0XHRcdFx0XHQgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0ICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm9yZGVyLVN1bW1lcnkgdmxkLXBhcmVudFwiIHJlZj1cIkNQT3JkZXJzdW1tZXJ5X3JlZlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRpdGxlVG9wIHNtVGl0bGV0b3BcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+PGgzPldldmlzdSBTaG9wcGluZyBDYXJ0PC9oMz48L3NwYW4+PHNwYW4gdi1pZj1cInByb2plY3RDYXJ0ICYmIHByb2plY3RDYXJ0LlByb2plY3RfdGFuc1wiPih7e3Byb2plY3RDYXJ0LlByb2plY3RfdGFucy5sZW5ndGh9fSBJdGVtcyk8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW1Cb3R0b20gXCIgIHYtaWY9XCJwcm9qZWN0Q2FydCAmJiBwcm9qZWN0Q2FydC5Qcm9qZWN0X3RhbnNcIj5cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2hpcHBpbmctbGlzdFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgc2xHcm91cFwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwcm9qZWN0Q2FydC5Qcm9qZWN0X3RhbnNcIiA6a2V5PVwiJ2NwJytpbmRleFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC01XCI+PGZpZ3VyZT48aW1nIDpzcmM9XCJzZXRfaW1hZ2UoaXRlbS5waG90bylcIiBjbGFzcz1cImltZy1mbHVpZFwiPjwvZmlndXJlPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC03XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMz57e2l0ZW0ubmFtZX19PHNwYW4gdi1pZj1cIml0ZW0uaXNfc2FtcGxlPT0xXCI+KFNhbXBsZSk8L3NwYW4+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiaXRlbS5za3VcIj48c3Bhbj5TS1U6PC9zcGFuPjxzcGFuPnt7aXRlbS5za3V9fTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzcz1cImxpc3QtdW5zdHlsZWRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PHNwYW4+V2lkdGg6PC9zcGFuPjxzcGFuPnt7aXRlbS53aWR0aF9zaXplfX08L3NwYW4+PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgPGxpPjxzcGFuPkhlaWdodDo8L3NwYW4+PHNwYW4+e3tpdGVtLmhlaWdodF9zaXplfX08L3NwYW4+PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PHNwYW4+UXR5Ojwvc3Bhbj48c3Bhbj57e2l0ZW0ucXR5fX08L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD48c3Bhbj5QcmljZTo8L3NwYW4+PHNwYW4+e3tpdGVtLnByb2R1Y3RfdG90YWxfcHJpY2V8dG9DdXJyZW5jeX19PC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaXRlbWRldGFpbC1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzcz1cImxpc3QtdW5zdHlsZWRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT48c3Bhbj5TdWJ0b3RhbDwvc3Bhbj48c3Bhbj57eyBwcm9qZWN0Q2FydC5jYXJ0X3ByaWNlfHRvQ3VycmVuY3kgfX08L3NwYW4+PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSB2LWlmPVwidXNlciAmJiB1c2VyLnR5cGU9PSdVc2VyJyAmJiBhcHBsaWVkX2NvdXBvbiAmJiAgYXBwbGllZF9jb3Vwb24uY291cG9uXCI+PHNwYW4+RGlzY291bnQtIHt7IGFwcGxpZWRfY291cG9uLmNvdXBvbiB9fSAoe3sgYXBwbGllZF9jb3Vwb24uZGlzY291bnQgfX0lKTwvc3Bhbj48c3Bhbj4tIHt7IGRpc2NvdW50X2FtdHx0b0N1cnJlbmN5IH19PC9zcGFuPjwvbGk+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT48c3Bhbj5TaGlwcGluZzwvc3Bhbj48c3Bhbj57eyBhcHBsaWVkU2hpcHBpbmdDaGFyZ2U/IGFwcGxpZWRTaGlwcGluZ0NoYXJnZS5jaGFyZ2UgOiAwIHx0b0N1cnJlbmN5fX08L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Bhbj5UYXg8L3NwYW4+PHNwYW4+e3sgTnVtYmVyKHByb2plY3RDYXJ0LmNhcnRfcHJpY2UgICogU2V0dGluZy5PUkRFUl9QUk9GSVQgLyAxMDApIHx0b0N1cnJlbmN5fX08L3NwYW4+PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG90YWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5Ub3RhbDwvc3Bhbj48c3Bhbj57e2NhbGN1bGF0ZV9jYXJ0X3RvdGFsKHByb2plY3RDYXJ0LmNhcnRfcHJpY2UpfHRvQ3VycmVuY3l9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cImNhcnRBZGRyZXNzTW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJtb2RhbC1jb250ZW50XCIgQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlU2hpcHBpbmcoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtb2RhbC10aXRsZSBoNFwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5DYXJ0IEFkZHJlc3MgSW5mbzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSBweS01IHZsZC1wYXJlbnRcIiByZWY9XCJDUENhcnRfY25nX3JlZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IHZlcnJvcnMuaGFzKCdzdHJlZXQnKSAsJ2hhdmVWYWx1ZSc6IFBheW1lbnRDYXJ0LnN0cmVldCB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIlBheW1lbnRDYXJ0LnN0cmVldFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1hcz1cInN0cmVldFwiIG5hbWU9XCJzdHJlZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+U3RyZWV0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnc3RyZWV0JylcIiBjbGFzcz1cImVycm9ybXNnXCI+e3sgdmVycm9ycy5maXJzdCgnc3RyZWV0JykgfX0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiB2ZXJyb3JzLmhhcygnY2l0eScpICwnaGF2ZVZhbHVlJzogUGF5bWVudENhcnQuY2l0eSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHlwZT1cInRleHRcIiB2LW1vZGVsPVwiUGF5bWVudENhcnQuY2l0eVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1hcz1cImNpdHlcIiBuYW1lPVwiY2l0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5DaXR5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2l0eScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPnt7IHZlcnJvcnMuZmlyc3QoJ2NpdHknKSB9fSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IHZlcnJvcnMuaGFzKCdzdGF0ZScpICwnaGF2ZVZhbHVlJzogUGF5bWVudENhcnQuc3RhdGUgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJQYXltZW50Q2FydC5zdGF0ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1hcz1cInN0YXRlXCIgbmFtZT1cInN0YXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlN0YXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCdzdGF0ZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPnt7IHZlcnJvcnMuZmlyc3QoJ3N0YXRlJykgfX0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiB2ZXJyb3JzLmhhcygnemlwX2NvZGUnKSAsJ2hhdmVWYWx1ZSc6IFBheW1lbnRDYXJ0LnppcF9jb2RlIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiUGF5bWVudENhcnQuemlwX2NvZGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWR8bnVtZXJpYydcIiBkYXRhLXZ2LWFzPVwiemlwIGNvZGVcIiBuYW1lPVwiemlwX2NvZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+WmlwIENvZGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInZlcnJvcnMuaGFzKCd6aXBfY29kZScpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPnt7IHZlcnJvcnMuZmlyc3QoJ3ppcF9jb2RlJykgfX0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3InOiB2ZXJyb3JzLmhhcygnYXBhcnRtZW50JykgLCdoYXZlVmFsdWUnOiBQYXltZW50Q2FydC5hcGFydG1lbnQgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJQYXltZW50Q2FydC5hcGFydG1lbnRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtdmFsaWRhdGU9XCInJ1wiIGRhdGEtdnYtYXM9XCJBcGFydG1lbnRcIiBuYW1lPVwiYXBhcnRtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkFwYXJ0bWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidmVycm9ycy5oYXMoJ2FwYXJ0bWVudCcpXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPnt7IHZlcnJvcnMuZmlyc3QoJ2FwYXJ0bWVudCcpIH19IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBtLTJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLTJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNoYW5nZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuXHQ8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7XG4gICAgbWFwR2V0dGVycyxcbiAgICBtYXBBY3Rpb25zXG59IGZyb20gXCJ2dWV4XCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsnYXBwbGllZF9jb3Vwb24nLCAnYXBwbGllZFNoaXBwaW5nQWRkcmVzcycsICdhcHBsaWVkU2hpcHBpbmdDaGFyZ2UnXSxcbiAgICBuYW1lOiBcIkhlYWRlclwiLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYXJkRXJyb3JzOiB7fSxcbiAgICAgICAgICAgIGNhcmRCcmFuZDogbnVsbCxcbiAgICAgICAgICAgICRjYXJkRm9ybWF0OiBWdWUucHJvdG90eXBlLiRjYXJkRm9ybWF0LFxuICAgICAgICAgICAgcGF5bWVudF9nYXRld2F5OiAnU3RyaXBlJyxcbiAgICAgICAgICAgIGRpc2NvdW50X2FtdDogMCxcbiAgICAgICAgICAgIHN0cmlwZVRva2VuOiBudWxsLFxuICAgICAgICAgICAgc3RyaXBlQVBJVG9rZW46ICcnLFxuICAgICAgICAgICAgcGFnZUxvYWRlcjogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBmYWxzZTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoW1wiZXJyb3JzXCJdKSxcbiAgICAgICAgLi4ubWFwR2V0dGVycyhcImF1dGhcIiwgW1widXNlclwiXSksXG4gICAgICAgIC4uLm1hcEdldHRlcnMoXCJDaGVja291dFwiLCBbXCJVc2VyU2hpcHBpbmdBZGRyZXNzXCIsIFwiQ291cG9uXCIsIFwiU2hpcHBpbmdDaGFyZ2VcIiwgXCJQYXltZW50Q2FydFwiXSksXG4gICAgICAgIC4uLm1hcEdldHRlcnMoXCJjYXJ0XCIsIFtcInByb2plY3RDYXJ0XCJdKSxcbiAgICAgICAgLi4ubWFwR2V0dGVycyhcIkNvbW1vblwiLCBbXCJTZXR0aW5nXCJdKSxcbiAgICAgICAgY2FyZEJyYW5kQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCcmFuZENsYXNzKHRoaXMuY2FyZEJyYW5kKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgU2V0dGluZzoge1xuICAgICAgICAgICAgaGFuZGxlcihpdGVtcykge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHJpcGVBUElUb2tlbiA9IGl0ZW1zLlNUUklQRVBVQkxJQ0tFWVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGRlZXA6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgJ2FwcGxpZWRTaGlwcGluZ0FkZHJlc3MnOiB7XG4gICAgICAgICAgICBoYW5kbGVyKG4pIHtcbiAgICAgICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBheW1lbnRDYXJ0LnN0cmVldCA9IG4uc3RyZWV0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGF5bWVudENhcnQuY2l0eSA9IG4uY2l0eVxuICAgICAgICAgICAgICAgICAgICB0aGlzLlBheW1lbnRDYXJ0LnN0YXRlID0gbi5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLlBheW1lbnRDYXJ0LnppcF9jb2RlID0gbi56aXBfY29kZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLlBheW1lbnRDYXJ0LmFwYXJ0bWVudCA9IG4uYXBhcnRtZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgICAgICBpbW1lZGlhdGU6IHRydWUsXG4gICAgICAgIH0sXG4vKiAgICAgICAgICdQYXltZW50Q2FydCc6e1xuICAgICAgICAgICAgaGFuZGxlcihuLG8pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuLG8pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLmFwcGxpZWRTaGlwcGluZ0FkZHJlc3MsbixvKTtcbiAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXBwbGllZFNoaXBwaW5nQWRkcmVzcyAmJiB0eXBlb2YgKG8pID09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXltZW50Q2FydC5zdHJlZXQgPSB0aGlzLmFwcGxpZWRTaGlwcGluZ0FkZHJlc3Muc3RyZWV0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGF5bWVudENhcnQuY2l0eSA9IHRoaXMuYXBwbGllZFNoaXBwaW5nQWRkcmVzcy5jaXR5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGF5bWVudENhcnQuc3RhdGUgPSB0aGlzLmFwcGxpZWRTaGlwcGluZ0FkZHJlc3Muc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXltZW50Q2FydC56aXBfY29kZSA9IHRoaXMuYXBwbGllZFNoaXBwaW5nQWRkcmVzcy56aXBfY29kZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgICB9LCAqL1xuXG4gICAgICAgIHByb2plY3RDYXJ0OiB7XG4gICAgICAgICAgICBoYW5kbGVyKGNyZCkge1xuICAgICAgICAgICAgICAgIGlmIChjcmQgJiYgY3JkLlByb2plY3RfdGFucyAmJiBjcmQuUHJvamVjdF90YW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxlYXNlIEFkZCBQcm9kdWN0cyB0byBTaG9wcGluZyBDYXJ0IFRvIFBsYWNlIE9yZGVyLidcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJykuY2F0Y2goe30pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAnUGF5bWVudENhcnQuY2FyZF9udW1iZXInOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kY2FyZEZvcm1hdC52YWxpZGF0ZUNhcmROdW1iZXIodmFsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuY2FyZE5hbWVJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnUGF5bWVudENhcnQuZXhwX2RhdGUnOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kY2FyZEZvcm1hdC52YWxpZGF0ZUNhcmRFeHBpcnkodmFsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuY2FyZEN2dklucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGNyZWF0ZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5hcHBsaWVkU2hpcHBpbmdBZGRyZXNzKSB7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQbGVhc2UgQWRkIHlvdXIgU2hpcHBpbmcgQWRkcmVzcyBUbyBQbGFjZSBPcmRlci4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnQ2FydCd9KS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9yZGVyc3VtbWVyeWxvYWRlciA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XG4gICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMuQ1BPcmRlcnN1bW1lcnlfcmVmXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdldENhcnREYXRhKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3JkZXJzdW1tZXJ5bG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIG9yZGVyc3VtbWVyeWxvYWRlci5oaWRlKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGNhcnRpbmZvbG9hZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5DUENhcnRpbmZvX3JlZlxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXRTaGlwcGluZ0FkZHJlc3NEYXRhKHtcbiAgICAgICAgICAgICAgICBwYXltZW50OiAxXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYXJ0aW5mb2xvYWRlci5oaWRlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBBZGQgeW91ciBTaGlwcGluZyBBZGRyZXNzIFRvIFBsYWNlIE9yZGVyLidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ0NhcnQnfSkuY2F0Y2goKCkgPT4ge30pO1xuICAgICAgICAgICAgfSlcbiAgICB9LFxuICAgIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5jbHVkZVN0cmlwZSgnanMuc3RyaXBlLmNvbS92Mi8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyZVN0cmlwZSgpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhc3luYyBpbmNsdWRlU3RyaXBlKFVSTCwgY2FsbGJhY2spIHtcblxuICAgICAgICAgICAgbGV0IGRvY3VtZW50VGFnID0gZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgdGFnID0gJ3NjcmlwdCcsXG4gICAgICAgICAgICAgICAgb2JqZWN0ID0gZG9jdW1lbnRUYWcuY3JlYXRlRWxlbWVudCh0YWcpLFxuICAgICAgICAgICAgICAgIHNjcmlwdFRhZyA9IGRvY3VtZW50VGFnLmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZylbMF07XG4gICAgICAgICAgICBvYmplY3Quc3JjID0gJ2h0dHBzOi8vJyArIFVSTDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIG9iamVjdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgZSk7XG4gICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG9iamVjdCwgc2NyaXB0VGFnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlndXJlU3RyaXBlKCkge1xuICAgICAgICAgICAgU3RyaXBlLnNldFB1Ymxpc2hhYmxlS2V5KHRoaXMuc3RyaXBlQVBJVG9rZW4pO1xuICAgICAgICB9LFxuICAgICAgICAuLi5tYXBBY3Rpb25zKFwiY2FydFwiLCBbXCJnZXRDYXJ0RGF0YVwiXSksXG4gICAgICAgIC4uLm1hcEFjdGlvbnMoXCJDaGVja291dFwiLCBbXCJnZXRTaGlwcGluZ0FkZHJlc3NEYXRhXCIsIFwiVXBkYXRlU2hpcHBpbmdBZGRyZXNzXCJdKSxcblxuICAgICAgICBjYWxjdWxhdGVfY2FydF90b3RhbChjYXJ0X3ByaWNlID0gMCkge1xuICAgICAgICAgICAgbGV0IGNvdXBvbl9wZXJjZW50ID0gMFxuICAgICAgICAgICAgbGV0IGRpc2NvdW50X3ByaWNlID0gMFxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwbGllZF9jb3Vwb24gJiYgdGhpcy5hcHBsaWVkX2NvdXBvbi5kaXNjb3VudCAmJiAhaXNOYU4odGhpcy5hcHBsaWVkX2NvdXBvbi5kaXNjb3VudCkpIHtcbiAgICAgICAgICAgICAgICBjb3Vwb25fcGVyY2VudCA9IE51bWJlcih0aGlzLmFwcGxpZWRfY291cG9uLmRpc2NvdW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzY291bnRfcHJpY2UgPSBOdW1iZXIoY2FydF9wcmljZSAqIGNvdXBvbl9wZXJjZW50IC8gMTAwKVxuICAgICAgICAgICAgdGhpcy5kaXNjb3VudF9hbXQgPSBkaXNjb3VudF9wcmljZS50b0ZpeGVkKDIpXG4gICAgICAgICAgICBsZXQgdG90YWxwID0gTnVtYmVyKGNhcnRfcHJpY2UgLSBkaXNjb3VudF9wcmljZSk7XG4gICAgICAgICAgICBsZXQgc2hpcCA9IHRoaXMuYXBwbGllZFNoaXBwaW5nQ2hhcmdlID8gdGhpcy5hcHBsaWVkU2hpcHBpbmdDaGFyZ2UuY2hhcmdlIDogMFxuICAgICAgICAgICAgbGV0IG9yZGVycHJvZml0PSBOdW1iZXIoY2FydF9wcmljZSAgKiB0aGlzLlNldHRpbmcuT1JERVJfUFJPRklUIC8gMTAwKVxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih0b3RhbHAgKyBzaGlwICsgb3JkZXJwcm9maXQpLnRvRml4ZWQoMik7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZpbGw6IGZ1bmN0aW9uIChjY051bSkge1xuICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmNhcmRfbnVtYmVyID0gY2NOdW07XG4gICAgICAgICAgICB0aGlzLiRjYXJkRm9ybWF0LnNldENhcmRUeXBlKHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0OiB0aGlzLiRyZWZzLmNhcmROdW1JbnB1dCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogY2NOdW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRCcmFuZENsYXNzOiBmdW5jdGlvbiAoYnJhbmQpIHtcbiAgICAgICAgICAgIGxldCBpY29uID0gJyc7XG4gICAgICAgICAgICBicmFuZCA9IGJyYW5kIHx8ICd1bmtub3duJztcbiAgICAgICAgICAgIGxldCBjYXJkQnJhbmRUb0NsYXNzID0ge1xuICAgICAgICAgICAgICAgICd2aXNhJzogJ2ZhIGZhLWNjLXZpc2EnLFxuICAgICAgICAgICAgICAgICdtYXN0ZXJjYXJkJzogJ2ZhIGZhLWNjLW1hc3RlcmNhcmQnLFxuICAgICAgICAgICAgICAgICdhbWV4JzogJ2ZhIGZhLWNjLWFtZXgnLFxuICAgICAgICAgICAgICAgICdkaXNjb3Zlcic6ICdmYSBmYS1jYy1kaXNjb3ZlcicsXG4gICAgICAgICAgICAgICAgJ2RpbmVycyc6ICdmYSBmYS1jYy1kaW5lcnMtY2x1YicsXG4gICAgICAgICAgICAgICAgJ2pjYic6ICdmYSBmYS1jYy1qY2InLFxuICAgICAgICAgICAgICAgICd1bmtub3duJzogJ2ZhIGZhLWNyZWRpdC1jYXJkJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY2FyZEJyYW5kVG9DbGFzc1ticmFuZF0pIHtcbiAgICAgICAgICAgICAgICBpY29uID0gY2FyZEJyYW5kVG9DbGFzc1ticmFuZF07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGljb247XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHVwZGF0ZVNoaXBwaW5nKCkge1xuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlKCkudGhlbihhc3luYyAodmFsaWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NhcnRBZGRyZXNzTW9kYWwnKS5tb2RlbCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHN1Ym1pdF9wYXltZW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF5bWVudF9nYXRld2F5ID09IFwiU3RyaXBlXCIpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGUoKS50aGVuKCh2YWxpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEVycm9ycyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRjYXJkRm9ybWF0LnZhbGlkYXRlQ2FyZE51bWJlcih0aGlzLlBheW1lbnRDYXJ0LmNhcmRfbnVtYmVyKSAmJiB0aGlzLlBheW1lbnRDYXJ0LmNhcmRfbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkRXJyb3JzLmNhcmROdW1iZXIgPSBcIkludmFsaWQgQ2FyZCBOdW1iZXIuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRjYXJkRm9ybWF0LnZhbGlkYXRlQ2FyZEV4cGlyeSh0aGlzLlBheW1lbnRDYXJ0LmV4cF9kYXRlKSAmJiB0aGlzLlBheW1lbnRDYXJ0LmV4cF9kYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkRXJyb3JzLmNhcmRFeHBpcnkgPSBcIkludmFsaWQgRXhwaXJhdGlvbiBEYXRlLlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy4kY2FyZEZvcm1hdC52YWxpZGF0ZUNhcmRDVkModGhpcy5QYXltZW50Q2FydC5jdnYpICYmIHRoaXMuUGF5bWVudENhcnQuY3Z2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkRXJyb3JzLmNhcmRDdmMgPSBcIkludmFsaWQgQ1ZDLlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuY2FyZEVycm9ycykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4cCA9IHRoaXMuUGF5bWVudENhcnQuZXhwX2RhdGUuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpcGUuY3JlYXRlVG9rZW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI6IHRoaXMuUGF5bWVudENhcnQuY2FyZF9udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN2YzogdGhpcy5QYXltZW50Q2FydC5jdnYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cF9tb250aDogZXhwWzBdLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwX3llYXI6IGV4cFsxXS50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnN0cmlwZVJlc3BvbnNlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICBsZXQgZmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICBwYXltZW50X2dhdGV3YXk6IHRoaXMucGF5bWVudF9nYXRld2F5LFxuICAgICAgICAgICAgICAgICAgICAgYXBwbGllZF9jb3Vwb246IHRoaXMuYXBwbGllZF9jb3Vwb24sXG4gICAgICAgICAgICAgICAgICAgICBhcHBsaWVkU2hpcHBpbmdBZGRyZXNzOiB0aGlzLmFwcGxpZWRTaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICBhcHBsaWVkU2hpcHBpbmdDaGFyZ2U6IHRoaXMuYXBwbGllZFNoaXBwaW5nQ2hhcmdlXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9vcmRlcicsIGZkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGEuZGF0YSAmJiByZXMuZGF0YS5kYXRhLlBheW1lbnQgJiYgcmVzLmRhdGEuZGF0YS5QYXltZW50LnBheW1lbnRfdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGEuZGF0YS5QYXltZW50LnBheW1lbnRfdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1RoYW5reW91JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiByZXMuZGF0YS5kYXRhLm9yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIHN0cmlwZVJlc3BvbnNlSGFuZGxlcihzdGF0dXMsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRFcnJvcnMgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IucGFyYW0gPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkRXJyb3JzLmNhcmROdW1iZXIgPSByZXNwb25zZS5lcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yLnBhcmFtID09ICdleHBfeWVhcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkRXJyb3JzLmNhcmRFeHBpcnkgPSByZXNwb25zZS5lcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yLnBhcmFtID09ICdjdmMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEVycm9ycy5jYXJkQ3ZjID0gcmVzcG9uc2UuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHJlc3BvbnNlLmVycm9yLnBhcmFtKSA9PT0gJ3VuZGVmaW5lZCcgfHwgKHJlc3BvbnNlLmVycm9yLnBhcmFtICE9ICdudW1iZXInICYmIHJlc3BvbnNlLmVycm9yLnBhcmFtICE9ICdleHBfeWVhcicgJiYgcmVzcG9uc2UuZXJyb3IucGFyYW0gIT0gJ2N2YycpKSB7XG4gICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlciA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyaXBlVG9rZW4gPSByZXNwb25zZVsnaWQnXVxuICAgICAgICAgICAgICAgIGxldCBmZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaXBlVG9rZW46IHJlc3BvbnNlWydpZCddLFxuICAgICAgICAgICAgICAgICAgICBQYXltZW50Q2FydDogdGhpcy5QYXltZW50Q2FydCxcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9nYXRld2F5OiB0aGlzLnBheW1lbnRfZ2F0ZXdheSxcbiAgICAgICAgICAgICAgICAgICAgYXBwbGllZF9jb3Vwb246IHRoaXMuYXBwbGllZF9jb3Vwb24sXG4gICAgICAgICAgICAgICAgICAgIGFwcGxpZWRTaGlwcGluZ0FkZHJlc3M6IHRoaXMuYXBwbGllZFNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgYXBwbGllZFNoaXBwaW5nQ2hhcmdlOiB0aGlzLmFwcGxpZWRTaGlwcGluZ0NoYXJnZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvb3JkZXInLCBmZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdUaGFua3lvdScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiByZXMuZGF0YS5kYXRhLm9yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgfSxcbn07XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4uZXJyb3Jtc2cge1xuICAgIGNvbG9yOiAjZTMzNDJmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyByZWY6IFwiQ1BfbWFpbl9yZWZcIiwgc3RhdGljQ2xhc3M6IFwic2hvcHBpbmctY2FydCBwYXltZW50IHZsZC1wYXJlbnRcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwibG9hZGluZ1wiLCB7XG4gICAgICAgIGF0dHJzOiB7IGFjdGl2ZTogX3ZtLnBhZ2VMb2FkZXIsIGNvbG9yOiBcIiMwZGMwN2ZcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwidXBkYXRlOmFjdGl2ZVwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0ucGFnZUxvYWRlciA9ICRldmVudFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIlBheW1lbnQgU2VsZWN0aW9uXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdF9wYXltZW50KClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGF5bWVudC1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcIkNQQ2FydGluZm9fcmVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm93IHBnVG9wIHZsZC1wYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTcgY29sLWxnLThcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJhZGlvQ29tbW9uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGF5bWVudF9nYXRld2F5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBheW1lbnRfZ2F0ZXdheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ0ZXN0MVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpby1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiU3RyaXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKF92bS5wYXltZW50X2dhdGV3YXksIFwiU3RyaXBlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9nYXRld2F5ID0gXCJTdHJpcGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJ0ZXN0MVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNyZWRpdCBDYXJkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNhZmUgbW9uZXkgdHJhbnNmZXIgdXNpbmcgeW91ciBiYW5rIGFjY291bnQuIFZpc2EsIE1hZXN0cm8sIERpc2NvdmVyLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdEFtZXJpY2FuIEV4cHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9nYXRld2F5ID09IFwiU3RyaXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgZm9ybVNlY3Rpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImhhdmVUb29sVGlwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDYXJkIE51bWJlclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbnMgaGVscFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2FyZEJyYW5kQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5jYXJkQnJhbmRDbGFzcyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJpbWFnZXMvY2FyZC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5QYXltZW50Q2FydC5jYXJkX251bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiUGF5bWVudENhcnQuY2FyZF9udW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY2FyZGZvcm1hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWNhcmRmb3JtYXQ6Zm9ybWF0Q2FyZE51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImZvcm1hdENhcmROdW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY2FyZF9udW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIjIyMjICMjIyMgIyMjIyAjIyMjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiY2FyZCBudW1iZXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5QYXltZW50Q2FydC5jYXJkX251bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uUGF5bWVudENhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZF9udW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjYXJkX251bWJlclwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhcmRFcnJvcnMuY2FyZE51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBfdm0uY2FyZEVycm9ycy5jYXJkTnVtYmVyID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0udmVycm9ycy5maXJzdChcImNhcmRfbnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmNhcmRFcnJvcnMuY2FyZE51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIk5hbWUgb24gQ2FyZFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uUGF5bWVudENhcnQubmFtZV9vbl9DYXJkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlBheW1lbnRDYXJ0Lm5hbWVfb25fQ2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImNhcmROYW1lSW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVfb25fQ2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwibmFtZSBvbiBDYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5QYXltZW50Q2FydC5uYW1lX29uX0NhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLlBheW1lbnRDYXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZV9vbl9DYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJuYW1lX29uX0NhcmRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJuYW1lX29uX0NhcmRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkV4cGlyYXRpb24gRGF0ZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uUGF5bWVudENhcnQuZXhwX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiUGF5bWVudENhcnQuZXhwX2RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY2FyZGZvcm1hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtY2FyZGZvcm1hdDpmb3JtYXRDYXJkRXhwaXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJmb3JtYXRDYXJkRXhwaXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkYXRlcGlja2VyIGZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk1NL1lZXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImV4cF9kYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJleHBpcnkgZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5QYXltZW50Q2FydC5leHBfZGF0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uUGF5bWVudENhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBfZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiZXhwX2RhdGVcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhcmRFcnJvcnMuY2FyZEV4cGlyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgX3ZtLmNhcmRFcnJvcnMuY2FyZEV4cGlyeSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS52ZXJyb3JzLmZpcnN0KFwiZXhwX2RhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5jYXJkRXJyb3JzLmNhcmRFeHBpcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImhhdmVUb29sVGlwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNWViBDb2RlIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSXQncyB0aGUgMy1kaWdpdCBudW1iZXIgb24gdGhlIGJhY2sgb2YgdGhlIGNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJ0l0XFxcXCdzIHRoZSAzLWRpZ2l0IG51bWJlciBvbiB0aGUgYmFjayBvZiB0aGUgY2FyZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29ucyBoZWxwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJpbWFnZXMvaGVscC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLlBheW1lbnRDYXJ0LmN2dixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJQYXltZW50Q2FydC5jdnZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY2FyZGZvcm1hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtY2FyZGZvcm1hdDpmb3JtYXRDYXJkQ1ZDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJmb3JtYXRDYXJkQ1ZDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY2FyZEN2dklucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY3Z2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJDVlZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uUGF5bWVudENhcnQuY3Z2IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5QYXltZW50Q2FydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN2dlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY3Z2XCIpIHx8IF92bS5jYXJkRXJyb3JzLmNhcmRDdmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIF92bS5jYXJkRXJyb3JzLmNhcmRDdmMgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0udmVycm9ycy5maXJzdChcImN2dlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmNhcmRFcnJvcnMuY2FyZEN2Y1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgY2hhbmdlLWFkZHJlc3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJDYXJkIGFkZHJlc3NcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLlBheW1lbnRDYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uUGF5bWVudENhcnQuYXBhcnRtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLlBheW1lbnRDYXJ0LnN0cmVldClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uUGF5bWVudENhcnQuY2l0eSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uUGF5bWVudENhcnQuc3RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uUGF5bWVudENhcnQuemlwX2NvZGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hhbmdlQWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI2NhcnRBZGRyZXNzTW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2hhbmdlICBBZGRyZXNzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJzdHJlZXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52ZXJyb3JzLmZpcnN0KFwic3RyZWV0XCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJzdGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJzdGF0ZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY2l0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJjaXR5XCIpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcInppcF9jb2RlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcInppcF9jb2RlXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidXR0b25Hcm91cCBwYXlidG5Hcm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKTtcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDaGVja291dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBjb3Vwb25kYXRhOiBfdm0uYXBwbGllZF9jb3Vwb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkJhY2sgdG8gU2hpcHBpbmcgSW5mb1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWY6IFwiQ1BPcmRlcnN1bW1lcnlfcmVmXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3JkZXItU3VtbWVyeSB2bGQtcGFyZW50XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlVG9wIHNtVGl0bGV0b3BcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgICBfdm0ucHJvamVjdENhcnQgJiYgX3ZtLnByb2plY3RDYXJ0LlByb2plY3RfdGFuc1xuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByb2plY3RDYXJ0LlByb2plY3RfdGFucy5sZW5ndGgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBJdGVtcylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnByb2plY3RDYXJ0ICYmIF92bS5wcm9qZWN0Q2FydC5Qcm9qZWN0X3RhbnNcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW1Cb3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaGlwcGluZy1saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2plY3RDYXJ0LlByb2plY3RfdGFucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBcImNwXCIgKyBpbmRleCwgc3RhdGljQ2xhc3M6IFwicm93IHNsR3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmlndXJlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnNldF9pbWFnZShpdGVtLnBob3RvKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC03XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNfc2FtcGxlID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIihTYW1wbGUpXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2t1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJTS1U6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc2t1KSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC11bnN0eWxlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIldpZHRoOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS53aWR0aF9zaXplKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiSGVpZ2h0OlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5oZWlnaHRfc2l6ZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiUXR5OlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ucXR5KSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlByaWNlOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcInRvQ3VycmVuY3lcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJvZHVjdF90b3RhbF9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbWRldGFpbC1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LXVuc3R5bGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlN1YnRvdGFsXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcInRvQ3VycmVuY3lcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvamVjdENhcnQuY2FydF9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLnR5cGUgPT0gXCJVc2VyXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFwcGxpZWRfY291cG9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hcHBsaWVkX2NvdXBvbi5jb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRGlzY291bnQtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5hcHBsaWVkX2NvdXBvbi5jb3Vwb24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5hcHBsaWVkX2NvdXBvbi5kaXNjb3VudCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShfdm0uZGlzY291bnRfYW10KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiU2hpcHBpbmdcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hcHBsaWVkU2hpcHBpbmdDaGFyZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uYXBwbGllZFNoaXBwaW5nQ2hhcmdlLmNoYXJnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlRheFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b0N1cnJlbmN5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnByb2plY3RDYXJ0LmNhcnRfcHJpY2UgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5TZXR0aW5nLk9SREVSX1BST0ZJVCkgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG90YWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlRvdGFsXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhbGN1bGF0ZV9jYXJ0X3RvdGFsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9qZWN0Q2FydC5jYXJ0X3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbCBmYWRlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcImNhcnRBZGRyZXNzTW9kYWxcIixcbiAgICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJleGFtcGxlTW9kYWxMYWJlbFwiLFxuICAgICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1kaWFsb2dcIiwgYXR0cnM6IHsgcm9sZTogXCJkb2N1bWVudFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVNoaXBwaW5nKClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiQ1BDYXJ0X2NuZ19yZWZcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5IHB5LTUgdmxkLXBhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmVycm9ycy5oYXMoXCJzdHJlZXRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uUGF5bWVudENhcnQuc3RyZWV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLlBheW1lbnRDYXJ0LnN0cmVldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJQYXltZW50Q2FydC5zdHJlZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcInN0cmVldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzdHJlZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uUGF5bWVudENhcnQuc3RyZWV0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5QYXltZW50Q2FydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cmVldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU3RyZWV0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwic3RyZWV0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcInN0cmVldFwiKSkgKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcImNpdHlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uUGF5bWVudENhcnQuY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5QYXltZW50Q2FydC5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlBheW1lbnRDYXJ0LmNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLlBheW1lbnRDYXJ0LmNpdHkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLlBheW1lbnRDYXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2l0eVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNpdHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS52ZXJyb3JzLmZpcnN0KFwiY2l0eVwiKSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwic3RhdGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uUGF5bWVudENhcnQuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uUGF5bWVudENhcnQuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiUGF5bWVudENhcnQuc3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcInN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLlBheW1lbnRDYXJ0LnN0YXRlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5QYXltZW50Q2FydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTdGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcInN0YXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcInN0YXRlXCIpKSArIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLnZlcnJvcnMuaGFzKFwiemlwX2NvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uUGF5bWVudENhcnQuemlwX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uUGF5bWVudENhcnQuemlwX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiUGF5bWVudENhcnQuemlwX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkfG51bWVyaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWR8bnVtZXJpYydcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJ6aXAgY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ6aXBfY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5QYXltZW50Q2FydC56aXBfY29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uUGF5bWVudENhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ6aXBfY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiWmlwIENvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJ6aXBfY29kZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJ6aXBfY29kZVwiKSkgKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS52ZXJyb3JzLmhhcyhcImFwYXJ0bWVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5QYXltZW50Q2FydC5hcGFydG1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uUGF5bWVudENhcnQuYXBhcnRtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlBheW1lbnRDYXJ0LmFwYXJ0bWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJydcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJBcGFydG1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXBhcnRtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLlBheW1lbnRDYXJ0LmFwYXJ0bWVudCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uUGF5bWVudENhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcGFydG1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFwYXJ0bWVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImFwYXJ0bWVudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJhcGFydG1lbnRcIikpICsgXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tNSBjb2wtbGctNCBwYXltZW50SWNvblwiIH0sIFtcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiIH0gfSwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCJpbWFnZXMvcGF5bWVudC1pY29uMDEucG5nXCIgfSB9KSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiIH0gfSwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCJpbWFnZXMvcGF5bWVudC1pY29uMDIucG5nXCIgfSB9KSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiIH0gfSwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCJpbWFnZXMvcGF5bWVudC1pY29uMDMucG5nXCIgfSB9KSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwicGF5QnRuXCIsIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIlBheSBOb3dcIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNwYW5cIiwgW19jKFwiaDNcIiwgW192bS5fdihcIldldmlzdSBTaG9wcGluZyBDYXJ0XCIpXSldKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImgyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtdGl0bGUgaDRcIiwgYXR0cnM6IHsgaWQ6IFwiZXhhbXBsZU1vZGFsTGFiZWxcIiB9IH0sXG4gICAgICAgIFtfdm0uX3YoXCJDYXJ0IEFkZHJlc3MgSW5mb1wiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9IH0sIFtfdm0uX3YoXCLDl1wiKV0pXVxuICAgICAgKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvb3RlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNlY29uZGFyeSBtLTJcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIkNsb3NlXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBtLTJcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIkNoYW5nZVwiKV1cbiAgICAgICksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZXJyb3Jtc2dbZGF0YS12LTIwNGYwZmQ4XSB7XFxuICAgIGNvbG9yOiAjZTMzNDJmICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoZWNrb3V0X3BheW1lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjA0ZjBmZDgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tvdXRfcGF5bWVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDRmMGZkOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tvdXRfcGF5bWVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDRmMGZkOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NoZWNrb3V0X3BheW1lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwNGYwZmQ4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NoZWNrb3V0X3BheW1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaGVja291dF9wYXltZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jaGVja291dF9wYXltZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIwNGYwZmQ4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyMDRmMGZkOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIwNGYwZmQ4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIwNGYwZmQ4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIwNGYwZmQ4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jaGVja291dF9wYXltZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDRmMGZkOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMDRmMGZkOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2hlY2tvdXRfcGF5bWVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoZWNrb3V0X3BheW1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoZWNrb3V0X3BheW1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tvdXRfcGF5bWVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDRmMGZkOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tvdXRfcGF5bWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjA0ZjBmZDgmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9