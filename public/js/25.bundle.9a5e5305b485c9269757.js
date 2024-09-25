(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Blog/Details.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Blog/Details.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BlogDetails',
  components: {},
  data: function data() {
    return {
      has: this.$route.params.hash,
      details: '',
      more_blogs: '',
      loader: ''
    };
  },
  created: function created() {
    this.loader = this.$loading.show();
  },
  updated: function updated() {
    this.$nextTick(function () {
      this.loader.hide();
    });
  },
  beforeMount: function beforeMount() {
    this.get_details();
  },
  watch: {
    $route: {
      immediate: true,
      handler: function handler(to, from) {
        this.get_details();
      }
    }
  },
  mounted: function mounted() {},
  methods: {
    get_details: function get_details() {
      var _this = this;

      axios.get("/api/blog/" + this.str_decode(this.$route.params.hash)).then(function (response) {
        _this.details = response.data.data;

        if (!response.data.data) {
          Toast.fire({
            icon: 'error',
            title: 'Blog not exist or invalid url.'
          });

          _this.$router.push("/blog")["catch"](function () {});
        }
      });
      axios.get("/api/blog/more/" + this.str_decode(this.$route.params.hash)).then(function (_ref) {
        var data = _ref.data;
        return _this.more_blogs = data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Blog/Details.vue?vue&type=template&id=54ff7c3e&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Blog/Details.vue?vue&type=template&id=54ff7c3e& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    staticClass: "post-banner",
    style: _vm.variableBgImage("--postDetailsBanner", _vm.details.featured_image)
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("h1", [_vm._v(_vm._s(_vm.details.title))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "post-content"
  }, [_c("div", {
    staticClass: "container",
    domProps: {
      innerHTML: _vm._s(_vm.details.description)
    }
  })]), _vm._v(" "), _vm.more_blogs ? _c("div", {
    staticClass: "latest-post mt-5"
  }, [_c("div", {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._l(_vm.more_blogs, function (blog, index) {
    return _c("div", {
      key: "mb" + index,
      staticClass: "col-md-6"
    }, [_c("div", {
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
      staticClass: "img-fluid"
    })])]), _vm._v(" "), _c("div", {
      staticClass: "col-md-7 col-xs-7 pd-40"
    }, [_c("h3", [_c("router-link", {
      attrs: {
        to: "/blog/" + _vm.str_encode(blog.id)
      }
    }, [_vm._v(_vm._s(blog.title))])], 1), _vm._v(" "), _c("p", [_vm._v(_vm._s(blog.short_description) + ".")])])])]);
  }), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("router-link", {
    staticClass: "viewAll-btn btn",
    attrs: {
      to: "/blog"
    }
  }, [_vm._v("View All")])], 1)], 2)])]) : _vm._e()]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("h2", [_vm._v("You may also like to read")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/Blog/Details.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/Blog/Details.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_54ff7c3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=54ff7c3e& */ "./resources/js/pages/Blog/Details.vue?vue&type=template&id=54ff7c3e&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/pages/Blog/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_54ff7c3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_54ff7c3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Blog/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Blog/Details.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Blog/Details.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Blog/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Blog/Details.vue?vue&type=template&id=54ff7c3e&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Blog/Details.vue?vue&type=template&id=54ff7c3e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_54ff7c3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=template&id=54ff7c3e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Blog/Details.vue?vue&type=template&id=54ff7c3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_54ff7c3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_54ff7c3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0Jsb2cvRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Jsb2cvRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Jsb2cvRGV0YWlscy52dWU/NTdjYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQmxvZy9EZXRhaWxzLnZ1ZT9lMGJlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9CbG9nL0RldGFpbHMudnVlP2M5YzgiXSwibmFtZXMiOlsibmFtZSIsImNvbXBvbmVudHMiLCJkYXRhIiwiaGFzIiwiZGV0YWlscyIsIm1vcmVfYmxvZ3MiLCJsb2FkZXIiLCJjcmVhdGVkIiwidXBkYXRlZCIsImJlZm9yZU1vdW50Iiwid2F0Y2giLCIkcm91dGUiLCJpbW1lZGlhdGUiLCJoYW5kbGVyIiwidG8iLCJmcm9tIiwibW91bnRlZCIsIm1ldGhvZHMiLCJnZXRfZGV0YWlscyIsImF4aW9zIiwidGhlbiIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwic3R5bGUiLCJ2YXJpYWJsZUJnSW1hZ2UiLCJmZWF0dXJlZF9pbWFnZSIsIl92IiwiX3MiLCJkb21Qcm9wcyIsImlubmVySFRNTCIsImRlc2NyaXB0aW9uIiwiX20iLCJfbCIsImJsb2ciLCJpbmRleCIsImtleSIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwidmFsdWUiLCJleHByZXNzaW9uIiwiYXR0cnMiLCJzdHJfZW5jb2RlIiwiaWQiLCJzaG9ydF9kZXNjcmlwdGlvbiIsIl9lIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQXdEQTtBQUFlO0VBQ2ZBLG1CQURBO0VBRUFDLGNBRkE7RUFLQUMsSUFMQSxrQkFLQTtJQUNBO01BQ0FD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O0FBQXNGO0FBQzNCO0FBQ0w7OztBQUd0RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUE2TCxDQUFnQixtUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FqTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMjUuYnVuZGxlLjlhNWU1MzA1YjQ4NWM5MjY5NzU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdj5cblx0PCEtLS09PT09PT09PT09PT09PT09cG9zdC1iYW5uZXItc3RhcnQ9PT09PT09PT09PT09PT09PT09PT09PS0tLS0+XG5cdDxkaXYgY2xhc3M9XCJwb3N0LWJhbm5lclwiIDpzdHlsZT1cInZhcmlhYmxlQmdJbWFnZSgnLS1wb3N0RGV0YWlsc0Jhbm5lcicsZGV0YWlscy5mZWF0dXJlZF9pbWFnZSlcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cblx0XHRcdFx0XHQ8aDE+e3tkZXRhaWxzLnRpdGxlfX08L2gxPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblx0PCEtLS09PT09PT09PT09PT09PT09cG9zdC1iYW5uZXItZW5kPT09PT09PT09PT09PT09PT09PT09PT0tLS0tPlxuXG5cdDwhLS0tPT09PT09PT09PT09PT09PXBvc3QtY2ludGVudC1zdGFydD09PT09PT09PT09PT09PT09PT09PT09LS0tLT5cblxuXHQ8ZGl2IGNsYXNzPVwicG9zdC1jb250ZW50XCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHYtaHRtbD1cImRldGFpbHMuZGVzY3JpcHRpb25cIj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cblx0PGRpdiBjbGFzcz1cImxhdGVzdC1wb3N0IG10LTVcIiB2LWlmPVwibW9yZV9ibG9nc1wiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuXHRcdFx0XHRcdDxoMj5Zb3UgbWF5IGFsc28gbGlrZSB0byByZWFkPC9oMj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCIgdi1mb3I9XCIoYmxvZywgaW5kZXgpIGluIG1vcmVfYmxvZ3NcIiA6a2V5PVwiJ21iJytpbmRleFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgdmxpc3RHcm91cFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTUgY29sLXhzLTVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyB2LWxhenk9XCJibG9nLmZlYXR1cmVkX2ltYWdlXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNyBjb2wteHMtNyBwZC00MFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz48cm91dGVyLWxpbmsgOnRvPVwiJy9ibG9nLycrc3RyX2VuY29kZShibG9nLmlkKVwiPnt7YmxvZy50aXRsZX19PC9yb3V0ZXItbGluaz48L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDxwPnt7YmxvZy5zaG9ydF9kZXNjcmlwdGlvbn19LjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuXHRcdFx0XHRcdDxyb3V0ZXItbGluayB0bz1cIi9ibG9nXCIgY2xhc3M9XCJ2aWV3QWxsLWJ0biBidG5cIj5WaWV3IEFsbDwvcm91dGVyLWxpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG5cdDwhLS0tPT09PT09PT09PT09PT09PXBvc3QtY2ludGVudC1lbmQ9PT09PT09PT09PT09PT09PT09PT09PS0tLS0+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQmxvZ0RldGFpbHMnLFxuICAgIGNvbXBvbmVudHM6IHtcblxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhczogdGhpcy4kcm91dGUucGFyYW1zLmhhc2gsXG4gICAgICAgICAgICBkZXRhaWxzOiAnJyxcbiAgICAgICAgICAgIG1vcmVfYmxvZ3M6ICcnLFxuICAgICAgICAgICAgbG9hZGVyOiAnJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRlciA9IHRoaXMuJGxvYWRpbmcuc2hvdygpXG4gICAgfSxcbiAgICB1cGRhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGJlZm9yZU1vdW50KCkge1xuICAgICAgICB0aGlzLmdldF9kZXRhaWxzKClcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgICRyb3V0ZToge1xuICAgICAgICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgICAgICAgaGFuZGxlcih0bywgZnJvbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X2RldGFpbHMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG5cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0X2RldGFpbHMoKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQoXCIvYXBpL2Jsb2cvXCIgKyB0aGlzLnN0cl9kZWNvZGUodGhpcy4kcm91dGUucGFyYW1zLmhhc2gpKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMgPSByZXNwb25zZS5kYXRhLmRhdGFcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Jsb2cgbm90IGV4aXN0IG9yIGludmFsaWQgdXJsLidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvYmxvZ1wiKS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9ibG9nL21vcmUvXCIgKyB0aGlzLnN0cl9kZWNvZGUodGhpcy4kcm91dGUucGFyYW1zLmhhc2gpKS50aGVuKCh7XG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgfSkgPT4gKHRoaXMubW9yZV9ibG9ncyA9IGRhdGEuZGF0YSkpO1xuICAgICAgICB9XG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInBvc3QtYmFubmVyXCIsXG4gICAgICAgIHN0eWxlOiBfdm0udmFyaWFibGVCZ0ltYWdlKFxuICAgICAgICAgIFwiLS1wb3N0RGV0YWlsc0Jhbm5lclwiLFxuICAgICAgICAgIF92bS5kZXRhaWxzLmZlYXR1cmVkX2ltYWdlXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kZXRhaWxzLnRpdGxlKSldKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3N0LWNvbnRlbnRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiLFxuICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uZGV0YWlscy5kZXNjcmlwdGlvbikgfSxcbiAgICAgIH0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLm1vcmVfYmxvZ3NcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsYXRlc3QtcG9zdCBtdC01XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm1vcmVfYmxvZ3MsIGZ1bmN0aW9uIChibG9nLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogXCJtYlwiICsgaW5kZXgsIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHZsaXN0R3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC01IGNvbC14cy01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZpZ3VyZVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsYXp5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWxhenlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYmxvZy5mZWF0dXJlZF9pbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJsb2cuZmVhdHVyZWRfaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03IGNvbC14cy03IHBkLTQwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImgzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogXCIvYmxvZy9cIiArIF92bS5zdHJfZW5jb2RlKGJsb2cuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGJsb2cudGl0bGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhibG9nLnNob3J0X2Rlc2NyaXB0aW9uKSArIFwiLlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidmlld0FsbC1idG4gYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvYmxvZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVmlldyBBbGxcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiWW91IG1heSBhbHNvIGxpa2UgdG8gcmVhZFwiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NGZmN2MzZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU0ZmY3YzNlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU0ZmY3YzNlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU0ZmY3YzNlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NGZmN2MzZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NGZmN2MzZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL0Jsb2cvRGV0YWlscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NGZmN2MzZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=