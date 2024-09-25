(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted.');
  },
  data: function data() {
    return {
      current_date: moment(new Date()).format("dddd, Do MMMM YYYY")
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("auth", ["user"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard/index.vue?vue&type=template&id=5574027c&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard/index.vue?vue&type=template&id=5574027c& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("main", [_c("section", {
    staticClass: "content-header"
  }, [_vm.user ? _c("h1", [_vm._v("Welcome back, "), _c("span", {
    domProps: {
      textContent: _vm._s(_vm.user.name)
    }
  }), _vm._v("! ")]) : _vm._e(), _vm._v(" "), _c("p", [_vm._v("Today is Thursday, 12 May 2022 " + _vm._s(_vm.current_date))])]), _vm._v(" "), _c("section", {
    staticClass: "content"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm.can("Users Tile") ? _c("div", {
    staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-3"
  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), _vm.can("Quote Tile") ? _c("div", {
    staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-3"
  }, [_vm._m(1)]) : _vm._e(), _vm._v(" "), _vm.can("Task Tile") ? _c("div", {
    staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-3"
  }, [_vm._m(2)]) : _vm._e(), _vm._v(" "), _vm.can("Query Tile") ? _c("div", {
    staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-3"
  }, [_vm._m(3)]) : _vm._e()]), _vm._v(" "), _vm.can("User Traffic Graph") ? _c("div", {
    staticClass: "card box-primary"
  }, [_vm._m(4), _vm._v(" "), _vm._m(5)]) : _vm._e(), _vm._v(" "), _vm.can("Log History") ? _c("div", {
    staticClass: "card box-success"
  }, [_vm._m(6), _vm._v(" "), _vm._m(7)]) : _vm._e()])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "small-box card info-box1"
  }, [_c("div", {
    staticClass: "inner"
  }, [_c("div", {
    staticClass: "info-box-content"
  }, [_c("h5", [_vm._v("Users")]), _vm._v(" "), _c("h3", [_vm._v("1438 ")])]), _vm._v(" "), _c("div", {
    staticClass: "info-box-icon"
  }, [_c("i", {
    staticClass: "fa fa-user-plus",
    attrs: {
      "aria-hidden": "true"
    }
  })])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "small-box card info-box2"
  }, [_c("div", {
    staticClass: "inner"
  }, [_c("div", {
    staticClass: "info-box-content"
  }, [_c("h5", [_vm._v("Open Invoices")]), _vm._v(" "), _c("h3", [_vm._v("75 ")])]), _vm._v(" "), _c("div", {
    staticClass: "info-box-icon"
  }, [_c("i", {
    staticClass: "fa fa-money",
    attrs: {
      "aria-hidden": "true"
    }
  })])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "small-box card info-box3"
  }, [_c("div", {
    staticClass: "inner"
  }, [_c("div", {
    staticClass: "info-box-content"
  }, [_c("h5", [_vm._v("Open Tasks")]), _vm._v(" "), _c("h3", [_vm._v("15 ")])]), _vm._v(" "), _c("div", {
    staticClass: "info-box-icon"
  }, [_c("i", {
    staticClass: "fa fa-tasks",
    attrs: {
      "aria-hidden": "true"
    }
  })])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "small-box card info-box4"
  }, [_c("div", {
    staticClass: "inner"
  }, [_c("div", {
    staticClass: "info-box-content"
  }, [_c("h5", [_vm._v("New Issues")]), _vm._v(" "), _c("h3", [_vm._v("30 ")])]), _vm._v(" "), _c("div", {
    staticClass: "info-box-icon"
  }, [_c("i", {
    staticClass: "fa fa-exclamation-triangle",
    attrs: {
      "aria-hidden": "true"
    }
  })])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-header with-border bor"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("User Traffic")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-body"
  }, [_c("img", {
    attrs: {
      src: "images/Untitled-1.jpg",
      alt: "",
      width: "100%"
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-header with-border bor"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("Log History")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "tablesection"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-striped table-hover"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      width: "70"
    }
  }, [_vm._v("Sl No.")]), _vm._v(" "), _c("th", [_vm._v("Name ")]), _vm._v(" "), _c("th", [_vm._v("Title")]), _vm._v(" "), _c("th", [_vm._v("Company")]), _vm._v(" "), _c("th", [_vm._v("Session Duration")]), _vm._v(" "), _c("th", [_vm._v("Last Seen ")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("01")]), _vm._v(" "), _c("td", [_vm._v("Donna Nichols")]), _vm._v(" "), _c("td", [_vm._v("Regional Manager ")]), _vm._v(" "), _c("td", [_vm._v("Greenway Metal Recycling Inc.")]), _vm._v(" "), _c("td", [_vm._v("30 min 12 sec")]), _vm._v(" "), _c("td", [_vm._v("05-13-2022 at 7:30 AM")])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("02")]), _vm._v(" "), _c("td", [_vm._v("Rose Marshall")]), _vm._v(" "), _c("td", [_vm._v("General Manager ")]), _vm._v(" "), _c("td", [_vm._v("South Chicago Iron & Metal")]), _vm._v(" "), _c("td", [_vm._v("1 hr 25 min 34 sec")]), _vm._v(" "), _c("td", [_vm._v("05-12-2022 at 7:30 PM")])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("03")]), _vm._v(" "), _c("td", [_vm._v("Diana Grant")]), _vm._v(" "), _c("td", [_vm._v("Sales Manager")]), _vm._v(" "), _c("td", [_vm._v("Sims Metal")]), _vm._v(" "), _c("td", [_vm._v("03 min 12 sec")]), _vm._v(" "), _c("td", [_vm._v("05-12-2022 at 5:21 PM")])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("04")]), _vm._v(" "), _c("td", [_vm._v("Scott Perkins")]), _vm._v(" "), _c("td", [_vm._v("Account Officer ")]), _vm._v(" "), _c("td", [_vm._v("J&S Metals")]), _vm._v(" "), _c("td", [_vm._v("5 hr 25 min 34 sec")]), _vm._v(" "), _c("td", [_vm._v("05-12-2022 at 3:47 PM")])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      align: "center"
    }
  }, [_vm._v("05")]), _vm._v(" "), _c("td", [_vm._v("Carlos Beltran")]), _vm._v(" "), _c("td", [_vm._v("Regional Manager")]), _vm._v(" "), _c("td", [_vm._v("Windy City Iron & Metal")]), _vm._v(" "), _c("td", [_vm._v("25 min 12 sec")]), _vm._v(" "), _c("td", [_vm._v("05-12-2022 at 1:38 PM")])])]), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    attrs: {
      align: "right",
      colspan: "6"
    }
  }, [_c("a", {
    staticClass: "label label-success",
    attrs: {
      href: "#"
    }
  }, [_vm._v("more...")])])])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Dashboard/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Dashboard/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5574027c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5574027c& */ "./resources/js/components/Dashboard/index.vue?vue&type=template&id=5574027c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5574027c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5574027c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Dashboard/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard/index.vue?vue&type=template&id=5574027c&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/index.vue?vue&type=template&id=5574027c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5574027c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5574027c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard/index.vue?vue&type=template&id=5574027c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5574027c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5574027c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9pbmRleC52dWU/YmI2YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvaW5kZXgudnVlP2IwNGIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL2luZGV4LnZ1ZT80MDZiIl0sIm5hbWVzIjpbIm1vdW50ZWQiLCJjb25zb2xlIiwiZGF0YSIsImN1cnJlbnRfZGF0ZSIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsInVzZXIiLCJfdiIsImRvbVByb3BzIiwidGV4dENvbnRlbnQiLCJfcyIsIm5hbWUiLCJfZSIsImNhbiIsIl9tIiwic3RhdGljUmVuZGVyRm5zIiwiYXR0cnMiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsInN0YXRpY1N0eWxlIiwiYWxpZ24iLCJjb2xzcGFuIiwiaHJlZiIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNJQTtBQUlBO0VBQ0FBLE9BREEscUJBQ0E7SUFDQUM7RUFDQSxDQUhBO0VBSUFDLElBSkEsa0JBSUE7SUFDQTtNQUNBQztJQURBO0VBR0EsQ0FSQTtFQVNBQyw0QkFDQUMseUVBREE7QUFUQSxHOzs7Ozs7Ozs7Ozs7QUMxSUE7QUFBQTtBQUFBO0FBQUEsSUFBSUMsTUFBTSxHQUFHLFNBQVNBLE1BQVQsR0FBa0I7RUFDN0IsSUFBSUMsR0FBRyxHQUFHLElBQVY7RUFBQSxJQUNFQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxFQURq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LENBQVAsQ0FYSyxDQUFQLENBekRRLENBQVYsQ0F4QjRELEVBK0Y5REwsR0FBRyxDQUFDSyxFQUFKLENBQU8sR0FBUCxDQS9GOEQsRUFnRzlESixFQUFFLENBQUMsT0FBRCxFQUFVLENBQ1ZBLEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FDUEEsRUFBRSxDQUFDLElBQUQsRUFBTztJQUFFYSxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQVQ7TUFBa0JDLE9BQU8sRUFBRTtJQUEzQjtFQUFULENBQVAsRUFBb0QsQ0FDcERuQixFQUFFLENBQ0EsR0FEQSxFQUVBO0lBQ0VFLFdBQVcsRUFBRSxxQkFEZjtJQUVFVyxLQUFLLEVBQUU7TUFBRU8sSUFBSSxFQUFFO0lBQVI7RUFGVCxDQUZBLEVBTUEsQ0FBQ3JCLEdBQUcsQ0FBQ0ssRUFBSixDQUFPLFNBQVAsQ0FBRCxDQU5BLENBRGtELENBQXBELENBREssQ0FBUCxDQURRLENBQVYsQ0FoRzRELENBQTlELENBRDJDLENBQTdDLENBRHVDLENBQXpDLENBRDBDLENBQXJDLENBQVQ7QUFxSEQsQ0FsT21CLENBQXRCO0FBb09BTixNQUFNLENBQUN1QixhQUFQLEdBQXVCLElBQXZCOzs7Ozs7Ozs7Ozs7O0FDblNBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMy5idW5kbGUuNDUxYmI1ZGEzZmZhZDBlMGQ2MjguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjxtYWluPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICA8aDEgdi1pZj1cInVzZXJcIj5XZWxjb21lIGJhY2ssIDxzcGFuIHYtdGV4dD1cInVzZXIubmFtZVwiPjwvc3Bhbj4hIDwvaDE+XHJcbiAgICAgIDxwPlRvZGF5IGlzIFRodXJzZGF5LCAxMiBNYXkgMjAyMiB7e2N1cnJlbnRfZGF0ZX19PC9wPiBcclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNiBjb2wtbGctM1wiIHYtaWY9XCJjYW4oJ1VzZXJzIFRpbGUnKVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNtYWxsLWJveCBjYXJkIGluZm8tYm94MVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGg1PlVzZXJzPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoMz4xNDM4IDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWljb25cIj4gPGkgY2xhc3M9XCJmYSBmYS11c2VyLXBsdXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLWxnLTNcIiB2LWlmPVwiY2FuKCdRdW90ZSBUaWxlJylcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbWFsbC1ib3ggY2FyZCBpbmZvLWJveDJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoNT5PcGVuIEludm9pY2VzPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoMz43NSA8L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveC1pY29uXCI+IDxpIGNsYXNzPVwiZmEgZmEtbW9uZXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLWxnLTNcIiB2LWlmPVwiY2FuKCdUYXNrIFRpbGUnKVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNtYWxsLWJveCBjYXJkIGluZm8tYm94M1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGg1Pk9wZW4gVGFza3M8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGgzPjE1IDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWljb25cIj4gPGkgY2xhc3M9XCJmYSBmYS10YXNrc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNiBjb2wtbGctM1wiIHYtaWY9XCJjYW4oJ1F1ZXJ5IFRpbGUnKVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNtYWxsLWJveCBjYXJkIGluZm8tYm94NFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGg1Pk5ldyBJc3N1ZXM8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGgzPjMwIDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWljb25cIj4gPGkgY2xhc3M9XCJmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtcHJpbWFyeVwiIHYtaWY9XCJjYW4oJ1VzZXIgVHJhZmZpYyBHcmFwaCcpXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXIgYm9yIFwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlVzZXIgVHJhZmZpYzwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+IDxpbWcgc3JjPVwiaW1hZ2VzL1VudGl0bGVkLTEuanBnXCIgYWx0PVwiXCIgd2lkdGg9XCIxMDAlXCI+IDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LXN1Y2Nlc3NcIiB2LWlmPVwiY2FuKCdMb2cgSGlzdG9yeScpXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXIgYm9yXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGUgY2FyZC10ZXh0XCI+TG9nIEhpc3Rvcnk8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjcwXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+U2wgTm8uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZSA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkNvbXBhbnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TZXNzaW9uIER1cmF0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TGFzdCBTZWVuIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5Eb25uYSBOaWNob2xzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+UmVnaW9uYWwgTWFuYWdlciA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5HcmVlbndheSBNZXRhbCBSZWN5Y2xpbmcgSW5jLjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjMwIG1pbiAxMiBzZWM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4wNS0xMy0yMDIyIGF0IDc6MzAgQU08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5Sb3NlIE1hcnNoYWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+R2VuZXJhbCBNYW5hZ2VyIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlNvdXRoIENoaWNhZ28gSXJvbiAmIE1ldGFsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+MSBociAyNSBtaW4gMzQgc2VjPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+MDUtMTItMjAyMiBhdCA3OjMwIFBNPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPjAzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+RGlhbmEgR3JhbnQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TYWxlcyBNYW5hZ2VyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+U2ltcyBNZXRhbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjAzIG1pbiAxMiBzZWM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4wNS0xMi0yMDIyIGF0IDU6MjEgUE08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TY290dCBQZXJraW5zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+QWNjb3VudCBPZmZpY2VyIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPkomUyBNZXRhbHM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD41IGhyIDI1IG1pbiAzNCBzZWM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4wNS0xMi0yMDIyIGF0IDM6NDcgUE08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5DYXJsb3MgQmVsdHJhbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlJlZ2lvbmFsIE1hbmFnZXI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5XaW5keSBDaXR5IElyb24gJiBNZXRhbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjI1IG1pbiAxMiBzZWM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4wNS0xMi0yMDIyIGF0IDE6MzggUE08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cInJpZ2h0XCIgY29sc3Bhbj1cIjZcIj48YSBjbGFzcz1cImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIiBocmVmPVwiI1wiPm1vcmUuLi48L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvbWFpbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcbiAgICBtYXBHZXR0ZXJzLFxyXG4gICAgbWFwQWN0aW9uc1xyXG59IGZyb20gXCJ2dWV4XCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCBtb3VudGVkLicpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGN1cnJlbnRfZGF0ZTogIG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoXCJkZGRkLCBEbyBNTU1NIFlZWVlcIilcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgLi4ubWFwR2V0dGVycyhcImF1dGhcIiwgW1widXNlclwiXSksIFxyXG4gICAgfSxcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcIm1haW5cIiwgW1xuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCIgfSwgW1xuICAgICAgX3ZtLnVzZXJcbiAgICAgICAgPyBfYyhcImgxXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIldlbGNvbWUgYmFjaywgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0udXNlci5uYW1lKSB9IH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiISBcIiksXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBcIiwgW1xuICAgICAgICBfdm0uX3YoXCJUb2RheSBpcyBUaHVyc2RheSwgMTIgTWF5IDIwMjIgXCIgKyBfdm0uX3MoX3ZtLmN1cnJlbnRfZGF0ZSkpLFxuICAgICAgXSksXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF92bS5jYW4oXCJVc2VycyBUaWxlXCIpXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNiBjb2wtbGctM1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uY2FuKFwiUXVvdGUgVGlsZVwiKVxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLWxnLTNcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmNhbihcIlRhc2sgVGlsZVwiKVxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLWxnLTNcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmNhbihcIlF1ZXJ5IFRpbGVcIilcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC1sZy0zXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uY2FuKFwiVXNlciBUcmFmZmljIEdyYXBoXCIpXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGJveC1wcmltYXJ5XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSg1KSxcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5jYW4oXCJMb2cgSGlzdG9yeVwiKVxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3gtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSg2KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oNyksXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic21hbGwtYm94IGNhcmQgaW5mby1ib3gxXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbm5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaDVcIiwgW192bS5fdihcIlVzZXJzXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCIxNDM4IFwiKV0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvLWJveC1pY29uXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS11c2VyLXBsdXNcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsLWJveCBjYXJkIGluZm8tYm94MlwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5uZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtY29udGVudFwiIH0sIFtcbiAgICAgICAgICBfYyhcImg1XCIsIFtfdm0uX3YoXCJPcGVuIEludm9pY2VzXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCI3NSBcIildKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtaWNvblwiIH0sIFtcbiAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtbW9uZXlcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsLWJveCBjYXJkIGluZm8tYm94M1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5uZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtY29udGVudFwiIH0sIFtcbiAgICAgICAgICBfYyhcImg1XCIsIFtfdm0uX3YoXCJPcGVuIFRhc2tzXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCIxNSBcIildKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtaWNvblwiIH0sIFtcbiAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGFza3NcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsLWJveCBjYXJkIGluZm8tYm94NFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5uZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtY29udGVudFwiIH0sIFtcbiAgICAgICAgICBfYyhcImg1XCIsIFtfdm0uX3YoXCJOZXcgSXNzdWVzXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCIzMCBcIildKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtaWNvblwiIH0sIFtcbiAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXIgYm9yXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlVzZXIgVHJhZmZpY1wiKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIGF0dHJzOiB7IHNyYzogXCJpbWFnZXMvVW50aXRsZWQtMS5qcGdcIiwgYWx0OiBcIlwiLCB3aWR0aDogXCIxMDAlXCIgfSxcbiAgICAgIH0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlciB3aXRoLWJvcmRlciBib3JcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIGNhcmQtdGV4dFwiIH0sIFtfdm0uX3YoXCJMb2cgSGlzdG9yeVwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlc2VjdGlvblwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIgfSwgW1xuICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB3aWR0aDogXCI3MFwiIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNsIE5vLlwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZSBcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlRpdGxlXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDb21wYW55XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTZXNzaW9uIER1cmF0aW9uXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJMYXN0IFNlZW4gXCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtfdm0uX3YoXCIwMVwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiRG9ubmEgTmljaG9sc1wiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiUmVnaW9uYWwgTWFuYWdlciBcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkdyZWVud2F5IE1ldGFsIFJlY3ljbGluZyBJbmMuXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCIzMCBtaW4gMTIgc2VjXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCIwNS0xMy0yMDIyIGF0IDc6MzAgQU1cIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtfdm0uX3YoXCIwMlwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiUm9zZSBNYXJzaGFsbFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiR2VuZXJhbCBNYW5hZ2VyIFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiU291dGggQ2hpY2FnbyBJcm9uICYgTWV0YWxcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIjEgaHIgMjUgbWluIDM0IHNlY1wiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiMDUtMTItMjAyMiBhdCA3OjMwIFBNXCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiMDNcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkRpYW5hIEdyYW50XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJTYWxlcyBNYW5hZ2VyXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJTaW1zIE1ldGFsXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCIwMyBtaW4gMTIgc2VjXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCIwNS0xMi0yMDIyIGF0IDU6MjEgUE1cIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtfdm0uX3YoXCIwNFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiU2NvdHQgUGVya2luc1wiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiQWNjb3VudCBPZmZpY2VyIFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiSiZTIE1ldGFsc1wiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiNSBociAyNSBtaW4gMzQgc2VjXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCIwNS0xMi0yMDIyIGF0IDM6NDcgUE1cIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtfdm0uX3YoXCIwNVwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiQ2FybG9zIEJlbHRyYW5cIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIlJlZ2lvbmFsIE1hbmFnZXJcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIldpbmR5IENpdHkgSXJvbiAmIE1ldGFsXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCIyNSBtaW4gMTIgc2VjXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCIwNS0xMi0yMDIyIGF0IDE6MzggUE1cIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRmb290XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcInJpZ2h0XCIsIGNvbHNwYW46IFwiNlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJtb3JlLi4uXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NTc0MDI3YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTU3NDAyN2MnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTU3NDAyN2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTU3NDAyN2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NTc0MDI3YyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NTc0MDI3YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1NzQwMjdjJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==