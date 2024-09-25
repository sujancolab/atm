(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/ComplaintDetail.vue":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/ComplaintDetail.vue ***!
  \***************************************************************************************************************************************************/
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
      // Sample messages
      messages: [{
        title: "HITACHI",
        body: "cdf",
        timestamp: "10-09-2024 06:30 PM",
        type: "bg-gradient-primary text-white"
      }, {
        title: "Call Center",
        body: "Name: Vivekananda Sharma Email: NA Phone No.: 7908079103 Comment: Cash Dispenser Fatal",
        timestamp: "10-09-2024 06:35 PM",
        type: "bg-gradient-info text-white"
      }, {
        title: "Call Center",
        body: "Dear Team, Please call log for Dispenser issue, Custodian: Vivekananda Sharma (7908079103) & Eng: Chaitak (8017321602), Kindly provide the docket number...",
        timestamp: "10-09-2024 06:41 PM",
        type: "bg-gradient-warning text-white"
      }],
      complaint: {},
      atm_details: {},
      complaint_details: [],
      custodian_details: null,
      sls_details: null,
      // New comment input
      newComment: ""
    };
  },
  methods: {
    // Function to add a new comment
    addComment() {
      if (this.newComment.trim()) {
        const newMessage = {
          title: "User Comment",
          body: this.newComment,
          timestamp: new Date().toLocaleString(),
          type: "bg-gradient-secondary text-white"
        };
        this.messages.push(newMessage);
        this.newComment = ""; // Clear the input after adding
      }
    }
  },
  beforeCreate() {
    console.log(" this.$route.params.id;", this.$route.params.id);
    axios.get("api/complaint/view/" + this.$route.params.id).then(res => {
      console.log("res====>", res.data.data);
      this.complaint = res.data.data.complaint;
      this.atm_details = res.data.data.atm_details;
      this.complaint_details = res.data.data.complaint_details;
      this.custodian_details = res.data.data.custodian_details;
      this.sls_details = res.data.data.sls_details;
      console.log("atm", atm_details);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-21e7a258\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-21e7a258","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Custom Styles if necessary */\n.message-list[data-v-21e7a258] {\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  padding: 15px;\n}\n.card[data-v-21e7a258] {\n  border: none;\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/resources/js/components/ComplaintDetail.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqIA,gCAAA;AACA;EACA,uBAAA;EACA,uBAAA;EACA,cAAA;CACA;AAEA;EACA,aAAA;CACA","file":"ComplaintDetail.vue","sourcesContent":["<template>\n    <div class=\"container mt-5\">\n\n      <!-- Top Information Design -->\n      <div class=\"row mb-4 p-3 border bg-light rounded\">\n        <div class=\"col-md-4\">\n          <p><strong>ATM :</strong></p>\n          <button class=\"btn btn-primary\">Code - {{complaint && complaint.atm ? complaint.atm.atm_id : \"\"}}</button>\n          <p>Address - {{ atm_details.city_name+', '+atm_details.district_name+', '+atm_details.state_name }}</p>\n          <p>Area Code -{{ atm_details.area_code }}</p>\n          <p>Postcode - {{ atm_details.postcode }}</p>\n          <button class=\"btn btn-info\">{{atm_details.bank_name}}</button>\n        </div>\n        <div class=\"col-md-4\">\n          <p><strong>SLM Docket No :</strong></p>\n          <button class=\"btn btn-info\">{{sls_details ? sls_details.sls_docket_no : \"\"}}</button>\n          <p><strong>Docket No :</strong></p>\n          <button class=\"btn btn-info\">{{complaint.docket_no}}</button>\n        </div>\n        <div class=\"col-md-4\">\n          <p><strong>Status :</strong></p>\n          <!-- <button class=\"btn btn-success\">Completed</button> -->\n          <span v-if=\"complaint.work_status === 'Pending'\" class=\"label label-danger\">Pending</span>\n        <span v-else-if=\"complaint.work_status === 'Processing'\" class=\"label label-warning\">Processing</span>\n        <span v-else-if=\"complaint.work_status === 'Completed'\" class=\"label label-success\">Completed</span>\n\n        </div>\n      </div>\n\n      <!-- Chat Box Design -->\n      <h2 class=\"text-white bg-info p-2 rounded\">Details</h2>\n\n      <!-- Message list -->\n      <div class=\"message-list overflow-auto\" style=\"max-height: 300px;\">\n        <div\n          v-for=\"(message, index) in messages\"\n          :key=\"index\"\n          :class=\"['card mb-3', message.type]\"\n        >\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ message.title }}</h5>\n            <p class=\"card-text\">{{ message.body }}</p>\n            <p class=\"card-text\">\n              <small class=\"text-muted\">{{ message.timestamp }}</small>\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <!-- Add Comment Form -->\n      <div class=\"mt-3\">\n        <div class=\"form-group\">\n          <textarea\n            v-model=\"newComment\"\n            class=\"form-control\"\n            rows=\"3\"\n            placeholder=\"Add Comment\"\n          ></textarea>\n        </div>\n        <button @click=\"addComment\" class=\"btn btn-primary mt-2\">Send</button>\n      </div>\n    </div>\n  </template>\n\n  <script>\n  export default {\n    data() {\n      return {\n        // Sample messages\n        messages: [\n          {\n            title: \"HITACHI\",\n            body: \"cdf\",\n            timestamp: \"10-09-2024 06:30 PM\",\n            type: \"bg-gradient-primary text-white\"\n          },\n          {\n            title: \"Call Center\",\n            body: \"Name: Vivekananda Sharma Email: NA Phone No.: 7908079103 Comment: Cash Dispenser Fatal\",\n            timestamp: \"10-09-2024 06:35 PM\",\n            type: \"bg-gradient-info text-white\"\n          },\n          {\n            title: \"Call Center\",\n            body: \"Dear Team, Please call log for Dispenser issue, Custodian: Vivekananda Sharma (7908079103) & Eng: Chaitak (8017321602), Kindly provide the docket number...\",\n            timestamp: \"10-09-2024 06:41 PM\",\n            type: \"bg-gradient-warning text-white\"\n          }\n        ],\n        complaint:{},\n        atm_details:{},\n        complaint_details:[],\n        custodian_details:null,\n        sls_details:null,\n        // New comment input\n        newComment: \"\"\n      };\n    },\n    methods: {\n      // Function to add a new comment\n      addComment() {\n        if (this.newComment.trim()) {\n          const newMessage = {\n            title: \"User Comment\",\n            body: this.newComment,\n            timestamp: new Date().toLocaleString(),\n            type: \"bg-gradient-secondary text-white\"\n          };\n          this.messages.push(newMessage);\n          this.newComment = \"\"; // Clear the input after adding\n        }\n      }\n    },\n    beforeCreate() {\n        console.log(\" this.$route.params.id;\", this.$route.params.id);\n\n        axios.get(\"api/complaint/view/\"+this.$route.params.id)\n            .then((res) => {\n                console.log(\"res====>\",res.data.data);\n                this.complaint=res.data.data.complaint;\n                this.atm_details=res.data.data.atm_details;\n                this.complaint_details = res.data.data.complaint_details;\n                this.custodian_details = res.data.data.custodian_details;\n                this.sls_details = res.data.data.sls_details;\n                console.log(\"atm\",atm_details);\n\n            })\n\n    },\n  };\n  </script>\n\n  <style scoped>\n  /* Custom Styles if necessary */\n  .message-list {\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    padding: 15px;\n  }\n\n  .card {\n    border: none;\n  }\n  </style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-21e7a258\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintDetail.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-21e7a258","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintDetail.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container mt-5" }, [
    _c("div", { staticClass: "row mb-4 p-3 border bg-light rounded" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary" }, [
          _vm._v(
            "Code - " +
              _vm._s(
                _vm.complaint && _vm.complaint.atm
                  ? _vm.complaint.atm.atm_id
                  : ""
              )
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Address - " +
              _vm._s(
                _vm.atm_details.city_name +
                  ", " +
                  _vm.atm_details.district_name +
                  ", " +
                  _vm.atm_details.state_name
              )
          )
        ]),
        _vm._v(" "),
        _c("p", [_vm._v("Area Code -" + _vm._s(_vm.atm_details.area_code))]),
        _vm._v(" "),
        _c("p", [_vm._v("Postcode - " + _vm._s(_vm.atm_details.postcode))]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-info" }, [
          _vm._v(_vm._s(_vm.atm_details.bank_name))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-info" }, [
          _vm._v(_vm._s(_vm.sls_details ? _vm.sls_details.sls_docket_no : ""))
        ]),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-info" }, [
          _vm._v(_vm._s(_vm.complaint.docket_no))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _vm._m(3),
        _vm._v(" "),
        _vm.complaint.work_status === "Pending"
          ? _c("span", { staticClass: "label label-danger" }, [
              _vm._v("Pending")
            ])
          : _vm.complaint.work_status === "Processing"
          ? _c("span", { staticClass: "label label-warning" }, [
              _vm._v("Processing")
            ])
          : _vm.complaint.work_status === "Completed"
          ? _c("span", { staticClass: "label label-success" }, [
              _vm._v("Completed")
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("h2", { staticClass: "text-white bg-info p-2 rounded" }, [
      _vm._v("Details")
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "message-list overflow-auto",
        staticStyle: { "max-height": "300px" }
      },
      _vm._l(_vm.messages, function(message, index) {
        return _c("div", { key: index, class: ["card mb-3", message.type] }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h5", { staticClass: "card-title" }, [
              _vm._v(_vm._s(message.title))
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "card-text" }, [
              _vm._v(_vm._s(message.body))
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "card-text" }, [
              _c("small", { staticClass: "text-muted" }, [
                _vm._v(_vm._s(message.timestamp))
              ])
            ])
          ])
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "mt-3" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newComment,
              expression: "newComment"
            }
          ],
          staticClass: "form-control",
          attrs: { rows: "3", placeholder: "Add Comment" },
          domProps: { value: _vm.newComment },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.newComment = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary mt-2", on: { click: _vm.addComment } },
        [_vm._v("Send")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("ATM :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("SLM Docket No :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Docket No :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Status :")])])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-21e7a258\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-21e7a258","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-21e7a258","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ComplaintDetail.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-21e7a258\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("672fabef", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/js/components/ComplaintDetail.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/ComplaintDetail.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ComplaintDetail_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./ComplaintDetail.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/ComplaintDetail.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_21e7a258_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintDetail_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-21e7a258","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./ComplaintDetail.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-21e7a258\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintDetail.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-21e7a258","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./ComplaintDetail.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-21e7a258\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-21e7a258"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ComplaintDetail_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_21e7a258_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintDetail_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_21e7a258_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintDetail_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\ComplaintDetail.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlPzljZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZT8xZTNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludERldGFpbC52dWU/NTQ2ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJtZXNzYWdlcyIsInRpdGxlIiwiYm9keSIsInRpbWVzdGFtcCIsInR5cGUiLCJjb21wbGFpbnQiLCJhdG1fZGV0YWlscyIsImNvbXBsYWludF9kZXRhaWxzIiwiY3VzdG9kaWFuX2RldGFpbHMiLCJzbHNfZGV0YWlscyIsIm5ld0NvbW1lbnQiLCJtZXRob2RzIiwiYWRkQ29tbWVudCIsImJlZm9yZUNyZWF0ZSIsImNvbnNvbGUiLCJheGlvcyIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUE7RUFDQUE7SUFDQTtNQUNBO01BQ0FDLFdBQ0E7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQSxHQUNBO1FBQ0FIO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0EsR0FDQTtRQUNBSDtRQUNBQztRQUNBQztRQUNBQztNQUNBLEVBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBQztNQUNBO1FBQ0E7VUFDQVg7VUFDQUM7VUFDQUM7VUFDQUM7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNB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RUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ2xDLElBQUksS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDeEtoQjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxza0JBQWdUO0FBQ3RVO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2SEFBZ0U7QUFDbEYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1CQUFPLENBQUMsNm1CQUE0UjtBQUN0UztBQUNBO0FBQ3NIO0FBQ2E7QUFDbkk7QUFDaVY7QUFDalY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRztBQUNuRyxnQkFBZ0IseUdBQWtCO0FBQ2xDLEVBQUUsa0lBQWM7QUFDaEIsRUFBRSx5T0FBYztBQUNoQixFQUFFLGtQQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWFYOztBQUVVLGdGQUFpQiIsImZpbGUiOiJqcy8zMy5idW5kbGUuNDU0MmM5NmQwOTYyYmJkNjU1MjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC01XCI+XG5cbiAgICAgIDwhLS0gVG9wIEluZm9ybWF0aW9uIERlc2lnbiAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItNCBwLTMgYm9yZGVyIGJnLWxpZ2h0IHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgPHA+PHN0cm9uZz5BVE0gOjwvc3Ryb25nPjwvcD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+Q29kZSAtIHt7Y29tcGxhaW50ICYmIGNvbXBsYWludC5hdG0gPyBjb21wbGFpbnQuYXRtLmF0bV9pZCA6IFwiXCJ9fTwvYnV0dG9uPlxuICAgICAgICAgIDxwPkFkZHJlc3MgLSB7eyBhdG1fZGV0YWlscy5jaXR5X25hbWUrJywgJythdG1fZGV0YWlscy5kaXN0cmljdF9uYW1lKycsICcrYXRtX2RldGFpbHMuc3RhdGVfbmFtZSB9fTwvcD5cbiAgICAgICAgICA8cD5BcmVhIENvZGUgLXt7IGF0bV9kZXRhaWxzLmFyZWFfY29kZSB9fTwvcD5cbiAgICAgICAgICA8cD5Qb3N0Y29kZSAtIHt7IGF0bV9kZXRhaWxzLnBvc3Rjb2RlIH19PC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWluZm9cIj57e2F0bV9kZXRhaWxzLmJhbmtfbmFtZX19PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICA8cD48c3Ryb25nPlNMTSBEb2NrZXQgTm8gOjwvc3Ryb25nPjwvcD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+e3tzbHNfZGV0YWlscyA/IHNsc19kZXRhaWxzLnNsc19kb2NrZXRfbm8gOiBcIlwifX08L2J1dHRvbj5cbiAgICAgICAgICA8cD48c3Ryb25nPkRvY2tldCBObyA6PC9zdHJvbmc+PC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWluZm9cIj57e2NvbXBsYWludC5kb2NrZXRfbm99fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgPHA+PHN0cm9uZz5TdGF0dXMgOjwvc3Ryb25nPjwvcD5cbiAgICAgICAgICA8IS0tIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5Db21wbGV0ZWQ8L2J1dHRvbj4gLS0+XG4gICAgICAgICAgPHNwYW4gdi1pZj1cImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ1BlbmRpbmcnXCIgY2xhc3M9XCJsYWJlbCBsYWJlbC1kYW5nZXJcIj5QZW5kaW5nPC9zcGFuPlxuICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdQcm9jZXNzaW5nJ1wiIGNsYXNzPVwibGFiZWwgbGFiZWwtd2FybmluZ1wiPlByb2Nlc3Npbmc8L3NwYW4+XG4gICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ0NvbXBsZXRlZCdcIiBjbGFzcz1cImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIj5Db21wbGV0ZWQ8L3NwYW4+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBDaGF0IEJveCBEZXNpZ24gLS0+XG4gICAgICA8aDIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWluZm8gcC0yIHJvdW5kZWRcIj5EZXRhaWxzPC9oMj5cblxuICAgICAgPCEtLSBNZXNzYWdlIGxpc3QgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1saXN0IG92ZXJmbG93LWF1dG9cIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDMwMHB4O1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1mb3I9XCIobWVzc2FnZSwgaW5kZXgpIGluIG1lc3NhZ2VzXCJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgIDpjbGFzcz1cIlsnY2FyZCBtYi0zJywgbWVzc2FnZS50eXBlXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgbWVzc2FnZS50aXRsZSB9fTwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPnt7IG1lc3NhZ2UuYm9keSB9fTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj57eyBtZXNzYWdlLnRpbWVzdGFtcCB9fTwvc21hbGw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gQWRkIENvbW1lbnQgRm9ybSAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICB2LW1vZGVsPVwibmV3Q29tbWVudFwiXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBDb21tZW50XCJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwiYWRkQ29tbWVudFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTJcIj5TZW5kPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIFNhbXBsZSBtZXNzYWdlc1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkhJVEFDSElcIixcbiAgICAgICAgICAgIGJvZHk6IFwiY2RmXCIsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IFwiMTAtMDktMjAyNCAwNjozMCBQTVwiLFxuICAgICAgICAgICAgdHlwZTogXCJiZy1ncmFkaWVudC1wcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiQ2FsbCBDZW50ZXJcIixcbiAgICAgICAgICAgIGJvZHk6IFwiTmFtZTogVml2ZWthbmFuZGEgU2hhcm1hIEVtYWlsOiBOQSBQaG9uZSBOby46IDc5MDgwNzkxMDMgQ29tbWVudDogQ2FzaCBEaXNwZW5zZXIgRmF0YWxcIixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogXCIxMC0wOS0yMDI0IDA2OjM1IFBNXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJnLWdyYWRpZW50LWluZm8gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJDYWxsIENlbnRlclwiLFxuICAgICAgICAgICAgYm9keTogXCJEZWFyIFRlYW0sIFBsZWFzZSBjYWxsIGxvZyBmb3IgRGlzcGVuc2VyIGlzc3VlLCBDdXN0b2RpYW46IFZpdmVrYW5hbmRhIFNoYXJtYSAoNzkwODA3OTEwMykgJiBFbmc6IENoYWl0YWsgKDgwMTczMjE2MDIpLCBLaW5kbHkgcHJvdmlkZSB0aGUgZG9ja2V0IG51bWJlci4uLlwiLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBcIjEwLTA5LTIwMjQgMDY6NDEgUE1cIixcbiAgICAgICAgICAgIHR5cGU6IFwiYmctZ3JhZGllbnQtd2FybmluZyB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGNvbXBsYWludDp7fSxcbiAgICAgICAgYXRtX2RldGFpbHM6e30sXG4gICAgICAgIGNvbXBsYWludF9kZXRhaWxzOltdLFxuICAgICAgICBjdXN0b2RpYW5fZGV0YWlsczpudWxsLFxuICAgICAgICBzbHNfZGV0YWlsczpudWxsLFxuICAgICAgICAvLyBOZXcgY29tbWVudCBpbnB1dFxuICAgICAgICBuZXdDb21tZW50OiBcIlwiXG4gICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgLy8gRnVuY3Rpb24gdG8gYWRkIGEgbmV3IGNvbW1lbnRcbiAgICAgIGFkZENvbW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLm5ld0NvbW1lbnQudHJpbSgpKSB7XG4gICAgICAgICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlVzZXIgQ29tbWVudFwiLFxuICAgICAgICAgICAgYm9keTogdGhpcy5uZXdDb21tZW50LFxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICAgICAgICB0eXBlOiBcImJnLWdyYWRpZW50LXNlY29uZGFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChuZXdNZXNzYWdlKTtcbiAgICAgICAgICB0aGlzLm5ld0NvbW1lbnQgPSBcIlwiOyAvLyBDbGVhciB0aGUgaW5wdXQgYWZ0ZXIgYWRkaW5nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIgdGhpcy4kcm91dGUucGFyYW1zLmlkO1wiLCB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpO1xuXG4gICAgICAgIGF4aW9zLmdldChcImFwaS9jb21wbGFpbnQvdmlldy9cIit0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXM9PT09PlwiLHJlcy5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50PXJlcy5kYXRhLmRhdGEuY29tcGxhaW50O1xuICAgICAgICAgICAgICAgIHRoaXMuYXRtX2RldGFpbHM9cmVzLmRhdGEuZGF0YS5hdG1fZGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludF9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfZGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvZGlhbl9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jdXN0b2RpYW5fZGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLnNsc19kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5zbHNfZGV0YWlscztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImF0bVwiLGF0bV9kZXRhaWxzKTtcblxuICAgICAgICAgICAgfSlcblxuICAgIH0sXG4gIH07XG4gIDwvc2NyaXB0PlxuXG4gIDxzdHlsZSBzY29wZWQ+XG4gIC8qIEN1c3RvbSBTdHlsZXMgaWYgbmVjZXNzYXJ5ICovXG4gIC5tZXNzYWdlLWxpc3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICA8L3N0eWxlPlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIEN1c3RvbSBTdHlsZXMgaWYgbmVjZXNzYXJ5ICovXFxuLm1lc3NhZ2UtbGlzdFtkYXRhLXYtMjFlN2EyNThdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLmNhcmRbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9zdWphbi9EZXNrdG9wL1dvcmsvcHJvamVjdCBmcmVlbGFuY2UvU2Fua2hhL2F0bV9wcm9qL2F0bS9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxSUEsZ0NBQUE7QUFDQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0NBQ0E7QUFFQTtFQUNBLGFBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ29tcGxhaW50RGV0YWlsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBtdC01XFxcIj5cXG5cXG4gICAgICA8IS0tIFRvcCBJbmZvcm1hdGlvbiBEZXNpZ24gLS0+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93IG1iLTQgcC0zIGJvcmRlciBiZy1saWdodCByb3VuZGVkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgPHA+PHN0cm9uZz5BVE0gOjwvc3Ryb25nPjwvcD5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5Db2RlIC0ge3tjb21wbGFpbnQgJiYgY29tcGxhaW50LmF0bSA/IGNvbXBsYWludC5hdG0uYXRtX2lkIDogXFxcIlxcXCJ9fTwvYnV0dG9uPlxcbiAgICAgICAgICA8cD5BZGRyZXNzIC0ge3sgYXRtX2RldGFpbHMuY2l0eV9uYW1lKycsICcrYXRtX2RldGFpbHMuZGlzdHJpY3RfbmFtZSsnLCAnK2F0bV9kZXRhaWxzLnN0YXRlX25hbWUgfX08L3A+XFxuICAgICAgICAgIDxwPkFyZWEgQ29kZSAte3sgYXRtX2RldGFpbHMuYXJlYV9jb2RlIH19PC9wPlxcbiAgICAgICAgICA8cD5Qb3N0Y29kZSAtIHt7IGF0bV9kZXRhaWxzLnBvc3Rjb2RlIH19PC9wPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPnt7YXRtX2RldGFpbHMuYmFua19uYW1lfX08L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICA8cD48c3Ryb25nPlNMTSBEb2NrZXQgTm8gOjwvc3Ryb25nPjwvcD5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj57e3Nsc19kZXRhaWxzID8gc2xzX2RldGFpbHMuc2xzX2RvY2tldF9ubyA6IFxcXCJcXFwifX08L2J1dHRvbj5cXG4gICAgICAgICAgPHA+PHN0cm9uZz5Eb2NrZXQgTm8gOjwvc3Ryb25nPjwvcD5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj57e2NvbXBsYWludC5kb2NrZXRfbm99fTwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICAgIDxwPjxzdHJvbmc+U3RhdHVzIDo8L3N0cm9uZz48L3A+XFxuICAgICAgICAgIDwhLS0gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5Db21wbGV0ZWQ8L2J1dHRvbj4gLS0+XFxuICAgICAgICAgIDxzcGFuIHYtaWY9XFxcImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ1BlbmRpbmcnXFxcIiBjbGFzcz1cXFwibGFiZWwgbGFiZWwtZGFuZ2VyXFxcIj5QZW5kaW5nPC9zcGFuPlxcbiAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVxcXCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdQcm9jZXNzaW5nJ1xcXCIgY2xhc3M9XFxcImxhYmVsIGxhYmVsLXdhcm5pbmdcXFwiPlByb2Nlc3Npbmc8L3NwYW4+XFxuICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XFxcImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ0NvbXBsZXRlZCdcXFwiIGNsYXNzPVxcXCJsYWJlbCBsYWJlbC1zdWNjZXNzXFxcIj5Db21wbGV0ZWQ8L3NwYW4+XFxuXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8IS0tIENoYXQgQm94IERlc2lnbiAtLT5cXG4gICAgICA8aDIgY2xhc3M9XFxcInRleHQtd2hpdGUgYmctaW5mbyBwLTIgcm91bmRlZFxcXCI+RGV0YWlsczwvaDI+XFxuXFxuICAgICAgPCEtLSBNZXNzYWdlIGxpc3QgLS0+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWVzc2FnZS1saXN0IG92ZXJmbG93LWF1dG9cXFwiIHN0eWxlPVxcXCJtYXgtaGVpZ2h0OiAzMDBweDtcXFwiPlxcbiAgICAgICAgPGRpdlxcbiAgICAgICAgICB2LWZvcj1cXFwiKG1lc3NhZ2UsIGluZGV4KSBpbiBtZXNzYWdlc1xcXCJcXG4gICAgICAgICAgOmtleT1cXFwiaW5kZXhcXFwiXFxuICAgICAgICAgIDpjbGFzcz1cXFwiWydjYXJkIG1iLTMnLCBtZXNzYWdlLnR5cGVdXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+e3sgbWVzc2FnZS50aXRsZSB9fTwvaDU+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+e3sgbWVzc2FnZS5ib2R5IH19PC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlxcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj57eyBtZXNzYWdlLnRpbWVzdGFtcCB9fTwvc21hbGw+XFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDwhLS0gQWRkIENvbW1lbnQgRm9ybSAtLT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtdC0zXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICA8dGV4dGFyZWFcXG4gICAgICAgICAgICB2LW1vZGVsPVxcXCJuZXdDb21tZW50XFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgcm93cz1cXFwiM1xcXCJcXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQWRkIENvbW1lbnRcXFwiXFxuICAgICAgICAgID48L3RleHRhcmVhPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cXFwiYWRkQ29tbWVudFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBtdC0yXFxcIj5TZW5kPC9idXR0b24+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC90ZW1wbGF0ZT5cXG5cXG4gIDxzY3JpcHQ+XFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIGRhdGEoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICAgIC8vIFNhbXBsZSBtZXNzYWdlc1xcbiAgICAgICAgbWVzc2FnZXM6IFtcXG4gICAgICAgICAge1xcbiAgICAgICAgICAgIHRpdGxlOiBcXFwiSElUQUNISVxcXCIsXFxuICAgICAgICAgICAgYm9keTogXFxcImNkZlxcXCIsXFxuICAgICAgICAgICAgdGltZXN0YW1wOiBcXFwiMTAtMDktMjAyNCAwNjozMCBQTVxcXCIsXFxuICAgICAgICAgICAgdHlwZTogXFxcImJnLWdyYWRpZW50LXByaW1hcnkgdGV4dC13aGl0ZVxcXCJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAge1xcbiAgICAgICAgICAgIHRpdGxlOiBcXFwiQ2FsbCBDZW50ZXJcXFwiLFxcbiAgICAgICAgICAgIGJvZHk6IFxcXCJOYW1lOiBWaXZla2FuYW5kYSBTaGFybWEgRW1haWw6IE5BIFBob25lIE5vLjogNzkwODA3OTEwMyBDb21tZW50OiBDYXNoIERpc3BlbnNlciBGYXRhbFxcXCIsXFxuICAgICAgICAgICAgdGltZXN0YW1wOiBcXFwiMTAtMDktMjAyNCAwNjozNSBQTVxcXCIsXFxuICAgICAgICAgICAgdHlwZTogXFxcImJnLWdyYWRpZW50LWluZm8gdGV4dC13aGl0ZVxcXCJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAge1xcbiAgICAgICAgICAgIHRpdGxlOiBcXFwiQ2FsbCBDZW50ZXJcXFwiLFxcbiAgICAgICAgICAgIGJvZHk6IFxcXCJEZWFyIFRlYW0sIFBsZWFzZSBjYWxsIGxvZyBmb3IgRGlzcGVuc2VyIGlzc3VlLCBDdXN0b2RpYW46IFZpdmVrYW5hbmRhIFNoYXJtYSAoNzkwODA3OTEwMykgJiBFbmc6IENoYWl0YWsgKDgwMTczMjE2MDIpLCBLaW5kbHkgcHJvdmlkZSB0aGUgZG9ja2V0IG51bWJlci4uLlxcXCIsXFxuICAgICAgICAgICAgdGltZXN0YW1wOiBcXFwiMTAtMDktMjAyNCAwNjo0MSBQTVxcXCIsXFxuICAgICAgICAgICAgdHlwZTogXFxcImJnLWdyYWRpZW50LXdhcm5pbmcgdGV4dC13aGl0ZVxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgXSxcXG4gICAgICAgIGNvbXBsYWludDp7fSxcXG4gICAgICAgIGF0bV9kZXRhaWxzOnt9LFxcbiAgICAgICAgY29tcGxhaW50X2RldGFpbHM6W10sXFxuICAgICAgICBjdXN0b2RpYW5fZGV0YWlsczpudWxsLFxcbiAgICAgICAgc2xzX2RldGFpbHM6bnVsbCxcXG4gICAgICAgIC8vIE5ldyBjb21tZW50IGlucHV0XFxuICAgICAgICBuZXdDb21tZW50OiBcXFwiXFxcIlxcbiAgICAgIH07XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAvLyBGdW5jdGlvbiB0byBhZGQgYSBuZXcgY29tbWVudFxcbiAgICAgIGFkZENvbW1lbnQoKSB7XFxuICAgICAgICBpZiAodGhpcy5uZXdDb21tZW50LnRyaW0oKSkge1xcbiAgICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xcbiAgICAgICAgICAgIHRpdGxlOiBcXFwiVXNlciBDb21tZW50XFxcIixcXG4gICAgICAgICAgICBib2R5OiB0aGlzLm5ld0NvbW1lbnQsXFxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXFxuICAgICAgICAgICAgdHlwZTogXFxcImJnLWdyYWRpZW50LXNlY29uZGFyeSB0ZXh0LXdoaXRlXFxcIlxcbiAgICAgICAgICB9O1xcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobmV3TWVzc2FnZSk7XFxuICAgICAgICAgIHRoaXMubmV3Q29tbWVudCA9IFxcXCJcXFwiOyAvLyBDbGVhciB0aGUgaW5wdXQgYWZ0ZXIgYWRkaW5nXFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XFxuICAgICAgICBjb25zb2xlLmxvZyhcXFwiIHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcXFwiLCB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpO1xcblxcbiAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvY29tcGxhaW50L3ZpZXcvXFxcIit0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpXFxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwicmVzPT09PT5cXFwiLHJlcy5kYXRhLmRhdGEpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludD1yZXMuZGF0YS5kYXRhLmNvbXBsYWludDtcXG4gICAgICAgICAgICAgICAgdGhpcy5hdG1fZGV0YWlscz1yZXMuZGF0YS5kYXRhLmF0bV9kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludF9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfZGV0YWlscztcXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b2RpYW5fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY3VzdG9kaWFuX2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2xzX2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLnNsc19kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwiYXRtXFxcIixhdG1fZGV0YWlscyk7XFxuXFxuICAgICAgICAgICAgfSlcXG5cXG4gICAgfSxcXG4gIH07XFxuICA8L3NjcmlwdD5cXG5cXG4gIDxzdHlsZSBzY29wZWQ+XFxuICAvKiBDdXN0b20gU3R5bGVzIGlmIG5lY2Vzc2FyeSAqL1xcbiAgLm1lc3NhZ2UtbGlzdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICB9XFxuXFxuICAuY2FyZCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG4gIDwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXQtNVwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtYi00IHAtMyBib3JkZXIgYmctbGlnaHQgcm91bmRlZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJDb2RlIC0gXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgX3ZtLmNvbXBsYWludCAmJiBfdm0uY29tcGxhaW50LmF0bVxuICAgICAgICAgICAgICAgICAgPyBfdm0uY29tcGxhaW50LmF0bS5hdG1faWRcbiAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIkFkZHJlc3MgLSBcIiArXG4gICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICBfdm0uYXRtX2RldGFpbHMuY2l0eV9uYW1lICtcbiAgICAgICAgICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uYXRtX2RldGFpbHMuZGlzdHJpY3RfbmFtZSArXG4gICAgICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLmF0bV9kZXRhaWxzLnN0YXRlX25hbWVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiQXJlYSBDb2RlIC1cIiArIF92bS5fcyhfdm0uYXRtX2RldGFpbHMuYXJlYV9jb2RlKSldKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJQb3N0Y29kZSAtIFwiICsgX3ZtLl9zKF92bS5hdG1fZGV0YWlscy5wb3N0Y29kZSkpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmF0bV9kZXRhaWxzLmJhbmtfbmFtZSkpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICBfdm0uX20oMSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnNsc19kZXRhaWxzID8gX3ZtLnNsc19kZXRhaWxzLnNsc19kb2NrZXRfbm8gOiBcIlwiKSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm9cIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY29tcGxhaW50LmRvY2tldF9ubykpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICBfdm0uX20oMyksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5jb21wbGFpbnQud29ya19zdGF0dXMgPT09IFwiUGVuZGluZ1wiXG4gICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlBlbmRpbmdcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSBcIlByb2Nlc3NpbmdcIlxuICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtd2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiUHJvY2Vzc2luZ1wiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5jb21wbGFpbnQud29ya19zdGF0dXMgPT09IFwiQ29tcGxldGVkXCJcbiAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGUgYmctaW5mbyBwLTIgcm91bmRlZFwiIH0sIFtcbiAgICAgIF92bS5fdihcIkRldGFpbHNcIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVzc2FnZS1saXN0IG92ZXJmbG93LWF1dG9cIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtaGVpZ2h0XCI6IFwiMzAwcHhcIiB9XG4gICAgICB9LFxuICAgICAgX3ZtLl9sKF92bS5tZXNzYWdlcywgZnVuY3Rpb24obWVzc2FnZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBpbmRleCwgY2xhc3M6IFtcImNhcmQgbWItM1wiLCBtZXNzYWdlLnR5cGVdIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG1lc3NhZ2UudGl0bGUpKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG1lc3NhZ2UuYm9keSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic21hbGxcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LW11dGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MobWVzc2FnZS50aW1lc3RhbXApKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld0NvbW1lbnQsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmV3Q29tbWVudFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICBhdHRyczogeyByb3dzOiBcIjNcIiwgcGxhY2Vob2xkZXI6IFwiQWRkIENvbW1lbnRcIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmV3Q29tbWVudCB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5uZXdDb21tZW50ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBtdC0yXCIsIG9uOiB7IGNsaWNrOiBfdm0uYWRkQ29tbWVudCB9IH0sXG4gICAgICAgIFtfdm0uX3YoXCJTZW5kXCIpXVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJBVE0gOlwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiU0xNIERvY2tldCBObyA6XCIpXSldKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJEb2NrZXQgTm8gOlwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiU3RhdHVzIDpcIildKV0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yMWU3YTI1OFwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjcyZmFiZWZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIxZTdhMjU4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIilcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMjFlN2EyNThcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxDb21wbGFpbnREZXRhaWwudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTIxZTdhMjU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjFlN2EyNThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==