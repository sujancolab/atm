(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYXV0aC9WZXJpZmljdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYXV0aC9WZXJpZmljdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYXV0aC9WZXJpZmljdGlvbi52dWU/NDE4YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hdXRoL1ZlcmlmaWN0aW9uLnZ1ZT81OTNkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2F1dGgvVmVyaWZpY3Rpb24udnVlPzg2MGQiXSwibmFtZXMiOlsibmFtZSIsImNvbXBvbmVudHMiLCJkYXRhIiwic3VjY2VzcyIsImVycm9yIiwiY29tcHV0ZWQiLCJtYXBHZXR0ZXJzIiwibWV0aG9kcyIsIm1hcEFjdGlvbnMiLCJ2ZXJpZnlSZXNlbmQiLCJ0aGVuIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiX20iLCJfdiIsInVzZXIiLCJfcyIsIm9uIiwiY2xpY2siLCJfZSIsImF0dHJzIiwicm9sZSIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCOEM7QUFDL0I7RUFDZkEsbUJBREE7RUFFQUMsY0FGQTtFQUtBQyxJQUxBLGtCQUtBO0lBQ0E7TUFDQUMsYUFEQTtNQUVBQztJQUZBO0VBSUEsQ0FWQTtFQVlBQyw0QkFDQUMseUVBREEsQ0FaQTtFQWdCQUMseUNBQ0FDLDRGQURBO0lBR0FDLFlBSEEsMEJBR0E7TUFBQTs7TUFDQTtNQUNBLCtCQUNBQyxJQURBLENBQ0E7UUFDQSxnQkFDQSxnRUFEQTtNQUVBLENBSkEsV0FLQTtRQUNBO01BQ0EsQ0FQQTtJQVFBO0VBYkE7QUFoQkEsRzs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtB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QWdDLENBQ3ZDRixFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVFLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBc0MsQ0FDdENGLEVBQUUsQ0FBQyxJQUFELEVBQU87SUFBRUUsV0FBVyxFQUFFO0VBQWYsQ0FBUCxFQUE4QyxDQUM5Q0gsR0FBRyxDQUFDSyxFQUFKLENBQU8sY0FBUCxDQUQ4QyxDQUE5QyxDQURvQyxDQUF0QyxDQURxQyxDQUFoQyxDQUFUO0FBT0QsQ0FYbUIsQ0FBdEI7QUFhQU4sTUFBTSxDQUFDZSxhQUFQLEdBQXVCLElBQXZCOzs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQXNHO0FBQ3ZDO0FBQ0w7OztBQUcxRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxpRkFBTTtBQUNSLEVBQUUsa0dBQU07QUFDUixFQUFFLDJHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQix1UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNy5idW5kbGUuNmNhNWE0YjU4MDM4MmU5YjA2NjguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImJvZHlDb250ZW50LWZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGUgd293IGZhZGVJblVwXCI+Tm90IFZlcmlmaWVkPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHRleHQtY2VudGVyIHB5LTVcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0R3JlZW4gd293IGZhZGVJblVwXCI+VmVyaWZ5IHlvdXIgYWNjb3VudDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cInVzZXJcIj4gSGVsbG8sIHt7IHVzZXIubmFtZSB9fSEgUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsIHBsZWFzZSBjaGVjayB5b3VyIGluYm94XG4gICAgICAgICAgICAgICAgICAgIGFuZCBjbGljayBjb25maXJtYXRpb24gbGluay4gSWYgeW91IGRpZCBub3QgcmVjZWl2ZSB0aGUgZW1haWwsIGNsaWNrICZuYnNwOzxhIGNsYXNzPVwicG9pbnRlclwiIEBjbGljaz1cInZlcmlmeVJlc2VuZFwiPiBoZXJlIDwvYT4gJm5ic3A7dG8gcmVxdWVzdCBhbm90aGVyPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCIgdi1pZj1cInN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHN1Y2Nlc3MgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiB2LWlmPVwiZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVycm9yIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiBcbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tIFwidnVleFwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiVmVyaWZpY3Rpb25cIixcbiAgICBjb21wb25lbnRzOiB7IFxuICAgICAgICBcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7ICAgICAgICAgICAgIFxuICAgICAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyhcImF1dGhcIiwgW1widXNlclwiXSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcImF1dGhcIiwgW1wic2VuZFZlcmlmeVJlc2VuZFJlcXVlc3RcIl0pLFxuXG4gICAgdmVyaWZ5UmVzZW5kKCkge1xuICAgICAgdGhpcy5zdWNjZXNzID0gdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICB0aGlzLnNlbmRWZXJpZnlSZXNlbmRSZXF1ZXN0KClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3VjY2VzcyA9XG4gICAgICAgICAgICBcIkEgZnJlc2ggdmVyaWZpY2F0aW9uIGxpbmsgaGFzIGJlZW4gc2VudCB0byB5b3VyIGVtYWlsIGFkZHJlc3MuXCI7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IFwiRXJyb3Igc2VuZGluZyB2ZXJpZmljYXRpb24gbGluay5cIjtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvZHlDb250ZW50LWZvcm1cIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgdGV4dC1jZW50ZXIgcHktNVwiIH0sIFtcbiAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRHcmVlbiB3b3cgZmFkZUluVXBcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiVmVyaWZ5IHlvdXIgYWNjb3VudFwiKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS51c2VyXG4gICAgICAgICAgPyBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCIgSGVsbG8sIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXNlci5uYW1lKSArXG4gICAgICAgICAgICAgICAgICBcIiEgUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsIHBsZWFzZSBjaGVjayB5b3VyIGluYm94XFxuICAgICAgICAgICAgICAgIGFuZCBjbGljayBjb25maXJtYXRpb24gbGluay4gSWYgeW91IGRpZCBub3QgcmVjZWl2ZSB0aGUgZW1haWwsIGNsaWNrIMKgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwb2ludGVyXCIsIG9uOiB7IGNsaWNrOiBfdm0udmVyaWZ5UmVzZW5kIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIGhlcmUgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgwqB0byByZXF1ZXN0IGFub3RoZXJcIiksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtNVwiIH0sIFtcbiAgICAgICAgICBfdm0uc3VjY2Vzc1xuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwiYWxlcnRcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc3VjY2VzcykgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5lcnJvclxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIGF0dHJzOiB7IHJvbGU6IFwiYWxlcnRcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZXJyb3IpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgd293IGZhZGVJblVwXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIk5vdCBWZXJpZmllZFwiKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ZlcmlmaWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzljZDNmMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WZXJpZmljdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ZlcmlmaWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDc5Y2QzZjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxwcm9ncmFtbWluZ1xcXFx3YW1wNjRcXFxcd3d3XFxcXHVuaXRlZC1zY3JhcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NzljZDNmMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NzljZDNmMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NzljZDNmMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVmVyaWZpY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3OWNkM2YyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ3OWNkM2YyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9hdXRoL1ZlcmlmaWN0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmVyaWZpY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZlcmlmaWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmVyaWZpY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3OWNkM2YyJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==