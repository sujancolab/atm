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
          axios.post("api/storeComplaint", this.form).then(res => {
            console.log("res=====>", res);

            //  this.atms = res.data.data.atms;
            //  this.complaint_system_types = res.data.data.complaint_system_types;
            //  this.complaint_type = res.data.data.complaint_type;
          }).catch(err => {
            console.log("Error: ", err);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWU/NjY5ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnRBZGRFZGl0LnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwiY29tcG9uZW50cyIsIlZ1ZVRhZ3NJbnB1dCIsImZpbHRlcnMiLCJ0cnVuY2F0ZSIsInRleHQiLCJsZW5ndGgiLCJzdWZmaXgiLCJzdWJzdHJpbmciLCJjb21wdXRlZCIsImZpbHRlcmVkSXRlbXMiLCJhdXRvY29tcGxldGVJdGVtcyIsImZpbHRlciIsImkiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ0YWciLCJkYXRhIiwibWFjaGluZWQiLCJjaGVja2JveF9tb2RlbCIsImZvcm0iLCJGb3JtIiwiaWQiLCJhdG1faWQiLCJjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQiLCJjb21wbGFpbnRfdHlwZV9pZCIsImNvbW1lbnQiLCJhdG1zIiwiY29tcGxhaW50X3N5c3RlbV90eXBlcyIsImNvbXBsYWludF90eXBlIiwibW9kZWxzIiwib3BlcmF0b3JzIiwic2l0ZXMiLCJ1c2VycyIsInNsIiwiYXNzaWduZWRfaWRzIiwicGVybWlzc2lvbnMiLCJ2aWV3X21vZGUiLCJjb3VudHJpZXMiLCJzdGF0ZXMiLCJjaXRpZXMiLCJlZGl0bW9kZSIsInN0ZXAiLCJmaWxlIiwiaW52b2ljZV9jb3B5IiwiY2ZfY29weSIsIm5hdGlvbmFsX3Blcm1pdF9jb3B5Iiwicm9hZF90YXhfY29weSIsImluc3VyYW5jZV9jb3B5IiwicG9sbHV0aW9uX2NvcHkiLCJyY19jb3B5IiwibWFwR2V0dGVycyIsImJlZm9yZUNyZWF0ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwib25GaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwib25DRkNoYW5nZSIsIm9uTlBDaGFuZ2UiLCJvblJUQ2hhbmdlIiwib25JbnN1cmFuY2VDaGFuZ2UiLCJvblBvbGx1dGlvbkNoYW5nZSIsIm9uUkNDaGFuZ2UiLCJzdWJtaXRfbWFjaGluZSIsIiR2YWxpZGF0b3IiLCJ2YWxpZGF0ZUFsbCIsInZhbGlkIiwidmVycm9ycyIsImNsZWFyIiwiY2xvYWRlcmQiLCIkbG9hZGluZyIsInNob3ciLCJjb250YWluZXIiLCIkcmVmcyIsInJlZl9sb2FkX3VzZXIiLCJwb3N0IiwiY2F0Y2giLCJlcnIiLCJyZXNldCIsImhpZGUiLCJUb2FzdCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJtZXNzYWdlIiwiJHJvdXRlciIsInB1c2giLCJyZXNwb25zZSIsIiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UiLCJncmFuZF9wZXJtaXNzaW9uIiwic2V0dGluZ19wZXJtaXNzaW9ucmVmIiwidXNlciIsInN1Y2Nlc3MiLCJtb3VudGVkIiwiJHJvdXRlIiwicGFyYW1zIiwiZmlsbCIsImRhdGVfdGltZV9tYWNoaW5lX2ljIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwibGFzdF9tYWludGVuYW5jZV9kYXRlIiwiY3JlYXRlZCIsIndhdGNoIiwiZm9ybS5jYXRlZ29yeV9pZCIsIm4iLCJvIiwic3ViX2NhdGVnb3J5X2lkIiwic3ViX2NhdGVnb3JpZXMiLCJmb3JtLm1hY2hpbmVfY29tcGFuaWVzX2lkIiwibWFjaGluZV9tb2RlbHNfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlGQTtBQUNBO0FBR0E7QUFDQTtFQUNBQSxJQUFBO0VBQ0FDLFVBQUE7SUFDQUM7RUFDQTtFQUNBQyxPQUFBO0lBQ0FDLFFBQUEsV0FBQUEsQ0FBQUMsSUFBQSxFQUFBQyxNQUFBLEVBQUFDLE1BQUE7TUFDQSxPQUFBRixJQUFBLENBQUFHLFNBQUEsSUFBQUYsTUFBQSxJQUFBQyxNQUFBO0lBQ0E7RUFDQTtFQUNBRSxRQUFBO0lBQ0FDLGNBQUE7TUFDQSxZQUFBQyxpQkFBQSxDQUFBQyxNQUFBLENBQUFDLENBQUE7UUFDQSxPQUFBQSxDQUFBLENBQUFSLElBQUEsQ0FBQVMsV0FBQSxHQUFBQyxPQUFBLE1BQUFDLEdBQUEsQ0FBQUYsV0FBQTtNQUNBO0lBQ0E7RUFDQTtFQUNBRyxLQUFBO0lBQ0E7TUFDQUMsUUFBQTtNQUNBQyxjQUFBO01BQ0FDLElBQUEsTUFBQUMsSUFBQTtRQUNBQyxFQUFBO1FBQ0FDLE1BQUE7UUFDQUMsd0JBQUE7UUFDQUMsaUJBQUE7UUFDQUMsT0FBQTtNQUNBO01BQ0FDLElBQUE7TUFDQUMsc0JBQUE7TUFDQUMsY0FBQTtNQUNBQyxNQUFBO01BQ0FDLFNBQUE7TUFDQUMsS0FBQTtNQUNBQyxLQUFBO01BQ0FqQixHQUFBO01BQ0FMLGlCQUFBO01BRUF1QixFQUFBO01BQ0FDLFlBQUE7TUFDQUMsV0FBQTtNQUNBQyxTQUFBO01BQ0FDLFNBQUE7TUFDQUMsTUFBQTtNQUNBQyxNQUFBO01BQ0FDLFFBQUE7TUFDQUMsSUFBQTtNQUNBVCxLQUFBO01BQ0FVLElBQUE7TUFDQUMsWUFBQTtNQUNBQyxPQUFBO01BQ0FDLG9CQUFBO01BQ0FDLGFBQUE7TUFDQUMsY0FBQTtNQUNBQyxjQUFBO01BQ0FDLE9BQUE7SUFDQTtFQUNBO0VBQ0F6QyxRQUFBO0lBQ0EsR0FBQTBDLHVEQUFBO0VBQ0E7RUFDQUMsYUFBQTtJQUNBQyxLQUFBLENBQUFDLEdBQUEsMkJBQ0FDLElBQUEsQ0FBQUMsR0FBQTtNQUNBQyxPQUFBLENBQUFDLEdBQUEsY0FBQUYsR0FBQTtNQUVBLEtBQUE3QixJQUFBLEdBQUE2QixHQUFBLENBQUF2QyxJQUFBLENBQUFBLElBQUEsQ0FBQVUsSUFBQTtNQUNBLEtBQUFDLHNCQUFBLEdBQUE0QixHQUFBLENBQUF2QyxJQUFBLENBQUFBLElBQUEsQ0FBQVcsc0JBQUE7TUFDQSxLQUFBQyxjQUFBLEdBQUEyQixHQUFBLENBQUF2QyxJQUFBLENBQUFBLElBQUEsQ0FBQVksY0FBQTtJQUNBO0VBQ0E7RUFDQThCLE9BQUE7SUFFQUMsYUFBQUMsQ0FBQTtNQUNBLEtBQUFqQixZQUFBLEdBQUFpQixDQUFBLENBQUFDLE1BQUEsQ0FBQUMsS0FBQTtJQUNBO0lBRUFDLFdBQUFILENBQUE7TUFDQSxLQUFBaEIsT0FBQSxHQUFBZ0IsQ0FBQSxDQUFBQyxNQUFBLENBQUFDLEtBQUE7SUFDQTtJQUVBRSxXQUFBSixDQUFBO01BQ0EsS0FBQWYsb0JBQUEsR0FBQWUsQ0FBQSxDQUFBQyxNQUFBLENBQUFDLEtBQUE7SUFDQTtJQUVBRyxXQUFBTCxDQUFBO01BQ0EsS0FBQWQsYUFBQSxHQUFBYyxDQUFBLENBQUFDLE1BQUEsQ0FBQUMsS0FBQTtJQUNBO0lBRUFJLGtCQUFBTixDQUFBO01BQ0EsS0FBQWIsY0FBQSxHQUFBYSxDQUFBLENBQUFDLE1BQUEsQ0FBQUMsS0FBQTtJQUNBO0lBRUFLLGtCQUFBUCxDQUFBO01BQ0EsS0FBQVosY0FBQSxHQUFBWSxDQUFBLENBQUFDLE1BQUEsQ0FBQUMsS0FBQTtJQUNBO0lBRUFNLFdBQUFSLENBQUE7TUFDQSxLQUFBWCxPQUFBLEdBQUFXLENBQUEsQ0FBQUMsTUFBQSxDQUFBQyxLQUFBO0lBQ0E7SUFFQU8sZUFBQTtNQUNBLEtBQUFDLFVBQUEsQ0FBQUMsV0FBQSxHQUFBakIsSUFBQSxPQUFBa0IsS0FBQTtRQUNBLElBQUFBLEtBQUE7VUFDQSxLQUFBQyxPQUFBLENBQUFDLEtBQUE7VUFDQSxJQUFBQyxRQUFBLFFBQUFDLFFBQUEsQ0FBQUMsSUFBQTtZQUNBQyxTQUFBLE9BQUFDLEtBQUEsQ0FBQUM7VUFDQTtVQUVBNUIsS0FBQSxDQUFBNkIsSUFBQSw0QkFBQTlELElBQUEsRUFDQW1DLElBQUEsQ0FBQUMsR0FBQTtZQUNBQyxPQUFBLENBQUFDLEdBQUEsY0FBQUYsR0FBQTs7WUFFQTtZQUNBO1lBQ0E7VUFDQSxHQUFBMkIsS0FBQSxDQUFBQyxHQUFBO1lBQ0EzQixPQUFBLENBQUFDLEdBQUEsWUFBQTBCLEdBQUE7VUFDQTtVQUdBLEtBQUFoRSxJQUFBLENBQUE4RCxJQUFBLHVCQUNBM0IsSUFBQSxDQUFBdEMsSUFBQTtZQUNBd0MsT0FBQSxDQUFBQyxHQUFBLFdBQUF6QyxJQUFBLENBQUFBLElBQUEsQ0FBQUEsSUFBQTtZQUVBLEtBQUFzRCxVQUFBLENBQUFjLEtBQUE7WUFDQVQsUUFBQSxDQUFBVSxJQUFBO1lBQ0EsS0FBQWxFLElBQUEsQ0FBQUUsRUFBQSxHQUFBTCxJQUFBLENBQUFBLElBQUEsQ0FBQUEsSUFBQSxDQUFBSyxFQUFBO1lBQ0EsS0FBQUYsSUFBQSxDQUFBaUUsS0FBQTtZQUNBNUIsT0FBQSxDQUFBQyxHQUFBLFNBQUF6QyxJQUFBLENBQUFBLElBQUE7WUFFQXNFLEtBQUEsQ0FBQUMsSUFBQTtjQUNBQyxJQUFBO2NBQ0FDLEtBQUEsRUFBQXpFLElBQUEsQ0FBQUEsSUFBQSxDQUFBMEU7WUFDQTtZQUNBLEtBQUFDLE9BQUEsQ0FBQUMsSUFBQSxzQkFBQVYsS0FBQTtVQUNBLEdBQ0FBLEtBQUEsQ0FBQUMsR0FBQTtZQUNBM0IsT0FBQSxDQUFBQyxHQUFBLENBQUEwQixHQUFBO1lBRUEsSUFBQUEsR0FBQSxDQUFBVSxRQUFBLElBQUFWLEdBQUEsQ0FBQVUsUUFBQSxDQUFBN0UsSUFBQTtjQUNBd0MsT0FBQSxDQUFBQyxHQUFBLENBQUEwQixHQUFBLENBQUFVLFFBQUEsQ0FBQTdFLElBQUE7Y0FFQSxLQUFBOEUsc0JBQUEsQ0FBQVgsR0FBQSxDQUFBVSxRQUFBLENBQUE3RSxJQUFBO1lBQ0E7WUFDQTJELFFBQUEsQ0FBQVUsSUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBVSxpQkFBQTtNQUNBLElBQUFwQixRQUFBLFFBQUFDLFFBQUEsQ0FBQUMsSUFBQTtRQUNBQyxTQUFBLE9BQUFDLEtBQUEsQ0FBQWlCO01BQ0E7TUFFQTVDLEtBQUEsQ0FBQTZCLElBQUE7UUFDQWdCLElBQUEsT0FBQTlFLElBQUEsQ0FBQUUsRUFBQTtRQUNBYyxXQUFBLE9BQUFEO01BQ0EsR0FDQW9CLElBQUEsQ0FBQXVDLFFBQUE7UUFDQWxCLFFBQUEsQ0FBQVUsSUFBQTtRQUNBLElBQUFRLFFBQUEsQ0FBQTdFLElBQUEsQ0FBQWtGLE9BQUE7VUFDQVosS0FBQSxDQUFBQyxJQUFBO1lBQ0FDLElBQUE7WUFDQUMsS0FBQSxFQUFBSSxRQUFBLENBQUE3RSxJQUFBLENBQUEwRTtVQUNBO1FBQ0E7TUFDQSxHQUNBUixLQUFBO1FBQ0FQLFFBQUEsQ0FBQVUsSUFBQTtNQUNBO0lBQ0E7RUFFQTtFQUNBYyxRQUFBO0lBQ0EsU0FBQUMsTUFBQSxDQUFBQyxNQUFBLENBQUFoRixFQUFBO01BQ0EsS0FBQUYsSUFBQSxDQUFBRSxFQUFBLFFBQUErRSxNQUFBLENBQUFDLE1BQUEsQ0FBQWhGLEVBQUE7TUFDQSxJQUFBc0QsUUFBQSxRQUFBQyxRQUFBLENBQUFDLElBQUE7UUFDQUMsU0FBQSxPQUFBQyxLQUFBLENBQUFDO01BQ0E7TUFDQTVCLEtBQUEsQ0FBQUMsR0FBQSx1QkFBQStDLE1BQUEsQ0FBQUMsTUFBQSxDQUFBaEYsRUFBQSxFQUNBaUMsSUFBQSxDQUFBQyxHQUFBO1FBQ0EsS0FBQXRDLFFBQUEsR0FBQXNDLEdBQUEsQ0FBQXZDLElBQUEsQ0FBQUEsSUFBQTtRQUNBLEtBQUFHLElBQUEsQ0FBQW1GLElBQUEsQ0FBQS9DLEdBQUEsQ0FBQXZDLElBQUEsQ0FBQUEsSUFBQTtRQUNBLElBQUF1RixvQkFBQSxHQUFBaEQsR0FBQSxDQUFBdkMsSUFBQSxDQUFBQSxJQUFBLENBQUF1RixvQkFBQTtRQUNBLEtBQUFwRixJQUFBLENBQUFvRixvQkFBQSxPQUFBQyxJQUFBLENBQUFELG9CQUFBLEVBQUFFLFdBQUE7UUFDQSxLQUFBdEYsSUFBQSxDQUFBdUYscUJBQUEsT0FBQUYsSUFBQSxNQUFBckYsSUFBQSxDQUFBdUYscUJBQUEsRUFBQUQsV0FBQTtRQUVBOUIsUUFBQSxDQUFBVSxJQUFBO01BQ0EsR0FDQUgsS0FBQTtRQUNBUCxRQUFBLENBQUFVLElBQUE7UUFDQSxLQUFBTSxPQUFBLENBQUFDLElBQUEsZUFBQVYsS0FBQTtNQUNBO0lBRUE7RUFDQTtFQUNBeUIsUUFBQTtFQUNBQyxLQUFBO0lBRUEsd0JBQUFDLENBQUFDLENBQUEsRUFBQUMsQ0FBQTtNQUNBLElBQUFBLENBQUEsRUFDQSxLQUFBNUYsSUFBQSxDQUFBNkYsZUFBQTtNQUNBLElBQUFGLENBQUE7UUFDQTFELEtBQUEsQ0FBQUMsR0FBQSxtQkFBQXlELENBQUEsRUFDQXhELElBQUEsQ0FBQUMsR0FBQTtVQUNBLEtBQUEwRCxjQUFBLEdBQUExRCxHQUFBLENBQUF2QyxJQUFBLENBQUFBLElBQUE7UUFDQTtNQUNBO0lBQ0E7SUFDQSxpQ0FBQWtHLENBQUFKLENBQUEsRUFBQUMsQ0FBQTtNQUNBLElBQUFBLENBQUEsRUFDQSxLQUFBNUYsSUFBQSxDQUFBZ0csaUJBQUE7TUFDQSxJQUFBTCxDQUFBO1FBQ0ExRCxLQUFBLENBQUFDLEdBQUEsZ0JBQUF5RCxDQUFBLEVBQ0F4RCxJQUFBLENBQUFDLEdBQUE7VUFDQSxLQUFBMUIsTUFBQSxHQUFBMEIsR0FBQSxDQUFBdkMsSUFBQSxDQUFBQSxJQUFBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQSxHOzs7Ozs7Ozs7Ozs7QUNyWEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlDQUFpQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxtQkFBbUIsaUNBQWlDO0FBQ3BELHFCQUFxQixxQkFBcUI7QUFDMUMsdUJBQXVCLDJCQUEyQjtBQUNsRCx5QkFBeUIsc0JBQXNCO0FBQy9DLDJCQUEyQiw2QkFBNkI7QUFDeEQsNEJBQTRCLDRCQUE0QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkJBQTJCO0FBQ3RELDZCQUE2QixxQkFBcUI7QUFDbEQsK0JBQStCLHdCQUF3QjtBQUN2RDtBQUNBO0FBQ0EseUJBQXlCLDRCQUE0QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywwQ0FBMEM7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNkNBQTZDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0JBQXdCO0FBQ3ZEO0FBQ0E7QUFDQSx5QkFBeUIsNEJBQTRCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw2Q0FBNkM7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdCQUF3QjtBQUN2RDtBQUNBO0FBQ0EseUJBQXlCLDRCQUE0QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNkNBQTZDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdCQUF3QjtBQUN2RCxpQ0FBaUMsNEJBQTRCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJDQUEyQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixxQ0FBcUMsMEJBQTBCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkNBQTZDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBLFNBQVMseUNBQXlDLGlCQUFpQixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQztBQUNsQyxJQUFJLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNwU2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1SDtBQUNhO0FBQ3BJO0FBQ21WO0FBQ25WO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUc7QUFDbkcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLG1JQUFjO0FBQ2hCLEVBQUUsMk9BQWM7QUFDaEIsRUFBRSxvUEFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvMjMuYnVuZGxlLjNkMzQ2YTE3ODJjYTIxZmI0OTgzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdF9tYWNoaW5lKClcIiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgZm9ybS5pZCA/ICdVcGRhdGUnIDogJ0FkZCcgfX0gQ29tcGxhaW50PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8uY2FyZC1oZWFkZXIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWxlY3QgQVRNIElEICo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cImF0bV9pZFwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cImF0bXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIEF0bSAuLi5cIiB2LW1vZGVsPVwiZm9ybS5hdG1faWRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdhdG1faWQnKSB9XCIgZGF0YS12di1uYW1lPVwiYXRtX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnYXRtX2lkJylcIiBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoJ2F0bV9pZCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNhbGwgVHlwZSAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJ0aXRsZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cImNvbXBsYWludF9zeXN0ZW1fdHlwZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIENhbGwgVHlwZSAuLi5cIiB2LW1vZGVsPVwiZm9ybS5jb21wbGFpbnRfc3lzdGVtX3R5cGVfaWRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjb21wbGFpbnRfc3lzdGVtX3R5cGVfaWQnKSB9XCIgZGF0YS12di1uYW1lPVwiY29tcGxhaW50X3N5c3RlbV90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY29tcGxhaW50X3N5c3RlbV90eXBlX2lkJylcIiBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoJ2NvbXBsYWludF9zeXN0ZW1fdHlwZV9pZCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZhdWx0IFR5cGUgKjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwidGl0bGVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJjb21wbGFpbnRfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgRmF1bHQgVHlwZSAuLi5cIiB2LW1vZGVsPVwiZm9ybS5jb21wbGFpbnRfdHlwZV9pZFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2NvbXBsYWludF90eXBlX2lkJykgfVwiIGRhdGEtdnYtbmFtZT1cImNvbXBsYWludF90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY29tcGxhaW50X3R5cGVfaWQnKVwiIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdCgnY29tcGxhaW50X3R5cGVfaWQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZhdWx0IERlc2NyaXB0aW9uICo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5jb21tZW50XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiY29tbWVudFwiIHYtdmFsaWRhdGU9XCInJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cImNvbW1lbnRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjb21tZW50JykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdjb21tZW50JylcIiBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPiB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2NvbW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgPCEtLSAvLm5hdi10YWJzLWN1c3RvbSAtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIGVuZCB0YWJzIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Zvcm0+XG4gICAgICAgPGJyPlxuICAgIDwvc2VjdGlvbj5cbiA8L3RlbXBsYXRlPlxuXG4gPHNjcmlwdD5cbiBpbXBvcnQgVnVlVGFnc0lucHV0IGZyb20gJ0Bqb2htdW4vdnVlLXRhZ3MtaW5wdXQnO1xuIGltcG9ydCB7IG5vdyB9IGZyb20gJ21vbWVudCc7XG4gaW1wb3J0IHtcbiAgICBtYXBHZXR0ZXJzXG4gfSBmcm9tIFwidnVleFwiO1xuIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIlVzZXJBZGRFZGl0XCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgIFZ1ZVRhZ3NJbnB1dCxcbiAgICB9LFxuICAgIGZpbHRlcnM6IHtcbiAgICAgICB0cnVuY2F0ZTogZnVuY3Rpb24gKHRleHQsIGxlbmd0aCwgc3VmZml4KSB7XG4gICAgICAgICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyBzdWZmaXg7XG4gICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgZmlsdGVyZWRJdGVtcygpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvY29tcGxldGVJdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgICAgICAgcmV0dXJuIGkudGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy50YWcudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xuICAgICAgICAgIH0pO1xuICAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWFjaGluZWQ6ICcnLFxuICAgICAgICAgIGNoZWNrYm94X21vZGVsOiBbXSxcbiAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgIGF0bV9pZDogJycsXG4gICAgICAgICAgICAgY29tcGxhaW50X3N5c3RlbV90eXBlX2lkOiAnJyxcbiAgICAgICAgICAgICBjb21wbGFpbnRfdHlwZV9pZDogJycsXG4gICAgICAgICAgICAgY29tbWVudDogJydcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhdG1zOiBbXSxcbiAgICAgICAgICBjb21wbGFpbnRfc3lzdGVtX3R5cGVzOiBbXSxcbiAgICAgICAgICBjb21wbGFpbnRfdHlwZTogW10sXG4gICAgICAgICAgbW9kZWxzOiBbXSxcbiAgICAgICAgICBvcGVyYXRvcnM6IFtdLFxuICAgICAgICAgIHNpdGVzOiBbXSxcbiAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgdGFnOiAnJyxcbiAgICAgICAgICBhdXRvY29tcGxldGVJdGVtczogW10sXG5cbiAgICAgICAgICBzbDogMCxcbiAgICAgICAgICBhc3NpZ25lZF9pZHM6IFtdLFxuICAgICAgICAgIHBlcm1pc3Npb25zOiBbXSxcbiAgICAgICAgICB2aWV3X21vZGU6IGZhbHNlLFxuICAgICAgICAgIGNvdW50cmllczogW10sXG4gICAgICAgICAgc3RhdGVzOiBbXSxcbiAgICAgICAgICBjaXRpZXM6IFtdLFxuICAgICAgICAgIGVkaXRtb2RlOiBmYWxzZSxcbiAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgIHVzZXJzOiB7fSxcbiAgICAgICAgICBmaWxlOiAnJyxcbiAgICAgICAgICBpbnZvaWNlX2NvcHk6IG51bGwsXG4gICAgICAgICAgY2ZfY29weTogbnVsbCxcbiAgICAgICAgICBuYXRpb25hbF9wZXJtaXRfY29weTpudWxsLFxuICAgICAgICAgIHJvYWRfdGF4X2NvcHk6IG51bGwsXG4gICAgICAgICAgaW5zdXJhbmNlX2NvcHk6IG51bGwsXG4gICAgICAgICAgcG9sbHV0aW9uX2NvcHk6IG51bGwsXG4gICAgICAgICAgcmNfY29weTogbnVsbFxuICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgLi4ubWFwR2V0dGVycyhbXCJlcnJvcnNcIl0pLFxuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgIGF4aW9zLmdldChcImFwaS9sb2RnZUNvbXBsYWludEhlbHBcIilcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcz09PT09PlwiLHJlcyk7XG5cbiAgICAgICAgICAgICB0aGlzLmF0bXMgPSByZXMuZGF0YS5kYXRhLmF0bXM7XG4gICAgICAgICAgICAgdGhpcy5jb21wbGFpbnRfc3lzdGVtX3R5cGVzID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfc3lzdGVtX3R5cGVzO1xuICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50X3R5cGUgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludF90eXBlO1xuICAgICAgICAgIH0pXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICBvbkZpbGVDaGFuZ2UoZSkge1xuICAgICAgICAgIHRoaXMuaW52b2ljZV9jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIG9uQ0ZDaGFuZ2UoZSl7XG4gICAgICAgICAgdGhpcy5jZl9jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIG9uTlBDaGFuZ2UoZSl7XG4gICAgICAgICAgdGhpcy5uYXRpb25hbF9wZXJtaXRfY29weSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgIH0sXG5cbiAgICAgICBvblJUQ2hhbmdlKGUpe1xuICAgICAgICAgIHRoaXMucm9hZF90YXhfY29weSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgIH0sXG5cbiAgICAgICBvbkluc3VyYW5jZUNoYW5nZShlKXtcbiAgICAgICAgICB0aGlzLmluc3VyYW5jZV9jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIG9uUG9sbHV0aW9uQ2hhbmdlKGUpe1xuICAgICAgICAgIHRoaXMucG9sbHV0aW9uX2NvcHkgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICB9LFxuXG4gICAgICAgb25SQ0NoYW5nZShlKXtcbiAgICAgICAgICB0aGlzLnJjX2NvcHkgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICB9LFxuXG4gICAgICAgc3VibWl0X21hY2hpbmUoKSB7XG4gICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbihhc3luYyAodmFsaWQpID0+IHtcbiAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnJvcnMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xuICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5yZWZfbG9hZF91c2VyXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KFwiYXBpL3N0b3JlQ29tcGxhaW50XCIsdGhpcy5mb3JtKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzPT09PT0+XCIscmVzKTtcblxuICAgICAgICAgICAgLy8gIHRoaXMuYXRtcyA9IHJlcy5kYXRhLmRhdGEuYXRtcztcbiAgICAgICAgICAgIC8vICB0aGlzLmNvbXBsYWludF9zeXN0ZW1fdHlwZXMgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludF9zeXN0ZW1fdHlwZXM7XG4gICAgICAgICAgICAvLyAgdGhpcy5jb21wbGFpbnRfdHlwZSA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50X3R5cGU7XG4gICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLGVycik7XG4gICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wb3N0KCdhcGkvc3RvcmVDb21wbGFpbnQnKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGE6IFwiICxkYXRhLmRhdGEuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uaWQgPSBkYXRhLmRhdGEuZGF0YS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFcIixkYXRhLmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvY29tcGxhaW50LWxpc3QvMScpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlICYmIGVyci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuZm9ybS5pZCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyAgICB0aGlzLmZvcm0ucHV0KCdhcGkvbWFjaGluZS8nICsgdGhpcy5mb3JtLmlkKVxuICAgICAgICAgICAgICAgIC8vICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXNldCgpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFyIGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmQuYXBwZW5kKGBmaWxlYCwgdGhpcy5pbnZvaWNlX2NvcHkpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZkLmFwcGVuZChgY2ZmaWxlYCwgdGhpcy5jZl9jb3B5KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmZC5hcHBlbmQoYG5wZmlsZWAsIHRoaXMubmF0aW9uYWxfcGVybWl0X2NvcHkpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZkLmFwcGVuZChgcnRmaWxlYCwgdGhpcy5yb2FkX3RheF9jb3B5KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmZC5hcHBlbmQoYGluc3VyYW5jZWZpbGVgLCB0aGlzLmluc3VyYW5jZV9jb3B5KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmZC5hcHBlbmQoYHBvbGx1dGlvbmZpbGVgLCB0aGlzLnBvbGx1dGlvbl9jb3B5KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmZC5hcHBlbmQoYHJjZmlsZWAsIHRoaXMucmNfY29weSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmQuYXBwZW5kKGBpZGAsIHRoaXMuZm9ybS5pZCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYXhpb3MucG9zdCgnYXBpL21hY2hpbmUvZmlsZXMnLCBmZCkudGhlbigocmVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbWFjaGluZXMnKS5jYXRjaCgoKSA9PiB7IH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgaWYgKGVyci5yZXNwb25zZSAmJiBlcnIucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuJHNldEVycm9yc0Zyb21SZXNwb25zZShlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICB0aGlzLmZvcm0ucG9zdCgnYXBpL3N0b3JlQ29tcGxhaW50JylcbiAgICAgICAgICAgICAgICAvLyAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXNldCgpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIHRoaXMuZm9ybS5pZCA9IGRhdGEuZGF0YS5kYXRhLmlkO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLGRhdGEuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGl0bGU6IGRhdGEuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9jb21wbGFpbnQtbGlzdC8xJykuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UoZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgIH0sXG5cbiAgICAgICBncmFuZF9wZXJtaXNzaW9uKCkge1xuICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XG4gICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnNldHRpbmdfcGVybWlzc2lvbnJlZlxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYXhpb3MucG9zdCgnYXBpL3VzZXIvZ3JhbmRfcGVybWlzc2lvbicsIHtcbiAgICAgICAgICAgICB1c2VyOiB0aGlzLmZvcm0uaWQsXG4gICAgICAgICAgICAgcGVybWlzc2lvbnM6IHRoaXMuYXNzaWduZWRfaWRzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKClcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xuICAgICAgICAgICAgIH0pXG4gICAgICAgfSxcblxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICBpZiAodGhpcy4kcm91dGUucGFyYW1zLmlkKSB7XG4gICAgICAgICAgdGhpcy5mb3JtLmlkID0gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xuICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XG4gICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX3VzZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvbWFjaGluZS9cIiArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZClcbiAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWNoaW5lZCA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZmlsbChyZXMuZGF0YS5kYXRhKVxuICAgICAgICAgICAgICAgIGxldCBkYXRlX3RpbWVfbWFjaGluZV9pYyA9IHJlcy5kYXRhLmRhdGEuZGF0ZV90aW1lX21hY2hpbmVfaWNcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZGF0ZV90aW1lX21hY2hpbmVfaWMgPSBuZXcgRGF0ZShkYXRlX3RpbWVfbWFjaGluZV9pYykudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5sYXN0X21haW50ZW5hbmNlX2RhdGUgPSBuZXcgRGF0ZSh0aGlzLmZvcm0ubGFzdF9tYWludGVuYW5jZV9kYXRlKS50b0lTT1N0cmluZygpXG5cbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL21hY2hpbmVzLycpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgICAgICAgfSlcblxuICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7IH0sXG4gICAgd2F0Y2g6IHtcblxuICAgICAgIGFzeW5jICdmb3JtLmNhdGVnb3J5X2lkJyhuLCBvKSB7XG4gICAgICAgICAgaWYgKG8pXG4gICAgICAgICAgICAgdGhpcy5mb3JtLnN1Yl9jYXRlZ29yeV9pZCA9ICcnXG4gICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvY2F0ZWdvcnkvXCIgKyBuKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yl9jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICB9LFxuICAgICAgIGFzeW5jICdmb3JtLm1hY2hpbmVfY29tcGFuaWVzX2lkJyhuLCBvKSB7XG4gICAgICAgICAgaWYgKG8pXG4gICAgICAgICAgICAgdGhpcy5mb3JtLm1hY2hpbmVfbW9kZWxzX2lkID0gJydcbiAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9tb2RlbC9cIiArIG4pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWxzID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICB9LFxuICAgIH1cbiB9XG4gPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ob3Jpem9udGFsXCIsXG4gICAgICAgIGF0dHJzOiB7IGVuY3R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdF9tYWNoaW5lKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZvcm0uaWQgPyBcIlVwZGF0ZVwiIDogXCJBZGRcIikgKyBcIiBDb21wbGFpbnRcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiU2VsZWN0IEFUTSBJRCAqXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcImF0bV9pZFwiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJhdG1faWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uYXRtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBBdG0gLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImF0bV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmF0bV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiYXRtX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uYXRtX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJhdG1faWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52ZXJyb3JzLmZpcnN0KFwiYXRtX2lkXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkNhbGwgVHlwZSAqXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcGxhaW50X3N5c3RlbV90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5jb21wbGFpbnRfc3lzdGVtX3R5cGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIENhbGwgVHlwZSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiY29tcGxhaW50X3N5c3RlbV90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY29tcGxhaW50X3N5c3RlbV90eXBlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBsYWludF9zeXN0ZW1fdHlwZV9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNvbXBsYWludF9zeXN0ZW1fdHlwZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY29tcGxhaW50X3N5c3RlbV90eXBlX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcGxhaW50X3N5c3RlbV90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJGYXVsdCBUeXBlICpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcImNvbXBsYWludF90eXBlX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uY29tcGxhaW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9vc2UgRmF1bHQgVHlwZSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiY29tcGxhaW50X3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jb21wbGFpbnRfdHlwZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiY29tcGxhaW50X3R5cGVfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb21wbGFpbnRfdHlwZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY29tcGxhaW50X3R5cGVfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiY29tcGxhaW50X3R5cGVfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkZhdWx0IERlc2NyaXB0aW9uICpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY29tbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCInJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcImNvbW1lbnRcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNvbW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJjb21tZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmNvbW1lbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJjb21tZW50XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjb21tZW50XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52ZXJyb3JzLmZpcnN0KFwiY29tbWVudFwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgwKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYnJcIilcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyIHRleHQtcmlnaHRcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIiwgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sXG4gICAgICAgIFtfdm0uX3YoXCJTdWJtaXRcIildXG4gICAgICApXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTU5M2UzOThiXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db21wbGFpbnRBZGRFZGl0LnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29tcGxhaW50QWRkRWRpdC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTkzZTM5OGJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ29tcGxhaW50QWRkRWRpdC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludEFkZEVkaXQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU5M2UzOThiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTkzZTM5OGJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==