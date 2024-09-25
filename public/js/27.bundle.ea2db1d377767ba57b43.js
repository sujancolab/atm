(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Permissions/index.vue":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Permissions/index.vue ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {//
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
      editmode: false,
      search: '',
      users: {},
      form: new Form({
        id: '',
        name: '',
        description: ''
      }),
      json_fields: {
        'name': 'name',
        "User Type": 'type',
        "Email": "email",
        "Contact No": 'contact_no',
        "User Name": 'user_name',
        "Address": 'address',
        "State": 'state',
        "City": 'city',
        "Zip Code": 'zip_code'
      },
      json_meta: [[{
        key: "charset",
        value: "utf-8"
      }]]
    };
  },
  methods: {
    async export_csv() {
      const response = await axios.get('api/user?export=1', {
        params: {
          search: this.search
        }
      });
      return response.data.data;
    },
    startDownload() {
      Swal.fire({
        title: 'Please Wait !',
        html: 'Data populating',
        // add html attribute if you want or remove
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        }
      });
    },
    finishDownload() {
      Swal.close();
    },
    getResults(page = 1) {
      this.$Progress.start();
      axios.get('api/role', {
        params: {
          page: page,
          search: this.search
        }
      }).then(({
        data
      }) => this.users = data.data);
      this.$Progress.finish();
    },
    updateRole() {
      this.$validator.validateAll().then(async valid => {
        if (valid) {
          this.verrors.clear();
          this.$Progress.start();
          // console.log('Editing data');
          this.form.put('api/role/' + this.form.id).then(response => {
            // success
            $('#addNew').modal('hide');
            if (response.data.success) {
              Toast.fire({
                icon: 'success',
                title: response.data.message
              });
            } else {
              Toast.fire({
                icon: 'failure',
                title: response.data.message
              });
            }
            this.$Progress.finish();
            //  Fire.$emit('AfterCreate');

            this.loadRoles();
          }).catch(err => {
            if (err.response && err.response.data) {
              this.$setErrorsFromResponse(err.response.data);
            }
          });
        }
      });
    },
    editModal(user) {
      this.editmode = true;
      this.form.reset();
      this.verrors.clear();
      $('#addNew').modal('show');
      this.form.fill(user);
    },
    newModal() {
      this.editmode = false;
      this.form.reset();
      this.verrors.clear();
      $('#addNew').modal('show');
    },
    deleteData(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then(result => {
        // Send request to the server
        if (result.value) {
          this.form.delete('api/role/' + id).then(() => {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            // Fire.$emit('AfterCreate');
            this.loadRoles();
          }).catch(data => {
            Swal.fire("Failed!", data.message, "warning");
          });
        }
      });
    },
    loadRoles() {
      this.$Progress.start();
      if (this.$gate.isAdmin()) {
        axios.get("api/role").then(({
          data
        }) => this.users = data.data);
      }
      this.$Progress.finish();
    },
    createRole() {
      this.$validator.validateAll().then(async valid => {
        if (valid) {
          this.verrors.clear();
          this.form.post('api/role').then(response => {
            $('#addNew').modal('hide');
            if (response.data.success == false) {
              Toast.fire({
                icon: 'failure',
                title: response.data.message
              });
            } else {
              Toast.fire({
                icon: 'success',
                title: response.data.message
              });
            }
            this.$Progress.finish();
            this.loadRoles();
          }).catch(err => {
            if (err.response && err.response.data) {
              this.$setErrorsFromResponse(err.response.data);
            }
          });
        }
      });
    }
  },
  mounted() {
    console.log('User Component mounted.');
  },
  created() {
    this.$Progress.start();
    this.loadRoles();
    this.$Progress.finish();
  },
  beforeCreate() {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-329e731c\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Permissions/index.vue":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-329e731c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Permissions/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "content" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _vm.$gate.isAdmin()
            ? _c("div", { staticClass: "card" }, [_vm._m(0)])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      !_vm.$gate.isAdmin() ? _c("div", [_c("not-found")], 1) : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body table-responsive p-0" }, [
      _c("ul", { staticClass: "nav nav-tabs" }, [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: { "data-toggle": "tab", href: "#home" }
            },
            [_vm._v("Home")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { "data-toggle": "tab", href: "#menu1" }
            },
            [_vm._v("Menu 1")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { "data-toggle": "tab", href: "#menu2" }
            },
            [_vm._v("Menu 2")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tab-content" }, [
        _c(
          "div",
          {
            staticClass: "tab-pane container-fluid active",
            attrs: { id: "home" }
          },
          [
            _c("div", { attrs: { id: "accordion" } }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c(
                    "a",
                    {
                      staticClass: "card-link",
                      attrs: { "data-toggle": "collapse", href: "#collapseOne" }
                    },
                    [
                      _vm._v(
                        "\n                                                Collapsible Group Item #1\n                                            "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse show",
                    attrs: { id: "collapseOne", "data-parent": "#accordion" }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _vm._v(
                        "\n                                                Lorem ipsum..\n                                            "
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c(
                    "a",
                    {
                      staticClass: "collapsed card-link",
                      attrs: { "data-toggle": "collapse", href: "#collapseTwo" }
                    },
                    [
                      _vm._v(
                        "\n                                                Collapsible Group Item #2\n                                            "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: { id: "collapseTwo", "data-parent": "#accordion" }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _vm._v(
                        "\n                                                Lorem ipsum..\n                                            "
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c(
                    "a",
                    {
                      staticClass: "collapsed card-link",
                      attrs: {
                        "data-toggle": "collapse",
                        href: "#collapseThree"
                      }
                    },
                    [
                      _vm._v(
                        "\n                                                Collapsible Group Item #3\n                                            "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: { id: "collapseThree", "data-parent": "#accordion" }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _vm._v(
                        "\n                                                Lorem ipsum..\n                                            "
                      )
                    ])
                  ]
                )
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "tab-pane container fade", attrs: { id: "menu1" } },
          [_vm._v("...")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "tab-pane container fade", attrs: { id: "menu2" } },
          [_vm._v("...")]
        )
      ])
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./resources/js/components/Permissions/index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Permissions/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Permissions/index.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_329e731c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-329e731c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-329e731c\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Permissions/index.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_329e731c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_329e731c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\Permissions\\index.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUGVybWlzc2lvbnMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Blcm1pc3Npb25zL2luZGV4LnZ1ZT9kYzA5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Blcm1pc3Npb25zL2luZGV4LnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiZWRpdG1vZGUiLCJzZWFyY2giLCJ1c2VycyIsImZvcm0iLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImpzb25fZmllbGRzIiwianNvbl9tZXRhIiwia2V5IiwidmFsdWUiLCJtZXRob2RzIiwicGFyYW1zIiwic3RhcnREb3dubG9hZCIsIlN3YWwiLCJ0aXRsZSIsImh0bWwiLCJhbGxvd091dHNpZGVDbGljayIsIm9uQmVmb3JlT3BlbiIsImZpbmlzaERvd25sb2FkIiwiZ2V0UmVzdWx0cyIsImF4aW9zIiwicGFnZSIsInVwZGF0ZVJvbGUiLCJ0aGVuIiwiJCIsIlRvYXN0IiwiaWNvbiIsImNhdGNoIiwiZWRpdE1vZGFsIiwibmV3TW9kYWwiLCJkZWxldGVEYXRhIiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwibG9hZFJvbGVzIiwiY3JlYXRlUm9sZSIsIm1vdW50ZWQiLCJjb25zb2xlIiwiY3JlYXRlZCIsImJlZm9yZUNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRGZTtFQUNmQTtJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQUM7UUFDQTtRQUNB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aUIiLCJmaWxlIjoianMvMjcuYnVuZGxlLmVhMmRiMWQzNzc3NjdiYTU3YjQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiB2LWlmPVwiJGdhdGUuaXNBZG1pbigpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1oZWFkZXIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGFjdGl2ZVwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNob21lXCI+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjbWVudTFcIj5NZW51IDE8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI21lbnUyXCI+TWVudSAyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gVGFiIHBhbmVzIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgY29udGFpbmVyLWZsdWlkIGFjdGl2ZVwiIGlkPVwiaG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFjY29yZGlvblwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImNhcmQtbGlua1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPVwiI2NvbGxhcHNlT25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sbGFwc2libGUgR3JvdXAgSXRlbSAjMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbGxhcHNlT25lXCIgY2xhc3M9XCJjb2xsYXBzZSBzaG93XCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImNvbGxhcHNlZCBjYXJkLWxpbmtcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI2NvbGxhcHNlVHdvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sbGFwc2libGUgR3JvdXAgSXRlbSAjMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbGxhcHNlVHdvXCIgY2xhc3M9XCJjb2xsYXBzZVwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjb2xsYXBzZWQgY2FyZC1saW5rXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNjb2xsYXBzZVRocmVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sbGFwc2libGUgR3JvdXAgSXRlbSAjM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbGxhcHNlVGhyZWVcIiBjbGFzcz1cImNvbGxhcHNlXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBjb250YWluZXIgZmFkZVwiIGlkPVwibWVudTFcIj4uLi48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGNvbnRhaW5lciBmYWRlXCIgaWQ9XCJtZW51MlwiPi4uLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1ib2R5IC0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZCAtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIiEkZ2F0ZS5pc0FkbWluKClcIj5cbiAgICAgICAgICAgICAgICA8bm90LWZvdW5kPjwvbm90LWZvdW5kPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWRpdG1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgc2VhcmNoOiAnJyxcbiAgICAgICAgICAgIHVzZXJzOiB7fSxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGpzb25fZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgJ25hbWUnOiAnbmFtZScsXG4gICAgICAgICAgICAgICAgXCJVc2VyIFR5cGVcIjogJ3R5cGUnLFxuICAgICAgICAgICAgICAgIFwiRW1haWxcIjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgIFwiQ29udGFjdCBOb1wiOiAnY29udGFjdF9ubycsXG4gICAgICAgICAgICAgICAgXCJVc2VyIE5hbWVcIjogJ3VzZXJfbmFtZScsXG4gICAgICAgICAgICAgICAgXCJBZGRyZXNzXCI6ICdhZGRyZXNzJyxcbiAgICAgICAgICAgICAgICBcIlN0YXRlXCI6ICdzdGF0ZScsXG4gICAgICAgICAgICAgICAgXCJDaXR5XCI6ICdjaXR5JyxcbiAgICAgICAgICAgICAgICBcIlppcCBDb2RlXCI6ICd6aXBfY29kZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBqc29uX21ldGE6IFtcbiAgICAgICAgICAgICAgICBbe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2hhcnNldFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ1dGYtOFwiLFxuICAgICAgICAgICAgICAgIH0sXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgZXhwb3J0X2NzdigpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdhcGkvdXNlcj9leHBvcnQ9MScsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnREb3dubG9hZCgpIHtcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQbGVhc2UgV2FpdCAhJyxcbiAgICAgICAgICAgICAgICBodG1sOiAnRGF0YSBwb3B1bGF0aW5nJywgLy8gYWRkIGh0bWwgYXR0cmlidXRlIGlmIHlvdSB3YW50IG9yIHJlbW92ZVxuICAgICAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkJlZm9yZU9wZW46ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5zaG93TG9hZGluZygpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBmaW5pc2hEb3dubG9hZCgpIHtcbiAgICAgICAgICAgIFN3YWwuY2xvc2UoKVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldFJlc3VsdHMocGFnZSA9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgICAgICBheGlvcy5nZXQoJ2FwaS9yb2xlJywge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+ICh0aGlzLnVzZXJzID0gZGF0YS5kYXRhKSk7XG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlUm9sZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oYXN5bmMgKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVycm9ycy5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnRWRpdGluZyBkYXRhJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wdXQoJ2FwaS9yb2xlLycgKyB0aGlzLmZvcm0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2FkZE5ldycpLm1vZGFsKCdoaWRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsdXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIEZpcmUuJGVtaXQoJ0FmdGVyQ3JlYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRSb2xlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWwodXNlcikge1xuICAgICAgICAgICAgdGhpcy5lZGl0bW9kZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMudmVycm9ycy5jbGVhcigpO1xuICAgICAgICAgICAgJCgnI2FkZE5ldycpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgICAgICB0aGlzLmZvcm0uZmlsbCh1c2VyKTtcbiAgICAgICAgfSxcbiAgICAgICAgbmV3TW9kYWwoKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRtb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMudmVycm9ycy5jbGVhcigpO1xuICAgICAgICAgICAgJCgnI2FkZE5ldycpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZURhdGEoaWQpIHtcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmU/JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzIVwiLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgZGVsZXRlIGl0ISdcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gU2VuZCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5kZWxldGUoJ2FwaS9yb2xlLycgKyBpZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0RlbGV0ZWQhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWW91ciBmaWxlIGhhcyBiZWVuIGRlbGV0ZWQuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3VjY2VzcydcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlLiRlbWl0KCdBZnRlckNyZWF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUm9sZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcIkZhaWxlZCFcIiwgZGF0YS5tZXNzYWdlLCBcIndhcm5pbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb2xlcygpIHtcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRnYXRlLmlzQWRtaW4oKSkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9yb2xlXCIpLnRoZW4oKHsgZGF0YSB9KSA9PiAodGhpcy51c2VycyA9IGRhdGEuZGF0YSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVSb2xlKCkge1xuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbihhc3luYyAodmFsaWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJyb3JzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wb3N0KCdhcGkvcm9sZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNhZGROZXcnKS5tb2RhbCgnaGlkZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsdXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRSb2xlcygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZSAmJiBlcnIucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UoZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgQ29tcG9uZW50IG1vdW50ZWQuJylcbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMubG9hZFJvbGVzKCk7XG4gICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIH0sXG59XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICBfdm0uJGdhdGUuaXNBZG1pbigpXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtfdm0uX20oMCldKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS4kZ2F0ZS5pc0FkbWluKCkgPyBfYyhcImRpdlwiLCBbX2MoXCJub3QtZm91bmRcIildLCAxKSA6IF92bS5fZSgpXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wXCIgfSwgW1xuICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdiBuYXYtdGFic1wiIH0sIFtcbiAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rIGFjdGl2ZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCIsIGhyZWY6IFwiI2hvbWVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkhvbWVcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIiwgaHJlZjogXCIjbWVudTFcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIk1lbnUgMVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLCBocmVmOiBcIiNtZW51MlwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiTWVudSAyXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFiLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgY29udGFpbmVyLWZsdWlkIGFjdGl2ZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiaG9tZVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwiYWNjb3JkaW9uXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsIGhyZWY6IFwiI2NvbGxhcHNlT25lXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xsYXBzaWJsZSBHcm91cCBJdGVtICMxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2xsYXBzZSBzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImNvbGxhcHNlT25lXCIsIFwiZGF0YS1wYXJlbnRcIjogXCIjYWNjb3JkaW9uXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bS4uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbGxhcHNlZCBjYXJkLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIiwgaHJlZjogXCIjY29sbGFwc2VUd29cIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbGxhcHNpYmxlIEdyb3VwIEl0ZW0gIzJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImNvbGxhcHNlVHdvXCIsIFwiZGF0YS1wYXJlbnRcIjogXCIjYWNjb3JkaW9uXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bS4uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbGxhcHNlZCBjYXJkLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiNjb2xsYXBzZVRocmVlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbGxhcHNpYmxlIEdyb3VwIEl0ZW0gIzNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImNvbGxhcHNlVGhyZWVcIiwgXCJkYXRhLXBhcmVudFwiOiBcIiNhY2NvcmRpb25cIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtLi5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgY29udGFpbmVyIGZhZGVcIiwgYXR0cnM6IHsgaWQ6IFwibWVudTFcIiB9IH0sXG4gICAgICAgICAgW192bS5fdihcIi4uLlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGNvbnRhaW5lciBmYWRlXCIsIGF0dHJzOiB7IGlkOiBcIm1lbnUyXCIgfSB9LFxuICAgICAgICAgIFtfdm0uX3YoXCIuLi5cIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTMyOWU3MzFjXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zMjllNzMxY1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXFBlcm1pc3Npb25zXFxcXGluZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zMjllNzMxY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTMyOWU3MzFjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=