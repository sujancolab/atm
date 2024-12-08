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
              this.$router.push('/complaint-list/1').catch(() => {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWU/NjY5ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnRBZGRFZGl0LnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwiY29tcG9uZW50cyIsIlZ1ZVRhZ3NJbnB1dCIsImZpbHRlcnMiLCJ0cnVuY2F0ZSIsInRleHQiLCJsZW5ndGgiLCJzdWZmaXgiLCJzdWJzdHJpbmciLCJjb21wdXRlZCIsImZpbHRlcmVkSXRlbXMiLCJhdXRvY29tcGxldGVJdGVtcyIsImZpbHRlciIsImkiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ0YWciLCJkYXRhIiwibWFjaGluZWQiLCJjaGVja2JveF9tb2RlbCIsImZvcm0iLCJGb3JtIiwiaWQiLCJhdG1faWQiLCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQiLCJjb21wbGFpbnRfdHlwZV9pZCIsImNvbW1lbnQiLCJhdG1zIiwiY29tcGxhaW50X3N5c3RlbV90eXBlcyIsImNvbXBsYWludF90eXBlIiwibW9kZWxzIiwib3BlcmF0b3JzIiwic2l0ZXMiLCJ1c2VycyIsInNsIiwiYXNzaWduZWRfaWRzIiwicGVybWlzc2lvbnMiLCJ2aWV3X21vZGUiLCJjb3VudHJpZXMiLCJzdGF0ZXMiLCJjaXRpZXMiLCJlZGl0bW9kZSIsInN0ZXAiLCJmaWxlIiwiaW52b2ljZV9jb3B5IiwiY2ZfY29weSIsIm5hdGlvbmFsX3Blcm1pdF9jb3B5Iiwicm9hZF90YXhfY29weSIsImluc3VyYW5jZV9jb3B5IiwicG9sbHV0aW9uX2NvcHkiLCJyY19jb3B5IiwibWFwR2V0dGVycyIsImJlZm9yZUNyZWF0ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwib25GaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwib25DRkNoYW5nZSIsIm9uTlBDaGFuZ2UiLCJvblJUQ2hhbmdlIiwib25JbnN1cmFuY2VDaGFuZ2UiLCJvblBvbGx1dGlvbkNoYW5nZSIsIm9uUkNDaGFuZ2UiLCJzdWJtaXRfbWFjaGluZSIsIiR2YWxpZGF0b3IiLCJ2YWxpZGF0ZUFsbCIsInZhbGlkIiwidmVycm9ycyIsImNsZWFyIiwiY2xvYWRlcmQiLCIkbG9hZGluZyIsInNob3ciLCJjb250YWluZXIiLCIkcmVmcyIsInJlZl9sb2FkX3VzZXIiLCJwdXQiLCJyZXNwb25zZSIsInJlc2V0IiwiaGlkZSIsInN1Y2Nlc3MiLCJmZCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsIlRvYXN0IiwiZmlyZSIsImljb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCIkcm91dGVyIiwicHVzaCIsImNhdGNoIiwiZXJyIiwiJHNldEVycm9yc0Zyb21SZXNwb25zZSIsImdyYW5kX3Blcm1pc3Npb24iLCJzZXR0aW5nX3Blcm1pc3Npb25yZWYiLCJ1c2VyIiwibW91bnRlZCIsIiRyb3V0ZSIsInBhcmFtcyIsImZpbGwiLCJkYXRlX3RpbWVfbWFjaGluZV9pYyIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImxhc3RfbWFpbnRlbmFuY2VfZGF0ZSIsImNyZWF0ZWQiLCJ3YXRjaCIsImZvcm0uY2F0ZWdvcnlfaWQiLCJuIiwibyIsInN1Yl9jYXRlZ29yeV9pZCIsInN1Yl9jYXRlZ29yaWVzIiwiZm9ybS5tYWNoaW5lX2NvbXBhbmllc19pZCIsIm1hY2hpbmVfbW9kZWxzX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RkE7QUFDQTtBQUdBO0FBQ0E7RUFDQUEsSUFBQTtFQUNBQyxVQUFBO0lBQ0FDO0VBQ0E7RUFDQUMsT0FBQTtJQUNBQyxR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QTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJDQUEyQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixxQ0FBcUMsMEJBQTBCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkNBQTZDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBLFNBQVMseUNBQXlDLGlCQUFpQixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQztBQUNsQyxJQUFJLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNwU2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1SDtBQUNhO0FBQ3BJO0FBQ21WO0FBQ25WO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUc7QUFDbkcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLG1JQUFjO0FBQ2hCLEVBQUUsMk9BQWM7QUFDaEIsRUFBRSxvUEFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvMjMuYnVuZGxlLjJmZWMxZDllZjQ5YWY2ZjAwNjhiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdF9tYWNoaW5lKClcIiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgZm9ybS5pZCA/ICdVcGRhdGUnIDogJ0FkZCcgfX0gQ29tcGxhaW50PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8uY2FyZC1oZWFkZXIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWxlY3QgQVRNIElEICo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cImF0bV9pZFwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cImF0bXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIEF0bSAuLi5cIiB2LW1vZGVsPVwiZm9ybS5hdG1faWRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdhdG1faWQnKSB9XCIgZGF0YS12di1uYW1lPVwiYXRtX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnYXRtX2lkJylcIiBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoJ2F0bV9pZCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNhbGwgVHlwZSAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJ0aXRsZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cImNvbXBsYWludF9zeXN0ZW1fdHlwZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIENhbGwgVHlwZSAuLi5cIiB2LW1vZGVsPVwiZm9ybS5jb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQnKSB9XCIgZGF0YS12di1uYW1lPVwiY29tcGxhaW50X3N5c3RlbV90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY29tcGxhaW50X3N5c3RlbV90eXBlX2lkJylcIiBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoJ2NvbXBsYWludF9zeXN0ZW1fdHlwZV9pZCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZhdWx0IFR5cGUgKjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwidGl0bGVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJjb21wbGFpbnRfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgRmF1bHQgVHlwZSAuLi5cIiB2LW1vZGVsPVwiZm9ybS5jb21wbGFpbnRfdHlwZV9pZFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2NvbXBsYWludF90eXBlX2lkJykgfVwiIGRhdGEtdnYtbmFtZT1cImNvbXBsYWludF90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY29tcGxhaW50X3R5cGVfaWQnKVwiIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdCgnY29tcGxhaW50X3R5cGVfaWQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZhdWx0IERlc2NyaXB0aW9uICo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5jb21tZW50XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiY29tbWVudFwiIHYtdmFsaWRhdGU9XCInJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cImNvbW1lbnRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjb21tZW50JykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdjb21tZW50JylcIiBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPiB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2NvbW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgPCEtLSAvLm5hdi10YWJzLWN1c3RvbSAtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIGVuZCB0YWJzIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Zvcm0+XG4gICAgICAgPGJyPlxuICAgIDwvc2VjdGlvbj5cbiA8L3RlbXBsYXRlPlxuXG4gPHNjcmlwdD5cbiBpbXBvcnQgVnVlVGFnc0lucHV0IGZyb20gJ0Bqb2htdW4vdnVlLXRhZ3MtaW5wdXQnO1xuIGltcG9ydCB7IG5vdyB9IGZyb20gJ21vbWVudCc7XG4gaW1wb3J0IHtcbiAgICBtYXBHZXR0ZXJzXG4gfSBmcm9tIFwidnVleFwiO1xuIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIlVzZXJBZGRFZGl0XCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgIFZ1ZVRhZ3NJbnB1dCxcbiAgICB9LFxuICAgIGZpbHRlcnM6IHtcbiAgICAgICB0cnVuY2F0ZTogZnVuY3Rpb24gKHRleHQsIGxlbmd0aCwgc3VmZml4KSB7XG4gICAgICAgICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyBzdWZmaXg7XG4gICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgZmlsdGVyZWRJdGVtcygpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvY29tcGxldGVJdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgICAgICAgcmV0dXJuIGkudGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy50YWcudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xuICAgICAgICAgIH0pO1xuICAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWFjaGluZWQ6ICcnLFxuICAgICAgICAgIGNoZWNrYm94X21vZGVsOiBbXSxcbiAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgIGF0bV9pZDogJycsXG4gICAgICAgICAgICAgY29tcGxhaW50X3N5c3RlbV90eXBlX2lkOiAnJyxcbiAgICAgICAgICAgICBjb21wbGFpbnRfdHlwZV9pZDogJycsXG4gICAgICAgICAgICAgY29tbWVudDogJydcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhdG1zOiBbXSxcbiAgICAgICAgICBjb21wbGFpbnRfc3lzdGVtX3R5cGVzOiBbXSxcbiAgICAgICAgICBjb21wbGFpbnRfdHlwZTogW10sXG4gICAgICAgICAgbW9kZWxzOiBbXSxcbiAgICAgICAgICBvcGVyYXRvcnM6IFtdLFxuICAgICAgICAgIHNpdGVzOiBbXSxcbiAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgdGFnOiAnJyxcbiAgICAgICAgICBhdXRvY29tcGxldGVJdGVtczogW10sXG5cbiAgICAgICAgICBzbDogMCxcbiAgICAgICAgICBhc3NpZ25lZF9pZHM6IFtdLFxuICAgICAgICAgIHBlcm1pc3Npb25zOiBbXSxcbiAgICAgICAgICB2aWV3X21vZGU6IGZhbHNlLFxuICAgICAgICAgIGNvdW50cmllczogW10sXG4gICAgICAgICAgc3RhdGVzOiBbXSxcbiAgICAgICAgICBjaXRpZXM6IFtdLFxuICAgICAgICAgIGVkaXRtb2RlOiBmYWxzZSxcbiAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgIHVzZXJzOiB7fSxcbiAgICAgICAgICBmaWxlOiAnJyxcbiAgICAgICAgICBpbnZvaWNlX2NvcHk6IG51bGwsXG4gICAgICAgICAgY2ZfY29weTogbnVsbCxcbiAgICAgICAgICBuYXRpb25hbF9wZXJtaXRfY29weTpudWxsLFxuICAgICAgICAgIHJvYWRfdGF4X2NvcHk6IG51bGwsXG4gICAgICAgICAgaW5zdXJhbmNlX2NvcHk6IG51bGwsXG4gICAgICAgICAgcG9sbHV0aW9uX2NvcHk6IG51bGwsXG4gICAgICAgICAgcmNfY29weTogbnVsbFxuICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgLi4ubWFwR2V0dGVycyhbXCJlcnJvcnNcIl0pLFxuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgIGF4aW9zLmdldChcImFwaS9sb2RnZUNvbXBsYWludEhlbHBcIilcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcz09PT09PlwiLHJlcyk7XG5cbiAgICAgICAgICAgICB0aGlzLmF0bXMgPSByZXMuZGF0YS5kYXRhLmF0bXM7XG4gICAgICAgICAgICAgdGhpcy5jb21wbGFpbnRfc3lzdGVtX3R5cGVzID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfc3lzdGVtX3R5cGVzO1xuICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50X3R5cGUgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludF90eXBlO1xuICAgICAgICAgIH0pXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICBvbkZpbGVDaGFuZ2UoZSkge1xuICAgICAgICAgIHRoaXMuaW52b2ljZV9jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIG9uQ0ZDaGFuZ2UoZSl7XG4gICAgICAgICAgdGhpcy5jZl9jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIG9uTlBDaGFuZ2UoZSl7XG4gICAgICAgICAgdGhpcy5uYXRpb25hbF9wZXJtaXRfY29weSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgIH0sXG5cbiAgICAgICBvblJUQ2hhbmdlKGUpe1xuICAgICAgICAgIHRoaXMucm9hZF90YXhfY29weSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgIH0sXG5cbiAgICAgICBvbkluc3VyYW5jZUNoYW5nZShlKXtcbiAgICAgICAgICB0aGlzLmluc3VyYW5jZV9jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIG9uUG9sbHV0aW9uQ2hhbmdlKGUpe1xuICAgICAgICAgIHRoaXMucG9sbHV0aW9uX2NvcHkgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICB9LFxuXG4gICAgICAgb25SQ0NoYW5nZShlKXtcbiAgICAgICAgICB0aGlzLnJjX2NvcHkgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICB9LFxuXG4gICAgICAgc3VibWl0X21hY2hpbmUoKSB7XG4gICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbihhc3luYyAodmFsaWQpID0+IHtcbiAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnJvcnMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xuICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5yZWZfbG9hZF91c2VyXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLmlkID4gMCkge1xuICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wdXQoJ2FwaS9tYWNoaW5lLycgKyB0aGlzLmZvcm0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVgLCB0aGlzLmludm9pY2VfY29weSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBjZmZpbGVgLCB0aGlzLmNmX2NvcHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgbnBmaWxlYCwgdGhpcy5uYXRpb25hbF9wZXJtaXRfY29weSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBydGZpbGVgLCB0aGlzLnJvYWRfdGF4X2NvcHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgaW5zdXJhbmNlZmlsZWAsIHRoaXMuaW5zdXJhbmNlX2NvcHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgcG9sbHV0aW9uZmlsZWAsIHRoaXMucG9sbHV0aW9uX2NvcHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgcmNmaWxlYCwgdGhpcy5yY19jb3B5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGlkYCwgdGhpcy5mb3JtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvbWFjaGluZS9maWxlcycsIGZkKS50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9tYWNoaW5lcycpLmNhdGNoKCgpID0+IHsgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlICYmIGVyci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wb3N0KCdhcGkvc3RvcmVDb21wbGFpbnQnKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmlkID0gZGF0YS5kYXRhLmRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvY29tcGxhaW50LWxpc3QvMScpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlICYmIGVyci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICB9LFxuXG4gICAgICAgZ3JhbmRfcGVybWlzc2lvbigpIHtcbiAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xuICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5zZXR0aW5nX3Blcm1pc3Npb25yZWZcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGF4aW9zLnBvc3QoJ2FwaS91c2VyL2dyYW5kX3Blcm1pc3Npb24nLCB7XG4gICAgICAgICAgICAgdXNlcjogdGhpcy5mb3JtLmlkLFxuICAgICAgICAgICAgIHBlcm1pc3Npb25zOiB0aGlzLmFzc2lnbmVkX2lkc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICB9KVxuICAgICAgIH0sXG5cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgaWYgKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCkge1xuICAgICAgICAgIHRoaXMuZm9ybS5pZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcbiAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xuICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5yZWZfbG9hZF91c2VyXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL21hY2hpbmUvXCIgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpXG4gICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWFjaGluZWQgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLmZpbGwocmVzLmRhdGEuZGF0YSlcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZV90aW1lX21hY2hpbmVfaWMgPSByZXMuZGF0YS5kYXRhLmRhdGVfdGltZV9tYWNoaW5lX2ljXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLmRhdGVfdGltZV9tYWNoaW5lX2ljID0gbmV3IERhdGUoZGF0ZV90aW1lX21hY2hpbmVfaWMpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ubGFzdF9tYWludGVuYW5jZV9kYXRlID0gbmV3IERhdGUodGhpcy5mb3JtLmxhc3RfbWFpbnRlbmFuY2VfZGF0ZSkudG9JU09TdHJpbmcoKVxuXG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xuICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9tYWNoaW5lcy8nKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgIH0pXG5cbiAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkgeyB9LFxuICAgIHdhdGNoOiB7XG5cbiAgICAgICBhc3luYyAnZm9ybS5jYXRlZ29yeV9pZCcobiwgbykge1xuICAgICAgICAgIGlmIChvKVxuICAgICAgICAgICAgIHRoaXMuZm9ybS5zdWJfY2F0ZWdvcnlfaWQgPSAnJ1xuICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2NhdGVnb3J5L1wiICsgbilcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgfSxcbiAgICAgICBhc3luYyAnZm9ybS5tYWNoaW5lX2NvbXBhbmllc19pZCcobiwgbykge1xuICAgICAgICAgIGlmIChvKVxuICAgICAgICAgICAgIHRoaXMuZm9ybS5tYWNoaW5lX21vZGVsc19pZCA9ICcnXG4gICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvbW9kZWwvXCIgKyBuKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVscyA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgfSxcbiAgICB9XG4gfVxuIDwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0taG9yaXpvbnRhbFwiLFxuICAgICAgICBhdHRyczogeyBlbmN0eXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXRfbWFjaGluZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtLmlkID8gXCJVcGRhdGVcIiA6IFwiQWRkXCIpICsgXCIgQ29tcGxhaW50XCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlNlbGVjdCBBVE0gSUQgKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXCJhdG1faWRcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiYXRtX2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmF0bXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9vc2UgQXRtIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJhdG1faWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5hdG1faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImF0bV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmF0bV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiYXRtX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImF0bV9pZFwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJDYWxsIFR5cGUgKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBsYWludF9zeXN0ZW1fdHlwZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uY29tcGxhaW50X3N5c3RlbV90eXBlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBDYWxsIFR5cGUgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImNvbXBsYWludF9zeXN0ZW1fdHlwZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbXBsYWludF9zeXN0ZW1fdHlwZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNvbXBsYWludF9zeXN0ZW1fdHlwZV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBsYWludF9zeXN0ZW1fdHlwZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRmF1bHQgVHlwZSAqXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXCJjb21wbGFpbnRfdHlwZV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmNvbXBsYWludF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIEZhdWx0IFR5cGUgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImNvbXBsYWludF90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY29tcGxhaW50X3R5cGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImNvbXBsYWludF90eXBlX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY29tcGxhaW50X3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNvbXBsYWludF90eXBlX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcImNvbXBsYWludF90eXBlX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJGYXVsdCBEZXNjcmlwdGlvbiAqXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jb21tZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXCJjb21tZW50XCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjb21tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiY29tbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5jb21tZW50IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiY29tbWVudFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY29tbWVudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmVycm9ycy5maXJzdChcImNvbW1lbnRcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImJyXCIpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMiB0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LFxuICAgICAgICBbX3ZtLl92KFwiU3VibWl0XCIpXVxuICAgICAgKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01OTNlMzk4YlwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwidmFyIGRpc3Bvc2VkID0gZmFsc2Vcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29tcGxhaW50QWRkRWRpdC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbXBsYWludEFkZEVkaXQudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTU5M2UzOThiXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NvbXBsYWludEFkZEVkaXQudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnRBZGRFZGl0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01OTNlMzk4YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU5M2UzOThiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=