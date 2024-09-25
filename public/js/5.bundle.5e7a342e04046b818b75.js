(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/MasterReport.vue":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/MasterReport.vue ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var multi_range_slider_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multi-range-slider-vue */ "./node_modules/multi-range-slider-vue/MultiRangeSlider.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import VueReadMoreSmooth from "vue-read-more-smooth";

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MasterReport",
  components: {
    VueReadMoreSmooth: () => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! vue-read-more-smooth */ "./node_modules/vue-read-more-smooth/dist/vue-read-more-smooth.common.js", 7)),
    MultiRangeSlider: multi_range_slider_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    MachinePop: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./MachineFarPop.vue */ "./resources/js/components/MachineFarPop.vue"))
  },
  data() {
    return {
      stageMore: [],
      additionalMore: [],
      problemsMore: [],
      rcaMore: [],
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
        complaint_nature: '',
        ticket_type: '',
        ticket: ''
      },
      categories: [],
      sub_categories: [],
      sites: [],
      selected_machine: '',
      users: [],
      machines: [],
      Tickets: {},
      sl: 1,
      json_fields: {
        "Sl No": {
          callback: () => {
            return this.sl++;
          }
        },
        'Site name': 'site_name',
        'Equipment Description': 'machine_name',
        'FAR No': 'far_no',
        'Complaint No': 'ticket_no',
        'Complaint date': "created_at",
        'Complaint Raised By': 'created_by_name',
        'Complaint Nature': 'complaint_nature',
        'Status During Complaint': 'status_during_complaint',
        'Problem description': 'problem_description',
        'Additional Problem': {
          field: "problems",
          callback: problem => {
            let ret = '';
            if (problem) {
              ret = problem.map(value => value.problem).join("\r\n");
            }
            return ret;
          }
        },
        "Current Status": {
          field: "status",
          callback: status => {
            return status.toLowerCase() == 'created by user' ? 'Open' : status;
          }
        },
        "Current Stage": {
          field: "last_stage",
          callback: value => {
            return value ? value.description : '-';
          }
        },
        "Status Post Resolution": 'machine_status',
        'Expected Resolution date': 'likely_date',
        'Revised Expected date': 'reversion_date',
        'Reason for date Revision': 'reversion_reason',
        'Actual Resolve Date': 'actual_date',
        'TAT': 'tat',
        'Estimated Cost': 'estimated_cost',
        'Actual Cost': 'actual_cost',
        'Production Loss': 'production_loss',
        'RCA': 'rca'
      },
      json_meta: [[{
        key: "charset",
        value: "utf-8"
      }]],
      sl: 0
    };
  },
  methods: {
    view_site_details(data) {
      this.pmModalData = data;
      $('#MachineSiteModal3').modal('show');
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
        complaint_nature: '',
        ticket_type: '',
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
      const response = await axios.get('api/ticket/export', {
        params: this.search
      });
      // const response = await axios.get('api/ticket/export');
      return response.data.data;
    },
    startDownload() {
      this.sl = 1;
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
      axios.get('/api/ticket/report', {
        params: this.search
      }).then(data => {
        this.Tickets = data.data.data;
        this.additionalMore = new Array(this.Tickets.data.length).fill(false);
        this.problemsMore = new Array(this.Tickets.data.length).fill(false);
        this.stageMore = new Array(this.Tickets.data.length).fill(false);
        this.rcaMore = new Array(this.Tickets.data.length).fill(false);
      });
      this.$Progress.finish();
    },
    loadTickets() {
      axios.get("/api/ticket/report", {
        params: this.search
      }).then(data => {
        this.Tickets = data.data.data;
        this.additionalMore = new Array(this.Tickets.data.length).fill(false);
        this.problemsMore = new Array(this.Tickets.data.length).fill(false);
        this.stageMore = new Array(this.Tickets.data.length).fill(false);
        this.rcaMore = new Array(this.Tickets.data.length).fill(false);
      });
    },
    read_more(x, p = '') {
      if (p) {
        if (p == 's') {
          let a = this.stageMore[x] ? false : true;
          this.$set(this.stageMore, x, a);
        } else if (p == 'rc') {
          let a = this.rcaMore[x] ? false : true;
          this.$set(this.rcaMore, x, a);
        } else {
          let a = this.problemsMore[x] ? false : true;
          this.$set(this.problemsMore, x, a);
        }
      } else {
        let a = this.additionalMore[x] ? false : true;
        this.$set(this.additionalMore, x, a);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/MasterReport.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/MasterReport.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.rmore {\r\n    color: blue;\n}\r\n", "", {"version":3,"sources":["C:/devlopment/wamp64/www/royal-infraconstruction/resources/js/components/resources/js/components/MasterReport.vue"],"names":[],"mappings":";AA4eA;IACA,YAAA;CACA","file":"MasterReport.vue","sourcesContent":["<template>\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-12\">\r\n\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Master Report</h3>\r\n                            <div class=\"card-tools\">\r\n                                <download-excel class=\"btn btn-sm btn-primary\" :fetch=\"export_csv\" :fields=\"json_fields\"\r\n                                    :before-generate=\"startDownload\" :before-finish=\"finishDownload\"\r\n                                    worksheet=\"My Worksheet\" type=\"csv\" name=\"master_report.csv\">\r\n                                    <span class=\"labelText\"><img :src=\"set_image('images/file.png')\" class=\"icon\"\r\n                                            width=\"20\">Export CSV</span>\r\n                                </download-excel>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"card-body p-2\">\r\n                            <form autocomplete=\"off\" @submit.prevent=\"getResults()\">\r\n                                <div class=\"form-row\">\r\n                                    <div class=\"col col-2\">\r\n                                        <v-select label=\"name\" :get-option-label=\"getLabel\"\r\n                                            :reduce=\"(option) => option.id\" :options=\"search_machines\"\r\n                                            placeholder=\"Enter machines ...\" v-model=\"search.machine_id\"\r\n                                            name=\"machine_id\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-2\">\r\n                                        <input type=\"text\" placeholder=\"Enter ticket ...\" v-model=\"search.ticket\"\r\n                                            name=\"ticket\" class=\"form-control\">\r\n                                    </div>\r\n                                    <div class=\"col col-2\">\r\n                                        <v-select label=\"site_name\" :reduce=\"(option) => option.id\"\r\n                                            :options=\"search_sites\" placeholder=\"Select Site...\"\r\n                                            v-model=\"search.site_id\" name=\"site_id\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-2\">\r\n                                        <v-select label=\"site_name\" :options=\"['Open', 'Closed']\"\r\n                                            placeholder=\"Select Status...\" v-model=\"search.status\" name=\"status\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-2 \">\r\n                                        <v-select label=\"name\" :options=\"created_users\" :reduce=\"(option) => option.id\"\r\n                                            placeholder=\"Created by...\" v-model=\"search.created_by\" name=\"created_by\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-2 \">\r\n                                        <v-select label=\"name\"\r\n                                            :options=\"['Periodic Maintenance','Breakdown Maintenance']\"\r\n                                            placeholder=\"Ticket Type...\" v-model=\"search.ticket_type\"\r\n                                            name=\"ticket_type\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-2 pt-2\">\r\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.created_from\"\r\n                                            input-class=\"form-control\" placeholder=\"Created from date\" />\r\n                                    </div>\r\n                                    <div class=\"col col-2 pt-2\">\r\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.created_to\"\r\n                                            input-class=\"form-control\" placeholder=\"Created to date\" />\r\n                                    </div>\r\n                                    <div class=\"col col-2 pt-2\">\r\n                                        <v-select label=\"site_name\" :options=\"['Major', 'Minor']\"\r\n                                            placeholder=\"Select Complaint Nature\" v-model=\"search.complaint_nature\"\r\n                                            name=\"complaint_nature\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-4 pt-2\">\r\n                                        <fieldset style=\"max-width: 400px; margin: auto; text-align: left;  \">\r\n                                            <div\r\n                                                style=\"display: flex; justify-content: space-between; text-align: center; height: 39px;\">\r\n                                                <span style=\"\r\n          display: inline-block;\r\n          padding: 5px;\r\n          border: solid 1px;\r\n          border-radius: 5px;\r\n          width: 100px;\r\n          margin: 3px;\r\n\r\n        \">{{ search.tat_from }}</span>\r\n                                                <span style=\"top: 25%; position: relative;\">TAT</span>\r\n                                                <span style=\"\r\n          display: inline-block;\r\n          padding: 5px;\r\n          border: solid 1px;\r\n          border-radius: 5px;\r\n          width: 100px;\r\n          margin: 3px;\r\n        \">{{ search.tat_to }}</span>\r\n                                            </div>\r\n\r\n                                            <MultiRangeSlider baseClassName=\"multi-range-slider-bar-only\"\r\n                                                :minValue=\"search.tat_from\" :maxValue=\"search.tat_to\" :max=\"100\"\r\n                                                :min=\"0\" :step=\"1\" :rangeMargin=\"0\" @input=\"UpdateValues\" />\r\n                                        </fieldset>\r\n                                    </div>\r\n                                    <div class=\"col pt-2\">\r\n                                        <button type=\"submit\" class=\"btn btn-success\">Search</button>\r\n                                        <button type=\"button\" class=\"btn btn-info ml-2\"\r\n                                            @click=\"reset_filter()\">Reset</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n\r\n                        <!-- /.card-header -->\r\n                        <div class=\"card-body table-responsive p-0 masterTable\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>S.N</th>\r\n                                        <th>Site name</th>\r\n                                        <th>Equipment<br> Description</th>\r\n                                        <th>Model</th>\r\n                                        <th>FAR No</th>\r\n                                        <th>Complaint<br> No</th>\r\n                                        <th>Complaint <br>date</th>\r\n                                        <th>Complaint<br> Raised By</th>\r\n                                        <th>Complaint <br>Nature</th>\r\n                                        <th>Status <br>During Complaint</th>\r\n                                        <th>Ticket Type</th>\r\n                                        <th width=\"10\">Problem description</th>\r\n                                        <th width=\"10\">Additional <br> Problems</th>\r\n                                        <th>Current <br>Status</th>\r\n                                        <th>Current <br>Stage</th>\r\n                                        <th>Current <br>Stage Date</th>\r\n                                        <th>Current<br> Stage Description</th>\r\n                                        <th>Status <br> Post Resolution</th>\r\n                                        <th>RCA</th>\r\n                                        <th>Expected <br> Resolution date</th>\r\n                                        <th>Revised <br> Expected date</th>\r\n                                        <th>Reason for<br>Date Revision</th>\r\n                                        <th>Actual <br> Resolve Date</th>\r\n                                        <th>TAT</th>\r\n                                        <th>Estimated<br> Cost</th>\r\n                                        <th>Actual<br> Cost</th>\r\n                                        <th>Production<br> Loss</th>\r\n\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr v-for=\"(ticket, x) in Tickets.data\" :key=\"ticket.id\">\r\n                                        <td>{{ Tickets.from + x }}</td>\r\n                                        <td class=\"text-capitalize\">{{ ticket.site_name }}</td>\r\n                                        <td>{{ ticket.machine.name }}</td>\r\n                                        <td>{{ ticket.machine.machine_model ? ticket.machine.machine_model.name : '-' }}\r\n                                        </td>\r\n                                        <td @click=\"view_site_details(ticket.machine)\">{{ ticket.far_no }}</td>\r\n                                        <td>{{ ticket.ticket_no }}</td>\r\n                                        <td>{{ ticket.created_at }}</td>\r\n                                        <td>{{ ticket.created_by_name }}</td>\r\n                                        <td>{{ ticket.complaint_nature }}</td>\r\n                                        <td>{{ ticket.status_during_complaint }}</td>\r\n                                        <td>{{ ticket.ticket_type }}</td>\r\n                                        <td>\r\n                                            <template v-if=\"ticket.problem_description\">\r\n                                                <VueReadMoreSmooth :open.sync=\"problemsMore[x]\" no-button no-shadow>\r\n                                                    <p :key=\"'pd'+x\">{{ ticket.problem_description }}</p>\r\n                                                </VueReadMoreSmooth>\r\n                                                <span @click=\"read_more(x, 'p')\" class=\"rmore\">...{{\r\n                                                problemsMore[x]?'Less': 'More' }}</span>\r\n                                            </template>\r\n                                        </td>\r\n                                        <td>\r\n                                            <template v-if=\"ticket.problems && ticket.problems.length > 0\">\r\n                                                <VueReadMoreSmooth :open.sync=\"additionalMore[x]\" no-button no-shadow>\r\n                                                    <p v-if=\"ticket.problems\" v-for=\"(item, index) in ticket.problems\"\r\n                                                        :key=\"'p' + index\" v-html=\"item.problem\"></p>\r\n                                                </VueReadMoreSmooth>\r\n                                                <span @click=\"read_more(x)\" class=\"rmore\">...{{\r\n                                                additionalMore[x]?'Less': 'More' }}</span>\r\n                                            </template>\r\n                                        </td>\r\n                                        <td>{{ ticket.status.toLowerCase() == 'created by user' ? 'Open' : ticket.status }}\r\n                                        </td>\r\n                                        <td>{{ ticket.status == 'Closed' ? '-' : ticket.current_stage }}</td>\r\n                                        <td>{{\r\n                                            ticket.status == 'Closed' ? '-' : ticket.last_stage ? ticket.last_stage.stage_date\r\n                                                : '' | myDate\r\n                                        }}</td>\r\n                                        <td>\r\n                                            <template v-if=\"ticket.status != 'Closed' && ticket.last_stage\">\r\n                                                <VueReadMoreSmooth :open.sync=\"stageMore[x]\" no-button no-shadow>\r\n                                                    <p>{{ ticket.last_stage.description }}</p>\r\n                                                </VueReadMoreSmooth>\r\n                                                <span @click=\"read_more(x, 's')\" class=\"rmore\">...{{\r\n                                                stageMore[x]?'Less': 'More' }}</span>\r\n                                            </template>\r\n                                        </td>\r\n                                        <td>{{ ticket.machine_status }}</td>\r\n                                        <td>\r\n\r\n                                            <template v-if=\"ticket.rca\">\r\n                                                <VueReadMoreSmooth :open.sync=\"rcaMore[x]\" no-button no-shadow\r\n                                                    :key=\"'rcm'+x\">\r\n                                                    <p>{{ ticket.rca }}</p>\r\n                                                </VueReadMoreSmooth>\r\n                                                <span @click=\"read_more(x, 'rc')\" class=\"rmore\">...{{\r\n    rcaMore[x]?'Less': 'More' }}</span>\r\n\r\n                                            </template>\r\n                                        </td>\r\n                                        <td>{{ ticket.likely_date | myDate }}</td>\r\n                                        <td>{{ ticket.reversion_date|myDate }}</td>\r\n                                        <td>{{ ticket.reversion_reason }}</td>\r\n                                        <td>{{ ticket.actual_date }}</td>\r\n                                        <td>{{ ticket.actual_date ? ticket.tat : '-' }}</td>\r\n                                        <td>{{(ticket.estimated_service_cost + ticket.estimated_material_cost +\r\n                                        ticket.ad_estimated_material_cost + ticket.ad_estimated_service_cost)\r\n                                        | toCurrency}}</td>\r\n                                        <td>{{(ticket.actual_service_cost + ticket.actual_material_cost) | toCurrency}}\r\n                                        </td>\r\n                                        <td>{{ ticket.production_loss | toCurrency }}</td>\r\n\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <!-- /.card-body -->\r\n                        <div class=\"card-footer\">\r\n                            <pagination :data=\"Tickets\" @pagination-change-page=\"getResults\"></pagination>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.card -->\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n        <MachinePop id=\"MachineSiteModal3\" :machine=\"pmModalData\" />\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n//import VueReadMoreSmooth from \"vue-read-more-smooth\";\r\nimport MultiRangeSlider from \"multi-range-slider-vue\";\r\nexport default {\r\n    name:\"MasterReport\",\r\n    components: {\r\n        VueReadMoreSmooth : () => import('vue-read-more-smooth'),\r\n        MultiRangeSlider,\r\n        MachinePop: () => import('./MachineFarPop.vue'),\r\n    },\r\n    data() {\r\n        return {\r\n            stageMore: [],\r\n            additionalMore: [],\r\n            problemsMore: [],\r\n            rcaMore: [],\r\n            pmModalData: '',\r\n            created_users: [],\r\n            search_machines: [],\r\n            search_sites: [],\r\n            search: {\r\n                page: 1,\r\n                machine_id: '',\r\n                site_id: '',\r\n                created_by: '',\r\n                created_from: '',\r\n                created_to: '',\r\n                tat_from: 0,\r\n                tat_to: 90,\r\n                complaint_nature:'',\r\n                ticket_type:'',\r\n                ticket:''\r\n            },\r\n            categories: [],\r\n            sub_categories: [],\r\n            sites: [],\r\n            selected_machine: '',\r\n            users: [],\r\n            machines: [],\r\n            Tickets: {},\r\n            sl: 1,\r\n            json_fields: {\r\n                \"Sl No\": {\r\n                    callback: () => {\r\n                        return this.sl++;\r\n                    },\r\n                },\r\n                'Site name': 'site_name',\r\n                'Equipment Description': 'machine_name',\r\n                'FAR No': 'far_no',\r\n                'Complaint No': 'ticket_no',\r\n                'Complaint date': \"created_at\",\r\n                'Complaint Raised By': 'created_by_name',\r\n                'Complaint Nature': 'complaint_nature',\r\n                'Status During Complaint': 'status_during_complaint',\r\n                'Problem description': 'problem_description',\r\n                'Additional Problem': {\r\n                    field: \"problems\",\r\n                    callback: (problem) => {\r\n                        let ret = ''\r\n                        if (problem) {\r\n                            ret = problem.map(value => value.problem).join(\"\\r\\n\");\r\n                        }\r\n                        return ret;\r\n                    },\r\n                },\r\n                \"Current Status\": {\r\n                    field: \"status\",\r\n                    callback: (status) => {\r\n                        return status.toLowerCase() == 'created by user' ? 'Open' : status;\r\n                    },\r\n                },\r\n                \"Current Stage\": {\r\n                    field: \"last_stage\",\r\n                    callback: (value) => {\r\n                        return value ? value.description : '-';\r\n                    },\r\n                },\r\n                \"Status Post Resolution\": 'machine_status',\r\n                'Expected Resolution date': 'likely_date',\r\n                'Revised Expected date':'reversion_date',\r\n                'Reason for date Revision':'reversion_reason',\r\n                'Actual Resolve Date': 'actual_date',\r\n                'TAT': 'tat',\r\n                'Estimated Cost': 'estimated_cost',\r\n                'Actual Cost': 'actual_cost',\r\n                'Production Loss': 'production_loss',\r\n                'RCA': 'rca'\r\n            },\r\n            json_meta: [\r\n                [{\r\n                    key: \"charset\",\r\n                    value: \"utf-8\",\r\n                },],\r\n            ],\r\n            sl: 0,\r\n        }\r\n    },\r\n    methods: {\r\n        view_site_details(data) {\r\n            this.pmModalData = data\r\n            $('#MachineSiteModal3').modal('show');\r\n        },\r\n        reset_filter() {\r\n            this.search = {\r\n                page: 1,\r\n                machine_id: '',\r\n                site_id: '',\r\n                created_by: '',\r\n                created_from: '',\r\n                created_to: '',\r\n                tat_from: 0,\r\n                tat_to: 90,\r\n                complaint_nature:'',\r\n                ticket_type:'',\r\n                ticket:''\r\n            }\r\n            this.getResults()\r\n        },\r\n        UpdateValues(e) {\r\n            this.search.tat_from = e.minValue;\r\n            this.search.tat_to = e.maxValue;\r\n        },\r\n        // excel\r\n        async export_csv() {\r\n            const response = await  axios.get('api/ticket/export', {\r\n                params: this.search\r\n            });\r\n           // const response = await axios.get('api/ticket/export');\r\n            return response.data.data;\r\n        },\r\n        startDownload() {\r\n            this.sl = 1;\r\n            Swal.fire({\r\n                title: 'Please Wait !',\r\n                html: 'Data populating', // add html attribute if you want or remove\r\n                allowOutsideClick: false,\r\n                onBeforeOpen: () => {\r\n                    Swal.showLoading()\r\n                },\r\n            });\r\n        },\r\n        finishDownload() {\r\n            Swal.close()\r\n        },\r\n\r\n        getLabel(val) {\r\n            if (typeof val === 'object') {\r\n                return val.far_no + ' - ' + val.name;\r\n            } else {\r\n                return val;\r\n            }\r\n        },\r\n        getResults(page = 1) {\r\n            this.$Progress.start();\r\n            this.search.page = page\r\n            axios.get('/api/ticket/report', {\r\n                params: this.search\r\n            })\r\n                .then((data) => {\r\n                    this.Tickets = data.data.data\r\n                    this.additionalMore = new Array(this.Tickets.data.length).fill(false);\r\n                    this.problemsMore = new Array(this.Tickets.data.length).fill(false);\r\n                    this.stageMore = new Array(this.Tickets.data.length).fill(false);\r\n                    this.rcaMore= new Array(this.Tickets.data.length).fill(false);\r\n                })\r\n\r\n            this.$Progress.finish();\r\n        },\r\n        loadTickets() {\r\n\r\n            axios.get(\"/api/ticket/report\", {\r\n                params: this.search\r\n            }).then((data) => {\r\n                this.Tickets = data.data.data\r\n                this.additionalMore = new Array(this.Tickets.data.length).fill(false);\r\n                this.problemsMore = new Array(this.Tickets.data.length).fill(false);\r\n                this.stageMore = new Array(this.Tickets.data.length).fill(false);\r\n                this.rcaMore= new Array(this.Tickets.data.length).fill(false);\r\n            })\r\n\r\n\r\n\r\n        },\r\n        read_more(x, p = '') {\r\n            if (p) {\r\n                if (p == 's') {\r\n                    let a = this.stageMore[x] ? false : true\r\n                    this.$set(this.stageMore, x, a);\r\n                } else if(p == 'rc'){\r\n                    let a = this.rcaMore[x] ? false : true\r\n                    this.$set(this.rcaMore, x, a);\r\n                } else {\r\n                    let a = this.problemsMore[x] ? false : true\r\n                    this.$set(this.problemsMore, x, a);\r\n                }\r\n            } else {\r\n                let a = this.additionalMore[x] ? false : true\r\n                this.$set(this.additionalMore, x, a);\r\n            }\r\n        }\r\n\r\n    },\r\n    created() {\r\n        this.loadTickets();\r\n    },\r\n    beforeCreate() {\r\n        axios.get(\"api/get_pre_machine\")\r\n            .then((res) => {\r\n                this.categories = res.data.data.Category;\r\n                this.sites = res.data.data.sites;\r\n            })\r\n        axios.get(\"/api/initial_ticket\").then(response => {\r\n            this.users = response.data.data.vendors;\r\n            this.machines = response.data.data.machines;\r\n            this.search_machines = response.data.data.machines;\r\n            this.search_sites = response.data.data.sites;\r\n            this.created_users = response.data.data.created_users;\r\n        }).catch(() => console.warn('Oh. Something went wrong'));\r\n    },\r\n    watch: {\r\n        async 'form.sub_category_id'(n, o) {\r\n            if (n) {\r\n                this.get_machine()\r\n            }\r\n        },\r\n        async 'form.site_id'(n, o) {\r\n            if (n) {\r\n                this.get_machine()\r\n            }\r\n        },\r\n\r\n        'form.category_id': {\r\n            handler: function (n, o) {\r\n\r\n                if (n) {\r\n                    axios.get(\"api/category/\" + n)\r\n                        .then((res) => {\r\n                            this.sub_categories = res.data.data;\r\n                        })\r\n                    this.get_machine()\r\n                }\r\n            },\r\n            deep: true,\r\n            initial: true\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n<style>\r\n.rmore {\r\n    color: blue;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7c6e886e\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/MasterReport.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7c6e886e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/MasterReport.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
                  _vm._v("Master Report")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-tools" },
                  [
                    _c(
                      "download-excel",
                      {
                        staticClass: "btn btn-sm btn-primary",
                        attrs: {
                          fetch: _vm.export_csv,
                          fields: _vm.json_fields,
                          "before-generate": _vm.startDownload,
                          "before-finish": _vm.finishDownload,
                          worksheet: "My Worksheet",
                          type: "csv",
                          name: "master_report.csv"
                        }
                      },
                      [
                        _c("span", { staticClass: "labelText" }, [
                          _c("img", {
                            staticClass: "icon",
                            attrs: {
                              src: _vm.set_image("images/file.png"),
                              width: "20"
                            }
                          }),
                          _vm._v("Export CSV")
                        ])
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
                              options: [
                                "Periodic Maintenance",
                                "Breakdown Maintenance"
                              ],
                              placeholder: "Ticket Type...",
                              name: "ticket_type"
                            },
                            model: {
                              value: _vm.search.ticket_type,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "ticket_type", $$v)
                              },
                              expression: "search.ticket_type"
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
                              placeholder: "Select Complaint Nature",
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
                { staticClass: "card-body table-responsive p-0 masterTable" },
                [
                  _c("table", { staticClass: "table table-hover" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.Tickets.data, function(ticket, x) {
                        return _c("tr", { key: ticket.id }, [
                          _c("td", [_vm._v(_vm._s(_vm.Tickets.from + x))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-capitalize" }, [
                            _vm._v(_vm._s(ticket.site_name))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.machine.name))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                ticket.machine.machine_model
                                  ? ticket.machine.machine_model.name
                                  : "-"
                              ) + "\n                                    "
                            )
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
                            [_vm._v(_vm._s(ticket.far_no))]
                          ),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.ticket_no))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.created_at))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.created_by_name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.complaint_nature))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(ticket.status_during_complaint))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.ticket_type))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              ticket.problem_description
                                ? [
                                    _c(
                                      "VueReadMoreSmooth",
                                      {
                                        attrs: {
                                          open: _vm.problemsMore[x],
                                          "no-button": "",
                                          "no-shadow": ""
                                        },
                                        on: {
                                          "update:open": function($event) {
                                            return _vm.$set(
                                              _vm.problemsMore,
                                              x,
                                              $event
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("p", { key: "pd" + x }, [
                                          _vm._v(
                                            _vm._s(ticket.problem_description)
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "rmore",
                                        on: {
                                          click: function($event) {
                                            return _vm.read_more(x, "p")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "..." +
                                            _vm._s(
                                              _vm.problemsMore[x]
                                                ? "Less"
                                                : "More"
                                            )
                                        )
                                      ]
                                    )
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              ticket.problems && ticket.problems.length > 0
                                ? [
                                    _c(
                                      "VueReadMoreSmooth",
                                      {
                                        attrs: {
                                          open: _vm.additionalMore[x],
                                          "no-button": "",
                                          "no-shadow": ""
                                        },
                                        on: {
                                          "update:open": function($event) {
                                            return _vm.$set(
                                              _vm.additionalMore,
                                              x,
                                              $event
                                            )
                                          }
                                        }
                                      },
                                      _vm._l(ticket.problems, function(
                                        item,
                                        index
                                      ) {
                                        return ticket.problems
                                          ? _c("p", {
                                              key: "p" + index,
                                              domProps: {
                                                innerHTML: _vm._s(item.problem)
                                              }
                                            })
                                          : _vm._e()
                                      }),
                                      0
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "rmore",
                                        on: {
                                          click: function($event) {
                                            return _vm.read_more(x)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "..." +
                                            _vm._s(
                                              _vm.additionalMore[x]
                                                ? "Less"
                                                : "More"
                                            )
                                        )
                                      ]
                                    )
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                ticket.status.toLowerCase() == "created by user"
                                  ? "Open"
                                  : ticket.status
                              ) + "\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                ticket.status == "Closed"
                                  ? "-"
                                  : ticket.current_stage
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("myDate")(
                                  ticket.status == "Closed"
                                    ? "-"
                                    : ticket.last_stage
                                    ? ticket.last_stage.stage_date
                                    : ""
                                )
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              ticket.status != "Closed" && ticket.last_stage
                                ? [
                                    _c(
                                      "VueReadMoreSmooth",
                                      {
                                        attrs: {
                                          open: _vm.stageMore[x],
                                          "no-button": "",
                                          "no-shadow": ""
                                        },
                                        on: {
                                          "update:open": function($event) {
                                            return _vm.$set(
                                              _vm.stageMore,
                                              x,
                                              $event
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("p", [
                                          _vm._v(
                                            _vm._s(
                                              ticket.last_stage.description
                                            )
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "rmore",
                                        on: {
                                          click: function($event) {
                                            return _vm.read_more(x, "s")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "..." +
                                            _vm._s(
                                              _vm.stageMore[x] ? "Less" : "More"
                                            )
                                        )
                                      ]
                                    )
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.machine_status))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              ticket.rca
                                ? [
                                    _c(
                                      "VueReadMoreSmooth",
                                      {
                                        key: "rcm" + x,
                                        attrs: {
                                          open: _vm.rcaMore[x],
                                          "no-button": "",
                                          "no-shadow": ""
                                        },
                                        on: {
                                          "update:open": function($event) {
                                            return _vm.$set(
                                              _vm.rcaMore,
                                              x,
                                              $event
                                            )
                                          }
                                        }
                                      },
                                      [_c("p", [_vm._v(_vm._s(ticket.rca))])]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "rmore",
                                        on: {
                                          click: function($event) {
                                            return _vm.read_more(x, "rc")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "..." +
                                            _vm._s(
                                              _vm.rcaMore[x] ? "Less" : "More"
                                            )
                                        )
                                      ]
                                    )
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm._f("myDate")(ticket.likely_date)))
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm._f("myDate")(ticket.reversion_date))
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.reversion_reason))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.actual_date))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(ticket.actual_date ? ticket.tat : "-")
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("toCurrency")(
                                  ticket.estimated_service_cost +
                                    ticket.estimated_material_cost +
                                    ticket.ad_estimated_material_cost +
                                    ticket.ad_estimated_service_cost
                                )
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("toCurrency")(
                                  ticket.actual_service_cost +
                                    ticket.actual_material_cost
                                )
                              ) + "\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("toCurrency")(ticket.production_loss)
                              )
                            )
                          ])
                        ])
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
                    attrs: { data: _vm.Tickets },
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
        attrs: { id: "MachineSiteModal3", machine: _vm.pmModalData }
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
        _c("th", [_vm._v("S.N")]),
        _vm._v(" "),
        _c("th", [_vm._v("Site name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Equipment"), _c("br"), _vm._v(" Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Model")]),
        _vm._v(" "),
        _c("th", [_vm._v("FAR No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Complaint"), _c("br"), _vm._v(" No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Complaint "), _c("br"), _vm._v("date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Complaint"), _c("br"), _vm._v(" Raised By")]),
        _vm._v(" "),
        _c("th", [_vm._v("Complaint "), _c("br"), _vm._v("Nature")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status "), _c("br"), _vm._v("During Complaint")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ticket Type")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10" } }, [_vm._v("Problem description")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10" } }, [
          _vm._v("Additional "),
          _c("br"),
          _vm._v(" Problems")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Current "), _c("br"), _vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Current "), _c("br"), _vm._v("Stage")]),
        _vm._v(" "),
        _c("th", [_vm._v("Current "), _c("br"), _vm._v("Stage Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Current"), _c("br"), _vm._v(" Stage Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status "), _c("br"), _vm._v(" Post Resolution")]),
        _vm._v(" "),
        _c("th", [_vm._v("RCA")]),
        _vm._v(" "),
        _c("th", [_vm._v("Expected "), _c("br"), _vm._v(" Resolution date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Revised "), _c("br"), _vm._v(" Expected date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Reason for"), _c("br"), _vm._v("Date Revision")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actual "), _c("br"), _vm._v(" Resolve Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("TAT")]),
        _vm._v(" "),
        _c("th", [_vm._v("Estimated"), _c("br"), _vm._v(" Cost")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actual"), _c("br"), _vm._v(" Cost")]),
        _vm._v(" "),
        _c("th", [_vm._v("Production"), _c("br"), _vm._v(" Loss")])
      ])
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/MasterReport.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/MasterReport.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MasterReport.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/MasterReport.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("78a90d28", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/js/components/MasterReport.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/MasterReport.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MasterReport_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./MasterReport.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/MasterReport.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c6e886e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MasterReport_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-7c6e886e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./MasterReport.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7c6e886e\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/MasterReport.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./MasterReport.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/MasterReport.vue")
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MasterReport_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c6e886e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MasterReport_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c6e886e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MasterReport_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\MasterReport.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTWFzdGVyUmVwb3J0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYXN0ZXJSZXBvcnQudnVlPzBlYmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTWFzdGVyUmVwb3J0LnZ1ZT9hNmMwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL01hc3RlclJlcG9ydC52dWU/NzU0YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYXN0ZXJSZXBvcnQudnVlIl0sIm5hbWVzIjpbIm5hbWUiLCJjb21wb25lbnRzIiwiVnVlUmVhZE1vcmVTbW9vdGgiLCJNdWx0aVJhbmdlU2xpZGVyIiwiTWFjaGluZVBvcCIsImRhdGEiLCJzdGFnZU1vcmUiLCJhZGRpdGlvbmFsTW9yZSIsInByb2JsZW1zTW9yZSIsInJjYU1vcmUiLCJwbU1vZGFsRGF0YSIsImNyZWF0ZWRfdXNlcnMiLCJzZWFyY2hfbWFjaGluZXMiLCJzZWFyY2hfc2l0ZXMiLCJzZWFyY2giLCJwYWdlIiwibWFjaGluZV9pZCIsInNpdGVfaWQiLCJjcmVhdGVkX2J5IiwiY3JlYXRlZF9mcm9tIiwiY3JlYXRlZF90byIsInRhdF9mcm9tIiwidGF0X3RvIiwiY29tcGxhaW50X25hdHVyZSIsInRpY2tldF90eXBlIiwidGlja2V0IiwiY2F0ZWdvcmllcyIsInN1Yl9jYXRlZ29yaWVzIiwic2l0ZXMiLCJzZWxlY3RlZF9tYWNoaW5lIiwidXNlcnMiLCJtYWNoaW5lcyIsIlRpY2tldHMiLCJzbCIsImpzb25fZmllbGRzIiwiY2FsbGJhY2siLCJmaWVsZCIsInJldCIsImpzb25fbWV0YSIsImtleSIsInZhbHVlIiwibWV0aG9kcyIsInZpZXdfc2l0ZV9kZXRhaWxzIiwiJCIsInJlc2V0X2ZpbHRlciIsIlVwZGF0ZVZhbHVlcyIsInBhcmFtcyIsInN0YXJ0RG93bmxvYWQiLCJTd2FsIiwidGl0bGUiLCJodG1sIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJvbkJlZm9yZU9wZW4iLCJmaW5pc2hEb3dubG9hZCIsImdldExhYmVsIiwiZ2V0UmVzdWx0cyIsImF4aW9zIiwidGhlbiIsImxvYWRUaWNrZXRzIiwicmVhZF9tb3JlIiwiY3JlYXRlZCIsImJlZm9yZUNyZWF0ZSIsIndhdGNoIiwiaGFuZGxlciIsImRlZXAiLCJpbml0aWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtQQTtBQUNzRDtBQUN2QztFQUNmQTtFQUNBQztJQUNBQztJQUNBQztJQUNBQztFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztRQUNBO1VBQ0FDO1lBQ0E7VUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7VUFDQUM7VUFDQUQ7WUFDQTtZQUNBO2NBQ0FFO1lBQ0E7WUFDQTtVQUNBO1FBQ0E7UUFDQTtVQUNBRDtVQUNBRDtZQUNBO1VBQ0E7UUFDQTtRQUNBO1VBQ0FDO1VBQ0FEO1lBQ0E7VUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBRyxZQUNBO1FBQ0FDO1FBQ0FDO01BQ0EsR0FDQTtNQUNBUDtJQUNBO0VBQ0E7RUFDQVE7SUFDQUM7TUFDQTtNQUNBQztJQUNBO0lBQ0FDO01BQ0E7UUFDQTdCO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0FvQjtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0E7TUFDQTtRQUNBQztNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQUM7UUFDQUM7UUFDQUM7UUFBQTtRQUNBQztRQUNBQztVQUNBSjtRQUNBO01BQ0E7SUFDQTtJQUNBSztNQUNBTDtJQUNBO0lBRUFNO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBQztRQUNBVjtNQUNBLEdBQ0FXO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO01BRUE7SUFDQTtJQUNBQztNQUVBRjtRQUNBVjtNQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO0lBSUE7SUFDQWE7TUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO01BQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtFQUVBO0VBQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBTCxpQ0FDQUM7TUFDQTtNQUNBO0lBQ0E7SUFDQUQ7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBTTtJQUNBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUE7TUFDQUM7UUFFQTtVQUNBUCwrQkFDQUM7WUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO01BQ0FPO01BQ0FDO0lBQ0E7RUFFQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDemVELDJCQUEyQixtQkFBTyxDQUFDLG1HQUFrRDtBQUNyRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsYUFBYSxvQkFBb0IsR0FBRyxZQUFZLG9LQUFvSyxNQUFNLFVBQVUsbXRLQUFtdEssY0FBYyxrQkFBa0IsbUlBQW1JLGdDQUFnQyxvQkFBb0IsY0FBYyx5R0FBeUcsMkJBQTJCLGdDQUFnQyxpQ0FBaUMsMkJBQTJCLDBCQUEwQixxQkFBcUIsbUJBQW1CLGtGQUFrRixvQkFBb0IsbUhBQW1ILDJCQUEyQixnQ0FBZ0MsaUNBQWlDLDJCQUEyQiwwQkFBMEIsaUJBQWlCLGlCQUFpQixxK0dBQXErRyxvQkFBb0IsaUZBQWlGLG9CQUFvQix1REFBdUQsdUJBQXVCLHVEQUF1RCwwRUFBMEUsZ0pBQWdKLGlCQUFpQix1REFBdUQsb0JBQW9CLHVEQUF1RCxxQkFBcUIsdURBQXVELDBCQUEwQix1REFBdUQsMkJBQTJCLHVEQUF1RCxrQ0FBa0MsdURBQXVELHNCQUFzQiwwVkFBMFYsOEJBQThCLHdMQUF3TCxxRkFBcUYsMHlCQUEweUIsdUZBQXVGLHFLQUFxSyw2RUFBNkUsbUdBQW1HLDBEQUEwRCx1REFBdUQsaVBBQWlQLDJWQUEyVixpQ0FBaUMsd0xBQXdMLGtGQUFrRixxS0FBcUsseUJBQXlCLGlZQUFpWSxjQUFjLHlMQUF5TCxvQ0FBb0MseUtBQXlLLCtCQUErQix1REFBdUQsZ0NBQWdDLHVEQUF1RCwyQkFBMkIsdURBQXVELHNCQUFzQix1REFBdUQseUNBQXlDLHVEQUF1RCw0T0FBNE8sdURBQXVELHlFQUF5RSxtR0FBbUcsdUNBQXVDLDR2QkFBNHZCLDREQUE0RCxvQkFBb0IsbURBQW1ELHVLQUF1SyxpQkFBaUIsb0JBQW9CLDhSQUE4UixrWUFBa1ksb05BQW9OLHFEQUFxRCxnQ0FBZ0MseUNBQXlDLDZDQUE2Qyx5QkFBeUIsc0JBQXNCLG1pQkFBbWlCLDRGQUE0RixrRkFBa0YsMkZBQTJGLDZCQUE2Qix1Q0FBdUMseUJBQXlCLHNCQUFzQiwwQ0FBMEMseUZBQXlGLCtGQUErRix5QkFBeUIsc0JBQXNCLHlDQUF5Qyw0RkFBNEYsbUVBQW1FLHlCQUF5QixzQkFBc0IsMmlCQUEyaUIsbURBQW1ELHVHQUF1Ryx3REFBd0QsU0FBUyxtQkFBbUIscUNBQXFDLDZGQUE2RixhQUFhLDZCQUE2QiwrQkFBK0Isa1lBQWtZLDhDQUE4Qyw4QkFBOEIsa0RBQWtELGdEQUFnRCxhQUFhLHFEQUFxRCx3RUFBd0Usd0RBQXdELEVBQUUsd0VBQXdFLDBDQUEwQyxhQUFhLDhCQUE4Qiw0QkFBNEIsMkJBQTJCLHlOQUF5TiwrREFBK0Qsa0JBQWtCLEVBQUUsYUFBYSwrQkFBK0IseUNBQXlDLGdDQUFnQyw4Q0FBOEMseURBQXlELGlCQUFpQixPQUFPLCtCQUErQixpQkFBaUIsYUFBYSxtQ0FBbUMsdUNBQXVDLHdGQUF3Rix3REFBd0Qsc0NBQXNDLG1KQUFtSiw0RkFBNEYseUZBQXlGLHNGQUFzRixxQkFBcUIsNkNBQTZDLGFBQWEsNEJBQTRCLHVEQUF1RCx3REFBd0Qsa0JBQWtCLDJJQUEySSx3RkFBd0YscUZBQXFGLGtGQUFrRixpQkFBaUIsMEJBQTBCLG1DQUFtQyx3QkFBd0IsbUNBQW1DLHdIQUF3SCxxQkFBcUIsb0JBQW9CLG9IQUFvSCxxQkFBcUIsT0FBTyw4SEFBOEgscUJBQXFCLGlCQUFpQixPQUFPLDBIQUEwSCxpQkFBaUIsYUFBYSxhQUFhLG9CQUFvQiwrQkFBK0IsU0FBUyx5QkFBeUIsOEVBQThFLDZEQUE2RCxxREFBcUQsaUJBQWlCLGtFQUFrRSx3REFBd0QsNERBQTRELG1FQUFtRSw2REFBNkQsc0VBQXNFLGFBQWEsd0RBQXdELFNBQVMsaUJBQWlCLGdEQUFnRCx3QkFBd0IsdURBQXVELGFBQWEseUNBQXlDLHdCQUF3Qix1REFBdUQsYUFBYSxzQ0FBc0MsMENBQTBDLGdDQUFnQyxvR0FBb0csb0VBQW9FLDZCQUE2QixnRUFBZ0UsaUJBQWlCLHNFQUFzRSxjQUFjLE1BQU0sb0NBQW9DLG9CQUFvQixLQUFLLG1DQUFtQzs7QUFFaG95Qjs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUsseUJBQXlCO0FBQzlCO0FBQ0EsaUJBQWlCLGlDQUFpQztBQUNsRCxtQkFBbUIscUJBQXFCO0FBQ3hDLHFCQUFxQix3QkFBd0I7QUFDN0MsdUJBQXVCLHNCQUFzQjtBQUM3Qyx5QkFBeUIsNkJBQTZCO0FBQ3RELDBCQUEwQiw0QkFBNEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLG9DQUFvQywyQkFBMkI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrQkFBK0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSwrQkFBK0IsMEJBQTBCO0FBQ3pEO0FBQ0E7QUFDQSx5QkFBeUIsMkJBQTJCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDJCQUEyQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHFDQUFxQywyQkFBMkI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJCQUEyQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJCQUEyQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQ0FBZ0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdDQUFnQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdDQUFnQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsbUNBQW1DO0FBQ25DLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDBCQUEwQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNERBQTREO0FBQzdFO0FBQ0EsK0JBQStCLG1DQUFtQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlCQUFpQjtBQUMxRDtBQUNBO0FBQ0Esb0NBQW9DLGlDQUFpQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsaURBQWlELGdCQUFnQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkJBQTZCO0FBQzlDO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hELHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUyxjQUFjLEVBQUU7QUFDM0M7QUFDQSxrQkFBa0IsU0FBUyxjQUFjLEVBQUU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7QUFDbEMsSUFBSSxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNwM0JoQjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxnaEJBQW1SO0FBQ3pTO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2SEFBZ0U7QUFDbEYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1CQUFPLENBQUMsdWpCQUErUDtBQUN6UTtBQUNBO0FBQ21IO0FBQ2E7QUFDaEk7QUFDK1U7QUFDL1U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRztBQUNuRyxnQkFBZ0IseUdBQWtCO0FBQ2xDLEVBQUUsK0hBQWM7QUFDaEIsRUFBRSx1T0FBYztBQUNoQixFQUFFLGdQQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWFYOztBQUVVLGdGQUFpQiIsImZpbGUiOiJqcy81LmJ1bmRsZS41ZTdhMzQyZTA0MDQ2YjgxOGI3NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+TWFzdGVyIFJlcG9ydDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b29sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkb3dubG9hZC1leGNlbCBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiA6ZmV0Y2g9XCJleHBvcnRfY3N2XCIgOmZpZWxkcz1cImpzb25fZmllbGRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmJlZm9yZS1nZW5lcmF0ZT1cInN0YXJ0RG93bmxvYWRcIiA6YmVmb3JlLWZpbmlzaD1cImZpbmlzaERvd25sb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0PVwiTXkgV29ya3NoZWV0XCIgdHlwZT1cImNzdlwiIG5hbWU9XCJtYXN0ZXJfcmVwb3J0LmNzdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsVGV4dFwiPjxpbWcgOnNyYz1cInNldF9pbWFnZSgnaW1hZ2VzL2ZpbGUucG5nJylcIiBjbGFzcz1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIj5FeHBvcnQgQ1NWPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZG93bmxvYWQtZXhjZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cIm9mZlwiIEBzdWJtaXQucHJldmVudD1cImdldFJlc3VsdHMoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOmdldC1vcHRpb24tbGFiZWw9XCJnZXRMYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwic2VhcmNoX21hY2hpbmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG1hY2hpbmVzIC4uLlwiIHYtbW9kZWw9XCJzZWFyY2gubWFjaGluZV9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1hY2hpbmVfaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRpY2tldCAuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnRpY2tldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpY2tldFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJzaXRlX25hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNlYXJjaF9zaXRlc1wiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFNpdGUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2guc2l0ZV9pZFwiIG5hbWU9XCJzaXRlX2lkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwic2l0ZV9uYW1lXCIgOm9wdGlvbnM9XCJbJ09wZW4nLCAnQ2xvc2VkJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFN0YXR1cy4uLlwiIHYtbW9kZWw9XCJzZWFyY2guc3RhdHVzXCIgbmFtZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOm9wdGlvbnM9XCJjcmVhdGVkX3VzZXJzXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDcmVhdGVkIGJ5Li4uXCIgdi1tb2RlbD1cInNlYXJjaC5jcmVhdGVkX2J5XCIgbmFtZT1cImNyZWF0ZWRfYnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbJ1BlcmlvZGljIE1haW50ZW5hbmNlJywnQnJlYWtkb3duIE1haW50ZW5hbmNlJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGlja2V0IFR5cGUuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnRpY2tldF90eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGlja2V0X3R5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yIHB0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVwiQXNpYS9Lb2xrYXRhXCIgdi1tb2RlbD1cInNlYXJjaC5jcmVhdGVkX2Zyb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LWNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDcmVhdGVkIGZyb20gZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yIHB0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVwiQXNpYS9Lb2xrYXRhXCIgdi1tb2RlbD1cInNlYXJjaC5jcmVhdGVkX3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC1jbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ3JlYXRlZCB0byBkYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTIgcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwic2l0ZV9uYW1lXCIgOm9wdGlvbnM9XCJbJ01ham9yJywgJ01pbm9yJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IENvbXBsYWludCBOYXR1cmVcIiB2LW1vZGVsPVwic2VhcmNoLmNvbXBsYWludF9uYXR1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21wbGFpbnRfbmF0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtNCBwdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgc3R5bGU9XCJtYXgtd2lkdGg6IDQwMHB4OyBtYXJnaW46IGF1dG87IHRleHQtYWxpZ246IGxlZnQ7ICBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGhlaWdodDogMzlweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAzcHg7XHJcblxyXG4gICAgICAgIFwiPnt7IHNlYXJjaC50YXRfZnJvbSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ0b3A6IDI1JTsgcG9zaXRpb246IHJlbGF0aXZlO1wiPlRBVDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgICAgXCI+e3sgc2VhcmNoLnRhdF90byB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpUmFuZ2VTbGlkZXIgYmFzZUNsYXNzTmFtZT1cIm11bHRpLXJhbmdlLXNsaWRlci1iYXItb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptaW5WYWx1ZT1cInNlYXJjaC50YXRfZnJvbVwiIDptYXhWYWx1ZT1cInNlYXJjaC50YXRfdG9cIiA6bWF4PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1pbj1cIjBcIiA6c3RlcD1cIjFcIiA6cmFuZ2VNYXJnaW49XCIwXCIgQGlucHV0PVwiVXBkYXRlVmFsdWVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHB0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4taW5mbyBtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNldF9maWx0ZXIoKVwiPlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMCBtYXN0ZXJUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TLk48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNpdGUgbmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXF1aXBtZW50PGJyPiBEZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TW9kZWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZBUiBObzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29tcGxhaW50PGJyPiBObzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29tcGxhaW50IDxicj5kYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db21wbGFpbnQ8YnI+IFJhaXNlZCBCeTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29tcGxhaW50IDxicj5OYXR1cmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1cyA8YnI+RHVyaW5nIENvbXBsYWludDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IFR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHdpZHRoPVwiMTBcIj5Qcm9ibGVtIGRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjEwXCI+QWRkaXRpb25hbCA8YnI+IFByb2JsZW1zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DdXJyZW50IDxicj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkN1cnJlbnQgPGJyPlN0YWdlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DdXJyZW50IDxicj5TdGFnZSBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DdXJyZW50PGJyPiBTdGFnZSBEZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzIDxicj4gUG9zdCBSZXNvbHV0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SQ0E8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4cGVjdGVkIDxicj4gUmVzb2x1dGlvbiBkYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXZpc2VkIDxicj4gRXhwZWN0ZWQgZGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVhc29uIGZvcjxicj5EYXRlIFJldmlzaW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3R1YWwgPGJyPiBSZXNvbHZlIERhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRBVDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXN0aW1hdGVkPGJyPiBDb3N0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3R1YWw8YnI+IENvc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByb2R1Y3Rpb248YnI+IExvc3M8L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKHRpY2tldCwgeCkgaW4gVGlja2V0cy5kYXRhXCIgOmtleT1cInRpY2tldC5pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IFRpY2tldHMuZnJvbSArIHggfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jYXBpdGFsaXplXCI+e3sgdGlja2V0LnNpdGVfbmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lm1hY2hpbmUubmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lm1hY2hpbmUubWFjaGluZV9tb2RlbCA/IHRpY2tldC5tYWNoaW5lLm1hY2hpbmVfbW9kZWwubmFtZSA6ICctJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBAY2xpY2s9XCJ2aWV3X3NpdGVfZGV0YWlscyh0aWNrZXQubWFjaGluZSlcIj57eyB0aWNrZXQuZmFyX25vIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQudGlja2V0X25vIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuY3JlYXRlZF9hdCB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYnlfbmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNvbXBsYWludF9uYXR1cmUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5zdGF0dXNfZHVyaW5nX2NvbXBsYWludCB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnRpY2tldF90eXBlIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWdWVSZWFkTW9yZVNtb290aCA6b3Blbi5zeW5jPVwicHJvYmxlbXNNb3JlW3hdXCIgbm8tYnV0dG9uIG5vLXNoYWRvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIDprZXk9XCIncGQnK3hcIj57eyB0aWNrZXQucHJvYmxlbV9kZXNjcmlwdGlvbiB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WdWVSZWFkTW9yZVNtb290aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwicmVhZF9tb3JlKHgsICdwJylcIiBjbGFzcz1cInJtb3JlXCI+Li4ue3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvYmxlbXNNb3JlW3hdPydMZXNzJzogJ01vcmUnIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwidGlja2V0LnByb2JsZW1zICYmIHRpY2tldC5wcm9ibGVtcy5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWdWVSZWFkTW9yZVNtb290aCA6b3Blbi5zeW5jPVwiYWRkaXRpb25hbE1vcmVbeF1cIiBuby1idXR0b24gbm8tc2hhZG93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInRpY2tldC5wcm9ibGVtc1wiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiB0aWNrZXQucHJvYmxlbXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCIncCcgKyBpbmRleFwiIHYtaHRtbD1cIml0ZW0ucHJvYmxlbVwiPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WdWVSZWFkTW9yZVNtb290aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwicmVhZF9tb3JlKHgpXCIgY2xhc3M9XCJybW9yZVwiPi4uLnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxNb3JlW3hdPydMZXNzJzogJ01vcmUnIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5zdGF0dXMudG9Mb3dlckNhc2UoKSA9PSAnY3JlYXRlZCBieSB1c2VyJyA/ICdPcGVuJyA6IHRpY2tldC5zdGF0dXMgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnN0YXR1cyA9PSAnQ2xvc2VkJyA/ICctJyA6IHRpY2tldC5jdXJyZW50X3N0YWdlIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5zdGF0dXMgPT0gJ0Nsb3NlZCcgPyAnLScgOiB0aWNrZXQubGFzdF9zdGFnZSA/IHRpY2tldC5sYXN0X3N0YWdlLnN0YWdlX2RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyB8IG15RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwidGlja2V0LnN0YXR1cyAhPSAnQ2xvc2VkJyAmJiB0aWNrZXQubGFzdF9zdGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlUmVhZE1vcmVTbW9vdGggOm9wZW4uc3luYz1cInN0YWdlTW9yZVt4XVwiIG5vLWJ1dHRvbiBuby1zaGFkb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyB0aWNrZXQubGFzdF9zdGFnZS5kZXNjcmlwdGlvbiB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WdWVSZWFkTW9yZVNtb290aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwicmVhZF9tb3JlKHgsICdzJylcIiBjbGFzcz1cInJtb3JlXCI+Li4ue3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2VNb3JlW3hdPydMZXNzJzogJ01vcmUnIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5tYWNoaW5lX3N0YXR1cyB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwidGlja2V0LnJjYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlUmVhZE1vcmVTbW9vdGggOm9wZW4uc3luYz1cInJjYU1vcmVbeF1cIiBuby1idXR0b24gbm8tc2hhZG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiJ3JjbScreFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgdGlja2V0LnJjYSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WdWVSZWFkTW9yZVNtb290aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwicmVhZF9tb3JlKHgsICdyYycpXCIgY2xhc3M9XCJybW9yZVwiPi4uLnt7XHJcbiAgICByY2FNb3JlW3hdPydMZXNzJzogJ01vcmUnIH19PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubGlrZWx5X2RhdGUgfCBteURhdGUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5yZXZlcnNpb25fZGF0ZXxteURhdGUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5yZXZlcnNpb25fcmVhc29uIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuYWN0dWFsX2RhdGUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5hY3R1YWxfZGF0ZSA/IHRpY2tldC50YXQgOiAnLScgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7KHRpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICsgdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5hZF9lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArIHRpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0b0N1cnJlbmN5fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7KHRpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0ICsgdGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0KSB8IHRvQ3VycmVuY3l9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQucHJvZHVjdGlvbl9sb3NzIHwgdG9DdXJyZW5jeSB9fTwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtYm9keSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6ZGF0YT1cIlRpY2tldHNcIiBAcGFnaW5hdGlvbi1jaGFuZ2UtcGFnZT1cImdldFJlc3VsdHNcIj48L3BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkIC0tPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPE1hY2hpbmVQb3AgaWQ9XCJNYWNoaW5lU2l0ZU1vZGFsM1wiIDptYWNoaW5lPVwicG1Nb2RhbERhdGFcIiAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy9pbXBvcnQgVnVlUmVhZE1vcmVTbW9vdGggZnJvbSBcInZ1ZS1yZWFkLW1vcmUtc21vb3RoXCI7XHJcbmltcG9ydCBNdWx0aVJhbmdlU2xpZGVyIGZyb20gXCJtdWx0aS1yYW5nZS1zbGlkZXItdnVlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6XCJNYXN0ZXJSZXBvcnRcIixcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBWdWVSZWFkTW9yZVNtb290aCA6ICgpID0+IGltcG9ydCgndnVlLXJlYWQtbW9yZS1zbW9vdGgnKSxcclxuICAgICAgICBNdWx0aVJhbmdlU2xpZGVyLFxyXG4gICAgICAgIE1hY2hpbmVQb3A6ICgpID0+IGltcG9ydCgnLi9NYWNoaW5lRmFyUG9wLnZ1ZScpLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhZ2VNb3JlOiBbXSxcclxuICAgICAgICAgICAgYWRkaXRpb25hbE1vcmU6IFtdLFxyXG4gICAgICAgICAgICBwcm9ibGVtc01vcmU6IFtdLFxyXG4gICAgICAgICAgICByY2FNb3JlOiBbXSxcclxuICAgICAgICAgICAgcG1Nb2RhbERhdGE6ICcnLFxyXG4gICAgICAgICAgICBjcmVhdGVkX3VzZXJzOiBbXSxcclxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcclxuICAgICAgICAgICAgc2VhcmNoX3NpdGVzOiBbXSxcclxuICAgICAgICAgICAgc2VhcmNoOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXHJcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9mcm9tOiAnJyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfdG86ICcnLFxyXG4gICAgICAgICAgICAgICAgdGF0X2Zyb206IDAsXHJcbiAgICAgICAgICAgICAgICB0YXRfdG86IDkwLFxyXG4gICAgICAgICAgICAgICAgY29tcGxhaW50X25hdHVyZTonJyxcclxuICAgICAgICAgICAgICAgIHRpY2tldF90eXBlOicnLFxyXG4gICAgICAgICAgICAgICAgdGlja2V0OicnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRfbWFjaGluZTogJycsXHJcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcclxuICAgICAgICAgICAgbWFjaGluZXM6IFtdLFxyXG4gICAgICAgICAgICBUaWNrZXRzOiB7fSxcclxuICAgICAgICAgICAgc2w6IDEsXHJcbiAgICAgICAgICAgIGpzb25fZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICBcIlNsIE5vXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ1NpdGUgbmFtZSc6ICdzaXRlX25hbWUnLFxyXG4gICAgICAgICAgICAgICAgJ0VxdWlwbWVudCBEZXNjcmlwdGlvbic6ICdtYWNoaW5lX25hbWUnLFxyXG4gICAgICAgICAgICAgICAgJ0ZBUiBObyc6ICdmYXJfbm8nLFxyXG4gICAgICAgICAgICAgICAgJ0NvbXBsYWludCBObyc6ICd0aWNrZXRfbm8nLFxyXG4gICAgICAgICAgICAgICAgJ0NvbXBsYWludCBkYXRlJzogXCJjcmVhdGVkX2F0XCIsXHJcbiAgICAgICAgICAgICAgICAnQ29tcGxhaW50IFJhaXNlZCBCeSc6ICdjcmVhdGVkX2J5X25hbWUnLFxyXG4gICAgICAgICAgICAgICAgJ0NvbXBsYWludCBOYXR1cmUnOiAnY29tcGxhaW50X25hdHVyZScsXHJcbiAgICAgICAgICAgICAgICAnU3RhdHVzIER1cmluZyBDb21wbGFpbnQnOiAnc3RhdHVzX2R1cmluZ19jb21wbGFpbnQnLFxyXG4gICAgICAgICAgICAgICAgJ1Byb2JsZW0gZGVzY3JpcHRpb24nOiAncHJvYmxlbV9kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAnQWRkaXRpb25hbCBQcm9ibGVtJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcInByb2JsZW1zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IChwcm9ibGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXQgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvYmxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcHJvYmxlbS5tYXAodmFsdWUgPT4gdmFsdWUucHJvYmxlbSkuam9pbihcIlxcclxcblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJDdXJyZW50IFN0YXR1c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwic3RhdHVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IChzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXR1cy50b0xvd2VyQ2FzZSgpID09ICdjcmVhdGVkIGJ5IHVzZXInID8gJ09wZW4nIDogc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJDdXJyZW50IFN0YWdlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJsYXN0X3N0YWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZS5kZXNjcmlwdGlvbiA6ICctJztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiU3RhdHVzIFBvc3QgUmVzb2x1dGlvblwiOiAnbWFjaGluZV9zdGF0dXMnLFxyXG4gICAgICAgICAgICAgICAgJ0V4cGVjdGVkIFJlc29sdXRpb24gZGF0ZSc6ICdsaWtlbHlfZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAnUmV2aXNlZCBFeHBlY3RlZCBkYXRlJzoncmV2ZXJzaW9uX2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgJ1JlYXNvbiBmb3IgZGF0ZSBSZXZpc2lvbic6J3JldmVyc2lvbl9yZWFzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0FjdHVhbCBSZXNvbHZlIERhdGUnOiAnYWN0dWFsX2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgJ1RBVCc6ICd0YXQnLFxyXG4gICAgICAgICAgICAgICAgJ0VzdGltYXRlZCBDb3N0JzogJ2VzdGltYXRlZF9jb3N0JyxcclxuICAgICAgICAgICAgICAgICdBY3R1YWwgQ29zdCc6ICdhY3R1YWxfY29zdCcsXHJcbiAgICAgICAgICAgICAgICAnUHJvZHVjdGlvbiBMb3NzJzogJ3Byb2R1Y3Rpb25fbG9zcycsXHJcbiAgICAgICAgICAgICAgICAnUkNBJzogJ3JjYSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAganNvbl9tZXRhOiBbXHJcbiAgICAgICAgICAgICAgICBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjaGFyc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwidXRmLThcIixcclxuICAgICAgICAgICAgICAgIH0sXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgc2w6IDAsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB2aWV3X3NpdGVfZGV0YWlscyhkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG1Nb2RhbERhdGEgPSBkYXRhXHJcbiAgICAgICAgICAgICQoJyNNYWNoaW5lU2l0ZU1vZGFsMycpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNldF9maWx0ZXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoID0ge1xyXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2J5OiAnJyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfZnJvbTogJycsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkX3RvOiAnJyxcclxuICAgICAgICAgICAgICAgIHRhdF9mcm9tOiAwLFxyXG4gICAgICAgICAgICAgICAgdGF0X3RvOiA5MCxcclxuICAgICAgICAgICAgICAgIGNvbXBsYWludF9uYXR1cmU6JycsXHJcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTonJyxcclxuICAgICAgICAgICAgICAgIHRpY2tldDonJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVzdWx0cygpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBVcGRhdGVWYWx1ZXMoZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50YXRfZnJvbSA9IGUubWluVmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRhdF90byA9IGUubWF4VmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBleGNlbFxyXG4gICAgICAgIGFzeW5jIGV4cG9ydF9jc3YoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgIGF4aW9zLmdldCgnYXBpL3RpY2tldC9leHBvcnQnLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMuc2VhcmNoXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdhcGkvdGlja2V0L2V4cG9ydCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnREb3dubG9hZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zbCA9IDE7XHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBXYWl0ICEnLFxyXG4gICAgICAgICAgICAgICAgaHRtbDogJ0RhdGEgcG9wdWxhdGluZycsIC8vIGFkZCBodG1sIGF0dHJpYnV0ZSBpZiB5b3Ugd2FudCBvciByZW1vdmVcclxuICAgICAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9uQmVmb3JlT3BlbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFN3YWwuc2hvd0xvYWRpbmcoKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5pc2hEb3dubG9hZCgpIHtcclxuICAgICAgICAgICAgU3dhbC5jbG9zZSgpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0TGFiZWwodmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5mYXJfbm8gKyAnIC0gJyArIHZhbC5uYW1lO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVzdWx0cyhwYWdlID0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5wYWdlID0gcGFnZVxyXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGlja2V0L3JlcG9ydCcsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UaWNrZXRzID0gZGF0YS5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtc01vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YWdlTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmNhTW9yZT0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkVGlja2V0cygpIHtcclxuXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChcIi9hcGkvdGlja2V0L3JlcG9ydFwiLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMuc2VhcmNoXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVGlja2V0cyA9IGRhdGEuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW1zTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFnZU1vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmNhTW9yZT0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWFkX21vcmUoeCwgcCA9ICcnKSB7XHJcbiAgICAgICAgICAgIGlmIChwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocCA9PSAncycpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMuc3RhZ2VNb3JlW3hdID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuc3RhZ2VNb3JlLCB4LCBhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihwID09ICdyYycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhID0gdGhpcy5yY2FNb3JlW3hdID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucmNhTW9yZSwgeCwgYSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhID0gdGhpcy5wcm9ibGVtc01vcmVbeF0gPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wcm9ibGVtc01vcmUsIHgsIGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLmFkZGl0aW9uYWxNb3JlW3hdID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5hZGRpdGlvbmFsTW9yZSwgeCwgYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkVGlja2V0cygpO1xyXG4gICAgfSxcclxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcclxuICAgICAgICBheGlvcy5nZXQoXCJhcGkvZ2V0X3ByZV9tYWNoaW5lXCIpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuQ2F0ZWdvcnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpdGVzID0gcmVzLmRhdGEuZGF0YS5zaXRlcztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBheGlvcy5nZXQoXCIvYXBpL2luaXRpYWxfdGlja2V0XCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnZlbmRvcnM7XHJcbiAgICAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zaXRlcztcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVkX3VzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLmNyZWF0ZWRfdXNlcnM7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKCdPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICBhc3luYyAnZm9ybS5zdWJfY2F0ZWdvcnlfaWQnKG4sIG8pIHtcclxuICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyAnZm9ybS5zaXRlX2lkJyhuLCBvKSB7XHJcbiAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgICdmb3JtLmNhdGVnb3J5X2lkJzoge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobiwgbykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2NhdGVnb3J5L1wiICsgbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXHJcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWVcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuLnJtb3JlIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucm1vcmUge1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxyXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L2RldmxvcG1lbnQvd2FtcDY0L3d3dy9yb3lhbC1pbmZyYWNvbnN0cnVjdGlvbi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYXN0ZXJSZXBvcnQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE0ZUE7SUFDQSxZQUFBO0NBQ0FcIixcImZpbGVcIjpcIk1hc3RlclJlcG9ydC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+TWFzdGVyIFJlcG9ydDwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdG9vbHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRvd25sb2FkLWV4Y2VsIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XFxcIiA6ZmV0Y2g9XFxcImV4cG9ydF9jc3ZcXFwiIDpmaWVsZHM9XFxcImpzb25fZmllbGRzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpiZWZvcmUtZ2VuZXJhdGU9XFxcInN0YXJ0RG93bmxvYWRcXFwiIDpiZWZvcmUtZmluaXNoPVxcXCJmaW5pc2hEb3dubG9hZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQ9XFxcIk15IFdvcmtzaGVldFxcXCIgdHlwZT1cXFwiY3N2XFxcIiBuYW1lPVxcXCJtYXN0ZXJfcmVwb3J0LmNzdlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImxhYmVsVGV4dFxcXCI+PGltZyA6c3JjPVxcXCJzZXRfaW1hZ2UoJ2ltYWdlcy9maWxlLnBuZycpXFxcIiBjbGFzcz1cXFwiaWNvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVxcXCIyMFxcXCI+RXhwb3J0IENTVjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZG93bmxvYWQtZXhjZWw+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSBwLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgQHN1Ym1pdC5wcmV2ZW50PVxcXCJnZXRSZXN1bHRzKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1yb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOmdldC1vcHRpb24tbGFiZWw9XFxcImdldExhYmVsXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwic2VhcmNoX21hY2hpbmVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkVudGVyIG1hY2hpbmVzIC4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLm1hY2hpbmVfaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJtYWNoaW5lX2lkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHRpY2tldCAuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC50aWNrZXRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJ0aWNrZXRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwic2l0ZV9uYW1lXFxcIiA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwic2VhcmNoX3NpdGVzXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IFNpdGUuLi5cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2guc2l0ZV9pZFxcXCIgbmFtZT1cXFwic2l0ZV9pZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGNvbC0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJzaXRlX25hbWVcXFwiIDpvcHRpb25zPVxcXCJbJ09wZW4nLCAnQ2xvc2VkJ11cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IFN0YXR1cy4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnN0YXR1c1xcXCIgbmFtZT1cXFwic3RhdHVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTIgXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJuYW1lXFxcIiA6b3B0aW9ucz1cXFwiY3JlYXRlZF91c2Vyc1xcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNyZWF0ZWQgYnkuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5jcmVhdGVkX2J5XFxcIiBuYW1lPVxcXCJjcmVhdGVkX2J5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTIgXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJuYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XFxcIlsnUGVyaW9kaWMgTWFpbnRlbmFuY2UnLCdCcmVha2Rvd24gTWFpbnRlbmFuY2UnXVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJUaWNrZXQgVHlwZS4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnRpY2tldF90eXBlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwidGlja2V0X3R5cGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMiBwdC0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XFxcIkFzaWEvS29sa2F0YVxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmNyZWF0ZWRfZnJvbVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LWNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJDcmVhdGVkIGZyb20gZGF0ZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTIgcHQtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVxcXCJBc2lhL0tvbGthdGFcXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5jcmVhdGVkX3RvXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQtY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkNyZWF0ZWQgdG8gZGF0ZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTIgcHQtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwic2l0ZV9uYW1lXFxcIiA6b3B0aW9ucz1cXFwiWydNYWpvcicsICdNaW5vciddXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlNlbGVjdCBDb21wbGFpbnQgTmF0dXJlXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guY29tcGxhaW50X25hdHVyZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImNvbXBsYWludF9uYXR1cmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtNCBwdC0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IHN0eWxlPVxcXCJtYXgtd2lkdGg6IDQwMHB4OyBtYXJnaW46IGF1dG87IHRleHQtYWxpZ246IGxlZnQ7ICBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHRleHQtYWxpZ246IGNlbnRlcjsgaGVpZ2h0OiAzOXB4O1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIlxcclxcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgICBtYXJnaW46IDNweDtcXHJcXG5cXHJcXG4gICAgICAgIFxcXCI+e3sgc2VhcmNoLnRhdF9mcm9tIH19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJ0b3A6IDI1JTsgcG9zaXRpb246IHJlbGF0aXZlO1xcXCI+VEFUPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJcXHJcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4O1xcclxcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luOiAzcHg7XFxyXFxuICAgICAgICBcXFwiPnt7IHNlYXJjaC50YXRfdG8gfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVJhbmdlU2xpZGVyIGJhc2VDbGFzc05hbWU9XFxcIm11bHRpLXJhbmdlLXNsaWRlci1iYXItb25seVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWluVmFsdWU9XFxcInNlYXJjaC50YXRfZnJvbVxcXCIgOm1heFZhbHVlPVxcXCJzZWFyY2gudGF0X3RvXFxcIiA6bWF4PVxcXCIxMDBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1pbj1cXFwiMFxcXCIgOnN0ZXA9XFxcIjFcXFwiIDpyYW5nZU1hcmdpbj1cXFwiMFxcXCIgQGlucHV0PVxcXCJVcGRhdGVWYWx1ZXNcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIHB0LTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+U2VhcmNoPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIG1sLTJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInJlc2V0X2ZpbHRlcigpXFxcIj5SZXNldDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1oZWFkZXIgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wIG1hc3RlclRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ob3ZlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Uy5OPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNpdGUgbmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FcXVpcG1lbnQ8YnI+IERlc2NyaXB0aW9uPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1vZGVsPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZBUiBObzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db21wbGFpbnQ8YnI+IE5vPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbXBsYWludCA8YnI+ZGF0ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db21wbGFpbnQ8YnI+IFJhaXNlZCBCeTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db21wbGFpbnQgPGJyPk5hdHVyZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXMgPGJyPkR1cmluZyBDb21wbGFpbnQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IFR5cGU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggd2lkdGg9XFxcIjEwXFxcIj5Qcm9ibGVtIGRlc2NyaXB0aW9uPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHdpZHRoPVxcXCIxMFxcXCI+QWRkaXRpb25hbCA8YnI+IFByb2JsZW1zPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkN1cnJlbnQgPGJyPlN0YXR1czwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DdXJyZW50IDxicj5TdGFnZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DdXJyZW50IDxicj5TdGFnZSBEYXRlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkN1cnJlbnQ8YnI+IFN0YWdlIERlc2NyaXB0aW9uPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1cyA8YnI+IFBvc3QgUmVzb2x1dGlvbjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SQ0E8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXhwZWN0ZWQgPGJyPiBSZXNvbHV0aW9uIGRhdGU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmV2aXNlZCA8YnI+IEV4cGVjdGVkIGRhdGU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVhc29uIGZvcjxicj5EYXRlIFJldmlzaW9uPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdHVhbCA8YnI+IFJlc29sdmUgRGF0ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UQVQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXN0aW1hdGVkPGJyPiBDb3N0PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdHVhbDxicj4gQ29zdDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWN0aW9uPGJyPiBMb3NzPC90aD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XFxcIih0aWNrZXQsIHgpIGluIFRpY2tldHMuZGF0YVxcXCIgOmtleT1cXFwidGlja2V0LmlkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IFRpY2tldHMuZnJvbSArIHggfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtY2FwaXRhbGl6ZVxcXCI+e3sgdGlja2V0LnNpdGVfbmFtZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubWFjaGluZS5uYW1lIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5tYWNoaW5lLm1hY2hpbmVfbW9kZWwgPyB0aWNrZXQubWFjaGluZS5tYWNoaW5lX21vZGVsLm5hbWUgOiAnLScgfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIEBjbGljaz1cXFwidmlld19zaXRlX2RldGFpbHModGlja2V0Lm1hY2hpbmUpXFxcIj57eyB0aWNrZXQuZmFyX25vIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC50aWNrZXRfbm8gfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYXQgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYnlfbmFtZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuY29tcGxhaW50X25hdHVyZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuc3RhdHVzX2R1cmluZ19jb21wbGFpbnQgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnRpY2tldF90eXBlIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcInRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlUmVhZE1vcmVTbW9vdGggOm9wZW4uc3luYz1cXFwicHJvYmxlbXNNb3JlW3hdXFxcIiBuby1idXR0b24gbm8tc2hhZG93PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA6a2V5PVxcXCIncGQnK3hcXFwiPnt7IHRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uIH19PC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVnVlUmVhZE1vcmVTbW9vdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVxcXCJyZWFkX21vcmUoeCwgJ3AnKVxcXCIgY2xhc3M9XFxcInJtb3JlXFxcIj4uLi57e1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2JsZW1zTW9yZVt4XT8nTGVzcyc6ICdNb3JlJyB9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJ0aWNrZXQucHJvYmxlbXMgJiYgdGlja2V0LnByb2JsZW1zLmxlbmd0aCA+IDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWdWVSZWFkTW9yZVNtb290aCA6b3Blbi5zeW5jPVxcXCJhZGRpdGlvbmFsTW9yZVt4XVxcXCIgbm8tYnV0dG9uIG5vLXNoYWRvdz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cXFwidGlja2V0LnByb2JsZW1zXFxcIiB2LWZvcj1cXFwiKGl0ZW0sIGluZGV4KSBpbiB0aWNrZXQucHJvYmxlbXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCIncCcgKyBpbmRleFxcXCIgdi1odG1sPVxcXCJpdGVtLnByb2JsZW1cXFwiPjwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Z1ZVJlYWRNb3JlU21vb3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cXFwicmVhZF9tb3JlKHgpXFxcIiBjbGFzcz1cXFwicm1vcmVcXFwiPi4uLnt7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbE1vcmVbeF0/J0xlc3MnOiAnTW9yZScgfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnN0YXR1cy50b0xvd2VyQ2FzZSgpID09ICdjcmVhdGVkIGJ5IHVzZXInID8gJ09wZW4nIDogdGlja2V0LnN0YXR1cyB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnN0YXR1cyA9PSAnQ2xvc2VkJyA/ICctJyA6IHRpY2tldC5jdXJyZW50X3N0YWdlIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuc3RhdHVzID09ICdDbG9zZWQnID8gJy0nIDogdGlja2V0Lmxhc3Rfc3RhZ2UgPyB0aWNrZXQubGFzdF9zdGFnZS5zdGFnZV9kYXRlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyB8IG15RGF0ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJ0aWNrZXQuc3RhdHVzICE9ICdDbG9zZWQnICYmIHRpY2tldC5sYXN0X3N0YWdlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlUmVhZE1vcmVTbW9vdGggOm9wZW4uc3luYz1cXFwic3RhZ2VNb3JlW3hdXFxcIiBuby1idXR0b24gbm8tc2hhZG93PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyB0aWNrZXQubGFzdF9zdGFnZS5kZXNjcmlwdGlvbiB9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Z1ZVJlYWRNb3JlU21vb3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cXFwicmVhZF9tb3JlKHgsICdzJylcXFwiIGNsYXNzPVxcXCJybW9yZVxcXCI+Li4ue3tcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFnZU1vcmVbeF0/J0xlc3MnOiAnTW9yZScgfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lm1hY2hpbmVfc3RhdHVzIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcInRpY2tldC5yY2FcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWdWVSZWFkTW9yZVNtb290aCA6b3Blbi5zeW5jPVxcXCJyY2FNb3JlW3hdXFxcIiBuby1idXR0b24gbm8tc2hhZG93XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcIidyY20nK3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyB0aWNrZXQucmNhIH19PC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVnVlUmVhZE1vcmVTbW9vdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVxcXCJyZWFkX21vcmUoeCwgJ3JjJylcXFwiIGNsYXNzPVxcXCJybW9yZVxcXCI+Li4ue3tcXHJcXG4gICAgcmNhTW9yZVt4XT8nTGVzcyc6ICdNb3JlJyB9fTwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubGlrZWx5X2RhdGUgfCBteURhdGUgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnJldmVyc2lvbl9kYXRlfG15RGF0ZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQucmV2ZXJzaW9uX3JlYXNvbiB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuYWN0dWFsX2RhdGUgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmFjdHVhbF9kYXRlID8gdGlja2V0LnRhdCA6ICctJyB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyh0aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfY29zdCArIHRpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5hZF9lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArIHRpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0KVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRvQ3VycmVuY3l9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyh0aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdCArIHRpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdCkgfCB0b0N1cnJlbmN5fX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5wcm9kdWN0aW9uX2xvc3MgfCB0b0N1cnJlbmN5IH19PC90ZD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1ib2R5IC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhZ2luYXRpb24gOmRhdGE9XFxcIlRpY2tldHNcXFwiIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVxcXCJnZXRSZXN1bHRzXFxcIj48L3BhZ2luYXRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkIC0tPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcbiAgICAgICAgPE1hY2hpbmVQb3AgaWQ9XFxcIk1hY2hpbmVTaXRlTW9kYWwzXFxcIiA6bWFjaGluZT1cXFwicG1Nb2RhbERhdGFcXFwiIC8+XFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuLy9pbXBvcnQgVnVlUmVhZE1vcmVTbW9vdGggZnJvbSBcXFwidnVlLXJlYWQtbW9yZS1zbW9vdGhcXFwiO1xcclxcbmltcG9ydCBNdWx0aVJhbmdlU2xpZGVyIGZyb20gXFxcIm11bHRpLXJhbmdlLXNsaWRlci12dWVcXFwiO1xcclxcbmV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgbmFtZTpcXFwiTWFzdGVyUmVwb3J0XFxcIixcXHJcXG4gICAgY29tcG9uZW50czoge1xcclxcbiAgICAgICAgVnVlUmVhZE1vcmVTbW9vdGggOiAoKSA9PiBpbXBvcnQoJ3Z1ZS1yZWFkLW1vcmUtc21vb3RoJyksXFxyXFxuICAgICAgICBNdWx0aVJhbmdlU2xpZGVyLFxcclxcbiAgICAgICAgTWFjaGluZVBvcDogKCkgPT4gaW1wb3J0KCcuL01hY2hpbmVGYXJQb3AudnVlJyksXFxyXFxuICAgIH0sXFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgIHN0YWdlTW9yZTogW10sXFxyXFxuICAgICAgICAgICAgYWRkaXRpb25hbE1vcmU6IFtdLFxcclxcbiAgICAgICAgICAgIHByb2JsZW1zTW9yZTogW10sXFxyXFxuICAgICAgICAgICAgcmNhTW9yZTogW10sXFxyXFxuICAgICAgICAgICAgcG1Nb2RhbERhdGE6ICcnLFxcclxcbiAgICAgICAgICAgIGNyZWF0ZWRfdXNlcnM6IFtdLFxcclxcbiAgICAgICAgICAgIHNlYXJjaF9tYWNoaW5lczogW10sXFxyXFxuICAgICAgICAgICAgc2VhcmNoX3NpdGVzOiBbXSxcXHJcXG4gICAgICAgICAgICBzZWFyY2g6IHtcXHJcXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcXHJcXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXFxyXFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2J5OiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9mcm9tOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgY3JlYXRlZF90bzogJycsXFxyXFxuICAgICAgICAgICAgICAgIHRhdF9mcm9tOiAwLFxcclxcbiAgICAgICAgICAgICAgICB0YXRfdG86IDkwLFxcclxcbiAgICAgICAgICAgICAgICBjb21wbGFpbnRfbmF0dXJlOicnLFxcclxcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTonJyxcXHJcXG4gICAgICAgICAgICAgICAgdGlja2V0OicnXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcXHJcXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXFxyXFxuICAgICAgICAgICAgc2l0ZXM6IFtdLFxcclxcbiAgICAgICAgICAgIHNlbGVjdGVkX21hY2hpbmU6ICcnLFxcclxcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcXHJcXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXFxyXFxuICAgICAgICAgICAgVGlja2V0czoge30sXFxyXFxuICAgICAgICAgICAgc2w6IDEsXFxyXFxuICAgICAgICAgICAganNvbl9maWVsZHM6IHtcXHJcXG4gICAgICAgICAgICAgICAgXFxcIlNsIE5vXFxcIjoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zbCsrO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgJ1NpdGUgbmFtZSc6ICdzaXRlX25hbWUnLFxcclxcbiAgICAgICAgICAgICAgICAnRXF1aXBtZW50IERlc2NyaXB0aW9uJzogJ21hY2hpbmVfbmFtZScsXFxyXFxuICAgICAgICAgICAgICAgICdGQVIgTm8nOiAnZmFyX25vJyxcXHJcXG4gICAgICAgICAgICAgICAgJ0NvbXBsYWludCBObyc6ICd0aWNrZXRfbm8nLFxcclxcbiAgICAgICAgICAgICAgICAnQ29tcGxhaW50IGRhdGUnOiBcXFwiY3JlYXRlZF9hdFxcXCIsXFxyXFxuICAgICAgICAgICAgICAgICdDb21wbGFpbnQgUmFpc2VkIEJ5JzogJ2NyZWF0ZWRfYnlfbmFtZScsXFxyXFxuICAgICAgICAgICAgICAgICdDb21wbGFpbnQgTmF0dXJlJzogJ2NvbXBsYWludF9uYXR1cmUnLFxcclxcbiAgICAgICAgICAgICAgICAnU3RhdHVzIER1cmluZyBDb21wbGFpbnQnOiAnc3RhdHVzX2R1cmluZ19jb21wbGFpbnQnLFxcclxcbiAgICAgICAgICAgICAgICAnUHJvYmxlbSBkZXNjcmlwdGlvbic6ICdwcm9ibGVtX2Rlc2NyaXB0aW9uJyxcXHJcXG4gICAgICAgICAgICAgICAgJ0FkZGl0aW9uYWwgUHJvYmxlbSc6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcXFwicHJvYmxlbXNcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IChwcm9ibGVtKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJldCA9ICcnXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2JsZW0pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcHJvYmxlbS5tYXAodmFsdWUgPT4gdmFsdWUucHJvYmxlbSkuam9pbihcXFwiXFxcXHJcXFxcblxcXCIpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgXFxcIkN1cnJlbnQgU3RhdHVzXFxcIjoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFxcXCJzdGF0dXNcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IChzdGF0dXMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdHVzLnRvTG93ZXJDYXNlKCkgPT0gJ2NyZWF0ZWQgYnkgdXNlcicgPyAnT3BlbicgOiBzdGF0dXM7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBcXFwiQ3VycmVudCBTdGFnZVxcXCI6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcXFwibGFzdF9zdGFnZVxcXCIsXFxyXFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKHZhbHVlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gdmFsdWUuZGVzY3JpcHRpb24gOiAnLSc7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBcXFwiU3RhdHVzIFBvc3QgUmVzb2x1dGlvblxcXCI6ICdtYWNoaW5lX3N0YXR1cycsXFxyXFxuICAgICAgICAgICAgICAgICdFeHBlY3RlZCBSZXNvbHV0aW9uIGRhdGUnOiAnbGlrZWx5X2RhdGUnLFxcclxcbiAgICAgICAgICAgICAgICAnUmV2aXNlZCBFeHBlY3RlZCBkYXRlJzoncmV2ZXJzaW9uX2RhdGUnLFxcclxcbiAgICAgICAgICAgICAgICAnUmVhc29uIGZvciBkYXRlIFJldmlzaW9uJzoncmV2ZXJzaW9uX3JlYXNvbicsXFxyXFxuICAgICAgICAgICAgICAgICdBY3R1YWwgUmVzb2x2ZSBEYXRlJzogJ2FjdHVhbF9kYXRlJyxcXHJcXG4gICAgICAgICAgICAgICAgJ1RBVCc6ICd0YXQnLFxcclxcbiAgICAgICAgICAgICAgICAnRXN0aW1hdGVkIENvc3QnOiAnZXN0aW1hdGVkX2Nvc3QnLFxcclxcbiAgICAgICAgICAgICAgICAnQWN0dWFsIENvc3QnOiAnYWN0dWFsX2Nvc3QnLFxcclxcbiAgICAgICAgICAgICAgICAnUHJvZHVjdGlvbiBMb3NzJzogJ3Byb2R1Y3Rpb25fbG9zcycsXFxyXFxuICAgICAgICAgICAgICAgICdSQ0EnOiAncmNhJ1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAganNvbl9tZXRhOiBbXFxyXFxuICAgICAgICAgICAgICAgIFt7XFxyXFxuICAgICAgICAgICAgICAgICAgICBrZXk6IFxcXCJjaGFyc2V0XFxcIixcXHJcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcXFwidXRmLThcXFwiLFxcclxcbiAgICAgICAgICAgICAgICB9LF0sXFxyXFxuICAgICAgICAgICAgXSxcXHJcXG4gICAgICAgICAgICBzbDogMCxcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgdmlld19zaXRlX2RldGFpbHMoZGF0YSkge1xcclxcbiAgICAgICAgICAgIHRoaXMucG1Nb2RhbERhdGEgPSBkYXRhXFxyXFxuICAgICAgICAgICAgJCgnI01hY2hpbmVTaXRlTW9kYWwzJykubW9kYWwoJ3Nob3cnKTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICByZXNldF9maWx0ZXIoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSB7XFxyXFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXFxyXFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9ieTogJycsXFxyXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfZnJvbTogJycsXFxyXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfdG86ICcnLFxcclxcbiAgICAgICAgICAgICAgICB0YXRfZnJvbTogMCxcXHJcXG4gICAgICAgICAgICAgICAgdGF0X3RvOiA5MCxcXHJcXG4gICAgICAgICAgICAgICAgY29tcGxhaW50X25hdHVyZTonJyxcXHJcXG4gICAgICAgICAgICAgICAgdGlja2V0X3R5cGU6JycsXFxyXFxuICAgICAgICAgICAgICAgIHRpY2tldDonJ1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB0aGlzLmdldFJlc3VsdHMoKVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIFVwZGF0ZVZhbHVlcyhlKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X2Zyb20gPSBlLm1pblZhbHVlO1xcclxcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRhdF90byA9IGUubWF4VmFsdWU7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgLy8gZXhjZWxcXHJcXG4gICAgICAgIGFzeW5jIGV4cG9ydF9jc3YoKSB7XFxyXFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCAgYXhpb3MuZ2V0KCdhcGkvdGlja2V0L2V4cG9ydCcsIHtcXHJcXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxcclxcbiAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2FwaS90aWNrZXQvZXhwb3J0Jyk7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBzdGFydERvd25sb2FkKCkge1xcclxcbiAgICAgICAgICAgIHRoaXMuc2wgPSAxO1xcclxcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxlYXNlIFdhaXQgIScsXFxyXFxuICAgICAgICAgICAgICAgIGh0bWw6ICdEYXRhIHBvcHVsYXRpbmcnLCAvLyBhZGQgaHRtbCBhdHRyaWJ1dGUgaWYgeW91IHdhbnQgb3IgcmVtb3ZlXFxyXFxuICAgICAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICAgICAgb25CZWZvcmVPcGVuOiAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBTd2FsLnNob3dMb2FkaW5nKClcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBmaW5pc2hEb3dubG9hZCgpIHtcXHJcXG4gICAgICAgICAgICBTd2FsLmNsb3NlKClcXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICBnZXRMYWJlbCh2YWwpIHtcXHJcXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5mYXJfbm8gKyAnIC0gJyArIHZhbC5uYW1lO1xcclxcbiAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGdldFJlc3VsdHMocGFnZSA9IDEpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xcclxcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnBhZ2UgPSBwYWdlXFxyXFxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RpY2tldC9yZXBvcnQnLCB7XFxyXFxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcXHJcXG4gICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UaWNrZXRzID0gZGF0YS5kYXRhLmRhdGFcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbE1vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbXNNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YWdlTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yY2FNb3JlPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG5cXHJcXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBsb2FkVGlja2V0cygpIHtcXHJcXG5cXHJcXG4gICAgICAgICAgICBheGlvcy5nZXQoXFxcIi9hcGkvdGlja2V0L3JlcG9ydFxcXCIsIHtcXHJcXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxcclxcbiAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5UaWNrZXRzID0gZGF0YS5kYXRhLmRhdGFcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW1zTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWdlTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnJjYU1vcmU9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xcclxcbiAgICAgICAgICAgIH0pXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgcmVhZF9tb3JlKHgsIHAgPSAnJykge1xcclxcbiAgICAgICAgICAgIGlmIChwKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmIChwID09ICdzJykge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLnN0YWdlTW9yZVt4XSA/IGZhbHNlIDogdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuc3RhZ2VNb3JlLCB4LCBhKTtcXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHAgPT0gJ3JjJyl7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMucmNhTW9yZVt4XSA/IGZhbHNlIDogdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucmNhTW9yZSwgeCwgYSk7XFxyXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMucHJvYmxlbXNNb3JlW3hdID8gZmFsc2UgOiB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wcm9ibGVtc01vcmUsIHgsIGEpO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLmFkZGl0aW9uYWxNb3JlW3hdID8gZmFsc2UgOiB0cnVlXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmFkZGl0aW9uYWxNb3JlLCB4LCBhKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgIH0sXFxyXFxuICAgIGNyZWF0ZWQoKSB7XFxyXFxuICAgICAgICB0aGlzLmxvYWRUaWNrZXRzKCk7XFxyXFxuICAgIH0sXFxyXFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcXHJcXG4gICAgICAgIGF4aW9zLmdldChcXFwiYXBpL2dldF9wcmVfbWFjaGluZVxcXCIpXFxyXFxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkNhdGVnb3J5O1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNpdGVzID0gcmVzLmRhdGEuZGF0YS5zaXRlcztcXHJcXG4gICAgICAgICAgICB9KVxcclxcbiAgICAgICAgYXhpb3MuZ2V0KFxcXCIvYXBpL2luaXRpYWxfdGlja2V0XFxcIikudGhlbihyZXNwb25zZSA9PiB7XFxyXFxuICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS52ZW5kb3JzO1xcclxcbiAgICAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XFxyXFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XFxyXFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2l0ZXMgPSByZXNwb25zZS5kYXRhLmRhdGEuc2l0ZXM7XFxyXFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVkX3VzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLmNyZWF0ZWRfdXNlcnM7XFxyXFxuICAgICAgICB9KS5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oJ09oLiBTb21ldGhpbmcgd2VudCB3cm9uZycpKTtcXHJcXG4gICAgfSxcXHJcXG4gICAgd2F0Y2g6IHtcXHJcXG4gICAgICAgIGFzeW5jICdmb3JtLnN1Yl9jYXRlZ29yeV9pZCcobiwgbykge1xcclxcbiAgICAgICAgICAgIGlmIChuKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBhc3luYyAnZm9ybS5zaXRlX2lkJyhuLCBvKSB7XFxyXFxuICAgICAgICAgICAgaWYgKG4pIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICdmb3JtLmNhdGVnb3J5X2lkJzoge1xcclxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuLCBvKSB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmIChuKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9jYXRlZ29yeS9cXFwiICsgbilcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcXHJcXG4gICAgICAgICAgICBpbml0aWFsOiB0cnVlXFxyXFxuICAgICAgICB9LFxcclxcblxcclxcbiAgICB9LFxcclxcbn1cXHJcXG48L3NjcmlwdD5cXHJcXG48c3R5bGU+XFxyXFxuLnJtb3JlIHtcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNYXN0ZXIgUmVwb3J0XCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdG9vbHNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRvd25sb2FkLWV4Y2VsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2g6IF92bS5leHBvcnRfY3N2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5qc29uX2ZpZWxkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmUtZ2VuZXJhdGVcIjogX3ZtLnN0YXJ0RG93bmxvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlLWZpbmlzaFwiOiBfdm0uZmluaXNoRG93bmxvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldDogXCJNeSBXb3Jrc2hlZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjc3ZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXN0ZXJfcmVwb3J0LmNzdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnNldF9pbWFnZShcImltYWdlcy9maWxlLnBuZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJFeHBvcnQgQ1NWXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSBwLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYXV0b2NvbXBsZXRlOiBcIm9mZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldFJlc3VsdHMoKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldC1vcHRpb24tbGFiZWxcIjogX3ZtLmdldExhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zZWFyY2hfbWFjaGluZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBtYWNoaW5lcyAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFjaGluZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gubWFjaGluZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJtYWNoaW5lX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5tYWNoaW5lX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC50aWNrZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC50aWNrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgdGlja2V0IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGlja2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2gudGlja2V0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGlja2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaXRlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2VhcmNoX3NpdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IFNpdGUuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2l0ZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc2l0ZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJzaXRlX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5zaXRlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaXRlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcIk9wZW5cIiwgXCJDbG9zZWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgU3RhdHVzLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInN0YXR1c1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uY3JlYXRlZF91c2VycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDcmVhdGVkIGJ5Li4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNyZWF0ZWRfYnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmNyZWF0ZWRfYnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiY3JlYXRlZF9ieVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guY3JlYXRlZF9ieVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBlcmlvZGljIE1haW50ZW5hbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQnJlYWtkb3duIE1haW50ZW5hbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJUaWNrZXQgVHlwZS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0aWNrZXRfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gudGlja2V0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwidGlja2V0X3R5cGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnRpY2tldF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMiBwdC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkYXRldGltZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWUtem9uZVwiOiBcIkFzaWEvS29sa2F0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ3JlYXRlZCBmcm9tIGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmNyZWF0ZWRfZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJjcmVhdGVkX2Zyb21cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmNyZWF0ZWRfZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTIgcHQtMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGF0ZXRpbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlLXpvbmVcIjogXCJBc2lhL0tvbGthdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNyZWF0ZWQgdG8gZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guY3JlYXRlZF90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJjcmVhdGVkX3RvXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jcmVhdGVkX3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMiBwdC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNpdGVfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wiTWFqb3JcIiwgXCJNaW5vclwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBDb21wbGFpbnQgTmF0dXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNvbXBsYWludF9uYXR1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmNvbXBsYWludF9uYXR1cmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiY29tcGxhaW50X25hdHVyZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guY29tcGxhaW50X25hdHVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLTQgcHQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpZWxkc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCI0MDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImp1c3RpZnktY29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzlweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJzb2xpZCAxcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIzcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnNlYXJjaC50YXRfZnJvbSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUQVRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJzb2xpZCAxcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIzcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnNlYXJjaC50YXRfdG8pKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIk11bHRpUmFuZ2VTbGlkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUNsYXNzTmFtZTogXCJtdWx0aS1yYW5nZS1zbGlkZXItYmFyLW9ubHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluVmFsdWU6IF92bS5zZWFyY2gudGF0X2Zyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFZhbHVlOiBfdm0uc2VhcmNoLnRhdF90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VNYXJnaW46IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBpbnB1dDogX3ZtLlVwZGF0ZVZhbHVlcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgcHQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWFyY2hcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvIG1sLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXNldF9maWx0ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlc2V0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMCBtYXN0ZXJUYWJsZVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLlRpY2tldHMuZGF0YSwgZnVuY3Rpb24odGlja2V0LCB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogdGlja2V0LmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uVGlja2V0cy5mcm9tICsgeCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNhcGl0YWxpemVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0aWNrZXQuc2l0ZV9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0Lm1hY2hpbmUubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0Lm1hY2hpbmUubWFjaGluZV9tb2RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGlja2V0Lm1hY2hpbmUubWFjaGluZV9tb2RlbC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmlld19zaXRlX2RldGFpbHModGlja2V0Lm1hY2hpbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC5mYXJfbm8pKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQudGlja2V0X25vKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQuY3JlYXRlZF9hdCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0LmNyZWF0ZWRfYnlfbmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0LmNvbXBsYWludF9uYXR1cmUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRpY2tldC5zdGF0dXNfZHVyaW5nX2NvbXBsYWludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC50aWNrZXRfdHlwZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQucHJvYmxlbV9kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZ1ZVJlYWRNb3JlU21vb3RoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbjogX3ZtLnByb2JsZW1zTW9yZVt4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tYnV0dG9uXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vLXNoYWRvd1wiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6b3BlblwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9ibGVtc01vcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IGtleTogXCJwZFwiICsgeCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aWNrZXQucHJvYmxlbV9kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJtb3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWFkX21vcmUoeCwgXCJwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuLi5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvYmxlbXNNb3JlW3hdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiTGVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiTW9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5wcm9ibGVtcyAmJiB0aWNrZXQucHJvYmxlbXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZ1ZVJlYWRNb3JlU21vb3RoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbjogX3ZtLmFkZGl0aW9uYWxNb3JlW3hdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuby1idXR0b25cIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tc2hhZG93XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpvcGVuXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZGl0aW9uYWxNb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbCh0aWNrZXQucHJvYmxlbXMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpY2tldC5wcm9ibGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJwXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoaXRlbS5wcm9ibGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm1vcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlYWRfbW9yZSh4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLi4uXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZGl0aW9uYWxNb3JlW3hdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiTGVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiTW9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuc3RhdHVzLnRvTG93ZXJDYXNlKCkgPT0gXCJjcmVhdGVkIGJ5IHVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJPcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRpY2tldC5zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuc3RhdHVzID09IFwiQ2xvc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aWNrZXQuY3VycmVudF9zdGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwibXlEYXRlXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5zdGF0dXMgPT0gXCJDbG9zZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aWNrZXQubGFzdF9zdGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aWNrZXQubGFzdF9zdGFnZS5zdGFnZV9kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuc3RhdHVzICE9IFwiQ2xvc2VkXCIgJiYgdGlja2V0Lmxhc3Rfc3RhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWdWVSZWFkTW9yZVNtb290aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW46IF92bS5zdGFnZU1vcmVbeF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vLWJ1dHRvblwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuby1zaGFkb3dcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOm9wZW5cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3RhZ2VNb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0Lmxhc3Rfc3RhZ2UuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm1vcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlYWRfbW9yZSh4LCBcInNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi4uLlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zdGFnZU1vcmVbeF0gPyBcIkxlc3NcIiA6IFwiTW9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQubWFjaGluZV9zdGF0dXMpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LnJjYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZ1ZVJlYWRNb3JlU21vb3RoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwicmNtXCIgKyB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiBfdm0ucmNhTW9yZVt4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tYnV0dG9uXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vLXNoYWRvd1wiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6b3BlblwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yY2FNb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInBcIiwgW192bS5fdihfdm0uX3ModGlja2V0LnJjYSkpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJtb3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWFkX21vcmUoeCwgXCJyY1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLi4uXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJjYU1vcmVbeF0gPyBcIkxlc3NcIiA6IFwiTW9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJteURhdGVcIikodGlja2V0Lmxpa2VseV9kYXRlKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9mKFwibXlEYXRlXCIpKHRpY2tldC5yZXZlcnNpb25fZGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQucmV2ZXJzaW9uX3JlYXNvbikpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0LmFjdHVhbF9kYXRlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRpY2tldC5hY3R1YWxfZGF0ZSA/IHRpY2tldC50YXQgOiBcIi1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcInRvQ3VycmVuY3lcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5hZF9lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuYWRfZXN0aW1hdGVkX3NlcnZpY2VfY29zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b0N1cnJlbmN5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKSh0aWNrZXQucHJvZHVjdGlvbl9sb3NzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9vdGVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkYXRhOiBfdm0uVGlja2V0cyB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBcInBhZ2luYXRpb24tY2hhbmdlLXBhZ2VcIjogX3ZtLmdldFJlc3VsdHMgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJNYWNoaW5lUG9wXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwiTWFjaGluZVNpdGVNb2RhbDNcIiwgbWFjaGluZTogX3ZtLnBtTW9kYWxEYXRhIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlMuTlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTaXRlIG5hbWVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRXF1aXBtZW50XCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCIgRGVzY3JpcHRpb25cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTW9kZWxcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRkFSIE5vXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkNvbXBsYWludFwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiIE5vXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkNvbXBsYWludCBcIiksIF9jKFwiYnJcIiksIF92bS5fdihcImRhdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ29tcGxhaW50XCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCIgUmFpc2VkIEJ5XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkNvbXBsYWludCBcIiksIF9jKFwiYnJcIiksIF92bS5fdihcIk5hdHVyZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTdGF0dXMgXCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCJEdXJpbmcgQ29tcGxhaW50XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlRpY2tldCBUeXBlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyB3aWR0aDogXCIxMFwiIH0gfSwgW192bS5fdihcIlByb2JsZW0gZGVzY3JpcHRpb25cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHdpZHRoOiBcIjEwXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiQWRkaXRpb25hbCBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgUHJvYmxlbXNcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkN1cnJlbnQgXCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCJTdGF0dXNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3VycmVudCBcIiksIF9jKFwiYnJcIiksIF92bS5fdihcIlN0YWdlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkN1cnJlbnQgXCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCJTdGFnZSBEYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkN1cnJlbnRcIiksIF9jKFwiYnJcIiksIF92bS5fdihcIiBTdGFnZSBEZXNjcmlwdGlvblwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTdGF0dXMgXCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCIgUG9zdCBSZXNvbHV0aW9uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJDQVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJFeHBlY3RlZCBcIiksIF9jKFwiYnJcIiksIF92bS5fdihcIiBSZXNvbHV0aW9uIGRhdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUmV2aXNlZCBcIiksIF9jKFwiYnJcIiksIF92bS5fdihcIiBFeHBlY3RlZCBkYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJlYXNvbiBmb3JcIiksIF9jKFwiYnJcIiksIF92bS5fdihcIkRhdGUgUmV2aXNpb25cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQWN0dWFsIFwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiIFJlc29sdmUgRGF0ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUQVRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRXN0aW1hdGVkXCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCIgQ29zdFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJBY3R1YWxcIiksIF9jKFwiYnJcIiksIF92bS5fdihcIiBDb3N0XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlByb2R1Y3Rpb25cIiksIF9jKFwiYnJcIiksIF92bS5fdihcIiBMb3NzXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTdjNmU4ODZlXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9NYXN0ZXJSZXBvcnQudnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjc4YTkwZDI4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01hc3RlclJlcG9ydC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9NYXN0ZXJSZXBvcnQudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9NYXN0ZXJSZXBvcnQudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01hc3RlclJlcG9ydC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01hc3RlclJlcG9ydC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2M2ZTg4NmVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTWFzdGVyUmVwb3J0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXE1hc3RlclJlcG9ydC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2M2ZTg4NmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03YzZlODg2ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9