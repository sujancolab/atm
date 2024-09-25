(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/common/ShopDemo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/common/ShopDemo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['fetch_showroom'],
  name: "shop-demo",
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      isLoading: false,
      profile: {
        business_logo_upload: ''
      },
      shop_benefits: [],
      benefits: '',
      business_logo: null,
      gallery_files: [],
      projects: ''
    };
  },
  watch: {
    fetch_showroom: function fetch_showroom(n) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!n) {
                  _context.next = 5;
                  break;
                }

                _this.isLoading = true;
                _context.next = 4;
                return _this.get_profile();

              case 4:
                setTimeout(function () {
                  _this.isLoading = false;
                }, 1000);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  updated: function updated() {
    this.$nextTick(function () {
      this.asign_slider();
      this.asign_projectSlider();
    });
  },
  methods: {
    get_profile: function get_profile() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                axios.get("/api/shop_profile").then(function (res) {
                  if (res.data.data) {
                    _this2.profile = res.data.data;
                    _this2.business_logo = _this2.set_image(_this2.profile.business_logo);
                    _this2.projects = res.data.data.projectsgalleries;
                    _this2.gallery_files = res.data.data.galleries;
                  }
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    asign_slider: function asign_slider() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var swiper, swiper2;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                swiper = new Swiper(".mySwiper", {
                  spaceBetween: 10,
                  slidesPerView: 3,
                  freeMode: true,
                  watchSlidesProgress: true
                });
                swiper2 = new Swiper(".mySwiper2", {
                  spaceBetween: 10,
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                  },
                  thumbs: {
                    swiper: swiper
                  }
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    asign_projectSlider: function asign_projectSlider() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var project;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                project = new Swiper("#pSlider", {
                  slidesPerView: 1,
                  spaceBetween: 30,
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                  },
                  breakpoints: {
                    640: {
                      slidesPerView: 2
                    },
                    991: {
                      slidesPerView: 3
                    }
                  }
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this3.$store.commit("setErrors", {});

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  created: function created() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  },
  filters: {},
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["errors"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/common/ShopDemo.vue?vue&type=template&id=80f93840&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/common/ShopDemo.vue?vue&type=template&id=80f93840&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.fetch_showroom ? _c("div", [_c("div", {
    ref: "testload",
    staticClass: "container pb-1 cont1080"
  }, [_vm._m(0)]), _vm._v(" "), _c("div", {
    staticClass: "shopBanner pt-0 px-2"
  }, [_c("div", {
    staticClass: "container-fluid bg-white galleryConF w-100 pt-4 vld-parent"
  }, [_c("Loading", {
    attrs: {
      active: _vm.isLoading,
      "is-full-page": false,
      color: "#0dc07f"
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.isLoading = $event;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "container cont1080"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-right mb-4"
  }, [_c("button", {
    staticClass: "btnNormal px-4",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("demo_change", false);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-close",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" Exit Demo")])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-5"
  }, [_c("div", {}, [_c("figure", [_c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: _vm.business_logo
    }
  })]), _vm._v(" "), _vm.profile.banner_title ? _c("h1", {
    domProps: {
      innerHTML: _vm._s(_vm.profile.banner_title)
    }
  }) : _vm._e(), _vm._v(" "), _vm.profile.banner_description ? _c("p", {
    domProps: {
      innerHTML: _vm._s(_vm.profile.banner_description)
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "socialIconbar"
  }, [_vm.profile.facebook_link ? _c("a", {
    staticClass: "bar",
    attrs: {
      target: "_blank",
      href: _vm.profile.facebook_link
    }
  }, [_vm._m(1), _vm._v(" "), _c("span", [_vm._v("Facebook")])]) : _vm._e(), _vm._v(" "), _vm.profile.instagram_link ? _c("a", {
    staticClass: "bar",
    attrs: {
      target: "_blank",
      href: _vm.profile.instagram_link
    }
  }, [_vm._m(2), _vm._v(" "), _c("span", [_vm._v("Instagram")])]) : _vm._e(), _vm._v(" "), _vm.profile.website_link ? _c("a", {
    staticClass: "bar",
    attrs: {
      target: "_blank",
      href: _vm.profile.website_link
    }
  }, [_vm._m(3), _vm._v(" "), _c("span", [_vm._v("Website")])]) : _vm._e()])])]), _vm._v(" "), _vm.gallery_files.length > 0 ? _c("div", {
    staticClass: "col-md-7"
  }, [_c("p", {
    staticClass: "mb-2 textBold600"
  }, [_vm._v("Main Images Gallery")]), _vm._v(" "), _c("p", {
    staticClass: "textLightGray textBold600"
  }, [_vm._v("Upload projects into the slider to see a preview")]), _vm._v(" "), _vm.gallery_files ? _c("div", {
    staticClass: "swiper mySwiper2 myShowRoomSlider",
    staticStyle: {
      overflow: "hidden"
    }
  }, [_c("div", {
    staticClass: "swiper-wrapper"
  }, _vm._l(_vm.gallery_files, function (file, index) {
    return _c("div", {
      key: _vm.ran_inx + index,
      staticClass: "swiper-slide"
    }, [_c("img", {
      staticClass: "w-100",
      attrs: {
        src: _vm.set_image(file.gallery_image)
      }
    })]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "swiper-button-next"
  }), _vm._v(" "), _c("div", {
    staticClass: "swiper-button-prev"
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row mt-4 no-gutters"
  }, [_c("div", {
    staticClass: "col-md-9"
  }, [_vm.gallery_files ? _c("div", {
    staticClass: "swiper mySwiper myShowRoomSliderThumb",
    staticStyle: {
      overflow: "hidden"
    },
    attrs: {
      thumbsSlider: ""
    }
  }, [_c("div", {
    staticClass: "swiper-wrapper"
  }, _vm._l(_vm.gallery_files, function (file, index) {
    return _c("div", {
      key: _vm.ran_inx + index,
      staticClass: "swiper-slide"
    }, [_c("img", {
      staticClass: "w-100",
      attrs: {
        src: _vm.set_image(file.gallery_image)
      }
    })]);
  }), 0)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 pl-2"
  }, [_c("div", {
    staticClass: "thumbUploader rounded6 borderGray bgGray p-2 text-center",
    on: {
      click: function click($event) {
        return _vm.$emit("demo_change", false);
      }
    }
  }, [_vm._m(4), _vm._v(" "), _c("p", {
    staticClass: "textLightGray font14 textBold600"
  }, [_vm._v("Upload More")])])])])]) : _vm._e()])]), _vm._v(" "), _vm.projects.length > 0 ? _c("div", {
    staticClass: "container mt-5"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "swiper projectSlider overflow-hidden pb-5",
    attrs: {
      id: "pSlider"
    }
  }, [_c("div", {
    staticClass: "swiper-wrapper py-3"
  }, _vm._l(_vm.projects, function (item, index) {
    return _c("div", {
      key: _vm.ran_inx + index,
      staticClass: "swiper-slide"
    }, [_c("div", {
      staticClass: "card projectCard"
    }, [_c("div", {
      staticClass: "imgWrpr",
      style: {
        backgroundImage: "url(".concat(_vm.set_image(item.image), ")")
      }
    }), _vm._v(" "), item.description || item.short_info ? _c("div", {
      staticClass: "card-body"
    }, [item.description ? _c("h3", {
      staticClass: "card-title font18"
    }, [_vm._v(_vm._s(item.description))]) : _vm._e(), _vm._v(" "), item.short_info ? _c("p", {
      staticClass: "card-text"
    }, [_vm._v(_vm._s(item.short_info))]) : _vm._e()]) : _vm._e()])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "swiper-button-next"
  }), _vm._v(" "), _c("div", {
    staticClass: "swiper-button-prev"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "thumbUploader rounded6 mx-auto borderGray bgGray p-2 text-center",
    staticStyle: {
      "max-width": "136px"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("demo_change", false);
      }
    }
  }, [_vm._m(6), _vm._v(" "), _c("p", {
    staticClass: "textLightGray font14 textBold600"
  }, [_vm._v("Upload More")])])])])]) : _vm._e(), _vm._v(" "), _vm.profile.benefits && _vm.profile.benefits.length > 0 ? _c("div", {
    staticClass: "container mt-5 pt-5"
  }, [_vm._m(7)]) : _vm._e(), _vm._v(" "), _vm.profile.benefits && _vm.profile.benefits.length > 0 ? _c("div", {
    staticClass: "container d-flex align-items-center w-100 justify-content-center checkBoxWrpr"
  }, _vm._l(_vm.profile.benefits, function (item, index) {
    return _c("div", {
      key: _vm.ran_inx + index
    }, [_c("input", {
      staticClass: "checkbox-custom",
      attrs: {
        id: "shop_benefits" + index,
        checked: "",
        type: "checkbox",
        disabled: ""
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "checkbox-custom-label",
      attrs: {
        "for": "shop_benefits" + index
      }
    }, [_vm._v(_vm._s(item.benefit))])]);
  }), 0) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), _c("br")], 1)])]) : _vm._e();
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h2", {
    staticClass: "text-center mb-5"
  }, [_vm._v("My Showroom")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("span", [_c("i", {
    staticClass: "fa fa-facebook"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("span", [_c("i", {
    staticClass: "fa fa-instagram"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("span", [_c("img", {
    attrs: {
      src: "images/website-icon.png"
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "iconWrpr d-flex justify-content-center align-items-center mx-auto"
  }, [_c("img", {
    staticClass: "camIcon img-fluid",
    attrs: {
      src: "images/dslr-camera.png"
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [_c("p", {
    staticClass: "textBold600 mb-1"
  }, [_vm._v("Project Gallery")]), _vm._v(" "), _c("p", {
    staticClass: "font14 textLightGray textBold600"
  }, [_vm._v("Upload your favorite Projects and add descriptions. They will appear as a slider.")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "iconWrpr d-flex justify-content-center align-items-center mx-auto"
  }, [_c("img", {
    staticClass: "camIcon img-fluid",
    attrs: {
      src: "images/dslr-camera.png"
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "text-center"
  }, [_c("p", {
    staticClass: "textBold600 mb-2"
  }, [_vm._v("Your Benefits")]), _vm._v(" "), _c("p", {
    staticClass: "graySemiBoldText"
  }, [_vm._v("Promote your business in your showroom")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/common/ShopDemo.vue?vue&type=style&index=0&id=80f93840&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/common/ShopDemo.vue?vue&type=style&index=0&id=80f93840&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.checkbox-custom:checked + .checkbox-custom-label[data-v-80f93840]::after{\n    top: 14px !important;\n    left: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/common/ShopDemo.vue?vue&type=style&index=0&id=80f93840&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/common/ShopDemo.vue?vue&type=style&index=0&id=80f93840&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopDemo.vue?vue&type=style&index=0&id=80f93840&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/common/ShopDemo.vue?vue&type=style&index=0&id=80f93840&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/account/common/ShopDemo.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/account/common/ShopDemo.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopDemo_vue_vue_type_template_id_80f93840_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopDemo.vue?vue&type=template&id=80f93840&scoped=true& */ "./resources/js/components/account/common/ShopDemo.vue?vue&type=template&id=80f93840&scoped=true&");
/* harmony import */ var _ShopDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopDemo.vue?vue&type=script&lang=js& */ "./resources/js/components/account/common/ShopDemo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShopDemo_vue_vue_type_style_index_0_id_80f93840_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShopDemo.vue?vue&type=style&index=0&id=80f93840&scoped=true&lang=css& */ "./resources/js/components/account/common/ShopDemo.vue?vue&type=style&index=0&id=80f93840&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShopDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopDemo_vue_vue_type_template_id_80f93840_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopDemo_vue_vue_type_template_id_80f93840_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "80f93840",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/common/ShopDemo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/account/common/ShopDemo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/account/common/ShopDemo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopDemo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/common/ShopDemo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/account/common/ShopDemo.vue?vue&type=style&index=0&id=80f93840&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/account/common/ShopDemo.vue?vue&type=style&index=0&id=80f93840&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDemo_vue_vue_type_style_index_0_id_80f93840_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopDemo.vue?vue&type=style&index=0&id=80f93840&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/common/ShopDemo.vue?vue&type=style&index=0&id=80f93840&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDemo_vue_vue_type_style_index_0_id_80f93840_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDemo_vue_vue_type_style_index_0_id_80f93840_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDemo_vue_vue_type_style_index_0_id_80f93840_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDemo_vue_vue_type_style_index_0_id_80f93840_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/account/common/ShopDemo.vue?vue&type=template&id=80f93840&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/account/common/ShopDemo.vue?vue&type=template&id=80f93840&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDemo_vue_vue_type_template_id_80f93840_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopDemo.vue?vue&type=template&id=80f93840&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/common/ShopDemo.vue?vue&type=template&id=80f93840&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDemo_vue_vue_type_template_id_80f93840_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDemo_vue_vue_type_template_id_80f93840_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9jb21tb24vU2hvcERlbW8udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjY291bnQvY29tbW9uL1Nob3BEZW1vLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L2NvbW1vbi9TaG9wRGVtby52dWU/ZjFlNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L2NvbW1vbi9TaG9wRGVtby52dWU/NTc5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L2NvbW1vbi9TaG9wRGVtby52dWU/ZGJiZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L2NvbW1vbi9TaG9wRGVtby52dWU/ODRmNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L2NvbW1vbi9TaG9wRGVtby52dWU/OTIwNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L2NvbW1vbi9TaG9wRGVtby52dWU/OWFkOCJdLCJuYW1lcyI6WyJwcm9wcyIsIm5hbWUiLCJjb21wb25lbnRzIiwiTG9hZGluZyIsImRhdGEiLCJpc0xvYWRpbmciLCJwcm9maWxlIiwiYnVzaW5lc3NfbG9nb191cGxvYWQiLCJzaG9wX2JlbmVmaXRzIiwiYmVuZWZpdHMiLCJidXNpbmVzc19sb2dvIiwiZ2FsbGVyeV9maWxlcyIsInByb2plY3RzIiwid2F0Y2giLCJmZXRjaF9zaG93cm9vbSIsIm4iLCJzZXRUaW1lb3V0IiwidXBkYXRlZCIsIm1ldGhvZHMiLCJnZXRfcHJvZmlsZSIsImF4aW9zIiwidGhlbiIsImFzaWduX3NsaWRlciIsInN3aXBlciIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJmcmVlTW9kZSIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJzd2lwZXIyIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInRodW1icyIsImFzaWduX3Byb2plY3RTbGlkZXIiLCJwcm9qZWN0IiwiYnJlYWtwb2ludHMiLCJtb3VudGVkIiwiY3JlYXRlZCIsImZpbHRlcnMiLCJjb21wdXRlZCIsIm1hcEdldHRlcnMiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwicmVmIiwic3RhdGljQ2xhc3MiLCJfbSIsIl92IiwiYXR0cnMiLCJhY3RpdmUiLCJjb2xvciIsIm9uIiwiJGV2ZW50IiwidHlwZSIsImNsaWNrIiwiJGVtaXQiLCJzcmMiLCJiYW5uZXJfdGl0bGUiLCJkb21Qcm9wcyIsImlubmVySFRNTCIsIl9zIiwiX2UiLCJiYW5uZXJfZGVzY3JpcHRpb24iLCJmYWNlYm9va19saW5rIiwidGFyZ2V0IiwiaHJlZiIsImluc3RhZ3JhbV9saW5rIiwid2Vic2l0ZV9saW5rIiwibGVuZ3RoIiwic3RhdGljU3R5bGUiLCJvdmVyZmxvdyIsIl9sIiwiZmlsZSIsImluZGV4Iiwia2V5IiwicmFuX2lueCIsInNldF9pbWFnZSIsImdhbGxlcnlfaW1hZ2UiLCJ0aHVtYnNTbGlkZXIiLCJpZCIsIml0ZW0iLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJzaG9ydF9pbmZvIiwiY2hlY2tlZCIsImRpc2FibGVkIiwiYmVuZWZpdCIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBd0lBLG9KOzs7Ozs7QUFBQTtBQUNBO0FBR0E7RUFDQUEseUJBREE7RUFFQUMsaUJBRkE7RUFHQUM7SUFDQUM7RUFEQSxDQUhBO0VBTUFDLElBTkEsa0JBTUE7SUFDQTtNQUNBQyxnQkFEQTtNQUVBQztRQUNBQztNQURBLENBRkE7TUFLQUMsaUJBTEE7TUFNQUMsWUFOQTtNQU9BQyxtQkFQQTtN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Q0FBM0MsQ0FINkMsQ0FBeEMsQ0FBVDtBQU9ELENBeEZtQixDQUF0QjtBQTBGQVAsTUFBTSxDQUFDa0QsYUFBUCxHQUF1QixJQUF2Qjs7Ozs7Ozs7Ozs7O0FDeGhCQSwyQkFBMkIsbUJBQU8sQ0FBQyx5R0FBd0Q7QUFDM0Y7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLCtFQUErRSwyQkFBMkIsY0FBYyxHQUFHOztBQUVsSjs7Ozs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyxnbUJBQXFWOztBQUUzVyw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsK0dBQTREOztBQUVqRjs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRztBQUN2QztBQUNMO0FBQ3FDOzs7QUFHNUY7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLCtGQUFNO0FBQ1IsRUFBRSx3R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBb00sQ0FBZ0Isb1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBeE47QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNC5idW5kbGUuODY2OTY1MjU2Y2VlNmIxOWYzMDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IHYtaWY9XCJmZXRjaF9zaG93cm9vbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcGItMSBjb250MTA4MFwiIHJlZj1cInRlc3Rsb2FkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtYi01XCI+TXkgU2hvd3Jvb208L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzaG9wQmFubmVyIHB0LTAgcHgtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIGJnLXdoaXRlIGdhbGxlcnlDb25GIHctMTAwIHB0LTQgdmxkLXBhcmVudFwiPlxuICAgICAgICAgICAgPExvYWRpbmcgOmFjdGl2ZS5zeW5jPVwiaXNMb2FkaW5nXCIgOmlzLWZ1bGwtcGFnZT1cImZhbHNlXCIgY29sb3I9XCIjMGRjMDdmXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgY29udDEwODBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1yaWdodCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuTm9ybWFsIHB4LTRcIiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwiJGVtaXQoJ2RlbW9fY2hhbmdlJywgZmFsc2UpXCI+PGlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtY2xvc2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEV4aXQgRGVtbzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImJ1c2luZXNzX2xvZ29cIiBjbGFzcz1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHYtaWY9XCJwcm9maWxlLmJhbm5lcl90aXRsZVwiIHYtaHRtbD1cInByb2ZpbGUuYmFubmVyX3RpdGxlXCI+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwicHJvZmlsZS5iYW5uZXJfZGVzY3JpcHRpb25cIiB2LWh0bWw9XCJwcm9maWxlLmJhbm5lcl9kZXNjcmlwdGlvblwiPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29jaWFsSWNvbmJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImJhclwiIHYtaWY9XCJwcm9maWxlLmZhY2Vib29rX2xpbmtcIiA6aHJlZj1cInByb2ZpbGUuZmFjZWJvb2tfbGlua1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiZmEgZmEtZmFjZWJvb2tcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RmFjZWJvb2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gIDxzcGFuPnt7cHJvZmlsZS5mYWNlYm9va19saW5rfX08L3NwYW4+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYmFyXCIgdi1pZj1cInByb2ZpbGUuaW5zdGFncmFtX2xpbmtcIiA6aHJlZj1cInByb2ZpbGUuaW5zdGFncmFtX2xpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiZmEgZmEtaW5zdGFncmFtXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkluc3RhZ3JhbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgPHNwYW4+e3twcm9maWxlLmluc3RhZ3JhbV9saW5rfX08L3NwYW4+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYmFyXCIgdi1pZj1cInByb2ZpbGUud2Vic2l0ZV9saW5rXCIgOmhyZWY9XCJwcm9maWxlLndlYnNpdGVfbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGltZyBzcmM9XCJpbWFnZXMvd2Vic2l0ZS1pY29uLnBuZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldlYnNpdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxzcGFuPnt7cHJvZmlsZS53ZWJzaXRlX2xpbmt9fTwvc3Bhbj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCIgdi1pZj1cImdhbGxlcnlfZmlsZXMubGVuZ3RoPjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMiB0ZXh0Qm9sZDYwMFwiPk1haW4gSW1hZ2VzIEdhbGxlcnk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHRMaWdodEdyYXkgdGV4dEJvbGQ2MDBcIj5VcGxvYWQgcHJvamVjdHMgaW50byB0aGUgc2xpZGVyIHRvIHNlZSBhIHByZXZpZXc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyIG15U3dpcGVyMiBteVNob3dSb29tU2xpZGVyXCIgIHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlbjtcIiB2LWlmPVwiZ2FsbGVyeV9maWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2lwZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlXCIgdi1mb3I9XCIoZmlsZSwgaW5kZXgpIGluIGdhbGxlcnlfZmlsZXNcIiA6a2V5PVwicmFuX2lueCtpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwic2V0X2ltYWdlKGZpbGUuZ2FsbGVyeV9pbWFnZSlcIiBjbGFzcz1cInctMTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3aXBlci1idXR0b24tbmV4dFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2lwZXItYnV0dG9uLXByZXZcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC00IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0aHVtYnNTbGlkZXI9XCJcIiBjbGFzcz1cInN3aXBlciBteVN3aXBlciBteVNob3dSb29tU2xpZGVyVGh1bWJcIiBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW47XCIgIHYtaWY9XCJnYWxsZXJ5X2ZpbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlXCIgIHYtZm9yPVwiKGZpbGUsIGluZGV4KSBpbiBnYWxsZXJ5X2ZpbGVzXCIgOmtleT1cInJhbl9pbngraW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwic2V0X2ltYWdlKGZpbGUuZ2FsbGVyeV9pbWFnZSlcIiBjbGFzcz1cInctMTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgcGwtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGh1bWJVcGxvYWRlciByb3VuZGVkNiBib3JkZXJHcmF5IGJnR3JheSBwLTIgdGV4dC1jZW50ZXJcIiBAY2xpY2s9XCIkZW1pdCgnZGVtb19jaGFuZ2UnLCBmYWxzZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uV3JwciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2RzbHItY2FtZXJhLnBuZ1wiIGNsYXNzPVwiY2FtSWNvbiBpbWctZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0TGlnaHRHcmF5IGZvbnQxNCB0ZXh0Qm9sZDYwMFwiPlVwbG9hZCBNb3JlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC01XCIgdi1pZj1cInByb2plY3RzLmxlbmd0aD4wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHRCb2xkNjAwIG1iLTFcIj5Qcm9qZWN0IEdhbGxlcnk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQxNCB0ZXh0TGlnaHRHcmF5IHRleHRCb2xkNjAwXCI+VXBsb2FkIHlvdXIgZmF2b3JpdGUgUHJvamVjdHMgYW5kIGFkZCBkZXNjcmlwdGlvbnMuIFRoZXkgd2lsbCBhcHBlYXIgYXMgYSBzbGlkZXIuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyIHByb2plY3RTbGlkZXIgb3ZlcmZsb3ctaGlkZGVuIHBiLTVcIiBpZD1cInBTbGlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLXdyYXBwZXIgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHByb2plY3RzXCIgOmtleT1cInJhbl9pbngraW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHByb2plY3RDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZ1dycHJcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3NldF9pbWFnZShpdGVtLmltYWdlKX0pYCB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiIHYtaWY9XCJpdGVtLmRlc2NyaXB0aW9uIHx8IGl0ZW0uc2hvcnRfaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIGZvbnQxOFwiIHYtaWY9XCJpdGVtLmRlc2NyaXB0aW9uXCI+e3tpdGVtLmRlc2NyaXB0aW9ufX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiIHYtaWY9XCJpdGVtLnNob3J0X2luZm9cIj57e2l0ZW0uc2hvcnRfaW5mb319PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2lwZXItYnV0dG9uLW5leHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLWJ1dHRvbi1wcmV2XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHVtYlVwbG9hZGVyIHJvdW5kZWQ2IG14LWF1dG8gYm9yZGVyR3JheSBiZ0dyYXkgcC0yIHRleHQtY2VudGVyXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEzNnB4O1wiIEBjbGljaz1cIiRlbWl0KCdkZW1vX2NoYW5nZScsIGZhbHNlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uV3JwciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9kc2xyLWNhbWVyYS5wbmdcIiBjbGFzcz1cImNhbUljb24gaW1nLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0TGlnaHRHcmF5IGZvbnQxNCB0ZXh0Qm9sZDYwMFwiPlVwbG9hZCBNb3JlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG10LTUgcHQtNVwiIHYtaWY9XCJwcm9maWxlLmJlbmVmaXRzICYmIHByb2ZpbGUuYmVuZWZpdHMubGVuZ3RoPjBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0Qm9sZDYwMCBtYi0yXCI+WW91ciBCZW5lZml0czwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJncmF5U2VtaUJvbGRUZXh0XCI+UHJvbW90ZSB5b3VyIGJ1c2luZXNzIGluIHlvdXIgc2hvd3Jvb208L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGNoZWNrQm94V3JwclwiIHYtaWY9XCJwcm9maWxlLmJlbmVmaXRzICYmIHByb2ZpbGUuYmVuZWZpdHMubGVuZ3RoPjBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwcm9maWxlLmJlbmVmaXRzXCIgOmtleT1cInJhbl9pbngraW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IDppZD1cIidzaG9wX2JlbmVmaXRzJytpbmRleFwiIGNsYXNzPVwiY2hlY2tib3gtY3VzdG9tXCIgY2hlY2tlZCB0eXBlPVwiY2hlY2tib3hcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCInc2hvcF9iZW5lZml0cycraW5kZXhcIiBjbGFzcz1cImNoZWNrYm94LWN1c3RvbS1sYWJlbFwiPnt7aXRlbS5iZW5lZml0fX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTG9hZGluZyBmcm9tICd2dWUtbG9hZGluZy1vdmVybGF5JzsgICBcbiAgICBpbXBvcnQge1xuICAgICAgICBtYXBHZXR0ZXJzXG4gICAgfSBmcm9tIFwidnVleFwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IFsnZmV0Y2hfc2hvd3Jvb20nXSxcbiAgICAgICAgbmFtZTogXCJzaG9wLWRlbW9cIixcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgTG9hZGluZywgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcbiAgICAgICAgICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJ1c2luZXNzX2xvZ29fdXBsb2FkOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvcF9iZW5lZml0czogW10sXG4gICAgICAgICAgICAgICAgYmVuZWZpdHM6ICcnLFxuICAgICAgICAgICAgICAgIGJ1c2luZXNzX2xvZ286IG51bGwsXG4gICAgICAgICAgICAgICAgZ2FsbGVyeV9maWxlczogW10sXG4gICAgICAgICAgICAgICAgcHJvamVjdHM6ICcnXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBhc3luYyBmZXRjaF9zaG93cm9vbShuKSB7XG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmc9dHJ1ZVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldF9wcm9maWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nPWZhbHNlXG4gICAgICAgICAgICAgICAgfSwgMTAwMCkgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlZDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzaWduX3NsaWRlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXNpZ25fcHJvamVjdFNsaWRlcigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgYXN5bmMgZ2V0X3Byb2ZpbGUoKSB7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9zaG9wX3Byb2ZpbGVcIilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGUgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVzaW5lc3NfbG9nbyA9IHRoaXMuc2V0X2ltYWdlKHRoaXMucHJvZmlsZS5idXNpbmVzc19sb2dvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSByZXMuZGF0YS5kYXRhLnByb2plY3RzZ2FsbGVyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYWxsZXJ5X2ZpbGVzID0gcmVzLmRhdGEuZGF0YS5nYWxsZXJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG5cbiAgICAgICAgICAgIGFzeW5jIGFzaWduX3NsaWRlcigpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICAgICAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHZhciBzd2lwZXIyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlcjJcIiwge1xuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aHVtYnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzd2lwZXI6IHN3aXBlcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYXN5bmMgYXNpZ25fcHJvamVjdFNsaWRlcigpe1xuICAgICAgICAgICAgICB2YXIgcHJvamVjdCA9IG5ldyBTd2lwZXIoXCIjcFNsaWRlclwiLCB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgIDY0MDoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIDk5MToge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG5cblxuXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJzZXRFcnJvcnNcIiwge30pO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBjcmVhdGVkKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcnM6IHtcblxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyhbXCJlcnJvcnNcIl0pLFxuICAgICAgICB9LFxuXG4gICAgfVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuICAgIC5jaGVja2JveC1jdXN0b206Y2hlY2tlZCArIC5jaGVja2JveC1jdXN0b20tbGFiZWw6OmFmdGVye1xuICAgICAgICB0b3A6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfdm0uZmV0Y2hfc2hvd3Jvb21cbiAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyByZWY6IFwidGVzdGxvYWRcIiwgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIHBiLTEgY29udDEwODBcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaG9wQmFubmVyIHB0LTAgcHgtMlwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiY29udGFpbmVyLWZsdWlkIGJnLXdoaXRlIGdhbGxlcnlDb25GIHctMTAwIHB0LTQgdmxkLXBhcmVudFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMb2FkaW5nXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgXCJpcy1mdWxsLXBhZ2VcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMGRjMDdmXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6YWN0aXZlXCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmlzTG9hZGluZyA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgY29udDEwODBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMiB0ZXh0LXJpZ2h0IG1iLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuTm9ybWFsIHB4LTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImRlbW9fY2hhbmdlXCIsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEV4aXQgRGVtb1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge30sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImZpZ3VyZVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5idXNpbmVzc19sb2dvIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlLmJhbm5lcl90aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImgxXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnByb2ZpbGUuYmFubmVyX3RpdGxlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlLmJhbm5lcl9kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0ucHJvZmlsZS5iYW5uZXJfZGVzY3JpcHRpb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzb2NpYWxJY29uYmFyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGUuZmFjZWJvb2tfbGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0ucHJvZmlsZS5mYWNlYm9va19saW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkZhY2Vib29rXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlLmluc3RhZ3JhbV9saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5wcm9maWxlLmluc3RhZ3JhbV9saW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkluc3RhZ3JhbVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZS53ZWJzaXRlX2xpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLnByb2ZpbGUud2Vic2l0ZV9saW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIldlYnNpdGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmdhbGxlcnlfZmlsZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0yIHRleHRCb2xkNjAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNYWluIEltYWdlcyBHYWxsZXJ5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dExpZ2h0R3JheSB0ZXh0Qm9sZDYwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVXBsb2FkIHByb2plY3RzIGludG8gdGhlIHNsaWRlciB0byBzZWUgYSBwcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nYWxsZXJ5X2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN3aXBlciBteVN3aXBlcjIgbXlTaG93Um9vbVNsaWRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInN3aXBlci13cmFwcGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2FsbGVyeV9maWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmaWxlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IF92bS5yYW5faW54ICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzd2lwZXItc2xpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5zZXRfaW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmdhbGxlcnlfaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTQgbm8tZ3V0dGVyc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2FsbGVyeV9maWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN3aXBlciBteVN3aXBlciBteVNob3dSb29tU2xpZGVyVGh1bWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG92ZXJmbG93OiBcImhpZGRlblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aHVtYnNTbGlkZXI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInN3aXBlci13cmFwcGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nYWxsZXJ5X2ZpbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmaWxlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBfdm0ucmFuX2lueCArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN3aXBlci1zbGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnNldF9pbWFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmdhbGxlcnlfaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBwbC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYlVwbG9hZGVyIHJvdW5kZWQ2IGJvcmRlckdyYXkgYmdHcmF5IHAtMiB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiZGVtb19jaGFuZ2VcIiwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dExpZ2h0R3JheSBmb250MTQgdGV4dEJvbGQ2MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJVcGxvYWQgTW9yZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ucHJvamVjdHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDUpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN3aXBlciBwcm9qZWN0U2xpZGVyIG92ZXJmbG93LWhpZGRlbiBwYi01XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwicFNsaWRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInN3aXBlci13cmFwcGVyIHB5LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wcm9qZWN0cywgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogX3ZtLnJhbl9pbnggKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN3aXBlci1zbGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBwcm9qZWN0Q2FyZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWdXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtfdm0uc2V0X2ltYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRlc2NyaXB0aW9uIHx8IGl0ZW0uc2hvcnRfaW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImgzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZC10aXRsZSBmb250MThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNob3J0X2luZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2hvcnRfaW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3dpcGVyLWJ1dHRvbi1uZXh0XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN3aXBlci1idXR0b24tcHJldlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYlVwbG9hZGVyIHJvdW5kZWQ2IG14LWF1dG8gYm9yZGVyR3JheSBiZ0dyYXkgcC0yIHRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCIxMzZweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJkZW1vX2NoYW5nZVwiLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSg2KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHRMaWdodEdyYXkgZm9udDE0IHRleHRCb2xkNjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlVwbG9hZCBNb3JlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ucHJvZmlsZS5iZW5lZml0cyAmJiBfdm0ucHJvZmlsZS5iZW5lZml0cy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBtdC01IHB0LTVcIiB9LCBbX3ZtLl9tKDcpXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ucHJvZmlsZS5iZW5lZml0cyAmJiBfdm0ucHJvZmlsZS5iZW5lZml0cy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250YWluZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGNoZWNrQm94V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnByb2ZpbGUuYmVuZWZpdHMsIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogX3ZtLnJhbl9pbnggKyBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3gtY3VzdG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwic2hvcF9iZW5lZml0c1wiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3gtY3VzdG9tLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcInNob3BfYmVuZWZpdHNcIiArIGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uYmVuZWZpdCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXSlcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbWItNVwiIH0sIFtfdm0uX3YoXCJNeSBTaG93cm9vbVwiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1mYWNlYm9va1wiIH0pXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1pbnN0YWdyYW1cIiB9KV0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCBbXG4gICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCJpbWFnZXMvd2Vic2l0ZS1pY29uLnBuZ1wiIH0gfSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcImljb25XcnByIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBteC1hdXRvXCIsXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FtSWNvbiBpbWctZmx1aWRcIixcbiAgICAgICAgICBhdHRyczogeyBzcmM6IFwiaW1hZ2VzL2RzbHItY2FtZXJhLnBuZ1wiIH0sXG4gICAgICAgIH0pLFxuICAgICAgXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMiB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dEJvbGQ2MDAgbWItMVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJQcm9qZWN0IEdhbGxlcnlcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJmb250MTQgdGV4dExpZ2h0R3JheSB0ZXh0Qm9sZDYwMFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlVwbG9hZCB5b3VyIGZhdm9yaXRlIFByb2plY3RzIGFuZCBhZGQgZGVzY3JpcHRpb25zLiBUaGV5IHdpbGwgYXBwZWFyIGFzIGEgc2xpZGVyLlwiXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwiaWNvbldycHIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIG14LWF1dG9cIixcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYW1JY29uIGltZy1mbHVpZFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJpbWFnZXMvZHNsci1jYW1lcmEucG5nXCIgfSxcbiAgICAgICAgfSksXG4gICAgICBdXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dEJvbGQ2MDAgbWItMlwiIH0sIFtfdm0uX3YoXCJZb3VyIEJlbmVmaXRzXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JheVNlbWlCb2xkVGV4dFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiUHJvbW90ZSB5b3VyIGJ1c2luZXNzIGluIHlvdXIgc2hvd3Jvb21cIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jaGVja2JveC1jdXN0b206Y2hlY2tlZCArIC5jaGVja2JveC1jdXN0b20tbGFiZWxbZGF0YS12LTgwZjkzODQwXTo6YWZ0ZXJ7XFxuICAgIHRvcDogMTRweCAhaW1wb3J0YW50O1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3BEZW1vLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgwZjkzODQwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3BEZW1vLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgwZjkzODQwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG9wRGVtby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MGY5Mzg0MCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Nob3BEZW1vLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MGY5Mzg0MCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaG9wRGVtby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nob3BEZW1vLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9TaG9wRGVtby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MGY5Mzg0MCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiODBmOTM4NDBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxwcm9ncmFtbWluZ1xcXFx3YW1wNjRcXFxcd3d3XFxcXHVuaXRlZC1zY3JhcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4MGY5Mzg0MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4MGY5Mzg0MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4MGY5Mzg0MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2hvcERlbW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwZjkzODQwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzgwZjkzODQwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY2NvdW50L2NvbW1vbi9TaG9wRGVtby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3BEZW1vLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG9wRGVtby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG9wRGVtby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MGY5Mzg0MCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvcERlbW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwZjkzODQwJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==