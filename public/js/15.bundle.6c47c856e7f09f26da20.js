(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRm9yZ290X3Bhc3N3b3JkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Gb3Jnb3RfcGFzc3dvcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZvcmdvdF9wYXNzd29yZC52dWU/YjE2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Gb3Jnb3RfcGFzc3dvcmQudnVlPzEwYjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRm9yZ290X3Bhc3N3b3JkLnZ1ZT9lZWJiIl0sIm5hbWVzIjpbIm5hbWUiLCJjb21wb25lbnRzIiwiZGF0YSIsImZvcm0iLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJwYXNzd29yZCIsInRva2VuIiwiZW1haWwiLCJtZXRob2RzIiwidXBkYXRlUGFzc3dvcmQiLCJ0aGVuIiwiVG9hc3QiLCJpY29uIiwidGl0bGUiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJfdiIsIm9uIiwic3VibWl0IiwiJGV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhcHBseSIsImFyZ3VtZW50cyIsImtleWRvd24iLCJvbktleWRvd24iLCJlcnJvciIsImVycm9ycyIsImhhcyIsImhhdmVWYWx1ZSIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwidmFsdWUiLCJleHByZXNzaW9uIiwiYXR0cnMiLCJ0eXBlIiwiZGlzYWJsZWQiLCJkb21Qcm9wcyIsImlucHV0IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiJHNldCIsImZpZWxkIiwiX20iLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBdUNBO0FBQWU7RUFDZkEsdUJBREE7RUFFQUMsY0FGQTtFQUtBQyxJQUxBLGtCQUtBO0lBQ0E7TUFDQUM7UUFD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N0IsR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQTlIRixFQStIRUosR0FBRyxDQUFDOEIsRUFBSixDQUFPLENBQVAsQ0EvSEYsQ0FkQSxDQUhzQyxDQUF4QyxDQVBtRCxDQUFyRCxDQURhLENBQVIsQ0FBVDtBQThKRCxDQWpLRDs7QUFrS0EsSUFBSUMsZUFBZSxHQUFHLENBQ3BCLFlBQVk7RUFDVixJQUFJL0IsR0FBRyxHQUFHLElBQVY7RUFBQSxJQUNFQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxFQURqQjs7RUFFQSxPQUFPQSxFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVFLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBd0QsQ0FDL0RGLEVBQUUsQ0FBQyxPQUFELEVBQVU7SUFDVkUsV0FBVyxFQUFFLGVBREg7SUFFVmtCLEtBQUssRUFBRTtNQUFFQyxJQUFJLEVBQUUsUUFBUjtNQUFrQkgsS0FBSyxFQUFFO0lBQXpCO0VBRkcsQ0FBVixDQUQ2RCxDQUF4RCxDQUFUO0FBTUQsQ0FWbUIsQ0FBdEI7QUFZQXBCLE1BQU0sQ0FBQ2lDLGFBQVAsR0FBdUIsSUFBdkI7Ozs7Ozs7Ozs7Ozs7QUM5S0E7QUFBQTtBQUFBO0FBQUE7QUFBMEc7QUFDdkM7QUFDTDs7O0FBRzlEO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQStMLENBQWdCLDJQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQW5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xNS5idW5kbGUuNmM0N2M4NTZlN2YwOWYyNmRhMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuICAgIDwhLS0gTG9naW4gQmFja2dyb3VuZCAgLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBzdGVwc0JhclwiPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJtYi00XCI+UmVzZXQgUGFzc3dvcmQ8L2gyPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJ1c2VyRm9ybVdycHIgdGV4dC1sZWZ0IG14LWF1dG8gbXktNVwiIEBzdWJtaXQucHJldmVudD1cInVwZGF0ZVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIiA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygnZW1haWwnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0uZW1haWwgfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0uZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGRpc2FibGVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5FbWFpbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIgY2xhc3M9XCJlcnJvcm1zZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygncGFzc3dvcmQnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0ucGFzc3dvcmQgfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5QYXNzd29yZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJlcnJvcm1zZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygncGFzc3dvcmRfY29uZmlybWF0aW9uJykgLCdoYXZlVmFsdWUnOiBmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbiB9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Db25maXJtIE5ldyBQYXNzd29yZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIGNsYXNzPVwiZXJyb3Jtc2dcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiVVBEQVRFXCIgY2xhc3M9XCJidG4gYnRuU3VibWl0XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJGb3Jnb3RfcGFzc3dvcmRcIixcbiAgICBjb21wb25lbnRzOiB7XG5cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOicnLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCA6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA6IHRoaXMuJHJvdXRlLnF1ZXJ5LnRva2VuLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbCA6IHRoaXMuJHJvdXRlLnF1ZXJ5LmVtYWlsLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgIHVwZGF0ZVBhc3N3b3JkKCl7XG4gICAgICAgICAgICAgdGhpcy5mb3JtLnBvc3QoJy9hcGkvcGFzc3dvcmQvcmVzZXQnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+e1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcz09dHJ1ZSl7XG4gICAgICAgICAgICAgICAgaWYoJGNvb2tpZXMuaXNLZXkoJ2FuY2hfcmVtZW1iZXJfbWUnKSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZm9ybS5lbWFpbD09JGNvb2tpZXMuZ2V0KCdhbmNoX2xvZ19lbWFpbCcpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjb29raWVzLnNldChcImFuY2hfbG9nX3Bhc3NcIiwgdGhpcy5mb3JtLnBhc3N3b3JkLCBcIjM0MGRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9sb2dpbicpLmNhdGNoKCgpID0+IHt9KTs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBzdGVwc0JhclwiIH0sIFtcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJtYi00XCIgfSwgW192bS5fdihcIlJlc2V0IFBhc3N3b3JkXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVzZXJGb3JtV3JwciB0ZXh0LWxlZnQgbXgtYXV0byBteS01XCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlUGFzc3dvcmQuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImVtYWlsXCIpLFxuICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiLCBuYW1lOiBcImVtYWlsXCIsIGRpc2FibGVkOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImVtYWlsXCIgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicGFzc3dvcmRcIiksXG4gICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwiUGFzc3dvcmRcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiksXG4gICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb24gfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXNzd29yZF9jb25maXJtYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb25maXJtIE5ldyBQYXNzd29yZFwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXIgbXQtNFwiIH0sIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuU3VibWl0XCIsXG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIHZhbHVlOiBcIlVQREFURVwiIH0sXG4gICAgICB9KSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZvcmdvdF9wYXNzd29yZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2NmYmY5MWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRm9yZ290X3Bhc3N3b3JkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRm9yZ290X3Bhc3N3b3JkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiN2NmYmY5MWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxwcm9ncmFtbWluZ1xcXFx3YW1wNjRcXFxcd3d3XFxcXHVuaXRlZC1zY3JhcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3Y2ZiZjkxYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3Y2ZiZjkxYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3Y2ZiZjkxYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRm9yZ290X3Bhc3N3b3JkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Y2ZiZjkxYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3Y2ZiZjkxYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRm9yZ290X3Bhc3N3b3JkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9yZ290X3Bhc3N3b3JkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb3Jnb3RfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb3Jnb3RfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjZmJmOTFjJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==