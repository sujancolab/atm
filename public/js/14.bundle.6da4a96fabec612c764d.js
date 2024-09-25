(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/add_permission.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/add_permission.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserAddPermission",
  data: function data() {
    return {
      assigned_ids: [],
      permissions: [],
      states: [],
      cities: [],
      editmode: false,
      step: 1,
      users: {},
      frm_user: new Form({
        id: '',
        organization: '',
        name: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        zip_code: '',
        country: 'united states',
        phone: '',
        email: '',
        fax: '',
        type: '',
        account_info: []
      })
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["errors"])),
  beforeCreate: function beforeCreate() {
    var _this = this;

    axios.get("api/user/role_permissions", {
      params: {
        user: this.$route.params.id
      }
    }).then(function (res) {
      _this.permissions = res.data.data.permissions;
      _this.assigned_ids = res.data.data.assigned_ids;
    });
  },
  methods: {
    grand_permission: function grand_permission() {
      var cloaderd = this.$loading.show({
        container: this.$refs.ref_load_permission
      });
      axios.post('api/user/grand_permission', {
        user: this.$route.params.id,
        permissions: this.assigned_ids
      }).then(function (response) {
        cloaderd.hide();

        if (response.data.success == true) {
          Toast.fire({
            icon: 'success',
            title: response.data.message
          });
        }
      })["catch"](function () {
        cloaderd.hide();
      });
    }
  },
  mounted: function mounted() {},
  created: function created() {},
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/add_permission.vue?vue&type=template&id=160669df&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/add_permission.vue?vue&type=template&id=160669df& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("main", [_vm._m(0), _vm._v(" "), _c("section", {
    ref: "ref_load_permission",
    staticClass: "content"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "card box-warning"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "panel-group",
    attrs: {
      id: "accordion"
    }
  }, _vm._l(_vm.permissions, function (per, x) {
    return _vm.permissions ? _c("div", {
      staticClass: "panel panel-default"
    }, [_c("div", {
      staticClass: "panel-heading"
    }, [_c("h4", {
      staticClass: "panel-title"
    }, [_vm._m(3, true), _vm._v(" "), _c("a", {
      staticClass: "accordion-toggle",
      attrs: {
        "data-toggle": "collapse",
        "data-parent": "#accordion",
        href: "#collapseOne" + x
      }
    }, [_vm._v(" " + _vm._s(per.name) + " ")])])]), _vm._v(" "), _c("div", {
      key: "ac" + x,
      staticClass: "panel-collapse collapse",
      attrs: {
        id: "collapseOne" + x
      }
    }, [_c("div", {
      staticClass: "panel-body"
    }, [_c("div", {
      staticClass: "form-group"
    }, _vm._l(per.details, function (detail) {
      return _c("div", {
        key: detail.id + "-" + x,
        staticClass: "checkbox"
      }, [_c("label", [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.assigned_ids,
          expression: "assigned_ids"
        }],
        attrs: {
          type: "checkbox"
        },
        domProps: {
          value: detail.map_id,
          checked: Array.isArray(_vm.assigned_ids) ? _vm._i(_vm.assigned_ids, detail.map_id) > -1 : _vm.assigned_ids
        },
        on: {
          change: function change($event) {
            var $$a = _vm.assigned_ids,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;

            if (Array.isArray($$a)) {
              var $$v = detail.map_id,
                  $$i = _vm._i($$a, $$v);

              if ($$el.checked) {
                $$i < 0 && (_vm.assigned_ids = $$a.concat([$$v]));
              } else {
                $$i > -1 && (_vm.assigned_ids = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.assigned_ids = $$c;
            }
          }
        }
      }), _vm._v("\r\n                        " + _vm._s(detail.name) + " ")])]);
    }), 0)])])]) : _vm._e();
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "box-footer"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn link1 widthauto",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.grand_permission
    }
  }, [_vm._v("Grant Permission")])])])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", {
    staticClass: "content-header"
  }, [_c("h1", [_vm._v("Add Permission")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-4"
  }, [_c("button", {
    staticClass: "permissionbox",
    attrs: {
      type: "button"
    }
  }, [_c("div", {
    staticClass: "pull-left cogs1"
  }, [_c("i", {
    staticClass: "fa fa-cogs",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "pull-left cogs2"
  }, [_vm._v("Add Permission Directly ")]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("Apply Permissions")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("label", [_c("input", {
    attrs: {
      type: "checkbox"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/users/add_permission.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/users/add_permission.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_permission_vue_vue_type_template_id_160669df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_permission.vue?vue&type=template&id=160669df& */ "./resources/js/components/users/add_permission.vue?vue&type=template&id=160669df&");
/* harmony import */ var _add_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_permission.vue?vue&type=script&lang=js& */ "./resources/js/components/users/add_permission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_permission_vue_vue_type_template_id_160669df___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_permission_vue_vue_type_template_id_160669df___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/add_permission.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/add_permission.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/users/add_permission.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./add_permission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/add_permission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/add_permission.vue?vue&type=template&id=160669df&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/users/add_permission.vue?vue&type=template&id=160669df& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_permission_vue_vue_type_template_id_160669df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./add_permission.vue?vue&type=template&id=160669df& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/add_permission.vue?vue&type=template&id=160669df&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_permission_vue_vue_type_template_id_160669df___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_permission_vue_vue_type_template_id_160669df___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvYWRkX3Blcm1pc3Npb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL2FkZF9wZXJtaXNzaW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9hZGRfcGVybWlzc2lvbi52dWU/NjgwNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9hZGRfcGVybWlzc2lvbi52dWU/MjE5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9hZGRfcGVybWlzc2lvbi52dWU/ODEzZiJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsImFzc2lnbmVkX2lkcyIsInBlcm1pc3Npb25zIiwic3RhdGVzIiwiY2l0aWVzIiwiZWRpdG1vZGUiLCJzdGVwIiwidXNlcnMiLCJmcm1fdXNlciIsImlkIiwib3JnYW5pemF0aW9uIiwiYWRkcmVzc18xIiwiYWRkcmVzc18yIiwiY2l0eSIsInN0YXRlIiwiemlwX2NvZGUiLCJjb3VudHJ5IiwicGhvbmUiLCJlbWFpbCIsImZheCIsInR5cGUiLCJhY2NvdW50X2luZm8iLCJjb21wdXRlZCIsIm1hcEdldHRlcnMiLCJiZWZvcmVDcmVhdGUiLCJheGlvcyIsInBhcmFtcyIsInVzZXIiLCJ0aGVuIiwibWV0aG9kcyIsImdyYW5kX3Blcm1pc3Npb24iLCJjb250YWluZXIiLCJjbG9hZGVyZCIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwibW91bnRlZCIsImNyZWF0ZWQiLCJ3YXRjaCIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJfbSIsIl92IiwicmVmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsIl9sIiwicGVyIiwieCIsImhyZWYiLCJfcyIsImtleSIsImRldGFpbHMiLCJkZXRhaWwiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsInZhbHVlIiwiZXhwcmVzc2lvbiIsImRvbVByb3BzIiwibWFwX2lkIiwiY2hlY2tlZCIsIkFycmF5IiwiaXNBcnJheSIsIl9pIiwib24iLCJjaGFuZ2UiLCIkZXZlbnQiLCIkJGEiLCIkJGVsIiwidGFyZ2V0IiwiJCRjIiwiJCR2IiwiJCRpIiwiY29uY2F0Iiwic2xpY2UiLCJfZSIsImNsaWNrIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBO0FBR2U7RUFDZkEseUJBREE7RUFFQUMsSUFGQSxrQkFFQTtJQUNBO01BQ0FDLGdCQURBO01BRUFDLGVBRkE7TUFHQUMsVUFIQTtNQUlBQyxVQUpBO01BS0FDLGVBTEE7TUFNQUMsT0FOQTtNQU9BQyxTQVBBO01BUUFDO1FBQ0FDLE1BREE7UUFFQUMsZ0JBRkE7UUFHQVgsUUFIQTtRQUlBWSxhQUpBO1FBS0FDLGFBTEE7UUFNQUMsUUFOQTtRQU9BQyxTQVBBO1FBUUFDLFlBUkE7UUFTQUMsd0JBVEE7UUFVQUMsU0FWQTtRQVdBQyxTQVhBO1FBWUFDLE9BWkE7UUFhQUMsUUFiQTtRQWNBQztNQWRBO0lBUkE7RUF5QkEsQ0E1QkE7RUE2QkFDLDRCQUNBQyxtRUFEQSxDQTdCQTtFQWdDQUMsWUFoQ0EsMEJBZ0NBO0lBQUE7O0lBQ0FDO01BQ0FDO1FBQUFDO01BQUE7SUFEQSxHQUdBQyxJQUhBLENBR0E7TUFDQTtNQUNBO0lBQ0EsQ0FOQTtFQVFBLENBekNBO0VBMENBQztJQUdBQyxnQkFIQSw4QkFHQTtNQUNBO1FBQ0FDO01BREE7TUFJQU47UUFDQUUsMkJBREE7UUFFQXpCO01BRkEsR0FJQTBCLElBSkEsQ0FJQTtRQUNBSTs7UUFDQTtVQUNBQztZQUNBQyxlQURBO1lBRUFDO1VBRkE7UUFJQTtNQUNBLENBWkEsV0FhQTtRQUNBSDtNQUNBLENBZkE7SUFnQkE7RUF4QkEsQ0ExQ0E7RUF1RUFJLE9BdkVBLHFCQXVFQSxDQUVBLENBekVBO0VBMEVBQyxPQTFFQSxxQkEwRUEsQ0FH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TDs7O0FBRzdEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW9NLENBQWdCLDBQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xNC5idW5kbGUuNmRhNGE5NmZhYmVjNjEyYzc2NGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8PHRlbXBsYXRlPiBcclxuPG1haW4+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICA8aDE+QWRkIFBlcm1pc3Npb248L2gxPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCIgcmVmPVwicmVmX2xvYWRfcGVybWlzc2lvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy00XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInBlcm1pc3Npb25ib3hcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnQgY29nczFcIj48aSBjbGFzcz1cImZhIGZhLWNvZ3NcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0IGNvZ3MyXCI+QWRkIFBlcm1pc3Npb24gRGlyZWN0bHkgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJveC13YXJuaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZSBjYXJkLXRleHRcIj5BcHBseSBQZXJtaXNzaW9uczwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtZ3JvdXBcIiBpZD1cImFjY29yZGlvblwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiB2LWlmPVwicGVybWlzc2lvbnNcIiB2LWZvcj1cIihwZXIseCkgaW4gcGVybWlzc2lvbnNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwicGFuZWwtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhY2NvcmRpb24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvblwiIDpocmVmPVwiJyNjb2xsYXBzZU9uZScreFwiPiB7e3Blci5uYW1lfX0gPC9hPiA8L2g0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgOmlkPVwiJ2NvbGxhcHNlT25lJyt4XCIgY2xhc3M9XCJwYW5lbC1jb2xsYXBzZSBjb2xsYXBzZVwiIDprZXk9XCInYWMnK3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiIHYtZm9yPVwiKGRldGFpbCkgaW4gcGVyLmRldGFpbHNcIiA6a2V5PVwiZGV0YWlsLmlkKyctJyt4XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiA6dmFsdWU9XCJkZXRhaWwubWFwX2lkXCIgdi1tb2RlbD1cImFzc2lnbmVkX2lkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2RldGFpbC5uYW1lfX0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gbGluazEgd2lkdGhhdXRvXCIgQGNsaWNrPVwiZ3JhbmRfcGVybWlzc2lvblwiPkdyYW50IFBlcm1pc3Npb248L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8L21haW4+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcbiAgICBtYXBHZXR0ZXJzXHJcbn0gZnJvbSBcInZ1ZXhcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJVc2VyQWRkUGVybWlzc2lvblwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYXNzaWduZWRfaWRzOltdLFxyXG4gICAgICAgICAgcGVybWlzc2lvbnM6W10sXHJcbiAgICAgICAgICBzdGF0ZXM6W10sXHJcbiAgICAgICAgICBjaXRpZXM6W10sXHJcbiAgICAgICAgICAgIGVkaXRtb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICAgICAgdXNlcnM6IHt9LFxyXG4gICAgICAgICAgICBmcm1fdXNlcjogbmV3IEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzc18xOiAnJyxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3NfMjogJycsXHJcbiAgICAgICAgICAgICAgICBjaXR5OiAnJyxcclxuICAgICAgICAgICAgICAgIHN0YXRlOiAnJyxcclxuICAgICAgICAgICAgICAgIHppcF9jb2RlOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6ICd1bml0ZWQgc3RhdGVzJyxcclxuICAgICAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgIGZheDogJycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICAgICAgICAgIGFjY291bnRfaW5mbzogW11cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAuLi5tYXBHZXR0ZXJzKFtcImVycm9yc1wiXSlcclxuICAgIH0sXHJcbiAgICAgICAgYmVmb3JlQ3JlYXRlKCl7IFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL3VzZXIvcm9sZV9wZXJtaXNzaW9uc1wiICx7XHJcbiAgICAgICAgICAgIHBhcmFtczp7dXNlcjp0aGlzLiRyb3V0ZS5wYXJhbXMuaWR9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnM9cmVzLmRhdGEuZGF0YS5wZXJtaXNzaW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzaWduZWRfaWRzPXJlcy5kYXRhLmRhdGEuYXNzaWduZWRfaWRzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgXHJcblxyXG4gICAgICAgIGdyYW5kX3Blcm1pc3Npb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfcGVybWlzc2lvblxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvdXNlci9ncmFuZF9wZXJtaXNzaW9uJywge1xyXG4gICAgICAgICAgICAgICAgICB1c2VyOiB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zOiB0aGlzLmFzc2lnbmVkX2lkc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiBcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG5cclxuIFxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiBcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJtYWluXCIsIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInNlY3Rpb25cIiwgeyByZWY6IFwicmVmX2xvYWRfcGVybWlzc2lvblwiLCBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgX3ZtLl9tKDEpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3gtd2FybmluZ1wiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFuZWwtZ3JvdXBcIiwgYXR0cnM6IHsgaWQ6IFwiYWNjb3JkaW9uXCIgfSB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5wZXJtaXNzaW9ucywgZnVuY3Rpb24gKHBlciwgeCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnBlcm1pc3Npb25zXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFuZWwtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWNjb3JkaW9uLXRvZ2dsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1wYXJlbnRcIjogXCIjYWNjb3JkaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiNjb2xsYXBzZU9uZVwiICsgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHBlci5uYW1lKSArIFwiIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhY1wiICsgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWNvbGxhcHNlIGNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJjb2xsYXBzZU9uZVwiICsgeCB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHBlci5kZXRhaWxzLCBmdW5jdGlvbiAoZGV0YWlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGRldGFpbC5pZCArIFwiLVwiICsgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hc3NpZ25lZF9pZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFzc2lnbmVkX2lkc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZXRhaWwubWFwX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmFzc2lnbmVkX2lkcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hc3NpZ25lZF9pZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsLm1hcF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmFzc2lnbmVkX2lkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0uYXNzaWduZWRfaWRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBkZXRhaWwubWFwX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uYXNzaWduZWRfaWRzID0gJCRhLmNvbmNhdChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLmFzc2lnbmVkX2lkcyA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hc3NpZ25lZF9pZHMgPSAkJGNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhkZXRhaWwubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtZm9vdGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gbGluazEgd2lkdGhhdXRvXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmdyYW5kX3Blcm1pc3Npb24gfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHcmFudCBQZXJtaXNzaW9uXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkFkZCBQZXJtaXNzaW9uXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy00XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGVybWlzc2lvbmJveFwiLCBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdCBjb2dzMVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jb2dzXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0IGNvZ3MyXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJBZGQgUGVybWlzc2lvbiBEaXJlY3RseSBcIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIkFwcGx5IFBlcm1pc3Npb25zXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJsYWJlbFwiLCBbX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9IH0pXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9hZGRfcGVybWlzc2lvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTYwNjY5ZGYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYWRkX3Blcm1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9hZGRfcGVybWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE2MDY2OWRmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE2MDY2OWRmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE2MDY2OWRmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hZGRfcGVybWlzc2lvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTYwNjY5ZGYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTYwNjY5ZGYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL2FkZF9wZXJtaXNzaW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRkX3Blcm1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FkZF9wZXJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRkX3Blcm1pc3Npb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2MDY2OWRmJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==