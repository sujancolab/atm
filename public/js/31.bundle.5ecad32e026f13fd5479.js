(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

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
        far_no: '',
        name: '',
        category_id: '',
        sub_category_id: '',
        machine_companies_id: '',
        machine_models_id: '',
        owner: 'Owned',
        purchase_date: '',
        purchase_price: '',
        year_of_depreciation: '',
        machine_type: 'New',
        manufacture_year: '',
        regn_no: '',
        machine_sr_no: '',
        engine_model: '',
        engine_no: '',
        chassis_no: '',
        condition_of_machine: '',
        standard_consumption_hr_per_ltr: '',
        standard_consumption_km_per_ltr: '',
        consumption_type: 'Fuel',
        under_maintenance: 'Yes',
        is_maintenance_date: true,
        is_consumtion_hr_run: '',
        is_consumtion_km_run: '',
        is_production_fig: '',
        date_time_machine_ic: new Date().toISOString(),
        date_threshold: '',
        run_hour_threshold: '',
        run_km_threshold: '',
        production_fig_threshold: '',
        site_id: '',
        operator_id: '',
        last_maintenance_date: '',
        last_hr_run: '',
        present_run_hour: '',
        last_km_run: '',
        present_run_km: '',
        periodic_maintenance_breakdown: '',
        present_production_fig: '',
        free_service_no: '',
        prdloss_hrs: '',
        prdloss_hr_rate: '',
        invoice_no: '',
        invoice_copy: '',
        cf_date: '',
        cf_frequency: '',
        national_permit_date: '',
        national_permit_frequency: '',
        road_tax_date: '',
        road_tax_frequency: '',
        insurance_date: '',
        insurance_frequency: '',
        pollution_date: '',
        pollution_frequency: '',
        rc_date: '',
        rc_frequency: '',
        cf_amount: '',
        cf_copy: '',
        national_permit_amount: '',
        national_permit_copy: '',
        road_tax_amount: '',
        road_tax_copy: '',
        insurance_amount: '',
        insurance_copy: '',
        pollution_amount: '',
        pollution_copy: '',
        rc_amount: '',
        rc_copy: '',
        amc: '',
        amc_start_date: '',
        amc_end_date: ''
      }),
      atms: [],
      complaint_system_types: [],
      companies: [],
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
        if (valid && (this.form.under_maintenance == 'Yes' && (this.form.is_consumtion_hr_run || this.form.is_consumtion_km_run || this.form.is_production_fig) || this.form.under_maintenance == 'No')) {
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
            this.form.post('api/machine').then(data => {
              this.$validator.reset();
              cloaderd.hide();
              this.form.id = data.data.data.id;
              this.form.reset();
              Toast.fire({
                icon: 'success',
                title: data.data.message
              });
              this.$router.push('/machines').catch(() => {});
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d6935f50\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintAddEdit.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d6935f50","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintAddEdit.vue ***!
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
                    _vm._v(_vm._s(_vm.form.id ? "Update" : "Add") + " Machine")
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
                            class: {
                              "is-invalid": _vm.verrors.has("category_id")
                            },
                            attrs: {
                              label: "name",
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.categories,
                              placeholder: "Choose Category ...",
                              "data-vv-name": "Category"
                            },
                            model: {
                              value: _vm.form.category_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "category_id", $$v)
                              },
                              expression: "form.category_id"
                            }
                          }),
                          _vm._v(" "),
                          _vm.verrors.has("category_id")
                            ? _c(
                                "div",
                                { staticClass: "help-block invalid-feedback" },
                                [
                                  _vm._v(
                                    "\n                                 " +
                                      _vm._s(_vm.verrors.first("category_id")) +
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
                              "is-invalid": _vm.verrors.has("category_id")
                            },
                            attrs: {
                              label: "name",
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.categories,
                              placeholder: "Choose Category ...",
                              "data-vv-name": "Category"
                            },
                            model: {
                              value: _vm.form.category_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "category_id", $$v)
                              },
                              expression: "form.category_id"
                            }
                          }),
                          _vm._v(" "),
                          _vm.verrors.has("category_id")
                            ? _c(
                                "div",
                                { staticClass: "help-block invalid-feedback" },
                                [
                                  _vm._v(
                                    "\n                                 " +
                                      _vm._s(_vm.verrors.first("category_id")) +
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
                              "is-invalid": _vm.verrors.has("category_id")
                            },
                            attrs: {
                              label: "name",
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.categories,
                              placeholder: "Choose Category ...",
                              "data-vv-name": "Category"
                            },
                            model: {
                              value: _vm.form.category_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "category_id", $$v)
                              },
                              expression: "form.category_id"
                            }
                          }),
                          _vm._v(" "),
                          _vm.verrors.has("category_id")
                            ? _c(
                                "div",
                                { staticClass: "help-block invalid-feedback" },
                                [
                                  _vm._v(
                                    "\n                                 " +
                                      _vm._s(_vm.verrors.first("category_id")) +
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
                              value: _vm.form.regn_no,
                              expression: "form.regn_no"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "",
                              expression: "''"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.verrors.has("regn_no") },
                          attrs: {
                            type: "text",
                            name: "regn_no",
                            "data-vv-as": "Regn. No"
                          },
                          domProps: { value: _vm.form.regn_no },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "regn_no", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.verrors.has("regn_no")
                          ? _c(
                              "div",
                              { staticClass: "help-block invalid-feedback" },
                              [
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.verrors.first("regn_no")) +
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d6935f50_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintAddEdit_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-d6935f50","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./ComplaintAddEdit.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d6935f50\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintAddEdit.vue");
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
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d6935f50_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintAddEdit_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d6935f50_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintAddEdit_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\ComplaintAddEdit.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50QWRkRWRpdC52dWU/YjgwYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnRBZGRFZGl0LnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwiY29tcG9uZW50cyIsIlZ1ZVRhZ3NJbnB1dCIsImZpbHRlcnMiLCJ0cnVuY2F0ZSIsImNvbXB1dGVkIiwiZmlsdGVyZWRJdGVtcyIsImRhdGEiLCJtYWNoaW5lZCIsImNoZWNrYm94X21vZGVsIiwiZm9ybSIsImlkIiwiZmFyX25vIiwiY2F0ZWdvcnlfaWQiLCJzdWJfY2F0ZWdvcnlfaWQiLCJtYWNoaW5lX2NvbXBhbmllc19pZCIsIm1hY2hpbmVfbW9kZWxzX2lkIiwib3duZXIiLCJwdXJjaGFzZV9kYXRlIiwicHVyY2hhc2VfcHJpY2UiLCJ5ZWFyX29mX2RlcHJlY2lhdGlvbiIsIm1hY2hpbmVfdHlwZSIsIm1hbnVmYWN0dXJlX3llYXIiLCJyZWduX25vIiwibWFjaGluZV9zcl9ubyIsImVuZ2luZV9tb2RlbCIsImVuZ2luZV9ubyIsImNoYXNzaXNfbm8iLCJjb25kaXRpb25fb2ZfbWFjaGluZSIsInN0YW5kYXJkX2NvbnN1bXB0aW9uX2hyX3Blcl9sdHIiLCJzdGFuZGFyZF9jb25zdW1wdGlvbl9rbV9wZXJfbHRyIiwiY29uc3VtcHRpb25fdHlwZSIsInVuZGVyX21haW50ZW5hbmNlIiwiaXNfbWFpbnRlbmFuY2VfZGF0ZSIsImlzX2NvbnN1bXRpb25faHJfcnVuIiwiaXNfY29uc3VtdGlvbl9rbV9ydW4iLCJpc19wcm9kdWN0aW9uX2ZpZyIsImRhdGVfdGltZV9tYWNoaW5lX2ljIiwiZGF0ZV90aHJlc2hvbGQiLCJydW5faG91cl90aHJlc2hvbGQiLCJydW5fa21fdGhyZXNob2xkIiwicHJvZHVjdGlvbl9maWdfdGhyZXNob2xkIiwic2l0ZV9pZCIsIm9wZXJhdG9yX2lkIiwibGFzdF9tYWludGVuYW5jZV9kYXRlIiwibGFzdF9ocl9ydW4iLCJwcmVzZW50X3J1bl9ob3VyIiwibGFzdF9rbV9ydW4iLCJwcmVzZW50X3J1bl9rbSIsInBlcmlvZGljX21haW50ZW5hbmNlX2JyZWFrZG93biIsInByZXNlbnRfcHJvZHVjdGlvbl9maWciLCJmcmVlX3NlcnZpY2Vfbm8iLCJwcmRsb3NzX2hycyIsInByZGxvc3NfaHJfcmF0ZSIsImludm9pY2Vfbm8iLCJpbnZvaWNlX2NvcHkiLCJjZl9kYXRlIiwiY2ZfZnJlcXVlbmN5IiwibmF0aW9uYWxfcGVybWl0X2RhdGUiLCJuYXRpb25hbF9wZXJtaXRfZnJlcXVlbmN5Iiwicm9hZF90YXhfZGF0ZSIsInJvYWRfdGF4X2ZyZXF1ZW5jeSIsImluc3VyYW5jZV9kYXRlIiwiaW5zdXJhbmNlX2ZyZXF1ZW5jeSIsInBvbGx1dGlvbl9kYXRlIiwicG9sbHV0aW9uX2ZyZXF1ZW5jeSIsInJjX2RhdGUiLCJyY19mcmVxdWVuY3kiLCJjZl9hbW91bnQiLCJjZl9jb3B5IiwibmF0aW9uYWxfcGVybWl0X2Ftb3VudCIsIm5hdGlvbmFsX3Blcm1pdF9jb3B5Iiwicm9hZF90YXhfYW1vdW50Iiwicm9hZF90YXhfY29weSIsImluc3VyYW5jZV9hbW91bnQiLCJpbnN1cmFuY2VfY29weSIsInBvbGx1dGlvbl9hbW91bnQiLCJwb2xsdXRpb25fY29weSIsInJjX2Ftb3VudCIsInJjX2NvcHkiLCJhbWMiLCJhbWNfc3RhcnRfZGF0ZSIsImFtY19lbmRfZGF0ZSIsImF0bXMiLCJjb21wbGFpbnRfc3lzdGVtX3R5cGVzIiwiY29tcGFuaWVzIiwibW9kZWxzIiwib3BlcmF0b3JzIiwic2l0ZXMiLCJ1c2VycyIsInRhZyIsImF1dG9jb21wbGV0ZUl0ZW1zIiwic2wiLCJhc3NpZ25lZF9pZHMiLCJwZXJtaXNzaW9ucyIsInZpZXdfbW9kZSIsImNvdW50cmllcyIsInN0YXRlcyIsImNpdGllcyIsImVkaXRtb2RlIiwic3RlcCIsImZpbGUiLCJiZWZvcmVDcmVhdGUiLCJheGlvcyIsInRoZW4iLCJjb25zb2xlIiwibWV0aG9kcyIsIm9uRmlsZUNoYW5nZSIsIm9uQ0ZDaGFuZ2UiLCJvbk5QQ2hhbmdlIiwib25SVENoYW5nZSIsIm9uSW5zdXJhbmNlQ2hhbmdlIiwib25Qb2xsdXRpb25DaGFuZ2UiLCJvblJDQ2hhbmdlIiwic3VibWl0X21hY2hpbmUiLCJjb250YWluZXIiLCJjbG9hZGVyZCIsImZkIiwiVG9hc3QiLCJpY29uIiwidGl0bGUiLCJjYXRjaCIsImdyYW5kX3Blcm1pc3Npb24iLCJ1c2VyIiwibW91bnRlZCIsImNyZWF0ZWQiLCJ3YXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUZBO0FBQ0E7QUFHQTtBQUNBO0VBQ0FBO0VBQ0FDO0lBQ0FDO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtRQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUM7UUFBQUM7UUFBQVo7UUFBQWE7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFDQUM7UUFDQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFDQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUM7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QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJDQUEyQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixxQ0FBcUMsMEJBQTBCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkNBQTZDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBLFNBQVMseUNBQXlDLGlCQUFpQixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQztBQUNsQyxJQUFJLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUN4UmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1SDtBQUNhO0FBQ3BJO0FBQ21WO0FBQ25WO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUc7QUFDbkcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLG1JQUFjO0FBQ2hCLEVBQUUsMk9BQWM7QUFDaEIsRUFBRSxvUEFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvMzEuYnVuZGxlLjVlY2FkMzJlMDI2ZjEzZmQ1NDc5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdF9tYWNoaW5lKClcIiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgZm9ybS5pZCA/ICdVcGRhdGUnIDogJ0FkZCcgfX0gTWFjaGluZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmNhcmQtaGVhZGVyIC0tPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VsZWN0IEFUTSBJRCAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwiY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgQ2F0ZWdvcnkgLi4uXCIgdi1tb2RlbD1cImZvcm0uY2F0ZWdvcnlfaWRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjYXRlZ29yeV9pZCcpIH1cIiBkYXRhLXZ2LW5hbWU9XCJDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyZXF1aXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2NhdGVnb3J5X2lkJylcIiBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoJ2NhdGVnb3J5X2lkJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2FsbCBUeXBlICo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBDYXRlZ29yeSAuLi5cIiB2LW1vZGVsPVwiZm9ybS5jYXRlZ29yeV9pZFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2NhdGVnb3J5X2lkJykgfVwiIGRhdGEtdnYtbmFtZT1cIkNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2F0ZWdvcnlfaWQnKVwiIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdCgnY2F0ZWdvcnlfaWQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GYXVsdCBUeXBlICo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBDYXRlZ29yeSAuLi5cIiB2LW1vZGVsPVwiZm9ybS5jYXRlZ29yeV9pZFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2NhdGVnb3J5X2lkJykgfVwiIGRhdGEtdnYtbmFtZT1cIkNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2F0ZWdvcnlfaWQnKVwiIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdCgnY2F0ZWdvcnlfaWQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZhdWx0IERlc2NyaXB0aW9uICo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5yZWduX25vXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicmVnbl9ub1wiIHYtdmFsaWRhdGU9XCInJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cIlJlZ24uIE5vXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygncmVnbl9ubycpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygncmVnbl9ubycpXCIgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj4ge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdyZWduX25vJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgIDwhLS0gLy5uYXYtdGFicy1jdXN0b20gLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBlbmQgdGFicyAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9mb3JtPlxuICAgICAgIDxicj5cbiAgICA8L3NlY3Rpb24+XG4gPC90ZW1wbGF0ZT5cblxuIDxzY3JpcHQ+XG4gaW1wb3J0IFZ1ZVRhZ3NJbnB1dCBmcm9tICdAam9obXVuL3Z1ZS10YWdzLWlucHV0JztcbiBpbXBvcnQgeyBub3cgfSBmcm9tICdtb21lbnQnO1xuIGltcG9ydCB7XG4gICAgbWFwR2V0dGVyc1xuIH0gZnJvbSBcInZ1ZXhcIjtcbiBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJVc2VyQWRkRWRpdFwiLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICBWdWVUYWdzSW5wdXQsXG4gICAgfSxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgdHJ1bmNhdGU6IGZ1bmN0aW9uICh0ZXh0LCBsZW5ndGgsIHN1ZmZpeCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZygwLCBsZW5ndGgpICsgc3VmZml4O1xuICAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgIGZpbHRlcmVkSXRlbXMoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b2NvbXBsZXRlSXRlbXMuZmlsdGVyKGkgPT4ge1xuICAgICAgICAgICAgIHJldHVybiBpLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMudGFnLnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcbiAgICAgICAgICB9KTtcbiAgICAgICB9LFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1hY2hpbmVkOiAnJyxcbiAgICAgICAgICBjaGVja2JveF9tb2RlbDogW10sXG4gICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgIGlkOiAnJywgZmFyX25vOiAnJywgbmFtZTogJycsIGNhdGVnb3J5X2lkOiAnJywgc3ViX2NhdGVnb3J5X2lkOiAnJywgbWFjaGluZV9jb21wYW5pZXNfaWQ6ICcnLCBtYWNoaW5lX21vZGVsc19pZDogJycsIG93bmVyOiAnT3duZWQnLCBwdXJjaGFzZV9kYXRlOiAnJywgcHVyY2hhc2VfcHJpY2U6ICcnLCB5ZWFyX29mX2RlcHJlY2lhdGlvbjogJycsIG1hY2hpbmVfdHlwZTogJ05ldycsIG1hbnVmYWN0dXJlX3llYXI6ICcnLCByZWduX25vOiAnJywgbWFjaGluZV9zcl9ubzogJycsIGVuZ2luZV9tb2RlbDogJycsIGVuZ2luZV9ubzogJycsIGNoYXNzaXNfbm86ICcnLCBjb25kaXRpb25fb2ZfbWFjaGluZTogJycsIHN0YW5kYXJkX2NvbnN1bXB0aW9uX2hyX3Blcl9sdHI6ICcnLCBzdGFuZGFyZF9jb25zdW1wdGlvbl9rbV9wZXJfbHRyOiAnJywgY29uc3VtcHRpb25fdHlwZTogJ0Z1ZWwnLCB1bmRlcl9tYWludGVuYW5jZTogJ1llcycsIGlzX21haW50ZW5hbmNlX2RhdGU6IHRydWUsIGlzX2NvbnN1bXRpb25faHJfcnVuOiAnJywgaXNfY29uc3VtdGlvbl9rbV9ydW46ICcnLCBpc19wcm9kdWN0aW9uX2ZpZzogJycsXG4gICAgICAgICAgICAgZGF0ZV90aW1lX21hY2hpbmVfaWM6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICBkYXRlX3RocmVzaG9sZDogJycsIHJ1bl9ob3VyX3RocmVzaG9sZDogJycsIHJ1bl9rbV90aHJlc2hvbGQ6ICcnLCBwcm9kdWN0aW9uX2ZpZ190aHJlc2hvbGQ6ICcnLCBzaXRlX2lkOiAnJywgb3BlcmF0b3JfaWQ6JycsIGxhc3RfbWFpbnRlbmFuY2VfZGF0ZTogJycsIGxhc3RfaHJfcnVuOiAnJywgcHJlc2VudF9ydW5faG91cjogJycsIGxhc3Rfa21fcnVuOiAnJywgcHJlc2VudF9ydW5fa206ICcnLCBwZXJpb2RpY19tYWludGVuYW5jZV9icmVha2Rvd246ICcnLCBwcmVzZW50X3Byb2R1Y3Rpb25fZmlnOiAnJywgZnJlZV9zZXJ2aWNlX25vOiAnJywgcHJkbG9zc19ocnM6ICcnLFxuICAgICAgICAgICAgIHByZGxvc3NfaHJfcmF0ZTogJycsIGludm9pY2Vfbm86ICcnLCBpbnZvaWNlX2NvcHk6ICcnLCBjZl9kYXRlOiAnJywgY2ZfZnJlcXVlbmN5OiAnJywgbmF0aW9uYWxfcGVybWl0X2RhdGU6ICcnLCBuYXRpb25hbF9wZXJtaXRfZnJlcXVlbmN5OiAnJywgcm9hZF90YXhfZGF0ZTogJycsIHJvYWRfdGF4X2ZyZXF1ZW5jeTogJycsIGluc3VyYW5jZV9kYXRlOiAnJywgaW5zdXJhbmNlX2ZyZXF1ZW5jeTogJycsIHBvbGx1dGlvbl9kYXRlOiAnJywgcG9sbHV0aW9uX2ZyZXF1ZW5jeTogJycsIHJjX2RhdGU6ICcnLCByY19mcmVxdWVuY3k6ICcnLCBjZl9hbW91bnQ6ICcnLCBjZl9jb3B5OiAnJywgbmF0aW9uYWxfcGVybWl0X2Ftb3VudDogJycsIG5hdGlvbmFsX3Blcm1pdF9jb3B5OiAnJywgcm9hZF90YXhfYW1vdW50OiAnJywgcm9hZF90YXhfY29weTogJycsIGluc3VyYW5jZV9hbW91bnQ6ICcnLCBpbnN1cmFuY2VfY29weTogJycsIHBvbGx1dGlvbl9hbW91bnQ6ICcnLCBwb2xsdXRpb25fY29weTogJycsIHJjX2Ftb3VudDogJycsIHJjX2NvcHk6ICcnLFxuICAgICAgICAgICAgIGFtYzogJycsIGFtY19zdGFydF9kYXRlOiAnJywgYW1jX2VuZF9kYXRlOiAnJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhdG1zOiBbXSxcbiAgICAgICAgICBjb21wbGFpbnRfc3lzdGVtX3R5cGVzOiBbXSxcbiAgICAgICAgICBjb21wYW5pZXM6IFtdLFxuICAgICAgICAgIG1vZGVsczogW10sXG4gICAgICAgICAgb3BlcmF0b3JzOiBbXSxcbiAgICAgICAgICBzaXRlczogW10sXG4gICAgICAgICAgdXNlcnM6IFtdLFxuICAgICAgICAgIHRhZzogJycsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlSXRlbXM6IFtdLFxuXG4gICAgICAgICAgc2w6IDAsXG4gICAgICAgICAgYXNzaWduZWRfaWRzOiBbXSxcbiAgICAgICAgICBwZXJtaXNzaW9uczogW10sXG4gICAgICAgICAgdmlld19tb2RlOiBmYWxzZSxcbiAgICAgICAgICBjb3VudHJpZXM6IFtdLFxuICAgICAgICAgIHN0YXRlczogW10sXG4gICAgICAgICAgY2l0aWVzOiBbXSxcbiAgICAgICAgICBlZGl0bW9kZTogZmFsc2UsXG4gICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICB1c2Vyczoge30sXG4gICAgICAgICAgZmlsZTogJycsXG4gICAgICAgICAgaW52b2ljZV9jb3B5OiBudWxsLFxuICAgICAgICAgIGNmX2NvcHk6IG51bGwsXG4gICAgICAgICAgbmF0aW9uYWxfcGVybWl0X2NvcHk6bnVsbCxcbiAgICAgICAgICByb2FkX3RheF9jb3B5OiBudWxsLFxuICAgICAgICAgIGluc3VyYW5jZV9jb3B5OiBudWxsLFxuICAgICAgICAgIHBvbGx1dGlvbl9jb3B5OiBudWxsLFxuICAgICAgICAgIHJjX2NvcHk6IG51bGxcbiAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgIC4uLm1hcEdldHRlcnMoW1wiZXJyb3JzXCJdKSxcbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICBheGlvcy5nZXQoXCJhcGkvbG9kZ2VDb21wbGFpbnRIZWxwXCIpXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXM9PT09PT5cIixyZXMpO1xuXG4gICAgICAgICAgICAgdGhpcy5hdG1zID0gcmVzLmRhdGEuZGF0YS5hdG1zO1xuICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50X3N5c3RlbV90eXBlcyA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50X3N5c3RlbV90eXBlcztcbiAgICAgICAgICAgICB0aGlzLmNvbXBsYWludF90eXBlID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfdHlwZTtcbiAgICAgICAgICB9KVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgb25GaWxlQ2hhbmdlKGUpIHtcbiAgICAgICAgICB0aGlzLmludm9pY2VfY29weSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgIH0sXG5cbiAgICAgICBvbkNGQ2hhbmdlKGUpe1xuICAgICAgICAgIHRoaXMuY2ZfY29weSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgIH0sXG5cbiAgICAgICBvbk5QQ2hhbmdlKGUpe1xuICAgICAgICAgIHRoaXMubmF0aW9uYWxfcGVybWl0X2NvcHkgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICB9LFxuXG4gICAgICAgb25SVENoYW5nZShlKXtcbiAgICAgICAgICB0aGlzLnJvYWRfdGF4X2NvcHkgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICB9LFxuXG4gICAgICAgb25JbnN1cmFuY2VDaGFuZ2UoZSl7XG4gICAgICAgICAgdGhpcy5pbnN1cmFuY2VfY29weSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgIH0sXG5cbiAgICAgICBvblBvbGx1dGlvbkNoYW5nZShlKXtcbiAgICAgICAgICB0aGlzLnBvbGx1dGlvbl9jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIG9uUkNDaGFuZ2UoZSl7XG4gICAgICAgICAgdGhpcy5yY19jb3B5ID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgfSxcblxuICAgICAgIHN1Ym1pdF9tYWNoaW5lKCkge1xuICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oYXN5bmMgKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgaWYgKHZhbGlkICYmICgodGhpcy5mb3JtLnVuZGVyX21haW50ZW5hbmNlID09ICdZZXMnICYmICh0aGlzLmZvcm0uaXNfY29uc3VtdGlvbl9ocl9ydW4gfHwgdGhpcy5mb3JtLmlzX2NvbnN1bXRpb25fa21fcnVuIHx8IHRoaXMuZm9ybS5pc19wcm9kdWN0aW9uX2ZpZykpIHx8IHRoaXMuZm9ybS51bmRlcl9tYWludGVuYW5jZSA9PSAnTm8nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmVycm9ycy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX3VzZXJcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uaWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnB1dCgnYXBpL21hY2hpbmUvJyArIHRoaXMuZm9ybS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZmlsZWAsIHRoaXMuaW52b2ljZV9jb3B5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGNmZmlsZWAsIHRoaXMuY2ZfY29weSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBucGZpbGVgLCB0aGlzLm5hdGlvbmFsX3Blcm1pdF9jb3B5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYHJ0ZmlsZWAsIHRoaXMucm9hZF90YXhfY29weSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBpbnN1cmFuY2VmaWxlYCwgdGhpcy5pbnN1cmFuY2VfY29weSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBwb2xsdXRpb25maWxlYCwgdGhpcy5wb2xsdXRpb25fY29weSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGByY2ZpbGVgLCB0aGlzLnJjX2NvcHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgaWRgLCB0aGlzLmZvcm0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9tYWNoaW5lL2ZpbGVzJywgZmQpLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL21hY2hpbmVzJykuY2F0Y2goKCkgPT4geyB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UoZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBvc3QoJ2FwaS9tYWNoaW5lJylcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5pZCA9IGRhdGEuZGF0YS5kYXRhLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL21hY2hpbmVzJykuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UoZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgIH0sXG5cbiAgICAgICBncmFuZF9wZXJtaXNzaW9uKCkge1xuICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XG4gICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnNldHRpbmdfcGVybWlzc2lvbnJlZlxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYXhpb3MucG9zdCgnYXBpL3VzZXIvZ3JhbmRfcGVybWlzc2lvbicsIHtcbiAgICAgICAgICAgICB1c2VyOiB0aGlzLmZvcm0uaWQsXG4gICAgICAgICAgICAgcGVybWlzc2lvbnM6IHRoaXMuYXNzaWduZWRfaWRzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKClcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xuICAgICAgICAgICAgIH0pXG4gICAgICAgfSxcblxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICBpZiAodGhpcy4kcm91dGUucGFyYW1zLmlkKSB7XG4gICAgICAgICAgdGhpcy5mb3JtLmlkID0gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xuICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XG4gICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX3VzZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvbWFjaGluZS9cIiArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZClcbiAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWNoaW5lZCA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZmlsbChyZXMuZGF0YS5kYXRhKVxuICAgICAgICAgICAgICAgIGxldCBkYXRlX3RpbWVfbWFjaGluZV9pYyA9IHJlcy5kYXRhLmRhdGEuZGF0ZV90aW1lX21hY2hpbmVfaWNcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZGF0ZV90aW1lX21hY2hpbmVfaWMgPSBuZXcgRGF0ZShkYXRlX3RpbWVfbWFjaGluZV9pYykudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5sYXN0X21haW50ZW5hbmNlX2RhdGUgPSBuZXcgRGF0ZSh0aGlzLmZvcm0ubGFzdF9tYWludGVuYW5jZV9kYXRlKS50b0lTT1N0cmluZygpXG5cbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL21hY2hpbmVzLycpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgICAgICAgfSlcblxuICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7IH0sXG4gICAgd2F0Y2g6IHtcblxuICAgICAgIGFzeW5jICdmb3JtLmNhdGVnb3J5X2lkJyhuLCBvKSB7XG4gICAgICAgICAgaWYgKG8pXG4gICAgICAgICAgICAgdGhpcy5mb3JtLnN1Yl9jYXRlZ29yeV9pZCA9ICcnXG4gICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvY2F0ZWdvcnkvXCIgKyBuKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yl9jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICB9LFxuICAgICAgIGFzeW5jICdmb3JtLm1hY2hpbmVfY29tcGFuaWVzX2lkJyhuLCBvKSB7XG4gICAgICAgICAgaWYgKG8pXG4gICAgICAgICAgICAgdGhpcy5mb3JtLm1hY2hpbmVfbW9kZWxzX2lkID0gJydcbiAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9tb2RlbC9cIiArIG4pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWxzID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICB9LFxuICAgIH1cbiB9XG4gPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ob3Jpem9udGFsXCIsXG4gICAgICAgIGF0dHJzOiB7IGVuY3R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdF9tYWNoaW5lKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmZvcm0uaWQgPyBcIlVwZGF0ZVwiIDogXCJBZGRcIikgKyBcIiBNYWNoaW5lXCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiU2VsZWN0IEFUTSBJRCAqXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXCJjYXRlZ29yeV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBDYXRlZ29yeSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jYXRlZ29yeV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiY2F0ZWdvcnlfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jYXRlZ29yeV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY2F0ZWdvcnlfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52ZXJyb3JzLmZpcnN0KFwiY2F0ZWdvcnlfaWRcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQ2FsbCBUeXBlICpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcImNhdGVnb3J5X2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIENhdGVnb3J5IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNhdGVnb3J5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJjYXRlZ29yeV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNhdGVnb3J5X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjYXRlZ29yeV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJjYXRlZ29yeV9pZFwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJGYXVsdCBUeXBlICpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcImNhdGVnb3J5X2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIENhdGVnb3J5IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNhdGVnb3J5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJjYXRlZ29yeV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNhdGVnb3J5X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjYXRlZ29yeV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJjYXRlZ29yeV9pZFwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJGYXVsdCBEZXNjcmlwdGlvbiAqXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZWduX25vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJlZ25fbm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXCJyZWduX25vXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZWduX25vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiUmVnbi4gTm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucmVnbl9ubyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJlZ25fbm9cIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcInJlZ25fbm9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJyZWduX25vXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJiclwiKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTIgdGV4dC1yaWdodFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSxcbiAgICAgICAgW192bS5fdihcIlN1Ym1pdFwiKV1cbiAgICAgIClcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtZDY5MzVmNTBcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbXBsYWludEFkZEVkaXQudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db21wbGFpbnRBZGRFZGl0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1kNjkzNWY1MFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db21wbGFpbnRBZGRFZGl0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcQ29tcGxhaW50QWRkRWRpdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZDY5MzVmNTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1kNjkzNWY1MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9