(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Reading/AddEditReadingData.vue":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Reading/AddEditReadingData.vue ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_month_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-month-picker */ "./node_modules/vue-month-picker/src/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SiteWiseExpenses",
  components: {
    MonthPicker: vue_month_picker__WEBPACK_IMPORTED_MODULE_0__["MonthPicker"],
    MonthPickerInput: vue_month_picker__WEBPACK_IMPORTED_MODULE_0__["MonthPickerInput"]
  },
  data() {
    return {
      form: new Form({
        site_id: '',
        read_at: '',
        reading: []
      }),
      read_at: "",
      pmModalData: "",
      created_users: [],
      search_machines: [],
      search_sites: [],
      search_tickets: [],
      search: {
        read_at: "",
        site_id: ""
      },
      categories: [],
      sub_categories: [],
      sites: [],
      selected_machine: "",
      users: [],
      machines: [],
      Tickets: {},
      clearEmittedText: '',
      default_month: '',
      json_meta: [[{
        key: "charset",
        value: "utf-8"
      }]]
    };
  },
  methods: {
    calculateTotalHourmeter(ticket) {
      return ticket.closing_hourmeter - ticket.starting_hourmeter;
    },
    calculateTotalKm(ticket) {
      return ticket.closing_km - ticket.starting_km;
    },
    showClearText() {
      this.clearEmittedText = 'emitted';
      this.default_month = '';
      window.setTimeout(() => {
        this.clearEmittedText = null;
      }, 1000);
    },
    UpdateValues(e) {
      this.search.tat_from = e.minValue;
      this.search.tat_to = e.maxValue;
    },
    finishDownload() {
      Swal.close();
    },
    getLabel(val) {
      if (typeof val === "object") {
        return val.far_no + " - " + val.name;
      } else {
        return val;
      }
    },
    getResults(page = 1) {
      if (this.form.read_at == "") {
        Swal.fire("Search Date is required");
      } else if (this.form.site_id == "") {
        Swal.fire("Site ID is required");
      } else {
        let cloaderd = this.$loading.show();
        axios.post("/api/machine_data_reading_report", this.form).then(res => {
          if (res.data.data == "data_available") {
            Swal.fire("Reading already available for the selected date and Site ID.");
          } else {
            // this.form.reading = res.data.data

            res.data.data.forEach(readingDataItem => {
              this.form.reading.push({
                id: readingDataItem.id,
                machine_running_status: readingDataItem.condition_of_machine,
                site_name: readingDataItem.current_site.site_name,
                name: readingDataItem.name,
                far_no: readingDataItem.far_no,
                machine_model_name: readingDataItem.machine_model.name,
                regn_no: readingDataItem.regn_no,
                machine_sr_no: readingDataItem.machine_sr_no,
                engine_no: readingDataItem.engine_no,
                chassis_no: readingDataItem.chassis_no,
                is_consumtion_hr_run: readingDataItem.is_consumtion_hr,
                is_consumtion_km_run: readingDataItem.is_consumtion_km_run,
                is_production_fig: readingDataItem.is_production_fig,
                condition_of_machine: readingDataItem.condition_of_machine,
                last_km_run: readingDataItem.last_maintenances != null && readingDataItem.last_maintenances.km_run != null ? readingDataItem.last_maintenances.km_run : 0,
                last_run_hour: readingDataItem.last_maintenances != null && readingDataItem.last_maintenances.run_hour != null ? readingDataItem.last_maintenances.run_hour : 0
              });
            });
          }
          cloaderd.hide();
        }).catch(err => {
          cloaderd.hide();
          console.error(err);
        });
      }
    },
    submit_data() {
      this.$validator.validateAll().then(async valid => {
        if (valid) {
          let cloaderd = this.$loading.show();
          if (this.$route.params.id) {
            this.form.put("api/reading/" + this.$route.params.id).then(response => {
              if (response.data.success == true) {
                Toast.fire({
                  icon: 'success',
                  title: 'Data updated successfully'
                });
                cloaderd.hide();
                this.$router.push('/reading-data').catch(() => {});
              } else {
                Toast.fire({
                  icon: 'warning',
                  title: 'Data could not get updated'
                });
              }
            });
          } else {
            this.form.post("api/reading").then(response => {
              console.log('vendor', response);
              if (response.data.success == true) {
                Toast.fire({
                  icon: 'success',
                  title: 'Data inserted successfully'
                });
                cloaderd.hide();
                this.$router.push('/reading-data').catch(() => {});
              } else {
                Toast.fire({
                  icon: 'warning',
                  title: 'Data could not get inserted'
                });
              }
            });
          }
        } else {
          Toast.fire({
            icon: 'warning',
            title: "Please check the validation"
          });
        }
      });
    }
  },
  mounted() {
    if (this.$route.params.id) {
      console.log(this.$route.params.id);
      this.form.id = this.$route.params.id;
      let cloaderd = this.$loading.show();
      axios.get("api/reading/" + this.$route.params.id).then(res => {
        //    this.form.fill(res.data.data)
        this.form.site_id = res.data.data.site_id;
        this.form.read_at = res.data.data.read_at;

        // Clear existing reading data
        this.form.reading = [];
        // Loop through each reading data item and push it to the form.reading array
        res.data.data.reading_data.forEach(readingDataItem => {
          this.form.reading.push({
            id: readingDataItem.machine_id,
            starting_hourmeter: readingDataItem.starting_hourmeter,
            closing_hourmeter: readingDataItem.closing_hourmeter,
            starting_km: readingDataItem.starting_km,
            closing_km: readingDataItem.closing_km,
            daily_running_hour: readingDataItem.daily_running_hour,
            diesel_issued: readingDataItem.diesel_issued,
            machine_running_status: readingDataItem.machine_running_status,
            site_name: readingDataItem.machine.current_site.site_name,
            name: readingDataItem.machine.name,
            far_no: readingDataItem.machine.far_no,
            machine_model_name: readingDataItem.machine.far_no,
            regn_no: readingDataItem.machine.regn_no,
            machine_sr_no: readingDataItem.machine.machine_sr_no,
            engine_no: readingDataItem.machine.engine_no,
            chassis_no: readingDataItem.machine.chassis_no,
            is_consumtion_hr_run: readingDataItem.machine.is_consumtion_hr,
            is_consumtion_km_run: readingDataItem.machine.is_consumtion_km_run,
            is_production_fig: readingDataItem.machine.is_production_fig,
            condition_of_machine: readingDataItem.machine.condition_of_machine,
            last_km_run: readingDataItem.last_maintenances.km_run,
            last_run_hour: readingDataItem.last_maintenances.run_hour
          });
        });
        cloaderd.hide();
      }).catch(() => {
        cloaderd.hide();
        this.$router.push('/reading-data/').catch(() => {});
      });
    }
  },
  created() {
    //  this.getResults();
  },
  beforeCreate() {
    let cloaderd = this.$loading.show();
    Promise.all([axios.get("api/get_pre_machine"), axios.get("/api/initial_ticket")]).then(([res1, res2]) => {
      // Handle the response of the first API call
      this.categories = res1.data.data.Category;
      this.sites = res1.data.data.sites;

      // Handle the response of the second API call
      this.users = res2.data.data.vendors;
      this.machines = res2.data.data.machines;
      this.search_machines = res2.data.data.machines;
      this.search_sites = res2.data.data.sites;
      this.created_users = res2.data.data.created_users;
      cloaderd.hide();
    }).catch(() => console.warn("Oh. Something went wrong"));
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-406e7c33\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Reading/AddEditReadingData.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-406e7c33","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Reading/AddEditReadingData.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "card" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card-body p-2" }, [
              _c(
                "form",
                {
                  attrs: { autocomplete: "off" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.getResults()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col col-2" }, [
                      _c("label", [_vm._v("Select Date")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.read_at,
                            expression: "form.read_at"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "date",
                          readonly: this.$route.params.id
                        },
                        domProps: { value: _vm.form.read_at },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "read_at", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col col-2" },
                      [
                        _c("label", [_vm._v("Select Site")]),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            label: "site_name",
                            reduce: function(option) {
                              return option.id
                            },
                            options: _vm.search_sites,
                            placeholder: "Select Site...",
                            name: "site_id",
                            disabled: this.$route.params.id
                          },
                          model: {
                            value: _vm.form.site_id,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "site_id", $$v)
                            },
                            expression: "form.site_id"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col mt-4-5" }, [
                      !this.$route.params.id
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "submit" }
                            },
                            [
                              _vm._v(
                                "\n                                        Search\n                                    "
                              )
                            ]
                          )
                        : _vm._e()
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body table-responsive p-0 ticketTable" },
              [
                _vm.Tickets
                  ? _c(
                      "table",
                      { staticClass: "table table-hover table-striped" },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.form.reading, function(ticket, index) {
                            return _c("tr", { key: index }, [
                              _c("td", [_vm._v(_vm._s(ticket.site_name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(ticket.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(ticket.far_no))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(ticket.machine_model_name))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(ticket.regn_no))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(ticket.machine_sr_no))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(ticket.engine_no))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(ticket.chassis_no))]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: ticket.starting_hourmeter,
                                      expression: "ticket.starting_hourmeter"
                                    },
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: {
                                        min_value: ticket.last_run_hour
                                      },
                                      expression:
                                        "{ min_value: ticket.last_run_hour }"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.verrors.has(
                                      "starting_hourmeter_" + index
                                    )
                                  },
                                  attrs: {
                                    type: "number",
                                    readonly: ticket.is_consumtion_hr_run == 0,
                                    name: "starting_hourmeter_" + index,
                                    "data-vv-as": "Starting hourmeter",
                                    min: ticket.last_run_hour
                                  },
                                  domProps: {
                                    value: ticket.starting_hourmeter
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        ticket,
                                        "starting_hourmeter",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.verrors.has("starting_hourmeter_" + index)
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "help-block invalid-feedback"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.verrors.first(
                                                "starting_hourmeter_" + index
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: ticket.closing_hourmeter,
                                      expression: "ticket.closing_hourmeter"
                                    },
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: {
                                        required:
                                          "starting_hourmeter_" + index !==
                                            null &&
                                          "starting_hourmeter_" + index !== "",
                                        min_value: ticket.starting_hourmeter
                                      },
                                      expression:
                                        "{ required: 'starting_hourmeter_' + index !== null && 'starting_hourmeter_' + index !== '', min_value: ticket.starting_hourmeter }"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.verrors.has(
                                      "closing_hourmeter_" + index
                                    )
                                  },
                                  attrs: {
                                    type: "number",
                                    readonly: ticket.is_consumtion_hr_run == 0,
                                    name: "closing_hourmeter_" + index,
                                    "data-vv-as": "Closing hourmeter"
                                  },
                                  domProps: { value: ticket.closing_hourmeter },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        ticket,
                                        "closing_hourmeter",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.verrors.has("closing_hourmeter_" + index)
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "help-block invalid-feedback"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.verrors.first(
                                                "closing_hourmeter_" + index
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: { type: "number", readonly: "" },
                                  domProps: {
                                    value: _vm.calculateTotalHourmeter(ticket)
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: ticket.starting_km,
                                      expression: "ticket.starting_km"
                                    },
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: { min_value: ticket.last_km_run },
                                      expression:
                                        "{ min_value: ticket.last_km_run }"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.verrors.has(
                                      "starting_km_" + index
                                    )
                                  },
                                  attrs: {
                                    type: "number",
                                    readonly: ticket.is_consumtion_km_run == 0,
                                    name: "starting_km_" + index,
                                    "data-vv-as": "Starting KM",
                                    min: ticket.last_km_run
                                  },
                                  domProps: { value: ticket.starting_km },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        ticket,
                                        "starting_km",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.verrors.has("starting_km_" + index)
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "help-block invalid-feedback"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.verrors.first(
                                                "starting_km_" + index
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: ticket.closing_km,
                                      expression: "ticket.closing_km"
                                    },
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "min_value:" + ticket.starting_km,
                                      expression:
                                        "'min_value:' + ticket.starting_km"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.verrors.has(
                                      "closing_KM_" + index
                                    )
                                  },
                                  attrs: {
                                    type: "number",
                                    readonly: ticket.is_consumtion_km_run == 0,
                                    name: "closing_KM_" + index,
                                    "data-vv-as": "Closing KM"
                                  },
                                  domProps: { value: ticket.closing_km },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        ticket,
                                        "closing_km",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.verrors.has("closing_KM_" + index)
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "help-block invalid-feedback"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.verrors.first(
                                                "closing_KM_" + index
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: { type: "number", readonly: "" },
                                  domProps: {
                                    value: _vm.calculateTotalKm(ticket)
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: ticket.diesel_issued,
                                      expression: "ticket.diesel_issued"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "number" },
                                  domProps: { value: ticket.diesel_issued },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        ticket,
                                        "diesel_issued",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: ticket.condition_of_machine,
                                      expression: "ticket.condition_of_machine"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", readonly: "" },
                                  domProps: {
                                    value: ticket.condition_of_machine
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        ticket,
                                        "condition_of_machine",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ])
                          }),
                          0
                        )
                      ]
                    )
                  : _vm._e()
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 pt-2 pb-2" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-success float-right",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.submit_data()
                }
              }
            },
            [_vm._v("Submit")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Data Reading Input")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Current Site")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("FAR No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Model")]),
        _vm._v(" "),
        _c("th", [_vm._v("Regn No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine Sr No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Engine No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Chassis No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Starting Hourmeter")]),
        _vm._v(" "),
        _c("th", [_vm._v("Closing Hourmeter")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Hourmeter")]),
        _vm._v(" "),
        _c("th", [_vm._v("Starting KM")]),
        _vm._v(" "),
        _c("th", [_vm._v("Closing KM")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Km Run")]),
        _vm._v(" "),
        _c("th", [_vm._v("Diesel Issued (Ltrs)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine running status")])
      ])
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./resources/js/components/Reading/AddEditReadingData.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Reading/AddEditReadingData.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddEditReadingData_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./AddEditReadingData.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Reading/AddEditReadingData.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_406e7c33_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddEditReadingData_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-406e7c33","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./AddEditReadingData.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-406e7c33\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Reading/AddEditReadingData.vue");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddEditReadingData_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_406e7c33_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddEditReadingData_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_406e7c33_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddEditReadingData_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\Reading\\AddEditReadingData.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVhZGluZy9BZGRFZGl0UmVhZGluZ0RhdGEudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlYWRpbmcvQWRkRWRpdFJlYWRpbmdEYXRhLnZ1ZT8wOTNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlYWRpbmcvQWRkRWRpdFJlYWRpbmdEYXRhLnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwiY29tcG9uZW50cyIsIk1vbnRoUGlja2VyIiwiTW9udGhQaWNrZXJJbnB1dCIsImRhdGEiLCJmb3JtIiwic2l0ZV9pZCIsInJlYWRfYXQiLCJyZWFkaW5nIiwicG1Nb2RhbERhdGEiLCJjcmVhdGVkX3VzZXJzIiwic2VhcmNoX21hY2hpbmVzIiwic2VhcmNoX3NpdGVzIiwic2VhcmNoX3RpY2tldHMiLCJzZWFyY2giLCJjYXRlZ29yaWVzIiwic3ViX2NhdGVnb3JpZXMiLCJzaXRlcyIsInNlbGVjdGVkX21hY2hpbmUiLCJ1c2VycyIsIm1hY2hpbmVzIiwiVGlja2V0cyIsImNsZWFyRW1pdHRlZFRleHQiLCJkZWZhdWx0X21vbnRoIiwianNvbl9tZXRhIiwia2V5IiwidmFsdWUiLCJtZXRob2RzIiwiY2FsY3VsYXRlVG90YWxIb3VybWV0ZXIiLCJjYWxjdWxhdGVUb3RhbEttIiwic2hvd0NsZWFyVGV4dCIsIndpbmRvdyIsIlVwZGF0ZVZhbHVlcyIsImZpbmlzaERvd25sb2FkIiwiU3dhbCIsImdldExhYmVsIiwiZ2V0UmVzdWx0cyIsImF4aW9zIiwidGhlbiIsInJlcyIsImlkIiwibWFjaGluZV9ydW5uaW5nX3N0YXR1cyIsInNpdGVfbmFtZSIsImZhcl9ubyIsIm1hY2hpbmVfbW9kZWxfbmFtZSIsInJlZ25fbm8iLCJtYWNoaW5lX3NyX25vIiwiZW5naW5lX25vIiwiY2hhc3Npc19ubyIsImlzX2NvbnN1bXRpb25faHJfcnVuIiwiaXNfY29uc3VtdGlvbl9rbV9ydW4iLCJpc19wcm9kdWN0aW9uX2ZpZyIsImNvbmRpdGlvbl9vZl9tYWNoaW5lIiwibGFzdF9rbV9ydW4iLCJsYXN0X3J1bl9ob3VyIiwiY2xvYWRlcmQiLCJjYXRjaCIsImNvbnNvbGUiLCJzdWJtaXRfZGF0YSIsIlRvYXN0IiwiaWNvbiIsInRpdGxlIiwibW91bnRlZCIsInN0YXJ0aW5nX2hvdXJtZXRlciIsImNsb3NpbmdfaG91cm1ldGVyIiwic3RhcnRpbmdfa20iLCJjbG9zaW5nX2ttIiwiZGFpbHlfcnVubmluZ19ob3VyIiwiZGllc2VsX2lzc3VlZCIsImNyZWF0ZWQiLCJiZWZvcmVDcmVhdGUiLCJQcm9taXNlIiwid2F0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0pBO0FBQ0E7QUFFZTtFQUNmQTtFQUNBQztJQUNBQztJQUNBQztFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBRDtNQUNBRTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztRQUNBUDtRQUNBRDtNQUNBO01BQ0FTO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDLFlBQ0EsQ0FDQTtRQUNBQztRQUNBQztNQUNBLEVBQ0E7SUFFQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0FDO0lBQ0E7SUFFQUM7TUFDQTtRQUNBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFFQTtRQUNBRjtN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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ2xDLElBQUksS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQy9qQmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUM0SDtBQUNhO0FBQ3pJO0FBQzJWO0FBQzNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0c7QUFDdEcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLHFJQUFjO0FBQ2hCLEVBQUUsNk9BQWM7QUFDaEIsRUFBRSxzUEFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvMy5idW5kbGUuZGRkYjBkNjdmODBhZjIyMmY5NjguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+RGF0YSBSZWFkaW5nIElucHV0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b29sc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVwib2ZmXCIgQHN1Ym1pdC5wcmV2ZW50PVwiZ2V0UmVzdWx0cygpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWxlY3QgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdi1tb2RlbD1cImZvcm0ucmVhZF9hdFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwidGhpcy4kcm91dGUucGFyYW1zLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VsZWN0IFNpdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNlYXJjaF9zaXRlc1wiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFNpdGUuLi5cIiB2LW1vZGVsPVwiZm9ybS5zaXRlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNpdGVfaWRcIiA6ZGlzYWJsZWQ9XCJ0aGlzLiRyb3V0ZS5wYXJhbXMuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCAgbXQtNC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB2LWlmPVwiIXRoaXMuJHJvdXRlLnBhcmFtcy5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtaGVhZGVyIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMCB0aWNrZXRUYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLXN0cmlwZWRcIiB2LWlmPVwiVGlja2V0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkN1cnJlbnQgU2l0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GQVIgTm88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb2RlbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlZ24gTm88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYWNoaW5lIFNyIE5vPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RW5naW5lIE5vPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2hhc3NpcyBObzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXJ0aW5nIEhvdXJtZXRlcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNsb3NpbmcgSG91cm1ldGVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgSG91cm1ldGVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhcnRpbmcgS008L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DbG9zaW5nIEtNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgS20gUnVuPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGllc2VsIElzc3VlZCAoTHRycyk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYWNoaW5lIHJ1bm5pbmcgc3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIih0aWNrZXQsIGluZGV4KSAgaW4gZm9ybS5yZWFkaW5nXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5zaXRlX25hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5mYXJfbm8gfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubWFjaGluZV9tb2RlbF9uYW1lIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnJlZ25fbm8gfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubWFjaGluZV9zcl9ubyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5lbmdpbmVfbm8gfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuY2hhc3Npc19ubyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwidGlja2V0LnN0YXJ0aW5nX2hvdXJtZXRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpyZWFkb25seT1cInRpY2tldC5pc19jb25zdW10aW9uX2hyX3J1biA9PSAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiJ3N0YXJ0aW5nX2hvdXJtZXRlcl8nICsgaW5kZXhcIiBkYXRhLXZ2LWFzPVwiU3RhcnRpbmcgaG91cm1ldGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptaW49XCJ0aWNrZXQubGFzdF9ydW5faG91clwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdzdGFydGluZ19ob3VybWV0ZXJfJyArIGluZGV4KSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCJ7IG1pbl92YWx1ZTogdGlja2V0Lmxhc3RfcnVuX2hvdXIgfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdzdGFydGluZ19ob3VybWV0ZXJfJyArIGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdCgnc3RhcnRpbmdfaG91cm1ldGVyXycgKyBpbmRleCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJ0aWNrZXQuY2xvc2luZ19ob3VybWV0ZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwidGlja2V0LmlzX2NvbnN1bXRpb25faHJfcnVuID09IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cInsgcmVxdWlyZWQ6ICdzdGFydGluZ19ob3VybWV0ZXJfJyArIGluZGV4ICE9PSBudWxsICYmICdzdGFydGluZ19ob3VybWV0ZXJfJyArIGluZGV4ICE9PSAnJywgbWluX3ZhbHVlOiB0aWNrZXQuc3RhcnRpbmdfaG91cm1ldGVyIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCInY2xvc2luZ19ob3VybWV0ZXJfJyArIGluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnY2xvc2luZ19ob3VybWV0ZXJfJyArIGluZGV4KSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtYXM9XCJDbG9zaW5nIGhvdXJtZXRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Nsb3NpbmdfaG91cm1ldGVyXycgKyBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoJ2Nsb3NpbmdfaG91cm1ldGVyXycgKyBpbmRleCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgOnZhbHVlPVwiY2FsY3VsYXRlVG90YWxIb3VybWV0ZXIodGlja2V0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJlYWRvbmx5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJ0aWNrZXQuc3RhcnRpbmdfa21cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJ0aWNrZXQuaXNfY29uc3VtdGlvbl9rbV9ydW4gPT0gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cIidzdGFydGluZ19rbV8nICsgaW5kZXhcIiBkYXRhLXZ2LWFzPVwiU3RhcnRpbmcgS01cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1pbj1cInRpY2tldC5sYXN0X2ttX3J1blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ3N0YXJ0aW5nX2ttXycgKyBpbmRleCkgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwieyBtaW5fdmFsdWU6IHRpY2tldC5sYXN0X2ttX3J1biB9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ3N0YXJ0aW5nX2ttXycgKyBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoJ3N0YXJ0aW5nX2ttXycgKyBpbmRleCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJ0aWNrZXQuY2xvc2luZ19rbVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZWFkb25seT1cInRpY2tldC5pc19jb25zdW10aW9uX2ttX3J1biA9PSAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCInbWluX3ZhbHVlOicgKyB0aWNrZXQuc3RhcnRpbmdfa21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCInY2xvc2luZ19LTV8nICsgaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zaW5nX0tNXycgKyBpbmRleCkgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVwiQ2xvc2luZyBLTVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2luZ19LTV8nICsgaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KCdjbG9zaW5nX0tNXycgKyBpbmRleCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgOnZhbHVlPVwiY2FsY3VsYXRlVG90YWxLbSh0aWNrZXQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVhZG9ubHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwidGlja2V0LmRhaWx5X3J1bm5pbmdfaG91clwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpyZWFkb25seT1cInRpY2tldC5pc19wcm9kdWN0aW9uX2ZpZyA9PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJ0aWNrZXQuZGllc2VsX2lzc3VlZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInRpY2tldC5jb25kaXRpb25fb2ZfbWFjaGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJlYWRvbmx5PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkIC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcHQtMiBwYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IFwiIEBjbGljaz1cInN1Ym1pdF9kYXRhKClcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgTW9udGhQaWNrZXIgfSBmcm9tICd2dWUtbW9udGgtcGlja2VyJ1xuaW1wb3J0IHsgTW9udGhQaWNrZXJJbnB1dCB9IGZyb20gJ3Z1ZS1tb250aC1waWNrZXInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIlNpdGVXaXNlRXhwZW5zZXNcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE1vbnRoUGlja2VyLFxuICAgICAgICBNb250aFBpY2tlcklucHV0XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIHJlYWRfYXQ6ICcnLFxuICAgICAgICAgICAgICAgIHJlYWRpbmc6IFtdXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJlYWRfYXQ6IFwiXCIsXG4gICAgICAgICAgICBwbU1vZGFsRGF0YTogXCJcIixcbiAgICAgICAgICAgIGNyZWF0ZWRfdXNlcnM6IFtdLFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaF9zaXRlczogW10sXG4gICAgICAgICAgICBzZWFyY2hfdGlja2V0czogW10sXG4gICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICByZWFkX2F0OiBcIlwiLFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6IFwiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICBzaXRlczogW10sXG4gICAgICAgICAgICBzZWxlY3RlZF9tYWNoaW5lOiBcIlwiLFxuICAgICAgICAgICAgdXNlcnM6IFtdLFxuICAgICAgICAgICAgbWFjaGluZXM6IFtdLFxuICAgICAgICAgICAgVGlja2V0czoge30sXG4gICAgICAgICAgICBjbGVhckVtaXR0ZWRUZXh0OiAnJyxcbiAgICAgICAgICAgIGRlZmF1bHRfbW9udGg6ICcnLFxuICAgICAgICAgICAganNvbl9tZXRhOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2hhcnNldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwidXRmLThcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2FsY3VsYXRlVG90YWxIb3VybWV0ZXIodGlja2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGlja2V0LmNsb3NpbmdfaG91cm1ldGVyIC0gdGlja2V0LnN0YXJ0aW5nX2hvdXJtZXRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgY2FsY3VsYXRlVG90YWxLbSh0aWNrZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aWNrZXQuY2xvc2luZ19rbSAtIHRpY2tldC5zdGFydGluZ19rbTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0NsZWFyVGV4dCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJFbWl0dGVkVGV4dCA9ICdlbWl0dGVkJ1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0X21vbnRoID0gJydcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRW1pdHRlZFRleHQgPSBudWxsXG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9LFxuICAgICAgICBVcGRhdGVWYWx1ZXMoZSkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X2Zyb20gPSBlLm1pblZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X3RvID0gZS5tYXhWYWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBmaW5pc2hEb3dubG9hZCgpIHtcbiAgICAgICAgICAgIFN3YWwuY2xvc2UoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRMYWJlbCh2YWwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5mYXJfbm8gKyBcIiAtIFwiICsgdmFsLm5hbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldFJlc3VsdHMocGFnZSA9IDEpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5yZWFkX2F0ID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXCJTZWFyY2ggRGF0ZSBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLnNpdGVfaWQgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcIlNpdGUgSUQgaXMgcmVxdWlyZWRcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdChcIi9hcGkvbWFjaGluZV9kYXRhX3JlYWRpbmdfcmVwb3J0XCIsIHRoaXMuZm9ybSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5kYXRhID09IFwiZGF0YV9hdmFpbGFibGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcIlJlYWRpbmcgYWxyZWFkeSBhdmFpbGFibGUgZm9yIHRoZSBzZWxlY3RlZCBkYXRlIGFuZCBTaXRlIElELlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5mb3JtLnJlYWRpbmcgPSByZXMuZGF0YS5kYXRhXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZGF0YS5kYXRhLmZvckVhY2goKHJlYWRpbmdEYXRhSXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVhZGluZy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWFkaW5nRGF0YUl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWNoaW5lX3J1bm5pbmdfc3RhdHVzOiByZWFkaW5nRGF0YUl0ZW0uY29uZGl0aW9uX29mX21hY2hpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlX25hbWU6IHJlYWRpbmdEYXRhSXRlbS5jdXJyZW50X3NpdGUuc2l0ZV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVhZGluZ0RhdGFJdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXJfbm86IHJlYWRpbmdEYXRhSXRlbS5mYXJfbm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWNoaW5lX21vZGVsX25hbWU6IHJlYWRpbmdEYXRhSXRlbS5tYWNoaW5lX21vZGVsLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWduX25vOiByZWFkaW5nRGF0YUl0ZW0ucmVnbl9ubyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hY2hpbmVfc3Jfbm86IHJlYWRpbmdEYXRhSXRlbS5tYWNoaW5lX3NyX25vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lX25vOiByZWFkaW5nRGF0YUl0ZW0uZW5naW5lX25vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhc3Npc19ubzogcmVhZGluZ0RhdGFJdGVtLmNoYXNzaXNfbm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19jb25zdW10aW9uX2hyX3J1bjogcmVhZGluZ0RhdGFJdGVtLmlzX2NvbnN1bXRpb25faHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19jb25zdW10aW9uX2ttX3J1bjogcmVhZGluZ0RhdGFJdGVtLmlzX2NvbnN1bXRpb25fa21fcnVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfcHJvZHVjdGlvbl9maWc6IHJlYWRpbmdEYXRhSXRlbS5pc19wcm9kdWN0aW9uX2ZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbl9vZl9tYWNoaW5lOiByZWFkaW5nRGF0YUl0ZW0uY29uZGl0aW9uX29mX21hY2hpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2ttX3J1bjogcmVhZGluZ0RhdGFJdGVtLmxhc3RfbWFpbnRlbmFuY2VzICE9IG51bGwgJiYgcmVhZGluZ0RhdGFJdGVtLmxhc3RfbWFpbnRlbmFuY2VzLmttX3J1biAhPSBudWxsPyByZWFkaW5nRGF0YUl0ZW0ubGFzdF9tYWludGVuYW5jZXMua21fcnVuIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfcnVuX2hvdXI6IHJlYWRpbmdEYXRhSXRlbS5sYXN0X21haW50ZW5hbmNlcyAhPSBudWxsICYmIHJlYWRpbmdEYXRhSXRlbS5sYXN0X21haW50ZW5hbmNlcy5ydW5faG91ciAhPSBudWxsPyByZWFkaW5nRGF0YUl0ZW0ubGFzdF9tYWludGVuYW5jZXMucnVuX2hvdXIgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1pdF9kYXRhKCkge1xuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbihhc3luYyAodmFsaWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wdXQoXCJhcGkvcmVhZGluZy9cIiArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGF0YSB1cGRhdGVkIHN1Y2Nlc3NmdWxseSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9yZWFkaW5nLWRhdGEnKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEYXRhIGNvdWxkIG5vdCBnZXQgdXBkYXRlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucG9zdChcImFwaS9yZWFkaW5nXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZlbmRvcicsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGF0YSBpbnNlcnRlZCBzdWNjZXNzZnVsbHknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvcmVhZGluZy1kYXRhJykuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGF0YSBjb3VsZCBub3QgZ2V0IGluc2VydGVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJQbGVhc2UgY2hlY2sgdGhlIHZhbGlkYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCk7XG4gICAgICAgICAgICB0aGlzLmZvcm0uaWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XG4gICAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coKTtcbiAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9yZWFkaW5nL1wiICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIHRoaXMuZm9ybS5maWxsKHJlcy5kYXRhLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zaXRlX2lkID0gcmVzLmRhdGEuZGF0YS5zaXRlX2lkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVhZF9hdCA9IHJlcy5kYXRhLmRhdGEucmVhZF9hdDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciBleGlzdGluZyByZWFkaW5nIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlYWRpbmcgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggcmVhZGluZyBkYXRhIGl0ZW0gYW5kIHB1c2ggaXQgdG8gdGhlIGZvcm0ucmVhZGluZyBhcnJheVxuICAgICAgICAgICAgICAgICAgICByZXMuZGF0YS5kYXRhLnJlYWRpbmdfZGF0YS5mb3JFYWNoKChyZWFkaW5nRGF0YUl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZWFkaW5nLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWFkaW5nRGF0YUl0ZW0ubWFjaGluZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydGluZ19ob3VybWV0ZXI6IHJlYWRpbmdEYXRhSXRlbS5zdGFydGluZ19ob3VybWV0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2luZ19ob3VybWV0ZXI6IHJlYWRpbmdEYXRhSXRlbS5jbG9zaW5nX2hvdXJtZXRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydGluZ19rbTogcmVhZGluZ0RhdGFJdGVtLnN0YXJ0aW5nX2ttLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Npbmdfa206IHJlYWRpbmdEYXRhSXRlbS5jbG9zaW5nX2ttLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhaWx5X3J1bm5pbmdfaG91cjogcmVhZGluZ0RhdGFJdGVtLmRhaWx5X3J1bm5pbmdfaG91cixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWVzZWxfaXNzdWVkOiByZWFkaW5nRGF0YUl0ZW0uZGllc2VsX2lzc3VlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWNoaW5lX3J1bm5pbmdfc3RhdHVzOiByZWFkaW5nRGF0YUl0ZW0ubWFjaGluZV9ydW5uaW5nX3N0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlX25hbWU6IHJlYWRpbmdEYXRhSXRlbS5tYWNoaW5lLmN1cnJlbnRfc2l0ZS5zaXRlX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVhZGluZ0RhdGFJdGVtLm1hY2hpbmUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXJfbm86IHJlYWRpbmdEYXRhSXRlbS5tYWNoaW5lLmZhcl9ubyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWNoaW5lX21vZGVsX25hbWU6IHJlYWRpbmdEYXRhSXRlbS5tYWNoaW5lLmZhcl9ubyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWduX25vOiByZWFkaW5nRGF0YUl0ZW0ubWFjaGluZS5yZWduX25vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hY2hpbmVfc3Jfbm86IHJlYWRpbmdEYXRhSXRlbS5tYWNoaW5lLm1hY2hpbmVfc3Jfbm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lX25vOiByZWFkaW5nRGF0YUl0ZW0ubWFjaGluZS5lbmdpbmVfbm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhc3Npc19ubzogcmVhZGluZ0RhdGFJdGVtLm1hY2hpbmUuY2hhc3Npc19ubyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19jb25zdW10aW9uX2hyX3J1bjogcmVhZGluZ0RhdGFJdGVtLm1hY2hpbmUuaXNfY29uc3VtdGlvbl9ocixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19jb25zdW10aW9uX2ttX3J1bjogcmVhZGluZ0RhdGFJdGVtLm1hY2hpbmUuaXNfY29uc3VtdGlvbl9rbV9ydW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfcHJvZHVjdGlvbl9maWc6IHJlYWRpbmdEYXRhSXRlbS5tYWNoaW5lLmlzX3Byb2R1Y3Rpb25fZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbl9vZl9tYWNoaW5lOiByZWFkaW5nRGF0YUl0ZW0ubWFjaGluZS5jb25kaXRpb25fb2ZfbWFjaGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2ttX3J1bjogcmVhZGluZ0RhdGFJdGVtLmxhc3RfbWFpbnRlbmFuY2VzLmttX3J1bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X3J1bl9ob3VyOiByZWFkaW5nRGF0YUl0ZW0ubGFzdF9tYWludGVuYW5jZXMucnVuX2hvdXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9yZWFkaW5nLWRhdGEvJykuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIC8vICB0aGlzLmdldFJlc3VsdHMoKTtcbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KCk7XG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9nZXRfcHJlX21hY2hpbmVcIiksXG4gICAgICAgICAgICBheGlvcy5nZXQoXCIvYXBpL2luaXRpYWxfdGlja2V0XCIpXG4gICAgICAgIF0pXG4gICAgICAgIC50aGVuKChbcmVzMSwgcmVzMl0pID0+IHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgcmVzcG9uc2Ugb2YgdGhlIGZpcnN0IEFQSSBjYWxsXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXMxLmRhdGEuZGF0YS5DYXRlZ29yeTtcbiAgICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMxLmRhdGEuZGF0YS5zaXRlcztcblxuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBvZiB0aGUgc2Vjb25kIEFQSSBjYWxsXG4gICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzMi5kYXRhLmRhdGEudmVuZG9ycztcbiAgICAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXMyLmRhdGEuZGF0YS5tYWNoaW5lcztcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzMi5kYXRhLmRhdGEubWFjaGluZXM7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlczIuZGF0YS5kYXRhLnNpdGVzO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVkX3VzZXJzID0gcmVzMi5kYXRhLmRhdGEuY3JlYXRlZF91c2VycztcbiAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybihcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1wiKSk7XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgIH0sXG5cblxufTtcblxuXG5cblxuXG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgcC0yXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBhdXRvY29tcGxldGU6IFwib2ZmXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldFJlc3VsdHMoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTZWxlY3QgRGF0ZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJlYWRfYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJlYWRfYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IHRoaXMuJHJvdXRlLnBhcmFtcy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5yZWFkX2F0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicmVhZF9hdFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlNlbGVjdCBTaXRlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2l0ZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zZWFyY2hfc2l0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IFNpdGUuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNpdGVfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy4kcm91dGUucGFyYW1zLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnNpdGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic2l0ZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2l0ZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIG10LTQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAhdGhpcy4kcm91dGUucGFyYW1zLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgdGFibGUtcmVzcG9uc2l2ZSBwLTAgdGlja2V0VGFibGVcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLlRpY2tldHNcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtc3RyaXBlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZm9ybS5yZWFkaW5nLCBmdW5jdGlvbih0aWNrZXQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0LnNpdGVfbmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQuZmFyX25vKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0aWNrZXQubWFjaGluZV9tb2RlbF9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0LnJlZ25fbm8pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0Lm1hY2hpbmVfc3Jfbm8pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0LmVuZ2luZV9ubykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQuY2hhc3Npc19ubykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRpY2tldC5zdGFydGluZ19ob3VybWV0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGlja2V0LnN0YXJ0aW5nX2hvdXJtZXRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbl92YWx1ZTogdGlja2V0Lmxhc3RfcnVuX2hvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInsgbWluX3ZhbHVlOiB0aWNrZXQubGFzdF9ydW5faG91ciB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXJ0aW5nX2hvdXJtZXRlcl9cIiArIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiB0aWNrZXQuaXNfY29uc3VtdGlvbl9ocl9ydW4gPT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3RhcnRpbmdfaG91cm1ldGVyX1wiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJTdGFydGluZyBob3VybWV0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogdGlja2V0Lmxhc3RfcnVuX2hvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGlja2V0LnN0YXJ0aW5nX2hvdXJtZXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRpbmdfaG91cm1ldGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwic3RhcnRpbmdfaG91cm1ldGVyX1wiICsgaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFydGluZ19ob3VybWV0ZXJfXCIgKyBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRpY2tldC5jbG9zaW5nX2hvdXJtZXRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0aWNrZXQuY2xvc2luZ19ob3VybWV0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRpbmdfaG91cm1ldGVyX1wiICsgaW5kZXggIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRpbmdfaG91cm1ldGVyX1wiICsgaW5kZXggIT09IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX3ZhbHVlOiB0aWNrZXQuc3RhcnRpbmdfaG91cm1ldGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ7IHJlcXVpcmVkOiAnc3RhcnRpbmdfaG91cm1ldGVyXycgKyBpbmRleCAhPT0gbnVsbCAmJiAnc3RhcnRpbmdfaG91cm1ldGVyXycgKyBpbmRleCAhPT0gJycsIG1pbl92YWx1ZTogdGlja2V0LnN0YXJ0aW5nX2hvdXJtZXRlciB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NpbmdfaG91cm1ldGVyX1wiICsgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IHRpY2tldC5pc19jb25zdW10aW9uX2hyX3J1biA9PSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjbG9zaW5nX2hvdXJtZXRlcl9cIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiQ2xvc2luZyBob3VybWV0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHRpY2tldC5jbG9zaW5nX2hvdXJtZXRlciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NpbmdfaG91cm1ldGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY2xvc2luZ19ob3VybWV0ZXJfXCIgKyBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NpbmdfaG91cm1ldGVyX1wiICsgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcIm51bWJlclwiLCByZWFkb25seTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNhbGN1bGF0ZVRvdGFsSG91cm1ldGVyKHRpY2tldClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGlja2V0LnN0YXJ0aW5nX2ttLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRpY2tldC5zdGFydGluZ19rbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeyBtaW5fdmFsdWU6IHRpY2tldC5sYXN0X2ttX3J1biB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieyBtaW5fdmFsdWU6IHRpY2tldC5sYXN0X2ttX3J1biB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXJ0aW5nX2ttX1wiICsgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IHRpY2tldC5pc19jb25zdW10aW9uX2ttX3J1biA9PSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzdGFydGluZ19rbV9cIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiU3RhcnRpbmcgS01cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogdGlja2V0Lmxhc3Rfa21fcnVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogdGlja2V0LnN0YXJ0aW5nX2ttIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRpbmdfa21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJzdGFydGluZ19rbV9cIiArIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRpbmdfa21fXCIgKyBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRpY2tldC5jbG9zaW5nX2ttLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRpY2tldC5jbG9zaW5nX2ttXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm1pbl92YWx1ZTpcIiArIHRpY2tldC5zdGFydGluZ19rbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIidtaW5fdmFsdWU6JyArIHRpY2tldC5zdGFydGluZ19rbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zaW5nX0tNX1wiICsgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IHRpY2tldC5pc19jb25zdW10aW9uX2ttX3J1biA9PSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjbG9zaW5nX0tNX1wiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJDbG9zaW5nIEtNXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiB0aWNrZXQuY2xvc2luZ19rbSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3Npbmdfa21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjbG9zaW5nX0tNX1wiICsgaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zaW5nX0tNX1wiICsgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcIm51bWJlclwiLCByZWFkb25seTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNhbGN1bGF0ZVRvdGFsS20odGlja2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aWNrZXQuZGllc2VsX2lzc3VlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0aWNrZXQuZGllc2VsX2lzc3VlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHRpY2tldC5kaWVzZWxfaXNzdWVkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGllc2VsX2lzc3VlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aWNrZXQuY29uZGl0aW9uX29mX21hY2hpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGlja2V0LmNvbmRpdGlvbl9vZl9tYWNoaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCByZWFkb25seTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGlja2V0LmNvbmRpdGlvbl9vZl9tYWNoaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb25fb2ZfbWFjaGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMiBwdC0yIHBiLTJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0X2RhdGEoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJTdWJtaXRcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW192bS5fdihcIkRhdGEgUmVhZGluZyBJbnB1dFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10b29sc1wiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3VycmVudCBTaXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRkFSIE5vXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1vZGVsXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJlZ24gTm9cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTWFjaGluZSBTciBOb1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJFbmdpbmUgTm9cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ2hhc3NpcyBOb1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTdGFydGluZyBIb3VybWV0ZXJcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ2xvc2luZyBIb3VybWV0ZXJcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVG90YWwgSG91cm1ldGVyXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlN0YXJ0aW5nIEtNXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkNsb3NpbmcgS01cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVG90YWwgS20gUnVuXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkRpZXNlbCBJc3N1ZWQgKEx0cnMpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1hY2hpbmUgcnVubmluZyBzdGF0dXNcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNDA2ZTdjMzNcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FkZEVkaXRSZWFkaW5nRGF0YS52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FkZEVkaXRSZWFkaW5nRGF0YS52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDA2ZTdjMzNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQWRkRWRpdFJlYWRpbmdEYXRhLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcUmVhZGluZ1xcXFxBZGRFZGl0UmVhZGluZ0RhdGEudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQwNmU3YzMzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDA2ZTdjMzNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==