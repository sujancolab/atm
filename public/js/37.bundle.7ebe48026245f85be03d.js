(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Thankyou.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Thankyou.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'thankyou',
  props: ['order'],
  data: function data() {
    return {
      order_id: ''
    };
  },
  beforeMount: function beforeMount() {
    if ((!this.order || !this.order.id || typeof this.order === 'undefined') && !this.$route.query.od) {
      this.$router.push('/account')["catch"]({});
    } else {
      this.order_id = this.$route.query.od ? this.$route.query.od : this.order.id;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Thankyou.vue?vue&type=template&id=0aa994fe&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Thankyou.vue?vue&type=template&id=0aa994fe& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "Orderconfirm-page"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("h1", [_vm._v("Thank you for your order!")]), _vm._v(" "), _c("p", [_vm._v("Confirmation number: "), _vm.order_id ? _c("span", {
    domProps: {
      textContent: _vm._s(_vm.order_id)
    }
  }) : _vm._e()]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("router-link", {
    staticClass: "mayaccount-btn",
    attrs: {
      to: "/account"
    }
  }, [_vm._v("My account")]), _vm._v(" "), _c("router-link", {
    staticClass: "backTohome",
    attrs: {
      to: "/"
    }
  }, [_vm._v("Back to homepage")])], 1)])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("p", [_vm._v("You will receive a confirmation email soon. "), _c("br"), _vm._v("You can view the order details from your account dashboard.")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/Thankyou.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/Thankyou.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Thankyou_vue_vue_type_template_id_0aa994fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Thankyou.vue?vue&type=template&id=0aa994fe& */ "./resources/js/pages/Thankyou.vue?vue&type=template&id=0aa994fe&");
/* harmony import */ var _Thankyou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Thankyou.vue?vue&type=script&lang=js& */ "./resources/js/pages/Thankyou.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Thankyou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Thankyou_vue_vue_type_template_id_0aa994fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Thankyou_vue_vue_type_template_id_0aa994fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Thankyou.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Thankyou.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Thankyou.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Thankyou.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Thankyou.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Thankyou.vue?vue&type=template&id=0aa994fe&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Thankyou.vue?vue&type=template&id=0aa994fe& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_template_id_0aa994fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Thankyou.vue?vue&type=template&id=0aa994fe& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Thankyou.vue?vue&type=template&id=0aa994fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_template_id_0aa994fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_template_id_0aa994fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1RoYW5reW91LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVGhhbmt5b3UudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9UaGFua3lvdS52dWU/MThkOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVGhhbmt5b3UudnVlPzkxMDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1RoYW5reW91LnZ1ZT8zYzFkIl0sIm5hbWVzIjpbIm5hbWUiLCJwcm9wcyIsImRhdGEiLCJvcmRlcl9pZCIsImJlZm9yZU1vdW50IiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiX3YiLCJkb21Qcm9wcyIsInRleHRDb250ZW50IiwiX3MiLCJfZSIsIl9tIiwiYXR0cnMiLCJ0byIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFnQkE7QUFBZTtFQUNmQSxnQkFEQTtFQUVBQyxnQkFGQTtFQUdBQyxJQUhBLGtCQUdBO0lBQ0E7TUFDQUM7SUFEQTtFQUdBLENBUEE7RUFRQUMsV0FSQSx5QkFRQTtJQUNBO01BQ0E7SUFDQSxDQUZBLE1BRUE7TUFDQTtJQUNBO0VBRUE7QUFmQSxHOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUEsSUFBSUMsTUFBTSxHQUFHLFNBQVNBLE1BQVQsR0FBa0I7RUFDN0IsSUFBSUMsR0FBRyxHQUFHLElBQVY7RUFBQSxJQUNFQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxFQURqQjs7RUFFQSxPQUFPQSxFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVFLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBOEMsQ0FDckRGLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUUsV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUFzQyxDQUN0Q0YsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFRSxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQWdDLENBQ2hDRixFQUFFLENBQ0EsS0FEQSxFQUVBO0lBQUVFLFdBQVcsRUFBRTtFQUFmLENBRkEsRUFHQSxDQUNFRixFQUFFLENBQUMsSUFBRCxFQUFPLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLDJCQUFQLENBQUQsQ0FBUCxDQURKLEVBRUVKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FGRixFQUdFSCxFQUFFLENBQUMsR0FBRCxFQUFNLENBQ05ELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLHVCQUFQLENBRE0sRUFFTkosR0FBRyxDQUFDSCxRQUFKLEdBQ0lJLEVBQUUsQ0FBQyxNQUFELEVBQVM7SUFDVEksUUFBUSxFQUFFO01BQUVDLFdBQVcsRUFBRU4sR0FBRyxDQUFDTyxFQUFKLENBQU9QLEdBQUcsQ0FBQ0gsUUFBWDtJQUFmO0VBREQsQ0FBVCxDQUROLEdBSUlHLEdBQUcsQ0FBQ1EsRUFBSixFQU5FLENBQU4sQ0FISixFQVdFUixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBWEYsRUFZRUosR0FBRyxDQUFDUyxFQUFKLENBQU8sQ0FBUCxDQVpGLEVBYUVULEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FiRixFQWNFSCxFQUFFLENBQ0EsYUFEQSxFQUVBO0lBQUVFLFdBQVcsRUFBRSxnQkFBZjtJQUFpQ08sS0FBSyxFQUFFO01BQUVDLEVBQUUsRUFBRTtJQUFOO0VBQXhDLENBRkEsRUFHQSxDQUFDWCxHQUFHLENBQUNJLEVBQUosQ0FBTyxZQUFQLENBQUQsQ0FIQSxDQWRKLEVBbUJFSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBbkJGLEVBb0JFSCxFQUFFLENBQ0EsYUFEQSxFQUVBO0lBQUVFLFdBQVcsRUFBRSxZQUFmO0lBQTZCTyxLQUFLLEVBQUU7TUFBRUMsRUFBRSxFQUFFO0lBQU47RUFBcEMsQ0FGQSxFQUdBLENBQUNYLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLGtCQUFQLENBQUQsQ0FIQSxDQXBCSixDQUhBLEVBNkJBLENBN0JBLENBRDhCLENBQWhDLENBRG9DLENBQXRDLENBRG1ELENBQTlDLENBQVQ7QUFxQ0QsQ0F4Q0Q7O0FBeUNBLElBQUlRLGVBQWUsR0FBRyxDQUNwQixZQUFZO0VBQ1YsSUFBSVosR0FBRyxHQUFHLElBQVY7RUFBQSxJQUNFQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxFQURqQjs7RUFFQSxPQUFPQSxFQUFFLENBQUMsR0FBRCxFQUFNLENBQ2JELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLDhDQUFQLENBRGEsRUFFYkgsRUFBRSxDQUFDLElBQUQsQ0FGVyxFQUdiRCxHQUFHLENBQUNJLEVBQUosQ0FBTyw2REFBUCxDQUhhLENBQU4sQ0FBVDtBQUtELENBVG1CLENBQXRCO0FBV0FMLE1BQU0sQ0FBQ2MsYUFBUCxHQUF1QixJQUF2Qjs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBO0FBQUE7QUFBQTtBQUF1RjtBQUMzQjtBQUNMOzs7QUFHdkQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBd0wsQ0FBZ0Isb1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBNU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzM3LmJ1bmRsZS43ZWJlNDgwMjYyNDVmODViZTAzZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cIk9yZGVyY29uZmlybS1wYWdlXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG5cdFx0XHRcdDxoMT5UaGFuayB5b3UgZm9yIHlvdXIgb3JkZXIhPC9oMT5cblx0XHRcdFx0PHA+Q29uZmlybWF0aW9uIG51bWJlcjogPHNwYW4gdi1pZj1cIm9yZGVyX2lkXCIgdi10ZXh0PVwib3JkZXJfaWRcIj48L3NwYW4+PC9wPlxuXHRcdFx0XHQ8cD5Zb3Ugd2lsbCByZWNlaXZlIGEgY29uZmlybWF0aW9uIGVtYWlsIHNvb24uIDxicj5Zb3UgY2FuIHZpZXcgdGhlIG9yZGVyIGRldGFpbHMgZnJvbSB5b3VyIGFjY291bnQgZGFzaGJvYXJkLjwvcD5cbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvYWNjb3VudFwiIGNsYXNzPVwibWF5YWNjb3VudC1idG5cIj5NeSBhY2NvdW50PC9yb3V0ZXItbGluaz5cblx0XHRcdFx0PHJvdXRlci1saW5rIHRvPVwiL1wiIGNsYXNzPVwiYmFja1RvaG9tZVwiPkJhY2sgdG8gaG9tZXBhZ2U8L3JvdXRlci1saW5rPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOid0aGFua3lvdScsXG4gICAgcHJvcHM6WydvcmRlciddLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcmRlcl9pZDonJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVNb3VudCgpIHtcbiAgICAgICAgaWYoKCF0aGlzLm9yZGVyIHx8ICF0aGlzLm9yZGVyLmlkIHx8IHR5cGVvZih0aGlzLm9yZGVyKT09PSd1bmRlZmluZWQnICkgJiYgIXRoaXMuJHJvdXRlLnF1ZXJ5Lm9kICl7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2FjY291bnQnKS5jYXRjaCh7fSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5vcmRlcl9pZD10aGlzLiRyb3V0ZS5xdWVyeS5vZD8gdGhpcy4kcm91dGUucXVlcnkub2QgOiB0aGlzLm9yZGVyLmlkXG4gICAgICAgIH1cblxuICAgIH0sXG59XG48L3NjcmlwdD5cblxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiT3JkZXJjb25maXJtLXBhZ2VcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiVGhhbmsgeW91IGZvciB5b3VyIG9yZGVyIVwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkNvbmZpcm1hdGlvbiBudW1iZXI6IFwiKSxcbiAgICAgICAgICAgICAgX3ZtLm9yZGVyX2lkXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5vcmRlcl9pZCkgfSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1heWFjY291bnQtYnRuXCIsIGF0dHJzOiB7IHRvOiBcIi9hY2NvdW50XCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiTXkgYWNjb3VudFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiYWNrVG9ob21lXCIsIGF0dHJzOiB7IHRvOiBcIi9cIiB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJCYWNrIHRvIGhvbWVwYWdlXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcIllvdSB3aWxsIHJlY2VpdmUgYSBjb25maXJtYXRpb24gZW1haWwgc29vbi4gXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIllvdSBjYW4gdmlldyB0aGUgb3JkZXIgZGV0YWlscyBmcm9tIHlvdXIgYWNjb3VudCBkYXNoYm9hcmQuXCIpLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGhhbmt5b3UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhYTk5NGZlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RoYW5reW91LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGhhbmt5b3UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxwcm9ncmFtbWluZ1xcXFx3YW1wNjRcXFxcd3d3XFxcXHVuaXRlZC1zY3JhcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwYWE5OTRmZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYWE5OTRmZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYWE5OTRmZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGhhbmt5b3UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhYTk5NGZlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBhYTk5NGZlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvVGhhbmt5b3UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaGFua3lvdS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGhhbmt5b3UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaGFua3lvdS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGFhOTk0ZmUmXCIiXSwic291cmNlUm9vdCI6IiJ9