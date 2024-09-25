(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Tickets/Report.vue":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Tickets/Report.vue ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var multi_range_slider_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multi-range-slider-vue */ "./node_modules/multi-range-slider-vue/MultiRangeSlider.vue");
/* harmony import */ var multi_range_slider_vue_MultiRangeSliderBlack_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multi-range-slider-vue/MultiRangeSliderBlack.css */ "./node_modules/multi-range-slider-vue/MultiRangeSliderBlack.css");
/* harmony import */ var multi_range_slider_vue_MultiRangeSliderBlack_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multi_range_slider_vue_MultiRangeSliderBlack_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var multi_range_slider_vue_MultiRangeSliderBarOnly_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multi-range-slider-vue/MultiRangeSliderBarOnly.css */ "./node_modules/multi-range-slider-vue/MultiRangeSliderBarOnly.css");
/* harmony import */ var multi_range_slider_vue_MultiRangeSliderBarOnly_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multi_range_slider_vue_MultiRangeSliderBarOnly_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3___default()),
    MultiRangeSlider: multi_range_slider_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    MachinePop: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../MachineFarPop.vue */ "./resources/js/components/MachineFarPop.vue"))
  },
  data() {
    return {
      pmModalData: '',
      created_users: [],
      search_machines: [],
      search_sites: [],
      search: {
        page: 1,
        machine_id: '',
        site_id: '',
        created_by: '',
        created_from: '',
        created_to: '',
        tat_from: 0,
        tat_to: 90,
        color: '',
        ticket: ''
      },
      categories: [],
      sub_categories: [],
      sites: [],
      selected_machine: '',
      users: [],
      machines: [],
      Tickets: {},
      json_fields: {
        'Ticket no': 'ticket_no',
        'Last Name': 'last_name',
        'Email': 'email',
        'Type': 'type',
        'Country Code': 'country_code',
        'Phone Number': 'phone_number',
        'VSD ID': 'vsd_id',
        'License Number': 'license_number'
      },
      json_meta: [[{
        key: "charset",
        value: "utf-8"
      }]]
    };
  },
  methods: {
    view_site_details(data) {
      this.pmModalData = data;
      $('#MachineSiteModal2').modal('show');
    },
    reset_filter() {
      this.search = {
        page: 1,
        machine_id: '',
        site_id: '',
        created_by: '',
        created_from: '',
        created_to: '',
        tat_from: 0,
        tat_to: 90,
        color: '',
        ticket: ''
      };
      this.getResults();
    },
    UpdateValues(e) {
      this.search.tat_from = e.minValue;
      this.search.tat_to = e.maxValue;
    },
    // excel
    async export_csv() {
      const response = await axios.get('api/ticket/export');
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
    getLabel(val) {
      if (typeof val === 'object') {
        return val.far_no + ' - ' + val.name;
      } else {
        return val;
      }
    },
    getResults(page = 1) {
      this.$Progress.start();
      this.search.page = page;
      axios.get('/api/ticket', {
        params: this.search
      }).then(({
        data
      }) => this.Tickets = data.data);
      this.$Progress.finish();
    },
    loadTickets() {
      axios.get("/api/ticket", {
        params: this.search
      }).then(({
        data
      }) => this.Tickets = data.data);
    }
  },
  created() {
    this.loadTickets();
  },
  beforeCreate() {
    axios.get("api/get_pre_machine").then(res => {
      this.categories = res.data.data.Category;
      this.sites = res.data.data.sites;
    });
    axios.get("/api/initial_ticket").then(response => {
      this.users = response.data.data.vendors;
      this.machines = response.data.data.machines;
      this.search_machines = response.data.data.machines;
      this.search_sites = response.data.data.sites;
      this.created_users = response.data.data.created_users;
    }).catch(() => console.warn('Oh. Something went wrong'));
  },
  watch: {
    async 'form.sub_category_id'(n, o) {
      if (n) {
        this.get_machine();
      }
    },
    async 'form.site_id'(n, o) {
      if (n) {
        this.get_machine();
      }
    },
    'form.category_id': {
      handler: function (n, o) {
        if (n) {
          axios.get("api/category/" + n).then(res => {
            this.sub_categories = res.data.data;
          });
          this.get_machine();
        }
      },
      deep: true,
      initial: true
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Tickets/Report.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Tickets/Report.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.bg-red {\n  background-color: #ef5563 !important;\n}\n.bg-green {\n  background-color: #70ed70 !important;\n}\n.bg-yellow {\n  background-color: #f1c84c !important;\n}\n", "", {"version":3,"sources":["F:/wamp64/www/rmm/resources/js/components/Tickets/resources/js/components/Tickets/Report.vue"],"names":[],"mappings":";AA8WA;EACA,qCAAA;CACA;AACA;EACA,qCAAA;CACA;AACA;EACA,qCAAA;CACA","file":"Report.vue","sourcesContent":["<template>\n    <section class=\"content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n\n                <div class=\"col-12\">\n\n                    <div class=\"card\" >\n                        <div class=\"card-header\">\n                            <h3 class=\"card-title\">Ticket Report</h3>\n                            <div class=\"card-tools\">\n\n                            </div>\n                        </div>\n\n                        <div class=\"card-body p-2\">\n                            <form autocomplete=\"off\" @submit.prevent=\"getResults()\">\n                                <div class=\"form-row\">\n                                    <div class=\"col col-2\">\n                                        <v-select label=\"name\" :get-option-label=\"getLabel\"\n                                            :reduce=\"(option) => option.id\" :options=\"search_machines\"\n                                            placeholder=\"Enter machines ...\" v-model=\"search.machine_id\"\n                                            name=\"machine_id\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col col-2\">\n                                        <input type=\"text\" placeholder=\"Enter ticket ...\" v-model=\"search.ticket\"\n                                            name=\"ticket\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"col col-2\">\n                                        <v-select label=\"site_name\" :reduce=\"(option) => option.id\"\n                                            :options=\"search_sites\" placeholder=\"Select Site...\"\n                                            v-model=\"search.site_id\" name=\"site_id\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col col-2\">\n                                        <v-select label=\"site_name\" :options=\"['Open', 'Closed']\"\n                                            placeholder=\"Select Status...\" v-model=\"search.status\" name=\"status\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col col-2\">\n                                        <v-select label=\"name\" :options=\"created_users\" :reduce=\"(option) => option.id\"\n                                            placeholder=\"Created by...\" v-model=\"search.created_by\" name=\"created_by\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col col-2\">\n                                        <v-select label=\"name\" :options=\"['Red','Solid Red','Yellow','Green']\"\n                                            placeholder=\"Choose Color...\" v-model=\"search.color\" name=\"color\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col col-2 pt-2\">\n                                       <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.created_from\" input-class=\"form-control\" placeholder=\"Created from date\" />\n                                    </div>\n                                    <div class=\"col col-2 pt-2\">\n                                       <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.created_to\" input-class=\"form-control\" placeholder=\"Created to date\"/>\n                                    </div>\n                                    <div class=\"col col-2 pt-2\">\n                                        <v-select label=\"site_name\" :options=\"['Major', 'Minor']\"\n                                            placeholder=\"Select Complaint Nature...\" v-model=\"search.complaint_nature\" name=\"complaint_nature\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col col-4 pt-2\">\n                                       <!--  <MultiRangeSlider baseClassName=\"multi-range-slider\" :min=\"0\"\n                                            :max=\"100\" :step=\"5\" :ruler=\"true\" :label=\"true\"\n                                            :minValue=\"search.tat_from\" :maxValue=\"search.tat_to\"\n                                            @input=\"UpdateValues\" /> -->\n\n\n\n  <fieldset style=\"max-width: 400px; margin: auto; text-align: left;  \">\n    <div style=\"display: flex; justify-content: space-between; text-align: center; height: 39px;\">\n      <span\n        style=\"\n          display: inline-block;\n          padding: 5px;\n          border: solid 1px;\n          border-radius: 5px;\n          width: 100px;\n          margin: 3px;\n\n        \"\n        >{{ search.tat_from }}</span\n      >\n      <span style=\"top: 25%; position: relative;\">TAT</span>\n      <span\n        style=\"\n          display: inline-block;\n          padding: 5px;\n          border: solid 1px;\n          border-radius: 5px;\n          width: 100px;\n          margin: 3px;\n        \"\n        >{{ search.tat_to }}</span\n      >\n    </div>\n\n    <label for=\"customRange2\" class=\"form-label\">Example range</label>\n<input type=\"range\" class=\"form-range\" min=\"0\" max=\"5\" id=\"customRange2\">\n\n    <MultiRangeSlider\n      baseClassName=\"multi-range-slider-bar-only\"\n      :minValue=\"search.tat_from\"\n      :maxValue=\"1000\"\n      :max=\"100\"\n      :min=\"0\"\n      :step=\"1\"\n      :rangeMargin=\"0\"\n      @input=\"UpdateValues\"\n    />\n  </fieldset>\n\n\n\n\n\n\n\n\n\n                                    </div>\n                                    <div class=\"col pt-2\">\n                                    <button type=\"submit\" class=\"btn btn-success\">Search</button>\n                                    <button type=\"button\" class=\"btn btn-info ml-2\" @click=\"reset_filter()\">Reset</button>\n                                </div>\n                                </div>\n                            </form>\n                        </div>\n\n                        <!-- /.card-header -->\n                        <div class=\"card-body table-responsive p-0 ticketTable\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th>Ticket No </th>\n                                        <th>Machine Name</th>\n                                        <th>Machine Far No</th>\n                                        <th>Site</th>\n                                        <th>Created By</th>\n                                        <th>Created Date</th>\n                                        <th>Expected date</th>\n                                        <th>Revised <br> Expected date</th>\n                                        <th>Resolution date</th>\n                                        <th>Ticket Status</th>\n                                        <th>Complaint Nature</th>\n                                        <th>TAT</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr v-for=\"ticket in Tickets.data\" :key=\"ticket.id\" :class=\"ticket.row_color\">\n                                        <td>{{ ticket.ticket_no }}</td>\n                                        <td class=\"text-capitalize\">{{ ticket.machine.name }}</td>\n                                        <td @click=\"view_site_details(ticket.machine)\">{{ ticket.machine.far_no }}</td>\n                                         <td>{{ ticket.site ? ticket.site.site_name:'-' }}</td>\n                                        <td>{{ ticket.created_by_name }}</td>\n                                        <td>{{ ticket.created_at | myDate }}</td>\n                                        <td>{{ ticket.likely_date | myDate }}</td>\n                                        <td>{{ ticket.reversion_date|myDate }}</td>\n                                        <td>{{ ticket.actual_date   }}</td>\n                                        <td >{{ticket.status.toLowerCase()=='created by user'?'Open':ticket.status}}</td>\n                                        <td>{{ticket.complaint_nature}}</td>\n                                        <td>{{ticket.actual_date?ticket.tat:'-'}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <!-- /.card-body -->\n                        <div class=\"card-footer\">\n                            <pagination :data=\"Tickets\" :limit=\"10\" @pagination-change-page=\"getResults\"></pagination>\n                        </div>\n                    </div>\n                    <!-- /.card -->\n                </div>\n            </div>\n\n\n\n\n\n        </div>\n\n        <MachinePop id=\"MachineSiteModal2\" :machine=\"pmModalData\"/>\n\n    </section>\n</template>\n\n<script>\nimport MultiRangeSlider from \"multi-range-slider-vue\";\nimport \"multi-range-slider-vue/MultiRangeSliderBlack.css\";\nimport \"multi-range-slider-vue/MultiRangeSliderBarOnly.css\";\n\nimport VueTagsInput from '@johmun/vue-tags-input';\nexport default {\n    components: {\n        VueTagsInput,\n        MultiRangeSlider,\n        MachinePop: () => import('../MachineFarPop.vue'),\n    },\n    data() {\n        return {\n            pmModalData:'',\n            created_users: [],\n            search_machines: [],\n            search_sites: [],\n            search: {\n                page: 1,\n                machine_id: '',\n                site_id: '',\n                created_by: '',\n                created_from: '',\n                created_to: '',\n                tat_from: 0,\n                tat_to: 90,\n                color:'',\n                ticket:''\n            },\n            categories: [],\n            sub_categories: [],\n            sites: [],\n            selected_machine: '',\n            users: [],\n            machines: [],\n            Tickets: {},\n\n\n            json_fields: {\n                'Ticket no': 'ticket_no',\n                'Last Name': 'last_name',\n                'Email': 'email',\n                'Type': 'type',\n                'Country Code': 'country_code',\n                'Phone Number': 'phone_number',\n                'VSD ID': 'vsd_id',\n                'License Number': 'license_number',\n            },\n            json_meta: [\n                [{\n                    key: \"charset\",\n                    value: \"utf-8\",\n                },],\n            ],\n\n        }\n    },\n    methods: {\n        view_site_details(data) {\n            this.pmModalData = data\n            $('#MachineSiteModal2').modal('show');\n        },\n        reset_filter(){\n            this.search= {\n                page: 1,\n                machine_id: '',\n                site_id: '',\n                created_by: '',\n                created_from: '',\n                created_to: '',\n                tat_from: 0,\n                tat_to: 90,\n                color:'',\n                ticket:''\n            }\n            this.getResults()\n        },\n        UpdateValues(e) {\n            this.search.tat_from = e.minValue;\n            this.search.tat_to = e.maxValue;\n        },\n        // excel\n        async export_csv() {\n            const response = await axios.get('api/ticket/export');\n\n            return response.data.data;\n        },\n        startDownload() {\n            Swal.fire({\n                title: 'Please Wait !',\n                html: 'Data populating', // add html attribute if you want or remove\n                allowOutsideClick: false,\n                onBeforeOpen: () => {\n                    Swal.showLoading()\n                },\n            });\n        },\n        finishDownload() {\n            Swal.close()\n        },\n\n\n\n        getLabel(val) {\n            if (typeof val === 'object') {\n                return val.far_no + ' - ' + val.name;\n            } else {\n                return val;\n            }\n        },\n        getResults(page = 1) {\n            this.$Progress.start();\n            this.search.page = page\n            axios.get('/api/ticket', {\n                params: this.search\n            }).then(({\n                data\n            }) => (this.Tickets = data.data));\n            this.$Progress.finish();\n        },\n        loadTickets() {\n\n                axios.get(\"/api/ticket\", {\n                    params: this.search\n                }).then(({\n                    data\n                }) => (this.Tickets = data.data));\n\n        },\n\n    },\n    created() {\n        this.loadTickets();\n    },\n    beforeCreate() {\n        axios.get(\"api/get_pre_machine\")\n            .then((res) => {\n                this.categories = res.data.data.Category;\n                this.sites = res.data.data.sites;\n            })\n        axios.get(\"/api/initial_ticket\").then(response => {\n            this.users = response.data.data.vendors;\n            this.machines = response.data.data.machines;\n            this.search_machines = response.data.data.machines;\n            this.search_sites = response.data.data.sites;\n            this.created_users = response.data.data.created_users;\n        }).catch(() => console.warn('Oh. Something went wrong'));\n    },\n    watch: {\n        async 'form.sub_category_id'(n, o) {\n            if (n) {\n                this.get_machine()\n            }\n        },\n        async 'form.site_id'(n, o) {\n            if (n) {\n                this.get_machine()\n            }\n        },\n\n        'form.category_id': {\n            handler: function (n, o) {\n\n                if (n) {\n                    axios.get(\"api/category/\" + n)\n                        .then((res) => {\n                            this.sub_categories = res.data.data;\n                        })\n                    this.get_machine()\n                }\n            },\n            deep: true,\n            initial: true\n        },\n\n    },\n}\n</script>\n<style>\n.bg-red {\n  background-color: #ef5563 !important;\n}\n.bg-green {\n  background-color: #70ed70 !important;\n}\n.bg-yellow {\n  background-color: #f1c84c !important;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e4e7eebe\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Tickets/Report.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e4e7eebe","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Tickets/Report.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
                      _c(
                        "div",
                        { staticClass: "col col-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "name",
                              "get-option-label": _vm.getLabel,
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.search_machines,
                              placeholder: "Enter machines ...",
                              name: "machine_id"
                            },
                            model: {
                              value: _vm.search.machine_id,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "machine_id", $$v)
                              },
                              expression: "search.machine_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col col-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search.ticket,
                              expression: "search.ticket"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Enter ticket ...",
                            name: "ticket"
                          },
                          domProps: { value: _vm.search.ticket },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.search,
                                "ticket",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "site_name",
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.search_sites,
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
                        { staticClass: "col col-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "site_name",
                              options: ["Open", "Closed"],
                              placeholder: "Select Status...",
                              name: "status"
                            },
                            model: {
                              value: _vm.search.status,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "status", $$v)
                              },
                              expression: "search.status"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "name",
                              options: _vm.created_users,
                              reduce: function(option) {
                                return option.id
                              },
                              placeholder: "Created by...",
                              name: "created_by"
                            },
                            model: {
                              value: _vm.search.created_by,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "created_by", $$v)
                              },
                              expression: "search.created_by"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "name",
                              options: ["Red", "Solid Red", "Yellow", "Green"],
                              placeholder: "Choose Color...",
                              name: "color"
                            },
                            model: {
                              value: _vm.search.color,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "color", $$v)
                              },
                              expression: "search.color"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-2 pt-2" },
                        [
                          _c("datetime", {
                            attrs: {
                              "value-zone": "Asia/Kolkata",
                              "input-class": "form-control",
                              placeholder: "Created from date"
                            },
                            model: {
                              value: _vm.search.created_from,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "created_from", $$v)
                              },
                              expression: "search.created_from"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-2 pt-2" },
                        [
                          _c("datetime", {
                            attrs: {
                              "value-zone": "Asia/Kolkata",
                              "input-class": "form-control",
                              placeholder: "Created to date"
                            },
                            model: {
                              value: _vm.search.created_to,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "created_to", $$v)
                              },
                              expression: "search.created_to"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col col-2 pt-2" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "site_name",
                              options: ["Major", "Minor"],
                              placeholder: "Select Complaint Nature...",
                              name: "complaint_nature"
                            },
                            model: {
                              value: _vm.search.complaint_nature,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "complaint_nature", $$v)
                              },
                              expression: "search.complaint_nature"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col col-4 pt-2" }, [
                        _c(
                          "fieldset",
                          {
                            staticStyle: {
                              "max-width": "400px",
                              margin: "auto",
                              "text-align": "left"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  display: "flex",
                                  "justify-content": "space-between",
                                  "text-align": "center",
                                  height: "39px"
                                }
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      display: "inline-block",
                                      padding: "5px",
                                      border: "solid 1px",
                                      "border-radius": "5px",
                                      width: "100px",
                                      margin: "3px"
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.search.tat_from))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      top: "25%",
                                      position: "relative"
                                    }
                                  },
                                  [_vm._v("TAT")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      display: "inline-block",
                                      padding: "5px",
                                      border: "solid 1px",
                                      "border-radius": "5px",
                                      width: "100px",
                                      margin: "3px"
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.search.tat_to))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-label",
                                attrs: { for: "customRange2" }
                              },
                              [_vm._v("Example range")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-range",
                              attrs: {
                                type: "range",
                                min: "0",
                                max: "5",
                                id: "customRange2"
                              }
                            }),
                            _vm._v(" "),
                            _c("MultiRangeSlider", {
                              attrs: {
                                baseClassName: "multi-range-slider-bar-only",
                                minValue: _vm.search.tat_from,
                                maxValue: 1000,
                                max: 100,
                                min: 0,
                                step: 1,
                                rangeMargin: 0
                              },
                              on: { input: _vm.UpdateValues }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col pt-2" }, [
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
                        )
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
                  _c("table", { staticClass: "table table-hover" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.Tickets.data, function(ticket) {
                        return _c(
                          "tr",
                          { key: ticket.id, class: ticket.row_color },
                          [
                            _c("td", [_vm._v(_vm._s(ticket.ticket_no))]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-capitalize" }, [
                              _vm._v(_vm._s(ticket.machine.name))
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.view_site_details(ticket.machine)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(ticket.machine.far_no))]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  ticket.site ? ticket.site.site_name : "-"
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(ticket.created_by_name))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm._f("myDate")(ticket.created_at))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm._f("myDate")(ticket.likely_date))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm._f("myDate")(ticket.reversion_date))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(ticket.actual_date))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  ticket.status.toLowerCase() ==
                                    "created by user"
                                    ? "Open"
                                    : ticket.status
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(ticket.complaint_nature))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(ticket.actual_date ? ticket.tat : "-")
                              )
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-footer" },
                [
                  _c("pagination", {
                    attrs: { data: _vm.Tickets, limit: 10 },
                    on: { "pagination-change-page": _vm.getResults }
                  })
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("MachinePop", {
        attrs: { id: "MachineSiteModal2", machine: _vm.pmModalData }
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Ticket Report")]),
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
        _c("th", [_vm._v("Ticket No ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine Far No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Site")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created By")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Expected date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Revised "), _c("br"), _vm._v(" Expected date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Resolution date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ticket Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Complaint Nature")]),
        _vm._v(" "),
        _c("th", [_vm._v("TAT")])
      ])
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Tickets/Report.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Tickets/Report.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Report.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Tickets/Report.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2336f9a9", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/js/components/Tickets/Report.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Tickets/Report.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Report_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Report.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Tickets/Report.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_e4e7eebe_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Report_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-e4e7eebe","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Report.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e4e7eebe\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Tickets/Report.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Report.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Tickets/Report.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Report_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_e4e7eebe_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Report_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_e4e7eebe_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Report_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\Tickets\\Report.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9SZXBvcnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvUmVwb3J0LnZ1ZT80NDY0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvUmVwb3J0LnZ1ZT85MmZlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvUmVwb3J0LnZ1ZT9iZGM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvUmVwb3J0LnZ1ZSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiVnVlVGFnc0lucHV0IiwiTXVsdGlSYW5nZVNsaWRlciIsIk1hY2hpbmVQb3AiLCJkYXRhIiwicG1Nb2RhbERhdGEiLCJjcmVhdGVkX3VzZXJzIiwic2VhcmNoX21hY2hpbmVzIiwic2VhcmNoX3NpdGVzIiwic2VhcmNoIiwicGFnZSIsIm1hY2hpbmVfaWQiLCJzaXRlX2lkIiwiY3JlYXRlZF9ieSIsImNyZWF0ZWRfZnJvbSIsImNyZWF0ZWRfdG8iLCJ0YXRfZnJvbSIsInRhdF90byIsImNvbG9yIiwidGlja2V0IiwiY2F0ZWdvcmllcyIsInN1Yl9jYXRlZ29yaWVzIiwic2l0ZXMiLCJzZWxlY3RlZF9tYWNoaW5lIiwidXNlcnMiLCJtYWNoaW5lcyIsIlRpY2tldHMiLCJqc29uX2ZpZWxkcyIsImpzb25fbWV0YSIsImtleSIsInZhbHVlIiwibWV0aG9kcyIsInZpZXdfc2l0ZV9kZXRhaWxzIiwiJCIsInJlc2V0X2ZpbHRlciIsIlVwZGF0ZVZhbHVlcyIsInN0YXJ0RG93bmxvYWQiLCJTd2FsIiwidGl0bGUiLCJodG1sIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJvbkJlZm9yZU9wZW4iLCJmaW5pc2hEb3dubG9hZCIsImdldExhYmVsIiwiZ2V0UmVzdWx0cyIsImF4aW9zIiwicGFyYW1zIiwibG9hZFRpY2tldHMiLCJjcmVhdGVkIiwiYmVmb3JlQ3JlYXRlIiwidGhlbiIsIndhdGNoIiwiaGFuZGxlciIsImRlZXAiLCJpbml0aWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkxzRDtBQUNJO0FBQ0U7QUFFVjtBQUNuQztFQUNmQTtJQUNBQztJQUNBQztJQUNBQztFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUdBQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBQyxZQUNBO1FBQ0FDO1FBQ0FDO01BQ0E7SUFHQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7TUFDQUM7SUFDQTtJQUNBQztNQUNBO1FBQ0F4QjtRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBZ0I7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBO01BQ0E7TUFFQTtJQUNBO0lBQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQUE7UUFDQUM7UUFDQUM7VUFDQUo7UUFDQTtNQUNBO0lBQ0E7SUFDQUs7TUFDQUw7SUFDQTtJQUlBTTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQUM7UUFD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Q0FBQyx5akJBQStQO0FBQ3pRO0FBQ0E7QUFDZ0g7QUFDYTtBQUM3SDtBQUMrVTtBQUMvVTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NHO0FBQ3RHLGdCQUFnQix5R0FBa0I7QUFDbEMsRUFBRSx5SEFBYztBQUNoQixFQUFFLGlPQUFjO0FBQ2hCLEVBQUUsME9BQXlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLEVBYVg7O0FBRVUsZ0ZBQWlCIiwiZmlsZSI6ImpzLzkuYnVuZGxlLjBkMTE1NTFmMzBhNGViNmIzZmIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+VGlja2V0IFJlcG9ydDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdG9vbHNcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVwib2ZmXCIgQHN1Ym1pdC5wcmV2ZW50PVwiZ2V0UmVzdWx0cygpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6Z2V0LW9wdGlvbi1sYWJlbD1cImdldExhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwic2VhcmNoX21hY2hpbmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBtYWNoaW5lcyAuLi5cIiB2LW1vZGVsPVwic2VhcmNoLm1hY2hpbmVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFjaGluZV9pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRpY2tldCAuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnRpY2tldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aWNrZXRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwic2l0ZV9uYW1lXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic2VhcmNoX3NpdGVzXCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgU2l0ZS4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2guc2l0ZV9pZFwiIG5hbWU9XCJzaXRlX2lkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpvcHRpb25zPVwiWydPcGVuJywgJ0Nsb3NlZCddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgU3RhdHVzLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5zdGF0dXNcIiBuYW1lPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6b3B0aW9ucz1cImNyZWF0ZWRfdXNlcnNcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDcmVhdGVkIGJ5Li4uXCIgdi1tb2RlbD1cInNlYXJjaC5jcmVhdGVkX2J5XCIgbmFtZT1cImNyZWF0ZWRfYnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiIDpvcHRpb25zPVwiWydSZWQnLCdTb2xpZCBSZWQnLCdZZWxsb3cnLCdHcmVlbiddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgQ29sb3IuLi5cIiB2LW1vZGVsPVwic2VhcmNoLmNvbG9yXCIgbmFtZT1cImNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMiBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdmFsdWUtem9uZT1cIkFzaWEvS29sa2F0YVwiIHYtbW9kZWw9XCJzZWFyY2guY3JlYXRlZF9mcm9tXCIgaW5wdXQtY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNyZWF0ZWQgZnJvbSBkYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMiBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdmFsdWUtem9uZT1cIkFzaWEvS29sa2F0YVwiIHYtbW9kZWw9XCJzZWFyY2guY3JlYXRlZF90b1wiIGlucHV0LWNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDcmVhdGVkIHRvIGRhdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTIgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpvcHRpb25zPVwiWydNYWpvcicsICdNaW5vciddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgQ29tcGxhaW50IE5hdHVyZS4uLlwiIHYtbW9kZWw9XCJzZWFyY2guY29tcGxhaW50X25hdHVyZVwiIG5hbWU9XCJjb21wbGFpbnRfbmF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtNCBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tICA8TXVsdGlSYW5nZVNsaWRlciBiYXNlQ2xhc3NOYW1lPVwibXVsdGktcmFuZ2Utc2xpZGVyXCIgOm1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWF4PVwiMTAwXCIgOnN0ZXA9XCI1XCIgOnJ1bGVyPVwidHJ1ZVwiIDpsYWJlbD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWluVmFsdWU9XCJzZWFyY2gudGF0X2Zyb21cIiA6bWF4VmFsdWU9XCJzZWFyY2gudGF0X3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiVXBkYXRlVmFsdWVzXCIgLz4gLS0+XG5cblxuXG4gIDxmaWVsZHNldCBzdHlsZT1cIm1heC13aWR0aDogNDAwcHg7IG1hcmdpbjogYXV0bzsgdGV4dC1hbGlnbjogbGVmdDsgIFwiPlxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHRleHQtYWxpZ246IGNlbnRlcjsgaGVpZ2h0OiAzOXB4O1wiPlxuICAgICAgPHNwYW5cbiAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAzcHg7XG5cbiAgICAgICAgXCJcbiAgICAgICAgPnt7IHNlYXJjaC50YXRfZnJvbSB9fTwvc3BhblxuICAgICAgPlxuICAgICAgPHNwYW4gc3R5bGU9XCJ0b3A6IDI1JTsgcG9zaXRpb246IHJlbGF0aXZlO1wiPlRBVDwvc3Bhbj5cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIG1hcmdpbjogM3B4O1xuICAgICAgICBcIlxuICAgICAgICA+e3sgc2VhcmNoLnRhdF90byB9fTwvc3BhblxuICAgICAgPlxuICAgIDwvZGl2PlxuXG4gICAgPGxhYmVsIGZvcj1cImN1c3RvbVJhbmdlMlwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkV4YW1wbGUgcmFuZ2U8L2xhYmVsPlxuPGlucHV0IHR5cGU9XCJyYW5nZVwiIGNsYXNzPVwiZm9ybS1yYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCI1XCIgaWQ9XCJjdXN0b21SYW5nZTJcIj5cblxuICAgIDxNdWx0aVJhbmdlU2xpZGVyXG4gICAgICBiYXNlQ2xhc3NOYW1lPVwibXVsdGktcmFuZ2Utc2xpZGVyLWJhci1vbmx5XCJcbiAgICAgIDptaW5WYWx1ZT1cInNlYXJjaC50YXRfZnJvbVwiXG4gICAgICA6bWF4VmFsdWU9XCIxMDAwXCJcbiAgICAgIDptYXg9XCIxMDBcIlxuICAgICAgOm1pbj1cIjBcIlxuICAgICAgOnN0ZXA9XCIxXCJcbiAgICAgIDpyYW5nZU1hcmdpbj1cIjBcIlxuICAgICAgQGlucHV0PVwiVXBkYXRlVmFsdWVzXCJcbiAgICAvPlxuICA8L2ZpZWxkc2V0PlxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4taW5mbyBtbC0yXCIgQGNsaWNrPVwicmVzZXRfZmlsdGVyKClcIj5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgdGFibGUtcmVzcG9uc2l2ZSBwLTAgdGlja2V0VGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRpY2tldCBObyA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYWNoaW5lIE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYWNoaW5lIEZhciBObzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNpdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DcmVhdGVkIEJ5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3JlYXRlZCBEYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXhwZWN0ZWQgZGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJldmlzZWQgPGJyPiBFeHBlY3RlZCBkYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVzb2x1dGlvbiBkYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IFN0YXR1czwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbXBsYWludCBOYXR1cmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UQVQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwidGlja2V0IGluIFRpY2tldHMuZGF0YVwiIDprZXk9XCJ0aWNrZXQuaWRcIiA6Y2xhc3M9XCJ0aWNrZXQucm93X2NvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC50aWNrZXRfbm8gfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2FwaXRhbGl6ZVwiPnt7IHRpY2tldC5tYWNoaW5lLm5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBAY2xpY2s9XCJ2aWV3X3NpdGVfZGV0YWlscyh0aWNrZXQubWFjaGluZSlcIj57eyB0aWNrZXQubWFjaGluZS5mYXJfbm8gfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnNpdGUgPyB0aWNrZXQuc2l0ZS5zaXRlX25hbWU6Jy0nIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYnlfbmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2F0IHwgbXlEYXRlIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lmxpa2VseV9kYXRlIHwgbXlEYXRlIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnJldmVyc2lvbl9kYXRlfG15RGF0ZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5hY3R1YWxfZGF0ZSAgIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7dGlja2V0LnN0YXR1cy50b0xvd2VyQ2FzZSgpPT0nY3JlYXRlZCBieSB1c2VyJz8nT3Blbic6dGlja2V0LnN0YXR1c319PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3t0aWNrZXQuY29tcGxhaW50X25hdHVyZX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3t0aWNrZXQuYWN0dWFsX2RhdGU/dGlja2V0LnRhdDonLSd9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWJvZHkgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6ZGF0YT1cIlRpY2tldHNcIiA6bGltaXQ9XCIxMFwiIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVwiZ2V0UmVzdWx0c1wiPjwvcGFnaW5hdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG5cblxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxNYWNoaW5lUG9wIGlkPVwiTWFjaGluZVNpdGVNb2RhbDJcIiA6bWFjaGluZT1cInBtTW9kYWxEYXRhXCIvPlxuXG4gICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNdWx0aVJhbmdlU2xpZGVyIGZyb20gXCJtdWx0aS1yYW5nZS1zbGlkZXItdnVlXCI7XG5pbXBvcnQgXCJtdWx0aS1yYW5nZS1zbGlkZXItdnVlL011bHRpUmFuZ2VTbGlkZXJCbGFjay5jc3NcIjtcbmltcG9ydCBcIm11bHRpLXJhbmdlLXNsaWRlci12dWUvTXVsdGlSYW5nZVNsaWRlckJhck9ubHkuY3NzXCI7XG5cbmltcG9ydCBWdWVUYWdzSW5wdXQgZnJvbSAnQGpvaG11bi92dWUtdGFncy1pbnB1dCc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBWdWVUYWdzSW5wdXQsXG4gICAgICAgIE11bHRpUmFuZ2VTbGlkZXIsXG4gICAgICAgIE1hY2hpbmVQb3A6ICgpID0+IGltcG9ydCgnLi4vTWFjaGluZUZhclBvcC52dWUnKSxcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwbU1vZGFsRGF0YTonJyxcbiAgICAgICAgICAgIGNyZWF0ZWRfdXNlcnM6IFtdLFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaF9zaXRlczogW10sXG4gICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYnk6ICcnLFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfZnJvbTogJycsXG4gICAgICAgICAgICAgICAgY3JlYXRlZF90bzogJycsXG4gICAgICAgICAgICAgICAgdGF0X2Zyb206IDAsXG4gICAgICAgICAgICAgICAgdGF0X3RvOiA5MCxcbiAgICAgICAgICAgICAgICBjb2xvcjonJyxcbiAgICAgICAgICAgICAgICB0aWNrZXQ6JydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdGVkX21hY2hpbmU6ICcnLFxuICAgICAgICAgICAgdXNlcnM6IFtdLFxuICAgICAgICAgICAgbWFjaGluZXM6IFtdLFxuICAgICAgICAgICAgVGlja2V0czoge30sXG5cblxuICAgICAgICAgICAganNvbl9maWVsZHM6IHtcbiAgICAgICAgICAgICAgICAnVGlja2V0IG5vJzogJ3RpY2tldF9ubycsXG4gICAgICAgICAgICAgICAgJ0xhc3QgTmFtZSc6ICdsYXN0X25hbWUnLFxuICAgICAgICAgICAgICAgICdFbWFpbCc6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgJ1R5cGUnOiAndHlwZScsXG4gICAgICAgICAgICAgICAgJ0NvdW50cnkgQ29kZSc6ICdjb3VudHJ5X2NvZGUnLFxuICAgICAgICAgICAgICAgICdQaG9uZSBOdW1iZXInOiAncGhvbmVfbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAnVlNEIElEJzogJ3ZzZF9pZCcsXG4gICAgICAgICAgICAgICAgJ0xpY2Vuc2UgTnVtYmVyJzogJ2xpY2Vuc2VfbnVtYmVyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBqc29uX21ldGE6IFtcbiAgICAgICAgICAgICAgICBbe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2hhcnNldFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ1dGYtOFwiLFxuICAgICAgICAgICAgICAgIH0sXSxcbiAgICAgICAgICAgIF0sXG5cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB2aWV3X3NpdGVfZGV0YWlscyhkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnBtTW9kYWxEYXRhID0gZGF0YVxuICAgICAgICAgICAgJCgnI01hY2hpbmVTaXRlTW9kYWwyJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXRfZmlsdGVyKCl7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaD0ge1xuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9ieTogJycsXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9mcm9tOiAnJyxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX3RvOiAnJyxcbiAgICAgICAgICAgICAgICB0YXRfZnJvbTogMCxcbiAgICAgICAgICAgICAgICB0YXRfdG86IDkwLFxuICAgICAgICAgICAgICAgIGNvbG9yOicnLFxuICAgICAgICAgICAgICAgIHRpY2tldDonJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nZXRSZXN1bHRzKClcbiAgICAgICAgfSxcbiAgICAgICAgVXBkYXRlVmFsdWVzKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRhdF9mcm9tID0gZS5taW5WYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRhdF90byA9IGUubWF4VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGV4Y2VsXG4gICAgICAgIGFzeW5jIGV4cG9ydF9jc3YoKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnYXBpL3RpY2tldC9leHBvcnQnKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnREb3dubG9hZCgpIHtcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQbGVhc2UgV2FpdCAhJyxcbiAgICAgICAgICAgICAgICBodG1sOiAnRGF0YSBwb3B1bGF0aW5nJywgLy8gYWRkIGh0bWwgYXR0cmlidXRlIGlmIHlvdSB3YW50IG9yIHJlbW92ZVxuICAgICAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkJlZm9yZU9wZW46ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5zaG93TG9hZGluZygpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBmaW5pc2hEb3dubG9hZCgpIHtcbiAgICAgICAgICAgIFN3YWwuY2xvc2UoKVxuICAgICAgICB9LFxuXG5cblxuICAgICAgICBnZXRMYWJlbCh2YWwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZmFyX25vICsgJyAtICcgKyB2YWwubmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmVzdWx0cyhwYWdlID0gMSkge1xuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnBhZ2UgPSBwYWdlXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGlja2V0Jywge1xuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcbiAgICAgICAgICAgIH0pLnRoZW4oKHtcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICB9KSA9PiAodGhpcy5UaWNrZXRzID0gZGF0YS5kYXRhKSk7XG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFRpY2tldHMoKSB7XG5cbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCIvYXBpL3RpY2tldFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcbiAgICAgICAgICAgICAgICB9KS50aGVuKCh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICB9KSA9PiAodGhpcy5UaWNrZXRzID0gZGF0YS5kYXRhKSk7XG5cbiAgICAgICAgfSxcblxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkVGlja2V0cygpO1xuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICBheGlvcy5nZXQoXCJhcGkvZ2V0X3ByZV9tYWNoaW5lXCIpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5DYXRlZ29yeTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpdGVzID0gcmVzLmRhdGEuZGF0YS5zaXRlcztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIGF4aW9zLmdldChcIi9hcGkvaW5pdGlhbF90aWNrZXRcIikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnZlbmRvcnM7XG4gICAgICAgICAgICB0aGlzLm1hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zaXRlcztcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlZF91c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5jcmVhdGVkX3VzZXJzO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oJ09oLiBTb21ldGhpbmcgd2VudCB3cm9uZycpKTtcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGFzeW5jICdmb3JtLnN1Yl9jYXRlZ29yeV9pZCcobiwgbykge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc2l0ZV9pZCcobiwgbykge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAnZm9ybS5jYXRlZ29yeV9pZCc6IHtcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuLCBvKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvY2F0ZWdvcnkvXCIgKyBuKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgICAgICBpbml0aWFsOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICB9LFxufVxuPC9zY3JpcHQ+XG48c3R5bGU+XG4uYmctcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTU2MyAhaW1wb3J0YW50O1xufVxuLmJnLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwZWQ3MCAhaW1wb3J0YW50O1xufVxuLmJnLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWM4NGMgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJnLXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1NTYzICFpbXBvcnRhbnQ7XFxufVxcbi5iZy1ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBlZDcwICFpbXBvcnRhbnQ7XFxufVxcbi5iZy15ZWxsb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYzg0YyAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiRjovd2FtcDY0L3d3dy9ybW0vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9UaWNrZXRzL1JlcG9ydC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQThXQTtFQUNBLHFDQUFBO0NBQ0E7QUFDQTtFQUNBLHFDQUFBO0NBQ0E7QUFDQTtFQUNBLHFDQUFBO0NBQ0FcIixcImZpbGVcIjpcIlJlcG9ydC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlRpY2tldCBSZXBvcnQ8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXRvb2xzXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHAtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBAc3VibWl0LnByZXZlbnQ9XFxcImdldFJlc3VsdHMoKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLXJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGNvbC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJuYW1lXFxcIiA6Z2V0LW9wdGlvbi1sYWJlbD1cXFwiZ2V0TGFiZWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiIDpvcHRpb25zPVxcXCJzZWFyY2hfbWFjaGluZXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgbWFjaGluZXMgLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2gubWFjaGluZV9pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcIm1hY2hpbmVfaWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgdGlja2V0IC4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnRpY2tldFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInRpY2tldFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGNvbC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJzaXRlX25hbWVcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVxcXCJzZWFyY2hfc2l0ZXNcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWxlY3QgU2l0ZS4uLlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInNlYXJjaC5zaXRlX2lkXFxcIiBuYW1lPVxcXCJzaXRlX2lkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInNpdGVfbmFtZVxcXCIgOm9wdGlvbnM9XFxcIlsnT3BlbicsICdDbG9zZWQnXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTZWxlY3QgU3RhdHVzLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guc3RhdHVzXFxcIiBuYW1lPVxcXCJzdGF0dXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOm9wdGlvbnM9XFxcImNyZWF0ZWRfdXNlcnNcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJDcmVhdGVkIGJ5Li4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guY3JlYXRlZF9ieVxcXCIgbmFtZT1cXFwiY3JlYXRlZF9ieVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGNvbC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJuYW1lXFxcIiA6b3B0aW9ucz1cXFwiWydSZWQnLCdTb2xpZCBSZWQnLCdZZWxsb3cnLCdHcmVlbiddXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNob29zZSBDb2xvci4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmNvbG9yXFxcIiBuYW1lPVxcXCJjb2xvclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGNvbC0yIHB0LTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVxcXCJBc2lhL0tvbGthdGFcXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5jcmVhdGVkX2Zyb21cXFwiIGlucHV0LWNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJDcmVhdGVkIGZyb20gZGF0ZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTIgcHQtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XFxcIkFzaWEvS29sa2F0YVxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmNyZWF0ZWRfdG9cXFwiIGlucHV0LWNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJDcmVhdGVkIHRvIGRhdGVcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTIgcHQtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwic2l0ZV9uYW1lXFxcIiA6b3B0aW9ucz1cXFwiWydNYWpvcicsICdNaW5vciddXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlNlbGVjdCBDb21wbGFpbnQgTmF0dXJlLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guY29tcGxhaW50X25hdHVyZVxcXCIgbmFtZT1cXFwiY29tcGxhaW50X25hdHVyZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGNvbC00IHB0LTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gIDxNdWx0aVJhbmdlU2xpZGVyIGJhc2VDbGFzc05hbWU9XFxcIm11bHRpLXJhbmdlLXNsaWRlclxcXCIgOm1pbj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptYXg9XFxcIjEwMFxcXCIgOnN0ZXA9XFxcIjVcXFwiIDpydWxlcj1cXFwidHJ1ZVxcXCIgOmxhYmVsPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1pblZhbHVlPVxcXCJzZWFyY2gudGF0X2Zyb21cXFwiIDptYXhWYWx1ZT1cXFwic2VhcmNoLnRhdF90b1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cXFwiVXBkYXRlVmFsdWVzXFxcIiAvPiAtLT5cXG5cXG5cXG5cXG4gIDxmaWVsZHNldCBzdHlsZT1cXFwibWF4LXdpZHRoOiA0MDBweDsgbWFyZ2luOiBhdXRvOyB0ZXh0LWFsaWduOiBsZWZ0OyAgXFxcIj5cXG4gICAgPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGhlaWdodDogMzlweDtcXFwiPlxcbiAgICAgIDxzcGFuXFxuICAgICAgICBzdHlsZT1cXFwiXFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICAgIG1hcmdpbjogM3B4O1xcblxcbiAgICAgICAgXFxcIlxcbiAgICAgICAgPnt7IHNlYXJjaC50YXRfZnJvbSB9fTwvc3BhblxcbiAgICAgID5cXG4gICAgICA8c3BhbiBzdHlsZT1cXFwidG9wOiAyNSU7IHBvc2l0aW9uOiByZWxhdGl2ZTtcXFwiPlRBVDwvc3Bhbj5cXG4gICAgICA8c3BhblxcbiAgICAgICAgc3R5bGU9XFxcIlxcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgICBtYXJnaW46IDNweDtcXG4gICAgICAgIFxcXCJcXG4gICAgICAgID57eyBzZWFyY2gudGF0X3RvIH19PC9zcGFuXFxuICAgICAgPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGxhYmVsIGZvcj1cXFwiY3VzdG9tUmFuZ2UyXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+RXhhbXBsZSByYW5nZTwvbGFiZWw+XFxuPGlucHV0IHR5cGU9XFxcInJhbmdlXFxcIiBjbGFzcz1cXFwiZm9ybS1yYW5nZVxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjVcXFwiIGlkPVxcXCJjdXN0b21SYW5nZTJcXFwiPlxcblxcbiAgICA8TXVsdGlSYW5nZVNsaWRlclxcbiAgICAgIGJhc2VDbGFzc05hbWU9XFxcIm11bHRpLXJhbmdlLXNsaWRlci1iYXItb25seVxcXCJcXG4gICAgICA6bWluVmFsdWU9XFxcInNlYXJjaC50YXRfZnJvbVxcXCJcXG4gICAgICA6bWF4VmFsdWU9XFxcIjEwMDBcXFwiXFxuICAgICAgOm1heD1cXFwiMTAwXFxcIlxcbiAgICAgIDptaW49XFxcIjBcXFwiXFxuICAgICAgOnN0ZXA9XFxcIjFcXFwiXFxuICAgICAgOnJhbmdlTWFyZ2luPVxcXCIwXFxcIlxcbiAgICAgIEBpbnB1dD1cXFwiVXBkYXRlVmFsdWVzXFxcIlxcbiAgICAvPlxcbiAgPC9maWVsZHNldD5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgcHQtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPlNlYXJjaDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIG1sLTJcXFwiIEBjbGljaz1cXFwicmVzZXRfZmlsdGVyKClcXFwiPlJlc2V0PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtaGVhZGVyIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMCB0aWNrZXRUYWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtaG92ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRpY2tldCBObyA8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWFjaGluZSBOYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hY2hpbmUgRmFyIE5vPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNpdGU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3JlYXRlZCBCeTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DcmVhdGVkIERhdGU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXhwZWN0ZWQgZGF0ZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXZpc2VkIDxicj4gRXhwZWN0ZWQgZGF0ZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXNvbHV0aW9uIGRhdGU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IFN0YXR1czwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db21wbGFpbnQgTmF0dXJlPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRBVDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCJ0aWNrZXQgaW4gVGlja2V0cy5kYXRhXFxcIiA6a2V5PVxcXCJ0aWNrZXQuaWRcXFwiIDpjbGFzcz1cXFwidGlja2V0LnJvd19jb2xvclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQudGlja2V0X25vIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LWNhcGl0YWxpemVcXFwiPnt7IHRpY2tldC5tYWNoaW5lLm5hbWUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgQGNsaWNrPVxcXCJ2aWV3X3NpdGVfZGV0YWlscyh0aWNrZXQubWFjaGluZSlcXFwiPnt7IHRpY2tldC5tYWNoaW5lLmZhcl9ubyB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnNpdGUgPyB0aWNrZXQuc2l0ZS5zaXRlX25hbWU6Jy0nIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2J5X25hbWUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYXQgfCBteURhdGUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lmxpa2VseV9kYXRlIHwgbXlEYXRlIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5yZXZlcnNpb25fZGF0ZXxteURhdGUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmFjdHVhbF9kYXRlICAgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7dGlja2V0LnN0YXR1cy50b0xvd2VyQ2FzZSgpPT0nY3JlYXRlZCBieSB1c2VyJz8nT3Blbic6dGlja2V0LnN0YXR1c319PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7dGlja2V0LmNvbXBsYWludF9uYXR1cmV9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3RpY2tldC5hY3R1YWxfZGF0ZT90aWNrZXQudGF0OictJ319PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1ib2R5IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhZ2luYXRpb24gOmRhdGE9XFxcIlRpY2tldHNcXFwiIDpsaW1pdD1cXFwiMTBcXFwiIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVxcXCJnZXRSZXN1bHRzXFxcIj48L3BhZ2luYXRpb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG5cXG5cXG5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPE1hY2hpbmVQb3AgaWQ9XFxcIk1hY2hpbmVTaXRlTW9kYWwyXFxcIiA6bWFjaGluZT1cXFwicG1Nb2RhbERhdGFcXFwiLz5cXG5cXG4gICAgPC9zZWN0aW9uPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgTXVsdGlSYW5nZVNsaWRlciBmcm9tIFxcXCJtdWx0aS1yYW5nZS1zbGlkZXItdnVlXFxcIjtcXG5pbXBvcnQgXFxcIm11bHRpLXJhbmdlLXNsaWRlci12dWUvTXVsdGlSYW5nZVNsaWRlckJsYWNrLmNzc1xcXCI7XFxuaW1wb3J0IFxcXCJtdWx0aS1yYW5nZS1zbGlkZXItdnVlL011bHRpUmFuZ2VTbGlkZXJCYXJPbmx5LmNzc1xcXCI7XFxuXFxuaW1wb3J0IFZ1ZVRhZ3NJbnB1dCBmcm9tICdAam9obXVuL3Z1ZS10YWdzLWlucHV0JztcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgIFZ1ZVRhZ3NJbnB1dCxcXG4gICAgICAgIE11bHRpUmFuZ2VTbGlkZXIsXFxuICAgICAgICBNYWNoaW5lUG9wOiAoKSA9PiBpbXBvcnQoJy4uL01hY2hpbmVGYXJQb3AudnVlJyksXFxuICAgIH0sXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIHBtTW9kYWxEYXRhOicnLFxcbiAgICAgICAgICAgIGNyZWF0ZWRfdXNlcnM6IFtdLFxcbiAgICAgICAgICAgIHNlYXJjaF9tYWNoaW5lczogW10sXFxuICAgICAgICAgICAgc2VhcmNoX3NpdGVzOiBbXSxcXG4gICAgICAgICAgICBzZWFyY2g6IHtcXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2J5OiAnJyxcXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9mcm9tOiAnJyxcXG4gICAgICAgICAgICAgICAgY3JlYXRlZF90bzogJycsXFxuICAgICAgICAgICAgICAgIHRhdF9mcm9tOiAwLFxcbiAgICAgICAgICAgICAgICB0YXRfdG86IDkwLFxcbiAgICAgICAgICAgICAgICBjb2xvcjonJyxcXG4gICAgICAgICAgICAgICAgdGlja2V0OicnXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXFxuICAgICAgICAgICAgc2l0ZXM6IFtdLFxcbiAgICAgICAgICAgIHNlbGVjdGVkX21hY2hpbmU6ICcnLFxcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXFxuICAgICAgICAgICAgVGlja2V0czoge30sXFxuXFxuXFxuICAgICAgICAgICAganNvbl9maWVsZHM6IHtcXG4gICAgICAgICAgICAgICAgJ1RpY2tldCBubyc6ICd0aWNrZXRfbm8nLFxcbiAgICAgICAgICAgICAgICAnTGFzdCBOYW1lJzogJ2xhc3RfbmFtZScsXFxuICAgICAgICAgICAgICAgICdFbWFpbCc6ICdlbWFpbCcsXFxuICAgICAgICAgICAgICAgICdUeXBlJzogJ3R5cGUnLFxcbiAgICAgICAgICAgICAgICAnQ291bnRyeSBDb2RlJzogJ2NvdW50cnlfY29kZScsXFxuICAgICAgICAgICAgICAgICdQaG9uZSBOdW1iZXInOiAncGhvbmVfbnVtYmVyJyxcXG4gICAgICAgICAgICAgICAgJ1ZTRCBJRCc6ICd2c2RfaWQnLFxcbiAgICAgICAgICAgICAgICAnTGljZW5zZSBOdW1iZXInOiAnbGljZW5zZV9udW1iZXInLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAganNvbl9tZXRhOiBbXFxuICAgICAgICAgICAgICAgIFt7XFxuICAgICAgICAgICAgICAgICAgICBrZXk6IFxcXCJjaGFyc2V0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcXFwidXRmLThcXFwiLFxcbiAgICAgICAgICAgICAgICB9LF0sXFxuICAgICAgICAgICAgXSxcXG5cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgdmlld19zaXRlX2RldGFpbHMoZGF0YSkge1xcbiAgICAgICAgICAgIHRoaXMucG1Nb2RhbERhdGEgPSBkYXRhXFxuICAgICAgICAgICAgJCgnI01hY2hpbmVTaXRlTW9kYWwyJykubW9kYWwoJ3Nob3cnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICByZXNldF9maWx0ZXIoKXtcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaD0ge1xcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYnk6ICcnLFxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2Zyb206ICcnLFxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX3RvOiAnJyxcXG4gICAgICAgICAgICAgICAgdGF0X2Zyb206IDAsXFxuICAgICAgICAgICAgICAgIHRhdF90bzogOTAsXFxuICAgICAgICAgICAgICAgIGNvbG9yOicnLFxcbiAgICAgICAgICAgICAgICB0aWNrZXQ6JydcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgdGhpcy5nZXRSZXN1bHRzKClcXG4gICAgICAgIH0sXFxuICAgICAgICBVcGRhdGVWYWx1ZXMoZSkge1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRhdF9mcm9tID0gZS5taW5WYWx1ZTtcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50YXRfdG8gPSBlLm1heFZhbHVlO1xcbiAgICAgICAgfSxcXG4gICAgICAgIC8vIGV4Y2VsXFxuICAgICAgICBhc3luYyBleHBvcnRfY3N2KCkge1xcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdhcGkvdGlja2V0L2V4cG9ydCcpO1xcblxcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XFxuICAgICAgICB9LFxcbiAgICAgICAgc3RhcnREb3dubG9hZCgpIHtcXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBXYWl0ICEnLFxcbiAgICAgICAgICAgICAgICBodG1sOiAnRGF0YSBwb3B1bGF0aW5nJywgLy8gYWRkIGh0bWwgYXR0cmlidXRlIGlmIHlvdSB3YW50IG9yIHJlbW92ZVxcbiAgICAgICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogZmFsc2UsXFxuICAgICAgICAgICAgICAgIG9uQmVmb3JlT3BlbjogKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5zaG93TG9hZGluZygpXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZmluaXNoRG93bmxvYWQoKSB7XFxuICAgICAgICAgICAgU3dhbC5jbG9zZSgpXFxuICAgICAgICB9LFxcblxcblxcblxcbiAgICAgICAgZ2V0TGFiZWwodmFsKSB7XFxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZmFyX25vICsgJyAtICcgKyB2YWwubmFtZTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBnZXRSZXN1bHRzKHBhZ2UgPSAxKSB7XFxuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5wYWdlID0gcGFnZVxcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90aWNrZXQnLCB7XFxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcXG4gICAgICAgICAgICB9KS50aGVuKCh7XFxuICAgICAgICAgICAgICAgIGRhdGFcXG4gICAgICAgICAgICB9KSA9PiAodGhpcy5UaWNrZXRzID0gZGF0YS5kYXRhKSk7XFxuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgbG9hZFRpY2tldHMoKSB7XFxuXFxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChcXFwiL2FwaS90aWNrZXRcXFwiLCB7XFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMuc2VhcmNoXFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHtcXG4gICAgICAgICAgICAgICAgICAgIGRhdGFcXG4gICAgICAgICAgICAgICAgfSkgPT4gKHRoaXMuVGlja2V0cyA9IGRhdGEuZGF0YSkpO1xcblxcbiAgICAgICAgfSxcXG5cXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcXG4gICAgfSxcXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xcbiAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvZ2V0X3ByZV9tYWNoaW5lXFxcIilcXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuQ2F0ZWdvcnk7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xcbiAgICAgICAgICAgIH0pXFxuICAgICAgICBheGlvcy5nZXQoXFxcIi9hcGkvaW5pdGlhbF90aWNrZXRcXFwiKS50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnZlbmRvcnM7XFxuICAgICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zaXRlcztcXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWRfdXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEuY3JlYXRlZF91c2VycztcXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybignT2guIFNvbWV0aGluZyB3ZW50IHdyb25nJykpO1xcbiAgICB9LFxcbiAgICB3YXRjaDoge1xcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc3ViX2NhdGVnb3J5X2lkJyhuLCBvKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGFzeW5jICdmb3JtLnNpdGVfaWQnKG4sIG8pIHtcXG4gICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgJ2Zvcm0uY2F0ZWdvcnlfaWQnOiB7XFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcXG5cXG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldChcXFwiYXBpL2NhdGVnb3J5L1xcXCIgKyBuKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWVcXG4gICAgICAgIH0sXFxuXFxuICAgIH0sXFxufVxcbjwvc2NyaXB0PlxcbjxzdHlsZT5cXG4uYmctcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjU1NjMgIWltcG9ydGFudDtcXG59XFxuLmJnLWdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MGVkNzAgIWltcG9ydGFudDtcXG59XFxuLmJnLXllbGxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjODRjICFpbXBvcnRhbnQ7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgcC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGF1dG9jb21wbGV0ZTogXCJvZmZcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRSZXN1bHRzKClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXQtb3B0aW9uLWxhYmVsXCI6IF92bS5nZXRMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2VhcmNoX21hY2hpbmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgbWFjaGluZXMgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hY2hpbmVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLm1hY2hpbmVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwibWFjaGluZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gubWFjaGluZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gudGlja2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gudGlja2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIHRpY2tldCAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRpY2tldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VhcmNoLnRpY2tldCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpY2tldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2l0ZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnNlYXJjaF9zaXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBTaXRlLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNpdGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnNpdGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwic2l0ZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guc2l0ZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2l0ZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJPcGVuXCIsIFwiQ2xvc2VkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IFN0YXR1cy4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJzdGF0dXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmNyZWF0ZWRfdXNlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ3JlYXRlZCBieS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjcmVhdGVkX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5jcmVhdGVkX2J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImNyZWF0ZWRfYnlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmNyZWF0ZWRfYnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcIlJlZFwiLCBcIlNvbGlkIFJlZFwiLCBcIlllbGxvd1wiLCBcIkdyZWVuXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIENvbG9yLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJjb2xvclwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0yIHB0LTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRhdGV0aW1lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS16b25lXCI6IFwiQXNpYS9Lb2xrYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDcmVhdGVkIGZyb20gZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guY3JlYXRlZF9mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImNyZWF0ZWRfZnJvbVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guY3JlYXRlZF9mcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMiBwdC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkYXRldGltZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWUtem9uZVwiOiBcIkFzaWEvS29sa2F0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ3JlYXRlZCB0byBkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5jcmVhdGVkX3RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImNyZWF0ZWRfdG9cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmNyZWF0ZWRfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0yIHB0LTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2l0ZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJNYWpvclwiLCBcIk1pbm9yXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IENvbXBsYWludCBOYXR1cmUuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY29tcGxhaW50X25hdHVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guY29tcGxhaW50X25hdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJjb21wbGFpbnRfbmF0dXJlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jb21wbGFpbnRfbmF0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtNCBwdC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmllbGRzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjQwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwianVzdGlmeS1jb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzOXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkIDFweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjNweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc2VhcmNoLnRhdF9mcm9tKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlRBVFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkIDFweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjNweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc2VhcmNoLnRhdF90bykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJjdXN0b21SYW5nZTJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkV4YW1wbGUgcmFuZ2VcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJjdXN0b21SYW5nZTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJNdWx0aVJhbmdlU2xpZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDbGFzc05hbWU6IFwibXVsdGktcmFuZ2Utc2xpZGVyLWJhci1vbmx5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblZhbHVlOiBfdm0uc2VhcmNoLnRhdF9mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZTogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VNYXJnaW46IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBpbnB1dDogX3ZtLlVwZGF0ZVZhbHVlcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgcHQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWFyY2hcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvIG1sLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXNldF9maWx0ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlc2V0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMCB0aWNrZXRUYWJsZVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLlRpY2tldHMuZGF0YSwgZnVuY3Rpb24odGlja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHRpY2tldC5pZCwgY2xhc3M6IHRpY2tldC5yb3dfY29sb3IgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0LnRpY2tldF9ubykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jYXBpdGFsaXplXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0aWNrZXQubWFjaGluZS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmlld19zaXRlX2RldGFpbHModGlja2V0Lm1hY2hpbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGlja2V0Lm1hY2hpbmUuZmFyX25vKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LnNpdGUgPyB0aWNrZXQuc2l0ZS5zaXRlX25hbWUgOiBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC5jcmVhdGVkX2J5X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX2YoXCJteURhdGVcIikodGlja2V0LmNyZWF0ZWRfYXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX2YoXCJteURhdGVcIikodGlja2V0Lmxpa2VseV9kYXRlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9mKFwibXlEYXRlXCIpKHRpY2tldC5yZXZlcnNpb25fZGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC5hY3R1YWxfZGF0ZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5zdGF0dXMudG9Mb3dlckNhc2UoKSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkIGJ5IHVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aWNrZXQuc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0LmNvbXBsYWludF9uYXR1cmUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aWNrZXQuYWN0dWFsX2RhdGUgPyB0aWNrZXQudGF0IDogXCItXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvb3RlclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLlRpY2tldHMsIGxpbWl0OiAxMCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBcInBhZ2luYXRpb24tY2hhbmdlLXBhZ2VcIjogX3ZtLmdldFJlc3VsdHMgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJNYWNoaW5lUG9wXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwiTWFjaGluZVNpdGVNb2RhbDJcIiwgbWFjaGluZTogX3ZtLnBtTW9kYWxEYXRhIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtfdm0uX3YoXCJUaWNrZXQgUmVwb3J0XCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRvb2xzXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUaWNrZXQgTm8gXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1hY2hpbmUgTmFtZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJNYWNoaW5lIEZhciBOb1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTaXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkNyZWF0ZWQgQnlcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3JlYXRlZCBEYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkV4cGVjdGVkIGRhdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUmV2aXNlZCBcIiksIF9jKFwiYnJcIiksIF92bS5fdihcIiBFeHBlY3RlZCBkYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJlc29sdXRpb24gZGF0ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUaWNrZXQgU3RhdHVzXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkNvbXBsYWludCBOYXR1cmVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVEFUXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWU0ZTdlZWJlXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZXBvcnQudnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjIzMzZmOWE5XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1JlcG9ydC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZXBvcnQudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZXBvcnQudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1JlcG9ydC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1JlcG9ydC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZTRlN2VlYmVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUmVwb3J0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXFRpY2tldHNcXFxcUmVwb3J0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1lNGU3ZWViZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWU0ZTdlZWJlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=