(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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
  },
  beforeCreate() {
    axios.get("api/account-detail").then(res => {
      console.log("res====>", res.data);
      // this.complaint = res.data.data.complaint;
      // this.atm_details = res.data.data.atm_details;
      // this.complaint_details = res.data.data.complaint_details;
      // this.custodian_details = res.data.data.custodian_details;
      // this.sls_details = res.data.data.sls_details;
      // this.selectedStatus = this.complaint.work_status || 'Pending';
      // console.log("atm",atm_details);
    });
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
exports.push([module.i, "\n.card-header[data-v-2d8519d6] {\n  background-color: #4bc0c0;\n}\n.table th[data-v-2d8519d6] {\n  width: 30%;\n}\n.table td a[data-v-2d8519d6] {\n  color: #007bff;\n  text-decoration: none;\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/resources/js/components/AccountDetail.vue"],"names":[],"mappings":";AA8EA;EACA,0BAAA;CACA;AAEA;EACA,WAAA;CACA;AAEA;EACA,eAAA;EACA,sBAAA;CACA","file":"AccountDetail.vue","sourcesContent":["<template>\n    <div class=\"container mt-4\">\n      <div class=\"card\">\n        <div class=\"card-header bg-info text-white\">\n          <h3 class=\"text-center mb-0\">Account Details</h3>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-borderless\">\n            <tbody>\n              <tr>\n                <th scope=\"row\">Name</th>\n                <td>{{ accountDetails.name }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Email ID</th>\n                <td>{{ accountDetails.email }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Mobile Number</th>\n                <td>{{ accountDetails.mobile }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Code</th>\n                <td>{{ accountDetails.code }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Website URL</th>\n                <td><a :href=\"accountDetails.websiteUrl\" target=\"_blank\">{{ accountDetails.websiteUrl }}</a></td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Bank Name</th>\n                <td>{{ accountDetails.bankName }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Bank Website URL</th>\n                <td><a :href=\"accountDetails.bankWebsiteUrl\" target=\"_blank\">{{ accountDetails.bankWebsiteUrl }}</a></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </template>\n\n  <script>\n  export default {\n    data() {\n      return {\n        accountDetails: {\n          name: 'HITACHI',\n          email: 'axishelpdesk.east@hitachi-payments.com',\n          mobile: '9380044870',\n          code: 'axis@001',\n          websiteUrl: 'https://www.hitachi-payments.com/',\n          bankName: 'AXIS BANK',\n          bankWebsiteUrl: 'https://retail.axisbank.co.in/'\n        }\n      };\n    },\n    beforeCreate() {\n        axios.get(\"api/account-detail\")\n            .then((res) => {\n                console.log(\"res====>\", res.data);\n                // this.complaint = res.data.data.complaint;\n                // this.atm_details = res.data.data.atm_details;\n                // this.complaint_details = res.data.data.complaint_details;\n                // this.custodian_details = res.data.data.custodian_details;\n                // this.sls_details = res.data.data.sls_details;\n                // this.selectedStatus = this.complaint.work_status || 'Pending';\n                // console.log(\"atm\",atm_details);\n\n            });\n\n    },\n  };\n  </script>\n\n  <style scoped>\n  .card-header {\n    background-color: #4bc0c0;\n  }\n\n  .table th {\n    width: 30%;\n  }\n\n  .table td a {\n    color: #007bff;\n    text-decoration: none;\n  }\n  </style>\n"],"sourceRoot":""}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQWNjb3VudERldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQWNjb3VudERldGFpbC52dWU/Y2UzZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9BY2NvdW50RGV0YWlsLnZ1ZT9jNTYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FjY291bnREZXRhaWwudnVlP2Y3ZDEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQWNjb3VudERldGFpbC52dWUiXSwibmFtZXMiOlsiZGF0YSIsImFjY291bnREZXRhaWxzIiwibmFtZSIsImVtYWlsIiwibW9iaWxlIiwiY29kZSIsIndlYnNpdGVVcmwiLCJiYW5rTmFtZSIsImJhbmtXZWJzaXRlVXJsIiwiYmVmb3JlQ3JlYXRlIiwiYXhpb3MiLCJ0aGVuIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0E7RUFDQUE7SUFDQTtNQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBQyxnQ0FDQUM7TUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUVBO0VBRUE7QUFDQSxHOzs7Ozs7Ozs7OztBQzFFQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLG9DQUFvQyw4QkFBOEIsR0FBRyw4QkFBOEIsZUFBZSxHQUFHLGdDQUFnQyxtQkFBbUIsMEJBQTBCLEdBQUcsVUFBVSxzTEFBc0wsTUFBTSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsMGNBQTBjLHVCQUF1Qix1SEFBdUgsd0JBQXdCLDRIQUE0SCx5QkFBeUIsbUhBQW1ILHVCQUF1QixtTEFBbUwsNkJBQTZCLDRIQUE0SCwyQkFBMkIsNExBQTRMLGlDQUFpQyxtS0FBbUssY0FBYyxnQkFBZ0IsMkJBQTJCLDJUQUEyVCxVQUFVLE9BQU8sdUJBQXVCLHlFQUF5RSxzREFBc0QsOERBQThELGtFQUFrRSw4RUFBOEUsOEVBQThFLGtFQUFrRSxtRkFBbUYsc0RBQXNELGlCQUFpQixFQUFFLFNBQVMsT0FBTyxtREFBbUQsZ0NBQWdDLEtBQUssaUJBQWlCLGlCQUFpQixLQUFLLG1CQUFtQixxQkFBcUIsNEJBQTRCLEtBQUssaUNBQWlDOztBQUVwMkc7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUMscUJBQXFCLHdDQUF3QztBQUM3RDtBQUNBO0FBQ0Esd0JBQXdCLFNBQVMsZUFBZSxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUyxlQUFlLEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTLGVBQWUsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVMsZUFBZSxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUyxlQUFlLEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTLGVBQWUsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVMsZUFBZSxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFnRDtBQUN0RSxnQkFBZ0Isa0NBQWtDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ2xDLElBQUksS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDOUZoQjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxra0JBQThTO0FBQ3BVO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2SEFBZ0U7QUFDbEYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1CQUFPLENBQUMseW1CQUEwUjtBQUNwUztBQUNBO0FBQ29IO0FBQ2E7QUFDakk7QUFDK1U7QUFDL1U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRztBQUNuRyxnQkFBZ0IseUdBQWtCO0FBQ2xDLEVBQUUsZ0lBQWM7QUFDaEIsRUFBRSx1T0FBYztBQUNoQixFQUFFLGdQQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWFYOztBQUVVLGdGQUFpQiIsImZpbGUiOiJqcy8xNy5idW5kbGUuMDdmNjUxMDA4YWU4OWFlMjUwYWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgYmctaW5mbyB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1jZW50ZXIgbWItMFwiPkFjY291bnQgRGV0YWlsczwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVybGVzc1wiPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLm5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+RW1haWwgSUQ8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBhY2NvdW50RGV0YWlscy5lbWFpbCB9fTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5Nb2JpbGUgTnVtYmVyPC90aD5cbiAgICAgICAgICAgICAgICA8dGQ+e3sgYWNjb3VudERldGFpbHMubW9iaWxlIH19PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPkNvZGU8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBhY2NvdW50RGV0YWlscy5jb2RlIH19PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPldlYnNpdGUgVVJMPC90aD5cbiAgICAgICAgICAgICAgICA8dGQ+PGEgOmhyZWY9XCJhY2NvdW50RGV0YWlscy53ZWJzaXRlVXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgYWNjb3VudERldGFpbHMud2Vic2l0ZVVybCB9fTwvYT48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+QmFuayBOYW1lPC90aD5cbiAgICAgICAgICAgICAgICA8dGQ+e3sgYWNjb3VudERldGFpbHMuYmFua05hbWUgfX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+QmFuayBXZWJzaXRlIFVSTDwvdGg+XG4gICAgICAgICAgICAgICAgPHRkPjxhIDpocmVmPVwiYWNjb3VudERldGFpbHMuYmFua1dlYnNpdGVVcmxcIiB0YXJnZXQ9XCJfYmxhbmtcIj57eyBhY2NvdW50RGV0YWlscy5iYW5rV2Vic2l0ZVVybCB9fTwvYT48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG4gIDxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWNjb3VudERldGFpbHM6IHtcbiAgICAgICAgICBuYW1lOiAnSElUQUNISScsXG4gICAgICAgICAgZW1haWw6ICdheGlzaGVscGRlc2suZWFzdEBoaXRhY2hpLXBheW1lbnRzLmNvbScsXG4gICAgICAgICAgbW9iaWxlOiAnOTM4MDA0NDg3MCcsXG4gICAgICAgICAgY29kZTogJ2F4aXNAMDAxJyxcbiAgICAgICAgICB3ZWJzaXRlVXJsOiAnaHR0cHM6Ly93d3cuaGl0YWNoaS1wYXltZW50cy5jb20vJyxcbiAgICAgICAgICBiYW5rTmFtZTogJ0FYSVMgQkFOSycsXG4gICAgICAgICAgYmFua1dlYnNpdGVVcmw6ICdodHRwczovL3JldGFpbC5heGlzYmFuay5jby5pbi8nXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICAgIGF4aW9zLmdldChcImFwaS9hY2NvdW50LWRldGFpbFwiKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzPT09PT5cIiwgcmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuY29tcGxhaW50ID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnQ7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hdG1fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuYXRtX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jb21wbGFpbnRfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50X2RldGFpbHM7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXN0b2RpYW5fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY3VzdG9kaWFuX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zbHNfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuc2xzX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZWxlY3RlZFN0YXR1cyA9IHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzIHx8ICdQZW5kaW5nJztcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImF0bVwiLGF0bV9kZXRhaWxzKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICB9LFxuICB9O1xuICA8L3NjcmlwdD5cblxuICA8c3R5bGUgc2NvcGVkPlxuICAuY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmMwYzA7XG4gIH1cblxuICAudGFibGUgdGgge1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cblxuICAudGFibGUgdGQgYSB7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIDwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmQtaGVhZGVyW2RhdGEtdi0yZDg1MTlkNl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYzBjMDtcXG59XFxuLnRhYmxlIHRoW2RhdGEtdi0yZDg1MTlkNl0ge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuLnRhYmxlIHRkIGFbZGF0YS12LTJkODUxOWQ2XSB7XFxuICBjb2xvcjogIzAwN2JmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL3N1amFuL0Rlc2t0b3AvV29yay9wcm9qZWN0IGZyZWVsYW5jZS9TYW5raGEvYXRtX3Byb2ovYXRtL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FjY291bnREZXRhaWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4RUE7RUFDQSwwQkFBQTtDQUNBO0FBRUE7RUFDQSxXQUFBO0NBQ0E7QUFFQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJBY2NvdW50RGV0YWlsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBtdC00XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyIGJnLWluZm8gdGV4dC13aGl0ZVxcXCI+XFxuICAgICAgICAgIDxoMyBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbWItMFxcXCI+QWNjb3VudCBEZXRhaWxzPC9oMz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzXFxcIj5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIj5OYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLm5hbWUgfX08L3RkPlxcbiAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVxcXCJyb3dcXFwiPkVtYWlsIElEPC90aD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLmVtYWlsIH19PC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIj5Nb2JpbGUgTnVtYmVyPC90aD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLm1vYmlsZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XFxcInJvd1xcXCI+Q29kZTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0ZD57eyBhY2NvdW50RGV0YWlscy5jb2RlIH19PC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIj5XZWJzaXRlIFVSTDwvdGg+XFxuICAgICAgICAgICAgICAgIDx0ZD48YSA6aHJlZj1cXFwiYWNjb3VudERldGFpbHMud2Vic2l0ZVVybFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPnt7IGFjY291bnREZXRhaWxzLndlYnNpdGVVcmwgfX08L2E+PC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIj5CYW5rIE5hbWU8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3sgYWNjb3VudERldGFpbHMuYmFua05hbWUgfX08L3RkPlxcbiAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVxcXCJyb3dcXFwiPkJhbmsgV2Vic2l0ZSBVUkw8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgOmhyZWY9XFxcImFjY291bnREZXRhaWxzLmJhbmtXZWJzaXRlVXJsXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+e3sgYWNjb3VudERldGFpbHMuYmFua1dlYnNpdGVVcmwgfX08L2E+PC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvdGVtcGxhdGU+XFxuXFxuICA8c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhKCkge1xcbiAgICAgIHJldHVybiB7XFxuICAgICAgICBhY2NvdW50RGV0YWlsczoge1xcbiAgICAgICAgICBuYW1lOiAnSElUQUNISScsXFxuICAgICAgICAgIGVtYWlsOiAnYXhpc2hlbHBkZXNrLmVhc3RAaGl0YWNoaS1wYXltZW50cy5jb20nLFxcbiAgICAgICAgICBtb2JpbGU6ICc5MzgwMDQ0ODcwJyxcXG4gICAgICAgICAgY29kZTogJ2F4aXNAMDAxJyxcXG4gICAgICAgICAgd2Vic2l0ZVVybDogJ2h0dHBzOi8vd3d3LmhpdGFjaGktcGF5bWVudHMuY29tLycsXFxuICAgICAgICAgIGJhbmtOYW1lOiAnQVhJUyBCQU5LJyxcXG4gICAgICAgICAgYmFua1dlYnNpdGVVcmw6ICdodHRwczovL3JldGFpbC5heGlzYmFuay5jby5pbi8nXFxuICAgICAgICB9XFxuICAgICAgfTtcXG4gICAgfSxcXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xcbiAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvYWNjb3VudC1kZXRhaWxcXFwiKVxcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcInJlcz09PT0+XFxcIiwgcmVzLmRhdGEpO1xcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbXBsYWludCA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50O1xcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmF0bV9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5hdG1fZGV0YWlscztcXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jb21wbGFpbnRfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50X2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VzdG9kaWFuX2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLmN1c3RvZGlhbl9kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNsc19kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5zbHNfZGV0YWlscztcXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZWxlY3RlZFN0YXR1cyA9IHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzIHx8ICdQZW5kaW5nJztcXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXFxcImF0bVxcXCIsYXRtX2RldGFpbHMpO1xcblxcbiAgICAgICAgICAgIH0pO1xcblxcbiAgICB9LFxcbiAgfTtcXG4gIDwvc2NyaXB0PlxcblxcbiAgPHN0eWxlIHNjb3BlZD5cXG4gIC5jYXJkLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmMwYzA7XFxuICB9XFxuXFxuICAudGFibGUgdGgge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgfVxcblxcbiAgLnRhYmxlIHRkIGEge1xcbiAgICBjb2xvcjogIzAwN2JmZjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcbiAgPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBtdC00XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWJvcmRlcmxlc3NcIiB9LCBbXG4gICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcInJvd1wiIH0gfSwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYWNjb3VudERldGFpbHMubmFtZSkpXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwicm93XCIgfSB9LCBbX3ZtLl92KFwiRW1haWwgSURcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYWNjb3VudERldGFpbHMuZW1haWwpKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcInJvd1wiIH0gfSwgW192bS5fdihcIk1vYmlsZSBOdW1iZXJcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYWNjb3VudERldGFpbHMubW9iaWxlKSldKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJyb3dcIiB9IH0sIFtfdm0uX3YoXCJDb2RlXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmFjY291bnREZXRhaWxzLmNvZGUpKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcInJvd1wiIH0gfSwgW192bS5fdihcIldlYnNpdGUgVVJMXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmFjY291bnREZXRhaWxzLndlYnNpdGVVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uYWNjb3VudERldGFpbHMud2Vic2l0ZVVybCkpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwicm93XCIgfSB9LCBbX3ZtLl92KFwiQmFuayBOYW1lXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmFjY291bnREZXRhaWxzLmJhbmtOYW1lKSldKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJyb3dcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJCYW5rIFdlYnNpdGUgVVJMXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5hY2NvdW50RGV0YWlscy5iYW5rV2Vic2l0ZVVybCxcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5hY2NvdW50RGV0YWlscy5iYW5rV2Vic2l0ZVVybCkpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXIgYmctaW5mbyB0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG1iLTBcIiB9LCBbX3ZtLl92KFwiQWNjb3VudCBEZXRhaWxzXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMmQ4NTE5ZDZcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmQ4NTE5ZDZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BY2NvdW50RGV0YWlsLnZ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0ZDc5YzZlMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJkODUxOWQ2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQWNjb3VudERldGFpbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJkODUxOWQ2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQWNjb3VudERldGFpbC52dWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmQ4NTE5ZDZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BY2NvdW50RGV0YWlsLnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BY2NvdW50RGV0YWlsLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQWNjb3VudERldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmQ4NTE5ZDZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BY2NvdW50RGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0yZDg1MTlkNlwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXEFjY291bnREZXRhaWwudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJkODUxOWQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmQ4NTE5ZDZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==