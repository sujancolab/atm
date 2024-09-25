(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Blog/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Blog/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BlogListing',
  components: {
    loader: ''
  },
  data: function data() {
    return {
      blogs: ''
    };
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    axios.get("/api/blog").then(function (_ref) {
      var data = _ref.data;
      return _this.blogs = data.data;
    });
  },
  created: function created() {
    this.loader = this.$loading.show({
      loader: 'dots'
    });
  },
  updated: function updated() {
    this.$nextTick(function () {
      this.loader.hide();
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.loader.hide();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Blog/index.vue?vue&type=template&id=25b093ee&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Blog/index.vue?vue&type=template&id=25b093ee& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "blog-content inner-content"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_vm.blogs ? _c("div", {
    staticClass: "row innerRow"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("div", {
    staticClass: "blog-left"
  }, [_c("figure", [_c("img", {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.blogs[0].featured_image,
      expression: "blogs[0].featured_image"
    }],
    staticClass: "img-fluid"
  }), _vm._v(" "), _c("div", {
    staticClass: "blogimg-caption"
  }, [_c("h3", [_c("router-link", {
    attrs: {
      to: "/blog/" + _vm.str_encode(_vm.blogs[0].id)
    }
  }, [_vm._v(_vm._s(_vm.blogs[0].title))])], 1), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.blogs[0].short_description) + ".")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 pd-60"
  }, [_c("div", {
    staticClass: "blog-list"
  }, _vm._l(_vm.blogs, function (blog, index) {
    return _c("div", {
      key: "bl" + index,
      staticClass: "row vlistGroup"
    }, [_c("div", {
      staticClass: "col-md-5 col-xs-5"
    }, [_c("figure", [_c("img", {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: blog.featured_image,
        expression: "blog.featured_image"
      }],
      staticClass: "img-fluid rounded6"
    })])]), _vm._v(" "), _c("div", {
      staticClass: "col-md-7 col-xs-7"
    }, [_c("h3", [_c("router-link", {
      attrs: {
        to: "/blog/" + _vm.str_encode(blog.id)
      }
    }, [_vm._v(_vm._s(blog.title))])], 1), _vm._v(" "), _c("p", [_vm._v(_vm._s(blog.short_description) + ".")])])]);
  }), 0)])]) : _c("div", {
    staticClass: "row innerRow"
  }, [_vm._m(1), _vm._v(" "), _c("p", {
    staticClass: "text-center"
  }, [_vm._v("No blog found")])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("h1", [_vm._v("Blog")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("h1", [_vm._v("Blog")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/Blog/index.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Blog/index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_25b093ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=25b093ee& */ "./resources/js/pages/Blog/index.vue?vue&type=template&id=25b093ee&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Blog/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_25b093ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_25b093ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Blog/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Blog/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Blog/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Blog/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Blog/index.vue?vue&type=template&id=25b093ee&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Blog/index.vue?vue&type=template&id=25b093ee& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25b093ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=25b093ee& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Blog/index.vue?vue&type=template&id=25b093ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25b093ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25b093ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0Jsb2cvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9CbG9nL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQmxvZy9pbmRleC52dWU/Njk0YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQmxvZy9pbmRleC52dWU/YTdkNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQmxvZy9pbmRleC52dWU/YTk2MyJdLCJuYW1lcyI6WyJuYW1lIiwiY29tcG9uZW50cyIsImxvYWRlciIsImRhdGEiLCJibG9ncyIsImJlZm9yZUNyZWF0ZSIsImF4aW9zIiwiY3JlYXRlZCIsInVwZGF0ZWQiLCJiZWZvcmVEZXN0cm95IiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiX20iLCJfdiIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwidmFsdWUiLCJmZWF0dXJlZF9pbWFnZSIsImV4cHJlc3Npb24iLCJhdHRycyIsInRvIiwic3RyX2VuY29kZSIsImlkIiwiX3MiLCJ0aXRsZSIsInNob3J0X2Rlc2NyaXB0aW9uIiwiX2wiLCJibG9nIiwiaW5kZXgiLCJrZXkiLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBOENBO0FBQWU7RUFDZkEsbUJBREE7RUFFQUM7SUFDQUM7RUFEQSxDQUZBO0VBS0FDLElBTEEsa0JBS0E7SUFDQTtNQUNBQztJQURBO0VBR0EsQ0FUQTtFQVVBQyxZQVZBLDBCQVVBO0lBQUE7O0lBQ0FDO01BQUEsSUFDQUgsSUFEQSxRQUNBQSxJQURBO01BQUEsT0FFQSx1QkFGQTtJQUFBO0VBR0EsQ0FkQTtFQWVBSSxPQWZBLHFCQWVBO0lBQ0E7TUFDQUw7SUFEQTtFQUdBLENBbkJBO0VBb0JBTTtJQUNBO01BQ0E7SUFDQSxDQUZB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Q2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8zMi5idW5kbGUuYmM5ODdjMGI5ZWU0MGIzNDU1OWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYmxvZy1jb250ZW50IGlubmVyLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpbm5lclJvd1wiIHYtaWY9XCJibG9nc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkJsb2c8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgdi1sYXp5PVwiYmxvZ3NbMF0uZmVhdHVyZWRfaW1hZ2VcIiBjbGFzcz1cImltZy1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9naW1nLWNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxyb3V0ZXItbGluayA6dG89XCInL2Jsb2cvJytzdHJfZW5jb2RlKGJsb2dzWzBdLmlkKVwiPnt7YmxvZ3NbMF0udGl0bGV9fTwvcm91dGVyLWxpbms+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3tibG9nc1swXS5zaG9ydF9kZXNjcmlwdGlvbn19LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTUgcGQtNjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB2bGlzdEdyb3VwXCIgdi1mb3I9XCIoYmxvZywgaW5kZXgpIGluIGJsb2dzXCIgOmtleT1cIidibCcraW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTUgY29sLXhzLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgdi1sYXp5PVwiYmxvZy5mZWF0dXJlZF9pbWFnZVwiIGNsYXNzPVwiaW1nLWZsdWlkIHJvdW5kZWQ2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNyBjb2wteHMtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHJvdXRlci1saW5rIDp0bz1cIicvYmxvZy8nK3N0cl9lbmNvZGUoYmxvZy5pZClcIj57e2Jsb2cudGl0bGV9fTwvcm91dGVyLWxpbms+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3tibG9nLnNob3J0X2Rlc2NyaXB0aW9ufX0uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGlubmVyUm93XCIgdi1lbHNlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkJsb2c8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5ObyBibG9nIGZvdW5kPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQmxvZ0xpc3RpbmcnLFxuICAgIGNvbXBvbmVudHM6IHtcbmxvYWRlcjonJ1xuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJsb2dzOiAnJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICAgIGF4aW9zLmdldChcIi9hcGkvYmxvZ1wiKS50aGVuKCh7XG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH0pID0+ICh0aGlzLmJsb2dzID0gZGF0YS5kYXRhKSk7XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgdGhpcy5sb2FkZXI9ICB0aGlzLiRsb2FkaW5nLnNob3coe1xuICAgICAgICAgIGxvYWRlcjonZG90cydcbiAgICAgIH0pXG4gICAgfSxcbiAgICB1cGRhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcbiAgICAgICAgfSlcbiAgICB9LFxuXG5iZWZvcmVEZXN0cm95KCkge1xuICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvZy1jb250ZW50IGlubmVyLWNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgICBfdm0uYmxvZ3NcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBpbm5lclJvd1wiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2ctbGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImZpZ3VyZVwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxhenlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1sYXp5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJsb2dzWzBdLmZlYXR1cmVkX2ltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJibG9nc1swXS5mZWF0dXJlZF9pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJibG9naW1nLWNhcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBcIi9ibG9nL1wiICsgX3ZtLnN0cl9lbmNvZGUoX3ZtLmJsb2dzWzBdLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uYmxvZ3NbMF0udGl0bGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYmxvZ3NbMF0uc2hvcnRfZGVzY3JpcHRpb24pICsgXCIuXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTUgcGQtNjBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9nLWxpc3RcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYmxvZ3MsIGZ1bmN0aW9uIChibG9nLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogXCJibFwiICsgaW5kZXgsIHN0YXRpY0NsYXNzOiBcInJvdyB2bGlzdEdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTUgY29sLXhzLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZpZ3VyZVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGF6eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbGF6eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYmxvZy5mZWF0dXJlZF9pbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJibG9nLmZlYXR1cmVkX2ltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkIHJvdW5kZWQ2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03IGNvbC14cy03XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBcIi9ibG9nL1wiICsgX3ZtLnN0cl9lbmNvZGUoYmxvZy5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoYmxvZy50aXRsZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKGJsb2cuc2hvcnRfZGVzY3JpcHRpb24pICsgXCIuXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKVxuICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGlubmVyUm93XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW192bS5fdihcIk5vIGJsb2cgZm91bmRcIildKSxcbiAgICAgICAgICBdKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW19jKFwiaDFcIiwgW192bS5fdihcIkJsb2dcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW19jKFwiaDFcIiwgW192bS5fdihcIkJsb2dcIildKV0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1YjA5M2VlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxwcm9ncmFtbWluZ1xcXFx3YW1wNjRcXFxcd3d3XFxcXHVuaXRlZC1zY3JhcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyNWIwOTNlZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNWIwOTNlZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNWIwOTNlZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1YjA5M2VlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI1YjA5M2VlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvQmxvZy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNWIwOTNlZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=