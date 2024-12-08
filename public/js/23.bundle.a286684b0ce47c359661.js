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
          // this.form.post('api/storeComplaint')
          //       .then((data) => {
          //         console.log("Data: " ,data.data);

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
          //         console.log(err);

          //          if (err.response && err.response.data) {
          //             console.log(err.response.data);

          //             this.$setErrorsFromResponse(err.response.data);
          //          }
          //          cloaderd.hide();
          //       });
          try {
            const formData = new FormData();
            formData.append('id', this.form.id);
            formData.append('atm_id', this.form.atm_id);
            formData.append('complaint_system_type_id', this.form.complaint_system_type_id);
            formData.append('complaint_type_id', this.form.complaint_type_id);
            formData.append('comment', this.form.comment);
            const response = await axios.post('api/storeComplaint', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            // $('#addNew').modal('hide');

            Toast.fire({
              icon: 'success',
              title: response.data.message
            });

            //this.$Progress.finish();

            alert(response.data.success);
          } catch (error) {
            console.error(error);
            alert('Form submission failed.');
          }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWU/NjY5ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnRBZGRFZGl0LnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwiY29tcG9uZW50cyIsIlZ1ZVRhZ3NJbnB1dCIsImZpbHRlcnMiLCJ0cnVuY2F0ZSIsInRleHQiLCJsZW5ndGgiLCJzdWZmaXgiLCJzdWJzdHJpbmciLCJjb21wdXRlZCIsImZpbHRlcmVkSXRlbXMiLCJhdXRvY29tcGxldGVJdGVtcyIsImZpbHRlciIsImkiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ0YWciLCJkYXRhIiwibWFjaGluZWQiLCJjaGVja2JveF9tb2RlbCIsImZvcm0iLCJGb3JtIiwiaWQiLCJhdG1faWQiLCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQiLCJjb21wbGFpbnRfdHlwZV9pZCIsImNvbW1lbnQiLCJhdG1zIiwiY29tcGxhaW50X3N5c3RlbV90eXBlcyIsImNvbXBsYWludF90eXBlIiwibW9kZWxzIiwib3BlcmF0b3JzIiwic2l0ZXMiLCJ1c2VycyIsInNsIiwiYXNzaWduZWRfaWRzIiwicGVybWlzc2lvbnMiLCJ2aWV3X21vZGUiLCJjb3VudHJpZXMiLCJzdGF0ZXMiLCJjaXRpZXMiLCJlZGl0bW9kZSIsInN0ZXAiLCJmaWxlIiwiaW52b2ljZV9jb3B5IiwiY2ZfY29weSIsIm5hdGlvbmFsX3Blcm1pdF9jb3B5Iiwicm9hZF90YXhfY29weSIsImluc3VyYW5jZV9jb3B5IiwicG9sbHV0aW9uX2NvcHkiLCJyY19jb3B5IiwibWFwR2V0dGVycyIsImJlZm9yZUNyZWF0ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwib25GaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwib25DRkNoYW5nZSIsIm9uTlBDaGFuZ2UiLCJvblJUQ2hhbmdlIiwib25JbnN1cmFuY2VDaGFuZ2UiLCJvblBvbGx1dGlvbkNoYW5nZSIsIm9uUkNDaGFuZ2UiLCJzdWJtaXRfbWFjaGluZSIsIiR2YWxpZGF0b3IiLCJ2YWxpZGF0ZUFsbCIsInZhbGlkIiwidmVycm9ycyIsImNsZWFyIiwiY2xvYWRlcmQiLCIkbG9hZGluZyIsInNob3ciLCJjb250YWluZXIiLCIkcmVmcyIsInJlZl9sb2FkX3VzZXIiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsIlRvYXN0IiwiZmlyZSIsImljb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJhbGVydCIsInN1Y2Nlc3MiLCJlcnJvciIsImdyYW5kX3Blcm1pc3Npb24iLCJzZXR0aW5nX3Blcm1pc3Npb25yZWYiLCJ1c2VyIiwiaGlkZSIsImNhdGNoIiwibW91bnRlZCIsIiRyb3V0ZSIsInBhcmFtcyIsImZpbGwiLCJkYXRlX3RpbWVfbWFjaGluZV9pYyIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImxhc3RfbWFpbnRlbmFuY2VfZGF0ZSIsIiRyb3V0ZXIiLCJwdXNoIiwiY3JlYXRlZCIsIndhdGNoIiwiZm9ybS5jYXRlZ29yeV9pZCIsIm4iLCJvIiwic3ViX2NhdGVnb3J5X2lkIiwic3ViX2NhdGVnb3JpZXMiLCJmb3JtLm1hY2hpbmVfY29tcGFuaWVzX2lkIiwibWFjaGluZV9tb2RlbHNfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlGQTtBQUNBO0FBR0E7QUFDQTtFQUNBQSxJQUFBO0VBQ0FDLFVBQUE7SUFDQUM7RUFDQTtFQUNBQyxPQUFBO0lBQ0FDLFFBQUEsV0FBQUEsQ0FB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QUFBQTtBQUFBO0FBQ0E7QUFDdUg7QUFDYTtBQUNwSTtBQUNtVjtBQUNuVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21HO0FBQ25HLGdCQUFnQix5R0FBa0I7QUFDbEMsRUFBRSxtSUFBYztBQUNoQixFQUFFLDJPQUFjO0FBQ2hCLEVBQUUsb1BBQXlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLEVBYVg7O0FBRVUsZ0ZBQWlCIiwiZmlsZSI6ImpzLzIzLmJ1bmRsZS5hMjg2Njg0YjBjZTQ3YzM1OTY2MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRfbWFjaGluZSgpXCIgY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IGZvcm0uaWQgPyAnVXBkYXRlJyA6ICdBZGQnIH19IENvbXBsYWludDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmNhcmQtaGVhZGVyIC0tPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VsZWN0IEFUTSBJRCAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJhdG1faWRcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJhdG1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBBdG0gLi4uXCIgdi1tb2RlbD1cImZvcm0uYXRtX2lkXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnYXRtX2lkJykgfVwiIGRhdGEtdnYtbmFtZT1cImF0bV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyZXF1aXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2F0bV9pZCcpXCIgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KCdhdG1faWQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DYWxsIFR5cGUgKjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwidGl0bGVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJjb21wbGFpbnRfc3lzdGVtX3R5cGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBDYWxsIFR5cGUgLi4uXCIgdi1tb2RlbD1cImZvcm0uY29tcGxhaW50X3N5c3RlbV90eXBlX2lkXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnY29tcGxhaW50X3N5c3RlbV90eXBlX2lkJykgfVwiIGRhdGEtdnYtbmFtZT1cImNvbXBsYWludF9zeXN0ZW1fdHlwZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyZXF1aXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2NvbXBsYWludF9zeXN0ZW1fdHlwZV9pZCcpXCIgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KCdjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GYXVsdCBUeXBlICo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInRpdGxlXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwiY29tcGxhaW50X3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIEZhdWx0IFR5cGUgLi4uXCIgdi1tb2RlbD1cImZvcm0uY29tcGxhaW50X3R5cGVfaWRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjb21wbGFpbnRfdHlwZV9pZCcpIH1cIiBkYXRhLXZ2LW5hbWU9XCJjb21wbGFpbnRfdHlwZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyZXF1aXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2NvbXBsYWludF90eXBlX2lkJylcIiBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoJ2NvbXBsYWludF90eXBlX2lkJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GYXVsdCBEZXNjcmlwdGlvbiAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0uY29tbWVudFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvbW1lbnRcIiB2LXZhbGlkYXRlPVwiJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtYXM9XCJjb21tZW50XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnY29tbWVudCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY29tbWVudCcpXCIgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj4ge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdjb21tZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgIDwhLS0gLy5uYXYtdGFicy1jdXN0b20gLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBlbmQgdGFicyAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9mb3JtPlxuICAgICAgIDxicj5cbiAgICA8L3NlY3Rpb24+XG4gPC90ZW1wbGF0ZT5cblxuIDxzY3JpcHQ+XG4gaW1wb3J0IFZ1ZVRhZ3NJbnB1dCBmcm9tICdAam9obXVuL3Z1ZS10YWdzLWlucHV0JztcbiBpbXBvcnQgeyBub3cgfSBmcm9tICdtb21lbnQnO1xuIGltcG9ydCB7XG4gICAgbWFwR2V0dGVyc1xuIH0gZnJvbSBcInZ1ZXhcIjtcbiBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJVc2VyQWRkRWRpdFwiLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICBWdWVUYWdzSW5wdXQsXG4gICAgfSxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgdHJ1bmNhdGU6IGZ1bmN0aW9uICh0ZXh0LCBsZW5ndGgsIHN1ZmZpeCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZygwLCBsZW5ndGgpICsgc3VmZml4O1xuICAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgIGZpbHRlcmVkSXRlbXMoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b2NvbXBsZXRlSXRlbXMuZmlsdGVyKGkgPT4ge1xuICAgICAgICAgICAgIHJldHVybiBpLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMudGFnLnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcbiAgICAgICAgICB9KTtcbiAgICAgICB9LFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1hY2hpbmVkOiAnJyxcbiAgICAgICAgICBjaGVja2JveF9tb2RlbDogW10sXG4gICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgICBhdG1faWQ6ICcnLFxuICAgICAgICAgICAgIGNvbXBsYWludF9zeXN0ZW1fdHlwZV9pZDogJycsXG4gICAgICAgICAgICAgY29tcGxhaW50X3R5cGVfaWQ6ICcnLFxuICAgICAgICAgICAgIGNvbW1lbnQ6ICcnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYXRtczogW10sXG4gICAgICAgICAgY29tcGxhaW50X3N5c3RlbV90eXBlczogW10sXG4gICAgICAgICAgY29tcGxhaW50X3R5cGU6IFtdLFxuICAgICAgICAgIG1vZGVsczogW10sXG4gICAgICAgICAgb3BlcmF0b3JzOiBbXSxcbiAgICAgICAgICBzaXRlczogW10sXG4gICAgICAgICAgdXNlcnM6IFtdLFxuICAgICAgICAgIHRhZzogJycsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlSXRlbXM6IFtdLFxuXG4gICAgICAgICAgc2w6IDAsXG4gICAgICAgICAgYXNzaWduZWRfaWRzOiBbXSxcbiAgICAgICAgICBwZXJtaXNzaW9uczogW10sXG4gICAgICAgICAgdmlld19tb2RlOiBmYWxzZSxcbiAgICAgICAgICBjb3VudHJpZXM6IFtdLFxuICAgICAgICAgIHN0YXRlczogW10sXG4gICAgICAgICAgY2l0aWVzOiBbXSxcbiAgICAgICAgICBlZGl0bW9kZTogZmFsc2UsXG4gICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICB1c2Vyczoge30sXG4gICAgICAgICAgZmlsZTogJycsXG4gICAgICAgICAgaW52b2ljZV9jb3B5OiBudWxsLFxuICAgICAgICAgIGNmX2NvcHk6IG51bGwsXG4gICAgICAgICAgbmF0aW9uYWxfcGVybWl0X2NvcHk6bnVsbCxcbiAgICAgICAgICByb2FkX3RheF9jb3B5OiBudWxsLFxuICAgICAgICAgIGluc3VyYW5jZV9jb3B5OiBudWxsLFxuICAgICAgICAgIHBvbGx1dGlvbl9jb3B5OiBudWxsLFxuICAgICAgICAgIHJjX2NvcHk6IG51bGxcbiAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgIC4uLm1hcEdldHRlcnMoW1wiZXJyb3JzXCJdKSxcbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICBheGlvcy5nZXQoXCJhcGkvbG9kZ2VDb21wbGFpbnRIZWxwXCIpXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXM9PT09PT5cIixyZXMpO1xuXG4gICAgICAgICAgICAgdGhpcy5hdG1zID0gcmVzLmRhdGEuZGF0YS5hdG1zO1xuICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50X3N5c3RlbV90eXBlcyA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50X3N5c3RlbV90eXBlcztcbiAgICAgICAgICAgICB0aGlzLmNvbXBsYWludF90eXBlID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfdHlwZTtcbiAgICAgICAgICB9KVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgb25GaWxlQ2hhbmdlKGUpIHtcbiAgICAgICAgICB0aGlzLmludm9pY2VfY29weSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgIH0sXG5cbiAgICAgICBvbkNGQ2hhbmdlKGUpe1xuICAgICAgICAgIHRoaXMuY2ZfY29weSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgIH0sXG5cbiAgICAgICBvbk5QQ2hhbmdlKGUpe1xuICAgICAgICAgIHRoaXMubmF0aW9uYWxfcGVybWl0X2NvcHkgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICB9LFxuXG4gICAgICAgb25SVENoYW5nZShlKXtcbiAgICAgICAgICB0aGlzLnJvYWRfdGF4X2NvcHkgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICB9LFxuXG4gICAgICAgb25JbnN1cmFuY2VDaGFuZ2UoZSl7XG4gICAgICAgICAgdGhpcy5pbnN1cmFuY2VfY29weSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgIH0sXG5cbiAgICAgICBvblBvbGx1dGlvbkNoYW5nZShlKXtcbiAgICAgICAgICB0aGlzLnBvbGx1dGlvbl9jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIG9uUkNDaGFuZ2UoZSl7XG4gICAgICAgICAgdGhpcy5yY19jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIHN1Ym1pdF9tYWNoaW5lKCkge1xuICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oYXN5bmMgKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJyb3JzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfdXNlclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZm9ybS5wb3N0KCdhcGkvc3RvcmVDb21wbGFpbnQnKVxuICAgICAgICAgICAgICAgIC8vICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGE6IFwiICxkYXRhLmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgdGhpcy5mb3JtLmlkID0gZGF0YS5kYXRhLmRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsZGF0YS5kYXRhKTtcblxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2NvbXBsYWludC1saXN0LzEnKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgIC8vICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgaWYgKGVyci5yZXNwb25zZSAmJiBlcnIucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKTtcblxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuJHNldEVycm9yc0Zyb21SZXNwb25zZShlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgdGhpcy5mb3JtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdG1faWQnLCB0aGlzLmZvcm0uYXRtX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQnLCB0aGlzLmZvcm0uY29tcGxhaW50X3N5c3RlbV90eXBlX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb21wbGFpbnRfdHlwZV9pZCcsIHRoaXMuZm9ybS5jb21wbGFpbnRfdHlwZV9pZCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29tbWVudCcsIHRoaXMuZm9ybS5jb21tZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdhcGkvc3RvcmVDb21wbGFpbnQnLCBmb3JtRGF0YSwge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gJCgnI2FkZE5ldycpLm1vZGFsKCdoaWRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XG5cblxuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnRm9ybSBzdWJtaXNzaW9uIGZhaWxlZC4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5mb3JtLmlkID4gMCkge1xuICAgICAgICAgICAgICAgIC8vICAgIHRoaXMuZm9ybS5wdXQoJ2FwaS9tYWNoaW5lLycgKyB0aGlzLmZvcm0uaWQpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVgLCB0aGlzLmludm9pY2VfY29weSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmQuYXBwZW5kKGBjZmZpbGVgLCB0aGlzLmNmX2NvcHkpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZkLmFwcGVuZChgbnBmaWxlYCwgdGhpcy5uYXRpb25hbF9wZXJtaXRfY29weSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmQuYXBwZW5kKGBydGZpbGVgLCB0aGlzLnJvYWRfdGF4X2NvcHkpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZkLmFwcGVuZChgaW5zdXJhbmNlZmlsZWAsIHRoaXMuaW5zdXJhbmNlX2NvcHkpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZkLmFwcGVuZChgcG9sbHV0aW9uZmlsZWAsIHRoaXMucG9sbHV0aW9uX2NvcHkpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZkLmFwcGVuZChgcmNmaWxlYCwgdGhpcy5yY19jb3B5KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmZC5hcHBlbmQoYGlkYCwgdGhpcy5mb3JtLmlkKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvbWFjaGluZS9maWxlcycsIGZkKS50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9tYWNoaW5lcycpLmNhdGNoKCgpID0+IHsgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlICYmIGVyci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgIHRoaXMuZm9ybS5wb3N0KCdhcGkvc3RvcmVDb21wbGFpbnQnKVxuICAgICAgICAgICAgICAgIC8vICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgdGhpcy5mb3JtLmlkID0gZGF0YS5kYXRhLmRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsZGF0YS5kYXRhKTtcblxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2NvbXBsYWludC1saXN0LzEnKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgIC8vICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgaWYgKGVyci5yZXNwb25zZSAmJiBlcnIucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuJHNldEVycm9yc0Zyb21SZXNwb25zZShlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgfSxcblxuICAgICAgIGdyYW5kX3Blcm1pc3Npb24oKSB7XG4gICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMuc2V0dGluZ19wZXJtaXNzaW9ucmVmXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvdXNlci9ncmFuZF9wZXJtaXNzaW9uJywge1xuICAgICAgICAgICAgIHVzZXI6IHRoaXMuZm9ybS5pZCxcbiAgICAgICAgICAgICBwZXJtaXNzaW9uczogdGhpcy5hc3NpZ25lZF9pZHNcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICAgfSlcbiAgICAgICB9LFxuXG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgIGlmICh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpIHtcbiAgICAgICAgICB0aGlzLmZvcm0uaWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XG4gICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfdXNlclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF4aW9zLmdldChcImFwaS9tYWNoaW5lL1wiICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxuICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hY2hpbmVkID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5maWxsKHJlcy5kYXRhLmRhdGEpXG4gICAgICAgICAgICAgICAgbGV0IGRhdGVfdGltZV9tYWNoaW5lX2ljID0gcmVzLmRhdGEuZGF0YS5kYXRlX3RpbWVfbWFjaGluZV9pY1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5kYXRlX3RpbWVfbWFjaGluZV9pYyA9IG5ldyBEYXRlKGRhdGVfdGltZV9tYWNoaW5lX2ljKS50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLmxhc3RfbWFpbnRlbmFuY2VfZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZm9ybS5sYXN0X21haW50ZW5hbmNlX2RhdGUpLnRvSVNPU3RyaW5nKClcblxuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbWFjaGluZXMvJykuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgICB9KVxuXG4gICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHsgfSxcbiAgICB3YXRjaDoge1xuXG4gICAgICAgYXN5bmMgJ2Zvcm0uY2F0ZWdvcnlfaWQnKG4sIG8pIHtcbiAgICAgICAgICBpZiAobylcbiAgICAgICAgICAgICB0aGlzLmZvcm0uc3ViX2NhdGVnb3J5X2lkID0gJydcbiAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9jYXRlZ29yeS9cIiArIG4pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgIH0sXG4gICAgICAgYXN5bmMgJ2Zvcm0ubWFjaGluZV9jb21wYW5pZXNfaWQnKG4sIG8pIHtcbiAgICAgICAgICBpZiAobylcbiAgICAgICAgICAgICB0aGlzLmZvcm0ubWFjaGluZV9tb2RlbHNfaWQgPSAnJ1xuICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL21vZGVsL1wiICsgbilcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbHMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgIH0sXG4gICAgfVxuIH1cbiA8L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWhvcml6b250YWxcIixcbiAgICAgICAgYXR0cnM6IHsgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0X21hY2hpbmUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZm9ybS5pZCA/IFwiVXBkYXRlXCIgOiBcIkFkZFwiKSArIFwiIENvbXBsYWludFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTZWxlY3QgQVRNIElEICpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFwiYXRtX2lkXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImF0bV9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5hdG1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIEF0bSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiYXRtX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uYXRtX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJhdG1faWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5hdG1faWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImF0bV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJhdG1faWRcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQ2FsbCBUeXBlICpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmNvbXBsYWludF9zeXN0ZW1fdHlwZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9vc2UgQ2FsbCBUeXBlIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcGxhaW50X3N5c3RlbV90eXBlX2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY29tcGxhaW50X3N5c3RlbV90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkZhdWx0IFR5cGUgKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFwiY29tcGxhaW50X3R5cGVfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5jb21wbGFpbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBGYXVsdCBUeXBlIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJjb21wbGFpbnRfdHlwZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbXBsYWludF90eXBlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJjb21wbGFpbnRfdHlwZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNvbXBsYWludF90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjb21wbGFpbnRfdHlwZV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJjb21wbGFpbnRfdHlwZV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRmF1bHQgRGVzY3JpcHRpb24gKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY29tbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb21tZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFwiY29tbWVudFwiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY29tbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uY29tbWVudCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImNvbW1lbnRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNvbW1lbnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJjb21tZW50XCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJiclwiKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTIgdGV4dC1yaWdodFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSxcbiAgICAgICAgW192bS5fdihcIlN1Ym1pdFwiKV1cbiAgICAgIClcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNTkzZTM5OGJcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbXBsYWludEFkZEVkaXQudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db21wbGFpbnRBZGRFZGl0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01OTNlMzk4YlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db21wbGFpbnRBZGRFZGl0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTkzZTM5OGJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01OTNlMzk4YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9