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
          this.form.post('api/storeComplaint').then(data => {
            console.log("Data: ", data.data.data);
            this.$validator.reset();
            cloaderd.hide();
            this.form.id = data.data.data.id;
            this.form.reset();
            console.log("data", data.data);
            Toast.fire({
              icon: 'success',
              title: data.data.message
            });
            this.$router.push('/complaint-list/1').catch(() => {});
          }).catch(err => {
            console.log(err);
            if (err.response && err.response.data) {
              console.log(err.response.data);
              this.$setErrorsFromResponse(err.response.data);
            }
            cloaderd.hide();
          });

          // if (this.form.id > 0) {
          //    this.form.put('api/machine/' + this.form.id)
          //       .then((response) => {
          //          this.$validator.reset();
          //          cloaderd.hide()
          //          if (response.data.success == true) {

          //             var fd = new FormData();
          //             fd.append(`file`, this.invoice_copy);
          //             fd.append(`cffile`, this.cf_copy);
          //             fd.append(`npfile`, this.national_permit_copy);
          //             fd.append(`rtfile`, this.road_tax_copy);
          //             fd.append(`insurancefile`, this.insurance_copy);
          //             fd.append(`pollutionfile`, this.pollution_copy);
          //             fd.append(`rcfile`, this.rc_copy);
          //             fd.append(`id`, this.form.id);
          //             axios.post('api/machine/files', fd).then((res) => {

          //                this.form.reset();
          //                Toast.fire({
          //                   icon: 'success',
          //                   title: response.data.message
          //                });
          //                this.$router.push('/machines').catch(() => { });

          //             })
          //          }
          //       })
          //       .catch(err => {
          //          cloaderd.hide();
          //          if (err.response && err.response.data) {
          //             this.$setErrorsFromResponse(err.response.data);
          //          }
          //       })
          // } else {
          //    this.form.post('api/storeComplaint')
          //       .then((data) => {
          //          this.$validator.reset();
          //          cloaderd.hide()
          //          this.form.id = data.data.data.id;
          //          this.form.reset();
          //          console.log("data",data.data);

          //          Toast.fire({
          //             icon: 'success',
          //             title: data.data.message
          //          });
          //          this.$router.push('/complaint-list/1').catch(() => { });
          //       })
          //       .catch(err => {
          //          if (err.response && err.response.data) {
          //             this.$setErrorsFromResponse(err.response.data);
          //          }
          //          cloaderd.hide();
          //       })
          // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWU/NjY5ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnRBZGRFZGl0LnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwiY29tcG9uZW50cyIsIlZ1ZVRhZ3NJbnB1dCIsImZpbHRlcnMiLCJ0cnVuY2F0ZSIsInRleHQiLCJsZW5ndGgiLCJzdWZmaXgiLCJzdWJzdHJpbmciLCJjb21wdXRlZCIsImZpbHRlcmVkSXRlbXMiLCJhdXRvY29tcGxldGVJdGVtcyIsImZpbHRlciIsImkiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ0YWciLCJkYXRhIiwibWFjaGluZWQiLCJjaGVja2JveF9tb2RlbCIsImZvcm0iLCJGb3JtIiwiaWQiLCJhdG1faWQiLCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQiLCJjb21wbGFpbnRfdHlwZV9pZCIsImNvbW1lbnQiLCJhdG1zIiwiY29tcGxhaW50X3N5c3RlbV90eXBlcyIsImNvbXBsYWludF90eXBlIiwibW9kZWxzIiwib3BlcmF0b3JzIiwic2l0ZXMiLCJ1c2VycyIsInNsIiwiYXNzaWduZWRfaWRzIiwicGVybWlzc2lvbnMiLCJ2aWV3X21vZGUiLCJjb3VudHJpZXMiLCJzdGF0ZXMiLCJjaXRpZXMiLCJlZGl0bW9kZSIsInN0ZXAiLCJmaWxlIiwiaW52b2ljZV9jb3B5IiwiY2ZfY29weSIsIm5hdGlvbmFsX3Blcm1pdF9jb3B5Iiwicm9hZF90YXhfY29weSIsImluc3VyYW5jZV9jb3B5IiwicG9sbHV0aW9uX2NvcHkiLCJyY19jb3B5IiwibWFwR2V0dGVycyIsImJlZm9yZUNyZWF0ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwib25GaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwib25DRkNoYW5nZSIsIm9uTlBDaGFuZ2UiLCJvblJUQ2hhbmdlIiwib25JbnN1cmFuY2VDaGFuZ2UiLCJvblBvbGx1dGlvbkNoYW5nZSIsIm9uUkNDaGFuZ2UiLCJzdWJtaXRfbWFjaGluZSIsIiR2YWxpZGF0b3IiLCJ2YWxpZGF0ZUFsbCIsInZhbGlkIiwidmVycm9ycyIsImNsZWFyIiwiY2xvYWRlcmQiLCIkbG9hZGluZyIsInNob3ciLCJjb250YWluZXIiLCIkcmVmcyIsInJlZl9sb2FkX3VzZXIiLCJwb3N0IiwicmVzZXQiLCJoaWRlIiwiVG9hc3QiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwibWVzc2FnZSIsIiRyb3V0ZXIiLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJyZXNwb25zZSIsIiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UiLCJncmFuZF9wZXJtaXNzaW9uIiwic2V0dGluZ19wZXJtaXNzaW9ucmVmIiwidXNlciIsInN1Y2Nlc3MiLCJtb3VudGVkIiwiJHJvdXRlIiwicGFyYW1zIiwiZmlsbCIsImRhdGVfdGltZV9tYWNoaW5lX2ljIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwibGFzdF9tYWludGVuYW5jZV9kYXRlIiwiY3JlYXRlZCIsIndhdGNoIiwiZm9ybS5jYXRlZ29yeV9pZCIsIm4iLCJvIiwic3ViX2NhdGVnb3J5X2lkIiwic3ViX2NhdGVnb3JpZXMiLCJmb3JtLm1hY2hpbmVfY29tcGFuaWVzX2lkIiwibWFjaGluZV9tb2RlbHNfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlGQTtBQUNBO0FBR0E7QUFDQTtFQUNBQSxJQUFBO0VBQ0FDLFVBQUE7SUFDQUM7RUFDQTtFQUNBQyxPQUFBO0lBQ0FDLFFBQUEsV0FBQUEsQ0FBQUMsSUFBQSxFQUFBQyxNQUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1SDtBQUNhO0FBQ3BJO0FBQ21WO0FBQ25WO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUc7QUFDbkcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLG1JQUFjO0FBQ2hCLEVBQUUsMk9BQWM7QUFDaEIsRUFBRSxvUEFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvMjMuYnVuZGxlLjk4ODA1YjliNmEyZjNkNjQ1MWZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdF9tYWNoaW5lKClcIiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgZm9ybS5pZCA/ICdVcGRhdGUnIDogJ0FkZCcgfX0gQ29tcGxhaW50PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8uY2FyZC1oZWFkZXIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWxlY3QgQVRNIElEICo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cImF0bV9pZFwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cImF0bXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIEF0bSAuLi5cIiB2LW1vZGVsPVwiZm9ybS5hdG1faWRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdhdG1faWQnKSB9XCIgZGF0YS12di1uYW1lPVwiYXRtX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnYXRtX2lkJylcIiBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoJ2F0bV9pZCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNhbGwgVHlwZSAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJ0aXRsZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cImNvbXBsYWludF9zeXN0ZW1fdHlwZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIENhbGwgVHlwZSAuLi5cIiB2LW1vZGVsPVwiZm9ybS5jb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQnKSB9XCIgZGF0YS12di1uYW1lPVwiY29tcGxhaW50X3N5c3RlbV90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY29tcGxhaW50X3N5c3RlbV90eXBlX2lkJylcIiBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoJ2NvbXBsYWludF9zeXN0ZW1fdHlwZV9pZCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZhdWx0IFR5cGUgKjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwidGl0bGVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJjb21wbGFpbnRfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgRmF1bHQgVHlwZSAuLi5cIiB2LW1vZGVsPVwiZm9ybS5jb21wbGFpbnRfdHlwZV9pZFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2NvbXBsYWludF90eXBlX2lkJykgfVwiIGRhdGEtdnYtbmFtZT1cImNvbXBsYWludF90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY29tcGxhaW50X3R5cGVfaWQnKVwiIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdCgnY29tcGxhaW50X3R5cGVfaWQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZhdWx0IERlc2NyaXB0aW9uICo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5jb21tZW50XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiY29tbWVudFwiIHYtdmFsaWRhdGU9XCInJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cImNvbW1lbnRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjb21tZW50JykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdjb21tZW50JylcIiBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPiB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2NvbW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgPCEtLSAvLm5hdi10YWJzLWN1c3RvbSAtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIGVuZCB0YWJzIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Zvcm0+XG4gICAgICAgPGJyPlxuICAgIDwvc2VjdGlvbj5cbiA8L3RlbXBsYXRlPlxuXG4gPHNjcmlwdD5cbiBpbXBvcnQgVnVlVGFnc0lucHV0IGZyb20gJ0Bqb2htdW4vdnVlLXRhZ3MtaW5wdXQnO1xuIGltcG9ydCB7IG5vdyB9IGZyb20gJ21vbWVudCc7XG4gaW1wb3J0IHtcbiAgICBtYXBHZXR0ZXJzXG4gfSBmcm9tIFwidnVleFwiO1xuIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIlVzZXJBZGRFZGl0XCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgIFZ1ZVRhZ3NJbnB1dCxcbiAgICB9LFxuICAgIGZpbHRlcnM6IHtcbiAgICAgICB0cnVuY2F0ZTogZnVuY3Rpb24gKHRleHQsIGxlbmd0aCwgc3VmZml4KSB7XG4gICAgICAgICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyBzdWZmaXg7XG4gICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgZmlsdGVyZWRJdGVtcygpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvY29tcGxldGVJdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgICAgICAgcmV0dXJuIGkudGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy50YWcudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xuICAgICAgICAgIH0pO1xuICAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWFjaGluZWQ6ICcnLFxuICAgICAgICAgIGNoZWNrYm94X21vZGVsOiBbXSxcbiAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgIGF0bV9pZDogJycsXG4gICAgICAgICAgICAgY29tcGxhaW50X3N5c3RlbV90eXBlX2lkOiAnJyxcbiAgICAgICAgICAgICBjb21wbGFpbnRfdHlwZV9pZDogJycsXG4gICAgICAgICAgICAgY29tbWVudDogJydcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhdG1zOiBbXSxcbiAgICAgICAgICBjb21wbGFpbnRfc3lzdGVtX3R5cGVzOiBbXSxcbiAgICAgICAgICBjb21wbGFpbnRfdHlwZTogW10sXG4gICAgICAgICAgbW9kZWxzOiBbXSxcbiAgICAgICAgICBvcGVyYXRvcnM6IFtdLFxuICAgICAgICAgIHNpdGVzOiBbXSxcbiAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgdGFnOiAnJyxcbiAgICAgICAgICBhdXRvY29tcGxldGVJdGVtczogW10sXG5cbiAgICAgICAgICBzbDogMCxcbiAgICAgICAgICBhc3NpZ25lZF9pZHM6IFtdLFxuICAgICAgICAgIHBlcm1pc3Npb25zOiBbXSxcbiAgICAgICAgICB2aWV3X21vZGU6IGZhbHNlLFxuICAgICAgICAgIGNvdW50cmllczogW10sXG4gICAgICAgICAgc3RhdGVzOiBbXSxcbiAgICAgICAgICBjaXRpZXM6IFtdLFxuICAgICAgICAgIGVkaXRtb2RlOiBmYWxzZSxcbiAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgIHVzZXJzOiB7fSxcbiAgICAgICAgICBmaWxlOiAnJyxcbiAgICAgICAgICBpbnZvaWNlX2NvcHk6IG51bGwsXG4gICAgICAgICAgY2ZfY29weTogbnVsbCxcbiAgICAgICAgICBuYXRpb25hbF9wZXJtaXRfY29weTpudWxsLFxuICAgICAgICAgIHJvYWRfdGF4X2NvcHk6IG51bGwsXG4gICAgICAgICAgaW5zdXJhbmNlX2NvcHk6IG51bGwsXG4gICAgICAgICAgcG9sbHV0aW9uX2NvcHk6IG51bGwsXG4gICAgICAgICAgcmNfY29weTogbnVsbFxuICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgLi4ubWFwR2V0dGVycyhbXCJlcnJvcnNcIl0pLFxuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgIGF4aW9zLmdldChcImFwaS9sb2RnZUNvbXBsYWludEhlbHBcIilcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcz09PT09PlwiLHJlcyk7XG5cbiAgICAgICAgICAgICB0aGlzLmF0bXMgPSByZXMuZGF0YS5kYXRhLmF0bXM7XG4gICAgICAgICAgICAgdGhpcy5jb21wbGFpbnRfc3lzdGVtX3R5cGVzID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfc3lzdGVtX3R5cGVzO1xuICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50X3R5cGUgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludF90eXBlO1xuICAgICAgICAgIH0pXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICBvbkZpbGVDaGFuZ2UoZSkge1xuICAgICAgICAgIHRoaXMuaW52b2ljZV9jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIG9uQ0ZDaGFuZ2UoZSl7XG4gICAgICAgICAgdGhpcy5jZl9jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIG9uTlBDaGFuZ2UoZSl7XG4gICAgICAgICAgdGhpcy5uYXRpb25hbF9wZXJtaXRfY29weSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgIH0sXG5cbiAgICAgICBvblJUQ2hhbmdlKGUpe1xuICAgICAgICAgIHRoaXMucm9hZF90YXhfY29weSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgIH0sXG5cbiAgICAgICBvbkluc3VyYW5jZUNoYW5nZShlKXtcbiAgICAgICAgICB0aGlzLmluc3VyYW5jZV9jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIG9uUG9sbHV0aW9uQ2hhbmdlKGUpe1xuICAgICAgICAgIHRoaXMucG9sbHV0aW9uX2NvcHkgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICB9LFxuXG4gICAgICAgb25SQ0NoYW5nZShlKXtcbiAgICAgICAgICB0aGlzLnJjX2NvcHkgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICB9LFxuXG4gICAgICAgc3VibWl0X21hY2hpbmUoKSB7XG4gICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbihhc3luYyAodmFsaWQpID0+IHtcbiAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnJvcnMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xuICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5yZWZfbG9hZF91c2VyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBvc3QoJ2FwaS9zdG9yZUNvbXBsYWludCcpXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YTogXCIgLGRhdGEuZGF0YS5kYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5pZCA9IGRhdGEuZGF0YS5kYXRhLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLGRhdGEuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9jb21wbGFpbnQtbGlzdC8xJykuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UoZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5mb3JtLmlkID4gMCkge1xuICAgICAgICAgICAgICAgIC8vICAgIHRoaXMuZm9ybS5wdXQoJ2FwaS9tYWNoaW5lLycgKyB0aGlzLmZvcm0uaWQpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVgLCB0aGlzLmludm9pY2VfY29weSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmQuYXBwZW5kKGBjZmZpbGVgLCB0aGlzLmNmX2NvcHkpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZkLmFwcGVuZChgbnBmaWxlYCwgdGhpcy5uYXRpb25hbF9wZXJtaXRfY29weSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmQuYXBwZW5kKGBydGZpbGVgLCB0aGlzLnJvYWRfdGF4X2NvcHkpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZkLmFwcGVuZChgaW5zdXJhbmNlZmlsZWAsIHRoaXMuaW5zdXJhbmNlX2NvcHkpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZkLmFwcGVuZChgcG9sbHV0aW9uZmlsZWAsIHRoaXMucG9sbHV0aW9uX2NvcHkpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZkLmFwcGVuZChgcmNmaWxlYCwgdGhpcy5yY19jb3B5KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmZC5hcHBlbmQoYGlkYCwgdGhpcy5mb3JtLmlkKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvbWFjaGluZS9maWxlcycsIGZkKS50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9tYWNoaW5lcycpLmNhdGNoKCgpID0+IHsgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlICYmIGVyci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgIHRoaXMuZm9ybS5wb3N0KCdhcGkvc3RvcmVDb21wbGFpbnQnKVxuICAgICAgICAgICAgICAgIC8vICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgdGhpcy5mb3JtLmlkID0gZGF0YS5kYXRhLmRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsZGF0YS5kYXRhKTtcblxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2NvbXBsYWludC1saXN0LzEnKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgIC8vICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgaWYgKGVyci5yZXNwb25zZSAmJiBlcnIucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuJHNldEVycm9yc0Zyb21SZXNwb25zZShlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgfSxcblxuICAgICAgIGdyYW5kX3Blcm1pc3Npb24oKSB7XG4gICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMuc2V0dGluZ19wZXJtaXNzaW9ucmVmXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvdXNlci9ncmFuZF9wZXJtaXNzaW9uJywge1xuICAgICAgICAgICAgIHVzZXI6IHRoaXMuZm9ybS5pZCxcbiAgICAgICAgICAgICBwZXJtaXNzaW9uczogdGhpcy5hc3NpZ25lZF9pZHNcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICAgfSlcbiAgICAgICB9LFxuXG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgIGlmICh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpIHtcbiAgICAgICAgICB0aGlzLmZvcm0uaWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XG4gICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfdXNlclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF4aW9zLmdldChcImFwaS9tYWNoaW5lL1wiICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxuICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hY2hpbmVkID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5maWxsKHJlcy5kYXRhLmRhdGEpXG4gICAgICAgICAgICAgICAgbGV0IGRhdGVfdGltZV9tYWNoaW5lX2ljID0gcmVzLmRhdGEuZGF0YS5kYXRlX3RpbWVfbWFjaGluZV9pY1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5kYXRlX3RpbWVfbWFjaGluZV9pYyA9IG5ldyBEYXRlKGRhdGVfdGltZV9tYWNoaW5lX2ljKS50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLmxhc3RfbWFpbnRlbmFuY2VfZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZm9ybS5sYXN0X21haW50ZW5hbmNlX2RhdGUpLnRvSVNPU3RyaW5nKClcblxuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbWFjaGluZXMvJykuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgICB9KVxuXG4gICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHsgfSxcbiAgICB3YXRjaDoge1xuXG4gICAgICAgYXN5bmMgJ2Zvcm0uY2F0ZWdvcnlfaWQnKG4sIG8pIHtcbiAgICAgICAgICBpZiAobylcbiAgICAgICAgICAgICB0aGlzLmZvcm0uc3ViX2NhdGVnb3J5X2lkID0gJydcbiAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9jYXRlZ29yeS9cIiArIG4pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgIH0sXG4gICAgICAgYXN5bmMgJ2Zvcm0ubWFjaGluZV9jb21wYW5pZXNfaWQnKG4sIG8pIHtcbiAgICAgICAgICBpZiAobylcbiAgICAgICAgICAgICB0aGlzLmZvcm0ubWFjaGluZV9tb2RlbHNfaWQgPSAnJ1xuICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL21vZGVsL1wiICsgbilcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbHMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgIH0sXG4gICAgfVxuIH1cbiA8L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWhvcml6b250YWxcIixcbiAgICAgICAgYXR0cnM6IHsgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0X21hY2hpbmUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZm9ybS5pZCA/IFwiVXBkYXRlXCIgOiBcIkFkZFwiKSArIFwiIENvbXBsYWludFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTZWxlY3QgQVRNIElEICpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFwiYXRtX2lkXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImF0bV9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5hdG1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIEF0bSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiYXRtX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uYXRtX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJhdG1faWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5hdG1faWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImF0bV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJhdG1faWRcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQ2FsbCBUeXBlICpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmNvbXBsYWludF9zeXN0ZW1fdHlwZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9vc2UgQ2FsbCBUeXBlIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcGxhaW50X3N5c3RlbV90eXBlX2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY29tcGxhaW50X3N5c3RlbV90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkZhdWx0IFR5cGUgKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFwiY29tcGxhaW50X3R5cGVfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5jb21wbGFpbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBGYXVsdCBUeXBlIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJjb21wbGFpbnRfdHlwZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbXBsYWludF90eXBlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJjb21wbGFpbnRfdHlwZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNvbXBsYWludF90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjb21wbGFpbnRfdHlwZV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJjb21wbGFpbnRfdHlwZV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRmF1bHQgRGVzY3JpcHRpb24gKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY29tbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb21tZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFwiY29tbWVudFwiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY29tbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uY29tbWVudCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImNvbW1lbnRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNvbW1lbnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJjb21tZW50XCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJiclwiKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTIgdGV4dC1yaWdodFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSxcbiAgICAgICAgW192bS5fdihcIlN1Ym1pdFwiKV1cbiAgICAgIClcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNTkzZTM5OGJcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbXBsYWludEFkZEVkaXQudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db21wbGFpbnRBZGRFZGl0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01OTNlMzk4YlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db21wbGFpbnRBZGRFZGl0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTkzZTM5OGJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01OTNlMzk4YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9