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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Custom Styles if necessary */\n.message-list[data-v-21e7a258] {\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  padding: 15px;\n}\n.card[data-v-21e7a258] {\n  border: none;\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/resources/js/components/ComplaintDetail.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqIA,gCAAA;AACA;EACA,uBAAA;EACA,uBAAA;EACA,cAAA;CACA;AAEA;EACA,aAAA;CACA","file":"ComplaintDetail.vue","sourcesContent":["<template>\n    <div class=\"container mt-5\">\n\n      <!-- Top Information Design -->\n      <div class=\"row mb-4 p-3 border bg-light rounded\">\n        <div class=\"col-md-4\">\n          <p><strong>ATM :</strong></p>\n          <button class=\"btn btn-primary\">Code - {{complaint.atm.atm_id}}</button>\n          <p>Address - {{ atm_details.city_name+', '+atm_details.district_name+', '+atm_details.state_name }}</p>\n          <p>Area Code -{{ atm_details.area_code }}</p>\n          <p>Postcode - {{ atm_details.postcode }}</p>\n          <button class=\"btn btn-info\">{{atm_details.bank_name}}</button>\n        </div>\n        <div class=\"col-md-4\">\n          <p><strong>SLM Docket No :</strong></p>\n          <button class=\"btn btn-info\">{{sls_details.sls_docket_no}}</button>\n          <p><strong>Docket No :</strong></p>\n          <button class=\"btn btn-info\">{{complaint.docket_no}}</button>\n        </div>\n        <div class=\"col-md-4\">\n          <p><strong>Status :</strong></p>\n          <!-- <button class=\"btn btn-success\">Completed</button> -->\n          <span v-if=\"complaint.work_status === 'Pending'\" class=\"label label-danger\">Pending</span>\n        <span v-else-if=\"complaint.work_status === 'Processing'\" class=\"label label-warning\">Processing</span>\n        <span v-else-if=\"complaint.work_status === 'Completed'\" class=\"label label-success\">Completed</span>\n\n        </div>\n      </div>\n\n      <!-- Chat Box Design -->\n      <h2 class=\"text-white bg-info p-2 rounded\">Details</h2>\n\n      <!-- Message list -->\n      <div class=\"message-list overflow-auto\" style=\"max-height: 300px;\">\n        <div\n          v-for=\"(message, index) in messages\"\n          :key=\"index\"\n          :class=\"['card mb-3', message.type]\"\n        >\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ message.title }}</h5>\n            <p class=\"card-text\">{{ message.body }}</p>\n            <p class=\"card-text\">\n              <small class=\"text-muted\">{{ message.timestamp }}</small>\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <!-- Add Comment Form -->\n      <div class=\"mt-3\">\n        <div class=\"form-group\">\n          <textarea\n            v-model=\"newComment\"\n            class=\"form-control\"\n            rows=\"3\"\n            placeholder=\"Add Comment\"\n          ></textarea>\n        </div>\n        <button @click=\"addComment\" class=\"btn btn-primary mt-2\">Send</button>\n      </div>\n    </div>\n  </template>\n\n  <script>\n  export default {\n    data() {\n      return {\n        // Sample messages\n        messages: [\n          {\n            title: \"HITACHI\",\n            body: \"cdf\",\n            timestamp: \"10-09-2024 06:30 PM\",\n            type: \"bg-gradient-primary text-white\"\n          },\n          {\n            title: \"Call Center\",\n            body: \"Name: Vivekananda Sharma Email: NA Phone No.: 7908079103 Comment: Cash Dispenser Fatal\",\n            timestamp: \"10-09-2024 06:35 PM\",\n            type: \"bg-gradient-info text-white\"\n          },\n          {\n            title: \"Call Center\",\n            body: \"Dear Team, Please call log for Dispenser issue, Custodian: Vivekananda Sharma (7908079103) & Eng: Chaitak (8017321602), Kindly provide the docket number...\",\n            timestamp: \"10-09-2024 06:41 PM\",\n            type: \"bg-gradient-warning text-white\"\n          }\n        ],\n        complaint:{},\n        atm_details:{},\n        complaint_details:[],\n        custodian_details:null,\n        sls_details:null,\n        // New comment input\n        newComment: \"\"\n      };\n    },\n    methods: {\n      // Function to add a new comment\n      addComment() {\n        if (this.newComment.trim()) {\n          const newMessage = {\n            title: \"User Comment\",\n            body: this.newComment,\n            timestamp: new Date().toLocaleString(),\n            type: \"bg-gradient-secondary text-white\"\n          };\n          this.messages.push(newMessage);\n          this.newComment = \"\"; // Clear the input after adding\n        }\n      }\n    },\n    beforeCreate() {\n        console.log(\" this.$route.params.id;\", this.$route.params.id);\n\n        axios.get(\"api/complaint/view/\"+this.$route.params.id)\n            .then((res) => {\n                console.log(\"res====>\",res.data.data);\n                this.complaint=res.data.data.complaint;\n                this.atm_details=res.data.data.atm_details;\n                this.complaint_details = res.data.data.complaint_details;\n                this.custodian_details = res.data.data.custodian_details;\n                this.sls_details = res.data.data.sls_details;\n                console.log(\"atm\",atm_details);\n\n            })\n\n    },\n  };\n  </script>\n\n  <style scoped>\n  /* Custom Styles if necessary */\n  .message-list {\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    padding: 15px;\n  }\n\n  .card {\n    border: none;\n  }\n  </style>\n"],"sourceRoot":""}]);

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
          _vm._v(_vm._s(_vm.sls_details.sls_docket_no))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlPzljZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZT8xZTNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludERldGFpbC52dWU/NTQ2ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJtZXNzYWdlcyIsInRpdGxlIiwiYm9keSIsInRpbWVzdGFtcCIsInR5cGUiLCJjb21wbGFpbnQiLCJhdG1fZGV0YWlscyIsImNvbXBsYWludF9kZXRhaWxzIiwiY3VzdG9kaWFuX2RldGFpbHMiLCJzbHNfZGV0YWlscyIsIm5ld0NvbW1lbnQiLCJtZXRob2RzIiwiYWRkQ29tbWVudCIsImJlZm9yZUNyZWF0ZSIsImNvbnNvbGUiLCJheGlvcyIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUE7RUFDQUE7SUFDQTtNQUNBO01BQ0FDLFdBQ0E7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQSxHQUNBO1FBQ0FIO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0EsR0FDQTtRQUNBSDtRQUNBQztRQUNBQztRQUNBQztNQUNBLEVBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBQztNQUNBO1FBQ0E7VUFDQVg7VUFDQUM7VUFDQUM7VUFDQUM7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQztBQUNsQyxJQUFJLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ2pLaEI7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsc2tCQUFnVDtBQUN0VTtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsNkhBQWdFO0FBQ2xGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1hmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtQkFBTyxDQUFDLDZtQkFBNFI7QUFDdFM7QUFDQTtBQUNzSDtBQUNhO0FBQ25JO0FBQ2lWO0FBQ2pWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUc7QUFDbkcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLGtJQUFjO0FBQ2hCLEVBQUUseU9BQWM7QUFDaEIsRUFBRSxrUEFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvMzMuYnVuZGxlLjY4Njk1YTFkOWE0YzZiMTQxYTkwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXQtNVwiPlxuXG4gICAgICA8IS0tIFRvcCBJbmZvcm1hdGlvbiBEZXNpZ24gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTQgcC0zIGJvcmRlciBiZy1saWdodCByb3VuZGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgIDxwPjxzdHJvbmc+QVRNIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkNvZGUgLSB7e2NvbXBsYWludC5hdG0uYXRtX2lkfX08L2J1dHRvbj5cbiAgICAgICAgICA8cD5BZGRyZXNzIC0ge3sgYXRtX2RldGFpbHMuY2l0eV9uYW1lKycsICcrYXRtX2RldGFpbHMuZGlzdHJpY3RfbmFtZSsnLCAnK2F0bV9kZXRhaWxzLnN0YXRlX25hbWUgfX08L3A+XG4gICAgICAgICAgPHA+QXJlYSBDb2RlIC17eyBhdG1fZGV0YWlscy5hcmVhX2NvZGUgfX08L3A+XG4gICAgICAgICAgPHA+UG9zdGNvZGUgLSB7eyBhdG1fZGV0YWlscy5wb3N0Y29kZSB9fTwvcD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+e3thdG1fZGV0YWlscy5iYW5rX25hbWV9fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgPHA+PHN0cm9uZz5TTE0gRG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiPnt7c2xzX2RldGFpbHMuc2xzX2RvY2tldF9ub319PC9idXR0b24+XG4gICAgICAgICAgPHA+PHN0cm9uZz5Eb2NrZXQgTm8gOjwvc3Ryb25nPjwvcD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+e3tjb21wbGFpbnQuZG9ja2V0X25vfX08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgIDxwPjxzdHJvbmc+U3RhdHVzIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgPCEtLSA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+Q29tcGxldGVkPC9idXR0b24+IC0tPlxuICAgICAgICAgIDxzcGFuIHYtaWY9XCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdQZW5kaW5nJ1wiIGNsYXNzPVwibGFiZWwgbGFiZWwtZGFuZ2VyXCI+UGVuZGluZzwvc3Bhbj5cbiAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVwiY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnUHJvY2Vzc2luZydcIiBjbGFzcz1cImxhYmVsIGxhYmVsLXdhcm5pbmdcIj5Qcm9jZXNzaW5nPC9zcGFuPlxuICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnXCIgY2xhc3M9XCJsYWJlbCBsYWJlbC1zdWNjZXNzXCI+Q29tcGxldGVkPC9zcGFuPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gQ2hhdCBCb3ggRGVzaWduIC0tPlxuICAgICAgPGgyIGNsYXNzPVwidGV4dC13aGl0ZSBiZy1pbmZvIHAtMiByb3VuZGVkXCI+RGV0YWlsczwvaDI+XG5cbiAgICAgIDwhLS0gTWVzc2FnZSBsaXN0IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtbGlzdCBvdmVyZmxvdy1hdXRvXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiAzMDBweDtcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHYtZm9yPVwiKG1lc3NhZ2UsIGluZGV4KSBpbiBtZXNzYWdlc1wiXG4gICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICA6Y2xhc3M9XCJbJ2NhcmQgbWItMycsIG1lc3NhZ2UudHlwZV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IG1lc3NhZ2UudGl0bGUgfX08L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj57eyBtZXNzYWdlLmJvZHkgfX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+e3sgbWVzc2FnZS50aW1lc3RhbXAgfX08L3NtYWxsPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIEFkZCBDb21tZW50IEZvcm0gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgdi1tb2RlbD1cIm5ld0NvbW1lbnRcIlxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcm93cz1cIjNcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgQ29tbWVudFwiXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cImFkZENvbW1lbnRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtdC0yXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBTYW1wbGUgbWVzc2FnZXNcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJISVRBQ0hJXCIsXG4gICAgICAgICAgICBib2R5OiBcImNkZlwiLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBcIjEwLTA5LTIwMjQgMDY6MzAgUE1cIixcbiAgICAgICAgICAgIHR5cGU6IFwiYmctZ3JhZGllbnQtcHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkNhbGwgQ2VudGVyXCIsXG4gICAgICAgICAgICBib2R5OiBcIk5hbWU6IFZpdmVrYW5hbmRhIFNoYXJtYSBFbWFpbDogTkEgUGhvbmUgTm8uOiA3OTA4MDc5MTAzIENvbW1lbnQ6IENhc2ggRGlzcGVuc2VyIEZhdGFsXCIsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IFwiMTAtMDktMjAyNCAwNjozNSBQTVwiLFxuICAgICAgICAgICAgdHlwZTogXCJiZy1ncmFkaWVudC1pbmZvIHRleHQtd2hpdGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiQ2FsbCBDZW50ZXJcIixcbiAgICAgICAgICAgIGJvZHk6IFwiRGVhciBUZWFtLCBQbGVhc2UgY2FsbCBsb2cgZm9yIERpc3BlbnNlciBpc3N1ZSwgQ3VzdG9kaWFuOiBWaXZla2FuYW5kYSBTaGFybWEgKDc5MDgwNzkxMDMpICYgRW5nOiBDaGFpdGFrICg4MDE3MzIxNjAyKSwgS2luZGx5IHByb3ZpZGUgdGhlIGRvY2tldCBudW1iZXIuLi5cIixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogXCIxMC0wOS0yMDI0IDA2OjQxIFBNXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJnLWdyYWRpZW50LXdhcm5pbmcgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBjb21wbGFpbnQ6e30sXG4gICAgICAgIGF0bV9kZXRhaWxzOnt9LFxuICAgICAgICBjb21wbGFpbnRfZGV0YWlsczpbXSxcbiAgICAgICAgY3VzdG9kaWFuX2RldGFpbHM6bnVsbCxcbiAgICAgICAgc2xzX2RldGFpbHM6bnVsbCxcbiAgICAgICAgLy8gTmV3IGNvbW1lbnQgaW5wdXRcbiAgICAgICAgbmV3Q29tbWVudDogXCJcIlxuICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIC8vIEZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBjb21tZW50XG4gICAgICBhZGRDb21tZW50KCkge1xuICAgICAgICBpZiAodGhpcy5uZXdDb21tZW50LnRyaW0oKSkge1xuICAgICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJVc2VyIENvbW1lbnRcIixcbiAgICAgICAgICAgIGJvZHk6IHRoaXMubmV3Q29tbWVudCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxuICAgICAgICAgICAgdHlwZTogXCJiZy1ncmFkaWVudC1zZWNvbmRhcnkgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobmV3TWVzc2FnZSk7XG4gICAgICAgICAgdGhpcy5uZXdDb21tZW50ID0gXCJcIjsgLy8gQ2xlYXIgdGhlIGlucHV0IGFmdGVyIGFkZGluZ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcIiwgdGhpcy4kcm91dGUucGFyYW1zLmlkKTtcblxuICAgICAgICBheGlvcy5nZXQoXCJhcGkvY29tcGxhaW50L3ZpZXcvXCIrdGhpcy4kcm91dGUucGFyYW1zLmlkKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzPT09PT5cIixyZXMuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludD1yZXMuZGF0YS5kYXRhLmNvbXBsYWludDtcbiAgICAgICAgICAgICAgICB0aGlzLmF0bV9kZXRhaWxzPXJlcy5kYXRhLmRhdGEuYXRtX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGFpbnRfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50X2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b2RpYW5fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY3VzdG9kaWFuX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5zbHNfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuc2xzX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdG1cIixhdG1fZGV0YWlscyk7XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICB9LFxuICB9O1xuICA8L3NjcmlwdD5cblxuICA8c3R5bGUgc2NvcGVkPlxuICAvKiBDdXN0b20gU3R5bGVzIGlmIG5lY2Vzc2FyeSAqL1xuICAubWVzc2FnZS1saXN0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBDdXN0b20gU3R5bGVzIGlmIG5lY2Vzc2FyeSAqL1xcbi5tZXNzYWdlLWxpc3RbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5jYXJkW2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvc3VqYW4vRGVza3RvcC9Xb3JrL3Byb2plY3QgZnJlZWxhbmNlL1NhbmtoYS9hdG1fcHJvai9hdG0vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUlBLGdDQUFBO0FBQ0E7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtDQUNBO0FBRUE7RUFDQSxhQUFBO0NBQ0FcIixcImZpbGVcIjpcIkNvbXBsYWludERldGFpbC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbXQtNVxcXCI+XFxuXFxuICAgICAgPCEtLSBUb3AgSW5mb3JtYXRpb24gRGVzaWduIC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBtYi00IHAtMyBib3JkZXIgYmctbGlnaHQgcm91bmRlZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICAgIDxwPjxzdHJvbmc+QVRNIDo8L3N0cm9uZz48L3A+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+Q29kZSAtIHt7Y29tcGxhaW50LmF0bS5hdG1faWR9fTwvYnV0dG9uPlxcbiAgICAgICAgICA8cD5BZGRyZXNzIC0ge3sgYXRtX2RldGFpbHMuY2l0eV9uYW1lKycsICcrYXRtX2RldGFpbHMuZGlzdHJpY3RfbmFtZSsnLCAnK2F0bV9kZXRhaWxzLnN0YXRlX25hbWUgfX08L3A+XFxuICAgICAgICAgIDxwPkFyZWEgQ29kZSAte3sgYXRtX2RldGFpbHMuYXJlYV9jb2RlIH19PC9wPlxcbiAgICAgICAgICA8cD5Qb3N0Y29kZSAtIHt7IGF0bV9kZXRhaWxzLnBvc3Rjb2RlIH19PC9wPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPnt7YXRtX2RldGFpbHMuYmFua19uYW1lfX08L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICA8cD48c3Ryb25nPlNMTSBEb2NrZXQgTm8gOjwvc3Ryb25nPjwvcD5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj57e3Nsc19kZXRhaWxzLnNsc19kb2NrZXRfbm99fTwvYnV0dG9uPlxcbiAgICAgICAgICA8cD48c3Ryb25nPkRvY2tldCBObyA6PC9zdHJvbmc+PC9wPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPnt7Y29tcGxhaW50LmRvY2tldF9ub319PC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgPHA+PHN0cm9uZz5TdGF0dXMgOjwvc3Ryb25nPjwvcD5cXG4gICAgICAgICAgPCEtLSA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPkNvbXBsZXRlZDwvYnV0dG9uPiAtLT5cXG4gICAgICAgICAgPHNwYW4gdi1pZj1cXFwiY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnUGVuZGluZydcXFwiIGNsYXNzPVxcXCJsYWJlbCBsYWJlbC1kYW5nZXJcXFwiPlBlbmRpbmc8L3NwYW4+XFxuICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XFxcImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ1Byb2Nlc3NpbmcnXFxcIiBjbGFzcz1cXFwibGFiZWwgbGFiZWwtd2FybmluZ1xcXCI+UHJvY2Vzc2luZzwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cXFwiY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnQ29tcGxldGVkJ1xcXCIgY2xhc3M9XFxcImxhYmVsIGxhYmVsLXN1Y2Nlc3NcXFwiPkNvbXBsZXRlZDwvc3Bhbj5cXG5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDwhLS0gQ2hhdCBCb3ggRGVzaWduIC0tPlxcbiAgICAgIDxoMiBjbGFzcz1cXFwidGV4dC13aGl0ZSBiZy1pbmZvIHAtMiByb3VuZGVkXFxcIj5EZXRhaWxzPC9oMj5cXG5cXG4gICAgICA8IS0tIE1lc3NhZ2UgbGlzdCAtLT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtZXNzYWdlLWxpc3Qgb3ZlcmZsb3ctYXV0b1xcXCIgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDMwMHB4O1xcXCI+XFxuICAgICAgICA8ZGl2XFxuICAgICAgICAgIHYtZm9yPVxcXCIobWVzc2FnZSwgaW5kZXgpIGluIG1lc3NhZ2VzXFxcIlxcbiAgICAgICAgICA6a2V5PVxcXCJpbmRleFxcXCJcXG4gICAgICAgICAgOmNsYXNzPVxcXCJbJ2NhcmQgbWItMycsIG1lc3NhZ2UudHlwZV1cXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxuICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj57eyBtZXNzYWdlLnRpdGxlIH19PC9oNT5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj57eyBtZXNzYWdlLmJvZHkgfX08L3A+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+XFxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPnt7IG1lc3NhZ2UudGltZXN0YW1wIH19PC9zbWFsbD5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPCEtLSBBZGQgQ29tbWVudCBGb3JtIC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm10LTNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgIDx0ZXh0YXJlYVxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcIm5ld0NvbW1lbnRcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICByb3dzPVxcXCIzXFxcIlxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJBZGQgQ29tbWVudFxcXCJcXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVxcXCJhZGRDb21tZW50XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IG10LTJcXFwiPlNlbmQ8L2J1dHRvbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L3RlbXBsYXRlPlxcblxcbiAgPHNjcmlwdD5cXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgZGF0YSgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgLy8gU2FtcGxlIG1lc3NhZ2VzXFxuICAgICAgICBtZXNzYWdlczogW1xcbiAgICAgICAgICB7XFxuICAgICAgICAgICAgdGl0bGU6IFxcXCJISVRBQ0hJXFxcIixcXG4gICAgICAgICAgICBib2R5OiBcXFwiY2RmXFxcIixcXG4gICAgICAgICAgICB0aW1lc3RhbXA6IFxcXCIxMC0wOS0yMDI0IDA2OjMwIFBNXFxcIixcXG4gICAgICAgICAgICB0eXBlOiBcXFwiYmctZ3JhZGllbnQtcHJpbWFyeSB0ZXh0LXdoaXRlXFxcIlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICB7XFxuICAgICAgICAgICAgdGl0bGU6IFxcXCJDYWxsIENlbnRlclxcXCIsXFxuICAgICAgICAgICAgYm9keTogXFxcIk5hbWU6IFZpdmVrYW5hbmRhIFNoYXJtYSBFbWFpbDogTkEgUGhvbmUgTm8uOiA3OTA4MDc5MTAzIENvbW1lbnQ6IENhc2ggRGlzcGVuc2VyIEZhdGFsXFxcIixcXG4gICAgICAgICAgICB0aW1lc3RhbXA6IFxcXCIxMC0wOS0yMDI0IDA2OjM1IFBNXFxcIixcXG4gICAgICAgICAgICB0eXBlOiBcXFwiYmctZ3JhZGllbnQtaW5mbyB0ZXh0LXdoaXRlXFxcIlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICB7XFxuICAgICAgICAgICAgdGl0bGU6IFxcXCJDYWxsIENlbnRlclxcXCIsXFxuICAgICAgICAgICAgYm9keTogXFxcIkRlYXIgVGVhbSwgUGxlYXNlIGNhbGwgbG9nIGZvciBEaXNwZW5zZXIgaXNzdWUsIEN1c3RvZGlhbjogVml2ZWthbmFuZGEgU2hhcm1hICg3OTA4MDc5MTAzKSAmIEVuZzogQ2hhaXRhayAoODAxNzMyMTYwMiksIEtpbmRseSBwcm92aWRlIHRoZSBkb2NrZXQgbnVtYmVyLi4uXFxcIixcXG4gICAgICAgICAgICB0aW1lc3RhbXA6IFxcXCIxMC0wOS0yMDI0IDA2OjQxIFBNXFxcIixcXG4gICAgICAgICAgICB0eXBlOiBcXFwiYmctZ3JhZGllbnQtd2FybmluZyB0ZXh0LXdoaXRlXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICBdLFxcbiAgICAgICAgY29tcGxhaW50Ont9LFxcbiAgICAgICAgYXRtX2RldGFpbHM6e30sXFxuICAgICAgICBjb21wbGFpbnRfZGV0YWlsczpbXSxcXG4gICAgICAgIGN1c3RvZGlhbl9kZXRhaWxzOm51bGwsXFxuICAgICAgICBzbHNfZGV0YWlsczpudWxsLFxcbiAgICAgICAgLy8gTmV3IGNvbW1lbnQgaW5wdXRcXG4gICAgICAgIG5ld0NvbW1lbnQ6IFxcXCJcXFwiXFxuICAgICAgfTtcXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgIC8vIEZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBjb21tZW50XFxuICAgICAgYWRkQ29tbWVudCgpIHtcXG4gICAgICAgIGlmICh0aGlzLm5ld0NvbW1lbnQudHJpbSgpKSB7XFxuICAgICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XFxuICAgICAgICAgICAgdGl0bGU6IFxcXCJVc2VyIENvbW1lbnRcXFwiLFxcbiAgICAgICAgICAgIGJvZHk6IHRoaXMubmV3Q29tbWVudCxcXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcXG4gICAgICAgICAgICB0eXBlOiBcXFwiYmctZ3JhZGllbnQtc2Vjb25kYXJ5IHRleHQtd2hpdGVcXFwiXFxuICAgICAgICAgIH07XFxuICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChuZXdNZXNzYWdlKTtcXG4gICAgICAgICAgdGhpcy5uZXdDb21tZW50ID0gXFxcIlxcXCI7IC8vIENsZWFyIHRoZSBpbnB1dCBhZnRlciBhZGRpbmdcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcXG4gICAgICAgIGNvbnNvbGUubG9nKFxcXCIgdGhpcy4kcm91dGUucGFyYW1zLmlkO1xcXCIsIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCk7XFxuXFxuICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9jb21wbGFpbnQvdmlldy9cXFwiK3RoaXMuJHJvdXRlLnBhcmFtcy5pZClcXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJyZXM9PT09PlxcXCIscmVzLmRhdGEuZGF0YSk7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50PXJlcy5kYXRhLmRhdGEuY29tcGxhaW50O1xcbiAgICAgICAgICAgICAgICB0aGlzLmF0bV9kZXRhaWxzPXJlcy5kYXRhLmRhdGEuYXRtX2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50X2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludF9kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvZGlhbl9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jdXN0b2RpYW5fZGV0YWlscztcXG4gICAgICAgICAgICAgICAgdGhpcy5zbHNfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuc2xzX2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJhdG1cXFwiLGF0bV9kZXRhaWxzKTtcXG5cXG4gICAgICAgICAgICB9KVxcblxcbiAgICB9LFxcbiAgfTtcXG4gIDwvc2NyaXB0PlxcblxcbiAgPHN0eWxlIHNjb3BlZD5cXG4gIC8qIEN1c3RvbSBTdHlsZXMgaWYgbmVjZXNzYXJ5ICovXFxuICAubWVzc2FnZS1saXN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gIH1cXG5cXG4gIC5jYXJkIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbiAgPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBtdC01XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG1iLTQgcC0zIGJvcmRlciBiZy1saWdodCByb3VuZGVkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJDb2RlIC0gXCIgKyBfdm0uX3MoX3ZtLmNvbXBsYWludC5hdG0uYXRtX2lkKSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJBZGRyZXNzIC0gXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgX3ZtLmF0bV9kZXRhaWxzLmNpdHlfbmFtZSArXG4gICAgICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLmF0bV9kZXRhaWxzLmRpc3RyaWN0X25hbWUgK1xuICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5hdG1fZGV0YWlscy5zdGF0ZV9uYW1lXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkFyZWEgQ29kZSAtXCIgKyBfdm0uX3MoX3ZtLmF0bV9kZXRhaWxzLmFyZWFfY29kZSkpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiUG9zdGNvZGUgLSBcIiArIF92bS5fcyhfdm0uYXRtX2RldGFpbHMucG9zdGNvZGUpKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mb1wiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hdG1fZGV0YWlscy5iYW5rX25hbWUpKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mb1wiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zbHNfZGV0YWlscy5zbHNfZG9ja2V0X25vKSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm9cIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY29tcGxhaW50LmRvY2tldF9ubykpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICBfdm0uX20oMyksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5jb21wbGFpbnQud29ya19zdGF0dXMgPT09IFwiUGVuZGluZ1wiXG4gICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlBlbmRpbmdcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSBcIlByb2Nlc3NpbmdcIlxuICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtd2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiUHJvY2Vzc2luZ1wiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5jb21wbGFpbnQud29ya19zdGF0dXMgPT09IFwiQ29tcGxldGVkXCJcbiAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGUgYmctaW5mbyBwLTIgcm91bmRlZFwiIH0sIFtcbiAgICAgIF92bS5fdihcIkRldGFpbHNcIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVzc2FnZS1saXN0IG92ZXJmbG93LWF1dG9cIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtaGVpZ2h0XCI6IFwiMzAwcHhcIiB9XG4gICAgICB9LFxuICAgICAgX3ZtLl9sKF92bS5tZXNzYWdlcywgZnVuY3Rpb24obWVzc2FnZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBpbmRleCwgY2xhc3M6IFtcImNhcmQgbWItM1wiLCBtZXNzYWdlLnR5cGVdIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG1lc3NhZ2UudGl0bGUpKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG1lc3NhZ2UuYm9keSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic21hbGxcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LW11dGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MobWVzc2FnZS50aW1lc3RhbXApKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld0NvbW1lbnQsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmV3Q29tbWVudFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICBhdHRyczogeyByb3dzOiBcIjNcIiwgcGxhY2Vob2xkZXI6IFwiQWRkIENvbW1lbnRcIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmV3Q29tbWVudCB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5uZXdDb21tZW50ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBtdC0yXCIsIG9uOiB7IGNsaWNrOiBfdm0uYWRkQ29tbWVudCB9IH0sXG4gICAgICAgIFtfdm0uX3YoXCJTZW5kXCIpXVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJBVE0gOlwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiU0xNIERvY2tldCBObyA6XCIpXSldKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJEb2NrZXQgTm8gOlwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiU3RhdHVzIDpcIildKV0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yMWU3YTI1OFwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjcyZmFiZWZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIxZTdhMjU4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIilcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMjFlN2EyNThcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxDb21wbGFpbnREZXRhaWwudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTIxZTdhMjU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjFlN2EyNThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==