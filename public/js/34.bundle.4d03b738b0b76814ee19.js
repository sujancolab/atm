(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/AccountDetail.vue":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/AccountDetail.vue ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      accountDetails: {
        name: 'HITACHI',
        email: 'axishelpdesk.east@hitachi-payments.com',
        mobile: '9380044870',
        code: 'axis@001',
        websiteUrl: 'https://www.hitachi-payments.com/',
        bankName: 'AXIS BANK',
        bankWebsiteUrl: 'https://retail.axisbank.co.in/'
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-2d8519d6\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/AccountDetail.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-2d8519d6","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/AccountDetail.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.card-header[data-v-2d8519d6] {\n  background-color: #4bc0c0;\n}\n.table th[data-v-2d8519d6] {\n  width: 30%;\n}\n.table td a[data-v-2d8519d6] {\n  color: #007bff;\n  text-decoration: none;\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/resources/js/components/AccountDetail.vue"],"names":[],"mappings":";AA+DA;EACA,0BAAA;CACA;AAEA;EACA,WAAA;CACA;AAEA;EACA,eAAA;EACA,sBAAA;CACA","file":"AccountDetail.vue","sourcesContent":["<template>\n    <div class=\"container mt-4\">\n      <div class=\"card\">\n        <div class=\"card-header bg-info text-white\">\n          <h3 class=\"text-center mb-0\">Account Details</h3>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-borderless\">\n            <tbody>\n              <tr>\n                <th scope=\"row\">Name</th>\n                <td>{{ accountDetails.name }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Email ID</th>\n                <td>{{ accountDetails.email }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Mobile Number</th>\n                <td>{{ accountDetails.mobile }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Code</th>\n                <td>{{ accountDetails.code }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Website URL</th>\n                <td><a :href=\"accountDetails.websiteUrl\" target=\"_blank\">{{ accountDetails.websiteUrl }}</a></td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Bank Name</th>\n                <td>{{ accountDetails.bankName }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Bank Website URL</th>\n                <td><a :href=\"accountDetails.bankWebsiteUrl\" target=\"_blank\">{{ accountDetails.bankWebsiteUrl }}</a></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </template>\n\n  <script>\n  export default {\n    data() {\n      return {\n        accountDetails: {\n          name: 'HITACHI',\n          email: 'axishelpdesk.east@hitachi-payments.com',\n          mobile: '9380044870',\n          code: 'axis@001',\n          websiteUrl: 'https://www.hitachi-payments.com/',\n          bankName: 'AXIS BANK',\n          bankWebsiteUrl: 'https://retail.axisbank.co.in/'\n        }\n      };\n    }\n  };\n  </script>\n\n  <style scoped>\n  .card-header {\n    background-color: #4bc0c0;\n  }\n\n  .table th {\n    width: 30%;\n  }\n\n  .table td a {\n    color: #007bff;\n    text-decoration: none;\n  }\n  </style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2d8519d6\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/AccountDetail.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2d8519d6","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/AccountDetail.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mt-4" }, [
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("table", { staticClass: "table table-borderless" }, [
          _c("tbody", [
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [_vm._v("Name")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.accountDetails.name))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [_vm._v("Email ID")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.accountDetails.email))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [_vm._v("Mobile Number")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.accountDetails.mobile))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [_vm._v("Code")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.accountDetails.code))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [_vm._v("Website URL")]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "a",
                  {
                    attrs: {
                      href: _vm.accountDetails.websiteUrl,
                      target: "_blank"
                    }
                  },
                  [_vm._v(_vm._s(_vm.accountDetails.websiteUrl))]
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [_vm._v("Bank Name")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.accountDetails.bankName))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [
                _vm._v("Bank Website URL")
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "a",
                  {
                    attrs: {
                      href: _vm.accountDetails.bankWebsiteUrl,
                      target: "_blank"
                    }
                  },
                  [_vm._v(_vm._s(_vm.accountDetails.bankWebsiteUrl))]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-info text-white" }, [
      _c("h3", { staticClass: "text-center mb-0" }, [_vm._v("Account Details")])
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-2d8519d6\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/AccountDetail.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-2d8519d6","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/AccountDetail.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-2d8519d6","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AccountDetail.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-2d8519d6\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/AccountDetail.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4d79c6e2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/js/components/AccountDetail.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/AccountDetail.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AccountDetail_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./AccountDetail.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/AccountDetail.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d8519d6_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AccountDetail_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-2d8519d6","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./AccountDetail.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2d8519d6\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/AccountDetail.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-2d8519d6","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./AccountDetail.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-2d8519d6\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/AccountDetail.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d8519d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AccountDetail_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d8519d6_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AccountDetail_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d8519d6_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AccountDetail_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\AccountDetail.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQWNjb3VudERldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQWNjb3VudERldGFpbC52dWU/Y2UzZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9BY2NvdW50RGV0YWlsLnZ1ZT9jNTYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FjY291bnREZXRhaWwudnVlP2Y3ZDEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQWNjb3VudERldGFpbC52dWUiXSwibmFtZXMiOlsiZGF0YSIsImFjY291bnREZXRhaWxzIiwibmFtZSIsImVtYWlsIiwibW9iaWxlIiwiY29kZSIsIndlYnNpdGVVcmwiLCJiYW5rTmFtZSIsImJhbmtXZWJzaXRlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZDQTtFQUNBQTtJQUNBO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7SUFDQTtFQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7QUMzREEsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxvQ0FBb0MsOEJBQThCLEdBQUcsOEJBQThCLGVBQWUsR0FBRyxnQ0FBZ0MsbUJBQW1CLDBCQUEwQixHQUFHLFVBQVUsc0xBQXNMLE1BQU0sV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLDBjQUEwYyx1QkFBdUIsdUhBQXVILHdCQUF3Qiw0SEFBNEgseUJBQXlCLG1IQUFtSCx1QkFBdUIsbUxBQW1MLDZCQUE2Qiw0SEFBNEgsMkJBQTJCLDRMQUE0TCxpQ0FBaUMsbUtBQW1LLGNBQWMsZ0JBQWdCLDJCQUEyQiwyVEFBMlQsVUFBVSxPQUFPLE1BQU0sbURBQW1ELGdDQUFnQyxLQUFLLGlCQUFpQixpQkFBaUIsS0FBSyxtQkFBbUIscUJBQXFCLDRCQUE0QixLQUFLLGlDQUFpQzs7QUFFMXNGOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0NBQWdDO0FBQ3BELGVBQWUsc0JBQXNCO0FBQ3JDO0FBQ0E7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDLHFCQUFxQix3Q0FBd0M7QUFDN0Q7QUFDQTtBQUNBLHdCQUF3QixTQUFTLGVBQWUsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVMsZUFBZSxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUyxlQUFlLEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTLGVBQWUsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVMsZUFBZSxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUyxlQUFlLEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTLGVBQWUsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBZ0Q7QUFDdEUsZ0JBQWdCLGtDQUFrQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNrQztBQUNsQyxJQUFJLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQzlGaEI7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsa2tCQUE4UztBQUNwVTtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsNkhBQWdFO0FBQ2xGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1hmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtQkFBTyxDQUFDLHltQkFBMFI7QUFDcFM7QUFDQTtBQUNvSDtBQUNhO0FBQ2pJO0FBQytVO0FBQy9VO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUc7QUFDbkcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLGdJQUFjO0FBQ2hCLEVBQUUsdU9BQWM7QUFDaEIsRUFBRSxnUEFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvMzQuYnVuZGxlLjRkMDNiNzM4YjBiNzY4MTRlZTE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXQtNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGJnLWluZm8gdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyIG1iLTBcIj5BY2NvdW50IERldGFpbHM8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmxlc3NcIj5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBhY2NvdW50RGV0YWlscy5uYW1lIH19PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPkVtYWlsIElEPC90aD5cbiAgICAgICAgICAgICAgICA8dGQ+e3sgYWNjb3VudERldGFpbHMuZW1haWwgfX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+TW9iaWxlIE51bWJlcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLm1vYmlsZSB9fTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5Db2RlPC90aD5cbiAgICAgICAgICAgICAgICA8dGQ+e3sgYWNjb3VudERldGFpbHMuY29kZSB9fTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5XZWJzaXRlIFVSTDwvdGg+XG4gICAgICAgICAgICAgICAgPHRkPjxhIDpocmVmPVwiYWNjb3VudERldGFpbHMud2Vic2l0ZVVybFwiIHRhcmdldD1cIl9ibGFua1wiPnt7IGFjY291bnREZXRhaWxzLndlYnNpdGVVcmwgfX08L2E+PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPkJhbmsgTmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLmJhbmtOYW1lIH19PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPkJhbmsgV2Vic2l0ZSBVUkw8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZD48YSA6aHJlZj1cImFjY291bnREZXRhaWxzLmJhbmtXZWJzaXRlVXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgYWNjb3VudERldGFpbHMuYmFua1dlYnNpdGVVcmwgfX08L2E+PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjY291bnREZXRhaWxzOiB7XG4gICAgICAgICAgbmFtZTogJ0hJVEFDSEknLFxuICAgICAgICAgIGVtYWlsOiAnYXhpc2hlbHBkZXNrLmVhc3RAaGl0YWNoaS1wYXltZW50cy5jb20nLFxuICAgICAgICAgIG1vYmlsZTogJzkzODAwNDQ4NzAnLFxuICAgICAgICAgIGNvZGU6ICdheGlzQDAwMScsXG4gICAgICAgICAgd2Vic2l0ZVVybDogJ2h0dHBzOi8vd3d3LmhpdGFjaGktcGF5bWVudHMuY29tLycsXG4gICAgICAgICAgYmFua05hbWU6ICdBWElTIEJBTksnLFxuICAgICAgICAgIGJhbmtXZWJzaXRlVXJsOiAnaHR0cHM6Ly9yZXRhaWwuYXhpc2JhbmsuY28uaW4vJ1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbiAgPC9zY3JpcHQ+XG5cbiAgPHN0eWxlIHNjb3BlZD5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJjMGMwO1xuICB9XG5cbiAgLnRhYmxlIHRoIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG5cbiAgLnRhYmxlIHRkIGEge1xuICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICA8L3N0eWxlPlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jYXJkLWhlYWRlcltkYXRhLXYtMmQ4NTE5ZDZdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmMwYzA7XFxufVxcbi50YWJsZSB0aFtkYXRhLXYtMmQ4NTE5ZDZdIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcbi50YWJsZSB0ZCBhW2RhdGEtdi0yZDg1MTlkNl0ge1xcbiAgY29sb3I6ICMwMDdiZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9zdWphbi9EZXNrdG9wL1dvcmsvcHJvamVjdCBmcmVlbGFuY2UvU2Fua2hhL2F0bV9wcm9qL2F0bS9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9BY2NvdW50RGV0YWlsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBK0RBO0VBQ0EsMEJBQUE7Q0FDQTtBQUVBO0VBQ0EsV0FBQTtDQUNBO0FBRUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQWNjb3VudERldGFpbC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbXQtNFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlciBiZy1pbmZvIHRleHQtd2hpdGVcXFwiPlxcbiAgICAgICAgICA8aDMgY2xhc3M9XFxcInRleHQtY2VudGVyIG1iLTBcXFwiPkFjY291bnQgRGV0YWlsczwvaDM+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVybGVzc1xcXCI+XFxuICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XFxcInJvd1xcXCI+TmFtZTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0ZD57eyBhY2NvdW50RGV0YWlscy5uYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIj5FbWFpbCBJRDwvdGg+XFxuICAgICAgICAgICAgICAgIDx0ZD57eyBhY2NvdW50RGV0YWlscy5lbWFpbCB9fTwvdGQ+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XFxcInJvd1xcXCI+TW9iaWxlIE51bWJlcjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0ZD57eyBhY2NvdW50RGV0YWlscy5tb2JpbGUgfX08L3RkPlxcbiAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVxcXCJyb3dcXFwiPkNvZGU8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3sgYWNjb3VudERldGFpbHMuY29kZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XFxcInJvd1xcXCI+V2Vic2l0ZSBVUkw8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgOmhyZWY9XFxcImFjY291bnREZXRhaWxzLndlYnNpdGVVcmxcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj57eyBhY2NvdW50RGV0YWlscy53ZWJzaXRlVXJsIH19PC9hPjwvdGQ+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XFxcInJvd1xcXCI+QmFuayBOYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLmJhbmtOYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIj5CYW5rIFdlYnNpdGUgVVJMPC90aD5cXG4gICAgICAgICAgICAgICAgPHRkPjxhIDpocmVmPVxcXCJhY2NvdW50RGV0YWlscy5iYW5rV2Vic2l0ZVVybFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPnt7IGFjY291bnREZXRhaWxzLmJhbmtXZWJzaXRlVXJsIH19PC9hPjwvdGQ+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L3RlbXBsYXRlPlxcblxcbiAgPHNjcmlwdD5cXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgZGF0YSgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgYWNjb3VudERldGFpbHM6IHtcXG4gICAgICAgICAgbmFtZTogJ0hJVEFDSEknLFxcbiAgICAgICAgICBlbWFpbDogJ2F4aXNoZWxwZGVzay5lYXN0QGhpdGFjaGktcGF5bWVudHMuY29tJyxcXG4gICAgICAgICAgbW9iaWxlOiAnOTM4MDA0NDg3MCcsXFxuICAgICAgICAgIGNvZGU6ICdheGlzQDAwMScsXFxuICAgICAgICAgIHdlYnNpdGVVcmw6ICdodHRwczovL3d3dy5oaXRhY2hpLXBheW1lbnRzLmNvbS8nLFxcbiAgICAgICAgICBiYW5rTmFtZTogJ0FYSVMgQkFOSycsXFxuICAgICAgICAgIGJhbmtXZWJzaXRlVXJsOiAnaHR0cHM6Ly9yZXRhaWwuYXhpc2JhbmsuY28uaW4vJ1xcbiAgICAgICAgfVxcbiAgICAgIH07XFxuICAgIH1cXG4gIH07XFxuICA8L3NjcmlwdD5cXG5cXG4gIDxzdHlsZSBzY29wZWQ+XFxuICAuY2FyZC1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJjMGMwO1xcbiAgfVxcblxcbiAgLnRhYmxlIHRoIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gIH1cXG5cXG4gIC50YWJsZSB0ZCBhIHtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG4gIDwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXQtNFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzXCIgfSwgW1xuICAgICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJyb3dcIiB9IH0sIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmFjY291bnREZXRhaWxzLm5hbWUpKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcInJvd1wiIH0gfSwgW192bS5fdihcIkVtYWlsIElEXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmFjY291bnREZXRhaWxzLmVtYWlsKSldKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJyb3dcIiB9IH0sIFtfdm0uX3YoXCJNb2JpbGUgTnVtYmVyXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmFjY291bnREZXRhaWxzLm1vYmlsZSkpXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwicm93XCIgfSB9LCBbX3ZtLl92KFwiQ29kZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5hY2NvdW50RGV0YWlscy5jb2RlKSldKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJyb3dcIiB9IH0sIFtfdm0uX3YoXCJXZWJzaXRlIFVSTFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5hY2NvdW50RGV0YWlscy53ZWJzaXRlVXJsLFxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmFjY291bnREZXRhaWxzLndlYnNpdGVVcmwpKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcInJvd1wiIH0gfSwgW192bS5fdihcIkJhbmsgTmFtZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5hY2NvdW50RGV0YWlscy5iYW5rTmFtZSkpXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwicm93XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiQmFuayBXZWJzaXRlIFVSTFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0uYWNjb3VudERldGFpbHMuYmFua1dlYnNpdGVVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uYWNjb3VudERldGFpbHMuYmFua1dlYnNpdGVVcmwpKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyIGJnLWluZm8gdGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtYi0wXCIgfSwgW192bS5fdihcIkFjY291bnQgRGV0YWlsc1wiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTJkODUxOWQ2XCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJkODUxOWQ2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQWNjb3VudERldGFpbC52dWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNGQ3OWM2ZTJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yZDg1MTlkNlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FjY291bnREZXRhaWwudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yZDg1MTlkNlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FjY291bnREZXRhaWwudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJkODUxOWQ2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQWNjb3VudERldGFpbC52dWVcIilcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQWNjb3VudERldGFpbC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FjY291bnREZXRhaWwudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTJkODUxOWQ2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQWNjb3VudERldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMmQ4NTE5ZDZcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxBY2NvdW50RGV0YWlsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yZDg1MTlkNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJkODUxOWQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=