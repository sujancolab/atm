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
      this.complaint_details = res.data.data.complaint_details;
      this.custodian_details = res.data.data.custodian_details;
      this.sls_details = res.data.data.sls_details;
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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Custom Styles if necessary */\n.message-list[data-v-21e7a258] {\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  padding: 15px;\n}\n.card[data-v-21e7a258] {\n  border: none;\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/resources/js/components/ComplaintDetail.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8HA,gCAAA;AACA;EACA,uBAAA;EACA,uBAAA;EACA,cAAA;CACA;AAEA;EACA,aAAA;CACA","file":"ComplaintDetail.vue","sourcesContent":["<template>\n    <div class=\"container mt-5\">\n\n      <!-- Top Information Design -->\n      <div class=\"row mb-4 p-3 border bg-light rounded\">\n        <div class=\"col-md-4\">\n          <p><strong>ATM :</strong></p>\n          <button class=\"btn btn-primary\">Code - {{complaint.atm.atm_id}}</button>\n          <p>Address - Kolkata, Nadia, West Bengal</p>\n          <p>Area Code - (CS Machine) KALYANI CONGRESS MORE</p>\n          <p>Postcode - Na</p>\n          <button class=\"btn btn-info\">AXIS BANK</button>\n        </div>\n        <div class=\"col-md-4\">\n          <p><strong>SLM Docket No :</strong></p>\n          <button class=\"btn btn-info\">SLS92BAC7CBB405848</button>\n          <p><strong>Docket No :</strong></p>\n          <button class=\"btn btn-info\">F30EECDA57CEF9865066</button>\n        </div>\n        <div class=\"col-md-4\">\n          <p><strong>Status :</strong></p>\n          <button class=\"btn btn-success\">Completed</button>\n        </div>\n      </div>\n\n      <!-- Chat Box Design -->\n      <h2 class=\"text-white bg-info p-2 rounded\">Details</h2>\n\n      <!-- Message list -->\n      <div class=\"message-list overflow-auto\" style=\"max-height: 300px;\">\n        <div\n          v-for=\"(message, index) in messages\"\n          :key=\"index\"\n          :class=\"['card mb-3', message.type]\"\n        >\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ message.title }}</h5>\n            <p class=\"card-text\">{{ message.body }}</p>\n            <p class=\"card-text\">\n              <small class=\"text-muted\">{{ message.timestamp }}</small>\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <!-- Add Comment Form -->\n      <div class=\"mt-3\">\n        <div class=\"form-group\">\n          <textarea\n            v-model=\"newComment\"\n            class=\"form-control\"\n            rows=\"3\"\n            placeholder=\"Add Comment\"\n          ></textarea>\n        </div>\n        <button @click=\"addComment\" class=\"btn btn-primary mt-2\">Send</button>\n      </div>\n    </div>\n  </template>\n\n  <script>\n  export default {\n    data() {\n      return {\n        // Sample messages\n        messages: [\n          {\n            title: \"HITACHI\",\n            body: \"cdf\",\n            timestamp: \"10-09-2024 06:30 PM\",\n            type: \"bg-gradient-primary text-white\"\n          },\n          {\n            title: \"Call Center\",\n            body: \"Name: Vivekananda Sharma Email: NA Phone No.: 7908079103 Comment: Cash Dispenser Fatal\",\n            timestamp: \"10-09-2024 06:35 PM\",\n            type: \"bg-gradient-info text-white\"\n          },\n          {\n            title: \"Call Center\",\n            body: \"Dear Team, Please call log for Dispenser issue, Custodian: Vivekananda Sharma (7908079103) & Eng: Chaitak (8017321602), Kindly provide the docket number...\",\n            timestamp: \"10-09-2024 06:41 PM\",\n            type: \"bg-gradient-warning text-white\"\n          }\n        ],\n        complaint:{},\n        complaint_details:[],\n        custodian_details:null,\n        sls_details:null,\n        // New comment input\n        newComment: \"\"\n      };\n    },\n    methods: {\n      // Function to add a new comment\n      addComment() {\n        if (this.newComment.trim()) {\n          const newMessage = {\n            title: \"User Comment\",\n            body: this.newComment,\n            timestamp: new Date().toLocaleString(),\n            type: \"bg-gradient-secondary text-white\"\n          };\n          this.messages.push(newMessage);\n          this.newComment = \"\"; // Clear the input after adding\n        }\n      }\n    },\n    beforeCreate() {\n        console.log(\" this.$route.params.id;\", this.$route.params.id);\n\n        axios.get(\"api/complaint/view/\"+this.$route.params.id)\n            .then((res) => {\n                console.log(\"res====>\",res.data.data);\n                this.complaint=res.data.data.complaint;\n\n                this.complaint_details = res.data.data.complaint_details;\n                this.custodian_details = res.data.data.custodian_details;\n                this.sls_details = res.data.data.sls_details;\n            })\n\n    },\n  };\n  </script>\n\n  <style scoped>\n  /* Custom Styles if necessary */\n  .message-list {\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    padding: 15px;\n  }\n\n  .card {\n    border: none;\n  }\n  </style>\n"],"sourceRoot":""}]);

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
        _c("p", [_vm._v("Address - Kolkata, Nadia, West Bengal")]),
        _vm._v(" "),
        _c("p", [_vm._v("Area Code - (CS Machine) KALYANI CONGRESS MORE")]),
        _vm._v(" "),
        _c("p", [_vm._v("Postcode - Na")]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-info" }, [_vm._v("AXIS BANK")])
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2)
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
    return _c("div", { staticClass: "col-md-4" }, [
      _c("p", [_c("strong", [_vm._v("SLM Docket No :")])]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-info" }, [
        _vm._v("SLS92BAC7CBB405848")
      ]),
      _vm._v(" "),
      _c("p", [_c("strong", [_vm._v("Docket No :")])]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-info" }, [
        _vm._v("F30EECDA57CEF9865066")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("p", [_c("strong", [_vm._v("Status :")])]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-success" }, [_vm._v("Completed")])
    ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlPzljZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZT8xZTNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludERldGFpbC52dWU/NTQ2ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJtZXNzYWdlcyIsInRpdGxlIiwiYm9keSIsInRpbWVzdGFtcCIsInR5cGUiLCJjb21wbGFpbnQiLCJjb21wbGFpbnRfZGV0YWlscyIsImN1c3RvZGlhbl9kZXRhaWxzIiwic2xzX2RldGFpbHMiLCJuZXdDb21tZW50IiwibWV0aG9kcyIsImFkZENvbW1lbnQiLCJiZWZvcmVDcmVhdGUiLCJjb25zb2xlIiwiYXhpb3MiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REE7RUFDQUE7SUFDQTtNQUNBO01BQ0FDLFdBQ0E7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQSxHQUNBO1FBQ0FIO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0EsR0FDQTtRQUNBSDtRQUNBQztRQUNBQztRQUNBQztNQUNBLEVBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBQztNQUNBO1FBQ0E7VUFDQVY7VUFDQUM7VUFDQUM7VUFDQUM7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQVE7SUFDQUM7SUFFQUMs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Ozs7Ozs7Ozs7QUNYZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUJBQU8sQ0FBQyw2bUJBQTRSO0FBQ3RTO0FBQ0E7QUFDc0g7QUFDYTtBQUNuSTtBQUNpVjtBQUNqVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21HO0FBQ25HLGdCQUFnQix5R0FBa0I7QUFDbEMsRUFBRSxrSUFBYztBQUNoQixFQUFFLHlPQUFjO0FBQ2hCLEVBQUUsa1BBQXlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLEVBYVg7O0FBRVUsZ0ZBQWlCIiwiZmlsZSI6ImpzLzMzLmJ1bmRsZS40ZTQ2MTU0ZjdkNjY2NTY1ZjIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG10LTVcIj5cblxuICAgICAgPCEtLSBUb3AgSW5mb3JtYXRpb24gRGVzaWduIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBtYi00IHAtMyBib3JkZXIgYmctbGlnaHQgcm91bmRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICA8cD48c3Ryb25nPkFUTSA6PC9zdHJvbmc+PC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5Db2RlIC0ge3tjb21wbGFpbnQuYXRtLmF0bV9pZH19PC9idXR0b24+XG4gICAgICAgICAgPHA+QWRkcmVzcyAtIEtvbGthdGEsIE5hZGlhLCBXZXN0IEJlbmdhbDwvcD5cbiAgICAgICAgICA8cD5BcmVhIENvZGUgLSAoQ1MgTWFjaGluZSkgS0FMWUFOSSBDT05HUkVTUyBNT1JFPC9wPlxuICAgICAgICAgIDxwPlBvc3Rjb2RlIC0gTmE8L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiPkFYSVMgQkFOSzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgPHA+PHN0cm9uZz5TTE0gRG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiPlNMUzkyQkFDN0NCQjQwNTg0ODwvYnV0dG9uPlxuICAgICAgICAgIDxwPjxzdHJvbmc+RG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiPkYzMEVFQ0RBNTdDRUY5ODY1MDY2PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICA8cD48c3Ryb25nPlN0YXR1cyA6PC9zdHJvbmc+PC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5Db21wbGV0ZWQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBDaGF0IEJveCBEZXNpZ24gLS0+XG4gICAgICA8aDIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWluZm8gcC0yIHJvdW5kZWRcIj5EZXRhaWxzPC9oMj5cblxuICAgICAgPCEtLSBNZXNzYWdlIGxpc3QgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1saXN0IG92ZXJmbG93LWF1dG9cIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDMwMHB4O1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1mb3I9XCIobWVzc2FnZSwgaW5kZXgpIGluIG1lc3NhZ2VzXCJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgIDpjbGFzcz1cIlsnY2FyZCBtYi0zJywgbWVzc2FnZS50eXBlXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgbWVzc2FnZS50aXRsZSB9fTwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPnt7IG1lc3NhZ2UuYm9keSB9fTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj57eyBtZXNzYWdlLnRpbWVzdGFtcCB9fTwvc21hbGw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gQWRkIENvbW1lbnQgRm9ybSAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICB2LW1vZGVsPVwibmV3Q29tbWVudFwiXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBDb21tZW50XCJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwiYWRkQ29tbWVudFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTJcIj5TZW5kPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIFNhbXBsZSBtZXNzYWdlc1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkhJVEFDSElcIixcbiAgICAgICAgICAgIGJvZHk6IFwiY2RmXCIsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IFwiMTAtMDktMjAyNCAwNjozMCBQTVwiLFxuICAgICAgICAgICAgdHlwZTogXCJiZy1ncmFkaWVudC1wcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiQ2FsbCBDZW50ZXJcIixcbiAgICAgICAgICAgIGJvZHk6IFwiTmFtZTogVml2ZWthbmFuZGEgU2hhcm1hIEVtYWlsOiBOQSBQaG9uZSBOby46IDc5MDgwNzkxMDMgQ29tbWVudDogQ2FzaCBEaXNwZW5zZXIgRmF0YWxcIixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogXCIxMC0wOS0yMDI0IDA2OjM1IFBNXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJnLWdyYWRpZW50LWluZm8gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJDYWxsIENlbnRlclwiLFxuICAgICAgICAgICAgYm9keTogXCJEZWFyIFRlYW0sIFBsZWFzZSBjYWxsIGxvZyBmb3IgRGlzcGVuc2VyIGlzc3VlLCBDdXN0b2RpYW46IFZpdmVrYW5hbmRhIFNoYXJtYSAoNzkwODA3OTEwMykgJiBFbmc6IENoYWl0YWsgKDgwMTczMjE2MDIpLCBLaW5kbHkgcHJvdmlkZSB0aGUgZG9ja2V0IG51bWJlci4uLlwiLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBcIjEwLTA5LTIwMjQgMDY6NDEgUE1cIixcbiAgICAgICAgICAgIHR5cGU6IFwiYmctZ3JhZGllbnQtd2FybmluZyB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGNvbXBsYWludDp7fSxcbiAgICAgICAgY29tcGxhaW50X2RldGFpbHM6W10sXG4gICAgICAgIGN1c3RvZGlhbl9kZXRhaWxzOm51bGwsXG4gICAgICAgIHNsc19kZXRhaWxzOm51bGwsXG4gICAgICAgIC8vIE5ldyBjb21tZW50IGlucHV0XG4gICAgICAgIG5ld0NvbW1lbnQ6IFwiXCJcbiAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAvLyBGdW5jdGlvbiB0byBhZGQgYSBuZXcgY29tbWVudFxuICAgICAgYWRkQ29tbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMubmV3Q29tbWVudC50cmltKCkpIHtcbiAgICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBDb21tZW50XCIsXG4gICAgICAgICAgICBib2R5OiB0aGlzLm5ld0NvbW1lbnQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgICAgICAgIHR5cGU6IFwiYmctZ3JhZGllbnQtc2Vjb25kYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5ld01lc3NhZ2UpO1xuICAgICAgICAgIHRoaXMubmV3Q29tbWVudCA9IFwiXCI7IC8vIENsZWFyIHRoZSBpbnB1dCBhZnRlciBhZGRpbmdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XCIsIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCk7XG5cbiAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2NvbXBsYWludC92aWV3L1wiK3RoaXMuJHJvdXRlLnBhcmFtcy5pZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcz09PT0+XCIscmVzLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGFpbnQ9cmVzLmRhdGEuZGF0YS5jb21wbGFpbnQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludF9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfZGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvZGlhbl9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jdXN0b2RpYW5fZGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLnNsc19kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5zbHNfZGV0YWlscztcbiAgICAgICAgICAgIH0pXG5cbiAgICB9LFxuICB9O1xuICA8L3NjcmlwdD5cblxuICA8c3R5bGUgc2NvcGVkPlxuICAvKiBDdXN0b20gU3R5bGVzIGlmIG5lY2Vzc2FyeSAqL1xuICAubWVzc2FnZS1saXN0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBDdXN0b20gU3R5bGVzIGlmIG5lY2Vzc2FyeSAqL1xcbi5tZXNzYWdlLWxpc3RbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5jYXJkW2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvc3VqYW4vRGVza3RvcC9Xb3JrL3Byb2plY3QgZnJlZWxhbmNlL1NhbmtoYS9hdG1fcHJvai9hdG0vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4SEEsZ0NBQUE7QUFDQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0NBQ0E7QUFFQTtFQUNBLGFBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ29tcGxhaW50RGV0YWlsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBtdC01XFxcIj5cXG5cXG4gICAgICA8IS0tIFRvcCBJbmZvcm1hdGlvbiBEZXNpZ24gLS0+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93IG1iLTQgcC0zIGJvcmRlciBiZy1saWdodCByb3VuZGVkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgPHA+PHN0cm9uZz5BVE0gOjwvc3Ryb25nPjwvcD5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5Db2RlIC0ge3tjb21wbGFpbnQuYXRtLmF0bV9pZH19PC9idXR0b24+XFxuICAgICAgICAgIDxwPkFkZHJlc3MgLSBLb2xrYXRhLCBOYWRpYSwgV2VzdCBCZW5nYWw8L3A+XFxuICAgICAgICAgIDxwPkFyZWEgQ29kZSAtIChDUyBNYWNoaW5lKSBLQUxZQU5JIENPTkdSRVNTIE1PUkU8L3A+XFxuICAgICAgICAgIDxwPlBvc3Rjb2RlIC0gTmE8L3A+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+QVhJUyBCQU5LPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgPHA+PHN0cm9uZz5TTE0gRG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+U0xTOTJCQUM3Q0JCNDA1ODQ4PC9idXR0b24+XFxuICAgICAgICAgIDxwPjxzdHJvbmc+RG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+RjMwRUVDREE1N0NFRjk4NjUwNjY8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICA8cD48c3Ryb25nPlN0YXR1cyA6PC9zdHJvbmc+PC9wPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPkNvbXBsZXRlZDwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPCEtLSBDaGF0IEJveCBEZXNpZ24gLS0+XFxuICAgICAgPGgyIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIGJnLWluZm8gcC0yIHJvdW5kZWRcXFwiPkRldGFpbHM8L2gyPlxcblxcbiAgICAgIDwhLS0gTWVzc2FnZSBsaXN0IC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1lc3NhZ2UtbGlzdCBvdmVyZmxvdy1hdXRvXFxcIiBzdHlsZT1cXFwibWF4LWhlaWdodDogMzAwcHg7XFxcIj5cXG4gICAgICAgIDxkaXZcXG4gICAgICAgICAgdi1mb3I9XFxcIihtZXNzYWdlLCBpbmRleCkgaW4gbWVzc2FnZXNcXFwiXFxuICAgICAgICAgIDprZXk9XFxcImluZGV4XFxcIlxcbiAgICAgICAgICA6Y2xhc3M9XFxcIlsnY2FyZCBtYi0zJywgbWVzc2FnZS50eXBlXVxcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXG4gICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPnt7IG1lc3NhZ2UudGl0bGUgfX08L2g1PlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPnt7IG1lc3NhZ2UuYm9keSB9fTwvcD5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5cXG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+e3sgbWVzc2FnZS50aW1lc3RhbXAgfX08L3NtYWxsPlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8IS0tIEFkZCBDb21tZW50IEZvcm0gLS0+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibXQtM1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgPHRleHRhcmVhXFxuICAgICAgICAgICAgdi1tb2RlbD1cXFwibmV3Q29tbWVudFxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgIHJvd3M9XFxcIjNcXFwiXFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkFkZCBDb21tZW50XFxcIlxcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XFxcImFkZENvbW1lbnRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgbXQtMlxcXCI+U2VuZDwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvdGVtcGxhdGU+XFxuXFxuICA8c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhKCkge1xcbiAgICAgIHJldHVybiB7XFxuICAgICAgICAvLyBTYW1wbGUgbWVzc2FnZXNcXG4gICAgICAgIG1lc3NhZ2VzOiBbXFxuICAgICAgICAgIHtcXG4gICAgICAgICAgICB0aXRsZTogXFxcIkhJVEFDSElcXFwiLFxcbiAgICAgICAgICAgIGJvZHk6IFxcXCJjZGZcXFwiLFxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogXFxcIjEwLTA5LTIwMjQgMDY6MzAgUE1cXFwiLFxcbiAgICAgICAgICAgIHR5cGU6IFxcXCJiZy1ncmFkaWVudC1wcmltYXJ5IHRleHQtd2hpdGVcXFwiXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIHtcXG4gICAgICAgICAgICB0aXRsZTogXFxcIkNhbGwgQ2VudGVyXFxcIixcXG4gICAgICAgICAgICBib2R5OiBcXFwiTmFtZTogVml2ZWthbmFuZGEgU2hhcm1hIEVtYWlsOiBOQSBQaG9uZSBOby46IDc5MDgwNzkxMDMgQ29tbWVudDogQ2FzaCBEaXNwZW5zZXIgRmF0YWxcXFwiLFxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogXFxcIjEwLTA5LTIwMjQgMDY6MzUgUE1cXFwiLFxcbiAgICAgICAgICAgIHR5cGU6IFxcXCJiZy1ncmFkaWVudC1pbmZvIHRleHQtd2hpdGVcXFwiXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIHtcXG4gICAgICAgICAgICB0aXRsZTogXFxcIkNhbGwgQ2VudGVyXFxcIixcXG4gICAgICAgICAgICBib2R5OiBcXFwiRGVhciBUZWFtLCBQbGVhc2UgY2FsbCBsb2cgZm9yIERpc3BlbnNlciBpc3N1ZSwgQ3VzdG9kaWFuOiBWaXZla2FuYW5kYSBTaGFybWEgKDc5MDgwNzkxMDMpICYgRW5nOiBDaGFpdGFrICg4MDE3MzIxNjAyKSwgS2luZGx5IHByb3ZpZGUgdGhlIGRvY2tldCBudW1iZXIuLi5cXFwiLFxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogXFxcIjEwLTA5LTIwMjQgMDY6NDEgUE1cXFwiLFxcbiAgICAgICAgICAgIHR5cGU6IFxcXCJiZy1ncmFkaWVudC13YXJuaW5nIHRleHQtd2hpdGVcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIF0sXFxuICAgICAgICBjb21wbGFpbnQ6e30sXFxuICAgICAgICBjb21wbGFpbnRfZGV0YWlsczpbXSxcXG4gICAgICAgIGN1c3RvZGlhbl9kZXRhaWxzOm51bGwsXFxuICAgICAgICBzbHNfZGV0YWlsczpudWxsLFxcbiAgICAgICAgLy8gTmV3IGNvbW1lbnQgaW5wdXRcXG4gICAgICAgIG5ld0NvbW1lbnQ6IFxcXCJcXFwiXFxuICAgICAgfTtcXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgIC8vIEZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBjb21tZW50XFxuICAgICAgYWRkQ29tbWVudCgpIHtcXG4gICAgICAgIGlmICh0aGlzLm5ld0NvbW1lbnQudHJpbSgpKSB7XFxuICAgICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XFxuICAgICAgICAgICAgdGl0bGU6IFxcXCJVc2VyIENvbW1lbnRcXFwiLFxcbiAgICAgICAgICAgIGJvZHk6IHRoaXMubmV3Q29tbWVudCxcXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcXG4gICAgICAgICAgICB0eXBlOiBcXFwiYmctZ3JhZGllbnQtc2Vjb25kYXJ5IHRleHQtd2hpdGVcXFwiXFxuICAgICAgICAgIH07XFxuICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChuZXdNZXNzYWdlKTtcXG4gICAgICAgICAgdGhpcy5uZXdDb21tZW50ID0gXFxcIlxcXCI7IC8vIENsZWFyIHRoZSBpbnB1dCBhZnRlciBhZGRpbmdcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcXG4gICAgICAgIGNvbnNvbGUubG9nKFxcXCIgdGhpcy4kcm91dGUucGFyYW1zLmlkO1xcXCIsIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCk7XFxuXFxuICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9jb21wbGFpbnQvdmlldy9cXFwiK3RoaXMuJHJvdXRlLnBhcmFtcy5pZClcXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJyZXM9PT09PlxcXCIscmVzLmRhdGEuZGF0YSk7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50PXJlcy5kYXRhLmRhdGEuY29tcGxhaW50O1xcblxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludF9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfZGV0YWlscztcXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b2RpYW5fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY3VzdG9kaWFuX2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2xzX2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLnNsc19kZXRhaWxzO1xcbiAgICAgICAgICAgIH0pXFxuXFxuICAgIH0sXFxuICB9O1xcbiAgPC9zY3JpcHQ+XFxuXFxuICA8c3R5bGUgc2NvcGVkPlxcbiAgLyogQ3VzdG9tIFN0eWxlcyBpZiBuZWNlc3NhcnkgKi9cXG4gIC5tZXNzYWdlLWxpc3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgfVxcblxcbiAgLmNhcmQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuICA8L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG10LTVcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbWItNCBwLTMgYm9yZGVyIGJnLWxpZ2h0IHJvdW5kZWRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIkNvZGUgLSBcIiArIF92bS5fcyhfdm0uY29tcGxhaW50LmF0bS5hdG1faWQpKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJBZGRyZXNzIC0gS29sa2F0YSwgTmFkaWEsIFdlc3QgQmVuZ2FsXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiQXJlYSBDb2RlIC0gKENTIE1hY2hpbmUpIEtBTFlBTkkgQ09OR1JFU1MgTU9SRVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlBvc3Rjb2RlIC0gTmFcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm9cIiB9LCBbX3ZtLl92KFwiQVhJUyBCQU5LXCIpXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgxKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlIGJnLWluZm8gcC0yIHJvdW5kZWRcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJEZXRhaWxzXCIpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2UtbGlzdCBvdmVyZmxvdy1hdXRvXCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWF4LWhlaWdodFwiOiBcIjMwMHB4XCIgfVxuICAgICAgfSxcbiAgICAgIF92bS5fbChfdm0ubWVzc2FnZXMsIGZ1bmN0aW9uKG1lc3NhZ2UsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaW5kZXgsIGNsYXNzOiBbXCJjYXJkIG1iLTNcIiwgbWVzc2FnZS50eXBlXSB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhtZXNzYWdlLnRpdGxlKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhtZXNzYWdlLmJvZHkpKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInNtYWxsXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1tdXRlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG1lc3NhZ2UudGltZXN0YW1wKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIH0pLFxuICAgICAgMFxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdDb21tZW50LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5ld0NvbW1lbnRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgYXR0cnM6IHsgcm93czogXCIzXCIsIHBsYWNlaG9sZGVyOiBcIkFkZCBDb21tZW50XCIgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm5ld0NvbW1lbnQgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfdm0ubmV3Q29tbWVudCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbXQtMlwiLCBvbjogeyBjbGljazogX3ZtLmFkZENvbW1lbnQgfSB9LFxuICAgICAgICBbX3ZtLl92KFwiU2VuZFwiKV1cbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiQVRNIDpcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICBfYyhcInBcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJTTE0gRG9ja2V0IE5vIDpcIildKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJTTFM5MkJBQzdDQkI0MDU4NDhcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicFwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkRvY2tldCBObyA6XCIpXSldKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mb1wiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiRjMwRUVDREE1N0NFRjk4NjUwNjZcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgIF9jKFwicFwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIlN0YXR1cyA6XCIpXSldKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiIH0sIFtfdm0uX3YoXCJDb21wbGV0ZWRcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yMWU3YTI1OFwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjcyZmFiZWZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIxZTdhMjU4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIilcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMjFlN2EyNThcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxDb21wbGFpbnREZXRhaWwudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTIxZTdhMjU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjFlN2EyNThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==