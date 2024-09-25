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
exports.push([module.i, "\n.rmore {\r\n    color: blue;\n}\r\n", "", {"version":3,"sources":["C:/devlopment/wamp64/www/royal-infraconstruction/resources/js/components/resources/js/components/MasterReport.vue"],"names":[],"mappings":";AAweA;IACA,YAAA;CACA","file":"MasterReport.vue","sourcesContent":["<template>\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-12\">\r\n\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Master Report</h3>\r\n                            <div class=\"card-tools\">\r\n                                <download-excel class=\"btn btn-sm btn-primary\" :fetch=\"export_csv\" :fields=\"json_fields\"\r\n                                    :before-generate=\"startDownload\" :before-finish=\"finishDownload\"\r\n                                    worksheet=\"My Worksheet\" type=\"csv\" name=\"master_report.csv\">\r\n                                    <span class=\"labelText\"><img :src=\"set_image('images/file.png')\" class=\"icon\"\r\n                                            width=\"20\">Export CSV</span>\r\n                                </download-excel>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"card-body p-2\">\r\n                            <form autocomplete=\"off\" @submit.prevent=\"getResults()\">\r\n                                <div class=\"form-row\">\r\n                                    <div class=\"col col-2\">\r\n                                        <v-select label=\"name\" :get-option-label=\"getLabel\"\r\n                                            :reduce=\"(option) => option.id\" :options=\"search_machines\"\r\n                                            placeholder=\"Enter machines ...\" v-model=\"search.machine_id\"\r\n                                            name=\"machine_id\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-2\">\r\n                                        <input type=\"text\" placeholder=\"Enter ticket ...\" v-model=\"search.ticket\"\r\n                                            name=\"ticket\" class=\"form-control\">\r\n                                    </div>\r\n                                    <div class=\"col col-2\">\r\n                                        <v-select label=\"site_name\" :reduce=\"(option) => option.id\"\r\n                                            :options=\"search_sites\" placeholder=\"Select Site...\"\r\n                                            v-model=\"search.site_id\" name=\"site_id\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-2\">\r\n                                        <v-select label=\"site_name\" :options=\"['Open', 'Closed']\"\r\n                                            placeholder=\"Select Status...\" v-model=\"search.status\" name=\"status\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-2 \">\r\n                                        <v-select label=\"name\" :options=\"created_users\" :reduce=\"(option) => option.id\"\r\n                                            placeholder=\"Created by...\" v-model=\"search.created_by\" name=\"created_by\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-2 \">\r\n                                        <v-select label=\"name\"\r\n                                            :options=\"['Periodic Maintenance','Breakdown Maintenance']\"\r\n                                            placeholder=\"Ticket Type...\" v-model=\"search.ticket_type\"\r\n                                            name=\"ticket_type\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-2 pt-2\">\r\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.created_from\"\r\n                                            input-class=\"form-control\" placeholder=\"Created from date\" />\r\n                                    </div>\r\n                                    <div class=\"col col-2 pt-2\">\r\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.created_to\"\r\n                                            input-class=\"form-control\" placeholder=\"Created to date\" />\r\n                                    </div>\r\n                                    <div class=\"col col-2 pt-2\">\r\n                                        <v-select label=\"site_name\" :options=\"['Major', 'Minor']\"\r\n                                            placeholder=\"Select Complaint Nature\" v-model=\"search.complaint_nature\"\r\n                                            name=\"complaint_nature\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col col-4 pt-2\">\r\n                                        <fieldset style=\"max-width: 400px; margin: auto; text-align: left;  \">\r\n                                            <div\r\n                                                style=\"display: flex; justify-content: space-between; text-align: center; height: 39px;\">\r\n                                                <span style=\"\r\n          display: inline-block;\r\n          padding: 5px;\r\n          border: solid 1px;\r\n          border-radius: 5px;\r\n          width: 100px;\r\n          margin: 3px;\r\n\r\n        \">{{ search.tat_from }}</span>\r\n                                                <span style=\"top: 25%; position: relative;\">TAT</span>\r\n                                                <span style=\"\r\n          display: inline-block;\r\n          padding: 5px;\r\n          border: solid 1px;\r\n          border-radius: 5px;\r\n          width: 100px;\r\n          margin: 3px;\r\n        \">{{ search.tat_to }}</span>\r\n                                            </div>\r\n\r\n                                            <MultiRangeSlider baseClassName=\"multi-range-slider-bar-only\"\r\n                                                :minValue=\"search.tat_from\" :maxValue=\"search.tat_to\" :max=\"100\"\r\n                                                :min=\"0\" :step=\"1\" :rangeMargin=\"0\" @input=\"UpdateValues\" />\r\n                                        </fieldset>\r\n                                    </div>\r\n                                    <div class=\"col pt-2\">\r\n                                        <button type=\"submit\" class=\"btn btn-success\">Search</button>\r\n                                        <button type=\"button\" class=\"btn btn-info ml-2\"\r\n                                            @click=\"reset_filter()\">Reset</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n\r\n                        <!-- /.card-header -->\r\n                        <div class=\"card-body table-responsive p-0 masterTable\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>S.N</th>\r\n                                        <th>Site name</th>\r\n                                        <th>Equipment<br> Description</th>\r\n                                        <th>Model</th>\r\n                                        <th>FAR No</th>\r\n                                        <th>Complaint<br> No</th>\r\n                                        <th>Complaint <br>date</th>\r\n                                        <th>Complaint<br> Raised By</th>\r\n                                        <th>Complaint <br>Nature</th>\r\n                                        <th>Status <br>During Complaint</th>\r\n                                        <th>Ticket Type</th>\r\n                                        <th width=\"10\">Problem description</th>\r\n                                        <th width=\"10\">Additional <br> Problems</th>\r\n                                        <th>Current <br>Status</th>\r\n                                        <th>Current <br>Stage</th>\r\n                                        <th>Current <br>Stage Date</th>\r\n                                        <th>Current<br> Stage Description</th>\r\n                                        <th>Status <br> Post Resolution</th>\r\n                                        <th>RCA</th>\r\n                                        <th>Expected <br> Resolution date</th>\r\n                                        <th>Reversion<br>Expected date</th>\r\n                                        <th>Actual <br> Resolve Date</th>\r\n                                        <th>TAT</th>\r\n                                        <th>Estimated<br> Cost</th>\r\n                                        <th>Actual<br> Cost</th>\r\n                                        <th>Production<br> Loss</th>\r\n\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr v-for=\"(ticket, x) in Tickets.data\" :key=\"ticket.id\">\r\n                                        <td>{{ Tickets.from + x }}</td>\r\n                                        <td class=\"text-capitalize\">{{ ticket.site_name }}</td>\r\n                                        <td>{{ ticket.machine.name }}</td>\r\n                                        <td>{{ ticket.machine.machine_model ? ticket.machine.machine_model.name : '-' }}\r\n                                        </td>\r\n                                        <td @click=\"view_site_details(ticket.machine)\">{{ ticket.far_no }}</td>\r\n                                        <td>{{ ticket.ticket_no }}</td>\r\n                                        <td>{{ ticket.created_at }}</td>\r\n                                        <td>{{ ticket.created_by_name }}</td>\r\n                                        <td>{{ ticket.complaint_nature }}</td>\r\n                                        <td>{{ ticket.status_during_complaint }}</td>\r\n                                        <td>{{ ticket.ticket_type }}</td>\r\n                                        <td>\r\n                                            <template v-if=\"ticket.problem_description\">\r\n                                                <VueReadMoreSmooth :open.sync=\"problemsMore[x]\" no-button no-shadow>\r\n                                                    <p :key=\"'pd'+x\">{{ ticket.problem_description }}</p>\r\n                                                </VueReadMoreSmooth>\r\n                                                <span @click=\"read_more(x, 'p')\" class=\"rmore\">...{{\r\n                                                problemsMore[x]?'Less': 'More' }}</span>\r\n                                            </template>\r\n                                        </td>\r\n                                        <td>\r\n                                            <template v-if=\"ticket.problems && ticket.problems.length > 0\">\r\n                                                <VueReadMoreSmooth :open.sync=\"additionalMore[x]\" no-button no-shadow>\r\n                                                    <p v-if=\"ticket.problems\" v-for=\"(item, index) in ticket.problems\"\r\n                                                        :key=\"'p' + index\" v-html=\"item.problem\"></p>\r\n                                                </VueReadMoreSmooth>\r\n                                                <span @click=\"read_more(x)\" class=\"rmore\">...{{\r\n                                                additionalMore[x]?'Less': 'More' }}</span>\r\n                                            </template>\r\n                                        </td>\r\n                                        <td>{{ ticket.status.toLowerCase() == 'created by user' ? 'Open' : ticket.status }}\r\n                                        </td>\r\n                                        <td>{{ ticket.status == 'Closed' ? '-' : ticket.current_stage }}</td>\r\n                                        <td>{{\r\n                                            ticket.status == 'Closed' ? '-' : ticket.last_stage ? ticket.last_stage.stage_date\r\n                                                : '' | myDate\r\n                                        }}</td>\r\n                                        <td>\r\n                                            <template v-if=\"ticket.status != 'Closed' && ticket.last_stage\">\r\n                                                <VueReadMoreSmooth :open.sync=\"stageMore[x]\" no-button no-shadow>\r\n                                                    <p>{{ ticket.last_stage.description }}</p>\r\n                                                </VueReadMoreSmooth>\r\n                                                <span @click=\"read_more(x, 's')\" class=\"rmore\">...{{\r\n                                                stageMore[x]?'Less': 'More' }}</span>\r\n                                            </template>\r\n                                        </td>\r\n                                        <td>{{ ticket.machine_status }}</td>\r\n                                        <td>\r\n\r\n                                            <template v-if=\"ticket.rca\">\r\n                                                <VueReadMoreSmooth :open.sync=\"rcaMore[x]\" no-button no-shadow\r\n                                                    :key=\"'rcm'+x\">\r\n                                                    <p>{{ ticket.rca }}</p>\r\n                                                </VueReadMoreSmooth>\r\n                                                <span @click=\"read_more(x, 'rc')\" class=\"rmore\">...{{\r\n    rcaMore[x]?'Less': 'More' }}</span>\r\n\r\n                                            </template>\r\n                                        </td>\r\n                                        <td>{{ ticket.likely_date | myDate }}</td>\r\n                                        <td>{{ ticket.reversion_date|myDate }}</td>\r\n                                        <td>{{ ticket.actual_date }}</td>\r\n                                        <td>{{ ticket.actual_date ? ticket.tat : '-' }}</td>\r\n                                        <td>{{(ticket.estimated_service_cost + ticket.estimated_material_cost +\r\n                                        ticket.ad_estimated_material_cost + ticket.ad_estimated_service_cost)\r\n                                        | toCurrency}}</td>\r\n                                        <td>{{(ticket.actual_service_cost + ticket.actual_material_cost) | toCurrency}}\r\n                                        </td>\r\n                                        <td>{{ ticket.production_loss | toCurrency }}</td>\r\n\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <!-- /.card-body -->\r\n                        <div class=\"card-footer\">\r\n                            <pagination :data=\"Tickets\" @pagination-change-page=\"getResults\"></pagination>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.card -->\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n        <MachinePop id=\"MachineSiteModal3\" :machine=\"pmModalData\" />\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n//import VueReadMoreSmooth from \"vue-read-more-smooth\";\r\nimport MultiRangeSlider from \"multi-range-slider-vue\";\r\nexport default {\r\n    name:\"MasterReport\",\r\n    components: {\r\n        VueReadMoreSmooth : () => import('vue-read-more-smooth'),\r\n        MultiRangeSlider,\r\n        MachinePop: () => import('./MachineFarPop.vue'),\r\n    },\r\n    data() {\r\n        return {\r\n            stageMore: [],\r\n            additionalMore: [],\r\n            problemsMore: [],\r\n            rcaMore: [],\r\n            pmModalData: '',\r\n            created_users: [],\r\n            search_machines: [],\r\n            search_sites: [],\r\n            search: {\r\n                page: 1,\r\n                machine_id: '',\r\n                site_id: '',\r\n                created_by: '',\r\n                created_from: '',\r\n                created_to: '',\r\n                tat_from: 0,\r\n                tat_to: 90,\r\n                complaint_nature:'',\r\n                ticket_type:'',\r\n                ticket:''\r\n            },\r\n            categories: [],\r\n            sub_categories: [],\r\n            sites: [],\r\n            selected_machine: '',\r\n            users: [],\r\n            machines: [],\r\n            Tickets: {},\r\n            sl: 1,\r\n            json_fields: {\r\n                \"Sl No\": {\r\n                    callback: () => {\r\n                        return this.sl++;\r\n                    },\r\n                },\r\n                'Site name': 'site_name',\r\n                'Equipment Description': 'machine_name',\r\n                'FAR No': 'far_no',\r\n                'Complaint No': 'ticket_no',\r\n                'Complaint date': \"created_at\",\r\n                'Complaint Raised By': 'created_by_name',\r\n                'Complaint Nature': 'complaint_nature',\r\n                'Status During Complaint': 'status_during_complaint',\r\n                'Problem description': 'problem_description',\r\n                'Additional Problem': {\r\n                    field: \"problems\",\r\n                    callback: (problem) => {\r\n                        let ret = ''\r\n                        if (problem) {\r\n                            ret = problem.map(value => value.problem).join(\"\\r\\n\");\r\n                        }\r\n                        return ret;\r\n                    },\r\n                },\r\n                \"Current Status\": {\r\n                    field: \"status\",\r\n                    callback: (status) => {\r\n                        return status.toLowerCase() == 'created by user' ? 'Open' : status;\r\n                    },\r\n                },\r\n                \"Current Stage\": {\r\n                    field: \"last_stage\",\r\n                    callback: (value) => {\r\n                        return value ? value.description : '-';\r\n                    },\r\n                },\r\n                \"Status Post Resolution\": 'machine_status',\r\n                'Expected Resolution date': 'likely_date',\r\n                'Actual Resolve Date': 'actual_date',\r\n                'TAT': 'tat',\r\n                'Estimated Cost': 'estimated_cost',\r\n                'Actual Cost': 'actual_cost',\r\n                'Production Loss': 'production_loss',\r\n                'RCA': 'rca'\r\n            },\r\n            json_meta: [\r\n                [{\r\n                    key: \"charset\",\r\n                    value: \"utf-8\",\r\n                },],\r\n            ],\r\n            sl: 0,\r\n        }\r\n    },\r\n    methods: {\r\n        view_site_details(data) {\r\n            this.pmModalData = data\r\n            $('#MachineSiteModal3').modal('show');\r\n        },\r\n        reset_filter() {\r\n            this.search = {\r\n                page: 1,\r\n                machine_id: '',\r\n                site_id: '',\r\n                created_by: '',\r\n                created_from: '',\r\n                created_to: '',\r\n                tat_from: 0,\r\n                tat_to: 90,\r\n                complaint_nature:'',\r\n                ticket_type:'',\r\n                ticket:''\r\n            }\r\n            this.getResults()\r\n        },\r\n        UpdateValues(e) {\r\n            this.search.tat_from = e.minValue;\r\n            this.search.tat_to = e.maxValue;\r\n        },\r\n        // excel\r\n        async export_csv() {\r\n            const response = await  axios.get('api/ticket/export', {\r\n                params: this.search\r\n            });\r\n           // const response = await axios.get('api/ticket/export');\r\n            return response.data.data;\r\n        },\r\n        startDownload() {\r\n            this.sl = 1;\r\n            Swal.fire({\r\n                title: 'Please Wait !',\r\n                html: 'Data populating', // add html attribute if you want or remove\r\n                allowOutsideClick: false,\r\n                onBeforeOpen: () => {\r\n                    Swal.showLoading()\r\n                },\r\n            });\r\n        },\r\n        finishDownload() {\r\n            Swal.close()\r\n        },\r\n\r\n        getLabel(val) {\r\n            if (typeof val === 'object') {\r\n                return val.far_no + ' - ' + val.name;\r\n            } else {\r\n                return val;\r\n            }\r\n        },\r\n        getResults(page = 1) {\r\n            this.$Progress.start();\r\n            this.search.page = page\r\n            axios.get('/api/ticket/report', {\r\n                params: this.search\r\n            })\r\n                .then((data) => {\r\n                    this.Tickets = data.data.data\r\n                    this.additionalMore = new Array(this.Tickets.data.length).fill(false);\r\n                    this.problemsMore = new Array(this.Tickets.data.length).fill(false);\r\n                    this.stageMore = new Array(this.Tickets.data.length).fill(false);\r\n                    this.rcaMore= new Array(this.Tickets.data.length).fill(false);\r\n                })\r\n\r\n            this.$Progress.finish();\r\n        },\r\n        loadTickets() {\r\n\r\n            axios.get(\"/api/ticket/report\", {\r\n                params: this.search\r\n            }).then((data) => {\r\n                this.Tickets = data.data.data\r\n                this.additionalMore = new Array(this.Tickets.data.length).fill(false);\r\n                this.problemsMore = new Array(this.Tickets.data.length).fill(false);\r\n                this.stageMore = new Array(this.Tickets.data.length).fill(false);\r\n                this.rcaMore= new Array(this.Tickets.data.length).fill(false);\r\n            })\r\n\r\n\r\n\r\n        },\r\n        read_more(x, p = '') {\r\n            if (p) {\r\n                if (p == 's') {\r\n                    let a = this.stageMore[x] ? false : true\r\n                    this.$set(this.stageMore, x, a);\r\n                } else if(p == 'rc'){\r\n                    let a = this.rcaMore[x] ? false : true\r\n                    this.$set(this.rcaMore, x, a);\r\n                } else {\r\n                    let a = this.problemsMore[x] ? false : true\r\n                    this.$set(this.problemsMore, x, a);\r\n                }\r\n            } else {\r\n                let a = this.additionalMore[x] ? false : true\r\n                this.$set(this.additionalMore, x, a);\r\n            }\r\n        }\r\n\r\n    },\r\n    created() {\r\n        this.loadTickets();\r\n    },\r\n    beforeCreate() {\r\n        axios.get(\"api/get_pre_machine\")\r\n            .then((res) => {\r\n                this.categories = res.data.data.Category;\r\n                this.sites = res.data.data.sites;\r\n            })\r\n        axios.get(\"/api/initial_ticket\").then(response => {\r\n            this.users = response.data.data.vendors;\r\n            this.machines = response.data.data.machines;\r\n            this.search_machines = response.data.data.machines;\r\n            this.search_sites = response.data.data.sites;\r\n            this.created_users = response.data.data.created_users;\r\n        }).catch(() => console.warn('Oh. Something went wrong'));\r\n    },\r\n    watch: {\r\n        async 'form.sub_category_id'(n, o) {\r\n            if (n) {\r\n                this.get_machine()\r\n            }\r\n        },\r\n        async 'form.site_id'(n, o) {\r\n            if (n) {\r\n                this.get_machine()\r\n            }\r\n        },\r\n\r\n        'form.category_id': {\r\n            handler: function (n, o) {\r\n\r\n                if (n) {\r\n                    axios.get(\"api/category/\" + n)\r\n                        .then((res) => {\r\n                            this.sub_categories = res.data.data;\r\n                        })\r\n                    this.get_machine()\r\n                }\r\n            },\r\n            deep: true,\r\n            initial: true\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n<style>\r\n.rmore {\r\n    color: blue;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);

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
        _c("th", [_vm._v("Reversion"), _c("br"), _vm._v("Expected date")]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTWFzdGVyUmVwb3J0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYXN0ZXJSZXBvcnQudnVlPzBlYmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTWFzdGVyUmVwb3J0LnZ1ZT9hNmMwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL01hc3RlclJlcG9ydC52dWU/NzU0YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYXN0ZXJSZXBvcnQudnVlIl0sIm5hbWVzIjpbIm5hbWUiLCJjb21wb25lbnRzIiwiVnVlUmVhZE1vcmVTbW9vdGgiLCJNdWx0aVJhbmdlU2xpZGVyIiwiTWFjaGluZVBvcCIsImRhdGEiLCJzdGFnZU1vcmUiLCJhZGRpdGlvbmFsTW9yZSIsInByb2JsZW1zTW9yZSIsInJjYU1vcmUiLCJwbU1vZGFsRGF0YSIsImNyZWF0ZWRfdXNlcnMiLCJzZWFyY2hfbWFjaGluZXMiLCJzZWFyY2hfc2l0ZXMiLCJzZWFyY2giLCJwYWdlIiwibWFjaGluZV9pZCIsInNpdGVfaWQiLCJjcmVhdGVkX2J5IiwiY3JlYXRlZF9mcm9tIiwiY3JlYXRlZF90byIsInRhdF9mcm9tIiwidGF0X3RvIiwiY29tcGxhaW50X25hdHVyZSIsInRpY2tldF90eXBlIiwidGlja2V0IiwiY2F0ZWdvcmllcyIsInN1Yl9jYXRlZ29yaWVzIiwic2l0ZXMiLCJzZWxlY3RlZF9tYWNoaW5lIiwidXNlcnMiLCJtYWNoaW5lcyIsIlRpY2tldHMiLCJzbCIsImpzb25fZmllbGRzIiwiY2FsbGJhY2siLCJmaWVsZCIsInJldCIsImpzb25fbWV0YSIsImtleSIsInZhbHVlIiwibWV0aG9kcyIsInZpZXdfc2l0ZV9kZXRhaWxzIiwiJCIsInJlc2V0X2ZpbHRlciIsIlVwZGF0ZVZhbHVlcyIsInBhcmFtcyIsInN0YXJ0RG93bmxvYWQiLCJTd2FsIiwidGl0bGUiLCJodG1sIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJvbkJlZm9yZU9wZW4iLCJmaW5pc2hEb3dubG9hZCIsImdldExhYmVsIiwiZ2V0UmVzdWx0cyIsImF4aW9zIiwidGhlbiIsImxvYWRUaWNrZXRzIiwicmVhZF9tb3JlIiwiY3JlYXRlZCIsImJlZm9yZUNyZWF0ZSIsIndhdGNoIiwiaGFuZGxlciIsImRlZXAiLCJpbml0aWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnUEE7QUFDc0Q7QUFDdkM7RUFDZkE7RUFDQUM7SUFDQUM7SUFDQUM7SUFDQUM7RUFDQTtFQUNBQztJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQTtVQUNBQztZQUNBO1VBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1VBQ0FDO1VBQ0FEO1lBQ0E7WUFDQTtjQUNBRTtZQUNBO1lBQ0E7VUFDQTtRQUNBO1FBQ0E7VUFDQUQ7VUFDQUQ7WUFDQTtVQUNBO1FBQ0E7UUFDQTtVQUNBQztVQUNBRDtZQUNBO1VBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBRyxZQUNBO1FBQ0FDO1FBQ0FDO01BQ0EsR0FDQTtNQUNBUDtJQUNBO0VBQ0E7RUFDQVE7SUFDQUM7TUFDQTtNQUNBQztJQUNBO0lBQ0FDO01BQ0E7UUFDQTdCO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0FvQjtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0E7TUFDQTtRQUNBQztNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQUM7UUFDQUM7UUFDQUM7UUFBQTtRQUNBQztRQUNBQztVQUNBSjtRQUNBO01BQ0E7SUFDQTtJQUNBSztNQUNBTDtJQUNBO0lBRUFNO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBQztRQUNBVjtNQUNBLEdBQ0FXO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO01BRUE7SUFDQTtJQUNBQztNQUVBRjtRQUNBVjtNQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO0lBSUE7SUFDQWE7TUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO01BQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtFQUVBO0VBQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBTCxpQ0FDQUM7TUFDQTtNQUNBO0lBQ0E7SUFDQUQ7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBTTtJQUNBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUE7TUFDQUM7UUFFQTtVQUNBUCwrQkFDQUM7WUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO01BQ0FPO01BQ0FDO0lBQ0E7RUFFQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDcmVELDJCQUEyQixtQkFBTyxDQUFDLG1HQUFrRDtBQUNyRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsYUFBYSxvQkFBb0IsR0FBRyxZQUFZLG9LQUFvSyxNQUFNLFVBQVUsbXRLQUFtdEssY0FBYyxrQkFBa0IsbUlBQW1JLGdDQUFnQyxvQkFBb0IsY0FBYyx5R0FBeUcsMkJBQTJCLGdDQUFnQyxpQ0FBaUMsMkJBQTJCLDBCQUEwQixxQkFBcUIsbUJBQW1CLGtGQUFrRixvQkFBb0IsbUhBQW1ILDJCQUEyQixnQ0FBZ0MsaUNBQWlDLDJCQUEyQiwwQkFBMEIsaUJBQWlCLGlCQUFpQixxNUdBQXE1RyxvQkFBb0IsaUZBQWlGLG9CQUFvQix1REFBdUQsdUJBQXVCLHVEQUF1RCwwRUFBMEUsZ0pBQWdKLGlCQUFpQix1REFBdUQsb0JBQW9CLHVEQUF1RCxxQkFBcUIsdURBQXVELDBCQUEwQix1REFBdUQsMkJBQTJCLHVEQUF1RCxrQ0FBa0MsdURBQXVELHNCQUFzQiwwVkFBMFYsOEJBQThCLHdMQUF3TCxxRkFBcUYsMHlCQUEweUIsdUZBQXVGLHFLQUFxSyw2RUFBNkUsbUdBQW1HLDBEQUEwRCx1REFBdUQsaVBBQWlQLDJWQUEyVixpQ0FBaUMsd0xBQXdMLGtGQUFrRixxS0FBcUsseUJBQXlCLGlZQUFpWSxjQUFjLHlMQUF5TCxvQ0FBb0MseUtBQXlLLCtCQUErQix1REFBdUQsZ0NBQWdDLHVEQUF1RCxzQkFBc0IsdURBQXVELHlDQUF5Qyx1REFBdUQsNE9BQTRPLHVEQUF1RCx5RUFBeUUsbUdBQW1HLHVDQUF1Qyw0dkJBQTR2Qiw0REFBNEQsb0JBQW9CLG1EQUFtRCx1S0FBdUssaUJBQWlCLG9CQUFvQiw4UkFBOFIsa1lBQWtZLG9OQUFvTixxREFBcUQsZ0NBQWdDLHlDQUF5Qyw2Q0FBNkMseUJBQXlCLHNCQUFzQixtaUJBQW1pQiw0RkFBNEYsa0ZBQWtGLDJGQUEyRiw2QkFBNkIsdUNBQXVDLHlCQUF5QixzQkFBc0IsMENBQTBDLHlGQUF5RiwrRkFBK0YseUJBQXlCLHNCQUFzQix5Q0FBeUMsNEZBQTRGLG1FQUFtRSx5QkFBeUIsc0JBQXNCLDRhQUE0YSxtREFBbUQsdUdBQXVHLHdEQUF3RCxTQUFTLG1CQUFtQixxQ0FBcUMsNkZBQTZGLGFBQWEsNkJBQTZCLCtCQUErQixrWUFBa1ksOENBQThDLDhCQUE4QixrREFBa0QsZ0RBQWdELGFBQWEscURBQXFELHdFQUF3RSx3REFBd0QsRUFBRSx3RUFBd0UsMENBQTBDLGFBQWEsOEJBQThCLDRCQUE0QiwyQkFBMkIseU5BQXlOLCtEQUErRCxrQkFBa0IsRUFBRSxhQUFhLCtCQUErQix5Q0FBeUMsZ0NBQWdDLDhDQUE4Qyx5REFBeUQsaUJBQWlCLE9BQU8sK0JBQStCLGlCQUFpQixhQUFhLG1DQUFtQyx1Q0FBdUMsd0ZBQXdGLHdEQUF3RCxzQ0FBc0MsbUpBQW1KLDRGQUE0Rix5RkFBeUYsc0ZBQXNGLHFCQUFxQiw2Q0FBNkMsYUFBYSw0QkFBNEIsdURBQXVELHdEQUF3RCxrQkFBa0IsMklBQTJJLHdGQUF3RixxRkFBcUYsa0ZBQWtGLGlCQUFpQiwwQkFBMEIsbUNBQW1DLHdCQUF3QixtQ0FBbUMsd0hBQXdILHFCQUFxQixvQkFBb0Isb0hBQW9ILHFCQUFxQixPQUFPLDhIQUE4SCxxQkFBcUIsaUJBQWlCLE9BQU8sMEhBQTBILGlCQUFpQixhQUFhLGFBQWEsb0JBQW9CLCtCQUErQixTQUFTLHlCQUF5Qiw4RUFBOEUsNkRBQTZELHFEQUFxRCxpQkFBaUIsa0VBQWtFLHdEQUF3RCw0REFBNEQsbUVBQW1FLDZEQUE2RCxzRUFBc0UsYUFBYSx3REFBd0QsU0FBUyxpQkFBaUIsZ0RBQWdELHdCQUF3Qix1REFBdUQsYUFBYSx5Q0FBeUMsd0JBQXdCLHVEQUF1RCxhQUFhLHNDQUFzQywwQ0FBMEMsZ0NBQWdDLG9HQUFvRyxvRUFBb0UsNkJBQTZCLGdFQUFnRSxpQkFBaUIsc0VBQXNFLGNBQWMsTUFBTSxvQ0FBb0Msb0JBQW9CLEtBQUssbUNBQW1DOztBQUUvMXhCOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx5QkFBeUI7QUFDOUI7QUFDQSxpQkFBaUIsaUNBQWlDO0FBQ2xELG1CQUFtQixxQkFBcUI7QUFDeEMscUJBQXFCLHdCQUF3QjtBQUM3Qyx1QkFBdUIsc0JBQXNCO0FBQzdDLHlCQUF5Qiw2QkFBNkI7QUFDdEQsMEJBQTBCLDRCQUE0QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0Esb0NBQW9DLDJCQUEyQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtCQUErQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLCtCQUErQiwwQkFBMEI7QUFDekQ7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMkJBQTJCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IscUNBQXFDLDJCQUEyQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkJBQTJCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkJBQTJCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJCQUEyQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJCQUEyQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQ0FBZ0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdDQUFnQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0NBQWdDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMEJBQTBCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpQkFBaUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0REFBNEQ7QUFDN0U7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsaUJBQWlCO0FBQzFEO0FBQ0E7QUFDQSxvQ0FBb0MsaUNBQWlDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZCQUE2QjtBQUM5QztBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRCx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVMsY0FBYyxFQUFFO0FBQzNDO0FBQ0Esa0JBQWtCLFNBQVMsY0FBYyxFQUFFO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7QUFDbEMsSUFBSSxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNoM0JoQjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxnaEJBQW1SO0FBQ3pTO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2SEFBZ0U7QUFDbEYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1CQUFPLENBQUMsdWpCQUErUDtBQUN6UTtBQUNBO0FBQ21IO0FBQ2E7QUFDaEk7QUFDK1U7QUFDL1U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRztBQUNuRyxnQkFBZ0IseUdBQWtCO0FBQ2xDLEVBQUUsK0hBQWM7QUFDaEIsRUFBRSx1T0FBYztBQUNoQixFQUFFLGdQQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWFYOztBQUVVLGdGQUFpQiIsImZpbGUiOiJqcy81LmJ1bmRsZS5kODFkOTljYzQ3ZWFkZGNlZTQ3YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+TWFzdGVyIFJlcG9ydDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b29sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkb3dubG9hZC1leGNlbCBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiA6ZmV0Y2g9XCJleHBvcnRfY3N2XCIgOmZpZWxkcz1cImpzb25fZmllbGRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmJlZm9yZS1nZW5lcmF0ZT1cInN0YXJ0RG93bmxvYWRcIiA6YmVmb3JlLWZpbmlzaD1cImZpbmlzaERvd25sb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0PVwiTXkgV29ya3NoZWV0XCIgdHlwZT1cImNzdlwiIG5hbWU9XCJtYXN0ZXJfcmVwb3J0LmNzdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsVGV4dFwiPjxpbWcgOnNyYz1cInNldF9pbWFnZSgnaW1hZ2VzL2ZpbGUucG5nJylcIiBjbGFzcz1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIj5FeHBvcnQgQ1NWPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZG93bmxvYWQtZXhjZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cIm9mZlwiIEBzdWJtaXQucHJldmVudD1cImdldFJlc3VsdHMoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOmdldC1vcHRpb24tbGFiZWw9XCJnZXRMYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwic2VhcmNoX21hY2hpbmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG1hY2hpbmVzIC4uLlwiIHYtbW9kZWw9XCJzZWFyY2gubWFjaGluZV9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1hY2hpbmVfaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRpY2tldCAuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnRpY2tldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpY2tldFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJzaXRlX25hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNlYXJjaF9zaXRlc1wiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFNpdGUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2guc2l0ZV9pZFwiIG5hbWU9XCJzaXRlX2lkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwic2l0ZV9uYW1lXCIgOm9wdGlvbnM9XCJbJ09wZW4nLCAnQ2xvc2VkJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFN0YXR1cy4uLlwiIHYtbW9kZWw9XCJzZWFyY2guc3RhdHVzXCIgbmFtZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOm9wdGlvbnM9XCJjcmVhdGVkX3VzZXJzXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDcmVhdGVkIGJ5Li4uXCIgdi1tb2RlbD1cInNlYXJjaC5jcmVhdGVkX2J5XCIgbmFtZT1cImNyZWF0ZWRfYnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbJ1BlcmlvZGljIE1haW50ZW5hbmNlJywnQnJlYWtkb3duIE1haW50ZW5hbmNlJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGlja2V0IFR5cGUuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnRpY2tldF90eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGlja2V0X3R5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yIHB0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVwiQXNpYS9Lb2xrYXRhXCIgdi1tb2RlbD1cInNlYXJjaC5jcmVhdGVkX2Zyb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LWNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDcmVhdGVkIGZyb20gZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC0yIHB0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVwiQXNpYS9Lb2xrYXRhXCIgdi1tb2RlbD1cInNlYXJjaC5jcmVhdGVkX3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC1jbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ3JlYXRlZCB0byBkYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTIgcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwic2l0ZV9uYW1lXCIgOm9wdGlvbnM9XCJbJ01ham9yJywgJ01pbm9yJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IENvbXBsYWludCBOYXR1cmVcIiB2LW1vZGVsPVwic2VhcmNoLmNvbXBsYWludF9uYXR1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21wbGFpbnRfbmF0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtNCBwdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgc3R5bGU9XCJtYXgtd2lkdGg6IDQwMHB4OyBtYXJnaW46IGF1dG87IHRleHQtYWxpZ246IGxlZnQ7ICBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGhlaWdodDogMzlweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAzcHg7XHJcblxyXG4gICAgICAgIFwiPnt7IHNlYXJjaC50YXRfZnJvbSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ0b3A6IDI1JTsgcG9zaXRpb246IHJlbGF0aXZlO1wiPlRBVDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgICAgXCI+e3sgc2VhcmNoLnRhdF90byB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpUmFuZ2VTbGlkZXIgYmFzZUNsYXNzTmFtZT1cIm11bHRpLXJhbmdlLXNsaWRlci1iYXItb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptaW5WYWx1ZT1cInNlYXJjaC50YXRfZnJvbVwiIDptYXhWYWx1ZT1cInNlYXJjaC50YXRfdG9cIiA6bWF4PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1pbj1cIjBcIiA6c3RlcD1cIjFcIiA6cmFuZ2VNYXJnaW49XCIwXCIgQGlucHV0PVwiVXBkYXRlVmFsdWVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHB0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4taW5mbyBtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNldF9maWx0ZXIoKVwiPlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMCBtYXN0ZXJUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TLk48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNpdGUgbmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXF1aXBtZW50PGJyPiBEZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TW9kZWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZBUiBObzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29tcGxhaW50PGJyPiBObzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29tcGxhaW50IDxicj5kYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db21wbGFpbnQ8YnI+IFJhaXNlZCBCeTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29tcGxhaW50IDxicj5OYXR1cmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1cyA8YnI+RHVyaW5nIENvbXBsYWludDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IFR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHdpZHRoPVwiMTBcIj5Qcm9ibGVtIGRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjEwXCI+QWRkaXRpb25hbCA8YnI+IFByb2JsZW1zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DdXJyZW50IDxicj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkN1cnJlbnQgPGJyPlN0YWdlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DdXJyZW50IDxicj5TdGFnZSBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DdXJyZW50PGJyPiBTdGFnZSBEZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzIDxicj4gUG9zdCBSZXNvbHV0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SQ0E8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4cGVjdGVkIDxicj4gUmVzb2x1dGlvbiBkYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXZlcnNpb248YnI+RXhwZWN0ZWQgZGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0dWFsIDxicj4gUmVzb2x2ZSBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UQVQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVzdGltYXRlZDxicj4gQ29zdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0dWFsPGJyPiBDb3N0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWN0aW9uPGJyPiBMb3NzPC90aD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIih0aWNrZXQsIHgpIGluIFRpY2tldHMuZGF0YVwiIDprZXk9XCJ0aWNrZXQuaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBUaWNrZXRzLmZyb20gKyB4IH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2FwaXRhbGl6ZVwiPnt7IHRpY2tldC5zaXRlX25hbWUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5tYWNoaW5lLm5hbWUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5tYWNoaW5lLm1hY2hpbmVfbW9kZWwgPyB0aWNrZXQubWFjaGluZS5tYWNoaW5lX21vZGVsLm5hbWUgOiAnLScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgQGNsaWNrPVwidmlld19zaXRlX2RldGFpbHModGlja2V0Lm1hY2hpbmUpXCI+e3sgdGlja2V0LmZhcl9ubyB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnRpY2tldF9ubyB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYXQgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2J5X25hbWUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jb21wbGFpbnRfbmF0dXJlIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuc3RhdHVzX2R1cmluZ19jb21wbGFpbnQgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC50aWNrZXRfdHlwZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ0aWNrZXQucHJvYmxlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlUmVhZE1vcmVTbW9vdGggOm9wZW4uc3luYz1cInByb2JsZW1zTW9yZVt4XVwiIG5vLWJ1dHRvbiBuby1zaGFkb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA6a2V5PVwiJ3BkJyt4XCI+e3sgdGlja2V0LnByb2JsZW1fZGVzY3JpcHRpb24gfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVnVlUmVhZE1vcmVTbW9vdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInJlYWRfbW9yZSh4LCAncCcpXCIgY2xhc3M9XCJybW9yZVwiPi4uLnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2JsZW1zTW9yZVt4XT8nTGVzcyc6ICdNb3JlJyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInRpY2tldC5wcm9ibGVtcyAmJiB0aWNrZXQucHJvYmxlbXMubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlUmVhZE1vcmVTbW9vdGggOm9wZW4uc3luYz1cImFkZGl0aW9uYWxNb3JlW3hdXCIgbm8tYnV0dG9uIG5vLXNoYWRvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ0aWNrZXQucHJvYmxlbXNcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gdGlja2V0LnByb2JsZW1zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiJ3AnICsgaW5kZXhcIiB2LWh0bWw9XCJpdGVtLnByb2JsZW1cIj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVnVlUmVhZE1vcmVTbW9vdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInJlYWRfbW9yZSh4KVwiIGNsYXNzPVwicm1vcmVcIj4uLi57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsTW9yZVt4XT8nTGVzcyc6ICdNb3JlJyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuc3RhdHVzLnRvTG93ZXJDYXNlKCkgPT0gJ2NyZWF0ZWQgYnkgdXNlcicgPyAnT3BlbicgOiB0aWNrZXQuc3RhdHVzIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5zdGF0dXMgPT0gJ0Nsb3NlZCcgPyAnLScgOiB0aWNrZXQuY3VycmVudF9zdGFnZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuc3RhdHVzID09ICdDbG9zZWQnID8gJy0nIDogdGlja2V0Lmxhc3Rfc3RhZ2UgPyB0aWNrZXQubGFzdF9zdGFnZS5zdGFnZV9kYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycgfCBteURhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInRpY2tldC5zdGF0dXMgIT0gJ0Nsb3NlZCcgJiYgdGlja2V0Lmxhc3Rfc3RhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZ1ZVJlYWRNb3JlU21vb3RoIDpvcGVuLnN5bmM9XCJzdGFnZU1vcmVbeF1cIiBuby1idXR0b24gbm8tc2hhZG93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgdGlja2V0Lmxhc3Rfc3RhZ2UuZGVzY3JpcHRpb24gfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVnVlUmVhZE1vcmVTbW9vdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInJlYWRfbW9yZSh4LCAncycpXCIgY2xhc3M9XCJybW9yZVwiPi4uLnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlTW9yZVt4XT8nTGVzcyc6ICdNb3JlJyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubWFjaGluZV9zdGF0dXMgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInRpY2tldC5yY2FcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZ1ZVJlYWRNb3JlU21vb3RoIDpvcGVuLnN5bmM9XCJyY2FNb3JlW3hdXCIgbm8tYnV0dG9uIG5vLXNoYWRvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cIidyY20nK3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IHRpY2tldC5yY2EgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVnVlUmVhZE1vcmVTbW9vdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInJlYWRfbW9yZSh4LCAncmMnKVwiIGNsYXNzPVwicm1vcmVcIj4uLi57e1xyXG4gICAgcmNhTW9yZVt4XT8nTGVzcyc6ICdNb3JlJyB9fTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lmxpa2VseV9kYXRlIHwgbXlEYXRlIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQucmV2ZXJzaW9uX2RhdGV8bXlEYXRlIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuYWN0dWFsX2RhdGUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5hY3R1YWxfZGF0ZSA/IHRpY2tldC50YXQgOiAnLScgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7KHRpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICsgdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5hZF9lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArIHRpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0b0N1cnJlbmN5fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7KHRpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0ICsgdGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0KSB8IHRvQ3VycmVuY3l9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQucHJvZHVjdGlvbl9sb3NzIHwgdG9DdXJyZW5jeSB9fTwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtYm9keSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6ZGF0YT1cIlRpY2tldHNcIiBAcGFnaW5hdGlvbi1jaGFuZ2UtcGFnZT1cImdldFJlc3VsdHNcIj48L3BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkIC0tPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPE1hY2hpbmVQb3AgaWQ9XCJNYWNoaW5lU2l0ZU1vZGFsM1wiIDptYWNoaW5lPVwicG1Nb2RhbERhdGFcIiAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy9pbXBvcnQgVnVlUmVhZE1vcmVTbW9vdGggZnJvbSBcInZ1ZS1yZWFkLW1vcmUtc21vb3RoXCI7XHJcbmltcG9ydCBNdWx0aVJhbmdlU2xpZGVyIGZyb20gXCJtdWx0aS1yYW5nZS1zbGlkZXItdnVlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6XCJNYXN0ZXJSZXBvcnRcIixcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBWdWVSZWFkTW9yZVNtb290aCA6ICgpID0+IGltcG9ydCgndnVlLXJlYWQtbW9yZS1zbW9vdGgnKSxcclxuICAgICAgICBNdWx0aVJhbmdlU2xpZGVyLFxyXG4gICAgICAgIE1hY2hpbmVQb3A6ICgpID0+IGltcG9ydCgnLi9NYWNoaW5lRmFyUG9wLnZ1ZScpLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhZ2VNb3JlOiBbXSxcclxuICAgICAgICAgICAgYWRkaXRpb25hbE1vcmU6IFtdLFxyXG4gICAgICAgICAgICBwcm9ibGVtc01vcmU6IFtdLFxyXG4gICAgICAgICAgICByY2FNb3JlOiBbXSxcclxuICAgICAgICAgICAgcG1Nb2RhbERhdGE6ICcnLFxyXG4gICAgICAgICAgICBjcmVhdGVkX3VzZXJzOiBbXSxcclxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcclxuICAgICAgICAgICAgc2VhcmNoX3NpdGVzOiBbXSxcclxuICAgICAgICAgICAgc2VhcmNoOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXHJcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9mcm9tOiAnJyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfdG86ICcnLFxyXG4gICAgICAgICAgICAgICAgdGF0X2Zyb206IDAsXHJcbiAgICAgICAgICAgICAgICB0YXRfdG86IDkwLFxyXG4gICAgICAgICAgICAgICAgY29tcGxhaW50X25hdHVyZTonJyxcclxuICAgICAgICAgICAgICAgIHRpY2tldF90eXBlOicnLFxyXG4gICAgICAgICAgICAgICAgdGlja2V0OicnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRfbWFjaGluZTogJycsXHJcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcclxuICAgICAgICAgICAgbWFjaGluZXM6IFtdLFxyXG4gICAgICAgICAgICBUaWNrZXRzOiB7fSxcclxuICAgICAgICAgICAgc2w6IDEsXHJcbiAgICAgICAgICAgIGpzb25fZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICBcIlNsIE5vXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ1NpdGUgbmFtZSc6ICdzaXRlX25hbWUnLFxyXG4gICAgICAgICAgICAgICAgJ0VxdWlwbWVudCBEZXNjcmlwdGlvbic6ICdtYWNoaW5lX25hbWUnLFxyXG4gICAgICAgICAgICAgICAgJ0ZBUiBObyc6ICdmYXJfbm8nLFxyXG4gICAgICAgICAgICAgICAgJ0NvbXBsYWludCBObyc6ICd0aWNrZXRfbm8nLFxyXG4gICAgICAgICAgICAgICAgJ0NvbXBsYWludCBkYXRlJzogXCJjcmVhdGVkX2F0XCIsXHJcbiAgICAgICAgICAgICAgICAnQ29tcGxhaW50IFJhaXNlZCBCeSc6ICdjcmVhdGVkX2J5X25hbWUnLFxyXG4gICAgICAgICAgICAgICAgJ0NvbXBsYWludCBOYXR1cmUnOiAnY29tcGxhaW50X25hdHVyZScsXHJcbiAgICAgICAgICAgICAgICAnU3RhdHVzIER1cmluZyBDb21wbGFpbnQnOiAnc3RhdHVzX2R1cmluZ19jb21wbGFpbnQnLFxyXG4gICAgICAgICAgICAgICAgJ1Byb2JsZW0gZGVzY3JpcHRpb24nOiAncHJvYmxlbV9kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAnQWRkaXRpb25hbCBQcm9ibGVtJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcInByb2JsZW1zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IChwcm9ibGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXQgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvYmxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcHJvYmxlbS5tYXAodmFsdWUgPT4gdmFsdWUucHJvYmxlbSkuam9pbihcIlxcclxcblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJDdXJyZW50IFN0YXR1c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwic3RhdHVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IChzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXR1cy50b0xvd2VyQ2FzZSgpID09ICdjcmVhdGVkIGJ5IHVzZXInID8gJ09wZW4nIDogc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJDdXJyZW50IFN0YWdlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJsYXN0X3N0YWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZS5kZXNjcmlwdGlvbiA6ICctJztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiU3RhdHVzIFBvc3QgUmVzb2x1dGlvblwiOiAnbWFjaGluZV9zdGF0dXMnLFxyXG4gICAgICAgICAgICAgICAgJ0V4cGVjdGVkIFJlc29sdXRpb24gZGF0ZSc6ICdsaWtlbHlfZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAnQWN0dWFsIFJlc29sdmUgRGF0ZSc6ICdhY3R1YWxfZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAnVEFUJzogJ3RhdCcsXHJcbiAgICAgICAgICAgICAgICAnRXN0aW1hdGVkIENvc3QnOiAnZXN0aW1hdGVkX2Nvc3QnLFxyXG4gICAgICAgICAgICAgICAgJ0FjdHVhbCBDb3N0JzogJ2FjdHVhbF9jb3N0JyxcclxuICAgICAgICAgICAgICAgICdQcm9kdWN0aW9uIExvc3MnOiAncHJvZHVjdGlvbl9sb3NzJyxcclxuICAgICAgICAgICAgICAgICdSQ0EnOiAncmNhJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBqc29uX21ldGE6IFtcclxuICAgICAgICAgICAgICAgIFt7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImNoYXJzZXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ1dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgfSxdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBzbDogMCxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHZpZXdfc2l0ZV9kZXRhaWxzKGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5wbU1vZGFsRGF0YSA9IGRhdGFcclxuICAgICAgICAgICAgJCgnI01hY2hpbmVTaXRlTW9kYWwzJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0X2ZpbHRlcigpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXHJcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9mcm9tOiAnJyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfdG86ICcnLFxyXG4gICAgICAgICAgICAgICAgdGF0X2Zyb206IDAsXHJcbiAgICAgICAgICAgICAgICB0YXRfdG86IDkwLFxyXG4gICAgICAgICAgICAgICAgY29tcGxhaW50X25hdHVyZTonJyxcclxuICAgICAgICAgICAgICAgIHRpY2tldF90eXBlOicnLFxyXG4gICAgICAgICAgICAgICAgdGlja2V0OicnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZXRSZXN1bHRzKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIFVwZGF0ZVZhbHVlcyhlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRhdF9mcm9tID0gZS5taW5WYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X3RvID0gZS5tYXhWYWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIGV4Y2VsXHJcbiAgICAgICAgYXN5bmMgZXhwb3J0X2NzdigpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCAgYXhpb3MuZ2V0KCdhcGkvdGlja2V0L2V4cG9ydCcsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2FwaS90aWNrZXQvZXhwb3J0Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydERvd25sb2FkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNsID0gMTtcclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxlYXNlIFdhaXQgIScsXHJcbiAgICAgICAgICAgICAgICBodG1sOiAnRGF0YSBwb3B1bGF0aW5nJywgLy8gYWRkIGh0bWwgYXR0cmlidXRlIGlmIHlvdSB3YW50IG9yIHJlbW92ZVxyXG4gICAgICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb25CZWZvcmVPcGVuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5zaG93TG9hZGluZygpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmlzaERvd25sb2FkKCkge1xyXG4gICAgICAgICAgICBTd2FsLmNsb3NlKClcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXRMYWJlbCh2YWwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmZhcl9ubyArICcgLSAnICsgdmFsLm5hbWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRSZXN1bHRzKHBhZ2UgPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnBhZ2UgPSBwYWdlXHJcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90aWNrZXQvcmVwb3J0Jywge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlRpY2tldHMgPSBkYXRhLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbE1vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW1zTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhZ2VNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yY2FNb3JlPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvYWRUaWNrZXRzKCkge1xyXG5cclxuICAgICAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS90aWNrZXQvcmVwb3J0XCIsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcclxuICAgICAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5UaWNrZXRzID0gZGF0YS5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbE1vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbXNNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWdlTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yY2FNb3JlPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlYWRfbW9yZSh4LCBwID0gJycpIHtcclxuICAgICAgICAgICAgaWYgKHApIHtcclxuICAgICAgICAgICAgICAgIGlmIChwID09ICdzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhID0gdGhpcy5zdGFnZU1vcmVbeF0gPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5zdGFnZU1vcmUsIHgsIGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHAgPT0gJ3JjJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLnJjYU1vcmVbeF0gPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5yY2FNb3JlLCB4LCBhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLnByb2JsZW1zTW9yZVt4XSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnByb2JsZW1zTW9yZSwgeCwgYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMuYWRkaXRpb25hbE1vcmVbeF0gPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmFkZGl0aW9uYWxNb3JlLCB4LCBhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRUaWNrZXRzKCk7XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xyXG4gICAgICAgIGF4aW9zLmdldChcImFwaS9nZXRfcHJlX21hY2hpbmVcIilcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5DYXRlZ29yeTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIGF4aW9zLmdldChcIi9hcGkvaW5pdGlhbF90aWNrZXRcIikudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEudmVuZG9ycztcclxuICAgICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX3NpdGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnNpdGVzO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWRfdXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEuY3JlYXRlZF91c2VycztcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oJ09oLiBTb21ldGhpbmcgd2VudCB3cm9uZycpKTtcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIGFzeW5jICdmb3JtLnN1Yl9jYXRlZ29yeV9pZCcobiwgbykge1xyXG4gICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jICdmb3JtLnNpdGVfaWQnKG4sIG8pIHtcclxuICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgJ2Zvcm0uY2F0ZWdvcnlfaWQnOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuLCBvKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvY2F0ZWdvcnkvXCIgKyBuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yl9jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG4ucm1vcmUge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ybW9yZSB7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcbn1cXHJcXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovZGV2bG9wbWVudC93YW1wNjQvd3d3L3JveWFsLWluZnJhY29uc3RydWN0aW9uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL01hc3RlclJlcG9ydC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXdlQTtJQUNBLFlBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiTWFzdGVyUmVwb3J0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5NYXN0ZXIgUmVwb3J0PC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC10b29sc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZG93bmxvYWQtZXhjZWwgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXByaW1hcnlcXFwiIDpmZXRjaD1cXFwiZXhwb3J0X2NzdlxcXCIgOmZpZWxkcz1cXFwianNvbl9maWVsZHNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmJlZm9yZS1nZW5lcmF0ZT1cXFwic3RhcnREb3dubG9hZFxcXCIgOmJlZm9yZS1maW5pc2g9XFxcImZpbmlzaERvd25sb2FkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldD1cXFwiTXkgV29ya3NoZWV0XFxcIiB0eXBlPVxcXCJjc3ZcXFwiIG5hbWU9XFxcIm1hc3Rlcl9yZXBvcnQuY3N2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibGFiZWxUZXh0XFxcIj48aW1nIDpzcmM9XFxcInNldF9pbWFnZSgnaW1hZ2VzL2ZpbGUucG5nJylcXFwiIGNsYXNzPVxcXCJpY29uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XFxcIjIwXFxcIj5FeHBvcnQgQ1NWPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kb3dubG9hZC1leGNlbD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHAtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBAc3VibWl0LnByZXZlbnQ9XFxcImdldFJlc3VsdHMoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLXJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGNvbC0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJuYW1lXFxcIiA6Z2V0LW9wdGlvbi1sYWJlbD1cXFwiZ2V0TGFiZWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiIDpvcHRpb25zPVxcXCJzZWFyY2hfbWFjaGluZXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgbWFjaGluZXMgLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2gubWFjaGluZV9pZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcIm1hY2hpbmVfaWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgdGlja2V0IC4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnRpY2tldFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInRpY2tldFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGNvbC0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJzaXRlX25hbWVcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVxcXCJzZWFyY2hfc2l0ZXNcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWxlY3QgU2l0ZS4uLlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInNlYXJjaC5zaXRlX2lkXFxcIiBuYW1lPVxcXCJzaXRlX2lkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgY29sLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInNpdGVfbmFtZVxcXCIgOm9wdGlvbnM9XFxcIlsnT3BlbicsICdDbG9zZWQnXVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTZWxlY3QgU3RhdHVzLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guc3RhdHVzXFxcIiBuYW1lPVxcXCJzdGF0dXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMiBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcIm5hbWVcXFwiIDpvcHRpb25zPVxcXCJjcmVhdGVkX3VzZXJzXFxcIiA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ3JlYXRlZCBieS4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmNyZWF0ZWRfYnlcXFwiIG5hbWU9XFxcImNyZWF0ZWRfYnlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMiBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcIm5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwiWydQZXJpb2RpYyBNYWludGVuYW5jZScsJ0JyZWFrZG93biBNYWludGVuYW5jZSddXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlRpY2tldCBUeXBlLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2gudGlja2V0X3R5cGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJ0aWNrZXRfdHlwZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGNvbC0yIHB0LTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdmFsdWUtem9uZT1cXFwiQXNpYS9Lb2xrYXRhXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guY3JlYXRlZF9mcm9tXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQtY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkNyZWF0ZWQgZnJvbSBkYXRlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMiBwdC0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XFxcIkFzaWEvS29sa2F0YVxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmNyZWF0ZWRfdG9cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC1jbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ3JlYXRlZCB0byBkYXRlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbCBjb2wtMiBwdC0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJzaXRlX25hbWVcXFwiIDpvcHRpb25zPVxcXCJbJ01ham9yJywgJ01pbm9yJ11cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IENvbXBsYWludCBOYXR1cmVcXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5jb21wbGFpbnRfbmF0dXJlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiY29tcGxhaW50X25hdHVyZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGNvbC00IHB0LTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgc3R5bGU9XFxcIm1heC13aWR0aDogNDAwcHg7IG1hcmdpbjogYXV0bzsgdGV4dC1hbGlnbjogbGVmdDsgIFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgdGV4dC1hbGlnbjogY2VudGVyOyBoZWlnaHQ6IDM5cHg7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwiXFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweDtcXHJcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbjogM3B4O1xcclxcblxcclxcbiAgICAgICAgXFxcIj57eyBzZWFyY2gudGF0X2Zyb20gfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcInRvcDogMjUlOyBwb3NpdGlvbjogcmVsYXRpdmU7XFxcIj5UQVQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIlxcclxcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgICBtYXJnaW46IDNweDtcXHJcXG4gICAgICAgIFxcXCI+e3sgc2VhcmNoLnRhdF90byB9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpUmFuZ2VTbGlkZXIgYmFzZUNsYXNzTmFtZT1cXFwibXVsdGktcmFuZ2Utc2xpZGVyLWJhci1vbmx5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptaW5WYWx1ZT1cXFwic2VhcmNoLnRhdF9mcm9tXFxcIiA6bWF4VmFsdWU9XFxcInNlYXJjaC50YXRfdG9cXFwiIDptYXg9XFxcIjEwMFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWluPVxcXCIwXFxcIiA6c3RlcD1cXFwiMVxcXCIgOnJhbmdlTWFyZ2luPVxcXCIwXFxcIiBAaW5wdXQ9XFxcIlVwZGF0ZVZhbHVlc1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgcHQtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5TZWFyY2g8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gbWwtMlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwicmVzZXRfZmlsdGVyKClcXFwiPlJlc2V0PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgdGFibGUtcmVzcG9uc2l2ZSBwLTAgbWFzdGVyVGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWhvdmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TLk48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2l0ZSBuYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVxdWlwbWVudDxicj4gRGVzY3JpcHRpb248L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TW9kZWw8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RkFSIE5vPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbXBsYWludDxicj4gTm88L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29tcGxhaW50IDxicj5kYXRlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbXBsYWludDxicj4gUmFpc2VkIEJ5PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbXBsYWludCA8YnI+TmF0dXJlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1cyA8YnI+RHVyaW5nIENvbXBsYWludDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UaWNrZXQgVHlwZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cXFwiMTBcXFwiPlByb2JsZW0gZGVzY3JpcHRpb248L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggd2lkdGg9XFxcIjEwXFxcIj5BZGRpdGlvbmFsIDxicj4gUHJvYmxlbXM8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3VycmVudCA8YnI+U3RhdHVzPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkN1cnJlbnQgPGJyPlN0YWdlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkN1cnJlbnQgPGJyPlN0YWdlIERhdGU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3VycmVudDxicj4gU3RhZ2UgRGVzY3JpcHRpb248L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzIDxicj4gUG9zdCBSZXNvbHV0aW9uPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJDQTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FeHBlY3RlZCA8YnI+IFJlc29sdXRpb24gZGF0ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXZlcnNpb248YnI+RXhwZWN0ZWQgZGF0ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3R1YWwgPGJyPiBSZXNvbHZlIERhdGU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VEFUPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVzdGltYXRlZDxicj4gQ29zdDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3R1YWw8YnI+IENvc3Q8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJvZHVjdGlvbjxicj4gTG9zczwvdGg+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCIodGlja2V0LCB4KSBpbiBUaWNrZXRzLmRhdGFcXFwiIDprZXk9XFxcInRpY2tldC5pZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBUaWNrZXRzLmZyb20gKyB4IH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LWNhcGl0YWxpemVcXFwiPnt7IHRpY2tldC5zaXRlX25hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lm1hY2hpbmUubmFtZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubWFjaGluZS5tYWNoaW5lX21vZGVsID8gdGlja2V0Lm1hY2hpbmUubWFjaGluZV9tb2RlbC5uYW1lIDogJy0nIH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBAY2xpY2s9XFxcInZpZXdfc2l0ZV9kZXRhaWxzKHRpY2tldC5tYWNoaW5lKVxcXCI+e3sgdGlja2V0LmZhcl9ubyB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQudGlja2V0X25vIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2F0IH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2J5X25hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNvbXBsYWludF9uYXR1cmUgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnN0YXR1c19kdXJpbmdfY29tcGxhaW50IH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC50aWNrZXRfdHlwZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJ0aWNrZXQucHJvYmxlbV9kZXNjcmlwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZ1ZVJlYWRNb3JlU21vb3RoIDpvcGVuLnN5bmM9XFxcInByb2JsZW1zTW9yZVt4XVxcXCIgbm8tYnV0dG9uIG5vLXNoYWRvdz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgOmtleT1cXFwiJ3BkJyt4XFxcIj57eyB0aWNrZXQucHJvYmxlbV9kZXNjcmlwdGlvbiB9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Z1ZVJlYWRNb3JlU21vb3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cXFwicmVhZF9tb3JlKHgsICdwJylcXFwiIGNsYXNzPVxcXCJybW9yZVxcXCI+Li4ue3tcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ibGVtc01vcmVbeF0/J0xlc3MnOiAnTW9yZScgfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwidGlja2V0LnByb2JsZW1zICYmIHRpY2tldC5wcm9ibGVtcy5sZW5ndGggPiAwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlUmVhZE1vcmVTbW9vdGggOm9wZW4uc3luYz1cXFwiYWRkaXRpb25hbE1vcmVbeF1cXFwiIG5vLWJ1dHRvbiBuby1zaGFkb3c+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XFxcInRpY2tldC5wcm9ibGVtc1xcXCIgdi1mb3I9XFxcIihpdGVtLCBpbmRleCkgaW4gdGlja2V0LnByb2JsZW1zXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiJ3AnICsgaW5kZXhcXFwiIHYtaHRtbD1cXFwiaXRlbS5wcm9ibGVtXFxcIj48L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WdWVSZWFkTW9yZVNtb290aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBAY2xpY2s9XFxcInJlYWRfbW9yZSh4KVxcXCIgY2xhc3M9XFxcInJtb3JlXFxcIj4uLi57e1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxNb3JlW3hdPydMZXNzJzogJ01vcmUnIH19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5zdGF0dXMudG9Mb3dlckNhc2UoKSA9PSAnY3JlYXRlZCBieSB1c2VyJyA/ICdPcGVuJyA6IHRpY2tldC5zdGF0dXMgfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5zdGF0dXMgPT0gJ0Nsb3NlZCcgPyAnLScgOiB0aWNrZXQuY3VycmVudF9zdGFnZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LnN0YXR1cyA9PSAnQ2xvc2VkJyA/ICctJyA6IHRpY2tldC5sYXN0X3N0YWdlID8gdGlja2V0Lmxhc3Rfc3RhZ2Uuc3RhZ2VfZGF0ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycgfCBteURhdGVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwidGlja2V0LnN0YXR1cyAhPSAnQ2xvc2VkJyAmJiB0aWNrZXQubGFzdF9zdGFnZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZ1ZVJlYWRNb3JlU21vb3RoIDpvcGVuLnN5bmM9XFxcInN0YWdlTW9yZVt4XVxcXCIgbm8tYnV0dG9uIG5vLXNoYWRvdz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgdGlja2V0Lmxhc3Rfc3RhZ2UuZGVzY3JpcHRpb24gfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WdWVSZWFkTW9yZVNtb290aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBAY2xpY2s9XFxcInJlYWRfbW9yZSh4LCAncycpXFxcIiBjbGFzcz1cXFwicm1vcmVcXFwiPi4uLnt7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2VNb3JlW3hdPydMZXNzJzogJ01vcmUnIH19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5tYWNoaW5lX3N0YXR1cyB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJ0aWNrZXQucmNhXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlUmVhZE1vcmVTbW9vdGggOm9wZW4uc3luYz1cXFwicmNhTW9yZVt4XVxcXCIgbm8tYnV0dG9uIG5vLXNoYWRvd1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCIncmNtJyt4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgdGlja2V0LnJjYSB9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Z1ZVJlYWRNb3JlU21vb3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cXFwicmVhZF9tb3JlKHgsICdyYycpXFxcIiBjbGFzcz1cXFwicm1vcmVcXFwiPi4uLnt7XFxyXFxuICAgIHJjYU1vcmVbeF0/J0xlc3MnOiAnTW9yZScgfX08L3NwYW4+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lmxpa2VseV9kYXRlIHwgbXlEYXRlIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5yZXZlcnNpb25fZGF0ZXxteURhdGUgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmFjdHVhbF9kYXRlIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5hY3R1YWxfZGF0ZSA/IHRpY2tldC50YXQgOiAnLScgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sodGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgKyB0aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgKyB0aWNrZXQuYWRfZXN0aW1hdGVkX3NlcnZpY2VfY29zdClcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0b0N1cnJlbmN5fX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sodGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3QgKyB0aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3QpIHwgdG9DdXJyZW5jeX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQucHJvZHVjdGlvbl9sb3NzIHwgdG9DdXJyZW5jeSB9fTwvdGQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtYm9keSAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYWdpbmF0aW9uIDpkYXRhPVxcXCJUaWNrZXRzXFxcIiBAcGFnaW5hdGlvbi1jaGFuZ2UtcGFnZT1cXFwiZ2V0UmVzdWx0c1xcXCI+PC9wYWdpbmF0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZCAtLT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIDxNYWNoaW5lUG9wIGlkPVxcXCJNYWNoaW5lU2l0ZU1vZGFsM1xcXCIgOm1hY2hpbmU9XFxcInBtTW9kYWxEYXRhXFxcIiAvPlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0Plxcclxcbi8vaW1wb3J0IFZ1ZVJlYWRNb3JlU21vb3RoIGZyb20gXFxcInZ1ZS1yZWFkLW1vcmUtc21vb3RoXFxcIjtcXHJcXG5pbXBvcnQgTXVsdGlSYW5nZVNsaWRlciBmcm9tIFxcXCJtdWx0aS1yYW5nZS1zbGlkZXItdnVlXFxcIjtcXHJcXG5leHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIG5hbWU6XFxcIk1hc3RlclJlcG9ydFxcXCIsXFxyXFxuICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICAgIFZ1ZVJlYWRNb3JlU21vb3RoIDogKCkgPT4gaW1wb3J0KCd2dWUtcmVhZC1tb3JlLXNtb290aCcpLFxcclxcbiAgICAgICAgTXVsdGlSYW5nZVNsaWRlcixcXHJcXG4gICAgICAgIE1hY2hpbmVQb3A6ICgpID0+IGltcG9ydCgnLi9NYWNoaW5lRmFyUG9wLnZ1ZScpLFxcclxcbiAgICB9LFxcclxcbiAgICBkYXRhKCkge1xcclxcbiAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICBzdGFnZU1vcmU6IFtdLFxcclxcbiAgICAgICAgICAgIGFkZGl0aW9uYWxNb3JlOiBbXSxcXHJcXG4gICAgICAgICAgICBwcm9ibGVtc01vcmU6IFtdLFxcclxcbiAgICAgICAgICAgIHJjYU1vcmU6IFtdLFxcclxcbiAgICAgICAgICAgIHBtTW9kYWxEYXRhOiAnJyxcXHJcXG4gICAgICAgICAgICBjcmVhdGVkX3VzZXJzOiBbXSxcXHJcXG4gICAgICAgICAgICBzZWFyY2hfbWFjaGluZXM6IFtdLFxcclxcbiAgICAgICAgICAgIHNlYXJjaF9zaXRlczogW10sXFxyXFxuICAgICAgICAgICAgc2VhcmNoOiB7XFxyXFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXFxyXFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9ieTogJycsXFxyXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfZnJvbTogJycsXFxyXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfdG86ICcnLFxcclxcbiAgICAgICAgICAgICAgICB0YXRfZnJvbTogMCxcXHJcXG4gICAgICAgICAgICAgICAgdGF0X3RvOiA5MCxcXHJcXG4gICAgICAgICAgICAgICAgY29tcGxhaW50X25hdHVyZTonJyxcXHJcXG4gICAgICAgICAgICAgICAgdGlja2V0X3R5cGU6JycsXFxyXFxuICAgICAgICAgICAgICAgIHRpY2tldDonJ1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXFxyXFxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXM6IFtdLFxcclxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcXHJcXG4gICAgICAgICAgICBzZWxlY3RlZF9tYWNoaW5lOiAnJyxcXHJcXG4gICAgICAgICAgICB1c2VyczogW10sXFxyXFxuICAgICAgICAgICAgbWFjaGluZXM6IFtdLFxcclxcbiAgICAgICAgICAgIFRpY2tldHM6IHt9LFxcclxcbiAgICAgICAgICAgIHNsOiAxLFxcclxcbiAgICAgICAgICAgIGpzb25fZmllbGRzOiB7XFxyXFxuICAgICAgICAgICAgICAgIFxcXCJTbCBOb1xcXCI6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2wrKztcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICdTaXRlIG5hbWUnOiAnc2l0ZV9uYW1lJyxcXHJcXG4gICAgICAgICAgICAgICAgJ0VxdWlwbWVudCBEZXNjcmlwdGlvbic6ICdtYWNoaW5lX25hbWUnLFxcclxcbiAgICAgICAgICAgICAgICAnRkFSIE5vJzogJ2Zhcl9ubycsXFxyXFxuICAgICAgICAgICAgICAgICdDb21wbGFpbnQgTm8nOiAndGlja2V0X25vJyxcXHJcXG4gICAgICAgICAgICAgICAgJ0NvbXBsYWludCBkYXRlJzogXFxcImNyZWF0ZWRfYXRcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAnQ29tcGxhaW50IFJhaXNlZCBCeSc6ICdjcmVhdGVkX2J5X25hbWUnLFxcclxcbiAgICAgICAgICAgICAgICAnQ29tcGxhaW50IE5hdHVyZSc6ICdjb21wbGFpbnRfbmF0dXJlJyxcXHJcXG4gICAgICAgICAgICAgICAgJ1N0YXR1cyBEdXJpbmcgQ29tcGxhaW50JzogJ3N0YXR1c19kdXJpbmdfY29tcGxhaW50JyxcXHJcXG4gICAgICAgICAgICAgICAgJ1Byb2JsZW0gZGVzY3JpcHRpb24nOiAncHJvYmxlbV9kZXNjcmlwdGlvbicsXFxyXFxuICAgICAgICAgICAgICAgICdBZGRpdGlvbmFsIFByb2JsZW0nOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXFxcInByb2JsZW1zXFxcIixcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAocHJvYmxlbSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXQgPSAnJ1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ibGVtKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHByb2JsZW0ubWFwKHZhbHVlID0+IHZhbHVlLnByb2JsZW0pLmpvaW4oXFxcIlxcXFxyXFxcXG5cXFwiKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIFxcXCJDdXJyZW50IFN0YXR1c1xcXCI6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcXFwic3RhdHVzXFxcIixcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoc3RhdHVzKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXR1cy50b0xvd2VyQ2FzZSgpID09ICdjcmVhdGVkIGJ5IHVzZXInID8gJ09wZW4nIDogc3RhdHVzO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgXFxcIkN1cnJlbnQgU3RhZ2VcXFwiOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXFxcImxhc3Rfc3RhZ2VcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLmRlc2NyaXB0aW9uIDogJy0nO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgXFxcIlN0YXR1cyBQb3N0IFJlc29sdXRpb25cXFwiOiAnbWFjaGluZV9zdGF0dXMnLFxcclxcbiAgICAgICAgICAgICAgICAnRXhwZWN0ZWQgUmVzb2x1dGlvbiBkYXRlJzogJ2xpa2VseV9kYXRlJyxcXHJcXG4gICAgICAgICAgICAgICAgJ0FjdHVhbCBSZXNvbHZlIERhdGUnOiAnYWN0dWFsX2RhdGUnLFxcclxcbiAgICAgICAgICAgICAgICAnVEFUJzogJ3RhdCcsXFxyXFxuICAgICAgICAgICAgICAgICdFc3RpbWF0ZWQgQ29zdCc6ICdlc3RpbWF0ZWRfY29zdCcsXFxyXFxuICAgICAgICAgICAgICAgICdBY3R1YWwgQ29zdCc6ICdhY3R1YWxfY29zdCcsXFxyXFxuICAgICAgICAgICAgICAgICdQcm9kdWN0aW9uIExvc3MnOiAncHJvZHVjdGlvbl9sb3NzJyxcXHJcXG4gICAgICAgICAgICAgICAgJ1JDQSc6ICdyY2EnXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBqc29uX21ldGE6IFtcXHJcXG4gICAgICAgICAgICAgICAgW3tcXHJcXG4gICAgICAgICAgICAgICAgICAgIGtleTogXFxcImNoYXJzZXRcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFxcXCJ1dGYtOFxcXCIsXFxyXFxuICAgICAgICAgICAgICAgIH0sXSxcXHJcXG4gICAgICAgICAgICBdLFxcclxcbiAgICAgICAgICAgIHNsOiAwLFxcclxcbiAgICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICB2aWV3X3NpdGVfZGV0YWlscyhkYXRhKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5wbU1vZGFsRGF0YSA9IGRhdGFcXHJcXG4gICAgICAgICAgICAkKCcjTWFjaGluZVNpdGVNb2RhbDMnKS5tb2RhbCgnc2hvdycpO1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHJlc2V0X2ZpbHRlcigpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaCA9IHtcXHJcXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcXHJcXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXFxyXFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2J5OiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9mcm9tOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgY3JlYXRlZF90bzogJycsXFxyXFxuICAgICAgICAgICAgICAgIHRhdF9mcm9tOiAwLFxcclxcbiAgICAgICAgICAgICAgICB0YXRfdG86IDkwLFxcclxcbiAgICAgICAgICAgICAgICBjb21wbGFpbnRfbmF0dXJlOicnLFxcclxcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTonJyxcXHJcXG4gICAgICAgICAgICAgICAgdGlja2V0OicnXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVzdWx0cygpXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgVXBkYXRlVmFsdWVzKGUpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50YXRfZnJvbSA9IGUubWluVmFsdWU7XFxyXFxuICAgICAgICAgICAgdGhpcy5zZWFyY2gudGF0X3RvID0gZS5tYXhWYWx1ZTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICAvLyBleGNlbFxcclxcbiAgICAgICAgYXN5bmMgZXhwb3J0X2NzdigpIHtcXHJcXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0ICBheGlvcy5nZXQoJ2FwaS90aWNrZXQvZXhwb3J0Jywge1xcclxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMuc2VhcmNoXFxyXFxuICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnYXBpL3RpY2tldC9leHBvcnQnKTtcXHJcXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhO1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHN0YXJ0RG93bmxvYWQoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5zbCA9IDE7XFxyXFxuICAgICAgICAgICAgU3dhbC5maXJlKHtcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQbGVhc2UgV2FpdCAhJyxcXHJcXG4gICAgICAgICAgICAgICAgaHRtbDogJ0RhdGEgcG9wdWxhdGluZycsIC8vIGFkZCBodG1sIGF0dHJpYnV0ZSBpZiB5b3Ugd2FudCBvciByZW1vdmVcXHJcXG4gICAgICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxcclxcbiAgICAgICAgICAgICAgICBvbkJlZm9yZU9wZW46ICgpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIFN3YWwuc2hvd0xvYWRpbmcoKVxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGZpbmlzaERvd25sb2FkKCkge1xcclxcbiAgICAgICAgICAgIFN3YWwuY2xvc2UoKVxcclxcbiAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgIGdldExhYmVsKHZhbCkge1xcclxcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmZhcl9ubyArICcgLSAnICsgdmFsLm5hbWU7XFxyXFxuICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZ2V0UmVzdWx0cyhwYWdlID0gMSkge1xcclxcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XFxyXFxuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZSA9IHBhZ2VcXHJcXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGlja2V0L3JlcG9ydCcsIHtcXHJcXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxcclxcbiAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLlRpY2tldHMgPSBkYXRhLmRhdGEuZGF0YVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtc01vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhZ2VNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJjYU1vcmU9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xcclxcbiAgICAgICAgICAgICAgICB9KVxcclxcblxcclxcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGxvYWRUaWNrZXRzKCkge1xcclxcblxcclxcbiAgICAgICAgICAgIGF4aW9zLmdldChcXFwiL2FwaS90aWNrZXQvcmVwb3J0XFxcIiwge1xcclxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMuc2VhcmNoXFxyXFxuICAgICAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLlRpY2tldHMgPSBkYXRhLmRhdGEuZGF0YVxcclxcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbXNNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhZ2VNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucmNhTW9yZT0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XFxyXFxuICAgICAgICAgICAgfSlcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICByZWFkX21vcmUoeCwgcCA9ICcnKSB7XFxyXFxuICAgICAgICAgICAgaWYgKHApIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHAgPT0gJ3MnKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMuc3RhZ2VNb3JlW3hdID8gZmFsc2UgOiB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5zdGFnZU1vcmUsIHgsIGEpO1xcclxcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYocCA9PSAncmMnKXtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCBhID0gdGhpcy5yY2FNb3JlW3hdID8gZmFsc2UgOiB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5yY2FNb3JlLCB4LCBhKTtcXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCBhID0gdGhpcy5wcm9ibGVtc01vcmVbeF0gPyBmYWxzZSA6IHRydWVcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnByb2JsZW1zTW9yZSwgeCwgYSk7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMuYWRkaXRpb25hbE1vcmVbeF0gPyBmYWxzZSA6IHRydWVcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuYWRkaXRpb25hbE1vcmUsIHgsIGEpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgfSxcXHJcXG4gICAgY3JlYXRlZCgpIHtcXHJcXG4gICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcXHJcXG4gICAgfSxcXHJcXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xcclxcbiAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvZ2V0X3ByZV9tYWNoaW5lXFxcIilcXHJcXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuQ2F0ZWdvcnk7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xcclxcbiAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICBheGlvcy5nZXQoXFxcIi9hcGkvaW5pdGlhbF90aWNrZXRcXFwiKS50aGVuKHJlc3BvbnNlID0+IHtcXHJcXG4gICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnZlbmRvcnM7XFxyXFxuICAgICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcXHJcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcXHJcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zaXRlcztcXHJcXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWRfdXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEuY3JlYXRlZF91c2VycztcXHJcXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybignT2guIFNvbWV0aGluZyB3ZW50IHdyb25nJykpO1xcclxcbiAgICB9LFxcclxcbiAgICB3YXRjaDoge1xcclxcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc3ViX2NhdGVnb3J5X2lkJyhuLCBvKSB7XFxyXFxuICAgICAgICAgICAgaWYgKG4pIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGFzeW5jICdmb3JtLnNpdGVfaWQnKG4sIG8pIHtcXHJcXG4gICAgICAgICAgICBpZiAobikge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgJ2Zvcm0uY2F0ZWdvcnlfaWQnOiB7XFxyXFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldChcXFwiYXBpL2NhdGVnb3J5L1xcXCIgKyBuKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxcclxcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWVcXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgIH0sXFxyXFxufVxcclxcbjwvc2NyaXB0PlxcclxcbjxzdHlsZT5cXHJcXG4ucm1vcmUge1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIk1hc3RlciBSZXBvcnRcIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10b29sc1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZG93bmxvYWQtZXhjZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaDogX3ZtLmV4cG9ydF9jc3YsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogX3ZtLmpzb25fZmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJlZm9yZS1nZW5lcmF0ZVwiOiBfdm0uc3RhcnREb3dubG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmUtZmluaXNoXCI6IF92bS5maW5pc2hEb3dubG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBcIk15IFdvcmtzaGVldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNzdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hc3Rlcl9yZXBvcnQuY3N2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsVGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uc2V0X2ltYWdlKFwiaW1hZ2VzL2ZpbGUucG5nXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkV4cG9ydCBDU1ZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IHAtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhdXRvY29tcGxldGU6IFwib2ZmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0UmVzdWx0cygpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0LW9wdGlvbi1sYWJlbFwiOiBfdm0uZ2V0TGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnNlYXJjaF9tYWNoaW5lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIG1hY2hpbmVzIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYWNoaW5lX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5tYWNoaW5lX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcIm1hY2hpbmVfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLm1hY2hpbmVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnRpY2tldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnRpY2tldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciB0aWNrZXQgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0aWNrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNlYXJjaC50aWNrZXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aWNrZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNpdGVfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zZWFyY2hfc2l0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgU2l0ZS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaXRlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5zaXRlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInNpdGVfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnNpdGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNpdGVfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wiT3BlblwiLCBcIkNsb3NlZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBTdGF0dXMuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwic3RhdHVzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5jcmVhdGVkX3VzZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNyZWF0ZWQgYnkuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY3JlYXRlZF9ieVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guY3JlYXRlZF9ieSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJjcmVhdGVkX2J5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jcmVhdGVkX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUGVyaW9kaWMgTWFpbnRlbmFuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJCcmVha2Rvd24gTWFpbnRlbmFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlRpY2tldCBUeXBlLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRpY2tldF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC50aWNrZXRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJ0aWNrZXRfdHlwZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gudGlja2V0X3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0yIHB0LTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRhdGV0aW1lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS16b25lXCI6IFwiQXNpYS9Lb2xrYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDcmVhdGVkIGZyb20gZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guY3JlYXRlZF9mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImNyZWF0ZWRfZnJvbVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guY3JlYXRlZF9mcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtMiBwdC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkYXRldGltZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWUtem9uZVwiOiBcIkFzaWEvS29sa2F0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ3JlYXRlZCB0byBkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5jcmVhdGVkX3RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImNyZWF0ZWRfdG9cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmNyZWF0ZWRfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGNvbC0yIHB0LTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2l0ZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJNYWpvclwiLCBcIk1pbm9yXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IENvbXBsYWludCBOYXR1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY29tcGxhaW50X25hdHVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guY29tcGxhaW50X25hdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJjb21wbGFpbnRfbmF0dXJlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jb21wbGFpbnRfbmF0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtNCBwdC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmllbGRzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjQwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwianVzdGlmeS1jb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzOXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkIDFweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjNweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc2VhcmNoLnRhdF9mcm9tKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlRBVFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkIDFweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjNweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc2VhcmNoLnRhdF90bykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTXVsdGlSYW5nZVNsaWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlQ2xhc3NOYW1lOiBcIm11bHRpLXJhbmdlLXNsaWRlci1iYXItb25seVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZTogX3ZtLnNlYXJjaC50YXRfZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VmFsdWU6IF92bS5zZWFyY2gudGF0X3RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZU1hcmdpbjogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGlucHV0OiBfdm0uVXBkYXRlVmFsdWVzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCBwdC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlYXJjaFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm8gbWwtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2V0X2ZpbHRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVzZXRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wIG1hc3RlclRhYmxlXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtaG92ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uVGlja2V0cy5kYXRhLCBmdW5jdGlvbih0aWNrZXQsIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiB0aWNrZXQuaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5UaWNrZXRzLmZyb20gKyB4KSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2FwaXRhbGl6ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRpY2tldC5zaXRlX25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQubWFjaGluZS5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQubWFjaGluZS5tYWNoaW5lX21vZGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aWNrZXQubWFjaGluZS5tYWNoaW5lX21vZGVsLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS52aWV3X3NpdGVfZGV0YWlscyh0aWNrZXQubWFjaGluZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGlja2V0LmZhcl9ubykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC50aWNrZXRfbm8pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC5jcmVhdGVkX2F0KSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQuY3JlYXRlZF9ieV9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQuY29tcGxhaW50X25hdHVyZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGlja2V0LnN0YXR1c19kdXJpbmdfY29tcGxhaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0LnRpY2tldF90eXBlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVnVlUmVhZE1vcmVTbW9vdGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiBfdm0ucHJvYmxlbXNNb3JlW3hdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuby1idXR0b25cIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tc2hhZG93XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpvcGVuXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2JsZW1zTW9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsga2V5OiBcInBkXCIgKyB4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm1vcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlYWRfbW9yZSh4LCBcInBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi4uLlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9ibGVtc01vcmVbeF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJMZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJNb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LnByb2JsZW1zICYmIHRpY2tldC5wcm9ibGVtcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVnVlUmVhZE1vcmVTbW9vdGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiBfdm0uYWRkaXRpb25hbE1vcmVbeF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vLWJ1dHRvblwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuby1zaGFkb3dcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOm9wZW5cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkaXRpb25hbE1vcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHRpY2tldC5wcm9ibGVtcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGlja2V0LnByb2JsZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInBcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhpdGVtLnByb2JsZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJybW9yZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVhZF9tb3JlKHgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuLi5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkaXRpb25hbE1vcmVbeF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJMZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJNb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5zdGF0dXMudG9Mb3dlckNhc2UoKSA9PSBcImNyZWF0ZWQgYnkgdXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGlja2V0LnN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5zdGF0dXMgPT0gXCJDbG9zZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRpY2tldC5jdXJyZW50X3N0YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJteURhdGVcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LnN0YXR1cyA9PSBcIkNsb3NlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRpY2tldC5sYXN0X3N0YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRpY2tldC5sYXN0X3N0YWdlLnN0YWdlX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5zdGF0dXMgIT0gXCJDbG9zZWRcIiAmJiB0aWNrZXQubGFzdF9zdGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZ1ZVJlYWRNb3JlU21vb3RoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbjogX3ZtLnN0YWdlTW9yZVt4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tYnV0dG9uXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vLXNoYWRvd1wiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6b3BlblwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zdGFnZU1vcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQubGFzdF9zdGFnZS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJybW9yZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVhZF9tb3JlKHgsIFwic1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLi4uXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0YWdlTW9yZVt4XSA/IFwiTGVzc1wiIDogXCJNb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC5tYWNoaW5lX3N0YXR1cykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQucmNhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVnVlUmVhZE1vcmVTbW9vdGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJyY21cIiArIHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW46IF92bS5yY2FNb3JlW3hdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuby1idXR0b25cIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tc2hhZG93XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpvcGVuXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJjYU1vcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwicFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQucmNhKSldKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm1vcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlYWRfbW9yZSh4LCBcInJjXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuLi5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmNhTW9yZVt4XSA/IFwiTGVzc1wiIDogXCJNb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fZihcIm15RGF0ZVwiKSh0aWNrZXQubGlrZWx5X2RhdGUpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX2YoXCJteURhdGVcIikodGlja2V0LnJldmVyc2lvbl9kYXRlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC5hY3R1YWxfZGF0ZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aWNrZXQuYWN0dWFsX2RhdGUgPyB0aWNrZXQudGF0IDogXCItXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b0N1cnJlbmN5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LmFkX2VzdGltYXRlZF9zZXJ2aWNlX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcInRvQ3VycmVuY3lcIikodGlja2V0LnByb2R1Y3Rpb25fbG9zcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvb3RlclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLlRpY2tldHMgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgXCJwYWdpbmF0aW9uLWNoYW5nZS1wYWdlXCI6IF92bS5nZXRSZXN1bHRzIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiTWFjaGluZVBvcFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGlkOiBcIk1hY2hpbmVTaXRlTW9kYWwzXCIsIG1hY2hpbmU6IF92bS5wbU1vZGFsRGF0YSB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTLk5cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU2l0ZSBuYW1lXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkVxdWlwbWVudFwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiIERlc2NyaXB0aW9uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1vZGVsXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkZBUiBOb1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDb21wbGFpbnRcIiksIF9jKFwiYnJcIiksIF92bS5fdihcIiBOb1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDb21wbGFpbnQgXCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCJkYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkNvbXBsYWludFwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiIFJhaXNlZCBCeVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDb21wbGFpbnQgXCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCJOYXR1cmVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU3RhdHVzIFwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiRHVyaW5nIENvbXBsYWludFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUaWNrZXQgVHlwZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgd2lkdGg6IFwiMTBcIiB9IH0sIFtfdm0uX3YoXCJQcm9ibGVtIGRlc2NyaXB0aW9uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyB3aWR0aDogXCIxMFwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIkFkZGl0aW9uYWwgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFByb2JsZW1zXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDdXJyZW50IFwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiU3RhdHVzXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkN1cnJlbnQgXCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCJTdGFnZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDdXJyZW50IFwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiU3RhZ2UgRGF0ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDdXJyZW50XCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCIgU3RhZ2UgRGVzY3JpcHRpb25cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU3RhdHVzIFwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiIFBvc3QgUmVzb2x1dGlvblwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJSQ0FcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRXhwZWN0ZWQgXCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCIgUmVzb2x1dGlvbiBkYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJldmVyc2lvblwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiRXhwZWN0ZWQgZGF0ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJBY3R1YWwgXCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCIgUmVzb2x2ZSBEYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlRBVFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJFc3RpbWF0ZWRcIiksIF9jKFwiYnJcIiksIF92bS5fdihcIiBDb3N0XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFjdHVhbFwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiIENvc3RcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUHJvZHVjdGlvblwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiIExvc3NcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtN2M2ZTg4NmVcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01hc3RlclJlcG9ydC52dWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzhhOTBkMjhcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTWFzdGVyUmVwb3J0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01hc3RlclJlcG9ydC52dWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01hc3RlclJlcG9ydC52dWVcIilcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTWFzdGVyUmVwb3J0LnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTWFzdGVyUmVwb3J0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03YzZlODg2ZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9NYXN0ZXJSZXBvcnQudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcTWFzdGVyUmVwb3J0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03YzZlODg2ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdjNmU4ODZlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=