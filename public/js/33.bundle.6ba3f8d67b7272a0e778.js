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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Custom Styles if necessary */\n.message-list[data-v-21e7a258] {\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  padding: 15px;\n}\n.card[data-v-21e7a258] {\n  border: none;\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/resources/js/components/ComplaintDetail.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqIA,gCAAA;AACA;EACA,uBAAA;EACA,uBAAA;EACA,cAAA;CACA;AAEA;EACA,aAAA;CACA","file":"ComplaintDetail.vue","sourcesContent":["<template>\n    <div class=\"container mt-5\">\n\n      <!-- Top Information Design -->\n      <div class=\"row mb-4 p-3 border bg-light rounded\">\n        <div class=\"col-md-4\">\n          <p><strong>ATM :</strong></p>\n          <button class=\"btn btn-primary\">Code - {{complaint.atm.atm_id}}</button>\n          <p>Address - {{ atm_details.city_name+', '+atm_details.district_name+', '+atm_details.state_name }}</p>\n          <p>Area Code -{{ atm_details.area_code }}</p>\n          <p>Postcode - {{ atm_details.postcode }}</p>\n          <button class=\"btn btn-info\">{{atm_details.bank_name}}</button>\n        </div>\n        <div class=\"col-md-4\">\n          <p><strong>SLM Docket No :</strong></p>\n          <button class=\"btn btn-info\">{{sls_details ? sls_details.sls_docket_no : \"\"}}</button>\n          <p><strong>Docket No :</strong></p>\n          <button class=\"btn btn-info\">{{complaint.docket_no}}</button>\n        </div>\n        <div class=\"col-md-4\">\n          <p><strong>Status :</strong></p>\n          <!-- <button class=\"btn btn-success\">Completed</button> -->\n          <span v-if=\"complaint.work_status === 'Pending'\" class=\"label label-danger\">Pending</span>\n        <span v-else-if=\"complaint.work_status === 'Processing'\" class=\"label label-warning\">Processing</span>\n        <span v-else-if=\"complaint.work_status === 'Completed'\" class=\"label label-success\">Completed</span>\n\n        </div>\n      </div>\n\n      <!-- Chat Box Design -->\n      <h2 class=\"text-white bg-info p-2 rounded\">Details</h2>\n\n      <!-- Message list -->\n      <div class=\"message-list overflow-auto\" style=\"max-height: 300px;\">\n        <div\n          v-for=\"(message, index) in messages\"\n          :key=\"index\"\n          :class=\"['card mb-3', message.type]\"\n        >\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ message.title }}</h5>\n            <p class=\"card-text\">{{ message.body }}</p>\n            <p class=\"card-text\">\n              <small class=\"text-muted\">{{ message.timestamp }}</small>\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <!-- Add Comment Form -->\n      <div class=\"mt-3\">\n        <div class=\"form-group\">\n          <textarea\n            v-model=\"newComment\"\n            class=\"form-control\"\n            rows=\"3\"\n            placeholder=\"Add Comment\"\n          ></textarea>\n        </div>\n        <button @click=\"addComment\" class=\"btn btn-primary mt-2\">Send</button>\n      </div>\n    </div>\n  </template>\n\n  <script>\n  export default {\n    data() {\n      return {\n        // Sample messages\n        messages: [\n          {\n            title: \"HITACHI\",\n            body: \"cdf\",\n            timestamp: \"10-09-2024 06:30 PM\",\n            type: \"bg-gradient-primary text-white\"\n          },\n          {\n            title: \"Call Center\",\n            body: \"Name: Vivekananda Sharma Email: NA Phone No.: 7908079103 Comment: Cash Dispenser Fatal\",\n            timestamp: \"10-09-2024 06:35 PM\",\n            type: \"bg-gradient-info text-white\"\n          },\n          {\n            title: \"Call Center\",\n            body: \"Dear Team, Please call log for Dispenser issue, Custodian: Vivekananda Sharma (7908079103) & Eng: Chaitak (8017321602), Kindly provide the docket number...\",\n            timestamp: \"10-09-2024 06:41 PM\",\n            type: \"bg-gradient-warning text-white\"\n          }\n        ],\n        complaint:{},\n        atm_details:{},\n        complaint_details:[],\n        custodian_details:null,\n        sls_details:null,\n        // New comment input\n        newComment: \"\"\n      };\n    },\n    methods: {\n      // Function to add a new comment\n      addComment() {\n        if (this.newComment.trim()) {\n          const newMessage = {\n            title: \"User Comment\",\n            body: this.newComment,\n            timestamp: new Date().toLocaleString(),\n            type: \"bg-gradient-secondary text-white\"\n          };\n          this.messages.push(newMessage);\n          this.newComment = \"\"; // Clear the input after adding\n        }\n      }\n    },\n    beforeCreate() {\n        console.log(\" this.$route.params.id;\", this.$route.params.id);\n\n        axios.get(\"api/complaint/view/\"+this.$route.params.id)\n            .then((res) => {\n                console.log(\"res====>\",res.data.data);\n                this.complaint=res.data.data.complaint;\n                this.atm_details=res.data.data.atm_details;\n                this.complaint_details = res.data.data.complaint_details;\n                this.custodian_details = res.data.data.custodian_details;\n                this.sls_details = res.data.data.sls_details;\n                console.log(\"atm\",atm_details);\n\n            })\n\n    },\n  };\n  </script>\n\n  <style scoped>\n  /* Custom Styles if necessary */\n  .message-list {\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    padding: 15px;\n  }\n\n  .card {\n    border: none;\n  }\n  </style>\n"],"sourceRoot":""}]);

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
          _vm._v("Code - " + _vm._s(_vm.complaint.atm.atm_id))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlPzljZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZT8xZTNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludERldGFpbC52dWU/NTQ2ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJtZXNzYWdlcyIsInRpdGxlIiwiYm9keSIsInRpbWVzdGFtcCIsInR5cGUiLCJjb21wbGFpbnQiLCJhdG1fZGV0YWlscyIsImNvbXBsYWludF9kZXRhaWxzIiwiY3VzdG9kaWFuX2RldGFpbHMiLCJzbHNfZGV0YWlscyIsIm5ld0NvbW1lbnQiLCJtZXRob2RzIiwiYWRkQ29tbWVudCIsImJlZm9yZUNyZWF0ZSIsImNvbnNvbGUiLCJheGlvcyIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUE7RUFDQUE7SUFDQTtNQUNBO01BQ0FDLFdBQ0E7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQSxHQUNBO1FBQ0FIO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0EsR0FDQTtRQUNBSDtRQUNBQztRQUNBQztRQUNBQztNQUNBLEVBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBQztNQUNBO1FBQ0E7VUFDQVg7VUFDQUM7VUFDQUM7VUFDQUM7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQztBQUNsQyxJQUFJLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ2pLaEI7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsc2tCQUFnVDtBQUN0VTtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsNkhBQWdFO0FBQ2xGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1hmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtQkFBTyxDQUFDLDZtQkFBNFI7QUFDdFM7QUFDQTtBQUNzSDtBQUNhO0FBQ25JO0FBQ2lWO0FBQ2pWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUc7QUFDbkcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLGtJQUFjO0FBQ2hCLEVBQUUseU9BQWM7QUFDaEIsRUFBRSxrUEFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvMzMuYnVuZGxlLjZiYTNmOGQ2N2I3MjcyYTBlNzc4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXQtNVwiPlxuXG4gICAgICA8IS0tIFRvcCBJbmZvcm1hdGlvbiBEZXNpZ24gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTQgcC0zIGJvcmRlciBiZy1saWdodCByb3VuZGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgIDxwPjxzdHJvbmc+QVRNIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkNvZGUgLSB7e2NvbXBsYWludC5hdG0uYXRtX2lkfX08L2J1dHRvbj5cbiAgICAgICAgICA8cD5BZGRyZXNzIC0ge3sgYXRtX2RldGFpbHMuY2l0eV9uYW1lKycsICcrYXRtX2RldGFpbHMuZGlzdHJpY3RfbmFtZSsnLCAnK2F0bV9kZXRhaWxzLnN0YXRlX25hbWUgfX08L3A+XG4gICAgICAgICAgPHA+QXJlYSBDb2RlIC17eyBhdG1fZGV0YWlscy5hcmVhX2NvZGUgfX08L3A+XG4gICAgICAgICAgPHA+UG9zdGNvZGUgLSB7eyBhdG1fZGV0YWlscy5wb3N0Y29kZSB9fTwvcD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+e3thdG1fZGV0YWlscy5iYW5rX25hbWV9fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgPHA+PHN0cm9uZz5TTE0gRG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiPnt7c2xzX2RldGFpbHMgPyBzbHNfZGV0YWlscy5zbHNfZG9ja2V0X25vIDogXCJcIn19PC9idXR0b24+XG4gICAgICAgICAgPHA+PHN0cm9uZz5Eb2NrZXQgTm8gOjwvc3Ryb25nPjwvcD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+e3tjb21wbGFpbnQuZG9ja2V0X25vfX08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgIDxwPjxzdHJvbmc+U3RhdHVzIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgPCEtLSA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+Q29tcGxldGVkPC9idXR0b24+IC0tPlxuICAgICAgICAgIDxzcGFuIHYtaWY9XCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdQZW5kaW5nJ1wiIGNsYXNzPVwibGFiZWwgbGFiZWwtZGFuZ2VyXCI+UGVuZGluZzwvc3Bhbj5cbiAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVwiY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnUHJvY2Vzc2luZydcIiBjbGFzcz1cImxhYmVsIGxhYmVsLXdhcm5pbmdcIj5Qcm9jZXNzaW5nPC9zcGFuPlxuICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnXCIgY2xhc3M9XCJsYWJlbCBsYWJlbC1zdWNjZXNzXCI+Q29tcGxldGVkPC9zcGFuPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gQ2hhdCBCb3ggRGVzaWduIC0tPlxuICAgICAgPGgyIGNsYXNzPVwidGV4dC13aGl0ZSBiZy1pbmZvIHAtMiByb3VuZGVkXCI+RGV0YWlsczwvaDI+XG5cbiAgICAgIDwhLS0gTWVzc2FnZSBsaXN0IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtbGlzdCBvdmVyZmxvdy1hdXRvXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiAzMDBweDtcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHYtZm9yPVwiKG1lc3NhZ2UsIGluZGV4KSBpbiBtZXNzYWdlc1wiXG4gICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICA6Y2xhc3M9XCJbJ2NhcmQgbWItMycsIG1lc3NhZ2UudHlwZV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IG1lc3NhZ2UudGl0bGUgfX08L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj57eyBtZXNzYWdlLmJvZHkgfX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+e3sgbWVzc2FnZS50aW1lc3RhbXAgfX08L3NtYWxsPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIEFkZCBDb21tZW50IEZvcm0gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgdi1tb2RlbD1cIm5ld0NvbW1lbnRcIlxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcm93cz1cIjNcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgQ29tbWVudFwiXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cImFkZENvbW1lbnRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtdC0yXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBTYW1wbGUgbWVzc2FnZXNcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJISVRBQ0hJXCIsXG4gICAgICAgICAgICBib2R5OiBcImNkZlwiLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBcIjEwLTA5LTIwMjQgMDY6MzAgUE1cIixcbiAgICAgICAgICAgIHR5cGU6IFwiYmctZ3JhZGllbnQtcHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkNhbGwgQ2VudGVyXCIsXG4gICAgICAgICAgICBib2R5OiBcIk5hbWU6IFZpdmVrYW5hbmRhIFNoYXJtYSBFbWFpbDogTkEgUGhvbmUgTm8uOiA3OTA4MDc5MTAzIENvbW1lbnQ6IENhc2ggRGlzcGVuc2VyIEZhdGFsXCIsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IFwiMTAtMDktMjAyNCAwNjozNSBQTVwiLFxuICAgICAgICAgICAgdHlwZTogXCJiZy1ncmFkaWVudC1pbmZvIHRleHQtd2hpdGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiQ2FsbCBDZW50ZXJcIixcbiAgICAgICAgICAgIGJvZHk6IFwiRGVhciBUZWFtLCBQbGVhc2UgY2FsbCBsb2cgZm9yIERpc3BlbnNlciBpc3N1ZSwgQ3VzdG9kaWFuOiBWaXZla2FuYW5kYSBTaGFybWEgKDc5MDgwNzkxMDMpICYgRW5nOiBDaGFpdGFrICg4MDE3MzIxNjAyKSwgS2luZGx5IHByb3ZpZGUgdGhlIGRvY2tldCBudW1iZXIuLi5cIixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogXCIxMC0wOS0yMDI0IDA2OjQxIFBNXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJnLWdyYWRpZW50LXdhcm5pbmcgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBjb21wbGFpbnQ6e30sXG4gICAgICAgIGF0bV9kZXRhaWxzOnt9LFxuICAgICAgICBjb21wbGFpbnRfZGV0YWlsczpbXSxcbiAgICAgICAgY3VzdG9kaWFuX2RldGFpbHM6bnVsbCxcbiAgICAgICAgc2xzX2RldGFpbHM6bnVsbCxcbiAgICAgICAgLy8gTmV3IGNvbW1lbnQgaW5wdXRcbiAgICAgICAgbmV3Q29tbWVudDogXCJcIlxuICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIC8vIEZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBjb21tZW50XG4gICAgICBhZGRDb21tZW50KCkge1xuICAgICAgICBpZiAodGhpcy5uZXdDb21tZW50LnRyaW0oKSkge1xuICAgICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJVc2VyIENvbW1lbnRcIixcbiAgICAgICAgICAgIGJvZHk6IHRoaXMubmV3Q29tbWVudCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxuICAgICAgICAgICAgdHlwZTogXCJiZy1ncmFkaWVudC1zZWNvbmRhcnkgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobmV3TWVzc2FnZSk7XG4gICAgICAgICAgdGhpcy5uZXdDb21tZW50ID0gXCJcIjsgLy8gQ2xlYXIgdGhlIGlucHV0IGFmdGVyIGFkZGluZ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcIiwgdGhpcy4kcm91dGUucGFyYW1zLmlkKTtcblxuICAgICAgICBheGlvcy5nZXQoXCJhcGkvY29tcGxhaW50L3ZpZXcvXCIrdGhpcy4kcm91dGUucGFyYW1zLmlkKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzPT09PT5cIixyZXMuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludD1yZXMuZGF0YS5kYXRhLmNvbXBsYWludDtcbiAgICAgICAgICAgICAgICB0aGlzLmF0bV9kZXRhaWxzPXJlcy5kYXRhLmRhdGEuYXRtX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGFpbnRfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50X2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b2RpYW5fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY3VzdG9kaWFuX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5zbHNfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuc2xzX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdG1cIixhdG1fZGV0YWlscyk7XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICB9LFxuICB9O1xuICA8L3NjcmlwdD5cblxuICA8c3R5bGUgc2NvcGVkPlxuICAvKiBDdXN0b20gU3R5bGVzIGlmIG5lY2Vzc2FyeSAqL1xuICAubWVzc2FnZS1saXN0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBDdXN0b20gU3R5bGVzIGlmIG5lY2Vzc2FyeSAqL1xcbi5tZXNzYWdlLWxpc3RbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5jYXJkW2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvc3VqYW4vRGVza3RvcC9Xb3JrL3Byb2plY3QgZnJlZWxhbmNlL1NhbmtoYS9hdG1fcHJvai9hdG0vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUlBLGdDQUFBO0FBQ0E7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtDQUNBO0FBRUE7RUFDQSxhQUFBO0NBQ0FcIixcImZpbGVcIjpcIkNvbXBsYWludERldGFpbC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbXQtNVxcXCI+XFxuXFxuICAgICAgPCEtLSBUb3AgSW5mb3JtYXRpb24gRGVzaWduIC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBtYi00IHAtMyBib3JkZXIgYmctbGlnaHQgcm91bmRlZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICAgIDxwPjxzdHJvbmc+QVRNIDo8L3N0cm9uZz48L3A+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+Q29kZSAtIHt7Y29tcGxhaW50LmF0bS5hdG1faWR9fTwvYnV0dG9uPlxcbiAgICAgICAgICA8cD5BZGRyZXNzIC0ge3sgYXRtX2RldGFpbHMuY2l0eV9uYW1lKycsICcrYXRtX2RldGFpbHMuZGlzdHJpY3RfbmFtZSsnLCAnK2F0bV9kZXRhaWxzLnN0YXRlX25hbWUgfX08L3A+XFxuICAgICAgICAgIDxwPkFyZWEgQ29kZSAte3sgYXRtX2RldGFpbHMuYXJlYV9jb2RlIH19PC9wPlxcbiAgICAgICAgICA8cD5Qb3N0Y29kZSAtIHt7IGF0bV9kZXRhaWxzLnBvc3Rjb2RlIH19PC9wPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPnt7YXRtX2RldGFpbHMuYmFua19uYW1lfX08L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICA8cD48c3Ryb25nPlNMTSBEb2NrZXQgTm8gOjwvc3Ryb25nPjwvcD5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj57e3Nsc19kZXRhaWxzID8gc2xzX2RldGFpbHMuc2xzX2RvY2tldF9ubyA6IFxcXCJcXFwifX08L2J1dHRvbj5cXG4gICAgICAgICAgPHA+PHN0cm9uZz5Eb2NrZXQgTm8gOjwvc3Ryb25nPjwvcD5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj57e2NvbXBsYWludC5kb2NrZXRfbm99fTwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICAgIDxwPjxzdHJvbmc+U3RhdHVzIDo8L3N0cm9uZz48L3A+XFxuICAgICAgICAgIDwhLS0gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5Db21wbGV0ZWQ8L2J1dHRvbj4gLS0+XFxuICAgICAgICAgIDxzcGFuIHYtaWY9XFxcImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ1BlbmRpbmcnXFxcIiBjbGFzcz1cXFwibGFiZWwgbGFiZWwtZGFuZ2VyXFxcIj5QZW5kaW5nPC9zcGFuPlxcbiAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVxcXCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdQcm9jZXNzaW5nJ1xcXCIgY2xhc3M9XFxcImxhYmVsIGxhYmVsLXdhcm5pbmdcXFwiPlByb2Nlc3Npbmc8L3NwYW4+XFxuICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XFxcImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ0NvbXBsZXRlZCdcXFwiIGNsYXNzPVxcXCJsYWJlbCBsYWJlbC1zdWNjZXNzXFxcIj5Db21wbGV0ZWQ8L3NwYW4+XFxuXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8IS0tIENoYXQgQm94IERlc2lnbiAtLT5cXG4gICAgICA8aDIgY2xhc3M9XFxcInRleHQtd2hpdGUgYmctaW5mbyBwLTIgcm91bmRlZFxcXCI+RGV0YWlsczwvaDI+XFxuXFxuICAgICAgPCEtLSBNZXNzYWdlIGxpc3QgLS0+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWVzc2FnZS1saXN0IG92ZXJmbG93LWF1dG9cXFwiIHN0eWxlPVxcXCJtYXgtaGVpZ2h0OiAzMDBweDtcXFwiPlxcbiAgICAgICAgPGRpdlxcbiAgICAgICAgICB2LWZvcj1cXFwiKG1lc3NhZ2UsIGluZGV4KSBpbiBtZXNzYWdlc1xcXCJcXG4gICAgICAgICAgOmtleT1cXFwiaW5kZXhcXFwiXFxuICAgICAgICAgIDpjbGFzcz1cXFwiWydjYXJkIG1iLTMnLCBtZXNzYWdlLnR5cGVdXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+e3sgbWVzc2FnZS50aXRsZSB9fTwvaDU+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+e3sgbWVzc2FnZS5ib2R5IH19PC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlxcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj57eyBtZXNzYWdlLnRpbWVzdGFtcCB9fTwvc21hbGw+XFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDwhLS0gQWRkIENvbW1lbnQgRm9ybSAtLT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtdC0zXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICA8dGV4dGFyZWFcXG4gICAgICAgICAgICB2LW1vZGVsPVxcXCJuZXdDb21tZW50XFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgcm93cz1cXFwiM1xcXCJcXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQWRkIENvbW1lbnRcXFwiXFxuICAgICAgICAgID48L3RleHRhcmVhPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cXFwiYWRkQ29tbWVudFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBtdC0yXFxcIj5TZW5kPC9idXR0b24+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC90ZW1wbGF0ZT5cXG5cXG4gIDxzY3JpcHQ+XFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIGRhdGEoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICAgIC8vIFNhbXBsZSBtZXNzYWdlc1xcbiAgICAgICAgbWVzc2FnZXM6IFtcXG4gICAgICAgICAge1xcbiAgICAgICAgICAgIHRpdGxlOiBcXFwiSElUQUNISVxcXCIsXFxuICAgICAgICAgICAgYm9keTogXFxcImNkZlxcXCIsXFxuICAgICAgICAgICAgdGltZXN0YW1wOiBcXFwiMTAtMDktMjAyNCAwNjozMCBQTVxcXCIsXFxuICAgICAgICAgICAgdHlwZTogXFxcImJnLWdyYWRpZW50LXByaW1hcnkgdGV4dC13aGl0ZVxcXCJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAge1xcbiAgICAgICAgICAgIHRpdGxlOiBcXFwiQ2FsbCBDZW50ZXJcXFwiLFxcbiAgICAgICAgICAgIGJvZHk6IFxcXCJOYW1lOiBWaXZla2FuYW5kYSBTaGFybWEgRW1haWw6IE5BIFBob25lIE5vLjogNzkwODA3OTEwMyBDb21tZW50OiBDYXNoIERpc3BlbnNlciBGYXRhbFxcXCIsXFxuICAgICAgICAgICAgdGltZXN0YW1wOiBcXFwiMTAtMDktMjAyNCAwNjozNSBQTVxcXCIsXFxuICAgICAgICAgICAgdHlwZTogXFxcImJnLWdyYWRpZW50LWluZm8gdGV4dC13aGl0ZVxcXCJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAge1xcbiAgICAgICAgICAgIHRpdGxlOiBcXFwiQ2FsbCBDZW50ZXJcXFwiLFxcbiAgICAgICAgICAgIGJvZHk6IFxcXCJEZWFyIFRlYW0sIFBsZWFzZSBjYWxsIGxvZyBmb3IgRGlzcGVuc2VyIGlzc3VlLCBDdXN0b2RpYW46IFZpdmVrYW5hbmRhIFNoYXJtYSAoNzkwODA3OTEwMykgJiBFbmc6IENoYWl0YWsgKDgwMTczMjE2MDIpLCBLaW5kbHkgcHJvdmlkZSB0aGUgZG9ja2V0IG51bWJlci4uLlxcXCIsXFxuICAgICAgICAgICAgdGltZXN0YW1wOiBcXFwiMTAtMDktMjAyNCAwNjo0MSBQTVxcXCIsXFxuICAgICAgICAgICAgdHlwZTogXFxcImJnLWdyYWRpZW50LXdhcm5pbmcgdGV4dC13aGl0ZVxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgXSxcXG4gICAgICAgIGNvbXBsYWludDp7fSxcXG4gICAgICAgIGF0bV9kZXRhaWxzOnt9LFxcbiAgICAgICAgY29tcGxhaW50X2RldGFpbHM6W10sXFxuICAgICAgICBjdXN0b2RpYW5fZGV0YWlsczpudWxsLFxcbiAgICAgICAgc2xzX2RldGFpbHM6bnVsbCxcXG4gICAgICAgIC8vIE5ldyBjb21tZW50IGlucHV0XFxuICAgICAgICBuZXdDb21tZW50OiBcXFwiXFxcIlxcbiAgICAgIH07XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAvLyBGdW5jdGlvbiB0byBhZGQgYSBuZXcgY29tbWVudFxcbiAgICAgIGFkZENvbW1lbnQoKSB7XFxuICAgICAgICBpZiAodGhpcy5uZXdDb21tZW50LnRyaW0oKSkge1xcbiAgICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xcbiAgICAgICAgICAgIHRpdGxlOiBcXFwiVXNlciBDb21tZW50XFxcIixcXG4gICAgICAgICAgICBib2R5OiB0aGlzLm5ld0NvbW1lbnQsXFxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXFxuICAgICAgICAgICAgdHlwZTogXFxcImJnLWdyYWRpZW50LXNlY29uZGFyeSB0ZXh0LXdoaXRlXFxcIlxcbiAgICAgICAgICB9O1xcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobmV3TWVzc2FnZSk7XFxuICAgICAgICAgIHRoaXMubmV3Q29tbWVudCA9IFxcXCJcXFwiOyAvLyBDbGVhciB0aGUgaW5wdXQgYWZ0ZXIgYWRkaW5nXFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XFxuICAgICAgICBjb25zb2xlLmxvZyhcXFwiIHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcXFwiLCB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpO1xcblxcbiAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvY29tcGxhaW50L3ZpZXcvXFxcIit0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpXFxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwicmVzPT09PT5cXFwiLHJlcy5kYXRhLmRhdGEpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludD1yZXMuZGF0YS5kYXRhLmNvbXBsYWludDtcXG4gICAgICAgICAgICAgICAgdGhpcy5hdG1fZGV0YWlscz1yZXMuZGF0YS5kYXRhLmF0bV9kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludF9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfZGV0YWlscztcXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b2RpYW5fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY3VzdG9kaWFuX2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2xzX2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLnNsc19kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwiYXRtXFxcIixhdG1fZGV0YWlscyk7XFxuXFxuICAgICAgICAgICAgfSlcXG5cXG4gICAgfSxcXG4gIH07XFxuICA8L3NjcmlwdD5cXG5cXG4gIDxzdHlsZSBzY29wZWQ+XFxuICAvKiBDdXN0b20gU3R5bGVzIGlmIG5lY2Vzc2FyeSAqL1xcbiAgLm1lc3NhZ2UtbGlzdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICB9XFxuXFxuICAuY2FyZCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG4gIDwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXQtNVwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtYi00IHAtMyBib3JkZXIgYmctbGlnaHQgcm91bmRlZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiQ29kZSAtIFwiICsgX3ZtLl9zKF92bS5jb21wbGFpbnQuYXRtLmF0bV9pZCkpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiQWRkcmVzcyAtIFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgIF92bS5hdG1fZGV0YWlscy5jaXR5X25hbWUgK1xuICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5hdG1fZGV0YWlscy5kaXN0cmljdF9uYW1lICtcbiAgICAgICAgICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uYXRtX2RldGFpbHMuc3RhdGVfbmFtZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJBcmVhIENvZGUgLVwiICsgX3ZtLl9zKF92bS5hdG1fZGV0YWlscy5hcmVhX2NvZGUpKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlBvc3Rjb2RlIC0gXCIgKyBfdm0uX3MoX3ZtLmF0bV9kZXRhaWxzLnBvc3Rjb2RlKSldKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm9cIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYXRtX2RldGFpbHMuYmFua19uYW1lKSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm9cIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc2xzX2RldGFpbHMgPyBfdm0uc2xzX2RldGFpbHMuc2xzX2RvY2tldF9ubyA6IFwiXCIpKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mb1wiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5jb21wbGFpbnQuZG9ja2V0X25vKSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gXCJQZW5kaW5nXCJcbiAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiUGVuZGluZ1wiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5jb21wbGFpbnQud29ya19zdGF0dXMgPT09IFwiUHJvY2Vzc2luZ1wiXG4gICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC13YXJuaW5nXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJQcm9jZXNzaW5nXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLmNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gXCJDb21wbGV0ZWRcIlxuICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiQ29tcGxldGVkXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZSBiZy1pbmZvIHAtMiByb3VuZGVkXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiRGV0YWlsc1wiKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtZXNzYWdlLWxpc3Qgb3ZlcmZsb3ctYXV0b1wiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1heC1oZWlnaHRcIjogXCIzMDBweFwiIH1cbiAgICAgIH0sXG4gICAgICBfdm0uX2woX3ZtLm1lc3NhZ2VzLCBmdW5jdGlvbihtZXNzYWdlLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGluZGV4LCBjbGFzczogW1wiY2FyZCBtYi0zXCIsIG1lc3NhZ2UudHlwZV0gfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MobWVzc2FnZS50aXRsZSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MobWVzc2FnZS5ib2R5KSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzbWFsbFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbXV0ZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhtZXNzYWdlLnRpbWVzdGFtcCkpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICB9KSxcbiAgICAgIDBcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmV3Q29tbWVudCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdDb21tZW50XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiM1wiLCBwbGFjZWhvbGRlcjogXCJBZGQgQ29tbWVudFwiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uZXdDb21tZW50IH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLm5ld0NvbW1lbnQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IG10LTJcIiwgb246IHsgY2xpY2s6IF92bS5hZGRDb21tZW50IH0gfSxcbiAgICAgICAgW192bS5fdihcIlNlbmRcIildXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkFUTSA6XCIpXSldKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJTTE0gRG9ja2V0IE5vIDpcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkRvY2tldCBObyA6XCIpXSldKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJTdGF0dXMgOlwiKV0pXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTIxZTdhMjU4XCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIxZTdhMjU4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2NzJmYWJlZlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIxZTdhMjU4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjFlN2EyNThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIxZTdhMjU4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTIxZTdhMjU4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0yMWU3YTI1OFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXENvbXBsYWludERldGFpbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjFlN2EyNThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yMWU3YTI1OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9