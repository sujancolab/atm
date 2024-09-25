(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["default"] = ({
  name: "userlist",
  data: function data() {
    return {
      editmode: false,
      ulist: "",
      users: {},
      form: new Form({
        id: '',
        type: '',
        name: '',
        email: '',
        password: '',
        email_verified_at: ''
      })
    };
  },
  methods: {
    getResults: function getResults() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.$Progress.start();
      axios.get('api/user?page=' + page).then(function (_ref) {
        var data = _ref.data;
        return _this.users = data.data;
      });
      this.$Progress.finish();
    },
    deleteUser: function deleteUser(id) {
      var _this2 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        // Send request to the server
        if (result.value) {
          _this2.form["delete"]('api/user/' + id).then(function () {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success'); // Fire.$emit('AfterCreate');

            _this2.loadUsers();
          })["catch"](function (data) {
            Swal.fire("Failed!", data.message, "warning");
          });
        }
      });
    },
    loadUsers: function loadUsers() {
      var _this3 = this;

      this.$Progress.start(); // if(this.$gate.isAdmin()){
      // axios.get("api/user").then(({ data }) => (this.users = data));  

      axios.get("api/user").then(function (res) {
        _this3.ulist = res.data.data;
        console.log(_this3.ulist);
      })["catch"](function (err) {
        console.log(err);
      }); //            }

      console.log(this.ulist);
      this.$Progress.finish();
    },
    createUser: function createUser() {
      var _this4 = this;

      this.form.post('api/user').then(function (response) {
        $('#addNew').modal('hide');
        Toast.fire({
          icon: 'success',
          title: response.data.message
        });

        _this4.$Progress.finish();

        _this4.loadUsers();
      })["catch"](function () {
        Toast.fire({
          icon: 'error',
          title: 'Some error occured! Please try again'
        });
      });
    }
  },
  mounted: function mounted() {
    console.log('User Component mounted.');
  },
  created: function created() {
    this.$Progress.start();
    this.loadUsers();
    this.$Progress.finish();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/index.vue?vue&type=template&id=7e55c8e0&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/index.vue?vue&type=template&id=7e55c8e0& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_vm._m(0), _vm._v(" "), _c("section", {
    staticClass: "content"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "card box-black"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "bottom-box-header"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "pull-right"
  }, [_c("router-link", {
    staticClass: "btn link1",
    attrs: {
      to: "/user/add"
    }
  }, [_c("span", [_c("i", {
    staticClass: "fa fa-plus-square-o",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" Add User ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "tablesection"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-striped table-hover"
  }, [_vm._m(4), _vm._v(" "), _vm.ulist && _vm.ulist.data ? _c("tbody", _vm._l(_vm.ulist.data, function (ua, x) {
    return _c("tr", {
      key: ua.id
    }, [_c("td", {
      attrs: {
        align: "center"
      }
    }, [_vm._v(_vm._s(x + 1))]), _vm._v(" "), _c("td", [_c("router-link", {
      staticClass: "text-green",
      attrs: {
        to: "/user/edit/" + ua.id
      }
    }, [_vm._v(_vm._s(ua.name))])], 1), _vm._v(" "), _c("td", [_vm._v(_vm._s(ua.phone))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(ua.email))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(ua.organization))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(ua.type))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge bg-green"
    }, [_vm._v(_vm._s(ua.status))])])]);
  }), 0) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "paginationsectionbox"
  }, [_vm.ulist && _vm.ulist.data ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-5 col-lg-5"
  }, [_c("div", {
    staticClass: "Showingboxto1"
  }, [_vm._v("Showing 1 to 18 of " + _vm._s(_vm.ulist.last_page) + " results")])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-7 col-lg-7"
  }, [_c("div", {
    staticClass: "Showingboxto2"
  }, [_c("ul", _vm._l(_vm.ulist.links, function (links, index) {
    return _c("li", {
      key: index,
      staticClass: "paginate_button",
      "class": {
        "active disabled": links.active,
        disabled: !links.url
      }
    }, [_c("a", {
      attrs: {
        href: "javascript:void(0);"
      },
      domProps: {
        innerHTML: _vm._s(links.label)
      }
    })]);
  }), 0)])])]) : _vm._e()])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", {
    staticClass: "content-header"
  }, [_c("h1", [_vm._v("Users")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "card box-warning"
  }, [_c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("User Search")])]), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Name")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Enter Name ..."
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Phone No.")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "tel",
      placeholder: "Enter Phone No. ..."
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Email")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "email",
      placeholder: "Enter Email ..."
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Organisation")]), _vm._v(" "), _c("select", {
    staticClass: "form-control"
  }, [_c("option", [_vm._v("option 1")]), _vm._v(" "), _c("option", [_vm._v("option 2")]), _vm._v(" "), _c("option", [_vm._v("option 3")]), _vm._v(" "), _c("option", [_vm._v("option 4")]), _vm._v(" "), _c("option", [_vm._v("option 5")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Role")]), _vm._v(" "), _c("select", {
    staticClass: "form-control"
  }, [_c("option", [_vm._v("option 1")]), _vm._v(" "), _c("option", [_vm._v("option 2")]), _vm._v(" "), _c("option", [_vm._v("option 3")]), _vm._v(" "), _c("option", [_vm._v("option 4")]), _vm._v(" "), _c("option", [_vm._v("option 5")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticStyle: {
      display: "block"
    }
  }, [_vm._v("    ")]), _vm._v(" "), _c("button", {
    staticClass: "btn link1",
    attrs: {
      type: "button"
    }
  }, [_vm._v("Filter")])])])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title card-text"
  }, [_vm._v("Users Table")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "pull-left"
  }, [_c("div", {
    staticClass: "Showingbox"
  }, [_c("span", {
    staticClass: "pull-left"
  }, [_vm._v("Showing ")]), _vm._v(" "), _c("div", {
    staticClass: "pull-left drop"
  }, [_c("select", {
    staticClass: "form-control"
  }, [_c("option", {
    attrs: {
      value: "25"
    }
  }, [_vm._v("25")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "50"
    }
  }, [_vm._v("50")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "100"
    }
  }, [_vm._v("100")])])]), _vm._v(" "), _c("span", {
    staticClass: "pull-left"
  }, [_vm._v("entries ")]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      width: "70"
    }
  }, [_vm._v("Sl No.")]), _vm._v(" "), _c("th", [_vm._v("Name ")]), _vm._v(" "), _c("th", [_vm._v("Phone No.")]), _vm._v(" "), _c("th", [_vm._v("Email")]), _vm._v(" "), _c("th", [_vm._v("Organisation.")]), _vm._v(" "), _c("th", [_vm._v("Role")]), _vm._v(" "), _c("th", [_vm._v("Status ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/users/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/users/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7e55c8e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7e55c8e0& */ "./resources/js/components/users/index.vue?vue&type=template&id=7e55c8e0&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7e55c8e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7e55c8e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/users/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/index.vue?vue&type=template&id=7e55c8e0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/users/index.vue?vue&type=template&id=7e55c8e0& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e55c8e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7e55c8e0& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/index.vue?vue&type=template&id=7e55c8e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e55c8e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e55c8e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9pbmRleC52dWU/MzczYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9pbmRleC52dWU/ZTNjNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9pbmRleC52dWU/MjkyMCJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsImVkaXRtb2RlIiwidWxpc3QiLCJ1c2VycyIsImZvcm0iLCJpZCIsInR5cGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZW1haWxfdmVyaWZpZWRfYXQiLCJtZXRob2RzIiwiZ2V0UmVzdWx0cyIsImF4aW9zIiwiZGVsZXRlVXNlciIsIlN3YWwiLCJ0aXRsZSIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJsb2FkVXNlcnMiLCJjb25zb2xlIiwiY3JlYXRlVXNlciIsIiQiLCJUb2FzdCIsImljb24iLCJtb3VudGVkIiwiY3JlYXRlZCIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJfbSIsIl92Iiwic3RhdGljQ2xhc3MiLCJhdHRycyIsInRvIiwiX2wiLCJ1YSIsIngiLCJrZXkiLCJhbGlnbiIsIl9zIiwicGhvbmUiLCJvcmdhbml6YXRpb24iLCJzdGF0dXMiLCJfZSIsImxhc3RfcGFnZSIsImxpbmtzIiwiaW5kZXgiLCJhY3RpdmUiLCJkaXNhYmxlZCIsInVybCIsImhyZWYiLCJkb21Qcm9wcyIsImlubmVySFRNTCIsImxhYmVsIiwic3RhdGljUmVuZGVyRm5zIiwicGxhY2Vo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QUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMS5idW5kbGUuNjdkM2EzZjZjNTdmYTcxZjI2MDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjxkaXY+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgIDxoMT5Vc2VyczwvaDE+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LXdhcm5pbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlVzZXIgU2VhcmNoPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE5hbWUgLi4uXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UGhvbmUgTm8uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFBob25lIE5vLiAuLi5cIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsIC4uLlwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk9yZ2FuaXNhdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+b3B0aW9uIDE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5vcHRpb24gMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPm9wdGlvbiAzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+b3B0aW9uIDQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5vcHRpb24gNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Um9sZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+b3B0aW9uIDE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5vcHRpb24gMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPm9wdGlvbiAzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+b3B0aW9uIDQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5vcHRpb24gNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj4gJm5ic3A7Jm5ic3A7IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBsaW5rMVwiPkZpbHRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm94LWJsYWNrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZSBjYXJkLXRleHRcIj5Vc2VycyBUYWJsZTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbS1ib3gtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJTaG93aW5nYm94XCI+IDxzcGFuIGNsYXNzPVwicHVsbC1sZWZ0XCI+U2hvd2luZyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdCBkcm9wXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyNVwiPjI1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MFwiPjUwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDBcIj4xMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHVsbC1sZWZ0XCI+ZW50cmllcyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiPiA8cm91dGVyLWxpbmsgdG89XCIvdXNlci9hZGRcIiBjbGFzcz1cImJ0biBsaW5rMVwiPiA8c3Bhbj48aSBjbGFzcz1cImZhIGZhLXBsdXMtc3F1YXJlLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDwvc3Bhbj4gQWRkIFVzZXIgPC9yb3V0ZXItbGluaz48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIiB3aWR0aD1cIjcwXCI+U2wgTm8uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZSA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5QaG9uZSBOby48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk9yZ2FuaXNhdGlvbi48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx0Ym9keSB2LWlmPVwidWxpc3QgJiYgdWxpc3QuZGF0YVwiPiBcclxuICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKHVhLHgpIGluIHVsaXN0LmRhdGFcIiA6a2V5PVwidWEuaWRcIiA+IFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPnt7eCsxfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwiJy91c2VyL2VkaXQvJyt1YS5pZFwiIGNsYXNzPVwidGV4dC1ncmVlblwiPnt7dWEubmFtZX19PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3VhLnBob25lfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3VhLmVtYWlsfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3VhLm9yZ2FuaXphdGlvbn19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t1YS50eXBlfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzcz1cImJhZGdlICBiZy1ncmVlblwiPnt7dWEuc3RhdHVzfX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbnNlY3Rpb25ib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJ1bGlzdCAmJiB1bGlzdC5kYXRhXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTUgY29sLWxnLTVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJTaG93aW5nYm94dG8xXCI+U2hvd2luZyAxIHRvIDE4IG9mIHt7IHVsaXN0Lmxhc3RfcGFnZSB9fSByZXN1bHRzPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTcgY29sLWxnLTdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJTaG93aW5nYm94dG8yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnaW5hdGVfYnV0dG9uXCIgdi1mb3I9XCIobGlua3MsIGluZGV4KSBpbiB1bGlzdC5saW5rc1wiIDprZXk9XCJpbmRleFwiIDpjbGFzcz1cInsnYWN0aXZlIGRpc2FibGVkJzpsaW5rcy5hY3RpdmUsICdkaXNhYmxlZCc6IWxpbmtzLnVybH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiB2LWh0bWw9XCJsaW5rcy5sYWJlbFwiID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuIFxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgbmFtZTpcInVzZXJsaXN0XCIsXHJcbiAgICAgICAgZGF0YSAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlZGl0bW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1bGlzdDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgdXNlcnMgOiB7fSxcclxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcclxuICAgICAgICAgICAgICAgICAgICBpZCA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsX3ZlcmlmaWVkX2F0OiAnJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgICAgIGdldFJlc3VsdHMocGFnZSA9IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBheGlvcy5nZXQoJ2FwaS91c2VyP3BhZ2U9JyArIHBhZ2UpLnRoZW4oKHsgZGF0YSB9KSA9PiAodGhpcy51c2VycyA9IGRhdGEuZGF0YSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiBcclxuICAgICAgICAgICAgZGVsZXRlVXNlcihpZCl7XHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyFcIixcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyNkMzMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdZZXMsIGRlbGV0ZSBpdCEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZW5kIHJlcXVlc3QgdG8gdGhlIHNlcnZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5kZWxldGUoJ2FwaS91c2VyLycraWQpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZWxldGVkIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWW91ciBmaWxlIGhhcyBiZWVuIGRlbGV0ZWQuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZS4kZW1pdCgnQWZ0ZXJDcmVhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVXNlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXCJGYWlsZWQhXCIsIGRhdGEubWVzc2FnZSwgXCJ3YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgbG9hZFVzZXJzKCl7XHJcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7IFxyXG4gICAgICAgICAgIC8vIGlmKHRoaXMuJGdhdGUuaXNBZG1pbigpKXtcclxuICAgICAgICAgICAgIC8vIGF4aW9zLmdldChcImFwaS91c2VyXCIpLnRoZW4oKHsgZGF0YSB9KSA9PiAodGhpcy51c2VycyA9IGRhdGEpKTsgIFxyXG5cclxuICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL3VzZXJcIilcclxuICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWxpc3QgPSByZXMuZGF0YS5kYXRhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudWxpc3QgKSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudWxpc3QpXHJcblxyXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNyZWF0ZVVzZXIoKXtcclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5mb3JtLnBvc3QoJ2FwaS91c2VyJylcclxuICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhZGROZXcnKS5tb2RhbCgnaGlkZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmxvYWRVc2VycygpO1xyXG5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTb21lIGVycm9yIG9jY3VyZWQhIFBsZWFzZSB0cnkgYWdhaW4nXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgQ29tcG9uZW50IG1vdW50ZWQuJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRVc2VycygpO1xyXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICBfdm0uX20oMSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGJveC1ibGFja1wiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbS1ib3gtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1yaWdodFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMVwiLCBhdHRyczogeyB0bzogXCIvdXNlci9hZGRcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1wbHVzLXNxdWFyZS1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEFkZCBVc2VyIFwiKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVzZWN0aW9uXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oNCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0udWxpc3QgJiYgX3ZtLnVsaXN0LmRhdGFcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udWxpc3QuZGF0YSwgZnVuY3Rpb24gKHVhLCB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogdWEuaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh4ICsgMSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IFwiL3VzZXIvZWRpdC9cIiArIHVhLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVhLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModWEucGhvbmUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVhLmVtYWlsKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1YS5vcmdhbml6YXRpb24pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVhLnR5cGUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiZy1ncmVlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModWEuc3RhdHVzKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb25zZWN0aW9uYm94XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLnVsaXN0ICYmIF92bS51bGlzdC5kYXRhXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC01IGNvbC1sZy01XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiU2hvd2luZ2JveHRvMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTaG93aW5nIDEgdG8gMTggb2YgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udWxpc3QubGFzdF9wYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgcmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTcgY29sLWxnLTdcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJTaG93aW5nYm94dG8yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS51bGlzdC5saW5rcywgZnVuY3Rpb24gKGxpbmtzLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGVfYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmUgZGlzYWJsZWRcIjogbGlua3MuYWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhbGlua3MudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKTtcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKGxpbmtzLmxhYmVsKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlVzZXJzXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGJveC13YXJuaW5nXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIGNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJVc2VyIFNlYXJjaFwiKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIE5hbWUgLi4uXCIgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiUGhvbmUgTm8uXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGVsXCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIFBob25lIE5vLiAuLi5cIiB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIEVtYWlsIC4uLlwiIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIk9yZ2FuaXNhdGlvblwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNlbGVjdFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwib3B0aW9uIDFcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJvcHRpb24gMlwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcIm9wdGlvbiAzXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwib3B0aW9uIDRcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJvcHRpb24gNVwiKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJSb2xlXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic2VsZWN0XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJvcHRpb24gMVwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcIm9wdGlvbiAyXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwib3B0aW9uIDNcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJvcHRpb24gNFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcIm9wdGlvbiA1XCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNTdHlsZTogeyBkaXNwbGF5OiBcImJsb2NrXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIMKgwqAgXCIpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBsaW5rMVwiLCBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRmlsdGVyXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSBjYXJkLXRleHRcIiB9LCBbX3ZtLl92KFwiVXNlcnMgVGFibGVcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiU2hvd2luZ2JveFwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIgfSwgW192bS5fdihcIlNob3dpbmcgXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0IGRyb3BcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzZWxlY3RcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIiB9LCBbXG4gICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjI1XCIgfSB9LCBbX3ZtLl92KFwiMjVcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjUwXCIgfSB9LCBbX3ZtLl92KFwiNTBcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjEwMFwiIH0gfSwgW192bS5fdihcIjEwMFwiKV0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIgfSwgW192bS5fdihcImVudHJpZXMgXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9KSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiIH0sIGF0dHJzOiB7IHdpZHRoOiBcIjcwXCIgfSB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJTbCBOby5cIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWUgXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlBob25lIE5vLlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJPcmdhbmlzYXRpb24uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJvbGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU3RhdHVzIFwiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U1NWM4ZTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXHByb2dyYW1taW5nXFxcXHdhbXA2NFxcXFx3d3dcXFxcdW5pdGVkLXNjcmFwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdlNTVjOGUwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdlNTVjOGUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdlNTVjOGUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U1NWM4ZTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2U1NWM4ZTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlNTVjOGUwJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==