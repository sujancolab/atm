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
exports.push([module.i, "\n.bg-red {\n  background-color: #ef5563 !important;\n}\n.bg-green {\n  background-color: #70ed70 !important;\n}\n.bg-yellow {\n  background-color: #f1c84c !important;\n}\n", "", {"version":3,"sources":["F:/wamp64/www/rmm/resources/js/components/Tickets/resources/js/components/Tickets/Report.vue"],"names":[],"mappings":";AA2WA;EACA,qCAAA;CACA;AACA;EACA,qCAAA;CACA;AACA;EACA,qCAAA;CACA","file":"Report.vue","sourcesContent":["<template>\n    <section class=\"content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n\n                <div class=\"col-12\">\n\n                    <div class=\"card\" >\n                        <div class=\"card-header\">\n                            <h3 class=\"card-title\">Ticket Report</h3>\n                            <div class=\"card-tools\">\n\n                            </div>\n                        </div>\n\n                        <div class=\"card-body p-2\">\n                            <form autocomplete=\"off\" @submit.prevent=\"getResults()\">\n                                <div class=\"form-row\">\n                                    <div class=\"col col-2\">\n                                        <v-select label=\"name\" :get-option-label=\"getLabel\"\n                                            :reduce=\"(option) => option.id\" :options=\"search_machines\"\n                                            placeholder=\"Enter machines ...\" v-model=\"search.machine_id\"\n                                            name=\"machine_id\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col col-2\">\n                                        <input type=\"text\" placeholder=\"Enter ticket ...\" v-model=\"search.ticket\"\n                                            name=\"ticket\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"col col-2\">\n                                        <v-select label=\"site_name\" :reduce=\"(option) => option.id\"\n                                            :options=\"search_sites\" placeholder=\"Select Site...\"\n                                            v-model=\"search.site_id\" name=\"site_id\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col col-2\">\n                                        <v-select label=\"site_name\" :options=\"['Open', 'Closed']\"\n                                            placeholder=\"Select Status...\" v-model=\"search.status\" name=\"status\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col col-2\">\n                                        <v-select label=\"name\" :options=\"created_users\" :reduce=\"(option) => option.id\"\n                                            placeholder=\"Created by...\" v-model=\"search.created_by\" name=\"created_by\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col col-2\">\n                                        <v-select label=\"name\" :options=\"['Red','Solid Red','Yellow','Green']\"\n                                            placeholder=\"Choose Color...\" v-model=\"search.color\" name=\"color\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col col-2 pt-2\">\n                                       <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.created_from\" input-class=\"form-control\" placeholder=\"Created from date\" />\n                                    </div>\n                                    <div class=\"col col-2 pt-2\">\n                                       <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.created_to\" input-class=\"form-control\" placeholder=\"Created to date\"/>\n                                    </div>\n                                    <div class=\"col col-2 pt-2\">\n                                        <v-select label=\"site_name\" :options=\"['Major', 'Minor']\"\n                                            placeholder=\"Select Complaint Nature...\" v-model=\"search.complaint_nature\" name=\"complaint_nature\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col col-4 pt-2\">\n                                       <!--  <MultiRangeSlider baseClassName=\"multi-range-slider\" :min=\"0\"\n                                            :max=\"100\" :step=\"5\" :ruler=\"true\" :label=\"true\"\n                                            :minValue=\"search.tat_from\" :maxValue=\"search.tat_to\"\n                                            @input=\"UpdateValues\" /> -->\n\n\n\n  <fieldset style=\"max-width: 400px; margin: auto; text-align: left;  \">\n    <div style=\"display: flex; justify-content: space-between; text-align: center; height: 39px;\">\n      <span\n        style=\"\n          display: inline-block;\n          padding: 5px;\n          border: solid 1px;\n          border-radius: 5px;\n          width: 100px;\n          margin: 3px;\n\n        \"\n        >{{ search.tat_from }}</span\n      >\n      <span style=\"top: 25%; position: relative;\">TAT</span>\n      <span\n        style=\"\n          display: inline-block;\n          padding: 5px;\n          border: solid 1px;\n          border-radius: 5px;\n          width: 100px;\n          margin: 3px;\n        \"\n        >{{ search.tat_to }}</span\n      >\n    </div>\n\n    <MultiRangeSlider\n      baseClassName=\"multi-range-slider-bar-only\"\n      :minValue=\"search.tat_from\"\n      :maxValue=\"search.tat_to\"\n      :max=\"100\"\n      :min=\"0\"\n      :step=\"1\"\n      :rangeMargin=\"0\"\n      @input=\"UpdateValues\"\n    />\n  </fieldset>\n\n\n\n\n\n\n\n\n\n                                    </div>\n                                    <div class=\"col pt-2\">\n                                    <button type=\"submit\" class=\"btn btn-success\">Search</button>\n                                    <button type=\"button\" class=\"btn btn-info ml-2\" @click=\"reset_filter()\">Reset</button>\n                                </div>\n                                </div>\n                            </form>\n                        </div>\n\n                        <!-- /.card-header -->\n                        <div class=\"card-body table-responsive p-0 ticketTable\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th>Ticket No </th>\n                                        <th>Machine Name</th>\n                                        <th>Machine Far No</th>\n                                        <th>Site</th>\n                                        <th>Created By</th>\n                                        <th>Created Date</th>\n                                        <th>Expected date</th>\n                                        <th>Revised <br> Expected date</th>\n                                        <th>Resolution date</th>\n                                        <th>Ticket Status</th>\n                                        <th>Complaint Nature</th>\n                                        <th>TAT</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr v-for=\"ticket in Tickets.data\" :key=\"ticket.id\" :class=\"ticket.row_color\">\n                                        <td>{{ ticket.ticket_no }}</td>\n                                        <td class=\"text-capitalize\">{{ ticket.machine.name }}</td>\n                                        <td @click=\"view_site_details(ticket.machine)\">{{ ticket.machine.far_no }}</td>\n                                         <td>{{ ticket.site ? ticket.site.site_name:'-' }}</td>\n                                        <td>{{ ticket.created_by_name }}</td>\n                                        <td>{{ ticket.created_at | myDate }}</td>\n                                        <td>{{ ticket.likely_date | myDate }}</td>\n                                        <td>{{ ticket.reversion_date|myDate }}</td>\n                                        <td>{{ ticket.actual_date   }}</td>\n                                        <td >{{ticket.status.toLowerCase()=='created by user'?'Open':ticket.status}}</td>\n                                        <td>{{ticket.complaint_nature}}</td>\n                                        <td>{{ticket.actual_date?ticket.tat:'-'}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <!-- /.card-body -->\n                        <div class=\"card-footer\">\n                            <pagination :data=\"Tickets\" :limit=\"10\" @pagination-change-page=\"getResults\" :limit=\"5\"></pagination>\n                        </div>\n                    </div>\n                    <!-- /.card -->\n                </div>\n            </div>\n\n\n\n\n\n        </div>\n\n        <MachinePop id=\"MachineSiteModal2\" :machine=\"pmModalData\"/>\n\n    </section>\n</template>\n\n<script>\nimport MultiRangeSlider from \"multi-range-slider-vue\";\nimport \"multi-range-slider-vue/MultiRangeSliderBlack.css\";\nimport \"multi-range-slider-vue/MultiRangeSliderBarOnly.css\";\n\nimport VueTagsInput from '@johmun/vue-tags-input';\nexport default {\n    components: {\n        VueTagsInput,\n        MultiRangeSlider,\n        MachinePop: () => import('../MachineFarPop.vue'),\n    },\n    data() {\n        return {\n            pmModalData:'',\n            created_users: [],\n            search_machines: [],\n            search_sites: [],\n            search: {\n                page: 1,\n                machine_id: '',\n                site_id: '',\n                created_by: '',\n                created_from: '',\n                created_to: '',\n                tat_from: 0,\n                tat_to: 90,\n                color:'',\n                ticket:''\n            },\n            categories: [],\n            sub_categories: [],\n            sites: [],\n            selected_machine: '',\n            users: [],\n            machines: [],\n            Tickets: {},\n\n\n            json_fields: {\n                'Ticket no': 'ticket_no',\n                'Last Name': 'last_name',\n                'Email': 'email',\n                'Type': 'type',\n                'Country Code': 'country_code',\n                'Phone Number': 'phone_number',\n                'VSD ID': 'vsd_id',\n                'License Number': 'license_number',\n            },\n            json_meta: [\n                [{\n                    key: \"charset\",\n                    value: \"utf-8\",\n                },],\n            ],\n\n        }\n    },\n    methods: {\n        view_site_details(data) {\n            this.pmModalData = data\n            $('#MachineSiteModal2').modal('show');\n        },\n        reset_filter(){\n            this.search= {\n                page: 1,\n                machine_id: '',\n                site_id: '',\n                created_by: '',\n                created_from: '',\n                created_to: '',\n                tat_from: 0,\n                tat_to: 90,\n                color:'',\n                ticket:''\n            }\n            this.getResults()\n        },\n        UpdateValues(e) {\n            this.search.tat_from = e.minValue;\n            this.search.tat_to = e.maxValue;\n        },\n        // excel\n        async export_csv() {\n            const response = await axios.get('api/ticket/export');\n\n            return response.data.data;\n        },\n        startDownload() {\n            Swal.fire({\n                title: 'Please Wait !',\n                html: 'Data populating', // add html attribute if you want or remove\n                allowOutsideClick: false,\n                onBeforeOpen: () => {\n                    Swal.showLoading()\n                },\n            });\n        },\n        finishDownload() {\n            Swal.close()\n        },\n\n\n\n        getLabel(val) {\n            if (typeof val === 'object') {\n                return val.far_no + ' - ' + val.name;\n            } else {\n                return val;\n            }\n        },\n        getResults(page = 1) {\n            this.$Progress.start();\n            this.search.page = page\n            axios.get('/api/ticket', {\n                params: this.search\n            }).then(({\n                data\n            }) => (this.Tickets = data.data));\n            this.$Progress.finish();\n        },\n        loadTickets() {\n\n                axios.get(\"/api/ticket\", {\n                    params: this.search\n                }).then(({\n                    data\n                }) => (this.Tickets = data.data));\n\n        },\n\n    },\n    created() {\n        this.loadTickets();\n    },\n    beforeCreate() {\n        axios.get(\"api/get_pre_machine\")\n            .then((res) => {\n                this.categories = res.data.data.Category;\n                this.sites = res.data.data.sites;\n            })\n        axios.get(\"/api/initial_ticket\").then(response => {\n            this.users = response.data.data.vendors;\n            this.machines = response.data.data.machines;\n            this.search_machines = response.data.data.machines;\n            this.search_sites = response.data.data.sites;\n            this.created_users = response.data.data.created_users;\n        }).catch(() => console.warn('Oh. Something went wrong'));\n    },\n    watch: {\n        async 'form.sub_category_id'(n, o) {\n            if (n) {\n                this.get_machine()\n            }\n        },\n        async 'form.site_id'(n, o) {\n            if (n) {\n                this.get_machine()\n            }\n        },\n\n        'form.category_id': {\n            handler: function (n, o) {\n\n                if (n) {\n                    axios.get(\"api/category/\" + n)\n                        .then((res) => {\n                            this.sub_categories = res.data.data;\n                        })\n                    this.get_machine()\n                }\n            },\n            deep: true,\n            initial: true\n        },\n\n    },\n}\n</script>\n<style>\n.bg-red {\n  background-color: #ef5563 !important;\n}\n.bg-green {\n  background-color: #70ed70 !important;\n}\n.bg-yellow {\n  background-color: #f1c84c !important;\n}\n</style>\n"],"sourceRoot":""}]);

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
var render = function () {}
var staticRenderFns = []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9SZXBvcnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvUmVwb3J0LnZ1ZT80NDY0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvUmVwb3J0LnZ1ZT85MmZlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvUmVwb3J0LnZ1ZT9iZGM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvUmVwb3J0LnZ1ZSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiVnVlVGFnc0lucHV0IiwiTXVsdGlSYW5nZVNsaWRlciIsIk1hY2hpbmVQb3AiLCJkYXRhIiwicG1Nb2RhbERhdGEiLCJjcmVhdGVkX3VzZXJzIiwic2VhcmNoX21hY2hpbmVzIiwic2VhcmNoX3NpdGVzIiwic2VhcmNoIiwicGFnZSIsIm1hY2hpbmVfaWQiLCJzaXRlX2lkIiwiY3JlYXRlZF9ieSIsImNyZWF0ZWRfZnJvbSIsImNyZWF0ZWRfdG8iLCJ0YXRfZnJvbSIsInRhdF90byIsImNvbG9yIiwidGlja2V0IiwiY2F0ZWdvcmllcyIsInN1Yl9jYXRlZ29yaWVzIiwic2l0ZXMiLCJzZWxlY3RlZF9tYWNoaW5lIiwidXNlcnMiLCJtYWNoaW5lcyIsIlRpY2tldHMiLCJqc29uX2ZpZWxkcyIsImpzb25fbWV0YSIsImtleSIsInZhbHVlIiwibWV0aG9kcyIsInZpZXdfc2l0ZV9kZXRhaWxzIiwiJCIsInJlc2V0X2ZpbHRlciIsIlVwZGF0ZVZhbHVlcyIsInN0YXJ0RG93bmxvYWQiLCJTd2FsIiwidGl0bGUiLCJodG1sIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJvbkJlZm9yZU9wZW4iLCJmaW5pc2hEb3dubG9hZCIsImdldExhYmVsIiwiZ2V0UmVzdWx0cyIsImF4aW9zIiwicGFyYW1zIiwibG9hZFRpY2tldHMiLCJjcmVhdGVkIiwiYmVmb3JlQ3JlYXRlIiwidGhlbiIsIndhdGNoIiwiaGFuZGxlciIsImRlZXAiLCJpbml0aWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0xzRDtBQUNJO0FBQ0U7QUFFVjtBQUNuQztFQUNmQTtJQUNBQztJQUNBQztJQUNBQztFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUdBQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBQyxZQUNBO1FBQ0FDO1FBQ0FDO01BQ0E7SUFHQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7TUFDQUM7SUFDQTtJQUNBQztNQUNBO1FBQ0F4QjtRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBZ0I7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBO01BQ0E7TUFFQTtJQUNBO0lBQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQUE7UUFDQUM7UUFDQUM7VUFDQUo7UUFDQTtNQUNBO0lBQ0E7SUFDQUs7TUFDQUw7SUFDQTtJQUlBTTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQUM7UUFDQUM7TUFDQTtRQUNBMUM7TUFDQTtNQUNBO0lBQ0E7SUFDQTJDO01BRUFGO1FBQ0FDO01BQ0E7UUFDQTFDO01BQ0E7SUFFQTtFQUVBO0VBQ0E0QztJQUNBO0VBQ0E7RUFDQUM7SUFDQUosaUNBQ0FLO01BQ0E7TUFDQTtJQUNBO0lBQ0FMO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQU07SUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBO01BQ0FDO1FBRUE7VUFDQVAsK0JBQ0FLO1lBQ0E7VUFDQTtVQUNBO1FBQ0E7TUFDQTtNQUNBRztNQUNBQztJQUNBO0VBRUE7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ3hXRCwyQkFBMkIsbUJBQU8sQ0FBQyxzR0FBcUQ7QUFDeEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGNBQWMseUNBQXlDLEdBQUcsYUFBYSx5Q0FBeUMsR0FBRyxjQUFjLHlDQUF5QyxHQUFHLFVBQVUsK0lBQStJLE1BQU0sV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxnbUpBQWdtSixjQUFjLGtCQUFrQixzQ0FBc0MsZ0NBQWdDLG9CQUFvQixjQUFjLG9FQUFvRSx5QkFBeUIsOEJBQThCLCtCQUErQix5QkFBeUIsd0JBQXdCLDJCQUEyQixtQkFBbUIsOENBQThDLG9CQUFvQiw4RUFBOEUseUJBQXlCLDhCQUE4QiwrQkFBK0IseUJBQXlCLHdCQUF3Qix5QkFBeUIsaUJBQWlCLDhtRUFBOG1FLG9CQUFvQiwrRUFBK0UsdUJBQXVCLGtHQUFrRyx5QkFBeUIsc0RBQXNELDJDQUEyQyxxREFBcUQsMEJBQTBCLHFEQUFxRCw4QkFBOEIscURBQXFELCtCQUErQixxREFBcUQsZ0NBQWdDLHFEQUFxRCx3QkFBd0Isc0RBQXNELHFFQUFxRSxxREFBcUQseUJBQXlCLHFEQUFxRCxtQ0FBbUMscXVCQUFxdUIsOERBQThELGdFQUFnRSxzREFBc0Qsa0JBQWtCLG1CQUFtQixvSEFBb0gsZUFBZSxrQkFBa0IscUpBQXFKLDhUQUE4VCxzTUFBc00saUNBQWlDLHFXQUFxVywrQ0FBK0MsaUdBQWlHLGdDQUFnQyxPQUFPLGlCQUFpQixtQ0FBbUMseUZBQXlGLFdBQVcsMEJBQTBCLDRCQUE0Qiw4VEFBOFQsMENBQTBDLDRCQUE0QixnREFBZ0QsOENBQThDLFdBQVcsaURBQWlELG9FQUFvRSwwQ0FBMEMsV0FBVyw0QkFBNEIseUJBQXlCLGlOQUFpTiwyREFBMkQsZ0JBQWdCLEVBQUUsV0FBVyw2QkFBNkIscUNBQXFDLGdDQUFnQyw0Q0FBNEMsdURBQXVELGVBQWUsT0FBTyw2QkFBNkIsZUFBZSxXQUFXLGlDQUFpQyxxQ0FBcUMsNkVBQTZFLG9EQUFvRCxTQUFTLHFDQUFxQyxpQ0FBaUMsc0NBQXNDLFdBQVcsMEJBQTBCLGdEQUFnRCw0REFBNEQsU0FBUyw2Q0FBNkMsaUNBQWlDLGFBQWEsVUFBVSxrQkFBa0IsNkJBQTZCLE9BQU8sdUJBQXVCLDBFQUEwRSwyREFBMkQsbURBQW1ELGVBQWUsZ0VBQWdFLHNEQUFzRCwwREFBMEQsaUVBQWlFLDJEQUEyRCxvRUFBb0UsV0FBVyx3REFBd0QsT0FBTyxlQUFlLDhDQUE4QyxzQkFBc0IsbURBQW1ELFdBQVcsdUNBQXVDLHNCQUFzQixtREFBbUQsV0FBVyxrQ0FBa0Msd0NBQXdDLDRCQUE0QixnR0FBZ0csa0VBQWtFLDJCQUEyQiw0REFBNEQsZUFBZSxnRUFBZ0UsVUFBVSxJQUFJLCtCQUErQix5Q0FBeUMsR0FBRyxhQUFhLHlDQUF5QyxHQUFHLGNBQWMseUNBQXlDLEdBQUcsK0JBQStCOztBQUVudWQ7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBTztBQUNBO0FBQ1AsSUFBSSxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNGaEI7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMscWhCQUFzUjtBQUM1UztBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsZ0lBQW1FO0FBQ3JGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1hmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtQkFBTyxDQUFDLHlqQkFBK1A7QUFDelE7QUFDQTtBQUNnSDtBQUNhO0FBQzdIO0FBQytVO0FBQy9VO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0c7QUFDdEcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLHlIQUFjO0FBQ2hCLEVBQUUsaU9BQWM7QUFDaEIsRUFBRSwwT0FBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvOS5idW5kbGUuODg2NDQzZjk4MjEwNjFjMzdiMWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj5UaWNrZXQgUmVwb3J0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b29sc1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhdXRvY29tcGxldGU9XCJvZmZcIiBAc3VibWl0LnByZXZlbnQ9XCJnZXRSZXN1bHRzKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiIDpnZXQtb3B0aW9uLWxhYmVsPVwiZ2V0TGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJzZWFyY2hfbWFjaGluZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG1hY2hpbmVzIC4uLlwiIHYtbW9kZWw9XCJzZWFyY2gubWFjaGluZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYWNoaW5lX2lkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGlja2V0IC4uLlwiIHYtbW9kZWw9XCJzZWFyY2gudGlja2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpY2tldFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJzaXRlX25hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzZWFyY2hfc2l0ZXNcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTaXRlLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaC5zaXRlX2lkXCIgbmFtZT1cInNpdGVfaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwic2l0ZV9uYW1lXCIgOm9wdGlvbnM9XCJbJ09wZW4nLCAnQ2xvc2VkJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTdGF0dXMuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnN0YXR1c1wiIG5hbWU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiIDpvcHRpb25zPVwiY3JlYXRlZF91c2Vyc1wiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNyZWF0ZWQgYnkuLi5cIiB2LW1vZGVsPVwic2VhcmNoLmNyZWF0ZWRfYnlcIiBuYW1lPVwiY3JlYXRlZF9ieVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOm9wdGlvbnM9XCJbJ1JlZCcsJ1NvbGlkIFJlZCcsJ1llbGxvdycsJ0dyZWVuJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBDb2xvci4uLlwiIHYtbW9kZWw9XCJzZWFyY2guY29sb3JcIiBuYW1lPVwiY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yIHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVwiQXNpYS9Lb2xrYXRhXCIgdi1tb2RlbD1cInNlYXJjaC5jcmVhdGVkX2Zyb21cIiBpbnB1dC1jbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ3JlYXRlZCBmcm9tIGRhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yIHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVwiQXNpYS9Lb2xrYXRhXCIgdi1tb2RlbD1cInNlYXJjaC5jcmVhdGVkX3RvXCIgaW5wdXQtY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNyZWF0ZWQgdG8gZGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMiBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwic2l0ZV9uYW1lXCIgOm9wdGlvbnM9XCJbJ01ham9yJywgJ01pbm9yJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBDb21wbGFpbnQgTmF0dXJlLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5jb21wbGFpbnRfbmF0dXJlXCIgbmFtZT1cImNvbXBsYWludF9uYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC00IHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gIDxNdWx0aVJhbmdlU2xpZGVyIGJhc2VDbGFzc05hbWU9XCJtdWx0aS1yYW5nZS1zbGlkZXJcIiA6bWluPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptYXg9XCIxMDBcIiA6c3RlcD1cIjVcIiA6cnVsZXI9XCJ0cnVlXCIgOmxhYmVsPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptaW5WYWx1ZT1cInNlYXJjaC50YXRfZnJvbVwiIDptYXhWYWx1ZT1cInNlYXJjaC50YXRfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJVcGRhdGVWYWx1ZXNcIiAvPiAtLT5cblxuXG5cbiAgPGZpZWxkc2V0IHN0eWxlPVwibWF4LXdpZHRoOiA0MDBweDsgbWFyZ2luOiBhdXRvOyB0ZXh0LWFsaWduOiBsZWZ0OyAgXCI+XG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgdGV4dC1hbGlnbjogY2VudGVyOyBoZWlnaHQ6IDM5cHg7XCI+XG4gICAgICA8c3BhblxuICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBtYXJnaW46IDNweDtcblxuICAgICAgICBcIlxuICAgICAgICA+e3sgc2VhcmNoLnRhdF9mcm9tIH19PC9zcGFuXG4gICAgICA+XG4gICAgICA8c3BhbiBzdHlsZT1cInRvcDogMjUlOyBwb3NpdGlvbjogcmVsYXRpdmU7XCI+VEFUPC9zcGFuPlxuICAgICAgPHNwYW5cbiAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICAgIFwiXG4gICAgICAgID57eyBzZWFyY2gudGF0X3RvIH19PC9zcGFuXG4gICAgICA+XG4gICAgPC9kaXY+XG5cbiAgICA8TXVsdGlSYW5nZVNsaWRlclxuICAgICAgYmFzZUNsYXNzTmFtZT1cIm11bHRpLXJhbmdlLXNsaWRlci1iYXItb25seVwiXG4gICAgICA6bWluVmFsdWU9XCJzZWFyY2gudGF0X2Zyb21cIlxuICAgICAgOm1heFZhbHVlPVwic2VhcmNoLnRhdF90b1wiXG4gICAgICA6bWF4PVwiMTAwXCJcbiAgICAgIDptaW49XCIwXCJcbiAgICAgIDpzdGVwPVwiMVwiXG4gICAgICA6cmFuZ2VNYXJnaW49XCIwXCJcbiAgICAgIEBpbnB1dD1cIlVwZGF0ZVZhbHVlc1wiXG4gICAgLz5cbiAgPC9maWVsZHNldD5cblxuXG5cblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWluZm8gbWwtMlwiIEBjbGljaz1cInJlc2V0X2ZpbHRlcigpXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1oZWFkZXIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wIHRpY2tldFRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UaWNrZXQgTm8gPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWFjaGluZSBOYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWFjaGluZSBGYXIgTm88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TaXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3JlYXRlZCBCeTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNyZWF0ZWQgRGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4cGVjdGVkIGRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXZpc2VkIDxicj4gRXhwZWN0ZWQgZGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlc29sdXRpb24gZGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRpY2tldCBTdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db21wbGFpbnQgTmF0dXJlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VEFUPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cInRpY2tldCBpbiBUaWNrZXRzLmRhdGFcIiA6a2V5PVwidGlja2V0LmlkXCIgOmNsYXNzPVwidGlja2V0LnJvd19jb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQudGlja2V0X25vIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNhcGl0YWxpemVcIj57eyB0aWNrZXQubWFjaGluZS5uYW1lIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgQGNsaWNrPVwidmlld19zaXRlX2RldGFpbHModGlja2V0Lm1hY2hpbmUpXCI+e3sgdGlja2V0Lm1hY2hpbmUuZmFyX25vIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5zaXRlID8gdGlja2V0LnNpdGUuc2l0ZV9uYW1lOictJyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2J5X25hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuY3JlYXRlZF9hdCB8IG15RGF0ZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5saWtlbHlfZGF0ZSB8IG15RGF0ZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5yZXZlcnNpb25fZGF0ZXxteURhdGUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuYWN0dWFsX2RhdGUgICB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID57e3RpY2tldC5zdGF0dXMudG9Mb3dlckNhc2UoKT09J2NyZWF0ZWQgYnkgdXNlcic/J09wZW4nOnRpY2tldC5zdGF0dXN9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7dGlja2V0LmNvbXBsYWludF9uYXR1cmV9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7dGlja2V0LmFjdHVhbF9kYXRlP3RpY2tldC50YXQ6Jy0nfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1ib2R5IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhZ2luYXRpb24gOmRhdGE9XCJUaWNrZXRzXCIgOmxpbWl0PVwiMTBcIiBAcGFnaW5hdGlvbi1jaGFuZ2UtcGFnZT1cImdldFJlc3VsdHNcIiA6bGltaXQ9XCI1XCI+PC9wYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZCAtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPE1hY2hpbmVQb3AgaWQ9XCJNYWNoaW5lU2l0ZU1vZGFsMlwiIDptYWNoaW5lPVwicG1Nb2RhbERhdGFcIi8+XG5cbiAgICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE11bHRpUmFuZ2VTbGlkZXIgZnJvbSBcIm11bHRpLXJhbmdlLXNsaWRlci12dWVcIjtcbmltcG9ydCBcIm11bHRpLXJhbmdlLXNsaWRlci12dWUvTXVsdGlSYW5nZVNsaWRlckJsYWNrLmNzc1wiO1xuaW1wb3J0IFwibXVsdGktcmFuZ2Utc2xpZGVyLXZ1ZS9NdWx0aVJhbmdlU2xpZGVyQmFyT25seS5jc3NcIjtcblxuaW1wb3J0IFZ1ZVRhZ3NJbnB1dCBmcm9tICdAam9obXVuL3Z1ZS10YWdzLWlucHV0JztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFZ1ZVRhZ3NJbnB1dCxcbiAgICAgICAgTXVsdGlSYW5nZVNsaWRlcixcbiAgICAgICAgTWFjaGluZVBvcDogKCkgPT4gaW1wb3J0KCcuLi9NYWNoaW5lRmFyUG9wLnZ1ZScpLFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBtTW9kYWxEYXRhOicnLFxuICAgICAgICAgICAgY3JlYXRlZF91c2VyczogW10sXG4gICAgICAgICAgICBzZWFyY2hfbWFjaGluZXM6IFtdLFxuICAgICAgICAgICAgc2VhcmNoX3NpdGVzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9ieTogJycsXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9mcm9tOiAnJyxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX3RvOiAnJyxcbiAgICAgICAgICAgICAgICB0YXRfZnJvbTogMCxcbiAgICAgICAgICAgICAgICB0YXRfdG86IDkwLFxuICAgICAgICAgICAgICAgIGNvbG9yOicnLFxuICAgICAgICAgICAgICAgIHRpY2tldDonJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXM6IFtdLFxuICAgICAgICAgICAgc2l0ZXM6IFtdLFxuICAgICAgICAgICAgc2VsZWN0ZWRfbWFjaGluZTogJycsXG4gICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXG4gICAgICAgICAgICBUaWNrZXRzOiB7fSxcblxuXG4gICAgICAgICAgICBqc29uX2ZpZWxkczoge1xuICAgICAgICAgICAgICAgICdUaWNrZXQgbm8nOiAndGlja2V0X25vJyxcbiAgICAgICAgICAgICAgICAnTGFzdCBOYW1lJzogJ2xhc3RfbmFtZScsXG4gICAgICAgICAgICAgICAgJ0VtYWlsJzogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICAnVHlwZSc6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAnQ291bnRyeSBDb2RlJzogJ2NvdW50cnlfY29kZScsXG4gICAgICAgICAgICAgICAgJ1Bob25lIE51bWJlcic6ICdwaG9uZV9udW1iZXInLFxuICAgICAgICAgICAgICAgICdWU0QgSUQnOiAndnNkX2lkJyxcbiAgICAgICAgICAgICAgICAnTGljZW5zZSBOdW1iZXInOiAnbGljZW5zZV9udW1iZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGpzb25fbWV0YTogW1xuICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjaGFyc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInV0Zi04XCIsXG4gICAgICAgICAgICAgICAgfSxdLFxuICAgICAgICAgICAgXSxcblxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHZpZXdfc2l0ZV9kZXRhaWxzKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucG1Nb2RhbERhdGEgPSBkYXRhXG4gICAgICAgICAgICAkKCcjTWFjaGluZVNpdGVNb2RhbDInKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICB9LFxuICAgICAgICByZXNldF9maWx0ZXIoKXtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoPSB7XG4gICAgICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2J5OiAnJyxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2Zyb206ICcnLFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfdG86ICcnLFxuICAgICAgICAgICAgICAgIHRhdF9mcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRhdF90bzogOTAsXG4gICAgICAgICAgICAgICAgY29sb3I6JycsXG4gICAgICAgICAgICAgICAgdGlja2V0OicnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdldFJlc3VsdHMoKVxuICAgICAgICB9LFxuICAgICAgICBVcGRhdGVWYWx1ZXMoZSkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X2Zyb20gPSBlLm1pblZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X3RvID0gZS5tYXhWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZXhjZWxcbiAgICAgICAgYXN5bmMgZXhwb3J0X2NzdigpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdhcGkvdGlja2V0L2V4cG9ydCcpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBzdGFydERvd25sb2FkKCkge1xuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBXYWl0ICEnLFxuICAgICAgICAgICAgICAgIGh0bWw6ICdEYXRhIHBvcHVsYXRpbmcnLCAvLyBhZGQgaHRtbCBhdHRyaWJ1dGUgaWYgeW91IHdhbnQgb3IgcmVtb3ZlXG4gICAgICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uQmVmb3JlT3BlbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTd2FsLnNob3dMb2FkaW5nKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmlzaERvd25sb2FkKCkge1xuICAgICAgICAgICAgU3dhbC5jbG9zZSgpXG4gICAgICAgIH0sXG5cblxuXG4gICAgICAgIGdldExhYmVsKHZhbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5mYXJfbm8gKyAnIC0gJyArIHZhbC5uYW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRSZXN1bHRzKHBhZ2UgPSAxKSB7XG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZSA9IHBhZ2VcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90aWNrZXQnLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxuICAgICAgICAgICAgfSkudGhlbigoe1xuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIH0pID0+ICh0aGlzLlRpY2tldHMgPSBkYXRhLmRhdGEpKTtcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkVGlja2V0cygpIHtcblxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChcIi9hcGkvdGlja2V0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgIH0pID0+ICh0aGlzLlRpY2tldHMgPSBkYXRhLmRhdGEpKTtcblxuICAgICAgICB9LFxuXG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRUaWNrZXRzKCk7XG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICAgIGF4aW9zLmdldChcImFwaS9nZXRfcHJlX21hY2hpbmVcIilcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkNhdGVnb3J5O1xuICAgICAgICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9pbml0aWFsX3RpY2tldFwiKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEudmVuZG9ycztcbiAgICAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX3NpdGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnNpdGVzO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVkX3VzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLmNyZWF0ZWRfdXNlcnM7XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybignT2guIFNvbWV0aGluZyB3ZW50IHdyb25nJykpO1xuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc3ViX2NhdGVnb3J5X2lkJyhuLCBvKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyAnZm9ybS5zaXRlX2lkJyhuLCBvKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgICdmb3JtLmNhdGVnb3J5X2lkJzoge1xuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcblxuICAgICAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9jYXRlZ29yeS9cIiArIG4pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWVcbiAgICAgICAgfSxcblxuICAgIH0sXG59XG48L3NjcmlwdD5cbjxzdHlsZT5cbi5iZy1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1NTYzICFpbXBvcnRhbnQ7XG59XG4uYmctZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBlZDcwICFpbXBvcnRhbnQ7XG59XG4uYmcteWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYzg0YyAhaW1wb3J0YW50O1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYmctcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjU1NjMgIWltcG9ydGFudDtcXG59XFxuLmJnLWdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MGVkNzAgIWltcG9ydGFudDtcXG59XFxuLmJnLXllbGxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjODRjICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJGOi93YW1wNjQvd3d3L3JtbS9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9UaWNrZXRzL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvUmVwb3J0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMldBO0VBQ0EscUNBQUE7Q0FDQTtBQUNBO0VBQ0EscUNBQUE7Q0FDQTtBQUNBO0VBQ0EscUNBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiUmVwb3J0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiID5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+VGlja2V0IFJlcG9ydDwvaDM+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdG9vbHNcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgcC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIEBzdWJtaXQucHJldmVudD1cXFwiZ2V0UmVzdWx0cygpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tcm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcIm5hbWVcXFwiIDpnZXQtb3B0aW9uLWxhYmVsPVxcXCJnZXRMYWJlbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCIgOm9wdGlvbnM9XFxcInNlYXJjaF9tYWNoaW5lc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBtYWNoaW5lcyAuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5tYWNoaW5lX2lkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwibWFjaGluZV9pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGNvbC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB0aWNrZXQgLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2gudGlja2V0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwidGlja2V0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInNpdGVfbmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XFxcInNlYXJjaF9zaXRlc1xcXCIgcGxhY2Vob2xkZXI9XFxcIlNlbGVjdCBTaXRlLi4uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoLnNpdGVfaWRcXFwiIG5hbWU9XFxcInNpdGVfaWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwic2l0ZV9uYW1lXFxcIiA6b3B0aW9ucz1cXFwiWydPcGVuJywgJ0Nsb3NlZCddXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlNlbGVjdCBTdGF0dXMuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5zdGF0dXNcXFwiIG5hbWU9XFxcInN0YXR1c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGNvbC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJuYW1lXFxcIiA6b3B0aW9ucz1cXFwiY3JlYXRlZF91c2Vyc1xcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNyZWF0ZWQgYnkuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5jcmVhdGVkX2J5XFxcIiBuYW1lPVxcXCJjcmVhdGVkX2J5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcIm5hbWVcXFwiIDpvcHRpb25zPVxcXCJbJ1JlZCcsJ1NvbGlkIFJlZCcsJ1llbGxvdycsJ0dyZWVuJ11cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ2hvb3NlIENvbG9yLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guY29sb3JcXFwiIG5hbWU9XFxcImNvbG9yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTIgcHQtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XFxcIkFzaWEvS29sa2F0YVxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmNyZWF0ZWRfZnJvbVxcXCIgaW5wdXQtY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkNyZWF0ZWQgZnJvbSBkYXRlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMiBwdC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdmFsdWUtem9uZT1cXFwiQXNpYS9Lb2xrYXRhXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guY3JlYXRlZF90b1xcXCIgaW5wdXQtY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkNyZWF0ZWQgdG8gZGF0ZVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMiBwdC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJzaXRlX25hbWVcXFwiIDpvcHRpb25zPVxcXCJbJ01ham9yJywgJ01pbm9yJ11cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IENvbXBsYWludCBOYXR1cmUuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5jb21wbGFpbnRfbmF0dXJlXFxcIiBuYW1lPVxcXCJjb21wbGFpbnRfbmF0dXJlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTQgcHQtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgPE11bHRpUmFuZ2VTbGlkZXIgYmFzZUNsYXNzTmFtZT1cXFwibXVsdGktcmFuZ2Utc2xpZGVyXFxcIiA6bWluPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1heD1cXFwiMTAwXFxcIiA6c3RlcD1cXFwiNVxcXCIgOnJ1bGVyPVxcXCJ0cnVlXFxcIiA6bGFiZWw9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWluVmFsdWU9XFxcInNlYXJjaC50YXRfZnJvbVxcXCIgOm1heFZhbHVlPVxcXCJzZWFyY2gudGF0X3RvXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVxcXCJVcGRhdGVWYWx1ZXNcXFwiIC8+IC0tPlxcblxcblxcblxcbiAgPGZpZWxkc2V0IHN0eWxlPVxcXCJtYXgtd2lkdGg6IDQwMHB4OyBtYXJnaW46IGF1dG87IHRleHQtYWxpZ246IGxlZnQ7ICBcXFwiPlxcbiAgICA8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHRleHQtYWxpZ246IGNlbnRlcjsgaGVpZ2h0OiAzOXB4O1xcXCI+XFxuICAgICAgPHNwYW5cXG4gICAgICAgIHN0eWxlPVxcXCJcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgICAgbWFyZ2luOiAzcHg7XFxuXFxuICAgICAgICBcXFwiXFxuICAgICAgICA+e3sgc2VhcmNoLnRhdF9mcm9tIH19PC9zcGFuXFxuICAgICAgPlxcbiAgICAgIDxzcGFuIHN0eWxlPVxcXCJ0b3A6IDI1JTsgcG9zaXRpb246IHJlbGF0aXZlO1xcXCI+VEFUPC9zcGFuPlxcbiAgICAgIDxzcGFuXFxuICAgICAgICBzdHlsZT1cXFwiXFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICAgIG1hcmdpbjogM3B4O1xcbiAgICAgICAgXFxcIlxcbiAgICAgICAgPnt7IHNlYXJjaC50YXRfdG8gfX08L3NwYW5cXG4gICAgICA+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8TXVsdGlSYW5nZVNsaWRlclxcbiAgICAgIGJhc2VDbGFzc05hbWU9XFxcIm11bHRpLXJhbmdlLXNsaWRlci1iYXItb25seVxcXCJcXG4gICAgICA6bWluVmFsdWU9XFxcInNlYXJjaC50YXRfZnJvbVxcXCJcXG4gICAgICA6bWF4VmFsdWU9XFxcInNlYXJjaC50YXRfdG9cXFwiXFxuICAgICAgOm1heD1cXFwiMTAwXFxcIlxcbiAgICAgIDptaW49XFxcIjBcXFwiXFxuICAgICAgOnN0ZXA9XFxcIjFcXFwiXFxuICAgICAgOnJhbmdlTWFyZ2luPVxcXCIwXFxcIlxcbiAgICAgIEBpbnB1dD1cXFwiVXBkYXRlVmFsdWVzXFxcIlxcbiAgICAvPlxcbiAgPC9maWVsZHNldD5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgcHQtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPlNlYXJjaDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIG1sLTJcXFwiIEBjbGljaz1cXFwicmVzZXRfZmlsdGVyKClcXFwiPlJlc2V0PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtaGVhZGVyIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMCB0aWNrZXRUYWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtaG92ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRpY2tldCBObyA8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWFjaGluZSBOYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hY2hpbmUgRmFyIE5vPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNpdGU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3JlYXRlZCBCeTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DcmVhdGVkIERhdGU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXhwZWN0ZWQgZGF0ZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXZpc2VkIDxicj4gRXhwZWN0ZWQgZGF0ZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXNvbHV0aW9uIGRhdGU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IFN0YXR1czwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db21wbGFpbnQgTmF0dXJlPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRBVDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCJ0aWNrZXQgaW4gVGlja2V0cy5kYXRhXFxcIiA6a2V5PVxcXCJ0aWNrZXQuaWRcXFwiIDpjbGFzcz1cXFwidGlja2V0LnJvd19jb2xvclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQudGlja2V0X25vIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LWNhcGl0YWxpemVcXFwiPnt7IHRpY2tldC5tYWNoaW5lLm5hbWUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgQGNsaWNrPVxcXCJ2aWV3X3NpdGVfZGV0YWlscyh0aWNrZXQubWFjaGluZSlcXFwiPnt7IHRpY2tldC5tYWNoaW5lLmZhcl9ubyB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnNpdGUgPyB0aWNrZXQuc2l0ZS5zaXRlX25hbWU6Jy0nIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2J5X25hbWUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYXQgfCBteURhdGUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lmxpa2VseV9kYXRlIHwgbXlEYXRlIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5yZXZlcnNpb25fZGF0ZXxteURhdGUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmFjdHVhbF9kYXRlICAgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt7dGlja2V0LnN0YXR1cy50b0xvd2VyQ2FzZSgpPT0nY3JlYXRlZCBieSB1c2VyJz8nT3Blbic6dGlja2V0LnN0YXR1c319PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7dGlja2V0LmNvbXBsYWludF9uYXR1cmV9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3RpY2tldC5hY3R1YWxfZGF0ZT90aWNrZXQudGF0OictJ319PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1ib2R5IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhZ2luYXRpb24gOmRhdGE9XFxcIlRpY2tldHNcXFwiIDpsaW1pdD1cXFwiMTBcXFwiIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVxcXCJnZXRSZXN1bHRzXFxcIiA6bGltaXQ9XFxcIjVcXFwiPjwvcGFnaW5hdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcblxcblxcblxcblxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8TWFjaGluZVBvcCBpZD1cXFwiTWFjaGluZVNpdGVNb2RhbDJcXFwiIDptYWNoaW5lPVxcXCJwbU1vZGFsRGF0YVxcXCIvPlxcblxcbiAgICA8L3NlY3Rpb24+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBNdWx0aVJhbmdlU2xpZGVyIGZyb20gXFxcIm11bHRpLXJhbmdlLXNsaWRlci12dWVcXFwiO1xcbmltcG9ydCBcXFwibXVsdGktcmFuZ2Utc2xpZGVyLXZ1ZS9NdWx0aVJhbmdlU2xpZGVyQmxhY2suY3NzXFxcIjtcXG5pbXBvcnQgXFxcIm11bHRpLXJhbmdlLXNsaWRlci12dWUvTXVsdGlSYW5nZVNsaWRlckJhck9ubHkuY3NzXFxcIjtcXG5cXG5pbXBvcnQgVnVlVGFnc0lucHV0IGZyb20gJ0Bqb2htdW4vdnVlLXRhZ3MtaW5wdXQnO1xcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgY29tcG9uZW50czoge1xcbiAgICAgICAgVnVlVGFnc0lucHV0LFxcbiAgICAgICAgTXVsdGlSYW5nZVNsaWRlcixcXG4gICAgICAgIE1hY2hpbmVQb3A6ICgpID0+IGltcG9ydCgnLi4vTWFjaGluZUZhclBvcC52dWUnKSxcXG4gICAgfSxcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgcG1Nb2RhbERhdGE6JycsXFxuICAgICAgICAgICAgY3JlYXRlZF91c2VyczogW10sXFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxcbiAgICAgICAgICAgIHNlYXJjaDoge1xcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYnk6ICcnLFxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2Zyb206ICcnLFxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX3RvOiAnJyxcXG4gICAgICAgICAgICAgICAgdGF0X2Zyb206IDAsXFxuICAgICAgICAgICAgICAgIHRhdF90bzogOTAsXFxuICAgICAgICAgICAgICAgIGNvbG9yOicnLFxcbiAgICAgICAgICAgICAgICB0aWNrZXQ6JydcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzOiBbXSxcXG4gICAgICAgICAgICBzaXRlczogW10sXFxuICAgICAgICAgICAgc2VsZWN0ZWRfbWFjaGluZTogJycsXFxuICAgICAgICAgICAgdXNlcnM6IFtdLFxcbiAgICAgICAgICAgIG1hY2hpbmVzOiBbXSxcXG4gICAgICAgICAgICBUaWNrZXRzOiB7fSxcXG5cXG5cXG4gICAgICAgICAgICBqc29uX2ZpZWxkczoge1xcbiAgICAgICAgICAgICAgICAnVGlja2V0IG5vJzogJ3RpY2tldF9ubycsXFxuICAgICAgICAgICAgICAgICdMYXN0IE5hbWUnOiAnbGFzdF9uYW1lJyxcXG4gICAgICAgICAgICAgICAgJ0VtYWlsJzogJ2VtYWlsJyxcXG4gICAgICAgICAgICAgICAgJ1R5cGUnOiAndHlwZScsXFxuICAgICAgICAgICAgICAgICdDb3VudHJ5IENvZGUnOiAnY291bnRyeV9jb2RlJyxcXG4gICAgICAgICAgICAgICAgJ1Bob25lIE51bWJlcic6ICdwaG9uZV9udW1iZXInLFxcbiAgICAgICAgICAgICAgICAnVlNEIElEJzogJ3ZzZF9pZCcsXFxuICAgICAgICAgICAgICAgICdMaWNlbnNlIE51bWJlcic6ICdsaWNlbnNlX251bWJlcicsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBqc29uX21ldGE6IFtcXG4gICAgICAgICAgICAgICAgW3tcXG4gICAgICAgICAgICAgICAgICAgIGtleTogXFxcImNoYXJzZXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFxcXCJ1dGYtOFxcXCIsXFxuICAgICAgICAgICAgICAgIH0sXSxcXG4gICAgICAgICAgICBdLFxcblxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICB2aWV3X3NpdGVfZGV0YWlscyhkYXRhKSB7XFxuICAgICAgICAgICAgdGhpcy5wbU1vZGFsRGF0YSA9IGRhdGFcXG4gICAgICAgICAgICAkKCcjTWFjaGluZVNpdGVNb2RhbDInKS5tb2RhbCgnc2hvdycpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHJlc2V0X2ZpbHRlcigpe1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoPSB7XFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9ieTogJycsXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfZnJvbTogJycsXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfdG86ICcnLFxcbiAgICAgICAgICAgICAgICB0YXRfZnJvbTogMCxcXG4gICAgICAgICAgICAgICAgdGF0X3RvOiA5MCxcXG4gICAgICAgICAgICAgICAgY29sb3I6JycsXFxuICAgICAgICAgICAgICAgIHRpY2tldDonJ1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB0aGlzLmdldFJlc3VsdHMoKVxcbiAgICAgICAgfSxcXG4gICAgICAgIFVwZGF0ZVZhbHVlcyhlKSB7XFxuICAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X2Zyb20gPSBlLm1pblZhbHVlO1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRhdF90byA9IGUubWF4VmFsdWU7XFxuICAgICAgICB9LFxcbiAgICAgICAgLy8gZXhjZWxcXG4gICAgICAgIGFzeW5jIGV4cG9ydF9jc3YoKSB7XFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2FwaS90aWNrZXQvZXhwb3J0Jyk7XFxuXFxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YTtcXG4gICAgICAgIH0sXFxuICAgICAgICBzdGFydERvd25sb2FkKCkge1xcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxlYXNlIFdhaXQgIScsXFxuICAgICAgICAgICAgICAgIGh0bWw6ICdEYXRhIHBvcHVsYXRpbmcnLCAvLyBhZGQgaHRtbCBhdHRyaWJ1dGUgaWYgeW91IHdhbnQgb3IgcmVtb3ZlXFxuICAgICAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgb25CZWZvcmVPcGVuOiAoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBTd2FsLnNob3dMb2FkaW5nKClcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBmaW5pc2hEb3dubG9hZCgpIHtcXG4gICAgICAgICAgICBTd2FsLmNsb3NlKClcXG4gICAgICAgIH0sXFxuXFxuXFxuXFxuICAgICAgICBnZXRMYWJlbCh2YWwpIHtcXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5mYXJfbm8gKyAnIC0gJyArIHZhbC5uYW1lO1xcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGdldFJlc3VsdHMocGFnZSA9IDEpIHtcXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnBhZ2UgPSBwYWdlXFxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RpY2tldCcsIHtcXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxcbiAgICAgICAgICAgIH0pLnRoZW4oKHtcXG4gICAgICAgICAgICAgICAgZGF0YVxcbiAgICAgICAgICAgIH0pID0+ICh0aGlzLlRpY2tldHMgPSBkYXRhLmRhdGEpKTtcXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBsb2FkVGlja2V0cygpIHtcXG5cXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFxcXCIvYXBpL3RpY2tldFxcXCIsIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcXG4gICAgICAgICAgICAgICAgfSkudGhlbigoe1xcbiAgICAgICAgICAgICAgICAgICAgZGF0YVxcbiAgICAgICAgICAgICAgICB9KSA9PiAodGhpcy5UaWNrZXRzID0gZGF0YS5kYXRhKSk7XFxuXFxuICAgICAgICB9LFxcblxcbiAgICB9LFxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgdGhpcy5sb2FkVGlja2V0cygpO1xcbiAgICB9LFxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XFxuICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9nZXRfcHJlX21hY2hpbmVcXFwiKVxcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5DYXRlZ29yeTtcXG4gICAgICAgICAgICAgICAgdGhpcy5zaXRlcyA9IHJlcy5kYXRhLmRhdGEuc2l0ZXM7XFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIGF4aW9zLmdldChcXFwiL2FwaS9pbml0aWFsX3RpY2tldFxcXCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEudmVuZG9ycztcXG4gICAgICAgICAgICB0aGlzLm1hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX3NpdGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnNpdGVzO1xcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlZF91c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5jcmVhdGVkX3VzZXJzO1xcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKCdPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmcnKSk7XFxuICAgIH0sXFxuICAgIHdhdGNoOiB7XFxuICAgICAgICBhc3luYyAnZm9ybS5zdWJfY2F0ZWdvcnlfaWQnKG4sIG8pIHtcXG4gICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc2l0ZV9pZCcobiwgbykge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICAnZm9ybS5jYXRlZ29yeV9pZCc6IHtcXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobiwgbykge1xcblxcbiAgICAgICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvY2F0ZWdvcnkvXFxcIiArIG4pXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yl9jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZVxcbiAgICAgICAgfSxcXG5cXG4gICAgfSxcXG59XFxuPC9zY3JpcHQ+XFxuPHN0eWxlPlxcbi5iZy1yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTU2MyAhaW1wb3J0YW50O1xcbn1cXG4uYmctZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwZWQ3MCAhaW1wb3J0YW50O1xcbn1cXG4uYmcteWVsbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWM4NGMgIWltcG9ydGFudDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0IHZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7fVxuZXhwb3J0IHZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1lNGU3ZWViZVwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUmVwb3J0LnZ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyMzM2ZjlhOVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZXBvcnQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUmVwb3J0LnZ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vUmVwb3J0LnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9SZXBvcnQudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9SZXBvcnQudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWU0ZTdlZWJlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JlcG9ydC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxUaWNrZXRzXFxcXFJlcG9ydC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZTRlN2VlYmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lNGU3ZWViZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9