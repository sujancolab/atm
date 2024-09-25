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
          type: "checkbox",
          name: "per" + detail.map_id,
          id: "per" + detail.map_id
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
      }), _vm._v("\r\n                        " + _vm._s(detail.name) + " \r\n                        ")])]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvYWRkX3Blcm1pc3Npb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL2FkZF9wZXJtaXNzaW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9hZGRfcGVybWlzc2lvbi52dWU/NjgwNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9hZGRfcGVybWlzc2lvbi52dWU/MjE5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9hZGRfcGVybWlzc2lvbi52dWU/ODEzZiJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsImFzc2lnbmVkX2lkcyIsInBlcm1pc3Npb25zIiwic3RhdGVzIiwiY2l0aWVzIiwiZWRpdG1vZGUiLCJzdGVwIiwidXNlcnMiLCJmcm1fdXNlciIsImlkIiwib3JnYW5pemF0aW9uIiwiYWRkcmVzc18xIiwiYWRkcmVzc18yIiwiY2l0eSIsInN0YXRlIiwiemlwX2NvZGUiLCJjb3VudHJ5IiwicGhvbmUiLCJlbWFpbCIsImZheCIsInR5cGUiLCJhY2NvdW50X2luZm8iLCJjb21wdXRlZCIsIm1hcEdldHRlcnMiLCJiZWZvcmVDcmVhdGUiLCJheGlvcyIsInBhcmFtcyIsInVzZXIiLCJ0aGVuIiwibWV0aG9kcyIsImdyYW5kX3Blcm1pc3Npb24iLCJjb250YWluZXIiLCJjbG9hZGVyZCIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwibW91bnRlZCIsImNyZWF0ZWQiLCJ3YXRjaCIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJfbSIsIl92IiwicmVmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsIl9sIiwicGVyIiwieCIsImhyZWYiLCJfcyIsImtleSIsImRldGFpbHMiLCJkZXRhaWwiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsInZhbHVlIiwiZXhwcmVzc2lvbiIsIm1hcF9pZCIsImRvbVByb3BzIiwiY2hlY2tlZCIsIkFycmF5IiwiaXNBcnJheSIsIl9pIiwib24iLCJjaGFuZ2UiLCIkZXZlbnQiLCIkJGEiLCIkJGVsIiwidGFyZ2V0IiwiJCRjIiwiJCR2IiwiJCRpIiwiY29uY2F0Iiwic2xpY2UiLCJfZSIsImNsaWNrIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBO0FBR2U7RUFDZkEseUJBREE7RUFFQUMsSUFGQSxrQkFFQTtJQUNBO01BQ0FDLGdCQURBO01BRUFDLGVBRkE7TUFHQUMsVUFIQTtNQUlBQyxVQUpBO01BS0FDLGVBTEE7TUFNQUMsT0FOQTtNQU9BQyxTQVBBO01BUUFDO1FBQ0FDLE1BREE7UUFFQUMsZ0JBRkE7UUFHQVgsUUFIQTtRQUlBWSxhQUpBO1FBS0FDLGFBTEE7UUFNQUMsUUFOQTtRQU9BQyxTQVBBO1FBUUFDLFlBUkE7UUFTQUMsd0JBVEE7UUFVQUMsU0FWQTtRQVdBQyxTQVhBO1FBWUFDLE9BWkE7UUFhQUMsUUFiQTtRQWNBQztNQWRBO0lBUkE7RUF5QkEsQ0E1QkE7RUE2QkFDLDRCQUNBQyxtRUFEQSxDQTdCQTtFQWdDQUMsWUFoQ0EsMEJBZ0NBO0lBQUE7O0lBQ0FDO01BQ0FDO1FBQUFDO01BQUE7SUFEQSxHQUdBQyxJQUhBLENBR0E7TUFDQTtNQUNBO0lBQ0EsQ0FOQTtFQVFBLENBekNBO0VBMENBQztJQUdBQyxnQkFIQSw4QkFHQTtNQUNBO1FBQ0FDO01BREE7TUFJQU47UUFDQUUsMkJBREE7UUFFQXpCO01BRkEsR0FJQTBCLElBSkEsQ0FJQTtRQUNBSTs7UUFDQTtVQUNBQztZQUNBQyxlQURBO1lBRUFDO1VBRkE7UUFJQTtNQUNBLENBWkEsV0FhQTtRQUNBSDtNQUNBLENBZkE7SUFnQkE7RUF4QkEsQ0ExQ0E7RUF1RUFJLE9BdkVBLHFCQXVFQSxDQUVBLENBekVBO0VBMEVBQyxPQTFFQSxxQkEwRUEsQ0FH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QW1CLE1BQU0sQ0FBQ3lDLGFBQVAsR0FBdUIsSUFBdkI7Ozs7Ozs7Ozs7Ozs7QUNsTUE7QUFBQTtBQUFBO0FBQUE7QUFBNkY7QUFDM0I7QUFDTDs7O0FBRzdEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW9NLENBQWdCLDBQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xNC5idW5kbGUuYWE3YmU3MTJkMThmNzYyOTM5NDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8PHRlbXBsYXRlPiBcclxuPG1haW4+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICA8aDE+QWRkIFBlcm1pc3Npb248L2gxPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCIgcmVmPVwicmVmX2xvYWRfcGVybWlzc2lvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy00XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInBlcm1pc3Npb25ib3hcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnQgY29nczFcIj48aSBjbGFzcz1cImZhIGZhLWNvZ3NcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0IGNvZ3MyXCI+QWRkIFBlcm1pc3Npb24gRGlyZWN0bHkgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJveC13YXJuaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZSBjYXJkLXRleHRcIj5BcHBseSBQZXJtaXNzaW9uczwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtZ3JvdXBcIiBpZD1cImFjY29yZGlvblwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiB2LWlmPVwicGVybWlzc2lvbnNcIiB2LWZvcj1cIihwZXIseCkgaW4gcGVybWlzc2lvbnNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwicGFuZWwtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhY2NvcmRpb24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvblwiIDpocmVmPVwiJyNjb2xsYXBzZU9uZScreFwiPiB7e3Blci5uYW1lfX0gPC9hPiA8L2g0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgOmlkPVwiJ2NvbGxhcHNlT25lJyt4XCIgY2xhc3M9XCJwYW5lbC1jb2xsYXBzZSBjb2xsYXBzZVwiIDprZXk9XCInYWMnK3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiIHYtZm9yPVwiKGRldGFpbCkgaW4gcGVyLmRldGFpbHNcIiA6a2V5PVwiZGV0YWlsLmlkKyctJyt4XCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIDp2YWx1ZT1cImRldGFpbC5tYXBfaWRcIiB2LW1vZGVsPVwiYXNzaWduZWRfaWRzXCIgOm5hbWU9XCIncGVyJytkZXRhaWwubWFwX2lkXCIgOmlkPVwiJ3BlcicrZGV0YWlsLm1hcF9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2RldGFpbC5uYW1lfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGxpbmsxIHdpZHRoYXV0b1wiIEBjbGljaz1cImdyYW5kX3Blcm1pc3Npb25cIj5HcmFudCBQZXJtaXNzaW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPC9tYWluPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQge1xyXG4gICAgbWFwR2V0dGVyc1xyXG59IGZyb20gXCJ2dWV4XCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiVXNlckFkZFBlcm1pc3Npb25cIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGFzc2lnbmVkX2lkczpbXSxcclxuICAgICAgICAgIHBlcm1pc3Npb25zOltdLFxyXG4gICAgICAgICAgc3RhdGVzOltdLFxyXG4gICAgICAgICAgY2l0aWVzOltdLFxyXG4gICAgICAgICAgICBlZGl0bW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgICAgIHVzZXJzOiB7fSxcclxuICAgICAgICAgICAgZnJtX3VzZXI6IG5ldyBGb3JtKHtcclxuICAgICAgICAgICAgICAgIGlkOiAnJyxcclxuICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3NfMTogJycsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzXzI6ICcnLFxyXG4gICAgICAgICAgICAgICAgY2l0eTogJycsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICB6aXBfY29kZTogJycsXHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiAndW5pdGVkIHN0YXRlcycsXHJcbiAgICAgICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgICAgICBmYXg6ICcnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJycsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50X2luZm86IFtdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgLi4ubWFwR2V0dGVycyhbXCJlcnJvcnNcIl0pXHJcbiAgICB9LFxyXG4gICAgICAgIGJlZm9yZUNyZWF0ZSgpeyBcclxuICAgICAgICAgIGF4aW9zLmdldChcImFwaS91c2VyL3JvbGVfcGVybWlzc2lvbnNcIiAse1xyXG4gICAgICAgICAgICBwYXJhbXM6e3VzZXI6dGhpcy4kcm91dGUucGFyYW1zLmlkfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zPXJlcy5kYXRhLmRhdGEucGVybWlzc2lvbnNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2lnbmVkX2lkcz1yZXMuZGF0YS5kYXRhLmFzc2lnbmVkX2lkc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gIFxyXG5cclxuICAgICAgICBncmFuZF9wZXJtaXNzaW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX3Blcm1pc3Npb25cclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICBcclxuICAgICAgICAgICAgYXhpb3MucG9zdCgnYXBpL3VzZXIvZ3JhbmRfcGVybWlzc2lvbicsIHtcclxuICAgICAgICAgICAgICAgICAgdXNlcjogdGhpcy4kcm91dGUucGFyYW1zLmlkLFxyXG4gICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uczogdGhpcy5hc3NpZ25lZF9pZHNcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuXHJcbiBcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwibWFpblwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgcmVmOiBcInJlZl9sb2FkX3Blcm1pc3Npb25cIiwgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgIF92bS5fbSgxKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LXdhcm5pbmdcIiB9LCBbXG4gICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhbmVsLWdyb3VwXCIsIGF0dHJzOiB7IGlkOiBcImFjY29yZGlvblwiIH0gfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ucGVybWlzc2lvbnMsIGZ1bmN0aW9uIChwZXIsIHgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5wZXJtaXNzaW9uc1xuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhbmVsLWhlYWRpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcInBhbmVsLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMsIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjY29yZGlvbi10b2dnbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtcGFyZW50XCI6IFwiI2FjY29yZGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIjY29sbGFwc2VPbmVcIiArIHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBcIiArIF92bS5fcyhwZXIubmFtZSkgKyBcIiBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYWNcIiArIHgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1jb2xsYXBzZSBjb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY29sbGFwc2VPbmVcIiArIHggfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChwZXIuZGV0YWlscywgZnVuY3Rpb24gKGRldGFpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBkZXRhaWwuaWQgKyBcIi1cIiArIHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYXNzaWduZWRfaWRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhc3NpZ25lZF9pZHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBlclwiICsgZGV0YWlsLm1hcF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJwZXJcIiArIGRldGFpbC5tYXBfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRldGFpbC5tYXBfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0uYXNzaWduZWRfaWRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFzc2lnbmVkX2lkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwubWFwX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uYXNzaWduZWRfaWRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5hc3NpZ25lZF9pZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IGRldGFpbC5tYXBfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5hc3NpZ25lZF9pZHMgPSAkJGEuY29uY2F0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uYXNzaWduZWRfaWRzID0gJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFzc2lnbmVkX2lkcyA9ICQkY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGRldGFpbC5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMSB3aWR0aGF1dG9cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZ3JhbmRfcGVybWlzc2lvbiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkdyYW50IFBlcm1pc3Npb25cIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiQWRkIFBlcm1pc3Npb25cIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwZXJtaXNzaW9uYm94XCIsIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0IGNvZ3MxXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNvZ3NcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnQgY29nczJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkFkZCBQZXJtaXNzaW9uIERpcmVjdGx5IFwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9KSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIGNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiQXBwbHkgUGVybWlzc2lvbnNcIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImxhYmVsXCIsIFtfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0gfSldKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FkZF9wZXJtaXNzaW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjA2NjlkZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hZGRfcGVybWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FkZF9wZXJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTYwNjY5ZGYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTYwNjY5ZGYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTYwNjY5ZGYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FkZF9wZXJtaXNzaW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjA2NjlkZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNjA2NjlkZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvYWRkX3Blcm1pc3Npb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hZGRfcGVybWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRkX3Blcm1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hZGRfcGVybWlzc2lvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTYwNjY5ZGYmXCIiXSwic291cmNlUm9vdCI6IiJ9