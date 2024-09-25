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
  }), _vm._v("! ")]) : _vm._e(), _vm._v(" "), _c("p", [_vm._v("Today is " + _vm._s(_vm.current_date))])]), _vm._v(" "), _c("section", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9pbmRleC52dWU/YmI2YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQvaW5kZXgudnVlP2IwNGIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkL2luZGV4LnZ1ZT80MDZiIl0sIm5hbWVzIjpbIm1vdW50ZWQiLCJjb25zb2xlIiwiZGF0YSIsImN1cnJlbnRfZGF0ZSIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsInVzZXIiLCJfdiIsImRvbVByb3BzIiwidGV4dENvbnRlbnQiLCJfcyIsIm5hbWUiLCJfZSIsImNhbiIsIl9tIiwic3RhdGljUmVuZGVyRm5zIiwiYXR0cnMiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsInN0YXRpY1N0eWxlIiwiYWxpZ24iLCJjb2xzcGFuIiwiaHJlZiIsIl93aXRoU3RyaXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNJQTtBQUlBO0VBQ0FBLE9BREEscUJBQ0E7SUFDQUM7RUFDQSxDQUhBO0VBSUFDLElBSkEsa0JBSUE7SUFDQTtNQUNBQztJQURBO0VBR0EsQ0FSQTtFQVNBQyw0QkFDQUMseUVBREE7QUFUQSxHOzs7Ozs7Ozs7Ozs7QUMxSUE7QUFBQTtBQUFBO0FBQUEsSUFBSUMsTUFBTSxHQUFHLFNBQVNBLE1BQVQsR0FBa0I7RUFDN0IsSUFBSUMsR0FBRyxHQUFHLElBQVY7RUFBQSxJQUNFQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxFQURq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QUFQLENBWEssQ0FBUCxDQXpEUSxDQUFWLENBeEI0RCxFQStGOURMLEdBQUcsQ0FBQ0ssRUFBSixDQUFPLEdBQVAsQ0EvRjhELEVBZ0c5REosRUFBRSxDQUFDLE9BQUQsRUFBVSxDQUNWQSxFQUFFLENBQUMsSUFBRCxFQUFPLENBQ1BBLEVBQUUsQ0FBQyxJQUFELEVBQU87SUFBRWEsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFUO01BQWtCQyxPQUFPLEVBQUU7SUFBM0I7RUFBVCxDQUFQLEVBQW9ELENBQ3BEbkIsRUFBRSxDQUNBLEdBREEsRUFFQTtJQUNFRSxXQUFXLEVBQUUscUJBRGY7SUFFRVcsS0FBSyxFQUFFO01BQUVPLElBQUksRUFBRTtJQUFSO0VBRlQsQ0FGQSxFQU1BLENBQUNyQixHQUFHLENBQUNLLEVBQUosQ0FBTyxTQUFQLENBQUQsQ0FOQSxDQURrRCxDQUFwRCxDQURLLENBQVAsQ0FEUSxDQUFWLENBaEc0RCxDQUE5RCxDQUQyQyxDQUE3QyxDQUR1QyxDQUF6QyxDQUQwQyxDQUFyQyxDQUFUO0FBcUhELENBbE9tQixDQUF0QjtBQW9PQU4sTUFBTSxDQUFDdUIsYUFBUCxHQUF1QixJQUF2Qjs7Ozs7Ozs7Ozs7OztBQ2pTQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzMuYnVuZGxlLjU2NjgyMDBhM2I5YjdjYjExMDE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG48bWFpbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cclxuICAgICAgPGgxIHYtaWY9XCJ1c2VyXCI+V2VsY29tZSBiYWNrLCA8c3BhbiB2LXRleHQ9XCJ1c2VyLm5hbWVcIj48L3NwYW4+ISA8L2gxPlxyXG4gICAgICA8cD5Ub2RheSBpcyB7e2N1cnJlbnRfZGF0ZX19PC9wPiBcclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNiBjb2wtbGctM1wiIHYtaWY9XCJjYW4oJ1VzZXJzIFRpbGUnKVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNtYWxsLWJveCBjYXJkIGluZm8tYm94MVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGg1PlVzZXJzPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoMz4xNDM4IDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWljb25cIj4gPGkgY2xhc3M9XCJmYSBmYS11c2VyLXBsdXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLWxnLTNcIiB2LWlmPVwiY2FuKCdRdW90ZSBUaWxlJylcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbWFsbC1ib3ggY2FyZCBpbmZvLWJveDJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoNT5PcGVuIEludm9pY2VzPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoMz43NSA8L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJveC1pY29uXCI+IDxpIGNsYXNzPVwiZmEgZmEtbW9uZXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLWxnLTNcIiB2LWlmPVwiY2FuKCdUYXNrIFRpbGUnKVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNtYWxsLWJveCBjYXJkIGluZm8tYm94M1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGg1Pk9wZW4gVGFza3M8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGgzPjE1IDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWljb25cIj4gPGkgY2xhc3M9XCJmYSBmYS10YXNrc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNiBjb2wtbGctM1wiIHYtaWY9XCJjYW4oJ1F1ZXJ5IFRpbGUnKVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNtYWxsLWJveCBjYXJkIGluZm8tYm94NFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGg1Pk5ldyBJc3N1ZXM8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGgzPjMwIDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYm94LWljb25cIj4gPGkgY2xhc3M9XCJmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtcHJpbWFyeVwiIHYtaWY9XCJjYW4oJ1VzZXIgVHJhZmZpYyBHcmFwaCcpXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXIgYm9yIFwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlVzZXIgVHJhZmZpYzwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+IDxpbWcgc3JjPVwiaW1hZ2VzL1VudGl0bGVkLTEuanBnXCIgYWx0PVwiXCIgd2lkdGg9XCIxMDAlXCI+IDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LXN1Y2Nlc3NcIiB2LWlmPVwiY2FuKCdMb2cgSGlzdG9yeScpXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXIgYm9yXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGUgY2FyZC10ZXh0XCI+TG9nIEhpc3Rvcnk8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjcwXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+U2wgTm8uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZSA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkNvbXBhbnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TZXNzaW9uIER1cmF0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TGFzdCBTZWVuIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5Eb25uYSBOaWNob2xzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+UmVnaW9uYWwgTWFuYWdlciA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5HcmVlbndheSBNZXRhbCBSZWN5Y2xpbmcgSW5jLjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjMwIG1pbiAxMiBzZWM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4wNS0xMy0yMDIyIGF0IDc6MzAgQU08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5Sb3NlIE1hcnNoYWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+R2VuZXJhbCBNYW5hZ2VyIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlNvdXRoIENoaWNhZ28gSXJvbiAmIE1ldGFsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+MSBociAyNSBtaW4gMzQgc2VjPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+MDUtMTItMjAyMiBhdCA3OjMwIFBNPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPjAzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+RGlhbmEgR3JhbnQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TYWxlcyBNYW5hZ2VyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+U2ltcyBNZXRhbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjAzIG1pbiAxMiBzZWM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4wNS0xMi0yMDIyIGF0IDU6MjEgUE08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TY290dCBQZXJraW5zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+QWNjb3VudCBPZmZpY2VyIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPkomUyBNZXRhbHM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD41IGhyIDI1IG1pbiAzNCBzZWM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4wNS0xMi0yMDIyIGF0IDM6NDcgUE08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5DYXJsb3MgQmVsdHJhbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlJlZ2lvbmFsIE1hbmFnZXI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5XaW5keSBDaXR5IElyb24gJiBNZXRhbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjI1IG1pbiAxMiBzZWM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4wNS0xMi0yMDIyIGF0IDE6MzggUE08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cInJpZ2h0XCIgY29sc3Bhbj1cIjZcIj48YSBjbGFzcz1cImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIiBocmVmPVwiI1wiPm1vcmUuLi48L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvbWFpbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcbiAgICBtYXBHZXR0ZXJzLFxyXG4gICAgbWFwQWN0aW9uc1xyXG59IGZyb20gXCJ2dWV4XCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCBtb3VudGVkLicpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGN1cnJlbnRfZGF0ZTogIG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoXCJkZGRkLCBEbyBNTU1NIFlZWVlcIilcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgLi4ubWFwR2V0dGVycyhcImF1dGhcIiwgW1widXNlclwiXSksIFxyXG4gICAgfSxcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcIm1haW5cIiwgW1xuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCIgfSwgW1xuICAgICAgX3ZtLnVzZXJcbiAgICAgICAgPyBfYyhcImgxXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIldlbGNvbWUgYmFjaywgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0udXNlci5uYW1lKSB9IH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiISBcIiksXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBcIiwgW192bS5fdihcIlRvZGF5IGlzIFwiICsgX3ZtLl9zKF92bS5jdXJyZW50X2RhdGUpKV0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfdm0uY2FuKFwiVXNlcnMgVGlsZVwiKVxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLWxnLTNcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmNhbihcIlF1b3RlIFRpbGVcIilcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC1sZy0zXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5jYW4oXCJUYXNrIFRpbGVcIilcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC1sZy0zXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5jYW4oXCJRdWVyeSBUaWxlXCIpXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNiBjb2wtbGctM1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmNhbihcIlVzZXIgVHJhZmZpYyBHcmFwaFwiKVxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3gtcHJpbWFyeVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oNSksXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uY2FuKFwiTG9nIEhpc3RvcnlcIilcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oNiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDcpLFxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsLWJveCBjYXJkIGluZm8tYm94MVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5uZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtY29udGVudFwiIH0sIFtcbiAgICAgICAgICBfYyhcImg1XCIsIFtfdm0uX3YoXCJVc2Vyc1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiMTQzOCBcIildKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mby1ib3gtaWNvblwiIH0sIFtcbiAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdXNlci1wbHVzXCIsXG4gICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbC1ib3ggY2FyZCBpbmZvLWJveDJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlubmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KFwiT3BlbiBJbnZvaWNlc1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiNzUgXCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWljb25cIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLW1vbmV5XCIsXG4gICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbC1ib3ggY2FyZCBpbmZvLWJveDNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlubmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KFwiT3BlbiBUYXNrc1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiMTUgXCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWljb25cIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRhc2tzXCIsXG4gICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbC1ib3ggY2FyZCBpbmZvLWJveDRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlubmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KFwiTmV3IElzc3Vlc1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiMzAgXCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm8tYm94LWljb25cIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyIGJvclwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJVc2VyIFRyYWZmaWNcIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBhdHRyczogeyBzcmM6IFwiaW1hZ2VzL1VudGl0bGVkLTEuanBnXCIsIGFsdDogXCJcIiwgd2lkdGg6IFwiMTAwJVwiIH0sXG4gICAgICB9KSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXIgYm9yXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbX3ZtLl92KFwiTG9nIEhpc3RvcnlcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZXNlY3Rpb25cIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtcmVzcG9uc2l2ZVwiIH0sIFtcbiAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiNzBcIiB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTbCBOby5cIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWUgXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUaXRsZVwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ29tcGFueVwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU2Vzc2lvbiBEdXJhdGlvblwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTGFzdCBTZWVuIFwiKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiMDFcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkRvbm5hIE5pY2hvbHNcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIlJlZ2lvbmFsIE1hbmFnZXIgXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJHcmVlbndheSBNZXRhbCBSZWN5Y2xpbmcgSW5jLlwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiMzAgbWluIDEyIHNlY1wiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiMDUtMTMtMjAyMiBhdCA3OjMwIEFNXCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiMDJcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIlJvc2UgTWFyc2hhbGxcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkdlbmVyYWwgTWFuYWdlciBcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIlNvdXRoIENoaWNhZ28gSXJvbiAmIE1ldGFsXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCIxIGhyIDI1IG1pbiAzNCBzZWNcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIjA1LTEyLTIwMjIgYXQgNzozMCBQTVwiKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIjAzXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJEaWFuYSBHcmFudFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiU2FsZXMgTWFuYWdlclwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiU2ltcyBNZXRhbFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiMDMgbWluIDEyIHNlY1wiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiMDUtMTItMjAyMiBhdCA1OjIxIFBNXCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiMDRcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIlNjb3R0IFBlcmtpbnNcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkFjY291bnQgT2ZmaWNlciBcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkomUyBNZXRhbHNcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIjUgaHIgMjUgbWluIDM0IHNlY1wiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiMDUtMTItMjAyMiBhdCAzOjQ3IFBNXCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiMDVcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkNhcmxvcyBCZWx0cmFuXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJSZWdpb25hbCBNYW5hZ2VyXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJXaW5keSBDaXR5IElyb24gJiBNZXRhbFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiMjUgbWluIDEyIHNlY1wiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiMDUtMTItMjAyMiBhdCAxOjM4IFBNXCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0Zm9vdFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJyaWdodFwiLCBjb2xzcGFuOiBcIjZcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwibW9yZS4uLlwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTU3NDAyN2MmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU1NzQwMjdjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU1NzQwMjdjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU1NzQwMjdjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTU3NDAyN2MmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTU3NDAyN2MnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NTc0MDI3YyZcIiJdLCJzb3VyY2VSb290IjoiIn0=