(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Contactus.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Contactus.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Contactus',
  components: {},
  data: function data() {
    return {
      form: new Form({
        name: '',
        ordernumber: '',
        email: '',
        reason: '',
        phone: '',
        message: ''
      })
    };
  },
  watch: {},
  computed: {},
  mounted: function mounted() {
    this.$nextTick(function () {});
  },
  updated: function updated() {
    this.$nextTick(function () {});
  },
  methods: {
    submit_contact: function submit_contact() {
      var _this = this;

      var loader = this.$loading.show({
        loader: 'dots',
        container: this.$refs.contact_main_ref
      });
      this.form.post('api/contactus').then(function (data) {
        loader.hide();

        _this.form.reset();

        Toast.fire({
          icon: 'success',
          title: data.data.message
        });
      })["catch"](function (err) {
        loader.hide();
      });
    }
  },
  filters: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Contactus.vue?vue&type=template&id=472b7485&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Contactus.vue?vue&type=template&id=472b7485& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", [_c("div", {
    staticClass: "contact-banner"
  }), _vm._v(" "), _c("div", {
    staticClass: "contact-section"
  }, [_c("div", {
    staticClass: "container-fluid pd-0"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("div", {
    staticClass: "contact-right"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit_contact();
      }
    }
  }, [_c("div", {
    staticClass: "row vld-parent",
    attrs: {
      id: "contact_main_ref"
    }
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("email"),
      haveValue: _vm.form.name
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Name")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("ordernumber"),
      haveValue: _vm.form.ordernumber
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.ordernumber,
      expression: "form.ordernumber"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.ordernumber
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "ordernumber", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Order number")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "ordernumber"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
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
      type: "email"
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
  }, [_vm._v("Email address")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "email"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("reason"),
      haveValue: _vm.form.reason
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.reason,
      expression: "form.reason"
    }],
    staticClass: "form-control select",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.reason
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "reason", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label w-100"
  }, [_vm._v("Reason for request")]), _vm._v(" "), _c("div", {
    staticClass: "selectDropDown"
  }, [_c("ul", {
    staticClass: "list-unstyled"
  }, [_c("li", {
    on: {
      click: function click($event) {
        _vm.form.reason = "Design Problems";
      }
    }
  }, [_vm._v("Design Problems")]), _vm._v(" "), _c("li", {
    on: {
      click: function click($event) {
        _vm.form.reason = "WeVisu Support";
      }
    }
  }, [_vm._v("WeVisu Support")]), _vm._v(" "), _c("li", {
    on: {
      click: function click($event) {
        _vm.form.reason = "Other";
      }
    }
  }, [_vm._v("Other")])])]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "reason"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("phone"),
      haveValue: _vm.form.phone
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.phone,
      expression: "form.phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "rel"
    },
    domProps: {
      value: _vm.form.phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "phone", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Phone number")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "phone"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "inputWrpr",
    "class": {
      error: _vm.form.errors.has("message"),
      haveValue: _vm.form.message
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.message,
      expression: "form.message"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.message
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "message", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "label"
  }, [_vm._v("Message")]), _vm._v(" "), _c("has-error", {
    staticClass: "errormsg",
    attrs: {
      form: _vm.form,
      field: "message"
    }
  })], 1)]), _vm._v(" "), _vm._m(1)])])])])])]), _vm._v(" "), _vm._m(2)])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "contact-left"
  }, [_c("h1", [_vm._v("Contact WeVisu")]), _vm._v(" "), _c("p", [_vm._v("Our support team is available for all of your inquiries."), _c("br"), _c("br"), _vm._v(" Thank you for your business!")]), _vm._v(" "), _c("a", {
    attrs: {
      href: "mailto:support@wevisu.com"
    }
  }, [_c("span", [_c("img", {
    attrs: {
      src: "images/mail-white.png"
    }
  })]), _vm._v("support@wevisu.com")]), _vm._v(" "), _c("a", {
    staticClass: "supportchat-btn",
    attrs: {
      href: "javascript:void()"
    }
  }, [_vm._v("Live Chat")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("input", {
    staticClass: "subbtn btn",
    attrs: {
      type: "submit",
      value: "Send"
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "contact-bottom"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "testimonial-slider"
  }, [_c("div", {
    staticClass: "carousel slide",
    attrs: {
      id: "carouselExampleIndicators",
      "data-ride": "carousel"
    }
  }, [_c("ol", {
    staticClass: "carousel-indicators"
  }, [_c("li", {
    staticClass: "active",
    attrs: {
      "data-target": "#carouselExampleIndicators",
      "data-slide-to": "0"
    }
  }), _vm._v(" "), _c("li", {
    attrs: {
      "data-target": "#carouselExampleIndicators",
      "data-slide-to": "1"
    }
  }), _vm._v(" "), _c("li", {
    attrs: {
      "data-target": "#carouselExampleIndicators",
      "data-slide-to": "2"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "carousel-inner"
  }, [_c("div", {
    staticClass: "carousel-item active"
  }, [_c("p", [_vm._v("“Live 3D rendering makes replacing materials easier to visualize!“")])]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("p", [_vm._v("“Enter your contractor/designers' personal ID# to see their Virtual Showrooms!“")])]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("p", [_vm._v("“Contractors and designers find the best materials and at the best prices to display inside their virtual showrooms.“")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "contact-featured-img"
  }, [_c("figure", [_c("img", {
    attrs: {
      src: "images/contact-right-img.jpg"
    }
  })])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/Contactus.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Contactus.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contactus_vue_vue_type_template_id_472b7485___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contactus.vue?vue&type=template&id=472b7485& */ "./resources/js/pages/Contactus.vue?vue&type=template&id=472b7485&");
/* harmony import */ var _Contactus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contactus.vue?vue&type=script&lang=js& */ "./resources/js/pages/Contactus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contactus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contactus_vue_vue_type_template_id_472b7485___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contactus_vue_vue_type_template_id_472b7485___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Contactus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Contactus.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Contactus.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Contactus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Contactus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Contactus.vue?vue&type=template&id=472b7485&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Contactus.vue?vue&type=template&id=472b7485& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_template_id_472b7485___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Contactus.vue?vue&type=template&id=472b7485& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Contactus.vue?vue&type=template&id=472b7485&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_template_id_472b7485___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_template_id_472b7485___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0NvbnRhY3R1cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0NvbnRhY3R1cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0NvbnRhY3R1cy52dWU/OGZjMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQ29udGFjdHVzLnZ1ZT80YWIzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Db250YWN0dXMudnVlP2QyZGEiXSwibmFtZXMiOlsibmFtZSIsImNvbXBvbmVudHMiLCJkYXRhIiwiZm9ybSIsIm9yZGVybnVtYmVyIiwiZW1haWwiLCJyZWFzb24iLCJwaG9uZSIsIm1lc3NhZ2UiLCJ3YXRjaCIsImNvbXB1dGVkIiwibW91bnRlZCIsInVwZGF0ZWQiLCJtZXRob2RzIiwic3VibWl0X2NvbnRhY3QiLCJsb2FkZXIiLCJjb250YWluZXIiLCJ0aGVuIiwiVG9hc3QiLCJpY29uIiwidGl0bGUiLCJmaWx0ZXJzIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiX3YiLCJfbSIsIm9uIiwic3VibWl0IiwiJGV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhdHRycyIsImlkIiwiZXJyb3IiLCJlcnJvcnMiLCJoYXMiLCJoYXZlVmFsdWUiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsInZhbHVlIiwiZXhwcmVzc2lvbiIsInR5cGUiLCJkb21Qcm9wcyIsImlucHV0IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiJHNldCIsImZpZWxkIiwiY2xpY2siLCJzdGF0aWNSZW5kZXJGbnMiLCJocmVmIiwic3JjIiwiX3dpdGhTdHJpcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQTBJQTtBQUFlO0VBQ2ZBLGlCQURBO0VBRUFDLGNBRkE7RUFLQUMsSUFMQSxrQkFLQTtJQUNBO01BQ0FDO1FBQ0FILFFBREE7UUFFQUks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QUFQO0VBQVQsQ0FBUixDQURTLENBQVgsQ0FEK0MsQ0FBakQsQ0FEbUMsQ0FBckMsQ0FuRThCLENBQWhDLENBRG9DLENBQXRDLENBRGdELENBQTNDLENBQVQ7QUErRUQsQ0EzSG1CLENBQXRCO0FBNkhBL0IsTUFBTSxDQUFDZ0MsYUFBUCxHQUF1QixJQUF2Qjs7Ozs7Ozs7Ozs7OztBQ2xmQTtBQUFBO0FBQUE7QUFBQTtBQUF3RjtBQUMzQjtBQUNMOzs7QUFHeEQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLG9GQUFNO0FBQ1IsRUFBRSw2RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBeUwsQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBN007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzMzLmJ1bmRsZS5hNzY2Y2QyMDFkMjRjOTM0MTkzYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxzZWN0aW9uPlxuXG5cdDwhLS0tPT09PT09PT09PT09PT09PWNvbnRhY3QtYmFubmVyLXN0YXJ0PT09PT09PT09PT09PT09PT09PT09PT0tLS0tPlxuXHQ8ZGl2IGNsYXNzPVwiY29udGFjdC1iYW5uZXJcIj48L2Rpdj5cblx0PCEtLS09PT09PT09PT09PT09PT09Y29udGFjdC1iYW5uZXItZW5kPT09PT09PT09PT09PT09PT09PT09PT0tLS0tPlxuXG5cdDxkaXYgY2xhc3M9XCJjb250YWN0LXNlY3Rpb25cIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHBkLTBcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhY3QtbGVmdFwiPlxuXHRcdFx0XHRcdFx0PGgxPkNvbnRhY3QgV2VWaXN1PC9oMT5cblx0XHRcdFx0XHRcdDxwPk91ciBzdXBwb3J0IHRlYW0gaXMgYXZhaWxhYmxlIGZvciBhbGwgb2YgeW91ciBpbnF1aXJpZXMuPGJyPjxicj4gVGhhbmsgeW91IGZvciB5b3VyIGJ1c2luZXNzITwvcD5cblx0XHRcdFx0XHRcdFx0PCEtLSA8YSBocmVmPVwidGVsOjgwMDM5NDQ0MTNcIj48c3Bhbj48aW1nIHNyYz1cImltYWdlcy9waG9uZS1pY29uLnBuZ1wiPjwvc3Bhbj4oODAwKSAzOTQtNDQxMzwvYT4gLS0+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJtYWlsdG86c3VwcG9ydEB3ZXZpc3UuY29tXCI+PHNwYW4+PGltZyBzcmM9XCJpbWFnZXMvbWFpbC13aGl0ZS5wbmdcIj48L3NwYW4+c3VwcG9ydEB3ZXZpc3UuY29tPC9hPlxuXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoKVwiIGNsYXNzPVwic3VwcG9ydGNoYXQtYnRuXCI+TGl2ZSBDaGF0PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFjdC1yaWdodCBcIj5cblx0XHRcdFx0XHRcdFx0PGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0X2NvbnRhY3QoKVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgdmxkLXBhcmVudFwiIGlkPVwiY29udGFjdF9tYWluX3JlZlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImlucHV0V3JwclwiIDpjbGFzcz1cInsgJ2Vycm9yJzogZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpICwnaGF2ZVZhbHVlJzogZm9ybS5uYW1lIH1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmb3JtLm5hbWVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImxhYmVsXCI+TmFtZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwibmFtZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIiA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygnb3JkZXJudW1iZXInKSwnaGF2ZVZhbHVlJzogZm9ybS5vcmRlcm51bWJlciB9XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZm9ybS5vcmRlcm51bWJlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibGFiZWxcIj5PcmRlciBudW1iZXI8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cIm9yZGVybnVtYmVyXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIiA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygnZW1haWwnKSwgJ2hhdmVWYWx1ZSc6IGZvcm0uZW1haWwgfVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJsYWJlbFwiPkVtYWlsIGFkZHJlc3M8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIgY2xhc3M9XCJlcnJvcm1zZ1wiPjwvaGFzLWVycm9yPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIiA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygncmVhc29uJyksICdoYXZlVmFsdWUnOiBmb3JtLnJlYXNvbiB9XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImZvcm0ucmVhc29uXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VsZWN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJsYWJlbCB3LTEwMFwiPlJlYXNvbiBmb3IgcmVxdWVzdDwvc3Bhbj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzZWxlY3REcm9wRG93blwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzPVwibGlzdC11bnN0eWxlZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgQGNsaWNrPVwiZm9ybS5yZWFzb249J0Rlc2lnbiBQcm9ibGVtcydcIj5EZXNpZ24gUHJvYmxlbXM8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgQGNsaWNrPVwiZm9ybS5yZWFzb249J1dlVmlzdSBTdXBwb3J0J1wiPldlVmlzdSBTdXBwb3J0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIEBjbGljaz1cImZvcm0ucmVhc29uPSdPdGhlcidcIj5PdGhlcjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJyZWFzb25cIiBjbGFzcz1cImVycm9ybXNnXCI+PC9oYXMtZXJyb3I+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiaW5wdXRXcnByXCIgOmNsYXNzPVwieyAnZXJyb3InOiBmb3JtLmVycm9ycy5oYXMoJ3Bob25lJyksICdoYXZlVmFsdWUnOiBmb3JtLnBob25lIH1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJlbFwiIHYtbW9kZWw9XCJmb3JtLnBob25lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImxhYmVsXCI+UGhvbmUgbnVtYmVyPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJwaG9uZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJpbnB1dFdycHJcIiA6Y2xhc3M9XCJ7ICdlcnJvcic6IGZvcm0uZXJyb3JzLmhhcygnbWVzc2FnZScpLCAnaGF2ZVZhbHVlJzogZm9ybS5tZXNzYWdlIH1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS5tZXNzYWdlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImxhYmVsXCI+TWVzc2FnZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwibWVzc2FnZVwiIGNsYXNzPVwiZXJyb3Jtc2dcIj48L2hhcy1lcnJvcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1YmJ0biBidG5cIiB2YWx1ZT1cIlNlbmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250YWN0LWJvdHRvbVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXN0aW1vbmlhbC1zbGlkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwiY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGNsYXNzPVwiY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L29sPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPuKAnExpdmUgM0QgcmVuZGVyaW5nIG1ha2VzIHJlcGxhY2luZyBtYXRlcmlhbHMgZWFzaWVyIHRvIHZpc3VhbGl6ZSHigJw8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPuKAnEVudGVyIHlvdXIgY29udHJhY3Rvci9kZXNpZ25lcnMnIHBlcnNvbmFsIElEIyB0byBzZWUgdGhlaXIgVmlydHVhbCBTaG93cm9vbXMh4oCcPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD7igJxDb250cmFjdG9ycyBhbmQgZGVzaWduZXJzIGZpbmQgdGhlIGJlc3QgbWF0ZXJpYWxzIGFuZCBhdCB0aGUgYmVzdCBwcmljZXMgdG8gZGlzcGxheSBpbnNpZGUgdGhlaXIgdmlydHVhbCBzaG93cm9vbXMu4oCcPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250YWN0LWZlYXR1cmVkLWltZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxmaWd1cmU+PGltZyBzcmM9XCJpbWFnZXMvY29udGFjdC1yaWdodC1pbWcuanBnXCI+PC9maWd1cmU+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblxuPC9zZWN0aW9uPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0NvbnRhY3R1cycsXG4gICAgY29tcG9uZW50czoge1xuXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcblx0XHRcdFx0XHRvcmRlcm51bWJlcjonJyxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6JycsXG5cdFx0XHRcdFx0cmVhc29uOicnLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZTonJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTonJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG5cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgIH0pXG4gICAgfSxcblxuICAgIHVwZGF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICBzdWJtaXRfY29udGFjdCgpe1xuICAgICAgIGxldCBsb2FkZXI9ICB0aGlzLiRsb2FkaW5nLnNob3coe2xvYWRlcjonZG90cycsY29udGFpbmVyOiB0aGlzLiRyZWZzLmNvbnRhY3RfbWFpbl9yZWZ9KVxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wb3N0KCdhcGkvY29udGFjdHVzJylcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICAgIFx0dGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xuICAgICAgICAgICAgICAgICAgICAgbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgZmlsdGVyczoge1xuXG4gICAgfVxufTtcbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWN0LWJhbm5lclwiIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWN0LXNlY3Rpb25cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBwZC0wXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC04XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWN0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0X2NvbnRhY3QoKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm93IHZsZC1wYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJjb250YWN0X21haW5fcmVmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwibmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm9yZGVybnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5vcmRlcm51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm9yZGVybnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5vcmRlcm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5vcmRlcm51bWJlciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZGVybnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiT3JkZXIgbnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3Jtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJvcmRlcm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V3JwclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImVtYWlsXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVtYWlsIGFkZHJlc3NcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImVtYWlsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicmVhc29uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5yZWFzb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZWFzb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJlYXNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucmVhc29uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsIHctMTAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUmVhc29uIGZvciByZXF1ZXN0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZWxlY3REcm9wRG93blwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LXVuc3R5bGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS5yZWFzb24gPSBcIkRlc2lnbiBQcm9ibGVtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRlc2lnbiBQcm9ibGVtc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0ucmVhc29uID0gXCJXZVZpc3UgU3VwcG9ydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIldlVmlzdSBTdXBwb3J0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS5yZWFzb24gPSBcIk90aGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT3RoZXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwicmVhc29uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXcnByXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicGhvbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlVmFsdWU6IF92bS5mb3JtLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucGhvbmUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwaG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlBob25lIG51bWJlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9ybXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwicGhvbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdycHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJtZXNzYWdlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZVZhbHVlOiBfdm0uZm9ybS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5tZXNzYWdlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk1lc3NhZ2VcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvcm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcIm1lc3NhZ2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgyKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhY3QtbGVmdFwiIH0sIFtcbiAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiQ29udGFjdCBXZVZpc3VcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXCJPdXIgc3VwcG9ydCB0ZWFtIGlzIGF2YWlsYWJsZSBmb3IgYWxsIG9mIHlvdXIgaW5xdWlyaWVzLlwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFRoYW5rIHlvdSBmb3IgeW91ciBidXNpbmVzcyFcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIm1haWx0bzpzdXBwb3J0QHdldmlzdS5jb21cIiB9IH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW19jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcImltYWdlcy9tYWlsLXdoaXRlLnBuZ1wiIH0gfSldKSxcbiAgICAgICAgICBfdm0uX3YoXCJzdXBwb3J0QHdldmlzdS5jb21cIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdXBwb3J0Y2hhdC1idG5cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKClcIiB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIkxpdmUgQ2hhdFwiKV1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInN1YmJ0biBidG5cIixcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwiU2VuZFwiIH0sXG4gICAgICB9KSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhY3QtYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRlc3RpbW9uaWFsLXNsaWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJvdXNlbCBzbGlkZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGEtcmlkZVwiOiBcImNhcm91c2VsXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJvbFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWluZGljYXRvcnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1zbGlkZS10b1wiOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXNsaWRlLXRvXCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRhcmdldFwiOiBcIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtc2xpZGUtdG9cIjogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWlubmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWl0ZW0gYWN0aXZlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwi4oCcTGl2ZSAzRCByZW5kZXJpbmcgbWFrZXMgcmVwbGFjaW5nIG1hdGVyaWFscyBlYXNpZXIgdG8gdmlzdWFsaXplIeKAnFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwi4oCcRW50ZXIgeW91ciBjb250cmFjdG9yL2Rlc2lnbmVycycgcGVyc29uYWwgSUQjIHRvIHNlZSB0aGVpciBWaXJ0dWFsIFNob3dyb29tcyHigJxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2Fyb3VzZWwtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIuKAnENvbnRyYWN0b3JzIGFuZCBkZXNpZ25lcnMgZmluZCB0aGUgYmVzdCBtYXRlcmlhbHMgYW5kIGF0IHRoZSBiZXN0IHByaWNlcyB0byBkaXNwbGF5IGluc2lkZSB0aGVpciB2aXJ0dWFsIHNob3dyb29tcy7igJxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhY3QtZmVhdHVyZWQtaW1nXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImZpZ3VyZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiaW1hZ2VzL2NvbnRhY3QtcmlnaHQtaW1nLmpwZ1wiIH0gfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db250YWN0dXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3MmI3NDg1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbnRhY3R1cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbnRhY3R1cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ3MmI3NDg1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ3MmI3NDg1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ3MmI3NDg1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db250YWN0dXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3MmI3NDg1JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ3MmI3NDg1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvQ29udGFjdHVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29udGFjdHVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db250YWN0dXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db250YWN0dXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3MmI3NDg1JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==