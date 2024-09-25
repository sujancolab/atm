(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2hhbmdlX3Bhc3N3b3JkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jaGFuZ2VfcGFzc3dvcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NoYW5nZV9wYXNzd29yZC52dWU/NGNhMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jaGFuZ2VfcGFzc3dvcmQudnVlP2EzZDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2hhbmdlX3Bhc3N3b3JkLnZ1ZT9mNWIyIl0sIm5hbWVzIjpbIm5hbWUiLCJjb21wb25lbnRzIiwiZGF0YSIsImZvcm0iLCJpZCIsInBhc3N3b3JkIiwibWV0aG9kcyIsInVwZGF0ZVBhc3N3b3JkIiwidGhlbiIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiX20iLCJfdiIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwidmFsdWUiLCJjdXJyZW50X3Bhc3N3b3JkIiwiZXhwcmVzc2lvbiIsImVycm9ycyIsImhhcyIsImF0dHJzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZG9tUHJvcHMiLCJvbiIsImlucHV0IiwiJGV2ZW50IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiJHNldCIsImZpZWxkIiwibmV3X3Bhc3N3b3JkIiwiY29uZmlybV9wYXNzd29yZCIsImNsaWNrIiwicHJldmVudERlZmF1bHQiLCJhcHBseSIsImFyZ3VtZW50cyIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFxRUE7QUFBZTtFQUNmQSx1QkFEQTtFQUVBQyxjQUZBO0VBS0FDLElBTEEsa0JBS0E7SUFDQTtNQUNBQztRQUNBQyxNQURBO1FBRUFDO01BRkE7SUFE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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8yNC5idW5kbGUuNzJjY2JlMDhmMWQ4MWI2NmI1ZjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuICAgIDwhLS0gIENoYW5nZSBQYXNzd29yZCBGb3JtICAtLT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCAgY2huZy1wZC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwidy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5jaGFuZ2UgcGFzc3dvcmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjb2wtbGctMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjdXJyZW50X3Bhc3N3b3JkXCI+Q3VycmVudCBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5jdXJyZW50X3Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXJyZW50X3Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkN1cnJlbnQgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ2N1cnJlbnRfcGFzc3dvcmQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImN1cnJlbnRfcGFzc3dvcmRcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjb2wtbGctMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXdfcGFzc3dvcmRcIj5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmV3X3Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuZXdfcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmV3IFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCduZXdfcGFzc3dvcmQnKSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cIm5ld19wYXNzd29yZFwiPjwvaGFzLWVycm9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbmZpcm1fcGFzc3dvcmRcIj5Db25maXJtIE5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5jb25maXJtX3Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtX3Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ2NvbmZpcm1fcGFzc3dvcmQnKSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImNvbmZpcm1fcGFzc3dvcmRcIj48L2hhcy1lcnJvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93IGJ1dHRvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljay5wcmV2ZW50PVwidXBkYXRlUGFzc3dvcmRcIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5VUERBVEU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiBcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkNoYW5nZV9wYXNzd29yZFwiLFxuICAgIGNvbXBvbmVudHM6IHsgXG4gICAgICAgXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgICAgIGlkOicnLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgICB1cGRhdGVQYXNzd29yZCgpeyBcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucG9zdCgnYXBpL2NoYW5nZS1wYXNzd29yZCcpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcz09dHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCRjb29raWVzLmlzS2V5KCdhbmNoX3JlbWVtYmVyX21lJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29va2llcy5zZXQoXCJhbmNoX2xvZ19wYXNzXCIsIHRoaXMuZm9ybS5uZXdfcGFzc3dvcmQsIFwiMzQwZFwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgRmlyZS4kZW1pdCgnQWZ0ZXJDcmVhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY3VycmVudF9wYXNzd29yZCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ubmV3X3Bhc3N3b3JkID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jb25maXJtX3Bhc3N3b3JkID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTb21lIGVycm9yIG9jY3VyZWQhIFBsZWFzZSB0cnkgYWdhaW4nXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgIH1cbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWQgY2huZy1wZC1jb250YWluZXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBmb3JtLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJmb3JtXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMDBcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgY29sLWxnLTEyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jdXJyZW50X3Bhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmN1cnJlbnRfcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImN1cnJlbnRfcGFzc3dvcmRcIiksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImN1cnJlbnRfcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDdXJyZW50IFBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5jdXJyZW50X3Bhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudF9wYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImN1cnJlbnRfcGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBjb2wtbGctMTJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5ld19wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uZXdfcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5ld19wYXNzd29yZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibmV3X3Bhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTmV3IFBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5uZXdfcGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5ld19wYXNzd29yZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJuZXdfcGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBjb2wtbGctMTJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbmZpcm1fcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY29uZmlybV9wYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiY29uZmlybV9wYXNzd29yZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY29uZmlybV9wYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNvbmZpcm0gUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmNvbmZpcm1fcGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25maXJtX3Bhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiY29uZmlybV9wYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93IGJ1dHRvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlUGFzc3dvcmQuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlVQREFURVwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkaW5nXCIgfSwgW1xuICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiY2hhbmdlIHBhc3N3b3JkXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1yb3dcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImN1cnJlbnRfcGFzc3dvcmRcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiQ3VycmVudCBQYXNzd29yZFwiKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInJlZFwiIH0sIFtfdm0uX3YoXCIqXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1yb3dcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm5ld19wYXNzd29yZFwiIH0gfSwgW192bS5fdihcIk5ldyBQYXNzd29yZFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInJlZFwiIH0sIFtfdm0uX3YoXCIqXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1yb3dcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImNvbmZpcm1fcGFzc3dvcmRcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiQ29uZmlybSBOZXcgUGFzc3dvcmRcIiksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJyZWRcIiB9LCBbX3ZtLl92KFwiKlwiKV0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2hhbmdlX3Bhc3N3b3JkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZTI3MGRjZiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jaGFuZ2VfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaGFuZ2VfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyZTI3MGRjZlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJlMjcwZGNmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJlMjcwZGNmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJlMjcwZGNmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jaGFuZ2VfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlMjcwZGNmJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJlMjcwZGNmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9jaGFuZ2VfcGFzc3dvcmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGFuZ2VfcGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoYW5nZV9wYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoYW5nZV9wYXNzd29yZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmUyNzBkY2Ymc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9