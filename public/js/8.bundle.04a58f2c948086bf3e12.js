(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verify.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Verify.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["hash"],
  data: function data() {
    return {
      error: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.sendVerifyRequest(this.hash).then(function () {// this.$router.push("/my_account").catch(() => {});;
    })["catch"](function (error) {
      _this.error = "Error verifying email";

      if (error.status === 204) {
        _this.error = "Email is already verified";
      }
    });
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("auth", ["user"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("auth", ["sendVerifyRequest"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verify.vue?vue&type=template&id=2f4f1de5&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Verify.vue?vue&type=template&id=2f4f1de5& ***!
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

  return _c("div", {
    staticClass: "bodyContent-form"
  }, [_c("div", {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "container text-center py-5"
  }, [_vm.error ? _c("div", {
    staticClass: "alert alert-danger",
    attrs: {
      role: "alert"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.error) + "\n            ")]) : _vm._e(), _vm._v(" "), _c("h1", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.error,
      expression: "!error"
    }]
  }, [_vm._v("Please wait..")])])])]);
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
  }, [_vm._v("Verifying")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/auth/Verify.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/auth/Verify.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Verify_vue_vue_type_template_id_2f4f1de5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Verify.vue?vue&type=template&id=2f4f1de5& */ "./resources/js/components/auth/Verify.vue?vue&type=template&id=2f4f1de5&");
