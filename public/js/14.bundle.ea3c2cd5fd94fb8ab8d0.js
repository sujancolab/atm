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
        staticClass: "checkbox",
        attrs: {
          "for": "per" + detail.map_id
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvYWRkX3Blcm1pc3Npb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL2FkZF9wZXJtaXNzaW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9hZGRfcGVybWlzc2lvbi52dWU/NjgwNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9hZGRfcGVybWlzc2lvbi52dWU/MjE5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9hZGRfcGVybWlzc2lvbi52dWU/ODEzZiJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsImFzc2lnbmVkX2lkcyIsInBlcm1pc3Npb25zIiwic3RhdGVzIiwiY2l0aWVzIiwiZWRpdG1vZGUiLCJzdGVwIiwidXNlcnMiLCJmcm1fdXNlciIsImlkIiwib3JnYW5pemF0aW9uIiwiYWRkcmVzc18xIiwiYWRkcmVzc18yIiwiY2l0eSIsInN0YXRlIiwiemlwX2NvZGUiLCJjb3VudHJ5IiwicGhvbmUiLCJlbWFpbCIsImZheCIsInR5cGUiLCJhY2NvdW50X2luZm8iLCJjb21wdXRlZCIsIm1hcEdldHRlcnMiLCJiZWZvcmVDcmVhdGUiLCJheGlvcyIsInBhcmFtcyIsInVzZXIiLCJ0aGVuIiwibWV0aG9kcyIsImdyYW5kX3Blcm1pc3Npb24iLCJjb250YWluZXIiLCJjbG9hZGVyZCIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwibW91bnRlZCIsImNyZWF0ZWQiLCJ3YXRjaCIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJfbSIsIl92IiwicmVmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsIl9sIiwicGVyIiwieCIsImhyZWYiLCJfcyIsImtleSIsImRldGFpbHMiLCJkZXRhaWwiLCJtYXBfaWQiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsInZhbHVlIiwiZXhwcmVzc2lvbiIsImRvbVByb3BzIiwiY2hlY2tlZCIsIkFycmF5IiwiaXNBcnJheSIsIl9pIiwib24iLCJjaGFuZ2UiLCIkZXZlbnQiLCIkJGEiLCIkJGVsIiwidGFyZ2V0IiwiJCRjIiwiJCR2IiwiJCRpIiwiY29uY2F0Iiwic2xpY2UiLCJfZSIsImNsaWNrIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBO0FBR2U7RUFDZkEseUJBREE7RUFFQUMsSUFGQSxrQkFFQTtJQUNBO01BQ0FDLGdCQURBO01BRUFDLGVBRkE7TUFHQUMsVUFIQTtNQUlBQyxVQUpBO01BS0FDLGVBTEE7TUFNQUMsT0FOQTtNQU9BQyxTQVBBO01BUUFDO1FBQ0FDLE1BREE7UUFFQUMsZ0JBRkE7UUFHQVgsUUFIQTtRQUlBWSxhQUpBO1FBS0FDLGFBTEE7UUFNQUMsUUFOQTtRQU9BQyxTQVBBO1FBUUFDLFlBUkE7UUFTQUMsd0JBVEE7UUFVQUMsU0FWQTtRQVdBQyxTQVhBO1FBWUFDLE9BWkE7UUFhQUMsUUFiQTtRQWNBQztNQWRBO0lBUkE7RUF5QkEsQ0E1QkE7RUE2QkFDLDRCQUNBQyxtRUFEQSxDQTdCQTtFQWdDQUMsWUFoQ0EsMEJBZ0NBO0lBQUE7O0lBQ0FDO01BQ0FDO1FBQUFDO01BQUE7SUFEQSxHQUdBQyxJQUhBLENBR0E7TUFDQTtNQUNBO0lBQ0EsQ0FOQTtFQVFBLENBekNBO0VBMENBQztJQUdBQyxnQkFIQSw4QkFHQTtNQUNBO1FBQ0FDO01BREE7TUFJQU47UUFDQUUsMkJBREE7UUFFQXpCO01BRkEsR0FJQTBCLElBSkEsQ0FJQTtRQUNBSTs7UUFDQTtVQUNBQztZQUNBQyxlQURBO1lBRUFDO1VBRkE7UUFJQTtNQUNBLENBWkEsV0FhQTtRQUNBSDtNQUNBLENBZkE7SUFnQkE7RUF4QkEsQ0ExQ0E7RUF1RUFJLE9BdkVBLHFCQXVFQSxDQUVBLENBekVBO0VBMEVBQyxPQTFFQSxxQkEwRUEsQ0FH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QUFFO0lBQVI7RUFBVCxDQUFWLENBQUgsQ0FBVixDQUFUO0FBQ0QsQ0EvQ21CLENBQXRCO0FBaURBbUIsTUFBTSxDQUFDeUMsYUFBUCxHQUF1QixJQUF2Qjs7Ozs7Ozs7Ozs7OztBQ25NQTtBQUFBO0FBQUE7QUFBQTtBQUE2RjtBQUMzQjtBQUNMOzs7QUFHN0Q7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsb0ZBQU07QUFDUixFQUFFLHlGQUFNO0FBQ1IsRUFBRSxrR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBb00sQ0FBZ0IsMFBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBeE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzE0LmJ1bmRsZS5lYTNjMmNkNWZkOTRmYjhhYjhkMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjw8dGVtcGxhdGU+IFxyXG48bWFpbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgIDxoMT5BZGQgUGVybWlzc2lvbjwvaDE+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIiByZWY9XCJyZWZfbG9hZF9wZXJtaXNzaW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTRcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicGVybWlzc2lvbmJveFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdCBjb2dzMVwiPjxpIGNsYXNzPVwiZmEgZmEtY29nc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnQgY29nczJcIj5BZGQgUGVybWlzc2lvbiBEaXJlY3RseSA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LXdhcm5pbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPkFwcGx5IFBlcm1pc3Npb25zPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ncm91cFwiIGlkPVwiYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiIHYtaWY9XCJwZXJtaXNzaW9uc1wiIHYtZm9yPVwiKHBlcix4KSBpbiBwZXJtaXNzaW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJwYW5lbC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImFjY29yZGlvbi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCIgOmhyZWY9XCInI2NvbGxhcHNlT25lJyt4XCI+IHt7cGVyLm5hbWV9fSA8L2E+IDwvaDQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiA6aWQ9XCInY29sbGFwc2VPbmUnK3hcIiBjbGFzcz1cInBhbmVsLWNvbGxhcHNlIGNvbGxhcHNlXCIgOmtleT1cIidhYycreFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCIgdi1mb3I9XCIoZGV0YWlsKSBpbiBwZXIuZGV0YWlsc1wiIDprZXk9XCJkZXRhaWwuaWQrJy0nK3hcIiA6Zm9yPVwiJ3BlcicrZGV0YWlsLm1hcF9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgOnZhbHVlPVwiZGV0YWlsLm1hcF9pZFwiIHYtbW9kZWw9XCJhc3NpZ25lZF9pZHNcIiA6bmFtZT1cIidwZXInK2RldGFpbC5tYXBfaWRcIiA6aWQ9XCIncGVyJytkZXRhaWwubWFwX2lkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZGV0YWlsLm5hbWV9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gbGluazEgd2lkdGhhdXRvXCIgQGNsaWNrPVwiZ3JhbmRfcGVybWlzc2lvblwiPkdyYW50IFBlcm1pc3Npb248L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8L21haW4+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcbiAgICBtYXBHZXR0ZXJzXHJcbn0gZnJvbSBcInZ1ZXhcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJVc2VyQWRkUGVybWlzc2lvblwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYXNzaWduZWRfaWRzOltdLFxyXG4gICAgICAgICAgcGVybWlzc2lvbnM6W10sXHJcbiAgICAgICAgICBzdGF0ZXM6W10sXHJcbiAgICAgICAgICBjaXRpZXM6W10sXHJcbiAgICAgICAgICAgIGVkaXRtb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICAgICAgdXNlcnM6IHt9LFxyXG4gICAgICAgICAgICBmcm1fdXNlcjogbmV3IEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzc18xOiAnJyxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3NfMjogJycsXHJcbiAgICAgICAgICAgICAgICBjaXR5OiAnJyxcclxuICAgICAgICAgICAgICAgIHN0YXRlOiAnJyxcclxuICAgICAgICAgICAgICAgIHppcF9jb2RlOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6ICd1bml0ZWQgc3RhdGVzJyxcclxuICAgICAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgIGZheDogJycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICAgICAgICAgIGFjY291bnRfaW5mbzogW11cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAuLi5tYXBHZXR0ZXJzKFtcImVycm9yc1wiXSlcclxuICAgIH0sXHJcbiAgICAgICAgYmVmb3JlQ3JlYXRlKCl7IFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL3VzZXIvcm9sZV9wZXJtaXNzaW9uc1wiICx7XHJcbiAgICAgICAgICAgIHBhcmFtczp7dXNlcjp0aGlzLiRyb3V0ZS5wYXJhbXMuaWR9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnM9cmVzLmRhdGEuZGF0YS5wZXJtaXNzaW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzaWduZWRfaWRzPXJlcy5kYXRhLmRhdGEuYXNzaWduZWRfaWRzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgXHJcblxyXG4gICAgICAgIGdyYW5kX3Blcm1pc3Npb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfcGVybWlzc2lvblxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvdXNlci9ncmFuZF9wZXJtaXNzaW9uJywge1xyXG4gICAgICAgICAgICAgICAgICB1c2VyOiB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zOiB0aGlzLmFzc2lnbmVkX2lkc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiBcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG5cclxuIFxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiBcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJtYWluXCIsIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInNlY3Rpb25cIiwgeyByZWY6IFwicmVmX2xvYWRfcGVybWlzc2lvblwiLCBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgX3ZtLl9tKDEpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3gtd2FybmluZ1wiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFuZWwtZ3JvdXBcIiwgYXR0cnM6IHsgaWQ6IFwiYWNjb3JkaW9uXCIgfSB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5wZXJtaXNzaW9ucywgZnVuY3Rpb24gKHBlciwgeCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnBlcm1pc3Npb25zXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFuZWwtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWNjb3JkaW9uLXRvZ2dsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1wYXJlbnRcIjogXCIjYWNjb3JkaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiNjb2xsYXBzZU9uZVwiICsgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHBlci5uYW1lKSArIFwiIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhY1wiICsgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWNvbGxhcHNlIGNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJjb2xsYXBzZU9uZVwiICsgeCB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHBlci5kZXRhaWxzLCBmdW5jdGlvbiAoZGV0YWlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGRldGFpbC5pZCArIFwiLVwiICsgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJwZXJcIiArIGRldGFpbC5tYXBfaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYXNzaWduZWRfaWRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhc3NpZ25lZF9pZHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBlclwiICsgZGV0YWlsLm1hcF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJwZXJcIiArIGRldGFpbC5tYXBfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRldGFpbC5tYXBfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0uYXNzaWduZWRfaWRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFzc2lnbmVkX2lkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwubWFwX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uYXNzaWduZWRfaWRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5hc3NpZ25lZF9pZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IGRldGFpbC5tYXBfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5hc3NpZ25lZF9pZHMgPSAkJGEuY29uY2F0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uYXNzaWduZWRfaWRzID0gJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFzc2lnbmVkX2lkcyA9ICQkY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGRldGFpbC5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMSB3aWR0aGF1dG9cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZ3JhbmRfcGVybWlzc2lvbiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkdyYW50IFBlcm1pc3Npb25cIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiQWRkIFBlcm1pc3Npb25cIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwZXJtaXNzaW9uYm94XCIsIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0IGNvZ3MxXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNvZ3NcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnQgY29nczJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkFkZCBQZXJtaXNzaW9uIERpcmVjdGx5IFwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9KSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIGNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiQXBwbHkgUGVybWlzc2lvbnNcIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImxhYmVsXCIsIFtfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0gfSldKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FkZF9wZXJtaXNzaW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjA2NjlkZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hZGRfcGVybWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FkZF9wZXJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTYwNjY5ZGYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTYwNjY5ZGYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTYwNjY5ZGYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FkZF9wZXJtaXNzaW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjA2NjlkZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNjA2NjlkZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvYWRkX3Blcm1pc3Npb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hZGRfcGVybWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRkX3Blcm1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hZGRfcGVybWlzc2lvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTYwNjY5ZGYmXCIiXSwic291cmNlUm9vdCI6IiJ9