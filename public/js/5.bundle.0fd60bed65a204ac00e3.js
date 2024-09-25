(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/ComplaintList.vue":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/ComplaintList.vue ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var multi_range_slider_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multi-range-slider-vue */ "./node_modules/multi-range-slider-vue/MultiRangeSlider.vue");
/* harmony import */ var _SideBarModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBarModal.vue */ "./resources/js/components/SideBarModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueReadMoreSmooth: () => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! vue-read-more-smooth */ "./node_modules/vue-read-more-smooth/dist/vue-read-more-smooth.common.js", 7)),
    MultiRangeSlider: multi_range_slider_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SidebarModal: _SideBarModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
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
        tat_from: '',
        tat_to: '',
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
        'Operator name': 'operator_name',
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
        'Production Loss': 'production_loss_amount',
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
    openSideModal() {
      this.$refs.sidebarModal.openSideModal();
    },
    closeSideModal() {
      this.$refs.sidebarModal.closeSideModal();
    },
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
        tat_from: "",
        tat_to: "",
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
      let cloaderd = this.$loading.show();
      this.search.page = page;
      axios.get('/api/complaint/list/1', {
        params: this.search
      }).then(data => {
        console.log("data====", data);
        this.Tickets = data.data.data;
        this.additionalMore = new Array(this.Tickets.data.length).fill(false);
        this.problemsMore = new Array(this.Tickets.data.length).fill(false);
        this.stageMore = new Array(this.Tickets.data.length).fill(false);
        this.rcaMore = new Array(this.Tickets.data.length).fill(false);
        cloaderd.hide();
      });
    },
    loadTickets() {
      let cloaderd = this.$loading.show();
      axios.get("/api/complaint/list/1", {
        params: this.search
      }).then(data => {
        this.Tickets = data.data.data;
        this.additionalMore = new Array(this.Tickets.data.length).fill(false);
        this.problemsMore = new Array(this.Tickets.data.length).fill(false);
        this.stageMore = new Array(this.Tickets.data.length).fill(false);
        this.rcaMore = new Array(this.Tickets.data.length).fill(false);
        cloaderd.hide();
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
    axios.get("api/complaint/list/1").then(res => {
      this.categories = res.data.data.Category;
      this.sites = res.data.data.sites;
    });
    axios.get("/api/complaint/list/1").then(response => {
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
          axios.get("api/complaint/list/1/" + n).then(res => {
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/SideBarModal.vue":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/SideBarModal.vue ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
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
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openSideModal() {
      this.isOpen = true;
    },
    closeSideModal() {
      this.isOpen = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-461a4589\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/SideBarModal.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-461a4589","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/SideBarModal.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.close[data-v-461a4589]{\n  position: absolute;\n  right: 10px;\n  border: 1px solid black;\n  width: 33px;\n  height: 33px;\n  background: white;\n  border-radius: 50px;\n}\n.sidebar-modal[data-v-461a4589] {\n  padding: 10px 0 10px;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 450px; /* Adjust as needed */\n  background-color: #fff;\n  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);\n  transition: transform 0.3s ease;\n  transform: translateX(100%);\n  z-index: 9999;\n  overflow-y: auto;\n}\n.sidebar-modal.active[data-v-461a4589] {\n  transform: translateX(0);\n}\n.sidebar-content[data-v-461a4589] {\n  height: 100%;\n  overflow-y: auto;\n}\n.sidebar-overlay[data-v-461a4589] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/resources/js/components/SideBarModal.vue"],"names":[],"mappings":";AA8BA;EACA,mBAAA;EACA,YAAA;EACA,wBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,oBAAA;CACA;AACA;EACA,qBAAA;EACA,gBAAA;EACA,OAAA;EACA,UAAA;EACA,SAAA;EACA,aAAA,CAAA,sBAAA;EACA,uBAAA;EACA,6CAAA;EACA,gCAAA;EACA,4BAAA;EACA,cAAA;EACA,iBAAA;CACA;AAEA;EACA,yBAAA;CACA;AAEA;EACA,aAAA;EACA,iBAAA;CACA;AAEA;EACA,mBAAA;EACA,OAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;EACA,qCAAA;CACA","file":"SideBarModal.vue","sourcesContent":["<template>\n    <div class=\"sidebar-modal\" :class=\"{ 'active': isOpen }\">\n      <div class=\"container-fluid\">\n        <button class=\"close\" @click=\"closeSideModal\"><i class=\"fa fa-times\" aria-hidden=\"true\" style=\"font-size: 17px;color: black;\"></i></button>\n        <!-- Content of the sidebar modal -->\n        <slot></slot>\n      </div>\n      <div @click=\"closeSideModal\"></div>\n    </div>\n  </template>\n  \n  <script>\n  export default {\n    data() {\n      return {\n        isOpen: false,\n      };\n    },\n    methods: {\n        openSideModal() {\n        this.isOpen = true;\n      },\n      closeSideModal() {\n        this.isOpen = false;\n      },\n    },\n  };\n  </script>\n  \n  <style scoped>\n  .close{\n    position: absolute;\n    right: 10px;\n    border: 1px solid black;\n    width: 33px;\n    height: 33px;\n    background: white;\n    border-radius: 50px;\n  }\n  .sidebar-modal {\n    padding: 10px 0 10px;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: 450px; /* Adjust as needed */\n    background-color: #fff;\n    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);\n    transition: transform 0.3s ease;\n    transform: translateX(100%);\n    z-index: 9999;\n    overflow-y: auto;\n  }\n  \n  .sidebar-modal.active {\n    transform: translateX(0);\n  }\n  \n  .sidebar-content {\n    height: 100%;\n    overflow-y: auto;\n  }\n  \n  .sidebar-overlay {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  </style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintList.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintList.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.rmore {\n    color: blue;\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/resources/js/components/ComplaintList.vue"],"names":[],"mappings":";AAggBA;IACA,YAAA;CACA","file":"ComplaintList.vue","sourcesContent":["<template>\n    <section class=\"content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n\n                <div class=\"col-12\">\n\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            <h3 class=\"card-title\">Master Report</h3>\n                            <div class=\"card-tools\">\n                                <download-excel class=\"btn btn-sm btn-primary\" :fetch=\"export_csv\" :fields=\"json_fields\"\n                                    :before-generate=\"startDownload\" :before-finish=\"finishDownload\"\n                                    worksheet=\"My Worksheet\" type=\"csv\" name=\"master_report.csv\" v-if=\"$gate.hasPermission('can_download_master_report')\">\n                                    Export CSV</span>\n                                </download-excel>\n                                <button class=\"btn btn-sm btn-blue\" @click=\"openSideModal\"><i\n                                    class=\"fa fa-sliders-h mr-2\" aria-hidden=\"true\"></i> Filter</button>\n\n                            </div>\n                        </div>\n\n                        <SidebarModal ref=\"sidebarModal\">\n                            <!-- Content of the sidebar modal goes here -->\n                            <h3><i class=\"fa fa-sliders-h mr-2\" aria-hidden=\"true\" style=\"font-size: 22px;\"></i> Filter\n                            </h3>\n                            <hr>\n                            <form autocomplete=\"off\" @submit.prevent=\"getResults()\">\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">FAR No</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"name\" :get-option-label=\"getLabel\"\n                                            :reduce=\"(option) => option.id\" :options=\"search_machines\"\n                                            placeholder=\"Enter machines ...\" v-model=\"search.machine_id\"\n                                            name=\"machine_id\">\n                                        </v-select>\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">Search Ticket</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <input type=\"text\" placeholder=\"Enter ticket ...\" v-model=\"search.ticket\"\n                                            name=\"ticket\" class=\"form-control\">\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">Select Site</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :reduce=\"(option) => option.id\"\n                                            :options=\"search_sites\" placeholder=\"Select Site...\"\n                                            v-model=\"search.site_id\" name=\"site_id\">\n                                        </v-select>\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">Select Status</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :options=\"['Open', 'Closed']\"\n                                            placeholder=\"Select Status...\" v-model=\"search.status\" name=\"status\">\n                                        </v-select>\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">Created by</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"name\" :options=\"created_users\" :reduce=\"(option) => option.id\"\n                                            placeholder=\"Created by...\" v-model=\"search.created_by\" name=\"created_by\">\n                                        </v-select>\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">Ticket Type</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"name\"\n                                            :options=\"['Periodic Maintenance', 'Breakdown Maintenance']\"\n                                            placeholder=\"Ticket Type...\" v-model=\"search.ticket_type\"\n                                            name=\"ticket_type\">\n                                        </v-select>\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">From Date</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.created_from\" input-class=\"form-control\" placeholder=\"Date\" />\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">To Date</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"search.created_to\" input-class=\"form-control\" placeholder=\"Date\" />\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">TAT From</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <input type=\"number\" placeholder=\"TAT From ...\" v-model=\"search.tat_from\"\n                                            class=\"form-control\">\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">TAT To</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <input type=\"number\" placeholder=\"TAT To ...\" v-model=\"search.tat_to\"\n                                            class=\"form-control\">\n                                    </div>\n                                </div>\n\n                                <div class=\"row align-items-center mb-2\">\n                                    <div class=\"col-auto col-custom\">\n                                        <label for=\"machine_id\">Complaint nature</label>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :options=\"['Major', 'Minor']\"\n                                            placeholder=\"Select Complaint Nature...\" v-model=\"search.complaint_nature\" name=\"complaint_nature\">\n                                        </v-select>\n                                    </div>\n                                </div>\n\n\n\n\n\n                                <div class=\"row\">\n                                    <div class=\"col-6 mb-2 pr-1\">\n                                        <button type=\"submit\" class=\"btn btn-success btn-block\">Search</button>\n                                    </div>\n                                    <div class=\"col-6 mb-2 pl-1\">\n                                        <button type=\"button\" class=\"btn btn-danger btn-block\"\n                                            @click=\"reset_filter()\">Reset</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </SidebarModal>\n\n                        <!-- /.card-header -->\n                        <div class=\"card-body ticketLstTbl table-responsive p-0\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th style=\"display: none;\"></th>\n                                        <th>ATM ID</th>\n                                        <th>Docket No</th>\n                                        <th>Date</th>\n                                        <!-- <th class=\"truncate\" title=\"Equipment Description\">Equipment Description</th> -->\n                                        <th>Custodian</th>\n                                        <th>Tag Time</th>\n                                        <th>Lag Time</th>\n                                        <th>Countdown(Days hh:mm:ss)</th>\n                                        <!-- <th class=\"truncate\" title=\"Status During Complain\">Status During Complain</th> -->\n                                        <th>Status</th>\n\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr v-for=\"(ticket, x) in Tickets.data\" :key=\"ticket.id\">\n                                        <td style=\"display: none;\"></td>\n                                        <td style=\"padding-bottom: 10px !important;\">{{ ticket.ticket_no }}</td>\n                                        <td class=\"truncate\" :title=\"ticket.site_name\" style=\"max-width: 150px;\">{{ ticket.site_name }}</td>\n                                        <td class=\"truncate\">{{ ticket.machine.machine_operators != null ? ticket.machine.machine_operators.operator_name : '' }}</td>\n                                        <td>{{ ticket.machine.name }}</td>\n                                        <td>{{ ticket.machine.machine_model ? ticket.machine.machine_model.name : '-' }}\n                                        </td>\n                                        <td @click=\"view_site_details(ticket.machine)\">{{ ticket.far_no }}</td>\n                                        <td>{{ ticket.created_by_name }}</td>\n                                        <td>{{ ticket.complaint_nature }}</td>\n                                        <td>{{ ticket.status_during_complaint }}</td>\n                                        <td>{{ ticket.ticket_type }}</td>\n                                        <td class=\"truncate\" :title=\"ticket.problem_description\">\n                                            {{ ticket.problem_description? ticket.problem_description: '-' }}\n                                        </td>\n                                        <td>\n                                            <template v-if=\"ticket.problems && ticket.problems.length > 0\">\n                                                <p v-if=\"ticket.problems\" v-for=\"(item, index) in ticket.problems\"\n                                                    :key=\"'p' + index\" v-html=\"item.problem\"></p>\n                                            </template>\n                                        </td>\n                                        <td>{{ ticket.status.toLowerCase() == 'created by user' ? 'Open' : ticket.status\n                                            }}\n                                        </td>\n                                        <td class=\"truncate\" :title=\"ticket.status == 'Closed' ? '-' : ticket.current_stage\">{{ ticket.status == 'Closed' ? '-' : ticket.current_stage }}</td>\n                                        <td class=\"truncate\" :title=\"ticket.status == 'Closed' ? '-' : ticket.last_stage ? ticket.last_stage.stage_date : '' | myDate\">{{ ticket.status == 'Closed' ? '-' : ticket.last_stage ? ticket.last_stage.stage_date : '' | myDate }}</td>\n                                        <td class=\"truncate\" :title=\"ticket.status != 'Closed' && ticket.last_stage ? ticket.last_stage.description:'-'\">\n                                            <template v-if=\"ticket.status != 'Closed' && ticket.last_stage\">\n                                                    <p>{{ ticket.last_stage.description }}</p>\n                                            </template>\n                                        </td>\n                                        <td>{{ ticket.machine_status }}</td>\n                                        <td>\n                                            {{ ticket.rca?ticket.rca:\"-\" }}\n                                        </td>\n                                        <td>{{ ticket.created_at | myDate}}</td>\n                                        <td>{{ ticket.likely_date | myDate }}</td>\n                                        <td>{{ ticket.reversion_date | myDate }}</td>\n                                        <td class=\"truncate\" :title=\"ticket.reversion_reason\">{{ ticket.reversion_reason }}</td>\n                                        <td>{{ ticket.actual_date | myDate }}</td>\n                                        <td>{{ ticket.actual_date ? ticket.tat : '-' }}</td>\n                                        <td>{{ (ticket.estimated_service_cost + ticket.estimated_material_cost +\n                                    ticket.ad_estimated_material_cost + ticket.ad_estimated_service_cost)\n                                    | toCurrency }}</td>\n                                        <td>{{ (ticket.actual_service_cost + ticket.actual_material_cost) | toCurrency}}\n                                        </td>\n                                        <td>{{ ticket.production_loss_amount | toCurrency }}</td>\n\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <!-- /.card-body -->\n                        <div class=\"card-footer\">\n                            <pagination :data=\"Tickets\" :limit=\"10\" @pagination-change-page=\"getResults\"></pagination>\n                        </div>\n                    </div>\n                    <!-- /.card -->\n                </div>\n            </div>\n\n\n\n        </div>\n\n\n        <MachinePop id=\"MachineSiteModal3\" :machine=\"pmModalData\" />\n    </section>\n</template>\n\n<script>\n//import VueReadMoreSmooth from \"vue-read-more-smooth\";\nimport MultiRangeSlider from \"multi-range-slider-vue\";\nimport SidebarModal from './SideBarModal.vue';\nexport default {\n    name: \"MasterReport\",\n    components: {\n        VueReadMoreSmooth: () => import('vue-read-more-smooth'),\n        MultiRangeSlider,SidebarModal,\n        MachinePop: () => import('./MachineFarPop.vue'),\n    },\n    data() {\n        return {\n            stageMore: [],\n            additionalMore: [],\n            problemsMore: [],\n            rcaMore: [],\n            pmModalData: '',\n            created_users: [],\n            search_machines: [],\n            search_sites: [],\n            search: {\n                page: 1,\n                machine_id: '',\n                site_id: '',\n                created_by: '',\n                created_from: '',\n                created_to: '',\n                tat_from: '',\n                tat_to: '',\n                complaint_nature: '',\n                ticket_type: '',\n                ticket: ''\n            },\n            categories: [],\n            sub_categories: [],\n            sites: [],\n            selected_machine: '',\n            users: [],\n            machines: [],\n            Tickets: {},\n            sl: 1,\n            json_fields: {\n                \"Sl No\": {\n                    callback: () => {\n                        return this.sl++;\n                    },\n                },\n                'Site name': 'site_name',\n                'Operator name': 'operator_name',\n                'Equipment Description': 'machine_name',\n                'FAR No': 'far_no',\n                'Complaint No': 'ticket_no',\n                'Complaint date': \"created_at\",\n                'Complaint Raised By': 'created_by_name',\n                'Complaint Nature': 'complaint_nature',\n                'Status During Complaint': 'status_during_complaint',\n                'Problem description': 'problem_description',\n                'Additional Problem': {\n                    field: \"problems\",\n                    callback: (problem) => {\n                        let ret = ''\n                        if (problem) {\n                            ret = problem.map(value => value.problem).join(\"\\r\\n\");\n                        }\n                        return ret;\n                    },\n                },\n                \"Current Status\": {\n                    field: \"status\",\n                    callback: (status) => {\n                        return status.toLowerCase() == 'created by user' ? 'Open' : status;\n                    },\n                },\n                \"Current Stage\": {\n                    field: \"last_stage\",\n                    callback: (value) => {\n                        return value ? value.description : '-';\n                    },\n                },\n                \"Status Post Resolution\": 'machine_status',\n                'Expected Resolution date': 'likely_date',\n                'Revised Expected date': 'reversion_date',\n                'Reason for date Revision': 'reversion_reason',\n                'Actual Resolve Date': 'actual_date',\n                'TAT': 'tat',\n                'Estimated Cost': 'estimated_cost',\n                'Actual Cost': 'actual_cost',\n                'Production Loss': 'production_loss_amount',\n                'RCA': 'rca'\n            },\n            json_meta: [\n                [{\n                    key: \"charset\",\n                    value: \"utf-8\",\n                },],\n            ],\n            sl: 0,\n        }\n    },\n    methods: {\n        openSideModal() {\n            this.$refs.sidebarModal.openSideModal();\n        },\n        closeSideModal() {\n            this.$refs.sidebarModal.closeSideModal();\n        },\n        view_site_details(data) {\n            this.pmModalData = data\n            $('#MachineSiteModal3').modal('show');\n        },\n        reset_filter() {\n            this.search = {\n                page: 1,\n                machine_id: '',\n                site_id: '',\n                created_by: '',\n                created_from: '',\n                created_to: '',\n                tat_from: \"\",\n                tat_to: \"\",\n                complaint_nature: '',\n                ticket_type: '',\n                ticket: ''\n            }\n            this.getResults()\n        },\n        UpdateValues(e) {\n            this.search.tat_from = e.minValue;\n            this.search.tat_to = e.maxValue;\n        },\n        // excel\n        async export_csv() {\n            const response = await axios.get('api/ticket/export', {\n                params: this.search\n            });\n            // const response = await axios.get('api/ticket/export');\n            return response.data.data;\n        },\n        startDownload() {\n            this.sl = 1;\n            Swal.fire({\n                title: 'Please Wait !',\n                html: 'Data populating', // add html attribute if you want or remove\n                allowOutsideClick: false,\n                onBeforeOpen: () => {\n                    Swal.showLoading()\n                },\n            });\n        },\n        finishDownload() {\n            Swal.close()\n        },\n\n        getLabel(val) {\n            if (typeof val === 'object') {\n                return val.far_no + ' - ' + val.name;\n            } else {\n                return val;\n            }\n        },\n        getResults(page = 1) {\n            let cloaderd = this.$loading.show();\n            this.search.page = page\n            axios.get('/api/complaint/list/1', {\n                params: this.search\n            }).then((data) => {\n                console.log(\"data====\",data);\n\n                this.Tickets = data.data.data\n                this.additionalMore = new Array(this.Tickets.data.length).fill(false);\n                this.problemsMore = new Array(this.Tickets.data.length).fill(false);\n                this.stageMore = new Array(this.Tickets.data.length).fill(false);\n                this.rcaMore = new Array(this.Tickets.data.length).fill(false);\n                cloaderd.hide();\n            })\n        },\n        loadTickets() {\n            let cloaderd = this.$loading.show();\n            axios.get(\"/api/complaint/list/1\", {\n                params: this.search\n            }).then((data) => {\n                this.Tickets = data.data.data\n                this.additionalMore = new Array(this.Tickets.data.length).fill(false);\n                this.problemsMore = new Array(this.Tickets.data.length).fill(false);\n                this.stageMore = new Array(this.Tickets.data.length).fill(false);\n                this.rcaMore = new Array(this.Tickets.data.length).fill(false);\n                cloaderd.hide();\n            })\n        },\n        read_more(x, p = '') {\n            if (p) {\n                if (p == 's') {\n                    let a = this.stageMore[x] ? false : true\n                    this.$set(this.stageMore, x, a);\n                } else if (p == 'rc') {\n                    let a = this.rcaMore[x] ? false : true\n                    this.$set(this.rcaMore, x, a);\n                } else {\n                    let a = this.problemsMore[x] ? false : true\n                    this.$set(this.problemsMore, x, a);\n                }\n            } else {\n                let a = this.additionalMore[x] ? false : true\n                this.$set(this.additionalMore, x, a);\n            }\n        }\n\n    },\n    created() {\n        this.loadTickets();\n    },\n    beforeCreate() {\n        axios.get(\"api/complaint/list/1\")\n            .then((res) => {\n                this.categories = res.data.data.Category;\n                this.sites = res.data.data.sites;\n            })\n        axios.get(\"/api/complaint/list/1\").then(response => {\n            this.users = response.data.data.vendors;\n            this.machines = response.data.data.machines;\n            this.search_machines = response.data.data.machines;\n            this.search_sites = response.data.data.sites;\n            this.created_users = response.data.data.created_users;\n        }).catch(() => console.warn('Oh. Something went wrong'));\n    },\n    watch: {\n        async 'form.sub_category_id'(n, o) {\n            if (n) {\n                this.get_machine()\n            }\n        },\n        async 'form.site_id'(n, o) {\n            if (n) {\n                this.get_machine()\n            }\n        },\n\n        'form.category_id': {\n            handler: function (n, o) {\n\n                if (n) {\n                    axios.get(\"api/complaint/list/1/\" + n)\n                        .then((res) => {\n                            this.sub_categories = res.data.data;\n                        })\n                    this.get_machine()\n                }\n            },\n            deep: true,\n            initial: true\n        },\n\n    },\n}\n</script>\n<style>\n.rmore {\n    color: blue;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-461a4589\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/SideBarModal.vue":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-461a4589","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/SideBarModal.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "sidebar-modal", class: { active: _vm.isOpen } },
    [
      _c(
        "div",
        { staticClass: "container-fluid" },
        [
          _c(
            "button",
            { staticClass: "close", on: { click: _vm.closeSideModal } },
            [
              _c("i", {
                staticClass: "fa fa-times",
                staticStyle: { "font-size": "17px", color: "black" },
                attrs: { "aria-hidden": "true" }
              })
            ]
          ),
          _vm._v(" "),
          _vm._t("default")
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { on: { click: _vm.closeSideModal } })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4984113e\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintList.vue":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4984113e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintList.vue ***!
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
            _c(
              "div",
              { staticClass: "card" },
              [
                _c("div", { staticClass: "card-header" }, [
                  _c("h3", { staticClass: "card-title" }, [
                    _vm._v("Master Report")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-tools" },
                    [
                      _vm.$gate.hasPermission("can_download_master_report")
                        ? _c(
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
                              _vm._v(
                                "\n                                Export CSV"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-blue",
                          on: { click: _vm.openSideModal }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-sliders-h mr-2",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(" Filter")
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("SidebarModal", { ref: "sidebarModal" }, [
                  _c("h3", [
                    _c("i", {
                      staticClass: "fa fa-sliders-h mr-2",
                      staticStyle: { "font-size": "22px" },
                      attrs: { "aria-hidden": "true" }
                    }),
                    _vm._v(" Filter\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
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
                      _c(
                        "div",
                        { staticClass: "row align-items-center mb-2" },
                        [
                          _c("div", { staticClass: "col-auto col-custom" }, [
                            _c("label", { attrs: { for: "machine_id" } }, [
                              _vm._v("FAR No")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col" },
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
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row align-items-center mb-2" },
                        [
                          _c("div", { staticClass: "col-auto col-custom" }, [
                            _c("label", { attrs: { for: "machine_id" } }, [
                              _vm._v("Search Ticket")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
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
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row align-items-center mb-2" },
                        [
                          _c("div", { staticClass: "col-auto col-custom" }, [
                            _c("label", { attrs: { for: "machine_id" } }, [
                              _vm._v("Select Site")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col" },
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
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row align-items-center mb-2" },
                        [
                          _c("div", { staticClass: "col-auto col-custom" }, [
                            _c("label", { attrs: { for: "machine_id" } }, [
                              _vm._v("Select Status")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col" },
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
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row align-items-center mb-2" },
                        [
                          _c("div", { staticClass: "col-auto col-custom" }, [
                            _c("label", { attrs: { for: "machine_id" } }, [
                              _vm._v("Created by")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col" },
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
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row align-items-center mb-2" },
                        [
                          _c("div", { staticClass: "col-auto col-custom" }, [
                            _c("label", { attrs: { for: "machine_id" } }, [
                              _vm._v("Ticket Type")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col" },
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
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row align-items-center mb-2" },
                        [
                          _c("div", { staticClass: "col-auto col-custom" }, [
                            _c("label", { attrs: { for: "machine_id" } }, [
                              _vm._v("From Date")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col" },
                            [
                              _c("datetime", {
                                attrs: {
                                  "value-zone": "Asia/Kolkata",
                                  "input-class": "form-control",
                                  placeholder: "Date"
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
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row align-items-center mb-2" },
                        [
                          _c("div", { staticClass: "col-auto col-custom" }, [
                            _c("label", { attrs: { for: "machine_id" } }, [
                              _vm._v("To Date")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col" },
                            [
                              _c("datetime", {
                                attrs: {
                                  "value-zone": "Asia/Kolkata",
                                  "input-class": "form-control",
                                  placeholder: "Date"
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
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row align-items-center mb-2" },
                        [
                          _c("div", { staticClass: "col-auto col-custom" }, [
                            _c("label", { attrs: { for: "machine_id" } }, [
                              _vm._v("TAT From")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.search.tat_from,
                                  expression: "search.tat_from"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                placeholder: "TAT From ..."
                              },
                              domProps: { value: _vm.search.tat_from },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.search,
                                    "tat_from",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row align-items-center mb-2" },
                        [
                          _c("div", { staticClass: "col-auto col-custom" }, [
                            _c("label", { attrs: { for: "machine_id" } }, [
                              _vm._v("TAT To")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.search.tat_to,
                                  expression: "search.tat_to"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                placeholder: "TAT To ..."
                              },
                              domProps: { value: _vm.search.tat_to },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.search,
                                    "tat_to",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row align-items-center mb-2" },
                        [
                          _c("div", { staticClass: "col-auto col-custom" }, [
                            _c("label", { attrs: { for: "machine_id" } }, [
                              _vm._v("Complaint nature")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col" },
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
                                    _vm.$set(
                                      _vm.search,
                                      "complaint_nature",
                                      $$v
                                    )
                                  },
                                  expression: "search.complaint_nature"
                                }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-6 mb-2 pr-1" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success btn-block",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Search")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-6 mb-2 pl-1" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger btn-block",
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
                  {
                    staticClass: "card-body ticketLstTbl table-responsive p-0"
                  },
                  [
                    _c("table", { staticClass: "table table-hover" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.Tickets.data, function(ticket, x) {
                          return _c("tr", { key: ticket.id }, [
                            _c("td", { staticStyle: { display: "none" } }),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticStyle: {
                                  "padding-bottom": "10px !important"
                                }
                              },
                              [_vm._v(_vm._s(ticket.ticket_no))]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "truncate",
                                staticStyle: { "max-width": "150px" },
                                attrs: { title: ticket.site_name }
                              },
                              [_vm._v(_vm._s(ticket.site_name))]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "truncate" }, [
                              _vm._v(
                                _vm._s(
                                  ticket.machine.machine_operators != null
                                    ? ticket.machine.machine_operators
                                        .operator_name
                                    : ""
                                )
                              )
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
                              {
                                staticClass: "truncate",
                                attrs: { title: ticket.problem_description }
                              },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(
                                      ticket.problem_description
                                        ? ticket.problem_description
                                        : "-"
                                    ) +
                                    "\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                ticket.problems && ticket.problems.length > 0
                                  ? _vm._l(ticket.problems, function(
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
                                    })
                                  : _vm._e()
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  ticket.status.toLowerCase() ==
                                    "created by user"
                                    ? "Open"
                                    : ticket.status
                                ) + "\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "truncate",
                                attrs: {
                                  title:
                                    ticket.status == "Closed"
                                      ? "-"
                                      : ticket.current_stage
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    ticket.status == "Closed"
                                      ? "-"
                                      : ticket.current_stage
                                  )
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "truncate",
                                attrs: {
                                  title: _vm._f("myDate")(
                                    ticket.status == "Closed"
                                      ? "-"
                                      : ticket.last_stage
                                      ? ticket.last_stage.stage_date
                                      : ""
                                  )
                                }
                              },
                              [
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
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "truncate",
                                attrs: {
                                  title:
                                    ticket.status != "Closed" &&
                                    ticket.last_stage
                                      ? ticket.last_stage.description
                                      : "-"
                                }
                              },
                              [
                                ticket.status != "Closed" && ticket.last_stage
                                  ? [
                                      _c("p", [
                                        _vm._v(
                                          _vm._s(ticket.last_stage.description)
                                        )
                                      ])
                                    ]
                                  : _vm._e()
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(ticket.machine_status))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(ticket.rca ? ticket.rca : "-") +
                                  "\n                                    "
                              )
                            ]),
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
                            _c(
                              "td",
                              {
                                staticClass: "truncate",
                                attrs: { title: ticket.reversion_reason }
                              },
                              [_vm._v(_vm._s(ticket.reversion_reason))]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm._f("myDate")(ticket.actual_date))
                              )
                            ]),
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
                                  _vm._f("toCurrency")(
                                    ticket.production_loss_amount
                                  )
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
                      attrs: { data: _vm.Tickets, limit: 10 },
                      on: { "pagination-change-page": _vm.getResults }
                    })
                  ],
                  1
                )
              ],
              1
            )
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
        _c("th", { staticStyle: { display: "none" } }),
        _vm._v(" "),
        _c("th", [_vm._v("ATM ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Docket No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Custodian")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tag Time")]),
        _vm._v(" "),
        _c("th", [_vm._v("Lag Time")]),
        _vm._v(" "),
        _c("th", [_vm._v("Countdown(Days hh:mm:ss)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")])
      ])
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-461a4589\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/SideBarModal.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-461a4589","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/SideBarModal.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-461a4589","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SideBarModal.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-461a4589\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/SideBarModal.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a07738d4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintList.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintList.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ComplaintList.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintList.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4585a2e0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/js/components/ComplaintList.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/ComplaintList.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ComplaintList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./ComplaintList.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/ComplaintList.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_4984113e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-4984113e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./ComplaintList.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4984113e\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintList.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./ComplaintList.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintList.vue")
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ComplaintList_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_4984113e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintList_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_4984113e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintList_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\ComplaintList.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/js/components/SideBarModal.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/SideBarModal.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SideBarModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./SideBarModal.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/SideBarModal.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_461a4589_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SideBarModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-461a4589","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./SideBarModal.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-461a4589\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/SideBarModal.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-461a4589","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./SideBarModal.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-461a4589\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/SideBarModal.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-461a4589"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SideBarModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_461a4589_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SideBarModal_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_461a4589_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SideBarModal_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\SideBarModal.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50TGlzdC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1NpZGVCYXJNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU2lkZUJhck1vZGFsLnZ1ZT80ZjdkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludExpc3QudnVlP2RiNDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU2lkZUJhck1vZGFsLnZ1ZT8xODgxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludExpc3QudnVlPzIzZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU2lkZUJhck1vZGFsLnZ1ZT9jYmIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludExpc3QudnVlPzRmOWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50TGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU2lkZUJhck1vZGFsLnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwiY29tcG9uZW50cyIsIlZ1ZVJlYWRNb3JlU21vb3RoIiwiTXVsdGlSYW5nZVNsaWRlciIsIlNpZGViYXJNb2RhbCIsIk1hY2hpbmVQb3AiLCJkYXRhIiwic3RhZ2VNb3JlIiwiYWRkaXRpb25hbE1vcmUiLCJwcm9ibGVtc01vcmUiLCJyY2FNb3JlIiwicG1Nb2RhbERhdGEiLCJjcmVhdGVkX3VzZXJzIiwic2VhcmNoX21hY2hpbmVzIiwic2VhcmNoX3NpdGVzIiwic2VhcmNoIiwicGFnZSIsIm1hY2hpbmVfaWQiLCJzaXRlX2lkIiwiY3JlYXRlZF9ieSIsImNyZWF0ZWRfZnJvbSIsImNyZWF0ZWRfdG8iLCJ0YXRfZnJvbSIsInRhdF90byIsImNvbXBsYWludF9uYXR1cmUiLCJ0aWNrZXRfdHlwZSIsInRpY2tldCIsImNhdGVnb3JpZXMiLCJzdWJfY2F0ZWdvcmllcyIsInNpdGVzIiwic2VsZWN0ZWRfbWFjaGluZSIsInVzZXJzIiwibWFjaGluZXMiLCJUaWNrZXRzIiwic2wiLCJqc29uX2ZpZWxkcyIsImNhbGxiYWNrIiwiZmllbGQiLCJyZXQiLCJqc29uX21ldGEiLCJrZXkiLCJ2YWx1ZSIsIm1ldGhvZHMiLCJvcGVuU2lkZU1vZGFsIiwiY2xvc2VTaWRlTW9kYWwiLCJ2aWV3X3NpdGVfZGV0YWlscyIsIiQiLCJyZXNldF9maWx0ZXIiLCJVcGRhdGVWYWx1ZXMiLCJwYXJhbXMiLCJzdGFydERvd25sb2FkIiwiU3dhbCIsInRpdGxlIiwiaHRtbCIsImFsbG93T3V0c2lkZUNsaWNrIiwib25CZWZvcmVPcGVuIiwiZmluaXNoRG93bmxvYWQiLCJnZXRMYWJlbCIsImdldFJlc3VsdHMiLCJheGlvcyIsImNvbnNvbGUiLCJjbG9hZGVyZCIsImxvYWRUaWNrZXRzIiwicmVhZF9tb3JlIiwiY3JlYXRlZCIsImJlZm9yZUNyZWF0ZSIsInRoZW4iLCJ3YXRjaCIsImhhbmRsZXIiLCJkZWVwIiwiaW5pdGlhbCIsImlzT3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnUUE7QUFDc0Q7QUFDUjtBQUMvQjtFQUNmQTtFQUNBQztJQUNBQztJQUNBQztJQUFBQztJQUNBQztFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztRQUNBO1VBQ0FDO1lBQ0E7VUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtVQUNBQztVQUNBRDtZQUNBO1lBQ0E7Y0FDQUU7WUFDQTtZQUNBO1VBQ0E7UUFDQTtRQUNBO1VBQ0FEO1VBQ0FEO1lBQ0E7VUFDQTtRQUNBO1FBQ0E7VUFDQUM7VUFDQUQ7WUFDQTtVQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO01BQ0FHLFlBQ0E7UUFDQUM7UUFDQUM7TUFDQSxHQUNBO01BQ0FQO0lBQ0E7RUFDQTtFQUNBUTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQUM7SUFDQTtJQUNBQztNQUNBO1FBQ0EvQjtRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBc0I7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBO01BQ0E7UUFDQUM7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQUE7UUFDQUM7UUFDQUM7VUFDQUo7UUFDQTtNQUNBO0lBQ0E7SUFDQUs7TUFDQUw7SUFDQTtJQUVBTTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQUM7UUFDQVY7TUFDQTtRQUNBVztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQUg7UUFDQVY7TUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQVk7TUFDQTtJQUNBO0lBQ0FFO01BQ0E7UUFDQTtVQUNBO1VBQ0E7UUFDQTtVQUNBO1VBQ0E7UUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7RUFFQTtFQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQU4sa0NBQ0FPO01BQ0E7TUFDQTtJQUNBO0lBQ0FQO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQVE7SUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBO01BQ0FDO1FBRUE7VUFDQVQsdUNBQ0FPO1lBQ0E7VUFDQTtVQUNBO1FBQ0E7TUFDQTtNQUNBRztNQUNBQztJQUNBO0VBRUE7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDamZEO0VBQ0FoRTtJQUNBO01BQ0FpRTtJQUNBO0VBQ0E7RUFDQTdCO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7RUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7O0FDMUJBLDJCQUEyQixtQkFBTyxDQUFDLG1HQUFrRDtBQUNyRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsNkJBQTZCLHVCQUF1QixnQkFBZ0IsNEJBQTRCLGdCQUFnQixpQkFBaUIsc0JBQXNCLHdCQUF3QixHQUFHLG1DQUFtQyx5QkFBeUIsb0JBQW9CLFdBQVcsY0FBYyxhQUFhLGlCQUFpQixrREFBa0QsaURBQWlELG9DQUFvQyxnQ0FBZ0Msa0JBQWtCLHFCQUFxQixHQUFHLDBDQUEwQyw2QkFBNkIsR0FBRyxxQ0FBcUMsaUJBQWlCLHFCQUFxQixHQUFHLHFDQUFxQyx1QkFBdUIsV0FBVyxjQUFjLFlBQVksYUFBYSx5Q0FBeUMsR0FBRyxVQUFVLHFMQUFxTCxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxxQkFBcUIsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsMEdBQTBHLG1CQUFtQiw0S0FBNEssYUFBYSxnTkFBZ04sY0FBYyxnQkFBZ0Isa0NBQWtDLE9BQU8saUJBQWlCLDJCQUEyQiw2QkFBNkIsU0FBUywyQkFBMkIsOEJBQThCLFNBQVMsUUFBUSxPQUFPLDhDQUE4Qyx5QkFBeUIsa0JBQWtCLDhCQUE4QixrQkFBa0IsbUJBQW1CLHdCQUF3QiwwQkFBMEIsS0FBSyxvQkFBb0IsMkJBQTJCLHNCQUFzQixhQUFhLGdCQUFnQixlQUFlLG1CQUFtQixvREFBb0QsbURBQW1ELHNDQUFzQyxrQ0FBa0Msb0JBQW9CLHVCQUF1QixLQUFLLCtCQUErQiwrQkFBK0IsS0FBSywwQkFBMEIsbUJBQW1CLHVCQUF1QixLQUFLLDBCQUEwQix5QkFBeUIsYUFBYSxnQkFBZ0IsY0FBYyxlQUFlLDJDQUEyQyxLQUFLLCtCQUErQjs7QUFFaCtGOzs7Ozs7Ozs7Ozs7QUNQQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGFBQWEsa0JBQWtCLEdBQUcsVUFBVSxzTEFBc0wsT0FBTyxVQUFVLGk4Q0FBaThDLHNxUkFBc3FSLDJoQ0FBMmhDLDhGQUE4RixLQUFLLG9CQUFvQiwySEFBMkgsS0FBSyxvQkFBb0Isd0VBQXdFLGtHQUFrRyxxREFBcUQsdUJBQXVCLHFEQUFxRCwwRUFBMEUsNElBQTRJLGlCQUFpQixxREFBcUQsMEJBQTBCLHFEQUFxRCwyQkFBMkIscURBQXFELGtDQUFrQyxxREFBcUQsc0JBQXNCLDRKQUE0SiwrREFBK0QsbWtCQUFta0IsMEhBQTBILG9MQUFvTCwwREFBMEQsb0xBQW9MLG9HQUFvRywrVUFBK1UsaUNBQWlDLDRKQUE0Six5QkFBeUIsbUdBQW1HLCtCQUErQiwrRkFBK0YsNkJBQTZCLHFEQUFxRCwrQkFBK0IscURBQXFELGtDQUFrQywyR0FBMkcsMkJBQTJCLHFEQUFxRCwrQkFBK0IscURBQXFELHlDQUF5QyxxREFBcUQsa09BQWtPLHFEQUFxRCwwRUFBMEUsK0ZBQStGLDhDQUE4Qyx3dEJBQXd0QiwwREFBMEQsZ0RBQWdELGtCQUFrQixnREFBZ0QsMktBQTJLLGVBQWUsa0JBQWtCLDRRQUE0USw4V0FBOFcsc01BQXNNLGlEQUFpRCw4QkFBOEIsdUNBQXVDLDJDQUEyQyx1QkFBdUIsb0JBQW9CLGtrQkFBa2tCLHdGQUF3Riw4RUFBOEUseUZBQXlGLDJCQUEyQixxQ0FBcUMsdUJBQXVCLG9CQUFvQix3Q0FBd0MscUZBQXFGLDZGQUE2Rix1QkFBdUIsb0JBQW9CLHVDQUF1Qyx3RkFBd0YsaUVBQWlFLHVCQUF1QixvQkFBb0IsOGhCQUE4aEIsK0NBQStDLGlHQUFpRyxrREFBa0QsT0FBTyxpQkFBaUIsMkJBQTJCLHNEQUFzRCxXQUFXLDZCQUE2Qix1REFBdUQsV0FBVyxvQ0FBb0MseUZBQXlGLFdBQVcsMkJBQTJCLDZCQUE2QixrWEFBa1gsMENBQTBDLDRCQUE0QixnREFBZ0QsOENBQThDLFdBQVcsaURBQWlELHFFQUFxRSxvREFBb0QsRUFBRSx1RUFBdUUsd0NBQXdDLFdBQVcsNEJBQTRCLDBCQUEwQix5QkFBeUIsaU5BQWlOLDJEQUEyRCxnQkFBZ0IsRUFBRSxXQUFXLDZCQUE2QixxQ0FBcUMsNEJBQTRCLDRDQUE0Qyx1REFBdUQsZUFBZSxPQUFPLDZCQUE2QixlQUFlLFdBQVcsaUNBQWlDLGtEQUFrRCx1RkFBdUYsb0RBQW9ELGtCQUFrQixpREFBaUQseUlBQXlJLHNGQUFzRixtRkFBbUYsaUZBQWlGLGtDQUFrQyxlQUFlLFlBQVksMEJBQTBCLGtEQUFrRCxvREFBb0Qsb0RBQW9ELGtCQUFrQix1SUFBdUksc0ZBQXNGLG1GQUFtRixpRkFBaUYsa0NBQWtDLGVBQWUsWUFBWSxpQ0FBaUMsc0JBQXNCLGlDQUFpQyxvSEFBb0gsbUJBQW1CLHNCQUFzQixnSEFBZ0gsbUJBQW1CLE9BQU8sMEhBQTBILG1CQUFtQixlQUFlLE9BQU8sc0hBQXNILGVBQWUsV0FBVyxTQUFTLGtCQUFrQiw2QkFBNkIsT0FBTyx1QkFBdUIsMkVBQTJFLDJEQUEyRCxtREFBbUQsZUFBZSxrRUFBa0Usc0RBQXNELDBEQUEwRCxpRUFBaUUsMkRBQTJELG9FQUFvRSxXQUFXLHdEQUF3RCxPQUFPLGVBQWUsOENBQThDLHNCQUFzQixtREFBbUQsV0FBVyx1Q0FBdUMsc0JBQXNCLG1EQUFtRCxXQUFXLGtDQUFrQyx3Q0FBd0MsNEJBQTRCLHdHQUF3RyxrRUFBa0UsMkJBQTJCLDREQUE0RCxlQUFlLGdFQUFnRSxVQUFVLElBQUksOEJBQThCLGtCQUFrQixHQUFHLCtCQUErQjs7QUFFNXZ5Qjs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUNBQXVDLHFCQUFxQixFQUFFO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaUNBQWlDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNEJBQTRCLDRCQUE0QixFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzQ0FBc0M7QUFDcEUsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU0sNEJBQTRCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQztBQUNsQyxJQUFJLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNwQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUsseUJBQXlCO0FBQzlCO0FBQ0EsaUJBQWlCLGlDQUFpQztBQUNsRCxtQkFBbUIscUJBQXFCO0FBQ3hDLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBLGVBQWUsc0JBQXNCO0FBQ3JDO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RCw0QkFBNEIsNEJBQTRCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxzQkFBc0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNCQUFzQjtBQUMxRCw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0JBQXNCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQTZDO0FBQ3RFO0FBQ0EscUNBQXFDLHFDQUFxQztBQUMxRSx5Q0FBeUMsU0FBUyxvQkFBb0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQTZDO0FBQ3RFO0FBQ0EscUNBQXFDLHFDQUFxQztBQUMxRSx5Q0FBeUMsU0FBUyxvQkFBb0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQix5Q0FBeUMsMkJBQTJCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQTZDO0FBQ3RFO0FBQ0EscUNBQXFDLHFDQUFxQztBQUMxRSx5Q0FBeUMsU0FBUyxvQkFBb0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZDQUE2QztBQUN0RTtBQUNBLHFDQUFxQyxxQ0FBcUM7QUFDMUUseUNBQXlDLFNBQVMsb0JBQW9CLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQTZDO0FBQ3RFO0FBQ0EscUNBQXFDLHFDQUFxQztBQUMxRSx5Q0FBeUMsU0FBUyxvQkFBb0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZDQUE2QztBQUN0RTtBQUNBLHFDQUFxQyxxQ0FBcUM7QUFDMUUseUNBQXlDLFNBQVMsb0JBQW9CLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQTZDO0FBQ3RFO0FBQ0EscUNBQXFDLHFDQUFxQztBQUMxRSx5Q0FBeUMsU0FBUyxvQkFBb0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQTZDO0FBQ3RFO0FBQ0EscUNBQXFDLHFDQUFxQztBQUMxRSx5Q0FBeUMsU0FBUyxvQkFBb0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQTZDO0FBQ3RFO0FBQ0EscUNBQXFDLHFDQUFxQztBQUMxRSx5Q0FBeUMsU0FBUyxvQkFBb0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IseUNBQXlDLDZCQUE2QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZDQUE2QztBQUN0RTtBQUNBLHFDQUFxQyxxQ0FBcUM7QUFDMUUseUNBQXlDLFNBQVMsb0JBQW9CLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMscUJBQXFCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLHlDQUF5QywyQkFBMkI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBNkM7QUFDdEU7QUFDQSxxQ0FBcUMscUNBQXFDO0FBQzFFLHlDQUF5QyxTQUFTLG9CQUFvQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxQkFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQsbUNBQW1DLGlDQUFpQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUNBQWlDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlCQUFpQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGlDQUFpQyxtQ0FBbUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxpQkFBaUI7QUFDNUQsc0NBQXNDLGVBQWUsa0JBQWtCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsdUJBQXVCO0FBQ3JFLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDBCQUEwQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQSw4QkFBOEIsK0JBQStCO0FBQzdELDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixlQUFlLGtCQUFrQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQztBQUNsQyxJQUFJLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ3I0QmhCOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdrQkFBNlM7QUFDblU7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLDZIQUFnRTtBQUNsRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1hmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGtoQkFBb1I7QUFDMVM7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLDZIQUFnRTtBQUNsRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNYZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUJBQU8sQ0FBQyx5akJBQWdRO0FBQzFRO0FBQ0E7QUFDb0g7QUFDYTtBQUNqSTtBQUNnVjtBQUNoVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21HO0FBQ25HLGdCQUFnQix5R0FBa0I7QUFDbEMsRUFBRSxnSUFBYztBQUNoQixFQUFFLHdPQUFjO0FBQ2hCLEVBQUUsaVBBQXlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLEVBYVg7O0FBRVUsZ0ZBQWlCOzs7Ozs7Ozs7Ozs7O0FDOUNoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUJBQU8sQ0FBQyx1bUJBQXlSO0FBQ25TO0FBQ0E7QUFDbUg7QUFDYTtBQUNoSTtBQUM4VTtBQUM5VTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21HO0FBQ25HLGdCQUFnQix5R0FBa0I7QUFDbEMsRUFBRSwrSEFBYztBQUNoQixFQUFFLHNPQUFjO0FBQ2hCLEVBQUUsK09BQXlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLEVBYVg7O0FBRVUsZ0ZBQWlCIiwiZmlsZSI6ImpzLzUuYnVuZGxlLjBmZDYwYmVkNjVhMjA0YWMwMGUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj5NYXN0ZXIgUmVwb3J0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b29sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZG93bmxvYWQtZXhjZWwgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgOmZldGNoPVwiZXhwb3J0X2NzdlwiIDpmaWVsZHM9XCJqc29uX2ZpZWxkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YmVmb3JlLWdlbmVyYXRlPVwic3RhcnREb3dubG9hZFwiIDpiZWZvcmUtZmluaXNoPVwiZmluaXNoRG93bmxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0PVwiTXkgV29ya3NoZWV0XCIgdHlwZT1cImNzdlwiIG5hbWU9XCJtYXN0ZXJfcmVwb3J0LmNzdlwiIHYtaWY9XCIkZ2F0ZS5oYXNQZXJtaXNzaW9uKCdjYW5fZG93bmxvYWRfbWFzdGVyX3JlcG9ydCcpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHBvcnQgQ1NWPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tYmx1ZVwiIEBjbGljaz1cIm9wZW5TaWRlTW9kYWxcIj48aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1zbGlkZXJzLWggbXItMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gRmlsdGVyPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lkZWJhck1vZGFsIHJlZj1cInNpZGViYXJNb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ29udGVudCBvZiB0aGUgc2lkZWJhciBtb2RhbCBnb2VzIGhlcmUgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzPVwiZmEgZmEtc2xpZGVycy1oIG1yLTJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjJweDtcIj48L2k+IEZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cIm9mZlwiIEBzdWJtaXQucHJldmVudD1cImdldFJlc3VsdHMoKVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBjb2wtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hY2hpbmVfaWRcIj5GQVIgTm88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiIDpnZXQtb3B0aW9uLWxhYmVsPVwiZ2V0TGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJzZWFyY2hfbWFjaGluZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG1hY2hpbmVzIC4uLlwiIHYtbW9kZWw9XCJzZWFyY2gubWFjaGluZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYWNoaW5lX2lkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gY29sLWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYWNoaW5lX2lkXCI+U2VhcmNoIFRpY2tldDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRpY2tldCAuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnRpY2tldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aWNrZXRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBjb2wtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hY2hpbmVfaWRcIj5TZWxlY3QgU2l0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJzaXRlX25hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzZWFyY2hfc2l0ZXNcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTaXRlLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaC5zaXRlX2lkXCIgbmFtZT1cInNpdGVfaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBjb2wtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hY2hpbmVfaWRcIj5TZWxlY3QgU3RhdHVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpvcHRpb25zPVwiWydPcGVuJywgJ0Nsb3NlZCddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgU3RhdHVzLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5zdGF0dXNcIiBuYW1lPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gY29sLWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYWNoaW5lX2lkXCI+Q3JlYXRlZCBieTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOm9wdGlvbnM9XCJjcmVhdGVkX3VzZXJzXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ3JlYXRlZCBieS4uLlwiIHYtbW9kZWw9XCJzZWFyY2guY3JlYXRlZF9ieVwiIG5hbWU9XCJjcmVhdGVkX2J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gY29sLWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYWNoaW5lX2lkXCI+VGlja2V0IFR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiWydQZXJpb2RpYyBNYWludGVuYW5jZScsICdCcmVha2Rvd24gTWFpbnRlbmFuY2UnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGlja2V0IFR5cGUuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnRpY2tldF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpY2tldF90eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gY29sLWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYWNoaW5lX2lkXCI+RnJvbSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVwiQXNpYS9Lb2xrYXRhXCIgdi1tb2RlbD1cInNlYXJjaC5jcmVhdGVkX2Zyb21cIiBpbnB1dC1jbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIGNvbC1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWFjaGluZV9pZFwiPlRvIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XCJBc2lhL0tvbGthdGFcIiB2LW1vZGVsPVwic2VhcmNoLmNyZWF0ZWRfdG9cIiBpbnB1dC1jbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIGNvbC1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWFjaGluZV9pZFwiPlRBVCBGcm9tPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJUQVQgRnJvbSAuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnRhdF9mcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gY29sLWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYWNoaW5lX2lkXCI+VEFUIFRvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJUQVQgVG8gLi4uXCIgdi1tb2RlbD1cInNlYXJjaC50YXRfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBjb2wtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hY2hpbmVfaWRcIj5Db21wbGFpbnQgbmF0dXJlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpvcHRpb25zPVwiWydNYWpvcicsICdNaW5vciddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgQ29tcGxhaW50IE5hdHVyZS4uLlwiIHYtbW9kZWw9XCJzZWFyY2guY29tcGxhaW50X25hdHVyZVwiIG5hbWU9XCJjb21wbGFpbnRfbmF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBtYi0yIHByLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IG1iLTIgcGwtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVzZXRfZmlsdGVyKClcIj5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhck1vZGFsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1oZWFkZXIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHRpY2tldExzdFRibCB0YWJsZS1yZXNwb25zaXZlIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFUTSBJRDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRvY2tldCBObzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPHRoIGNsYXNzPVwidHJ1bmNhdGVcIiB0aXRsZT1cIkVxdWlwbWVudCBEZXNjcmlwdGlvblwiPkVxdWlwbWVudCBEZXNjcmlwdGlvbjwvdGg+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DdXN0b2RpYW48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UYWcgVGltZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxhZyBUaW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q291bnRkb3duKERheXMgaGg6bW06c3MpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDx0aCBjbGFzcz1cInRydW5jYXRlXCIgdGl0bGU9XCJTdGF0dXMgRHVyaW5nIENvbXBsYWluXCI+U3RhdHVzIER1cmluZyBDb21wbGFpbjwvdGg+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIodGlja2V0LCB4KSBpbiBUaWNrZXRzLmRhdGFcIiA6a2V5PVwidGlja2V0LmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XCI+e3sgdGlja2V0LnRpY2tldF9ubyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidHJ1bmNhdGVcIiA6dGl0bGU9XCJ0aWNrZXQuc2l0ZV9uYW1lXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDE1MHB4O1wiPnt7IHRpY2tldC5zaXRlX25hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRydW5jYXRlXCI+e3sgdGlja2V0Lm1hY2hpbmUubWFjaGluZV9vcGVyYXRvcnMgIT0gbnVsbCA/IHRpY2tldC5tYWNoaW5lLm1hY2hpbmVfb3BlcmF0b3JzLm9wZXJhdG9yX25hbWUgOiAnJyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5tYWNoaW5lLm5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubWFjaGluZS5tYWNoaW5lX21vZGVsID8gdGlja2V0Lm1hY2hpbmUubWFjaGluZV9tb2RlbC5uYW1lIDogJy0nIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgQGNsaWNrPVwidmlld19zaXRlX2RldGFpbHModGlja2V0Lm1hY2hpbmUpXCI+e3sgdGlja2V0LmZhcl9ubyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2J5X25hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuY29tcGxhaW50X25hdHVyZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5zdGF0dXNfZHVyaW5nX2NvbXBsYWludCB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC50aWNrZXRfdHlwZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidHJ1bmNhdGVcIiA6dGl0bGU9XCJ0aWNrZXQucHJvYmxlbV9kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0aWNrZXQucHJvYmxlbV9kZXNjcmlwdGlvbj8gdGlja2V0LnByb2JsZW1fZGVzY3JpcHRpb246ICctJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInRpY2tldC5wcm9ibGVtcyAmJiB0aWNrZXQucHJvYmxlbXMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInRpY2tldC5wcm9ibGVtc1wiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiB0aWNrZXQucHJvYmxlbXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCIncCcgKyBpbmRleFwiIHYtaHRtbD1cIml0ZW0ucHJvYmxlbVwiPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuc3RhdHVzLnRvTG93ZXJDYXNlKCkgPT0gJ2NyZWF0ZWQgYnkgdXNlcicgPyAnT3BlbicgOiB0aWNrZXQuc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0cnVuY2F0ZVwiIDp0aXRsZT1cInRpY2tldC5zdGF0dXMgPT0gJ0Nsb3NlZCcgPyAnLScgOiB0aWNrZXQuY3VycmVudF9zdGFnZVwiPnt7IHRpY2tldC5zdGF0dXMgPT0gJ0Nsb3NlZCcgPyAnLScgOiB0aWNrZXQuY3VycmVudF9zdGFnZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidHJ1bmNhdGVcIiA6dGl0bGU9XCJ0aWNrZXQuc3RhdHVzID09ICdDbG9zZWQnID8gJy0nIDogdGlja2V0Lmxhc3Rfc3RhZ2UgPyB0aWNrZXQubGFzdF9zdGFnZS5zdGFnZV9kYXRlIDogJycgfCBteURhdGVcIj57eyB0aWNrZXQuc3RhdHVzID09ICdDbG9zZWQnID8gJy0nIDogdGlja2V0Lmxhc3Rfc3RhZ2UgPyB0aWNrZXQubGFzdF9zdGFnZS5zdGFnZV9kYXRlIDogJycgfCBteURhdGUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRydW5jYXRlXCIgOnRpdGxlPVwidGlja2V0LnN0YXR1cyAhPSAnQ2xvc2VkJyAmJiB0aWNrZXQubGFzdF9zdGFnZSA/IHRpY2tldC5sYXN0X3N0YWdlLmRlc2NyaXB0aW9uOictJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInRpY2tldC5zdGF0dXMgIT0gJ0Nsb3NlZCcgJiYgdGlja2V0Lmxhc3Rfc3RhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyB0aWNrZXQubGFzdF9zdGFnZS5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubWFjaGluZV9zdGF0dXMgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdGlja2V0LnJjYT90aWNrZXQucmNhOlwiLVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYXQgfCBteURhdGV9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5saWtlbHlfZGF0ZSB8IG15RGF0ZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5yZXZlcnNpb25fZGF0ZSB8IG15RGF0ZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidHJ1bmNhdGVcIiA6dGl0bGU9XCJ0aWNrZXQucmV2ZXJzaW9uX3JlYXNvblwiPnt7IHRpY2tldC5yZXZlcnNpb25fcmVhc29uIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmFjdHVhbF9kYXRlIHwgbXlEYXRlIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmFjdHVhbF9kYXRlID8gdGlja2V0LnRhdCA6ICctJyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7ICh0aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfY29zdCArIHRpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgKyB0aWNrZXQuYWRfZXN0aW1hdGVkX3NlcnZpY2VfY29zdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdG9DdXJyZW5jeSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7ICh0aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdCArIHRpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdCkgfCB0b0N1cnJlbmN5fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQucHJvZHVjdGlvbl9sb3NzX2Ftb3VudCB8IHRvQ3VycmVuY3kgfX08L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWJvZHkgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6ZGF0YT1cIlRpY2tldHNcIiA6bGltaXQ9XCIxMFwiIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVwiZ2V0UmVzdWx0c1wiPjwvcGFnaW5hdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8TWFjaGluZVBvcCBpZD1cIk1hY2hpbmVTaXRlTW9kYWwzXCIgOm1hY2hpbmU9XCJwbU1vZGFsRGF0YVwiIC8+XG4gICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vaW1wb3J0IFZ1ZVJlYWRNb3JlU21vb3RoIGZyb20gXCJ2dWUtcmVhZC1tb3JlLXNtb290aFwiO1xuaW1wb3J0IE11bHRpUmFuZ2VTbGlkZXIgZnJvbSBcIm11bHRpLXJhbmdlLXNsaWRlci12dWVcIjtcbmltcG9ydCBTaWRlYmFyTW9kYWwgZnJvbSAnLi9TaWRlQmFyTW9kYWwudnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk1hc3RlclJlcG9ydFwiLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgVnVlUmVhZE1vcmVTbW9vdGg6ICgpID0+IGltcG9ydCgndnVlLXJlYWQtbW9yZS1zbW9vdGgnKSxcbiAgICAgICAgTXVsdGlSYW5nZVNsaWRlcixTaWRlYmFyTW9kYWwsXG4gICAgICAgIE1hY2hpbmVQb3A6ICgpID0+IGltcG9ydCgnLi9NYWNoaW5lRmFyUG9wLnZ1ZScpLFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YWdlTW9yZTogW10sXG4gICAgICAgICAgICBhZGRpdGlvbmFsTW9yZTogW10sXG4gICAgICAgICAgICBwcm9ibGVtc01vcmU6IFtdLFxuICAgICAgICAgICAgcmNhTW9yZTogW10sXG4gICAgICAgICAgICBwbU1vZGFsRGF0YTogJycsXG4gICAgICAgICAgICBjcmVhdGVkX3VzZXJzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaF9tYWNoaW5lczogW10sXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2J5OiAnJyxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2Zyb206ICcnLFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfdG86ICcnLFxuICAgICAgICAgICAgICAgIHRhdF9mcm9tOiAnJyxcbiAgICAgICAgICAgICAgICB0YXRfdG86ICcnLFxuICAgICAgICAgICAgICAgIGNvbXBsYWludF9uYXR1cmU6ICcnLFxuICAgICAgICAgICAgICAgIHRpY2tldF90eXBlOiAnJyxcbiAgICAgICAgICAgICAgICB0aWNrZXQ6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICBzaXRlczogW10sXG4gICAgICAgICAgICBzZWxlY3RlZF9tYWNoaW5lOiAnJyxcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgICAgIG1hY2hpbmVzOiBbXSxcbiAgICAgICAgICAgIFRpY2tldHM6IHt9LFxuICAgICAgICAgICAgc2w6IDEsXG4gICAgICAgICAgICBqc29uX2ZpZWxkczoge1xuICAgICAgICAgICAgICAgIFwiU2wgTm9cIjoge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2wrKztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdTaXRlIG5hbWUnOiAnc2l0ZV9uYW1lJyxcbiAgICAgICAgICAgICAgICAnT3BlcmF0b3IgbmFtZSc6ICdvcGVyYXRvcl9uYW1lJyxcbiAgICAgICAgICAgICAgICAnRXF1aXBtZW50IERlc2NyaXB0aW9uJzogJ21hY2hpbmVfbmFtZScsXG4gICAgICAgICAgICAgICAgJ0ZBUiBObyc6ICdmYXJfbm8nLFxuICAgICAgICAgICAgICAgICdDb21wbGFpbnQgTm8nOiAndGlja2V0X25vJyxcbiAgICAgICAgICAgICAgICAnQ29tcGxhaW50IGRhdGUnOiBcImNyZWF0ZWRfYXRcIixcbiAgICAgICAgICAgICAgICAnQ29tcGxhaW50IFJhaXNlZCBCeSc6ICdjcmVhdGVkX2J5X25hbWUnLFxuICAgICAgICAgICAgICAgICdDb21wbGFpbnQgTmF0dXJlJzogJ2NvbXBsYWludF9uYXR1cmUnLFxuICAgICAgICAgICAgICAgICdTdGF0dXMgRHVyaW5nIENvbXBsYWludCc6ICdzdGF0dXNfZHVyaW5nX2NvbXBsYWludCcsXG4gICAgICAgICAgICAgICAgJ1Byb2JsZW0gZGVzY3JpcHRpb24nOiAncHJvYmxlbV9kZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgJ0FkZGl0aW9uYWwgUHJvYmxlbSc6IHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwicHJvYmxlbXNcIixcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IChwcm9ibGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ibGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcHJvYmxlbS5tYXAodmFsdWUgPT4gdmFsdWUucHJvYmxlbSkuam9pbihcIlxcclxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIkN1cnJlbnQgU3RhdHVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwic3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdHVzLnRvTG93ZXJDYXNlKCkgPT0gJ2NyZWF0ZWQgYnkgdXNlcicgPyAnT3BlbicgOiBzdGF0dXM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIkN1cnJlbnQgU3RhZ2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJsYXN0X3N0YWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLmRlc2NyaXB0aW9uIDogJy0nO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJTdGF0dXMgUG9zdCBSZXNvbHV0aW9uXCI6ICdtYWNoaW5lX3N0YXR1cycsXG4gICAgICAgICAgICAgICAgJ0V4cGVjdGVkIFJlc29sdXRpb24gZGF0ZSc6ICdsaWtlbHlfZGF0ZScsXG4gICAgICAgICAgICAgICAgJ1JldmlzZWQgRXhwZWN0ZWQgZGF0ZSc6ICdyZXZlcnNpb25fZGF0ZScsXG4gICAgICAgICAgICAgICAgJ1JlYXNvbiBmb3IgZGF0ZSBSZXZpc2lvbic6ICdyZXZlcnNpb25fcmVhc29uJyxcbiAgICAgICAgICAgICAgICAnQWN0dWFsIFJlc29sdmUgRGF0ZSc6ICdhY3R1YWxfZGF0ZScsXG4gICAgICAgICAgICAgICAgJ1RBVCc6ICd0YXQnLFxuICAgICAgICAgICAgICAgICdFc3RpbWF0ZWQgQ29zdCc6ICdlc3RpbWF0ZWRfY29zdCcsXG4gICAgICAgICAgICAgICAgJ0FjdHVhbCBDb3N0JzogJ2FjdHVhbF9jb3N0JyxcbiAgICAgICAgICAgICAgICAnUHJvZHVjdGlvbiBMb3NzJzogJ3Byb2R1Y3Rpb25fbG9zc19hbW91bnQnLFxuICAgICAgICAgICAgICAgICdSQ0EnOiAncmNhJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGpzb25fbWV0YTogW1xuICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjaGFyc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInV0Zi04XCIsXG4gICAgICAgICAgICAgICAgfSxdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHNsOiAwLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9wZW5TaWRlTW9kYWwoKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnNpZGViYXJNb2RhbC5vcGVuU2lkZU1vZGFsKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlU2lkZU1vZGFsKCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5zaWRlYmFyTW9kYWwuY2xvc2VTaWRlTW9kYWwoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdmlld19zaXRlX2RldGFpbHMoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wbU1vZGFsRGF0YSA9IGRhdGFcbiAgICAgICAgICAgICQoJyNNYWNoaW5lU2l0ZU1vZGFsMycpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0X2ZpbHRlcigpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoID0ge1xuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9ieTogJycsXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9mcm9tOiAnJyxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX3RvOiAnJyxcbiAgICAgICAgICAgICAgICB0YXRfZnJvbTogXCJcIixcbiAgICAgICAgICAgICAgICB0YXRfdG86IFwiXCIsXG4gICAgICAgICAgICAgICAgY29tcGxhaW50X25hdHVyZTogJycsXG4gICAgICAgICAgICAgICAgdGlja2V0X3R5cGU6ICcnLFxuICAgICAgICAgICAgICAgIHRpY2tldDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2V0UmVzdWx0cygpXG4gICAgICAgIH0sXG4gICAgICAgIFVwZGF0ZVZhbHVlcyhlKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50YXRfZnJvbSA9IGUubWluVmFsdWU7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50YXRfdG8gPSBlLm1heFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICAvLyBleGNlbFxuICAgICAgICBhc3luYyBleHBvcnRfY3N2KCkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2FwaS90aWNrZXQvZXhwb3J0Jywge1xuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2FwaS90aWNrZXQvZXhwb3J0Jyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBzdGFydERvd25sb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5zbCA9IDE7XG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxlYXNlIFdhaXQgIScsXG4gICAgICAgICAgICAgICAgaHRtbDogJ0RhdGEgcG9wdWxhdGluZycsIC8vIGFkZCBodG1sIGF0dHJpYnV0ZSBpZiB5b3Ugd2FudCBvciByZW1vdmVcbiAgICAgICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25CZWZvcmVPcGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFN3YWwuc2hvd0xvYWRpbmcoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluaXNoRG93bmxvYWQoKSB7XG4gICAgICAgICAgICBTd2FsLmNsb3NlKClcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRMYWJlbCh2YWwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZmFyX25vICsgJyAtICcgKyB2YWwubmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmVzdWx0cyhwYWdlID0gMSkge1xuICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5wYWdlID0gcGFnZVxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2NvbXBsYWludC9saXN0LzEnLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxuICAgICAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YT09PT1cIixkYXRhKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuVGlja2V0cyA9IGRhdGEuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbXNNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFnZU1vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJjYU1vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjbG9hZGVyZC5oaWRlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBsb2FkVGlja2V0cygpIHtcbiAgICAgICAgICAgIGxldCBjbG9hZGVyZCA9IHRoaXMuJGxvYWRpbmcuc2hvdygpO1xuICAgICAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9jb21wbGFpbnQvbGlzdC8xXCIsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMuc2VhcmNoXG4gICAgICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5UaWNrZXRzID0gZGF0YS5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtc01vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWdlTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucmNhTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlYWRfbW9yZSh4LCBwID0gJycpIHtcbiAgICAgICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHAgPT0gJ3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhID0gdGhpcy5zdGFnZU1vcmVbeF0gPyBmYWxzZSA6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuc3RhZ2VNb3JlLCB4LCBhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHAgPT0gJ3JjJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMucmNhTW9yZVt4XSA/IGZhbHNlIDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5yY2FNb3JlLCB4LCBhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMucHJvYmxlbXNNb3JlW3hdID8gZmFsc2UgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnByb2JsZW1zTW9yZSwgeCwgYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMuYWRkaXRpb25hbE1vcmVbeF0gPyBmYWxzZSA6IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5hZGRpdGlvbmFsTW9yZSwgeCwgYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkVGlja2V0cygpO1xuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICBheGlvcy5nZXQoXCJhcGkvY29tcGxhaW50L2xpc3QvMVwiKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuQ2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaXRlcyA9IHJlcy5kYXRhLmRhdGEuc2l0ZXM7XG4gICAgICAgICAgICB9KVxuICAgICAgICBheGlvcy5nZXQoXCIvYXBpL2NvbXBsYWludC9saXN0LzFcIikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnZlbmRvcnM7XG4gICAgICAgICAgICB0aGlzLm1hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zaXRlcztcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlZF91c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5jcmVhdGVkX3VzZXJzO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oJ09oLiBTb21ldGhpbmcgd2VudCB3cm9uZycpKTtcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGFzeW5jICdmb3JtLnN1Yl9jYXRlZ29yeV9pZCcobiwgbykge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc2l0ZV9pZCcobiwgbykge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAnZm9ybS5jYXRlZ29yeV9pZCc6IHtcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuLCBvKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvY29tcGxhaW50L2xpc3QvMS9cIiArIG4pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWVcbiAgICAgICAgfSxcblxuICAgIH0sXG59XG48L3NjcmlwdD5cbjxzdHlsZT5cbi5ybW9yZSB7XG4gICAgY29sb3I6IGJsdWU7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLW1vZGFsXCIgOmNsYXNzPVwieyAnYWN0aXZlJzogaXNPcGVuIH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlXCIgQGNsaWNrPVwiY2xvc2VTaWRlTW9kYWxcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3R5bGU9XCJmb250LXNpemU6IDE3cHg7Y29sb3I6IGJsYWNrO1wiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPCEtLSBDb250ZW50IG9mIHRoZSBzaWRlYmFyIG1vZGFsIC0tPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgQGNsaWNrPVwiY2xvc2VTaWRlTW9kYWxcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbiAgXG4gIDxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9wZW5TaWRlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBjbG9zZVNpZGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgPC9zY3JpcHQ+XG4gIFxuICA8c3R5bGUgc2NvcGVkPlxuICAuY2xvc2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIGhlaWdodDogMzNweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB9XG4gIC5zaWRlYmFyLW1vZGFsIHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogNDUwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICBcbiAgLnNpZGViYXItbW9kYWwuYWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG4gIFxuICAuc2lkZWJhci1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxuICA8L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY2xvc2VbZGF0YS12LTQ2MWE0NTg5XXtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMzNweDtcXG4gIGhlaWdodDogMzNweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuLnNpZGViYXItbW9kYWxbZGF0YS12LTQ2MWE0NTg5XSB7XFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDQ1MHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5zaWRlYmFyLW1vZGFsLmFjdGl2ZVtkYXRhLXYtNDYxYTQ1ODldIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuLnNpZGViYXItY29udGVudFtkYXRhLXYtNDYxYTQ1ODldIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5zaWRlYmFyLW92ZXJsYXlbZGF0YS12LTQ2MWE0NTg5XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9zdWphbi9EZXNrdG9wL1dvcmsvcHJvamVjdCBmcmVlbGFuY2UvU2Fua2hhL2F0bV9wcm9qL2F0bS9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9TaWRlQmFyTW9kYWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4QkE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtDQUNBO0FBQ0E7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQSxDQUFBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7Q0FDQTtBQUVBO0VBQ0EseUJBQUE7Q0FDQTtBQUVBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0NBQ0E7QUFFQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0NBQ0FcIixcImZpbGVcIjpcIlNpZGVCYXJNb2RhbC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaWRlYmFyLW1vZGFsXFxcIiA6Y2xhc3M9XFxcInsgJ2FjdGl2ZSc6IGlzT3BlbiB9XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2xvc2VcXFwiIEBjbGljaz1cXFwiY2xvc2VTaWRlTW9kYWxcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aW1lc1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIHN0eWxlPVxcXCJmb250LXNpemU6IDE3cHg7Y29sb3I6IGJsYWNrO1xcXCI+PC9pPjwvYnV0dG9uPlxcbiAgICAgICAgPCEtLSBDb250ZW50IG9mIHRoZSBzaWRlYmFyIG1vZGFsIC0tPlxcbiAgICAgICAgPHNsb3Q+PC9zbG90PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgQGNsaWNrPVxcXCJjbG9zZVNpZGVNb2RhbFxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC90ZW1wbGF0ZT5cXG4gIFxcbiAgPHNjcmlwdD5cXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgZGF0YSgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcXG4gICAgICB9O1xcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBvcGVuU2lkZU1vZGFsKCkge1xcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xcbiAgICAgIH0sXFxuICAgICAgY2xvc2VTaWRlTW9kYWwoKSB7XFxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xcbiAgICAgIH0sXFxuICAgIH0sXFxuICB9O1xcbiAgPC9zY3JpcHQ+XFxuICBcXG4gIDxzdHlsZSBzY29wZWQ+XFxuICAuY2xvc2V7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMzNweDtcXG4gICAgaGVpZ2h0OiAzM3B4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIH1cXG4gIC5zaWRlYmFyLW1vZGFsIHtcXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB3aWR0aDogNDUwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gIH1cXG4gIFxcbiAgLnNpZGViYXItbW9kYWwuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgXFxuICAuc2lkZWJhci1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAuc2lkZWJhci1vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIH1cXG4gIDwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucm1vcmUge1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL3N1amFuL0Rlc2t0b3AvV29yay9wcm9qZWN0IGZyZWVsYW5jZS9TYW5raGEvYXRtX3Byb2ovYXRtL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludExpc3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnZ0JBO0lBQ0EsWUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJDb21wbGFpbnRMaXN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5NYXN0ZXIgUmVwb3J0PC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC10b29sc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZG93bmxvYWQtZXhjZWwgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXByaW1hcnlcXFwiIDpmZXRjaD1cXFwiZXhwb3J0X2NzdlxcXCIgOmZpZWxkcz1cXFwianNvbl9maWVsZHNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmJlZm9yZS1nZW5lcmF0ZT1cXFwic3RhcnREb3dubG9hZFxcXCIgOmJlZm9yZS1maW5pc2g9XFxcImZpbmlzaERvd25sb2FkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldD1cXFwiTXkgV29ya3NoZWV0XFxcIiB0eXBlPVxcXCJjc3ZcXFwiIG5hbWU9XFxcIm1hc3Rlcl9yZXBvcnQuY3N2XFxcIiB2LWlmPVxcXCIkZ2F0ZS5oYXNQZXJtaXNzaW9uKCdjYW5fZG93bmxvYWRfbWFzdGVyX3JlcG9ydCcpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHBvcnQgQ1NWPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kb3dubG9hZC1leGNlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLWJsdWVcXFwiIEBjbGljaz1cXFwib3BlblNpZGVNb2RhbFxcXCI+PGlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZmEgZmEtc2xpZGVycy1oIG1yLTJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IEZpbHRlcjwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lkZWJhck1vZGFsIHJlZj1cXFwic2lkZWJhck1vZGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBDb250ZW50IG9mIHRoZSBzaWRlYmFyIG1vZGFsIGdvZXMgaGVyZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzPVxcXCJmYSBmYS1zbGlkZXJzLWggbXItMlxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIHN0eWxlPVxcXCJmb250LXNpemU6IDIycHg7XFxcIj48L2k+IEZpbHRlclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBAc3VibWl0LnByZXZlbnQ9XFxcImdldFJlc3VsdHMoKVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1hdXRvIGNvbC1jdXN0b21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJtYWNoaW5lX2lkXFxcIj5GQVIgTm88L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOmdldC1vcHRpb24tbGFiZWw9XFxcImdldExhYmVsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwic2VhcmNoX21hY2hpbmVzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkVudGVyIG1hY2hpbmVzIC4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLm1hY2hpbmVfaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJtYWNoaW5lX2lkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtYXV0byBjb2wtY3VzdG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibWFjaGluZV9pZFxcXCI+U2VhcmNoIFRpY2tldDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB0aWNrZXQgLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2gudGlja2V0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwidGlja2V0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtYXV0byBjb2wtY3VzdG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibWFjaGluZV9pZFxcXCI+U2VsZWN0IFNpdGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwic2l0ZV9uYW1lXFxcIiA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwic2VhcmNoX3NpdGVzXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IFNpdGUuLi5cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2guc2l0ZV9pZFxcXCIgbmFtZT1cXFwic2l0ZV9pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWF1dG8gY29sLWN1c3RvbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1hY2hpbmVfaWRcXFwiPlNlbGVjdCBTdGF0dXM8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwic2l0ZV9uYW1lXFxcIiA6b3B0aW9ucz1cXFwiWydPcGVuJywgJ0Nsb3NlZCddXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlNlbGVjdCBTdGF0dXMuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5zdGF0dXNcXFwiIG5hbWU9XFxcInN0YXR1c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWF1dG8gY29sLWN1c3RvbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1hY2hpbmVfaWRcXFwiPkNyZWF0ZWQgYnk8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOm9wdGlvbnM9XFxcImNyZWF0ZWRfdXNlcnNcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJDcmVhdGVkIGJ5Li4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guY3JlYXRlZF9ieVxcXCIgbmFtZT1cXFwiY3JlYXRlZF9ieVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWF1dG8gY29sLWN1c3RvbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1hY2hpbmVfaWRcXFwiPlRpY2tldCBUeXBlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcIm5hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwiWydQZXJpb2RpYyBNYWludGVuYW5jZScsICdCcmVha2Rvd24gTWFpbnRlbmFuY2UnXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJUaWNrZXQgVHlwZS4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnRpY2tldF90eXBlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwidGlja2V0X3R5cGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1hdXRvIGNvbC1jdXN0b21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJtYWNoaW5lX2lkXFxcIj5Gcm9tIERhdGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVxcXCJBc2lhL0tvbGthdGFcXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5jcmVhdGVkX2Zyb21cXFwiIGlucHV0LWNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJEYXRlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1hdXRvIGNvbC1jdXN0b21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJtYWNoaW5lX2lkXFxcIj5UbyBEYXRlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdmFsdWUtem9uZT1cXFwiQXNpYS9Lb2xrYXRhXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guY3JlYXRlZF90b1xcXCIgaW5wdXQtY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkRhdGVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWF1dG8gY29sLWN1c3RvbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1hY2hpbmVfaWRcXFwiPlRBVCBGcm9tPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiVEFUIEZyb20gLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2gudGF0X2Zyb21cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtYXV0byBjb2wtY3VzdG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibWFjaGluZV9pZFxcXCI+VEFUIFRvPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiVEFUIFRvIC4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnRhdF90b1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1hdXRvIGNvbC1jdXN0b21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJtYWNoaW5lX2lkXFxcIj5Db21wbGFpbnQgbmF0dXJlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInNpdGVfbmFtZVxcXCIgOm9wdGlvbnM9XFxcIlsnTWFqb3InLCAnTWlub3InXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTZWxlY3QgQ29tcGxhaW50IE5hdHVyZS4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmNvbXBsYWludF9uYXR1cmVcXFwiIG5hbWU9XFxcImNvbXBsYWludF9uYXR1cmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuXFxuXFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02IG1iLTIgcHItMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1xcXCI+U2VhcmNoPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgbWItMiBwbC0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInJlc2V0X2ZpbHRlcigpXFxcIj5SZXNldDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NpZGViYXJNb2RhbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1oZWFkZXIgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRpY2tldExzdFRibCB0YWJsZS1yZXNwb25zaXZlIHAtMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtaG92ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPVxcXCJkaXNwbGF5OiBub25lO1xcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFUTSBJRDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Eb2NrZXQgTm88L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPHRoIGNsYXNzPVxcXCJ0cnVuY2F0ZVxcXCIgdGl0bGU9XFxcIkVxdWlwbWVudCBEZXNjcmlwdGlvblxcXCI+RXF1aXBtZW50IERlc2NyaXB0aW9uPC90aD4gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DdXN0b2RpYW48L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGFnIFRpbWU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGFnIFRpbWU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q291bnRkb3duKERheXMgaGg6bW06c3MpPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8dGggY2xhc3M9XFxcInRydW5jYXRlXFxcIiB0aXRsZT1cXFwiU3RhdHVzIER1cmluZyBDb21wbGFpblxcXCI+U3RhdHVzIER1cmluZyBDb21wbGFpbjwvdGg+IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XFxcIih0aWNrZXQsIHgpIGluIFRpY2tldHMuZGF0YVxcXCIgOmtleT1cXFwidGlja2V0LmlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJkaXNwbGF5OiBub25lO1xcXCI+PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xcXCI+e3sgdGlja2V0LnRpY2tldF9ubyB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidHJ1bmNhdGVcXFwiIDp0aXRsZT1cXFwidGlja2V0LnNpdGVfbmFtZVxcXCIgc3R5bGU9XFxcIm1heC13aWR0aDogMTUwcHg7XFxcIj57eyB0aWNrZXQuc2l0ZV9uYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0cnVuY2F0ZVxcXCI+e3sgdGlja2V0Lm1hY2hpbmUubWFjaGluZV9vcGVyYXRvcnMgIT0gbnVsbCA/IHRpY2tldC5tYWNoaW5lLm1hY2hpbmVfb3BlcmF0b3JzLm9wZXJhdG9yX25hbWUgOiAnJyB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubWFjaGluZS5uYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5tYWNoaW5lLm1hY2hpbmVfbW9kZWwgPyB0aWNrZXQubWFjaGluZS5tYWNoaW5lX21vZGVsLm5hbWUgOiAnLScgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIEBjbGljaz1cXFwidmlld19zaXRlX2RldGFpbHModGlja2V0Lm1hY2hpbmUpXFxcIj57eyB0aWNrZXQuZmFyX25vIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2J5X25hbWUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNvbXBsYWludF9uYXR1cmUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnN0YXR1c19kdXJpbmdfY29tcGxhaW50IH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC50aWNrZXRfdHlwZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidHJ1bmNhdGVcXFwiIDp0aXRsZT1cXFwidGlja2V0LnByb2JsZW1fZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdGlja2V0LnByb2JsZW1fZGVzY3JpcHRpb24/IHRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uOiAnLScgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcInRpY2tldC5wcm9ibGVtcyAmJiB0aWNrZXQucHJvYmxlbXMubGVuZ3RoID4gMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cXFwidGlja2V0LnByb2JsZW1zXFxcIiB2LWZvcj1cXFwiKGl0ZW0sIGluZGV4KSBpbiB0aWNrZXQucHJvYmxlbXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcIidwJyArIGluZGV4XFxcIiB2LWh0bWw9XFxcIml0ZW0ucHJvYmxlbVxcXCI+PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5zdGF0dXMudG9Mb3dlckNhc2UoKSA9PSAnY3JlYXRlZCBieSB1c2VyJyA/ICdPcGVuJyA6IHRpY2tldC5zdGF0dXNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidHJ1bmNhdGVcXFwiIDp0aXRsZT1cXFwidGlja2V0LnN0YXR1cyA9PSAnQ2xvc2VkJyA/ICctJyA6IHRpY2tldC5jdXJyZW50X3N0YWdlXFxcIj57eyB0aWNrZXQuc3RhdHVzID09ICdDbG9zZWQnID8gJy0nIDogdGlja2V0LmN1cnJlbnRfc3RhZ2UgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRydW5jYXRlXFxcIiA6dGl0bGU9XFxcInRpY2tldC5zdGF0dXMgPT0gJ0Nsb3NlZCcgPyAnLScgOiB0aWNrZXQubGFzdF9zdGFnZSA/IHRpY2tldC5sYXN0X3N0YWdlLnN0YWdlX2RhdGUgOiAnJyB8IG15RGF0ZVxcXCI+e3sgdGlja2V0LnN0YXR1cyA9PSAnQ2xvc2VkJyA/ICctJyA6IHRpY2tldC5sYXN0X3N0YWdlID8gdGlja2V0Lmxhc3Rfc3RhZ2Uuc3RhZ2VfZGF0ZSA6ICcnIHwgbXlEYXRlIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0cnVuY2F0ZVxcXCIgOnRpdGxlPVxcXCJ0aWNrZXQuc3RhdHVzICE9ICdDbG9zZWQnICYmIHRpY2tldC5sYXN0X3N0YWdlID8gdGlja2V0Lmxhc3Rfc3RhZ2UuZGVzY3JpcHRpb246Jy0nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJ0aWNrZXQuc3RhdHVzICE9ICdDbG9zZWQnICYmIHRpY2tldC5sYXN0X3N0YWdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgdGlja2V0Lmxhc3Rfc3RhZ2UuZGVzY3JpcHRpb24gfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lm1hY2hpbmVfc3RhdHVzIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdGlja2V0LnJjYT90aWNrZXQucmNhOlxcXCItXFxcIiB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYXQgfCBteURhdGV9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubGlrZWx5X2RhdGUgfCBteURhdGUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnJldmVyc2lvbl9kYXRlIHwgbXlEYXRlIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0cnVuY2F0ZVxcXCIgOnRpdGxlPVxcXCJ0aWNrZXQucmV2ZXJzaW9uX3JlYXNvblxcXCI+e3sgdGlja2V0LnJldmVyc2lvbl9yZWFzb24gfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmFjdHVhbF9kYXRlIHwgbXlEYXRlIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5hY3R1YWxfZGF0ZSA/IHRpY2tldC50YXQgOiAnLScgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgKHRpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICsgdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgKyB0aWNrZXQuYWRfZXN0aW1hdGVkX3NlcnZpY2VfY29zdClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRvQ3VycmVuY3kgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgKHRpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0ICsgdGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0KSB8IHRvQ3VycmVuY3l9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnQgfCB0b0N1cnJlbmN5IH19PC90ZD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1ib2R5IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhZ2luYXRpb24gOmRhdGE9XFxcIlRpY2tldHNcXFwiIDpsaW1pdD1cXFwiMTBcXFwiIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVxcXCJnZXRSZXN1bHRzXFxcIj48L3BhZ2luYXRpb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcblxcbiAgICAgICAgPE1hY2hpbmVQb3AgaWQ9XFxcIk1hY2hpbmVTaXRlTW9kYWwzXFxcIiA6bWFjaGluZT1cXFwicG1Nb2RhbERhdGFcXFwiIC8+XFxuICAgIDwvc2VjdGlvbj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuLy9pbXBvcnQgVnVlUmVhZE1vcmVTbW9vdGggZnJvbSBcXFwidnVlLXJlYWQtbW9yZS1zbW9vdGhcXFwiO1xcbmltcG9ydCBNdWx0aVJhbmdlU2xpZGVyIGZyb20gXFxcIm11bHRpLXJhbmdlLXNsaWRlci12dWVcXFwiO1xcbmltcG9ydCBTaWRlYmFyTW9kYWwgZnJvbSAnLi9TaWRlQmFyTW9kYWwudnVlJztcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6IFxcXCJNYXN0ZXJSZXBvcnRcXFwiLFxcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICBWdWVSZWFkTW9yZVNtb290aDogKCkgPT4gaW1wb3J0KCd2dWUtcmVhZC1tb3JlLXNtb290aCcpLFxcbiAgICAgICAgTXVsdGlSYW5nZVNsaWRlcixTaWRlYmFyTW9kYWwsXFxuICAgICAgICBNYWNoaW5lUG9wOiAoKSA9PiBpbXBvcnQoJy4vTWFjaGluZUZhclBvcC52dWUnKSxcXG4gICAgfSxcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgc3RhZ2VNb3JlOiBbXSxcXG4gICAgICAgICAgICBhZGRpdGlvbmFsTW9yZTogW10sXFxuICAgICAgICAgICAgcHJvYmxlbXNNb3JlOiBbXSxcXG4gICAgICAgICAgICByY2FNb3JlOiBbXSxcXG4gICAgICAgICAgICBwbU1vZGFsRGF0YTogJycsXFxuICAgICAgICAgICAgY3JlYXRlZF91c2VyczogW10sXFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxcbiAgICAgICAgICAgIHNlYXJjaDoge1xcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJycsXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYnk6ICcnLFxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2Zyb206ICcnLFxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX3RvOiAnJyxcXG4gICAgICAgICAgICAgICAgdGF0X2Zyb206ICcnLFxcbiAgICAgICAgICAgICAgICB0YXRfdG86ICcnLFxcbiAgICAgICAgICAgICAgICBjb21wbGFpbnRfbmF0dXJlOiAnJyxcXG4gICAgICAgICAgICAgICAgdGlja2V0X3R5cGU6ICcnLFxcbiAgICAgICAgICAgICAgICB0aWNrZXQ6ICcnXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXFxuICAgICAgICAgICAgc2l0ZXM6IFtdLFxcbiAgICAgICAgICAgIHNlbGVjdGVkX21hY2hpbmU6ICcnLFxcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXFxuICAgICAgICAgICAgVGlja2V0czoge30sXFxuICAgICAgICAgICAgc2w6IDEsXFxuICAgICAgICAgICAganNvbl9maWVsZHM6IHtcXG4gICAgICAgICAgICAgICAgXFxcIlNsIE5vXFxcIjoge1xcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zbCsrO1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgJ1NpdGUgbmFtZSc6ICdzaXRlX25hbWUnLFxcbiAgICAgICAgICAgICAgICAnT3BlcmF0b3IgbmFtZSc6ICdvcGVyYXRvcl9uYW1lJyxcXG4gICAgICAgICAgICAgICAgJ0VxdWlwbWVudCBEZXNjcmlwdGlvbic6ICdtYWNoaW5lX25hbWUnLFxcbiAgICAgICAgICAgICAgICAnRkFSIE5vJzogJ2Zhcl9ubycsXFxuICAgICAgICAgICAgICAgICdDb21wbGFpbnQgTm8nOiAndGlja2V0X25vJyxcXG4gICAgICAgICAgICAgICAgJ0NvbXBsYWludCBkYXRlJzogXFxcImNyZWF0ZWRfYXRcXFwiLFxcbiAgICAgICAgICAgICAgICAnQ29tcGxhaW50IFJhaXNlZCBCeSc6ICdjcmVhdGVkX2J5X25hbWUnLFxcbiAgICAgICAgICAgICAgICAnQ29tcGxhaW50IE5hdHVyZSc6ICdjb21wbGFpbnRfbmF0dXJlJyxcXG4gICAgICAgICAgICAgICAgJ1N0YXR1cyBEdXJpbmcgQ29tcGxhaW50JzogJ3N0YXR1c19kdXJpbmdfY29tcGxhaW50JyxcXG4gICAgICAgICAgICAgICAgJ1Byb2JsZW0gZGVzY3JpcHRpb24nOiAncHJvYmxlbV9kZXNjcmlwdGlvbicsXFxuICAgICAgICAgICAgICAgICdBZGRpdGlvbmFsIFByb2JsZW0nOiB7XFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXFxcInByb2JsZW1zXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAocHJvYmxlbSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXQgPSAnJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ibGVtKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHByb2JsZW0ubWFwKHZhbHVlID0+IHZhbHVlLnByb2JsZW0pLmpvaW4oXFxcIlxcXFxyXFxcXG5cXFwiKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIFxcXCJDdXJyZW50IFN0YXR1c1xcXCI6IHtcXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcXFwic3RhdHVzXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoc3RhdHVzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXR1cy50b0xvd2VyQ2FzZSgpID09ICdjcmVhdGVkIGJ5IHVzZXInID8gJ09wZW4nIDogc3RhdHVzO1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgXFxcIkN1cnJlbnQgU3RhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXFxcImxhc3Rfc3RhZ2VcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLmRlc2NyaXB0aW9uIDogJy0nO1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgXFxcIlN0YXR1cyBQb3N0IFJlc29sdXRpb25cXFwiOiAnbWFjaGluZV9zdGF0dXMnLFxcbiAgICAgICAgICAgICAgICAnRXhwZWN0ZWQgUmVzb2x1dGlvbiBkYXRlJzogJ2xpa2VseV9kYXRlJyxcXG4gICAgICAgICAgICAgICAgJ1JldmlzZWQgRXhwZWN0ZWQgZGF0ZSc6ICdyZXZlcnNpb25fZGF0ZScsXFxuICAgICAgICAgICAgICAgICdSZWFzb24gZm9yIGRhdGUgUmV2aXNpb24nOiAncmV2ZXJzaW9uX3JlYXNvbicsXFxuICAgICAgICAgICAgICAgICdBY3R1YWwgUmVzb2x2ZSBEYXRlJzogJ2FjdHVhbF9kYXRlJyxcXG4gICAgICAgICAgICAgICAgJ1RBVCc6ICd0YXQnLFxcbiAgICAgICAgICAgICAgICAnRXN0aW1hdGVkIENvc3QnOiAnZXN0aW1hdGVkX2Nvc3QnLFxcbiAgICAgICAgICAgICAgICAnQWN0dWFsIENvc3QnOiAnYWN0dWFsX2Nvc3QnLFxcbiAgICAgICAgICAgICAgICAnUHJvZHVjdGlvbiBMb3NzJzogJ3Byb2R1Y3Rpb25fbG9zc19hbW91bnQnLFxcbiAgICAgICAgICAgICAgICAnUkNBJzogJ3JjYSdcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGpzb25fbWV0YTogW1xcbiAgICAgICAgICAgICAgICBbe1xcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcXFwiY2hhcnNldFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXFxcInV0Zi04XFxcIixcXG4gICAgICAgICAgICAgICAgfSxdLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgc2w6IDAsXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIG9wZW5TaWRlTW9kYWwoKSB7XFxuICAgICAgICAgICAgdGhpcy4kcmVmcy5zaWRlYmFyTW9kYWwub3BlblNpZGVNb2RhbCgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNsb3NlU2lkZU1vZGFsKCkge1xcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuc2lkZWJhck1vZGFsLmNsb3NlU2lkZU1vZGFsKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgdmlld19zaXRlX2RldGFpbHMoZGF0YSkge1xcbiAgICAgICAgICAgIHRoaXMucG1Nb2RhbERhdGEgPSBkYXRhXFxuICAgICAgICAgICAgJCgnI01hY2hpbmVTaXRlTW9kYWwzJykubW9kYWwoJ3Nob3cnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICByZXNldF9maWx0ZXIoKSB7XFxuICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSB7XFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6ICcnLFxcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9ieTogJycsXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfZnJvbTogJycsXFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfdG86ICcnLFxcbiAgICAgICAgICAgICAgICB0YXRfZnJvbTogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHRhdF90bzogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIGNvbXBsYWludF9uYXR1cmU6ICcnLFxcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTogJycsXFxuICAgICAgICAgICAgICAgIHRpY2tldDogJydcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgdGhpcy5nZXRSZXN1bHRzKClcXG4gICAgICAgIH0sXFxuICAgICAgICBVcGRhdGVWYWx1ZXMoZSkge1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRhdF9mcm9tID0gZS5taW5WYWx1ZTtcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50YXRfdG8gPSBlLm1heFZhbHVlO1xcbiAgICAgICAgfSxcXG4gICAgICAgIC8vIGV4Y2VsXFxuICAgICAgICBhc3luYyBleHBvcnRfY3N2KCkge1xcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdhcGkvdGlja2V0L2V4cG9ydCcsIHtcXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdhcGkvdGlja2V0L2V4cG9ydCcpO1xcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XFxuICAgICAgICB9LFxcbiAgICAgICAgc3RhcnREb3dubG9hZCgpIHtcXG4gICAgICAgICAgICB0aGlzLnNsID0gMTtcXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBXYWl0ICEnLFxcbiAgICAgICAgICAgICAgICBodG1sOiAnRGF0YSBwb3B1bGF0aW5nJywgLy8gYWRkIGh0bWwgYXR0cmlidXRlIGlmIHlvdSB3YW50IG9yIHJlbW92ZVxcbiAgICAgICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogZmFsc2UsXFxuICAgICAgICAgICAgICAgIG9uQmVmb3JlT3BlbjogKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5zaG93TG9hZGluZygpXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZmluaXNoRG93bmxvYWQoKSB7XFxuICAgICAgICAgICAgU3dhbC5jbG9zZSgpXFxuICAgICAgICB9LFxcblxcbiAgICAgICAgZ2V0TGFiZWwodmFsKSB7XFxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZmFyX25vICsgJyAtICcgKyB2YWwubmFtZTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBnZXRSZXN1bHRzKHBhZ2UgPSAxKSB7XFxuICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KCk7XFxuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZSA9IHBhZ2VcXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvY29tcGxhaW50L2xpc3QvMScsIHtcXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxcbiAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcImRhdGE9PT09XFxcIixkYXRhKTtcXG5cXG4gICAgICAgICAgICAgICAgdGhpcy5UaWNrZXRzID0gZGF0YS5kYXRhLmRhdGFcXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xcbiAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW1zTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWdlTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xcbiAgICAgICAgICAgICAgICB0aGlzLnJjYU1vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcXG4gICAgICAgICAgICAgICAgY2xvYWRlcmQuaGlkZSgpO1xcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgbG9hZFRpY2tldHMoKSB7XFxuICAgICAgICAgICAgbGV0IGNsb2FkZXJkID0gdGhpcy4kbG9hZGluZy5zaG93KCk7XFxuICAgICAgICAgICAgYXhpb3MuZ2V0KFxcXCIvYXBpL2NvbXBsYWludC9saXN0LzFcXFwiLCB7XFxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2hcXG4gICAgICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuVGlja2V0cyA9IGRhdGEuZGF0YS5kYXRhXFxuICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbE1vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtc01vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFnZU1vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5yY2FNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XFxuICAgICAgICAgICAgICAgIGNsb2FkZXJkLmhpZGUoKTtcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgfSxcXG4gICAgICAgIHJlYWRfbW9yZSh4LCBwID0gJycpIHtcXG4gICAgICAgICAgICBpZiAocCkge1xcbiAgICAgICAgICAgICAgICBpZiAocCA9PSAncycpIHtcXG4gICAgICAgICAgICAgICAgICAgIGxldCBhID0gdGhpcy5zdGFnZU1vcmVbeF0gPyBmYWxzZSA6IHRydWVcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnN0YWdlTW9yZSwgeCwgYSk7XFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocCA9PSAncmMnKSB7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMucmNhTW9yZVt4XSA/IGZhbHNlIDogdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucmNhTW9yZSwgeCwgYSk7XFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMucHJvYmxlbXNNb3JlW3hdID8gZmFsc2UgOiB0cnVlXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wcm9ibGVtc01vcmUsIHgsIGEpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLmFkZGl0aW9uYWxNb3JlW3hdID8gZmFsc2UgOiB0cnVlXFxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmFkZGl0aW9uYWxNb3JlLCB4LCBhKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLmxvYWRUaWNrZXRzKCk7XFxuICAgIH0sXFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcXG4gICAgICAgIGF4aW9zLmdldChcXFwiYXBpL2NvbXBsYWludC9saXN0LzFcXFwiKVxcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5DYXRlZ29yeTtcXG4gICAgICAgICAgICAgICAgdGhpcy5zaXRlcyA9IHJlcy5kYXRhLmRhdGEuc2l0ZXM7XFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIGF4aW9zLmdldChcXFwiL2FwaS9jb21wbGFpbnQvbGlzdC8xXFxcIikudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS52ZW5kb3JzO1xcbiAgICAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2l0ZXMgPSByZXNwb25zZS5kYXRhLmRhdGEuc2l0ZXM7XFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVkX3VzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLmNyZWF0ZWRfdXNlcnM7XFxuICAgICAgICB9KS5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oJ09oLiBTb21ldGhpbmcgd2VudCB3cm9uZycpKTtcXG4gICAgfSxcXG4gICAgd2F0Y2g6IHtcXG4gICAgICAgIGFzeW5jICdmb3JtLnN1Yl9jYXRlZ29yeV9pZCcobiwgbykge1xcbiAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBhc3luYyAnZm9ybS5zaXRlX2lkJyhuLCBvKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgICdmb3JtLmNhdGVnb3J5X2lkJzoge1xcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuLCBvKSB7XFxuXFxuICAgICAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9jb21wbGFpbnQvbGlzdC8xL1xcXCIgKyBuKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWVcXG4gICAgICAgIH0sXFxuXFxuICAgIH0sXFxufVxcbjwvc2NyaXB0PlxcbjxzdHlsZT5cXG4ucm1vcmUge1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwic2lkZWJhci1tb2RhbFwiLCBjbGFzczogeyBhY3RpdmU6IF92bS5pc09wZW4gfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VTaWRlTW9kYWwgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpbWVzXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxN3B4XCIsIGNvbG9yOiBcImJsYWNrXCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgb246IHsgY2xpY2s6IF92bS5jbG9zZVNpZGVNb2RhbCB9IH0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00NjFhNDU4OVwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNYXN0ZXIgUmVwb3J0XCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRvb2xzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kZ2F0ZS5oYXNQZXJtaXNzaW9uKFwiY2FuX2Rvd25sb2FkX21hc3Rlcl9yZXBvcnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3dubG9hZC1leGNlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoOiBfdm0uZXhwb3J0X2NzdixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uanNvbl9maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlLWdlbmVyYXRlXCI6IF92bS5zdGFydERvd25sb2FkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJlZm9yZS1maW5pc2hcIjogX3ZtLmZpbmlzaERvd25sb2FkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQ6IFwiTXkgV29ya3NoZWV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY3N2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFzdGVyX3JlcG9ydC5jc3ZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwb3J0IENTVlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1ibHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub3BlblNpZGVNb2RhbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXNsaWRlcnMtaCBtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgRmlsdGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcIlNpZGViYXJNb2RhbFwiLCB7IHJlZjogXCJzaWRlYmFyTW9kYWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1zbGlkZXJzLWggbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMjJweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgRmlsdGVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGF1dG9jb21wbGV0ZTogXCJvZmZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldFJlc3VsdHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtYXV0byBjb2wtY3VzdG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibWFjaGluZV9pZFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRkFSIE5vXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldC1vcHRpb24tbGFiZWxcIjogX3ZtLmdldExhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2VhcmNoX21hY2hpbmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIG1hY2hpbmVzIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFjaGluZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gubWFjaGluZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcIm1hY2hpbmVfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gubWFjaGluZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1hdXRvIGNvbC1jdXN0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJtYWNoaW5lX2lkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZWFyY2ggVGlja2V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnRpY2tldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC50aWNrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgdGlja2V0IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRpY2tldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2gudGlja2V0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aWNrZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWF1dG8gY29sLWN1c3RvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm1hY2hpbmVfaWRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBTaXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNpdGVfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2VhcmNoX3NpdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBTaXRlLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaXRlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5zaXRlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwic2l0ZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5zaXRlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWF1dG8gY29sLWN1c3RvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm1hY2hpbmVfaWRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBTdGF0dXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2l0ZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wiT3BlblwiLCBcIkNsb3NlZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgU3RhdHVzLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInN0YXR1c1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtYXV0byBjb2wtY3VzdG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibWFjaGluZV9pZFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ3JlYXRlZCBieVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmNyZWF0ZWRfdXNlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNyZWF0ZWQgYnkuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNyZWF0ZWRfYnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmNyZWF0ZWRfYnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJjcmVhdGVkX2J5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmNyZWF0ZWRfYnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtYXV0byBjb2wtY3VzdG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibWFjaGluZV9pZFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGlja2V0IFR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUGVyaW9kaWMgTWFpbnRlbmFuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQnJlYWtkb3duIE1haW50ZW5hbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlRpY2tldCBUeXBlLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0aWNrZXRfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gudGlja2V0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJ0aWNrZXRfdHlwZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC50aWNrZXRfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1hdXRvIGNvbC1jdXN0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJtYWNoaW5lX2lkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGcm9tIERhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkYXRldGltZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS16b25lXCI6IFwiQXNpYS9Lb2xrYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmNyZWF0ZWRfZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImNyZWF0ZWRfZnJvbVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jcmVhdGVkX2Zyb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtYXV0byBjb2wtY3VzdG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibWFjaGluZV9pZFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVG8gRGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRhdGV0aW1lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlLXpvbmVcIjogXCJBc2lhL0tvbGthdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guY3JlYXRlZF90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImNyZWF0ZWRfdG9cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guY3JlYXRlZF90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1hdXRvIGNvbC1jdXN0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJtYWNoaW5lX2lkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUQVQgRnJvbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC50YXRfZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC50YXRfZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlRBVCBGcm9tIC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2gudGF0X2Zyb20gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhdF9mcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1hdXRvIGNvbC1jdXN0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJtYWNoaW5lX2lkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUQVQgVG9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gudGF0X3RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnRhdF90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlRBVCBUbyAuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VhcmNoLnRhdF90byB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGF0X3RvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1hdXRvIGNvbC1jdXN0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJtYWNoaW5lX2lkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb21wbGFpbnQgbmF0dXJlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNpdGVfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcIk1ham9yXCIsIFwiTWlub3JcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IENvbXBsYWludCBOYXR1cmUuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNvbXBsYWludF9uYXR1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmNvbXBsYWludF9uYXR1cmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcGxhaW50X25hdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmNvbXBsYWludF9uYXR1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNiBtYi0yIHByLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2VhcmNoXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02IG1iLTIgcGwtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2V0X2ZpbHRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZXNldFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSB0aWNrZXRMc3RUYmwgdGFibGUtcmVzcG9uc2l2ZSBwLTBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5UaWNrZXRzLmRhdGEsIGZ1bmN0aW9uKHRpY2tldCwgeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogdGlja2V0LmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljU3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy1ib3R0b21cIjogXCIxMHB4ICFpbXBvcnRhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGlja2V0LnRpY2tldF9ubykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidHJ1bmNhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCIxNTBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiB0aWNrZXQuc2l0ZV9uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0aWNrZXQuc2l0ZV9uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0cnVuY2F0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5tYWNoaW5lLm1hY2hpbmVfb3BlcmF0b3JzICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGlja2V0Lm1hY2hpbmUubWFjaGluZV9vcGVyYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3BlcmF0b3JfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0Lm1hY2hpbmUubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5tYWNoaW5lLm1hY2hpbmVfbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGlja2V0Lm1hY2hpbmUubWFjaGluZV9tb2RlbC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZpZXdfc2l0ZV9kZXRhaWxzKHRpY2tldC5tYWNoaW5lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC5mYXJfbm8pKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQuY3JlYXRlZF9ieV9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0LmNvbXBsYWludF9uYXR1cmUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRpY2tldC5zdGF0dXNfZHVyaW5nX2NvbXBsYWludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC50aWNrZXRfdHlwZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidHJ1bmNhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IHRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aWNrZXQucHJvYmxlbV9kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQucHJvYmxlbXMgJiYgdGlja2V0LnByb2JsZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5fbCh0aWNrZXQucHJvYmxlbXMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aWNrZXQucHJvYmxlbXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJwXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhpdGVtLnByb2JsZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5zdGF0dXMudG9Mb3dlckNhc2UoKSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkIGJ5IHVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aWNrZXQuc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidHJ1bmNhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5zdGF0dXMgPT0gXCJDbG9zZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGlja2V0LmN1cnJlbnRfc3RhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5zdGF0dXMgPT0gXCJDbG9zZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGlja2V0LmN1cnJlbnRfc3RhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRydW5jYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS5fZihcIm15RGF0ZVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5zdGF0dXMgPT0gXCJDbG9zZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGlja2V0Lmxhc3Rfc3RhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aWNrZXQubGFzdF9zdGFnZS5zdGFnZV9kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcIm15RGF0ZVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LnN0YXR1cyA9PSBcIkNsb3NlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGlja2V0Lmxhc3Rfc3RhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRpY2tldC5sYXN0X3N0YWdlLnN0YWdlX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRydW5jYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuc3RhdHVzICE9IFwiQ2xvc2VkXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5sYXN0X3N0YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGlja2V0Lmxhc3Rfc3RhZ2UuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuc3RhdHVzICE9IFwiQ2xvc2VkXCIgJiYgdGlja2V0Lmxhc3Rfc3RhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGlja2V0Lmxhc3Rfc3RhZ2UuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0Lm1hY2hpbmVfc3RhdHVzKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRpY2tldC5yY2EgPyB0aWNrZXQucmNhIDogXCItXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fZihcIm15RGF0ZVwiKSh0aWNrZXQuY3JlYXRlZF9hdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fZihcIm15RGF0ZVwiKSh0aWNrZXQubGlrZWx5X2RhdGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX2YoXCJteURhdGVcIikodGlja2V0LnJldmVyc2lvbl9kYXRlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0cnVuY2F0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogdGlja2V0LnJldmVyc2lvbl9yZWFzb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC5yZXZlcnNpb25fcmVhc29uKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9mKFwibXlEYXRlXCIpKHRpY2tldC5hY3R1YWxfZGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRpY2tldC5hY3R1YWxfZGF0ZSA/IHRpY2tldC50YXQgOiBcIi1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LmFkX2VzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LmFkX2VzdGltYXRlZF9zZXJ2aWNlX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b0N1cnJlbmN5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9vdGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkYXRhOiBfdm0uVGlja2V0cywgbGltaXQ6IDEwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgXCJwYWdpbmF0aW9uLWNoYW5nZS1wYWdlXCI6IF92bS5nZXRSZXN1bHRzIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiTWFjaGluZVBvcFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGlkOiBcIk1hY2hpbmVTaXRlTW9kYWwzXCIsIG1hY2hpbmU6IF92bS5wbU1vZGFsRGF0YSB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljU3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQVRNIElEXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkRvY2tldCBOb1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJEYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkN1c3RvZGlhblwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUYWcgVGltZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJMYWcgVGltZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDb3VudGRvd24oRGF5cyBoaDptbTpzcylcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU3RhdHVzXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ5ODQxMTNlXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ2MWE0NTg5XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2lkZUJhck1vZGFsLnZ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJhMDc3MzhkNFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ2MWE0NTg5XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2lkZUJhck1vZGFsLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDYxYTQ1ODlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaWRlQmFyTW9kYWwudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludExpc3QudnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQ1ODVhMmUwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludExpc3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50TGlzdC52dWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludExpc3QudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbXBsYWludExpc3QudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db21wbGFpbnRMaXN0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00OTg0MTEzZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db21wbGFpbnRMaXN0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXENvbXBsYWludExpc3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ5ODQxMTNlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDk4NDExM2VcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDYxYTQ1ODlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaWRlQmFyTW9kYWwudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1NpZGVCYXJNb2RhbC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1NpZGVCYXJNb2RhbC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDYxYTQ1ODlcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TaWRlQmFyTW9kYWwudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTQ2MWE0NTg5XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcU2lkZUJhck1vZGFsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NjFhNDU4OVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ2MWE0NTg5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=