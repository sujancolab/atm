(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

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
      this.accountDetails = res.data.data;
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

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6c59f583\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/AccountDetail.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-6c59f583","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/AccountDetail.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.card-header[data-v-6c59f583] {\n  background-color: #4bc0c0;\n}\n.table th[data-v-6c59f583] {\n  width: 30%;\n}\n.table td a[data-v-6c59f583] {\n  color: #007bff;\n  text-decoration: none;\n}\n", "", {"version":3,"sources":["/Users/sunitabag/Desktop/php/atm_old/atm/resources/js/components/resources/js/components/AccountDetail.vue"],"names":[],"mappings":";AA+EA;EACA,0BAAA;CACA;AAEA;EACA,WAAA;CACA;AAEA;EACA,eAAA;EACA,sBAAA;CACA","file":"AccountDetail.vue","sourcesContent":["<template>\n    <div class=\"container mt-4\">\n      <div class=\"card\">\n        <div class=\"card-header bg-info text-white\">\n          <h3 class=\"text-center mb-0\">Account Details</h3>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-borderless\">\n            <tbody>\n              <tr>\n                <th scope=\"row\">Name</th>\n                <td>{{ accountDetails.name }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Email ID</th>\n                <td>{{ accountDetails.email }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Mobile Number</th>\n                <td>{{ accountDetails.mobile }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Code</th>\n                <td>{{ accountDetails.user_code }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Website URL</th>\n                <td><a :href=\"accountDetails.website_url\" target=\"_blank\">{{ accountDetails.website_url }}</a></td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Bank Name</th>\n                <td>{{ accountDetails.bank_name }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Bank Website URL</th>\n                <td><a :href=\"accountDetails.bank_website_url\" target=\"_blank\">{{ accountDetails.bank_website_url }}</a></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </template>\n\n  <script>\n  export default {\n    data() {\n      return {\n        accountDetails: {\n          name: 'HITACHI',\n          email: 'axishelpdesk.east@hitachi-payments.com',\n          mobile: '9380044870',\n          code: 'axis@001',\n          websiteUrl: 'https://www.hitachi-payments.com/',\n          bankName: 'AXIS BANK',\n          bankWebsiteUrl: 'https://retail.axisbank.co.in/'\n        }\n      };\n    },\n    beforeCreate() {\n        axios.get(\"api/account-detail\")\n            .then((res) => {\n                console.log(\"res====>\", res.data.data);\n                this.accountDetails=res.data.data;\n                // this.complaint = res.data.data.complaint;\n                // this.atm_details = res.data.data.atm_details;\n                // this.complaint_details = res.data.data.complaint_details;\n                // this.custodian_details = res.data.data.custodian_details;\n                // this.sls_details = res.data.data.sls_details;\n                // this.selectedStatus = this.complaint.work_status || 'Pending';\n                // console.log(\"atm\",atm_details);\n\n            });\n\n    },\n  };\n  </script>\n\n  <style scoped>\n  .card-header {\n    background-color: #4bc0c0;\n  }\n\n  .table th {\n    width: 30%;\n  }\n\n  .table td a {\n    color: #007bff;\n    text-decoration: none;\n  }\n  </style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6c59f583\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/AccountDetail.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6c59f583","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/AccountDetail.vue ***!
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
              _c("td", [_vm._v(_vm._s(_vm.accountDetails.user_code))])
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
                      href: _vm.accountDetails.website_url,
                      target: "_blank"
                    }
                  },
                  [_vm._v(_vm._s(_vm.accountDetails.website_url))]
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [_vm._v("Bank Name")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.accountDetails.bank_name))])
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
                      href: _vm.accountDetails.bank_website_url,
                      target: "_blank"
                    }
                  },
                  [_vm._v(_vm._s(_vm.accountDetails.bank_website_url))]
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6c59f583\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/AccountDetail.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-6c59f583","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/AccountDetail.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-6c59f583","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AccountDetail.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6c59f583\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/AccountDetail.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("20dc9a9d", content, false, {});
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c59f583_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AccountDetail_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-6c59f583","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./AccountDetail.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6c59f583\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/AccountDetail.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-6c59f583","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./AccountDetail.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6c59f583\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/AccountDetail.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c59f583"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AccountDetail_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c59f583_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AccountDetail_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c59f583_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AccountDetail_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/AccountDetail.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQWNjb3VudERldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQWNjb3VudERldGFpbC52dWU/M2MxOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9BY2NvdW50RGV0YWlsLnZ1ZT9jNjM0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FjY291bnREZXRhaWwudnVlPzk1MmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQWNjb3VudERldGFpbC52dWUiXSwibmFtZXMiOlsiZGF0YSIsImFjY291bnREZXRhaWxzIiwibmFtZSIsImVtYWlsIiwibW9iaWxlIiwiY29kZSIsIndlYnNpdGVVcmwiLCJiYW5rTmFtZSIsImJhbmtXZWJzaXRlVXJsIiwiYmVmb3JlQ3JlYXRlIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0E7RUFDQUEsS0FBQTtJQUNBO01BQ0FDLGNBQUE7UUFDQUMsSUFBQTtRQUNBQyxLQUFBO1FBQ0FDLE1BQUE7UUFDQUMsSUFBQTtRQUNBQyxVQUFBO1FBQ0FDLFFBQUE7UUFDQUMsY0FBQTtNQUNBO0lBQ0E7RUFDQTtFQUNBQyxhQUFBO0lBQ0FDLEtBQUEsQ0FBQUMsR0FBQSx1QkFDQUMsSUFBQSxDQUFBQyxHQUFBO01BQ0FDLE9BQUEsQ0FBQUMsR0FBQSxhQUFBRixHQUFBLENBQUFiLElBQUEsQ0FBQUEsSUFBQTtNQUNBLEtBQUFDLGNBQUEsR0FBQVksR0FBQSxDQUFBYixJQUFBLENBQUFBLElBQUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUVBO0VBRUE7QUFDQSxHOzs7Ozs7Ozs7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bnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXQtNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGJnLWluZm8gdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyIG1iLTBcIj5BY2NvdW50IERldGFpbHM8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmxlc3NcIj5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBhY2NvdW50RGV0YWlscy5uYW1lIH19PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPkVtYWlsIElEPC90aD5cbiAgICAgICAgICAgICAgICA8dGQ+e3sgYWNjb3VudERldGFpbHMuZW1haWwgfX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+TW9iaWxlIE51bWJlcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLm1vYmlsZSB9fTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5Db2RlPC90aD5cbiAgICAgICAgICAgICAgICA8dGQ+e3sgYWNjb3VudERldGFpbHMudXNlcl9jb2RlIH19PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPldlYnNpdGUgVVJMPC90aD5cbiAgICAgICAgICAgICAgICA8dGQ+PGEgOmhyZWY9XCJhY2NvdW50RGV0YWlscy53ZWJzaXRlX3VybFwiIHRhcmdldD1cIl9ibGFua1wiPnt7IGFjY291bnREZXRhaWxzLndlYnNpdGVfdXJsIH19PC9hPjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5CYW5rIE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBhY2NvdW50RGV0YWlscy5iYW5rX25hbWUgfX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+QmFuayBXZWJzaXRlIFVSTDwvdGg+XG4gICAgICAgICAgICAgICAgPHRkPjxhIDpocmVmPVwiYWNjb3VudERldGFpbHMuYmFua193ZWJzaXRlX3VybFwiIHRhcmdldD1cIl9ibGFua1wiPnt7IGFjY291bnREZXRhaWxzLmJhbmtfd2Vic2l0ZV91cmwgfX08L2E+PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjY291bnREZXRhaWxzOiB7XG4gICAgICAgICAgbmFtZTogJ0hJVEFDSEknLFxuICAgICAgICAgIGVtYWlsOiAnYXhpc2hlbHBkZXNrLmVhc3RAaGl0YWNoaS1wYXltZW50cy5jb20nLFxuICAgICAgICAgIG1vYmlsZTogJzkzODAwNDQ4NzAnLFxuICAgICAgICAgIGNvZGU6ICdheGlzQDAwMScsXG4gICAgICAgICAgd2Vic2l0ZVVybDogJ2h0dHBzOi8vd3d3LmhpdGFjaGktcGF5bWVudHMuY29tLycsXG4gICAgICAgICAgYmFua05hbWU6ICdBWElTIEJBTksnLFxuICAgICAgICAgIGJhbmtXZWJzaXRlVXJsOiAnaHR0cHM6Ly9yZXRhaWwuYXhpc2JhbmsuY28uaW4vJ1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICBheGlvcy5nZXQoXCJhcGkvYWNjb3VudC1kZXRhaWxcIilcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcz09PT0+XCIsIHJlcy5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudERldGFpbHM9cmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbXBsYWludCA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50O1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuYXRtX2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLmF0bV9kZXRhaWxzO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuY29tcGxhaW50X2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludF9kZXRhaWxzO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VzdG9kaWFuX2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLmN1c3RvZGlhbl9kZXRhaWxzO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2xzX2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLnNsc19kZXRhaWxzO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRTdGF0dXMgPSB0aGlzLmNvbXBsYWludC53b3JrX3N0YXR1cyB8fCAnUGVuZGluZyc7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhdG1cIixhdG1fZGV0YWlscyk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgfSxcbiAgfTtcbiAgPC9zY3JpcHQ+XG5cbiAgPHN0eWxlIHNjb3BlZD5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJjMGMwO1xuICB9XG5cbiAgLnRhYmxlIHRoIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG5cbiAgLnRhYmxlIHRkIGEge1xuICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICA8L3N0eWxlPlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jYXJkLWhlYWRlcltkYXRhLXYtNmM1OWY1ODNdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmMwYzA7XFxufVxcbi50YWJsZSB0aFtkYXRhLXYtNmM1OWY1ODNdIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcbi50YWJsZSB0ZCBhW2RhdGEtdi02YzU5ZjU4M10ge1xcbiAgY29sb3I6ICMwMDdiZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc3VuaXRhYmFnL0Rlc2t0b3AvcGhwL2F0bV9vbGQvYXRtL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FjY291bnREZXRhaWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUErRUE7RUFDQSwwQkFBQTtDQUNBO0FBRUE7RUFDQSxXQUFBO0NBQ0E7QUFFQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJBY2NvdW50RGV0YWlsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBtdC00XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyIGJnLWluZm8gdGV4dC13aGl0ZVxcXCI+XFxuICAgICAgICAgIDxoMyBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbWItMFxcXCI+QWNjb3VudCBEZXRhaWxzPC9oMz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzXFxcIj5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIj5OYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLm5hbWUgfX08L3RkPlxcbiAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVxcXCJyb3dcXFwiPkVtYWlsIElEPC90aD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLmVtYWlsIH19PC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIj5Nb2JpbGUgTnVtYmVyPC90aD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLm1vYmlsZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XFxcInJvd1xcXCI+Q29kZTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0ZD57eyBhY2NvdW50RGV0YWlscy51c2VyX2NvZGUgfX08L3RkPlxcbiAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVxcXCJyb3dcXFwiPldlYnNpdGUgVVJMPC90aD5cXG4gICAgICAgICAgICAgICAgPHRkPjxhIDpocmVmPVxcXCJhY2NvdW50RGV0YWlscy53ZWJzaXRlX3VybFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPnt7IGFjY291bnREZXRhaWxzLndlYnNpdGVfdXJsIH19PC9hPjwvdGQ+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XFxcInJvd1xcXCI+QmFuayBOYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnREZXRhaWxzLmJhbmtfbmFtZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XFxcInJvd1xcXCI+QmFuayBXZWJzaXRlIFVSTDwvdGg+XFxuICAgICAgICAgICAgICAgIDx0ZD48YSA6aHJlZj1cXFwiYWNjb3VudERldGFpbHMuYmFua193ZWJzaXRlX3VybFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPnt7IGFjY291bnREZXRhaWxzLmJhbmtfd2Vic2l0ZV91cmwgfX08L2E+PC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvdGVtcGxhdGU+XFxuXFxuICA8c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhKCkge1xcbiAgICAgIHJldHVybiB7XFxuICAgICAgICBhY2NvdW50RGV0YWlsczoge1xcbiAgICAgICAgICBuYW1lOiAnSElUQUNISScsXFxuICAgICAgICAgIGVtYWlsOiAnYXhpc2hlbHBkZXNrLmVhc3RAaGl0YWNoaS1wYXltZW50cy5jb20nLFxcbiAgICAgICAgICBtb2JpbGU6ICc5MzgwMDQ0ODcwJyxcXG4gICAgICAgICAgY29kZTogJ2F4aXNAMDAxJyxcXG4gICAgICAgICAgd2Vic2l0ZVVybDogJ2h0dHBzOi8vd3d3LmhpdGFjaGktcGF5bWVudHMuY29tLycsXFxuICAgICAgICAgIGJhbmtOYW1lOiAnQVhJUyBCQU5LJyxcXG4gICAgICAgICAgYmFua1dlYnNpdGVVcmw6ICdodHRwczovL3JldGFpbC5heGlzYmFuay5jby5pbi8nXFxuICAgICAgICB9XFxuICAgICAgfTtcXG4gICAgfSxcXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xcbiAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvYWNjb3VudC1kZXRhaWxcXFwiKVxcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcInJlcz09PT0+XFxcIiwgcmVzLmRhdGEuZGF0YSk7XFxuICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudERldGFpbHM9cmVzLmRhdGEuZGF0YTtcXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jb21wbGFpbnQgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludDtcXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hdG1fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuYXRtX2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY29tcGxhaW50X2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludF9kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmN1c3RvZGlhbl9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jdXN0b2RpYW5fZGV0YWlscztcXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zbHNfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuc2xzX2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRTdGF0dXMgPSB0aGlzLmNvbXBsYWludC53b3JrX3N0YXR1cyB8fCAnUGVuZGluZyc7XFxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFxcXCJhdG1cXFwiLGF0bV9kZXRhaWxzKTtcXG5cXG4gICAgICAgICAgICB9KTtcXG5cXG4gICAgfSxcXG4gIH07XFxuICA8L3NjcmlwdD5cXG5cXG4gIDxzdHlsZSBzY29wZWQ+XFxuICAuY2FyZC1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJjMGMwO1xcbiAgfVxcblxcbiAgLnRhYmxlIHRoIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gIH1cXG5cXG4gIC50YWJsZSB0ZCBhIHtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG4gIDwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXQtNFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzXCIgfSwgW1xuICAgICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJyb3dcIiB9IH0sIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmFjY291bnREZXRhaWxzLm5hbWUpKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcInJvd1wiIH0gfSwgW192bS5fdihcIkVtYWlsIElEXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmFjY291bnREZXRhaWxzLmVtYWlsKSldKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJyb3dcIiB9IH0sIFtfdm0uX3YoXCJNb2JpbGUgTnVtYmVyXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmFjY291bnREZXRhaWxzLm1vYmlsZSkpXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwicm93XCIgfSB9LCBbX3ZtLl92KFwiQ29kZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5hY2NvdW50RGV0YWlscy51c2VyX2NvZGUpKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcInJvd1wiIH0gfSwgW192bS5fdihcIldlYnNpdGUgVVJMXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmFjY291bnREZXRhaWxzLndlYnNpdGVfdXJsLFxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmFjY291bnREZXRhaWxzLndlYnNpdGVfdXJsKSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJyb3dcIiB9IH0sIFtfdm0uX3YoXCJCYW5rIE5hbWVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYWNjb3VudERldGFpbHMuYmFua19uYW1lKSldKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJyb3dcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJCYW5rIFdlYnNpdGUgVVJMXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5hY2NvdW50RGV0YWlscy5iYW5rX3dlYnNpdGVfdXJsLFxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmFjY291bnREZXRhaWxzLmJhbmtfd2Vic2l0ZV91cmwpKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyIGJnLWluZm8gdGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtYi0wXCIgfSwgW192bS5fdihcIkFjY291bnQgRGV0YWlsc1wiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTZjNTlmNTgzXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZjNTlmNTgzXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQWNjb3VudERldGFpbC52dWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjBkYzlhOWRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02YzU5ZjU4M1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FjY291bnREZXRhaWwudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02YzU5ZjU4M1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FjY291bnREZXRhaWwudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZjNTlmNTgzXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQWNjb3VudERldGFpbC52dWVcIilcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQWNjb3VudERldGFpbC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FjY291bnREZXRhaWwudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTZjNTlmNTgzXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQWNjb3VudERldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNmM1OWY1ODNcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9BY2NvdW50RGV0YWlsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02YzU5ZjU4M1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZjNTlmNTgzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=