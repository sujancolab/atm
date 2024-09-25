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
    updateUser: function updateUser() {
      var _this2 = this;

      this.$Progress.start(); // console.log('Editing data');

      this.form.put('api/user/' + this.form.id).then(function (response) {
        // success
        $('#addNew').modal('hide');
        Toast.fire({
          icon: 'success',
          title: response.data.message
        });

        _this2.$Progress.finish(); //  Fire.$emit('AfterCreate');


        _this2.loadUsers();
      })["catch"](function () {
        _this2.$Progress.fail();
      });
    },
    editModal: function editModal(user) {
      this.editmode = true;
      this.form.reset();
      $('#addNew').modal('show');
      this.form.fill(user);
    },
    newModal: function newModal() {
      this.editmode = false;
      this.form.reset();
      $('#addNew').modal('show');
    },
    deleteUser: function deleteUser(id) {
      var _this3 = this;

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
          _this3.form["delete"]('api/user/' + id).then(function () {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success'); // Fire.$emit('AfterCreate');

            _this3.loadUsers();
          })["catch"](function (data) {
            Swal.fire("Failed!", data.message, "warning");
          });
        }
      });
    },
    loadUsers: function loadUsers() {
      var _this4 = this;

      this.$Progress.start();

      if (this.$gate.isAdmin()) {
        axios.get("api/user").then(function (_ref2) {
          var data = _ref2.data;
          return _this4.users = data;
        });
        axios.get("api/user").then(function (res) {
          _this4.users = res.data.data;
        })["catch"](function (err) {
          console.log(err);
        });
      }

      console.log(this.users);
      this.$Progress.finish();
    },
    createUser: function createUser() {
      var _this5 = this;

      this.form.post('api/user').then(function (response) {
        $('#addNew').modal('hide');
        Toast.fire({
          icon: 'success',
          title: response.data.message
        });

        _this5.$Progress.finish();

        _this5.loadUsers();
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
  }, [_vm._m(4), _vm._v("\r\n\r\n                " + _vm._s(_vm.users) + "\r\n                "), _vm.users && _vm.users.data ? _c("tbody", _vm._l(_vm.users.data, function (user) {
    return _c("tr", {
      key: user.id
    }, [_c("td", {
      attrs: {
        align: "center"
      }
    }, [_vm._v("01")]), _vm._v(" "), _c("td", [_c("a", {
      staticClass: "text-green",
      attrs: {
        href: "update-user.html"
      }
    }, [_vm._v(_vm._s(user.name))])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(user.phone))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(user.email))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(user.organization))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(user.type))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge bg-green"
    }, [_vm._v(_vm._s(user.status))])])]);
  }), 0) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "paginationsectionbox"
  }, [_vm.users && _vm.users.data ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-5 col-lg-5"
  }, [_c("div", {
    staticClass: "Showingboxto1"
  }, [_vm._v("Showing 1 to 18 of " + _vm._s(_vm.user.last_page) + " results")])]), _vm._v(" "), _c("div", {
    staticClass: "col-xs-12 col-sm-12 col-md-7 col-lg-7"
  }, [_c("div", {
    staticClass: "Showingboxto2"
  }, [_c("ul", _vm._l(_vm.user.links, function (links, index) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXJzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9pbmRleC52dWU/MzczYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9pbmRleC52dWU/ZTNjNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2Vycy9pbmRleC52dWU/MjkyMCJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsImVkaXRtb2RlIiwidXNlcnMiLCJmb3JtIiwiaWQiLCJ0eXBlIiwiZW1haWwiLCJwYXNzd29yZCIsImVtYWlsX3ZlcmlmaWVkX2F0IiwibWV0aG9kcyIsImdldFJlc3VsdHMiLCJheGlvcyIsInVwZGF0ZVVzZXIiLCJ0aGVuIiwiJCIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwiZWRpdE1vZGFsIiwidXNlciIsIm5ld01vZGFsIiwiZGVsZXRlVXNlciIsIlN3YWwiLCJ0ZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJsb2FkVXNlcnMiLCJjb25zb2xlIiwiY3JlYXRlVXNlciIsIm1vdW50ZWQiLCJjcmVhdGVkIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsIl9tIiwiX3YiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwidG8iLCJfcyIsIl9sIiwia2V5IiwiYWxpZ24iLCJocmVmIiwicGhvbmUiLCJvcmdhbml6YXRpb24iLCJzdGF0dXMiLCJfZSIsImxhc3RfcGFnZSIsImxpbmtzIiwiaW5kZXgiLCJhY3RpdmUiLCJkaXNhYmxlZCIsInVybCIsImRvbVByb3BzIiwiaW5uZXJIVE1MIiwibGFiZWwiLCJzdGF0aWNSZW5kZXJGbnMiLCJwbGFjZWhvbGRlciIsInN0YXRpY1N0eWxlIiwiZGlzcGxheSIsInZhbHVlIiwid2lkdGgiLCJfd2l0aFN0cmlwcGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBNklBO0FBQUE7RUFDQUEsZ0JBREE7RUFFQUMsSUFGQSxrQkFFQTtJQUNBO01BQ0FDLGVBREE7TUFFQUMsU0FGQTtNQUdBQztRQUNBQyxNQURBO1FBRUFDLFFBRkE7UUFHQU4sUUFIQTtRQUlBTyxTQUpBO1FBS0FDLFlBTEE7UUFNQUM7TUFOQTtJQUhBO0VBWUEsQ0FmQTtFQWdCQUM7SUFFQUMsVUFGQSx3QkFFQTtNQUFBOztNQUFBO01BRUE7TUFFQUM7UUFBQTtRQUFBO01BQUE7TUFFQTtJQUNBLENBVEE7SUFVQUMsVUFWQSx3QkFVQTtNQUFBOztNQUNBLHVCQURBLENBRUE7O01BQ0EsMENBQ0FDLElBREEsQ0FDQTtRQUNBO1FBQ0FDO1FBQ0FDO1VBQ0FDLGVBREE7VUFFQUM7UUFGQTs7UUFJQSwwQkFQQSxDQVFBOzs7UUFFQTtNQUNBLENBWkEsV0FhQTtRQUNBO01BQ0EsQ0FmQTtJQWlCQSxDQTlCQTtJQStCQUMsU0EvQkEscUJBK0JBQyxJQS9CQSxFQStCQTtNQUNBO01BQ0E7TUFDQUw7TUFDQTtJQUNBLENBcENBO0lBcUNBTSxRQXJDQSxzQkFxQ0E7TUFDQTtNQUNBO01BQ0FOO0lBQ0EsQ0F6Q0E7SUEwQ0FPLFVBMUNBLHNCQTBDQWpCLEVBMUNBLEVBMENBO01BQUE7O01BQ0FrQjtRQUNBTCxzQkFEQTtRQUVBTSx5Q0FGQTtRQUdBQyxzQkFIQTtRQUlBQywwQkFKQTtRQUtBQyw0QkFMQTtRQU1BQztNQU5BLEdBT0FkLElBUEEsQ0FPQTtRQUVBO1FBQ0E7VUFDQTtZQUNBUyxVQUNBLFVBREEsRUFFQSw2QkFGQSxFQUdBLFNBSEEsRUFEQSxDQU1BOztZQUNBO1VBQ0EsQ0FSQSxXQVFBO1lBQ0FBO1VBQ0EsQ0FWQTtRQVdBO01BQ0EsQ0F2QkE7SUF3QkEsQ0FuRUE7SUFvRUFNLFNBcEVBLHVCQW9FQTtNQUFBOztNQUNBOztNQUNBO1FBQ0FqQjtVQUFBO1VBQUE7UUFBQTtRQUdBQSxzQkFDQUUsSUFEQSxDQUNBO1VBRUE7UUFFQSxDQUxBLFdBTUE7VUFDQWdCO1FBQ0EsQ0FSQTtNQVdBOztNQUNBQTtNQUVBO0lBQ0EsQ0F6RkE7SUEyRkFDLFVBM0ZBLHdCQTJGQTtNQUFBOztNQUVBLDJCQUNBakIsSUFEQSxDQUNBO1FBQ0FDO1FBRUFDO1VBQ0FDLGVBREE7VUFFQUM7UUFGQTs7UUFLQTs7UUFDQTtNQUVBLENBWkEsV0FhQTtRQUVBRjtVQUNBQyxhQURBO1VBRUFDO1FBRkE7TUFJQSxDQW5CQTtJQW9CQTtFQWpIQSxDQWhCQTtFQW9JQWMsT0FwSUEscUJBb0lBO0lBQ0FGO0VBQ0EsQ0F0SUE7RUF1SUFHLE9BdklBLHFCQXVJQTtJQUVBO0lBQ0E7SUFDQTtFQUNBO0FBNUlBLEc7Ozs7Ozs7Ozs7Ozs7QUM3SUE7QUFBQTtBQUFBO0FBQUEsSUFBSUMsTUFBTSxHQUFHLFNBQVNBLE1BQVQsR0FBa0I7RUFDN0IsSUFBSUMsR0FBRyxHQUFHLElBQVY7RUFBQSxJQUNFQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxFQURqQjs7RUFFQSxPQUFPQSxFQUFFLENBQUMsS0FBRCxFQUFRLENBQ2ZELEdBQUcsQ0FBQ0csRUFBSixDQUFPLENBQVAsQ0FEZSxFQUVmSCxHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBRmUsRUFHZkgsRUFBRSxDQUFDLFNBQUQsRUFBWTtJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFaLEVBQXdDLENBQ3hDTCxHQUFHLENBQUNHLEVBQUosQ0FBTyxDQUFQLENBRHdDLEVBRXhDSCxHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBRndDLEVBR3hDSCxFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBMkMsQ0FDM0NMLEdBQUcsQ0FBQ0csRUFBSixDQUFPLENBQVAsQ0FEMkMsRUFFM0NILEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FGMkMsRUFHM0NILEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUksV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUE4QyxDQUM5Q0wsR0FBRyxDQUFDRyxFQUFKLENBQU8sQ0FBUCxDQUQ4QyxFQUU5Q0gsR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUY4QyxFQUc5Q0gsRUFBRSxDQUNBLEtBREEsRUFFQTtJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUZBLEVBR0EsQ0FDRUosRUFBRSxDQUNBLGFBREEsRUFFQTtJQUFFSSxXQUFXLEVBQUUsV0FBZjtJQUE0QkMsS0FBSyxFQUFFO01BQUVDLEVBQUUsRUFBRTtJQUFOO0VBQW5DLENBRkEsRUFHQSxDQUNFTixFQUFFLENBQUMsTUFBRCxFQUFTLENBQ1RBLEVBQUUsQ0FBQyxHQUFELEVBQU07SUFDTkksV0FBVyxFQUFFLHFCQURQO0lBRU5DLEtBQUssRUFBRTtNQUFFLGVBQWU7SUFBakI7RUFGRCxDQUFOLENBRE8sQ0FBVCxDQURKLEVBT0VOLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFlBQVAsQ0FQRixDQUhBLENBREosQ0FIQSxFQWtCQSxDQWxCQSxDQUg0QyxFQXVCOUNKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0F2QjhDLEVBd0I5Q0gsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFSLENBeEI0QyxDQUE5QyxDQUh5QyxFQTZCM0NMLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0E3QjJDLEVBOEIzQ0gsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQXFDLENBQ3JDSixFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBeUMsQ0FDekNKLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUksV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUE2QyxDQUM3Q0osRUFBRSxDQUFDLE9BQUQsRUFBVTtJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFWLEVBQThELENBQzlETCxHQUFHLENBQUNHLEVBQUosQ0FBTyxDQUFQLENBRDhELEVBRTlESCxHQUFHLENBQUNJLEVBQUosQ0FDRSw2QkFDRUosR0FBRyxDQUFDUSxFQUFKLENBQU9SLEdBQUcsQ0FBQ2hDLEtBQVgsQ0FERixHQUVFLHNCQUhKLENBRjhELEVBTzlEZ0MsR0FBRyxDQUFDaEMsS0FBSixJQUFhZ0MsR0FBRyxDQUFDaEMsS0FBSixDQUFVRixJQUF2QixHQUNJbUMsRUFBRSxDQUNBLE9BREEsRUFFQUQsR0FBRyxDQUFDUyxFQUFKLENBQU9ULEdBQUcsQ0FBQ2hDLEtBQUosQ0FBVUYsSUFBakIsRUFBdUIsVUFBVW1CLElBQVYsRUFBZ0I7SUFDckMsT0FBT2dCLEVBQUUsQ0FBQyxJQUFELEVBQU87TUFBRVMsR0FBRyxFQUFFekIsSUFBSSxDQUFDZjtJQUFaLENBQVAsRUFBeUIsQ0FDaEMrQixFQUFFLENBQUMsSUFBRCxFQUFPO01BQUVLLEtBQUssRUFBRTtRQUFFSyxLQUFLLEVBQUU7TUFBVDtJQUFULENBQVAsRUFBdUMsQ0FDdkNYLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLElBQVAsQ0FEdUMsQ0FBdkMsQ0FEOEIsRUFJaENKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FKZ0MsRUFLaENILEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FDUEEsRUFBRSxDQUNBLEdBREEsRUFFQTtNQUNFSSxXQUFXLEVBQUUsWUFEZjtNQUVFQyxLQUFLLEVBQUU7UUFBRU0sSUFBSSxFQUFFO01BQVI7SUFGVCxDQUZBLEVBTUEsQ0FBQ1osR0FBRyxDQUFDSSxFQUFKLENBQU9KLEdBQUcsQ0FBQ1EsRUFBSixDQUFPdkIsSUFBSSxDQUFDcEIsSUFBWixDQUFQLENBQUQsQ0FOQSxDQURLLENBQVAsQ0FMOEIsRUFlaENtQyxHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBZmdDLEVBZ0JoQ0gsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBT0osR0FBRyxDQUFDUSxFQUFKLENBQU92QixJQUFJLENBQUM0QixLQUFaLENBQVAsQ0FBRCxDQUFQLENBaEI4QixFQWlCaENiLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FqQmdDLEVBa0JoQ0gsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBT0osR0FBRyxDQUFDUSxFQUFKLENBQU92QixJQUFJLENBQUNiLEtBQVosQ0FBUCxDQUFELENBQVAsQ0FsQjhCLEVBbUJoQzRCLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FuQmdDLEVBb0JoQ0gsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBT0osR0FBRyxDQUFDUSxFQUFKLENBQU92QixJQUFJLENBQUM2QixZQUFaLENBQVAsQ0FBRCxDQUFQLENBcEI4QixFQXFCaENkLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FyQmdDLEVBc0JoQ0gsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBT0osR0FBRyxDQUFDUSxFQUFKLENBQU92QixJQUFJLENBQUNkLElBQVosQ0FBUCxDQUFELENBQVAsQ0F0QjhCLEVBdUJoQzZCLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0F2QmdDLEVBd0JoQ0gsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUNQQSxFQUFFLENBQUMsTUFBRCxFQUFTO01BQUVJLFdBQVcsRUFBRTtJQUFmLENBQVQsRUFBNEMsQ0FDNUNMLEdBQUcsQ0FBQ0ksRUFBSixDQUFPSixHQUFHLENBQUNRLEVBQUosQ0FBT3ZCLElBQUksQ0FBQzhCLE1BQVosQ0FBUCxDQUQ0QyxDQUE1QyxDQURLLENBQVAsQ0F4QjhCLENBQXpCLENBQVQ7RUE4QkQsQ0EvQkQsQ0FGQSxFQWtDQSxDQWxDQSxDQUROLEdBcUNJZixHQUFHLENBQUNnQixFQUFKLEVBNUMwRCxDQUE5RCxDQUQyQyxDQUE3QyxDQUR1QyxDQUF6QyxDQURtQyxFQW1EckNoQixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBbkRxQyxFQW9EckNILEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUksV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUFpRCxDQUNqREwsR0FBRyxDQUFDaEMsS0FBSixJQUFhZ0MsR0FBRyxDQUFDaEMsS0FBSixDQUFVRixJQUF2QixHQUNJbUMsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQWdDLENBQ2hDSixFQUFFLENBQ0EsS0FEQSxFQUVBO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBRkEsRUFHQSxDQUNFSixFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBMEMsQ0FDMUNMLEdBQUcsQ0FBQ0ksRUFBSixDQUNFLHdCQUNFSixHQUFHLENBQUNRLEVBQUosQ0FBT1IsR0FBRyxDQUFDZixJQUFKLENBQVNnQyxTQUFoQixDQURGLEdBRUUsVUFISixDQUQwQyxDQUExQyxDQURKLENBSEEsQ0FEOEIsRUFjaENqQixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBZGdDLEVBZWhDSCxFQUFFLENBQ0EsS0FEQSxFQUVBO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBRkEsRUFHQSxDQUNFSixFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBMEMsQ0FDMUNKLEVBQUUsQ0FDQSxJQURBLEVBRUFELEdBQUcsQ0FBQ1MsRUFBSixDQUFPVCxHQUFHLENBQUNmLElBQUosQ0FBU2lDLEtBQWhCLEVBQXVCLFVBQVVBLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO0lBQzdDLE9BQU9sQixFQUFFLENBQ1AsSUFETyxFQUVQO01BQ0VTLEdBQUcsRUFBRVMsS0FEUDtNQUVFZCxXQUFXLEVBQUUsaUJBRmY7TUFHRSxTQUFPO1FBQ0wsbUJBQW1CYSxLQUFLLENBQUNFLE1BRHBCO1FBRUxDLFFBQVEsRUFBRSxDQUFDSCxLQUFLLENBQUNJO01BRlo7SUFIVCxDQUZPLEVBVVAsQ0FDRXJCLEVBQUUsQ0FBQyxHQUFELEVBQU07TUFDTkssS0FBSyxFQUFFO1FBQUVNLElBQUksRUFBRTtNQUFSLENBREQ7TUFFTlcsUUFBUSxFQUFFO1FBQUVDLFNBQVMsRUFBRXhCLEdBQUcsQ0FBQ1EsRUFBSixDQUFPVSxLQUFLLENBQUNPLEtBQWI7TUFBYjtJQUZKLENBQU4sQ0FESixDQVZPLENBQVQ7RUFpQkQsQ0FsQkQsQ0FGQSxFQXFCQSxDQXJCQSxDQUR3QyxDQUExQyxDQURKLENBSEEsQ0FmOEIsQ0FBaEMsQ0FETixHQWdESXpCLEdBQUcsQ0FBQ2dCLEVBQUosRUFqRDZDLENBQWpELENBcERtQyxDQUFyQyxDQTlCeUMsQ0FBM0MsQ0FIc0MsQ0FBeEMsQ0FIYSxDQUFSLENBQVQ7QUErSUQsQ0FsSkQ7O0FBbUpBLElBQUlVLGVBQWUsR0FBRyxDQUNwQixZQUFZO0VBQ1YsSUFBSTFCLEdBQUcsR0FBRyxJQUFWO0VBQUEsSUFDRUMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVUQsRUFEakI7O0VBRUEsT0FBT0EsRUFBRSxDQUFDLFNBQUQsRUFBWTtJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFaLEVBQStDLENBQ3RESixFQUFFLENBQUMsSUFBRCxFQUFPLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLE9BQVAsQ0FBRCxDQUFQLENBRG9ELENBQS9DLENBQVQ7QUFHRCxDQVBtQixFQVFwQixZQUFZO0VBQ1YsSUFBSUosR0FBRyxHQUFHLElBQVY7RUFBQSxJQUNFQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxFQURqQjs7RUFFQSxPQUFPQSxFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBNkMsQ0FDcERKLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUksV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUFtRCxDQUNuREosRUFBRSxDQUFDLElBQUQsRUFBTztJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFQLEVBQStDLENBQy9DTCxHQUFHLENBQUNJLEVBQUosQ0FBTyxhQUFQLENBRCtDLENBQS9DLENBRGlELENBQW5ELENBRGtELEVBTXBESixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBTm9ELEVBT3BESCxFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBcUMsQ0FDckNKLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUksV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUFnQyxDQUNoQ0osRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQWtFLENBQ2xFSixFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBdUMsQ0FDdkNKLEVBQUUsQ0FBQyxPQUFELEVBQVUsQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sTUFBUCxDQUFELENBQVYsQ0FEcUMsRUFFdkNKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FGdUMsRUFHdkNILEVBQUUsQ0FBQyxPQUFELEVBQVU7SUFDVkksV0FBVyxFQUFFLGNBREg7SUFFVkMsS0FBSyxFQUFFO01BQUVuQyxJQUFJLEVBQUUsTUFBUjtNQUFnQndELFdBQVcsRUFBRTtJQUE3QjtFQUZHLENBQVYsQ0FIcUMsQ0FBdkMsQ0FEZ0UsQ0FBbEUsQ0FEOEIsRUFXaEMzQixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBWGdDLEVBWWhDSCxFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBa0UsQ0FDbEVKLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUksV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUF1QyxDQUN2Q0osRUFBRSxDQUFDLE9BQUQsRUFBVSxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxXQUFQLENBQUQsQ0FBVixDQURxQyxFQUV2Q0osR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUZ1QyxFQUd2Q0gsRUFBRSxDQUFDLE9BQUQsRUFBVTtJQUNWSSxXQUFXLEVBQUUsY0FESDtJQUVWQyxLQUFLLEVBQUU7TUFBRW5DLElBQUksRUFBRSxLQUFSO01BQWV3RCxXQUFXLEVBQUU7SUFBNUI7RUFGRyxDQUFWLENBSHFDLENBQXZDLENBRGdFLENBQWxFLENBWjhCLEVBc0JoQzNCLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0F0QmdDLEVBdUJoQ0gsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQWtFLENBQ2xFSixFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBdUMsQ0FDdkNKLEVBQUUsQ0FBQyxPQUFELEVBQVUsQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sT0FBUCxDQUFELENBQVYsQ0FEcUMsRUFFdkNKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FGdUMsRUFHdkNILEVBQUUsQ0FBQyxPQUFELEVBQVU7SUFDVkksV0FBVyxFQUFFLGNBREg7SUFFVkMsS0FBSyxFQUFFO01BQUVuQyxJQUFJLEVBQUUsT0FBUjtNQUFpQndELFdBQVcsRUFBRTtJQUE5QjtFQUZHLENBQVYsQ0FIcUMsQ0FBdkMsQ0FEZ0UsQ0FBbEUsQ0F2QjhCLEVBaUNoQzNCLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FqQ2dDLEVBa0NoQ0gsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQWtFLENBQ2xFSixFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBdUMsQ0FDdkNKLEVBQUUsQ0FBQyxPQUFELEVBQVUsQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sY0FBUCxDQUFELENBQVYsQ0FEcUMsRUFFdkNKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FGdUMsRUFHdkNILEVBQUUsQ0FBQyxRQUFELEVBQVc7SUFBRUksV0FBVyxFQUFFO0VBQWYsQ0FBWCxFQUE0QyxDQUM1Q0osRUFBRSxDQUFDLFFBQUQsRUFBVyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxVQUFQLENBQUQsQ0FBWCxDQUQwQyxFQUU1Q0osR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUY0QyxFQUc1Q0gsRUFBRSxDQUFDLFFBQUQsRUFBVyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxVQUFQLENBQUQsQ0FBWCxDQUgwQyxFQUk1Q0osR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUo0QyxFQUs1Q0gsRUFBRSxDQUFDLFFBQUQsRUFBVyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxVQUFQLENBQUQsQ0FBWCxDQUwwQyxFQU01Q0osR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQU40QyxFQU81Q0gsRUFBRSxDQUFDLFFBQUQsRUFBVyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxVQUFQLENBQUQsQ0FBWCxDQVAwQyxFQVE1Q0osR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQVI0QyxFQVM1Q0gsRUFBRSxDQUFDLFFBQUQsRUFBVyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxVQUFQLENBQUQsQ0FBWCxDQVQwQyxDQUE1QyxDQUhxQyxDQUF2QyxDQURnRSxDQUFsRSxDQWxDOEIsRUFtRGhDSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBbkRnQyxFQW9EaENILEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUksV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUFrRSxDQUNsRUosRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQXVDLENBQ3ZDSixFQUFFLENBQUMsT0FBRCxFQUFVLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLE1BQVAsQ0FBRCxDQUFWLENBRHFDLEVBRXZDSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBRnVDLEVBR3ZDSCxFQUFFLENBQUMsUUFBRCxFQUFXO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBQVgsRUFBNEMsQ0FDNUNKLEVBQUUsQ0FBQyxRQUFELEVBQVcsQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sVUFBUCxDQUFELENBQVgsQ0FEMEMsRUFFNUNKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FGNEMsRUFHNUNILEVBQUUsQ0FBQyxRQUFELEVBQVcsQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sVUFBUCxDQUFELENBQVgsQ0FIMEMsRUFJNUNKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FKNEMsRUFLNUNILEVBQUUsQ0FBQyxRQUFELEVBQVcsQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sVUFBUCxDQUFELENBQVgsQ0FMMEMsRUFNNUNKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FONEMsRUFPNUNILEVBQUUsQ0FBQyxRQUFELEVBQVcsQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sVUFBUCxDQUFELENBQVgsQ0FQMEMsRUFRNUNKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FSNEMsRUFTNUNILEVBQUUsQ0FBQyxRQUFELEVBQVcsQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sVUFBUCxDQUFELENBQVgsQ0FUMEMsQ0FBNUMsQ0FIcUMsQ0FBdkMsQ0FEZ0UsQ0FBbEUsQ0FwRDhCLEVBcUVoQ0osR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQXJFZ0MsRUFzRWhDSCxFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBa0UsQ0FDbEVKLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUksV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUF1QyxDQUN2Q0osRUFBRSxDQUFDLE9BQUQsRUFBVTtJQUFFMkIsV0FBVyxFQUFFO01BQUVDLE9BQU8sRUFBRTtJQUFYO0VBQWYsQ0FBVixFQUFpRCxDQUNqRDdCLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLE1BQVAsQ0FEaUQsQ0FBakQsQ0FEcUMsRUFJdkNKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FKdUMsRUFLdkNILEVBQUUsQ0FDQSxRQURBLEVBRUE7SUFBRUksV0FBVyxFQUFFLFdBQWY7SUFBNEJDLEtBQUssRUFBRTtNQUFFbkMsSUFBSSxFQUFFO0lBQVI7RUFBbkMsQ0FGQSxFQUdBLENBQUM2QixHQUFHLENBQUNJLEVBQUosQ0FBTyxRQUFQLENBQUQsQ0FIQSxDQUxxQyxDQUF2QyxDQURnRSxDQUFsRSxDQXRFOEIsQ0FBaEMsQ0FEbUMsQ0FBckMsQ0FQa0QsQ0FBN0MsQ0FBVDtBQThGRCxDQXpHbUIsRUEwR3BCLFlBQVk7RUFDVixJQUFJSixHQUFHLEdBQUcsSUFBVjtFQUFBLElBQ0VDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVVELEVBRGpCOztFQUVBLE9BQU9BLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUksV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUFtRCxDQUMxREosRUFBRSxDQUFDLElBQUQsRUFBTztJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFQLEVBQStDLENBQUNMLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLGFBQVAsQ0FBRCxDQUEvQyxDQUR3RCxDQUFuRCxDQUFUO0FBR0QsQ0FoSG1CLEVBaUhwQixZQUFZO0VBQ1YsSUFBSUosR0FBRyxHQUFHLElBQVY7RUFBQSxJQUNFQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxFQURqQjs7RUFFQSxPQUFPQSxFQUFFLENBQUMsS0FBRCxFQUFRO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBQVIsRUFBc0MsQ0FDN0NKLEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUksV0FBVyxFQUFFO0VBQWYsQ0FBUixFQUF1QyxDQUN2Q0osRUFBRSxDQUFDLE1BQUQsRUFBUztJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFULEVBQXVDLENBQUNMLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFVBQVAsQ0FBRCxDQUF2QyxDQURxQyxFQUV2Q0osR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUZ1QyxFQUd2Q0gsRUFBRSxDQUFDLEtBQUQsRUFBUTtJQUFFSSxXQUFXLEVBQUU7RUFBZixDQUFSLEVBQTJDLENBQzNDSixFQUFFLENBQUMsUUFBRCxFQUFXO0lBQUVJLFdBQVcsRUFBRTtFQUFmLENBQVgsRUFBNEMsQ0FDNUNKLEVBQUUsQ0FBQyxRQUFELEVBQVc7SUFBRUssS0FBSyxFQUFFO01BQUV3QixLQUFLLEVBQUU7SUFBVDtFQUFULENBQVgsRUFBdUMsQ0FBQzlCLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLElBQVAsQ0FBRCxDQUF2QyxDQUQwQyxFQUU1Q0osR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQUY0QyxFQUc1Q0gsRUFBRSxDQUFDLFFBQUQsRUFBVztJQUFFSyxLQUFLLEVBQUU7TUFBRXdCLEtBQUssRUFBRTtJQUFUO0VBQVQsQ0FBWCxFQUF1QyxDQUFDOUIsR0FBRyxDQUFDSSxFQUFKLENBQU8sSUFBUCxDQUFELENBQXZDLENBSDBDLEVBSTVDSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBSjRDLEVBSzVDSCxFQUFFLENBQUMsUUFBRCxFQUFXO0lBQUVLLEtBQUssRUFBRTtNQUFFd0IsS0FBSyxFQUFFO0lBQVQ7RUFBVCxDQUFYLEVBQXdDLENBQUM5QixHQUFHLENBQUNJLEVBQUosQ0FBTyxLQUFQLENBQUQsQ0FBeEMsQ0FMMEMsQ0FBNUMsQ0FEeUMsQ0FBM0MsQ0FIcUMsRUFZdkNKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FadUMsRUFhdkNILEVBQUUsQ0FBQyxNQUFELEVBQVM7SUFBRUksV0FBVyxFQUFFO0VBQWYsQ0FBVCxFQUF1QyxDQUFDTCxHQUFHLENBQUNJLEVBQUosQ0FBTyxVQUFQLENBQUQsQ0FBdkMsQ0FicUMsRUFjdkNKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FkdUMsRUFldkNILEVBQUUsQ0FBQyxLQUFELEVBQVE7SUFBRUksV0FBVyxFQUFFO0VBQWYsQ0FBUixDQWZxQyxDQUF2QyxDQUQyQyxDQUF0QyxDQUFUO0FBbUJELENBdkltQixFQXdJcEIsWUFBWTtFQUNWLElBQUlMLEdBQUcsR0FBRyxJQUFWO0VBQUEsSUFDRUMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVUQsRUFEakI7O0VBRUEsT0FBT0EsRUFBRSxDQUFDLE9BQUQsRUFBVSxDQUNqQkEsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUNQQSxFQUFFLENBQ0EsSUFEQSxFQUVBO0lBQUUyQixXQUFXLEVBQUU7TUFBRSxjQUFjO0lBQWhCLENBQWY7SUFBMkN0QixLQUFLLEVBQUU7TUFBRXlCLEtBQUssRUFBRTtJQUFUO0VBQWxELENBRkEsRUFHQSxDQUFDL0IsR0FBRyxDQUFDSSxFQUFKLENBQU8sUUFBUCxDQUFELENBSEEsQ0FESyxFQU1QSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBTk8sRUFPUEgsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxPQUFQLENBQUQsQ0FBUCxDQVBLLEVBUVBKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FSTyxFQVNQSCxFQUFFLENBQUMsSUFBRCxFQUFPLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFdBQVAsQ0FBRCxDQUFQLENBVEssRUFVUEosR0FBRyxDQUFDSSxFQUFKLENBQU8sR0FBUCxDQVZPLEVBV1BILEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sT0FBUCxDQUFELENBQVAsQ0FYSyxFQVlQSixHQUFHLENBQUNJLEVBQUosQ0FBTyxHQUFQLENBWk8sRUFhUEgsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUFDRCxHQUFHLENBQUNJLEVBQUosQ0FBTyxlQUFQLENBQUQsQ0FBUCxDQWJLLEVBY1BKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FkTyxFQWVQSCxFQUFFLENBQUMsSUFBRCxFQUFPLENBQUNELEdBQUcsQ0FBQ0ksRUFBSixDQUFPLE1BQVAsQ0FBRCxDQUFQLENBZkssRUFnQlBKLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLEdBQVAsQ0FoQk8sRUFpQlBILEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FBQ0QsR0FBRyxDQUFDSSxFQUFKLENBQU8sU0FBUCxDQUFELENBQVAsQ0FqQkssQ0FBUCxDQURlLENBQVYsQ0FBVDtBQXFCRCxDQWhLbUIsQ0FBdEI7QUFrS0FMLE1BQU0sQ0FBQ2lDLGFBQVAsR0FBdUIsSUFBdkI7Ozs7Ozs7Ozs7Ozs7QUNyVEE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xLmJ1bmRsZS45YjliNzMwYjMxZDk3MWUxYjNmNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cclxuICAgICAgPGgxPlVzZXJzPC9oMT5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtd2FybmluZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGUgY2FyZC10ZXh0XCI+VXNlciBTZWFyY2g8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgTmFtZSAuLi5cIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5QaG9uZSBOby48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGhvbmUgTm8uIC4uLlwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWwgLi4uXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+T3JnYW5pc2F0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5vcHRpb24gMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPm9wdGlvbiAyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+b3B0aW9uIDM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5vcHRpb24gNDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPm9wdGlvbiA1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Sb2xlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5vcHRpb24gMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPm9wdGlvbiAyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+b3B0aW9uIDM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5vcHRpb24gNDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPm9wdGlvbiA1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiPiAmbmJzcDsmbmJzcDsgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGxpbmsxXCI+RmlsdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3gtYmxhY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIGNhcmQtdGV4dFwiPlVzZXJzIFRhYmxlPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWJveC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlNob3dpbmdib3hcIj4gPHNwYW4gY2xhc3M9XCJwdWxsLWxlZnRcIj5TaG93aW5nIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0IGRyb3BcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI1XCI+MjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMFwiPjEwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLWxlZnRcIj5lbnRyaWVzIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0XCI+IDxyb3V0ZXItbGluayB0bz1cIi91c2VyL2FkZFwiIGNsYXNzPVwiYnRuIGxpbmsxXCI+IDxzcGFuPjxpIGNsYXNzPVwiZmEgZmEtcGx1cy1zcXVhcmUtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gPC9zcGFuPiBBZGQgVXNlciA8L3JvdXRlci1saW5rPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVzZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiIHdpZHRoPVwiNzBcIj5TbCBOby48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlBob25lIE5vLjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+T3JnYW5pc2F0aW9uLjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlJvbGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXMgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAge3t1c2Vyc319XHJcbiAgICAgICAgICAgICAgICA8dGJvZHkgdi1pZj1cInVzZXJzICYmIHVzZXJzLmRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwidXNlciBpbiB1c2Vycy5kYXRhXCIgOmtleT1cInVzZXIuaWRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+MDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwidXBkYXRlLXVzZXIuaHRtbFwiIGNsYXNzPVwidGV4dC1ncmVlblwiPnt7dXNlci5uYW1lfX08L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t1c2VyLnBob25lfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3VzZXIuZW1haWx9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7dXNlci5vcmdhbml6YXRpb259fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7dXNlci50eXBlfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzcz1cImJhZGdlICBiZy1ncmVlblwiPnt7dXNlci5zdGF0dXN9fTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uc2VjdGlvbmJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInVzZXJzICYmIHVzZXJzLmRhdGFcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNSBjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlNob3dpbmdib3h0bzFcIj5TaG93aW5nIDEgdG8gMTggb2Yge3sgdXNlci5sYXN0X3BhZ2UgfX0gcmVzdWx0czwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC03IGNvbC1sZy03XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiU2hvd2luZ2JveHRvMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2luYXRlX2J1dHRvblwiIHYtZm9yPVwiKGxpbmtzLCBpbmRleCkgaW4gdXNlci5saW5rc1wiIDprZXk9XCJpbmRleFwiIDpjbGFzcz1cInsnYWN0aXZlIGRpc2FibGVkJzpsaW5rcy5hY3RpdmUsICdkaXNhYmxlZCc6IWxpbmtzLnVybH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiB2LWh0bWw9XCJsaW5rcy5sYWJlbFwiID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuIFxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgbmFtZTpcInVzZXJsaXN0XCIsXHJcbiAgICAgICAgZGF0YSAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlZGl0bW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1c2VycyA6IHt9LFxyXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxfdmVyaWZpZWRfYXQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgZ2V0UmVzdWx0cyhwYWdlID0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnYXBpL3VzZXI/cGFnZT0nICsgcGFnZSkudGhlbigoeyBkYXRhIH0pID0+ICh0aGlzLnVzZXJzID0gZGF0YS5kYXRhKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBkYXRlVXNlcigpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFZGl0aW5nIGRhdGEnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wdXQoJ2FwaS91c2VyLycrdGhpcy5mb3JtLmlkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNhZGROZXcnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgRmlyZS4kZW1pdCgnQWZ0ZXJDcmVhdGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVXNlcnMoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZhaWwoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWRpdE1vZGFsKHVzZXIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0bW9kZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICQoJyNhZGROZXcnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLmZpbGwodXNlcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5ld01vZGFsKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRtb2RlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICQoJyNhZGROZXcnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWxldGVVc2VyKGlkKXtcclxuICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnI2QzMycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgZGVsZXRlIGl0ISdcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgcmVxdWVzdCB0byB0aGUgc2VydmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmRlbGV0ZSgnYXBpL3VzZXIvJytpZCkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0RlbGV0ZWQhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdZb3VyIGZpbGUgaGFzIGJlZW4gZGVsZXRlZC4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlLiRlbWl0KCdBZnRlckNyZWF0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRVc2VycygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChkYXRhKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcIkZhaWxlZCFcIiwgZGF0YS5tZXNzYWdlLCBcIndhcm5pbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsb2FkVXNlcnMoKXtcclxuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTsgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuJGdhdGUuaXNBZG1pbigpKXtcclxuICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvdXNlclwiKS50aGVuKCh7IGRhdGEgfSkgPT4gKHRoaXMudXNlcnMgPSBkYXRhKSk7XHJcblxyXG5cclxuIGF4aW9zLmdldChcImFwaS91c2VyXCIpXHJcblx0ICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgICAgIFxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlcy5kYXRhLmRhdGFcclxuXHQgICAgICAgICAgICAgICAgICAgICBcclxuXHQgICAgICAgICAgICAgICAgfSlcclxuXHQgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcblx0ICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VycylcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY3JlYXRlVXNlcigpe1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLmZvcm0ucG9zdCgnYXBpL3VzZXInKVxyXG4gICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgICAgICAgJCgnI2FkZE5ldycpLm1vZGFsKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XHJcblxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKCgpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NvbWUgZXJyb3Igb2NjdXJlZCEgUGxlYXNlIHRyeSBhZ2FpbidcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBDb21wb25lbnQgbW91bnRlZC4nKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCgpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgIF92bS5fbSgxKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LWJsYWNrXCIgfSwgW1xuICAgICAgICBfdm0uX20oMiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tLWJveC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsxXCIsIGF0dHJzOiB7IHRvOiBcIi91c2VyL2FkZFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBsdXMtc3F1YXJlLW9cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgQWRkIFVzZXIgXCIpLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9KSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZXNlY3Rpb25cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLXJlc3BvbnNpdmVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcclxcblxcclxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXNlcnMpICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXHJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS51c2VycyAmJiBfdm0udXNlcnMuZGF0YVxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS51c2Vycy5kYXRhLCBmdW5jdGlvbiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IHVzZXIuaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMDFcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwidXBkYXRlLXVzZXIuaHRtbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci5waG9uZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci5lbWFpbCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci5vcmdhbml6YXRpb24pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIudHlwZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJnLWdyZWVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh1c2VyLnN0YXR1cykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uc2VjdGlvbmJveFwiIH0sIFtcbiAgICAgICAgICAgIF92bS51c2VycyAmJiBfdm0udXNlcnMuZGF0YVxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNSBjb2wtbGctNVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIlNob3dpbmdib3h0bzFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2hvd2luZyAxIHRvIDE4IG9mIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzZXIubGFzdF9wYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgcmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTcgY29sLWxnLTdcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJTaG93aW5nYm94dG8yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS51c2VyLmxpbmtzLCBmdW5jdGlvbiAobGlua3MsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0ZV9idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZSBkaXNhYmxlZFwiOiBsaW5rcy5hY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFsaW5rcy51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MobGlua3MubGFiZWwpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiVXNlcnNcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm94LXdhcm5pbmdcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlVzZXIgU2VhcmNoXCIpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgTmFtZSAuLi5cIiB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJQaG9uZSBOby5cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZWxcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgUGhvbmUgTm8uIC4uLlwiIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZW1haWxcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgRW1haWwgLi4uXCIgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiT3JnYW5pc2F0aW9uXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic2VsZWN0XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJvcHRpb24gMVwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcIm9wdGlvbiAyXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwib3B0aW9uIDNcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJvcHRpb24gNFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcIm9wdGlvbiA1XCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlJvbGVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzZWxlY3RcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcIm9wdGlvbiAxXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwib3B0aW9uIDJcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJvcHRpb24gM1wiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcIm9wdGlvbiA0XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwib3B0aW9uIDVcIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctM1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgwqDCoCBcIiksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGxpbmsxXCIsIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJGaWx0ZXJcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIGNhcmQtdGV4dFwiIH0sIFtfdm0uX3YoXCJVc2VycyBUYWJsZVwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJTaG93aW5nYm94XCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIiB9LCBbX3ZtLl92KFwiU2hvd2luZyBcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnQgZHJvcFwiIH0sIFtcbiAgICAgICAgICBfYyhcInNlbGVjdFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMjVcIiB9IH0sIFtfdm0uX3YoXCIyNVwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNTBcIiB9IH0sIFtfdm0uX3YoXCI1MFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMTAwXCIgfSB9LCBbX3ZtLl92KFwiMTAwXCIpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIiB9LCBbX3ZtLl92KFwiZW50cmllcyBcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiIH0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSwgYXR0cnM6IHsgd2lkdGg6IFwiNzBcIiB9IH0sXG4gICAgICAgICAgW192bS5fdihcIlNsIE5vLlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZSBcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUGhvbmUgTm8uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk9yZ2FuaXNhdGlvbi5cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUm9sZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTdGF0dXMgXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTU1YzhlMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxccHJvZ3JhbW1pbmdcXFxcd2FtcDY0XFxcXHd3d1xcXFx1bml0ZWQtc2NyYXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2U1NWM4ZTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2U1NWM4ZTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2U1NWM4ZTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTU1YzhlMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZTU1YzhlMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlcnMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U1NWM4ZTAmXCIiXSwic291cmNlUm9vdCI6IiJ9