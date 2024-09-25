(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Machine/index.vue":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Machine/index.vue ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var vue_gauge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-gauge */ "./node_modules/vue-gauge/index.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Machine",
  components: {
    VueGauge: vue_gauge__WEBPACK_IMPORTED_MODULE_0__["default"],
    MachinePop: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../MachineFarPop.vue */ "./resources/js/components/MachineFarPop.vue"))
  },
  data() {
    return {
      pop_machine: '',
      MachineSite: '',
      categories: [],
      sub_categories: [],
      companies: [],
      models: [],
      search: {
        page: 1,
        far_no: '',
        category_id: '',
        sub_category_id: '',
        machine_companies_id: '',
        machine_models_id: '',
        machine_type: '',
        condition_of_machine: '',
        purchase_date_from: '',
        purchase_date_to: '',
        Ownership: '',
        pm_due_status: '',
        site_id: ''
      },
      cam_list: '',
      Machines: {},
      pmModalData: '',
      sites: [],
      machine_existing_site: {
        id: '',
        site_name: '',
        from_date: ''
      },
      form: new Form({
        machine_id: '',
        site_id: '',
        from_date: '',
        to_date: '',
        redeployment_reason: ''
      }),
      json_fields: {
        'Far No': 'far_no',
        'Name': 'name',
        'Owner': 'owner',
        'Purchase Date': 'purchase_date',
        'Machine Type': 'machine_type',
        'Manufacture Year': 'manufacture_year',
        'Regn No': 'regn_no',
        'Machine Sr No': 'machine_sr_no',
        'Engine No': 'engine_no',
        'Chassis No': 'chassis_no',
        'Condition of Machine': 'condition_of_machine',
        'Standard CPH': 'standard_cph',
        'Consumption Type': 'consumption_type',
        'Under Maintenance': 'under_maintenance',
        'Current Site': {
          field: "current_site",
          callback: val => {
            return val.site_name;
          }
        },
        'Last Maintenance Type': {
          field: "last_ticket",
          callback: machine => {
            return machine ? machine.ticket_type : '';
          }
        },
        'Last Maintenance Date': {
          field: "last_ticket",
          callback: machine => {
            return machine ? machine.actual_date : '';
          }
        }
      },
      json_meta: [[{
        key: "charset",
        value: "utf-8"
      }]]
    };
  },
  beforeCreate() {
    axios.get("api/get_pre_machine").then(res => {
      this.sites = res.data.data.sites;
      this.categories = res.data.data.Category;
      this.companies = res.data.data.MachineCompany;
    });
  },
  methods: {
    async export_csv() {
      const response = await axios.get('api/machine?export=1', {
        params: this.search
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
    get_row_total(key) {
      if (this.MachineSite) {
        return this.MachineSite.reduce((accumulator, current) => accumulator + Number(current[key]), 0);
      } else {
        return 0;
      }
    },
    isSourceSelectable(op) {
      if (op.id != this.machine_existing_site.id) {
        return true;
      }
    },
    reset_filter() {
      this.search = {
        page: 1,
        far_no: '',
        category_id: '',
        sub_category_id: '',
        machine_companies_id: '',
        machine_models_id: '',
        machine_type: '',
        condition_of_machine: '',
        purchase_date_from: '',
        purchase_date_to: '',
        Ownership: '',
        pm_due_status: '',
        site_id: ''
      };
      this.getResults();
    },
    get_del(threshold, red, orange, yellow, green) {
      let l = [100 - green, 100 - orange, 100 - red];
      return [yellow, orange, red];
    },
    async view_pm_details(data) {
      let cloaderd = this.$loading.show({
        container: this.$refs.ref_load_user
      });
      this.pmModalData = data;
      $('#pmModal').modal('show');
      cloaderd.hide();
    },
    view_site_details(data) {
      this.pmModalData = data;
      $('#MachineSiteModal').modal('show');
      this.MachineSite = '';
      /*             let cloaderd = this.$loading.show({
                      container: this.$refs.ref_load_user
                  });
                  axios.get('api/machine/get_site_details/' + data.id)
                      .then(res => {
                          this.MachineSite = res.data.data
                          cloaderd.hide()
                      })
                      .catch(err => {
                          cloaderd.hide()
                      }) */
    },

    getResults(page = 1) {
      this.search.list = 1;
      this.search.page = page;
      axios.get('api/machine', {
        params: this.search
      }).then(({
        data
      }) => this.Machines = data.data);
    },
    loadMachines() {
      // if(this.$gate.isAdmin()){
      this.search.list = 1;
      axios.get("api/machine", {
        params: this.search
      }).then(({
        data
      }) => this.Machines = data.data);
      // }
    },

    AssingMachine(Machine, site) {
      this.pop_machine = Machine;
      this.form.machine_id = Machine.id;
      this.machine_existing_site.site_name = site ? site.site_name : '';
      this.machine_existing_site.from_date = site ? site.from_date : '';
      this.machine_existing_site.id = site ? site.id : '';
      $('#assignModal').modal('show');
    },
    get_machine_list(data) {
      this.pmModalData = data;
      let cloaderd = this.$loading.show({
        container: this.$refs.ref_load_user
      });
      axios.get('/api/machine/site/' + data.id).then(res => {
        this.cam_list = res.data.data;
        $('#CamListModal').modal('show');
        cloaderd.hide();
      }).catch(err => {
        cloaderd.hide();
      });
    },
    async submitAssignSite() {
      this.$validator.validateAll().then(async valid => {
        if (valid) {
          this.verrors.clear();
          let cloaderd = this.$loading.show({
            container: this.$refs.ref_load_user
          });
          this.form.post('api/machine/assign_site').then(data => {
            this.$validator.reset();
            cloaderd.hide();
            this.form.id = data.data.data.id;
            this.form.reset();
            this.machine_existing_site = {
              site_name: '',
              from_date: ''
            };
            $('#assignModal').modal('hide');
            this.getResults();
            Toast.fire({
              icon: 'success',
              title: data.data.message
            });
          }).catch(err => {
            if (err.response && err.response.data) {
              this.$setErrorsFromResponse(err.response.data);
            }
            cloaderd.hide();
          });
        }
      });
    },
    deleteMachine(id) {
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
          this.form.delete('api/machine/' + id).then(() => {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            // Fire.$emit('AfterCreate');
            this.loadMachines();
          }).catch(data => {
            Swal.fire("Failed!", data.message, "warning");
          });
        }
      });
    }
  },
  created() {
    this.loadMachines();
  },
  watch: {
    async 'search.category_id'(n, o) {
      if (o) this.form.sub_category_id = '';
      if (n) {
        axios.get("api/category/" + n).then(res => {
          this.sub_categories = res.data.data;
        });
      }
    },
    async 'search.machine_companies_id'(n, o) {
      if (o) this.form.machine_models_id = '';
      if (n) {
        axios.get("api/model/" + n).then(res => {
          this.models = res.data.data;
        });
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7ef22e75\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Machine/index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7ef22e75","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Machine/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "section",
    { staticClass: "content" },
    [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", { staticClass: "card-title" }, [
                  _vm._v("Machine List")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-tools" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-sm btn-primary",
                        attrs: { to: "/machines/add" }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-plus-square",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(" Add New\n                                ")
                      ]
                    )
                  ],
                  1
                )
              ]),
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
                      _c("div", { staticClass: "col col-3 pt-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search.far_no,
                              expression: "search.far_no"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { placeholder: "Enter FAR No ..." },
                          domProps: { value: _vm.search.far_no },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.search,
                                "far_no",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-3 pt-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "name",
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.categories,
                              placeholder: "Choose Category ..."
                            },
                            model: {
                              value: _vm.search.category_id,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "category_id", $$v)
                              },
                              expression: "search.category_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-3 pt-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "name",
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.sub_categories,
                              placeholder: "Choose description ..."
                            },
                            model: {
                              value: _vm.search.sub_category_id,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "sub_category_id", $$v)
                              },
                              expression: "search.sub_category_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-3 pt-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "name",
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.companies,
                              placeholder: "Choose Company ..."
                            },
                            model: {
                              value: _vm.search.machine_companies_id,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.search,
                                  "machine_companies_id",
                                  $$v
                                )
                              },
                              expression: "search.machine_companies_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-3 pt-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "name",
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.models,
                              placeholder: "Choose Model ..."
                            },
                            model: {
                              value: _vm.search.machine_models_id,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "machine_models_id", $$v)
                              },
                              expression: "search.machine_models_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-3 pt-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              options: ["New", "Existing"],
                              placeholder: "Select machine type...",
                              name: "machine_type"
                            },
                            model: {
                              value: _vm.search.machine_type,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "machine_type", $$v)
                              },
                              expression: "search.machine_type"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-3 pt-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "condition_of_machine",
                              options: [
                                "Break Down",
                                "Running",
                                "Running with Problem",
                                "Idle"
                              ],
                              placeholder: "Select condition of machine...",
                              name: "condition_of_machine"
                            },
                            model: {
                              value: _vm.search.condition_of_machine,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.search,
                                  "condition_of_machine",
                                  $$v
                                )
                              },
                              expression: "search.condition_of_machine"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-3 pt-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "site_name",
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.sites,
                              placeholder: "Select Site...",
                              name: "site_id"
                            },
                            model: {
                              value: _vm.search.site_id,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "site_id", $$v)
                              },
                              expression: "search.site_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-3 pt-2" },
                        [
                          _c("datetime", {
                            attrs: {
                              "value-zone": "Asia/Kolkata",
                              "input-class": "form-control",
                              placeholder: "Purchase Date From"
                            },
                            model: {
                              value: _vm.search.purchase_date_from,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "purchase_date_from", $$v)
                              },
                              expression: "search.purchase_date_from"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-3 pt-2" },
                        [
                          _c("datetime", {
                            attrs: {
                              "value-zone": "Asia/Kolkata",
                              "input-class": "form-control",
                              placeholder: "Purchase Date To"
                            },
                            model: {
                              value: _vm.search.purchase_date_to,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "purchase_date_to", $$v)
                              },
                              expression: "search.purchase_date_to"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-3 pt-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              options: ["Owned", "Rented"],
                              placeholder: "Select Ownership ...",
                              name: "Ownership"
                            },
                            model: {
                              value: _vm.search.Ownership,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "Ownership", $$v)
                              },
                              expression: "search.Ownership"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-3 pt-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              options: ["Red", "Orange", "Yellow", "Green"],
                              placeholder: "Select PM Due Status ",
                              name: "pm_due_status"
                            },
                            model: {
                              value: _vm.search.pm_due_status,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "pm_due_status", $$v)
                              },
                              expression: "search.pm_due_status"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col col-3 pt-2 btn-group",
                          attrs: { role: "group" }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Search")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info ml-2",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.reset_filter()
                                }
                              }
                            },
                            [_vm._v("Reset")]
                          ),
                          _vm._v(" "),
                          _c(
                            "download-excel",
                            {
                              staticClass: "btn btn-warning ml-2",
                              attrs: {
                                fetch: _vm.export_csv,
                                fields: _vm.json_fields,
                                "before-generate": _vm.startDownload,
                                "before-finish": _vm.finishDownload,
                                worksheet: "My Worksheet",
                                type: "csv",
                                name: "machine_list.csv"
                              }
                            },
                            [
                              _c("span", { staticClass: "labelText" }, [
                                _c("i", {
                                  staticClass: "fa fa-file-excel-o",
                                  attrs: { "aria-hidden": "true" }
                                }),
                                _vm._v(
                                  "\n                                                Export as\n                                                CSV"
                                )
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body machineTable table-responsive p-0" },
                [
                  _c("table", { staticClass: "table table-hover" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.Machines, function(Machine) {
                        return _c("tr", { key: Machine.id }, [
                          _c(
                            "td",
                            {
                              staticClass: "align-middle",
                              on: {
                                click: function($event) {
                                  return _vm.view_site_details(Machine)
                                }
                              }
                            },
                            [_vm._v(_vm._s(Machine.far_no))]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(Machine.name))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(
                              "\n                                            " +
                                _vm._s(
                                  Machine.machine_model
                                    ? Machine.machine_model.name
                                    : "-"
                                )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(Machine.owner))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "align-middle",
                              on: {
                                click: function($event) {
                                  return _vm.view_pm_details(Machine)
                                }
                              }
                            },
                            [
                              Machine.under_maintenance == "Yes"
                                ? [
                                    Machine.next_pm_date.early_type == "date"
                                      ? _c(
                                          "div",
                                          [
                                            _c("VueGauge", {
                                              attrs: {
                                                refid: "lopg" + Machine.id,
                                                options: {
                                                  needleValue:
                                                    Machine.next_pm_date
                                                      .maintenance_date,
                                                  arcDelimiters: [
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.date_red
                                                    ),
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.date_orange
                                                    ),
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.date_yellow
                                                    )
                                                  ],
                                                  arcColors: [
                                                    "red",
                                                    "orange",
                                                    "yellow",
                                                    "green"
                                                  ],
                                                  chartWidth: "80",
                                                  rangeLabel: [
                                                    "0",
                                                    Machine.date_threshold.toString()
                                                  ],
                                                  arcLabels: [
                                                    Machine.next_pm_date.settings.date_red.toString(),
                                                    Machine.next_pm_date.settings.date_orange.toString(),
                                                    Machine.next_pm_date.settings.date_yellow.toString(),
                                                    Machine.next_pm_date.settings.date_green.toString()
                                                  ],
                                                  arcOverEffect: true
                                                }
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    Machine.next_pm_date.early_type == "km"
                                      ? _c(
                                          "div",
                                          [
                                            _c("VueGauge", {
                                              attrs: {
                                                refid: "lopg" + Machine.id,
                                                options: {
                                                  needleValue:
                                                    Machine.next_pm_date.km_run,
                                                  arcDelimiters: _vm.get_del(
                                                    Machine.run_km_threshold,
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.km_red
                                                    ),
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.km_orange
                                                    ),
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.km_yellow
                                                    ),
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.km_green
                                                    )
                                                  ),
                                                  arcColors: [
                                                    "green",
                                                    "yellow",
                                                    "orange",
                                                    "red"
                                                  ],
                                                  chartWidth: "80",
                                                  rangeLabel: [
                                                    "0",
                                                    Machine.run_km_threshold.toString()
                                                  ],
                                                  arcLabels: [
                                                    Machine.next_pm_date.settings.km_yellow.toString(),
                                                    Machine.next_pm_date.settings.km_orange.toString(),
                                                    Machine.next_pm_date.settings.km_red.toString()
                                                  ],
                                                  arcOverEffect: true
                                                }
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    Machine.next_pm_date.early_type == "hr"
                                      ? _c(
                                          "div",
                                          [
                                            _c("VueGauge", {
                                              attrs: {
                                                refid: "lopg" + Machine.id,
                                                options: {
                                                  needleValue:
                                                    Machine.next_pm_date.hr_run,
                                                  arcDelimiters: _vm.get_del(
                                                    Machine.run_hour_threshold,
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.hr_red
                                                    ),
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.hr_orange
                                                    ),
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.hr_yellow
                                                    ),
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.hr_green
                                                    )
                                                  ),
                                                  arcColors: [
                                                    "green",
                                                    "yellow",
                                                    "orange",
                                                    "red"
                                                  ],
                                                  chartWidth: "80",
                                                  rangeLabel: [
                                                    "0",
                                                    Machine.run_hour_threshold.toString()
                                                  ],
                                                  arcLabels: [
                                                    Machine.next_pm_date.settings.hr_yellow.toString(),
                                                    Machine.next_pm_date.settings.hr_orange.toString(),
                                                    Machine.next_pm_date.settings.hr_red.toString()
                                                  ],
                                                  arcOverEffect: true
                                                }
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    Machine.next_pm_date.early_type == "prdfig"
                                      ? _c(
                                          "div",
                                          [
                                            _c("VueGauge", {
                                              attrs: {
                                                refid: "lopg" + Machine.id,
                                                options: {
                                                  needleValue:
                                                    Machine.next_pm_date
                                                      .production_fig,
                                                  arcDelimiters: _vm.get_del(
                                                    Machine.production_fig_threshold,
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.prdfig_red
                                                    ),
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.prdfig_orange
                                                    ),
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.prdfig_yellow
                                                    ),
                                                    Number(
                                                      Machine.next_pm_date
                                                        .settings.prdfig_green
                                                    )
                                                  ),
                                                  arcColors: [
                                                    "green",
                                                    "yellow",
                                                    "orange",
                                                    "red"
                                                  ],
                                                  chartWidth: "80",
                                                  rangeLabel: [
                                                    "0",
                                                    Machine.production_fig_threshold.toString()
                                                  ],
                                                  arcLabels: [
                                                    Machine.next_pm_date.settings.prdfig_yellow.toString(),
                                                    Machine.next_pm_date.settings.prdfig_orange.toString(),
                                                    Machine.next_pm_date.settings.prdfig_red.toString()
                                                  ],
                                                  arcOverEffect: true
                                                }
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(
                              _vm._s(_vm._f("myDate")(Machine.purchase_date))
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(Machine.condition_of_machine))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(
                              _vm._s(
                                Machine.current_site
                                  ? Machine.current_site.site_name
                                  : "-"
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "align-middle" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-success btn-sm",
                                  attrs: { to: "/machines/edit/" + Machine.id }
                                },
                                [
                                  _vm._v(
                                    "\n                                                Edit "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-primary btn-sm",
                                  attrs: {
                                    href: "javascript:void(0);",
                                    title: "Assign to site"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.AssingMachine(
                                        Machine,
                                        Machine.current_site
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                                CAM\n                                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-primary btn-sm",
                                  staticStyle: {
                                    "background-color": "#861cac"
                                  },
                                  attrs: {
                                    href: "javascript:void(0);",
                                    title: "List of Assign to site"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.get_machine_list(Machine)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                                CAM List\n                                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      }),
                      0
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "pmModal",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "pmModal",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "modal-dialog modal-dialog-centered",
              attrs: { role: "document" }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "container" }, [
                    _c("p", [
                      _c("strong", [_vm._v("Far No :")]),
                      _vm._v(
                        " " +
                          _vm._s(_vm.pmModalData.far_no) +
                          "\n                                "
                      ),
                      _c("br"),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Machine Name :")]),
                      _vm._v(
                        " " +
                          _vm._s(_vm.pmModalData.name) +
                          "\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _vm.pmModalData.under_maintenance == "Yes"
                      ? _c("div", { staticClass: "row bcon" }, [
                          _vm.pmModalData.is_maintenance_date
                            ? _c(
                                "div",
                                { staticClass: "col-6 pb-3" },
                                [
                                  _c("VueGauge", {
                                    key: "popg" + _vm.pmModalData.id,
                                    attrs: {
                                      refid: "popg1",
                                      options: {
                                        needleValue:
                                          _vm.pmModalData.next_pm_date
                                            .maintenance_date,
                                        arcDelimiters: [
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.date_red
                                          ),
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.date_orange
                                          ),
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.date_yellow
                                          )
                                        ],
                                        arcColors: [
                                          "red",
                                          "orange",
                                          "yellow",
                                          "green"
                                        ],
                                        chartWidth: "180",
                                        rangeLabel: [
                                          "0",
                                          _vm.pmModalData.date_threshold.toString()
                                        ],
                                        arcLabels: [
                                          _vm.pmModalData.next_pm_date.settings.date_red.toString(),
                                          _vm.pmModalData.next_pm_date.settings.date_orange.toString(),
                                          _vm.pmModalData.next_pm_date.settings.date_yellow.toString(),
                                          _vm.pmModalData.next_pm_date.settings.date_green.toString()
                                        ],
                                        arcOverEffect: true
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-center" }, [
                                    _vm._v("Remaining Days")
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.pmModalData.is_consumtion_km_run
                            ? _c(
                                "div",
                                { staticClass: "col-6 pb-3" },
                                [
                                  _c("VueGauge", {
                                    key: "popg" + _vm.pmModalData.id,
                                    attrs: {
                                      refid: "popg2",
                                      options: {
                                        needleValue:
                                          _vm.pmModalData.next_pm_date.km_run,
                                        arcDelimiters: _vm.get_del(
                                          _vm.pmModalData.run_km_threshold,
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.km_red
                                          ),
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.km_orange
                                          ),
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.km_yellow
                                          ),
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.km_green
                                          )
                                        ),
                                        arcColors: [
                                          "green",
                                          "yellow",
                                          "orange",
                                          "red"
                                        ],
                                        chartWidth: "180",
                                        rangeLabel: [
                                          "0",
                                          _vm.pmModalData.run_km_threshold.toString()
                                        ],
                                        arcLabels: [
                                          _vm.pmModalData.next_pm_date.settings.km_yellow.toString(),
                                          _vm.pmModalData.next_pm_date.settings.km_orange.toString(),
                                          _vm.pmModalData.next_pm_date.settings.km_red.toString()
                                        ],
                                        arcOverEffect: true
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-center" }, [
                                    _vm._v("Remaining KM")
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.pmModalData.is_consumtion_hr_run
                            ? _c(
                                "div",
                                { staticClass: "col-6" },
                                [
                                  _c("VueGauge", {
                                    key: "popg" + _vm.pmModalData.id,
                                    attrs: {
                                      refid: "popg3",
                                      options: {
                                        needleValue:
                                          _vm.pmModalData.next_pm_date.hr_run,
                                        arcDelimiters: _vm.get_del(
                                          _vm.pmModalData.run_hour_threshold,
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.hr_red
                                          ),
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.hr_orange
                                          ),
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.hr_yellow
                                          ),
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.hr_green
                                          )
                                        ),
                                        arcColors: [
                                          "green",
                                          "yellow",
                                          "orange",
                                          "red"
                                        ],
                                        chartWidth: "180",
                                        rangeLabel: [
                                          "0",
                                          _vm.pmModalData.run_hour_threshold.toString()
                                        ],
                                        arcLabels: [
                                          _vm.pmModalData.next_pm_date.settings.hr_yellow.toString(),
                                          _vm.pmModalData.next_pm_date.settings.hr_orange.toString(),
                                          _vm.pmModalData.next_pm_date.settings.hr_red.toString()
                                        ],
                                        arcOverEffect: true
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-center" }, [
                                    _vm._v("Remaining Hours")
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.pmModalData.is_production_fig
                            ? _c(
                                "div",
                                { staticClass: "col-6" },
                                [
                                  _c("VueGauge", {
                                    key: "popg" + _vm.pmModalData.id,
                                    attrs: {
                                      refid: "popg4",
                                      options: {
                                        needleValue:
                                          _vm.pmModalData.next_pm_date
                                            .production_fig,
                                        arcDelimiters: _vm.get_del(
                                          _vm.pmModalData
                                            .production_fig_threshold,
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.prdfig_red
                                          ),
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.prdfig_orange
                                          ),
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.prdfig_yellow
                                          ),
                                          Number(
                                            _vm.pmModalData.next_pm_date
                                              .settings.prdfig_green
                                          )
                                        ),
                                        arcColors: [
                                          "green",
                                          "yellow",
                                          "orange",
                                          "red"
                                        ],
                                        chartWidth: "180",
                                        rangeLabel: [
                                          "0",
                                          _vm.pmModalData.production_fig_threshold.toString()
                                        ],
                                        arcLabels: [
                                          _vm.pmModalData.next_pm_date.settings.prdfig_yellow.toString(),
                                          _vm.pmModalData.next_pm_date.settings.prdfig_orange.toString(),
                                          _vm.pmModalData.next_pm_date.settings.prdfig_red.toString()
                                        ],
                                        arcOverEffect: true
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-center" }, [
                                    _vm._v("Remaining Production")
                                  ])
                                ],
                                1
                              )
                            : _vm._e()
                        ])
                      : _vm._e()
                  ])
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "assignModal",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "assignModal",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "modal-dialog modal-lg",
              attrs: { role: "document" }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submitAssignSite()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "modal-body" }, [
                      _vm.pop_machine
                        ? _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm" }, [
                              _c("p", [
                                _c("strong", [_vm._v("Far No :")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.pop_machine.far_no) +
                                    "\n                                        "
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c("strong", [_vm._v("Machine Name :")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.pop_machine.name) +
                                    "\n                                        "
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c("strong", [_vm._v("Machine Model :")]),
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm.pop_machine.machine_model
                                        ? _vm.pop_machine.machine_model.name
                                        : "-"
                                    ) +
                                    "\n                                        "
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c("strong", [_vm._v("Machine Chassis No :")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.pop_machine.chassis_no) +
                                    "\n                                    "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm" }, [
                              _c("p", [
                                _c("strong", [_vm._v("Machine Sl No:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.pop_machine.machine_sr_no) +
                                    "\n                                        "
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c("strong", [_vm._v("Machine Regn No :")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.pop_machine.regn_no) +
                                    "\n                                        "
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c("strong", [_vm._v("Machine Engine No :")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.pop_machine.engine_no) +
                                    "\n                                    "
                                )
                              ])
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Existing Site")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text", readonly: "" },
                              domProps: {
                                value: _vm.machine_existing_site.site_name
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Allocate to Site")]),
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
                                  "is-invalid": _vm.verrors.has("site_id")
                                },
                                attrs: {
                                  label: "site_name",
                                  reduce: function(option) {
                                    return option.id
                                  },
                                  options: _vm.sites,
                                  selectable: function(option) {
                                    return _vm.isSourceSelectable(option)
                                  },
                                  placeholder: "Choose Site ...",
                                  "data-vv-as": "site",
                                  name: "site_id"
                                },
                                model: {
                                  value: _vm.form.site_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "site_id", $$v)
                                  },
                                  expression: "form.site_id"
                                }
                              }),
                              _vm._v(" "),
                              _vm.verrors.has("site_id")
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "help-block invalid-feedback"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(_vm.verrors.first("site_id")) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("From Date")]),
                              _vm._v(" "),
                              _c("datetime", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                class: {
                                  "is-invalid": _vm.verrors.has("from_date")
                                },
                                attrs: {
                                  "value-zone": "Asia/Kolkata",
                                  name: "from_date",
                                  "input-class": "form-control required",
                                  type: "datetime",
                                  "data-vv-as": "From Date",
                                  "min-datetime": _vm.machine_existing_site
                                    .from_date
                                    ? new Date(
                                        _vm.machine_existing_site.from_date
                                      ).toISOString()
                                    : ""
                                },
                                model: {
                                  value: _vm.form.from_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "from_date", $$v)
                                  },
                                  expression: "form.from_date"
                                }
                              }),
                              _vm._v(" "),
                              _vm.verrors.has("from_date")
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "help-block invalid-feedback"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(
                                            _vm.verrors.first("from_date")
                                          ) +
                                          "\n                                        "
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
                            _c("label", [_vm._v("Reason for Redeployment")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.redeployment_reason,
                                  expression: "form.redeployment_reason"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "form-control required",
                              class: {
                                "is-invalid": _vm.verrors.has(
                                  "redeployment_reason"
                                )
                              },
                              attrs: {
                                name: "redeployment_reason",
                                "data-vv-as": "redeployment reason"
                              },
                              domProps: { value: _vm.form.redeployment_reason },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "redeployment_reason",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.verrors.has("redeployment_reason")
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "help-block invalid-feedback"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.verrors.first("redeployment_reason")
                                      ) +
                                        "\n                                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(3)
                  ]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "modal", attrs: { id: "CamListModal" } }, [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm.pmModalData
                ? _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm" }, [
                      _c("p", [
                        _c("strong", [_vm._v("Far No :")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.pmModalData.far_no) +
                            "\n                                        "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Machine Name :")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.pmModalData.name) +
                            "\n                                        "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Machine Model :")]),
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm.pmModalData.machine_model
                                ? _vm.pmModalData.machine_model.name
                                : "-"
                            ) +
                            "\n                                        "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Machine Chassis No :")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.pmModalData.chassis_no) +
                            "\n                                    "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm" }, [
                      _c("p", [
                        _c("strong", [_vm._v("Machine Sl No:")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.pmModalData.machine_sr_no) +
                            "\n                                        "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Machine Regn No :")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.pmModalData.regn_no) +
                            "\n                                        "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Machine Engine No :")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.pmModalData.engine_no) +
                            "\n                                    "
                        )
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("table", { staticClass: "table table-striped" }, [
                _vm._m(5),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.cam_list, function(item, x) {
                    return _vm.cam_list
                      ? _c("tr", { key: x }, [
                          _c("td", {
                            domProps: { innerHTML: _vm._s(item.site_name) }
                          }),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm._f("myDate")(item.from_date)))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.redeployment_reason))])
                        ])
                      : _vm._e()
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(6)
          ])
        ])
      ]),
      _vm._v(" "),
      _c("MachinePop", {
        attrs: { id: "MachineSiteModal", machine: _vm.pmModalData }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("FAR No ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Model")]),
        _vm._v(" "),
        _c("th", [_vm._v("Owner")]),
        _vm._v(" "),
        _c("th", [_vm._v("PM Due Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Purchase Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine Condition")]),
        _vm._v(" "),
        _c("th", [_vm._v("Current Site")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("View PM Details")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _vm._v("Machine Asssign to Site")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Create CAM")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("CAM List")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { width: "20" } }, [_vm._v("Site Name")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "20" } }, [_vm._v("From Date")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "60" } }, [_vm._v("Redeployment Reason")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      )
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./resources/js/components/Machine/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Machine/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Machine/index.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ef22e75_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-7ef22e75","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7ef22e75\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Machine/index.vue");
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
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ef22e75_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ef22e75_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\Machine\\index.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTWFjaGluZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTWFjaGluZS9pbmRleC52dWU/NmYxMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYWNoaW5lL2luZGV4LnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwiY29tcG9uZW50cyIsIlZ1ZUdhdWdlIiwiTWFjaGluZVBvcCIsImRhdGEiLCJwb3BfbWFjaGluZSIsIk1hY2hpbmVTaXRlIiwiY2F0ZWdvcmllcyIsInN1Yl9jYXRlZ29yaWVzIiwiY29tcGFuaWVzIiwibW9kZWxzIiwic2VhcmNoIiwicGFnZSIsImZhcl9ubyIsImNhdGVnb3J5X2lkIiwic3ViX2NhdGVnb3J5X2lkIiwibWFjaGluZV9jb21wYW5pZXNfaWQiLCJtYWNoaW5lX21vZGVsc19pZCIsIm1hY2hpbmVfdHlwZSIsImNvbmRpdGlvbl9vZl9tYWNoaW5lIiwicHVyY2hhc2VfZGF0ZV9mcm9tIiwicHVyY2hhc2VfZGF0ZV90byIsIk93bmVyc2hpcCIsInBtX2R1ZV9zdGF0dXMiLCJzaXRlX2lkIiwiY2FtX2xpc3QiLCJNYWNoaW5lcyIsInBtTW9kYWxEYXRhIiwic2l0ZXMiLCJtYWNoaW5lX2V4aXN0aW5nX3NpdGUiLCJpZCIsInNpdGVfbmFtZSIsImZyb21fZGF0ZSIsImZvcm0iLCJtYWNoaW5lX2lkIiwidG9fZGF0ZSIsInJlZGVwbG95bWVudF9yZWFzb24iLCJqc29uX2ZpZWxkcyIsImZpZWxkIiwiY2FsbGJhY2siLCJqc29uX21ldGEiLCJrZXkiLCJ2YWx1ZSIsImJlZm9yZUNyZWF0ZSIsImF4aW9zIiwidGhlbiIsIm1ldGhvZHMiLCJwYXJhbXMiLCJzdGFydERvd25sb2FkIiwiU3dhbCIsInRpdGxlIiwiaHRtbCIsImFsbG93T3V0c2lkZUNsaWNrIiwib25CZWZvcmVPcGVuIiwiZmluaXNoRG93bmxvYWQiLCJnZXRfcm93X3RvdGFsIiwiaXNTb3VyY2VTZWxlY3RhYmxlIiwicmVzZXRfZmlsdGVyIiwiZ2V0X2RlbCIsImNvbnRhaW5lciIsIiQiLCJjbG9hZGVyZCIsInZpZXdfc2l0ZV9kZXRhaWxzIiwiZ2V0UmVzdWx0cyIsImxvYWRNYWNoaW5lcyIsIkFzc2luZ01hY2hpbmUiLCJnZXRfbWFjaGluZV9saXN0IiwiY2F0Y2giLCJUb2FzdCIsImljb24iLCJkZWxldGVNYWNoaW5lIiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY3JlYXRlZCIsIndhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaWNpQztBQUNsQjtFQUNmQTtFQUNBQztJQUNBQztJQUNBQztFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO01BQ0FDO1FBQ0FDO1FBQ0FWO1FBQ0FRO1FBQ0FHO1FBQ0FDO01BRUE7TUFFQUM7UUFDQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7VUFDQUM7VUFDQUM7WUFDQTtVQUNBO1FBQ0E7UUFDQTtVQUNBRDtVQUNBQztZQUNBO1VBQ0E7UUFDQTtRQUNBO1VBQ0FEO1VBQ0FDO1lBQ0E7VUFDQTtRQUNBO01BRUE7TUFFQUMsWUFDQTtRQUNBQztRQUNBQztNQUNBO0lBRUE7RUFDQTtFQUNBQztJQUNBQyxpQ0FDQUM7TUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7TUFDQTtRQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBQztRQUNBQztRQUNBQztRQUFBO1FBQ0FDO1FBQ0FDO1VBQ0FKO1FBQ0E7TUFDQTtJQUNBO0lBQ0FLO01BQ0FMO0lBQ0E7SUFFQU07TUFDQTtRQUtBO01BQ0E7UUFDQTtNQUNBO0lBRUE7SUFDQUM7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO1FBQ0E3QztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBa0M7TUFDQTtNQUNBO0lBQ0E7SUFDQTtNQUNBO1FBQ0FDO01BQ0E7TUFDQTtNQUNBQztNQUNBQztJQUNBO0lBQ0FDO01BQ0E7TUFDQUY7TUFDQTtNQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQTs7SUFFQUc7TUFDQTtNQUNBO01BQ0FuQjtRQUNBRztNQUNBO1FBQUEzQztNQUFBO0lB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QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsOEJBQThCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsOEJBQThCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw4QkFBOEI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4QkFBOEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHlDQUF5QyxpQkFBaUIsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BELGdCQUFnQiw2QkFBNkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTLGNBQWMsRUFBRTtBQUMzQztBQUNBLGtCQUFrQixTQUFTLGNBQWMsRUFBRTtBQUMzQztBQUNBLGtCQUFrQixTQUFTLGNBQWMsRUFBRTtBQUMzQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ2xDLElBQUksS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQzNuRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUMrRztBQUNhO0FBQzVIO0FBQzhVO0FBQzlVO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0c7QUFDdEcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLHdIQUFjO0FBQ2hCLEVBQUUsZ09BQWM7QUFDaEIsRUFBRSx5T0FBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvMTIuYnVuZGxlLmQ3NDhhYTAyMzEwNmMyNDQ2M2MyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPk1hY2hpbmUgTGlzdDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL21hY2hpbmVzL2FkZFwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzLXNxdWFyZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gQWRkIE5ld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cIm9mZlwiIEBzdWJtaXQucHJldmVudD1cImdldFJlc3VsdHMoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTMgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIEZBUiBObyAuLi5cIiB2LW1vZGVsPVwic2VhcmNoLmZhcl9ub1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTMgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgQ2F0ZWdvcnkgLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5jYXRlZ29yeV9pZFwiPiA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0zIHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwic3ViX2NhdGVnb3JpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBkZXNjcmlwdGlvbiAuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnN1Yl9jYXRlZ29yeV9pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTMgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJjb21wYW5pZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBDb21wYW55IC4uLlwiIHYtbW9kZWw9XCJzZWFyY2gubWFjaGluZV9jb21wYW5pZXNfaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0zIHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwibW9kZWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgTW9kZWwgLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5tYWNoaW5lX21vZGVsc19pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTMgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6b3B0aW9ucz1cIlsnTmV3JywgJ0V4aXN0aW5nJ11cIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCBtYWNoaW5lIHR5cGUuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoLm1hY2hpbmVfdHlwZVwiIG5hbWU9XCJtYWNoaW5lX3R5cGVcIj4gPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMyBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwiY29uZGl0aW9uX29mX21hY2hpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIlsnQnJlYWsgRG93bicsICdSdW5uaW5nJywgJ1J1bm5pbmcgd2l0aCBQcm9ibGVtJywgJ0lkbGUnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGNvbmRpdGlvbiBvZiBtYWNoaW5lLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaC5jb25kaXRpb25fb2ZfbWFjaGluZVwiIG5hbWU9XCJjb25kaXRpb25fb2ZfbWFjaGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTMgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cInNpdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgU2l0ZS4uLlwiIHYtbW9kZWw9XCJzZWFyY2guc2l0ZV9pZFwiIG5hbWU9XCJzaXRlX2lkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMyBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XCJBc2lhL0tvbGthdGFcIiB2LW1vZGVsPVwic2VhcmNoLnB1cmNoYXNlX2RhdGVfZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LWNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQdXJjaGFzZSBEYXRlIEZyb21cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0zIHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdmFsdWUtem9uZT1cIkFzaWEvS29sa2F0YVwiIHYtbW9kZWw9XCJzZWFyY2gucHVyY2hhc2VfZGF0ZV90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LWNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQdXJjaGFzZSBEYXRlIFRvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMyBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IDpvcHRpb25zPVwiWydPd25lZCcsICdSZW50ZWQnXVwiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IE93bmVyc2hpcCAuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoLk93bmVyc2hpcFwiIG5hbWU9XCJPd25lcnNoaXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0zIHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgOm9wdGlvbnM9XCJbJ1JlZCcsICdPcmFuZ2UnLCAnWWVsbG93JywgJ0dyZWVuJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBQTSBEdWUgU3RhdHVzIFwiIHYtbW9kZWw9XCJzZWFyY2gucG1fZHVlX3N0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbV9kdWVfc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMyBwdC0yIGJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWluZm8gbWwtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlc2V0X2ZpbHRlcigpXCI+UmVzZXQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkb3dubG9hZC1leGNlbCBjbGFzcz1cImJ0biBidG4td2FybmluZyBtbC0yXCIgOmZldGNoPVwiZXhwb3J0X2NzdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZHM9XCJqc29uX2ZpZWxkc1wiIDpiZWZvcmUtZ2VuZXJhdGU9XCJzdGFydERvd25sb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmJlZm9yZS1maW5pc2g9XCJmaW5pc2hEb3dubG9hZFwiIHdvcmtzaGVldD1cIk15IFdvcmtzaGVldFwiIHR5cGU9XCJjc3ZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFjaGluZV9saXN0LmNzdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsVGV4dFwiPjxpIGNsYXNzPVwiZmEgZmEtZmlsZS1leGNlbC1vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHBvcnQgYXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENTVjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgbWFjaGluZVRhYmxlIHRhYmxlLXJlc3BvbnNpdmUgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GQVIgTm8gPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1vZGVsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+T3duZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QTSBEdWUgU3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHVyY2hhc2UgRGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hY2hpbmUgQ29uZGl0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3VycmVudCBTaXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIk1hY2hpbmUgaW4gTWFjaGluZXNcIiA6a2V5PVwiTWFjaGluZS5pZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYWxpZ24tbWlkZGxlXCIgQGNsaWNrPVwidmlld19zaXRlX2RldGFpbHMoTWFjaGluZSlcIj57e1xuICAgICAgICBNYWNoaW5lLmZhcl9ub1xufX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFsaWduLW1pZGRsZVwiPnt7IE1hY2hpbmUubmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICBNYWNoaW5lLm1hY2hpbmVfbW9kZWw/IE1hY2hpbmUubWFjaGluZV9tb2RlbC5uYW1lIDonLScgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFsaWduLW1pZGRsZVwiPnt7IE1hY2hpbmUub3duZXIgfX08L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIEBjbGljaz1cInZpZXdfcG1fZGV0YWlscyhNYWNoaW5lKVwiIGNsYXNzPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiTWFjaGluZS51bmRlcl9tYWludGVuYW5jZSA9PSAnWWVzJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiTWFjaGluZS5uZXh0X3BtX2RhdGUuZWFybHlfdHlwZSA9PSAnZGF0ZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlR2F1Z2UgOnJlZmlkPVwiJ2xvcGcnICsgTWFjaGluZS5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwieyAnbmVlZGxlVmFsdWUnOiBNYWNoaW5lLm5leHRfcG1fZGF0ZS5tYWludGVuYW5jZV9kYXRlLCAnYXJjRGVsaW1pdGVycyc6IFtOdW1iZXIoTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MuZGF0ZV9yZWQpLCBOdW1iZXIoTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MuZGF0ZV9vcmFuZ2UpLCBOdW1iZXIoTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MuZGF0ZV95ZWxsb3cpXSwgYXJjQ29sb3JzOiBbJ3JlZCcsICdvcmFuZ2UnLCAneWVsbG93JywgJ2dyZWVuJ10sIGNoYXJ0V2lkdGg6ICc4MCcsIHJhbmdlTGFiZWw6IFsnMCcsIE1hY2hpbmUuZGF0ZV90aHJlc2hvbGQudG9TdHJpbmcoKV0sIGFyY0xhYmVsczogW01hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLmRhdGVfcmVkLnRvU3RyaW5nKCksIE1hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLmRhdGVfb3JhbmdlLnRvU3RyaW5nKCksIE1hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLmRhdGVfeWVsbG93LnRvU3RyaW5nKCksIE1hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLmRhdGVfZ3JlZW4udG9TdHJpbmcoKV0sIGFyY092ZXJFZmZlY3Q6IHRydWUgfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIk1hY2hpbmUubmV4dF9wbV9kYXRlLmVhcmx5X3R5cGUgPT0gJ2ttJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWdWVHYXVnZSA6cmVmaWQ9XCInbG9wZycgKyBNYWNoaW5lLmlkXCIgOm9wdGlvbnM9XCJ7XG4gICAgJ25lZWRsZVZhbHVlJzogTWFjaGluZS5uZXh0X3BtX2RhdGUua21fcnVuLCAnYXJjRGVsaW1pdGVycyc6IGdldF9kZWwoTWFjaGluZS5ydW5fa21fdGhyZXNob2xkLCBOdW1iZXIoTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3Mua21fcmVkKSwgTnVtYmVyKE1hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLmttX29yYW5nZSksIE51bWJlcihNYWNoaW5lLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5rbV95ZWxsb3cpLCBOdW1iZXIoTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3Mua21fZ3JlZW4pKSxcbiAgICBhcmNDb2xvcnM6IFsnZ3JlZW4nLCAneWVsbG93JywgJ29yYW5nZScsICdyZWQnXSxcbiAgICBjaGFydFdpZHRoOiAnODAnLFxuICAgIHJhbmdlTGFiZWw6IFsnMCcsIE1hY2hpbmUucnVuX2ttX3RocmVzaG9sZC50b1N0cmluZygpXSwgYXJjTGFiZWxzOiBbXG4gICAgICAgIE1hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLmttX3llbGxvdy50b1N0cmluZygpLFxuICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5rbV9vcmFuZ2UudG9TdHJpbmcoKSxcbiAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3Mua21fcmVkLnRvU3RyaW5nKClcbiAgICBdLCBhcmNPdmVyRWZmZWN0OiB0cnVlXG59XCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJNYWNoaW5lLm5leHRfcG1fZGF0ZS5lYXJseV90eXBlID09ICdocidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlR2F1Z2UgOnJlZmlkPVwiJ2xvcGcnICsgTWFjaGluZS5pZFwiIDpvcHRpb25zPVwie1xuICAgICduZWVkbGVWYWx1ZSc6IE1hY2hpbmUubmV4dF9wbV9kYXRlLmhyX3J1biwgJ2FyY0RlbGltaXRlcnMnOiBnZXRfZGVsKE1hY2hpbmUucnVuX2hvdXJfdGhyZXNob2xkLCBOdW1iZXIoTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MuaHJfcmVkKSwgTnVtYmVyKE1hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLmhyX29yYW5nZSksIE51bWJlcihNYWNoaW5lLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5ocl95ZWxsb3cpLCBOdW1iZXIoTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MuaHJfZ3JlZW4pKSwgYXJjQ29sb3JzOiBbJ2dyZWVuJywgJ3llbGxvdycsICdvcmFuZ2UnLCAncmVkJ10sIGNoYXJ0V2lkdGg6ICc4MCcsIHJhbmdlTGFiZWw6IFsnMCcsIE1hY2hpbmUucnVuX2hvdXJfdGhyZXNob2xkLnRvU3RyaW5nKCldLCBhcmNMYWJlbHM6IFtcbiAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MuaHJfeWVsbG93LnRvU3RyaW5nKCksXG4gICAgICAgIE1hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLmhyX29yYW5nZS50b1N0cmluZygpLFxuICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5ocl9yZWQudG9TdHJpbmcoKSxcbiAgICBdLCBhcmNPdmVyRWZmZWN0OiB0cnVlXG59XCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJNYWNoaW5lLm5leHRfcG1fZGF0ZS5lYXJseV90eXBlID09ICdwcmRmaWcnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZ1ZUdhdWdlIDpyZWZpZD1cIidsb3BnJyArIE1hY2hpbmUuaWRcIiA6b3B0aW9ucz1cIntcbiAgICAnbmVlZGxlVmFsdWUnOiBNYWNoaW5lLm5leHRfcG1fZGF0ZS5wcm9kdWN0aW9uX2ZpZywgJ2FyY0RlbGltaXRlcnMnOiBnZXRfZGVsKE1hY2hpbmUucHJvZHVjdGlvbl9maWdfdGhyZXNob2xkLCBOdW1iZXIoTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MucHJkZmlnX3JlZCksIE51bWJlcihNYWNoaW5lLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5wcmRmaWdfb3JhbmdlKSwgTnVtYmVyKE1hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLnByZGZpZ195ZWxsb3cpLCBOdW1iZXIoTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MucHJkZmlnX2dyZWVuKSksIGFyY0NvbG9yczogWydncmVlbicsICd5ZWxsb3cnLCAnb3JhbmdlJywgJ3JlZCddLCBjaGFydFdpZHRoOiAnODAnLCByYW5nZUxhYmVsOiBbJzAnLCBNYWNoaW5lLnByb2R1Y3Rpb25fZmlnX3RocmVzaG9sZC50b1N0cmluZygpXSwgYXJjTGFiZWxzOiBbTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MucHJkZmlnX3llbGxvdy50b1N0cmluZygpLFxuICAgIE1hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLnByZGZpZ19vcmFuZ2UudG9TdHJpbmcoKSwgTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MucHJkZmlnX3JlZC50b1N0cmluZygpXSwgYXJjT3ZlckVmZmVjdDogdHJ1ZVxufVwiIC8+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJhbGlnbi1taWRkbGVcIj57eyBNYWNoaW5lLnB1cmNoYXNlX2RhdGUgfCBteURhdGUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFsaWduLW1pZGRsZVwiPnt7IE1hY2hpbmUuY29uZGl0aW9uX29mX21hY2hpbmUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFsaWduLW1pZGRsZVwiPnt7IE1hY2hpbmUuY3VycmVudF9zaXRlID9cbiAgICAgICAgTWFjaGluZS5jdXJyZW50X3NpdGUuc2l0ZV9uYW1lXG4gICAgICAgIDogJy0nXG59fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8dGQ+PGltZyB2LWJpbmQ6c3JjPVwiJy8nICsgTWFjaGluZS5waG90b1wiIHdpZHRoPVwiMTAwXCIgYWx0PVwiTWFjaGluZVwiPjwvdGQ+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiJy9tYWNoaW5lcy9lZGl0LycgKyBNYWNoaW5lLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdCA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJBc3NpbmdNYWNoaW5lKE1hY2hpbmUsIE1hY2hpbmUuY3VycmVudF9zaXRlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFzc2lnbiB0byBzaXRlXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDQU1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIEBjbGljaz1cImdldF9tYWNoaW5lX2xpc3QoTWFjaGluZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJMaXN0IG9mIEFzc2lnbiB0byBzaXRlXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzg2MWNhYztcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENBTSBMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIEBjbGljaz1cImRlbGV0ZU1hY2hpbmUoTWFjaGluZS5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2ggcmVkXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWJvZHkgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgPHBhZ2luYXRpb24gOmRhdGE9XCJNYWNoaW5lc1wiIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVwiZ2V0UmVzdWx0c1wiIHYtaWY9XCJNYWNoaW5lc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFnaW5hdGlvbj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkIC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIE1vZGFsIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwicG1Nb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwicG1Nb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlZpZXcgUE0gRGV0YWlsczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkZhciBObyA6PC9zdHJvbmc+IHt7IHBtTW9kYWxEYXRhLmZhcl9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBOYW1lIDo8L3N0cm9uZz4ge3sgcG1Nb2RhbERhdGEubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYmNvblwiIHYtaWY9XCJwbU1vZGFsRGF0YS51bmRlcl9tYWludGVuYW5jZSA9PSAnWWVzJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcGItM1wiIHYtaWY9XCJwbU1vZGFsRGF0YS5pc19tYWludGVuYW5jZV9kYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlR2F1Z2UgcmVmaWQ9XCJwb3BnMVwiIDprZXk9XCIncG9wZycgKyBwbU1vZGFsRGF0YS5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJ7ICduZWVkbGVWYWx1ZSc6IHBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5tYWludGVuYW5jZV9kYXRlLCAnYXJjRGVsaW1pdGVycyc6IFtOdW1iZXIocG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlLnNldHRpbmdzLmRhdGVfcmVkKSwgTnVtYmVyKHBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5kYXRlX29yYW5nZSksIE51bWJlcihwbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MuZGF0ZV95ZWxsb3cpXSwgYXJjQ29sb3JzOiBbJ3JlZCcsICdvcmFuZ2UnLCAneWVsbG93JywgJ2dyZWVuJ10sIGNoYXJ0V2lkdGg6ICcxODAnLCByYW5nZUxhYmVsOiBbJzAnLCBwbU1vZGFsRGF0YS5kYXRlX3RocmVzaG9sZC50b1N0cmluZygpXSwgYXJjTGFiZWxzOiBbcG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlLnNldHRpbmdzLmRhdGVfcmVkLnRvU3RyaW5nKCksIHBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5kYXRlX29yYW5nZS50b1N0cmluZygpLCBwbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MuZGF0ZV95ZWxsb3cudG9TdHJpbmcoKSwgcG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlLnNldHRpbmdzLmRhdGVfZ3JlZW4udG9TdHJpbmcoKV0sIGFyY092ZXJFZmZlY3Q6IHRydWUgfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyXCI+UmVtYWluaW5nIERheXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcGItM1wiIHYtaWY9XCJwbU1vZGFsRGF0YS5pc19jb25zdW10aW9uX2ttX3J1blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZ1ZUdhdWdlIHJlZmlkPVwicG9wZzJcIiA6a2V5PVwiJ3BvcGcnICsgcG1Nb2RhbERhdGEuaWRcIiA6b3B0aW9ucz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduZWVkbGVWYWx1ZSc6IHBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5rbV9ydW4sICdhcmNEZWxpbWl0ZXJzJzogZ2V0X2RlbChwbU1vZGFsRGF0YS5ydW5fa21fdGhyZXNob2xkLCBOdW1iZXIocG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlLnNldHRpbmdzLmttX3JlZCksIE51bWJlcihwbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3Mua21fb3JhbmdlKSwgTnVtYmVyKHBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5rbV95ZWxsb3cpLCBOdW1iZXIocG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlLnNldHRpbmdzLmttX2dyZWVuKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNDb2xvcnM6IFsnZ3JlZW4nLCAneWVsbG93JywgJ29yYW5nZScsICdyZWQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0V2lkdGg6ICcxODAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VMYWJlbDogWycwJywgcG1Nb2RhbERhdGEucnVuX2ttX3RocmVzaG9sZC50b1N0cmluZygpXSwgYXJjTGFiZWxzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3Mua21feWVsbG93LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3Mua21fb3JhbmdlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3Mua21fcmVkLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGFyY092ZXJFZmZlY3Q6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlJlbWFpbmluZyBLTTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiIHYtaWY9XCJwbU1vZGFsRGF0YS5pc19jb25zdW10aW9uX2hyX3J1blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZ1ZUdhdWdlIHJlZmlkPVwicG9wZzNcIiA6a2V5PVwiJ3BvcGcnICsgcG1Nb2RhbERhdGEuaWRcIiA6b3B0aW9ucz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduZWVkbGVWYWx1ZSc6IHBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5ocl9ydW4sICdhcmNEZWxpbWl0ZXJzJzogZ2V0X2RlbChwbU1vZGFsRGF0YS5ydW5faG91cl90aHJlc2hvbGQsIE51bWJlcihwbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MuaHJfcmVkKSwgTnVtYmVyKHBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5ocl9vcmFuZ2UpLCBOdW1iZXIocG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlLnNldHRpbmdzLmhyX3llbGxvdyksIE51bWJlcihwbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MuaHJfZ3JlZW4pKSwgYXJjQ29sb3JzOiBbJ2dyZWVuJywgJ3llbGxvdycsICdvcmFuZ2UnLCAncmVkJ10sIGNoYXJ0V2lkdGg6ICcxODAnLCByYW5nZUxhYmVsOiBbJzAnLCBwbU1vZGFsRGF0YS5ydW5faG91cl90aHJlc2hvbGQudG9TdHJpbmcoKV0sIGFyY0xhYmVsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlLnNldHRpbmdzLmhyX3llbGxvdy50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlLnNldHRpbmdzLmhyX29yYW5nZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlLnNldHRpbmdzLmhyX3JlZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgYXJjT3ZlckVmZmVjdDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5SZW1haW5pbmcgSG91cnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIiB2LWlmPVwicG1Nb2RhbERhdGEuaXNfcHJvZHVjdGlvbl9maWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWdWVHYXVnZSByZWZpZD1cInBvcGc0XCIgOmtleT1cIidwb3BnJyArIHBtTW9kYWxEYXRhLmlkXCIgOm9wdGlvbnM9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmVlZGxlVmFsdWUnOiBwbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUucHJvZHVjdGlvbl9maWcsICdhcmNEZWxpbWl0ZXJzJzogZ2V0X2RlbChwbU1vZGFsRGF0YS5wcm9kdWN0aW9uX2ZpZ190aHJlc2hvbGQsIE51bWJlcihwbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MucHJkZmlnX3JlZCksIE51bWJlcihwbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MucHJkZmlnX29yYW5nZSksIE51bWJlcihwbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MucHJkZmlnX3llbGxvdyksIE51bWJlcihwbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MucHJkZmlnX2dyZWVuKSksIGFyY0NvbG9yczogWydncmVlbicsICd5ZWxsb3cnLCAnb3JhbmdlJywgJ3JlZCddLCBjaGFydFdpZHRoOiAnMTgwJywgcmFuZ2VMYWJlbDogWycwJywgcG1Nb2RhbERhdGEucHJvZHVjdGlvbl9maWdfdGhyZXNob2xkLnRvU3RyaW5nKCldLCBhcmNMYWJlbHM6IFtwbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MucHJkZmlnX3llbGxvdy50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlLnNldHRpbmdzLnByZGZpZ19vcmFuZ2UudG9TdHJpbmcoKSwgcG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlLnNldHRpbmdzLnByZGZpZ19yZWQudG9TdHJpbmcoKV0sIGFyY092ZXJFZmZlY3Q6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlJlbWFpbmluZyBQcm9kdWN0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJhc3NpZ25Nb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiYXNzaWduTW9kYWxcIlxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5NYWNoaW5lIEFzc3NpZ24gdG8gU2l0ZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdEFzc2lnblNpdGUoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInBvcF9tYWNoaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RmFyIE5vIDo8L3N0cm9uZz4ge3sgcG9wX21hY2hpbmUuZmFyX25vIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBOYW1lIDo8L3N0cm9uZz4ge3sgcG9wX21hY2hpbmUubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgTW9kZWwgOjwvc3Ryb25nPiB7eyAgcG9wX21hY2hpbmUubWFjaGluZV9tb2RlbD8gcG9wX21hY2hpbmUubWFjaGluZV9tb2RlbC5uYW1lIDonLScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIENoYXNzaXMgTm8gOjwvc3Ryb25nPiB7eyBwb3BfbWFjaGluZS5jaGFzc2lzX25vIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgU2wgTm86PC9zdHJvbmc+IHt7IHBvcF9tYWNoaW5lLm1hY2hpbmVfc3Jfbm8gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIFJlZ24gTm8gOjwvc3Ryb25nPiB7eyBwb3BfbWFjaGluZS5yZWduX25vIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBFbmdpbmUgTm8gOjwvc3Ryb25nPiB7eyBwb3BfbWFjaGluZS5lbmdpbmVfbm8gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXhpc3RpbmcgU2l0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZWFkb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJtYWNoaW5lX2V4aXN0aW5nX3NpdGUuc2l0ZV9uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BbGxvY2F0ZSB0byBTaXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJzaXRlX25hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJzaXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzZWxlY3RhYmxlPVwiKG9wdGlvbikgPT4gaXNTb3VyY2VTZWxlY3RhYmxlKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBTaXRlIC4uLlwiIHYtbW9kZWw9XCJmb3JtLnNpdGVfaWRcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnc2l0ZV9pZCcpIH1cIiBkYXRhLXZ2LWFzPVwic2l0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaXRlX2lkXCIgY2xhc3M9XCJyZXF1aXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ3NpdGVfaWQnKVwiIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoJ3NpdGVfaWQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZyb20gRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XCJBc2lhL0tvbGthdGFcIiB2LW1vZGVsPVwiZm9ybS5mcm9tX2RhdGVcIiBuYW1lPVwiZnJvbV9kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQtY2xhc3M9XCJmb3JtLWNvbnRyb2wgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Zyb21fZGF0ZScpIH1cIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZVwiIGRhdGEtdnYtYXM9XCJGcm9tIERhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWluLWRhdGV0aW1lPVwibWFjaGluZV9leGlzdGluZ19zaXRlLmZyb21fZGF0ZSA/IG5ldyBEYXRlKG1hY2hpbmVfZXhpc3Rpbmdfc2l0ZS5mcm9tX2RhdGUpLnRvSVNPU3RyaW5nKCkgOiAnJ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Zyb21fZGF0ZScpXCIgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdCgnZnJvbV9kYXRlJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UmVhc29uIGZvciBSZWRlcGxveW1lbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2LW1vZGVsPVwiZm9ybS5yZWRlcGxveW1lbnRfcmVhc29uXCIgbmFtZT1cInJlZGVwbG95bWVudF9yZWFzb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCByZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygncmVkZXBsb3ltZW50X3JlYXNvbicpIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIGRhdGEtdnYtYXM9XCJyZWRlcGxveW1lbnQgcmVhc29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygncmVkZXBsb3ltZW50X3JlYXNvbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj57e3ZlcnJvcnMuZmlyc3QoJ3JlZGVwbG95bWVudF9yZWFzb24nKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5DcmVhdGUgQ0FNPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiIGlkPVwiQ2FtTGlzdE1vZGFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIE1vZGFsIEhlYWRlciAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5DQU0gTGlzdDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTW9kYWwgYm9keSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwicG1Nb2RhbERhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5GYXIgTm8gOjwvc3Ryb25nPiB7eyBwbU1vZGFsRGF0YS5mYXJfbm8gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIE5hbWUgOjwvc3Ryb25nPiB7eyBwbU1vZGFsRGF0YS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBNb2RlbCA6PC9zdHJvbmc+IHt7ICBwbU1vZGFsRGF0YS5tYWNoaW5lX21vZGVsPyBwbU1vZGFsRGF0YS5tYWNoaW5lX21vZGVsLm5hbWUgOictJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgQ2hhc3NpcyBObyA6PC9zdHJvbmc+IHt7IHBtTW9kYWxEYXRhLmNoYXNzaXNfbm8gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBTbCBObzo8L3N0cm9uZz4ge3sgcG1Nb2RhbERhdGEubWFjaGluZV9zcl9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgUmVnbiBObyA6PC9zdHJvbmc+IHt7IHBtTW9kYWxEYXRhLnJlZ25fbm8gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIEVuZ2luZSBObyA6PC9zdHJvbmc+IHt7IHBtTW9kYWxEYXRhLmVuZ2luZV9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjIwXCI+U2l0ZSBOYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjIwXCI+RnJvbSBEYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjYwXCI+UmVkZXBsb3ltZW50IFJlYXNvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIihpdGVtLCB4KSBpbiBjYW1fbGlzdFwiIDprZXk9XCJ4XCIgdi1pZj1cImNhbV9saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgdi1odG1sPVwiaXRlbS5zaXRlX25hbWVcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IGl0ZW0uZnJvbV9kYXRlIHwgbXlEYXRlIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBpdGVtLnJlZGVwbG95bWVudF9yZWFzb24gfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTW9kYWwgZm9vdGVyIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxNYWNoaW5lUG9wIGlkPVwiTWFjaGluZVNpdGVNb2RhbFwiIDptYWNoaW5lPVwicG1Nb2RhbERhdGFcIi8+XG5cbiAgICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgVnVlR2F1Z2UgZnJvbSAndnVlLWdhdWdlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk1hY2hpbmVcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFZ1ZUdhdWdlLFxuICAgICAgICBNYWNoaW5lUG9wOiAoKSA9PiBpbXBvcnQoJy4uL01hY2hpbmVGYXJQb3AudnVlJyksXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9wX21hY2hpbmU6JycsXG4gICAgICAgICAgICBNYWNoaW5lU2l0ZTogJycsXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgIGNvbXBhbmllczogW10sXG4gICAgICAgICAgICBtb2RlbHM6IFtdLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgICAgICBmYXJfbm86ICcnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiAnJyxcbiAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfY29tcGFuaWVzX2lkOiAnJyxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX21vZGVsc19pZDogJycsXG4gICAgICAgICAgICAgICAgbWFjaGluZV90eXBlOiAnJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb25fb2ZfbWFjaGluZTogJycsXG4gICAgICAgICAgICAgICAgcHVyY2hhc2VfZGF0ZV9mcm9tOiAnJyxcbiAgICAgICAgICAgICAgICBwdXJjaGFzZV9kYXRlX3RvOiAnJyxcbiAgICAgICAgICAgICAgICBPd25lcnNoaXA6ICcnLFxuICAgICAgICAgICAgICAgIHBtX2R1ZV9zdGF0dXM6ICcnLFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbV9saXN0OiAnJyxcbiAgICAgICAgICAgIE1hY2hpbmVzOiB7fSxcbiAgICAgICAgICAgIHBtTW9kYWxEYXRhOiAnJyxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcbiAgICAgICAgICAgIG1hY2hpbmVfZXhpc3Rpbmdfc2l0ZToge1xuICAgICAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgICAgICBzaXRlX25hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGZyb21fZGF0ZTogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIGZyb21fZGF0ZTogJycsXG4gICAgICAgICAgICAgICAgdG9fZGF0ZTogJycsXG4gICAgICAgICAgICAgICAgcmVkZXBsb3ltZW50X3JlYXNvbjogJycsXG5cbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBqc29uX2ZpZWxkczoge1xuICAgICAgICAgICAgICAgICdGYXIgTm8nOiAnZmFyX25vJywgJ05hbWUnOiAnbmFtZScsICdPd25lcic6ICdvd25lcicsICdQdXJjaGFzZSBEYXRlJzogJ3B1cmNoYXNlX2RhdGUnLCAnTWFjaGluZSBUeXBlJzogJ21hY2hpbmVfdHlwZScsICdNYW51ZmFjdHVyZSBZZWFyJzogJ21hbnVmYWN0dXJlX3llYXInLCAnUmVnbiBObyc6ICdyZWduX25vJywgJ01hY2hpbmUgU3IgTm8nOiAnbWFjaGluZV9zcl9ubycsICdFbmdpbmUgTm8nOiAnZW5naW5lX25vJywgJ0NoYXNzaXMgTm8nOiAnY2hhc3Npc19ubycsICdDb25kaXRpb24gb2YgTWFjaGluZSc6ICdjb25kaXRpb25fb2ZfbWFjaGluZScsICdTdGFuZGFyZCBDUEgnOiAnc3RhbmRhcmRfY3BoJywgJ0NvbnN1bXB0aW9uIFR5cGUnOiAnY29uc3VtcHRpb25fdHlwZScsICdVbmRlciBNYWludGVuYW5jZSc6ICd1bmRlcl9tYWludGVuYW5jZScsJ0N1cnJlbnQgU2l0ZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwiY3VycmVudF9zaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsLnNpdGVfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdMYXN0IE1haW50ZW5hbmNlIFR5cGUnOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImxhc3RfdGlja2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAobWFjaGluZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hY2hpbmUgPyBtYWNoaW5lLnRpY2tldF90eXBlIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnTGFzdCBNYWludGVuYW5jZSBEYXRlJzoge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJsYXN0X3RpY2tldFwiLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKG1hY2hpbmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWNoaW5lID8gbWFjaGluZS5hY3R1YWxfZGF0ZSA6ICcnO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGpzb25fbWV0YTogW1xuICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjaGFyc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInV0Zi04XCIsXG4gICAgICAgICAgICAgICAgfSwgXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2dldF9wcmVfbWFjaGluZVwiKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuQ2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wYW5pZXMgPSByZXMuZGF0YS5kYXRhLk1hY2hpbmVDb21wYW55O1xuICAgICAgICAgICAgfSlcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGFzeW5jIGV4cG9ydF9jc3YoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2FwaS9tYWNoaW5lP2V4cG9ydD0xJywge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMuc2VhcmNoXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFydERvd25sb2FkKCkge1xuICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxlYXNlIFdhaXQgIScsXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6ICdEYXRhIHBvcHVsYXRpbmcnLCAvLyBhZGQgaHRtbCBhdHRyaWJ1dGUgaWYgeW91IHdhbnQgb3IgcmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb25CZWZvcmVPcGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLnNob3dMb2FkaW5nKClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaW5pc2hEb3dubG9hZCgpIHtcbiAgICAgICAgICAgICAgICBTd2FsLmNsb3NlKClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgZ2V0X3Jvd190b3RhbChrZXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLk1hY2hpbmVTaXRlKSB7XG5cblxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5NYWNoaW5lU2l0ZS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50KSA9PiBhY2N1bXVsYXRvciArIE51bWJlcihjdXJyZW50W2tleV0pLCAwKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIGlzU291cmNlU2VsZWN0YWJsZShvcCkge1xuICAgICAgICAgICAgaWYgKG9wLmlkICE9IHRoaXMubWFjaGluZV9leGlzdGluZ19zaXRlLmlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0X2ZpbHRlcigpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoID0ge1xuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgZmFyX25vOiAnJyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogJycsXG4gICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiAnJyxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2NvbXBhbmllc19pZDogJycsXG4gICAgICAgICAgICAgICAgbWFjaGluZV9tb2RlbHNfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfdHlwZTogJycsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uX29mX21hY2hpbmU6ICcnLFxuICAgICAgICAgICAgICAgIHB1cmNoYXNlX2RhdGVfZnJvbTogJycsXG4gICAgICAgICAgICAgICAgcHVyY2hhc2VfZGF0ZV90bzogJycsXG4gICAgICAgICAgICAgICAgT3duZXJzaGlwOiAnJyxcbiAgICAgICAgICAgICAgICBwbV9kdWVfc3RhdHVzOiAnJyxcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2V0UmVzdWx0cygpXG4gICAgICAgIH0sXG4gICAgICAgIGdldF9kZWwodGhyZXNob2xkLCByZWQsIG9yYW5nZSwgeWVsbG93LCBncmVlbikge1xuICAgICAgICAgICAgbGV0IGwgPSBbMTAwIC0gZ3JlZW4sIDEwMCAtIG9yYW5nZSwgMTAwIC0gcmVkXTtcbiAgICAgICAgICAgIHJldHVybiBbeWVsbG93LCBvcmFuZ2UsIHJlZF07XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHZpZXdfcG1fZGV0YWlscyhkYXRhKSB7XG4gICAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5yZWZfbG9hZF91c2VyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucG1Nb2RhbERhdGEgPSBkYXRhXG4gICAgICAgICAgICAkKCcjcG1Nb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgICAgICBjbG9hZGVyZC5oaWRlKClcbiAgICAgICAgfSxcbiAgICAgICAgdmlld19zaXRlX2RldGFpbHMoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wbU1vZGFsRGF0YSA9IGRhdGFcbiAgICAgICAgICAgICQoJyNNYWNoaW5lU2l0ZU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgIHRoaXMuTWFjaGluZVNpdGUgPSAnJ1xuLyogICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMucmVmX2xvYWRfdXNlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBheGlvcy5nZXQoJ2FwaS9tYWNoaW5lL2dldF9zaXRlX2RldGFpbHMvJyArIGRhdGEuaWQpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5NYWNoaW5lU2l0ZSA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXG4gICAgICAgICAgICAgICAgfSkgKi9cbiAgICAgICAgfSxcblxuICAgICAgICBnZXRSZXN1bHRzKHBhZ2UgPSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5saXN0ID0gMVxuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZSA9IHBhZ2VcbiAgICAgICAgICAgIGF4aW9zLmdldCgnYXBpL21hY2hpbmUnLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxuICAgICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+ICh0aGlzLk1hY2hpbmVzID0gZGF0YS5kYXRhKSk7XG5cblxuICAgICAgICB9LFxuICAgICAgICBsb2FkTWFjaGluZXMoKSB7XG4gICAgICAgICAgICAvLyBpZih0aGlzLiRnYXRlLmlzQWRtaW4oKSl7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5saXN0ID0gMVxuICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL21hY2hpbmVcIiwge1xuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcbiAgICAgICAgICAgIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiAodGhpcy5NYWNoaW5lcyA9IGRhdGEuZGF0YSkpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9LFxuXG4gICAgICAgIEFzc2luZ01hY2hpbmUoTWFjaGluZSwgc2l0ZSkge1xuICAgICAgICAgICAgdGhpcy5wb3BfbWFjaGluZT1NYWNoaW5lXG4gICAgICAgICAgICB0aGlzLmZvcm0ubWFjaGluZV9pZCA9IE1hY2hpbmUuaWRcbiAgICAgICAgICAgIHRoaXMubWFjaGluZV9leGlzdGluZ19zaXRlLnNpdGVfbmFtZSA9IHNpdGUgPyBzaXRlLnNpdGVfbmFtZSA6ICcnXG4gICAgICAgICAgICB0aGlzLm1hY2hpbmVfZXhpc3Rpbmdfc2l0ZS5mcm9tX2RhdGUgPSBzaXRlID8gc2l0ZS5mcm9tX2RhdGUgOiAnJ1xuICAgICAgICAgICAgdGhpcy5tYWNoaW5lX2V4aXN0aW5nX3NpdGUuaWQgPSBzaXRlID8gc2l0ZS5pZCA6ICcnXG4gICAgICAgICAgICAkKCcjYXNzaWduTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRfbWFjaGluZV9saXN0KGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucG1Nb2RhbERhdGEgPSBkYXRhXG4gICAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5yZWZfbG9hZF91c2VyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9tYWNoaW5lL3NpdGUvJyArIGRhdGEuaWQpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1fbGlzdCA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgJCgnI0NhbUxpc3RNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgc3VibWl0QXNzaWduU2l0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oYXN5bmMgKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVycm9ycy5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2xvYWRlcmQgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnJlZl9sb2FkX3VzZXJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBvc3QoJ2FwaS9tYWNoaW5lL2Fzc2lnbl9zaXRlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmlkID0gZGF0YS5kYXRhLmRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWNoaW5lX2V4aXN0aW5nX3NpdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fZGF0ZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNhc3NpZ25Nb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRSZXN1bHRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZSAmJiBlcnIucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UoZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlTWFjaGluZShpZCkge1xuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZT8nLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhXCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnWWVzLCBkZWxldGUgaXQhJ1xuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gU2VuZCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5kZWxldGUoJ2FwaS9tYWNoaW5lLycgKyBpZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0RlbGV0ZWQhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWW91ciBmaWxlIGhhcyBiZWVuIGRlbGV0ZWQuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3VjY2VzcydcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlLiRlbWl0KCdBZnRlckNyZWF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTWFjaGluZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcIkZhaWxlZCFcIiwgZGF0YS5tZXNzYWdlLCBcIndhcm5pbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMubG9hZE1hY2hpbmVzKCk7XG4gICAgfSxcbiAgICB3YXRjaDoge1xuXG4gICAgICAgIGFzeW5jICdzZWFyY2guY2F0ZWdvcnlfaWQnKG4sIG8pIHtcbiAgICAgICAgICAgIGlmIChvKVxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zdWJfY2F0ZWdvcnlfaWQgPSAnJ1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvY2F0ZWdvcnkvXCIgKyBuKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yl9jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgJ3NlYXJjaC5tYWNoaW5lX2NvbXBhbmllc19pZCcobiwgbykge1xuICAgICAgICAgICAgaWYgKG8pXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLm1hY2hpbmVfbW9kZWxzX2lkID0gJydcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL21vZGVsL1wiICsgbilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbHMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cblxufVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2VjdGlvblwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTWFjaGluZSBMaXN0XCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdG9vbHNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IFwiL21hY2hpbmVzL2FkZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBsdXMtc3F1YXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgQWRkIE5ld1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IHAtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhdXRvY29tcGxldGU6IFwib2ZmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0UmVzdWx0cygpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0zIHB0LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guZmFyX25vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guZmFyX25vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCJFbnRlciBGQVIgTm8gLi4uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2guZmFyX25vIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFyX25vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMyBwdC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBDYXRlZ29yeSAuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmNhdGVnb3J5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImNhdGVnb3J5X2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jYXRlZ29yeV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTMgcHQtMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnN1Yl9jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIGRlc2NyaXB0aW9uIC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc3ViX2NhdGVnb3J5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInN1Yl9jYXRlZ29yeV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guc3ViX2NhdGVnb3J5X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMyBwdC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uY29tcGFuaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIENvbXBhbnkgLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5tYWNoaW5lX2NvbXBhbmllc19pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hY2hpbmVfY29tcGFuaWVzX2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5tYWNoaW5lX2NvbXBhbmllc19pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTMgcHQtMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLm1vZGVscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBNb2RlbCAuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLm1hY2hpbmVfbW9kZWxzX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcIm1hY2hpbmVfbW9kZWxzX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5tYWNoaW5lX21vZGVsc19pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTMgcHQtMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJOZXdcIiwgXCJFeGlzdGluZ1wiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBtYWNoaW5lIHR5cGUuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFjaGluZV90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5tYWNoaW5lX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwibWFjaGluZV90eXBlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5tYWNoaW5lX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0zIHB0LTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiY29uZGl0aW9uX29mX21hY2hpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJCcmVhayBEb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUnVubmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJ1bm5pbmcgd2l0aCBQcm9ibGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSWRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IGNvbmRpdGlvbiBvZiBtYWNoaW5lLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNvbmRpdGlvbl9vZl9tYWNoaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5jb25kaXRpb25fb2ZfbWFjaGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvbl9vZl9tYWNoaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jb25kaXRpb25fb2ZfbWFjaGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTMgcHQtMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaXRlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2l0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgU2l0ZS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaXRlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5zaXRlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInNpdGVfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnNpdGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0zIHB0LTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRhdGV0aW1lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS16b25lXCI6IFwiQXNpYS9Lb2xrYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQdXJjaGFzZSBEYXRlIEZyb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnB1cmNoYXNlX2RhdGVfZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJwdXJjaGFzZV9kYXRlX2Zyb21cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnB1cmNoYXNlX2RhdGVfZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTMgcHQtMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGF0ZXRpbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlLXpvbmVcIjogXCJBc2lhL0tvbGthdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlB1cmNoYXNlIERhdGUgVG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnB1cmNoYXNlX2RhdGVfdG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwicHVyY2hhc2VfZGF0ZV90b1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gucHVyY2hhc2VfZGF0ZV90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTMgcHQtMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJPd25lZFwiLCBcIlJlbnRlZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBPd25lcnNoaXAgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk93bmVyc2hpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guT3duZXJzaGlwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcIk93bmVyc2hpcFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guT3duZXJzaGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMyBwdC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcIlJlZFwiLCBcIk9yYW5nZVwiLCBcIlllbGxvd1wiLCBcIkdyZWVuXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IFBNIER1ZSBTdGF0dXMgXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBtX2R1ZV9zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnBtX2R1ZV9zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwicG1fZHVlX3N0YXR1c1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gucG1fZHVlX3N0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wgY29sLTMgcHQtMiBidG4tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJncm91cFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWFyY2hcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvIG1sLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2V0X2ZpbHRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZXNldFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3dubG9hZC1leGNlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4td2FybmluZyBtbC0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaDogX3ZtLmV4cG9ydF9jc3YsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogX3ZtLmpzb25fZmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJlZm9yZS1nZW5lcmF0ZVwiOiBfdm0uc3RhcnREb3dubG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmUtZmluaXNoXCI6IF92bS5maW5pc2hEb3dubG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBcIk15IFdvcmtzaGVldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNzdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hY2hpbmVfbGlzdC5jc3ZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxUZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWZpbGUtZXhjZWwtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwb3J0IGFzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1NWXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgbWFjaGluZVRhYmxlIHRhYmxlLXJlc3BvbnNpdmUgcC0wXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtaG92ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uTWFjaGluZXMsIGZ1bmN0aW9uKE1hY2hpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBNYWNoaW5lLmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFsaWduLW1pZGRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmlld19zaXRlX2RldGFpbHMoTWFjaGluZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoTWFjaGluZS5mYXJfbm8pKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImFsaWduLW1pZGRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKE1hY2hpbmUubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiYWxpZ24tbWlkZGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLm1hY2hpbmVfbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gTWFjaGluZS5tYWNoaW5lX21vZGVsLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJhbGlnbi1taWRkbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhNYWNoaW5lLm93bmVyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbGlnbi1taWRkbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZpZXdfcG1fZGV0YWlscyhNYWNoaW5lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLnVuZGVyX21haW50ZW5hbmNlID09IFwiWWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZS5lYXJseV90eXBlID09IFwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlZ1ZUdhdWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmaWQ6IFwibG9wZ1wiICsgTWFjaGluZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVlZGxlVmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYWludGVuYW5jZV9kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNEZWxpbWl0ZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldHRpbmdzLmRhdGVfcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0dGluZ3MuZGF0ZV9vcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hY2hpbmUubmV4dF9wbV9kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXR0aW5ncy5kYXRlX3llbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJjQ29sb3JzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieWVsbG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0V2lkdGg6IFwiODBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VMYWJlbDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hY2hpbmUuZGF0ZV90aHJlc2hvbGQudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNMYWJlbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5kYXRlX3JlZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLmRhdGVfb3JhbmdlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MuZGF0ZV95ZWxsb3cudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5kYXRlX2dyZWVuLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJjT3ZlckVmZmVjdDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hY2hpbmUubmV4dF9wbV9kYXRlLmVhcmx5X3R5cGUgPT0gXCJrbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlZ1ZUdhdWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmaWQ6IFwibG9wZ1wiICsgTWFjaGluZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVlZGxlVmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGUua21fcnVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNEZWxpbWl0ZXJzOiBfdm0uZ2V0X2RlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLnJ1bl9rbV90aHJlc2hvbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldHRpbmdzLmttX3JlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldHRpbmdzLmttX29yYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldHRpbmdzLmttX3llbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldHRpbmdzLmttX2dyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNDb2xvcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRXaWR0aDogXCI4MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZUxhYmVsOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5ydW5fa21fdGhyZXNob2xkLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJjTGFiZWxzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3Mua21feWVsbG93LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3Mua21fb3JhbmdlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3Mua21fcmVkLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJjT3ZlckVmZmVjdDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hY2hpbmUubmV4dF9wbV9kYXRlLmVhcmx5X3R5cGUgPT0gXCJoclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlZ1ZUdhdWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmaWQ6IFwibG9wZ1wiICsgTWFjaGluZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVlZGxlVmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGUuaHJfcnVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNEZWxpbWl0ZXJzOiBfdm0uZ2V0X2RlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLnJ1bl9ob3VyX3RocmVzaG9sZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0dGluZ3MuaHJfcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0dGluZ3MuaHJfb3JhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0dGluZ3MuaHJfeWVsbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0dGluZ3MuaHJfZ3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyY0NvbG9yczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3JlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInllbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFydFdpZHRoOiBcIjgwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlTGFiZWw6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLnJ1bl9ob3VyX3RocmVzaG9sZC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyY0xhYmVsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLmhyX3llbGxvdy50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLmhyX29yYW5nZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLmhyX3JlZC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyY092ZXJFZmZlY3Q6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZS5lYXJseV90eXBlID09IFwicHJkZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVnVlR2F1Z2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZpZDogXCJsb3BnXCIgKyBNYWNoaW5lLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkbGVWYWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3Rpb25fZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNEZWxpbWl0ZXJzOiBfdm0uZ2V0X2RlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLnByb2R1Y3Rpb25fZmlnX3RocmVzaG9sZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0dGluZ3MucHJkZmlnX3JlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldHRpbmdzLnByZGZpZ19vcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hY2hpbmUubmV4dF9wbV9kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXR0aW5ncy5wcmRmaWdfeWVsbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0dGluZ3MucHJkZmlnX2dyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNDb2xvcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRXaWR0aDogXCI4MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZUxhYmVsOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5wcm9kdWN0aW9uX2ZpZ190aHJlc2hvbGQudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNMYWJlbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5wcmRmaWdfeWVsbG93LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFjaGluZS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MucHJkZmlnX29yYW5nZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hY2hpbmUubmV4dF9wbV9kYXRlLnNldHRpbmdzLnByZGZpZ19yZWQudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNPdmVyRWZmZWN0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImFsaWduLW1pZGRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9mKFwibXlEYXRlXCIpKE1hY2hpbmUucHVyY2hhc2VfZGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImFsaWduLW1pZGRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKE1hY2hpbmUuY29uZGl0aW9uX29mX21hY2hpbmUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImFsaWduLW1pZGRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hY2hpbmUuY3VycmVudF9zaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNYWNoaW5lLmN1cnJlbnRfc2l0ZS5zaXRlX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWxpZ24tbWlkZGxlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9tYWNoaW5lcy9lZGl0L1wiICsgTWFjaGluZS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFzc2lnbiB0byBzaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uQXNzaW5nTWFjaGluZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWNoaW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hY2hpbmUuY3VycmVudF9zaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENBTVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjODYxY2FjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxpc3Qgb2YgQXNzaWduIHRvIHNpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRfbWFjaGluZV9saXN0KE1hY2hpbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDQU0gTGlzdFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9vdGVyXCIgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogXCJwbU1vZGFsXCIsXG4gICAgICAgICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgICAgICAgcm9sZTogXCJkaWFsb2dcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwicG1Nb2RhbFwiLFxuICAgICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcImRvY3VtZW50XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJGYXIgTm8gOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wbU1vZGFsRGF0YS5mYXJfbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIk1hY2hpbmUgTmFtZSA6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBtTW9kYWxEYXRhLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGEudW5kZXJfbWFpbnRlbmFuY2UgPT0gXCJZZXNcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgYmNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLmlzX21haW50ZW5hbmNlX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC02IHBiLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJWdWVHYXVnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwicG9wZ1wiICsgX3ZtLnBtTW9kYWxEYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmaWQ6IFwicG9wZzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRsZVZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFpbnRlbmFuY2VfZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNEZWxpbWl0ZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0dGluZ3MuZGF0ZV9yZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0dGluZ3MuZGF0ZV9vcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0dGluZ3MuZGF0ZV95ZWxsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyY0NvbG9yczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInllbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFydFdpZHRoOiBcIjE4MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlTGFiZWw6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLmRhdGVfdGhyZXNob2xkLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyY0xhYmVsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5kYXRlX3JlZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5kYXRlX29yYW5nZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5kYXRlX3llbGxvdy50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5kYXRlX2dyZWVuLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyY092ZXJFZmZlY3Q6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJSZW1haW5pbmcgRGF5c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGEuaXNfY29uc3VtdGlvbl9rbV9ydW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC02IHBiLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJWdWVHYXVnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwicG9wZ1wiICsgX3ZtLnBtTW9kYWxEYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmaWQ6IFwicG9wZzJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRsZVZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5rbV9ydW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJjRGVsaW1pdGVyczogX3ZtLmdldF9kZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGEucnVuX2ttX3RocmVzaG9sZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXR0aW5ncy5rbV9yZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0dGluZ3Mua21fb3JhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldHRpbmdzLmttX3llbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXR0aW5ncy5rbV9ncmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJjQ29sb3JzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInllbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmFuZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0V2lkdGg6IFwiMTgwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VMYWJlbDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGEucnVuX2ttX3RocmVzaG9sZC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNMYWJlbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3Mua21feWVsbG93LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlLnNldHRpbmdzLmttX29yYW5nZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5rbV9yZWQudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJjT3ZlckVmZmVjdDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlJlbWFpbmluZyBLTVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGEuaXNfY29uc3VtdGlvbl9ocl9ydW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVnVlR2F1Z2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInBvcGdcIiArIF92bS5wbU1vZGFsRGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmlkOiBcInBvcGczXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkbGVWYWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuaHJfcnVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyY0RlbGltaXRlcnM6IF92bS5nZXRfZGVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLnJ1bl9ob3VyX3RocmVzaG9sZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXR0aW5ncy5ocl9yZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0dGluZ3MuaHJfb3JhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldHRpbmdzLmhyX3llbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXR0aW5ncy5ocl9ncmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJjQ29sb3JzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInllbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmFuZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0V2lkdGg6IFwiMTgwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VMYWJlbDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGEucnVuX2hvdXJfdGhyZXNob2xkLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyY0xhYmVsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5ocl95ZWxsb3cudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MuaHJfb3JhbmdlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlLnNldHRpbmdzLmhyX3JlZC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNPdmVyRWZmZWN0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUmVtYWluaW5nIEhvdXJzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wbU1vZGFsRGF0YS5pc19wcm9kdWN0aW9uX2ZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJWdWVHYXVnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwicG9wZ1wiICsgX3ZtLnBtTW9kYWxEYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmaWQ6IFwicG9wZzRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRsZVZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdGlvbl9maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJjRGVsaW1pdGVyczogX3ZtLmdldF9kZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3Rpb25fZmlnX3RocmVzaG9sZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXR0aW5ncy5wcmRmaWdfcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldHRpbmdzLnByZGZpZ19vcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0dGluZ3MucHJkZmlnX3llbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXR0aW5ncy5wcmRmaWdfZ3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyY0NvbG9yczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJncmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFydFdpZHRoOiBcIjE4MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlTGFiZWw6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLnByb2R1Y3Rpb25fZmlnX3RocmVzaG9sZC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNMYWJlbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wbU1vZGFsRGF0YS5uZXh0X3BtX2RhdGUuc2V0dGluZ3MucHJkZmlnX3llbGxvdy50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBtTW9kYWxEYXRhLm5leHRfcG1fZGF0ZS5zZXR0aW5ncy5wcmRmaWdfb3JhbmdlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGEubmV4dF9wbV9kYXRlLnNldHRpbmdzLnByZGZpZ19yZWQudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJjT3ZlckVmZmVjdDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlJlbWFpbmluZyBQcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGZhZGVcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IFwiYXNzaWduTW9kYWxcIixcbiAgICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJhc3NpZ25Nb2RhbFwiLFxuICAgICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwiZG9jdW1lbnRcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0QXNzaWduU2l0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF9tYWNoaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkZhciBObyA6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF9tYWNoaW5lLmZhcl9ubykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIk1hY2hpbmUgTmFtZSA6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF9tYWNoaW5lLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIE1vZGVsIDpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF9tYWNoaW5lLm1hY2hpbmVfbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5wb3BfbWFjaGluZS5tYWNoaW5lX21vZGVsLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIENoYXNzaXMgTm8gOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfbWFjaGluZS5jaGFzc2lzX25vKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIFNsIE5vOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfbWFjaGluZS5tYWNoaW5lX3NyX25vKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiTWFjaGluZSBSZWduIE5vIDpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX21hY2hpbmUucmVnbl9ubykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIk1hY2hpbmUgRW5naW5lIE5vIDpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX21hY2hpbmUuZW5naW5lX25vKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJFeGlzdGluZyBTaXRlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHJlYWRvbmx5OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1hY2hpbmVfZXhpc3Rpbmdfc2l0ZS5zaXRlX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkFsbG9jYXRlIHRvIFNpdGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXCJzaXRlX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2l0ZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zaXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RhYmxlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaXNTb3VyY2VTZWxlY3RhYmxlKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBTaXRlIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcInNpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNpdGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zaXRlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNpdGVfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnNpdGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJzaXRlX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuZmlyc3QoXCJzaXRlX2lkXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJGcm9tIERhdGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRhdGV0aW1lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXCJmcm9tX2RhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlLXpvbmVcIjogXCJBc2lhL0tvbGthdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZyb21fZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJmb3JtLWNvbnRyb2wgcmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiRnJvbSBEYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW4tZGF0ZXRpbWVcIjogX3ZtLm1hY2hpbmVfZXhpc3Rpbmdfc2l0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZyb21fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWFjaGluZV9leGlzdGluZ19zaXRlLmZyb21fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5mcm9tX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZnJvbV9kYXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5mcm9tX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJmcm9tX2RhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJmcm9tX2RhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlJlYXNvbiBmb3IgUmVkZXBsb3ltZW50XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucmVkZXBsb3ltZW50X3JlYXNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVkZXBsb3ltZW50X3JlYXNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVkZXBsb3ltZW50X3JlYXNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJlZGVwbG95bWVudF9yZWFzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwicmVkZXBsb3ltZW50IHJlYXNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnJlZGVwbG95bWVudF9yZWFzb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWRlcGxveW1lbnRfcmVhc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJyZWRlcGxveW1lbnRfcmVhc29uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwicmVkZXBsb3ltZW50X3JlYXNvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMpXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsXCIsIGF0dHJzOiB7IGlkOiBcIkNhbUxpc3RNb2RhbFwiIH0gfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oNCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGFcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkZhciBObyA6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBtTW9kYWxEYXRhLmZhcl9ubykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiTWFjaGluZSBOYW1lIDpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG1Nb2RhbERhdGEubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiTWFjaGluZSBNb2RlbCA6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG1Nb2RhbERhdGEubWFjaGluZV9tb2RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5wbU1vZGFsRGF0YS5tYWNoaW5lX21vZGVsLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiTWFjaGluZSBDaGFzc2lzIE5vIDpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG1Nb2RhbERhdGEuY2hhc3Npc19ubykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIFNsIE5vOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wbU1vZGFsRGF0YS5tYWNoaW5lX3NyX25vKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIFJlZ24gTm8gOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wbU1vZGFsRGF0YS5yZWduX25vKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIEVuZ2luZSBObyA6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBtTW9kYWxEYXRhLmVuZ2luZV9ubykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtc3RyaXBlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oNSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY2FtX2xpc3QsIGZ1bmN0aW9uKGl0ZW0sIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYW1fbGlzdFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0clwiLCB7IGtleTogeCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKGl0ZW0uc2l0ZV9uYW1lKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fZihcIm15RGF0ZVwiKShpdGVtLmZyb21fZGF0ZSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnJlZGVwbG95bWVudF9yZWFzb24pKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSg2KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIk1hY2hpbmVQb3BcIiwge1xuICAgICAgICBhdHRyczogeyBpZDogXCJNYWNoaW5lU2l0ZU1vZGFsXCIsIG1hY2hpbmU6IF92bS5wbU1vZGFsRGF0YSB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJGQVIgTm8gXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTW9kZWxcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiT3duZXJcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUE0gRHVlIFN0YXR1c1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJQdXJjaGFzZSBEYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1hY2hpbmUgQ29uZGl0aW9uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkN1cnJlbnQgU2l0ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJBY3Rpb25cIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZVwiIH0sIFtfdm0uX3YoXCJWaWV3IFBNIERldGFpbHNcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9IH0sIFtfdm0uX3YoXCLDl1wiKV0pXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJNYWNoaW5lIEFzc3NpZ24gdG8gU2l0ZVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwic3BhblwiLCB7IGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9LCBbX3ZtLl92KFwiw5dcIildKV1cbiAgICAgIClcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvb3RlclwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnlcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiQ2xvc2VcIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSxcbiAgICAgICAgW192bS5fdihcIkNyZWF0ZSBDQU1cIildXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtdGl0bGVcIiB9LCBbX3ZtLl92KFwiQ0FNIExpc3RcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIsOXXCIpXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyB3aWR0aDogXCIyMFwiIH0gfSwgW192bS5fdihcIlNpdGUgTmFtZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgd2lkdGg6IFwiMjBcIiB9IH0sIFtfdm0uX3YoXCJGcm9tIERhdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHdpZHRoOiBcIjYwXCIgfSB9LCBbX3ZtLl92KFwiUmVkZXBsb3ltZW50IFJlYXNvblwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9vdGVyXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJDbG9zZVwiKV1cbiAgICAgIClcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtN2VmMjJlNzVcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTdlZjIyZTc1XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcTWFjaGluZVxcXFxpbmRleC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2VmMjJlNzVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZWYyMmU3NVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9