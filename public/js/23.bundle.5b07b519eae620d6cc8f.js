(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/ComplaintAddEdit.vue":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/ComplaintAddEdit.vue ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  name: "UserAddEdit",
  components: {
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0___default())
  },
  filters: {
    truncate: function (text, length, suffix) {
      return text.substring(0, length) + suffix;
    }
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    }
  },
  data() {
    return {
      machined: '',
      checkbox_model: [],
      form: new Form({
        id: '',
        atm_id: '',
        complaint_system_type_id: '',
        complaint_type_id: '',
        comment: ''
      }),
      atms: [],
      complaint_system_types: [],
      complaint_type: [],
      models: [],
      operators: [],
      sites: [],
      users: [],
      tag: '',
      autocompleteItems: [],
      sl: 0,
      assigned_ids: [],
      permissions: [],
      view_mode: false,
      countries: [],
      states: [],
      cities: [],
      editmode: false,
      step: 1,
      users: {},
      file: '',
      invoice_copy: null,
      cf_copy: null,
      national_permit_copy: null,
      road_tax_copy: null,
      insurance_copy: null,
      pollution_copy: null,
      rc_copy: null
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(["errors"])
  },
  beforeCreate() {
    axios.get("api/lodgeComplaintHelp").then(res => {
      console.log("res=====>", res);
      this.atms = res.data.data.atms;
      this.complaint_system_types = res.data.data.complaint_system_types;
      this.complaint_type = res.data.data.complaint_type;
    });
  },
  methods: {
    onFileChange(e) {
      this.invoice_copy = e.target.files[0];
    },
    onCFChange(e) {
      this.cf_copy = e.target.files[0];
    },
    onNPChange(e) {
      this.national_permit_copy = e.target.files[0];
    },
    onRTChange(e) {
      this.road_tax_copy = e.target.files[0];
    },
    onInsuranceChange(e) {
      this.insurance_copy = e.target.files[0];
    },
    onPollutionChange(e) {
      this.pollution_copy = e.target.files[0];
    },
    onRCChange(e) {
      this.rc_copy = e.target.files[0];
    },
    submit_machine() {
      this.$validator.validateAll().then(async valid => {
        if (valid) {
          this.verrors.clear();
          let cloaderd = this.$loading.show({
            container: this.$refs.ref_load_user
          });
          if (this.form.id > 0) {
            this.form.put('api/machine/' + this.form.id).then(response => {
              this.$validator.reset();
              cloaderd.hide();
              if (response.data.success == true) {
                var fd = new FormData();
                fd.append(`file`, this.invoice_copy);
                fd.append(`cffile`, this.cf_copy);
                fd.append(`npfile`, this.national_permit_copy);
                fd.append(`rtfile`, this.road_tax_copy);
                fd.append(`insurancefile`, this.insurance_copy);
                fd.append(`pollutionfile`, this.pollution_copy);
                fd.append(`rcfile`, this.rc_copy);
                fd.append(`id`, this.form.id);
                axios.post('api/machine/files', fd).then(res => {
                  this.form.reset();
                  Toast.fire({
                    icon: 'success',
                    title: response.data.message
                  });
                  this.$router.push('/machines').catch(() => {});
                });
              }
            }).catch(err => {
              cloaderd.hide();
              if (err.response && err.response.data) {
                this.$setErrorsFromResponse(err.response.data);
              }
            });
          } else {
            this.form.post('api/storeComplaint').then(data => {
              this.$validator.reset();
              cloaderd.hide();
              this.form.id = data.data.data.id;
              this.form.reset();
              Toast.fire({
                icon: 'success',
                title: data.data.message
              });
              this.$router.push('/complaint').catch(() => {});
            }).catch(err => {
              if (err.response && err.response.data) {
                this.$setErrorsFromResponse(err.response.data);
              }
              cloaderd.hide();
            });
          }
        }
      });
    },
    grand_permission() {
      let cloaderd = this.$loading.show({
        container: this.$refs.setting_permissionref
      });
      axios.post('api/user/grand_permission', {
        user: this.form.id,
        permissions: this.assigned_ids
      }).then(response => {
        cloaderd.hide();
        if (response.data.success == true) {
          Toast.fire({
            icon: 'success',
            title: response.data.message
          });
        }
      }).catch(() => {
        cloaderd.hide();
      });
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.form.id = this.$route.params.id;
      let cloaderd = this.$loading.show({
        container: this.$refs.ref_load_user
      });
      axios.get("api/machine/" + this.$route.params.id).then(res => {
        this.machined = res.data.data;
        this.form.fill(res.data.data);
        let date_time_machine_ic = res.data.data.date_time_machine_ic;
        this.form.date_time_machine_ic = new Date(date_time_machine_ic).toISOString();
        this.form.last_maintenance_date = new Date(this.form.last_maintenance_date).toISOString();
        cloaderd.hide();
      }).catch(() => {
        cloaderd.hide();
        this.$router.push('/machines/').catch(() => {});
      });
    }
  },
  created() {},
  watch: {
    async 'form.category_id'(n, o) {
      if (o) this.form.sub_category_id = '';
      if (n) {
        axios.get("api/category/" + n).then(res => {
          this.sub_categories = res.data.data;
        });
      }
    },
    async 'form.machine_companies_id'(n, o) {
      if (o) this.form.machine_models_id = '';
      if (n) {
        axios.get("api/model/" + n).then(res => {
          this.models = res.data.data;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-593e398b\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintAddEdit.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-593e398b","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintAddEdit.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "form",
      {
        staticClass: "form-horizontal",
        attrs: { enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit_machine()
          }
        }
      },
      [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h3", { staticClass: "card-title" }, [
                    _vm._v(
                      _vm._s(_vm.form.id ? "Update" : "Add") + " Complaint"
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Select ATM ID *")]),
                          _vm._v(" "),
                          _c("v-select", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "required",
                            class: { "is-invalid": _vm.verrors.has("atm_id") },
                            attrs: {
                              label: "atm_id",
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.atms,
                              placeholder: "Choose Atm ...",
                              "data-vv-name": "atm_id"
                            },
                            model: {
                              value: _vm.form.atm_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "atm_id", $$v)
                              },
                              expression: "form.atm_id"
                            }
                          }),
                          _vm._v(" "),
                          _vm.verrors.has("atm_id")
                            ? _c(
                                "div",
                                { staticClass: "help-block invalid-feedback" },
                                [
                                  _vm._v(
                                    "\n                                 " +
                                      _vm._s(_vm.verrors.first("atm_id")) +
                                      "\n                              "
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Call Type *")]),
                          _vm._v(" "),
                          _c("v-select", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "required",
                            class: {
                              "is-invalid": _vm.verrors.has(
                                "complaint_system_type_id"
                              )
                            },
                            attrs: {
                              label: "title",
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.complaint_system_types,
                              placeholder: "Choose Call Type ...",
                              "data-vv-name": "complaint_system_type_id"
                            },
                            model: {
                              value: _vm.form.complaint_system_type_id,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.form,
                                  "complaint_system_type_id",
                                  $$v
                                )
                              },
                              expression: "form.complaint_system_type_id"
                            }
                          }),
                          _vm._v(" "),
                          _vm.verrors.has("complaint_system_type_id")
                            ? _c(
                                "div",
                                { staticClass: "help-block invalid-feedback" },
                                [
                                  _vm._v(
                                    "\n                                 " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "complaint_system_type_id"
                                        )
                                      ) +
                                      "\n                              "
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Fault Type *")]),
                          _vm._v(" "),
                          _c("v-select", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "required",
                            class: {
                              "is-invalid": _vm.verrors.has("complaint_type_id")
                            },
                            attrs: {
                              label: "title",
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.complaint_type,
                              placeholder: "Choose Fault Type ...",
                              "data-vv-name": "complaint_type_id"
                            },
                            model: {
                              value: _vm.form.complaint_type_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "complaint_type_id", $$v)
                              },
                              expression: "form.complaint_type_id"
                            }
                          }),
                          _vm._v(" "),
                          _vm.verrors.has("complaint_type_id")
                            ? _c(
                                "div",
                                { staticClass: "help-block invalid-feedback" },
                                [
                                  _vm._v(
                                    "\n                                 " +
                                      _vm._s(
                                        _vm.verrors.first("complaint_type_id")
                                      ) +
                                      "\n                              "
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Fault Description *")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.comment,
                              expression: "form.comment"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "",
                              expression: "''"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.verrors.has("comment") },
                          attrs: {
                            type: "text",
                            name: "comment",
                            "data-vv-as": "comment"
                          },
                          domProps: { value: _vm.form.comment },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "comment", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.verrors.has("comment")
                          ? _c(
                              "div",
                              { staticClass: "help-block invalid-feedback" },
                              [
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.verrors.first("comment")) +
                                    "\n                              "
                                )
                              ]
                            )
                          : _vm._e()
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(0)
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("br")
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 text-right" }, [
      _c(
        "button",
        { staticClass: "btn btn-success", attrs: { type: "submit" } },
        [_vm._v("Submit")]
      )
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./resources/js/components/ComplaintAddEdit.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ComplaintAddEdit.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ComplaintAddEdit_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./ComplaintAddEdit.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/ComplaintAddEdit.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_593e398b_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintAddEdit_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-593e398b","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./ComplaintAddEdit.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-593e398b\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintAddEdit.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ComplaintAddEdit_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_593e398b_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintAddEdit_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_593e398b_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintAddEdit_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/ComplaintAddEdit.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWU/NjY5ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnRBZGRFZGl0LnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwiY29tcG9uZW50cyIsIlZ1ZVRhZ3NJbnB1dCIsImZpbHRlcnMiLCJ0cnVuY2F0ZSIsInRleHQiLCJsZW5ndGgiLCJzdWZmaXgiLCJzdWJzdHJpbmciLCJjb21wdXRlZCIsImZpbHRlcmVkSXRlbXMiLCJhdXRvY29tcGxldGVJdGVtcyIsImZpbHRlciIsImkiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ0YWciLCJkYXRhIiwibWFjaGluZWQiLCJjaGVja2JveF9tb2RlbCIsImZvcm0iLCJGb3JtIiwiaWQiLCJhdG1faWQiLCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQiLCJjb21wbGFpbnRfdHlwZV9pZCIsImNvbW1lbnQiLCJhdG1zIiwiY29tcGxhaW50X3N5c3RlbV90eXBlcyIsImNvbXBsYWludF90eXBlIiwibW9kZWxzIiwib3BlcmF0b3JzIiwic2l0ZXMiLCJ1c2VycyIsInNsIiwiYXNzaWduZWRfaWRzIiwicGVybWlzc2lvbnMiLCJ2aWV3X21vZGUiLCJjb3VudHJpZXMiLCJzdGF0ZXMiLCJjaXRpZXMiLCJlZGl0bW9kZSIsInN0ZXAiLCJmaWxlIiwiaW52b2ljZV9jb3B5IiwiY2ZfY29weSIsIm5hdGlvbmFsX3Blcm1pdF9jb3B5Iiwicm9hZF90YXhfY29weSIsImluc3VyYW5jZV9jb3B5IiwicG9sbHV0aW9uX2NvcHkiLCJyY19jb3B5IiwibWFwR2V0dGVycyIsImJlZm9yZUNyZWF0ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwib25GaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwib25DRkNoYW5nZSIsIm9uTlBDaGFuZ2UiLCJvblJUQ2hhbmdlIiwib25JbnN1cmFuY2VDaGFuZ2UiLCJvblBvbGx1dGlvbkNoYW5nZSIsIm9uUkNDaGFuZ2UiLCJzdWJtaXRfbWFjaGluZSIsIiR2YWxpZGF0b3IiLCJ2YWxpZGF0ZUFsbCIsInZhbGlkIiwidmVycm9ycyIsImNsZWFyIiwiY2xvYWRlcmQiLCIkbG9hZGluZyIsInNob3ciLCJjb250YWluZXIiLCIkcmVmcyIsInJlZl9sb2FkX3VzZXIiLCJwdXQiLCJyZXNwb25zZSIsInJlc2V0IiwiaGlkZSIsInN1Y2Nlc3MiLCJmZCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsIlRvYXN0IiwiZmlyZSIsImljb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCIkcm91dGVyIiwicHVzaCIsImNhdGNoIiwiZXJyIiwiJHNldEVycm9yc0Zyb21SZXNwb25zZSIsImdyYW5kX3Blcm1pc3Npb24iLCJzZXR0aW5nX3Blcm1pc3Npb25yZWYiLCJ1c2VyIiwibW91bnRlZCIsIiRyb3V0ZSIsInBhcmFtcyIsImZpbGwiLCJkYXRlX3RpbWVfbWFjaGluZV9pYyIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImxhc3RfbWFpbnRlbmFuY2VfZGF0ZSIsImNyZWF0ZWQiLCJ3YXRjaCIsImZvcm0uY2F0ZWdvcnlfaWQiLCJuIiwibyIsInN1Yl9jYXRlZ29yeV9pZCIsInN1Yl9jYXRlZ29yaWVzIiwiZm9ybS5tYWNoaW5lX2NvbXBhbmllc19pZCIsIm1hY2hpbmVfbW9kZWxzX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RkE7QUFDQTtBQUdBO0FBQ0E7RUFDQUEsSUFBQTtFQUNBQyxVQUFBO0lBQ0FDO0VBQ0E7RUFDQUMsT0FBQTtJQUNBQyxR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O0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMkNBQTJDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHFDQUFxQywwQkFBMEI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw2Q0FBNkM7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0EsU0FBUyx5Q0FBeUMsaUJBQWlCLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ2xDLElBQUksS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ3BTaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ3VIO0FBQ2E7QUFDcEk7QUFDbVY7QUFDblY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRztBQUNuRyxnQkFBZ0IseUdBQWtCO0FBQ2xDLEVBQUUsbUlBQWM7QUFDaEIsRUFBRSwyT0FBYztBQUNoQixFQUFFLG9QQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWFYOztBQUVVLGdGQUFpQiIsImZpbGUiOiJqcy8yMy5idW5kbGUuNWIwN2I1MTllYWU2MjBkNmNjOGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0X21hY2hpbmUoKVwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj57eyBmb3JtLmlkID8gJ1VwZGF0ZScgOiAnQWRkJyB9fSBDb21wbGFpbnQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5jYXJkLWhlYWRlciAtLT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNlbGVjdCBBVE0gSUQgKjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwiYXRtX2lkXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwiYXRtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgQXRtIC4uLlwiIHYtbW9kZWw9XCJmb3JtLmF0bV9pZFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2F0bV9pZCcpIH1cIiBkYXRhLXZ2LW5hbWU9XCJhdG1faWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVxdWlyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdhdG1faWQnKVwiIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdCgnYXRtX2lkJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2FsbCBUeXBlICo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInRpdGxlXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwiY29tcGxhaW50X3N5c3RlbV90eXBlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgQ2FsbCBUeXBlIC4uLlwiIHYtbW9kZWw9XCJmb3JtLmNvbXBsYWludF9zeXN0ZW1fdHlwZV9pZFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2NvbXBsYWludF9zeXN0ZW1fdHlwZV9pZCcpIH1cIiBkYXRhLXZ2LW5hbWU9XCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVxdWlyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQnKVwiIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdCgnY29tcGxhaW50X3N5c3RlbV90eXBlX2lkJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RmF1bHQgVHlwZSAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJ0aXRsZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cImNvbXBsYWludF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBGYXVsdCBUeXBlIC4uLlwiIHYtbW9kZWw9XCJmb3JtLmNvbXBsYWludF90eXBlX2lkXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnY29tcGxhaW50X3R5cGVfaWQnKSB9XCIgZGF0YS12di1uYW1lPVwiY29tcGxhaW50X3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVxdWlyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdjb21wbGFpbnRfdHlwZV9pZCcpXCIgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KCdjb21wbGFpbnRfdHlwZV9pZCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RmF1bHQgRGVzY3JpcHRpb24gKjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLmNvbW1lbnRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb21tZW50XCIgdi12YWxpZGF0ZT1cIicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVwiY29tbWVudFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2NvbW1lbnQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2NvbW1lbnQnKVwiIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+IHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVycm9ycy5maXJzdCgnY29tbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICA8IS0tIC8ubmF2LXRhYnMtY3VzdG9tIC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gZW5kIHRhYnMgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZm9ybT5cbiAgICAgICA8YnI+XG4gICAgPC9zZWN0aW9uPlxuIDwvdGVtcGxhdGU+XG5cbiA8c2NyaXB0PlxuIGltcG9ydCBWdWVUYWdzSW5wdXQgZnJvbSAnQGpvaG11bi92dWUtdGFncy1pbnB1dCc7XG4gaW1wb3J0IHsgbm93IH0gZnJvbSAnbW9tZW50JztcbiBpbXBvcnQge1xuICAgIG1hcEdldHRlcnNcbiB9IGZyb20gXCJ2dWV4XCI7XG4gZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiVXNlckFkZEVkaXRcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgVnVlVGFnc0lucHV0LFxuICAgIH0sXG4gICAgZmlsdGVyczoge1xuICAgICAgIHRydW5jYXRlOiBmdW5jdGlvbiAodGV4dCwgbGVuZ3RoLCBzdWZmaXgpIHtcbiAgICAgICAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcoMCwgbGVuZ3RoKSArIHN1ZmZpeDtcbiAgICAgICB9LFxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICBmaWx0ZXJlZEl0ZW1zKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmF1dG9jb21wbGV0ZUl0ZW1zLmZpbHRlcihpID0+IHtcbiAgICAgICAgICAgICByZXR1cm4gaS50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnRhZy50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7XG4gICAgICAgICAgfSk7XG4gICAgICAgfSxcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtYWNoaW5lZDogJycsXG4gICAgICAgICAgY2hlY2tib3hfbW9kZWw6IFtdLFxuICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICAgYXRtX2lkOiAnJyxcbiAgICAgICAgICAgICBjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQ6ICcnLFxuICAgICAgICAgICAgIGNvbXBsYWludF90eXBlX2lkOiAnJyxcbiAgICAgICAgICAgICBjb21tZW50OiAnJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGF0bXM6IFtdLFxuICAgICAgICAgIGNvbXBsYWludF9zeXN0ZW1fdHlwZXM6IFtdLFxuICAgICAgICAgIGNvbXBsYWludF90eXBlOiBbXSxcbiAgICAgICAgICBtb2RlbHM6IFtdLFxuICAgICAgICAgIG9wZXJhdG9yczogW10sXG4gICAgICAgICAgc2l0ZXM6IFtdLFxuICAgICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgICB0YWc6ICcnLFxuICAgICAgICAgIGF1dG9jb21wbGV0ZUl0ZW1zOiBbXSxcblxuICAgICAgICAgIHNsOiAwLFxuICAgICAgICAgIGFzc2lnbmVkX2lkczogW10sXG4gICAgICAgICAgcGVybWlzc2lvbnM6IFtdLFxuICAgICAgICAgIHZpZXdfbW9kZTogZmFsc2UsXG4gICAgICAgICAgY291bnRyaWVzOiBbXSxcbiAgICAgICAgICBzdGF0ZXM6IFtdLFxuICAgICAgICAgIGNpdGllczogW10sXG4gICAgICAgICAgZWRpdG1vZGU6IGZhbHNlLFxuICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgdXNlcnM6IHt9LFxuICAgICAgICAgIGZpbGU6ICcnLFxuICAgICAgICAgIGludm9pY2VfY29weTogbnVsbCxcbiAgICAgICAgICBjZl9jb3B5OiBudWxsLFxuICAgICAgICAgIG5hdGlvbmFsX3Blcm1pdF9jb3B5Om51bGwsXG4gICAgICAgICAgcm9hZF90YXhfY29weTogbnVsbCxcbiAgICAgICAgICBpbnN1cmFuY2VfY29weTogbnVsbCxcbiAgICAgICAgICBwb2xsdXRpb25fY29weTogbnVsbCxcbiAgICAgICAgICByY19jb3B5OiBudWxsXG4gICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAuLi5tYXBHZXR0ZXJzKFtcImVycm9yc1wiXSksXG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICAgYXhpb3MuZ2V0KFwiYXBpL2xvZGdlQ29tcGxhaW50SGVscFwiKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzPT09PT0+XCIscmVzKTtcblxuICAgICAgICAgICAgIHRoaXMuYXRtcyA9IHJlcy5kYXRhLmRhdGEuYXRtcztcbiAgICAgICAgICAgICB0aGlzLmNvbXBsYWludF9zeXN0ZW1fdHlwZXMgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludF9zeXN0ZW1fdHlwZXM7XG4gICAgICAgICAgICAgdGhpcy5jb21wbGFpbnRfdHlwZSA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50X3R5cGU7XG4gICAgICAgICAgfSlcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgIG9uRmlsZUNoYW5nZShlKSB7XG4gICAgICAgICAgdGhpcy5pbnZvaWNlX2NvcHkgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICB9LFxuXG4gICAgICAgb25DRkNoYW5nZShlKXtcbiAgICAgICAgICB0aGlzLmNmX2NvcHkgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICB9LFxuXG4gICAgICAgb25OUENoYW5nZShlKXtcbiAgICAgICAgICB0aGlzLm5hdGlvbmFsX3Blcm1pdF9jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIG9uUlRDaGFuZ2UoZSl7XG4gICAgICAgICAgdGhpcy5yb2FkX3RheF9jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIG9uSW5zdXJhbmNlQ2hhbmdlKGUpe1xuICAgICAgICAgIHRoaXMuaW5zdXJhbmNlX2NvcHkgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICB9LFxuXG4gICAgICAgb25Qb2xsdXRpb25DaGFuZ2UoZSl7XG4gICAgICAgICAgdGhpcy5wb2xsdXRpb25fY29weSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgIH0sXG5cbiAgICAgICBvblJDQ2hhbmdlKGUpe1xuICAgICAgICAgIHRoaXMucmNfY29weSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgIH0sXG5cbiAgICAgICBzdWJtaXRfbWFjaGluZSgpIHtcbiAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKGFzeW5jICh2YWxpZCkgPT4ge1xuICAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmVycm9ycy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX3VzZXJcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uaWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnB1dCgnYXBpL21hY2hpbmUvJyArIHRoaXMuZm9ybS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZmlsZWAsIHRoaXMuaW52b2ljZV9jb3B5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGNmZmlsZWAsIHRoaXMuY2ZfY29weSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBucGZpbGVgLCB0aGlzLm5hdGlvbmFsX3Blcm1pdF9jb3B5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYHJ0ZmlsZWAsIHRoaXMucm9hZF90YXhfY29weSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBpbnN1cmFuY2VmaWxlYCwgdGhpcy5pbnN1cmFuY2VfY29weSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBwb2xsdXRpb25maWxlYCwgdGhpcy5wb2xsdXRpb25fY29weSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGByY2ZpbGVgLCB0aGlzLnJjX2NvcHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgaWRgLCB0aGlzLmZvcm0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9tYWNoaW5lL2ZpbGVzJywgZmQpLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL21hY2hpbmVzJykuY2F0Y2goKCkgPT4geyB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UoZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBvc3QoJ2FwaS9zdG9yZUNvbXBsYWludCcpXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uaWQgPSBkYXRhLmRhdGEuZGF0YS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9jb21wbGFpbnQnKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZSAmJiBlcnIucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldEVycm9yc0Zyb21SZXNwb25zZShlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgfSxcblxuICAgICAgIGdyYW5kX3Blcm1pc3Npb24oKSB7XG4gICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMuc2V0dGluZ19wZXJtaXNzaW9ucmVmXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvdXNlci9ncmFuZF9wZXJtaXNzaW9uJywge1xuICAgICAgICAgICAgIHVzZXI6IHRoaXMuZm9ybS5pZCxcbiAgICAgICAgICAgICBwZXJtaXNzaW9uczogdGhpcy5hc3NpZ25lZF9pZHNcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICAgfSlcbiAgICAgICB9LFxuXG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgIGlmICh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpIHtcbiAgICAgICAgICB0aGlzLmZvcm0uaWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XG4gICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfdXNlclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF4aW9zLmdldChcImFwaS9tYWNoaW5lL1wiICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxuICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hY2hpbmVkID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5maWxsKHJlcy5kYXRhLmRhdGEpXG4gICAgICAgICAgICAgICAgbGV0IGRhdGVfdGltZV9tYWNoaW5lX2ljID0gcmVzLmRhdGEuZGF0YS5kYXRlX3RpbWVfbWFjaGluZV9pY1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5kYXRlX3RpbWVfbWFjaGluZV9pYyA9IG5ldyBEYXRlKGRhdGVfdGltZV9tYWNoaW5lX2ljKS50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLmxhc3RfbWFpbnRlbmFuY2VfZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZm9ybS5sYXN0X21haW50ZW5hbmNlX2RhdGUpLnRvSVNPU3RyaW5nKClcblxuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbWFjaGluZXMvJykuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgICB9KVxuXG4gICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHsgfSxcbiAgICB3YXRjaDoge1xuXG4gICAgICAgYXN5bmMgJ2Zvcm0uY2F0ZWdvcnlfaWQnKG4sIG8pIHtcbiAgICAgICAgICBpZiAobylcbiAgICAgICAgICAgICB0aGlzLmZvcm0uc3ViX2NhdGVnb3J5X2lkID0gJydcbiAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9jYXRlZ29yeS9cIiArIG4pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgIH0sXG4gICAgICAgYXN5bmMgJ2Zvcm0ubWFjaGluZV9jb21wYW5pZXNfaWQnKG4sIG8pIHtcbiAgICAgICAgICBpZiAobylcbiAgICAgICAgICAgICB0aGlzLmZvcm0ubWFjaGluZV9tb2RlbHNfaWQgPSAnJ1xuICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL21vZGVsL1wiICsgbilcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbHMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgIH0sXG4gICAgfVxuIH1cbiA8L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWhvcml6b250YWxcIixcbiAgICAgICAgYXR0cnM6IHsgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0X21hY2hpbmUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZm9ybS5pZCA/IFwiVXBkYXRlXCIgOiBcIkFkZFwiKSArIFwiIENvbXBsYWludFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTZWxlY3QgQVRNIElEICpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFwiYXRtX2lkXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImF0bV9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5hdG1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIEF0bSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiYXRtX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uYXRtX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJhdG1faWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5hdG1faWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImF0bV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJhdG1faWRcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQ2FsbCBUeXBlICpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmNvbXBsYWludF9zeXN0ZW1fdHlwZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9vc2UgQ2FsbCBUeXBlIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcGxhaW50X3N5c3RlbV90eXBlX2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY29tcGxhaW50X3N5c3RlbV90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkZhdWx0IFR5cGUgKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFwiY29tcGxhaW50X3R5cGVfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5jb21wbGFpbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBGYXVsdCBUeXBlIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJjb21wbGFpbnRfdHlwZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbXBsYWludF90eXBlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJjb21wbGFpbnRfdHlwZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNvbXBsYWludF90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjb21wbGFpbnRfdHlwZV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJjb21wbGFpbnRfdHlwZV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRmF1bHQgRGVzY3JpcHRpb24gKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY29tbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb21tZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFwiY29tbWVudFwiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY29tbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uY29tbWVudCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImNvbW1lbnRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNvbW1lbnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJjb21tZW50XCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJiclwiKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTIgdGV4dC1yaWdodFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSxcbiAgICAgICAgW192bS5fdihcIlN1Ym1pdFwiKV1cbiAgICAgIClcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNTkzZTM5OGJcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbXBsYWludEFkZEVkaXQudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db21wbGFpbnRBZGRFZGl0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01OTNlMzk4YlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db21wbGFpbnRBZGRFZGl0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTkzZTM5OGJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01OTNlMzk4YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9