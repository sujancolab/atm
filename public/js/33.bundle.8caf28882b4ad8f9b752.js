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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      // Sample messages
      messages: [{
        title: "HITACHI",
        body: "cdf",
        timestamp: "10-09-2024 06:30 PM",
        type: "hitachi"
      }, {
        title: "Call Center",
        body: "Name: Vivekananda Sharma Email: NA Phone No.: 7908079103 Comment: Cash Dispenser Fatal",
        timestamp: "10-09-2024 06:35 PM",
        type: "call-center"
      }, {
        title: "Call Center",
        body: "Dear Team, Please call log for Dispenser issue, Custodian: Vivekananda Sharma (7908079103) & Eng: Chaitak (8017321602), Kindly provide the docket number...",
        timestamp: "10-09-2024 06:41 PM",
        type: "call-center"
      }],
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
          type: "user-comment"
        };
        this.messages.push(newMessage);
        this.newComment = ""; // Clear the input after adding
      }
    }
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
exports.push([module.i, "\n.container[data-v-21e7a258] {\n  max-width: 600px;\n  margin: auto;\n  padding: 20px;\n}\n.header[data-v-21e7a258] {\n  font-size: 24px;\n  color: #fff;\n  background-color: #22b8cf;\n  padding: 10px;\n  border-radius: 10px;\n  text-align: center;\n}\n.message-list[data-v-21e7a258] {\n  max-height: 300px;\n  overflow-y: scroll;\n  margin-bottom: 20px;\n}\n.message-card[data-v-21e7a258] {\n  margin: 10px 0;\n  padding: 10px;\n  border-radius: 10px;\n  color: #fff;\n}\n.hitachi[data-v-21e7a258] {\n  background: linear-gradient(to right, #f857a6, #ff5858);\n}\n.call-center[data-v-21e7a258] {\n  background: linear-gradient(to right, #24c6dc, #514a9d);\n}\n.user-comment[data-v-21e7a258] {\n  background: linear-gradient(to right, #f3904f, #3b4371);\n}\n.message-footer[data-v-21e7a258] {\n  text-align: right;\n  font-size: 12px;\n  margin-top: 5px;\n}\n.add-comment[data-v-21e7a258] {\n  display: flex;\n  flex-direction: column;\n}\n.comment-input[data-v-21e7a258] {\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px solid #ccc;\n  resize: none;\n  margin-bottom: 10px;\n  min-height: 50px;\n}\n.send-btn[data-v-21e7a258] {\n  align-self: flex-end;\n  background: linear-gradient(to right, #ff5858, #f857a6);\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n.send-btn[data-v-21e7a258]:hover {\n  background: linear-gradient(to right, #ff7676, #f45bb2);\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/resources/js/components/ComplaintDetail.vue"],"names":[],"mappings":";AA+EA;EACA,iBAAA;EACA,aAAA;EACA,cAAA;CACA;AAEA;EACA,gBAAA;EACA,YAAA;EACA,0BAAA;EACA,cAAA;EACA,oBAAA;EACA,mBAAA;CACA;AAEA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;CACA;AAEA;EACA,eAAA;EACA,cAAA;EACA,oBAAA;EACA,YAAA;CACA;AAEA;EACA,wDAAA;CACA;AAEA;EACA,wDAAA;CACA;AAEA;EACA,wDAAA;CACA;AAEA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;CACA;AAEA;EACA,cAAA;EACA,uBAAA;CACA;AAEA;EACA,cAAA;EACA,oBAAA;EACA,uBAAA;EACA,aAAA;EACA,oBAAA;EACA,iBAAA;CACA;AAEA;EACA,qBAAA;EACA,wDAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iCAAA;CACA;AAEA;EACA,wDAAA;CACA","file":"ComplaintDetail.vue","sourcesContent":["<template>\n    <div class=\"container\">\n      <h2 class=\"header\">Details</h2>\n\n      <!-- Message list -->\n      <div class=\"message-list\">\n        <div\n          v-for=\"(message, index) in messages\"\n          :key=\"index\"\n          :class=\"['message-card', message.type]\"\n        >\n          <div class=\"message-content\">\n            <h3>{{ message.title }}</h3>\n            <p>{{ message.body }}</p>\n          </div>\n          <div class=\"message-footer\">{{ message.timestamp }}</div>\n        </div>\n      </div>\n\n      <!-- Add Comment Form -->\n      <div class=\"add-comment\">\n        <textarea\n          v-model=\"newComment\"\n          placeholder=\"Add Comment\"\n          class=\"comment-input\"\n        ></textarea>\n        <button @click=\"addComment\" class=\"send-btn\">Send</button>\n      </div>\n    </div>\n  </template>\n\n  <script>\n  export default {\n    data() {\n      return {\n        // Sample messages\n        messages: [\n          {\n            title: \"HITACHI\",\n            body: \"cdf\",\n            timestamp: \"10-09-2024 06:30 PM\",\n            type: \"hitachi\"\n          },\n          {\n            title: \"Call Center\",\n            body: \"Name: Vivekananda Sharma Email: NA Phone No.: 7908079103 Comment: Cash Dispenser Fatal\",\n            timestamp: \"10-09-2024 06:35 PM\",\n            type: \"call-center\"\n          },\n          {\n            title: \"Call Center\",\n            body: \"Dear Team, Please call log for Dispenser issue, Custodian: Vivekananda Sharma (7908079103) & Eng: Chaitak (8017321602), Kindly provide the docket number...\",\n            timestamp: \"10-09-2024 06:41 PM\",\n            type: \"call-center\"\n          }\n        ],\n        // New comment input\n        newComment: \"\"\n      };\n    },\n    methods: {\n      // Function to add a new comment\n      addComment() {\n        if (this.newComment.trim()) {\n          const newMessage = {\n            title: \"User Comment\",\n            body: this.newComment,\n            timestamp: new Date().toLocaleString(),\n            type: \"user-comment\"\n          };\n          this.messages.push(newMessage);\n          this.newComment = \"\"; // Clear the input after adding\n        }\n      }\n    }\n  };\n  </script>\n\n  <style scoped>\n  .container {\n    max-width: 600px;\n    margin: auto;\n    padding: 20px;\n  }\n\n  .header {\n    font-size: 24px;\n    color: #fff;\n    background-color: #22b8cf;\n    padding: 10px;\n    border-radius: 10px;\n    text-align: center;\n  }\n\n  .message-list {\n    max-height: 300px;\n    overflow-y: scroll;\n    margin-bottom: 20px;\n  }\n\n  .message-card {\n    margin: 10px 0;\n    padding: 10px;\n    border-radius: 10px;\n    color: #fff;\n  }\n\n  .hitachi {\n    background: linear-gradient(to right, #f857a6, #ff5858);\n  }\n\n  .call-center {\n    background: linear-gradient(to right, #24c6dc, #514a9d);\n  }\n\n  .user-comment {\n    background: linear-gradient(to right, #f3904f, #3b4371);\n  }\n\n  .message-footer {\n    text-align: right;\n    font-size: 12px;\n    margin-top: 5px;\n  }\n\n  .add-comment {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .comment-input {\n    padding: 10px;\n    border-radius: 10px;\n    border: 1px solid #ccc;\n    resize: none;\n    margin-bottom: 10px;\n    min-height: 50px;\n  }\n\n  .send-btn {\n    align-self: flex-end;\n    background: linear-gradient(to right, #ff5858, #f857a6);\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 10px;\n    cursor: pointer;\n    transition: background 0.3s ease;\n  }\n\n  .send-btn:hover {\n    background: linear-gradient(to right, #ff7676, #f45bb2);\n  }\n  </style>\n"],"sourceRoot":""}]);

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
  return _c("div", { staticClass: "container" }, [
    _c("h2", { staticClass: "header" }, [_vm._v("Details")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "message-list" },
      _vm._l(_vm.messages, function(message, index) {
        return _c(
          "div",
          { key: index, class: ["message-card", message.type] },
          [
            _c("div", { staticClass: "message-content" }, [
              _c("h3", [_vm._v(_vm._s(message.title))]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(message.body))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "message-footer" }, [
              _vm._v(_vm._s(message.timestamp))
            ])
          ]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "add-comment" }, [
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.newComment,
            expression: "newComment"
          }
        ],
        staticClass: "comment-input",
        attrs: { placeholder: "Add Comment" },
        domProps: { value: _vm.newComment },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.newComment = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("button", { staticClass: "send-btn", on: { click: _vm.addComment } }, [
        _vm._v("Send")
      ])
    ])
  ])
}
var staticRenderFns = []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlPzljZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZT8xZTNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludERldGFpbC52dWU/NTQ2ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJtZXNzYWdlcyIsInRpdGxlIiwiYm9keSIsInRpbWVzdGFtcCIsInR5cGUiLCJuZXdDb21tZW50IiwibWV0aG9kcyIsImFkZENvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7RUFDQUE7SUFDQTtNQUNBO01BQ0FDLFdBQ0E7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQSxHQUNBO1FBQ0FIO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0EsR0FDQTtRQUNBSDtRQUNBQztRQUNBQztRQUNBQztNQUNBLEVBQ0E7TUFDQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBQztNQUNBO1FBQ0E7VUFDQU47VUFDQUM7VUFDQUM7VUFDQUM7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQSxHOzs7Ozs7Ozs7OztBQzNFQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGtDQUFrQyxxQkFBcUIsaUJBQWlCLGtCQUFrQixHQUFHLDRCQUE0QixvQkFBb0IsZ0JBQWdCLDhCQUE4QixrQkFBa0Isd0JBQXdCLHVCQUF1QixHQUFHLGtDQUFrQyxzQkFBc0Is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Q0EsY0FBYyxtQkFBTyxDQUFDLHNrQkFBZ1Q7QUFDdFU7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLDZIQUFnRTtBQUNsRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNYZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUJBQU8sQ0FBQyw2bUJBQTRSO0FBQ3RTO0FBQ0E7QUFDc0g7QUFDYTtBQUNuSTtBQUNpVjtBQUNqVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21HO0FBQ25HLGdCQUFnQix5R0FBa0I7QUFDbEMsRUFBRSxrSUFBYztBQUNoQixFQUFFLHlPQUFjO0FBQ2hCLEVBQUUsa1BBQXlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLEVBYVg7O0FBRVUsZ0ZBQWlCIiwiZmlsZSI6ImpzLzMzLmJ1bmRsZS44Y2FmMjg4ODJiNGFkOGY5Yjc1Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDIgY2xhc3M9XCJoZWFkZXJcIj5EZXRhaWxzPC9oMj5cblxuICAgICAgPCEtLSBNZXNzYWdlIGxpc3QgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1saXN0XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB2LWZvcj1cIihtZXNzYWdlLCBpbmRleCkgaW4gbWVzc2FnZXNcIlxuICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgOmNsYXNzPVwiWydtZXNzYWdlLWNhcmQnLCBtZXNzYWdlLnR5cGVdXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMz57eyBtZXNzYWdlLnRpdGxlIH19PC9oMz5cbiAgICAgICAgICAgIDxwPnt7IG1lc3NhZ2UuYm9keSB9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1mb290ZXJcIj57eyBtZXNzYWdlLnRpbWVzdGFtcCB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIEFkZCBDb21tZW50IEZvcm0gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWRkLWNvbW1lbnRcIj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgdi1tb2RlbD1cIm5ld0NvbW1lbnRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIENvbW1lbnRcIlxuICAgICAgICAgIGNsYXNzPVwiY29tbWVudC1pbnB1dFwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cImFkZENvbW1lbnRcIiBjbGFzcz1cInNlbmQtYnRuXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBTYW1wbGUgbWVzc2FnZXNcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJISVRBQ0hJXCIsXG4gICAgICAgICAgICBib2R5OiBcImNkZlwiLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBcIjEwLTA5LTIwMjQgMDY6MzAgUE1cIixcbiAgICAgICAgICAgIHR5cGU6IFwiaGl0YWNoaVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJDYWxsIENlbnRlclwiLFxuICAgICAgICAgICAgYm9keTogXCJOYW1lOiBWaXZla2FuYW5kYSBTaGFybWEgRW1haWw6IE5BIFBob25lIE5vLjogNzkwODA3OTEwMyBDb21tZW50OiBDYXNoIERpc3BlbnNlciBGYXRhbFwiLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBcIjEwLTA5LTIwMjQgMDY6MzUgUE1cIixcbiAgICAgICAgICAgIHR5cGU6IFwiY2FsbC1jZW50ZXJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiQ2FsbCBDZW50ZXJcIixcbiAgICAgICAgICAgIGJvZHk6IFwiRGVhciBUZWFtLCBQbGVhc2UgY2FsbCBsb2cgZm9yIERpc3BlbnNlciBpc3N1ZSwgQ3VzdG9kaWFuOiBWaXZla2FuYW5kYSBTaGFybWEgKDc5MDgwNzkxMDMpICYgRW5nOiBDaGFpdGFrICg4MDE3MzIxNjAyKSwgS2luZGx5IHByb3ZpZGUgdGhlIGRvY2tldCBudW1iZXIuLi5cIixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogXCIxMC0wOS0yMDI0IDA2OjQxIFBNXCIsXG4gICAgICAgICAgICB0eXBlOiBcImNhbGwtY2VudGVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIC8vIE5ldyBjb21tZW50IGlucHV0XG4gICAgICAgIG5ld0NvbW1lbnQ6IFwiXCJcbiAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAvLyBGdW5jdGlvbiB0byBhZGQgYSBuZXcgY29tbWVudFxuICAgICAgYWRkQ29tbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMubmV3Q29tbWVudC50cmltKCkpIHtcbiAgICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBDb21tZW50XCIsXG4gICAgICAgICAgICBib2R5OiB0aGlzLm5ld0NvbW1lbnQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgICAgICAgIHR5cGU6IFwidXNlci1jb21tZW50XCJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChuZXdNZXNzYWdlKTtcbiAgICAgICAgICB0aGlzLm5ld0NvbW1lbnQgPSBcIlwiOyAvLyBDbGVhciB0aGUgaW5wdXQgYWZ0ZXIgYWRkaW5nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIDwvc2NyaXB0PlxuXG4gIDxzdHlsZSBzY29wZWQ+XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyYjhjZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLm1lc3NhZ2UtbGlzdCB7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAubWVzc2FnZS1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuaGl0YWNoaSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjg1N2E2LCAjZmY1ODU4KTtcbiAgfVxuXG4gIC5jYWxsLWNlbnRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjRjNmRjLCAjNTE0YTlkKTtcbiAgfVxuXG4gIC51c2VyLWNvbW1lbnQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YzOTA0ZiwgIzNiNDM3MSk7XG4gIH1cblxuICAubWVzc2FnZS1mb290ZXIge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cblxuICAuYWRkLWNvbW1lbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5jb21tZW50LWlucHV0IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICByZXNpemU6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICB9XG5cbiAgLnNlbmQtYnRuIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjU4NTgsICNmODU3YTYpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuICB9XG5cbiAgLnNlbmQtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjc2NzYsICNmNDViYjIpO1xuICB9XG4gIDwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNvbnRhaW5lcltkYXRhLXYtMjFlN2EyNThdIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4uaGVhZGVyW2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiOGNmO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tZXNzYWdlLWxpc3RbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5tZXNzYWdlLWNhcmRbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5oaXRhY2hpW2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjg1N2E2LCAjZmY1ODU4KTtcXG59XFxuLmNhbGwtY2VudGVyW2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjRjNmRjLCAjNTE0YTlkKTtcXG59XFxuLnVzZXItY29tbWVudFtkYXRhLXYtMjFlN2EyNThdIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YzOTA0ZiwgIzNiNDM3MSk7XFxufVxcbi5tZXNzYWdlLWZvb3RlcltkYXRhLXYtMjFlN2EyNThdIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4uYWRkLWNvbW1lbnRbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNvbW1lbnQtaW5wdXRbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICByZXNpemU6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG59XFxuLnNlbmQtYnRuW2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjU4NTgsICNmODU3YTYpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xcbn1cXG4uc2VuZC1idG5bZGF0YS12LTIxZTdhMjU4XTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjc2NzYsICNmNDViYjIpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvc3VqYW4vRGVza3RvcC9Xb3JrL3Byb2plY3QgZnJlZWxhbmNlL1NhbmtoYS9hdG1fcHJvai9hdG0vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBK0VBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtDQUNBO0FBRUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0NBQ0E7QUFFQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtDQUNBO0FBRUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtDQUNBO0FBRUE7RUFDQSx3REFBQTtDQUNBO0FBRUE7RUFDQSx3REFBQTtDQUNBO0FBRUE7RUFDQSx3REFBQTtDQUNBO0FBRUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7Q0FDQTtBQUVBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0NBQ0E7QUFFQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7Q0FDQTtBQUVBO0VBQ0EscUJBQUE7RUFDQSx3REFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7Q0FDQTtBQUVBO0VBQ0Esd0RBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ29tcGxhaW50RGV0YWlsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGgyIGNsYXNzPVxcXCJoZWFkZXJcXFwiPkRldGFpbHM8L2gyPlxcblxcbiAgICAgIDwhLS0gTWVzc2FnZSBsaXN0IC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1lc3NhZ2UtbGlzdFxcXCI+XFxuICAgICAgICA8ZGl2XFxuICAgICAgICAgIHYtZm9yPVxcXCIobWVzc2FnZSwgaW5kZXgpIGluIG1lc3NhZ2VzXFxcIlxcbiAgICAgICAgICA6a2V5PVxcXCJpbmRleFxcXCJcXG4gICAgICAgICAgOmNsYXNzPVxcXCJbJ21lc3NhZ2UtY2FyZCcsIG1lc3NhZ2UudHlwZV1cXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1lc3NhZ2UtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGgzPnt7IG1lc3NhZ2UudGl0bGUgfX08L2gzPlxcbiAgICAgICAgICAgIDxwPnt7IG1lc3NhZ2UuYm9keSB9fTwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1lc3NhZ2UtZm9vdGVyXFxcIj57eyBtZXNzYWdlLnRpbWVzdGFtcCB9fTwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPCEtLSBBZGQgQ29tbWVudCBGb3JtIC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFkZC1jb21tZW50XFxcIj5cXG4gICAgICAgIDx0ZXh0YXJlYVxcbiAgICAgICAgICB2LW1vZGVsPVxcXCJuZXdDb21tZW50XFxcIlxcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQWRkIENvbW1lbnRcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJjb21tZW50LWlucHV0XFxcIlxcbiAgICAgICAgPjwvdGV4dGFyZWE+XFxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cXFwiYWRkQ29tbWVudFxcXCIgY2xhc3M9XFxcInNlbmQtYnRuXFxcIj5TZW5kPC9idXR0b24+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC90ZW1wbGF0ZT5cXG5cXG4gIDxzY3JpcHQ+XFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIGRhdGEoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICAgIC8vIFNhbXBsZSBtZXNzYWdlc1xcbiAgICAgICAgbWVzc2FnZXM6IFtcXG4gICAgICAgICAge1xcbiAgICAgICAgICAgIHRpdGxlOiBcXFwiSElUQUNISVxcXCIsXFxuICAgICAgICAgICAgYm9keTogXFxcImNkZlxcXCIsXFxuICAgICAgICAgICAgdGltZXN0YW1wOiBcXFwiMTAtMDktMjAyNCAwNjozMCBQTVxcXCIsXFxuICAgICAgICAgICAgdHlwZTogXFxcImhpdGFjaGlcXFwiXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIHtcXG4gICAgICAgICAgICB0aXRsZTogXFxcIkNhbGwgQ2VudGVyXFxcIixcXG4gICAgICAgICAgICBib2R5OiBcXFwiTmFtZTogVml2ZWthbmFuZGEgU2hhcm1hIEVtYWlsOiBOQSBQaG9uZSBOby46IDc5MDgwNzkxMDMgQ29tbWVudDogQ2FzaCBEaXNwZW5zZXIgRmF0YWxcXFwiLFxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogXFxcIjEwLTA5LTIwMjQgMDY6MzUgUE1cXFwiLFxcbiAgICAgICAgICAgIHR5cGU6IFxcXCJjYWxsLWNlbnRlclxcXCJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAge1xcbiAgICAgICAgICAgIHRpdGxlOiBcXFwiQ2FsbCBDZW50ZXJcXFwiLFxcbiAgICAgICAgICAgIGJvZHk6IFxcXCJEZWFyIFRlYW0sIFBsZWFzZSBjYWxsIGxvZyBmb3IgRGlzcGVuc2VyIGlzc3VlLCBDdXN0b2RpYW46IFZpdmVrYW5hbmRhIFNoYXJtYSAoNzkwODA3OTEwMykgJiBFbmc6IENoYWl0YWsgKDgwMTczMjE2MDIpLCBLaW5kbHkgcHJvdmlkZSB0aGUgZG9ja2V0IG51bWJlci4uLlxcXCIsXFxuICAgICAgICAgICAgdGltZXN0YW1wOiBcXFwiMTAtMDktMjAyNCAwNjo0MSBQTVxcXCIsXFxuICAgICAgICAgICAgdHlwZTogXFxcImNhbGwtY2VudGVyXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICBdLFxcbiAgICAgICAgLy8gTmV3IGNvbW1lbnQgaW5wdXRcXG4gICAgICAgIG5ld0NvbW1lbnQ6IFxcXCJcXFwiXFxuICAgICAgfTtcXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgIC8vIEZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBjb21tZW50XFxuICAgICAgYWRkQ29tbWVudCgpIHtcXG4gICAgICAgIGlmICh0aGlzLm5ld0NvbW1lbnQudHJpbSgpKSB7XFxuICAgICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XFxuICAgICAgICAgICAgdGl0bGU6IFxcXCJVc2VyIENvbW1lbnRcXFwiLFxcbiAgICAgICAgICAgIGJvZHk6IHRoaXMubmV3Q29tbWVudCxcXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcXG4gICAgICAgICAgICB0eXBlOiBcXFwidXNlci1jb21tZW50XFxcIlxcbiAgICAgICAgICB9O1xcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobmV3TWVzc2FnZSk7XFxuICAgICAgICAgIHRoaXMubmV3Q29tbWVudCA9IFxcXCJcXFwiOyAvLyBDbGVhciB0aGUgaW5wdXQgYWZ0ZXIgYWRkaW5nXFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9O1xcbiAgPC9zY3JpcHQ+XFxuXFxuICA8c3R5bGUgc2NvcGVkPlxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiOGNmO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWVzc2FnZS1saXN0IHtcXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5tZXNzYWdlLWNhcmQge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuXFxuICAuaGl0YWNoaSB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y4NTdhNiwgI2ZmNTg1OCk7XFxuICB9XFxuXFxuICAuY2FsbC1jZW50ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNGM2ZGMsICM1MTRhOWQpO1xcbiAgfVxcblxcbiAgLnVzZXItY29tbWVudCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YzOTA0ZiwgIzNiNDM3MSk7XFxuICB9XFxuXFxuICAubWVzc2FnZS1mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICB9XFxuXFxuICAuYWRkLWNvbW1lbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtaW5wdXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICB9XFxuXFxuICAuc2VuZC1idG4ge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY1ODU4LCAjZjg1N2E2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcXG4gIH1cXG5cXG4gIC5zZW5kLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNzY3NiwgI2Y0NWJiMik7XFxuICB9XFxuICA8L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkZXJcIiB9LCBbX3ZtLl92KFwiRGV0YWlsc1wiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJtZXNzYWdlLWxpc3RcIiB9LFxuICAgICAgX3ZtLl9sKF92bS5tZXNzYWdlcywgZnVuY3Rpb24obWVzc2FnZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBrZXk6IGluZGV4LCBjbGFzczogW1wibWVzc2FnZS1jYXJkXCIsIG1lc3NhZ2UudHlwZV0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2UtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KF92bS5fcyhtZXNzYWdlLnRpdGxlKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKG1lc3NhZ2UuYm9keSkpXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWVzc2FnZS1mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MobWVzc2FnZS50aW1lc3RhbXApKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgICAgMFxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFkZC1jb21tZW50XCIgfSwgW1xuICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubmV3Q29tbWVudCxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmV3Q29tbWVudFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJjb21tZW50LWlucHV0XCIsXG4gICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIkFkZCBDb21tZW50XCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uZXdDb21tZW50IH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3ZtLm5ld0NvbW1lbnQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcInNlbmQtYnRuXCIsIG9uOiB7IGNsaWNrOiBfdm0uYWRkQ29tbWVudCB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiU2VuZFwiKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMjFlN2EyNThcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjFlN2EyNThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjY3MmZhYmVmXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjFlN2EyNThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjFlN2EyNThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjFlN2EyNThcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTIxZTdhMjU4XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yMWU3YTI1OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTIxZTdhMjU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=