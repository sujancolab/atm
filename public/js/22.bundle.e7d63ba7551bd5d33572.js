(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verifiction.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Verifiction.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Verifiction",
  components: {},
  data: function data() {
    return {
      success: null,
      error: null
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("auth", ["user"])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("auth", ["sendVerifyResendRequest"])), {}, {
    verifyResend: function verifyResend() {
      var _this = this;

      this.success = this.error = null;
      this.sendVerifyResendRequest().then(function () {
        _this.success = "A fresh verification link has been sent to your email address.";
      })["catch"](function (error) {
        _this.error = "Error sending verification link.";
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verifiction.vue?vue&type=template&id=479cd3f2&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Verifiction.vue?vue&type=template&id=479cd3f2&scoped=true& ***!
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
    staticClass: "bodyContent-form"
  }, [_c("div", {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "container text-center py-5"
  }, [_c("h2", {
    staticClass: "textGreen wow fadeInUp"
  }, [_vm._v("Verify your account")]), _vm._v(" "), _vm.user ? _c("p", [_vm._v(" Hello, " + _vm._s(_vm.user.name) + "! Registration successful, please check your inbox\n                and click confirmation link. If you did not receive the email, click  "), _c("a", {
    staticClass: "pointer",
    on: {
      click: _vm.verifyResend
    }
  }, [_vm._v(" here ")]), _vm._v("  to request another")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
  }, [_vm.success ? _c("div", {
    staticClass: "alert alert-success",
    attrs: {
      role: "alert"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.success) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.error ? _c("div", {
    staticClass: "alert alert-danger",
    attrs: {
      role: "alert"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.error) + "\n                ")]) : _vm._e()])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("h1", {
    staticClass: "title wow fadeInUp"
  }, [_vm._v("Not Verified")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/auth/Verifiction.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/auth/Verifiction.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Verifiction_vue_vue_type_template_id_479cd3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Verifiction.vue?vue&type=template&id=479cd3f2&scoped=true& */ "./resources/js/components/auth/Verifiction.vue?vue&type=template&id=479cd3f2&scoped=true&");
/* harmony import */ var _Verifiction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Verifiction.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Verifiction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Verifiction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Verifiction_vue_vue_type_template_id_479cd3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Verifiction_vue_vue_type_template_id_479cd3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "479cd3f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Verifiction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Verifiction.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/auth/Verifiction.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verifiction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Verifiction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verifiction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verifiction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/Verifiction.vue?vue&type=template&id=479cd3f2&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/auth/Verifiction.vue?vue&type=template&id=479cd3f2&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Verifiction_vue_vue_type_template_id_479cd3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Verifiction.vue?vue&type=template&id=479cd3f2&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verifiction.vue?vue&type=template&id=479cd3f2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Verifiction_vue_vue_type_template_id_479cd3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Verifiction_vue_vue_type_template_id_479cd3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYXV0aC9WZXJpZmljdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYXV0aC9WZXJpZmljdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYXV0aC9WZXJpZmljdGlvbi52dWU/NDE4YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hdXRoL1ZlcmlmaWN0aW9uLnZ1ZT81OTNkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2F1dGgvVmVyaWZpY3Rpb24udnVlPzg2MGQiXSwibmFtZXMiOlsibmFtZSIsImNvbXBvbmVudHMiLCJkYXRhIiwic3VjY2VzcyIsImVycm9yIiwiY29tcHV0ZWQiLCJtYXBHZXR0ZXJzIiwibWV0aG9kcyIsIm1hcEFjdGlvbnMiLCJ2ZXJpZnlSZXNlbmQiLCJ0aGVuIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiX20iLCJfdiIsInVzZXIiLCJfcyIsIm9uIiwiY2xpY2siLCJfZSIsImF0dHJzIiwicm9sZSIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCOEM7QUFDL0I7RUFDZkEsbUJBREE7RUFFQUMsY0FGQTtFQUtBQyxJQUxBLGtCQUtBO0lBQ0E7TUFDQUMsYUFEQTtNQUVBQztJQUZBO0VBSUEsQ0FWQTtFQVlBQyw0QkFDQUMseUVBREEsQ0FaQTtFQWdCQUMseUNBQ0FDLDRGQURBO0lBR0FDLFlBSEEsMEJBR0E7TUFBQTs7TUFDQTtNQUNBLCtCQUNBQyxJQURBLENBQ0E7UUFDQSxnQkFDQSxnRUFEQTtNQUVBLENBSkEsV0FLQTtRQUNBO01BQ0EsQ0FQQTtJQVFBO0VBYkE7QUFoQkEsRzs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtB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QWdDLENBQ3ZDRixFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVFLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBc0MsQ0FDdENGLEVBQUUsQ0FBQyxJQUFELEVBQU87SUFBRUUsV0FBVyxFQUFFO0VBQWYsQ0FBUCxFQUE4QyxDQUM5Q0gsR0FBRyxDQUFDSyxFQUFKLENBQU8sY0FBUCxDQUQ4QyxDQUE5QyxDQURvQyxDQUF0QyxDQURxQyxDQUFoQyxDQUFUO0FBT0QsQ0FYbUIsQ0FBdEI7QUFhQU4sTUFBTSxDQUFDZSxhQUFQLEdBQXVCLElBQXZCOzs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQXNHO0FBQ3ZDO0FBQ0w7OztBQUcxRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxpRkFBTTtBQUNSLEVBQUUsa0dBQU07QUFDUixFQUFFLDJHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQix1UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMjIuYnVuZGxlLmU3ZDYzYmE3NTUxYmQ1ZDMzNTcyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJib2R5Q29udGVudC1mb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlIHdvdyBmYWRlSW5VcFwiPk5vdCBWZXJpZmllZDwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciB0ZXh0LWNlbnRlciBweS01XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dEdyZWVuIHdvdyBmYWRlSW5VcFwiPlZlcmlmeSB5b3VyIGFjY291bnQ8L2gyPlxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ1c2VyXCI+IEhlbGxvLCB7eyB1c2VyLm5hbWUgfX0hIFJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsLCBwbGVhc2UgY2hlY2sgeW91ciBpbmJveFxuICAgICAgICAgICAgICAgICAgICBhbmQgY2xpY2sgY29uZmlybWF0aW9uIGxpbmsuIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgdGhlIGVtYWlsLCBjbGljayAmbmJzcDs8YSBjbGFzcz1cInBvaW50ZXJcIiBAY2xpY2s9XCJ2ZXJpZnlSZXNlbmRcIj4gaGVyZSA8L2E+ICZuYnNwO3RvIHJlcXVlc3QgYW5vdGhlcjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiIHYtaWY9XCJzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBzdWNjZXNzIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgdi1pZj1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvciB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gXG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSBcInZ1ZXhcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIlZlcmlmaWN0aW9uXCIsXG4gICAgY29tcG9uZW50czogeyBcbiAgICAgICAgXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4geyAgICAgICAgICAgICBcbiAgICAgICAgICBzdWNjZXNzOiBudWxsLFxuICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoXCJhdXRoXCIsIFtcInVzZXJcIl0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoXCJhdXRoXCIsIFtcInNlbmRWZXJpZnlSZXNlbmRSZXF1ZXN0XCJdKSxcblxuICAgIHZlcmlmeVJlc2VuZCgpIHtcbiAgICAgIHRoaXMuc3VjY2VzcyA9IHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgdGhpcy5zZW5kVmVyaWZ5UmVzZW5kUmVxdWVzdCgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPVxuICAgICAgICAgICAgXCJBIGZyZXNoIHZlcmlmaWNhdGlvbiBsaW5rIGhhcyBiZWVuIHNlbnQgdG8geW91ciBlbWFpbCBhZGRyZXNzLlwiO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBcIkVycm9yIHNlbmRpbmcgdmVyaWZpY2F0aW9uIGxpbmsuXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib2R5Q29udGVudC1mb3JtXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIHRleHQtY2VudGVyIHB5LTVcIiB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0R3JlZW4gd293IGZhZGVJblVwXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlZlcmlmeSB5b3VyIGFjY291bnRcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0udXNlclxuICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiIEhlbGxvLCBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzZXIubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgXCIhIFJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsLCBwbGVhc2UgY2hlY2sgeW91ciBpbmJveFxcbiAgICAgICAgICAgICAgICBhbmQgY2xpY2sgY29uZmlybWF0aW9uIGxpbmsuIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgdGhlIGVtYWlsLCBjbGljayDCoFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9pbnRlclwiLCBvbjogeyBjbGljazogX3ZtLnZlcmlmeVJlc2VuZCB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIiBoZXJlIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIMKgdG8gcmVxdWVzdCBhbm90aGVyXCIpLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTVcIiB9LCBbXG4gICAgICAgICAgX3ZtLnN1Y2Nlc3NcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcImFsZXJ0XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnN1Y2Nlc3MpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZXJyb3JcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCBhdHRyczogeyByb2xlOiBcImFsZXJ0XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVycm9yKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHdvdyBmYWRlSW5VcFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJOb3QgVmVyaWZpZWRcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9WZXJpZmljdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDc5Y2QzZjImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVmVyaWZpY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9WZXJpZmljdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQ3OWNkM2YyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDc5Y2QzZjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDc5Y2QzZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDc5Y2QzZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1ZlcmlmaWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzljZDNmMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NzljZDNmMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYXV0aC9WZXJpZmljdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZlcmlmaWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WZXJpZmljdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZlcmlmaWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzljZDNmMiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=