/* harmony import */ var _Verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Verify.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Verify_vue_vue_type_template_id_2f4f1de5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Verify_vue_vue_type_template_id_2f4f1de5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Verify.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Verify.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/auth/Verify.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Verify.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/Verify.vue?vue&type=template&id=2f4f1de5&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/auth/Verify.vue?vue&type=template&id=2f4f1de5& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_template_id_2f4f1de5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Verify.vue?vue&type=template&id=2f4f1de5& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verify.vue?vue&type=template&id=2f4f1de5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_template_id_2f4f1de5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_template_id_2f4f1de5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYXV0aC9WZXJpZnkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2F1dGgvVmVyaWZ5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hdXRoL1ZlcmlmeS52dWU/Y2Y4NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hdXRoL1ZlcmlmeS52dWU/MjQ1ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hdXRoL1ZlcmlmeS52dWU/ZmEyYiJdLCJuYW1lcyI6WyJwcm9wcyIsImRhdGEiLCJlcnJvciIsIm1vdW50ZWQiLCJ0aGVuIiwiY29tcHV0ZWQiLCJtYXBHZXR0ZXJzIiwibWV0aG9kcyIsIm1hcEFjdGlvbnMiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJfbSIsIl92IiwiYXR0cnMiLCJyb2xlIiwiX3MiLCJfZSIsImRpcmVjdGl2ZXMiLCJuYW1lIiwicmF3TmFtZSIsInZhbHVlIiwiZXhwcmVzc2lvbiIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1COEM7QUFFL0I7RUFDZkEsZUFEQTtFQUdBQyxJQUhBLGtCQUdBO0lBQ0E7TUFDQUM7SUFEQTtFQUdBLENBUEE7RUFTQUMsT0FUQSxxQkFTQTtJQUFBOztJQUNBLGtDQUNBQyxJQURBLENBQ0EsYUFDQTtJQUNBLENBSEEsV0FJQTtNQUNBOztNQUNBO1FBQ0E7TUFDQTtJQUVBLENBVkE7RUFXQSxDQXJCQTtFQXVCQUMsNEJBQ0FDLHlFQURBLENBdkJBO0VBMkJBQywyQkFDQUMsc0ZBREE7QUEzQkEsRzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBLElBQUlDLE1BQU0sR0FBRyxTQUFTQSxNQUFULEdBQWtCO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFWO0VBQUEsSUFDRUMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVUQsRUFEakI7O0VBRUEsT0FBT0EsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFRSxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQTZDLENBQ3BERixFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVFLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBc0MsQ0FDdENILEdBQUcsQ0FBQ0ksRUFBSixDQUFPLENBQVAsQ0FEc0MsRUFFdENKLEdBQUcsQ0FBQ0ssRUFBSixDQUFPLEdBQVAsQ0FGc0MsRUFHdENKLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUUsV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUF1RCxDQUN2REgsR0FBRyxDQUFDUixLQUFKLEdBQ0lTLEVBQUUsQ0FDQSxLQURBLEVBRUE7SUFBRUUsV0FBVyxFQUFFLG9CQUFmO0lBQXFDRyxLQUFLLEVBQUU7TUFBRUMsSUFBSSxFQUFFO0lBQVI7RUFBNUMsQ0FGQSxFQUdBLENBQ0VQLEdBQUcsQ0FBQ0ssRUFBSixDQUNFLHVCQUF1QkwsR0FBRyxDQUFDUSxFQUFKLENBQU9SLEdBQUcsQ0FBQ1IsS0FBWCxDQUF2QixHQUEyQyxnQkFEN0MsQ0FERixDQUhBLENBRE4sR0FVSVEsR0FBRyxDQUFDUyxFQUFKLEVBWG1ELEVBWXZEVCxHQUFHLENBQUNLLEVBQUosQ0FBTyxHQUFQLENBWnVELEVBYXZESixFQUFFLENBQ0EsSUFEQSxFQUVBO0lBQ0VTLFVBQVUsRUFBRSxDQUNWO01BQ0VDLElBQUksRUFBRSxNQURSO01BRUVDLE9BQU8sRUFBRSxRQUZYO01BR0VDLEtBQUssRUFBRSxDQUFDYixHQUFHLENBQUNSLEtBSGQ7TUFJRXNCLFVBQVUsRUFBRTtJQUpkLENBRFU7RUFEZCxDQUZBLEVBWUEsQ0FBQ2QsR0FBRyxDQUFDSyxFQUFKLENBQU8sZUFBUCxDQUFELENBWkEsQ0FicUQsQ0FBdkQsQ0FIb0MsQ0FBdEMsQ0FEa0QsQ0FBN0MsQ0FBVDtBQWtDRCxDQXJDRDs7QUFzQ0EsSUFBSVUsZUFBZSxHQUFHLENBQ3BCLFlBQVk7RUFDVixJQUFJZixHQUFHLEdBQUcsSUFBVjtFQUFBLElBQ0VDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVVELEVBRGpCOztFQUVBLE9BQU9BLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUUsV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUFnQyxDQUN2Q0YsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFRSxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQXNDLENBQ3RDRixFQUFFLENBQUMsSUFBRCxFQUFPO0lBQUVFLFdBQVcsRUFBRTtFQUFmLENBQVAsRUFBOEMsQ0FBQ0gsR0FBRyxDQUFDSyxFQUFKLENBQU8sV0FBUCxDQUFELENBQTlDLENBRG9DLENBQXRDLENBRHFDLENBQWhDLENBQVQ7QUFLRCxDQVRtQixDQUF0QjtBQVdBTixNQUFNLENBQUNpQixhQUFQLEdBQXVCLElBQXZCOzs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQXFGO0FBQzNCO0FBQ0w7OztBQUdyRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUE0TCxDQUFnQixrUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvOC5idW5kbGUuMDRhNThmMmM5NDgwODZiZjNlMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImJvZHlDb250ZW50LWZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGUgd293IGZhZGVJblVwXCI+VmVyaWZ5aW5nPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciB0ZXh0LWNlbnRlciBweS01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiIHYtaWY9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBlcnJvciB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMSB2LXNob3c9XCIhZXJyb3JcIj5QbGVhc2Ugd2FpdC4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSBcInZ1ZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wiaGFzaFwiXSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnNlbmRWZXJpZnlSZXF1ZXN0KHRoaXMuaGFzaClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAvLyB0aGlzLiRyb3V0ZXIucHVzaChcIi9teV9hY2NvdW50XCIpLmNhdGNoKCgpID0+IHt9KTs7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5lcnJvciA9IFwiRXJyb3IgdmVyaWZ5aW5nIGVtYWlsXCI7XG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDIwNCkge1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBcIkVtYWlsIGlzIGFscmVhZHkgdmVyaWZpZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoXCJhdXRoXCIsIFtcInVzZXJcIl0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoXCJhdXRoXCIsIFtcInNlbmRWZXJpZnlSZXF1ZXN0XCJdKVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib2R5Q29udGVudC1mb3JtXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIHRleHQtY2VudGVyIHB5LTVcIiB9LCBbXG4gICAgICAgIF92bS5lcnJvclxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIGF0dHJzOiB7IHJvbGU6IFwiYWxlcnRcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZXJyb3IpICsgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImgxXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5lcnJvcixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFlcnJvclwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJQbGVhc2Ugd2FpdC4uXCIpXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgd293IGZhZGVJblVwXCIgfSwgW192bS5fdihcIlZlcmlmeWluZ1wiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9WZXJpZnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmNGYxZGU1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1ZlcmlmeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ZlcmlmeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJmNGYxZGU1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJmNGYxZGU1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJmNGYxZGU1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9WZXJpZnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmNGYxZGU1JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJmNGYxZGU1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9hdXRoL1ZlcmlmeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZlcmlmeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmVyaWZ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmVyaWZ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjRmMWRlNSZcIiJdLCJzb3VyY2VSb290IjoiIn0=