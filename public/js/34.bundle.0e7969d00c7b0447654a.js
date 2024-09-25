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
  },
  beforeCreate() {
    axios.get("api/account-detail").then(res => {
      console.log("res====>", res.data.data);
      this.complaint = res.data.data.complaint;
      this.atm_details = res.data.data.atm_details;
      this.complaint_details = res.data.data.complaint_details;
      this.custodian_details = res.data.data.custodian_details;
      this.sls_details = res.data.data.sls_details;
      this.selectedStatus = this.complaint.work_status || 'Pending';
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
exports.push([module.i, "\n.card-header[data-v-2d8519d6] {\n  background-color: #4bc0c0;\n}\n.table th[data-v-2d8519d6] {\n  width: 30%;\n}\n.table td a[data-v-2d8519d6] {\n  color: #007bff;\n  text-decoration: none;\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/resources/js/components/AccountDetail.vue"],"names":[],"mappings":";AAgFA;EACA,0BAAA;CACA;AAEA;EACA,WAAA;CACA;AAEA;EACA,eAAA;EACA,sBAAA;CACA","file":"AccountDetail.vue","sourcesContent":["<template>\n    <div class=\"container mt-4\">\n      <div class=\"card\">\n        <div class=\"card-header bg-info text-white\">\n          <h3 class=\"text-center mb-0\">Account Details</h3>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-borderless\">\n            <tbody>\n              <tr>\n                <th scope=\"row\">Name</th>\n                <td>{{ accountDetails.name }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Email ID</th>\n                <td>{{ accountDetails.email }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Mobile Number</th>\n                <td>{{ accountDetails.mobile }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Code</th>\n                <td>{{ accountDetails.code }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Website URL</th>\n                <td><a :href=\"accountDetails.websiteUrl\" target=\"_blank\">{{ accountDetails.websiteUrl }}</a></td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Bank Name</th>\n                <td>{{ accountDetails.bankName }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Bank Website URL</th>\n                <td><a :href=\"accountDetails.bankWebsiteUrl\" target=\"_blank\">{{ accountDetails.bankWebsiteUrl }}</a></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </template>\n\n  <script>\n  export default {\n    data() {\n      return {\n        accountDetails: {\n          name: 'HITACHI',\n          email: 'axishelpdesk.east@hitachi-payments.com',\n          mobile: '9380044870',\n          code: 'axis@001',\n          websiteUrl: 'https://www.hitachi-payments.com/',\n          bankName: 'AXIS BANK',\n          bankWebsiteUrl: 'https://retail.axisbank.co.in/'\n        }\n      };\n    },\n    beforeCreate() {\n\n\n        axios.get(\"api/account-detail\")\n            .then((res) => {\n                console.log(\"res====>\", res.data.data);\n                this.complaint = res.data.data.complaint;\n                this.atm_details = res.data.data.atm_details;\n                this.complaint_details = res.data.data.complaint_details;\n                this.custodian_details = res.data.data.custodian_details;\n                this.sls_details = res.data.data.sls_details;\n                this.selectedStatus = this.complaint.work_status || 'Pending';\n                // console.log(\"atm\",atm_details);\n\n            });\n\n    },\n  };\n  </script>\n\n  <style scoped>\n  .card-header {\n    background-color: #4bc0c0;\n  }\n\n  .table th {\n    width: 30%;\n  }\n\n  .table td a {\n    color: #007bff;\n    text-decoration: none;\n  }\n  </style>\n"],"sourceRoot":""}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQWNjb3VudERldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQWNjb3VudERldGFpbC52dWU/Y2UzZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9BY2NvdW50RGV0YWlsLnZ1ZT9jNTYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FjY291bnREZXRhaWwudnVlP2Y3ZDEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQWNjb3VudERldGFpbC52dWUiXSwibmFtZXMiOlsiZGF0YSIsImFjY291bnREZXRhaWxzIiwibmFtZSIsImVtYWlsIiwibW9iaWxlIiwiY29kZSIsIndlYnNpdGVVcmwiLCJiYW5rTmFtZSIsImJhbmtXZWJzaXRlVXJsIiwiYmVmb3JlQ3JlYXRlIiwiYXhpb3MiLCJ0aGVuIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0E7RUFDQUE7SUFDQTtNQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUdBQyxnQ0FDQUM7TUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUVBO0VBRUE7QUFDQSxHOzs7Ozs7Ozs7OztBQzVFQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLG9DQUFvQyw4QkFBOEIsR0FBRyw4QkFBOEIsZUFBZSxHQUFHLGdDQUFnQyxtQkFBbUIsMEJBQTBCLEdBQUcsVUFBVSxzTEFBc0wsTUFBTSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsMGNBQTBjLHVCQUF1Qix1SEFBdUgsd0JBQXdCLDRIQUE0SCx5QkFBeUIsbUhBQW1ILHVCQUF1QixtTEFBbUwsNkJBQTZCLDRIQUE0SCwyQkFBMkIsNExBQTRMLGlDQUFpQyxtS0FBbUssY0FBYyxnQkFBZ0IsMkJBQTJCLDJUQUEyVCxVQUFVLE9BQU8sdUJBQXVCLDZFQUE2RSwyREFBMkQsMkRBQTJELCtEQUErRCwyRUFBMkUsMkVBQTJFLCtEQUErRCxnRkFBZ0Ysc0RBQXNELGlCQUFpQixFQUFFLFNBQVMsT0FBTyxtREFBbUQsZ0NBQWdDLEtBQUssaUJBQWlCLGlCQUFpQixLQUFLLG1CQUFtQixxQkFBcUIsNEJBQTRCLEtBQUssaUNBQWlDOztBQUUzMUc7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUMscUJBQXFCLHdDQUF3QztBQUM3RDtBQUNBO0FBQ0Esd0JBQXdCLFNBQVMsZUFBZSxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUyxlQUFlLEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTLGVBQWUsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVMsZUFBZSxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUyxlQUFlLEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTLGVBQWUsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVMsZUFBZSxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFnRDtBQUN0RSxnQkFBZ0Isa0NBQWtDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ2xDLElBQUksS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDOUZoQjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxra0JBQThTO0FBQ3BVO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2SEFBZ0U7QUFDbEYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1CQUFPLENBQUMseW1CQUEwUjtBQUNwUztBQUNBO0FBQ29IO0FBQ2E7QUFDakk7QUFDK1U7QUFDL1U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRztBQUNuRyxnQkFBZ0IseUdBQWtCO0FBQ2xDLEVBQUUsZ0lBQWM7QUFDaEIsRUFBRSx1T0FBYztBQUNoQixFQUFFLGdQQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWFYOztBQUVVLGdGQUFpQiIsImZpbGUiOiJqcy8zNC5idW5kbGUuMGU3OTY5ZDAwYzdiMDQ0NzY1NGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgYmctaW5mbyB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1jZW50ZXIgbWItMFwiPkFjY291bnQgRGV0YWlsczwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVybGVzc1wiPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLm5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+RW1haWwgSUQ8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBhY2NvdW50RGV0YWlscy5lbWFpbCB9fTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5Nb2JpbGUgTnVtYmVyPC90aD5cbiAgICAgICAgICAgICAgICA8dGQ+e3sgYWNjb3VudERldGFpbHMubW9iaWxlIH19PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPkNvZGU8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBhY2NvdW50RGV0YWlscy5jb2RlIH19PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPldlYnNpdGUgVVJMPC90aD5cbiAgICAgICAgICAgICAgICA8dGQ+PGEgOmhyZWY9XCJhY2NvdW50RGV0YWlscy53ZWJzaXRlVXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgYWNjb3VudERldGFpbHMud2Vic2l0ZVVybCB9fTwvYT48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+QmFuayBOYW1lPC90aD5cbiAgICAgICAgICAgICAgICA8dGQ+e3sgYWNjb3VudERldGFpbHMuYmFua05hbWUgfX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+QmFuayBXZWJzaXRlIFVSTDwvdGg+XG4gICAgICAgICAgICAgICAgPHRkPjxhIDpocmVmPVwiYWNjb3VudERldGFpbHMuYmFua1dlYnNpdGVVcmxcIiB0YXJnZXQ9XCJfYmxhbmtcIj57eyBhY2NvdW50RGV0YWlscy5iYW5rV2Vic2l0ZVVybCB9fTwvYT48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG4gIDxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWNjb3VudERldGFpbHM6IHtcbiAgICAgICAgICBuYW1lOiAnSElUQUNISScsXG4gICAgICAgICAgZW1haWw6ICdheGlzaGVscGRlc2suZWFzdEBoaXRhY2hpLXBheW1lbnRzLmNvbScsXG4gICAgICAgICAgbW9iaWxlOiAnOTM4MDA0NDg3MCcsXG4gICAgICAgICAgY29kZTogJ2F4aXNAMDAxJyxcbiAgICAgICAgICB3ZWJzaXRlVXJsOiAnaHR0cHM6Ly93d3cuaGl0YWNoaS1wYXltZW50cy5jb20vJyxcbiAgICAgICAgICBiYW5rTmFtZTogJ0FYSVMgQkFOSycsXG4gICAgICAgICAgYmFua1dlYnNpdGVVcmw6ICdodHRwczovL3JldGFpbC5heGlzYmFuay5jby5pbi8nXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XG5cblxuICAgICAgICBheGlvcy5nZXQoXCJhcGkvYWNjb3VudC1kZXRhaWxcIilcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcz09PT0+XCIsIHJlcy5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50ID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hdG1fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuYXRtX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGFpbnRfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50X2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b2RpYW5fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY3VzdG9kaWFuX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5zbHNfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuc2xzX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXR1cyA9IHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzIHx8ICdQZW5kaW5nJztcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImF0bVwiLGF0bV9kZXRhaWxzKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICB9LFxuICB9O1xuICA8L3NjcmlwdD5cblxuICA8c3R5bGUgc2NvcGVkPlxuICAuY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmMwYzA7XG4gIH1cblxuICAudGFibGUgdGgge1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cblxuICAudGFibGUgdGQgYSB7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIDwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmQtaGVhZGVyW2RhdGEtdi0yZDg1MTlkNl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYzBjMDtcXG59XFxuLnRhYmxlIHRoW2RhdGEtdi0yZDg1MTlkNl0ge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuLnRhYmxlIHRkIGFbZGF0YS12LTJkODUxOWQ2XSB7XFxuICBjb2xvcjogIzAwN2JmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL3N1amFuL0Rlc2t0b3AvV29yay9wcm9qZWN0IGZyZWVsYW5jZS9TYW5raGEvYXRtX3Byb2ovYXRtL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FjY291bnREZXRhaWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnRkE7RUFDQSwwQkFBQTtDQUNBO0FBRUE7RUFDQSxXQUFBO0NBQ0E7QUFFQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJBY2NvdW50RGV0YWlsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBtdC00XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyIGJnLWluZm8gdGV4dC13aGl0ZVxcXCI+XFxuICAgICAgICAgIDxoMyBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbWItMFxcXCI+QWNjb3VudCBEZXRhaWxzPC9oMz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzXFxcIj5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIj5OYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLm5hbWUgfX08L3RkPlxcbiAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVxcXCJyb3dcXFwiPkVtYWlsIElEPC90aD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLmVtYWlsIH19PC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIj5Nb2JpbGUgTnVtYmVyPC90aD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLm1vYmlsZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XFxcInJvd1xcXCI+Q29kZTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0ZD57eyBhY2NvdW50RGV0YWlscy5jb2RlIH19PC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIj5XZWJzaXRlIFVSTDwvdGg+XFxuICAgICAgICAgICAgICAgIDx0ZD48YSA6aHJlZj1cXFwiYWNjb3VudERldGFpbHMud2Vic2l0ZVVybFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPnt7IGFjY291bnREZXRhaWxzLndlYnNpdGVVcmwgfX08L2E+PC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIj5CYW5rIE5hbWU8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3sgYWNjb3VudERldGFpbHMuYmFua05hbWUgfX08L3RkPlxcbiAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVxcXCJyb3dcXFwiPkJhbmsgV2Vic2l0ZSBVUkw8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgOmhyZWY9XFxcImFjY291bnREZXRhaWxzLmJhbmtXZWJzaXRlVXJsXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+e3sgYWNjb3VudERldGFpbHMuYmFua1dlYnNpdGVVcmwgfX08L2E+PC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvdGVtcGxhdGU+XFxuXFxuICA8c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhKCkge1xcbiAgICAgIHJldHVybiB7XFxuICAgICAgICBhY2NvdW50RGV0YWlsczoge1xcbiAgICAgICAgICBuYW1lOiAnSElUQUNISScsXFxuICAgICAgICAgIGVtYWlsOiAnYXhpc2hlbHBkZXNrLmVhc3RAaGl0YWNoaS1wYXltZW50cy5jb20nLFxcbiAgICAgICAgICBtb2JpbGU6ICc5MzgwMDQ0ODcwJyxcXG4gICAgICAgICAgY29kZTogJ2F4aXNAMDAxJyxcXG4gICAgICAgICAgd2Vic2l0ZVVybDogJ2h0dHBzOi8vd3d3LmhpdGFjaGktcGF5bWVudHMuY29tLycsXFxuICAgICAgICAgIGJhbmtOYW1lOiAnQVhJUyBCQU5LJyxcXG4gICAgICAgICAgYmFua1dlYnNpdGVVcmw6ICdodHRwczovL3JldGFpbC5heGlzYmFuay5jby5pbi8nXFxuICAgICAgICB9XFxuICAgICAgfTtcXG4gICAgfSxcXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xcblxcblxcbiAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvYWNjb3VudC1kZXRhaWxcXFwiKVxcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcInJlcz09PT0+XFxcIiwgcmVzLmRhdGEuZGF0YSk7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50ID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnQ7XFxuICAgICAgICAgICAgICAgIHRoaXMuYXRtX2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLmF0bV9kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludF9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfZGV0YWlscztcXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b2RpYW5fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY3VzdG9kaWFuX2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2xzX2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLnNsc19kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RhdHVzID0gdGhpcy5jb21wbGFpbnQud29ya19zdGF0dXMgfHwgJ1BlbmRpbmcnO1xcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcXFwiYXRtXFxcIixhdG1fZGV0YWlscyk7XFxuXFxuICAgICAgICAgICAgfSk7XFxuXFxuICAgIH0sXFxuICB9O1xcbiAgPC9zY3JpcHQ+XFxuXFxuICA8c3R5bGUgc2NvcGVkPlxcbiAgLmNhcmQtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYzBjMDtcXG4gIH1cXG5cXG4gIC50YWJsZSB0aCB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICB9XFxuXFxuICAudGFibGUgdGQgYSB7XFxuICAgIGNvbG9yOiAjMDA3YmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB9XFxuICA8L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG10LTRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtYm9yZGVybGVzc1wiIH0sIFtcbiAgICAgICAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwicm93XCIgfSB9LCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5hY2NvdW50RGV0YWlscy5uYW1lKSldKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJyb3dcIiB9IH0sIFtfdm0uX3YoXCJFbWFpbCBJRFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5hY2NvdW50RGV0YWlscy5lbWFpbCkpXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwicm93XCIgfSB9LCBbX3ZtLl92KFwiTW9iaWxlIE51bWJlclwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5hY2NvdW50RGV0YWlscy5tb2JpbGUpKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcInJvd1wiIH0gfSwgW192bS5fdihcIkNvZGVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYWNjb3VudERldGFpbHMuY29kZSkpXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwicm93XCIgfSB9LCBbX3ZtLl92KFwiV2Vic2l0ZSBVUkxcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0uYWNjb3VudERldGFpbHMud2Vic2l0ZVVybCxcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5hY2NvdW50RGV0YWlscy53ZWJzaXRlVXJsKSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJyb3dcIiB9IH0sIFtfdm0uX3YoXCJCYW5rIE5hbWVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYWNjb3VudERldGFpbHMuYmFua05hbWUpKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcInJvd1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkJhbmsgV2Vic2l0ZSBVUkxcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmFjY291bnREZXRhaWxzLmJhbmtXZWJzaXRlVXJsLFxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmFjY291bnREZXRhaWxzLmJhbmtXZWJzaXRlVXJsKSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlciBiZy1pbmZvIHRleHQtd2hpdGVcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbWItMFwiIH0sIFtfdm0uX3YoXCJBY2NvdW50IERldGFpbHNcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yZDg1MTlkNlwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yZDg1MTlkNlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FjY291bnREZXRhaWwudnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjRkNzljNmUyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmQ4NTE5ZDZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BY2NvdW50RGV0YWlsLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmQ4NTE5ZDZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BY2NvdW50RGV0YWlsLnZ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yZDg1MTlkNlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FjY291bnREZXRhaWwudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FjY291bnREZXRhaWwudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BY2NvdW50RGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yZDg1MTlkNlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FjY291bnREZXRhaWwudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTJkODUxOWQ2XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcQWNjb3VudERldGFpbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmQ4NTE5ZDZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yZDg1MTlkNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9