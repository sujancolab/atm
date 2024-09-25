(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forgot_password.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forgot_password.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Forgot_password",
  components: {},
  data: function data() {
    return {
      form: new Form({
        password_confirmation: '',
        password: '',
        token: this.$route.query.token,
        email: this.$route.query.email
      })
    };
  },
  methods: {
    updatePassword: function updatePassword() {
      var _this = this;

      this.form.post('/api/password/reset').then(function (response) {
        if (response.data.success == true) {
          if ($cookies.isKey('anch_remember_me')) {
            if (_this.form.email == $cookies.get('anch_log_email')) _this.$cookies.set("anch_log_pass", _this.form.password, "340d");
          }

          _this.$router.push('/login')["catch"](function () {});

          ;
        }

        Toast.fire({
          icon: 'success',
          title: response.data.message
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    staticClass: "container-fluid stepsBar"
  }, [_c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("h2", {
    staticClass: "mb-4"
  }, [_vm._v("Reset Password")]), _vm._v(" "), _c("form", {
    staticClass: "userFormWrpr text-left mx-auto my-5",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updatePassword.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("email"),
      haveValue: _vm.form.email
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email,
      expression: "form.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email",
      name: "email",
      disabled: ""
    },
    domProps: {
      value: _vm.form.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Email")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "email"
    }
  })], 1), _vm._v(" "), _c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("password"),
      haveValue: _vm.form.password
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password,
      expression: "form.password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.form.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Password")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "password"
    }
  })], 1), _vm._v(" "), _c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("password_confirmation"),
      haveValue: _vm.form.password_confirmation
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password_confirmation,
      expression: "form.password_confirmation"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.form.password_confirmation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "password_confirmation", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Confirm New Password")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "password_confirmation"
    }
  })], 1), _vm._v(" "), _vm._m(0)])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "form-group text-center mt-4"
  }, [_c("input", {
    staticClass: "btn btnSubmit",
    attrs: {
      type: "submit",
      value: "UPDATE"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Forgot_password.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Forgot_password.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Forgot_password_vue_vue_type_template_id_7cfbf91c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true& */ "./resources/js/components/Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true&");
/* harmony import */ var _Forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forgot_password.vue?vue&type=script&lang=js& */ "./resources/js/components/Forgot_password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Forgot_password_vue_vue_type_template_id_7cfbf91c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Forgot_password_vue_vue_type_template_id_7cfbf91c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7cfbf91c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forgot_password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forgot_password.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Forgot_password.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Forgot_password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forgot_password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_password_vue_vue_type_template_id_7cfbf91c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forgot_password.vue?vue&type=template&id=7cfbf91c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_password_vue_vue_type_template_id_7cfbf91c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_password_vue_vue_type_template_id_7cfbf91c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRm9yZ290X3Bhc3N3b3JkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Gb3Jnb3RfcGFzc3dvcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZvcmdvdF9wYXNzd29yZC52dWU/YjE2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Gb3Jnb3RfcGFzc3dvcmQudnVlPzEwYjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRm9yZ290X3Bhc3N3b3JkLnZ1ZT9lZWJiIl0sIm5hbWVzIjpbIm5hbWUiLCJjb21wb25lbnRzIiwiZGF0YSIsImZvcm0iLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJwYXNzd29yZCIsInRva2VuIiwiZW1haWwiLCJtZXRob2RzIiwidXBkYXRlUGFzc3dvcmQiLCJ0aGVuIiwiVG9hc3QiLCJpY29uIiwidGl0bGUiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJfdiIsIm9uIiwic3VibWl0IiwiJGV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhcHBseSIsImFyZ3VtZW50cyIsImtleWRvd24iLCJvbktleWRvd24iLCJlcnJvciIsImVycm9ycyIsImhhcyIsImhhdmVWYWx1ZSIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwidmFsdWUiLCJleHByZXNzaW9uIiwiYXR0cnMiLCJ0eXBlIiwiZGlzYWJsZWQiLCJkb21Qcm9wcyIsImlucHV0IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiJHNldCIsImZpZWxkIiwiX20iLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBdUNBO0FBQWU7RUFDZkEsdUJBREE7RUFFQUMsY0FGQTtFQUtBQyxJQUxBLGtCQUtBO0lBQ0E7TUFDQUM7UUFD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N0IsR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQTlIRixFQStIRUosR0FBRyxDQUFDOEIsRUFBSixDQUFPLENBQVAsQ0EvSEYsQ0FkQSxDQUhzQyxDQUF4QyxDQVBtRCxDQUFyRCxDQURhLENBQVIsQ0FBVDtBQThKRCxDQWpLRDs7QUFrS0EsSUFBSUMsZUFBZSxHQUFHLENBQ3BCLFlBQVk7RUFDVixJQUFJL0IsR0FBRyxHQUFHLElBQVY7RUFBQSxJQUNFQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxFQURqQjs7RUFFQSxPQUFPQSxFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVFLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBd0QsQ0FDL0RGLEVBQUUsQ0FBQyxPQUFELEVBQVU7SUFDVkUsV0FBVyxFQUFFLGVBREg7SUFFVmtCLEtBQUssRUFBRTtNQUFFQyxJQUFJLEVBQUUsUUFBUjtNQUFrQkgsS0FBSyxFQUFFO0lBQXpCO0VBRkcsQ0FBVixDQUQ2RCxDQUF4RCxDQUFUO0FBTUQsQ0FWbUIsQ0FBdEI7QUFZQXBCLE1BQU0sQ0FBQ2lDLGFBQVAsR0FBdUIsSUFBdkI7Ozs7Ozs7Ozs7Ozs7QUM5S0E7QUFBQTtBQUFBO0FBQUE7QUFBMEc7QUFDdkM7QUFDTDs7O0FBRzlEO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQStMLENBQWdCLDJQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQW5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy80LmJ1bmRsZS4yYWVkODFmNmFkMWVkYjNlZTIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXY+XG4gICAgPCEtLSBMb2dpbiBCYWNrZ3JvdW5kICAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHN0ZXBzQmFyXCI+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1iLTRcIj5SZXNldCBQYXNzd29yZDwvaDI+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInVzZXJGb3JtV3JwciB0ZXh0LWxlZnQgbXgtYXV0byBteS01XCIgQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIEBrZXlkb3duPVwiZm9ybS5vbktleWRvd24oJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpICwnaGF2ZVZhbHVlJzogZm9ybS5lbWFpbCB9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgZGlzYWJsZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkVtYWlsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiZW1haWxcIiBjbGFzcz1cImVycm9ybXNnXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpICwnaGF2ZVZhbHVlJzogZm9ybS5wYXNzd29yZCB9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlBhc3N3b3JkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwicGFzc3dvcmRcIiBjbGFzcz1cImVycm9ybXNnXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZF9jb25maXJtYXRpb24nKSAsJ2hhdmVWYWx1ZSc6IGZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkNvbmZpcm0gTmV3IFBhc3N3b3JkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIgY2xhc3M9XCJlcnJvcm1zZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB0ZXh0LWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJVUERBVEVcIiBjbGFzcz1cImJ0biBidG5TdWJtaXRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkZvcmdvdF9wYXNzd29yZFwiLFxuICAgIGNvbXBvbmVudHM6IHtcblxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246JycsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkIDogJycsXG4gICAgICAgICAgICAgICAgICAgIHRva2VuIDogdGhpcy4kcm91dGUucXVlcnkudG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsIDogdGhpcy4kcm91dGUucXVlcnkuZW1haWwsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICAgdXBkYXRlUGFzc3dvcmQoKXtcbiAgICAgICAgICAgICB0aGlzLmZvcm0ucG9zdCgnL2FwaS9wYXNzd29yZC9yZXNldCcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT57XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzPT10cnVlKXtcbiAgICAgICAgICAgICAgICBpZigkY29va2llcy5pc0tleSgnYW5jaF9yZW1lbWJlcl9tZScpKXtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5mb3JtLmVtYWlsPT0kY29va2llcy5nZXQoJ2FuY2hfbG9nX2VtYWlsJykpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNvb2tpZXMuc2V0KFwiYW5jaF9sb2dfcGFzc1wiLCB0aGlzLmZvcm0ucGFzc3dvcmQsIFwiMzQwZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2xvZ2luJykuY2F0Y2goKCkgPT4ge30pOztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkIHN0ZXBzQmFyXCIgfSwgW1xuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTRcIiB9LCBbX3ZtLl92KFwiUmVzZXQgUGFzc3dvcmRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXNlckZvcm1XcnByIHRleHQtbGVmdCBteC1hdXRvIG15LTVcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVQYXNzd29yZC5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGtleWRvd246IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZvcm0ub25LZXlkb3duKCRldmVudClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImVtYWlsXCIsIG5hbWU6IFwiZW1haWxcIiwgZGlzYWJsZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImVtYWlsXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwiRW1haWxcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiZW1haWxcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJwYXNzd29yZFwiKSxcbiAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCJQYXNzd29yZFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNvbmZpcm0gTmV3IFBhc3N3b3JkXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCB0ZXh0LWNlbnRlciBtdC00XCIgfSwgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG5TdWJtaXRcIixcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwiVVBEQVRFXCIgfSxcbiAgICAgIH0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRm9yZ290X3Bhc3N3b3JkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Y2ZiZjkxYyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Gb3Jnb3RfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Gb3Jnb3RfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3Y2ZiZjkxY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdjZmJmOTFjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdjZmJmOTFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdjZmJmOTFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Gb3Jnb3RfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjZmJmOTFjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdjZmJmOTFjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Gb3Jnb3RfcGFzc3dvcmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb3Jnb3RfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZvcmdvdF9wYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZvcmdvdF9wYXNzd29yZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2NmYmY5MWMmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9