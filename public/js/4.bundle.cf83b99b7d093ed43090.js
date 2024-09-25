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
        email: this.$route.query.email,
        atm: this.$route.query.atm
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRm9yZ290X3Bhc3N3b3JkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Gb3Jnb3RfcGFzc3dvcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZvcmdvdF9wYXNzd29yZC52dWU/YjE2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Gb3Jnb3RfcGFzc3dvcmQudnVlPzEwYjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRm9yZ290X3Bhc3N3b3JkLnZ1ZT9lZWJiIl0sIm5hbWVzIjpbIm5hbWUiLCJjb21wb25lbnRzIiwiZGF0YSIsImZvcm0iLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJwYXNzd29yZCIsInRva2VuIiwiZW1haWwiLCJhdG0iLCJtZXRob2RzIiwidXBkYXRlUGFzc3dvcmQiLCJ0aGVuIiwiVG9hc3QiLCJpY29uIiwidGl0bGUiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJfdiIsIm9uIiwic3VibWl0IiwiJGV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhcHBseSIsImFyZ3VtZW50cyIsImtleWRvd24iLCJvbktleWRvd24iLCJlcnJvciIsImVycm9ycyIsImhhcyIsImhhdmVWYWx1ZSIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwidmFsdWUiLCJleHByZXNzaW9uIiwiYXR0cnMiLCJ0eXBlIiwiZGlzYWJsZWQiLCJkb21Qcm9wcyIsImlucHV0IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiJHNldCIsImZpZWxkIiwiX20iLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBdUNBO0FBQWU7RUFDZkEsdUJBREE7RUFFQUMsY0FGQTtFQUtBQyxJQUxBLGtCQUtBO0lBQ0E7TUFD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QSxDQTNDQSxDQWpGSixFQThIRTdCLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0E5SEYsRUErSEVKLEdBQUcsQ0FBQzhCLEVBQUosQ0FBTyxDQUFQLENBL0hGLENBZEEsQ0FIc0MsQ0FBeEMsQ0FQbUQsQ0FBckQsQ0FEYSxDQUFSLENBQVQ7QUE4SkQsQ0FqS0Q7O0FBa0tBLElBQUlDLGVBQWUsR0FBRyxDQUNwQixZQUFZO0VBQ1YsSUFBSS9CLEdBQUcsR0FBRyxJQUFWO0VBQUEsSUFDRUMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVUQsRUFEakI7O0VBRUEsT0FBT0EsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFRSxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQXdELENBQy9ERixFQUFFLENBQUMsT0FBRCxFQUFVO0lBQ1ZFLFdBQVcsRUFBRSxlQURIO0lBRVZrQixLQUFLLEVBQUU7TUFBRUMsSUFBSSxFQUFFLFFBQVI7TUFBa0JILEtBQUssRUFBRTtJQUF6QjtFQUZHLENBQVYsQ0FENkQsQ0FBeEQsQ0FBVDtBQU1ELENBVm1CLENBQXRCO0FBWUFwQixNQUFNLENBQUNpQyxhQUFQLEdBQXVCLElBQXZCOzs7Ozs7Ozs7Ozs7O0FDOUtBO0FBQUE7QUFBQTtBQUFBO0FBQTBHO0FBQ3ZDO0FBQ0w7OztBQUc5RDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxxRkFBTTtBQUNSLEVBQUUsc0dBQU07QUFDUixFQUFFLCtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUErTCxDQUFnQiwyUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FuTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNC5idW5kbGUuY2Y4M2I5OWI3ZDA5M2VkNDMwOTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuICAgIDwhLS0gTG9naW4gQmFja2dyb3VuZCAgLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBzdGVwc0JhclwiPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJtYi00XCI+UmVzZXQgUGFzc3dvcmQ8L2gyPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJ1c2VyRm9ybVdycHIgdGV4dC1sZWZ0IG14LWF1dG8gbXktNVwiIEBzdWJtaXQucHJldmVudD1cInVwZGF0ZVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIiA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygnZW1haWwnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0uZW1haWwgfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0uZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGRpc2FibGVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5FbWFpbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIgY2xhc3M9XCJlcnJvcm1zZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygncGFzc3dvcmQnKSAsJ2hhdmVWYWx1ZSc6IGZvcm0ucGFzc3dvcmQgfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5QYXNzd29yZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJlcnJvcm1zZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygncGFzc3dvcmRfY29uZmlybWF0aW9uJykgLCdoYXZlVmFsdWUnOiBmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbiB9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Db25maXJtIE5ldyBQYXNzd29yZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIGNsYXNzPVwiZXJyb3Jtc2dcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiVVBEQVRFXCIgY2xhc3M9XCJidG4gYnRuU3VibWl0XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJGb3Jnb3RfcGFzc3dvcmRcIixcbiAgICBjb21wb25lbnRzOiB7XG5cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOicnLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCA6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA6IHRoaXMuJHJvdXRlLnF1ZXJ5LnRva2VuLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbCA6IHRoaXMuJHJvdXRlLnF1ZXJ5LmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBhdG06IHRoaXMuJHJvdXRlLnF1ZXJ5LmF0bSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgICB1cGRhdGVQYXNzd29yZCgpe1xuICAgICAgICAgICAgIHRoaXMuZm9ybS5wb3N0KCcvYXBpL3Bhc3N3b3JkL3Jlc2V0JylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3M9PXRydWUpe1xuICAgICAgICAgICAgICAgIGlmKCRjb29raWVzLmlzS2V5KCdhbmNoX3JlbWVtYmVyX21lJykpe1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZvcm0uZW1haWw9PSRjb29raWVzLmdldCgnYW5jaF9sb2dfZW1haWwnKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29va2llcy5zZXQoXCJhbmNoX2xvZ19wYXNzXCIsIHRoaXMuZm9ybS5wYXNzd29yZCwgXCIzNDBkXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbG9naW4nKS5jYXRjaCgoKSA9PiB7fSk7O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxufVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWQgc3RlcHNCYXJcIiB9LCBbXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNFwiIH0sIFtfdm0uX3YoXCJSZXNldCBQYXNzd29yZFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1c2VyRm9ybVdycHIgdGV4dC1sZWZ0IG14LWF1dG8gbXktNVwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVBhc3N3b3JkLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJlbWFpbFwiKSxcbiAgICAgICAgICAgICAgICAgIGhhdmVWYWx1ZTogX3ZtLmZvcm0uZW1haWwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZW1haWxcIiwgbmFtZTogXCJlbWFpbFwiLCBkaXNhYmxlZDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmVtYWlsIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1haWxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInBhc3N3b3JkXCIpLFxuICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwYXNzd29yZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIlBhc3N3b3JkXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ29uZmlybSBOZXcgUGFzc3dvcmRcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHRleHQtY2VudGVyIG10LTRcIiB9LCBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0blN1Ym1pdFwiLFxuICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCJVUERBVEVcIiB9LFxuICAgICAgfSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Gb3Jnb3RfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjZmJmOTFjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZvcmdvdF9wYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZvcmdvdF9wYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdjZmJmOTFjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2NmYmY5MWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2NmYmY5MWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2NmYmY5MWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZvcmdvdF9wYXNzd29yZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2NmYmY5MWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2NmYmY5MWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZvcmdvdF9wYXNzd29yZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZvcmdvdF9wYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9yZ290X3Bhc3N3b3JkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9yZ290X3Bhc3N3b3JkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Y2ZiZjkxYyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=