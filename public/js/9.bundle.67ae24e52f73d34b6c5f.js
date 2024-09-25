(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/change_password.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/change_password.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Change_password",
  components: {},
  data: function data() {
    return {
      form: new Form({
        id: '',
        password: ''
      })
    };
  },
  methods: {
    updatePassword: function updatePassword() {
      var _this = this;

      this.form.post('api/change-password').then(function (data) {
        if (response.data.success == true) {
          if ($cookies.isKey('anch_remember_me')) {
            _this.$cookies.set("anch_log_pass", _this.form.new_password, "340d");
          }
        } //  Fire.$emit('AfterCreate');


        _this.form.current_password = '';
        _this.form.new_password = '';
        _this.form.confirm_password = '';
        Toast.fire({
          icon: 'success',
          title: data.data.message
        });
      })["catch"](function () {
        Toast.fire({
          icon: 'error',
          title: 'Some error occured! Please try again'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/change_password.vue?vue&type=template&id=2e270dcf&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/change_password.vue?vue&type=template&id=2e270dcf&scoped=true& ***!
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

  return _c("div", [_c("section", {
    staticClass: "container-fluid chng-pd-container"
  }, [_c("div", {
    staticClass: "container form-container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("form", {
    staticClass: "w-100"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-lg-12"
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.current_password,
      expression: "form.current_password"
    }],
    staticClass: "form-control",
    "class": {
      "is-invalid": _vm.form.errors.has("current_password")
    },
    attrs: {
      type: "password",
      id: "current_password",
      placeholder: "Current Password"
    },
    domProps: {
      value: _vm.form.current_password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "current_password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.form,
      field: "current_password"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-lg-12"
  }, [_vm._m(2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.new_password,
      expression: "form.new_password"
    }],
    staticClass: "form-control",
    "class": {
      "is-invalid": _vm.form.errors.has("new_password")
    },
    attrs: {
      type: "password",
      id: "new_password",
      placeholder: "New Password"
    },
    domProps: {
      value: _vm.form.new_password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "new_password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.form,
      field: "new_password"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-lg-12"
  }, [_vm._m(3), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.confirm_password,
      expression: "form.confirm_password"
    }],
    staticClass: "form-control",
    "class": {
      "is-invalid": _vm.form.errors.has("confirm_password")
    },
    attrs: {
      type: "password",
      id: "confirm_password",
      placeholder: "Confirm Password"
    },
    domProps: {
      value: _vm.form.confirm_password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "confirm_password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.form,
      field: "confirm_password"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row button justify-content-center"
  }, [_c("button", {
    staticClass: "btn btn-success",
    attrs: {
      type: "submit"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.updatePassword.apply(null, arguments);
      }
    }
  }, [_vm._v("UPDATE")])])])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "heading"
  }, [_c("h2", [_vm._v("change password")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "d-flex flex-row"
  }, [_c("label", {
    attrs: {
      "for": "current_password"
    }
  }, [_vm._v("Current Password")]), _vm._v(" "), _c("span", {
    staticClass: "red"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "d-flex flex-row"
  }, [_c("label", {
    attrs: {
      "for": "new_password"
    }
  }, [_vm._v("New Password")]), _vm._v(" "), _c("span", {
    staticClass: "red"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "d-flex flex-row"
  }, [_c("label", {
    attrs: {
      "for": "confirm_password"
    }
  }, [_vm._v("Confirm New Password")]), _vm._v(" "), _c("span", {
    staticClass: "red"
  }, [_vm._v("*")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/change_password.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/change_password.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _change_password_vue_vue_type_template_id_2e270dcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change_password.vue?vue&type=template&id=2e270dcf&scoped=true& */ "./resources/js/components/change_password.vue?vue&type=template&id=2e270dcf&scoped=true&");
/* harmony import */ var _change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change_password.vue?vue&type=script&lang=js& */ "./resources/js/components/change_password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _change_password_vue_vue_type_template_id_2e270dcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _change_password_vue_vue_type_template_id_2e270dcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2e270dcf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/change_password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/change_password.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/change_password.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./change_password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/change_password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/change_password.vue?vue&type=template&id=2e270dcf&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/change_password.vue?vue&type=template&id=2e270dcf&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_2e270dcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./change_password.vue?vue&type=template&id=2e270dcf&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/change_password.vue?vue&type=template&id=2e270dcf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_2e270dcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_2e270dcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2hhbmdlX3Bhc3N3b3JkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jaGFuZ2VfcGFzc3dvcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NoYW5nZV9wYXNzd29yZC52dWU/NGNhMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jaGFuZ2VfcGFzc3dvcmQudnVlP2EzZDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2hhbmdlX3Bhc3N3b3JkLnZ1ZT9mNWIyIl0sIm5hbWVzIjpbIm5hbWUiLCJjb21wb25lbnRzIiwiZGF0YSIsImZvcm0iLCJpZCIsInBhc3N3b3JkIiwibWV0aG9kcyIsInVwZGF0ZVBhc3N3b3JkIiwidGhlbiIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiX20iLCJfdiIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwidmFsdWUiLCJjdXJyZW50X3Bhc3N3b3JkIiwiZXhwcmVzc2lvbiIsImVycm9ycyIsImhhcyIsImF0dHJzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZG9tUHJvcHMiLCJvbiIsImlucHV0IiwiJGV2ZW50IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiJHNldCIsImZpZWxkIiwibmV3X3Bhc3N3b3JkIiwiY29uZmlybV9wYXNzd29yZCIsImNsaWNrIiwicHJldmVudERlZmF1bHQiLCJhcHBseSIsImFyZ3VtZW50cyIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFxRUE7QUFBZTtFQUNmQSx1QkFEQTtFQUVBQyxjQUZBO0VBS0FDLElBTEEsa0JBS0E7SUFDQTtNQUNBQztRQUNBQyxNQURBO1FBRUFDO01BRkE7SUFE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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy85LmJ1bmRsZS42N2FlMjRlNTJmNzNkMzRiNmM1Zi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXY+XG4gICAgPCEtLSAgQ2hhbmdlIFBhc3N3b3JkIEZvcm0gIC0tPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGFpbmVyLWZsdWlkICBjaG5nLXBkLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJ3LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPmNoYW5nZSBwYXNzd29yZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImN1cnJlbnRfcGFzc3dvcmRcIj5DdXJyZW50IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmN1cnJlbnRfcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImN1cnJlbnRfcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ3VycmVudCBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygnY3VycmVudF9wYXNzd29yZCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiY3VycmVudF9wYXNzd29yZFwiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ld19wYXNzd29yZFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uZXdfcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5ld19wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOZXcgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ25ld19wYXNzd29yZCcpIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwibmV3X3Bhc3N3b3JkXCI+PC9oYXMtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybV9wYXNzd29yZFwiPkNvbmZpcm0gTmV3IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmNvbmZpcm1fcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1fcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygnY29uZmlybV9wYXNzd29yZCcpIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiY29uZmlybV9wYXNzd29yZFwiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3cgYnV0dG9uIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJ1cGRhdGVQYXNzd29yZFwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPlVQREFURTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuIFxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiQ2hhbmdlX3Bhc3N3b3JkXCIsXG4gICAgY29tcG9uZW50czogeyBcbiAgICAgICBcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6JycsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgIHVwZGF0ZVBhc3N3b3JkKCl7IFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wb3N0KCdhcGkvY2hhbmdlLXBhc3N3b3JkJylcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzPT10cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoJGNvb2tpZXMuaXNLZXkoJ2FuY2hfcmVtZW1iZXJfbWUnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRjb29raWVzLnNldChcImFuY2hfbG9nX3Bhc3NcIiwgdGhpcy5mb3JtLm5ld19wYXNzd29yZCwgXCIzNDBkXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICBGaXJlLiRlbWl0KCdBZnRlckNyZWF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jdXJyZW50X3Bhc3N3b3JkID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5uZXdfcGFzc3dvcmQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNvbmZpcm1fcGFzc3dvcmQgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NvbWUgZXJyb3Igb2NjdXJlZCEgUGxlYXNlIHRyeSBhZ2FpbidcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgfVxufVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBjaG5nLXBkLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIGZvcm0tY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImZvcm1cIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEwMFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBjb2wtbGctMTJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmN1cnJlbnRfcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY3VycmVudF9wYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiY3VycmVudF9wYXNzd29yZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY3VycmVudF9wYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkN1cnJlbnQgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmN1cnJlbnRfcGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X3Bhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiY3VycmVudF9wYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3dcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIGNvbC1sZy0xMlwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmV3X3Bhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5ld19wYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibmV3X3Bhc3N3b3JkXCIpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJuZXdfcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJOZXcgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLm5ld19wYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmV3X3Bhc3N3b3JkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcIm5ld19wYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3dcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIGNvbC1sZy0xMlwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY29uZmlybV9wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb25maXJtX3Bhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJjb25maXJtX3Bhc3N3b3JkXCIpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJjb25maXJtX3Bhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ29uZmlybSBQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uY29uZmlybV9wYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmZpcm1fcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJjb25maXJtX3Bhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3cgYnV0dG9uIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVQYXNzd29yZC5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVVBEQVRFXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRpbmdcIiB9LCBbXG4gICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJjaGFuZ2UgcGFzc3dvcmRcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LXJvd1wiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiY3VycmVudF9wYXNzd29yZFwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJDdXJyZW50IFBhc3N3b3JkXCIpLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVkXCIgfSwgW192bS5fdihcIipcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LXJvd1wiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmV3X3Bhc3N3b3JkXCIgfSB9LCBbX3ZtLl92KFwiTmV3IFBhc3N3b3JkXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicmVkXCIgfSwgW192bS5fdihcIipcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LXJvd1wiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiY29uZmlybV9wYXNzd29yZFwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJDb25maXJtIE5ldyBQYXNzd29yZFwiKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInJlZFwiIH0sIFtfdm0uX3YoXCIqXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jaGFuZ2VfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlMjcwZGNmJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NoYW5nZV9wYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NoYW5nZV9wYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjJlMjcwZGNmXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmUyNzBkY2YnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmUyNzBkY2YnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmUyNzBkY2YnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NoYW5nZV9wYXNzd29yZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmUyNzBkY2Ymc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmUyNzBkY2YnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2NoYW5nZV9wYXNzd29yZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoYW5nZV9wYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hhbmdlX3Bhc3N3b3JkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hhbmdlX3Bhc3N3b3JkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZTI3MGRjZiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=