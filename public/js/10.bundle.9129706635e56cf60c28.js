(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Tickets/Report.vue":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Tickets/Report.vue ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var multi_range_slider_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multi-range-slider-vue */ "./node_modules/multi-range-slider-vue/MultiRangeSlider.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3___default()),
    MultiRangeSlider: multi_range_slider_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  data() {
    return {
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
        tat_to: 90
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
      if (this.$gate.isAdmin()) {
        axios.get("/api/ticket", {
          params: this.search
        }).then(({
          data
        }) => this.Tickets = data.data);
      }
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
exports.push([module.i, "\n.multi-range-slider-bar-only .bar-inner{\n    background-color:#b1b1b1 !important;\n}\n", "", {"version":3,"sources":["F:/programming/wamp64/www/royal-infraconstruction/resources/js/components/Tickets/resources/js/components/Tickets/Report.vue"],"names":[],"mappings":";AAgUA;IACA,oCAAA;CACA","file":"Report.vue","sourcesContent":["<template>\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-12\">\r\n\r\n                    <div class=\"card\" v-if=\"$gate.isAdmin()\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Ticket Report</h3>\r\n                            <div class=\"card-tools\">\r\n                               \r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"card-body p-2\">\r\n                            <form autocomplete=\"off\" @submit.prevent=\"getResults()\">\r\n                                <div class=\"form-row\">\r\n                                    <div class=\"col col-3\">\r\n                                        <v-select label=\"name\" :get-option-label=\"getLabel\"\r\n                                            :reduce=\"(option) => option.id\" :options=\"search_machines\"\r\n                                            placeholder=\"Enter machines ...\" v-model=\"search.machine_id\"\r\n                                            name=\"machine_id\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <v-select label=\"site_name\" :reduce=\"(option) => option.id\"\r\n                                            :options=\"search_sites\" placeholder=\"Select Site...\"\r\n                                            v-model=\"search.site_id\" name=\"site_id\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <v-select label=\"site_name\" :options=\"['Open', 'Closed']\"\r\n                                            placeholder=\"Select Status...\" v-model=\"search.status\" name=\"status\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <v-select label=\"name\" :options=\"created_users\" :reduce=\"(option) => option.id\"\r\n                                            placeholder=\"Created by...\" v-model=\"search.created_by\" name=\"created_by\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-3 pt-2\">\r\n                                       <datetime v-model=\"search.created_from\" input-class=\"form-control\" placeholder=\"Created from date\" />\r\n                                    </div>\r\n                                    <div class=\"col col-3 pt-2\">\r\n                                       <datetime v-model=\"search.created_to\" input-class=\"form-control\" placeholder=\"Created to date\"/>\r\n                                    </div>\r\n                                    <div class=\"col col-6 pt-2\">\r\n                                       <!--  <MultiRangeSlider baseClassName=\"multi-range-slider\" :min=\"0\" \r\n                                            :max=\"100\" :step=\"5\" :ruler=\"true\" :label=\"true\"\r\n                                            :minValue=\"search.tat_from\" :maxValue=\"search.tat_to\"\r\n                                            @input=\"UpdateValues\" /> -->\r\n\r\n\r\n\r\n  <fieldset style=\"max-width: 400px; margin: auto; text-align: left;  \">     \r\n    <div style=\"display: flex; justify-content: space-between; text-align: center; height: 39px;\">\r\n      <span\r\n        style=\"\r\n          display: inline-block;\r\n          padding: 5px;\r\n          border: solid 1px;\r\n          border-radius: 5px;\r\n          width: 100px;\r\n          margin: 3px;\r\n          \r\n        \"\r\n        >{{ search.tat_from }}</span\r\n      >\r\n      <span style=\"top: 25%; position: relative;\">TAT</span>\r\n      <span\r\n        style=\"\r\n          display: inline-block;\r\n          padding: 5px;\r\n          border: solid 1px;\r\n          border-radius: 5px;\r\n          width: 100px;\r\n          margin: 3px;\r\n        \"\r\n        >{{ search.tat_to }}</span\r\n      >\r\n    </div>\r\n\r\n    <MultiRangeSlider\r\n      baseClassName=\"multi-range-slider-bar-only\"\r\n      :minValue=\"search.tat_from\"\r\n      :maxValue=\"search.tat_to\"\r\n      :max=\"100\"\r\n      :min=\"0\"\r\n      :step=\"1\"\r\n      :rangeMargin=\"0\"\r\n      @input=\"UpdateValues\"\r\n    />\r\n  </fieldset>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                                    </div>\r\n                                    <button type=\"submit\" class=\"btn btn-success\">Search</button>\r\n                                    <button type=\"button\" class=\"btn btn-info ml-2\" @click=\"search={}\">Reset</button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n\r\n                        <!-- /.card-header -->\r\n                        <div class=\"card-body table-responsive p-0\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Ticket No </th>\r\n                                        <th>Machine Name</th>\r\n                                        <th>Machine Far No</th>\r\n                                        <th>Created By</th>\r\n                                        <th>Created Date</th>\r\n                                        <th>Expected date</th>\r\n                                        <th>Resoulution date</th>\r\n                                        <th>Ticket Status</th>\r\n                                        <th>TAT</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr v-for=\"ticket in Tickets.data\" :key=\"ticket.id\">\r\n                                        <td>{{ ticket.ticket_no }}</td>\r\n                                        <td class=\"text-capitalize\">{{ ticket.machine.name }}</td>\r\n                                        <td>{{ ticket.machine.far_no }}</td>\r\n                                        <td>{{ ticket.created_by_name }}</td>\r\n                                        <td>{{ ticket.created_at | myDate }}</td>\r\n                                        <td>{{ ticket.likely_date | myDate }}</td>\r\n                                        <td>{{ ticket.actual_date   }}</td>\r\n                                        <td v-html=\"ticket.status\"></td> \r\n                                        <td>{{ticket.actual_date?ticket.tat:'-'}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <!-- /.card-body -->\r\n                        <div class=\"card-footer\">\r\n                            <pagination :data=\"Tickets\" @pagination-change-page=\"getResults\"></pagination>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.card -->\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div v-if=\"!$gate.isAdmin()\">\r\n                <not-found></not-found>\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n\r\n    </section>\r\n</template>\r\n\r\n<script>\r\nimport MultiRangeSlider from \"multi-range-slider-vue\"; \r\nimport \"multi-range-slider-vue/MultiRangeSliderBlack.css\";\r\nimport \"multi-range-slider-vue/MultiRangeSliderBarOnly.css\";\r\n\r\nimport VueTagsInput from '@johmun/vue-tags-input';\r\nexport default {\r\n    components: {\r\n        VueTagsInput,\r\n        MultiRangeSlider,\r\n    },\r\n    data() {\r\n        return {\r\n            created_users: [],\r\n            search_machines: [],\r\n            search_sites: [],\r\n            search: {\r\n                page: 1,\r\n                machine_id: '',\r\n                site_id: '',\r\n                created_by: '',\r\n                created_from: '',\r\n                created_to: '',\r\n                tat_from: 0,\r\n                tat_to: 90,\r\n            },\r\n            categories: [],\r\n            sub_categories: [],\r\n            sites: [],\r\n            selected_machine: '',\r\n            users: [],\r\n            machines: [],\r\n            Tickets: {},\r\n\r\n\r\n            json_fields: {\r\n                'Ticket no': 'ticket_no',\r\n                'Last Name': 'last_name',\r\n                'Email': 'email',\r\n                'Type': 'type',\r\n                'Country Code': 'country_code',\r\n                'Phone Number': 'phone_number',\r\n                'VSD ID': 'vsd_id',\r\n                'License Number': 'license_number',\r\n            },\r\n            json_meta: [\r\n                [{\r\n                    key: \"charset\",\r\n                    value: \"utf-8\",\r\n                },],\r\n            ],\r\n\r\n        }\r\n    },\r\n    methods: {\r\n        UpdateValues(e) {\r\n            this.search.tat_from = e.minValue;\r\n            this.search.tat_to = e.maxValue;\r\n        },\r\n        // excel\r\n        async export_csv() {\r\n            const response = await axios.get('api/ticket/export');\r\n\r\n            return response.data.data;\r\n        },\r\n        startDownload() {\r\n            Swal.fire({\r\n                title: 'Please Wait !',\r\n                html: 'Data populating', // add html attribute if you want or remove\r\n                allowOutsideClick: false,\r\n                onBeforeOpen: () => {\r\n                    Swal.showLoading()\r\n                },\r\n            });\r\n        },\r\n        finishDownload() {\r\n            Swal.close()\r\n        },\r\n\r\n\r\n\r\n        getLabel(val) {\r\n            if (typeof val === 'object') {\r\n                return val.far_no + ' - ' + val.name;\r\n            } else {\r\n                return val;\r\n            }\r\n        },\r\n        getResults(page = 1) {\r\n            this.$Progress.start();\r\n            this.search.page = page\r\n            axios.get('/api/ticket', {\r\n                params: this.search\r\n            }).then(({\r\n                data\r\n            }) => (this.Tickets = data.data));\r\n            this.$Progress.finish();\r\n        },\r\n        loadTickets() {\r\n            if (this.$gate.isAdmin()) {\r\n                axios.get(\"/api/ticket\", {\r\n                    params: this.search\r\n                }).then(({\r\n                    data\r\n                }) => (this.Tickets = data.data));\r\n            }\r\n        },\r\n\r\n    },\r\n    created() {\r\n        this.loadTickets();\r\n    },\r\n    beforeCreate() {\r\n        axios.get(\"api/get_pre_machine\")\r\n            .then((res) => {\r\n                this.categories = res.data.data.Category;\r\n                this.sites = res.data.data.sites;\r\n            })\r\n        axios.get(\"/api/initial_ticket\").then(response => {\r\n            this.users = response.data.data.vendors;\r\n            this.machines = response.data.data.machines;\r\n            this.search_machines = response.data.data.machines;\r\n            this.search_sites = response.data.data.sites;\r\n            this.created_users = response.data.data.created_users;\r\n        }).catch(() => console.warn('Oh. Something went wrong'));\r\n    },\r\n    watch: {\r\n        async 'form.sub_category_id'(n, o) {\r\n            if (n) {\r\n                this.get_machine()\r\n            }\r\n        },\r\n        async 'form.site_id'(n, o) {\r\n            if (n) {\r\n                this.get_machine()\r\n            }\r\n        },\r\n\r\n        'form.category_id': {\r\n            handler: function (n, o) {\r\n\r\n                if (n) {\r\n                    axios.get(\"api/category/\" + n)\r\n                        .then((res) => {\r\n                            this.sub_categories = res.data.data;\r\n                        })\r\n                    this.get_machine()\r\n                }\r\n            },\r\n            deep: true,\r\n            initial: true\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n<style>\r\n    .multi-range-slider-bar-only .bar-inner{\r\n        background-color:#b1b1b1 !important;\r\n    }\r\n</style>"],"sourceRoot":""}]);

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
  return _c("section", { staticClass: "content" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _vm.$gate.isAdmin()
            ? _c("div", { staticClass: "card" }, [
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
                          { staticClass: "col col-3" },
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
                        _c(
                          "div",
                          { staticClass: "col col-3" },
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
                          { staticClass: "col col-3" },
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
                          { staticClass: "col col-3" },
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
                          { staticClass: "col col-3 pt-2" },
                          [
                            _c("datetime", {
                              attrs: {
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
                          { staticClass: "col col-3 pt-2" },
                          [
                            _c("datetime", {
                              attrs: {
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
                        _c("div", { staticClass: "col col-6 pt-2" }, [
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
                              _c("MultiRangeSlider", {
                                attrs: {
                                  baseClassName: "multi-range-slider-bar-only",
                                  minValue: _vm.search.tat_from,
                                  maxValue: _vm.search.tat_to,
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
                                _vm.search = {}
                              }
                            }
                          },
                          [_vm._v("Reset")]
                        )
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body table-responsive p-0" }, [
                  _c("table", { staticClass: "table table-hover" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.Tickets.data, function(ticket) {
                        return _c("tr", { key: ticket.id }, [
                          _c("td", [_vm._v(_vm._s(ticket.ticket_no))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-capitalize" }, [
                            _vm._v(_vm._s(ticket.machine.name))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.machine.far_no))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.created_by_name))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm._f("myDate")(ticket.created_at)))
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm._f("myDate")(ticket.likely_date)))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.actual_date))]),
                          _vm._v(" "),
                          _c("td", {
                            domProps: { innerHTML: _vm._s(ticket.status) }
                          }),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(ticket.actual_date ? ticket.tat : "-")
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-footer" },
                  [
                    _c("pagination", {
                      attrs: { data: _vm.Tickets },
                      on: { "pagination-change-page": _vm.getResults }
                    })
                  ],
                  1
                )
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      !_vm.$gate.isAdmin() ? _c("div", [_c("not-found")], 1) : _vm._e()
    ])
  ])
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
        _c("th", [_vm._v("Created By")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Expected date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Resoulution date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ticket Status")]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9SZXBvcnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvUmVwb3J0LnZ1ZT80NDY0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvUmVwb3J0LnZ1ZT85MmZlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvUmVwb3J0LnZ1ZT9iZGM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvUmVwb3J0LnZ1ZSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiVnVlVGFnc0lucHV0IiwiTXVsdGlSYW5nZVNsaWRlciIsImRhdGEiLCJjcmVhdGVkX3VzZXJzIiwic2VhcmNoX21hY2hpbmVzIiwic2VhcmNoX3NpdGVzIiwic2VhcmNoIiwicGFnZSIsIm1hY2hpbmVfaWQiLCJzaXRlX2lkIiwiY3JlYXRlZF9ieSIsImNyZWF0ZWRfZnJvbSIsImNyZWF0ZWRfdG8iLCJ0YXRfZnJvbSIsInRhdF90byIsImNhdGVnb3JpZXMiLCJzdWJfY2F0ZWdvcmllcyIsInNpdGVzIiwic2VsZWN0ZWRfbWFjaGluZSIsInVzZXJzIiwibWFjaGluZXMiLCJUaWNrZXRzIiwianNvbl9maWVsZHMiLCJqc29uX21ldGEiLCJrZXkiLCJ2YWx1ZSIsIm1ldGhvZHMiLCJVcGRhdGVWYWx1ZXMiLCJzdGFydERvd25sb2FkIiwiU3dhbCIsInRpdGxlIiwiaHRtbCIsImFsbG93T3V0c2lkZUNsaWNrIiwib25CZWZvcmVPcGVuIiwiZmluaXNoRG93bmxvYWQiLCJnZXRMYWJlbCIsImdldFJlc3VsdHMiLCJheGlvcyIsInBhcmFtcyIsInRoZW4iLCJsb2FkVGlja2V0cyIsImNyZWF0ZWQiLCJiZWZvcmVDcmVhdGUiLCJyZXMiLCJjYXRjaCIsIndhdGNoIiwiaGFuZGxlciIs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QUNBO0FBQ2dIO0FBQ2E7QUFDN0g7QUFDK1U7QUFDL1U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRztBQUN0RyxnQkFBZ0IseUdBQWtCO0FBQ2xDLEVBQUUseUhBQWM7QUFDaEIsRUFBRSxpT0FBYztBQUNoQixFQUFFLDBPQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWFYOztBQUVVLGdGQUFpQiIsImZpbGUiOiJqcy8xMC5idW5kbGUuOTEyOTcwNjYzNWU1NmNmNjBjMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgdi1pZj1cIiRnYXRlLmlzQWRtaW4oKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj5UaWNrZXQgUmVwb3J0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRvb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhdXRvY29tcGxldGU9XCJvZmZcIiBAc3VibWl0LnByZXZlbnQ9XCJnZXRSZXN1bHRzKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiIDpnZXQtb3B0aW9uLWxhYmVsPVwiZ2V0TGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cInNlYXJjaF9tYWNoaW5lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBtYWNoaW5lcyAuLi5cIiB2LW1vZGVsPVwic2VhcmNoLm1hY2hpbmVfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYWNoaW5lX2lkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwic2l0ZV9uYW1lXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzZWFyY2hfc2l0ZXNcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTaXRlLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoLnNpdGVfaWRcIiBuYW1lPVwic2l0ZV9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpvcHRpb25zPVwiWydPcGVuJywgJ0Nsb3NlZCddXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTdGF0dXMuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnN0YXR1c1wiIG5hbWU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOm9wdGlvbnM9XCJjcmVhdGVkX3VzZXJzXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDcmVhdGVkIGJ5Li4uXCIgdi1tb2RlbD1cInNlYXJjaC5jcmVhdGVkX2J5XCIgbmFtZT1cImNyZWF0ZWRfYnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0zIHB0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHYtbW9kZWw9XCJzZWFyY2guY3JlYXRlZF9mcm9tXCIgaW5wdXQtY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNyZWF0ZWQgZnJvbSBkYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTMgcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdi1tb2RlbD1cInNlYXJjaC5jcmVhdGVkX3RvXCIgaW5wdXQtY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNyZWF0ZWQgdG8gZGF0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTYgcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tICA8TXVsdGlSYW5nZVNsaWRlciBiYXNlQ2xhc3NOYW1lPVwibXVsdGktcmFuZ2Utc2xpZGVyXCIgOm1pbj1cIjBcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWF4PVwiMTAwXCIgOnN0ZXA9XCI1XCIgOnJ1bGVyPVwidHJ1ZVwiIDpsYWJlbD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptaW5WYWx1ZT1cInNlYXJjaC50YXRfZnJvbVwiIDptYXhWYWx1ZT1cInNlYXJjaC50YXRfdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cIlVwZGF0ZVZhbHVlc1wiIC8+IC0tPlxyXG5cclxuXHJcblxyXG4gIDxmaWVsZHNldCBzdHlsZT1cIm1heC13aWR0aDogNDAwcHg7IG1hcmdpbjogYXV0bzsgdGV4dC1hbGlnbjogbGVmdDsgIFwiPiAgICAgXHJcbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGhlaWdodDogMzlweDtcIj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBzdHlsZT1cIlxyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDNweDtcclxuICAgICAgICAgIFxyXG4gICAgICAgIFwiXHJcbiAgICAgICAgPnt7IHNlYXJjaC50YXRfZnJvbSB9fTwvc3BhblxyXG4gICAgICA+XHJcbiAgICAgIDxzcGFuIHN0eWxlPVwidG9wOiAyNSU7IHBvc2l0aW9uOiByZWxhdGl2ZTtcIj5UQVQ8L3NwYW4+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgc3R5bGU9XCJcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgICAgXCJcclxuICAgICAgICA+e3sgc2VhcmNoLnRhdF90byB9fTwvc3BhblxyXG4gICAgICA+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8TXVsdGlSYW5nZVNsaWRlclxyXG4gICAgICBiYXNlQ2xhc3NOYW1lPVwibXVsdGktcmFuZ2Utc2xpZGVyLWJhci1vbmx5XCJcclxuICAgICAgOm1pblZhbHVlPVwic2VhcmNoLnRhdF9mcm9tXCJcclxuICAgICAgOm1heFZhbHVlPVwic2VhcmNoLnRhdF90b1wiXHJcbiAgICAgIDptYXg9XCIxMDBcIlxyXG4gICAgICA6bWluPVwiMFwiXHJcbiAgICAgIDpzdGVwPVwiMVwiXHJcbiAgICAgIDpyYW5nZU1hcmdpbj1cIjBcIlxyXG4gICAgICBAaW5wdXQ9XCJVcGRhdGVWYWx1ZXNcIlxyXG4gICAgLz5cclxuICA8L2ZpZWxkc2V0PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWluZm8gbWwtMlwiIEBjbGljaz1cInNlYXJjaD17fVwiPlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtaGVhZGVyIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRpY2tldCBObyA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hY2hpbmUgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWFjaGluZSBGYXIgTm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNyZWF0ZWQgQnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNyZWF0ZWQgRGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXhwZWN0ZWQgZGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVzb3VsdXRpb24gZGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IFN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VEFUPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwidGlja2V0IGluIFRpY2tldHMuZGF0YVwiIDprZXk9XCJ0aWNrZXQuaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQudGlja2V0X25vIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2FwaXRhbGl6ZVwiPnt7IHRpY2tldC5tYWNoaW5lLm5hbWUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5tYWNoaW5lLmZhcl9ubyB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYnlfbmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYXQgfCBteURhdGUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5saWtlbHlfZGF0ZSB8IG15RGF0ZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmFjdHVhbF9kYXRlICAgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHYtaHRtbD1cInRpY2tldC5zdGF0dXNcIj48L3RkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3RpY2tldC5hY3R1YWxfZGF0ZT90aWNrZXQudGF0OictJ319PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhZ2luYXRpb24gOmRhdGE9XCJUaWNrZXRzXCIgQHBhZ2luYXRpb24tY2hhbmdlLXBhZ2U9XCJnZXRSZXN1bHRzXCI+PC9wYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZCAtLT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIhJGdhdGUuaXNBZG1pbigpXCI+XHJcbiAgICAgICAgICAgICAgICA8bm90LWZvdW5kPjwvbm90LWZvdW5kPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IE11bHRpUmFuZ2VTbGlkZXIgZnJvbSBcIm11bHRpLXJhbmdlLXNsaWRlci12dWVcIjsgXHJcbmltcG9ydCBcIm11bHRpLXJhbmdlLXNsaWRlci12dWUvTXVsdGlSYW5nZVNsaWRlckJsYWNrLmNzc1wiO1xyXG5pbXBvcnQgXCJtdWx0aS1yYW5nZS1zbGlkZXItdnVlL011bHRpUmFuZ2VTbGlkZXJCYXJPbmx5LmNzc1wiO1xyXG5cclxuaW1wb3J0IFZ1ZVRhZ3NJbnB1dCBmcm9tICdAam9obXVuL3Z1ZS10YWdzLWlucHV0JztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIFZ1ZVRhZ3NJbnB1dCxcclxuICAgICAgICBNdWx0aVJhbmdlU2xpZGVyLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3JlYXRlZF91c2VyczogW10sXHJcbiAgICAgICAgICAgIHNlYXJjaF9tYWNoaW5lczogW10sXHJcbiAgICAgICAgICAgIHNlYXJjaF9zaXRlczogW10sXHJcbiAgICAgICAgICAgIHNlYXJjaDoge1xyXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2J5OiAnJyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfZnJvbTogJycsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkX3RvOiAnJyxcclxuICAgICAgICAgICAgICAgIHRhdF9mcm9tOiAwLFxyXG4gICAgICAgICAgICAgICAgdGF0X3RvOiA5MCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICAgICAgc2l0ZXM6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3RlZF9tYWNoaW5lOiAnJyxcclxuICAgICAgICAgICAgdXNlcnM6IFtdLFxyXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXHJcbiAgICAgICAgICAgIFRpY2tldHM6IHt9LFxyXG5cclxuXHJcbiAgICAgICAgICAgIGpzb25fZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAnVGlja2V0IG5vJzogJ3RpY2tldF9ubycsXHJcbiAgICAgICAgICAgICAgICAnTGFzdCBOYW1lJzogJ2xhc3RfbmFtZScsXHJcbiAgICAgICAgICAgICAgICAnRW1haWwnOiAnZW1haWwnLFxyXG4gICAgICAgICAgICAgICAgJ1R5cGUnOiAndHlwZScsXHJcbiAgICAgICAgICAgICAgICAnQ291bnRyeSBDb2RlJzogJ2NvdW50cnlfY29kZScsXHJcbiAgICAgICAgICAgICAgICAnUGhvbmUgTnVtYmVyJzogJ3Bob25lX251bWJlcicsXHJcbiAgICAgICAgICAgICAgICAnVlNEIElEJzogJ3ZzZF9pZCcsXHJcbiAgICAgICAgICAgICAgICAnTGljZW5zZSBOdW1iZXInOiAnbGljZW5zZV9udW1iZXInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBqc29uX21ldGE6IFtcclxuICAgICAgICAgICAgICAgIFt7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImNoYXJzZXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ1dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgfSxdLFxyXG4gICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIFVwZGF0ZVZhbHVlcyhlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRhdF9mcm9tID0gZS5taW5WYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X3RvID0gZS5tYXhWYWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIGV4Y2VsXHJcbiAgICAgICAgYXN5bmMgZXhwb3J0X2NzdigpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2FwaS90aWNrZXQvZXhwb3J0Jyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnREb3dubG9hZCgpIHtcclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxlYXNlIFdhaXQgIScsXHJcbiAgICAgICAgICAgICAgICBodG1sOiAnRGF0YSBwb3B1bGF0aW5nJywgLy8gYWRkIGh0bWwgYXR0cmlidXRlIGlmIHlvdSB3YW50IG9yIHJlbW92ZVxyXG4gICAgICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb25CZWZvcmVPcGVuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5zaG93TG9hZGluZygpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmlzaERvd25sb2FkKCkge1xyXG4gICAgICAgICAgICBTd2FsLmNsb3NlKClcclxuICAgICAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgICAgIGdldExhYmVsKHZhbCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZmFyX25vICsgJyAtICcgKyB2YWwubmFtZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFJlc3VsdHMocGFnZSA9IDEpIHtcclxuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZSA9IHBhZ2VcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RpY2tldCcsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcclxuICAgICAgICAgICAgfSkudGhlbigoe1xyXG4gICAgICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgICAgICB9KSA9PiAodGhpcy5UaWNrZXRzID0gZGF0YS5kYXRhKSk7XHJcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9hZFRpY2tldHMoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRnYXRlLmlzQWRtaW4oKSkge1xyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS90aWNrZXRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgICAgICAgICB9KSA9PiAodGhpcy5UaWNrZXRzID0gZGF0YS5kYXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcclxuICAgIH0sXHJcbiAgICBiZWZvcmVDcmVhdGUoKSB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2dldF9wcmVfbWFjaGluZVwiKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkNhdGVnb3J5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXRlcyA9IHJlcy5kYXRhLmRhdGEuc2l0ZXM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9pbml0aWFsX3RpY2tldFwiKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS52ZW5kb3JzO1xyXG4gICAgICAgICAgICB0aGlzLm1hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2l0ZXMgPSByZXNwb25zZS5kYXRhLmRhdGEuc2l0ZXM7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlZF91c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5jcmVhdGVkX3VzZXJzO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybignT2guIFNvbWV0aGluZyB3ZW50IHdyb25nJykpO1xyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc3ViX2NhdGVnb3J5X2lkJyhuLCBvKSB7XHJcbiAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc2l0ZV9pZCcobiwgbykge1xyXG4gICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAnZm9ybS5jYXRlZ29yeV9pZCc6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9jYXRlZ29yeS9cIiArIG4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxyXG4gICAgICAgICAgICBpbml0aWFsOiB0cnVlXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcbiAgICAubXVsdGktcmFuZ2Utc2xpZGVyLWJhci1vbmx5IC5iYXItaW5uZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojYjFiMWIxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5tdWx0aS1yYW5nZS1zbGlkZXItYmFyLW9ubHkgLmJhci1pbm5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYjFiMWIxICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJGOi9wcm9ncmFtbWluZy93YW1wNjQvd3d3L3JveWFsLWluZnJhY29uc3RydWN0aW9uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9SZXBvcnQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnVUE7SUFDQSxvQ0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJSZXBvcnQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTJcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgdi1pZj1cXFwiJGdhdGUuaXNBZG1pbigpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+VGlja2V0IFJlcG9ydDwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdG9vbHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHAtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBAc3VibWl0LnByZXZlbnQ9XFxcImdldFJlc3VsdHMoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLXJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGNvbC0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJuYW1lXFxcIiA6Z2V0LW9wdGlvbi1sYWJlbD1cXFwiZ2V0TGFiZWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiIDpvcHRpb25zPVxcXCJzZWFyY2hfbWFjaGluZXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgbWFjaGluZXMgLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2gubWFjaGluZV9pZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcIm1hY2hpbmVfaWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwic2l0ZV9uYW1lXFxcIiA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwic2VhcmNoX3NpdGVzXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IFNpdGUuLi5cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2guc2l0ZV9pZFxcXCIgbmFtZT1cXFwic2l0ZV9pZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGNvbC0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJzaXRlX25hbWVcXFwiIDpvcHRpb25zPVxcXCJbJ09wZW4nLCAnQ2xvc2VkJ11cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IFN0YXR1cy4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnN0YXR1c1xcXCIgbmFtZT1cXFwic3RhdHVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcIm5hbWVcXFwiIDpvcHRpb25zPVxcXCJjcmVhdGVkX3VzZXJzXFxcIiA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ3JlYXRlZCBieS4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmNyZWF0ZWRfYnlcXFwiIG5hbWU9XFxcImNyZWF0ZWRfYnlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMyBwdC0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdi1tb2RlbD1cXFwic2VhcmNoLmNyZWF0ZWRfZnJvbVxcXCIgaW5wdXQtY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkNyZWF0ZWQgZnJvbSBkYXRlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMyBwdC0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdi1tb2RlbD1cXFwic2VhcmNoLmNyZWF0ZWRfdG9cXFwiIGlucHV0LWNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJDcmVhdGVkIHRvIGRhdGVcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTYgcHQtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgPE11bHRpUmFuZ2VTbGlkZXIgYmFzZUNsYXNzTmFtZT1cXFwibXVsdGktcmFuZ2Utc2xpZGVyXFxcIiA6bWluPVxcXCIwXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptYXg9XFxcIjEwMFxcXCIgOnN0ZXA9XFxcIjVcXFwiIDpydWxlcj1cXFwidHJ1ZVxcXCIgOmxhYmVsPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1pblZhbHVlPVxcXCJzZWFyY2gudGF0X2Zyb21cXFwiIDptYXhWYWx1ZT1cXFwic2VhcmNoLnRhdF90b1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cXFwiVXBkYXRlVmFsdWVzXFxcIiAvPiAtLT5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gIDxmaWVsZHNldCBzdHlsZT1cXFwibWF4LXdpZHRoOiA0MDBweDsgbWFyZ2luOiBhdXRvOyB0ZXh0LWFsaWduOiBsZWZ0OyAgXFxcIj4gICAgIFxcclxcbiAgICA8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHRleHQtYWxpZ246IGNlbnRlcjsgaGVpZ2h0OiAzOXB4O1xcXCI+XFxyXFxuICAgICAgPHNwYW5cXHJcXG4gICAgICAgIHN0eWxlPVxcXCJcXHJcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4O1xcclxcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luOiAzcHg7XFxyXFxuICAgICAgICAgIFxcclxcbiAgICAgICAgXFxcIlxcclxcbiAgICAgICAgPnt7IHNlYXJjaC50YXRfZnJvbSB9fTwvc3BhblxcclxcbiAgICAgID5cXHJcXG4gICAgICA8c3BhbiBzdHlsZT1cXFwidG9wOiAyNSU7IHBvc2l0aW9uOiByZWxhdGl2ZTtcXFwiPlRBVDwvc3Bhbj5cXHJcXG4gICAgICA8c3BhblxcclxcbiAgICAgICAgc3R5bGU9XFxcIlxcclxcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgICBtYXJnaW46IDNweDtcXHJcXG4gICAgICAgIFxcXCJcXHJcXG4gICAgICAgID57eyBzZWFyY2gudGF0X3RvIH19PC9zcGFuXFxyXFxuICAgICAgPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPE11bHRpUmFuZ2VTbGlkZXJcXHJcXG4gICAgICBiYXNlQ2xhc3NOYW1lPVxcXCJtdWx0aS1yYW5nZS1zbGlkZXItYmFyLW9ubHlcXFwiXFxyXFxuICAgICAgOm1pblZhbHVlPVxcXCJzZWFyY2gudGF0X2Zyb21cXFwiXFxyXFxuICAgICAgOm1heFZhbHVlPVxcXCJzZWFyY2gudGF0X3RvXFxcIlxcclxcbiAgICAgIDptYXg9XFxcIjEwMFxcXCJcXHJcXG4gICAgICA6bWluPVxcXCIwXFxcIlxcclxcbiAgICAgIDpzdGVwPVxcXCIxXFxcIlxcclxcbiAgICAgIDpyYW5nZU1hcmdpbj1cXFwiMFxcXCJcXHJcXG4gICAgICBAaW5wdXQ9XFxcIlVwZGF0ZVZhbHVlc1xcXCJcXHJcXG4gICAgLz5cXHJcXG4gIDwvZmllbGRzZXQ+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPlNlYXJjaDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIG1sLTJcXFwiIEBjbGljaz1cXFwic2VhcmNoPXt9XFxcIj5SZXNldDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1oZWFkZXIgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ob3ZlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IE5vIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYWNoaW5lIE5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWFjaGluZSBGYXIgTm88L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3JlYXRlZCBCeTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DcmVhdGVkIERhdGU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXhwZWN0ZWQgZGF0ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXNvdWx1dGlvbiBkYXRlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRpY2tldCBTdGF0dXM8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VEFUPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XFxcInRpY2tldCBpbiBUaWNrZXRzLmRhdGFcXFwiIDprZXk9XFxcInRpY2tldC5pZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQudGlja2V0X25vIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LWNhcGl0YWxpemVcXFwiPnt7IHRpY2tldC5tYWNoaW5lLm5hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lm1hY2hpbmUuZmFyX25vIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2J5X25hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYXQgfCBteURhdGUgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lmxpa2VseV9kYXRlIHwgbXlEYXRlIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5hY3R1YWxfZGF0ZSAgIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHYtaHRtbD1cXFwidGlja2V0LnN0YXR1c1xcXCI+PC90ZD4gXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3RpY2tldC5hY3R1YWxfZGF0ZT90aWNrZXQudGF0OictJ319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1ib2R5IC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhZ2luYXRpb24gOmRhdGE9XFxcIlRpY2tldHNcXFwiIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVxcXCJnZXRSZXN1bHRzXFxcIj48L3BhZ2luYXRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkIC0tPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XFxcIiEkZ2F0ZS5pc0FkbWluKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bm90LWZvdW5kPjwvbm90LWZvdW5kPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuaW1wb3J0IE11bHRpUmFuZ2VTbGlkZXIgZnJvbSBcXFwibXVsdGktcmFuZ2Utc2xpZGVyLXZ1ZVxcXCI7IFxcclxcbmltcG9ydCBcXFwibXVsdGktcmFuZ2Utc2xpZGVyLXZ1ZS9NdWx0aVJhbmdlU2xpZGVyQmxhY2suY3NzXFxcIjtcXHJcXG5pbXBvcnQgXFxcIm11bHRpLXJhbmdlLXNsaWRlci12dWUvTXVsdGlSYW5nZVNsaWRlckJhck9ubHkuY3NzXFxcIjtcXHJcXG5cXHJcXG5pbXBvcnQgVnVlVGFnc0lucHV0IGZyb20gJ0Bqb2htdW4vdnVlLXRhZ3MtaW5wdXQnO1xcclxcbmV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgY29tcG9uZW50czoge1xcclxcbiAgICAgICAgVnVlVGFnc0lucHV0LFxcclxcbiAgICAgICAgTXVsdGlSYW5nZVNsaWRlcixcXHJcXG4gICAgfSxcXHJcXG4gICAgZGF0YSgpIHtcXHJcXG4gICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgY3JlYXRlZF91c2VyczogW10sXFxyXFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcXHJcXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxcclxcbiAgICAgICAgICAgIHNlYXJjaDoge1xcclxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxcclxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXFxyXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYnk6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2Zyb206ICcnLFxcclxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX3RvOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgdGF0X2Zyb206IDAsXFxyXFxuICAgICAgICAgICAgICAgIHRhdF90bzogOTAsXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcXHJcXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXFxyXFxuICAgICAgICAgICAgc2l0ZXM6IFtdLFxcclxcbiAgICAgICAgICAgIHNlbGVjdGVkX21hY2hpbmU6ICcnLFxcclxcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcXHJcXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXFxyXFxuICAgICAgICAgICAgVGlja2V0czoge30sXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAganNvbl9maWVsZHM6IHtcXHJcXG4gICAgICAgICAgICAgICAgJ1RpY2tldCBubyc6ICd0aWNrZXRfbm8nLFxcclxcbiAgICAgICAgICAgICAgICAnTGFzdCBOYW1lJzogJ2xhc3RfbmFtZScsXFxyXFxuICAgICAgICAgICAgICAgICdFbWFpbCc6ICdlbWFpbCcsXFxyXFxuICAgICAgICAgICAgICAgICdUeXBlJzogJ3R5cGUnLFxcclxcbiAgICAgICAgICAgICAgICAnQ291bnRyeSBDb2RlJzogJ2NvdW50cnlfY29kZScsXFxyXFxuICAgICAgICAgICAgICAgICdQaG9uZSBOdW1iZXInOiAncGhvbmVfbnVtYmVyJyxcXHJcXG4gICAgICAgICAgICAgICAgJ1ZTRCBJRCc6ICd2c2RfaWQnLFxcclxcbiAgICAgICAgICAgICAgICAnTGljZW5zZSBOdW1iZXInOiAnbGljZW5zZV9udW1iZXInLFxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAganNvbl9tZXRhOiBbXFxyXFxuICAgICAgICAgICAgICAgIFt7XFxyXFxuICAgICAgICAgICAgICAgICAgICBrZXk6IFxcXCJjaGFyc2V0XFxcIixcXHJcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcXFwidXRmLThcXFwiLFxcclxcbiAgICAgICAgICAgICAgICB9LF0sXFxyXFxuICAgICAgICAgICAgXSxcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgVXBkYXRlVmFsdWVzKGUpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50YXRfZnJvbSA9IGUubWluVmFsdWU7XFxyXFxuICAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X3RvID0gZS5tYXhWYWx1ZTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICAvLyBleGNlbFxcclxcbiAgICAgICAgYXN5bmMgZXhwb3J0X2NzdigpIHtcXHJcXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnYXBpL3RpY2tldC9leHBvcnQnKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhO1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHN0YXJ0RG93bmxvYWQoKSB7XFxyXFxuICAgICAgICAgICAgU3dhbC5maXJlKHtcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQbGVhc2UgV2FpdCAhJyxcXHJcXG4gICAgICAgICAgICAgICAgaHRtbDogJ0RhdGEgcG9wdWxhdGluZycsIC8vIGFkZCBodG1sIGF0dHJpYnV0ZSBpZiB5b3Ugd2FudCBvciByZW1vdmVcXHJcXG4gICAgICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxcclxcbiAgICAgICAgICAgICAgICBvbkJlZm9yZU9wZW46ICgpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIFN3YWwuc2hvd0xvYWRpbmcoKVxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGZpbmlzaERvd25sb2FkKCkge1xcclxcbiAgICAgICAgICAgIFN3YWwuY2xvc2UoKVxcclxcbiAgICAgICAgfSxcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIGdldExhYmVsKHZhbCkge1xcclxcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmZhcl9ubyArICcgLSAnICsgdmFsLm5hbWU7XFxyXFxuICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZ2V0UmVzdWx0cyhwYWdlID0gMSkge1xcclxcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XFxyXFxuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZSA9IHBhZ2VcXHJcXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGlja2V0Jywge1xcclxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMuc2VhcmNoXFxyXFxuICAgICAgICAgICAgfSkudGhlbigoe1xcclxcbiAgICAgICAgICAgICAgICBkYXRhXFxyXFxuICAgICAgICAgICAgfSkgPT4gKHRoaXMuVGlja2V0cyA9IGRhdGEuZGF0YSkpO1xcclxcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGxvYWRUaWNrZXRzKCkge1xcclxcbiAgICAgICAgICAgIGlmICh0aGlzLiRnYXRlLmlzQWRtaW4oKSkge1xcclxcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoXFxcIi9hcGkvdGlja2V0XFxcIiwge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxcclxcbiAgICAgICAgICAgICAgICB9KS50aGVuKCh7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkYXRhXFxyXFxuICAgICAgICAgICAgICAgIH0pID0+ICh0aGlzLlRpY2tldHMgPSBkYXRhLmRhdGEpKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcblxcclxcbiAgICB9LFxcclxcbiAgICBjcmVhdGVkKCkge1xcclxcbiAgICAgICAgdGhpcy5sb2FkVGlja2V0cygpO1xcclxcbiAgICB9LFxcclxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XFxyXFxuICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9nZXRfcHJlX21hY2hpbmVcXFwiKVxcclxcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5DYXRlZ29yeTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zaXRlcyA9IHJlcy5kYXRhLmRhdGEuc2l0ZXM7XFxyXFxuICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgIGF4aW9zLmdldChcXFwiL2FwaS9pbml0aWFsX3RpY2tldFxcXCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xcclxcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEudmVuZG9ycztcXHJcXG4gICAgICAgICAgICB0aGlzLm1hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcclxcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcclxcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX3NpdGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnNpdGVzO1xcclxcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlZF91c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5jcmVhdGVkX3VzZXJzO1xcclxcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKCdPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmcnKSk7XFxyXFxuICAgIH0sXFxyXFxuICAgIHdhdGNoOiB7XFxyXFxuICAgICAgICBhc3luYyAnZm9ybS5zdWJfY2F0ZWdvcnlfaWQnKG4sIG8pIHtcXHJcXG4gICAgICAgICAgICBpZiAobikge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc2l0ZV9pZCcobiwgbykge1xcclxcbiAgICAgICAgICAgIGlmIChuKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAnZm9ybS5jYXRlZ29yeV9pZCc6IHtcXHJcXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobiwgbykge1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAobikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvY2F0ZWdvcnkvXFxcIiArIG4pXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yl9jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxyXFxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZVxcclxcbiAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgfSxcXHJcXG59XFxyXFxuPC9zY3JpcHQ+XFxyXFxuPHN0eWxlPlxcclxcbiAgICAubXVsdGktcmFuZ2Utc2xpZGVyLWJhci1vbmx5IC5iYXItaW5uZXJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiMWIxYjEgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICBfdm0uJGdhdGUuaXNBZG1pbigpXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSBwLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhdXRvY29tcGxldGU6IFwib2ZmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRSZXN1bHRzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldC1vcHRpb24tbGFiZWxcIjogX3ZtLmdldExhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnNlYXJjaF9tYWNoaW5lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgbWFjaGluZXMgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFjaGluZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gubWFjaGluZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwibWFjaGluZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLm1hY2hpbmVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2l0ZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2VhcmNoX3NpdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgU2l0ZS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNpdGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnNpdGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInNpdGVfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5zaXRlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNpdGVfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJPcGVuXCIsIFwiQ2xvc2VkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgU3RhdHVzLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInN0YXR1c1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5jcmVhdGVkX3VzZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ3JlYXRlZCBieS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNyZWF0ZWRfYnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmNyZWF0ZWRfYnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImNyZWF0ZWRfYnlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jcmVhdGVkX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMyBwdC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGF0ZXRpbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDcmVhdGVkIGZyb20gZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guY3JlYXRlZF9mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJjcmVhdGVkX2Zyb21cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jcmVhdGVkX2Zyb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0zIHB0LTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkYXRldGltZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNyZWF0ZWQgdG8gZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guY3JlYXRlZF90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiY3JlYXRlZF90b1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmNyZWF0ZWRfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTYgcHQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6IFwiNDAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwianVzdGlmeS1jb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzlweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkIDFweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjNweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc2VhcmNoLnRhdF9mcm9tKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUQVRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJzb2xpZCAxcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIzcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnNlYXJjaC50YXRfdG8pKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJNdWx0aVJhbmdlU2xpZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlQ2xhc3NOYW1lOiBcIm11bHRpLXJhbmdlLXNsaWRlci1iYXItb25seVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblZhbHVlOiBfdm0uc2VhcmNoLnRhdF9mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFZhbHVlOiBfdm0uc2VhcmNoLnRhdF90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZU1hcmdpbjogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBpbnB1dDogX3ZtLlVwZGF0ZVZhbHVlcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2VhcmNoXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mbyBtbC0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlc2V0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLlRpY2tldHMuZGF0YSwgZnVuY3Rpb24odGlja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogdGlja2V0LmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQudGlja2V0X25vKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2FwaXRhbGl6ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRpY2tldC5tYWNoaW5lLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQubWFjaGluZS5mYXJfbm8pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC5jcmVhdGVkX2J5X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fZihcIm15RGF0ZVwiKSh0aWNrZXQuY3JlYXRlZF9hdCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJteURhdGVcIikodGlja2V0Lmxpa2VseV9kYXRlKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC5hY3R1YWxfZGF0ZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKHRpY2tldC5zdGF0dXMpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aWNrZXQuYWN0dWFsX2RhdGUgPyB0aWNrZXQudGF0IDogXCItXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9vdGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkYXRhOiBfdm0uVGlja2V0cyB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IFwicGFnaW5hdGlvbi1jaGFuZ2UtcGFnZVwiOiBfdm0uZ2V0UmVzdWx0cyB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0uJGdhdGUuaXNBZG1pbigpID8gX2MoXCJkaXZcIiwgW19jKFwibm90LWZvdW5kXCIpXSwgMSkgOiBfdm0uX2UoKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbX3ZtLl92KFwiVGlja2V0IFJlcG9ydFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10b29sc1wiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVGlja2V0IE5vIFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJNYWNoaW5lIE5hbWVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTWFjaGluZSBGYXIgTm9cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3JlYXRlZCBCeVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDcmVhdGVkIERhdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRXhwZWN0ZWQgZGF0ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJSZXNvdWx1dGlvbiBkYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlRpY2tldCBTdGF0dXNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVEFUXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWU0ZTdlZWJlXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZXBvcnQudnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjIzMzZmOWE5XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1JlcG9ydC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZXBvcnQudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZXBvcnQudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1JlcG9ydC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1JlcG9ydC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZTRlN2VlYmVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUmVwb3J0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXFRpY2tldHNcXFxcUmVwb3J0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1lNGU3ZWViZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWU0ZTdlZWJlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=